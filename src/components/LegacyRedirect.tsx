import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { idToSlugMap } from '@/data/library/useCases';

/**
 * Component to handle redirects from old URL format (/library?i=123) 
 * to new SEO-friendly format (/library/prompts/slug)
 */
const LegacyRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const promptId = searchParams.get('i');
    
    if (promptId && idToSlugMap[promptId]) {
      const slug = idToSlugMap[promptId];
      
      // Preserve UTM parameters when redirecting
      const newUrl = new URL(`/library/prompts/${slug}`, window.location.origin);
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'shared_at'];
      
      utmParams.forEach(param => {
        const value = searchParams.get(param);
        if (value) {
          newUrl.searchParams.set(param, value);
        }
      });
      
      // Redirect to new URL structure with preserved UTM parameters
      window.location.replace(newUrl.toString());
    }
  }, [searchParams, navigate]);

  // Return null as this is just a redirect handler
  return null;
};

export default LegacyRedirect;