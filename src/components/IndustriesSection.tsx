import React, { useState } from 'react';
import { 
  Sparkles, Building2, Gem, Dumbbell, 
  GraduationCap, Activity, 
  ArrowRight, Check, Eye
} from 'lucide-react';
import { INDUSTRIES } from '../data/siteData';

interface IndustriesSectionProps {
  onSelectIndustry: (industryName: string) => void;
  onPreviewConcept?: (conceptId: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  onSelectIndustry, 
  onPreviewConcept 
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[var(--theme-primary)]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[var(--theme-accent)]" />;
      case 'Gem': return <Gem className="w-5 h-5 text-[var(--theme-secondary)]" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#00FF9D]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#38BDF8]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#F43F5E]" />;
      default: return <Sparkles className="w-5 h-5 text-[var(--theme-primary)]" />;
    }
  };

  const filteredIndustries = activeFilter === 'all' 
    ? INDUSTRIES 
    : INDUSTRIES.filter(i => {
        if (activeFilter === 'salon-spa') return i.id === 'salon-spa';
        if (activeFilter === 'luxury') return ['jewellery', 'real-estate'].includes(i.id);
        if (activeFilter === 'wellness') return ['fitness', 'clinic', 'coaching'].includes(i.id);
        return true;
      });

  return (
    <section id="industries" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#05060f] relative overflow-hidden">
      {/* Background radial radiant bloom */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[var(--theme-secondary)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e24] border border-[var(--theme-border)] text-xs font-space font-medium text-[var(--theme-primary)] mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">DOMAIN EXPERTISE</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">PROVEN ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Websites Architected For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">Your Specific Industry</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance">
            We understand what turns visitors into paying inquiries for your sector. Every industry receives tailored booking flows, rate cards, and conversion funnels.
          </p>

          {/* Interactive Filter Segmented Control */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#0e0c1f] rounded-2xl border border-[#2a1e4a]">
            {[
              { id: 'all', label: 'All Sectors' },
              { id: 'salon-spa', label: 'Salon and Spa' },
              { id: 'luxury', label: 'Jewellery & Real Estate' },
              { id: 'wellness', label: 'Fitness & Health' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-space font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white font-extrabold shadow-md'
                    : 'text-[#94a3b8] hover:text-white hover:bg-[#1a1436]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => (
            <div
              key={ind.id}
              className="bg-[#0b0c1a] rounded-3xl p-7 border border-[#231b3e] hover:border-[var(--theme-border)] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#141229] border border-[#2e234e] flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--theme-border)] transition-all shadow-inner">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="text-[11px] font-mono-num font-bold text-[var(--theme-primary)] bg-[#141229] px-2.5 py-1 rounded-lg border border-[#2e234e]">
                    2-Day Delivery
                  </span>
                </div>

                <h3 className="text-xl font-syne font-bold text-white mb-1">
                  {ind.name}
                </h3>
                <p className="text-xs text-[var(--theme-primary)] font-space font-bold mb-3">
                  {ind.tagline}
                </p>
                <p className="text-xs text-[#cbd5e1] leading-relaxed mb-5 font-space">
                  {ind.description}
                </p>

                {/* Key features bullets */}
                <div className="space-y-1.5 mb-6">
                  {ind.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#cbd5e1] font-space">
                      <Check className="w-3.5 h-3.5 text-[#00FF9D] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#1e1935] flex items-center justify-between gap-2">
                {onPreviewConcept && ind.id === 'salon-spa' && (
                  <button
                    onClick={() => onPreviewConcept('lumiere-salon-spa')}
                    className="text-xs font-space font-bold text-[var(--theme-primary)] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Concept</span>
                  </button>
                )}

                <button
                  onClick={() => onSelectIndustry(ind.name)}
                  className="ml-auto inline-flex items-center gap-1.5 text-xs font-space font-extrabold text-white hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
                >
                  <span>Build For {ind.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
