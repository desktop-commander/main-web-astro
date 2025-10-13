// Get the base path for links - works in both Astro and React
export function getBasePath(): string {
  // In browser, read from a global variable set by Astro
  if (typeof window !== 'undefined' && (window as any).__BASE_PATH__) {
    return (window as any).__BASE_PATH__;
  }
  
  // Fallback: try to detect from current URL
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/main-web-astro/')) {
      return '/main-web-astro/';
    }
  }
  
  // Default to root
  return '/';
}

// Helper to create properly prefixed links
export function getLink(path: string): string {
  const base = getBasePath();
  // Remove trailing slash from base and leading slash from path for clean joining
  const cleanBase = base.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
