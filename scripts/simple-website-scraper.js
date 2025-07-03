#!/usr/bin/env node
// Simplified scraper to extract publication data from the website text

import fs from 'fs/promises';

// Raw website text data (we'll update this with actual content)
const websiteText = `
Probing and manipulating the Mexican hat-shaped valence band of In2Se3. Felton, J., Harknett, J., Page, J., Yang, Z., Alghofaili, N., O'Shea, J. N., Eaves, L., Kohama, Y., Greenaway, M. T., & Patanè, A. (2025). Nature Communications 2025 16:1, 16(1), 1–9. https://doi.org/10.1038/s41467-025-56139-8

A versatile system for the growth of porphyrin films via electrospray and molecular sublimation in vacuum and their multi-technique characterization. Goto, F., Calloni, A., Yivlialin, R., Bossi, A., Ciccacci, F., Duò, L., O'Shea, J. N., & Bussetti, G. (2024). Review of Scientific Instruments, 95(9), 093902–093902. https://doi.org/10.1063/5.0223459
`;

class SimpleWebsiteScraper {
  constructor() {
    this.publications = [];
  }

  async parseTextData() {
    console.log('📝 Parsing website text data...');
    
    // For now, let's manually parse a few examples to establish the pattern
    const lines = websiteText.trim().split('\n\n').filter(line => line.trim());
    
    lines.forEach((line, index) => {
      const entry = this.parsePublicationLine(line.trim());
      if (entry) {
        this.publications.push(entry);
        console.log(`✅ Parsed: ${entry.title.substring(0, 50)}...`);
      }
    });
    
    console.log(`📚 Total publications parsed: ${this.publications.length}`);
    
    // Save the data
    await this.saveData();
  }

  parsePublicationLine(text) {
    if (!text || text.length < 50) return null;
    
    try {
      // Extract DOI link (most reliable identifier)
      const doiMatch = text.match(/https:\/\/doi\.org\/([^\s]+)/);
      if (!doiMatch) return null;
      
      const link = doiMatch[0];
      const doi = doiMatch[1];
      
      // Extract title (everything before the first author)
      // Look for pattern: "Title. FirstAuthor, "
      const titleMatch = text.match(/^(.+?)\.\s+([A-Z][a-z]+,\s*[A-Z])/);
      let title = '';
      let authorsStart = 0;
      
      if (titleMatch) {
        title = titleMatch[1].trim();
        authorsStart = titleMatch[1].length + 2; // +2 for ". "
      } else {
        // Fallback: take everything before DOI
        const beforeDoi = text.substring(0, text.indexOf('https://'));
        const lastPeriod = beforeDoi.lastIndexOf('.');
        if (lastPeriod > 50) {
          title = beforeDoi.substring(0, lastPeriod).trim();
          authorsStart = lastPeriod + 2;
        }
      }
      
      // Extract authors and journal (between title and DOI)
      const beforeDoi = text.substring(authorsStart, text.indexOf('https://'));
      const parts = beforeDoi.split('.');
      
      let authors = '';
      let journal = '';
      
      if (parts.length >= 2) {
        authors = parts[0].trim();
        journal = parts.slice(1).join('.').trim();
      }
      
      // Extract year from text
      const yearMatch = text.match(/\((\d{4})\)/);
      const year = yearMatch ? parseInt(yearMatch[1]) : 2024;
      
      return {
        title: title,
        authors: authors,
        journal: journal,
        link: link,
        doi: doi,
        year: year,
        source: 'official_website'
      };
      
    } catch (error) {
      console.warn('⚠️ Failed to parse:', text.substring(0, 100));
      return null;
    }
  }

  async saveData() {
    const dataset = {
      summary: {
        totalPublications: this.publications.length,
        scrapedDate: new Date().toISOString(),
        source: 'https://uonmmm.uk/publications/'
      },
      publications: this.publications
    };
    
    await fs.writeFile('./official-website-sample.json', JSON.stringify(dataset, null, 2));
    console.log('💾 Saved sample dataset to official-website-sample.json');
  }
}

// Create a small sample for now
const scraper = new SimpleWebsiteScraper();
await scraper.parseTextData();