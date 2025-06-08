// tailwind.config.js

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  // Enable dark mode, controlled by a class.
  darkMode: "class",

  // Configure file paths for Tailwind to scan.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      // Define the custom off-white color palette.
      colors: {
        ivory: "#F8F7F4",
        snow: "#FFFAFA",
        // The 'emerald' color has been removed. We will use 'slate' or 'gray'.
      },
      // Define the elegant font families.
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        serif: ['"Lora"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
