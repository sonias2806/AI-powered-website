import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquare, HelpCircle } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter(f => {
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <section id="faq" className="w-full py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-grid-subtle">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#FFB800]/8 via-[#EC4899]/8 to-[#8B5CF6]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 text-xs font-space font-semibold text-[#94a3b8] uppercase tracking-widest mb-3">
            <span className="text-[#FFB800] font-bold">Transparent Answers</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Zero Tech Headaches</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Everything you need to know about getting your business website live in 2 days with hosting, deployment, and ongoing monthly care.
          </p>

          {/* Search bar with glass styling */}
          <div className="w-full max-w-md mt-7 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. mobile, domain, speed)..."
              className="w-full pl-11 pr-4 py-3.5 bg-white/[0.04] border border-white/[0.1] rounded-2xl text-xs font-space text-white placeholder:text-[#64748b] focus:border-[#FFB800] outline-none transition-colors backdrop-blur-xl shadow-lg"
            />
            <Search className="w-4 h-4 text-[#8b7ba8] absolute left-4 top-4" />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-syne font-bold text-white pr-4 tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FFB800] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed border-t border-white/[0.06] font-space">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs text-[#94a3b8] font-space">
              No questions found matching "{searchTerm}".
            </div>
          )}
        </div>

        {/* WhatsApp enquiry prompt */}
        <div className="mt-12 p-7 bg-white/[0.03] rounded-3xl border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#FFB800]/15 text-[#FFB800] flex items-center justify-center shrink-0 border border-[#FFB800]/30">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-syne font-bold text-white tracking-tight">Have a custom question or specific feature in mind?</div>
              <div className="text-xs text-[#94a3b8] font-space mt-0.5">We answer inquiries instantly on WhatsApp within 10 minutes.</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20getting%20a%20website%20for%20my%20business`}
            target="_blank"
            rel="noopener noreferrer"
            className="specular-shine inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-space font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 whitespace-nowrap shadow-lg shadow-[#FFB800]/20"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
