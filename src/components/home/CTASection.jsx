import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F6690] to-[#16425B] z-0">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#81C3D7] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full opacity-5 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* CTA Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Launch Your Consulting Career?
              </h2>
              <p className="text-[#81C3D7] text-lg mb-8">
                Join GradNext and work with expert mentors who have been in your shoes and succeeded at top firms. Our personalized approach makes all the difference.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#81C3D7] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/90">Get matched with consultants from your target firms</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#81C3D7] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/90">Transform your resume and interview performance</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#81C3D7] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/90">Join our community of successful consultants</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#16425B] mb-6">Start Your Consulting Journey</h3>
              <form>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3A7CA5] focus:border-transparent transition-colors" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3A7CA5] focus:border-transparent transition-colors" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">Target Firms</label>
                    <select 
                      id="target" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3A7CA5] focus:border-transparent transition-colors"
                    >
                      <option value="" disabled selected>Select your target</option>
                      <option value="mbb">McKinsey, BCG, Bain (MBB)</option>
                      <option value="big4">Big 4 (Deloitte, PwC, KPMG, EY)</option>
                      <option value="tier2">Tier 2 Consulting Firms</option>
                      <option value="boutique">Boutique/Specialized Consulting</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preparation" className="block text-sm font-medium text-gray-700 mb-1">Preparation Stage</label>
                    <select 
                      id="preparation" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3A7CA5] focus:border-transparent transition-colors"
                    >
                      <option value="" disabled selected>Where are you in your prep?</option>
                      <option value="just-starting">Just Starting</option>
                      <option value="resume">Resume Preparation</option>
                      <option value="cases">Case Interview Practice</option>
                      <option value="final-rounds">Final Round Preparation</option>
                      <option value="received-invite">Received Interview Invite</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full mt-6 py-3 px-4 bg-[#2F6690] text-white font-bold rounded-md hover:bg-[#3A7CA5] transition-colors duration-300">
                  Book Free Consultation
                </button>
              </form>
              <p className="text-center text-xs text-gray-500 mt-4">
                No obligation. We'll analyze your needs and recommend the best path forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;