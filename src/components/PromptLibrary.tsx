import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Search, FileText, Server, FolderOpen, Zap, Database, GitCompare, Trash2, BookOpen, Code2, Cloud, Image, BarChart3 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useAnalyticsAstro } from "@/hooks/useAnalyticsAstro";

const promptCategories = [
  {
    title: "Explore codebase",
    icon: Search,
    prompts: [
      {
        icon: Code2,
        title: "Explain Codebase or Repository",
        description: "Understand and analyze your codebase structure",
        url: "/library?i=59"
      },
      {
        icon: GitCompare,
        title: "Compare Config Files to Baseline",
        description: "Compare configuration files against standards",
        url: "/library?i=34"
      },
      {
        icon: Trash2,
        title: "Clean Up Unused Code",
        description: "Remove dead code and optimize your project",
        url: "/library?i=5"
      }
    ]
  },
  {
    title: "Write documentation",
    icon: BookOpen,
    prompts: [
      {
        icon: FileText,
        title: "Create Project Documentation",
        description: "Generate comprehensive project documentation",
        url: "/library?i=60"
      },
      {
        icon: Database,
        title: "Create Database Schema Diagram",
        description: "Visualize your database structure and relationships",
        url: "/library?i=67"
      },
      {
        icon: Server,
        title: "Document Ansible Configuration",
        description: "Create clear documentation for your Ansible setup",
        url: "/library?i=70"
      }
    ]
  },
  {
    title: "Deploy",
    icon: Cloud,
    prompts: [
      {
        icon: Cloud,
        title: "Set Up Cloud Infrastructure",
        description: "Deploy scalable cloud infrastructure from scratch",
        url: "/library?i=53"
      },
      {
        icon: Server,
        title: "Set Up WordPress Environment",
        description: "Configure complete WordPress development environment",
        url: "/library?i=55"
      },
      {
        icon: Code2,
        title: "Build and Deploy Landing Page",
        description: "Create and deploy a professional landing page",
        url: "/library?i=82"
      }
    ]
  },
  {
    title: "Automate tasks",
    icon: Zap,
    prompts: [
      {
        icon: FolderOpen,
        title: "Organise my Downloads folder",
        description: "Sort messy downloads into organized folders",
        url: "/library?i=8"
      },
      {
        icon: FileText,
        title: "Extract Data from PDFs",
        description: "Pull structured data from PDF documents",
        url: "/library?i=43"
      },
      {
        icon: Image,
        title: "Convert HEIC to PNG",
        description: "Batch convert image formats efficiently",
        url: "/library?i=38"
      }
    ]
  },
  {
    title: "Optimize workflow",
    icon: BarChart3,
    prompts: [
      {
        icon: BookOpen,
        title: "Create Knowledge Base Folder",
        description: "Organize information into searchable knowledge base",
        url: "/library?i=17"
      },
      {
        icon: Database,
        title: "Consolidate Data Files into One",
        description: "Merge multiple data sources into unified format",
        url: "/library?i=46"
      },
      {
        icon: BarChart3,
        title: "Automate Competitor Research",
        description: "Set up automated competitive analysis workflows",
        url: "/library?i=11"
      }
    ]
  }
];

const PromptLibrary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("explore-codebase");
  const sectionRef = useRef<HTMLElement>(null);
  
  // Analytics hook
  const { trackCustomEvent } = useAnalyticsAstro();

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
    <section ref={sectionRef} id="prompts" className="py-12 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header - Animated entrance */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore Prompt Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            60+ prompts organized by workflow - from codebase exploration to task automation
          </p>
        </div>

        {/* Tabs Interface - Animated entrance */}
        <div className={`max-w-4xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Tabs defaultValue="explore-codebase" className="w-full" onValueChange={(value) => {
            setActiveTab(value);
            // Track category exploration
            const category = promptCategories.find(cat => 
              cat.title.toLowerCase().replace(/\s+/g, '-') === value
            );
            if (category) {
              trackCustomEvent('prompt_category_clicked', {
                button_text: category.title,
                button_location: 'prompt_library',
                category_name: category.title,
                category_tab: value,
                total_prompts_in_category: category.prompts.length
              });
            }
          }}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {promptCategories.map((category, index) => {
                const CategoryIcon = category.icon;
                const value = category.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <TabsTrigger 
                    key={index} 
                    value={value}
                    className="flex items-center gap-2 text-xs sm:text-sm transition-all duration-300 hover:scale-105 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <CategoryIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {promptCategories.map((category, index) => {
              const value = category.title.toLowerCase().replace(/\s+/g, '-');
              const isActiveTabContent = activeTab === value;
              return (
                <TabsContent key={index} value={value} className="space-y-4">
                  {category.prompts.map((prompt, promptIndex) => {
                    const PromptIcon = prompt.icon;
                    return (
                      <a
                        key={promptIndex}
                        href={prompt.url}
                        onClick={() => {
                          // Track individual prompt clicks
                          trackCustomEvent('prompt_clicked', {
                            button_text: prompt.title,
                            button_location: 'prompt_library',
                            category_name: category.title,
                            prompt_title: prompt.title,
                            prompt_description: prompt.description,
                            prompt_url: prompt.url,
                            prompt_position: promptIndex + 1,
                            total_prompts_in_category: category.prompts.length
                          });
                        }}
                        className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-accent/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-lg transform ${
                          isVisible && isActiveTabContent
                            ? `opacity-100 translate-y-0 delay-${600 + promptIndex * 100}`
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{
                          transitionDelay: isVisible && isActiveTabContent ? `${600 + promptIndex * 100}ms` : '0ms'
                        }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <PromptIcon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {prompt.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1 transition-colors duration-300 group-hover:text-foreground">
                            {prompt.description}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-2" />
                      </a>
                    );
                  })}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        {/* CTA - Enhanced animations */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button asChild variant="hero" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transform active:scale-95">
            <a 
              href="/library"
              onClick={() => {
                // Track main library CTA
                trackCustomEvent('prompt_library_cta_clicked', {
                  button_text: 'Browse All Prompts',
                  button_location: 'prompt_library',
                  link_type: 'external',
                  destination: 'prompt_library_main',
                  current_active_tab: activeTab
                });
              }}
              className="inline-flex items-center gap-2"
            >
              Browse All Prompts
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4 transition-colors duration-300 hover:text-foreground">
            60+ workflows across development, automation, and optimization
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromptLibrary;