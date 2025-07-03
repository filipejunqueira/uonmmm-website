#!/usr/bin/env node
// Cross-reference local JSON data with official website for completeness
import { allPublications } from './src/data/publications.js';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import fs from 'fs/promises';
import levenshtein from 'fast-levenshtein';

class WebsiteCrossReferencer {
  constructor() {
    this.officialWebsiteData = [];
    this.localData = allPublications;
    this.results = {
      localOnly: [],
      websiteOnly: [],
      matches: [],
      discrepancies: []
    };
    this.stats = {
      totalLocal: 0,
      totalWebsite: 0,
      matched: 0,
      localOnly: 0,
      websiteOnly: 0,
      discrepancies: 0
    };
  }

  async crossReference() {
    console.log('🔍 Cross-referencing local data with official website...\n');
    
    // Step 1: Scrape official website
    console.log('📡 Scraping official website data...');
    await this.scrapeOfficialWebsite();
    
    // Step 2: Cross-reference data
    console.log('🔗 Cross-referencing publications...');
    await this.performCrossReference();
    
    // Step 3: Generate reports
    console.log('📊 Generating cross-reference reports...');
    await this.generateReports();
    
    console.log('\n✅ Cross-reference analysis complete!');
    this.printSummary();
  }

  async scrapeOfficialWebsite() {
    try {
      const response = await axios.get('https://uonmmm.uk/publications/', {
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PublicationValidator/2.0)'
        }
      });
      
      const dom = new JSDOM(response.data);
      const document = dom.window.document;
      
      // Look for publication entries - adapt selectors based on website structure
      const publicationElements = document.querySelectorAll([
        '.publication',
        '.paper',
        '.article',
        'li',
        'tr',
        'div'
      ].join(', '));
      
      let publicationCount = 0;
      
      for (const element of publicationElements) {
        const text = element.textContent?.trim();
        
        if (!text || text.length < 50) continue; // Skip short text
        
        // Look for publication patterns
        const publicationPattern = /(?:(?:19|20)\d{2})|(?:doi\.org)|(?:arxiv\.org)|(?:journal|proceedings|conference)/i;
        if (!publicationPattern.test(text)) continue;
        
        // Extract potential publication data
        const publication = this.parsePublicationText(text);
        if (publication) {
          this.officialWebsiteData.push({
            ...publication,
            originalText: text,
            sourceElement: element.tagName
          });
          publicationCount++;
        }
      }
      
      console.log(`  ✅ Found ${publicationCount} potential publications on website`);
      this.stats.totalWebsite = publicationCount;
      
    } catch (error) {
      console.error('❌ Error scraping website:', error.message);
      throw error;
    }
  }

  parsePublicationText(text) {
    // Try to extract publication metadata from text
    const publication = {
      title: '',
      authors: '',
      year: null,
      journal: '',
      originalText: text
    };
    
    // Extract year
    const yearMatch = text.match(/\b(19|20)\d{2}\b/);
    if (yearMatch) {
      publication.year = parseInt(yearMatch[0]);
    }
    
    // Extract DOI
    const doiMatch = text.match(/https?:\/\/doi\.org\/[^\s]+/);
    if (doiMatch) {
      publication.link = doiMatch[0];
    }
    
    // Extract arXiv link
    const arxivMatch = text.match(/https?:\/\/arxiv\.org\/[^\s]+/);
    if (arxivMatch) {
      publication.link = arxivMatch[0];
    }
    
    // Simple title extraction (first sentence or until year)
    let titleText = text;
    if (yearMatch) {
      const yearIndex = text.indexOf(yearMatch[0]);
      titleText = text.substring(0, yearIndex).trim();
    }
    
    // Clean up title
    titleText = titleText.replace(/^[^\w]*/, '').replace(/[.;,]+$/, '').trim();
    if (titleText.length > 20 && titleText.length < 300) {
      publication.title = titleText;
    }
    
    // Only return if we have meaningful data
    if (publication.title || publication.link || publication.year) {
      return publication;
    }
    
    return null;
  }

  async performCrossReference() {
    this.stats.totalLocal = this.localData.length;
    
    console.log(`  📋 Local publications: ${this.stats.totalLocal}`);
    console.log(`  🌐 Website publications: ${this.stats.totalWebsite}`);
    
    // Create lookup maps for efficient matching
    const websiteLookup = new Map();
    const localLookup = new Map();
    
    // Index website data by year and title
    for (const webPub of this.officialWebsiteData) {
      const key = `${webPub.year || 'unknown'}-${this.normalizeTitle(webPub.title)}`;
      websiteLookup.set(key, webPub);
    }
    
    // Index local data
    for (const localPub of this.localData) {
      const key = `${localPub.year || 'unknown'}-${this.normalizeTitle(localPub.title)}`;
      localLookup.set(key, localPub);
    }
    
    // Find matches and discrepancies
    const processedWebsite = new Set();
    const processedLocal = new Set();
    
    // Check local publications against website
    for (const [localKey, localPub] of localLookup) {
      let bestMatch = null;
      let bestSimilarity = 0;
      
      for (const [webKey, webPub] of websiteLookup) {
        if (processedWebsite.has(webKey)) continue;
        
        // Check for matches
        const similarity = this.calculatePublicationSimilarity(localPub, webPub);
        
        if (similarity > bestSimilarity && similarity > 0.7) {
          bestMatch = { key: webKey, pub: webPub, similarity };
          bestSimilarity = similarity;
        }
      }
      
      if (bestMatch) {
        // Found a match
        processedWebsite.add(bestMatch.key);
        processedLocal.add(localKey);
        
        this.results.matches.push({
          local: localPub,
          website: bestMatch.pub,
          similarity: bestMatch.similarity,
          status: bestMatch.similarity > 0.9 ? 'exact' : 'similar'
        });
        this.stats.matched++;
        
      } else {
        // Local publication not found on website
        this.results.localOnly.push(localPub);
        this.stats.localOnly++;
      }
    }
    
    // Find website-only publications
    for (const [webKey, webPub] of websiteLookup) {
      if (!processedWebsite.has(webKey)) {
        this.results.websiteOnly.push(webPub);
        this.stats.websiteOnly++;
      }
    }
    
    console.log(`  ✅ Matched: ${this.stats.matched} publications`);
    console.log(`  📥 Local only: ${this.stats.localOnly} publications`);
    console.log(`  🌐 Website only: ${this.stats.websiteOnly} publications`);
  }

  calculatePublicationSimilarity(localPub, webPub) {
    let similarity = 0;
    let factors = 0;
    
    // Title similarity (most important)
    if (localPub.title && webPub.title) {
      const titleSim = this.calculateTitleSimilarity(localPub.title, webPub.title);
      similarity += titleSim * 0.6;
      factors += 0.6;
    }
    
    // Year similarity
    if (localPub.year && webPub.year) {
      const yearSim = localPub.year === webPub.year ? 1 : 0;
      similarity += yearSim * 0.2;
      factors += 0.2;
    }
    
    // Link similarity
    if (localPub.link && webPub.link) {
      const linkSim = localPub.link === webPub.link ? 1 : 0;
      similarity += linkSim * 0.2;
      factors += 0.2;
    }
    
    return factors > 0 ? similarity / factors : 0;
  }

  calculateTitleSimilarity(title1, title2) {
    if (!title1 || !title2) return 0;
    
    const norm1 = this.normalizeTitle(title1);
    const norm2 = this.normalizeTitle(title2);
    
    if (norm1 === norm2) return 1;
    
    const distance = levenshtein.get(norm1, norm2);
    const maxLength = Math.max(norm1.length, norm2.length);
    
    return maxLength > 0 ? 1 - (distance / maxLength) : 0;
  }

  normalizeTitle(title) {
    if (!title) return '';
    return title.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  async generateReports() {
    // JSON report
    const jsonReport = {
      crossReferenceDate: new Date().toISOString(),
      summary: this.stats,
      matches: this.results.matches,
      localOnly: this.results.localOnly,
      websiteOnly: this.results.websiteOnly,
      discrepancies: this.results.discrepancies
    };
    
    await fs.writeFile('cross-reference-report.json', JSON.stringify(jsonReport, null, 2));
    
    // Markdown report
    let mdReport = '# Website Cross-Reference Report\n\n';
    mdReport += `**Analysis Date:** ${new Date().toLocaleDateString()}\n\n`;
    
    mdReport += '## Summary\n\n';
    mdReport += `- **Local Publications:** ${this.stats.totalLocal}\n`;
    mdReport += `- **Website Publications:** ${this.stats.totalWebsite}\n`;
    mdReport += `- **Matched:** ${this.stats.matched}\n`;
    mdReport += `- **Local Only:** ${this.stats.localOnly}\n`;
    mdReport += `- **Website Only:** ${this.stats.websiteOnly}\n\n`;
    
    // Local-only publications
    if (this.results.localOnly.length > 0) {
      mdReport += '## Publications in Local Data Only\n\n';
      mdReport += 'These publications are in our local database but not found on the website:\n\n';
      
      this.results.localOnly.slice(0, 10).forEach(pub => {
        mdReport += `### ${pub.title || 'Unknown Title'}\n`;
        mdReport += `- **Year:** ${pub.year || 'Unknown'}\n`;
        mdReport += `- **Authors:** ${pub.authors || 'Unknown'}\n`;
        if (pub.link) mdReport += `- **Link:** ${pub.link}\n`;
        mdReport += '\n';
      });
      
      if (this.results.localOnly.length > 10) {
        mdReport += `*... and ${this.results.localOnly.length - 10} more*\n\n`;
      }
    }
    
    // Website-only publications
    if (this.results.websiteOnly.length > 0) {
      mdReport += '## Publications on Website Only\n\n';
      mdReport += 'These publications were found on the website but not in our local database:\n\n';
      
      this.results.websiteOnly.slice(0, 10).forEach(pub => {
        mdReport += `### ${pub.title || 'Unknown Title'}\n`;
        mdReport += `- **Year:** ${pub.year || 'Unknown'}\n`;
        if (pub.link) mdReport += `- **Link:** ${pub.link}\n`;
        mdReport += `- **Source Text:** ${pub.originalText.substring(0, 100)}...\n`;
        mdReport += '\n';
      });
      
      if (this.results.websiteOnly.length > 10) {
        mdReport += `*... and ${this.results.websiteOnly.length - 10} more*\n\n`;
      }
    }
    
    await fs.writeFile('cross-reference-report.md', mdReport);
    
    console.log('  ✅ Reports saved:');
    console.log('    - cross-reference-report.json');
    console.log('    - cross-reference-report.md');
  }

  printSummary() {
    console.log('\n📊 Cross-Reference Summary:');
    console.log(`  Total local publications: ${this.stats.totalLocal}`);
    console.log(`  Total website publications: ${this.stats.totalWebsite}`);
    console.log(`  Matched publications: ${this.stats.matched}`);
    console.log(`  Local-only publications: ${this.stats.localOnly}`);
    console.log(`  Website-only publications: ${this.stats.websiteOnly}`);
    
    if (this.stats.totalLocal > 0) {
      const coverage = (this.stats.matched / this.stats.totalLocal * 100).toFixed(1);
      console.log(`  Coverage: ${coverage}% of local data found on website`);
    }
  }
}

// Run cross-reference
const crossReferencer = new WebsiteCrossReferencer();
await crossReferencer.crossReference();