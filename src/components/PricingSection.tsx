import React, { useState } from 'react';
import { Check, Zap, Plus, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_TIERS } from '../data/siteData';
import confetti from 'canvas-confetti';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addonsList = [
    { id: 'domain', name: 'Custom Domain (.in or .com registration & DNS setup)', price: 1200 },
    { id: 'multilang', name: 'Telugu & English Dual Language Switcher', price: 2500 },
    { id: 'maps', name: 'Google Business Profile verification & ranking optimization', price: 1500 },
    { id: 'catalog', name: 'Online Product Catalog / Digital Menu with WhatsApp Checkout', price: 3500 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const calculateAddonsTotal = () => {
    return selectedAddons.reduce((sum, id) => {
      const match = addonsList.find(a => a.id === id);
      return sum + (match ? match.price : 0);
    }, 0);
  };

  const handleSelectWithConfetti = (packageName: string) => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FFB800', '#EC4899', '#8B5CF6', '#00FF9D']
      });
    } catch {
      // safe fallback
    }
    onSelectPackage(packageName);
  };

  return (
    <section id="pricing" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Background ambient lighting in Solar Gold and Electric Fuchsia */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#FFB800]/12 via-[#EC4899]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4 shadow-lg shadow-[#FFB800]/10">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">TRANSPARENT 24H INVESTMENT</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">ZERO LOCK-IN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Website Packages</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Upfront fixed pricing engineered for Hyderabad's salons and spas, jewelers, realtors, and gyms. Complete client code ownership, no hidden monthly lock-ins.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl backdrop-blur-2xl ${
                tier.isPopular
                  ? 'bg-[#120e29]/95 border-2 border-[#FFB800] lg:-translate-y-3 shadow-[0_25px_60px_rgba(255,184,0,0.25)]'
                  : 'bg-[#0f0c22]/90 border border-[#2e2354] hover:border-[#FFB800]/40'
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white text-[10px] font-space font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg shadow-[#FFB800]/25">
                  Most Popular For Local Growth
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-syne font-bold text-white">{tier.name}</h3>
                  <span className="text-xs font-mono-num text-[#00FF9D] bg-[#00FF9D]/10 px-2.5 py-1 rounded-lg border border-[#00FF9D]/30 font-bold">
                    {tier.deliveryTime}
                  </span>
                </div>

                <p className="text-xs text-[#cbd5e1] min-h-[36px] leading-relaxed mb-6 font-space">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#251d45]">
                  <span className="text-4xl sm:text-5xl font-syne font-extrabold text-white font-mono-num">
                    {tier.price}
                  </span>
                  <span className="text-xs text-[#94a3b8] font-space">/ one-time fee</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 text-xs sm:text-sm text-[#cbd5e1] mb-8 font-space">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#00FF9D]/20 text-[#00FF9D] flex items-center justify-center shrink-0 mt-0.5 border border-[#00FF9D]/30">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectWithConfetti(`${tier.name} (${tier.price})`)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-space font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  tier.isPopular
                    ? 'bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white shadow-lg shadow-[#FFB800]/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-[1.02]'
                    : 'bg-[#171332] text-white hover:bg-[#251d4d] border border-[#34275f]'
                }`}
              >
                <span>Select {tier.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Add-on Calculator Section */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0f0c22]/90 border border-[#2e2354] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#251d45] pb-4">
            <div>
              <h4 className="text-lg font-syne font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Optional Add-On Modules</span>
              </h4>
              <p className="text-xs text-[#cbd5e1] font-space mt-1">
                Customize your website with optional domain registration, bilingual toggles, or digital catalogs.
              </p>
            </div>

            {selectedAddons.length > 0 && (
              <div className="flex items-center gap-2 bg-[#171332] px-3.5 py-1.5 rounded-xl border border-[#FFB800]/40 text-xs font-mono-num shadow-inner">
                <span className="text-[#cbd5e1]">Add-ons Total:</span>
                <span className="font-bold text-[#FFB800]">
                  +₹{calculateAddonsTotal().toLocaleString('en-IN')}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {addonsList.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#1b153b] border-[#FFB800] text-white shadow-md shadow-[#FFB800]/15'
                      : 'bg-[#120e26] border-[#251d45] text-[#94a3b8] hover:border-[#FFB800]/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#FFB800] border-[#FFB800] text-black' : 'border-[#43356e]'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-space leading-snug">{addon.name}</span>
                  </div>
                  <span className="text-xs font-mono-num font-bold text-[#00FF9D] shrink-0">
                    +₹{addon.price.toLocaleString('en-IN')}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-space text-[#cbd5e1]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00FF9D]" />
              <span>All packages include 100% full source code ownership and 24h SLA.</span>
            </div>
            <a
              href="#contact"
              className="text-[#FFB800] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
