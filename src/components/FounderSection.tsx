import React from 'react';
import { MapPin, CheckCircle, ArrowRight, Sparkles, Award } from 'lucide-react';
import { FOUNDER_DATA } from '../data/siteData';

interface FounderSectionProps {
  onOpenConsultation: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="founder" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-white/10">
      {/* Dynamic Colorful Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/20 via-rose-500/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-xl shadow-lg shadow-amber-950/20">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Founder &amp; Lead Craftsman · Serving Global Clients</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            Personal Attention, Not an Impersonal Agency
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-3 drop-shadow-sm">
            You work directly with the craftsman designing, refining, and launching your digital presence.
          </p>
        </div>

        {/* Founder Bio Card with Glowing Border & Glassmorphic Backdrop */}
        <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400/30 via-white/15 to-indigo-500/30 shadow-2xl shadow-indigo-950/30">
          <div className="bg-[#0b0e1f]/95 backdrop-blur-2xl rounded-[22px] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Photograph Column with clear placeholder label */}
            <div className="md:col-span-5 relative bg-slate-950/80 p-7 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
              {/* Colorful aura behind portrait */}
              <div className="absolute w-60 h-60 bg-gradient-to-tr from-amber-400/20 to-rose-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-slate-900 group">
                <img
                  src={FOUNDER_DATA.image}
                  alt="Founder portrait placeholder"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                {/* Informative placeholder badge */}
                <div className="absolute inset-x-0 bottom-0 py-2.5 px-3 bg-slate-950/95 border-t border-white/15 text-center backdrop-blur-md">
                  <span className="text-[11px] font-bold text-amber-300 block">
                    [Founder Photo Placeholder]
                  </span>
                  <span className="text-[10px] text-slate-300 block">
                    Replace with your real picture
                  </span>
                </div>
              </div>

              <div className="mt-5 text-center relative z-10">
                <h3 className="text-base font-bold text-white">{FOUNDER_DATA.name}</h3>
                <p className="text-xs text-amber-300 font-semibold">{FOUNDER_DATA.role}</p>
                <p className="text-[11px] text-slate-300 flex items-center justify-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{FOUNDER_DATA.location}</span>
                </p>
              </div>
            </div>

            {/* Biography Content Column */}
            <div className="md:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-syne font-bold text-white mb-4">
                  {FOUNDER_DATA.bioHeading}
                </h4>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {FOUNDER_DATA.bioParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Quick Guarantees Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7 pt-6 border-t border-white/10">
                {FOUNDER_DATA.guarantees.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-white/10 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Consultation Link */}
              <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  Ready to discuss your business website?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-950/20"
                >
                  <span>Talk to the Founder</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
