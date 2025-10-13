---

## Purpose
This folder contains general-purpose, non-React-specific utility functions that can be used throughout the application.

---

## Conventions
- **Purity:** Functions in this folder should be pure whenever possible, meaning their return value is determined only by their input values, without observable side effects.
- **Reusability:** Utilities should be generic enough to be applicable in multiple contexts.

---

## Design Decisions
- **Environment-Specific Logic:** Logic that needs to handle differences between development and production environments (like asset path resolution) is centralized in utility functions to keep components clean.
- **Separation from `lib`:** While `lib` contains more complex, domain-specific logic and types, `utils` is intended for smaller, simpler helper functions.

---

## File Overview
Below is the list of files in this folder.

### `assets.ts`
- **Functions:**
  - `getAssetPath(path: string)`: A utility function that resolves the correct path to a static asset. It handles the base path difference between the local development server and the GitHub Pages production deployment.

---

## Guidelines for Modification
- Add any new, simple, and broadly applicable helper functions to this folder, potentially in a new file if the domain is distinct from asset handling.
- Avoid adding React-specific code or hooks to this directory.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the asset path utility function.