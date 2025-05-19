import React from 'react';

const ResultsSection = () => {
  const companies = [
    { name: 'McKinsey & Company', logo: '/logos/partner-logos/mckinsey.svg', class: 'h-8 md:h-10' },
    { name: 'Boston Consulting Group', logo: '/logos/partner-logos/bcg.svg', class: 'h-8 md:h-12' },
    { name: 'Bain & Company', logo: '/logos/partner-logos/bain.svg', class: 'h-8 md:h-10' },
    { name: 'Accenture', logo: '/logos/partner-logos/accenture.svg', class: 'h-6 md:h-8' },
    { name: 'Deloitte', logo: '/logos/partner-logos/deloitte.svg', class: 'h-6 md:h-8' },
    { name: 'KPMG', logo: '/logos/partner-logos/kpmg.svg', class: 'h-6 md:h-8' },
    { name: 'EY', logo: '/logos/partner-logos/ey.svg', class: 'h-6 md:h-8' },
    { name: 'PwC', logo: '/logos/partner-logos/pwc.svg', class: 'h-6 md:h-8' }
  ];
  
  // For the demo, we'll create placeholder SVGs for the logos
  const LogoPlaceholder = ({ name, className }) => (
    <div className={`${className} flex items-center justify-center bg-gray-100 rounded-md px-4 py-2`}>
      <span className="text-[#16425B] font-semibold">{name}</span>
    </div>
  );

  // Sample success metrics
  const metrics = [
    { value: '85%', label: 'Interview Success Rate' },
    { value: '92%', label: 'Clients Recommend Us' },
    { value: '3x', label: 'Higher Offer Rate vs. Self-Prep' }
  ];

  return (
    <section id="results" className="py-20 bg-[#16425B] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Where Our Clients Land Offers
          </h2>
          <p className="text-[#81C3D7] text-lg max-w-xl mx-auto">
            Our mentees consistently receive offers from top consulting firms worldwide
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-[#2F6690] rounded-lg p-6 text-center transform transition-transform hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{metric.value}</div>
              <p className="text-[#81C3D7]">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Company logos */}
        <div className="relative overflow-hidden py-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3A7CA5] rounded-full opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#81C3D7] rounded-full opacity-10 blur-3xl -z-10"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex justify-center items-center">
                  {/* In a real app, you would use the actual logo */}
                  {/* <img src={company.logo} alt={company.name} className={company.class} /> */}
                  <LogoPlaceholder name={company.name} className={company.class} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-[#81C3D7] text-[#16425B] font-bold rounded-md hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
            See All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;