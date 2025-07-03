#!/usr/bin/env node
// Enhanced link validation script with better alternative link support
import { allPublications } from './src/data/publications.js';
import axios from 'axios';
import levenshtein from 'fast-levenshtein';
import fs from 'fs/promises';
import { parseStringPromise } from 'xml2js';

class EnhancedPublicationValidator {
  constructor() {
    this.results = [];
    this.stats = {
      total: 0,
      valid: 0,
      invalid: 0,
      needsReview: 0,
      doi: 0,
      arxiv: 0,
      institutional: 0,
      direct: 0,
      missing: 0
    };
    
    // Rate limiting
    this.crossrefDelay = 200; // ms between Crossref requests
    this.requestDelay = 100;  // ms between general requests
    this.arxivDelay = 150;    // ms between arXiv requests
    
    // Institutional repository patterns
    this.institutionalPatterns = [
      { name: 'arXiv', pattern: /arxiv\.org/, validator: 'validateArxivLink' },
      { name: 'ResearchGate', pattern: /researchgate\.net/, validator: 'validateResearchGateLink' },
      { name: 'Academia.edu', pattern: /academia\.edu/, validator: 'validateAcademiaLink' },
      { name: 'PubMed Central', pattern: /ncbi\.nlm\.nih\.gov\/pmc/, validator: 'validatePMCLink' },
      { name: 'IEEE Xplore', pattern: /ieeexplore\.ieee\.org/, validator: 'validateIEEELink' },
      { name: 'SpringerLink', pattern: /link\.springer\.com/, validator: 'validateSpringerLink' },
      { name: 'Wiley Online', pattern: /onlinelibrary\.wiley\.com/, validator: 'validateWileyLink' },
      { name: 'Nature', pattern: /nature\.com/, validator: 'validateNatureLink' },
      { name: 'Science Direct', pattern: /sciencedirect\.com/, validator: 'validateScienceDirectLink' },
      { name: 'ACS Publications', pattern: /pubs\.acs\.org/, validator: 'validateACSLink' },
      { name: 'AIP Publishing', pattern: /aip\.scitation\.org/, validator: 'validateAIPLink' },
      { name: 'Physical Review', pattern: /journals\.aps\.org/, validator: 'validateAPSLink' },
      { name: 'Repository', pattern: /\//, validator: 'validateDirectLink' } // Fallback
    ];
  }

  async validateAll() {
    console.log('🔍 Starting enhanced validation of 426 publications...\n');
    
    this.stats.total = allPublications.length;
    
    // Categorize publications by link type
    const categorized = this.categorizePublications();
    
    console.log('📊 Enhanced link type distribution:');
    console.log(`  DOI links: ${categorized.doi.length}`);
    console.log(`  arXiv links: ${categorized.arxiv.length}`);
    console.log(`  Institutional repos: ${categorized.institutional.length}`);
    console.log(`  Direct URLs: ${categorized.direct.length}`);
    console.log(`  Missing links: ${categorized.missing.length}\n`);
    
    // Validate each category
    await this.validateDOILinks(categorized.doi);
    await this.validateInstitutionalLinks(categorized.institutional);
    await this.validateArxivLinks(categorized.arxiv);
    await this.validateDirectLinks(categorized.direct);
    
    // Generate enhanced reports
    await this.generateEnhancedReports();
    
    console.log('\n✅ Enhanced validation complete!');
    console.log(`Valid: ${this.stats.valid}, Invalid: ${this.stats.invalid}, Needs Review: ${this.stats.needsReview}`);
  }

  categorizePublications() {
    const categories = { doi: [], arxiv: [], institutional: [], direct: [], missing: [] };
    
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
      } else if (this.isInstitutionalRepository(pub.link)) {
        categories.institutional.push(pubWithId);
        this.stats.institutional++;
      } else {
        categories.direct.push(pubWithId);
        this.stats.direct++;
      }
    });
    
    return categories;
  }

  isInstitutionalRepository(link) {
    // Check for known institutional patterns (excluding arXiv and DOI which are handled separately)
    return this.institutionalPatterns.slice(1, -1).some(pattern => pattern.pattern.test(link));
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
            'User-Agent': 'PublicationValidator/2.0 (mailto:admin@example.com)',
            'Accept': 'application/json'
          },
          timeout: 15000
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
    console.log(`📄 Validating ${arxivPublications.length} arXiv links with enhanced metadata...`);
    
    for (let i = 0; i < arxivPublications.length; i++) {
      const pub = arxivPublications[i];
      
      try {
        // Extract arXiv ID (handle different formats)
        const arxivMatch = pub.link.match(/arxiv\.org\/(?:abs|pdf)\/(.+?)(?:v\d+)?(?:\.pdf)?$/);
        if (!arxivMatch) {
          this.addInvalidResult(pub, 'Invalid arXiv URL format', 'arxiv');
          continue;
        }
        
        const arxivId = arxivMatch[1];
        
        // Query arXiv API for detailed metadata
        const response = await axios.get(`http://export.arxiv.org/api/query?id_list=${arxivId}`, {
          timeout: 15000
        });
        
        // Parse XML response properly
        try {
          const parsed = await parseStringPromise(response.data);
          const entries = parsed.feed?.entry;
          
          if (entries && entries.length > 0) {
            const entry = entries[0];
            
            // Extract arXiv metadata
            const arxivData = {
              title: entry.title?.[0]?.replace(/\s+/g, ' ').trim() || '',
              authors: entry.author?.map(a => a.name?.[0]).join(', ') || '',
              summary: entry.summary?.[0]?.replace(/\s+/g, ' ').trim() || '',
              published: entry.published?.[0] || '',
              updated: entry.updated?.[0] || '',
              categories: entry.category?.map(c => c.$.term).join(', ') || ''
            };
            
            // Validate metadata against our data
            const validation = this.validateArxivMetadata(pub, arxivData);
            
            this.results.push({
              id: pub.id,
              status: validation.status,
              originalLink: pub.link,
              arxivId: arxivId,
              arxivData,
              validation,
              type: 'arxiv'
            });
            
            if (validation.status === 'valid') this.stats.valid++;
            else if (validation.status === 'needs_review') this.stats.needsReview++;
            else this.stats.invalid++;
            
          } else {
            this.addInvalidResult(pub, 'arXiv paper not found', 'arxiv');
          }
        } catch (xmlError) {
          this.addInvalidResult(pub, 'Failed to parse arXiv response', 'arxiv');
        }
        
      } catch (error) {
        this.addInvalidResult(pub, `arXiv API error: ${error.message}`, 'arxiv');
      }
      
      // Progress indicator
      if ((i + 1) % 5 === 0) {
        console.log(`  Progress: ${i + 1}/${arxivPublications.length}`);
      }
      
      await this.delay(this.arxivDelay);
    }
  }

  async validateInstitutionalLinks(institutionalPublications) {
    console.log(`🏛️  Validating ${institutionalPublications.length} institutional repository links...`);
    
    for (let i = 0; i < institutionalPublications.length; i++) {
      const pub = institutionalPublications[i];
      
      try {
        // Identify the repository type
        const repoInfo = this.identifyRepository(pub.link);
        
        // Use specific validator if available
        if (repoInfo && this[repoInfo.validator]) {
          await this[repoInfo.validator](pub, repoInfo);
        } else {
          // Fallback to basic HTTP check
          await this.validateDirectLink(pub);
        }
        
      } catch (error) {
        this.addInvalidResult(pub, `Repository validation error: ${error.message}`, 'institutional');
      }
      
      // Progress indicator
      if ((i + 1) % 5 === 0) {
        console.log(`  Progress: ${i + 1}/${institutionalPublications.length}`);
      }
      
      await this.delay(this.requestDelay);
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

  async validateResearchGateLink(pub, repoInfo) {
    // ResearchGate specific validation
    try {
      const response = await axios.head(pub.link, {
        timeout: 10000,
        maxRedirects: 5,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PublicationValidator/2.0)'
        }
      });
      
      if (response.status === 200) {
        this.results.push({
          id: pub.id,
          status: 'valid',
          originalLink: pub.link,
          repository: 'ResearchGate',
          responseStatus: response.status,
          type: 'institutional',
          note: 'ResearchGate links are valid alternative access points'
        });
        this.stats.valid++;
      } else {
        this.addInvalidResult(pub, `ResearchGate HTTP ${response.status}`, 'institutional');
      }
    } catch (error) {
      this.addInvalidResult(pub, `ResearchGate access error: ${error.message}`, 'institutional');
    }
  }

  async validatePMCLink(pub, repoInfo) {
    // PubMed Central specific validation
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
          repository: 'PubMed Central',
          responseStatus: response.status,
          type: 'institutional',
          note: 'PMC provides free access to peer-reviewed research'
        });
        this.stats.valid++;
      } else {
        this.addInvalidResult(pub, `PMC HTTP ${response.status}`, 'institutional');
      }
    } catch (error) {
      this.addInvalidResult(pub, `PMC access error: ${error.message}`, 'institutional');
    }
  }

  async validateDirectLinks(directPublications) {
    console.log(`🌐 Validating ${directPublications.length} direct URLs...`);
    
    for (const pub of directPublications) {
      await this.validateDirectLink(pub);
      await this.delay(this.requestDelay);
    }
  }

  async validateDirectLink(pub) {
    try {
      const response = await axios.head(pub.link, {
        timeout: 10000,
        maxRedirects: 5,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PublicationValidator/2.0)'
        }
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
  }

  validateArxivMetadata(pub, arxivData) {
    const issues = [];
    
    // Title comparison
    if (arxivData.title && pub.title) {
      const similarity = this.calculateTitleSimilarity(pub.title, arxivData.title);
      if (similarity < 0.6) {
        issues.push(`Title mismatch (${Math.round(similarity * 100)}% similar)`);
      }
    }
    
    // Author comparison
    if (arxivData.authors && pub.authors) {
      if (!this.hasCommonAuthors(pub.authors, arxivData.authors)) {
        issues.push('Author mismatch');
      }
    }
    
    // Determine status
    let status = 'valid';
    if (issues.length >= 2) {
      status = 'invalid';
    } else if (issues.length === 1) {
      status = 'needs_review';
    }
    
    return {
      status,
      issues,
      titleSimilarity: pub.title && arxivData.title ? 
        this.calculateTitleSimilarity(pub.title, arxivData.title) : null
    };
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
    if (issues.length >= 2) {
      status = 'invalid';
    } else if (issues.length === 1) {
      status = 'needs_review';
    }
    
    return {
      status,
      issues,
      titleSimilarity: ourTitle && crossrefTitle ? 
        this.calculateTitleSimilarity(ourTitle, crossrefTitle) : null
    };
  }

  calculateTitleSimilarity(title1, title2) {
    if (!title1 || !title2) return 0;
    
    // Normalize titles
    const normalize = (str) => str.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    
    const norm1 = normalize(title1);
    const norm2 = normalize(title2);
    
    // Calculate Levenshtein distance
    const distance = levenshtein.get(norm1, norm2);
    const maxLength = Math.max(norm1.length, norm2.length);
    
    return maxLength > 0 ? 1 - (distance / maxLength) : 0;
  }

  hasCommonAuthors(authors1, authors2) {
    if (!authors1 || !authors2) return false;
    
    // Extract last names (simplified)
    const extractLastNames = (authorStr) => {
      return authorStr.split(/[,;&]/)
        .map(author => author.trim().split(/\s+/).pop())
        .filter(name => name && name.length > 2)
        .map(name => name.toLowerCase());
    };
    
    const lastNames1 = extractLastNames(authors1);
    const lastNames2 = extractLastNames(authors2);
    
    // Check for common last names
    return lastNames1.some(name => lastNames2.includes(name));
  }

  addInvalidResult(pub, reason, type) {
    this.results.push({
      id: pub.id,
      status: 'invalid',
      originalLink: pub.link,
      error: reason,
      type: type
    });
    this.stats.invalid++;
  }

  async generateEnhancedReports() {
    console.log('\n📊 Generating enhanced validation reports...');
    
    // Enhanced JSON report
    const enhancedReport = {
      summary: {
        ...this.stats,
        timestamp: new Date().toISOString(),
        validator: 'EnhancedPublicationValidator v2.0'
      },
      publications: this.results,
      alternativeAccessSummary: {
        arxiv: this.results.filter(r => r.type === 'arxiv').length,
        institutional: this.results.filter(r => r.type === 'institutional').length,
        validAlternatives: this.results.filter(r => 
          (r.type === 'arxiv' || r.type === 'institutional') && r.status === 'valid'
        ).length
      }
    };
    
    await fs.writeFile('enhanced-link-validation-report.json', 
      JSON.stringify(enhancedReport, null, 2));
    
    console.log('✅ Enhanced validation report saved to: enhanced-link-validation-report.json');
    
    // Generate alternative access report
    const alternativeReport = this.generateAlternativeAccessReport();
    await fs.writeFile('alternative-access-report.md', alternativeReport);
    
    console.log('✅ Alternative access report saved to: alternative-access-report.md');
  }

  generateAlternativeAccessReport() {
    const arxivResults = this.results.filter(r => r.type === 'arxiv');
    const institutionalResults = this.results.filter(r => r.type === 'institutional');
    
    let report = '# Alternative Access Report\n\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;
    
    report += '## Summary\n\n';
    report += `- **arXiv Papers**: ${arxivResults.length} (${arxivResults.filter(r => r.status === 'valid').length} valid)\n`;
    report += `- **Institutional Repositories**: ${institutionalResults.length} (${institutionalResults.filter(r => r.status === 'valid').length} valid)\n`;
    report += `- **Total Alternative Access**: ${arxivResults.length + institutionalResults.length}\n\n`;
    
    report += '## arXiv Publications\n\n';
    report += 'These publications are available on arXiv, providing free access to research papers:\n\n';
    
    arxivResults.forEach(result => {
      const pub = allPublications.find(p => 
        `${p.year}-${String(allPublications.indexOf(p) + 1).padStart(3, '0')}` === result.id
      );
      
      report += `### ${pub?.title || 'Unknown Title'}\n`;
      report += `- **arXiv ID**: ${result.arxivId}\n`;
      report += `- **Status**: ${result.status}\n`;
      report += `- **Link**: ${result.originalLink}\n`;
      if (result.validation?.issues?.length > 0) {
        report += `- **Issues**: ${result.validation.issues.join(', ')}\n`;
      }
      report += '\n';
    });
    
    if (institutionalResults.length > 0) {
      report += '## Institutional Repository Access\n\n';
      report += 'These publications are available through institutional repositories:\n\n';
      
      institutionalResults.forEach(result => {
        const pub = allPublications.find(p => 
          `${p.year}-${String(allPublications.indexOf(p) + 1).padStart(3, '0')}` === result.id
        );
        
        report += `### ${pub?.title || 'Unknown Title'}\n`;
        report += `- **Repository**: ${result.repository || 'Unknown'}\n`;
        report += `- **Status**: ${result.status}\n`;
        report += `- **Link**: ${result.originalLink}\n`;
        if (result.note) {
          report += `- **Note**: ${result.note}\n`;
        }
        report += '\n';
      });
    }
    
    return report;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run enhanced validation
const validator = new EnhancedPublicationValidator();
await validator.validateAll();