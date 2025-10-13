---

## Purpose
This folder contains top-level React components that correspond to specific pages or routes within the main marketing website. Each file represents a single, navigable page.

---

## Conventions
- **Naming:** Page components are named in `PascalCase` (e.g., `Careers`).
- **Exports:** Each page component should be the `default` export of its file.

---

## Design Decisions
- **Page-Level Logic:** Pages are responsible for orchestrating the overall layout and composing various section components from `src/components`.
- **Component Composition:** Pages build the final UI by assembling components like `Hero`, `Features`, `FAQ`, etc.
- **Routing:** These components are rendered by `react-router-dom` based on the route definitions in `src/App.tsx`.

---

## File Overview
Below is the list of page components in this folder.

### `Index.tsx`
- **Components:**
  - `Index()`: The main landing page for the marketing website. It assembles various sections like `Hero`, `UseCases`, `Installation`, and `FAQ`.

### `Careers.tsx`
- **Components:**
  - `Careers()`: The careers page, which displays company culture information, perks, and a list of open job positions.

### `NotFound.tsx`
- **Components:**
  - `NotFound()`: The 404 error page displayed for any route that is not found.

---

## Guidelines for Modification
- When a new page is added to the website, create its main component in this folder and add it to the router in `src/App.tsx`.
- Keep page components focused on layout. Reusable sections should be created in the `src/components` directory.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the page components for the marketing site.