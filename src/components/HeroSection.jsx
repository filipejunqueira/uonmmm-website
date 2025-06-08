// src/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";

// Import both the light and dark mode hero images
import heroImageLight from "/src/assets/hero.jpeg";
import heroImageDark from "/src/assets/hero_dark.jpeg";

/**
 * HeroSection Component: A full-screen image hero with corner text elements
 * and separate images for light and dark modes.
 */
const HeroSection = () => {
  return (
    <header
      id="home"
      className="relative h-screen w-full overflow-hidden"
      aria-labelledby="main-heading"
    >
      {/* Background Images */}
      {/* Light mode image: Visible by default, hidden in dark mode */}
      <img
        src={heroImageLight}
        alt="Nanoscience research background"
        className="absolute inset-0 w-full h-full object-cover z-0 dark:hidden"
      />
      {/* Dark mode image: Hidden by default, visible in dark mode */}
      <img
        src={heroImageDark}
        alt="Nanoscience research background in dark mode"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden dark:block"
      />

      {/* Dark Overlay - slightly less intense to let images show */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-8 z-20">
        {/* Top-left text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          // Increased delay for animation sequencing
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h1
            id="main-heading"
            className="text-2xl md:text-4xl font-serif font-bold text-white tracking-wider"
          >
            Molecules. Magnets. Materials.
          </h1>
        </motion.div>

        {/* Bottom-right text */}
        <motion.div
          className="self-end text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          // Increased delay for animation sequencing
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl font-semibold text-white/90">
            The University of Nottingham
          </p>
          <p className="text-2xl md:text-4xl font-bold font-serif text-white">
            Nanoscience Group
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
