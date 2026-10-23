import React, { useState } from 'react';
import { ChevronDown, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, CONTACT_CONFIG } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-rose-200/50">
      {/* Dynamic Colorful Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 -right-28 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/20 via-pink-500/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-28 w-[480px] h-[480px] bg-gradient-to-tr from-amber-400/20 via-rose-500/15 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-4 backdrop-blur-xl shadow-md shadow-rose-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Clear Answers For Small Business Owners</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="gradient-text-rainbow">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Honest answers about the process, ownership, turnaround, and why a dedicated website brings in more customers than social media alone.
          </p>
        </div>

        {/* Accordion list with Frosted Glass styling */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all backdrop-blur-xl ${
                  isOpen
                    ? 'bg-white border-rose-300 shadow-md shadow-rose-500/10'
                    : 'bg-white/85 border-rose-100 hover:border-rose-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-rose-100 text-rose-600' : 'bg-rose-50 text-slate-500'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-rose-600' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Quick Ask Prompt with Frosted Glassmorphism */}
        <div className="mt-12 p-6 bg-white/90 rounded-3xl border border-rose-200/80 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-rose-500/5">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific question about your salon, clinic, or cafe?</div>
              <div className="text-xs text-slate-600">Ask us directly on WhatsApp—we reply promptly within business hours.</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%20Sonia%2C%20I%20have%20a%20question%20about%20getting%20a%20website%20for%20my%20business`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold text-xs rounded-xl transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
