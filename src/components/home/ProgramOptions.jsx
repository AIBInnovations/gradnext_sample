import React from 'react';

const ProgramCard = ({ icon, title, description, features, cta }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-[#2F6690] h-2"></div>
      <div className="p-6">
        <div className="w-14 h-14 rounded-lg bg-[#81C3D7]/20 flex items-center justify-center mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#16425B] mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <svg className="w-5 h-5 text-[#3A7CA5] mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full py-3 rounded-md bg-[#2F6690] text-white font-medium hover:bg-[#3A7CA5] transition-colors duration-200">
          {cta}
        </button>
      </div>
    </div>
  );
};

const ProgramOptions = () => {
  const programs = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#3A7CA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "1:1 Mentorship",
      description: "Personalized coaching from consultants at McKinsey, BCG, and Bain.",
      features: [
        "Customized preparation plan",
        "Mock interviews with feedback",
        "Resume and cover letter review",
        "Insider application tips",
        "Direct access to MBB consultants"
      ],
      cta: "Get Matched with a Mentor"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#3A7CA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Peer-Based Learning",
      description: "Collaborative preparation with other candidates and guided by experts.",
      features: [
        "Weekly group case practice",
        "Structured learning curriculum",
        "Diverse case types exploration",
        "Networking opportunities",
        "Affordable group pricing"
      ],
      cta: "Join Next Cohort"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#3A7CA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Self-Paced Learning",
      description: "Flexible resources to prepare on your own schedule with expert guidance.",
      features: [
        "Comprehensive case library",
        "Framework guides and templates",
        "Video case walkthroughs",
        "Industry insights and knowledge",
        "24/7 access to materials"
      ],
      cta: "Access Resources"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16425B] mb-4">
            Your Path to Consulting Excellence
          </h2>
          <p className="text-[#3A7CA5] text-lg max-w-xl mx-auto">
            Choose the learning format that fits your needs and preparation style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              features={program.features}
              cta={program.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOptions;