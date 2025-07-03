#!/usr/bin/env node
// Script to fix mixed-up publication entries by separating them

import fs from 'fs/promises';
import path from 'path';

class MixedEntryFixer {
  constructor() {
    this.publicationsDir = './src/data/publications';
    this.fixedCount = 0;
    this.backupCreated = false;
  }

  async fixAllMixedEntries() {
    try {
      console.log('🔧 Starting mixed entry fixes...\n');
      
      // Create backup first
      await this.createBackup();
      
      // Load the analysis data
      const analysisData = JSON.parse(await fs.readFile('./mixed-entries-data.json', 'utf8'));
      
      // Focus on critical and high priority mixed entries first
      const criticalEntries = analysisData.mixedEntries.filter(e => 
        e.severity === 'critical' || e.severity === 'high'
      );
      
      console.log(`🎯 Focusing on ${criticalEntries.length} critical/high priority mixed entries\n`);
      
      // Group by file for efficient processing
      const byFile = {};
      criticalEntries.forEach(entry => {
        if (!byFile[entry.file]) byFile[entry.file] = [];
        byFile[entry.file].push(entry);
      });
      
      // Process each file
      for (const [filename, entries] of Object.entries(byFile)) {
        await this.fixFileEntries(filename, entries);
      }
      
      console.log(`\n✅ Fixed ${this.fixedCount} mixed entries`);
      console.log('📄 Backup created at: backup-publications/');
      
    } catch (error) {
      console.error('❌ Error fixing mixed entries:', error.message);
    }
  }

  async createBackup() {
    if (this.backupCreated) return;
    
    try {
      await fs.mkdir('./backup-publications', { recursive: true });
      
      const files = await fs.readdir(this.publicationsDir);
      for (const file of files) {
        if (file.endsWith('.json')) {
          const source = path.join(this.publicationsDir, file);
          const dest = path.join('./backup-publications', file);
          await fs.copyFile(source, dest);
        }
      }
      
      console.log('💾 Created backup of all publication files');
      this.backupCreated = true;
      
    } catch (error) {
      console.error('❌ Error creating backup:', error.message);
      throw error;
    }
  }

  async fixFileEntries(filename, entries) {
    try {
      console.log(`🔧 Fixing ${filename} (${entries.length} mixed entries)`);
      
      const filePath = path.join(this.publicationsDir, filename);
      const publications = JSON.parse(await fs.readFile(filePath, 'utf8'));
      
      // Sort entries by index in descending order to avoid index shifting issues
      entries.sort((a, b) => b.index - a.index);
      
      let newPublications = [];
      let modifications = 0;
      
      for (const entry of entries) {
        const fixedPubs = this.separateMixedEntry(entry.publication, entry.issues);
        if (fixedPubs.length > 1) {
          console.log(`  ✂️  Split index ${entry.index} into ${fixedPubs.length} publications`);
          
          // Replace the original entry with the separated publications
          publications.splice(entry.index, 1, ...fixedPubs);
          modifications++;
        } else if (fixedPubs.length === 1) {
          // Clean up the single entry
          publications[entry.index] = fixedPubs[0];
          console.log(`  🧹 Cleaned up index ${entry.index}`);
          modifications++;
        }
      }
      
      if (modifications > 0) {
        // Save the fixed file
        await fs.writeFile(filePath, JSON.stringify(publications, null, 2));
        console.log(`  💾 Saved ${filename} with ${modifications} fixes`);
        this.fixedCount += modifications;
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filename}:`, error.message);
    }
  }

  separateMixedEntry(publication, issues) {
    try {
      const result = [];
      
      // Check if title contains embedded DOI and full citation
      if (issues.some(i => i.includes('Title contains embedded DOI link'))) {
        result.push(...this.extractFromTitle(publication));
      }
      
      // Check if authors field contains journal info (swap detected)
      if (issues.some(i => i.includes('Authors field contains journal information'))) {
        result.push(...this.fixFieldSwaps(publication));
      }
      
      // If no specific patterns matched, clean up the existing entry
      if (result.length === 0) {
        result.push(this.cleanupEntry(publication));
      }
      
      return result.filter(pub => pub && pub.title && pub.title.trim());
      
    } catch (error) {
      console.warn('⚠️ Failed to separate entry:', error.message);
      return [this.cleanupEntry(publication)];
    }
  }

  extractFromTitle(publication) {
    const title = publication.title;
    if (!title) return [publication];
    
    try {
      // Pattern: Title. Authors (year). Journal details. DOI
      const match = title.match(/^(.+?)\.\s+([A-Z][^.]+)\.\s+(.+?)\.\s+(https:\/\/doi\.org\/[^\s]+)/);
      
      if (match) {
        const [, titlePart, authorsPart, journalPart, doiPart] = match;
        
        // Create first publication from title
        const pub1 = {
          title: titlePart.trim(),
          authors: authorsPart.trim(),
          journal: journalPart.trim(),
          link: doiPart.trim()
        };
        
        // Create second publication from other fields if they contain different info
        const pub2 = {
          title: this.extractSecondTitle(publication),
          authors: publication.authors || '',
          journal: publication.journal || '',
          link: publication.link || ''
        };
        
        // Only return second publication if it has different content
        if (pub2.title && pub2.title !== pub1.title && pub2.link !== pub1.link) {
          return [pub1, pub2];
        } else {
          return [pub1];
        }
      }
      
      // Fallback: try to clean up the existing entry
      return [this.cleanupEntry(publication)];
      
    } catch (error) {
      console.warn('⚠️ Failed to extract from title:', error.message);
      return [this.cleanupEntry(publication)];
    }
  }

  extractSecondTitle(publication) {
    // Try to extract a title from authors field if it contains title-like content
    if (publication.authors && publication.authors.length > 100) {
      const match = publication.authors.match(/^([^.]+)/);
      return match ? match[1].trim() : '';
    }
    return '';
  }

  fixFieldSwaps(publication) {
    try {
      // If authors field contains journal info, it might be a field swap
      if (publication.authors && publication.authors.match(/(Journal|Letters|Review|Proceedings)/)) {
        return [{
          title: publication.title || '',
          authors: publication.journal || '', // Swap: use journal as authors
          journal: publication.authors || '', // Swap: use authors as journal
          link: publication.link || ''
        }];
      }
      
      return [this.cleanupEntry(publication)];
      
    } catch (error) {
      console.warn('⚠️ Failed to fix field swaps:', error.message);
      return [this.cleanupEntry(publication)];
    }
  }

  cleanupEntry(publication) {
    try {
      let title = publication.title || '';
      let authors = publication.authors || '';
      let journal = publication.journal || '';
      let link = publication.link || '';
      
      // Remove embedded DOIs from title
      title = title.replace(/\s*https:\/\/doi\.org\/[^\s,)]+/g, '');
      
      // Remove year and citation info from title
      title = title.replace(/\.\s+[A-Z][^.]*\(\d{4}\)[^.]*\./g, '.');
      
      // Clean up extra periods and spaces
      title = title.replace(/\.+/g, '.').replace(/\.\s*$/, '').trim();
      
      // Fix malformed DOI links
      if (link && link.includes('doi.org') && link.match(/\/\d+$/)) {
        link = link.replace(/\/\d+$/, '');
      }
      
      return {
        title: title,
        authors: authors,
        journal: journal,
        link: link
      };
      
    } catch (error) {
      console.warn('⚠️ Failed to cleanup entry:', error.message);
      return publication;
    }
  }
}

// Run the fixer
const fixer = new MixedEntryFixer();
await fixer.fixAllMixedEntries();