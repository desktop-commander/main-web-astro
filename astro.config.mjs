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
  
  // Set base for GitHub Pages
  // Will be set to '/' for custom domain
  base: '/',
  
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
