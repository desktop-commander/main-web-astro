import { UseCase } from '@/data/library/useCases';
import { PostHogProvider } from '@/components/PostHogProvider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { sessionTypeExplanations } from "@/data/library/useCases";
import { getLink } from '@/utils/basePath';
import { 
  User,
  FolderSearch,
  FolderOpen,
  Code,
  BarChart3,
  Settings,
  FileText,
  Archive,
  Shield,
  Database,
  TestTube,
  Clock,
  RefreshCw,
  ArrowRightLeft,
  Activity,
  Search,
  Rocket,
  Share2,
  Info,
  BadgeCheck,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { EngagementMeter } from '@/components/library/EngagementMeter';
import { UsePromptWizard } from '@/components/library/UsePromptWizard';
import { usePostHog } from '@/components/PostHogProvider';

interface PromptDetailPageProps {
  useCase: UseCase;
}

const iconMap = {
  FolderSearch,
  FolderOrganize: FolderOpen,
  Code,
  BarChart3,
  Settings,
  FileText,
  Archive,
  Shield,
  Database,
  TestTube,
  Clock,
  RefreshCw,
  ArrowRightLeft,
  Activity,
  Search
};

// Helper function to check if a prompt is new (within 14 days)
const isNewPrompt = (dateAdded?: string): boolean => {
  if (!dateAdded) return false;
  
  const addedDate = new Date(dateAdded);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays <= 14;
};

const PromptDetailPage = ({ useCase }: PromptDetailPageProps) => {
  const [hasVoted, setHasVoted] = useState(false);
  const [showSessionTypeExplainer, setShowSessionTypeExplainer] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const { toast } = useToast();
  const [exactUses, setExactUses] = useState(0);
  const posthog = usePostHog();

  useEffect(() => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    const raw = localStorage.getItem(key);
    const value = raw ? Number(raw) : 0;
    setExactUses(Number.isFinite(value) ? value : 0);

    // Track page view
    posthog.capture('prompt_page_viewed', {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      prompt_slug: useCase.slug,
      prompt_categories: useCase.categories,
      prompt_session_type: useCase.sessionType,
      source_page: 'direct_url',
      url_type: 'seo_friendly'
    });
  }, [useCase?.id, posthog]);

  const incrementUses = () => {
    if (!useCase) return;
    const key = `useCase_uses_${useCase.id}`;
    setExactUses((prev) => {
      const next = prev + 1;
      localStorage.setItem(key, String(next));
      return next;
    });
  };

  if (!useCase) return null;

  const IconComponent = iconMap[useCase.icon as keyof typeof iconMap] || Code;
  const showNewBadge = isNewPrompt(useCase.dateAdded);

  const handleUsePrompt = () => {
    setShowWizard(true);
    incrementUses();
  };

  const handleClose = () => {
    window.location.href = getLink('/library/prompts');
  };

  const handleVote = () => {
    if (!hasVoted) {
      posthog.capture('prompt_voted', {
        prompt_id: useCase.id,
        prompt_title: useCase.title,
        prompt_categories: useCase.categories,
        source_page: 'prompt_detail_page'
      });
      setHasVoted(true);
      toast({
        title: "Vote recorded!",
        description: "Thank you for voting on this prompt.",
      });
    }
  };

  const getSessionTypeClass = (sessionType: string) => {
    switch (sessionType) {
      case 'Instant output':
        return 'session-instant-output';
      case 'Step-by-step flow':
        return 'session-step-by-step-flow';
      default:
        return 'session-instant-output';
    }
  };

  const getShareUrl = (shareSource = 'share_button') => {
    const url = new URL(getLink(`/library/prompts/${useCase.slug}`), window.location.origin);
    url.searchParams.set('utm_source', 'desktop_commander');
    url.searchParams.set('utm_medium', shareSource);
    url.searchParams.set('utm_campaign', 'prompt_sharing');
    url.searchParams.set('utm_content', useCase.slug || '');
    url.searchParams.set('shared_at', Date.now().toString());
    return url.toString();
  };

  const handleShare = async () => {
    const isMobile =
      typeof navigator !== 'undefined' &&
      (/(Mobi|Android|iPhone|iPad|iPod)/i.test(navigator.userAgent) ||
        (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches));

    const shareSource = isMobile && navigator.share ? 'native_share' : 'clipboard_copy';
    const shareUrl = getShareUrl(shareSource);
    const title = `Prompt: ${useCase.title}`;

    posthog.capture('share_button_clicked', {
      prompt_id: useCase.id,
      prompt_title: useCase.title,
      share_method: shareSource,
      source_page: 'prompt_detail_page'
    });

    try {
      if (isMobile && navigator.share) {
        await navigator.share({
          title,
          text: 'Check out this Desktop Commander prompt',
          url: shareUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 1500);
      
      toast({
        title: 'Link copied',
        description: 'Share it with your team.',
        action: (
          <ToastAction altText="Open link" onClick={() => window.open(shareUrl, '_blank', 'noopener,noreferrer')}>
            Open
          </ToastAction>
        ),
      });
    } catch {
      toast({
        title: 'Share failed',
        description: 'Could not share or copy the link.',
        variant: 'destructive',
      });
    }
  };

  return (
    <PostHogProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background mt-20">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={handleClose}
              className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
            >
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Library
            </Button>

            {/* Header */}
            <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 bg-dc-surface-elevated rounded-lg flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold mb-3 break-words flex items-start gap-2">
                      {useCase.title}
                      {showNewBadge && (
                        <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20 flex-shrink-0">
                          <Sparkles className="h-3 w-3 mr-1" />
                          New
                        </Badge>
                      )}
                    </h1>
                    <div className="flex items-center gap-3 flex-wrap">
                      {useCase.verified && (
                        <span className="inline-flex items-center gap-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary px-2 py-0.5">
                          <BadgeCheck className="h-3 w-3" />
                          Verified by DC team
                        </span>
                      )}
                      <div className="relative inline-block">
                        <Badge 
                          className={`difficulty-badge ${getSessionTypeClass(useCase.sessionType)} text-xs flex items-center gap-1 cursor-pointer hover:opacity-90 transition-opacity`}
                          onClick={() => setShowSessionTypeExplainer(!showSessionTypeExplainer)}
                        >
                          <span>{useCase.sessionType}</span>
                          <Info className="h-3 w-3" />
                        </Badge>
                        
                        {showSessionTypeExplainer && (
                          <>
                            <div 
                              className="fixed inset-0 z-40"
                              onClick={() => setShowSessionTypeExplainer(false)}
                            />
                            <div className="absolute top-full left-0 mt-2 z-50 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 animate-in fade-in-0 zoom-in-95 duration-200">
                              <div className="flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 flex-shrink-0"></div>
                                <div className="flex-1">
                                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {sessionTypeExplanations[useCase.sessionType as keyof typeof sessionTypeExplanations]}
                                  </p>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowSessionTypeExplainer(false);
                                  }}
                                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                >
                                  ✕
                                </button>
                              </div>
                              <div className="absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 rotate-45"></div>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {useCase.categories.map((category, index) => (
                          <Badge key={index} variant="outline" className="text-xs">{category}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span className="truncate">{useCase.author}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <EngagementMeter count={useCase.votes + (hasVoted ? 1 : 0)} />
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          aria-label={`Exact uses: ${useCase.votes} (all-time)`}
                          className="inline-flex items-center justify-center text-muted-foreground hover:text-foreground"
                        >
                          <Info className="h-4 w-4" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent align="end" side="bottom">
                        Exact uses: {useCase.votes} (all-time)
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-base text-muted-foreground leading-relaxed break-words">{useCase.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Target Roles</h3>
                    <div className="flex flex-wrap gap-2">
                      {useCase.targetRoles.map((role) => (
                        <Badge key={role} variant="secondary" className="role-tag text-xs">
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Complete Prompt</h3>
                    <div className="p-6 bg-dc-surface-elevated rounded-lg border max-h-96 overflow-y-auto">
                      <pre className="text-sm text-foreground whitespace-pre-wrap font-mono leading-relaxed">
                        {useCase.prompt}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* CTA Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={handleShare}
                        aria-label="Share this prompt"
                        className="flex items-center gap-2"
                      >
                        <Share2 className="h-4 w-4" />
                        <span>{copiedLink ? 'Copied' : 'Share'}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy link to share</TooltipContent>
                  </Tooltip>

                  <Button 
                    className="dc-button-primary flex items-center gap-2"
                    onClick={handleUsePrompt}
                  >
                    <Rocket className="h-4 w-4" />
                    <span>Use Prompt</span>
                  </Button>
                </div>
            </div>
          </div>

        <UsePromptWizard
          isOpen={showWizard}
          onClose={() => setShowWizard(false)}
          prompt={useCase.prompt}
          promptTitle={useCase.title}
        />
      </TooltipProvider>
    </PostHogProvider>
  );
};

export default PromptDetailPage;
