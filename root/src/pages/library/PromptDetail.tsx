import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { findUseCaseBySlug, UseCase } from '@/data/library/useCases';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PromptDetailModal } from '@/components/library/PromptDetailModal';
import { usePostHog } from '@/components/PostHogProvider';
import { DynamicMetaTags } from '@/components/library/DynamicMetaTags';

const PromptDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const posthog = usePostHog();
  const [useCase, setUseCase] = useState<UseCase | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    const foundUseCase = findUseCaseBySlug(slug);
    setUseCase(foundUseCase || null);
    setIsLoading(false);

    // Track page view for individual prompt
    if (foundUseCase) {
      posthog.capture('prompt_page_viewed', {
        prompt_id: foundUseCase.id,
        prompt_title: foundUseCase.title,
        prompt_slug: foundUseCase.slug,
        prompt_categories: foundUseCase.categories,
        prompt_session_type: foundUseCase.sessionType,
        source_page: 'direct_url',
        url_type: 'seo_friendly'
      });
    }
  }, [slug, posthog]);

  const handleClose = () => {
    navigate('/library');
  };

  const handleVote = (id: string) => {
    // Track vote
    posthog.capture('prompt_voted', {
      prompt_id: id,
      prompt_title: useCase?.title,
      prompt_categories: useCase?.categories,
      source_page: 'prompt_detail_page'
    });
  };

  // Handle loading state
  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading prompt...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Handle 404 case
  if (!useCase) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Render modal content as a page for now */}
            <PromptDetailModal
              useCase={useCase}
              isOpen={true}
              onClose={handleClose}
              onVote={handleVote}
            />
          </div>
        </div>
      </div>
      <Footer />
      
      <DynamicMetaTags 
        useCase={useCase} 
        isPromptPage={true} 
      />
    </>
  );
};

export default PromptDetail;