import React, { useState } from 'react';

const ConsultantCard = ({ consultant }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-48 bg-[#D9DCD6] relative overflow-hidden">
        {/* In a real app, you would use the actual image */}
        {/* <img src={consultant.image} alt={consultant.name} className="w-full h-full object-cover" /> */}
        <div className="w-full h-full flex items-center justify-center bg-[#2F6690]/10">
          <svg className="w-20 h-20 text-[#3A7CA5]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#16425B]/90 to-transparent p-4">
          <div className="text-white font-bold">{consultant.name}</div>
          <div className="text-[#81C3D7] text-sm">{consultant.role}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="bg-[#D9DCD6] rounded px-2 py-1 text-xs font-medium text-[#16425B]">
            {consultant.firm}
          </div>
          <div className="text-xs text-gray-500 ml-2">
            {consultant.experience}
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          {consultant.bio}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {consultant.specialties.map((specialty, index) => (
            <span key={index} className="bg-[#81C3D7]/20 text-[#3A7CA5] rounded-full px-2 py-1 text-xs">
              {specialty}
            </span>
          ))}
        </div>
        <button className="w-full py-2 rounded-md bg-[#2F6690] text-white font-medium hover:bg-[#3A7CA5] transition-colors duration-200 text-sm">
          Book a Session
        </button>
      </div>
    </div>
  );
};

const ConsultantProfiles = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const consultants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Consultant',
      firm: 'McKinsey',
      experience: '5+ years',
      bio: 'Harvard MBA with expertise in technology and financial services. Helped 50+ candidates secure MBB offers.',
      specialties: ['Case Interviews', 'Resume Review', 'Financial Services'],
      category: 'mckinsey'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Project Leader',
      firm: 'BCG',
      experience: '4+ years',
      bio: 'Wharton graduate specializing in healthcare and consumer goods. Known for actionable feedback and frameworks.',
      specialties: ['Healthcare', 'Market Sizing', 'Behavioral Interviews'],
      category: 'bcg'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Case Team Leader',
      firm: 'Bain',
      experience: '6+ years',
      bio: 'INSEAD MBA with background in retail and consumer products. Expert in crafting compelling personal stories.',
      specialties: ['Retail Strategy', 'Personal Branding', 'Case Frameworks'],
      category: 'bain'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Associate',
      firm: 'McKinsey',
      experience: '3+ years',
      bio: 'Stanford graduate with tech industry focus. Specializes in helping career switchers break into consulting.',
      specialties: ['Tech Consulting', 'Career Transitions', 'Interview Prep'],
      category: 'mckinsey'
    }
  ];

  const filteredConsultants = activeTab === 'all' 
    ? consultants 
    : consultants.filter(c => c.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Consultants' },
    { id: 'mckinsey', label: 'McKinsey' },
    { id: 'bcg', label: 'BCG' },
    { id: 'bain', label: 'Bain' }
  ];

  return (
    <section id="consultants" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#16425B] mb-4">
            Meet Our Expert Consultants
          </h2>
          <p className="text-[#3A7CA5] text-lg max-w-xl mx-auto">
            Learn from consultants who have been in your shoes and succeeded
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          <div className="inline-flex p-1 bg-[#D9DCD6]/50 rounded-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-[#16425B] shadow-sm'
                    : 'text-[#3A7CA5] hover:text-[#16425B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredConsultants.map(consultant => (
            <ConsultantCard key={consultant.id} consultant={consultant} />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border-2 border-[#2F6690] text-[#2F6690] font-bold rounded-md hover:bg-[#2F6690] hover:text-white transition-all duration-300">
            View All Consultants
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultantProfiles;