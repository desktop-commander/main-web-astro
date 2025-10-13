// Utility to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined';
  
  // In SSR or during build, just return the clean path
  if (!isBrowser) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return cleanPath;
  }
  
  // In browser, use import.meta.env if available
  const base = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For development, just return the path as-is
  if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    return `/${cleanPath}`;
  }
  
  // For production, use the base URL
  return `${base}${cleanPath}`;
};
