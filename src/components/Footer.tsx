import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO } from '../data/siteData';
import { ShieldCheck, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#07060d] border-t border-[#2e2354] relative z-10 overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-t from-[#FFB800]/10 via-[#EC4899]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 & 2: Brand & Local Mission */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo size="lg" withText={true} />
            <p className="text-sm text-[#cbd5e1] max-w-md leading-relaxed font-space">
              Engineering high-velocity web experiences, hyper-local conversion funnels, and 24-hour turnaround websites for ambitious businesses across Banjara Hills, Jubilee Hills, Gachibowli, and Madhapur.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-space text-[#cbd5e1]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#00FF9D] animate-ping" />
              <span>Active across Hyderabad Metro Area &amp; Telangana</span>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="space-y-3 font-space">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Solutions &amp; 3D Views
            </h4>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li><a href="#portfolio" className="hover:text-[#FFB800] transition-colors flex items-center gap-1"><span>3D Spatial Portfolio</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#success-stories" className="hover:text-[#FFB800] transition-colors flex items-center gap-1"><span>Hyderabad Success Stories</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#roi-calculator" className="hover:text-[#FFB800] transition-colors flex items-center gap-1"><span>Revenue &amp; ROI Simulator</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">WhatsApp Lead Generation</a></li>
              <li><a href="#pricing" className="hover:text-[#FFB800] transition-colors">Fixed Transparent Pricing</a></li>
            </ul>
          </div>

          {/* Col 4: Client Verticals */}
          <div className="space-y-3 font-space">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Hyderabad Verticals
            </h4>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li><a href="#industries" className="hover:text-[#FFB800] transition-colors">Banjara Hills Salon and Spa</a></li>
              <li><a href="#industries" className="hover:text-[#FFB800] transition-colors">Gachibowli Real Estate &amp; Towers</a></li>
              <li><a href="#industries" className="hover:text-[#FFB800] transition-colors">Panjagutta Heritage Jewellery</a></li>
              <li><a href="#industries" className="hover:text-[#FFB800] transition-colors">Madhapur Fitness &amp; Gyms</a></li>
              <li><a href="#industries" className="hover:text-[#FFB800] transition-colors">Ameerpet Coaching &amp; Academies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#231b45] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-space text-[#94a3b8]">
          <p>© {new Date().getFullYear()} Digital Presence Hyderabad. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with Zero-Bloat React &amp; 3D Engine</span>
            <span>·</span>
            <span className="text-[#00FF9D] font-bold">24-Hour Turnaround Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
