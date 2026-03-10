import { Zap, Square, Hexagon } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: '', icon: Square },
    { name: 'VW', icon: null },
    { name: 'KRAFTON', icon: Hexagon },
    { name: 'DUCAT', icon: Zap },
    { name: 'PARTNER X', icon: null },
  ];

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-[#0a0a1a]">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8">
        <div className="w-3 h-3 bg-[#a855f7] rotate-45" />
      </div>
      <div className="absolute top-8 right-8">
        <div className="w-4 h-4 border-2 border-[#00d4d4] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-[#00d4d4] text-center mb-16 tracking-tight">
          PARTNERS
        </h2>

        {/* Partner Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {partners.slice(0, 3).map((partner, index) => (
              <div
                key={index}
                className="partner-card w-40 h-28 bg-[#0f0f1a] rounded-xl border border-[#1a1a2e] flex items-center justify-center cursor-pointer"
              >
                {partner.icon ? (
                  <partner.icon className="w-10 h-10 text-white" />
                ) : partner.name ? (
                  <span className="text-white font-bold text-lg tracking-wider">
                    {partner.name}
                  </span>
                ) : (
                  <div className="w-10 h-10 bg-white rounded-lg" />
                )}
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-6 w-full mt-4">
            {partners.slice(3).map((partner, index) => (
              <div
                key={index + 3}
                className="partner-card w-40 h-28 bg-[#0f0f1a] rounded-xl border border-[#1a1a2e] flex items-center justify-center cursor-pointer"
              >
                {partner.icon ? (
                  <div className="flex items-center gap-2">
                    <partner.icon className="w-5 h-5 text-[#fbbf24]" />
                    <span className="text-white font-bold text-sm tracking-wider">
                      {partner.name}
                    </span>
                  </div>
                ) : (
                  <span className="text-white font-bold text-lg tracking-wider">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-[#ec4899] to-[#00d4d4] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
