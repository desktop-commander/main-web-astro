import { posthog, isPostHogReady } from './posthog';
import type { 
  EventProperties,
  PageViewProperties,
  DownloadClickedProperties,
  CommunityLinkProperties,
  ScrollDepthProperties,
  BlogPostClickedProperties,
  AllEvents
} from './events';
import { PAGE_EVENTS, INTERACTION_EVENTS, BLOG_EVENTS } from './events';

// Enhanced logging for development
const logEvent = (eventName: AllEvents, properties?: EventProperties) => {
  console.log(`🎯 Analytics Event: ${eventName}`, {
    event: eventName,
    properties,
    timestamp: new Date().toISOString(),
    posthogReady: isPostHogReady()
  });
};

// Generic tracking function
export const trackEvent = (
  eventName: AllEvents, 
  properties?: EventProperties
): void => {
  // Always log in development for debugging
  if (import.meta.env.DEV) {
    logEvent(eventName, properties);
  }

  // Only send to PostHog if ready
  if (!isPostHogReady()) {
    console.warn('PostHog not ready, event logged locally only:', eventName);
    return;
  }

  try {
    posthog.capture(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    });
    
    console.log('✅ Event sent to PostHog:', eventName);
  } catch (error) {
    console.error('❌ Error tracking event:', eventName, error);
  }
};

// Page tracking
export const trackPageView = (properties: PageViewProperties): void => {
  trackEvent(PAGE_EVENTS.PAGE_VIEW, properties);
};

// Download button tracking
export const trackDownloadClick = (properties: DownloadClickedProperties): void => {
  trackEvent(INTERACTION_EVENTS.DOWNLOAD_CLICKED, properties);
};

// Community link tracking
export const trackCommunityLink = (properties: CommunityLinkProperties): void => {
  const eventMap = {
    github: INTERACTION_EVENTS.GITHUB_CLICKED,
    discord: INTERACTION_EVENTS.DISCORD_CLICKED,
    youtube: INTERACTION_EVENTS.YOUTUBE_CLICKED,
  };

  trackEvent(eventMap[properties.platform], properties);
};

// Generic CTA tracking
export const trackCtaClick = (buttonText: string, location: string, additionalProps?: EventProperties): void => {
  trackEvent(INTERACTION_EVENTS.CTA_CLICKED, {
    button_text: buttonText,
    button_location: location,
    ...additionalProps
  });
};

// Scroll depth tracking
export const trackScrollDepth = (properties: ScrollDepthProperties): void => {
  trackEvent(INTERACTION_EVENTS.SCROLL_DEPTH, properties);
};

// Blog post click tracking
export const trackBlogPostClick = (properties: BlogPostClickedProperties): void => {
  trackEvent(BLOG_EVENTS.BLOG_POST_CLICKED, properties);
};
