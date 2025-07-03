#!/usr/bin/env node
// Script to find and analyze mixed-up publication entries

import fs from 'fs/promises';
import path from 'path';

class MixedEntryFinder {
  constructor() {
    this.publicationsDir = './src/data/publications';
    this.mixedEntries = [];
    this.backendFailures = [];
  }

  async analyzeAllFiles() {
    try {
      console.log('🔍 Analyzing publication files for mixed entries and backend failures...\n');
      
      const files = await fs.readdir(this.publicationsDir);
      const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json' && f !== 'search-index.json');
      
      for (const file of jsonFiles) {
        await this.analyzeFile(file);
      }
      
      console.log('\n📊 Analysis Summary:');
      console.log(`  🔴 Mixed entries found: ${this.mixedEntries.length}`);
      console.log(`  ⚠️  Backend failure risks: ${this.backendFailures.length}`);
      
      await this.generateReport();
      
    } catch (error) {
      console.error('❌ Error analyzing files:', error.message);
    }
  }

  async analyzeFile(filename) {
    try {
      const filePath = path.join(this.publicationsDir, filename);
      const content = await fs.readFile(filePath, 'utf8');
      const publications = JSON.parse(content);
      const year = filename.replace('.json', '');
      
      console.log(`📄 Analyzing ${filename} (${publications.length} publications)`);
      
      publications.forEach((pub, index) => {
        this.checkForMixedEntry(pub, year, index, filename);
        this.checkForBackendFailure(pub, year, index, filename);
      });
      
    } catch (error) {
      console.error(`❌ Error analyzing ${filename}:`, error.message);
    }
  }

  checkForMixedEntry(pub, year, index, filename) {
    const issues = [];
    
    // Check if title contains full citation with DOI
    if (pub.title && pub.title.includes('https://doi.org/')) {
      issues.push('Title contains embedded DOI link');
    }
    
    // Check if title contains author names and publication info
    if (pub.title && pub.title.match(/[A-Z][a-z]+,\s*[A-Z].*\(\d{4}\)/)) {
      issues.push('Title contains full citation with authors and year');
    }
    
    // Check if authors field is empty but title has author info
    if ((!pub.authors || pub.authors.trim() === '') && pub.title && pub.title.includes(',')) {
      issues.push('Authors field empty but title contains author information');
    }
    
    // Check if authors field contains journal information
    if (pub.authors && pub.authors.match(/(Journal|Letters|Review|Proceedings|Science|Nature|Physical|Applied|Chemical)/i)) {
      issues.push('Authors field contains journal information');
    }
    
    // Check for DOI mismatch between title and link
    const titleDoi = this.extractDoiFromText(pub.title);
    const linkDoi = this.extractDoiFromText(pub.link);
    
    if (titleDoi && linkDoi && titleDoi !== linkDoi) {
      issues.push(`DOI mismatch: title has ${titleDoi}, link has ${linkDoi}`);
    }
    
    // Check if journal field contains publication details that don't match
    if (pub.journal && pub.journal.match(/\d+\(\d+\),\s*\d+/) && pub.title && pub.title.match(/\d+\(\d+\),\s*\d+/)) {
      const titleVolume = pub.title.match(/\d+\(\d+\),\s*\d+/)[0];
      const journalVolume = pub.journal.match(/\d+\(\d+\),\s*\d+/)[0];
      if (titleVolume !== journalVolume) {
        issues.push(`Volume/page mismatch between title and journal fields`);
      }
    }
    
    if (issues.length > 0) {
      this.mixedEntries.push({
        file: filename,
        year: year,
        index: index,
        publication: pub,
        issues: issues,
        severity: this.calculateSeverity(issues)
      });
    }
  }

  checkForBackendFailure(pub, year, index, filename) {
    const risks = [];
    
    // Check for empty required fields
    if (!pub.title || pub.title.trim() === '') {
      risks.push('Empty title field');
    }
    
    if (!pub.authors || pub.authors.trim() === '') {
      risks.push('Empty authors field');
    }
    
    if (!pub.link || pub.link.trim() === '') {
      risks.push('Empty link field');
    }
    
    // Check for malformed links
    if (pub.link && !pub.link.match(/^https?:\/\//)) {
      risks.push('Malformed link (missing protocol)');
    }
    
    // Check for DOI links with extra path segments
    if (pub.link && pub.link.includes('doi.org') && pub.link.match(/\/\d+$/)) {
      risks.push('DOI link has extra numeric suffix');
    }
    
    // Check for extremely long fields that might cause parsing issues
    if (pub.title && pub.title.length > 500) {
      risks.push('Title field exceptionally long (may contain multiple papers)');
    }
    
    if (risks.length > 0) {
      this.backendFailures.push({
        file: filename,
        year: year,
        index: index,
        publication: pub,
        risks: risks,
        severity: risks.length > 2 ? 'high' : risks.length > 1 ? 'medium' : 'low'
      });
    }
  }

  extractDoiFromText(text) {
    if (!text) return null;
    const match = text.match(/(?:https?:\/\/)?(?:dx\.)?doi\.org\/([^\s,\)]+)/);
    return match ? match[1] : null;
  }

  calculateSeverity(issues) {
    if (issues.some(i => i.includes('DOI mismatch') || i.includes('full citation'))) {
      return 'critical';
    }
    if (issues.length >= 3) return 'high';
    if (issues.length >= 2) return 'medium';
    return 'low';
  }

  async generateReport() {
    // Sort by severity
    this.mixedEntries.sort((a, b) => {
      const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    });
    
    this.backendFailures.sort((a, b) => {
      const severityOrder = { high: 3, medium: 2, low: 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    });
    
    let report = '# Mixed Entry and Backend Failure Analysis Report\n\n';
    report += `**Analysis Date:** ${new Date().toISOString()}\n\n`;
    
    report += '## Summary\n\n';
    report += `- **Mixed Entries Found:** ${this.mixedEntries.length}\n`;
    report += `- **Backend Failure Risks:** ${this.backendFailures.length}\n\n`;
    
    // Mixed entries section
    if (this.mixedEntries.length > 0) {
      report += '## 🔴 Mixed Entries (CRITICAL FIXES NEEDED)\n\n';
      
      const bySeverity = {};
      this.mixedEntries.forEach(entry => {
        if (!bySeverity[entry.severity]) bySeverity[entry.severity] = [];
        bySeverity[entry.severity].push(entry);
      });
      
      ['critical', 'high', 'medium', 'low'].forEach(severity => {
        if (bySeverity[severity]) {
          report += `### ${severity.toUpperCase()} Priority (${bySeverity[severity].length} entries)\n\n`;
          
          bySeverity[severity].slice(0, 10).forEach(entry => {
            report += `#### ${entry.file} - Index ${entry.index}\n`;
            report += `**Issues:** ${entry.issues.join(', ')}\n\n`;
            report += `**Title:** ${entry.publication.title?.substring(0, 200)}...\n`;
            report += `**Authors:** ${entry.publication.authors?.substring(0, 100)}...\n`;
            report += `**Journal:** ${entry.publication.journal?.substring(0, 100)}...\n`;
            report += `**Link:** ${entry.publication.link}\n\n`;
          });
        }
      });
    }
    
    // Backend failures section
    if (this.backendFailures.length > 0) {
      report += '## ⚠️ Backend Failure Risks\n\n';
      
      const byRiskLevel = {};
      this.backendFailures.forEach(failure => {
        if (!byRiskLevel[failure.severity]) byRiskLevel[failure.severity] = [];
        byRiskLevel[failure.severity].push(failure);
      });
      
      ['high', 'medium', 'low'].forEach(severity => {
        if (byRiskLevel[severity]) {
          report += `### ${severity.toUpperCase()} Risk (${byRiskLevel[severity].length} entries)\n\n`;
          
          byRiskLevel[severity].slice(0, 10).forEach(failure => {
            report += `#### ${failure.file} - Index ${failure.index}\n`;
            report += `**Risks:** ${failure.risks.join(', ')}\n`;
            report += `**Link:** ${failure.publication.link}\n\n`;
          });
        }
      });
    }
    
    await fs.writeFile('./mixed-entries-analysis.md', report);
    
    // Also save raw data as JSON for processing
    const rawData = {
      mixedEntries: this.mixedEntries,
      backendFailures: this.backendFailures,
      analysisDate: new Date().toISOString()
    };
    
    await fs.writeFile('./mixed-entries-data.json', JSON.stringify(rawData, null, 2));
    
    console.log('\n📄 Reports generated:');
    console.log('  📋 mixed-entries-analysis.md');
    console.log('  📊 mixed-entries-data.json');
  }
}

// Run the analysis
const finder = new MixedEntryFinder();
await finder.analyzeAllFiles();