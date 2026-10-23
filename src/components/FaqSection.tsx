import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquare, HelpCircle } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS.filter(f => {
    const matchesCat = categoryFilter === 'all' || f.category === categoryFilter;
    const matchesSearch = f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#FFB800]/10 via-[#EC4899]/10 to-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4 shadow-lg shadow-[#FFB800]/10">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">TRANSPARENT ANSWERS</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">ZERO TECH HEADACHES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Everything you need to know about launching your digital flagship without surprises, delays, or technical jargon.
          </p>

          {/* Search bar */}
          <div className="w-full max-w-md mt-6 relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. mobile, domain, speed)..."
              className="w-full pl-10 pr-4 py-3 bg-[#14102c] border border-[#2e2354] rounded-2xl text-xs font-space text-white placeholder:text-[#64748b] focus:border-[#FFB800] outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-[#8b7ba8] absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#0f0c22]/90 rounded-2xl border border-[#2e2354] overflow-hidden transition-all duration-300 hover:border-[#FFB800]/40 backdrop-blur-2xl"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#14102c] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-syne font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FFB800] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed border-t border-[#231b45] font-space">
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
        <div className="mt-10 p-6 bg-[#0f0c22]/90 rounded-3xl border border-[#2e2354] flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center shrink-0 border border-[#FFB800]/40">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-syne font-bold text-white">Have a custom question or specific feature in mind?</div>
              <div className="text-xs text-[#94a3b8] font-space">We answer inquiries instantly on WhatsApp within 10 minutes.</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20getting%20a%20website%20for%20my%20business`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-space font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 whitespace-nowrap shadow-lg shadow-[#FFB800]/20"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
