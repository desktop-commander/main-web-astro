// Utility to handle asset paths for both GitHub Pages and custom domain
export function getBasePath(): string {
  // During SSR, use environment variable if set
  if (typeof window === 'undefined') {
    return process.env.BASE_PATH || '/';
  }
  
  // In browser: detect from hostname
  const { hostname, pathname } = window.location;
  
  // If on github.io, extract repo name
  if (hostname.includes('github.io')) {
    const match = pathname.match(/^\/([^/]+)/);
    return match ? `/${match[1]}` : '/';
  }
  
  // Custom domain or localhost
  return '/';
}

export function getAssetPath(path: string): string {
  const base = getBasePath();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const fullPath = `${base}/${cleanPath}`;
  
  // Clean up double slashes
  return fullPath.replace(/\/+/g, '/');
}
