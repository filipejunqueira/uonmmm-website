#!/usr/bin/env node
// Test script for enhanced alternative link validation
import { allPublications } from './src/data/publications.js';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import fs from 'fs/promises';

class AlternativeLinkTester {
  constructor() {
    this.results = [];
    this.institutionalPatterns = [
      { name: 'arXiv', pattern: /arxiv\.org/, validator: 'validateArxivLink' },
      { name: 'ResearchGate', pattern: /researchgate\.net/, validator: 'validateResearchGateLink' },
      { name: 'Academia.edu', pattern: /academia\.edu/, validator: 'validateAcademiaLink' },
      { name: 'PubMed Central', pattern: /ncbi\.nlm\.nih\.gov\/pmc/, validator: 'validatePMCLink' },
      { name: 'IEEE Xplore', pattern: /ieeexplore\.ieee\.org/, validator: 'validateIEEELink' }
    ];
  }

  async testAlternativeLinks() {
    console.log('🧪 Testing enhanced alternative link validation...\n');
    
    // Find publications with alternative links
    const alternativeLinks = allPublications.filter(pub => 
      pub.link && !pub.link.includes('doi.org/')
    );
    
    console.log(`Found ${alternativeLinks.length} alternative links to test:`);
    
    // Categorize by type
    const arxivLinks = alternativeLinks.filter(pub => pub.link.includes('arxiv.org'));
    const institutionalLinks = alternativeLinks.filter(pub => 
      this.institutionalPatterns.slice(1, -1).some(pattern => pattern.pattern.test(pub.link))
    );
    const directLinks = alternativeLinks.filter(pub => 
      !pub.link.includes('arxiv.org') && 
      !this.institutionalPatterns.slice(1, -1).some(pattern => pattern.pattern.test(pub.link))
    );
    
    console.log(`  arXiv: ${arxivLinks.length}`);
    console.log(`  Institutional: ${institutionalLinks.length}`);
    console.log(`  Direct: ${directLinks.length}\n`);
    
    // Test arXiv enhanced validation
    if (arxivLinks.length > 0) {
      console.log('📄 Testing enhanced arXiv validation...');
      await this.testArxivValidation(arxivLinks.slice(0, 3)); // Test first 3
    }
    
    // Test institutional validation
    if (institutionalLinks.length > 0) {
      console.log('🏛️  Testing institutional repository validation...');
      await this.testInstitutionalValidation(institutionalLinks.slice(0, 2)); // Test first 2
    }
    
    // Generate test report
    await this.generateTestReport();
    
    console.log('\n✅ Alternative link testing complete!');
  }

  async testArxivValidation(arxivPubs) {
    for (const pub of arxivPubs) {
      try {
        console.log(`  Testing: ${pub.title?.substring(0, 50)}...`);
        
        // Extract arXiv ID
        const arxivMatch = pub.link.match(/arxiv\.org\/(?:abs|pdf)\/(.+?)(?:v\d+)?(?:\.pdf)?$/);
        if (!arxivMatch) {
          console.log(`    ❌ Invalid arXiv URL format`);
          continue;
        }
        
        const arxivId = arxivMatch[1];
        console.log(`    📋 arXiv ID: ${arxivId}`);
        
        // Query arXiv API
        const response = await axios.get(`http://export.arxiv.org/api/query?id_list=${arxivId}`, {
          timeout: 10000
        });
        
        // Parse XML response
        const parsed = await parseStringPromise(response.data);
        const entries = parsed.feed?.entry;
        
        if (entries && entries.length > 0) {
          const entry = entries[0];
          
          const arxivData = {
            title: entry.title?.[0]?.replace(/\s+/g, ' ').trim() || '',
            authors: entry.author?.map(a => a.name?.[0]).join(', ') || '',
            summary: entry.summary?.[0]?.replace(/\s+/g, ' ').trim() || '',
            published: entry.published?.[0] || '',
            categories: entry.category?.map(c => c.$.term).join(', ') || ''
          };
          
          console.log(`    ✅ arXiv metadata retrieved:`);
          console.log(`      Title: ${arxivData.title.substring(0, 60)}...`);
          console.log(`      Authors: ${arxivData.authors.substring(0, 50)}...`);
          console.log(`      Categories: ${arxivData.categories}`);
          
          // Compare with our data
          const titleSimilarity = this.calculateTitleSimilarity(pub.title || '', arxivData.title);
          console.log(`      Title similarity: ${Math.round(titleSimilarity * 100)}%`);
          
          this.results.push({
            type: 'arxiv',
            link: pub.link,
            arxivId,
            arxivData,
            titleSimilarity,
            status: titleSimilarity > 0.6 ? 'valid' : 'needs_review'
          });
          
        } else {
          console.log(`    ❌ arXiv paper not found`);
        }
        
      } catch (error) {
        console.log(`    ❌ Error: ${error.message}`);
      }
      
      await this.delay(200); // Rate limiting
    }
  }

  async testInstitutionalValidation(institutionalPubs) {
    for (const pub of institutionalPubs) {
      try {
        console.log(`  Testing: ${pub.title?.substring(0, 50)}...`);
        
        // Identify repository
        const repoInfo = this.identifyRepository(pub.link);
        console.log(`    🏛️  Repository: ${repoInfo?.name || 'Unknown'}`);
        
        // Basic HTTP check
        const response = await axios.head(pub.link, {
          timeout: 10000,
          maxRedirects: 5,
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; PublicationValidator/2.0)'
          }
        });
        
        if (response.status === 200) {
          console.log(`    ✅ HTTP ${response.status} - Accessible`);
          console.log(`    📄 Content-Type: ${response.headers['content-type'] || 'Unknown'}`);
          
          this.results.push({
            type: 'institutional',
            link: pub.link,
            repository: repoInfo?.name || 'Unknown',
            status: 'valid',
            httpStatus: response.status,
            contentType: response.headers['content-type']
          });
        } else {
          console.log(`    ❌ HTTP ${response.status}`);
        }
        
      } catch (error) {
        console.log(`    ❌ Error: ${error.message}`);
      }
      
      await this.delay(100);
    }
  }

  identifyRepository(link) {
    for (const pattern of this.institutionalPatterns) {
      if (pattern.pattern.test(link)) {
        return pattern;
      }
    }
    return null;
  }

  calculateTitleSimilarity(title1, title2) {
    if (!title1 || !title2) return 0;
    
    const normalize = (str) => str.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    const norm1 = normalize(title1);
    const norm2 = normalize(title2);
    
    // Simple word overlap similarity
    const words1 = norm1.split(' ');
    const words2 = norm2.split(' ');
    const intersection = words1.filter(word => words2.includes(word));
    
    return intersection.length / Math.max(words1.length, words2.length);
  }

  async generateTestReport() {
    const report = {
      testDate: new Date().toISOString(),
      summary: {
        totalTested: this.results.length,
        arxivTested: this.results.filter(r => r.type === 'arxiv').length,
        institutionalTested: this.results.filter(r => r.type === 'institutional').length,
        validAlternatives: this.results.filter(r => r.status === 'valid').length
      },
      results: this.results
    };
    
    await fs.writeFile('alternative-links-test-report.json', JSON.stringify(report, null, 2));
    console.log('\n📊 Test report saved to: alternative-links-test-report.json');
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run test
const tester = new AlternativeLinkTester();
await tester.testAlternativeLinks();