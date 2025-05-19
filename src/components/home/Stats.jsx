import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = Date.now();
          const endValue = end;
          
          const updateCount = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother animation
            const easeOutQuad = progress => 1 - (1 - progress) * (1 - progress);
            const currentValue = Math.floor(easeOutQuad(progress) * endValue);
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
          
          // Once animation starts, disconnect observer
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration]);

  return (
    <div ref={countRef} className="font-bold text-4xl md:text-5xl text-[#16425B]">
      {prefix}{count}{suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { id: 1, value: 1500, label: 'Sessions Conducted', suffix: '+' },
    { id: 2, value: 4.9, label: 'Client Rating', suffix: '+' },
    { id: 3, value: 30, label: 'MBB Mentors', suffix: '+' },
    { id: 4, value: 13, label: 'Countries Served', suffix: '+' }
  ];

  return (
    <section className="py-16 bg-[#D9DCD6]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-[#3A7CA5] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;