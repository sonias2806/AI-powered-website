import React, { useState } from 'react';
import { Laptop, Smartphone, ExternalLink, Maximize2, RotateCcw, ShieldCheck, Sparkles, X } from 'lucide-react';
import { LumiereScreen } from './LumiereScreen';
import { ASSETS, PORTFOLIO } from '../data/siteData';

interface InteractiveDevicePreviewProps {
  initialConcept?: string;
  onOpenConsultation?: () => void;
}

export const InteractiveDevicePreview: React.FC<InteractiveDevicePreviewProps> = ({
  initialConcept = 'lumiere-salon-spa',
  onOpenConsultation
}) => {
  const [device, setDevice] = useState<'laptop' | 'mobile'>('laptop');
  const [selectedConcept, setSelectedConcept] = useState<string>(initialConcept);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const concepts = [
    { id: 'lumiere-salon-spa', name: 'Lumière Salon and Spa', domain: 'lumiere-hyderabad.in', industry: 'Salon and Spa' },
    { id: 'shrimati-jewellery', name: 'Shrimati Heritage', domain: 'shrimati-jewels.com', industry: 'Jewellery' },
    { id: 'primenest-residences', name: 'PrimeNest Residences', domain: 'primenest-gachibowli.in', industry: 'Real Estate' },
    { id: 'apex-fitness', name: 'Apex Elite Fitness', domain: 'apexfitness-hyd.com', industry: 'Gym & Fitness' }
  ];

  const currentConcept = concepts.find(c => c.id === selectedConcept) || concepts[0];

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Device & Concept Switcher Control Bar */}
      <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 mb-4 p-2.5 bg-[#0f0b1f]/90 backdrop-blur-xl rounded-2xl border border-[#2a1e4a]">
        {/* Concept Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setSelectedConcept(concept.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-space font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedConcept === concept.id
                  ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-md font-bold'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[#1b1535]'
              }`}
            >
              {concept.name}
            </button>
          ))}
        </div>

        {/* Device Viewport Toggle (Laptop vs Smartphone) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#070512] p-1 rounded-xl border border-[#2a1e4a]">
            <button
              onClick={() => setDevice('laptop')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-space font-medium transition-all cursor-pointer ${
                device === 'laptop'
                  ? 'bg-[#1e1538] text-[var(--theme-primary)] shadow-xs font-bold'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
              title="MacBook Desktop Viewport"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Laptop</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-space font-medium transition-all cursor-pointer ${
                device === 'mobile'
                  ? 'bg-[#1e1538] text-[var(--theme-primary)] shadow-xs font-bold'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
              title="iPhone Mobile Viewport"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          <button
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 bg-[#0b1326] hover:bg-[#222a3d] text-[#bec8d2] hover:text-white rounded-lg border border-[#222a3d] transition-colors"
            title="Expand to Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DEVICE FRAME CONTAINER */}
      <div className="relative w-full flex justify-center items-center">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#0ea5e9]/10 rounded-3xl blur-3xl pointer-events-none" />

        {device === 'laptop' ? (
          /* ================= LAPTOP FRAME ================= */
          <div className="relative w-full max-w-5xl rounded-2xl bg-[#131b2e] border border-[#2d3449] shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300">
            {/* Top Browser Chrome Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#171f33] border-b border-[#2d3449]">
              {/* Traffic Lights */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* URL Address Pill */}
              <div className="flex items-center gap-2 bg-[#0b1326] px-4 py-1 rounded-full text-xs text-[#bec8d2] border border-[#222a3d] max-w-sm w-full mx-4 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
                <span className="font-mono text-[11px] text-[#dae2fd]">{currentConcept.domain}</span>
                <span className="text-[10px] text-[#4edea3] bg-[#00a572]/20 px-1.5 py-0.2 rounded font-sans">SSL Active</span>
              </div>

              {/* Window controls */}
              <div className="flex items-center gap-2 text-[#88929b]">
                <button onClick={handleRefresh} className="hover:text-white transition-colors" title="Reload Frame">
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Browser Viewport Canvas */}
            <div className="relative h-[560px] overflow-y-auto bg-[#0b1326]">
              {selectedConcept === 'lumiere-salon-cafe' ? (
                <LumiereScreen key={refreshKey} deviceMode="desktop" />
              ) : (
                <ConceptScreenFallback conceptId={selectedConcept} />
              )}
            </div>

            {/* Laptop Bottom Chin */}
            <div className="h-4 bg-[#1a233a] border-t border-[#222a3d] flex items-center justify-center">
              <div className="w-16 h-1 bg-[#2d3449] rounded-full" />
            </div>
          </div>
        ) : (
          /* ================= MOBILE SMARTPHONE FRAME ================= */
          <div className="relative w-[340px] sm:w-[380px] rounded-[48px] bg-[#171f33] p-3.5 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border-4 border-[#2d3449] transition-all duration-300">
            {/* Dynamic Island Notch */}
            <div className="relative mx-auto w-28 h-5 bg-black rounded-full mb-2 flex items-center justify-center z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111] mr-3" />
              <div className="w-2 h-2 rounded-full bg-[#0a2540]" />
            </div>

            {/* Mobile Browser Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#0b1326] rounded-t-2xl border-b border-[#222a3d] text-[11px] text-[#bec8d2]">
              <span className="font-mono truncate">{currentConcept.domain}</span>
              <button onClick={handleRefresh} className="text-[#88929b] hover:text-white">
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Screen Inner Viewport */}
            <div className="relative h-[620px] overflow-y-auto bg-[#0b1326] rounded-b-2xl scrollbar-none">
              {selectedConcept === 'lumiere-salon-cafe' ? (
                <LumiereScreen key={refreshKey} deviceMode="mobile" />
              ) : (
                <ConceptScreenFallback conceptId={selectedConcept} />
              )}
            </div>

            {/* Mobile Home Bar Indicator */}
            <div className="w-32 h-1 bg-[#88929b]/40 rounded-full mx-auto mt-3" />
          </div>
        )}
      </div>

      {/* Live Badge and Callout */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-[#bec8d2]">
        <span className="flex items-center gap-1.5 text-[#4edea3]">
          <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
          Live Interactive Simulator
        </span>
        <span>·</span>
        <span>Try booking an appointment or exploring menus above</span>
        <span>·</span>
        <button
          onClick={onOpenConsultation}
          className="text-[#89ceff] hover:underline font-semibold"
        >
          Want a site like this? Request in 24 Hours →
        </button>
      </div>

      {/* FULLSCREEN PREVIEW MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col p-4 md:p-8 animate-fadeIn">
          <div className="flex items-center justify-between pb-4 border-b border-[#2d3449] max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg text-white">{currentConcept.name}</span>
              <span className="text-xs text-[#89ceff] bg-[#0ea5e9]/20 px-2 py-0.5 rounded">Full Interactive Concept</span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 text-stone-400 hover:text-white rounded-lg bg-[#171f33] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 max-w-6xl mx-auto w-full overflow-hidden mt-4 rounded-xl border border-[#2d3449]">
            {selectedConcept === 'lumiere-salon-cafe' ? (
              <LumiereScreen isModal={true} onClose={() => setIsFullscreen(false)} />
            ) : (
              <ConceptScreenFallback conceptId={selectedConcept} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Fallback preview screen for the other selected concepts
const ConceptScreenFallback: React.FC<{ conceptId: string }> = ({ conceptId }) => {
  const item = PORTFOLIO.find(p => p.id === conceptId) || PORTFOLIO[1];

  return (
    <div className="p-6 md:p-10 bg-[#0f172a] text-white min-h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">{item.category}</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-1 text-white">{item.name}</h2>
            <p className="text-xs text-slate-400">{item.location}</p>
          </div>
          <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
            {item.metrics}
          </span>
        </div>

        <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6">
          <img src={item.image} alt={item.altText} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.headline}</h3>
              <p className="text-sm text-slate-300 max-w-xl">{item.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {item.features.map((feat, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          Tailored for high conversions in Hyderabad's premier commercial corridors.
        </p>
        <a
          href="#contact"
          className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
        >
          Request Similar Website (24 Hours)
        </a>
      </div>
    </div>
  );
};
