---

## Purpose
This folder contains static data assets, primarily in JSON format, that are used to populate content on the main marketing website.

---

## Conventions
- **Data Format:** Data is stored in well-formatted JSON files.
- **Data Usage:** This data is typically imported by hooks (e.g., `useCareers`) or components to be displayed in the UI.

---

## Design Decisions
- Storing data like job listings in a JSON file allows for easy updates without needing to change component code.
- This folder is for site-specific content data. Application-wide data (like prompts) is stored in the `prompt-library` project.

---

## File Overview
Below is the list of files in this folder.

### `jobs.json`
- **Content:** A JSON file containing a list of job objects, each representing an open position at the company. This data is displayed on the careers page by the `JobListings` component.

---

## Guidelines for Modification
- To add, update, or remove a job listing, edit the contents of the `jobs.json` file.
- Ensure that any new entries conform to the existing data structure (i.e., the `Job` interface defined in `src/lib/careers.ts`).

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the purpose of the `jobs.json` data file.