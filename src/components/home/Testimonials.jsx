import React, { useState, useEffect, useRef } from 'react';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      }`}
    >
      {/* Quote icon */}
      <div className="flex justify-end mb-4">
        <svg className="w-10 h-10 text-[#81C3D7]/30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Testimonial content */}
      <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
      
      {/* Client info */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-[#D9DCD6] mr-4 overflow-hidden">
          {/* In a real app, you would use the actual image */}
          {/* <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" /> */}
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[#3A7CA5]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        <div>
          <div className="font-bold text-[#16425B]">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
          <div className="mt-1 flex items-center">
            <span className="text-xs font-medium text-[#3A7CA5]">{testimonial.company}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-xs text-gray-500">{testimonial.result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Alex Thompson',
      role: 'Management Consultant',
      company: 'McKinsey & Company',
      result: 'Received offer in 2024',
      quote: 'Kashish and the GradNext team transformed my consulting interview preparation. Their personalized approach and insider knowledge were instrumental in helping me secure a position at McKinsey. The 1:1 coaching was worth every penny!'
    },
    {
      id: 2,
      name: 'Samantha Liu',
      role: 'Associate Consultant',
      company: 'Bain & Company',
      result: 'Received offer in 2024',
      quote: "After struggling with case interviews for months, I joined GradNext's cohort program. The structured approach and weekly practice sessions dramatically improved my performance. I went from rejection to multiple offers!"
    },
    {
      id: 3,
      name: 'Rajiv Mehta',
      role: 'Strategy Consultant',
      company: 'BCG',
      result: 'Received offer in 2023',
      quote: "The expertise of GradNext's consultants is unmatched. They provided actionable feedback on my case approach and helped me craft a compelling personal story. I'm now living my dream of working at BCG thanks to their guidance."
    },
    {
      id: 4,
      name: 'Emma Williams',
      role: 'Consultant',
      company: 'Accenture Strategy',
      result: 'Received offer in 2024',
      quote: 'As a career switcher, I thought breaking into consulting would be nearly impossible. GradNext helped me leverage my unique background and develop the necessary skills. Their resume overhaul and specialized prep were game-changers!'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-[#D9DCD6]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16425B] mb-4">
            Success Stories
          </h2>
          <p className="text-[#3A7CA5] text-lg max-w-xl mx-auto">
            Hear from candidates who transformed their consulting careers with GradNext
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel container */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex">
              {/* Desktop view: show 2 testimonials side by side */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                {[0, 1].map((offset) => {
                  const index = (activeIndex + offset) % testimonials.length;
                  return (
                    <TestimonialCard 
                      key={testimonials[index].id}
                      testimonial={testimonials[index]}
                      isActive={offset === 0}
                    />
                  );
                })}
              </div>
              
              {/* Mobile view: show only one testimonial */}
              <div className="md:hidden w-full">
                <TestimonialCard 
                  testimonial={testimonials[activeIndex]}
                  isActive={true}
                />
              </div>
            </div>
          </div>

          {/* Carousel navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#16425B] z-10 hover:bg-[#2F6690] hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#16425B] z-10 hover:bg-[#2F6690] hover:text-white transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#2F6690] w-8' 
                    : 'bg-[#3A7CA5]/30 hover:bg-[#3A7CA5]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Call-to-Action */}
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#2F6690] font-semibold hover:text-[#3A7CA5] transition-colors">
            Read More Success Stories
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;