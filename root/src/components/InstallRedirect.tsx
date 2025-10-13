import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Map of URL slugs to installation method names (exact match for modal titles)
const INSTALL_METHOD_MAP: Record<string, string> = {
  'smithery': 'Install via Smithery',
  'docker': 'Install using Docker', 
  'manual': 'Install manually',
  'local': 'Install locally',
  'cursor': 'Install in Cursor'
};

const InstallRedirect = () => {
  const { method } = useParams<{ method: string }>();
  
  useEffect(() => {
    if (method && INSTALL_METHOD_MAP[method]) {
      // Redirect to main page with installation parameter (use the method slug, not the full name)
      const url = `/?install=${method}#installation`;
      window.location.href = url;
    }
  }, [method]);

  // If method is not recognized, redirect to main installation section
  if (!method || !INSTALL_METHOD_MAP[method]) {
    return <Navigate to="/#installation" replace />;
  }

  // Show a brief loading state while redirecting
  return (
    <div className="min-h-screen bg-dc-surface flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to {method} installation...</p>
      </div>
    </div>
  );
};

export default InstallRedirect;