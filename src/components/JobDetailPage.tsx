import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ExternalLink,
  Calendar,
  Mail,
  Check
} from 'lucide-react';
import { getLink } from '@/utils/basePath';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  bonusPoints?: string[];
  benefits?: string[];
  applyUrl: string;
  isActive: boolean;
  postedDate: string;
}

interface JobDetailPageProps {
  job: Job;
}

const JobDetailPage = ({ job }: JobDetailPageProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleApply = () => {
    window.location.href = job.applyUrl;
  };

  const handleBack = () => {
    window.location.href = getLink('/careers');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-background border-b">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="mb-6 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Button>

          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{job.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                <Briefcase className="h-3.5 w-3.5" />
                {job.department}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                <MapPin className="h-3.5 w-3.5" />
                {job.location}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                <Clock className="h-3.5 w-3.5" />
                {job.type}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                <Calendar className="h-3.5 w-3.5" />
                Posted {formatDate(job.postedDate)}
              </Badge>
            </div>

            {/* Apply Button in Hero */}
            <Button 
              size="lg"
              className="dc-button-primary flex items-center gap-2"
              onClick={handleApply}
            >
              <Mail className="h-4 w-4" />
              <span>Apply for this Position</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-10">
          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About the Role</h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              {job.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <Separator />

          {/* Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What you'll do:</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What we're looking for:</h2>
            <ul className="space-y-3">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {job.niceToHave && job.niceToHave.length > 0 && (
            <>
              <Separator />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Nice to have:</h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {job.bonusPoints && job.bonusPoints.length > 0 && (
            <>
              <Separator />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Bonus points:</h2>
                <ul className="space-y-3">
                  {job.bonusPoints.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {job.benefits && job.benefits.length > 0 && (
            <>
              <Separator />
              <div>
                <h2 className="text-2xl font-semibold mb-4">What we offer:</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Bottom CTA */}
          <div className="pt-8">
            <div className="bg-muted/30 rounded-lg p-8 text-center space-y-4">
              <h3 className="text-xl font-semibold">Ready to Join Us?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                If you're excited about this opportunity and think you'd be a great fit, we'd love to hear from you.
              </p>
              <Button 
                size="lg"
                className="dc-button-primary flex items-center gap-2 mx-auto"
                onClick={handleApply}
              >
                <Mail className="h-4 w-4" />
                <span>Apply Now</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
