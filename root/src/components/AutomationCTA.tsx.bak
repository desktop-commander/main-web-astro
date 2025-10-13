import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

const AutomationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Analytics hook
  const { trackCustomEvent } = useAnalytics();

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    // Track the CTA click
    trackCustomEvent('automation_cta_clicked', {
      location: 'main_section',
      cta_text: 'Tell us what you want to automate'
    });
    
    // Open Tally form in new tab
    window.open('https://tally.so/r/mOR6Yp', '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Horizontal Layout Card */}
          <div className="bg-gradient-to-br from-dc-surface/50 to-dc-surface/30 border border-dc-border rounded-2xl p-6 md:p-8 shadow-elegant hover:shadow-xl transition-all duration-300">
            
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              {/* Icon & Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-dc-accent/10 border border-dc-accent/20 rounded-xl flex-shrink-0 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-dc-accent" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    {/* Heading */}
                    <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 leading-tight transition-all duration-1000 delay-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      Tell us what you want to automate – we'll help set it up
                    </h2>

                    {/* Description */}
                    <p className={`text-base md:text-lg text-muted-foreground mb-4 md:mb-0 leading-relaxed transition-all duration-1000 delay-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      Describe your repetitive tasks and we'll help you automate them with Desktop Commander. From deployment pipelines to file management workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button - Right side on desktop, bottom on mobile */}
              <div className={`md:flex-shrink-0 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-dc-accent hover:bg-dc-accent/90 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group whitespace-nowrap"
                  onClick={handleCTAClick}
                >
                  Submit Request
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                
                {/* Trust indicator - below button */}
                <p className={`text-xs text-muted-foreground mt-3 text-center md:text-left transition-all duration-1000 delay-1200 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  Custom automation • No commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationCTA;