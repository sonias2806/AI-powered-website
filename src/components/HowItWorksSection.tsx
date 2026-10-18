import React from 'react';
import { MessageSquare, Palette, Code, Rocket, Clock, CheckCircle } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Brief On WhatsApp',
      desc: 'Share your business name, core services, location, photos, and preferences via a quick WhatsApp chat or 2-minute questionnaire.',
      time: '15 Mins Sprint',
      icon: <MessageSquare className="w-5 h-5 text-[#FFB800]" />,
      accent: 'border-[#FFB800]',
      color: 'text-[#FFB800]'
    },
    {
      step: '02',
      title: 'Choose 3D Flow',
      desc: 'Pick your preferred visual aesthetic, brand colors, and layout structure from tailored interactive mockups engineered for your industry.',
      time: 'Same-Hour Selection',
      icon: <Palette className="w-5 h-5 text-[#EC4899]" />,
      accent: 'border-[#EC4899]',
      color: 'text-[#EC4899]'
    },
    {
      step: '03',
      title: '24h Native Build',
      desc: 'Your site is built using high-velocity modern web stacks, zero builder bloat, optimized for 99+ Core Web Vitals and local Google ranking.',
      time: '24 Hours Delivery',
      icon: <Code className="w-5 h-5 text-[#8B5CF6]" />,
      accent: 'border-[#8B5CF6]',
      color: 'text-[#8B5CF6]'
    },
    {
      step: '04',
      title: 'Go Live & Convert',
      desc: 'Review live on your smartphone, connect your custom domain and WhatsApp hotline, and begin closing direct walk-in customers.',
      time: 'Instant ROI',
      icon: <Rocket className="w-5 h-5 text-[#00FF9D]" />,
      accent: 'border-[#00FF9D]',
      color: 'text-[#00FF9D]'
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FFB800]/10 via-[#EC4899]/10 to-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4 shadow-lg shadow-[#FFB800]/10">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">FRICTIONLESS SPRINT PROCESS</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">4 STEPS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            From Idea to Live Website in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">24 Hours</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            A battle-tested, transparent sprint designed to get your Hyderabad business live with zero technical headaches, zero downtime, and instant customer conversion.
          </p>
        </div>

        {/* 4 Connected Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#0f0c22]/90 rounded-3xl p-7 border border-[#2e2354] hover:border-[#FFB800]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 backdrop-blur-2xl hover:shadow-[0_15px_40px_rgba(255,184,0,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#14102c] border border-[#2e2354] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-syne font-extrabold text-[#251d45] group-hover:text-[#FFB800]/60 transition-colors font-mono-num">
                    {item.step}
                  </span>
                </div>

                <div className={`inline-flex items-center gap-1.5 text-[11px] font-mono-num ${item.color} bg-[#14102c] px-2.5 py-0.5 rounded-md border border-[#2e2354] mb-3 font-bold`}>
                  <Clock className="w-3 h-3" />
                  <span>{item.time}</span>
                </div>

                <h3 className="text-xl font-syne font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-space">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#231b45] flex items-center gap-1.5 text-xs text-[#FFB800] font-space font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span>Zero Technical Jargon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
