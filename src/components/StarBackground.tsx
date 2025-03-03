import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
}

const StarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create stars
    const starCount = Math.floor((containerWidth * containerHeight) / 10000); // Adjust density
    const stars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 1; // Random size between 1-3px
      
      const starData: Star = {
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size,
        speed: Math.random() * 0.5 + 0.1, // Random speed
      };
      
      stars.push(starData);
      
      star.className = 'star';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${starData.x}px`;
      star.style.top = `${starData.y}px`;
      star.style.animationDelay = `${Math.random() * 4}s`; // Random delay for twinkling
      
      container.appendChild(star);
    }
    
    // Animate stars
    let animationFrameId: number;
    
    const animateStars = () => {
      const starElements = container.querySelectorAll('.star');
      
      stars.forEach((star, index) => {
        star.y += star.speed;
        
        // Reset star position when it goes off screen
        if (star.y > containerHeight) {
          star.y = 0;
          star.x = Math.random() * containerWidth;
        }
        
        const starElement = starElements[index] as HTMLElement;
        if (starElement) {
          // starElement.style.top = `${star.y}px`;
          // starElement.style.left = `${star.x}px`;
          starElement.style.transform = `translate(${star.x}px, ${star.y}px)`;
        }
      });
      
      animationFrameId = requestAnimationFrame(animateStars);
    };
    
    animateStars();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default StarBackground;