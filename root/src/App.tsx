import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import LibraryHome from "./pages/library/Index";
import LibraryPrompts from "./pages/library/Prompts";
import PromptDetail from "./pages/library/PromptDetail";
import NotFound from "./pages/NotFound";
import InstallRedirect from "./components/InstallRedirect";
import { initializePostHog } from "./lib/analytics/posthog";
import { PostHogProvider } from "./components/PostHogProvider";

const queryClient = new QueryClient();

// Smart basename detection: works with GitHub Pages, custom domain, and PR previews
const getBasename = () => {
  // Always log for debugging
  const { pathname, hostname, href } = window.location;
  console.log('App.tsx - Detecting basename for:', { pathname, hostname, href });
  
  if (import.meta.env.MODE === 'development') {
    console.log('App.tsx - Development mode, using empty basename');
    return '';
  }
  
  // In production/preview, check the actual URL path
  
  // If we're on a PR preview (path starts with /pr-NUMBER/)
  if (pathname.match(/^\/pr-\d+\//)) {
    const prBasename = pathname.match(/^\/pr-\d+/)[0];
    console.log('App.tsx - PR preview detected, basename:', prBasename);
    return prBasename;
  }
  
  // If we're on GitHub Pages subdirectory (not custom domain)
  if (hostname.includes('github.io') && pathname.startsWith('/main-web/')) {
    console.log('App.tsx - GitHub Pages subdirectory detected, basename: /main-web');
    return '/main-web';
  }
  
  // For custom domain or root deployment
  console.log('App.tsx - Using empty basename for custom domain/root');
  return '';
};

const basename = getBasename();

const App = () => {
  // Initialize PostHog when the app starts
  useEffect(() => {
    initializePostHog();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PostHogProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/library" element={<LibraryHome />} />
              <Route path="/library/prompts" element={<LibraryPrompts />} />
              <Route path="/library/prompts/:slug" element={<PromptDetail />} />
              {/* Installation redirect routes */}
              <Route path="/install/:method" element={<InstallRedirect />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </PostHogProvider>
    </QueryClientProvider>
  );
};

export default App;
