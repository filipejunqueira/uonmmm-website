// Test script to verify the optimized component is working
// Run with: node test-optimization.js

import fs from 'fs';
import path from 'path';

console.log('🧪 Testing Publications Optimization...\n');

// Test 1: Verify App.jsx uses optimized component
const appJsxPath = './src/App.jsx';
const appContent = fs.readFileSync(appJsxPath, 'utf8');

console.log('1. App.jsx Component Import Test:');
if (appContent.includes('PublicationsSectionOptimized')) {
  console.log('   ✅ App.jsx imports PublicationsSectionOptimized');
} else {
  console.log('   ❌ App.jsx still uses old PublicationsSection');
}

if (appContent.includes('<PublicationsSectionOptimized />')) {
  console.log('   ✅ App.jsx renders PublicationsSectionOptimized');
} else {
  console.log('   ❌ App.jsx still renders old PublicationsSection');
}

// Test 2: Verify data files exist
console.log('\n2. Data Files Structure Test:');
const dataDir = './src/data/publications';
const indexPath = path.join(dataDir, 'index.json');
const searchIndexPath = path.join(dataDir, 'search-index.json');

if (fs.existsSync(indexPath)) {
  console.log('   ✅ index.json exists');
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  console.log(`   ✅ ${index.years.length} years defined`);
  console.log(`   ✅ ${index.total} total publications`);
  console.log(`   ✅ Recent years: ${index.recentYears.join(', ')}`);
} else {
  console.log('   ❌ index.json missing');
}

if (fs.existsSync(searchIndexPath)) {
  console.log('   ✅ search-index.json exists');
} else {
  console.log('   ❌ search-index.json missing');
}

// Test 3: Verify year files exist
console.log('\n3. Year Files Test:');
const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
let missingFiles = 0;

index.years.forEach(year => {
  const yearFile = path.join(dataDir, `${year}.json`);
  if (fs.existsSync(yearFile)) {
    const yearData = JSON.parse(fs.readFileSync(yearFile, 'utf8'));
    console.log(`   ✅ ${year}.json (${yearData.length} publications)`);
  } else {
    console.log(`   ❌ ${year}.json missing`);
    missingFiles++;
  }
});

// Test 4: Verify component file exists and has required features
console.log('\n4. Component Features Test:');
const componentPath = './src/components/PublicationsSectionOptimized.jsx';
if (fs.existsSync(componentPath)) {
  const componentContent = fs.readFileSync(componentPath, 'utf8');
  
  if (componentContent.includes('useVirtualizer')) {
    console.log('   ✅ Virtual scrolling implemented');
  } else {
    console.log('   ❌ Virtual scrolling missing');
  }
  
  if (componentContent.includes('searchQuery')) {
    console.log('   ✅ Search functionality implemented');
  } else {
    console.log('   ❌ Search functionality missing');
  }
  
  if (componentContent.includes('loadYear')) {
    console.log('   ✅ Lazy loading implemented');
  } else {
    console.log('   ❌ Lazy loading missing');
  }
  
  if (componentContent.includes('../data/publications/')) {
    console.log('   ✅ Relative import paths used');
  } else {
    console.log('   ❌ Absolute import paths detected (Vite incompatible)');
  }
} else {
  console.log('   ❌ PublicationsSectionOptimized.jsx missing');
}

// Test 5: Backup verification
console.log('\n5. Backup Safety Test:');
const backupPath = './src/App.jsx.backup';
if (fs.existsSync(backupPath)) {
  const backupContent = fs.readFileSync(backupPath, 'utf8');
  if (backupContent.includes('PublicationsSection') && !backupContent.includes('PublicationsSectionOptimized')) {
    console.log('   ✅ App.jsx.backup contains original component');
  } else {
    console.log('   ❌ App.jsx.backup may be corrupted');
  }
} else {
  console.log('   ❌ App.jsx.backup missing (no rollback available)');
}

console.log('\n🎯 Optimization Deployment Summary:');
console.log(`   Total Publications: ${index.total}`);
console.log(`   Years Covered: ${index.years.length}`);
console.log(`   Missing Files: ${missingFiles}`);
console.log(`   Component Deployed: ${fs.existsSync(componentPath) ? 'Yes' : 'No'}`);
console.log(`   Backup Available: ${fs.existsSync(backupPath) ? 'Yes' : 'No'}`);

console.log('\n📋 Next Steps:');
console.log('   1. Visit http://localhost:3000/uonmmm-website/');
console.log('   2. Test lazy loading by clicking year buttons');
console.log('   3. Test search functionality');
console.log('   4. Verify mobile responsiveness');
console.log('   5. Check browser dev tools for chunk loading');