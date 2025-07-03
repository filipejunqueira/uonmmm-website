#!/usr/bin/env node
// Script to scrape official website and create reference dataset

import fs from 'fs/promises';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

class OfficialWebsiteScraper {
  constructor() {
    this.baseUrl = 'https://uonmmm.uk/publications/';
    this.publications = [];
  }

  async scrapeWebsite() {
    try {
      console.log('🌐 Fetching official website:', this.baseUrl);
      
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;
      
      console.log('📄 Parsing publication entries...');
      
      // Find the publications section - look for year headers and publication lists
      const yearHeaders = document.querySelectorAll('h2, h3');
      let currentYear = null;
      
      yearHeaders.forEach(header => {
        const yearMatch = header.textContent.match(/(\d{4})/);
        if (yearMatch) {
          currentYear = parseInt(yearMatch[1]);
          console.log(`📅 Processing year: ${currentYear}`);
          
          // Find publications after this year header
          let nextElement = header.nextElementSibling;
          while (nextElement && !nextElement.textContent.match(/^\d{4}$/)) {
            if (nextElement.tagName === 'P' || nextElement.tagName === 'DIV') {
              this.parsePublicationEntry(nextElement, currentYear);
            } else if (nextElement.tagName === 'UL' || nextElement.tagName === 'OL') {
              // Publications in list format
              const listItems = nextElement.querySelectorAll('li');
              listItems.forEach(li => this.parsePublicationEntry(li, currentYear));
            }
            nextElement = nextElement.nextElementSibling;
          }
        }
      });
      
      // Alternative parsing: look for publication patterns in all paragraphs
      const allParagraphs = document.querySelectorAll('p');
      allParagraphs.forEach(p => {
        if (this.looksLikePublication(p.textContent)) {
          this.parsePublicationEntry(p, this.extractYear(p.textContent));
        }
      });
      
      console.log(`✅ Extracted ${this.publications.length} publications from official website`);
      
      // Save the reference dataset
      await this.saveReferenceDataset();
      
    } catch (error) {
      console.error('❌ Error scraping website:', error.message);
      throw error;
    }
  }

  parsePublicationEntry(element, year) {
    const text = element.textContent.trim();
    if (!text || text.length < 50) return; // Skip short entries
    
    // Look for publication patterns
    const entry = this.extractPublicationData(text, year);
    if (entry) {
      this.publications.push(entry);
    }
  }

  extractPublicationData(text, year) {
    try {
      // Extract DOI/link
      const doiMatch = text.match(/https?:\/\/(?:doi\.org\/|dx\.doi\.org\/)?([^\s,\)]+)/);
      const arxivMatch = text.match(/https?:\/\/arxiv\.org\/[^\s,\)]+/);
      
      let link = null;
      let doi = null;
      
      if (doiMatch) {
        link = doiMatch[0];
        doi = doiMatch[1].replace('doi.org/', '');
      } else if (arxivMatch) {
        link = arxivMatch[0];
      }
      
      if (!link) return null; // Must have a link to be valid
      
      // Extract title (usually first sentence or until first period followed by capital letter)
      let title = text.split(/\.\s+[A-Z]/, 1)[0];
      if (title.length < 10) {
        // Try alternative: text until first author pattern
        const authorMatch = text.match(/^(.+?)\.\s*[A-Z][a-z]+,?\s+[A-Z]/);
        if (authorMatch) {
          title = authorMatch[1];
        } else {
          title = text.substring(0, Math.min(200, text.indexOf('.')));
        }
      }
      
      // Extract authors (after title, before journal)
      let authors = '';
      const afterTitle = text.substring(title.length).trim();
      const journalPattern = /\.\s*([A-Z][^,]+(?:Journal|Letters|Review|Proceedings|Science|Nature|Physical|Applied|Chemical)[^,]*)/;
      const journalMatch = afterTitle.match(journalPattern);
      
      if (journalMatch) {
        const beforeJournal = afterTitle.substring(0, journalMatch.index);
        authors = beforeJournal.replace(/^\.\s*/, '').trim();
      }
      
      // Extract journal
      let journal = '';
      if (journalMatch) {
        journal = journalMatch[1].trim();
      }
      
      // Extract year from text if not provided
      if (!year) {
        const yearMatch = text.match(/\((\d{4})\)/);
        year = yearMatch ? parseInt(yearMatch[1]) : new Date().getFullYear();
      }
      
      return {
        title: title.trim(),
        authors: authors.trim(),
        journal: journal.trim(),
        link: link.trim(),
        doi: doi,
        year: year,
        source: 'official_website',
        originalText: text.substring(0, 300) // Keep original for debugging
      };
      
    } catch (error) {
      console.warn('⚠️ Failed to parse entry:', text.substring(0, 100), error.message);
      return null;
    }
  }

  looksLikePublication(text) {
    // Check if text looks like a publication entry
    return text.length > 50 && 
           (text.includes('doi.org') || text.includes('arxiv.org')) &&
           text.match(/[A-Z][a-z]+,\s*[A-Z]/); // Author pattern
  }

  extractYear(text) {
    const yearMatch = text.match(/\((\d{4})\)/);
    return yearMatch ? parseInt(yearMatch[1]) : null;
  }

  async saveReferenceDataset() {
    try {
      // Sort by year descending, then by title
      this.publications.sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year;
        return a.title.localeCompare(b.title);
      });
      
      // Create summary
      const summary = {
        totalPublications: this.publications.length,
        yearRange: {
          earliest: Math.min(...this.publications.map(p => p.year)),
          latest: Math.max(...this.publications.map(p => p.year))
        },
        linkTypes: {
          doi: this.publications.filter(p => p.doi).length,
          arxiv: this.publications.filter(p => p.link.includes('arxiv')).length,
          other: this.publications.filter(p => !p.doi && !p.link.includes('arxiv')).length
        },
        scrapedDate: new Date().toISOString()
      };
      
      const dataset = {
        summary,
        publications: this.publications
      };
      
      // Save to JSON file
      await fs.writeFile('./official-website-reference.json', JSON.stringify(dataset, null, 2));
      
      // Also save a simple text report
      const report = this.generateReport(summary);
      await fs.writeFile('./official-website-analysis.md', report);
      
      console.log('💾 Saved reference dataset:');
      console.log(`  📄 official-website-reference.json (${this.publications.length} publications)`);
      console.log(`  📊 official-website-analysis.md (summary report)`);
      
    } catch (error) {
      console.error('❌ Error saving reference dataset:', error.message);
      throw error;
    }
  }

  generateReport(summary) {
    const yearStats = {};
    this.publications.forEach(pub => {
      yearStats[pub.year] = (yearStats[pub.year] || 0) + 1;
    });
    
    let report = `# Official Website Reference Dataset\n\n`;
    report += `**Scraped:** ${new Date(summary.scrapedDate).toLocaleString()}\n`;
    report += `**Source:** https://uonmmm.uk/publications/\n\n`;
    
    report += `## Summary\n\n`;
    report += `- **Total Publications:** ${summary.totalPublications}\n`;
    report += `- **Year Range:** ${summary.yearRange.earliest}-${summary.yearRange.latest}\n`;
    report += `- **DOI Links:** ${summary.linkTypes.doi}\n`;
    report += `- **arXiv Links:** ${summary.linkTypes.arxiv}\n`;
    report += `- **Other Links:** ${summary.linkTypes.other}\n\n`;
    
    report += `## Publications by Year\n\n`;
    Object.keys(yearStats).sort((a, b) => b - a).forEach(year => {
      report += `- **${year}:** ${yearStats[year]} publications\n`;
    });
    
    report += `\n## Sample Entries\n\n`;
    this.publications.slice(0, 5).forEach((pub, i) => {
      report += `### ${i + 1}. ${pub.title}\n`;
      report += `- **Authors:** ${pub.authors}\n`;
      report += `- **Journal:** ${pub.journal}\n`;
      report += `- **Link:** ${pub.link}\n`;
      report += `- **Year:** ${pub.year}\n\n`;
    });
    
    return report;
  }
}

// Run the scraper
const scraper = new OfficialWebsiteScraper();
await scraper.scrapeWebsite();