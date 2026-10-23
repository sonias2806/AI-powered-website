import React from 'react';
import { MapPin, CheckCircle, ArrowRight, Sparkles, Award } from 'lucide-react';
import { FOUNDER_DATA } from '../data/siteData';

interface FounderSectionProps {
  onOpenConsultation: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="founder" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-rose-200/50">
      {/* Dynamic Colorful Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-amber-400/30 via-rose-500/25 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/30 via-pink-500/25 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-4 backdrop-blur-xl shadow-md shadow-rose-500/10">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Founder &amp; Creative Web Director · Serving Global Clients</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-slate-900 tracking-tight">
            Personal Attention, <span className="gradient-text-rainbow">Not an Impersonal Agency</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
            You work directly with the creative founder designing, engineering, and launching your digital presence.
          </p>
        </div>

        {/* Founder Bio Card with Glowing Border & Frosted Glass Backdrop */}
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 shadow-2xl shadow-rose-500/15">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[22px] overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Photograph Column with Sonia's Portrait */}
            <div className="md:col-span-5 relative bg-gradient-to-b from-rose-50/80 via-white to-purple-50/60 p-7 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-rose-100">
              {/* Colorful aura behind portrait */}
              <div className="absolute w-60 h-60 bg-gradient-to-tr from-amber-400/30 to-rose-500/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-rose-500/20 bg-rose-100 group">
                <img
                  src={FOUNDER_DATA.image}
                  alt="Sonia S. - Founder of Aura Web Studio"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Verified Founder Badge */}
                <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-white/95 border-t border-rose-100 text-center backdrop-blur-md">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct Founder Access</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center relative z-10">
                <h3 className="text-lg font-syne font-extrabold text-slate-900">{FOUNDER_DATA.name}</h3>
                <p className="text-xs text-rose-600 font-bold">{FOUNDER_DATA.role}</p>
                <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{FOUNDER_DATA.location}</span>
                </p>
              </div>
            </div>

            {/* Biography Content Column */}
            <div className="md:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-syne font-bold text-slate-900 mb-4">
                  {FOUNDER_DATA.bioHeading}
                </h4>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {FOUNDER_DATA.bioParagraphs.map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Quick Guarantees Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7 pt-6 border-t border-rose-100">
                {FOUNDER_DATA.guarantees.map((item: { title: string; description: string }, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-rose-100/80 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Consultation Link */}
              <div className="mt-7 pt-5 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-600 font-medium">
                  Ready to collaborate on your brand website?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs transition-all shadow-lg shadow-rose-500/25 hover:-translate-y-0.5"
                >
                  <span>Consult with Sonia</span>
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
