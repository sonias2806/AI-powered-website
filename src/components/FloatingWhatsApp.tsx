import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      label: 'Salon & Spa Website Enquiry',
      text: 'Hi Aura Web Studio! I run a salon/spa and would like to enquire about getting a modern website.'
    },
    {
      label: 'Clinic / Dental Website Enquiry',
      text: 'Hi Aura Web Studio! I run a clinic and would like to know more about your website package.'
    },
    {
      label: 'Cafe / Restaurant Website Enquiry',
      text: 'Hi Aura Web Studio! I run a cafe/food business and want to discuss an online menu website.'
    },
    {
      label: 'General Website Consultation',
      text: 'Hi Aura Web Studio! I would like to schedule a free website consultation for my business.'
    }
  ];

  const handleSendPrompt = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Chat Popover */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-[#0d1024]/95 border border-white/20 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl text-white mb-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                <MessageSquare className="w-4 h-4 fill-emerald-500/20" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Aura Web Studio</div>
                <div className="text-[10px] text-emerald-400 font-medium">● WhatsApp Direct Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Choose a quick question or send a custom message:
          </p>

          <div className="space-y-2">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(p.text)}
                className="w-full text-left p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-white/10 text-xs text-slate-200 hover:text-amber-300 flex items-center justify-between gap-2 transition-all hover:border-amber-400/40"
              >
                <span className="leading-snug">{p.label}</span>
                <Send className="w-3 h-3 text-amber-400 shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-white/10 text-center">
            <span className="text-[10px] text-slate-400">
              Free 10-minute discovery chat · No commitment
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button with Animated Glowing Rings */}
      <div className="relative">
        {/* Glow pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-md animate-pulse" aria-hidden="true" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95 border border-emerald-300/40"
          aria-label="Direct WhatsApp Consultation"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-slate-950/20" />
        </button>
      </div>
    </div>
  );
};
