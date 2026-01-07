
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <div 
    className={`font-black mono uppercase tracking-[0.5em] ${className}`}
    aria-label="RAWLINE"
  >
    RAWLINE
  </div>
);
