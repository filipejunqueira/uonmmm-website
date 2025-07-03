#!/usr/bin/env node
// Quick test of validation script with first 5 publications
import { allPublications } from './src/data/publications.js';
import axios from 'axios';

async function testValidation() {
  console.log('🧪 Testing validation with first 5 publications...\n');
  
  const testPubs = allPublications.slice(0, 5);
  
  for (let i = 0; i < testPubs.length; i++) {
    const pub = testPubs[i];
    console.log(`${i + 1}. Testing: ${pub.title?.substring(0, 50)}...`);
    console.log(`   Link: ${pub.link}`);
    
    if (pub.link?.includes('doi.org')) {
      try {
        const doi = pub.link.replace('https://doi.org/', '');
        const response = await axios.get(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
          headers: { 'User-Agent': 'TestValidator/1.0' },
          timeout: 5000
        });
        
        if (response.data.status === 'ok') {
          const title = response.data.message.title?.[0] || 'No title';
          console.log(`   ✅ DOI resolves: ${title.substring(0, 50)}...`);
        } else {
          console.log(`   ❌ DOI invalid`);
        }
      } catch (error) {
        console.log(`   ❌ DOI error: ${error.response?.status || error.message}`);
      }
    } else if (pub.link) {
      try {
        const response = await axios.head(pub.link, { timeout: 5000, maxRedirects: 3 });
        console.log(`   ✅ URL accessible: HTTP ${response.status}`);
      } catch (error) {
        console.log(`   ❌ URL error: ${error.response?.status || error.message}`);
      }
    } else {
      console.log(`   ⚠️  No link provided`);
    }
    
    console.log('');
    
    // Small delay to be polite
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log('🎉 Test complete! Full validation script is ready to run.');
}

testValidation().catch(console.error);