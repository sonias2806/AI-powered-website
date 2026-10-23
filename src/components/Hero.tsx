import React from 'react';
import { ArrowRight, Eye, Smartphone, Zap, MessageSquare, ShieldCheck, Globe2, Sparkles } from 'lucide-react';
import { ASSETS, HERO_CONTENT, CONTACT_CONFIG } from '../data/siteData';

interface HeroProps {
  onOpenConsultation: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onViewWork }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Radiant Multi-Color Ambient Spotlights (21st.dev style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Central Warm Sunset Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[480px] bg-gradient-to-b from-amber-400/35 via-rose-500/30 to-transparent rounded-full blur-[130px]" />
        {/* Left Orchid & Purple Beam */}
        <div className="absolute -top-12 left-10 w-[420px] h-[420px] bg-purple-500/30 rounded-full blur-[130px]" />
        {/* Right Hot Pink & Cyan Beam */}
        <div className="absolute -top-16 right-10 w-[440px] h-[440px] bg-gradient-to-bl from-pink-500/35 via-cyan-400/20 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* National & International Trust Marker (21st.dev pill with glowing pulse) */}
        <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/85 border border-rose-200 shadow-md shadow-rose-500/10 text-xs font-medium text-slate-700 mb-6 backdrop-blur-xl">
          <span className="flex items-center gap-1.5 text-rose-600 font-bold">
            <Globe2 className="w-3.5 h-3.5 text-rose-500 animate-spin-slow" />
            Global &amp; National Web Studio
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-700 font-medium">Bespoke Architecture</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-700 font-medium">Handcrafted Human Polish</span>
        </div>

        {/* Headline with award-winning iridescent gradient accent */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-slate-900 tracking-tight max-w-4xl text-balance leading-[1.12]">
          Your Business Deserves a Website That{' '}
          <span className="gradient-text-rainbow">
            Wins Customers.
          </span>
        </h1>

        {/* Supporting text tailored for National & International clients */}
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mt-5 mb-8 text-balance font-normal leading-relaxed">
          {HERO_CONTENT.supportingText}
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary CTA button */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 hover:opacity-95 text-white px-7 py-3.5 rounded-xl shadow-xl shadow-rose-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{HERO_CONTENT.primaryCta}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.4]" />
          </button>

          {/* Secondary CTA button */}
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm bg-white/90 text-slate-800 hover:text-rose-600 hover:bg-white border border-rose-200 px-7 py-3.5 rounded-xl backdrop-blur-xl transition-all shadow-md shadow-rose-500/10 hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4 text-rose-500" />
            <span>{HERO_CONTENT.secondaryCta}</span>
          </button>
        </div>

        {/* Clean supporting value signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-xs font-semibold text-slate-600">
          {HERO_CONTENT.subValuePoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Visual Showcase Card with Multi-Hue Glowing Rim */}
        <div className="relative w-full mt-12">
          {/* Luminous colorful aura behind frame */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/35 via-rose-500/30 to-purple-500/35 rounded-3xl blur-2xl opacity-90" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-2xl border border-white/90 shadow-[0_25px_60px_rgba(244,63,94,0.15)] p-2.5 sm:p-4 text-left">
            {/* Minimalist Browser Navigation Strip */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-rose-50/70 rounded-xl mb-3 border border-rose-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-mono-num px-3 py-1 bg-white rounded-lg border border-rose-200/60 shadow-xs">
                <span className="text-emerald-600 text-[10px] font-bold">● SSL</span>
                <span className="text-slate-900 font-semibold">yourbrand.com</span>
                <span className="text-slate-500 text-[11px] hidden sm:inline">· Global CDN Ready</span>
              </div>
              <div className="text-xs text-rose-600 font-bold hidden sm:flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>National &amp; International</span>
              </div>
            </div>

            {/* Showcase Image with Fallback */}
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-100">
              <img
                src={ASSETS.heroShowcase}
                alt="Modern responsive website designs for salons, clinics, cafes, and growing businesses displayed on laptop and smartphone"
                className="w-full h-auto max-h-[520px] object-cover object-center rounded-xl"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Trust Strip */}
              <div className="absolute bottom-3 left-3 right-3 hidden sm:flex items-center justify-between bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-rose-100 text-xs shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                    <Smartphone className="w-4 h-4 text-rose-500" />
                    <span>80%+ Worldwide mobile browsing optimized</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Sub-2s global CDN loading speed</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>100% full ownership of domain &amp; code</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Key Value Anchors below the Hero with colorful rim highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full text-left">
          <div className="p-4.5 rounded-2xl bg-white/90 border border-amber-200/80 backdrop-blur-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs mb-1">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Rapid Turnaround</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We build clean, modern, modular code without agency bloat, delivering completed custom websites in 3 to 5 business days.
            </p>
          </div>

          <div className="p-4.5 rounded-2xl bg-white/90 border border-purple-200/80 backdrop-blur-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-purple-700 font-bold text-xs mb-1">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Personalised Human Review</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every headline, button layout, image crop, and mobile tap target is personally checked, tuned, and tested by our founder.
            </p>
          </div>

          <div className="p-4.5 rounded-2xl bg-white/90 border border-emerald-200/80 backdrop-blur-xl shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs mb-1">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Direct WhatsApp &amp; Inquiries</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              High-converting contact options with pre-filled WhatsApp chat and seamless booking forms that convert visitors into paying clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
