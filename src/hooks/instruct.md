---

## Purpose
This folder contains custom React hooks designed to encapsulate and reuse stateful logic across multiple components within the main marketing website.

---

## Conventions
- **Naming:** All hooks must be prefixed with `use` (e.g., `useAnalytics`).
- **File Naming:** Files are named in `kebab-case` or `camelCase`.
- **Single Hook per File:** Each file should contain a single primary hook and its related types or helper functions.

---

## Design Decisions
- **Data Fetching:** Data fetching logic (e.g., for careers) is encapsulated in hooks to separate data concerns from UI components.
- **Analytics Abstraction:** The `useAnalytics` hook provides a simplified and consistent API for tracking various user events, abstracting the underlying implementation details from the components.
- **Browser APIs:** Interactions with browser APIs (like `window.matchMedia`) are wrapped in hooks to make them easily reusable and testable.

---

## File Overview
Below is the list of custom hooks in this folder.

### `use-mobile.tsx`
- **Hooks:**
  - `useIsMobile()`: A hook that returns a boolean indicating if the viewport is below the mobile breakpoint.

### `use-toast.ts`
- **Hooks:**
  - `useToast()`: A hook to dispatch toast notifications using the `shadcn/ui` toast system.

### `useAnalytics.ts`
- **Hooks:**
  - `useAnalytics()`: A comprehensive hook that provides helper functions (`trackDownload`, `trackCommunity`, etc.) to send analytics events. It also automatically tracks page views and scroll depth.

### `useCareers.ts`
- **Hooks:**
  - `useCareers()`: A hook that loads, filters, and provides the job listings from the static `jobs.json` file. It handles loading and error states.

---

## Guidelines for Modification
- When creating a new hook, ensure its logic is generic enough to be reused.
- For any new analytics events, consider adding a specific helper function to the `useAnalytics` hook to maintain consistency.
- Remember to update the **File Overview** and **Changelog** when adding or removing hooks.

---

## Changelog
- **2025--09-19** – Created `instruct.md` and documented the custom hooks for the marketing site.