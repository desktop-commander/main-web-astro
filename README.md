# Desktop Commander Landing Page (Astro)

Modern, SEO-optimized landing page for Desktop Commander built with Astro and React.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:4321` to see the site.

## 📦 Build for Production

```bash
npm run build

# This will:
# 1. Build Astro site to docs/
# 2. Generate sitemap.xml in docs/
# 3. Add CNAME file for custom domain
# 4. Copy index.html to 404.html for SPA fallback
```

## 🌐 Deployment (GitHub Pages)

The site is configured to deploy to GitHub Pages from the `docs/` folder:

```bash
# Build and commit the docs folder
npm run commit-static

# Push to GitHub
git push
```

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Set **Source**: Deploy from `docs/` folder on `main` branch
3. Set **Custom Domain**: `desktopcommander.app`
4. GitHub will automatically serve from `docs/`

The `docs/` folder **is committed to git** (not gitignored) for GitHub Pages deployment.

## 📁 Project Structure

```
main-web-astro/
├── astro-src/             # Astro pages and layouts
│   ├── layouts/           # Page layouts
│   └── pages/             # Route pages (.astro files)
├── src/                   # React components and utilities
│   ├── components/        # React components
│   ├── data/              # Data files (prompts, etc)
│   ├── hooks/             # React hooks
│   └── lib/               # Utilities
├── public/                # Static assets
├── docs/                  # Build output (committed for GitHub Pages)
├── package.json           # Dependencies and scripts
└── astro.config.mjs       # Astro configuration
```

## 🛠️ Available Scripts

```bash
npm run dev             # Start dev server (localhost:4321)
npm run dev:host        # Start dev server (network accessible)
npm run build           # Build for production → docs/
npm run build:dev       # Build for development
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run serve           # Serve built site from docs/
npm run serve:static    # Serve built site (alias)
npm run serve:docs      # Serve built site (alias)
npm run commit-static   # Build + commit docs/ folder
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

### Astro Config (`astro.config.mjs`)
- Output directory: `./docs` (for GitHub Pages)
- Base URL: `/` (for custom domain)
- Format: `directory` (clean URLs)

### Build Output
- The `docs/` folder contains the built static site
- This folder **IS committed to git** for GitHub Pages
- GitHub Pages serves directly from `docs/` on the `main` branch

## 🚨 Important Notes

- **The `docs/` folder IS committed** (not gitignored) for GitHub Pages
- Always run `npm run build` before committing changes
- Use `npm run commit-static` to build and commit in one step
- CNAME file is auto-generated with custom domain
- 404.html is auto-generated for client-side routing fallback

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

### Docs folder not building
```bash
# Ensure build completes
npm run build
# Check for errors in output
```

## 📄 License

ISC
