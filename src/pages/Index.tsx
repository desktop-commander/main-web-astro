import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import TrustedBy from "@/components/TrustedBy";
import PromptLibrary from "@/components/PromptLibrary";
import Installation from "@/components/Installation";
import Blog from "@/components/Blog";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  // Initialize analytics tracking for this page
  useAnalytics();
  
  const location = useLocation();
  
  // Handle hash fragments when navigating to the main page
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash to get the element ID
      const elementId = location.hash.substring(1);
      
      // Function to try scrolling to element
      const scrollToElement = (attempt = 1, maxAttempts = 10) => {
        const element = document.getElementById(elementId);
        if (element) {
          // Found the element, scroll to it
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else if (attempt < maxAttempts) {
          // Retry if element not found (might still be rendering)
          setTimeout(() => scrollToElement(attempt + 1, maxAttempts), 100);
        }
      };
      
      // Use requestAnimationFrame to ensure DOM is ready, then start trying
      requestAnimationFrame(() => {
        setTimeout(() => scrollToElement(), 200);
      });
    }
  }, [location.hash]); // Re-run when hash changes
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <UseCases />
        <TrustedBy />
        <PromptLibrary />
        <Installation />
        <Blog />
        <Community />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
