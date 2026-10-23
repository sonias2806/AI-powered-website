import React from 'react';
import { Check, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { PROCESS_STEPS, CONTACT_CONFIG } from '../data/siteData';

interface HowItWorksSectionProps {
  onOpenConsultation?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenConsultation }) => {
  const stepColors = [
    {
      text: 'text-rose-600',
      badge: 'border-rose-200 text-rose-700 bg-rose-50',
      glow: 'hover:border-rose-300 shadow-rose-500/10'
    },
    {
      text: 'text-amber-600',
      badge: 'border-amber-200 text-amber-700 bg-amber-50',
      glow: 'hover:border-amber-300 shadow-amber-500/10'
    },
    {
      text: 'text-purple-600',
      badge: 'border-purple-200 text-purple-700 bg-purple-50',
      glow: 'hover:border-purple-300 shadow-purple-500/10'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-rose-200/50">
      {/* Colorful Section Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-amber-400/20 via-rose-500/20 to-purple-500/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-4 backdrop-blur-xl shadow-md shadow-rose-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Clear &amp; Predictable Workflow · 3-5 Days Launch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-slate-900 tracking-tight">
            A Simple <span className="gradient-text-rainbow">Three-Step Project Process</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
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
                className={`p-6 sm:p-8 rounded-2xl bg-white/90 border border-rose-100/90 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 ${color.glow}`}
              >
                <div>
                  {/* Clean Editorial Numbering & Timeframe */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-4xl font-syne font-black font-mono-num ${color.text}`}>
                      {step.stepNumber}
                    </span>
                    <span className={`text-[11px] font-semibold font-mono-num px-3 py-1 rounded-full border ${color.badge}`}>
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* What happens list */}
                  <div className="space-y-2 pt-4 border-t border-rose-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Outcomes:
                    </div>
                    {step.deliverables.map((deliv: string, i: number) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Step {idx + 1} of 3</span>
                  <span className={`font-semibold ${color.text}`}>Handcrafted Polish</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/90 border border-rose-200/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg shadow-rose-500/5">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Have questions about your specific business?</h4>
            <p className="text-xs text-slate-600 mt-1">
              Message us on WhatsApp for a quick 10-minute discovery chat with zero pressure.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%20Sonia%2C%20I%20have%20a%20question%20about%20building%20a%20website%20for%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold text-xs transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 text-white font-bold text-xs shadow-md shadow-rose-500/20 hover:opacity-95 transition-all"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
