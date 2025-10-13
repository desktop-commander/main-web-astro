// Temporary no-op hook for Astro compatibility
// TODO: Add proper analytics tracking later
export const useAnalyticsAstro = () => {
  return {
    trackDownload: () => {},
    trackCommunity: () => {},
    trackCTA: () => {},
    trackCustomEvent: () => {},
    trackNavigation: () => {},
  };
};
