import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'WHEN AND WHERE IS HACK & CHILL 3.0?',
      answer:
        'Hack & Chill 3.0 will take place from April 15-17, 2026 at ADGIPS, New Delhi. The venue is equipped with state-of-the-art facilities including 24/7 hacking spaces, sleeping areas, and recreational zones.',
    },
    {
      question: 'WHAT IS THE TEAM SIZE?',
      answer:
        'Teams can consist of 2-4 members. Solo participants are also welcome and will have the opportunity to form teams during the networking session on Day 1. We encourage diverse skill sets in each team!',
    },
    {
      question: 'ARE THERE ANY REGISTRATION FEES?',
      answer:
        'No, Hack & Chill 3.0 is completely free to attend! We believe in making hackathons accessible to everyone. All meals, swag, and accommodations during the event are provided at no cost.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] via-[#059669] to-[#047857]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16 tracking-tight">
          CURIOUS?
        </h2>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#0f0f1a] rounded-xl border-2 transition-all duration-300 ${
                openIndex === index
                  ? 'border-[#fbbf24] shadow-[0_0_30px_rgba(251,191,36,0.2)]'
                  : 'border-transparent hover:border-[#1a1a2e]'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-bold text-sm md:text-base tracking-wide pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-[#fbbf24] text-black'
                      : 'bg-[#1a1a2e] text-gray-400'
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
