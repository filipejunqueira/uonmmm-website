#!/usr/bin/env node
// Regenerate search index from the new publication JSON files
import fs from 'fs/promises';
import path from 'path';

class SearchIndexGenerator {
  constructor() {
    this.publicationsDir = './src/data/publications';
    this.searchIndex = [];
  }

  async generateIndex() {
    console.log('🔍 Regenerating search index...');
    
    // Get all year files
    const files = await fs.readdir(this.publicationsDir);
    const yearFiles = files.filter(file => 
      file.match(/^\d{4}\.json$/) && !file.includes('backup')
    ).sort((a, b) => {
      const yearA = parseInt(a.replace('.json', ''));
      const yearB = parseInt(b.replace('.json', ''));
      return yearB - yearA; // Descending order (newest first)
    });

    console.log(`Found ${yearFiles.length} year files`);

    let totalPublications = 0;

    for (const yearFile of yearFiles) {
      const year = parseInt(yearFile.replace('.json', ''));
      const filePath = path.join(this.publicationsDir, yearFile);
      
      try {
        const content = await fs.readFile(filePath, 'utf8');
        const publications = JSON.parse(content);
        
        console.log(`Processing ${year}: ${publications.length} publications`);
        
        publications.forEach((pub, index) => {
          const id = `${year}-${String(index + 1).padStart(3, '0')}`;
          
          // Create search text from all fields
          const searchText = [
            pub.title || '',
            pub.authors || '',
            pub.journal || '',
            pub.year || year
          ].join(' ').toLowerCase();

          // Create title short (truncate at 50 chars)
          const titleShort = pub.title && pub.title.length > 50 
            ? pub.title.substring(0, 50) + '...'
            : pub.title || '';

          this.searchIndex.push({
            id,
            year: pub.year || year,
            searchText,
            title: pub.title || '',
            titleShort,
            authors: pub.authors || '',
            journal: pub.journal || '',
            link: pub.link || ''
          });
        });
        
        totalPublications += publications.length;
        
      } catch (error) {
        console.error(`❌ Error processing ${yearFile}:`, error.message);
      }
    }

    // Save the search index
    const searchIndexPath = path.join(this.publicationsDir, 'search-index.json');
    await fs.writeFile(searchIndexPath, JSON.stringify(this.searchIndex, null, 2));
    
    console.log(`\n✅ Search index regenerated successfully!`);
    console.log(`   Total publications indexed: ${totalPublications}`);
    console.log(`   Search index entries: ${this.searchIndex.length}`);
    console.log(`   Years covered: ${yearFiles.length}`);
    console.log(`   Output: ${searchIndexPath}`);
  }
}

// Main execution
async function main() {
  const generator = new SearchIndexGenerator();
  
  try {
    await generator.generateIndex();
  } catch (error) {
    console.error('\n❌ Failed to regenerate search index:', error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { SearchIndexGenerator };