import { Star, Download, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import TestimonialsStrip from "./TestimonialsStrip";

const TrustedBy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const stats = [
    {
      icon: Star,
      value: "9.52/10",
      label: "User Rating",
      description: "Developer satisfaction"
    },
    {
      icon: Download,
      value: "26k+",
      label: "Weekly Downloads",
      description: "Active installations"
    },
    {
      icon: Github,
      value: "4.3k+",
      label: "GitHub Stars",
      description: "Community trust"
    }
  ];

  const testimonials = [
    {
      quote: "It is a great tool, thank you, I like using it, as it gives claude an ability to do surgical edits, making it more like a human developer.",
      author: "naranbaz",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Life saver! I was paying for both Claude + Cursor which felt duplicated. This solves that perfectly. With MCP + web search, it writes code with the latest updates. So good when Cursor doesn't work or fast requests run out.",
      author: "play365alltime",
      role: "Developer",
      company: "Community"
    },    {
      quote: "I had 76 errors in 23 files in my Svelte 5 project. Used desktop-commander, sequentialthinking, and tree-sitter to fix them all. Never resolved type errors this quickly with AI before!",
      author: "dependablecalls",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "I'm the one who is grateful for this, which is the best MCP that exists!",
      author: "Dhiego Pagotto",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Just joined I absolutely love this thing",
      author: "Uloi",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "happy command coding everyone - god I love this tool",
      author: "Geoff F",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Wow, I've been building something similar. This makes my project so much easier to build now. I'm truly grateful. Thank you!",
      author: "Creedo",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "btw @DC Dmitry , thanks for such great MCP 🙂 I'm loving it 🙂",
      author: "Damian Pastorini",
      role: "Developer",
      company: "COLY"
    },
    {
      quote: "Switched from Windsurf to Claude MCP and love it! No more token limits or cascade issues. Can code as much as I want without worrying about costs. This is much more than just code editing!",
      author: "jesseburstrom5920",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Been using this MCP daily for a couple of months now and onboarded a bunch of buddies onto it as well, a go to in my arsenal, great work!!",
      author: "Bjorn Melin",
      role: "Developer",
      company: "Community"
    },
    {
      quote: "Played with DesktopCommander today, replaced FileServer and continued my project. The diff-based editing is awesome - could continue longer in the same chat before hitting limits. Great!",
      author: "eszpee",
      role: "Developer",
      company: "Community"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header - Mobile optimized */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Trusted by the AI community
          </h2>
        </div>

        {/* Trust Stats - Mobile responsive grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 group transition-all duration-700 p-4 sm:p-0 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${500 + index * 200}ms` : '0ms'
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-dc-blue/10 rounded-xl group-hover:bg-dc-blue/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-dc-blue transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials - Outside container for full-width */}
      <div className={`mb-6 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <TestimonialsStrip testimonials={testimonials} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* CTA Section - Mobile optimized */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 px-4 sm:px-0">
            Try it out for yourself or browse our prompt library!
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
                Install Desktop Commander
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95" 
              asChild
            >
              <a 
                href="/library"
                className="flex items-center justify-center gap-2"
              >
                Browse Prompt Library
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;