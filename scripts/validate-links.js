#!/usr/bin/env node
// Link validation script for publications
import { allPublications } from './src/data/publications.js';
import axios from 'axios';
import levenshtein from 'fast-levenshtein';
import fs from 'fs/promises';

class PublicationValidator {
  constructor() {
    this.results = [];
    this.stats = {
      total: 0,
      valid: 0,
      invalid: 0,
      needsReview: 0,
      doi: 0,
      arxiv: 0,
      direct: 0,
      missing: 0
    };
    
    // Rate limiting
    this.crossrefDelay = 200; // ms between Crossref requests
    this.requestDelay = 100;  // ms between general requests
  }

  async validateAll() {
    console.log('🔍 Starting validation of 426 publications...\n');
    
    this.stats.total = allPublications.length;
    
    // Categorize publications by link type
    const categorized = this.categorizePublications();
    
    console.log('📊 Link type distribution:');
    console.log(`  DOI links: ${categorized.doi.length}`);
    console.log(`  arXiv links: ${categorized.arxiv.length}`);
    console.log(`  Direct URLs: ${categorized.direct.length}`);
    console.log(`  Missing links: ${categorized.missing.length}\n`);
    
    // Validate each category
    await this.validateDOILinks(categorized.doi);
    await this.validateArxivLinks(categorized.arxiv);
    await this.validateDirectLinks(categorized.direct);
    
    // Generate reports
    await this.generateReports();
    
    console.log('\n✅ Validation complete!');
    console.log(`Valid: ${this.stats.valid}, Invalid: ${this.stats.invalid}, Needs Review: ${this.stats.needsReview}`);
  }

  categorizePublications() {
    const categories = { doi: [], arxiv: [], direct: [], missing: [] };
    
    allPublications.forEach((pub, index) => {
      const id = `${pub.year}-${String(index + 1).padStart(3, '0')}`;
      const pubWithId = { ...pub, id };
      
      if (!pub.link || pub.link.trim() === '') {
        categories.missing.push(pubWithId);
        this.stats.missing++;
      } else if (pub.link.includes('doi.org/')) {
        categories.doi.push(pubWithId);
        this.stats.doi++;
      } else if (pub.link.includes('arxiv.org/')) {
        categories.arxiv.push(pubWithId);
        this.stats.arxiv++;
      } else {
        categories.direct.push(pubWithId);
        this.stats.direct++;
      }
    });
    
    return categories;
  }

  async validateDOILinks(doiPublications) {
    console.log(`🔬 Validating ${doiPublications.length} DOI links...`);
    
    for (let i = 0; i < doiPublications.length; i++) {
      const pub = doiPublications[i];
      
      try {
        // Extract DOI from URL
        const doi = pub.link.replace('https://doi.org/', '').replace('http://dx.doi.org/', '');
        
        // Query Crossref API
        const response = await axios.get(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
          headers: {
            'User-Agent': 'PublicationValidator/1.0 (mailto:admin@example.com)',
            'Accept': 'application/json'
          },
          timeout: 10000
        });
        
        const data = response.data;
        if (data.status === 'ok' && data.message) {
          const crossrefData = data.message;
          
          // Validate metadata
          const validation = this.validateMetadata(pub, crossrefData);
          
          this.results.push({
            id: pub.id,
            status: validation.status,
            originalLink: pub.link,
            doi: doi,
            crossrefData: {
              title: crossrefData.title?.[0] || '',
              authors: crossrefData.author?.map(a => `${a.given || ''} ${a.family || ''}`).join(', ') || '',
              journal: crossrefData['container-title']?.[0] || '',
              published: crossrefData.published?.['date-parts']?.[0]?.join('-') || ''
            },
            validation,
            type: 'doi'
          });
          
          if (validation.status === 'valid') this.stats.valid++;
          else if (validation.status === 'needs_review') this.stats.needsReview++;
          else this.stats.invalid++;
          
        } else {
          this.addInvalidResult(pub, 'DOI not found in Crossref', 'doi');
        }
        
      } catch (error) {
        let errorReason = 'Unknown error';
        if (error.response?.status === 404) errorReason = 'DOI not found';
        else if (error.response?.status === 429) errorReason = 'Rate limited';
        else if (error.code === 'ENOTFOUND') errorReason = 'Network error';
        else errorReason = error.message;
        
        this.addInvalidResult(pub, errorReason, 'doi');
      }
      
      // Progress indicator
      if ((i + 1) % 10 === 0) {
        console.log(`  Progress: ${i + 1}/${doiPublications.length}`);
      }
      
      // Rate limiting
      await this.delay(this.crossrefDelay);
    }
  }

  async validateArxivLinks(arxivPublications) {
    console.log(`📄 Validating ${arxivPublications.length} arXiv links...`);
    
    for (const pub of arxivPublications) {
      try {
        // Extract arXiv ID
        const arxivMatch = pub.link.match(/arxiv\.org\/abs\/(.+?)(?:v\d+)?$/);
        if (!arxivMatch) {
          this.addInvalidResult(pub, 'Invalid arXiv URL format', 'arxiv');
          continue;
        }
        
        const arxivId = arxivMatch[1];
        
        // Query arXiv API
        const response = await axios.get(`http://export.arxiv.org/api/query?id_list=${arxivId}`, {
          timeout: 10000
        });
        
        // Parse XML response (simplified)
        if (response.data.includes('<entry>')) {
          this.results.push({
            id: pub.id,
            status: 'valid',
            originalLink: pub.link,
            arxivId: arxivId,
            type: 'arxiv'
          });
          this.stats.valid++;
        } else {
          this.addInvalidResult(pub, 'arXiv paper not found', 'arxiv');
        }
        
      } catch (error) {
        this.addInvalidResult(pub, error.message, 'arxiv');
      }
      
      await this.delay(this.requestDelay);
    }
  }

  async validateDirectLinks(directPublications) {
    console.log(`🌐 Validating ${directPublications.length} direct URLs...`);
    
    for (const pub of directPublications) {
      try {
        const response = await axios.head(pub.link, {
          timeout: 10000,
          maxRedirects: 5
        });
        
        if (response.status === 200) {
          this.results.push({
            id: pub.id,
            status: 'valid',
            originalLink: pub.link,
            responseStatus: response.status,
            contentType: response.headers['content-type'],
            type: 'direct'
          });
          this.stats.valid++;
        } else {
          this.addInvalidResult(pub, `HTTP ${response.status}`, 'direct');
        }
        
      } catch (error) {
        let errorReason = 'Unknown error';
        if (error.response?.status) errorReason = `HTTP ${error.response.status}`;
        else if (error.code === 'ENOTFOUND') errorReason = 'Domain not found';
        else if (error.code === 'ECONNREFUSED') errorReason = 'Connection refused';
        else if (error.code === 'ETIMEDOUT') errorReason = 'Timeout';
        else errorReason = error.message;
        
        this.addInvalidResult(pub, errorReason, 'direct');
      }
      
      await this.delay(this.requestDelay);
    }
  }

  validateMetadata(pub, crossrefData) {
    const issues = [];
    
    // Title comparison
    const ourTitle = pub.title || '';
    const crossrefTitle = crossrefData.title?.[0] || '';
    
    if (crossrefTitle) {
      const similarity = this.calculateTitleSimilarity(ourTitle, crossrefTitle);
      if (similarity < 0.7) {
        issues.push(`Title mismatch (${Math.round(similarity * 100)}% similar)`);
      }
    }
    
    // Author comparison (simplified)
    const ourAuthors = pub.authors || '';
    const crossrefAuthors = crossrefData.author?.map(a => `${a.given || ''} ${a.family || ''}`).join(', ') || '';
    
    if (crossrefAuthors && ourAuthors && !this.hasCommonAuthors(ourAuthors, crossrefAuthors)) {
      issues.push('Author mismatch');
    }
    
    // Journal comparison
    const ourJournal = pub.journal || '';
    const crossrefJournal = crossrefData['container-title']?.[0] || '';
    
    if (crossrefJournal && ourJournal && !ourJournal.toLowerCase().includes(crossrefJournal.toLowerCase().substring(0, 20))) {
      issues.push('Journal mismatch');
    }
    
    // Determine status
    let status = 'valid';
    if (issues.length > 0) {
      status = issues.length >= 2 ? 'invalid' : 'needs_review';
    }
    
    return {
      status,
      issues,
      titleSimilarity: crossrefTitle ? this.calculateTitleSimilarity(ourTitle, crossrefTitle) : 0
    };
  }

  calculateTitleSimilarity(title1, title2) {
    // Clean titles for comparison
    const clean1 = title1.toLowerCase().replace(/[^\w\s]/g, '').trim();
    const clean2 = title2.toLowerCase().replace(/[^\w\s]/g, '').trim();
    
    if (!clean1 || !clean2) return 0;
    
    const distance = levenshtein.get(clean1, clean2);
    const maxLength = Math.max(clean1.length, clean2.length);
    
    return 1 - (distance / maxLength);
  }

  hasCommonAuthors(authors1, authors2) {
    // Simple check for common surnames
    const surnames1 = authors1.split(/[,&]/).map(name => 
      name.trim().split(' ').pop().toLowerCase()
    );
    const surnames2 = authors2.split(/[,&]/).map(name => 
      name.trim().split(' ').pop().toLowerCase()
    );
    
    return surnames1.some(surname => surnames2.includes(surname));
  }

  addInvalidResult(pub, reason, type) {
    this.results.push({
      id: pub.id,
      status: 'invalid',
      originalLink: pub.link,
      error: reason,
      type
    });
    this.stats.invalid++;
  }

  async generateReports() {
    console.log('\n📝 Generating validation reports...');
    
    // JSON report
    const jsonReport = {
      validationDate: new Date().toISOString(),
      summary: this.stats,
      publications: this.results
    };
    
    await fs.writeFile('link-validation-report.json', JSON.stringify(jsonReport, null, 2));
    
    // Markdown report
    let mdReport = '# Publication Link Validation Report\n\n';
    mdReport += `**Validation Date:** ${new Date().toLocaleDateString()}\n\n`;
    mdReport += '## Summary\n\n';
    mdReport += `- **Total Publications:** ${this.stats.total}\n`;
    mdReport += `- **Valid Links:** ${this.stats.valid}\n`;
    mdReport += `- **Invalid Links:** ${this.stats.invalid}\n`;
    mdReport += `- **Need Review:** ${this.stats.needsReview}\n`;
    mdReport += `- **Missing Links:** ${this.stats.missing}\n\n`;
    
    mdReport += '## Link Type Distribution\n\n';
    mdReport += `- **DOI Links:** ${this.stats.doi}\n`;
    mdReport += `- **arXiv Links:** ${this.stats.arxiv}\n`;
    mdReport += `- **Direct URLs:** ${this.stats.direct}\n\n`;
    
    // Invalid links section
    const invalidLinks = this.results.filter(r => r.status === 'invalid');
    if (invalidLinks.length > 0) {
      mdReport += '## Invalid Links (Need Immediate Attention)\n\n';
      invalidLinks.forEach(result => {
        mdReport += `### ${result.id}\n`;
        mdReport += `- **Link:** ${result.originalLink}\n`;
        mdReport += `- **Error:** ${result.error}\n`;
        mdReport += `- **Type:** ${result.type}\n\n`;
      });
    }
    
    // Needs review section
    const needsReview = this.results.filter(r => r.status === 'needs_review');
    if (needsReview.length > 0) {
      mdReport += '## Links Needing Review\n\n';
      needsReview.forEach(result => {
        mdReport += `### ${result.id}\n`;
        mdReport += `- **Link:** ${result.originalLink}\n`;
        mdReport += `- **Issues:** ${result.validation?.issues?.join(', ')}\n`;
        if (result.validation?.titleSimilarity) {
          mdReport += `- **Title Similarity:** ${Math.round(result.validation.titleSimilarity * 100)}%\n`;
        }
        mdReport += '\n';
      });
    }
    
    await fs.writeFile('link-validation-report.md', mdReport);
    
    console.log('✅ Reports saved:');
    console.log('  - link-validation-report.json');
    console.log('  - link-validation-report.md');
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run validation
const validator = new PublicationValidator();
validator.validateAll().catch(console.error);