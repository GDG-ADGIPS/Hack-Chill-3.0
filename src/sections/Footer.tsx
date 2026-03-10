import { Instagram, Linkedin, Twitter, MessageCircle, Globe, Code, Mail } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Teal Banner */}
      <div className="bg-[#14b8a6] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
            NO BUGS,
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
            JUST GOOD
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
            VIBES.
          </h2>
        </div>
      </div>

      {/* Dark Footer */}
      <div className="bg-[#0a0a0a] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[#ff6b35] font-bold text-lg mb-1">HACK & CHILL</h3>
              <p className="text-[#ff6b35] font-bold text-sm mb-4">3.0</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Join the ultimate student-led hackathon where creativity meets technology. Build, break, and chill with the best minds in the industry.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-[#1a1a2e] rounded-lg flex items-center justify-center text-[#14b8a6] hover:bg-[#14b8a6] hover:text-black transition-all">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#1a1a2e] rounded-lg flex items-center justify-center text-[#14b8a6] hover:bg-[#14b8a6] hover:text-black transition-all">
                  <Code className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#1a1a2e] rounded-lg flex items-center justify-center text-[#14b8a6] hover:bg-[#14b8a6] hover:text-black transition-all">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Festival Column */}
            <div>
              <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Festival</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('timeline')} className="text-gray-500 hover:text-white text-sm transition-colors">
                    Timeline
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('prizes')} className="text-gray-500 hover:text-white text-sm transition-colors">
                    Prizes
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('squad')} className="text-gray-500 hover:text-white text-sm transition-colors">
                    The Squad
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>

            {/* Sponsors Column */}
            <div>
              <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Sponsors</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => scrollToSection('partners')} className="text-gray-500 hover:text-white text-sm transition-colors">
                    Our Partners
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Sponsorship Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Past Editions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Tier List
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Social</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                    <Twitter className="w-4 h-4" />
                    Twitter (X)
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Newsletter</h4>
              <p className="text-gray-500 text-xs mb-3">STAY UPDATED WITH THE LATEST NEWS</p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL ADDRESS"
                  className="w-full bg-white text-black px-4 py-2.5 text-xs font-medium placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-black font-bold text-xs py-2.5 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1a1a2e] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-600 text-xs">
                © 2026 HACK & CHILL 3.0. ALL RIGHTS RESERVED.
              </p>

              {/* Legal Links */}
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                  PRIVACY POLICY
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                  TERMS OF SERVICE
                </a>
              </div>

              {/* Made with love */}
              <p className="text-gray-600 text-xs">
                MADE WITH <span className="text-red-500">♥</span> FOR THE COMMUNITY
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
