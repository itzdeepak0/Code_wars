
import React from 'react';
import { cn } from "@/lib/utils";

interface HeaderProps {
  teamName: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ teamName, className }) => {
  return (
    <header className={cn(
      "w-full py-6 px-8 flex items-center animate-fade-in",
      className
    )}>
      <h3 className="text-lg font-medium tracking-tight">
        <span className="text-primary">{teamName}</span>
      </h3>
    </header>
  );
};

export default Header;
