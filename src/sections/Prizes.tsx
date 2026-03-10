import { Trophy, Rocket, Award, Star } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      title: 'RUNNER UP',
      amount: '30,000',
      icon: Trophy,
      iconColor: 'text-[#ec4899]',
      bgColor: 'bg-[#ec4899]/10',
      borderColor: 'border-[#ec4899]/30',
      textColor: 'text-[#ec4899]',
      benefits: [
        { text: 'Figma Pro 1 Year', dot: 'bg-[#ec4899]' },
        { text: 'Wolfram Award', dot: 'bg-[#ec4899]' },
      ],
    },
    {
      title: 'GRAND WINNER',
      amount: '50,000',
      icon: Award,
      iconColor: 'text-[#fbbf24]',
      bgColor: 'bg-[#fbbf24]/10',
      borderColor: 'border-[#fbbf24]/50',
      textColor: 'text-[#fbbf24]',
      badge: 'ULTIMATE CHAMPION',
      isHighlighted: true,
      benefits: [],
    },
    {
      title: 'BEST BEGINNER',
      amount: '20,000',
      icon: Rocket,
      iconColor: 'text-[#14b8a6]',
      bgColor: 'bg-[#14b8a6]/10',
      borderColor: 'border-[#14b8a6]/30',
      textColor: 'text-[#14b8a6]',
      benefits: [
        { text: 'Echo Dot', dot: 'bg-[#14b8a6]' },
        { text: 'Taskade Lifetime', dot: 'bg-[#14b8a6]' },
      ],
    },
  ];

  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      {/* Orange gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f97316] via-[#ea580c] to-[#c2410c]" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#fb923c]/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fdba74]/20 rounded-full blur-3xl" />

      {/* Star decoration */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <Star className="w-6 h-6 text-[#fbbf24] fill-current" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-black text-center mb-16 tracking-tight">
          PRIZES
        </h2>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`relative ${prize.isHighlighted ? 'md:-mt-8 md:mb-8' : ''}`}
            >
              {/* Badge for highlighted card */}
              {prize.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-[#fbbf24] text-black text-xs font-bold px-4 py-1 rounded-full">
                    {prize.badge}
                  </span>
                </div>
              )}

              <div
                className={`bg-[#0f0f1a] rounded-2xl p-8 border-2 ${
                  prize.borderColor
                } transition-all duration-300 hover:transform hover:-translate-y-2 ${
                  prize.isHighlighted
                    ? 'hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]'
                    : ''
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${prize.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <prize.icon className={`w-8 h-8 ${prize.iconColor}`} />
                </div>

                {/* Title */}
                <h3
                  className={`text-center text-sm font-bold tracking-wider mb-4 ${prize.textColor}`}
                >
                  {prize.title}
                </h3>

                {/* Amount */}
                <div className="text-center mb-6">
                  <span className="text-5xl font-black text-white">{prize.amount}</span>
                </div>

                {/* Benefits */}
                {prize.benefits.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {prize.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 ${benefit.dot} rounded-full`} />
                        <span className="text-gray-400 text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button for highlighted */}
                {prize.isHighlighted && (
                  <button className="w-full bg-[#ff6b35] hover:bg-[#e85a2b] text-white py-3 rounded-lg font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,107,53,0.4)]">
                    REGISTER NOW
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
