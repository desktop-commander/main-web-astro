---

## Purpose
This folder contains the reusable React components that are composed to build the pages of the main marketing website. These components typically represent entire sections of a page (e.g., Hero, Features, FAQ).

---

## Conventions
- **Language/Framework:** React (v18+), TypeScript, Vite
- **Naming:** Components are named in `PascalCase`.
- **Styling:** Components are styled using Tailwind CSS and often utilize primitive components from `src/components/ui` and `shadcn/ui`.
- **Animations:** Components frequently use `useState` and `useEffect` with an `IntersectionObserver` to trigger scroll-based animations.

---

## Design Decisions
- Most components in this folder are self-contained, page-level sections.
- Deprecated or old versions of components are sometimes kept in the codebase with suffixes like `-original` or `-mobile-broken` for reference during iterative development. The active component is the one without a suffix.
- Analytics events are tracked within components using the custom `useAnalytics` hook.

---

## File Overview
Below is the list of active components in this folder.

### `ApplicationProcess.tsx`
- **Components:** `ApplicationProcess()` – A section for the careers page that visually outlines the steps of the job application process.

### `AutomationCTA.tsx`
- **Components:** `AutomationCTA()` – A call-to-action (CTA) card that prompts users to submit a request for custom automation setup.

### `Blog.tsx`
- **Components:** `Blog()` – A section that displays a carousel of recent blog posts and videos.

### `CareersHero.tsx`
- **Components:** `CareersHero()` – The main hero section for the careers page.

### `CareersPerks.tsx`
- **Components:** `CareersPerks()` – A section that displays a grid of company perks and benefits for potential job applicants.

### `Community.tsx`
- **Components:** `Community()` – A section with cards linking to the project's GitHub, Discord, and YouTube channels.

### `CompanyCulture.tsx`
- **Components:** `CompanyCulture()` – A section for the careers page that describes the company's mission, values, and culture.

### `FAQ.tsx`
- **Components:** `FAQ()` – An accordion-style list of frequently asked questions about the product.

### `Features.tsx`
- **Components:** `Features()` – A section displaying a grid of key product features with icons and descriptions.

### `Footer.tsx`
- **Components:** `Footer()` – The main footer for the marketing website, containing navigation links and social media icons.

### `GettingStarted.tsx`
- **Components:** `GettingStarted()` – A section that outlines the three main steps for installing and using the product.

### `Hero.tsx`
- **Components:** `Hero()` – The main hero section for the homepage, featuring a title, description, CTAs, and an animated GIF/video.

### `Installation.tsx`
- **Components:** `Installation()` – A detailed section providing multiple methods for installing Desktop Commander, including bash, NPX, Docker, and manual setup.

### `JobListings.tsx`
- **Components:** `JobListings()` – A section for the careers page that fetches and displays a list of open job positions.

### `Navigation.tsx`
- **Components:** `Navigation()` – The main sticky navigation header for the website.

### `PromptLibrary.tsx`
- **Components:** `PromptLibrary()` – A section on the homepage that showcases a tabbed view of featured prompts from the prompt library.

### `TestimonialsStrip.tsx`
- **Components:** `TestimonialsStrip()` – A continuously scrolling horizontal marquee of short user testimonials.

### `TrustedBy.tsx`
- **Components:** `TrustedBy()` – A social proof section that includes key statistics (downloads, stars) and the testimonial strip.

### `UseCases.tsx`
- **Components:** `UseCases()` – A section that displays a grid of different use cases for the product.

### Subdirectories
- **`ui/`**: Contains generic, reusable UI primitives (e.g., Button, Card) based on `shadcn/ui`.

---

## Guidelines for Modification
- When adding a new page section, create it as a new component file in this directory.
- Ensure that scroll-based animations are subtle and do not negatively impact performance.
- Update this file's **File Overview** and **Changelog** when adding or removing components.

---

## Changelog
- **2025-09-19** – Created `instruct.md` and documented all active components for the main marketing site.