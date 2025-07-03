#!/usr/bin/env node
// Publication Editor Backend Server
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Paths
const WEBSITE_ROOT = path.join(__dirname, '../../');
const PUBLICATIONS_DIR = path.join(WEBSITE_ROOT, 'src/data/publications');
const VALIDATION_REPORT = path.join(WEBSITE_ROOT, 'link-validation-report.json');

// Store for undo functionality
let changeHistory = [];

/**
 * Load validation report
 */
async function loadValidationReport() {
  try {
    const data = await fs.readFile(VALIDATION_REPORT, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading validation report:', error);
    throw error;
  }
}

/**
 * Load publication data from year file
 */
async function loadPublicationYear(year) {
  try {
    const filePath = path.join(PUBLICATIONS_DIR, `${year}.json`);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading year ${year}:`, error);
    return [];
  }
}

/**
 * Save publication data to year file
 */
async function savePublicationYear(year, publications) {
  try {
    const filePath = path.join(PUBLICATIONS_DIR, `${year}.json`);
    
    // Create backup before saving
    const backupPath = path.join(PUBLICATIONS_DIR, `${year}.json.backup`);
    try {
      await fs.copyFile(filePath, backupPath);
    } catch (e) {
      // Backup failed, but continue
    }
    
    await fs.writeFile(filePath, JSON.stringify(publications, null, 2));
    console.log(`✅ Saved ${publications.length} publications to ${year}.json`);
    return true;
  } catch (error) {
    console.error(`Error saving year ${year}:`, error);
    throw error;
  }
}

/**
 * Find publication in year file by matching link
 */
function findPublicationInYear(publications, targetLink) {
  return publications.findIndex(pub => pub.link === targetLink);
}

// Routes

/**
 * GET /api/validation-data
 * Returns all validation data for the editor
 */
app.get('/api/validation-data', async (req, res) => {
  try {
    const validationData = await loadValidationReport();
    
    // Filter to only publications that need review
    const needsReview = validationData.publications.filter(pub => 
      pub.status === 'needs_review'
    );
    
    // Sort by title similarity (lowest first)
    needsReview.sort((a, b) => {
      const simA = a.validation?.titleSimilarity || 0;
      const simB = b.validation?.titleSimilarity || 0;
      return simA - simB;
    });
    
    // Categorize by priority
    const categories = {
      high: needsReview.filter(p => (p.validation?.titleSimilarity || 0) < 0.2),
      medium: needsReview.filter(p => {
        const sim = p.validation?.titleSimilarity || 0;
        return sim >= 0.2 && sim < 0.4;
      }),
      low: needsReview.filter(p => {
        const sim = p.validation?.titleSimilarity || 0;
        return sim >= 0.4;
      })
    };
    
    res.json({
      summary: validationData.summary,
      categories,
      total: needsReview.length
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/update-publication
 * Updates a single publication
 */
app.post('/api/update-publication', async (req, res) => {
  try {
    const { publicationId, updates, originalLink } = req.body;
    
    if (!publicationId || !updates || !originalLink) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Extract year from publication ID (e.g., "2024-012" -> 2024)
    const year = publicationId.split('-')[0];
    
    // Load current year data
    const publications = await loadPublicationYear(year);
    
    // Find publication by link (more reliable than index)
    const pubIndex = findPublicationInYear(publications, originalLink);
    
    if (pubIndex === -1) {
      return res.status(404).json({ error: 'Publication not found' });
    }
    
    // Store original for undo
    const original = { ...publications[pubIndex] };
    changeHistory.push({
      action: 'update',
      publicationId,
      year,
      index: pubIndex,
      original,
      timestamp: new Date().toISOString()
    });
    
    // Apply updates
    if (updates.title) publications[pubIndex].title = updates.title;
    if (updates.authors) publications[pubIndex].authors = updates.authors;
    if (updates.journal) publications[pubIndex].journal = updates.journal;
    
    // Save to file
    await savePublicationYear(year, publications);
    
    res.json({ 
      success: true, 
      updated: publications[pubIndex],
      changeId: changeHistory.length - 1
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/undo-change
 * Undoes the last change
 */
app.post('/api/undo-change', async (req, res) => {
  try {
    const { changeId } = req.body;
    
    if (changeHistory.length === 0) {
      return res.status(400).json({ error: 'No changes to undo' });
    }
    
    const change = changeHistory[changeId || changeHistory.length - 1];
    if (!change) {
      return res.status(400).json({ error: 'Change not found' });
    }
    
    // Load year data
    const publications = await loadPublicationYear(change.year);
    
    // Restore original
    publications[change.index] = change.original;
    
    // Save
    await savePublicationYear(change.year, publications);
    
    // Remove from history
    changeHistory.splice(changeId || changeHistory.length - 1, 1);
    
    res.json({ success: true, restored: change.original });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/change-history
 * Returns recent changes for undo functionality
 */
app.get('/api/change-history', (req, res) => {
  res.json({
    changes: changeHistory.slice(-20), // Last 20 changes
    total: changeHistory.length
  });
});

/**
 * GET /api/stats
 * Returns current progress statistics
 */
app.get('/api/stats', async (req, res) => {
  try {
    const validationData = await loadValidationReport();
    const needsReview = validationData.publications.filter(pub => 
      pub.status === 'needs_review'
    );
    
    res.json({
      total: validationData.summary.total,
      valid: validationData.summary.valid,
      needsReview: needsReview.length,
      invalid: validationData.summary.invalid,
      changesApplied: changeHistory.length
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve the editor interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Publication Editor running at http://localhost:${PORT}`);
  console.log(`📊 Managing publications from: ${PUBLICATIONS_DIR}`);
  console.log(`📋 Using validation report: ${VALIDATION_REPORT}`);
  console.log('');
  console.log('🔧 Ready to edit publication titles and authors!');
});