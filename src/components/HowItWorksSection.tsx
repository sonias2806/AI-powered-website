import React from 'react';
import { MessageSquare, Palette, Code, Rocket, Clock, CheckCircle, Cloud, RefreshCw } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: '15-Min WhatsApp Brief',
      desc: 'Share your business name, core offerings, preferred photos, and goals via a quick WhatsApp chat or 2-minute questionnaire.',
      time: '15 Mins Sprint',
      icon: <MessageSquare className="w-5 h-5 text-[var(--theme-primary)]" />,
      accent: 'border-[var(--theme-primary)]',
      color: 'text-[var(--theme-primary)]'
    },
    {
      step: '02',
      title: 'Bespoke UI & Styling',
      desc: 'We map out a tailored visual structure, mobile-first UX, and dynamic color aesthetic engineered to convert your visitors into paying customers.',
      time: 'Day 1 Sprint',
      icon: <Palette className="w-5 h-5 text-[var(--theme-secondary)]" />,
      accent: 'border-[var(--theme-secondary)]',
      color: 'text-[var(--theme-secondary)]'
    },
    {
      step: '03',
      title: '48-Hour Live Deployment',
      desc: 'Your working website goes live in 2 days. We configure your custom domain, point DNS records, activate SSL, and launch on a global edge CDN.',
      time: 'Day 2 Live SLA',
      icon: <Cloud className="w-5 h-5 text-[var(--theme-accent)]" />,
      accent: 'border-[var(--theme-accent)]',
      color: 'text-[var(--theme-accent)]'
    },
    {
      step: '04',
      title: 'Monthly Managed Care',
      desc: 'Never stress over hosting or bugs again. We handle ongoing security patches, uptime monitoring, and on-demand content edits every month.',
      time: 'Peace Of Mind',
      icon: <RefreshCw className="w-5 h-5 text-[#00FF9D]" />,
      accent: 'border-[#00FF9D]',
      color: 'text-[#00FF9D]'
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[var(--theme-primary)]/10 via-[var(--theme-secondary)]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[var(--theme-border)] text-xs font-space font-medium text-[var(--theme-primary)] mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">THE 2-DAY SPRINT WORKFLOW</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">4 SIMPLE STEPS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            From Idea to Working Website in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">2 Days</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            A frictionless, transparent delivery model designed to launch your business with hosting, deployment, and worry-free monthly support.
          </p>
        </div>

        {/* 4 Connected Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#0f0c22]/90 rounded-3xl p-7 border border-[#2e2354] hover:border-[var(--theme-border)] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 backdrop-blur-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#14102c] border border-[#2e2354] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-syne font-extrabold text-[#251d45] group-hover:text-[var(--theme-primary)] transition-colors font-mono-num">
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

              <div className="pt-4 mt-4 border-t border-[#231b45] flex items-center gap-1.5 text-xs text-[var(--theme-primary)] font-space font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span>Zero Technical Headaches</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
