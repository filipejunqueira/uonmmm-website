// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // This tells Vite that all assets should be loaded relative to this path
  // on the server.
  base: "/uonmmm-website/",

  plugins: [react()],

  // Optimization configuration
  build: {
    // Generate source maps for debugging
    sourcemap: true,
    
    // Optimize bundle size
    minify: 'terser',
    
    // Configure chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for third-party libraries
          vendor: [
            'react',
            'react-dom',
            'react-helmet-async',
            'react-intersection-observer'
          ],
          // UI components chunk
          ui: [
            'framer-motion',
            'lucide-react',
            '@tanstack/react-virtual'
          ],
          // Forms chunk
          forms: [
            '@formspree/react'
          ]
        },
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop().replace(/\.[^.]*$/, '')
            : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `img/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    }
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true
  },

  // Preview server configuration
  preview: {
    port: 4173,
    open: true
  },

  // CSS optimization
  css: {
    devSourcemap: true
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      '@formspree/react',
      'react-helmet-async',
      'react-intersection-observer'
    ]
  }
});
