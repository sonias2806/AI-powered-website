import React, { useState } from 'react';
import { Menu, X, ArrowRight, Play, Volume2, VolumeX, Palette, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { THEMES, ThemeId } from '../utils/theme';

interface HeaderProps {
  onOpenLivePreview?: () => void;
  onSelectContact?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
  colorTheme?: ThemeId;
  onCycleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLivePreview,
  onSelectContact,
  soundEnabled = false,
  onToggleSound,
  colorTheme = 'gold',
  onCycleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Strictly removed "Success Stories" and "ROI Predictor"
  const navLinks = [
    { label: '3D Showcase', href: '#portfolio' },
    { label: 'Services & USP', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing & Plans', href: '#pricing' },
    { label: 'Maintenance', href: '#maintenance' },
    { label: 'FAQ', href: '#faq' }
  ];

  const currentTheme = THEMES[colorTheme] || THEMES.gold;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07060e]/90 backdrop-blur-2xl border-b border-[#2e2354]/70 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo with LaunchCraft LC Monogram */}
        <a href="#" className="flex items-center shrink-0">
          <BrandLogo size="md" withText={true} />
        </a>

        {/* Clean, editorial text navigation links */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-space font-semibold text-[#cbd5e1] tracking-wider uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[var(--theme-primary)] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* THEME COLOR SWITCHER ICON BUTTON */}
          {onCycleTheme && (
            <button
              onClick={onCycleTheme}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-[#14102c] hover:bg-[#1f1742] border border-[var(--theme-border)] text-xs font-space font-bold text-white transition-all shadow-sm hover:scale-105 active:scale-95 group cursor-pointer"
              title={`Active Theme: ${currentTheme.name}. Click to switch color combination`}
              aria-label="Change website color theme"
            >
              <Palette className="w-4 h-4 text-[var(--theme-primary)] group-hover:rotate-45 transition-transform" />
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
                <span className="text-[11px] font-mono-num text-[var(--theme-primary)]">{currentTheme.name}</span>
              </div>
            </button>
          )}

          {/* Sound FX Toggle */}
          {onToggleSound && (
            <button
              onClick={onToggleSound}
              aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
              className="p-2 rounded-xl bg-[#14102c] hover:bg-[#1f1742] border border-[#2e2354] text-[#cbd5e1] hover:text-[var(--theme-primary)] transition-colors"
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
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-space font-extrabold text-[var(--theme-primary)] bg-[#14102c] hover:bg-[#1f1742] border border-[var(--theme-border)] rounded-xl transition-all hover:scale-105 whitespace-nowrap shadow-sm"
            >
              <Play className="w-3 h-3 fill-current text-[var(--theme-primary)]" />
              <span>3D Live Simulator</span>
            </button>
          )}

          {/* Primary CTA button */}
          <a
            href="#contact"
            onClick={onSelectContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-space font-extrabold uppercase tracking-wider text-white rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]"
          >
            <span>Launch In 2 Days</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#14102c] border border-[#2e2354] text-white hover:bg-[#1f1742]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--theme-primary)]" /> : <Menu className="w-5 h-5" />}
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
                className="py-2 hover:text-[var(--theme-primary)] transition-colors"
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
                className="w-full py-2.5 px-4 rounded-xl bg-[#14102c] border border-[var(--theme-border)] text-xs font-space font-bold text-white flex items-center justify-center gap-2"
              >
                <Palette className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Theme: {currentTheme.name} (Tap to change color)</span>
              </button>
            )}

            {onOpenLivePreview && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLivePreview();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#14102c] border border-[var(--theme-border)] text-xs font-space font-bold text-[var(--theme-primary)] flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[var(--theme-primary)]" />
                <span>Open 3D Live Simulator</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSelectContact) onSelectContact();
              }}
              className="w-full py-3 px-4 rounded-xl text-white font-space font-extrabold text-xs uppercase tracking-wider text-center shadow-lg bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]"
            >
              Get Your 2-Day Website
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
