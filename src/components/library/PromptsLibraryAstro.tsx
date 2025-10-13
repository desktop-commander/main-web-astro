import { useState, useMemo, useEffect } from 'react';
import { useCasesWithSlugs as initialUseCases, UseCase } from '@/data/library/useCases';
import { PromptCard } from '@/components/library/PromptCard';
import { FilterControls } from '@/components/library/FilterControls';
import { SubmitPromptButton } from '@/components/library/SubmitPromptButton';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { PromptDetailModal } from '@/components/library/PromptDetailModal';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getLink } from '@/utils/basePath';

interface PromptsLibraryProps {
  initialPromptId?: string | null;
}

export default function PromptsLibrary({ initialPromptId }: PromptsLibraryProps) {
  // Get initial role filter from URL parameter
  const initialRoleFilter = useMemo(() => {
    if (typeof window === 'undefined') return [];
    const params = new URLSearchParams(window.location.search);
    const roleParam = params.get('role');
    return roleParam ? [roleParam] : [];
  }, []);
  
  const [useCases, setUseCases] = useState<UseCase[]>(initialUseCases);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>(initialRoleFilter);
  const [selectedSessionTypes, setSelectedSessionTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');
  
  // Featured prompts - shown first when no filters are applied
  const featuredPromptIds = ['8', '59', '2', '55', '53', '82', '78', '4', '43'];
  
  const initialSelected = useMemo(() => {
    if (!initialPromptId) return null;
    return initialUseCases.find((u) => u.id === initialPromptId) || null;
  }, [initialPromptId]);
  
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(initialSelected);
  const [isModalOpen, setIsModalOpen] = useState(!!initialSelected);
  
  // Ensure modal opens after hydration if we have an initial prompt
  useEffect(() => {
    if (initialPromptId && initialSelected && !isModalOpen) {
      setSelectedUseCase(initialSelected);
      setIsModalOpen(true);
    }
  }, [initialPromptId, initialSelected, isModalOpen]);

  // Filter and sort use cases
  const filteredAndSortedUseCases = useMemo(() => {
    let filtered = useCases;

    // Apply search filter
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (uc) =>
          uc.title.toLowerCase().includes(lowerSearch) ||
          uc.description.toLowerCase().includes(lowerSearch) ||
          uc.prompt.toLowerCase().includes(lowerSearch) ||
          uc.categories.some((cat) => cat.toLowerCase().includes(lowerSearch)) ||
          uc.targetRoles.some((role) => role.toLowerCase().includes(lowerSearch))
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((uc) =>
        selectedCategories.some((cat) => uc.categories.includes(cat))
      );
    }

    // Apply role filter
    if (selectedRoles.length > 0) {
      filtered = filtered.filter((uc) =>
        selectedRoles.some((role) => uc.targetRoles.includes(role))
      );
    }

    // Apply session type filter
    if (selectedSessionTypes.length > 0) {
      filtered = filtered.filter((uc) =>
        selectedSessionTypes.includes(uc.sessionType)
      );
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'popularity':
        sorted.sort((a, b) => (b.gaClicks || 0) - (a.gaClicks || 0));
        break;
      case 'newest':
        sorted.sort((a, b) => {
          const dateA = new Date(a.dateAdded || '1970-01-01').getTime();
          const dateB = new Date(b.dateAdded || '1970-01-01').getTime();
          return dateB - dateA;
        });
        break;
      case 'alphabetical':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    // If no filters applied, show featured prompts first
    if (!searchTerm && selectedCategories.length === 0 && 
        selectedRoles.length === 0 && selectedSessionTypes.length === 0) {
      const featured = sorted.filter(uc => featuredPromptIds.includes(uc.id));
      const rest = sorted.filter(uc => !featuredPromptIds.includes(uc.id));
      return [...featured, ...rest];
    }

    return sorted;
  }, [useCases, searchTerm, selectedCategories, selectedRoles, selectedSessionTypes, sortBy]);

  const handlePromptClick = (useCase: UseCase) => {
    // Navigate to slug URL - causes page navigation and modal opens
    const slug = useCase.slug || useCase.id;
    window.location.href = getLink(`/library/prompts/${slug}`);
  };

  const handleVote = (id: string) => {
    // Vote handling
    console.log('Vote for prompt:', id);
  };

  return (
    <TooltipProvider>
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Prompt Library</h1>
              <p className="text-muted-foreground">
                Discover {useCases.length}+ curated prompts for Desktop Commander
              </p>
            </div>
            <div className="flex gap-3">
              <SubmitPromptButton />
              <Button variant="outline" asChild>
                <a 
                  href="https://docs.desktopcommander.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Documentation
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <FilterControls
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategories={selectedCategories}
            onCategoriesChange={setSelectedCategories}
            selectedRoles={selectedRoles}
            onRolesChange={setSelectedRoles}
            selectedSessionTypes={selectedSessionTypes}
            onSessionTypesChange={setSelectedSessionTypes}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredAndSortedUseCases.length}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedUseCases.map((useCase) => (
            <PromptCard
              key={useCase.id}
              useCase={useCase}
              onOpen={handlePromptClick}
              onVote={handleVote}
            />
          ))}
        </div>

        {filteredAndSortedUseCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No prompts found matching your filters.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategories([]);
                setSelectedRoles([]);
                setSelectedSessionTypes([]);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <PromptDetailModal
        useCase={selectedUseCase}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onVote={handleVote}
      />
    </TooltipProvider>
  );
}
