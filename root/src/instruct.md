---

## Purpose
This folder is the main source root for the root frontend application, which serves as the main marketing website for Desktop Commander. It contains the application's entry point, routing, pages, and core components.

---

## Conventions
- **Language/Framework:** React (v18+), TypeScript, Vite
- **Naming:**
  - Files/Folders: `kebab-case` or `PascalCase` for components.
  - Variables/Functions: `camelCase`
  - Classes/Interfaces/Types: `PascalCase`
- **Imports:** Prefer absolute imports using `@/` path alias.
- **Code Style:** ESLint + Prettier rules enforced.

---

## Design Decisions
- The application uses a component-based architecture, with reusable UI elements located in the `components/` directory.
- Routing is managed by `react-router-dom`, with all top-level routes defined in `App.tsx`.
- Global state and data fetching are handled by `@tanstack/react-query`.

---

## File Overview
Below is the list of files and folders in this directory.

### `App.tsx`
- **Components:**
  - `App()` – The root component that sets up providers (`QueryClientProvider`, `TooltipProvider`, `BrowserRouter`) and defines the application's routes for pages like `Index` and `Careers`.

### `main.tsx`
- **Execution:**
  - Renders the root `App` component into the DOM using `createRoot`. This is the main entry point for the React application.

### Subdirectories
- **`assets/`**: Contains static assets like images and fonts.
- **`components/`**: Contains reusable React components used across the application.
- **`data/`**: Holds static data, mock data, or data-related utilities.
- **`hooks/`**: Contains custom React hooks.
- **`lib/`**: For utility functions, libraries, and helper scripts (e.g., analytics).
- **`pages/`**: Contains top-level page components that are rendered by the router.
- **`utils/`**: General utility functions.

---

## Guidelines for Modification
- Always check existing dependencies before introducing new ones.
- Keep functions/modules small and single-purpose.
- Update documentation and comments for any significant change.
- Update the **File Overview** and **Changelog** sections whenever code changes.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the structure and conventions of the root marketing site's `src` folder.