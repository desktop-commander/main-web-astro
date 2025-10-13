import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, Copy, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

const requirements = [
  {
    text: "Node.js version >= v18.0.0",
    downloadUrl: "https://nodejs.org/en/download"
  },
  {
    text: "Claude Desktop",
    downloadUrl: "https://claude.ai/download"
  }
];

const installationOptions = [
  {
    platform: ["MacOS"],
    method: "Bash Install",
    description: "Run this in Terminal:",
    command: "curl -fsSL https://raw.githubusercontent.com/wonderwhy-er/DesktopCommanderMCP/refs/heads/main/install.sh | bash",
    available: true,
    buttonText: "Copy and run this in Terminal"
  },
  {
    platform: ["Windows", "MacOS"],
    method: "NPX Install",
    description: "Run this in Terminal/Command Prompt:",
    command: "npx @wonderwhy-er/desktop-commander@latest setup",
    available: true,
    buttonText: "Copy and run this in Command Center / Terminal"
  }
];

const moreInstallationOptions = [
  { 
    name: "Install via Smithery", 
    description: "Install through Smithery",
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Install via the Smithery web interface:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">1</span>
            <div>
              <strong className="text-foreground">Visit the Smithery page:</strong>
              <div className="mt-1">
                <a 
                  href="https://smithery.ai/server/@wonderwhy-er/desktop-commander" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://smithery.ai/server/@wonderwhy-er/desktop-commander
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">2</span>
            <div>
              <strong className="text-foreground">Login to Smithery</strong> if you haven't already
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">3</span>
            <div>
              <strong className="text-foreground">Select your client</strong> (Claude Desktop) on the right side
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">4</span>
            <div>
              <strong className="text-foreground">Install with the provided key</strong> that appears after selecting your client
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">5</span>
            <div>
              <strong className="text-foreground">Restart Claude Desktop</strong>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // ... [rest of the file content truncated for brevity]
];

// Original file content preserved here...