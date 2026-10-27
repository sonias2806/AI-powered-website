import React, { useState } from 'react';
import { Check, Zap, Plus, Sparkles, ArrowRight, ShieldCheck, Cloud, RefreshCw, Clock } from 'lucide-react';
import { PRICING_TIERS, MAINTENANCE_PLANS } from '../data/siteData';
import confetti from 'canvas-confetti';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState<'build' | 'maintenance'>('build');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const addonsList = [
    { id: 'domain', name: 'Premium Custom Domain Registration (.com / .in / .org) with DNS setup', price: 1200 },
    { id: 'multilang', name: 'Dual-Language Switcher (e.g. English + Regional/Spanish/French)', price: 2500 },
    { id: 'maps', name: 'Google Business Profile verification & Local Maps SEO setup', price: 1500 },
    { id: 'catalog', name: 'Digital Product / Service Menu with WhatsApp Direct Ordering', price: 3500 }
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
        particleCount: 55,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#6366F1', '#06B6D4', '#FFB800', '#00FF9D']
      });
    } catch {
      // safe fallback
    }
    onSelectPackage(packageName);
  };

  return (
    <section id="pricing" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[var(--theme-primary)]/10 via-[var(--theme-secondary)]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[var(--theme-border)] text-xs font-space font-medium text-[var(--theme-primary)] mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">2-DAY DELIVERY + MANAGED CARE</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">TRANSPARENT PRICING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">Launch &amp; Care Plans</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Every website is delivered working in 2 days with turnkey hosting &amp; deployment. Choose your 48-hour build sprint and pair it with our hassle-free monthly maintenance.
          </p>

          {/* Interactive Switcher: 2-Day Launch Sprints vs Monthly Maintenance Plans */}
          <div className="inline-flex items-center p-1.5 bg-[#0e0c1f] rounded-2xl border border-[#2a1e4a] shadow-xl mt-8">
            <button
              onClick={() => setActiveTab('build')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-space font-bold transition-all ${
                activeTab === 'build'
                  ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-md'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>2-Day Launch Packages</span>
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-space font-bold transition-all ${
                activeTab === 'maintenance'
                  ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-md'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Monthly Maintenance Plans</span>
            </button>
          </div>
        </div>

        {/* TAB 1: 2-DAY LAUNCH SPRINTS */}
        {activeTab === 'build' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl backdrop-blur-2xl ${
                  tier.isPopular
                    ? 'bg-[#120e29]/95 border-2 border-[var(--theme-primary)] lg:-translate-y-3 shadow-[0_25px_60px_rgba(0,0,0,0.5)]'
                    : 'bg-[#0f0c22]/90 border border-[#2e2354] hover:border-[var(--theme-border)]'
                }`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white text-[10px] font-space font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-syne font-bold text-white">{tier.name}</h3>
                    <span className="text-xs font-mono-num text-[#00FF9D] bg-[#00FF9D]/10 px-2.5 py-1 rounded-lg border border-[#00FF9D]/30 font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{tier.deliveryTime}</span>
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
                    <span className="text-xs text-[#94a3b8] font-space">/ one-time launch build</span>
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
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-space font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-lg hover:brightness-110 hover:scale-[1.02]'
                      : 'bg-[#171332] text-white hover:bg-[#251d4d] border border-[#34275f]'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: MONTHLY MAINTENANCE PLANS */}
        {activeTab === 'maintenance' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl backdrop-blur-2xl ${
                  plan.isPopular
                    ? 'bg-[#120e29]/95 border-2 border-[var(--theme-primary)] lg:-translate-y-3 shadow-[0_25px_60px_rgba(0,0,0,0.5)]'
                    : 'bg-[#0f0c22]/90 border border-[#2e2354] hover:border-[var(--theme-border)]'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white text-[10px] font-space font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                    Recommended Monthly Care
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-syne font-bold text-white">{plan.name}</h3>
                    <span className="text-xs font-mono-num text-[var(--theme-secondary)] bg-[var(--theme-secondary)]/10 px-2.5 py-1 rounded-lg border border-[var(--theme-secondary)]/30 font-bold flex items-center gap-1">
                      <Cloud className="w-3 h-3" />
                      <span>Hosting Included</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#cbd5e1] min-h-[36px] leading-relaxed mb-6 font-space">
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-[#251d45]">
                    <span className="text-4xl sm:text-5xl font-syne font-extrabold text-white font-mono-num">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#94a3b8] font-space">/ {plan.cadence}</span>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-[#cbd5e1] mb-8 font-space">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#00FF9D]/20 text-[#00FF9D] flex items-center justify-center shrink-0 mt-0.5 border border-[#00FF9D]/30">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectWithConfetti(`Monthly Maintenance: ${plan.name} (${plan.price}/mo)`)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-space font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-lg hover:brightness-110 hover:scale-[1.02]'
                      : 'bg-[#171332] text-white hover:bg-[#251d4d] border border-[#34275f]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Maintenance Highlight & Add-On Modules Box */}
        <div id="maintenance" className="max-w-4xl mx-auto rounded-3xl bg-[#0f0c22]/90 border border-[#2e2354] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-[#251d45] pb-4">
            <div>
              <h4 className="text-lg font-syne font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Optional Custom Add-On Modules</span>
              </h4>
              <p className="text-xs text-[#cbd5e1] font-space mt-1">
                Expand your 2-day website build with additional domain registration, bilingual switchers, or catalog features.
              </p>
            </div>

            {selectedAddons.length > 0 && (
              <div className="flex items-center gap-2 bg-[#171332] px-3.5 py-1.5 rounded-xl border border-[var(--theme-border)] text-xs font-mono-num shadow-inner">
                <span className="text-[#cbd5e1]">Add-ons Total:</span>
                <span className="font-bold text-[var(--theme-primary)]">
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
                      ? 'bg-[#1b153b] border-[var(--theme-primary)] text-white shadow-md'
                      : 'bg-[#120e26] border-[#251d45] text-[#94a3b8] hover:border-[var(--theme-border)] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[var(--theme-primary)] border-[var(--theme-primary)] text-black' : 'border-[#43356e]'
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
              <span>Full source code ownership · Working website delivered in 2 days · 99.9% uptime SLA</span>
            </div>
            <a
              href="#contact"
              className="text-[var(--theme-primary)] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>Request Custom Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
