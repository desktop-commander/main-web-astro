---

## Purpose
This folder contains custom React hooks designed to encapsulate and reuse stateful logic across multiple components within the application.

---

## Conventions
- **Naming:** All hooks must be prefixed with `use` (e.g., `useIsMobile`).
- **File Naming:** Files are named in `kebab-case` to match the project's general file naming conventions.
- **Single Hook per File:** Each file should contain a single primary hook and its related types or helper functions.

---

## Design Decisions
- Logic that interacts with browser APIs (like `window.matchMedia` or `window.location`) is abstracted into hooks to make components easier to test and reason about.
- Application-wide systems, such as toast notifications, are managed through hooks to provide a simple and consistent API for all components.
- Hooks are preferred over Higher-Order Components (HOCs) or render props for sharing stateful logic.

---

## File Overview
Below is the list of custom hooks in this folder.

### `use-mobile.tsx`
- **Hooks:**
  - `useIsMobile()`: A hook that returns a boolean value indicating whether the current browser viewport width is below the mobile breakpoint (768px).

### `use-toast.ts`
- **Hooks:**
  - `useToast()`: A hook that provides a `toast` function to dispatch notifications to the global `Toaster` component. It is based on the `shadcn/ui` toast system.

### `usePageTracking.ts`
- **Hooks:**
  - `usePageTracking()`: A hook that listens for route changes using `react-router-dom`'s `useLocation` and sends a `$pageview` event to PostHog analytics.

---

## Guidelines for Modification
- Before adding a new hook, check if existing utility libraries (like `react-use`) already provide a solution.
- When creating a new hook, ensure its logic is generic enough to be reused. If it's highly specific to one component, it may belong in the component file itself.
- Remember to update the **File Overview** and **Changelog** when adding or removing hooks.

---

## Changelog
- **2025-09-19** – Created `instruct.md` and documented the initial set of custom hooks.