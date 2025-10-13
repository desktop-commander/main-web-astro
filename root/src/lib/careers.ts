export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits?: string[];
  bonusPoints?: string[];
  applyUrl: string;
  isActive: boolean;
  postedDate: string;
}

export interface JobsData {
  jobs: Job[];
}
