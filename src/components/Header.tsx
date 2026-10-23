import React, { useState } from 'react';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_CONFIG } from '../data/siteData';

interface HeaderProps {
  onSelectContact?: () => void;
  onOpenDemoWork?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectContact,
  onOpenDemoWork
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Demo Concepts', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Packages', href: '#pricing' },
    { label: 'About Founder', href: '#founder' },
    { label: 'FAQs', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060713]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (single clean element) */}
        <a href="#" className="flex items-center shrink-0 group">
          <BrandLogo size="md" withText={true} />
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300 tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-300 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20a%20website%20consultation%20for%20my%20business`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-xl transition-all whitespace-nowrap shadow-sm shadow-emerald-950/30"
            title="WhatsApp Quick Chat"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-emerald-400/20" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            onClick={onSelectContact}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg shadow-amber-950/20 transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-slate-200 hover:bg-white/15"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e20]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-3">
          <div className="flex flex-col space-y-2.5 text-sm text-slate-200 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20a%20website%20consultation%20for%20my%20business`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-400/20" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onSelectContact) onSelectContact();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-bold text-xs text-center transition-colors shadow-lg shadow-amber-950/20"
            >
              Get a Free Website Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
