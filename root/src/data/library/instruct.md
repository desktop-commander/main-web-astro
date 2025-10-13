---

## Purpose
This folder contains the core static data assets for the `prompt-library` application. It is the single source of truth for all prompts and their associated metadata.

---

## Conventions
- **Data Format:** The primary data is stored in JSON format (`useCases.json`). All JSON files must be well-formatted.
- **TypeScript Interface:** The `useCases.ts` file acts as the data access layer for the application. It imports the raw JSON, applies TypeScript types, and exports the data and derived metadata (like unique categories or roles).
- **Backups:** Backup files (`.backup`) are created during manual or scripted updates and can be safely ignored.

---

## Design Decisions
- Raw prompt data is kept in `useCases.json` to remain language-agnostic and easily portable or parsable by external scripts.
- `useCases.ts` provides strong typing for the prompt data via the `UseCase` interface, preventing data inconsistencies within the React application.
- Derived data, such as the unique list of `categories` and `roles`, is computed at runtime from the raw `useCases` data. This ensures the filters in the UI are always in sync with the available prompts.

---

## File Overview
Below is the list of files in this folder.

### `useCases.ts`
- **Interfaces:**
  - `UseCase`: Defines the TypeScript type for a single prompt object.
- **Exported Constants:**
  - `useCases`: The array of all prompt objects, imported from `useCases.json`.
  - `categories`: A derived, sorted array of unique prompt categories.
  - `roles`: A derived array of unique target roles.
  - `sessionTypes`: A static array of available session types.
  - `sessionTypeExplanations`: A map of session types to their descriptions.

### `useCases.json`
- **Content:** The primary JSON file containing a single key, `useCases`, which holds an array of all prompt objects displayed in the library.

### `id_mapping.json`
- **Content:** A JSON object that maps legacy or alternative IDs to the canonical prompt IDs found in `useCases.json`. This is used for handling redirects or maintaining backward compatibility.

---

## Guidelines for Modification
- **Adding a New Prompt:** To add a new prompt, you must add a new object to the `useCases` array within `useCases.json`.
- **Data Consistency:** Ensure the new object conforms to the `UseCase` interface defined in `useCases.ts`.
- **Syncing Data:** After modifying `useCases.json`, the application will automatically pick up the changes. No manual update to `useCases.ts` is needed unless the data *structure* itself changes.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the data storage structure and modification process.