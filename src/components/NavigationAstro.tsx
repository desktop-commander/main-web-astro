import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Terminal, ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import dcLogo from "@/assets/dc-logo.png";
import { useState } from "react";

// Astro-compatible Navigation (no useAnalytics/useLocation)
const NavigationAstro = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const handleMobileNavClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dc-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a 
              href="https://desktopcommander.app" 
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img src={dcLogo.src} alt="Desktop Commander" className="h-7 sm:h-8 w-auto min-w-[270px]" width="200" height="32" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/#use-cases"
                  className="text-white hover:text-white/80 font-medium"
                >
                  Use Cases
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/library"
                  className="text-white hover:text-white/80 font-medium"
                >
                  Prompts
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a 
                  href="/#community"
                  className="text-white hover:text-white/80 font-medium"
                >
                  Community
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a
                  href="/careers"
                  className="text-white hover:text-white/80 font-medium relative pr-12"
                >
                  Careers
                  <Badge variant="default" className="absolute -top-1 right-2 bg-green-600 hover:bg-green-700 text-white text-[9px] px-1.5 py-0.5">
                    Hiring
                  </Badge>
                </a>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-white/80 font-medium">
                    Resources
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <a href="/#blog" className="flex items-center cursor-pointer">
                      Blog
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/#faq" className="flex items-center cursor-pointer">
                      FAQ
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://github.com/wonderwhy-er/DesktopCommanderMCP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                      GitHub
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="default" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              <a href="/#installation" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Install
              </a>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a 
                  href="/#use-cases" 
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Use Cases
                </a>
                <a 
                  href="/library" 
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Prompts
                </a>
                <a 
                  href="/#community" 
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Community
                </a>
                <a 
                  href="/careers" 
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Careers
                  <Badge variant="default" className="bg-green-600 text-white text-[9px] px-1.5 py-0.5">
                    Hiring
                  </Badge>
                </a>
                <div className="border-t border-border my-2"></div>
                <a 
                  href="/#blog" 
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  Blog
                </a>
                <a 
                  href="/#faq" 
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
                <a 
                  href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleMobileNavClick}
                  className="text-lg font-medium px-2 py-1 hover:text-primary transition-colors flex items-center gap-2"
                >
                  GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
                <Button size="default" asChild className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="/#installation" className="flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    Install
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationAstro;
