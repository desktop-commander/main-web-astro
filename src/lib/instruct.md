---

## Purpose
This folder contains utility functions, type definitions, and business logic modules that are not React components or hooks. It serves as a repository for framework-agnostic, reusable code.

---

## Conventions
- **File Organization:** Files are organized by their domain or purpose. General utilities are in `utils.ts`, while domain-specific logic and types are in their own files (e.g., `careers.ts`).
- **Type Safety:** TypeScript interfaces are used to define the shape of data objects.

---

## Design Decisions
- **Separation of Concerns:** By keeping utility code separate from React components, we ensure that our business logic is portable and easier to test.
- **Domain-Specific Modules:** Grouping related logic and types into domain-specific files (like `careers.ts`) improves code organization and maintainability.
- **Subdirectory for Complex Domains:** More complex domains like analytics are given their own subdirectory to house multiple related files.

---

## File Overview
Below is the list of files and subdirectories in this folder.

### `utils.ts`
- **Functions:**
  - `cn(...inputs)`: A helper function that merges CSS classes using `tailwind-merge` and `clsx` for conditional styling.

### `careers.ts`
- **Interfaces:**
  - `Job`: Defines the TypeScript type for a single job listing object.
  - `JobsData`: Defines the type for the root object in `jobs.json`.

### `analytics/`
- **Purpose:** This subdirectory contains the core logic for the analytics system, including event definitions, tracking functions, and the PostHog provider.

---

## Guidelines for Modification
- Add new, general-purpose helper functions to `utils.ts`.
- If adding logic for a new domain, create a new file (e.g., `feature-x.ts`) to contain its related functions and types.
- For significant changes to the analytics system, modify the files within the `analytics` subdirectory.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the structure of the `lib` folder.