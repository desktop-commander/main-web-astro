// Utility to get the correct base path for links
// This uses Astro's import.meta.env which is available at build time
export function getBasePath(): string {
  return import.meta.env.BASE_URL || '/';
}

// Helper to create properly prefixed links
export function link(path: string): string {
  const base = getBasePath();
  // Remove trailing slash from base and leading slash from path for clean joining
  const cleanBase = base.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

// For use in Astro components
export function getLink(path: string): string {
  return link(path);
}
