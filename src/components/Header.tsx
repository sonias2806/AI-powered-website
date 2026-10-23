import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageSquare, Play, Volume2, VolumeX, Sparkles, Palette } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO } from '../data/siteData';

interface HeaderProps {
  onOpenLivePreview?: () => void;
  onSelectContact?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  colorTheme?: 'cosmic' | 'emerald' | 'sunset';
  onCycleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLivePreview,
  onSelectContact,
  soundEnabled = false,
  onToggleSound,
  colorTheme = 'cosmic',
  onCycleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '3D Showcase', href: '#portfolio' },
    { label: 'Success Stories', href: '#success-stories' },
    { label: 'ROI Predictor', href: '#roi-calculator' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  const themeLabels = {
    cosmic: 'Solar Amethyst',
    emerald: 'Emerald Luxe',
    sunset: 'Sunset Horizon'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07060e]/85 backdrop-blur-2xl border-b border-[#2e2354]/70 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo with 3D Monogram & Syne typography */}
        <a href="#" className="flex items-center shrink-0">
          <BrandLogo size="md" withText={true} />
        </a>

        {/* Clean, editorial text navigation links */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-space font-semibold text-[#cbd5e1] tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FFB800] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Atmosphere Color Theme Switcher */}
          {onCycleTheme && (
            <button
              onClick={onCycleTheme}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#14102c] hover:bg-[#1f1742] border border-[#2e2354] text-xs font-space font-bold text-[#FFB800] hover:border-[#FFB800]/50 transition-all shadow-sm"
              title={`Active Atmosphere: ${themeLabels[colorTheme]}. Click to switch palette`}
            >
              <Palette className="w-3.5 h-3.5 text-[#EC4899]" />
              <span className="hidden md:inline text-[11px] font-mono-num">{themeLabels[colorTheme]}</span>
            </button>
          )}

          {/* Sound FX Toggle */}
          {onToggleSound && (
            <button
              onClick={onToggleSound}
              aria-label={soundEnabled ? 'Mute haptic sound effects' : 'Enable haptic sound effects'}
              className="p-2 rounded-xl bg-[#14102c] hover:bg-[#1f1742] border border-[#2e2354] text-[#cbd5e1] hover:text-[#FFB800] transition-colors"
              title={soundEnabled ? 'Haptic Audio ON' : 'Haptic Audio Muted'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-[#00FF9D]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#8b7ba8]" />
              )}
            </button>
          )}

          {/* 3D Interactive Screen button */}
          {onOpenLivePreview && (
            <button
              onClick={onOpenLivePreview}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-space font-extrabold text-[#FFB800] bg-[#14102c] hover:bg-[#1f1742] border border-[#FFB800]/40 rounded-xl transition-all hover:scale-105 whitespace-nowrap shadow-sm"
            >
              <Play className="w-3 h-3 fill-current text-[#FFB800]" />
              <span>3D Live Simulator</span>
            </button>
          )}

          {/* Primary CTA button */}
          <a
            href="#contact"
            onClick={onSelectContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-space font-extrabold uppercase tracking-wider text-white bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] rounded-xl shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:shadow-[0_6px_28px_rgba(236,72,153,0.5)] transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>Launch In 24h</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#14102c] border border-[#2e2354] text-white hover:bg-[#1f1742]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFB800]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#07060e]/98 backdrop-blur-2xl border-b border-[#2e2354] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-space text-sm uppercase tracking-wider text-[#cbd5e1]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#FFB800] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#2e2354] flex flex-col gap-3">
            {onCycleTheme && (
              <button
                onClick={() => {
                  onCycleTheme();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#14102c] border border-[#2e2354] text-xs font-space font-bold text-[#FFB800] flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#EC4899]" />
                <span>Atmosphere: {themeLabels[colorTheme]} (Tap to change)</span>
              </button>
            )}

            {onOpenLivePreview && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLivePreview();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#14102c] border border-[#FFB800]/40 text-xs font-space font-bold text-[#FFB800] flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#FFB800]" />
                <span>Open 3D Live Simulator</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSelectContact) onSelectContact();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-space font-extrabold text-xs uppercase tracking-wider text-center shadow-lg"
            >
              Get Your 24-Hour Website
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
