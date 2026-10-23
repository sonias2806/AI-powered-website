import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      label: 'Salon & Spa Website Enquiry',
      text: 'Hi Sonia! I run a salon/spa and would like to enquire about getting a modern website.'
    },
    {
      label: 'Clinic / Dental Website Enquiry',
      text: 'Hi Sonia! I run a clinic and would like to know more about your website package.'
    },
    {
      label: 'Cafe / Restaurant Website Enquiry',
      text: 'Hi Sonia! I run a cafe/food business and want to discuss an online menu website.'
    },
    {
      label: 'General Website Consultation',
      text: 'Hi Sonia! I would like to schedule a free website consultation for my business.'
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
        <div className="absolute bottom-16 right-0 w-80 bg-white/95 border border-rose-200 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl text-slate-900 mb-2 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between pb-3 border-b border-rose-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Aura Web Studio · Sonia</div>
                <div className="text-[10px] text-emerald-600 font-bold">● WhatsApp Direct Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-rose-50 transition-colors"
              aria-label="Close WhatsApp chat popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 leading-relaxed">
            Choose a quick question or send a message directly to Sonia:
          </p>

          <div className="space-y-2">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(p.text)}
                className="w-full text-left p-3 rounded-xl bg-rose-50/70 hover:bg-rose-100/90 border border-rose-100 text-xs text-slate-800 hover:text-rose-700 flex items-center justify-between gap-2 transition-all hover:border-rose-300 font-medium"
              >
                <span className="leading-snug">{p.label}</span>
                <Send className="w-3 h-3 text-rose-500 shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-rose-100 text-center">
            <span className="text-[10px] text-slate-500 font-medium">
              Free 10-minute discovery chat · No commitment
            </span>
          </div>
        </div>
      )}

      {/* Floating Action Button with Animated Glowing Rings */}
      <div className="relative">
        {/* Glow pulse ring */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/30 blur-md animate-pulse" aria-hidden="true" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 border border-white/50"
          aria-label="Direct WhatsApp Consultation"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
