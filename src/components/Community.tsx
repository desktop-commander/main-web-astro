import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Github, Youtube } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const Community = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Analytics hook
  const { trackCommunity } = useAnalyticsAstro();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect with other users and contributors to share ideas, get help, and contribute to the project.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* GitHub Card */}
            <div className={`bg-gray-50 rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '300ms' : '0ms'
            }}>
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Github className="w-8 h-8 text-gray-900 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GitHub</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Star the repository, report issues, and contribute code.
              </p>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
                onClick={() => {
                  trackCommunity('github', 'community_section', 'GITHUB REPO');
                  window.open('https://github.com/wonderwhy-er/DesktopCommanderMCP', '_blank');
                }}
              >
                GITHUB REPO
              </Button>
            </div>
            
            {/* Discord Card - Featured */}
            <div className={`bg-white border-2 border-blue-600 rounded-lg p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '500ms' : '0ms'
            }}>
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <MessageCircle className="w-8 h-8 text-gray-900 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discord</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our Discord server to chat with the community in real-time.
              </p>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
                onClick={() => {
                  trackCommunity('discord', 'community_section', 'JOIN DISCORD');
                  window.open('https://discord.gg/kQ27sNnZr7', '_blank');
                }}
              >
                JOIN DISCORD
              </Button>
            </div>
            
            {/* YouTube Card */}
            <div className={`bg-gray-50 rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: isVisible ? '700ms' : '0ms'
            }}>
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Youtube className="w-8 h-8 text-gray-900 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YouTube Channel</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Follow us on YouTube and vibe code with us.
              </p>
              <Button 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95"
                onClick={() => {
                  trackCommunity('youtube', 'community_section', 'WATCH NOW');
                  window.open('https://www.youtube.com/@EduardsRuzga', '_blank');
                }}
              >
                WATCH NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;