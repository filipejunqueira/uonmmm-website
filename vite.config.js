// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This tells Vite that all assets should be loaded relative to this path
  // on the server.
  base: "/uonmmm-website/",

  plugins: [react()],
});
