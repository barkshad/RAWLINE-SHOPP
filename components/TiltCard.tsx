
import React, { useState, useRef, useCallback, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [sheen, setSheen] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouch) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotate({
      x: -yPct * 10, 
      y: xPct * 10
    });

    setSheen({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100
    });
  }, [isTouch]);

  const onMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative h-full w-full ${!isTouch ? 'perspective-1000' : ''} ${className}`}
      style={{ perspective: isTouch ? 'none' : '1500px' }}
    >
      <div
        className="transition-transform duration-700 ease-out h-full w-full will-change-transform relative overflow-hidden rounded-sm"
        style={{
          transform: isTouch 
            ? 'none' 
            : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Dynamic Glass Sheen */}
        {!isTouch && (
          <div 
            className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              background: `radial-gradient(circle at ${sheen.x}% ${sheen.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
              mixBlendMode: 'soft-light'
            }}
          />
        )}
        
        <div className="h-full w-full" style={{ transform: isTouch ? 'none' : 'translateZ(40px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
