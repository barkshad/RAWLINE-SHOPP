
import React, { useState, useRef, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse position from 0 to 1
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to -0.5 to 0.5 range
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Rotation values (max 10 degrees)
    setRotate({
      x: -yPct * 20, // Negative because top needs positive rotateX to tilt back
      y: xPct * 20
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`perspective-1000 ${className}`}
    >
      <div
        className="preserve-3d transition-transform duration-200 ease-out h-full w-full"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        <div className="h-full w-full" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
