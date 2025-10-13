import { Button } from "@/components/ui/button";
import { Github, Heart, MessageCircle, Play, Package } from "lucide-react";
import dcLogo from "@/assets/dc-logo-dark.png";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Link } from "react-router-dom";

const Footer = () => {
  const { trackCustomEvent } = useAnalytics();

  return (
    <footer className="border-t border-dc-border bg-dc-surface/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand - Full width on mobile, 2 cols on desktop */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={dcLogo} alt="Desktop Commander" className="h-8 w-8" loading="lazy" />
              <h3 className="text-xl font-bold text-foreground">Desktop Commander</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              The powerful MCP to manage files, deploy servers, and automate workflows with ease.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/wonderwhy-er/DesktopCommanderMCP" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://discord.gg/kQ27sNnZr7" target="_blank" rel="noopener noreferrer" title="Discord">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.youtube.com/@EduardsRuzga" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <Play className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com/DCommander_MCP" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://bsky.app/profile/dcommandermcp.bsky.social" target="_blank" rel="noopener noreferrer" title="Bluesky">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.39-.039-.114 0-.253.019-.39.039C4.337 13.9 1.44 14.823.624 17.56.378 18.388 0 23.347 0 24.037c0 .689.139 1.861.902 2.204.659.299 1.664.621 3.3-.24C6.954 24.039 9.913 20.1 11 17.986 12.087 20.1 15.046 24.039 17.798 25.8c1.636.861 2.641.539 3.3.24.763-.343.902-1.515.902-2.204 0-.69-.378-5.649-.624-6.477-.816-2.737-3.713-3.66-6.383-3.364-.137.02-.276.039-.39.039.114 0 .253-.019.39-.039 2.67.296 5.567-.627 6.383-3.364.246-.829.624-5.79.624-6.479 0-.688-.139-1.86-.902-2.203-.659-.299-1.664-.621-3.3.24C15.046 4.747 12.087 8.686 11 10.8z"/>
                  </svg>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.npmjs.com/package/@wonderwhy-er/desktop-commander" target="_blank" rel="noopener noreferrer" title="NPM">
                  <Package className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Browse</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/#use-cases"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Use Cases',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'use-cases'
                  })}
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link 
                  to="/#installation"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Installation',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'installation'
                  })}
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link 
                  to="/#prompts"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Prompt Library',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'prompts'
                  })}
                >
                  Prompt Library
                </Link>
              </li>
              <li>
                <a 
                  href="/careers" 
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Careers',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'careers'
                  })}
                >
                  Careers
                </a>
              </li>
              <li>
                <Link 
                  to="/#faq"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'FAQ',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'faq'
                  })}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/#blog"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Blog',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'blog'
                  })}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/#community"
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('navigation_clicked', {
                    button_text: 'Community',
                    button_location: 'footer',
                    link_type: 'internal',
                    section: 'community'
                  })}
                >
                  Community
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/wonderwhy-er/DesktopCommanderMCP/issues" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('external_link_clicked', {
                    button_text: 'GitHub Issues',
                    button_location: 'footer',
                    link_type: 'external',
                    destination: 'github_issues'
                  })}
                >
                  GitHub Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/wonderwhy-er/DesktopCommanderMCP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  onClick={() => trackCustomEvent('github_clicked', {
                    button_text: 'Source Code',
                    button_location: 'footer',
                    link_type: 'external'
                  })}
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dc-border mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Desktop Commander MCP. Open-source software under MIT license.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a 
                href="https://legal.desktopcommander.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-smooth"
                onClick={() => trackCustomEvent('external_link_clicked', {
                  button_text: 'Terms of Use',
                  button_location: 'footer',
                  link_type: 'legal',
                  destination: 'terms'
                })}
              >
                Terms of Use
              </a>
              <a 
                href="https://legal.desktopcommander.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-smooth"
                onClick={() => trackCustomEvent('external_link_clicked', {
                  button_text: 'Privacy Policy',
                  button_location: 'footer',
                  link_type: 'legal',
                  destination: 'privacy'
                })}
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              Made with Desktop Commander
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;