// src/components/Navbar.jsx

import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Navbar Component: The site's main navigation bar.
 * @param {object} props - Component props.
 * @param {function} props.toggleDarkMode - Function to toggle dark mode.
 * @param {boolean} props.isDarkMode - The current state of dark mode.
 */
const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links for the website.
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#staff", label: "Staff" },
    { href: "#magnets", label: "Magnets" },
    { href: "#materials", label: "Materials" },
    { href: "#molecules", label: "Molecules" },
    { href: "#contact", label: "Contact" },
    { href: "#publications", label: "Publications" },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <nav className="bg-ivory/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 w-full shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Site Title */}
          <a href="#home" className="flex items-center flex-shrink-0">
            <img src="/favicon.svg" alt="Site Logo" className="h-8 w-8 mr-3" />
            <span className="font-serif font-bold text-base md:text-lg text-slate-800 dark:text-slate-200">
              Molecules. Magnets. Materials.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="font-medium text-sm text-gray-600 dark:text-slate-300 transition-colors"
                whileHover={{ y: -2, color: "#1e293b" }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-slate-300 hover:bg-gray-200/80 dark:hover:bg-slate-700/80 transition-colors"
              aria-label={
                isDarkMode ? "Activate light mode" : "Activate dark mode"
              }
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <div className="lg:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-slate-300"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-slate-300 hover:bg-gray-200/50 dark:hover:bg-slate-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
