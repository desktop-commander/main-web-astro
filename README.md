# Desktop Commander Landing Page (Astro)

Modern, SEO-optimized landing page for Desktop Commander built with Astro and React.

## 🚀 Quick Start

```bash
# Install root dependencies
npm install

# Install project dependencies
cd root && npm install

# Run development server
cd root && npm run dev

# Or from root directory
npm run dev
```

Visit `http://localhost:4321` to see the site.

## 📦 Build for Production

```bash
# From root directory
npm run build

# This will:
# 1. Build Astro site to docs/
# 2. Generate sitemap.xml
# 3. Add CNAME file for custom domain
# 4. Copy index.html to 404.html for SPA fallback
```

## 🌐 Deployment (GitHub Pages)

The site is configured to deploy to GitHub Pages:

1. Build the site: `npm run build`
2. Commit changes: `npm run commit-static`
3. Push to GitHub
4. GitHub Actions will deploy the `docs/` folder

### GitHub Pages Configuration

- **Source**: Deploy from `docs/` folder on `main` branch
- **Custom Domain**: `desktopcommander.app` (set in CNAME)
- **Base URL**: `/` (root domain)

## 📁 Project Structure

```
main-web-astro/
├── root/                       # Main Astro project
│   ├── astro-src/             # Astro pages and layouts
│   │   ├── layouts/           # Page layouts
│   │   └── pages/             # Route pages (.astro files)
│   ├── src/                   # React components and utilities
│   │   ├── components/        # React components
│   │   ├── data/              # Data files (prompts, etc)
│   │   ├── hooks/             # React hooks
│   │   └── lib/               # Utilities
│   ├── public/                # Static assets
│   └── docs/                  # Build output (GitHub Pages)
├── package.json               # Root workspace config
└── README.md                  # This file
```

## 🛠️ Available Scripts

### Root Level
```bash
npm run build           # Build production site
npm run build:dev       # Build development site
npm run serve           # Serve built site locally
npm run serve:static    # Serve built site (alias)
npm run serve:docs      # Serve built site (alias)
npm run commit-static   # Build and commit docs/ folder
```

### Root Directory (`cd root/`)
```bash
npm run dev             # Start dev server
npm run dev:host        # Start dev server (network accessible)
npm run build           # Build for production
npm run build:dev       # Build for development
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run generate:sitemap # Generate sitemap only
```

## 🎨 Tech Stack

- **Framework**: Astro 5.x
- **UI Library**: React 18
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Analytics**: PostHog
- **Build**: Vite

## 📝 Key Features

- ✅ Static site generation (SSG) for optimal SEO
- ✅ React component hydration for interactivity
- ✅ Tailwind CSS for styling
- ✅ shadcn/ui components
- ✅ Dynamic prompt library with individual pages
- ✅ Automatic sitemap generation
- ✅ GitHub Pages ready
- ✅ Custom domain support
- ✅ Hot reload in development

## 🔧 Configuration

### Astro Config (`root/astro.config.mjs`)
- Output directory: `./docs` (for GitHub Pages)
- Base URL: `/` (for custom domain)
- Format: `directory` (clean URLs)

### Package.json Scripts
- Matches original repo structure
- `build` → outputs to `docs/`
- `postbuild` → adds CNAME and 404.html

## 🚨 Important Notes

- The `docs/` folder is gitignored and generated on build
- Always run `npm run build` before deploying
- CNAME file is auto-generated with custom domain
- 404.html is auto-generated for SPA-like routing

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9
```

### Build fails
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Docs folder missing after build
```bash
# Ensure build completes
cd root && npm run build
# Check for errors in output
```

## 📄 License

ISC
