import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, FileText, Zap, Shield, GitBranch, Cloud, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const UseCases = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Analytics hook
  const { trackCustomEvent } = useAnalyticsAstro();

  const handleAutomationCTAClick = () => {
    // Track the CTA click
    trackCustomEvent('automation_cta_clicked', {
      location: 'use_cases_section',
      cta_text: 'Tell us what you want to automate'
    });
    
    // Open Tally form in new tab
    window.open('https://tally.so/r/mOR6Yp', '_blank', 'noopener,noreferrer');
  };

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

  const useCases = [
    {
      icon: Cloud,
      title: "Set up infrastructure through conversation",
      description: "Deploy servers, configure databases, and orchestrate cloud services without memorizing complex CLI commands."
    },
    {
      icon: Terminal,
      title: "Explore and debug codebases",
      description: "Navigate complex repositories, trace issues, and fix problems through intelligent analysis."
    },
    {
      icon: FileText,
      title: "Build and maintain documentation or context",
      description: "Create reusable project context that makes every AI interaction smarter."
    },
    {
      icon: Shield,
      title: "Organize and manage your files",
      description: "Navigate, search, and organize your local files through natural conversation."
    },
    {
      icon: Zap,
      title: "Build prototypes and applications locally",
      description: "Transform ideas into working software through natural conversation."
    },
    {
      icon: GitBranch,
      title: "Automate workflows in natural language",
      description: "From invoice processing to email campaigns, describe what you want automated."
    }
  ];

  return (
    <section ref={sectionRef} id="use-cases" className="py-16 md:py-24 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header - Mobile optimized */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Transform your workflow today
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From simple file operations to complex deployment pipelines, Desktop Commander handles it all through natural conversation
          </p>
        </div>

        {/* Use Cases Grid - Mobile responsive */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card 
                key={index} 
                className={`group bg-background/50 border-dc-border hover:border-dc-blue/20 hover:bg-dc-blue/3 transition-all duration-300 hover:shadow-md hover:shadow-dc-blue/5 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms'
                }}
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Mobile: Vertical layout, Desktop: Horizontal with icon */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-dc-surface border border-dc-border rounded-xl group-hover:border-dc-blue/30 group-hover:bg-dc-blue/5 transition-all duration-300 flex-shrink-0 mx-auto sm:mx-0">
                      <IconComponent className="h-6 w-6 text-foreground group-hover:text-dc-blue transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center sm:text-left leading-tight">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-center sm:text-left">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA - Mobile optimized */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 px-4 sm:px-0">
            Install Desktop Commander and see how it handles these use cases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95" 
              asChild
            >
              <a href="./#installation" className="flex items-center justify-center gap-2">
                <Terminal className="h-5 w-5" />
                Start Building
              </a>
            </Button>
            <a 
              href="/library"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-dc-border text-foreground rounded-lg font-medium hover:bg-dc-surface/50 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              Browse 60+ Prompts to use with DC
            </a>
          </div>
        </div>

        {/* Automation CTA - Integrated */}
        <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-dc-surface/50 to-dc-surface/30 border border-dc-border rounded-2xl p-6 md:p-8 shadow-elegant hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              {/* Icon & Content */}
              <div className="flex-1">
                <div className="flex items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-dc-accent/10 border border-dc-accent/20 rounded-xl flex-shrink-0">
                    <Zap className="h-6 w-6 md:h-7 md:w-7 text-dc-accent" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 leading-tight">
                      Tell us what you want to automate – we'll help set it up
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-0 leading-relaxed">
                      Describe your repetitive tasks and we'll help you automate them with Desktop Commander. From deployment pipelines to file management workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button - Right side on desktop, bottom on mobile */}
              <div className="md:flex-shrink-0">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-dc-accent hover:bg-dc-accent/90 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group whitespace-nowrap"
                  onClick={handleAutomationCTAClick}
                >
                  Submit Request
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                
                {/* Trust indicator - below button */}
                <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
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

export default UseCases;