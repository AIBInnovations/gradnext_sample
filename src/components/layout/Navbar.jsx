import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'Consultants', href: '#consultants' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
        ? 'backdrop-blur-xl bg-white/25 border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-2' 
        : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center transition-all duration-500">
          {/* Logo */}
            <a href="#" className="flex items-center group">
            <span className="relative text-2xl font-bold text-[#16425B] px-2 py-1 rounded-lg group-hover:bg-white/20 transition duration-300">
                GradNext<span className="text-[#3A7CA5]">.co</span>
            </span>
            </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 ${scrolled ? 'text-[#16425B]' : 'text-white'} hover:text-[#81C3D7] font-medium rounded-md hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-transparent hover:border-white/10`}
              >
                {link.name}
              </a>
            ))}
            <button className="ml-2 px-5 py-1.5 bg-gradient-to-r from-[#2F6690] to-[#3A7CA5] text-white rounded-md hover:from-[#3A7CA5] hover:to-[#2F6690] transition-all duration-300 font-medium shadow-[0_4px_16px_rgba(49,102,144,0.3)] hover:shadow-[0_8px_20px_rgba(49,102,144,0.5)] backdrop-blur-sm border border-white/20">
              Book a Session
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-[#16425B]' : 'text-white'} p-1 rounded-lg hover:bg-white/20 focus:outline-none transition-colors duration-200 backdrop-blur-sm border border-transparent hover:border-white/10`}
            >
              {isOpen ? (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/50 absolute top-full left-0 w-full py-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border-b border-white/20 animate-fadeIn">
          <div className="container mx-auto px-4">
            {/* <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-[0_4px_16px_rgba(31,38,135,0.1)]"> */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[#16425B] hover:text-[#3A7CA5] font-medium py-2 px-3 rounded-md hover:bg-white/50 transition-all duration-200 border-b border-[#D9DCD6]/30"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="mt-2 px-5 py-2 bg-gradient-to-r from-[#2F6690] to-[#3A7CA5] text-white rounded-md hover:from-[#3A7CA5] hover:to-[#2F6690] transition-all duration-300 font-medium shadow-[0_4px_16px_rgba(49,102,144,0.3)]">
                  Book a Session
                </button>
              </div>
            {/* </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;