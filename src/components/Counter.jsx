import { useEffect, useRef, useState } from 'react';

const Counter = ({ target, className, textLeft }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let current = 0;

        const duration = 2000; // duración total en ms
        const steps = Math.min(target, 100); // máximo 100 pasos para suavidad
        const stepTime = duration / steps;
        const stepValue = target / steps;

        const interval = setInterval(() => {
          current += stepValue;
          if (current >= target) {
            clearInterval(interval);
            setCount(target);
          } else {
            setCount(Math.round(current));
          }
        }, stepTime);
      }
    }, { threshold: 0.5 });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={className}>
      {count}{textLeft}
    </div>
  );
};

export default Counter;
