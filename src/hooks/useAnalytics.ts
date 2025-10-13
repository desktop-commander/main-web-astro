import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  trackPageView, 
  trackDownloadClick, 
  trackCommunityLink,
  trackEvent,
  trackCtaClick,
  trackScrollDepth
} from '../lib/analytics/tracking';
import type { 
  DownloadClickedProperties, 
  CommunityLinkProperties,
  EventProperties 
} from '../lib/analytics/events';
import type { AllEvents } from '../lib/analytics/events';

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views automatically
  useEffect(() => {
    const pageTitle = document.title || 'Desktop Commander';
    const pageUrl = window.location.href;
    const referrer = document.referrer;

    trackPageView({
      page_title: pageTitle,
      page_url: pageUrl,
      referrer: referrer || undefined,
    });
  }, [location.pathname]);

  // Scroll depth tracking
  useEffect(() => {
    let maxScrollDepth = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.round((scrollTop / docHeight) * 100);

          // Track at 25%, 50%, 75%, 90% milestones
          const milestones = [25, 50, 75, 90];
          const currentMilestone = milestones.find(milestone => 
            scrollPercent >= milestone && maxScrollDepth < milestone
          );

          if (currentMilestone) {
            maxScrollDepth = currentMilestone;
            trackScrollDepth({
              depth_percentage: currentMilestone,
              page_url: window.location.href,
              max_scroll_reached: scrollPercent,
            });
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Helper functions for common tracking scenarios
  const trackDownload = useCallback((buttonText: string, location: string, additionalProps?: EventProperties) => {
    trackDownloadClick({
      button_text: buttonText,
      button_location: location,
      ...additionalProps
    });
  }, []);

  const trackCommunity = useCallback((
    platform: 'github' | 'discord' | 'youtube',
    linkLocation: string,
    linkText: string
  ) => {
    trackCommunityLink({
      platform,
      link_location: linkLocation,
      link_text: linkText,
    });
  }, []);

  const trackCTA = useCallback((
    buttonText: string,
    location: string,
    additionalProps?: EventProperties
  ) => {
    trackCtaClick(buttonText, location, additionalProps);
  }, []);

  const trackCustomEvent = useCallback((
    eventName: AllEvents,
    properties?: EventProperties
  ) => {
    trackEvent(eventName, properties);
  }, []);

  const trackNavigation = useCallback((
    linkText: string,
    destination: string,
    linkType: 'internal' | 'external' = 'internal'
  ) => {
    trackEvent('navigation_clicked' as AllEvents, {
      link_text: linkText,
      destination,
      link_type: linkType,
    });
  }, []);

  return {
    trackDownload,
    trackCommunity,
    trackCTA,
    trackCustomEvent,
    trackNavigation,
  };
};
