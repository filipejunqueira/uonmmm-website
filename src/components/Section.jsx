// src/components/Section.jsx

import React from "react";
import { motion } from "framer-motion";

/**
 * Section Component: A reusable wrapper for content sections.
 */
const Section = ({ id, title, Icon, children }) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 border-t border-gray-200/80 dark:border-slate-700/50"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-center mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {Icon && (
            <Icon
              className="h-8 w-8 md:h-10 md:w-10 mr-4 text-slate-500 dark:text-slate-400"
              aria-hidden="true"
            />
          )}
          <h2
            id={`${id}-heading`}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            {title}
          </h2>
        </motion.div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
