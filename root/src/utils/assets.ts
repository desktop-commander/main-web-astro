// Utility to handle asset paths for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  // In production, we need to prepend the base path
  const base = import.meta.env.BASE_URL || '/';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For development, just return the path as-is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // For production, use the base URL
  return `${base}${cleanPath}`;
};