---

## Purpose
This folder contains the core logic for the application's user analytics system. It is responsible for initializing the analytics provider (PostHog), defining all trackable events, and providing functions to send tracking data.

---

## Conventions
- **Event Definitions:** All analytics event names and their corresponding TypeScript interfaces are centralized in `events.ts`.
- **Provider-Specific Logic:** All code related to the PostHog SDK is contained within `posthog.ts`.
- **Abstraction:** Generic tracking functions are defined in `tracking.ts` to provide a stable interface for the rest of the application, regardless of the underlying analytics provider.

---

## Design Decisions
- The analytics system is designed with a clear separation of concerns: event definitions (`events.ts`), provider initialization (`posthog.ts`), and tracking implementation (`tracking.ts`).
- This structure creates an abstraction layer that makes it easier to manage, test, or even replace the analytics provider in the future with minimal changes to the application's components.
- The `useAnalytics` hook is the primary consumer of the functions in `tracking.ts`, providing a clean and simple API for components to send analytics data.

---

## File Overview
Below is the list of files in this folder.

### `events.ts`
- **Content:** Contains constants for all analytics event names (e.g., `PAGE_VIEW`, `DOWNLOAD_CLICKED`) and exports TypeScript interfaces for the properties of each event to ensure type safety.

### `posthog.ts`
- **Content:** Handles the initialization and configuration of the PostHog analytics client. It manages environment-specific API keys and settings.

### `tracking.ts`
- **Content:** Provides the core `trackEvent` function that sends data to PostHog. It also includes specific, exported helper functions (e.g., `trackPageView`, `trackDownloadClick`) that are consumed by the `useAnalytics` hook.

---

## Guidelines for Modification
To add a new analytics event, follow these steps:
1.  **Define the Event:** Add the new event name as a constant and its property interface in `events.ts`.
2.  **Create a Tracking Function:** Add a new, specific helper function in `tracking.ts` that calls the generic `trackEvent` function with the new event name.
3.  **Expose via Hook:** Expose the new tracking function through the `useAnalytics` hook in `src/hooks/useAnalytics.ts` so it can be easily used in components.

---

## Changelog
- **2025-09-19** – Created `instruct.md` to document the structure and workflow of the analytics module.