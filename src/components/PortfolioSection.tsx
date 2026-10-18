import React from 'react';
import { Bolt, ExternalLink, Play, ArrowUpRight, Check, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO } from '../data/siteData';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onOpenLiveConcept: (conceptId: string) => void;
  onSelectConceptForContact: (conceptName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenLiveConcept,
  onSelectConceptForContact
}) => {
  return (
    <section id="portfolio" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#FFB800]/10 via-[#EC4899]/10 to-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-3 shadow-lg shadow-[#FFB800]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span className="uppercase tracking-widest font-bold">PROVEN RESULTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Recent Hyderabad <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Website Concepts</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Explore how we structure high-conversion websites for real businesses across Hyderabad's prime commercial areas.
          </p>
        </div>

        {/* Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0f0c22]/90 rounded-3xl overflow-hidden border border-[#2e2354] hover:border-[#FFB800]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(255,184,0,0.15)] hover:-translate-y-1 backdrop-blur-2xl"
            >
              {/* Image banner */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#14102c]">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#07060e]/90 backdrop-blur-md px-3 py-1 rounded-xl text-[#cbd5e1] text-[11px] font-space font-medium border border-[#2e2354] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#FFB800]" />
                    <span>{item.location.split(',')[0]}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#00FF9D] to-[#00f5d4] text-black font-space font-extrabold px-2.5 py-1 rounded-xl text-[11px] flex items-center gap-1 shadow-md">
                    <Bolt className="w-3.5 h-3.5 fill-black" />
                    <span>Live Concept</span>
                  </div>

                  {/* Interactive screen overlay button */}
                  {item.hasInteractiveScreen && (
                    <button
                      onClick={() => onOpenLiveConcept(item.id)}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    >
                      <div className="px-5 py-2.5 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white rounded-xl text-xs font-space font-extrabold flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Launch Live Simulation</span>
                      </div>
                    </button>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-[#FFB800] font-space font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-syne font-bold text-white mt-1 mb-2">{item.name}</h3>
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-4 font-space">
                    {item.description}
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-space bg-[#14102c] text-[#cbd5e1] px-2.5 py-1 rounded-lg border border-[#2e2354]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#231b45] mt-4 flex items-center justify-between">
                <span className="text-xs font-mono-num text-[#00FF9D] font-bold">
                  {item.metrics}
                </span>

                <button
                  onClick={() => onSelectConceptForContact(item.name)}
                  className="inline-flex items-center gap-1 text-xs font-space font-extrabold text-white hover:text-[#FFB800] transition-colors"
                >
                  <span>Build Similar Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
