import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JobListings from "@/components/JobListings";
import { useAnalytics } from "@/hooks/useAnalytics";

const Careers = () => {
  // Initialize analytics tracking for this page
  useAnalytics();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <JobListings />
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
