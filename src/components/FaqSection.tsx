import React, { useState } from 'react';
import { ChevronDown, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, CONTACT_CONFIG } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10">
      {/* Dynamic Colorful Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 -right-28 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-600/18 via-cyan-500/12 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-28 w-[480px] h-[480px] bg-gradient-to-tr from-amber-500/18 via-rose-500/12 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-xl shadow-lg shadow-amber-950/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Clear Answers For Small Business Owners</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed drop-shadow-sm">
            Honest answers about the process, ownership, turnaround, and why a dedicated website brings in more customers than social media alone.
          </p>
        </div>

        {/* Accordion list with Glassmorphic styling */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all backdrop-blur-xl ${
                  isOpen
                    ? 'bg-[#0d1024]/95 border-amber-400/50 shadow-xl shadow-amber-950/20'
                    : 'bg-[#0b0e1e]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-amber-400/20 text-amber-300' : 'bg-white/5 text-slate-400'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Quick Ask Prompt with Frosted Glassmorphism */}
        <div className="mt-12 p-6 bg-slate-900/80 rounded-3xl border border-white/15 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-black/30">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a specific question about your salon, clinic, or cafe?</div>
              <div className="text-xs text-slate-300">Ask us directly on WhatsApp—we reply promptly within business hours.</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20getting%20a%20website%20for%20my%20business`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-xl transition-colors whitespace-nowrap shadow-md"
          >
            <MessageSquare className="w-4 h-4 fill-emerald-400/20" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
