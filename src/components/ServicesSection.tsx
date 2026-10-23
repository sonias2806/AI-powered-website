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
    Globe: <Globe className="w-5 h-5 text-purple-600" />,
    Smartphone: <Smartphone className="w-5 h-5 text-amber-500" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-emerald-600" />,
    MapPin: <MapPin className="w-5 h-5 text-rose-500" />,
    Clock: <Clock className="w-5 h-5 text-cyan-600" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-indigo-600" />
  };

  const cardAuraMap: Record<string, string> = {
    Globe: 'hover:border-purple-300 hover:shadow-purple-500/15',
    Smartphone: 'hover:border-amber-300 hover:shadow-amber-500/15',
    MessageSquare: 'hover:border-emerald-300 hover:shadow-emerald-500/15',
    MapPin: 'hover:border-rose-300 hover:shadow-rose-500/15',
    Clock: 'hover:border-cyan-300 hover:shadow-cyan-500/15',
    ShieldCheck: 'hover:border-indigo-300 hover:shadow-indigo-500/15'
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-rose-200/50">
      {/* Dynamic Ambient Color Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-purple-500/25 via-pink-500/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/25 via-emerald-400/20 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 border border-rose-200 text-xs font-bold uppercase tracking-wider text-rose-700 mb-4 backdrop-blur-xl shadow-md shadow-rose-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Tailored For Growing Businesses · Global &amp; National</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-slate-900 tracking-tight">
            Everything Your Business Needs to <span className="gradient-text-rainbow">Win Customers Online</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            No bloated agency retainers, no useless bells and whistles. Only high-converting features designed to drive customer enquiries, bookings, and calls.
          </p>
        </div>

        {/* Target Business Types Strip with Radiant Glass Border */}
        <div className="p-5 rounded-2xl bg-white/85 border border-rose-200/70 backdrop-blur-xl mb-12 shadow-lg shadow-rose-500/5">
          <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-3 text-center sm:text-left flex items-center gap-1.5 justify-center sm:justify-start">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Specialized Digital Solutions For High-Demand Sectors Worldwide:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {TARGET_BUSINESS_TYPES.map((type, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-center hover:border-rose-300 transition-colors">
                <div className="text-xs font-bold text-slate-900 truncate">{type.name}</div>
                <div className="text-[10px] text-slate-500 truncate mt-0.5">{type.example}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards Grid (3x2 clean layout with distinct glowing accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-7 rounded-2xl bg-white/90 border border-rose-100/90 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between hover:-translate-y-1 ${cardAuraMap[service.icon] || 'hover:border-rose-300'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 shadow-xs">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-[11px] font-bold text-rose-700 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-rose-100">
                  {service.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-100">
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors"
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
