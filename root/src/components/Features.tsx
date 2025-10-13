import { Card } from "@/components/ui/card";
import { FolderOpen, Server, Rocket, Zap, Shield, Code } from "lucide-react";
const features = [{
  icon: FolderOpen,
  title: "File Management",
  description: "Effortlessly organize, move, and manage files across your system with intelligent automation."
}, {
  icon: Server,
  title: "Server Setup",
  description: "Quickly configure and deploy development servers with pre-configured templates and settings."
}, {
  icon: Rocket,
  title: "App Deployment",
  description: "Deploy applications to multiple environments with automated builds and configuration management."
}, {
  icon: Zap,
  title: "Lightning Fast",
  description: "Optimized for speed with minimal overhead and instant command execution."
}, {
  icon: Shield,
  title: "Secure by Design",
  description: "Built with security best practices and safe execution environments for all operations."
}, {
  icon: Code,
  title: "Developer First",
  description: "Designed by developers for developers with extensible APIs and customizable workflows."
}];
const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to streamline your development workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group bg-card border-border hover:border-dc-blue/30 hover:bg-dc-blue/5 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-dc-blue/10 border border-dc-blue/20 rounded-xl mb-4 group-hover:bg-dc-blue/20 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-dc-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;