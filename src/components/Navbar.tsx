import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a1a]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#ff6b35] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-white font-bold text-lg tracking-wide">
            HACK&CHILL <span className="text-[#ff6b35]">3.0</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('prizes')}
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Tracks
          </button>
          <button
            onClick={() => scrollToSection('prizes')}
            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
          >
            Prizes
          </button>
        </div>

        {/* Register Button */}
        <button
          onClick={() => scrollToSection('hero')}
          className="bg-[#00d4d4] hover:bg-[#00bbbb] text-[#0a0a1a] px-5 py-2 rounded-full font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(0,212,212,0.4)]"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
