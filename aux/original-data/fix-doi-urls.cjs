#!/usr/bin/env node

/**
 * DOI URL Fixer for Publications Website
 * 
 * This script fixes DOI URLs that have extra path segments at the end.
 * Pattern: https://doi.org/10.1063/XXXXXXX/YYYYYY -> https://doi.org/10.1063/XXXXXXX
 * 
 * Usage: node fix-doi-urls.js
 */

const fs = require('fs');
const path = require('path');

const PUBLICATIONS_DIR = './src/data/publications/';
const REPORT_FILE = './doi-fix-report.txt';

// Regular expression to match DOI URLs with extra path segments
const DOI_PATTERN = /(https:\/\/doi\.org\/10\.\d+\/[^\/\s"]+)\/\d+/g;

function fixDoiUrls() {
    console.log('🔧 Starting DOI URL fixing process...\n');
    
    const report = [];
    let totalFilesProcessed = 0;
    let totalFixesApplied = 0;
    
    // Get all JSON files in the publications directory
    const files = fs.readdirSync(PUBLICATIONS_DIR)
        .filter(file => file.endsWith('.json') && file !== 'index.json' && file !== 'search-index.json')
        .sort();
    
    files.forEach(filename => {
        const filePath = path.join(PUBLICATIONS_DIR, filename);
        console.log(`📁 Processing ${filename}...`);
        
        try {
            // Read and parse the JSON file
            const content = fs.readFileSync(filePath, 'utf8');
            let jsonData = JSON.parse(content);
            
            let fileFixCount = 0;
            const fileReport = [];
            
            // Process each publication in the file
            jsonData.forEach(publication => {
                if (publication.link) {
                    const originalLink = publication.link;
                    const fixedLink = originalLink.replace(DOI_PATTERN, '$1');
                    
                    if (originalLink !== fixedLink) {
                        publication.link = fixedLink;
                        fileFixCount++;
                        totalFixesApplied++;
                        
                        const fix = {
                            id: publication.id,
                            title: publication.title.substring(0, 50) + '...',
                            originalLink,
                            fixedLink
                        };
                        
                        fileReport.push(fix);
                        console.log(`  ✅ Fixed ${publication.id}: ${originalLink} -> ${fixedLink}`);
                    }
                }
            });
            
            // Write the fixed JSON back to file if changes were made
            if (fileFixCount > 0) {
                fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
                console.log(`  💾 Saved ${filename} with ${fileFixCount} fixes\n`);
            } else {
                console.log(`  ✨ No fixes needed in ${filename}\n`);
            }
            
            // Add to report
            if (fileReport.length > 0) {
                report.push({
                    filename,
                    fixCount: fileFixCount,
                    fixes: fileReport
                });
            }
            
            totalFilesProcessed++;
            
        } catch (error) {
            console.error(`❌ Error processing ${filename}:`, error.message);
        }
    });
    
    // Generate detailed report
    generateReport(report, totalFilesProcessed, totalFixesApplied);
    
    console.log('\n🎉 DOI URL fixing complete!');
    console.log(`📊 Summary:`);
    console.log(`   - Files processed: ${totalFilesProcessed}`);
    console.log(`   - Total fixes applied: ${totalFixesApplied}`);
    console.log(`   - Report saved to: ${REPORT_FILE}`);
}

function generateReport(report, totalFiles, totalFixes) {
    const timestamp = new Date().toISOString();
    
    let reportContent = `DOI URL Fix Report
Generated: ${timestamp}

SUMMARY
=======
Total files processed: ${totalFiles}
Total fixes applied: ${totalFixes}
Files with fixes: ${report.length}

DETAILED FIXES
==============

`;

    report.forEach(fileData => {
        reportContent += `${fileData.filename} (${fileData.fixCount} fixes)
${'='.repeat(fileData.filename.length + 10)}

`;
        
        fileData.fixes.forEach(fix => {
            reportContent += `${fix.id}: ${fix.title}
  BEFORE: ${fix.originalLink}
  AFTER:  ${fix.fixedLink}

`;
        });
        
        reportContent += '\n';
    });
    
    reportContent += `
REGEX PATTERN USED
==================
Pattern: /(https:\\/\\/doi\\.org\\/10\\.\\d+\\/[^\\/\\s"]+)\\/\\d+/g
Replacement: $1

This pattern matches DOI URLs with extra numeric path segments and removes them.
Examples:
- https://doi.org/10.1063/5.0103390/2834075 -> https://doi.org/10.1063/5.0103390
- https://doi.org/10.1063/1.5114692/197975 -> https://doi.org/10.1063/1.5114692
`;
    
    fs.writeFileSync(REPORT_FILE, reportContent);
}

// Run the fix if this script is executed directly
if (require.main === module) {
    fixDoiUrls();
}

module.exports = { fixDoiUrls };