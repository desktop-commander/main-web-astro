import { useState, useEffect } from 'react';
import { Job } from '@/lib/careers';
import jobsData from '@/data/jobs.json';

export const useCareers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Filter only active jobs
      const activeJobs = jobsData.jobs.filter(job => job.isActive);
      setJobs(activeJobs);
    } catch (err) {
      setError('Failed to load job listings');
      console.error('Error loading jobs:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    jobs,
    loading,
    error,
    hasJobs: jobs.length > 0
  };
};
