import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MessageCircle, ArrowRight, Download, Terminal, Star, TrendingUp, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dcHeroAnimation from "@/assets/hero-8sec.gif";
import dcLogo from "@/assets/dc-logo-dark.png";
import { getAssetPath } from "@/utils/assets";

// Astro-compatible Hero (no useAnalytics dependency)
const HeroAstro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const [useVideo, setUseVideo] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Static values for badges (no animations)
  const npmCount = 24;
  const githubStars = 44;

  // Media loading - only runs on client
  useEffect(() => {
    // Use getAssetPath to properly handle base path for GitHub Pages
    const videoPath = getAssetPath('/hero-video.mp4');
    const gifPath = getAssetPath('/hero-8sec.gif');
    
    const video = document.createElement('video');
    video.oncanplaythrough = () => {
      setMediaLoaded(true);
      setUseVideo(true);
    };
    video.onerror = () => {
      const img = new Image();
      img.onload = () => {
        setMediaLoaded(true);
        setUseVideo(false);
      };
      img.onerror = () => setMediaError(true);
      img.src = gifPath;
    };
    video.src = videoPath;
    video.load();
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Media restart logic
  useEffect(() => {
    if (!mediaLoaded) return;
    
    if (useVideo) {
      const video = videoRef.current;
      if (video) {
        const handleVideoEnd = () => {
          video.currentTime = 0;
          video.play().catch(console.error);
        };
        video.addEventListener('ended', handleVideoEnd);
        return () => video.removeEventListener('ended', handleVideoEnd);
      }
    } else {
      const restartInterval = setInterval(() => {
        const gifElement = document.querySelector('.hero-gif') as HTMLImageElement;
        if (gifElement) {
          const gifPath = getAssetPath('hero-8sec.gif');
          gifElement.src = `${gifPath}?t=${Date.now()}`;
        }
      }, 7000);
      return () => clearInterval(restartInterval);
    }
  }, [mediaLoaded, useVideo]);

  return (
    <section ref={heroRef} className="pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:gap-16 lg:grid lg:grid-cols-12 lg:items-center">
          
          {/* Animation section */}
          <div className={`w-full max-w-xl lg:max-w-none lg:col-span-6 lg:order-2 transition-all duration-1200 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto w-full">
              <AspectRatio 
                ratio={16 / 9} 
                className="rounded-xl lg:rounded-2xl border border-dc-border bg-dc-surface/50 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="w-full h-full relative bg-gradient-to-r from-dc-surface/50 to-dc-surface/30">
                  {!mediaLoaded && !mediaError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dc-surface/80 z-10">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-dc-accent" />
                        <p className="text-sm text-muted-foreground">Loading animation...</p>
                      </div>
                    </div>
                  )}
                  
                  {mediaError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-dc-surface/80 z-10">
                      <div className="flex flex-col items-center gap-3 text-center">
                        <Terminal className="h-12 w-12 text-dc-accent" />
                        <div>
                          <p className="font-semibold text-foreground">Desktop Commander</p>
                          <p className="text-sm text-muted-foreground">Animation preview</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {mediaLoaded && useVideo && (
                    <video
                      ref={videoRef}
                      src={getAssetPath('hero-video.mp4')}
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-100"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      style={{ imageRendering: 'auto' }}
                    />
                  )}
                  
                  {mediaLoaded && !useVideo && (
                    <img
                      className="hero-gif w-full h-full object-cover transition-opacity duration-500 opacity-100"
                      src={getAssetPath('hero-8sec.gif')}
                      alt="Desktop Commander in action"
                      loading="eager"
                      style={{ imageRendering: 'auto' }}
                    />
                  )}
                </div>
              </AspectRatio>
            </div>
          </div>

          {/* Content section */}
          <div className="lg:col-span-6 text-center lg:text-left lg:order-1 w-full">
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-tight transition-all duration-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              One Chat, Full Stack
            </h1>
            
            <p className={`text-lg sm:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1200 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Give AI direct access to your system—manage files, automate terminal commands, and deploy in plain language
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 lg:justify-start justify-center items-center mb-8 md:mb-12 transition-all duration-1200 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dc-accent/20 transform active:scale-95 group" 
                asChild
              >
                <a href="./#installation">
                  <Terminal className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Install
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-dc-surface hover:border-dc-accent/50 transform active:scale-95 group" 
                asChild
              >
                <a 
                  href="https://discord.gg/kQ27sNnZr7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                  Join Discord
                </a>
              </Button>
            </div>

            {/* Connect to your toolkit */}
            <div className={`mb-6 md:mb-8 pt-6 md:pt-8 border-t border-dc-border/50 transition-all duration-1200 delay-1500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-sm text-muted-foreground mb-3 md:mb-4 text-center lg:text-left">Connect to your toolkit</p>
              <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:flex lg:items-center lg:justify-start opacity-60">
                <img src={getAssetPath("star-logo.png")} alt="Star logo" className="h-5 sm:h-6 object-contain grayscale justify-self-center" />
                <img src={getAssetPath("claude-desktop-logo.png")} alt="Claude Desktop" className="h-6 sm:h-8 w-6 sm:w-8 object-contain grayscale justify-self-center" />
                <img src={getAssetPath("cursor-logo.png")} alt="Cursor IDE" className="h-5 sm:h-6 object-contain grayscale justify-self-center" />
                <img src={getAssetPath("vscode-new-logo.png")} alt="VS Code" className="h-5 sm:h-6 object-contain grayscale justify-self-center" />
                <img src={getAssetPath("client-logo-1.png")} alt="Client logo" className="h-5 sm:h-6 object-contain grayscale justify-self-center lg:justify-self-auto" />
                <img src={getAssetPath("client-logo-2.png")} alt="Client logo" className="h-5 sm:h-6 object-contain grayscale justify-self-center lg:justify-self-auto" />
                <img src={getAssetPath("client-logo-3.png")} alt="Client logo" className="h-8 sm:h-12 object-contain grayscale justify-self-center lg:justify-self-auto col-span-2 lg:col-span-1" />
              </div>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-col sm:flex-row sm:flex-wrap lg:justify-start justify-center gap-3 transition-all duration-1200 delay-2000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <a 
                href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <Download className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">NPM Downloads</div>
                  <div className="font-semibold text-foreground text-xs">{npmCount}k/week</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <Star className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">GitHub Stars</div>
                  <div className="font-semibold text-foreground text-xs">{(githubStars / 10).toFixed(1)}k stars</div>
                </div>
              </a>
              
              <a 
                href="https://smithery.ai/server/@wonderwhy-er/desktop-commander" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-dc-surface border border-dc-border rounded-lg text-sm w-full sm:w-auto sm:min-w-[160px] transition-all duration-300 hover:scale-105 hover:bg-dc-surface/80 hover:border-dc-accent/30 hover:shadow-md cursor-pointer group"
              >
                <div className="flex items-center justify-center w-5 h-5 bg-dc-border rounded-sm transition-colors duration-300 group-hover:bg-dc-accent/20 flex-shrink-0">
                  <TrendingUp className="h-2.5 w-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-dc-accent" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-muted-foreground text-xs uppercase tracking-wide transition-colors duration-300 group-hover:text-foreground">SMITHERY.COM</div>
                  <div className="font-semibold text-foreground text-xs">Top Ranked MCP</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAstro;
