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
  
  // Base path: controlled by BASE_PATH environment variable
  // - For production (desktopcommander.app): BASE_PATH=/ npm run build
  // - For GitHub Pages: BASE_PATH=/main-web-astro npm run build:github
  base: process.env.BASE_PATH || '/',
  
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
