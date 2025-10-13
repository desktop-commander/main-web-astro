import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const faqs = [
    {
      question: "What is Desktop Commander?",
      answer: "Desktop Commander is an MCP (Model Context Protocol) tool that allows Claude Desktop or other MCP clients to access and control your computer's file system and terminal. It enables LLMs to explore, read, and write files, execute commands, and manage processes - expanding their capabilities beyond just conversation to become a comprehensive assistant that can work with your entire operating system."
    },
    {
      question: "How does it differ from coding tools like Cursor or Windsurf?",
      answer: "Unlike tools like Cursor or Windsurf which are primarily designed as coding IDEs, Desktop Commander works with Claude to provide a more flexible, solution-centric approach. It's not confined to a coding box - it can handle coding tasks but also excels at exploring codebases, drawing diagrams, running automation processes, and working with multiple projects simultaneously."
    },
    {
      question: "What is an MCP?",
      answer: "MCP stands for Model Context Protocol. It's a framework that allows AI language models like Claude to interact with external tools and services. MCPs give Claude the ability to perform actions in the real world - in this case, to read and write files, execute terminal commands, and manage processes on your computer."
    },
    {
      question: "How much does it cost to use Desktop Commander?",
      answer: "Desktop Commander itself is free and open-source. However, to use it, you need a Claude Pro subscription, which costs $20/month. There are no additional charges beyond this subscription fee."
    },
    {
      question: "Which operating systems does it support?",
      answer: "Desktop Commander works with Windows, macOS, and Linux, with ongoing improvements for better cross-platform support."
    },
    {
      question: "How does Desktop Commander collect feedback and usage data?",
      answer: "It has three systems: local usage analytics (always active, stays on your machine), anonymous telemetry (can be disabled), and optional feedback system (user controlled)."
    },
    {
      question: "Is it safe to give Claude access to my file system?",
      answer: "Claude operates within safety boundaries - it typically only works with files you direct it to, can only perform actions your user account has permission for, and no data is sent to external servers beyond Claude conversations."
    },
    {
      question: "I'm having trouble installing or using the tool. Where can I get help?",
      answer: "Join our Discord server for community support, check the GitHub issues for known problems, or review our comprehensive FAQ for troubleshooting tips. If you encounter a new issue, please consider opening a GitHub issue with details about your problem."
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about Desktop Commander.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`bg-background border rounded-lg px-6 py-2 transition-all duration-700 hover:shadow-lg hover:scale-[1.01] transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${500 + index * 100}ms` : '0ms'
                }}
              >
                <AccordionTrigger className="text-left hover:no-underline transition-colors duration-300 hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Link to comprehensive FAQ */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-background border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] transform">
              <h3 className="text-lg font-semibold mb-2">Need More Details?</h3>
              <p className="text-muted-foreground mb-4">
                View our comprehensive FAQ document on GitHub for more detailed answers and troubleshooting guides.
              </p>
              <a 
                href="https://github.com/wonderwhy-er/DesktopCommanderMCP/blob/main/FAQ.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-all duration-300 hover:scale-105 group"
              >
                Complete FAQ on GitHub
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;