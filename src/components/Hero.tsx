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
        {/* Central Solar Gold Spotlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[480px] bg-gradient-to-b from-amber-500/25 via-rose-500/20 to-transparent rounded-full blur-[130px]" />
        {/* Left Royal Indigo Beam */}
        <div className="absolute -top-12 left-10 w-[420px] h-[420px] bg-indigo-600/25 rounded-full blur-[130px]" />
        {/* Right Hot Pink & Cyan Beam */}
        <div className="absolute -top-16 right-10 w-[440px] h-[440px] bg-gradient-to-bl from-pink-500/25 via-cyan-500/15 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* National & International Trust Marker (21st.dev pill with glowing pulse) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/35 shadow-lg shadow-amber-950/20 text-xs font-medium text-slate-300 mb-6 backdrop-blur-xl">
          <span className="flex items-center gap-1.5 text-amber-300 font-bold">
            <Globe2 className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            Global &amp; National Web Studio
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Bespoke Architecture</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Handcrafted Human Polish</span>
        </div>

        {/* Headline with award-winning iridescent gradient accent */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight max-w-4xl text-balance leading-[1.12]">
          Your Business Deserves a Website That{' '}
          <span className="gradient-text-rainbow">
            Wins Customers.
          </span>
        </h1>

        {/* Supporting text tailored for National & International clients */}
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mt-5 mb-8 text-balance font-normal leading-relaxed drop-shadow-sm">
          {HERO_CONTENT.supportingText}
        </p>

        {/* Dual CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary CTA button */}
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 px-7 py-3.5 rounded-xl shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{HERO_CONTENT.primaryCta}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.4]" />
          </button>

          {/* Secondary CTA button */}
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium text-sm bg-slate-900/80 text-white hover:text-amber-300 hover:bg-slate-800/90 border border-white/15 hover:border-amber-400/40 px-7 py-3.5 rounded-xl backdrop-blur-xl transition-all shadow-lg shadow-black/40 hover:-translate-y-0.5"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>{HERO_CONTENT.secondaryCta}</span>
          </button>
        </div>

        {/* Clean supporting value signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-xs text-slate-300">
          {HERO_CONTENT.subValuePoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Visual Showcase Card with Multi-Hue Glowing Rim */}
        <div className="relative w-full mt-12">
          {/* Luminous colorful aura behind frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 via-rose-500/25 to-indigo-500/30 rounded-3xl blur-xl opacity-80" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-2xl bg-[#0e1124]/90 backdrop-blur-2xl border border-white/15 shadow-2xl p-2.5 sm:p-4 text-left">
            {/* Minimalist Browser Navigation Strip */}
            <div className="flex items-center justify-between px-3.5 py-2 bg-[#080a16] rounded-xl mb-3 border border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono-num px-3 py-1 bg-slate-900/90 rounded-lg border border-white/10 shadow-inner">
                <span className="text-emerald-400 text-[10px]">● SSL</span>
                <span className="text-slate-200 font-medium">yourbrand.com</span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">· Global CDN Ready</span>
              </div>
              <div className="text-xs text-amber-300 font-medium hidden sm:flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>National &amp; International</span>
              </div>
            </div>

            {/* Showcase Image with Fallback */}
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-950">
              <img
                src={ASSETS.heroShowcase}
                alt="Modern responsive website designs for salons, clinics, cafes, and growing businesses displayed on laptop and smartphone"
                className="w-full h-auto max-h-[520px] object-cover object-center rounded-xl"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Trust Strip */}
              <div className="absolute bottom-3 left-3 right-3 hidden sm:flex items-center justify-between bg-slate-950/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/15 text-xs shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Smartphone className="w-4 h-4 text-amber-400" />
                    <span>80%+ Worldwide mobile browsing optimized</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Sub-2s global CDN loading speed</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span>100% full ownership of domain &amp; code</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Key Value Anchors below the Hero with colorful rim highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-400/30 backdrop-blur-xl shadow-lg shadow-amber-950/20 hover:border-amber-400/50 transition-all">
            <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs mb-1">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Rapid Turnaround</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We build clean, modern, modular code without agency bloat, delivering completed custom websites in 3 to 5 business days.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-indigo-400/30 backdrop-blur-xl shadow-lg shadow-indigo-950/20 hover:border-indigo-400/50 transition-all">
            <div className="flex items-center gap-2 text-indigo-300 font-semibold text-xs mb-1">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Personalised Human Review</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every headline, button layout, image crop, and mobile tap target is personally checked, tuned, and tested by our lead craftsman.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-400/30 backdrop-blur-xl shadow-lg shadow-emerald-950/20 hover:border-emerald-400/50 transition-all">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs mb-1">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp &amp; Inquiries</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-converting contact options with pre-filled WhatsApp chat and seamless booking forms that convert visitors into paying clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
