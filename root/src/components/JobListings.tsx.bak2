import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ExternalLink,
  Users,
  Calendar,
  Mail,
  MessageCircle,
  Copy,
  Check
} from "lucide-react";
import { useCareers } from "@/hooks/useCareers";
import { Job } from "@/lib/careers";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobModal = ({ job, open, onOpenChange }: { job: Job; open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [showApplyDialog, setShowApplyDialog] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const copyEmail = async () => {
    const email = 'll@desktopcommander.app';
    await navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  useEffect(() => {
    if (open) {
      navigate(`/careers?job=${job.id}`, { replace: true });
    } else {
      navigate('/careers', { replace: true });
    }
  }, [open, job.id, navigate]);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{job.title}</DialogTitle>
            <DialogDescription className="flex flex-wrap gap-3 text-sm pt-2">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {job.department}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.type}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(job.postedDate)}
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div>
              <div className="text-muted-foreground space-y-4">
                {job.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <Separator />

            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold mb-3">What you'll do:</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h4 className="font-semibold mb-3">What we're looking for:</h4>
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            {job.niceToHave.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Nice to have:</h4>
                <ul className="space-y-2">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What We Offer */}
            {job.benefits && job.benefits.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">What We Offer:</h4>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bonus Points */}
            {job.bonusPoints && job.bonusPoints.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">Bonus Points:</h4>
                <ul className="space-y-2">
                  {job.bonusPoints.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-muted-foreground/50 rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />
            
            <Button 
              className="w-full" 
              onClick={() => setShowApplyDialog(true)}
            >
              Apply for this Position
              <Mail className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Apply Dialog */}
      <AlertDialog open={showApplyDialog} onOpenChange={setShowApplyDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apply for {job.title}</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4 pt-2">
              <p>
                To apply for this position, please send your resume and a brief cover letter to:
              </p>
              <div className="flex items-center justify-between bg-muted rounded-lg p-4">
                <code className="text-sm font-mono">ll@desktopcommander.app</code>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyEmail}
                  className="ml-2"
                >
                  {emailCopied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowApplyDialog(false)}>
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const JobCard = ({ job, onOpenModal }: { job: Job; onOpenModal: () => void }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Truncate description to approximately 4 lines (about 200 characters)
  const truncateDescription = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onOpenModal}>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {job.title}
            </CardTitle>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {job.department}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {job.type}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(job.postedDate)}
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit">
            {job.department}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3 line-clamp-4">
          {truncateDescription(job.description)}
        </p>
        <Button variant="link" className="p-0 h-auto text-primary">
          Read more →
        </Button>
      </CardContent>
    </Card>
  );
};

const JobListings = () => {
  const { jobs, loading, error, hasJobs } = useCareers();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle URL-based job opening
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const jobId = params.get('job');
    if (jobId && jobs.length > 0) {
      const job = jobs.find(j => j.id === jobId);
      if (job) {
        setSelectedJob(job);
      }
    }
  }, [location.search, jobs]);

  if (loading) {
    return (
      <section id="job-listings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Loading job listings...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="job-listings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-500">Error loading job listings: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="job-listings" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {hasJobs ? 'Join Our Team' : 'Careers'}
            </h1>
            {hasJobs ? (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're building the future of AI-powered development tools. Join us!
              </p>
            ) : (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay tuned for opportunities to join our team.
              </p>
            )}
          </div>

          {/* Job listings or empty state */}
          {hasJobs ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onOpenModal={() => setSelectedJob(job)}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <Card className="bg-muted/20 border-dashed border-2 border-muted-foreground/20">
                <CardContent className="p-12 md:p-16 text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary/60" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                    <p className="text-muted-foreground text-lg mb-8">
                      We're building something amazing. Check back for opportunities to join our team.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">
                      Interested in our mission? We'd love to hear from you!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button variant="outline" asChild>
                        <a 
                          href="mailto:ll@desktopcommander.app" 
                          className="flex items-center gap-2"
                        >
                          <Mail className="h-4 w-4" />
                          Get in Touch
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a 
                          href="https://discord.gg/kQ27sNnZr7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Let's chat on Discord
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal 
          job={selectedJob} 
          open={!!selectedJob} 
          onOpenChange={(open) => {
            if (!open) {
              setSelectedJob(null);
            }
          }}
        />
      )}
    </>
  );
};

export default JobListings;
