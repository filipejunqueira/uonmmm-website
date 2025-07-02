# Performance Optimization Strategy for Publications

## Current Issues

1. **Large Bundle Size**: 
   - Single publications.js file: 3,703 lines (82,730 tokens)
   - All 426 publications load into memory at once
   - Initial JavaScript parse time is significant on mobile

2. **Mobile-Specific Problems**:
   - Slow initial render on low-powered devices
   - Memory constraints cause browser lag
   - Long scroll lists perform poorly

3. **Current Implementation**:
   - Uses `@tanstack/react-virtual` for virtualization (good!)
   - But still loads all data upfront (bad for mobile)

## Optimization Strategies

### 1. Data Splitting by Year

**Current Structure**:
```javascript
// All in one file
export const allPublications = [
  { year: 2025, ... },
  { year: 2025, ... },
  // ... 426 items
];
```

**Optimized Structure**:
```
src/data/publications/
  ├── index.js          // Year index only
  ├── 2025.json         // 1 publication
  ├── 2024.json         // 25 publications
  ├── 2023.json         // 30 publications
  └── ...
```

**Benefits**:
- Load only visible years initially
- Lazy load other years on demand
- Reduce initial bundle by ~95%

### 2. Progressive Loading Strategy

```javascript
// Initial load: Recent 3 years only
const recentYears = [2025, 2024, 2023];
const initialData = await loadYears(recentYears);

// Load more as user scrolls
const loadMoreYears = async (year) => {
  const data = await import(`./publications/${year}.json`);
  return data.default;
};
```

### 3. Mobile-Specific Optimizations

#### a) Simplified Mobile View
```javascript
const MobilePublicationCard = () => (
  <div className="p-4">
    <h4 className="text-sm font-semibold line-clamp-2">{title}</h4>
    <p className="text-xs text-gray-600 mt-1">{year} • {journal}</p>
    <a href={link} className="text-xs">View →</a>
  </div>
);
```

#### b) Pagination Option
```javascript
const ITEMS_PER_PAGE_MOBILE = 20;

if (isMobile) {
  return <PaginatedPublications itemsPerPage={ITEMS_PER_PAGE_MOBILE} />;
}
```

#### c) Search-First Interface on Mobile
- Show search bar prominently
- Load results on-demand
- No initial data load

### 4. Implementation Plan

#### Step 1: Create Year-Based Data Files
```javascript
// build-publications.js
import { allPublications } from './src/data/publications.js';
import fs from 'fs/promises';

async function splitPublications() {
  const byYear = {};
  
  // Group by year
  allPublications.forEach(pub => {
    if (!byYear[pub.year]) byYear[pub.year] = [];
    byYear[pub.year].push(pub);
  });
  
  // Create directory
  await fs.mkdir('./src/data/publications', { recursive: true });
  
  // Save each year
  for (const [year, pubs] of Object.entries(byYear)) {
    await fs.writeFile(
      `./src/data/publications/${year}.json`,
      JSON.stringify(pubs, null, 2)
    );
  }
  
  // Create index
  const index = {
    years: Object.keys(byYear).sort((a, b) => b - a),
    counts: Object.fromEntries(
      Object.entries(byYear).map(([year, pubs]) => [year, pubs.length])
    )
  };
  
  await fs.writeFile(
    './src/data/publications/index.json',
    JSON.stringify(index, null, 2)
  );
}
```

#### Step 2: Update PublicationsSection Component
```javascript
// Progressive loading implementation
const PublicationsSection = () => {
  const [loadedYears, setLoadedYears] = useState({});
  const [yearIndex, setYearIndex] = useState(null);
  
  // Load index on mount
  useEffect(() => {
    import('./data/publications/index.json').then(data => {
      setYearIndex(data.default);
      // Load recent 3 years
      loadInitialYears(data.default.years.slice(0, 3));
    });
  }, []);
  
  const loadYear = async (year) => {
    if (loadedYears[year]) return;
    
    const data = await import(`./data/publications/${year}.json`);
    setLoadedYears(prev => ({
      ...prev,
      [year]: data.default
    }));
  };
  
  // Rest of component...
};
```

#### Step 3: Add Loading States
```javascript
const YearSection = ({ year, count }) => {
  const [loading, setLoading] = useState(false);
  const [publications, setPublications] = useState(null);
  
  if (!publications) {
    return (
      <div className="p-4 text-center">
        <button onClick={() => loadPublications(year)}>
          Load {year} ({count} publications)
        </button>
      </div>
    );
  }
  
  return <PublicationsList items={publications} />;
};
```

### 5. Search Optimization

#### Create Search Index
```javascript
// build-search-index.js
const searchIndex = allPublications.map(pub => ({
  id: `${pub.year}-${pub.title.slice(0, 20)}`,
  year: pub.year,
  searchText: `${pub.title} ${pub.authors} ${pub.journal}`.toLowerCase(),
  title: pub.title
}));

// Save compressed search index
await fs.writeFile(
  './src/data/publications/search-index.json',
  JSON.stringify(searchIndex)
);
```

#### Implement Search
```javascript
const usePublicationSearch = () => {
  const [searchIndex, setSearchIndex] = useState(null);
  const [results, setResults] = useState([]);
  
  const search = useMemo(() => 
    debounce(async (query) => {
      if (!searchIndex) return;
      
      const matches = searchIndex.filter(item =>
        item.searchText.includes(query.toLowerCase())
      );
      
      // Load full data for matches
      const fullResults = await loadPublicationsByIds(matches);
      setResults(fullResults);
    }, 300),
    [searchIndex]
  );
  
  return { search, results };
};
```

### 6. Performance Metrics

#### Before Optimization:
- Initial JS Bundle: ~350KB (publications data)
- Time to Interactive (mobile): ~3-5 seconds
- Memory Usage: ~50MB

#### Expected After Optimization:
- Initial JS Bundle: ~20KB (3 years only)
- Time to Interactive (mobile): <1 second
- Memory Usage: ~10MB initially

### 7. Additional Mobile Optimizations

1. **Service Worker Caching**:
   - Cache year files after first load
   - Offline access to previously viewed years

2. **Intersection Observer**:
   - Auto-load years as user approaches them
   - Preload next year in background

3. **Reduced Motion**:
   - Disable animations on low-end devices
   - Simpler transitions

4. **Network-Aware Loading**:
   - Check connection speed
   - Adjust loading strategy accordingly

## Implementation Priority

1. **High Priority**:
   - Split data by year
   - Implement lazy loading
   - Add loading states

2. **Medium Priority**:
   - Search functionality
   - Mobile pagination
   - Service worker

3. **Low Priority**:
   - Network-aware loading
   - Advanced caching strategies

## Testing Strategy

1. **Performance Testing**:
   - Use Lighthouse on mobile preset
   - Test on real devices (Android/iOS)
   - Measure Time to Interactive

2. **Load Testing**:
   - Simulate slow 3G connection
   - Test with CPU throttling
   - Monitor memory usage

3. **User Testing**:
   - A/B test pagination vs infinite scroll
   - Gather feedback on search usability