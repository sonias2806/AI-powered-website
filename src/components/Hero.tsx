import React, { useState } from 'react';
import {
  ArrowRight,
  Eye,
  Zap,
  Smartphone,
  MessageCircle,
  Play,
  Image as ImageIcon,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/siteData';
import { InteractiveDevicePreview } from './InteractiveDevicePreview';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [viewMode, setViewMode] = useState<'photo' | 'interactive'>('photo');

  const triggerLaunchConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFB800', '#EC4899', '#8B5CF6', '#00FF9D']
      });
    } catch {
      // safe fallback
    }
    onOpenConsultation();
  };

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Top ambient radial light blooms in vibrant amber, magenta, and violet */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 left-1/4 w-[540px] h-[540px] bg-[#FFB800]/15 rounded-full blur-[150px]" />
        <div className="absolute -top-24 right-1/4 w-[480px] h-[480px] bg-[#EC4899]/18 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B5CF6]/12 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Flagship Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e24]/90 border border-[#FFB800]/30 shadow-2xl mb-8 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#FFB800] animate-ping" />
          <span className="text-xs font-space font-bold uppercase tracking-wider text-[#FFB800]">
            GLOBAL &amp; NATIONAL DIGITAL FLAGSHIP STUDIO
          </span>
          <span className="text-[#4b3d67] hidden sm:inline">|</span>
          <span className="text-[11px] font-mono-num font-bold text-[#00FF9D] hidden sm:inline">
            Zero Builder Bloat · 99+ Core Web Vitals
          </span>
        </div>

        {/* Sculpted Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold text-white tracking-tight max-w-5xl text-balance leading-[1.08]">
          Get Your Business Online In{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">
            24 Hours.
          </span>
        </h1>

        {/* Subtitle with High-End Commercial Clarity */}
        <p className="text-base sm:text-lg text-[#cbd5e1] max-w-2xl mt-6 mb-8 text-balance font-normal leading-relaxed font-space">
          Bespoke, high-velocity digital flagships custom-crafted for luxury salons and spas, aesthetic clinics, and wellness destinations. Turn national &amp; international search intent into booked high-ticket clients with zero friction.
        </p>

        {/* Action Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={triggerLaunchConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-space font-extrabold text-sm sm:text-base bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white px-8 py-4 rounded-2xl shadow-[0_10px_35px_-5px_rgba(255,184,0,0.4)] hover:shadow-[0_15px_45px_-5px_rgba(236,72,153,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Launch My 24h Flagship</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-space font-semibold text-sm sm:text-base bg-[#0e0c1f] text-white hover:text-[#FFB800] hover:bg-[#1a1436] border border-[#2a1e4a] px-7 py-4 rounded-2xl transition-all hover:scale-105"
          >
            <Eye className="w-4 h-4 text-[#FFB800]" />
            <span>Explore 3D Showcase</span>
          </a>
        </div>

        {/* Live Operational Metrics HUD Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 w-full max-w-3xl">
          <div className="p-3.5 rounded-2xl bg-[#0e0c1f]/80 backdrop-blur-md border border-[#2a1e4a] text-center">
            <div className="text-xs font-mono-num font-bold text-[#FFB800]">24-Hour</div>
            <div className="text-[11px] font-space text-[#94a3b8]">Live Delivery Guarantee</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0e0c1f]/80 backdrop-blur-md border border-[#2a1e4a] text-center">
            <div className="text-xs font-mono-num font-bold text-[#00FF9D]">0.42s</div>
            <div className="text-[11px] font-space text-[#94a3b8]">Sub-Second Mobile Load</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0e0c1f]/80 backdrop-blur-md border border-[#2a1e4a] text-center">
            <div className="text-xs font-mono-num font-bold text-white">1-Tap WhatsApp</div>
            <div className="text-[11px] font-space text-[#94a3b8]">Direct Lead Generation</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-[#0e0c1f]/80 backdrop-blur-md border border-[#2a1e4a] text-center">
            <div className="text-xs font-mono-num font-bold text-[#EC4899]">100% Ownership</div>
            <div className="text-[11px] font-space text-[#94a3b8]">Zero Recurring Lock-in</div>
          </div>
        </div>

        {/* VIEW MODE TOGGLE (Desk Showcase vs Interactive Simulator) */}
        <div className="mt-14 mb-4 flex items-center justify-center">
          <div className="inline-flex items-center p-1.5 bg-[#0e0c1f] rounded-2xl border border-[#2a1e4a] shadow-xl">
            <button
              onClick={() => setViewMode('photo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all ${
                viewMode === 'photo'
                  ? 'bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white shadow-md font-bold'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>3D Flagship Showcase Desk</span>
            </button>
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all ${
                viewMode === 'interactive'
                  ? 'bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white shadow-md font-bold'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="flex items-center gap-1.5">
                <span>Interactive Live Screen</span>
                <span className="bg-[#00FF9D] text-black text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase">
                  Try Now
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* HERO SHOWCASE DISPLAY */}
        <div className="relative w-full max-w-5xl mt-2">
          {viewMode === 'photo' ? (
            /* Photorealistic dual-device frame */
            <div className="relative overflow-hidden rounded-3xl bg-[#0c091d] border border-[#2a1e4a] shadow-[0_35px_100px_rgba(0,0,0,0.9)] p-3 sm:p-5 transition-all group">
              {/* Simulated Browser Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#070512] rounded-2xl mb-3 border border-[#231b3e]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 bg-[#0d0a1f] px-4 py-1 rounded-xl text-[#FFB800] text-xs font-mono-num border border-[#2a1e4a]">
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse" />
                  <span className="text-white font-medium">lumiere-flagship.com</span>
                  <span className="text-[10px] text-[#00FF9D] font-bold">SSL 256-BIT</span>
                </div>
                <div className="text-xs text-[#94a3b8] font-space font-medium hidden sm:block">
                  Mayfair &amp; Flagship Suites
                </div>
              </div>

              {/* The high-fidelity hero image showcase */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-[#070512] group">
                <img
                  src={ASSETS.heroMockup}
                  alt="A sleek modern workspace showing Lumière Salon and Spa website open on a high-resolution laptop screen and companion mobile smartphone on a slate desk with glowing radiant ambient edge lighting and minimalist luxury aesthetic"
                  className="w-full h-auto max-h-[580px] object-cover object-center rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Interactive button to test the screen */}
                <button
                  onClick={() => setViewMode('interactive')}
                  className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white px-6 py-3.5 rounded-2xl font-space font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                    <span>Click to Test Live Interactive Mockup</span>
                  </div>
                </button>

                {/* Floating Metric 1 */}
                <div className="absolute bottom-5 left-5 hidden md:flex items-center gap-3 bg-[#0c091d]/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-[#2a1e4a] shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#00FF9D]/20 text-[#00FF9D] flex items-center justify-center border border-[#00FF9D]/30">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-syne font-extrabold text-white leading-tight font-mono-num">
                      99.8 / 100
                    </div>
                    <div className="text-[11px] font-space text-[#94a3b8]">Google Core Web Vitals</div>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute top-5 right-5 hidden md:flex items-center gap-3 bg-[#0c091d]/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-[#2a1e4a] shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center border border-[#FFB800]/30">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-space font-bold text-white leading-tight">Direct WhatsApp</div>
                    <div className="text-[11px] font-space text-[#94a3b8]">1-Tap Pre-filled Bookings</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Interactive Live Device Simulator */
            <InteractiveDevicePreview onOpenConsultation={onOpenConsultation} />
          )}
        </div>
      </div>
    </section>
  );
};
