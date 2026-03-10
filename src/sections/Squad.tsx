import { User, Sparkles } from 'lucide-react';

const Squad = () => {
  const team = [
    {
      name: 'MEHAK',
      surname: 'AGGARWAL',
      role: 'PRESIDENT',
      shape: 'rounded-2xl',
      borderColor: 'border-[#ec4899]',
      bgShape: 'bg-[#ec4899]/20',
      decoration: 'star',
    },
    {
      name: 'ROHIT',
      surname: 'CHOUDHARY',
      role: 'VICE PRESIDENT',
      shape: 'rounded-full',
      borderColor: 'border-[#22c55e]',
      bgShape: 'bg-[#22c55e]/20',
      decoration: 'diamond',
    },
    {
      name: 'AMAN',
      surname: 'SHARMA',
      role: 'GENERAL SECRETARY',
      shape: 'rounded-lg',
      borderColor: 'border-[#a855f7]',
      bgShape: 'bg-[#a855f7]/20',
      decoration: 'circle',
    },
    {
      name: 'SOMIL',
      surname: 'CHOUDHARY',
      role: 'TECH LEAD',
      shape: 'rounded-full',
      borderColor: 'border-[#22c55e]',
      bgShape: 'bg-[#22c55e]/20',
      decoration: 'diamond',
    },
    {
      name: 'ARNAV',
      surname: 'SINGLA',
      role: 'MANAGEMENT LEAD',
      shape: 'rounded-full',
      borderColor: 'border-[#00d4d4]',
      bgShape: 'bg-[#00d4d4]/20',
      decoration: 'ring',
    },
    {
      name: 'MRIDUL',
      surname: 'CHOUDHARY',
      role: 'AIML LEAD',
      shape: 'rounded-lg',
      borderColor: 'border-[#a855f7]',
      bgShape: 'bg-[#a855f7]/20',
      decoration: 'circle',
    },
    {
      name: 'GAUTAM',
      surname: 'SHARMA',
      role: 'CYBERSECURITY LEAD',
      shape: 'rounded-full',
      borderColor: 'border-[#00d4d4]',
      bgShape: 'bg-[#00d4d4]/20',
      decoration: 'ring',
    },
    {
      name: 'ABHITHA',
      // surname: 'CHOUDHARY',
      role: 'CONTENT LEAD',
      shape: 'rounded-lg',
      borderColor: 'border-[#a855f7]',
      bgShape: 'bg-[#a855f7]/20',
      decoration: 'circle',
    },
  ];

  return (
    <section id="squad" className="py-24 relative overflow-hidden">
      {/* Orange background */}
      <div className="absolute inset-0 bg-[#f97316]" />
      
      {/* Decorative shapes */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-[#fdba74]/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#fb923c]/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-black text-center mb-16 tracking-tight">
          THE SQUAD
        </h2>

        {/* Team Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div key={index} className="relative group">
              {/* Background decoration shape */}
              <div
                className={`absolute inset-0 ${member.bgShape} transform rotate-12 scale-110 transition-transform group-hover:rotate-6`}
                style={{
                  borderRadius: member.shape === 'rounded-full' ? '50%' : '20%',
                }}
              />

              {/* Card */}
              <div className="relative">
                {/* Image container */}
                <div
                  className={`relative w-full aspect-square bg-[#1a1a2e] ${member.shape} border-2 ${member.borderColor} overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]`}
                >
                  {/* Placeholder image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-[#2a2a3e] rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-500" />
                      </div>
                      {/* {member.name === 'ROHIT' && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-[#3a3a4e] rounded-full flex items-center justify-center">
                            <span className="text-[10px] text-gray-400">Hi</span>
                          </div>
                        </div>
                      )} */}
                      {/* {member.name === 'ZISHAN' && (
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto border-2 border-gray-500 rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 bg-gray-500 rounded-full" />
                          </div>
                          <p className="text-[8px] text-gray-500 mt-1">TEAM MEMBER</p>
                          <p className="text-[6px] text-gray-600">DESIGN DEPARTMENT</p>
                        </div>
                      )} */}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  {member.decoration === 'star' && (
                    <div className="absolute -top-2 -right-2 text-white">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  )}
                  {member.decoration === 'diamond' && (
                    <div className="absolute top-1/2 -right-3 w-3 h-3 bg-[#22c55e] rotate-45" />
                  )}
                </div>

                {/* Name and Role */}
                <div className="mt-4 text-center">
                  <h3 className="text-black font-black text-sm md:text-base tracking-tight">
                    {member.name}
                  </h3>
                  <h3 className="text-black font-black text-sm md:text-base tracking-tight">
                    {member.surname}
                  </h3>
                  <p className="text-black/70 text-xs font-bold mt-1 tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Squad;
