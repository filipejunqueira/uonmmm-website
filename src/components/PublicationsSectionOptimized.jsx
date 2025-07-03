// src/components/PublicationsSectionOptimized.jsx
// Optimized version using split data and lazy loading

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Section from "./Section";
import { BookMarked, ExternalLink, Search, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useVirtualizer } from "@tanstack/react-virtual";

// Import the index and search data immediately
import publicationsIndex from "../data/publications/index.json";
import searchIndex from "../data/publications/search-index.json";

/**
 * Optimized PublicationsSection with lazy loading and search
 */
const PublicationsSectionOptimized = () => {
  const parentRef = useRef(null);
  
  // State management
  const [loadedYears, setLoadedYears] = useState({});
  const [loadingYears, setLoadingYears] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Load initial years on mount (recent 3 years)
  useEffect(() => {
    loadInitialYears();
  }, []);
  
  const loadInitialYears = async () => {
    const recentYears = publicationsIndex.years.slice(0, 3).map(item => item.year);
    await Promise.all(recentYears.map(year => loadYear(year)));
  };
  
  const loadYear = useCallback(async (year) => {
    if (loadedYears[year] || loadingYears.has(year)) return;
    
    setLoadingYears(prev => new Set([...prev, year]));
    
    try {
      // Dynamic import for the year's data
      const module = await import(`../data/publications/${year}.json`);
      const publications = module.default;
      
      setLoadedYears(prev => ({
        ...prev,
        [year]: publications
      }));
    } catch (error) {
      console.error(`Failed to load year ${year}:`, error);
    } finally {
      setLoadingYears(prev => {
        const newSet = new Set(prev);
        newSet.delete(year);
        return newSet;
      });
    }
  }, [loadedYears, loadingYears]);
  
  // Search functionality
  const performSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    
    // Search the index
    const matches = searchIndex.filter(item =>
      item.searchText.includes(query.toLowerCase())
    ).slice(0, 50); // Limit to 50 results
    
    // Load the full publication data for matches
    const yearSet = new Set(matches.map(match => match.year.toString()));
    await Promise.all(Array.from(yearSet).map(year => loadYear(year)));
    
    // Get full publication objects
    const fullResults = matches.map(match => {
      const year = match.year.toString();
      const yearData = loadedYears[year] || [];
      return yearData.find(pub => 
        pub.title === match.title || 
        pub.title?.includes(match.titleShort.replace('...', ''))
      );
    }).filter(Boolean);
    
    setSearchResults(fullResults);
    setIsSearching(false);
  }, [loadedYears, loadYear]);
  
  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery, performSearch]);
  
  // Prepare flat items for virtualization
  const { flatItems, yearIndexes } = useMemo(() => {
    if (searchQuery && searchResults.length > 0) {
      // Search mode: show only search results
      const items = [];
      items.push({ type: "header", year: "Search Results", count: searchResults.length });
      searchResults.forEach(pub => {
        items.push({ type: "publication", data: pub });
      });
      return { flatItems: items, yearIndexes: {} };
    }
    
    // Normal mode: show loaded years
    const items = [];
    const indexes = {};
    const sortedLoadedYears = Object.keys(loadedYears).sort((a, b) => b - a);
    
    publicationsIndex.years.forEach(yearObj => {
      const year = yearObj.year;
      indexes[year] = items.length;
      items.push({ type: "header", year, count: yearObj.count });
      
      if (loadedYears[year]) {
        // Year is loaded, show publications
        loadedYears[year].forEach(pub => {
          items.push({ type: "publication", data: pub });
        });
      } else {
        // Year not loaded, show load button
        items.push({ type: "loadButton", year, count: yearObj.count });
      }
    });
    
    return { flatItems: items, yearIndexes: indexes };
  }, [loadedYears, searchQuery, searchResults]);
  
  // Setup virtualizer
  const rowVirtualizer = useVirtualizer({
    count: flatItems.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 120,
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 10,
  });
  
  const jumpToYear = (year) => {
    const index = yearIndexes[year];
    if (index !== undefined) {
      rowVirtualizer.scrollToIndex(index, { align: "start" });
    }
  };
  
  const LoadButton = ({ year, count }) => (
    <div className="p-8 text-center">
      <button
        onClick={() => loadYear(year)}
        disabled={loadingYears.has(year)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
      >
        {loadingYears.has(year) ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Loading {year}...
          </>
        ) : (
          `Load ${year} (${count} publications)`
        )}
      </button>
    </div>
  );
  
  const PublicationCard = ({ publication }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-snow dark:bg-slate-800/80 p-6 rounded-lg shadow-md border border-gray-200/60 dark:border-slate-700/50"
    >
      <h4 className="text-base font-bold font-sans line-clamp-3">
        {publication.title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-slate-400 mt-1 italic line-clamp-2">
        {publication.authors}
      </p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-300 flex-1 pr-4 line-clamp-2">
          {publication.journal}
        </p>
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:underline flex-shrink-0"
          >
            View <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
  
  return (
    <Section title="Publications" Icon={BookMarked} id="publications">
      <div className="max-w-5xl mx-auto">
        <div className="bg-snow dark:bg-slate-800 p-6 rounded-lg border border-gray-200/60 dark:border-slate-700/50 mb-8">
          <p className="text-center text-slate-600 dark:text-slate-400 mb-4">
            This page contains a complete list of publications for the group. Use the search below 
            to find specific papers, or browse by year. Recent years load automatically, 
            older years load on demand for better performance.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {isSearching && (
              <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-spin text-blue-500" size={16} />
            )}
          </div>
        </div>

        {/* Year Navigation (only show when not searching) */}
        {!searchQuery && (
          <div className="sticky top-20 bg-ivory/90 dark:bg-slate-900/90 backdrop-blur-md py-4 z-30 text-center mb-8 rounded-lg shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 px-4">
              <span className="font-bold self-center mr-2">Jump to year:</span>
              {publicationsIndex.years.map((yearObj) => (
                <button
                  key={yearObj.year}
                  onClick={() => jumpToYear(yearObj.year)}
                  className={`px-3 py-1 text-sm font-semibold rounded-full shadow-sm transition-colors duration-150 ${
                    loadedYears[yearObj.year]
                      ? 'text-white bg-blue-600 hover:bg-blue-700'
                      : 'text-slate-700 bg-white dark:bg-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {yearObj.year} ({yearObj.count})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Publications List */}
        <div
          ref={parentRef}
          className="h-[80vh] overflow-y-auto rounded-lg border border-gray-200/60 dark:border-slate-700/50 bg-snow dark:bg-slate-800/20 p-2"
        >
          <div
            className="w-full relative"
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualItem) => {
              const item = flatItems[virtualItem.index];

              return (
                <div
                  key={virtualItem.key}
                  ref={rowVirtualizer.measureElement}
                  data-index={virtualItem.index}
                  className="absolute top-0 left-0 w-full p-2"
                  style={{
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  {item.type === "header" ? (
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 pt-4 border-b border-slate-300 dark:border-slate-600 pb-2 sticky top-0 bg-snow dark:bg-slate-800 flex items-center justify-between">
                      <span>{item.year}</span>
                      {item.count && (
                        <span className="text-lg font-normal text-slate-600 dark:text-slate-400">
                          ({item.count} publications)
                        </span>
                      )}
                    </h3>
                  ) : item.type === "loadButton" ? (
                    <LoadButton year={item.year} count={item.count} />
                  ) : (
                    <PublicationCard publication={item.data} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Loading Stats */}
        <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
          Loaded: {Object.keys(loadedYears).length} years, 
          Total: {Object.values(loadedYears).flat().length} publications, 
          Available: {publicationsIndex.total} total
        </div>
      </div>
    </Section>
  );
};

export default PublicationsSectionOptimized;