
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface NextButtonProps {
  to: string;
  className?: string;
}

const NextButton: React.FC<NextButtonProps> = ({ to, className }) => {
  return (
    <Link to={to}>
      <Button 
        className={cn(
          "group px-8 py-6 h-auto rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
          className
        )}
      >
        <span className="mr-2">Next</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </Link>
  );
};

export default NextButton;
