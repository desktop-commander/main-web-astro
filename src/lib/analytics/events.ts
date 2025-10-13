// Event definitions for Desktop Commander website analytics

export interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

// Page view events
export const PAGE_EVENTS = {
  PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',
} as const;

// User interaction events
export const INTERACTION_EVENTS = {
  // Download and CTA events (High Priority)
  DOWNLOAD_CLICKED: 'download_clicked',
  CTA_CLICKED: 'cta_clicked',
  
  // Community link events (High Priority)
  GITHUB_CLICKED: 'github_clicked',
  DISCORD_CLICKED: 'discord_clicked',
  YOUTUBE_CLICKED: 'youtube_clicked',
  
  // Navigation events
  NAVIGATION_CLICKED: 'navigation_clicked',
  EXTERNAL_LINK_CLICKED: 'external_link_clicked',
  
  // Installation and copy events
  COPY_COMMAND_CLICKED: 'copy_command_clicked',
  SOCIAL_CLICKED: 'social_clicked',
  
  // Prompt Library events
  PROMPT_CATEGORY_CLICKED: 'prompt_category_clicked',
  PROMPT_CLICKED: 'prompt_clicked',
  PROMPT_LIBRARY_CTA_CLICKED: 'prompt_library_cta_clicked',
  
  // User engagement events
  SCROLL_DEPTH: 'scroll_depth',
  SESSION_START: 'session_start',
  SESSION_END: 'session_end',
} as const;

// Blog section events
export const BLOG_EVENTS = {
  BLOG_POST_CLICKED: 'blog_post_clicked',
  BLOG_POST_VIEW: 'blog_post_view',
  BLOG_POST_SHARE: 'blog_post_share',
  BLOG_CATEGORY_VIEW: 'blog_category_view',
} as const;

// Event property interfaces for type safety
export interface PageViewProperties extends EventProperties {
  page_title: string;
  page_url: string;
  referrer?: string;
}

export interface DownloadClickedProperties extends EventProperties {
  button_text: string;
  button_location: string; // header, hero, footer, etc.
  download_type?: string; // installer, direct, etc.
}

export interface CommunityLinkProperties extends EventProperties {
  platform: 'github' | 'discord' | 'youtube';
  link_location: string; // header, footer, hero, etc.
  link_text: string;
}

export interface ScrollDepthProperties extends EventProperties {
  depth_percentage: number;
  page_url: string;
  max_scroll_reached: number;
}

export interface PromptCategoryProperties extends EventProperties {
  button_text: string;
  button_location: string;
  category_name: string;
  category_tab: string;
  total_prompts_in_category: number;
}

export interface PromptClickedProperties extends EventProperties {
  button_text: string;
  button_location: string;
  category_name: string;
  prompt_title: string;
  prompt_description: string;
  prompt_url: string;
  prompt_position: number;
  total_prompts_in_category: number;
}

export interface PromptLibraryCTAProperties extends EventProperties {
  button_text: string;
  button_location: string;
  link_type: string;
  destination: string;
  current_active_tab: string;
}

export interface CopyCommandProperties extends EventProperties {
  button_text: string;
  button_location: string;
  installation_method: string;
  command: string;
}

export interface BlogPostClickedProperties extends EventProperties {
  post_title: string;
  post_url: string;
  post_type: 'video' | 'article';
  post_position: number;
  post_date: string;
  has_badge?: string;
}

// All events union type
export type AllEvents = 
  | typeof PAGE_EVENTS[keyof typeof PAGE_EVENTS]
  | typeof INTERACTION_EVENTS[keyof typeof INTERACTION_EVENTS]
  | typeof BLOG_EVENTS[keyof typeof BLOG_EVENTS];

// Helper function to get event category
export const getEventCategory = (eventName: AllEvents): string => {
  if (Object.values(PAGE_EVENTS).includes(eventName as any)) {
    return 'page';
  }
  if (Object.values(INTERACTION_EVENTS).includes(eventName as any)) {
    return 'interaction';
  }
  if (Object.values(BLOG_EVENTS).includes(eventName as any)) {
    return 'blog';
  }
  return 'unknown';
};
