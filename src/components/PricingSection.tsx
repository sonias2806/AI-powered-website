import React from 'react';
import { Check, ArrowRight, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/siteData';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-rose-200/50">
      {/* Dynamic Colorful Aurora Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-28 w-[580px] h-[580px] bg-gradient-to-bl from-amber-400/25 via-rose-500/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-28 w-[520px] h-[520px] bg-gradient-to-tr from-purple-500/25 via-pink-500/20 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-4 backdrop-blur-xl shadow-md shadow-rose-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Transparent Pricing in INR &amp; USD · No Hidden Lock-in</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-slate-900 tracking-tight">
            Fair, Upfront Packages for <span className="gradient-text-rainbow">National &amp; International Clients</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
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
                  className="rounded-3xl p-[2px] bg-gradient-to-b from-rose-500 via-amber-500 to-purple-600 shadow-2xl shadow-rose-500/20 relative lg:-translate-y-2 flex flex-col"
                >
                  <div className="rounded-[22px] bg-white/95 backdrop-blur-2xl p-7 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden">
                    {/* Top shine */}
                    <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-rose-50 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      {/* Popular Badge */}
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{pkg.badge || 'Most Popular Plan'}</span>
                      </div>

                      <div className="flex items-center justify-between mb-3 mt-1">
                        <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                          <Clock className="w-3 h-3 text-rose-500" />
                          <span>{pkg.deliveryTime}</span>
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 min-h-[36px]">
                        {pkg.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-rose-100">
                        <span className="text-3xl sm:text-4xl font-syne font-extrabold text-slate-900 font-mono-num tabular-nums">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-rose-600 font-semibold">/ one-time investment</span>
                      </div>

                      {/* Ideal for note */}
                      <div className="text-xs text-slate-600 mb-5 italic">
                        <span className="font-bold text-rose-700 not-italic">Ideal for: </span>
                        {pkg.idealFor}
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2.5 text-xs text-slate-700 mb-7">
                        {pkg.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => onSelectPackage(`${pkg.name} (${pkg.price})`)}
                      className="w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 hover:opacity-95 text-white shadow-xl shadow-rose-500/25 transition-all hover:-translate-y-0.5 relative z-10"
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
                className="p-7 sm:p-8 rounded-3xl bg-white/90 border border-rose-100/90 backdrop-blur-xl hover:border-rose-300 transition-all flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{pkg.deliveryTime}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 min-h-[36px]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-rose-100">
                    <span className="text-3xl sm:text-4xl font-syne font-extrabold text-slate-900 font-mono-num tabular-nums">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ one-time investment</span>
                  </div>

                  {/* Ideal for note */}
                  <div className="text-xs text-slate-600 mb-5 italic">
                    <span className="font-semibold text-slate-800 not-italic">Ideal for: </span>
                    {pkg.idealFor}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    {pkg.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectPackage(`${pkg.name} (${pkg.price})`)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-all hover:-translate-y-0.5"
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="p-5 rounded-2xl bg-white/90 border border-rose-200/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 shadow-md">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All packages include 100% full source code ownership, mobile optimization, and direct founder support.
            </span>
          </div>
          <span className="text-slate-500 text-center sm:text-right font-medium">
            Have a custom requirement or multi-branch setup? Enquire below for a tailored quote.
          </span>
        </div>
      </div>
    </section>
  );
};
