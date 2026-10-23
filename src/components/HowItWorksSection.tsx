import React from 'react';
import { Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { PROCESS_STEPS, CONTACT_CONFIG } from '../data/siteData';

interface HowItWorksSectionProps {
  onOpenConsultation?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenConsultation }) => {
  const stepColors = [
    {
      text: 'text-amber-400',
      badge: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
      glow: 'hover:border-amber-400/60 shadow-amber-950/20'
    },
    {
      text: 'text-rose-400',
      badge: 'border-rose-400/40 text-rose-300 bg-rose-400/10',
      glow: 'hover:border-rose-400/60 shadow-rose-950/20'
    },
    {
      text: 'text-emerald-400',
      badge: 'border-emerald-400/40 text-emerald-300 bg-emerald-400/10',
      glow: 'hover:border-emerald-400/60 shadow-emerald-950/20'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-white/10">
      {/* Colorful Section Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-indigo-500/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-xl shadow-lg shadow-amber-950/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Clear &amp; Predictable Workflow · 3-5 Days Launch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            A Simple Three-Step Project Process
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed drop-shadow-sm">
            From your first message to a live, mobile-friendly website in 3 to 5 business days—with zero technical headaches for you.
          </p>
        </div>

        {/* 3 Steps Grid with glowing gradient track */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const color = stepColors[idx] || stepColors[0];
            return (
              <div
                key={step.stepNumber}
                className={`p-6 sm:p-8 rounded-2xl bg-[#0c0f20]/85 border border-white/15 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 hover:-translate-y-1 ${color.glow}`}
              >
                <div>
                  {/* Clean Editorial Numbering & Timeframe */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-3xl font-syne font-black font-mono-num ${color.text}`}>
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300 font-mono-num px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* What happens list */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Outcomes:
                    </div>
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Step {idx + 1} of 3</span>
                  <span className={`font-semibold ${color.text}`}>Handcrafted Polish</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/70 border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl shadow-black/30">
          <div>
            <h4 className="text-sm font-bold text-white">Have questions about your specific business?</h4>
            <p className="text-xs text-slate-300 mt-1">
              Message us on WhatsApp for a quick 10-minute discovery chat with zero pressure.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%2C%20I%20have%20a%20few%20questions%20about%20getting%20a%20website%20for%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-semibold text-xs transition-colors shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-950/20"
              >
                <span>Book Free Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
