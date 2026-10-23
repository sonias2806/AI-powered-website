import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: 'Get 24-hr Flagship Quote', text: 'Hi AURA LUXE! I want to get a digital flagship quote for our salon and spa in 24 hours.' },
    { label: 'Salon & Spa Flagship Inquiry', text: 'Hi AURA LUXE! I saw the Lumière Salon and Spa flagship preview and want a bespoke digital flagship for our brand.' },
    { label: 'Commission Bespoke Flagship', text: 'Hi AURA LUXE! I would like to consult on launching our 24-hour luxury web experience.' }
  ];

  const handleSendPrompt = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Quick Chat Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-[#0f0c22]/98 backdrop-blur-2xl border border-[#2e2354] rounded-3xl p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-white mb-2 font-space">
          <div className="flex items-center justify-between pb-3 border-b border-[#251d45] mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF9D]" />
              </span>
              <div>
                <div className="text-xs font-bold text-white font-syne">AURA LUXE Desk</div>
                <div className="text-[10px] text-[#00FF9D] font-mono-num">Online · Replies in ~10 mins</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#94a3b8] hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#cbd5e1] mb-3 leading-relaxed">
            Select a quick query to start a direct consultation:
          </p>

          <div className="space-y-2">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendPrompt(p.text)}
                className="w-full text-left p-2.5 rounded-xl bg-[#14102c] hover:bg-[#1e1740] border border-[#2e2354] text-xs text-[#cbd5e1] hover:text-white flex items-center justify-between gap-2 transition-all hover:border-[#FFB800]/40"
              >
                <span className="leading-snug">{p.label}</span>
                <Send className="w-3 h-3 text-[#FFB800] shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-[#251d45] text-center">
            <span className="text-[10px] text-[#94a3b8] font-mono-num">
              100% Free · No Obligation
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00FF9D] via-[#00f5d4] to-[#38BDF8] text-black flex items-center justify-center shadow-[0_10px_35px_rgba(0,255,157,0.4)] hover:shadow-[0_15px_45px_rgba(0,255,157,0.6)] hover:scale-110 active:scale-95 transition-all group"
        aria-label="Direct WhatsApp Consultation"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FFB800] rounded-full border-2 border-[#08070e] animate-pulse" />
        <MessageSquare className="w-6 h-6 fill-current group-hover:rotate-6 transition-transform" />
      </button>
    </div>
  );
};
