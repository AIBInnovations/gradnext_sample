import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F6690] to-[#3A7CA5] opacity-95">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}
        />
      </div>
      
      {/* Glassmorphism circles/shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#81C3D7]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-[#81C3D7]/30 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
              Accelerate Your Path to <span className="relative">
                <span className="relative z-10">Top-Tier Consulting</span>
                <span className="absolute -bottom-2 left-0 right-0 h-4 bg-[#81C3D7]/30 rounded-full blur-md -z-0"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 animate-fadeInUp animation-delay-200">
              Expert-led preparation and mentorship from consultants at McKinsey, BCG, and Bain to help you break into your dream consulting career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp animation-delay-300">
              <button className="relative px-8 py-3 font-bold rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-[#81C3D7] to-[#81C3D7]/80 backdrop-blur-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#81C3D7]/80 to-[#81C3D7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 text-[#16425B] font-bold">Start Your Prep</span>
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                Explore Programs
              </button>
            </div>
          </div>

          {/* Hero image/graphic */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              {/* Abstract shapes with glassmorphism */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-[#81C3D7]/30 rounded-full blur-md"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#81C3D7]/20 rounded-full blur-lg"></div>
              
              {/* Main content card with glassmorphism effect */}
              <div className="bg-white/30 backdrop-blur-xl w-full max-w-md rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden border border-white/30">
                <div className="bg-[#16425B]/90 backdrop-blur-sm p-4 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-medium">Consulting Case Prep</h3>
                    <span className="bg-[#81C3D7] text-[#16425B] text-sm font-bold px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(129,195,215,0.3)]">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-6 border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A7CA5] to-[#81C3D7] flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#16425B]">1:1 Mentorship</h4>
                      <p className="text-gray-700 text-sm">With MBB consultants</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A7CA5] to-[#81C3D7] flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#16425B]">Case Practice</h4>
                      <p className="text-gray-700 text-sm">Expert-led frameworks</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3A7CA5] to-[#81C3D7] flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#16425B]">Resume Review</h4>
                      <p className="text-gray-700 text-sm">Professional feedback</p>
                    </div>
                  </div>
                  <button className="relative mt-6 w-full py-3 rounded-md text-white font-semibold overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2F6690] to-[#3A7CA5]"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#3A7CA5] to-[#2F6690] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;