#!/usr/bin/env node
// Extract publications from original HTML file and convert to JSON format
import fs from 'fs/promises';
import { JSDOM } from 'jsdom';
import path from 'path';

class HTMLPublicationExtractor {
  constructor() {
    this.htmlFilePath = './uonmmm_original_publications_.html';
    this.extractedData = {};
    this.stats = {
      totalPublications: 0,
      totalYears: 0,
      publicationsByYear: {}
    };
  }

  async extractPublications() {
    console.log('📖 Reading original HTML file...');
    
    try {
      const htmlContent = await fs.readFile(this.htmlFilePath, 'utf8');
      const dom = new JSDOM(htmlContent);
      const document = dom.window.document;
      
      console.log('🔍 Extracting publications by year...\n');
      
      // Find all year headers (h3 elements with id="YEAR")
      const yearHeaders = document.querySelectorAll('h3[id]');
      
      for (const yearHeader of yearHeaders) {
        const year = parseInt(yearHeader.id);
        if (isNaN(year) || year < 1990 || year > 2030) continue;
        
        console.log(`Processing year: ${year}`);
        
        const publications = this.extractPublicationsForYear(yearHeader, document);
        
        if (publications.length > 0) {
          this.extractedData[year] = publications;
          this.stats.publicationsByYear[year] = publications.length;
          this.stats.totalPublications += publications.length;
          console.log(`  Found ${publications.length} publications`);
        }
      }
      
      this.stats.totalYears = Object.keys(this.extractedData).length;
      
      await this.saveExtractedData();
      this.printStats();
      
    } catch (error) {
      console.error('❌ Error extracting publications:', error.message);
      throw error;
    }
  }

  extractPublicationsForYear(yearHeader, document) {
    const publications = [];
    const year = parseInt(yearHeader.id);
    
    // Find the containing table row of the year header
    let currentRow = yearHeader.closest('tr');
    if (!currentRow) return publications;
    
    // Look for the next row that contains the csl-bib-body
    let nextRow = currentRow.nextElementSibling;
    
    // The publications should be in the very next row after the year header
    if (nextRow) {
      // Look for csl-bib-body containers in this row
      const cslBodies = nextRow.querySelectorAll('.csl-bib-body');
      
      for (const cslBody of cslBodies) {
        // Find all csl-entry elements within this body
        const cslEntries = cslBody.querySelectorAll('.csl-entry');
        
        for (const entry of cslEntries) {
          const publication = this.parsePublicationEntry(entry, year);
          if (publication) {
            publications.push(publication);
          }
        }
      }
      
      // If no csl-bib-body found, check for direct csl-entry elements
      if (cslBodies.length === 0) {
        const cslEntries = nextRow.querySelectorAll('.csl-entry');
        for (const entry of cslEntries) {
          const publication = this.parsePublicationEntry(entry, year);
          if (publication) {
            publications.push(publication);
          }
        }
      }
    }
    
    return publications;
  }

  parsePublicationEntry(cslEntry, year) {
    try {
      // Extract title (usually in <b> tags)
      const titleElement = cslEntry.querySelector('b');
      const title = titleElement ? titleElement.textContent.trim().replace(/\.$/, '') : '';
      
      if (!title) return null;
      
      // Extract the full text content
      const fullText = cslEntry.textContent.trim();
      
      // Extract authors (text between title and year or journal info)
      const titleEndIndex = fullText.indexOf(title) + title.length;
      let authorsAndJournal = fullText.substring(titleEndIndex).trim();
      
      // Remove leading period if present
      if (authorsAndJournal.startsWith('.')) {
        authorsAndJournal = authorsAndJournal.substring(1).trim();
      }
      
      // Find the year pattern (year in parentheses)
      const yearPattern = new RegExp(`\\(${year}[a-z]?\\)`);
      const yearMatch = authorsAndJournal.match(yearPattern);
      
      let authors = '';
      let journal = '';
      
      if (yearMatch) {
        const yearIndex = authorsAndJournal.indexOf(yearMatch[0]);
        authors = authorsAndJournal.substring(0, yearIndex).trim();
        journal = authorsAndJournal.substring(yearIndex).trim();
      } else {
        // Fallback: try to split at journal patterns
        const journalPatterns = [
          /\.\s*([A-Z][^.]*(?:\d+.*)?)\s*,/,
          /\.\s*([A-Z][^.]*)\s*$/
        ];
        
        for (const pattern of journalPatterns) {
          const match = authorsAndJournal.match(pattern);
          if (match) {
            const matchIndex = authorsAndJournal.indexOf(match[0]);
            authors = authorsAndJournal.substring(0, matchIndex).trim();
            journal = authorsAndJournal.substring(matchIndex + 1).trim();
            break;
          }
        }
        
        if (!journal) {
          // Last resort: split at first period
          const periodIndex = authorsAndJournal.indexOf('.');
          if (periodIndex > 0) {
            authors = authorsAndJournal.substring(0, periodIndex).trim();
            journal = authorsAndJournal.substring(periodIndex + 1).trim();
          } else {
            authors = authorsAndJournal;
          }
        }
      }
      
      // Extract DOI link
      const linkElement = cslEntry.querySelector('a[href]');
      let link = '';
      if (linkElement) {
        link = linkElement.href || linkElement.getAttribute('href') || '';
        // Keep the full DOI link - no truncation needed
      }
      
      return {
        year,
        title: title.replace(/\.$/, ''), // Remove trailing period
        authors: authors.replace(/\.$/, ''), // Remove trailing period
        journal: journal.replace(/^,\s*/, '').replace(/\.$/, ''), // Remove leading comma and trailing period
        link: link
      };
      
    } catch (error) {
      console.warn(`⚠️  Error parsing publication entry: ${error.message}`);
      return null;
    }
  }

  async saveExtractedData() {
    console.log('\n💾 Saving extracted data...');
    
    // Create output directory
    const outputDir = './extracted-publications';
    await fs.mkdir(outputDir, { recursive: true });
    
    // Save individual year files
    for (const [year, publications] of Object.entries(this.extractedData)) {
      const filename = path.join(outputDir, `${year}.json`);
      await fs.writeFile(filename, JSON.stringify(publications, null, 2));
      console.log(`  Saved ${year}.json (${publications.length} publications)`);
    }
    
    // Save index file
    const index = {
      years: Object.keys(this.extractedData).map(year => ({
        year: parseInt(year),
        count: this.extractedData[year].length
      })).sort((a, b) => b.year - a.year)
    };
    
    await fs.writeFile(
      path.join(outputDir, 'index.json'), 
      JSON.stringify(index, null, 2)
    );
    console.log(`  Saved index.json`);
    
    // Save full dataset
    await fs.writeFile(
      path.join(outputDir, 'all-publications.json'), 
      JSON.stringify(this.extractedData, null, 2)
    );
    console.log(`  Saved all-publications.json`);
    
    // Save stats
    await fs.writeFile(
      path.join(outputDir, 'extraction-stats.json'), 
      JSON.stringify(this.stats, null, 2)
    );
    console.log(`  Saved extraction-stats.json`);
  }

  printStats() {
    console.log('\n📊 Extraction Statistics:');
    console.log(`   Total Publications: ${this.stats.totalPublications}`);
    console.log(`   Total Years: ${this.stats.totalYears}`);
    console.log(`   Year Range: ${Math.min(...Object.keys(this.extractedData).map(Number))} - ${Math.max(...Object.keys(this.extractedData).map(Number))}`);
    
    console.log('\n📈 Publications by Year:');
    const sortedYears = Object.keys(this.stats.publicationsByYear)
      .map(Number)
      .sort((a, b) => b - a);
    
    for (const year of sortedYears) {
      console.log(`   ${year}: ${this.stats.publicationsByYear[year]} publications`);
    }
  }
}

// Main execution
async function main() {
  const extractor = new HTMLPublicationExtractor();
  
  try {
    await extractor.extractPublications();
    console.log('\n✅ Extraction completed successfully!');
    console.log('📁 Check ./extracted-publications/ folder for results');
  } catch (error) {
    console.error('\n❌ Extraction failed:', error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { HTMLPublicationExtractor };