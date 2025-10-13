import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Determine if we should use a base path
// Check for explicit BASE_PATH env var, or detect GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.BASE_PATH === '/main-web-astro';
const base = isGitHubPages ? '/main-web-astro/' : '/';

console.log(`Building with base path: ${base}`);

// https://astro.build/config
export default defineConfig({
  // Site URL - important for canonical URLs and sitemaps
  site: 'https://desktopcommander.app',
  
  // Base path - use trailing slash for cleaner URLs
  base: base,
  
  // Astro pages source
  srcDir: './astro-src',
  publicDir: './public',
  
  // Output to docs folder for GitHub Pages
  outDir: './docs',
  
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
  },
  
  // Ensure trailing slashes for consistent routing
  trailingSlash: 'always',
});
