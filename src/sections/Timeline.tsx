import { Play, Star, Hexagon, Smile, Lock, CircleDot } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      day: 'DAY 01',
      time: '09:00 AM',
      title: 'Registration & Check-in',
      label: 'START',
      position: 'left',
      icon: Play,
      iconColor: 'text-orange-400',
      ringColor: 'border-orange-400',
      bgColor: 'bg-orange-400/20',
    },
    {
      day: 'DAY 01',
      time: '11:30 AM',
      title: 'Opening Ceremony',
      label: 'LAUNCH',
      position: 'right',
      icon: Star,
      iconColor: 'text-yellow-400',
      ringColor: 'border-yellow-400',
      bgColor: 'bg-yellow-400/20',
    },
    {
      day: 'DAY 02',
      time: '00:00 AM',
      title: 'Hacking Begins',
      label: 'CODE',
      position: 'left',
      icon: Hexagon,
      iconColor: 'text-cyan-400',
      ringColor: 'border-cyan-400',
      bgColor: 'bg-cyan-400/20',
    },
    {
      day: 'DAY 02',
      time: '02:00 PM',
      title: 'Mentorship Round',
      label: 'GUIDE',
      position: 'right',
      icon: Smile,
      iconColor: 'text-pink-400',
      ringColor: 'border-pink-400',
      bgColor: 'bg-pink-400/20',
    },
    {
      day: 'DAY 03',
      time: '10:00 AM',
      title: 'Project Submission',
      label: 'SUBMIT',
      position: 'left',
      icon: Lock,
      iconColor: 'text-purple-400',
      ringColor: 'border-purple-400',
      bgColor: 'bg-purple-400/20',
    },
    {
      day: 'DAY 03',
      time: '04:00 PM',
      title: 'Judging & Closing Ceremony',
      label: 'FINISH',
      position: 'right',
      icon: CircleDot,
      iconColor: 'text-green-400',
      ringColor: 'border-green-400',
      bgColor: 'bg-green-400/20',
    },
  ];

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Purple to pink/magenta gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#c026d3] to-[#ec4899]" />
      
      {/* Decorative elements */}
      <div className="absolute top-16 left-16 opacity-30">
        <Star className="w-5 h-5 text-yellow-300 fill-current" />
      </div>
      <div className="absolute top-32 right-24 opacity-20">
        <div className="w-3 h-3 bg-cyan-300 rotate-45" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Hexagon className="w-4 h-4 text-pink-300" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16 tracking-tight">
          TIMELINE
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-pink-400 to-purple-400 transform -translate-x-1/2" />

          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {/* Left side content */}
                {event.position === 'left' ? (
                  <>
                    {/* Event Card - Left */}
                    {/* <div className="w-[45%] pr-8 flex justify-end"> */}
                    <div className="w-1/2 pr-8 flex justify-end">
                      <div className="bg-[#0a0a0a] rounded-xl px-5 py-3 border border-[#1a1a1a] shadow-lg">
                        <p className="text-[#fbbf24] text-[10px] font-bold tracking-wider mb-1 font-mono">
                          {event.day} · {event.time}
                        </p>
                        <p className="text-white font-bold text-sm uppercase tracking-wide font-mono">
                          {event.title}
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Dot with Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-10 h-10 ${event.bgColor} rounded-full border-2 ${event.ringColor} flex items-center justify-center shadow-lg`}>
                        <event.icon className={`w-4 h-4 ${event.iconColor}`} />
                      </div>
                    </div>
                    
                    {/* Label - Right side */}
                    {/* <div className="w-[45%] pl-8"> */}
                    <div className="w-1/2 pl-8">
                      <span className="text-white/10 text-3xl font-black tracking-widest">
                        {event.label}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Label - Left side */}
                    {/* <div className="w-[45%] pr-8 text-right"> */}
                    <div className="w-1/2 pr-8 text-right">
                      <span className="text-white/10 text-3xl font-black tracking-widest">
                        {event.label}
                      </span>
                    </div>
                    
                    {/* Center Dot with Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-10 h-10 ${event.bgColor} rounded-full border-2 ${event.ringColor} flex items-center justify-center shadow-lg`}>
                        <event.icon className={`w-4 h-4 ${event.iconColor}`} />
                      </div>
                    </div>
                    
                    {/* Event Card - Right */}
                    {/* <div className="w-[45%] pl-8"> */}
                    <div className="w-1/2 pl-8">
                      <div className="bg-[#0a0a0a] rounded-xl px-5 py-3 border border-[#1a1a1a] shadow-lg">
                        <p className="text-[#fbbf24] text-[10px] font-bold tracking-wider mb-1 font-mono">
                          {event.day} · {event.time}
                        </p>
                        <p className="text-white font-bold text-sm uppercase tracking-wide font-mono">
                          {event.title}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
