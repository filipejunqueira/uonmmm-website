// src/components/Footer.jsx

// Import React.
import React from "react";

/**
 * Footer Component: The standard site footer.
 */
const Footer = () => (
  <footer className="bg-emerald-800 dark:bg-slate-900 text-emerald-100 dark:text-slate-300 py-10 text-center">
    <div className="container mx-auto px-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Molecules, Magnets & Materials Group.
        All rights reserved.
      </p>
      <p className="text-xs mt-2 opacity-70">
        School of Physics & Astronomy, University of Nottingham
      </p>
    </div>
  </footer>
);

export default Footer;
