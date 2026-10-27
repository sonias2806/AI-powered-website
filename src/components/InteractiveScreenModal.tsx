import React, { useState } from 'react';
import { X, Laptop, Smartphone, ExternalLink, Sparkles, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { LumiereScreen } from './LumiereScreen';
import { PORTFOLIO, CONTACT_INFO } from '../data/siteData';

interface InteractiveScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  conceptId?: string;
  onSelectConceptForContact?: (conceptName: string) => void;
}

export const InteractiveScreenModal: React.FC<InteractiveScreenModalProps> = ({
  isOpen,
  onClose,
  conceptId = 'lumiere-salon-spa',
  onSelectConceptForContact
}) => {
  const [device, setDevice] = useState<'laptop' | 'mobile'>('laptop');
  const [activeConcept, setActiveConcept] = useState<string>(conceptId || 'lumiere-salon-spa');

  if (!isOpen) return null;

  const conceptData = PORTFOLIO.find(p => p.id === activeConcept) || PORTFOLIO[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-6xl glass-card rounded-3xl border border-white/[0.12] shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col max-h-[96vh] overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-black/40 border-b border-white/[0.08] backdrop-blur-xl gap-3">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-sm text-white tracking-tight">{conceptData.name}</span>
                <span className="text-[10px] font-mono-num font-bold text-[#00FF9D] bg-[#00FF9D]/10 px-2.5 py-0.5 rounded-full border border-[#00FF9D]/25">
                  Interactive Live Screen
                </span>
              </div>
              <span className="text-[11px] font-space text-white/50">{conceptData.location}</span>
            </div>
          </div>

          {/* Device Toggle & Close */}
          <div className="flex items-center gap-3">
            {/* Concept switcher dropdown */}
            <select
              value={activeConcept}
              onChange={(e) => setActiveConcept(e.target.value)}
              className="bg-white/[0.04] border border-white/[0.1] text-xs font-space font-medium text-white px-3 py-1.5 rounded-xl outline-none focus:border-white/30 transition-colors"
            >
              {PORTFOLIO.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#0b0817] text-white">
                  {p.name}
                </option>
              ))}
            </select>

            {/* Device Switcher */}
            <div className="flex items-center bg-white/[0.04] p-1 rounded-xl border border-white/[0.08]">
              <button
                onClick={() => setDevice('laptop')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-space font-semibold transition-all ${
                  device === 'laptop'
                    ? 'bg-gradient-to-r from-[var(--theme-accent-1)] to-[var(--theme-accent-2)] text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">MacBook</span>
              </button>
              <button
                onClick={() => setDevice('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-space font-semibold transition-all ${
                  device === 'mobile'
                    ? 'bg-gradient-to-r from-[var(--theme-accent-1)] to-[var(--theme-accent-2)] text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">iPhone 15</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] transition-colors"
              title="Close Simulator"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-black/60 relative">
          <div className="absolute inset-0 bg-radial from-white/[0.02] to-transparent pointer-events-none" />
          {device === 'laptop' ? (
            /* Laptop Frame */
            <div className="w-full max-w-5xl rounded-2xl bg-black/60 border border-white/[0.12] shadow-2xl overflow-hidden relative z-10">
              <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono-num text-[var(--theme-accent-1)] bg-black/50 px-4 py-0.5 rounded-full border border-white/[0.08]">
                  https://{activeConcept.includes('lumiere') ? 'lumiere-flagship.com' : `${activeConcept}.com`}
                </div>
                <div className="text-[11px] font-mono-num text-[#00FF9D] font-bold">Responsive 1440px · SSL</div>
              </div>

              <div className="h-[520px] overflow-y-auto bg-[#070512]">
                {activeConcept.includes('lumiere') ? (
                  <LumiereScreen deviceMode="desktop" />
                ) : (
                  <div className="p-8 text-center space-y-4">
                    <img
                      src={conceptData.image}
                      alt={conceptData.altText}
                      className="max-h-72 w-full object-cover rounded-2xl mx-auto shadow-xl border border-white/[0.08]"
                    />
                    <h3 className="text-2xl font-syne font-bold text-white">{conceptData.name}</h3>
                    <p className="text-sm font-space text-slate-300 max-w-md mx-auto">{conceptData.description}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Smartphone Frame */
            <div className="relative w-[340px] sm:w-[380px] rounded-[44px] bg-black/80 p-3 shadow-2xl border-4 border-white/[0.15] relative z-10">
              <div className="relative mx-auto w-24 h-4 bg-black rounded-full mb-2 flex items-center justify-center border border-white/[0.08]">
                <div className="w-2 h-2 rounded-full bg-[#111] mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" />
              </div>

              <div className="h-[580px] overflow-y-auto bg-[#070512] rounded-2xl scrollbar-none">
                {activeConcept.includes('lumiere') ? (
                  <LumiereScreen deviceMode="mobile" />
                ) : (
                  <div className="p-4 text-center space-y-3">
                    <img
                      src={conceptData.image}
                      alt={conceptData.altText}
                      className="h-48 w-full object-cover rounded-xl shadow-lg border border-white/[0.08]"
                    />
                    <h3 className="text-lg font-syne font-bold text-white">{conceptData.name}</h3>
                    <p className="text-xs font-space text-slate-300">{conceptData.description}</p>
                  </div>
                )}
              </div>

              <div className="w-28 h-1 bg-white/20 rounded-full mx-auto mt-2" />
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="p-4 bg-black/40 border-t border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-space">
          <div className="text-[#cbd5e1] text-center sm:text-left">
            <span>Like how this website feels? We can deploy your branded version in </span>
            <strong className="text-[var(--theme-accent-1)] font-bold">24 Hours</strong>.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => {
                if (onSelectConceptForContact) onSelectConceptForContact(conceptData.name);
                onClose();
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-[var(--theme-accent-1)] to-[var(--theme-accent-2)] hover:shadow-lg text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-105 inline-flex items-center gap-1.5 specular-shine"
            >
              <span>Get a Website Like This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
