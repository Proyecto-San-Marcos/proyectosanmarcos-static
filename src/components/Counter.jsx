import { useState, useEffect } from 'react';

const Counter = ({ target, textLeft = '', textRight = '', className, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const currentElement = document.getElementById(`counter-${target}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [target]);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    if (isVisible) {
      const startAnimation = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRate = Math.min(progress / duration, 1);
        
        setCount(Math.floor(progressRate * target));
        
        if (progressRate < 1) {
          animationFrame = requestAnimationFrame(startAnimation);
        }
      };
      
      animationFrame = requestAnimationFrame(startAnimation);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration]);
  
  return (
    <div id={`counter-${target}`} className={className}>
      {textLeft}{count}{textRight}
    </div>
  );
};

export default Counter;