import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, Download, PlayCircle, BookOpen } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Install Desktop Commander",
    description: "Get started with a single command using npm or your preferred package manager.",
    code: "npm install -g desktop-commander"
  },
  {
    step: "02",
    title: "Initialize Your Project",
    description: "Set up Desktop Commander in your project directory with automatic configuration.",
    code: "dc init --template=web-app"
  },
  {
    step: "03",
    title: "Start Managing",
    description: "Use powerful commands to manage files, deploy servers, and automate workflows.",
    code: "dc deploy --env=production"
  }
];

const GettingStarted = () => {
  return (
    <section id="getting-started" className="py-20 bg-dc-surface/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to set up Desktop Commander and start boosting your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 bg-dc-card border-dc-border relative overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                {step.step}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-background border border-dc-border rounded-lg p-4 font-mono text-sm">
                  <code className="text-primary">{step.code}</code>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Now
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Read Documentation
            </Button>
            <Button variant="subtle" size="lg" className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5" />
              Watch Tutorial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;