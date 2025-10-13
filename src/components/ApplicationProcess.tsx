import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Send, 
  MessageCircle, 
  CheckCircle, 
  Mail,
  Clock,
  ArrowRight
} from "lucide-react";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: Send,
      title: "Apply",
      description: "Submit your application through our form with your resume and cover letter",
      duration: "5 minutes"
    },
    {
      icon: MessageCircle,
      title: "Initial Chat",
      description: "Brief call with our team to discuss your background and interests",
      duration: "30 minutes"
    },
    {
      icon: CheckCircle,
      title: "Final Decision",
      description: "We'll get back to you within a week with our decision",
      duration: "1 week"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-3 py-1">
            <Clock className="h-3 w-3 mr-1" />
            Application Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple & Transparent
            <span className="block text-primary">Hiring Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in keeping things straightforward. Here's what to expect 
            when you apply to join our team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                )}
                
                <Card className="relative z-10 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {step.duration}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Don't see a role that fits? Have questions about our hiring process? 
                We'd love to hear from you anyway.
              </p>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
