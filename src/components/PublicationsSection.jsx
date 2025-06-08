// src/components/PublicationsSection.jsx

import React, { useMemo, useRef } from "react";
import Section from "./Section";
import { BookMarked, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { allPublications } from "/src/data/publications.js";
import { useVirtualizer } from "@tanstack/react-virtual";

// Helper function to group publications by year
const groupPublicationsByYear = (publications) => {
  return publications.reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});
};

/**
 * PublicationsSection Component: Renders a very large list of publications
 * efficiently using virtualization and dynamic height measurement.
 */
const PublicationsSection = () => {
  const parentRef = useRef(null);

  const { sortedYears, flatItems, yearIndexes } = useMemo(() => {
    const groupedPubs = groupPublicationsByYear(allPublications);
    const sortedYears = Object.keys(groupedPubs).sort((a, b) => b - a);

    const flatItems = [];
    const yearIndexes = {};

    sortedYears.forEach((year) => {
      yearIndexes[year] = flatItems.length;
      flatItems.push({ type: "header", year });
      groupedPubs[year].forEach((pub) => {
        flatItems.push({ type: "publication", data: pub });
      });
    });

    return { sortedYears, flatItems, yearIndexes };
  }, []);

  // Setup the virtualizer
  const rowVirtualizer = useVirtualizer({
    count: flatItems.length,
    getScrollElement: () => parentRef.current,
    // Increased the estimated size for a better initial render
    estimateSize: () => 160,
    // This allows the virtualizer to dynamically measure rows for perfect layout
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

  return (
    <Section title="Publications" Icon={BookMarked} id="publications">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8 bg-snow dark:bg-slate-800 p-6 rounded-lg border border-gray-200/60 dark:border-slate-700/50">
          This page contains a complete list of publications for the group. To
          the best of our ability we strive to publish our works as open-access,
          but where this is not possible please do not hesitate to get in touch
          via email to request a copy of a paper from the author(s) [see People
          page]. You can use CTRL+F to search for specific authors.
        </p>

        <div className="sticky top-20 bg-ivory/80 dark:bg-slate-900/80 backdrop-blur-md py-4 z-30 text-center mb-8 rounded-lg shadow-sm">
          <div className="flex flex-wrap justify-center gap-2 px-4">
            <span className="font-bold self-center mr-2">Jump to year:</span>
            {sortedYears.map((year) => (
              <button
                key={year}
                onClick={() => jumpToYear(year)}
                className="px-3 py-1 text-sm font-semibold text-slate-700 bg-white dark:bg-slate-700 dark:text-slate-200 rounded-full shadow-sm hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-150"
              >
                {year}
              </button>
            ))}
          </div>
        </div>

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
                  // This ref is the key to dynamic height measurement.
                  // It reports the true size of each rendered item back to the virtualizer.
                  ref={rowVirtualizer.measureElement}
                  data-index={virtualItem.index}
                  className="absolute top-0 left-0 w-full p-2"
                  style={{
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  {item.type === "header" ? (
                    <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-200 pt-4 border-b border-slate-300 dark:border-slate-600 pb-2 sticky top-0 bg-snow dark:bg-slate-800 h-full flex items-center">
                      {item.year}
                    </h3>
                  ) : (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="bg-snow dark:bg-slate-800/80 p-6 rounded-lg shadow-md border border-gray-200/60 dark:border-slate-700/50 h-full flex flex-col justify-center"
                    >
                      <h4 className="text-base font-bold font-sans">
                        {item.data.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400 mt-1 italic">
                        {item.data.authors}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm font-medium text-gray-700 dark:text-slate-300 flex-1 pr-4">
                          {item.data.journal}
                        </p>
                        <a
                          href={item.data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:underline flex-shrink-0"
                        >
                          View <ExternalLink size={14} />
                        </a>
                      </div>
                    </motion.li>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PublicationsSection;
