import { Button } from "@/components/ui/button";
import { ArrowDown, Users, Heart, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const CareersHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToJobs = () => {
    const jobsSection = document.getElementById('job-listings');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Join the Future of
              <span className="block text-primary">AI-Powered Development</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Build the tools that will transform how developers work with AI. 
              Help us connect file systems to Large Language Models at Desktop Commander.
            </p>
          </div>

          {/* Stats/highlights */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                <span>Pre-seed startup</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Hybrid work</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <span>Equity & growth</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group"
              onClick={scrollToJobs}
            >
              View Open Positions
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default CareersHero;
