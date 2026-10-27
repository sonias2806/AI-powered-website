import React from 'react';
import { Globe, Smartphone, MessageSquare, Target, MapPin, RefreshCw, ChevronRight, Check, Zap, Cloud } from 'lucide-react';
import { SERVICES } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-[var(--theme-primary)]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[var(--theme-secondary)]" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-[#00FF9D]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[var(--theme-accent)]" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#00FF9D]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[var(--theme-primary)]" />;
      default: return <Globe className="w-5 h-5 text-[var(--theme-primary)]" />;
    }
  };

  return (
    <section id="services" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[var(--theme-primary)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--theme-secondary)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[var(--theme-border)] text-xs font-space font-medium text-[var(--theme-primary)] mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">FULL-SERVICE WEB STUDIO</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">48H DELIVERY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">Win Customers Online</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            No slow agencies or multi-month delays. We deliver ready-to-convert websites in 2 days, set up enterprise cloud hosting, and handle your monthly maintenance so you can focus purely on growing your business.
          </p>
        </div>

        {/* 6 Key Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0f0c22]/90 p-7 rounded-3xl border border-[#2e2354] hover:border-[var(--theme-border)] transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 backdrop-blur-2xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#14102c] border border-[#2e2354] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[var(--theme-border)] transition-all shadow-inner">
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
                <span className="text-[11px] font-mono-num text-[var(--theme-primary)] font-bold">
                  {service.highlight}
                </span>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-space font-extrabold text-white hover:text-[var(--theme-primary)] transition-colors cursor-pointer"
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
