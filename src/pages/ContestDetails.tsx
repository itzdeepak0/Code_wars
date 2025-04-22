
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ContestDetails = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header teamName="Team Galaxy" />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 pb-20 pt-10" ref={contentRef}>
        <Badge variant="outline" className="mb-2 text-xs font-normal">
          Contest Details
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
          Prize & Benefits
        </h1>
        
        <div className="glass-panel rounded-xl p-8 mb-12">
          <h2 className="text-xl font-medium mb-6">What You Can Win</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="font-semibold">1st</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">First Prize</h3>
                <p className="text-muted-foreground">$10,000 cash award, industry recognition, and an opportunity to showcase your work at the International Design Expo.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="font-semibold">2nd</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Second Prize</h3>
                <p className="text-muted-foreground">$5,000 cash award and a feature in Design Quarterly magazine.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="font-semibold">3rd</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Third Prize</h3>
                <p className="text-muted-foreground">$2,500 cash award and industry recognition.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/">
            <Button 
              variant="outline"
              className="group px-8 py-6 h-auto rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="mr-2">Back to Information</span>
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ContestDetails;
