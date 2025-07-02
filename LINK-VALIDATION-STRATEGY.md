# Link Validation Strategy for Publications

## Overview
This document outlines strategies to validate 426 publication links and ensure they point to the correct papers.

## Validation Methods

### 1. DOI Validation (Primary Method)
Most academic publications use DOI (Digital Object Identifier) links. We can validate these using:

#### a) Crossref API
- **Endpoint**: `https://api.crossref.org/works/{doi}`
- **Rate Limit**: 50 requests/second (with polite pool)
- **What it provides**:
  - Publication title
  - Authors list
  - Journal name
  - Publication date
  - Abstract (sometimes)
  - Citations count

**Implementation**:
```javascript
async function validateDOI(doi) {
  const cleanDoi = doi.replace('https://doi.org/', '');
  const response = await fetch(`https://api.crossref.org/works/${cleanDoi}`);
  if (response.ok) {
    const data = await response.json();
    return {
      valid: true,
      title: data.message.title[0],
      authors: data.message.author?.map(a => `${a.given} ${a.family}`).join(', '),
      journal: data.message['container-title']?.[0],
      published: data.message.published?.['date-parts']?.[0]?.join('-')
    };
  }
  return { valid: false };
}
```

#### b) DOI.org Resolution Check
- Simply check if `https://doi.org/{doi}` resolves (HTTP 200)
- Faster but doesn't verify metadata

### 2. arXiv Links
For preprints on arXiv:
- Pattern: `https://arxiv.org/abs/{id}`
- API: `http://export.arxiv.org/api/query?id_list={id}`
- Returns XML with title, authors, abstract

### 3. Direct URL Validation
For non-DOI links:
- HTTP HEAD request to check if URL is accessible
- Check for 200 OK status
- Handle redirects (follow up to 5 redirects)
- Check content-type is appropriate (text/html, application/pdf)

### 4. Title Matching
Compare our stored title with the retrieved title:
- Use Levenshtein distance for fuzzy matching
- Flag if similarity < 80%
- Account for LaTeX encoding differences

## Implementation Plan

### Step 1: Categorize Links
```javascript
const linkTypes = {
  doi: [],      // https://doi.org/...
  arxiv: [],    // https://arxiv.org/...
  direct: [],   // Other URLs
  missing: []   // No link provided
};
```

### Step 2: Batch Validation
- Process in batches of 10-20 to avoid rate limits
- Add 100ms delay between batches
- Implement retry logic with exponential backoff

### Step 3: Validation Report
Generate a JSON report with:
```json
{
  "validationDate": "2025-01-28",
  "summary": {
    "total": 426,
    "valid": 350,
    "invalid": 50,
    "needsReview": 26
  },
  "publications": [
    {
      "id": "2025-001",
      "originalLink": "https://doi.org/10.1038/s41467-025-56139-8",
      "status": "valid",
      "metadata": {
        "retrievedTitle": "...",
        "titleMatch": 0.95,
        "authorsMatch": true
      }
    }
  ]
}
```

### Step 4: Error Handling
- **404 Not Found**: Mark as broken link
- **403 Forbidden**: Mark as access restricted
- **Timeout**: Retry up to 3 times
- **SSL Errors**: Flag for manual review

## Validation Script Structure

```javascript
// validate-links.js
import { allPublications } from './src/data/publications.js';
import axios from 'axios';
import fs from 'fs/promises';

class PublicationValidator {
  constructor() {
    this.results = [];
    this.crossrefDelay = 100; // ms between requests
  }

  async validateAll() {
    // 1. Categorize by link type
    // 2. Validate each category with appropriate method
    // 3. Generate report
    // 4. Save results
  }

  async validateDOI(publication) {
    // Crossref API validation
  }

  async validateArxiv(publication) {
    // arXiv API validation
  }

  async validateDirectURL(publication) {
    // HTTP HEAD validation
  }

  calculateTitleSimilarity(title1, title2) {
    // Levenshtein distance calculation
  }

  async saveReport(results) {
    // Save JSON and Markdown reports
  }
}
```

## Expected Outcomes

1. **Validation Report**: Complete status of all 426 links
2. **Broken Links List**: Publications needing immediate attention
3. **Metadata Mismatches**: Where our data differs from source
4. **Performance Metrics**: How long validation took
5. **Recommendations**: Suggested fixes for each issue

## Mobile Performance Considerations

While validating, we'll also prepare for performance optimization:
- Track publication years with most entries
- Identify longest titles/author lists
- Plan for lazy loading boundaries

## Next Steps

1. Install required dependencies (`axios`, `levenshtein`)
2. Implement the validation script
3. Run initial validation
4. Review and fix critical issues
5. Set up automated periodic validation