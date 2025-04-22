
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import NextButton from '@/components/NextButton';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        section.classList.add('opacity-0', 'translate-y-4');
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header teamName="Team Galaxy" />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 pb-20 pt-10">
        <div 
          ref={(el) => (sectionsRef.current[0] = el)}
          className="transition-all duration-500 delay-100"
        >
          <Badge variant="outline" className="mb-2 text-xs font-normal">
            Contest Information
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Annual Design Challenge 2023
          </h1>
          
          <div className="glass-panel rounded-xl p-8 mb-12">
            <h2 className="text-xl font-medium mb-4">About the Contest</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to the Annual Design Challenge 2023. This prestigious event brings together the most talented designers from around the world to showcase their creativity, innovation, and technical skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This year's theme is "Sustainable Futures" – participants are challenged to create designs that address environmental concerns while maintaining aesthetic excellence and functional integrity.
            </p>
          </div>
        </div>

        <div 
          ref={(el) => (sectionsRef.current[1] = el)}
          className="transition-all duration-500 delay-200"
        >
          <Separator className="my-12" />
          
          <Badge variant="outline" className="mb-2 text-xs font-normal">
            Contest Guidelines
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight mb-8">
            Rules & Regulations
          </h2>
          
          <div className="glass-panel rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                Open to all designers, regardless of experience level. Participants can enter individually or as teams of up to three members.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Submission Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                All entries must be original work created specifically for this competition. Submissions must include a design brief, final designs, and a short explanation of how the design addresses the theme.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Judging Criteria</h3>
              <p className="text-muted-foreground leading-relaxed">
                Entries will be judged on creativity, innovation, technical skill, adherence to the theme, and practical applicability. The judging panel consists of industry professionals and academic experts.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Deadlines</h3>
              <p className="text-muted-foreground leading-relaxed">
                Registration closes on October 15, 2023. Final submissions must be received by November 30, 2023, by 11:59 PM EST.
              </p>
            </div>
          </div>
        </div>
        
        <div 
          ref={(el) => (sectionsRef.current[2] = el)}
          className="mt-12 flex justify-center transition-all duration-500 delay-300"
        >
          <NextButton to="/contest-details" />
        </div>
      </main>
    </div>
  );
};

export default Index;
