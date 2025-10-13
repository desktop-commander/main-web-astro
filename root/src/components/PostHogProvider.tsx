import { createContext, useContext, ReactNode } from 'react';
import { posthog } from '@/lib/analytics/posthog';

const PostHogContext = createContext(posthog);

interface PostHogProviderProps {
  children: ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  return (
    <PostHogContext.Provider value={posthog}>
      {children}
    </PostHogContext.Provider>
  );
}

export const usePostHog = () => {
  return useContext(PostHogContext);
};

export default posthog;
