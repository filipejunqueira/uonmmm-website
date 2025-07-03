#!/usr/bin/env node
// Script to fix backend update failures by ensuring all publications have required fields and proper structure

import fs from 'fs/promises';
import path from 'path';

class BackendFailureFixer {
  constructor() {
    this.publicationsDir = './src/data/publications';
    this.fixedCount = 0;
    this.backupCreated = false;
    this.requiredFields = ['title', 'authors', 'journal', 'link'];
  }

  async fixAllBackendFailures() {
    try {
      console.log('🔧 Starting backend failure fixes...\n');
      
      // Create backup first
      await this.createBackup();
      
      // Process all publication files
      const files = await fs.readdir(this.publicationsDir);
      const jsonFiles = files.filter(file => file.endsWith('.json'));
      
      console.log(`📂 Processing ${jsonFiles.length} publication files\n`);
      
      for (const file of jsonFiles) {
        await this.fixFileBackendIssues(file);
      }
      
      console.log(`\n✅ Fixed ${this.fixedCount} backend failure issues`);
      console.log('📄 Backup created at: backup-publications-backend/');
      
    } catch (error) {
      console.error('❌ Error fixing backend failures:', error.message);
    }
  }

  async createBackup() {
    if (this.backupCreated) return;
    
    try {
      await fs.mkdir('./backup-publications-backend', { recursive: true });
      
      const files = await fs.readdir(this.publicationsDir);
      for (const file of files) {
        if (file.endsWith('.json')) {
          const source = path.join(this.publicationsDir, file);
          const dest = path.join('./backup-publications-backend', file);
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

  async fixFileBackendIssues(filename) {
    try {
      const filePath = path.join(this.publicationsDir, filename);
      const publications = JSON.parse(await fs.readFile(filePath, 'utf8'));
      
      let modifications = 0;
      const backendIssues = [];
      
      // Check each publication for backend failure issues
      publications.forEach((pub, index) => {
        const issues = this.identifyBackendIssues(pub, index);
        if (issues.length > 0) {
          backendIssues.push({ index, publication: pub, issues });
        }
      });
      
      if (backendIssues.length > 0) {
        console.log(`🔧 Fixing ${filename} (${backendIssues.length} backend issues)`);
        
        // Fix each issue
        backendIssues.forEach(({ index, publication, issues }) => {
          const fixedPub = this.fixBackendIssues(publication, issues);
          publications[index] = fixedPub;
          modifications++;
          
          console.log(`  🔨 Fixed index ${index}: ${issues.join(', ')}`);
        });
        
        // Save the fixed file
        await fs.writeFile(filePath, JSON.stringify(publications, null, 2));
        console.log(`  💾 Saved ${filename} with ${modifications} fixes`);
        this.fixedCount += modifications;
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filename}:`, error.message);
    }
  }

  identifyBackendIssues(publication, index) {
    const issues = [];
    
    // Check for missing required fields
    this.requiredFields.forEach(field => {
      if (!publication[field] || publication[field].toString().trim() === '') {
        issues.push(`Missing ${field}`);
      }
    });
    
    // Check for fields that are too long (would break backend)
    if (publication.title && publication.title.length > 500) {
      issues.push('Title too long (>500 chars)');
    }
    
    if (publication.authors && publication.authors.length > 1000) {
      issues.push('Authors too long (>1000 chars)');
    }
    
    // Check for malformed links
    if (publication.link) {
      if (!publication.link.startsWith('http') && !publication.link.startsWith('doi:')) {
        issues.push('Invalid link format');
      }
      
      // Check for incomplete DOI links
      if (publication.link.includes('doi.org') && publication.link.match(/\/\d+$/)) {
        issues.push('Incomplete DOI link');
      }
    }
    
    // Check for missing year (required for proper indexing)
    if (!publication.year) {
      issues.push('Missing year field');
    }
    
    // Check for invalid characters that would break JSON
    this.requiredFields.forEach(field => {
      if (publication[field] && typeof publication[field] === 'string') {
        if (publication[field].includes('\u0000') || publication[field].includes('\r\n')) {
          issues.push(`Invalid characters in ${field}`);
        }
      }
    });
    
    return issues;
  }

  fixBackendIssues(publication, issues) {
    const fixed = { ...publication };
    
    // Fix missing required fields
    this.requiredFields.forEach(field => {
      if (!fixed[field] || fixed[field].toString().trim() === '') {
        fixed[field] = this.generateDefaultValue(field, fixed);
      }
    });
    
    // Fix title too long
    if (fixed.title && fixed.title.length > 500) {
      // Try to extract just the title part
      const titleMatch = fixed.title.match(/^([^.]+)/);
      if (titleMatch && titleMatch[1].length < 500) {
        fixed.title = titleMatch[1].trim();
      } else {
        fixed.title = fixed.title.substring(0, 497) + '...';
      }
    }
    
    // Fix authors too long
    if (fixed.authors && fixed.authors.length > 1000) {
      // Try to extract just author names
      const authorMatch = fixed.authors.match(/^([^(]+)/);
      if (authorMatch && authorMatch[1].length < 1000) {
        fixed.authors = authorMatch[1].trim();
      } else {
        fixed.authors = fixed.authors.substring(0, 997) + '...';
      }
    }
    
    // Fix malformed links
    if (fixed.link && !fixed.link.startsWith('http') && !fixed.link.startsWith('doi:')) {
      if (fixed.link.includes('doi.org')) {
        fixed.link = `https://${fixed.link}`;
      } else if (fixed.link.match(/^10\.\d+/)) {
        fixed.link = `https://doi.org/${fixed.link}`;
      }
    }
    
    // Fix incomplete DOI links
    if (fixed.link && fixed.link.includes('doi.org') && fixed.link.match(/\/\d+$/)) {
      fixed.link = fixed.link.replace(/\/\d+$/, '');
    }
    
    // Fix missing year
    if (!fixed.year) {
      // Try to extract year from title or other fields
      const yearMatch = (fixed.title + ' ' + fixed.authors + ' ' + fixed.journal).match(/\b(19|20)\d{2}\b/);
      if (yearMatch) {
        fixed.year = parseInt(yearMatch[0]);
      } else {
        fixed.year = 2000; // Default fallback
      }
    }
    
    // Fix invalid characters
    this.requiredFields.forEach(field => {
      if (fixed[field] && typeof fixed[field] === 'string') {
        fixed[field] = fixed[field]
          .replace(/\u0000/g, '')
          .replace(/\r\n/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
      }
    });
    
    return fixed;
  }

  generateDefaultValue(field, publication) {
    switch (field) {
      case 'title':
        return 'Untitled Publication';
      case 'authors':
        return 'Unknown Author';
      case 'journal':
        return 'Unknown Journal';
      case 'link':
        return '#'; // Placeholder link
      default:
        return '';
    }
  }
}

// Run the fixer
const fixer = new BackendFailureFixer();
await fixer.fixAllBackendFailures();