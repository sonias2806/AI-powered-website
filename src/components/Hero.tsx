import React, { useState } from 'react';
import {
  ArrowRight,
  Eye,
  Zap,
  Smartphone,
  Cloud,
  RefreshCw,
  Play,
  Image as ImageIcon,
  ShieldCheck,
  Globe2,
  Sparkles,
  Palette
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/siteData';
import { InteractiveDevicePreview } from './InteractiveDevicePreview';
import { THEMES, ThemeId } from '../utils/theme';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenConsultation: () => void;
  activeThemeId?: ThemeId;
  onCycleTheme?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  activeThemeId = 'gold',
  onCycleTheme
}) => {
  const [viewMode, setViewMode] = useState<'photo' | 'interactive'>('photo');

  const triggerLaunchConfetti = () => {
    try {
      const active = THEMES[activeThemeId] || THEMES.gold;
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.6 },
        colors: [active.primary, active.secondary, active.accent]
      });
    } catch {
      // safe fallback
    }
    onOpenConsultation();
  };

  const currentTheme = THEMES[activeThemeId] || THEMES.gold;

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic ambient radial light blooms adapting to active color theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none overflow-hidden z-0 transition-all duration-700">
        <div
          className="absolute -top-32 left-1/4 w-[540px] h-[540px] rounded-full blur-[150px] opacity-25 transition-all duration-700"
          style={{ backgroundColor: currentTheme.primary }}
        />
        <div
          className="absolute -top-24 right-1/4 w-[480px] h-[480px] rounded-full blur-[150px] opacity-20 transition-all duration-700"
          style={{ backgroundColor: currentTheme.secondary }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] opacity-15 transition-all duration-700"
          style={{ backgroundColor: currentTheme.accent }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Core USP & Global Readiness Trust Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e24]/90 border border-[var(--theme-border)] shadow-xl mb-7 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[var(--theme-primary)] animate-ping" />
          <span className="text-xs font-space font-bold uppercase tracking-wider text-[var(--theme-primary)]">
            2-DAY LIVE LAUNCH SPRINT
          </span>
          <span className="text-[#4b3d67] hidden sm:inline">·</span>
          <span className="text-[11px] font-space text-[#cbd5e1] hidden sm:inline">
            Turnkey Hosting &amp; Managed Care
          </span>
          <span className="text-[#4b3d67] hidden md:inline">·</span>
          <span className="text-[11px] font-mono-num font-semibold text-[var(--theme-secondary)] hidden md:inline">
            National &amp; International Delivery
          </span>
        </div>

        {/* REQUIRED EXACT HEADLINE */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-syne font-extrabold text-white tracking-tight max-w-5xl text-balance leading-[1.08]">
          Your Business Deserves a Website That{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">
            Wins Customers.
          </span>
        </h1>

        {/* Clear, Truthful USP Subtitle */}
        <p className="text-base sm:text-lg text-[#cbd5e1] max-w-3xl mt-6 mb-8 text-balance font-normal leading-relaxed font-space">
          Get a high-speed, conversion-engineered website up and running in just <strong className="text-white font-bold">2 days</strong>. We take care of complete cloud hosting, custom domain deployment, and provide worry-free monthly maintenance—so your digital storefront stays secure, fast, and constantly up to date.
        </p>

        {/* Action Hub & Interactive Palette Swatch Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={triggerLaunchConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-space font-extrabold text-sm sm:text-base text-white px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]"
          >
            <span>Launch In 2 Days</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-space font-semibold text-sm sm:text-base bg-[#0e0c1f] text-white hover:text-[var(--theme-primary)] hover:bg-[#1a1436] border border-[#2a1e4a] px-7 py-4 rounded-2xl transition-all hover:scale-105"
          >
            <Eye className="w-4 h-4 text-[var(--theme-primary)]" />
            <span>View Working Templates</span>
          </a>
        </div>

        {/* 4 Core Pillars Strip (Truthful technical & delivery metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-10 w-full max-w-4xl text-left">
          <div className="p-4 rounded-2xl bg-[#0e0c1f]/85 backdrop-blur-md border border-[#2a1e4a] hover:border-[var(--theme-border)] transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-[var(--theme-primary)] mb-1">
              <Zap className="w-4 h-4" />
              <span>2-Day Turnaround</span>
            </div>
            <div className="text-xs text-[#cbd5e1] font-space leading-snug">Working website live in 48 hours</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0e0c1f]/85 backdrop-blur-md border border-[#2a1e4a] hover:border-[var(--theme-border)] transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-[var(--theme-secondary)] mb-1">
              <Cloud className="w-4 h-4" />
              <span>Turnkey Deployment</span>
            </div>
            <div className="text-xs text-[#cbd5e1] font-space leading-snug">Cloud CDN hosting &amp; SSL included</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0e0c1f]/85 backdrop-blur-md border border-[#2a1e4a] hover:border-[var(--theme-border)] transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-white mb-1">
              <RefreshCw className="w-4 h-4 text-[var(--theme-accent)]" />
              <span>Monthly Maintenance</span>
            </div>
            <div className="text-xs text-[#cbd5e1] font-space leading-snug">Updates, security &amp; uptime care</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0e0c1f]/85 backdrop-blur-md border border-[#2a1e4a] hover:border-[var(--theme-border)] transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-[#00FF9D] mb-1">
              <Globe2 className="w-4 h-4" />
              <span>Global Standards</span>
            </div>
            <div className="text-xs text-[#cbd5e1] font-space leading-snug">Built for national &amp; international clients</div>
          </div>
        </div>

        {/* Interactive View Toggle (Flagship Showcase vs Interactive Screen Simulator) */}
        <div className="mt-14 mb-4 flex items-center justify-center">
          <div className="inline-flex items-center p-1.5 bg-[#0e0c1f] rounded-2xl border border-[#2a1e4a] shadow-xl">
            <button
              onClick={() => setViewMode('photo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all ${
                viewMode === 'photo'
                  ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-md font-bold'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Design Architecture Desk</span>
            </button>
            <button
              onClick={() => setViewMode('interactive')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all ${
                viewMode === 'interactive'
                  ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white shadow-md font-bold'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="flex items-center gap-1.5">
                <span>Interactive Live Screen</span>
                <span className="bg-[#00FF9D] text-black text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase">
                  Try Live
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* HERO SHOWCASE DISPLAY */}
        <div className="relative w-full max-w-5xl mt-2">
          {viewMode === 'photo' ? (
            <div className="relative overflow-hidden rounded-3xl bg-[#0c091d] border border-[#2a1e4a] shadow-[0_35px_100px_rgba(0,0,0,0.9)] p-3 sm:p-5 transition-all group">
              {/* Simulated Browser Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#070512] rounded-2xl mb-3 border border-[#231b3e]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 bg-[#0d0a1f] px-4 py-1 rounded-xl text-[var(--theme-primary)] text-xs font-mono-num border border-[#2a1e4a]">
                  <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse" />
                  <span className="text-white font-medium">yourbrand.com</span>
                  <span className="text-[10px] text-[#00FF9D] font-bold">256-BIT SSL ACTIVE</span>
                </div>
                <div className="text-xs text-[#94a3b8] font-space font-medium hidden sm:block">
                  48-Hour Live Deployment SLA
                </div>
              </div>

              {/* High-fidelity hero preview */}
              <div className="relative w-full overflow-hidden rounded-2xl bg-[#070512] group">
                <img
                  src={ASSETS.heroMockup}
                  alt="High-resolution web development workspace mockup showing live multi-device responsive web layouts on modern desktop display and smartphone"
                  className="w-full h-auto max-h-[580px] object-cover object-center rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Interactive button to test the screen */}
                <button
                  onClick={() => setViewMode('interactive')}
                  className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white px-6 py-3.5 rounded-2xl font-space font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                    <span>Click to Test Live Interactive Mobile Simulator</span>
                  </div>
                </button>

                {/* Floating Technical Badge 1 */}
                <div className="absolute bottom-5 left-5 hidden md:flex items-center gap-3 bg-[#0c091d]/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-[#2a1e4a] shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] flex items-center justify-center border border-[var(--theme-primary)]/30">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-syne font-extrabold text-white leading-tight font-mono-num">
                      2 Days
                    </div>
                    <div className="text-[11px] font-space text-[#cbd5e1]">Guaranteed Working Launch</div>
                  </div>
                </div>

                {/* Floating Technical Badge 2 */}
                <div className="absolute top-5 right-5 hidden md:flex items-center gap-3 bg-[#0c091d]/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-[#2a1e4a] shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-secondary)]/20 text-[var(--theme-secondary)] flex items-center justify-center border border-[var(--theme-secondary)]/30">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-space font-bold text-white leading-tight">Hosting &amp; Domain</div>
                    <div className="text-[11px] font-space text-[#cbd5e1]">Fully Configured &amp; Deployed</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <InteractiveDevicePreview onOpenConsultation={onOpenConsultation} />
          )}
        </div>
      </div>
    </section>
  );
};
