import React from 'react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#81C3D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Industry Insiders",
      description: "Learn directly from top consultants with years of experience at McKinsey, BCG, and Bain. Access insider knowledge that you won't find in prep books."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#81C3D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Proven Track Record",
      description: "Our candidates consistently receive offers from top consulting firms. We've helped hundreds break into MBB and other prestigious consulting roles."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#81C3D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Personalized Approach",
      description: "We tailor our preparation to your background, learning style, and target firms. No cookie-cutter approaches – just strategies that work for you."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#81C3D7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Time-Efficient Prep",
      description: "Our structured methodology focuses on high-impact preparation techniques. Maximize your results without wasting time on ineffective strategies."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#D9DCD6]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16425B] mb-4">
            The GradNext Advantage
          </h2>
          <p className="text-[#3A7CA5] text-lg max-w-xl mx-auto">
            What sets our consulting preparation apart from other resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mr-5 mt-1 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#2F6690]/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#16425B] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-[#2F6690] text-white font-bold rounded-md hover:bg-[#3A7CA5] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Advantage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;