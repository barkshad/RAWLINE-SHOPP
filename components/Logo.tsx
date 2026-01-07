
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 40" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* R */}
    <path d="M20,35 V5 H35 C45,5 45,15 35,15 H20" />
    <path d="M32,15 L45,35" />
    {/* L */}
    <path d="M55,5 V35 H80" />
  </svg>
);
