import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Users, Zap, Target, Globe } from "lucide-react";

const CompanyCulture = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and developer tools",
      color: "text-blue-500"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "We build robust, scalable solutions that developers love to use",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Collaborative Growth",
      description: "We learn from each other and grow together as a team",
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Move Fast",
      description: "We iterate quickly and ship features that make a real impact",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
            <Globe className="h-3 w-3 mr-1" />
            Our Culture
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building the Future of
            <span className="block text-primary">Developer-AI Collaboration</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desktop Commander is pioneering the Model Context Protocol (MCP) to seamlessly 
            connect file systems with Large Language Models. Join us in revolutionizing 
            how developers work with AI.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To eliminate the friction between developers and AI by creating intelligent, 
                context-aware tools that understand your entire codebase and workflow.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className={`${value.color} bg-background rounded-lg p-3 shadow-sm group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team environment highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 text-sm text-primary font-medium">
            <Users className="h-4 w-4" />
            Small team, big impact • Remote-friendly • Learning culture
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
