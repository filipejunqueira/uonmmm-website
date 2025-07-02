#!/usr/bin/env node
// Split publications by year for performance optimization
import { allPublications } from './src/data/publications.js';
import fs from 'fs/promises';
import path from 'path';

async function splitPublications() {
  console.log('📦 Splitting 426 publications by year for performance optimization...\n');
  
  // Group publications by year
  const byYear = {};
  const yearCounts = {};
  
  allPublications.forEach(pub => {
    if (!byYear[pub.year]) {
      byYear[pub.year] = [];
      yearCounts[pub.year] = 0;
    }
    byYear[pub.year].push(pub);
    yearCounts[pub.year]++;
  });
  
  // Create publications directory
  const pubsDir = './src/data/publications';
  try {
    await fs.mkdir(pubsDir, { recursive: true });
    console.log('✅ Created publications directory');
  } catch (error) {
    console.log('📁 Publications directory already exists');
  }
  
  // Sort years for processing
  const sortedYears = Object.keys(byYear).sort((a, b) => b - a);
  
  console.log(`\n📊 Year distribution:`);
  sortedYears.forEach(year => {
    console.log(`  ${year}: ${yearCounts[year]} publications`);
  });
  
  // Save each year's publications
  console.log('\n💾 Saving year files...');
  for (const year of sortedYears) {
    const yearFile = path.join(pubsDir, `${year}.json`);
    await fs.writeFile(yearFile, JSON.stringify(byYear[year], null, 2));
    console.log(`  ✅ Saved ${year}.json (${byYear[year].length} publications)`);
  }
  
  // Create index file
  const index = {
    years: sortedYears,
    counts: yearCounts,
    total: allPublications.length,
    lastUpdated: new Date().toISOString(),
    recentYears: sortedYears.slice(0, 3), // Most recent 3 years for initial load
    performance: {
      originalFileSize: '82,730 tokens',
      splitFiles: sortedYears.length,
      averageFileSize: Math.round(allPublications.length / sortedYears.length)
    }
  };
  
  const indexFile = path.join(pubsDir, 'index.json');
  await fs.writeFile(indexFile, JSON.stringify(index, null, 2));
  console.log(`  ✅ Saved index.json`);
  
  // Create search index for fast searching
  const searchIndex = allPublications.map((pub, i) => ({
    id: `${pub.year}-${String(i + 1).padStart(3, '0')}`,
    year: pub.year,
    searchText: `${pub.title || ''} ${pub.authors || ''} ${pub.journal || ''}`.toLowerCase(),
    title: pub.title || '',
    titleShort: (pub.title || '').substring(0, 60) + (pub.title?.length > 60 ? '...' : '')
  }));
  
  const searchFile = path.join(pubsDir, 'search-index.json');
  await fs.writeFile(searchFile, JSON.stringify(searchIndex, null, 2));
  console.log(`  ✅ Saved search-index.json (${searchIndex.length} entries)`);
  
  // Calculate performance improvement
  const originalSize = JSON.stringify(allPublications).length;
  const indexSize = JSON.stringify(index).length;
  const searchIndexSize = JSON.stringify(searchIndex).length;
  const initialLoadSize = indexSize + searchIndexSize;
  
  // Size of recent 3 years
  const recentYearsData = index.recentYears.map(year => byYear[year]).flat();
  const recentYearsSize = JSON.stringify(recentYearsData).length;
  const totalInitialSize = initialLoadSize + recentYearsSize;
  
  const reduction = ((originalSize - totalInitialSize) / originalSize * 100).toFixed(1);
  
  console.log('\n📈 Performance Analysis:');
  console.log(`  Original bundle size: ${(originalSize / 1024).toFixed(1)} KB`);
  console.log(`  New initial load: ${(totalInitialSize / 1024).toFixed(1)} KB`);
  console.log(`  Bundle size reduction: ${reduction}%`);
  console.log(`  Files that load on demand: ${sortedYears.length - 3} years`);
  
  console.log('\n🎯 Next steps:');
  console.log('  1. Update PublicationsSection.jsx to use new split data');
  console.log('  2. Implement lazy loading for older years');
  console.log('  3. Add search functionality using search-index.json');
  console.log('  4. Test mobile performance improvements');
  
  console.log('\n✅ Publications successfully split by year!');
}

splitPublications().catch(console.error);