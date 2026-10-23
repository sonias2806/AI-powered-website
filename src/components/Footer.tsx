import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_CONFIG } from '../data/siteData';
import { Phone, MessageSquare, Globe2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#060713]/90 border-t border-white/10 backdrop-blur-2xl relative z-10 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Col 1: Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <BrandLogo size="md" withText={true} />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              We help salons, clinics, cafes, gyms, and growing companies worldwide build a professional digital presence through modern, mobile-friendly websites created with bespoke design and personalised human review.
            </p>
            <div className="text-xs text-amber-300/80 font-medium pt-1 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Serving National &amp; International Clients</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#portfolio" className="hover:text-amber-300 transition-colors">
                  3D Demo Websites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Website Solutions
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-300 transition-colors">
                  Three-Step Project Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-300 transition-colors">
                  Transparent Packages (USD &amp; INR)
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-amber-300 transition-colors">
                  About the Founder
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Global Regions Served & Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Global &amp; National Regions Served
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              India (National Pan-India), United States &amp; Canada, United Kingdom &amp; Europe, UAE &amp; Middle East, Singapore, Australia, and remote clients worldwide.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono-num">{CONTACT_CONFIG.displayPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Available Daily Across Time Zones</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 pt-1">
              [Note: {CONTACT_CONFIG.placeholderNotice}]
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {CONTACT_CONFIG.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="text-amber-300/90 font-medium">Serving National &amp; International Businesses</span>
            <span>·</span>
            <span>Bespoke Design + Rapid Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
