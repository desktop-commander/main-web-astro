import posthog from 'posthog-js';

// PostHog configuration
interface PostHogConfig {
  apiKey: string;
  apiHost: string;
  environment: 'development' | 'production';
}

// Environment-specific configuration
const getPostHogConfig = (): PostHogConfig => {
  const isDevelopment = import.meta.env.DEV;
  
  return {
    apiKey: import.meta.env.VITE_POSTHOG_API_KEY || 'phc_SmlF1mKK199Blt4hUNL6V19IWydNNJ9o7Qbym2Y4zQa',
    apiHost: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
    environment: isDevelopment ? 'development' : 'production'
  };
};

// Initialize PostHog
export const initializePostHog = (): void => {
  const config = getPostHogConfig();
  
  if (!config.apiKey) {
    console.warn('PostHog API key not found. Analytics will not work.');
    return;
  }

  posthog.init(config.apiKey, {
    api_host: config.apiHost,
    // Enable session recording
    session_recording: {
      enabled: true,
      // Record console logs and network requests in development
      record_console: config.environment === 'development',
      record_network: config.environment === 'development',
    },
    // Auto-capture settings
    autocapture: {
      // Capture all clicks by default
      dom_event_allowlist: ['click', 'change', 'submit'],
      // Don't capture sensitive form inputs
      mask_all_element_attributes: false,
      mask_all_text: false,
    },
    // Performance settings
    loaded: (posthog) => {
      if (config.environment === 'development') {
        posthog.debug(true); // Enable debug mode in development
      }
    },
    // Respect user privacy
    respect_dnt: true,
    // Disable in development for testing
    disable_session_recording: config.environment === 'development' ? false : false,
  });

  // Set environment as a super property
  posthog.register({
    environment: config.environment,
    website_section: 'main_site'
  });

  console.log(`PostHog initialized for ${config.environment} environment`);
};

// Export the posthog instance
export { posthog };

// Helper function to check if PostHog is ready
export const isPostHogReady = (): boolean => {
  return posthog && posthog.__loaded;
};
