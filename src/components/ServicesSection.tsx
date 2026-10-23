import React from 'react';
import {
  Globe,
  Smartphone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES, TARGET_BUSINESS_TYPES } from '../data/siteData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-5 h-5 text-indigo-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-amber-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-400" />,
    MapPin: <MapPin className="w-5 h-5 text-rose-400" />,
    Clock: <Clock className="w-5 h-5 text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-violet-400" />
  };

  const cardAuraMap: Record<string, string> = {
    Globe: 'hover:border-indigo-400/50 hover:shadow-indigo-500/15',
    Smartphone: 'hover:border-amber-400/50 hover:shadow-amber-500/15',
    MessageSquare: 'hover:border-emerald-400/50 hover:shadow-emerald-500/15',
    MapPin: 'hover:border-rose-400/50 hover:shadow-rose-500/15',
    Clock: 'hover:border-cyan-400/50 hover:shadow-cyan-500/15',
    ShieldCheck: 'hover:border-violet-400/50 hover:shadow-violet-500/15'
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-white/10">
      {/* Dynamic Ambient Color Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-indigo-600/20 via-pink-500/15 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/18 via-emerald-500/12 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-xl shadow-lg shadow-amber-950/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tailored For Growing Businesses · Global &amp; National</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            Everything Your Business Needs to Win Customers Online
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed drop-shadow-sm">
            No bloated agency retainers, no useless bells and whistles. Only high-converting features designed to drive customer enquiries, bookings, and calls.
          </p>
        </div>

        {/* Target Business Types Strip with Radiant Glass Border */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/15 backdrop-blur-xl mb-12 shadow-xl shadow-black/30">
          <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-3 text-center sm:text-left flex items-center gap-1.5 justify-center sm:justify-start">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Specialized Digital Solutions For High-Demand Sectors Worldwide:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {TARGET_BUSINESS_TYPES.map((type, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-white/10 text-center hover:border-amber-400/40 transition-colors">
                <div className="text-xs font-bold text-white truncate">{type.name}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{type.example}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards Grid (3x2 clean layout with distinct glowing accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-7 rounded-2xl bg-[#0d1022]/85 border border-white/15 backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between hover:-translate-y-1 ${cardAuraMap[service.icon] || 'hover:border-amber-400/50'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-white/15 shadow-inner">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-[11px] font-bold text-amber-300 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <span>Enquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
