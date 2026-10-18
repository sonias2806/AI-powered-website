import React from 'react';
import { Globe, Smartphone, MessageSquare, Target, MapPin, RefreshCw, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-[#FFB800]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#EC4899]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#00FF9D]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#8B5CF6]" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-[#38BDF8]" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-[#F43F5E]" />;
      default: return <Globe className="w-5 h-5 text-[#FFB800]" />;
    }
  };

  return (
    <section id="services" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5CF6]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4 shadow-lg shadow-[#FFB800]/10">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">PRODUCTION CAPABILITIES</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">ZERO DELAYS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Dominate Locally</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            No bloated agency jargon or multi-month delays. High-converting, sub-second digital infrastructure crafted specifically for your Hyderabad store, clinic, or counter.
          </p>
        </div>

        {/* 6 Key Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0f0c22]/90 p-7 rounded-3xl border border-[#2e2354] hover:border-[#FFB800]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(255,184,0,0.15)] hover:-translate-y-1 backdrop-blur-2xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#14102c] border border-[#2e2354] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#FFB800]/50 transition-all shadow-inner">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-xl font-syne font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed mb-5 font-space">
                  {service.description}
                </p>

                {/* Specific Benefits List */}
                <div className="space-y-2 pt-3 border-t border-[#231b45]">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#cbd5e1] font-space">
                      <Check className="w-3.5 h-3.5 text-[#00FF9D] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#231b45] flex items-center justify-between">
                <span className="text-[11px] font-mono-num text-[#FFB800] font-bold">
                  {service.highlight}
                </span>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-space font-extrabold text-white hover:text-[#00FF9D] transition-colors"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
