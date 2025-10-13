---

## Purpose
This folder contains application-specific, reusable React components that are composed to build the pages of the `prompt-library` application. These components often encapsulate specific business logic and features.

---

## Conventions
- **Language/Framework:** React (v18+), TypeScript, Vite
- **Naming:** Components are named in `PascalCase`.
- **Imports:** Prefer absolute imports using `@/` path alias.
- **Styling:** Components are styled using Tailwind CSS and often utilize primitive components from `src/components/ui` and `shadcn/ui`.

---

## Design Decisions
- Components in this directory are distinct from the generic, unstyled UI primitives found in `src/components/ui`. These are "smart" components that are aware of the application's data and state.
- Complex UI elements are built by composing smaller, single-purpose components. For example, `FilterControls` uses the `MultiSelect` component.
- Analytics events are fired from within components using the `usePostHog` hook to track user interactions.

---

## File Overview
Below is the list of files in this folder, along with their main functions and components.

### `AnalyticsDashboard.tsx`
- **Components:**
  - `AnalyticsDashboard()` – A development-only overlay that displays application analytics captured by PostHog.

### `BreadcrumbNavigation.tsx`
- **Components:**
  - `BreadcrumbNavigation()` – Renders a set of breadcrumb links for navigating the site hierarchy.
- **Functions:**
  - `getBreadcrumbsForPrompt()`, `getBreadcrumbsForCategory()`, `getBreadcrumbsForPrompts()` – Helper functions to generate breadcrumb items.

### `CategoryFilter.tsx`
- **Components:**
  - `CategoryFilter()` – Displays a list of buttons to filter prompts by category.

### `DynamicMetaTags.tsx`
- **Components:**
  - `DynamicMetaTags()` – A component that dynamically updates the page's HTML meta tags for SEO based on the current view.

### `EngagementMeter.tsx`
- **Components:**
  - `EngagementMeter()` – A visual component that displays a tiered "meter" to represent a prompt's popularity or engagement level.

### `FilterControls.tsx`
- **Components:**
  - `FilterControls()` – A comprehensive set of controls including search, multi-select dropdowns, and sorting options for the prompts list.

### `InternalLinkHelper.tsx`
- **Components:**
  - `InternalLinkHelper()` – Renders a sidebar with quick links, categories, and external resources.

### `MainSiteFooter.tsx`
- **Components:**
  - `MainSiteFooter()` – The primary footer component used on marketing-oriented pages.

### `MainSiteHeader.tsx`
- **Components:**
  - `MainSiteHeader()` – The primary header component used on marketing-oriented pages.

### `MultiSelect.tsx`
- **Components:**
  - `MultiSelect()` – A custom dropdown component that allows selecting multiple options.

### `PostHogProvider.tsx`
- **Components:**
  - `PostHogProvider()` – A React context provider that initializes the PostHog analytics library.
- **Hooks:**
  - `usePostHog()` – A hook to access the PostHog instance.

### `PromptCard.tsx`
- **Components:**
  - `PromptCard()` – A card component that displays a summary of a single prompt in a grid or list.

### `PromptDetailModal.tsx`
- **Components:**
  - `PromptDetailModal()` – A modal dialog that displays the full details of a selected prompt.

### `PromptsPageFooter.tsx`
- **Components:**
  - `PromptsPageFooter()` – A specific footer variant used on the main prompts browsing page.

### `RoleFilter.tsx`
- **Components:**
  - `RoleFilter()` – Displays a set of buttons for filtering prompts by target user role.

### `SearchBar.tsx`
- **Components:**
  - `SearchBar()` – A search input component with a clear button and keyboard shortcuts.

### `SiteHeader.tsx`
- **Components:**
  - `SiteHeader()` – The main navigation header for the prompt library application pages.

### `SubmitPromptButton.tsx`
- **Components:**
  - `SubmitPromptButton()` – A button that links to an external form for users to submit their own prompts.

### `TestimonialsRow.tsx`
- **Components:**
  - `TestimonialsRow()` – A carousel component that displays a rotating set of user testimonials.

### `UsePromptWizard.tsx`
- **Components:**
  - `UsePromptWizard()` – A multi-step modal wizard that guides the user through selecting their client and copying the prompt.

### Subdirectories
- **`ui/`**: Contains generic, reusable UI primitives (e.g., Button, Card) based on `shadcn/ui`.

---

## Guidelines for Modification
- When creating a new component, consider if it can be composed of existing components.
- Ensure new components are accessible and follow ARIA guidelines.
- Add analytics tracking for significant user interactions.
- Update this file's **File Overview** and **Changelog** when adding or removing components.

---

## Changelog
- **2025-09-19** – Created `instruct.md` and documented all 20 existing components.