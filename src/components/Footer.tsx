import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CONTACT_INFO } from '../data/siteData';
import { ShieldCheck, ArrowUpRight, Zap, RefreshCw, Cloud, Globe2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#07060d] border-t border-[#2e2354] relative z-10 overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-gradient-to-t from-[var(--theme-primary)]/10 via-[var(--theme-secondary)]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo size="lg" withText={true} />
            <p className="text-sm text-[#cbd5e1] max-w-md leading-relaxed font-space">
              High-converting websites engineered and launched in 2 days. Complete with global cloud hosting, turnkey custom domain deployment, and worry-free monthly maintenance for ambitious national and international businesses.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-space text-[#cbd5e1]">
              <span className="inline-flex items-center gap-1.5 bg-[#14102c] px-3 py-1 rounded-lg border border-[#2e2354]">
                <Zap className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                <span>2-Day Turnaround SLA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#14102c] px-3 py-1 rounded-lg border border-[#2e2354]">
                <Cloud className="w-3.5 h-3.5 text-[var(--theme-secondary)]" />
                <span>Turnkey Hosting &amp; SSL</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#14102c] px-3 py-1 rounded-lg border border-[#2e2354]">
                <RefreshCw className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span>Monthly Managed Care</span>
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation (Removed Success Stories and ROI Calculator) */}
          <div className="space-y-3 font-space">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Solutions &amp; Sprints
            </h4>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li><a href="#portfolio" className="hover:text-[var(--theme-primary)] transition-colors flex items-center gap-1"><span>Interactive 3D Templates</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#services" className="hover:text-[var(--theme-primary)] transition-colors"><span>Turnkey Hosting &amp; Deployment</span></a></li>
              <li><a href="#how-it-works" className="hover:text-[var(--theme-primary)] transition-colors"><span>2-Day Sprint Process</span></a></li>
              <li><a href="#pricing" className="hover:text-[var(--theme-primary)] transition-colors"><span>Transparent Launch Pricing</span></a></li>
              <li><a href="#maintenance" className="hover:text-[var(--theme-primary)] transition-colors"><span>Monthly Care &amp; Updates</span></a></li>
              <li><a href="#faq" className="hover:text-[var(--theme-primary)] transition-colors"><span>Frequently Asked Questions</span></a></li>
            </ul>
          </div>

          {/* Col 4: Industry Solutions */}
          <div className="space-y-3 font-space">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              Industries We Serve
            </h4>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li><a href="#industries" className="hover:text-[var(--theme-primary)] transition-colors">Luxury Salon &amp; Spa Websites</a></li>
              <li><a href="#industries" className="hover:text-[var(--theme-primary)] transition-colors">Fine Jewellery Ateliers</a></li>
              <li><a href="#industries" className="hover:text-[var(--theme-primary)] transition-colors">Real Estate &amp; Architecture</a></li>
              <li><a href="#industries" className="hover:text-[var(--theme-primary)] transition-colors">Fitness &amp; Athletic Clubs</a></li>
              <li><a href="#industries" className="hover:text-[var(--theme-primary)] transition-colors">Professional Academies &amp; Clinics</a></li>
              <li><a href="#contact" className="hover:text-[var(--theme-primary)] transition-colors">Custom Enterprise Solutions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#231b45] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-space text-[#94a3b8]">
          <p>© {new Date().getFullYear()} LaunchCraft Web Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Built with Zero-Bloat React &amp; 3D Engine</span>
            <span>·</span>
            <span className="text-[#00FF9D] font-bold">48-Hour Live Delivery SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
