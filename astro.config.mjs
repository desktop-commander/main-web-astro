import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Astro pages source
  srcDir: './astro-src',
  publicDir: './public',
  
  // Output to docs folder for GitHub Pages
  outDir: './docs',
  
  // Dynamic base path: adjusts automatically for github.io or custom domain
  base: typeof process !== 'undefined' && process.env.BASE_PATH ? process.env.BASE_PATH : '/',
  
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.ts',
      applyBaseStyles: false,
    })
  ],
  
  output: 'static',
  
  build: {
    format: 'directory', // URLs like /about/ instead of /about.html
    assets: 'assets' // Assets folder name
  },
  
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
});
