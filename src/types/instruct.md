---

## Purpose
This folder contains TypeScript declaration files (`.d.ts`) for defining global types and augmenting existing modules. It is used for types that need to be available across the entire application without being explicitly imported.

---

## Conventions
- **File Extension:** All files in this directory must have the `.d.ts` extension.
- **Global Scope:** Only types that are truly global in scope should be placed here.
- **Module Augmentation:** Use `declare module` to augment external modules or `interface` merging for global objects like `Window`.

---

## Design Decisions
- Augmenting the global `Window` interface is done in a central place (`global.d.ts`) to provide a clear record of all custom properties attached to the `window` object. This avoids scattering such definitions throughout the codebase.
- This folder is reserved for ambient declarations; it should not contain any concrete implementations or executable code.

---

## File Overview
Below is the list of declaration files in this folder.

### `global.d.ts`
- **Interfaces:**
  - `Window`: Augments the global `Window` interface to include optional properties used for analytics timing:
    - `promptOpenTime`: Timestamp for when a prompt modal is opened.
    - `wizardOpenTime`: Timestamp for when the "Use Prompt" wizard is opened.
    - `pageLoadTime`: Timestamp for when the page initially loads.

---

## Guidelines for Modification
- Before adding a new type, confirm that it is not specific to a single component, hook, or utility. If it is, co-locate it with its corresponding module.
- Do not add any non-type-related code to this folder.
- Remember to update the **File Overview** and **Changelog** when adding or modifying global type definitions.

---

## Changelog
- **2025-09-19** – Created `instruct.md` and documented the global `Window` interface augmentation.