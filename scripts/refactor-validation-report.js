#!/usr/bin/env node
// Script to refactor validation report to include original paper titles
import fs from 'fs/promises';
import { allPublications } from './src/data/publications.js';

class ValidationReportRefactor {
  constructor() {
    this.publicationsMap = new Map();
    this.createPublicationsMap();
  }

  createPublicationsMap() {
    // Create a map for quick lookup of publications by index
    // The validation report uses sequential IDs like "2025-001", "2024-002", etc.
    allPublications.forEach((pub, index) => {
      // The validation script creates IDs based on year and sequential numbering
      const id = `${pub.year}-${(index + 1).toString().padStart(3, '0')}`;
      this.publicationsMap.set(id, pub);
    });
    
    console.log(`📚 Loaded ${this.publicationsMap.size} publications for mapping`);
    
    // Also create a map by link for more accurate matching
    this.linkMap = new Map();
    allPublications.forEach((pub, index) => {
      if (pub.link) {
        this.linkMap.set(pub.link, pub);
      }
    });
    
    console.log(`🔗 Created link mapping for ${this.linkMap.size} publications`);
  }

  async refactorReport() {
    try {
      // Read the validation JSON report
      const jsonContent = await fs.readFile('./link-validation-report.json', 'utf8');
      const validationData = JSON.parse(jsonContent);
      
      console.log('📝 Generating enhanced validation report...\n');
      
      // Generate the enhanced markdown report
      const enhancedReport = this.generateEnhancedMarkdown(validationData);
      
      // Save the enhanced report
      await fs.writeFile('./link-validation-report-enhanced.md', enhancedReport);
      
      console.log('✅ Enhanced validation report created: link-validation-report-enhanced.md');
      console.log('📊 Report includes original paper titles for easier manual review');
      
    } catch (error) {
      console.error('❌ Error refactoring report:', error.message);
    }
  }

  generateEnhancedMarkdown(validationData) {
    const report = [];
    
    // Header
    report.push('# Enhanced Publication Link Validation Report');
    report.push('');
    report.push(`**Validation Date:** ${new Date(validationData.validationDate).toLocaleDateString()}`);
    report.push('**Enhanced with Original Titles for Manual Review**');
    report.push('');
    
    // Summary
    report.push('## Summary');
    report.push('');
    report.push(`- **Total Publications:** ${validationData.summary.total}`);
    report.push(`- **Valid Links:** ${validationData.summary.valid}`);
    report.push(`- **Invalid Links:** ${validationData.summary.invalid}`);
    report.push(`- **Need Review:** ${validationData.summary.needsReview}`);
    report.push(`- **Missing Links:** ${validationData.summary.missing}`);
    report.push('');
    
    // Link Type Distribution
    report.push('## Link Type Distribution');
    report.push('');
    report.push(`- **DOI Links:** ${validationData.summary.doi}`);
    report.push(`- **arXiv Links:** ${validationData.summary.arxiv}`);
    report.push(`- **Direct URLs:** ${validationData.summary.direct}`);
    report.push('');
    
    // Categorize publications
    const invalidPubs = [];
    const reviewPubs = [];
    const validPubs = [];
    
    validationData.publications.forEach(pub => {
      if (pub.status === 'invalid') {
        invalidPubs.push(pub);
      } else if (pub.status === 'needs_review') {
        reviewPubs.push(pub);
      } else {
        validPubs.push(pub);
      }
    });
    
    // Invalid Links Section
    if (invalidPubs.length > 0) {
      report.push('## ❌ Invalid Links (Need Immediate Attention)');
      report.push('');
      report.push(`**Total:** ${invalidPubs.length} publications`);
      report.push('');
      
      invalidPubs.forEach(pub => {
        const originalPub = this.publicationsMap.get(pub.id) || this.linkMap.get(pub.originalLink);
        report.push(`### ${pub.id}`);
        if (originalPub) {
          report.push(`- **Title:** "${originalPub.title}"`);
          if (originalPub.authors) {
            report.push(`- **Authors:** ${originalPub.authors}`);
          }
        } else {
          report.push(`- **Title:** [Could not find original title]`);
        }
        report.push(`- **Link:** ${pub.originalLink}`);
        if (pub.error) {
          report.push(`- **Error:** ${pub.error}`);
        }
        report.push(`- **Type:** ${pub.type}`);
        report.push('');
      });
    }
    
    // Review Required Section
    if (reviewPubs.length > 0) {
      report.push('## 🔍 Publications Needing Review');
      report.push('');
      report.push(`**Total:** ${reviewPubs.length} publications`);
      report.push('');
      
      // Sort by title similarity (lowest first)
      const sortedReviewPubs = reviewPubs.sort((a, b) => {
        const simA = a.validation?.titleSimilarity || 0;
        const simB = b.validation?.titleSimilarity || 0;
        return simA - simB;
      });
      
      // Group by similarity ranges
      const veryLowSim = sortedReviewPubs.filter(p => (p.validation?.titleSimilarity || 0) < 0.2);
      const lowSim = sortedReviewPubs.filter(p => {
        const sim = p.validation?.titleSimilarity || 0;
        return sim >= 0.2 && sim < 0.4;
      });
      const moderateSim = sortedReviewPubs.filter(p => {
        const sim = p.validation?.titleSimilarity || 0;
        return sim >= 0.4 && sim < 0.6;
      });
      
      if (veryLowSim.length > 0) {
        report.push('### 🚨 Very Low Title Similarity (5-20%) - HIGH PRIORITY');
        report.push('');
        report.push(`**Count:** ${veryLowSim.length} publications`);
        report.push('');
        
        veryLowSim.forEach(pub => {
          const originalPub = this.publicationsMap.get(pub.id) || this.linkMap.get(pub.originalLink);
          const similarity = Math.round((pub.validation?.titleSimilarity || 0) * 100);
          
          report.push(`### ${pub.id}`);
          if (originalPub) {
            report.push(`- **Original Title:** "${originalPub.title}"`);
            if (originalPub.authors) {
              report.push(`- **Original Authors:** ${originalPub.authors}`);
            }
          } else {
            report.push(`- **Original Title:** [Could not find original title]`);
          }
          report.push(`- **Link:** ${pub.originalLink}`);
          if (pub.crossrefData?.title) {
            report.push(`- **Crossref Title:** "${pub.crossrefData.title}"`);
          }
          if (pub.crossrefData?.authors) {
            report.push(`- **Crossref Authors:** ${pub.crossrefData.authors}`);
          }
          report.push(`- **Issues:** Title mismatch (${similarity}% similar)`);
          report.push(`- **Title Similarity:** ${similarity}%`);
          if (pub.crossrefData?.journal) {
            report.push(`- **Journal:** ${pub.crossrefData.journal}`);
          }
          report.push('');
        });
      }
      
      if (lowSim.length > 0) {
        report.push('### ⚠️ Low Title Similarity (21-40%) - MEDIUM PRIORITY');
        report.push('');
        report.push(`**Count:** ${lowSim.length} publications`);
        report.push('');
        
        lowSim.forEach(pub => {
          const originalPub = this.publicationsMap.get(pub.id) || this.linkMap.get(pub.originalLink);
          const similarity = Math.round((pub.validation?.titleSimilarity || 0) * 100);
          
          report.push(`### ${pub.id}`);
          if (originalPub) {
            report.push(`- **Original Title:** "${originalPub.title}"`);
          } else {
            report.push(`- **Original Title:** [Could not find original title]`);
          }
          report.push(`- **Link:** ${pub.originalLink}`);
          if (pub.crossrefData?.title) {
            report.push(`- **Crossref Title:** "${pub.crossrefData.title}"`);
          }
          report.push(`- **Issues:** Title mismatch (${similarity}% similar)`);
          report.push(`- **Title Similarity:** ${similarity}%`);
          report.push('');
        });
      }
      
      if (moderateSim.length > 0) {
        report.push('### ℹ️ Moderate Title Similarity (41-60%) - LOW PRIORITY');
        report.push('');
        report.push(`**Count:** ${moderateSim.length} publications`);
        report.push('');
        
        moderateSim.forEach(pub => {
          const originalPub = this.publicationsMap.get(pub.id) || this.linkMap.get(pub.originalLink);
          const similarity = Math.round((pub.validation?.titleSimilarity || 0) * 100);
          
          report.push(`### ${pub.id}`);
          if (originalPub) {
            report.push(`- **Original Title:** "${originalPub.title}"`);
          } else {
            report.push(`- **Original Title:** [Could not find original title]`);
          }
          report.push(`- **Link:** ${pub.originalLink}`);
          if (pub.crossrefData?.title) {
            report.push(`- **Crossref Title:** "${pub.crossrefData.title}"`);
          }
          report.push(`- **Issues:** Title mismatch (${similarity}% similar)`);
          report.push(`- **Title Similarity:** ${similarity}%`);
          report.push('');
        });
      }
    }
    
    // Valid Publications Summary
    if (validPubs.length > 0) {
      report.push('## ✅ Valid Publications');
      report.push('');
      report.push(`**Total:** ${validPubs.length} publications with accurate links and metadata`);
      report.push('');
    }
    
    // Review Instructions
    report.push('## 📋 Manual Review Instructions');
    report.push('');
    report.push('### Priority Order:');
    report.push('1. **High Priority:** Very Low Similarity (5-20%) - Likely data entry errors');
    report.push('2. **Medium Priority:** Low Similarity (21-40%) - May need title formatting fixes');
    report.push('3. **Low Priority:** Moderate Similarity (41-60%) - Likely minor differences');
    report.push('');
    report.push('### Review Process:');
    report.push('1. Compare "Original Title" with "Crossref Title"');
    report.push('2. Check if authors match between original and Crossref data');
    report.push('3. Verify the DOI link points to the correct paper');
    report.push('4. Update the publication data if discrepancies are found');
    report.push('');
    report.push('### Common Issues:');
    report.push('- Titles in different languages or with special characters');
    report.push('- Author name formatting differences');
    report.push('- Abbreviated vs full journal names');
    report.push('- LaTeX encoding in titles');
    report.push('');
    
    return report.join('\n');
  }
}

// Run the refactor
const refactor = new ValidationReportRefactor();
await refactor.refactorReport();