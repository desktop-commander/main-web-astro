---

## Purpose
This folder contains the low-level, reusable UI components sourced from the `shadcn/ui` library. These components serve as the primitive building blocks for the application's user interface, such as buttons, cards, inputs, and dialogs.

---

## Conventions
- **Source:** All components in this directory are generated and managed by the `shadcn/ui` CLI.
- **Styling:** Components are styled using Tailwind CSS utility classes and are designed to be easily customizable.
- **Composition:** These components are intended to be composed into more complex, application-specific components in the parent `components` directory.

---

## Design Decisions
- The project utilizes `shadcn/ui`, which follows a methodology of copying component source code directly into the project rather than installing them as a traditional node module.
- This approach provides maximum flexibility and ownership over the component code, allowing for easy customization and extension without being locked into a library's specific implementation.

---

## File Overview
This directory contains an extensive list of UI primitives from `shadcn/ui`. The files correspond directly to the components available in the library's documentation.

Examples include:
- `button.tsx`
- `card.tsx`
- `dialog.tsx`
- `input.tsx`
- `select.tsx`
- `table.tsx`
- `tooltip.tsx`
- ...and many others.

A full list can be obtained by listing the directory's contents. Each file exports a React component that can be imported and used throughout the application.

---

## Guidelines for Modification
- **Adding New Components:** To add a new component from `shadcn/ui`, use their CLI tool (e.g., `npx shadcn-ui@latest add [component-name]`). Do not add components manually.
- **Customization:** It is safe to modify the files in this directory to suit the application's specific needs. However, be aware that future updates via the CLI might cause conflicts if the modifications are extensive.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the purpose and usage of `shadcn/ui` components.