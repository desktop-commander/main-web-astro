import { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCasesWithSlugs as useCases } from '@/data/library/useCases';
import { CategoryFilter } from '@/components/library/CategoryFilter';
import { Zap, Sparkles } from 'lucide-react';
import TestimonialsRow from '@/components/library/TestimonialsRow';
import { SubmitPromptButton } from '@/components/library/SubmitPromptButton';
import { EngagementMeter } from '@/components/library/EngagementMeter';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getLink } from '@/utils/basePath';

// Helper function to check if a prompt is new (within 14 days)
const isNewPrompt = (dateAdded?: string): boolean => {
  if (!dateAdded) return false;
  const addedDate = new Date(dateAdded);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 14;
};

const LibraryIndex = () => {
  const [selectedRole, setSelectedRole] = useState('For all');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Default featured prompts: specific curated list
  const defaultFeaturedUseCases = useMemo(() => {
    const featuredTitles = [
      'Organise my Downloads folder',
      'Explain Codebase or Repository',
      'Set up Google Analytics and analyze traffic',
      'Build A Feature from Scratch',
      'Set Up WordPress Environment',
      'Set Up Cloud Infrastructure',
      'Build and Deploy Landing Page',
      'Generate Docker Configuration',
      'Set Up Local Development Environment'
    ];
    
    const featured = [];
    for (const title of featuredTitles) {
      const useCase = useCases.find(uc => 
        uc.title.trim() === title || 
        uc.title.trim() === title.trim() ||
        uc.title.replace(/\s+/g, ' ').trim() === title.trim()
      );
      if (useCase) {
        featured.push(useCase);
      }
    }
    
    return featured;
  }, []);

  // Featured categories for homepage
  const featuredCategories = [
    'All Categories', 
    'Explore codebase', 
    'Deploy', 
    'Write documentation', 
    'Automate tasks', 
    'Optimize workflow'
  ];

  // Get available target roles
  const availableRoles = useMemo(() => {
    const roles = new Set<string>();
    useCases.forEach(uc => {
      uc.targetRoles.forEach(role => roles.add(role));
    });
    return ['For all', ...Array.from(roles).sort()];
  }, []);

  // Filter prompts by selected role and category
  const displayedUseCases = useMemo(() => {
    let filtered = useCases;
    
    // Filter by role first
    if (selectedRole !== 'For all') {
      filtered = filtered.filter(uc => uc.targetRoles.includes(selectedRole));
    }
    
    // Then filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(uc => uc.categories && uc.categories.includes(selectedCategory));
    }
    
    // If both filters are default, show curated featured prompts
    if (selectedRole === 'For all' && selectedCategory === 'All Categories') {
      return defaultFeaturedUseCases;
    }
    
    // Otherwise sort by usage and limit to 9
    return filtered
      .sort((a, b) => (b.gaClicks || 0) - (a.gaClicks || 0))
      .slice(0, 9);
  }, [selectedRole, selectedCategory, defaultFeaturedUseCases]);

  // Set fire emoji for specific featured prompts
  const hotIds = useMemo(() => {
    const set = new Set<string>();
    if (selectedRole === 'For all' && selectedCategory === 'All Categories') {
      [0, 2, 3, 4].forEach(i => {
        if (defaultFeaturedUseCases[i]) {
          set.add(defaultFeaturedUseCases[i].id);
        }
      });
    }
    return set;
  }, [selectedRole, selectedCategory, defaultFeaturedUseCases]);

  const handleUseCaseClick = (useCase: any) => {
    // Navigate to slug URL - this will cause page load and modal to open
    window.location.href = getLink(`/library/prompts/${useCase.slug}`);
  };

  const getSessionTypeDisplay = (sessionType: string) => {
    switch (sessionType) {
      case 'Instant output':
        return { text: 'Instant', icon: Zap };
      case 'Step-by-step flow':
        return { text: 'Step-by-Step', icon: null };
      default:
        return { text: sessionType, icon: null };
    }
  };

  return (
    <TooltipProvider>
    <div className="min-h-screen bg-background mt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Prompt Library
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover powerful AI workflows and automation prompts for Desktop Commander
            </p>
            
            {/* Primary Filter: Category buttons */}
            <CategoryFilter 
              categories={featuredCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            
            {/* Secondary Filter: Role links */}
            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {availableRoles.map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`
                      text-sm transition-colors duration-200 hover:text-foreground
                      ${selectedRole === role 
                        ? "text-foreground font-medium underline underline-offset-2" 
                        : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Prompts Grid */}
      <div className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {displayedUseCases.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {displayedUseCases.map((useCase) => {
                  const sessionDisplay = getSessionTypeDisplay(useCase.sessionType);
                  const SessionIcon = sessionDisplay.icon;
                  
                  return (
                    <Card 
                      key={useCase.id} 
                      className={`dc-card cursor-pointer hover:shadow-lg transition-shadow relative group focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        hotIds.has(useCase.id) ? 'border-2 border-primary' : ''
                      } after:content-['↗'] after:absolute after:bottom-3 after:right-3 after:text-xs after:text-muted-foreground/70 after:pointer-events-none after:transition-transform after:transition-colors after:duration-200 hover:after:text-primary hover:after:translate-x-0.5 hover:after:-translate-y-0.5`}
                      onClick={() => handleUseCaseClick(useCase)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleUseCaseClick(useCase);
                        }
                      }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base leading-snug mb-2 min-h-[2.5rem] flex items-start">
                              {useCase.title}
                              {isNewPrompt(useCase.dateAdded) && (
                                <Badge 
                                  variant="outline" 
                                  className="ml-2 text-[10px] px-1.5 py-0 bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 flex-shrink-0"
                                >
                                  New
                                </Badge>
                              )}
                            </CardTitle>
                          </div>
                          {hotIds.has(useCase.id) && (
                            <span className="text-lg flex-shrink-0">🔥</span>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                          {useCase.description}
                        </p>
                        
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            {SessionIcon && <SessionIcon className="h-3.5 w-3.5 text-primary" />}
                            <span className="text-xs text-muted-foreground">{sessionDisplay.text}</span>
                          </div>
                          <EngagementMeter 
                            useCaseId={useCase.id} 
                            gaClicks={useCase.gaClicks || 0}
                            compact
                          />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* Browse All Prompts & Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <a 
                  href="/library/prompts"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8"
                >
                  Browse All Prompts
                </a>
                <SubmitPromptButton />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Testimonials */}
      <div className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Explore our complete library of 50+ prompts
          </h2>
          <TestimonialsRow />
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};

export default LibraryIndex;
