import React from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/siteData';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-white/10">
      {/* Dynamic Colorful Aurora Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-28 w-[580px] h-[580px] bg-gradient-to-bl from-amber-500/20 via-rose-500/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-28 w-[520px] h-[520px] bg-gradient-to-tr from-indigo-600/22 via-cyan-500/15 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-xl shadow-lg shadow-amber-950/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Transparent Pricing in INR &amp; USD · No Hidden Lock-in</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            Fair, Upfront Packages for National &amp; International Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed drop-shadow-sm">
            One-time project investment. No monthly retainers, no agency markups, and zero hidden lock-in fees.
          </p>
        </div>

        {/* 3 Pricing Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {PRICING_PACKAGES.map((pkg) => {
            if (pkg.isPopular) {
              return (
                <div
                  key={pkg.id}
                  className="rounded-3xl p-[2px] bg-gradient-to-b from-amber-400 via-rose-500 to-indigo-500 shadow-2xl shadow-amber-950/40 relative lg:-translate-y-2 flex flex-col"
                >
                  <div className="rounded-[22px] bg-[#0d1024]/95 backdrop-blur-2xl p-7 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden">
                    {/* Top shine */}
                    <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-amber-400/15 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      {/* Popular Badge */}
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>{pkg.badge || 'Most Popular Plan'}</span>
                      </div>

                      <div className="flex items-center justify-between mb-3 mt-1">
                        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                        <span className="flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-400/30">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{pkg.deliveryTime}</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-5 min-h-[36px]">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-white/10">
                        <span className="text-3xl sm:text-4xl font-syne font-extrabold text-white font-mono-num tabular-nums">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-amber-200 font-medium">/ one-time investment</span>
                      </div>

                      {/* Ideal for note */}
                      <div className="text-xs text-slate-300 mb-5 italic">
                        <span className="font-bold text-amber-300 not-italic">Ideal for: </span>
                        {pkg.idealFor}
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2.5 text-xs text-slate-200 mb-7">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectPackage(`${pkg.name} (${pkg.price})`)}
                      className="w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-xl shadow-amber-950/30 transition-all hover:-translate-y-0.5 relative z-10"
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={pkg.id}
                className="p-7 sm:p-8 rounded-3xl bg-[#0c0f20]/85 border border-white/15 backdrop-blur-xl hover:border-white/30 transition-all flex flex-col justify-between shadow-xl shadow-black/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <span className="flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      <Clock className="w-3 h-3 text-amber-400" />
                      <span>{pkg.deliveryTime}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 min-h-[36px]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-white/10">
                    <span className="text-3xl sm:text-4xl font-syne font-extrabold text-white font-mono-num tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400">/ one-time investment</span>
                  </div>

                  {/* Ideal for note */}
                  <div className="text-xs text-slate-300 mb-5 italic">
                    <span className="font-semibold text-slate-200 not-italic">Ideal for: </span>
                    {pkg.idealFor}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectPackage(`${pkg.name} (${pkg.price})`)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all hover:-translate-y-0.5"
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-200 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              All packages include 100% full source code ownership, mobile optimization, and direct founder support.
            </span>
          </div>
          <span className="text-slate-400 text-center sm:text-right">
            Have a custom requirement or multi-branch setup? Enquire below for a tailored quote.
          </span>
        </div>
      </div>
    </section>
  );
};
