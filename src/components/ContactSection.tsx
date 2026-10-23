import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, MapPin, Phone, Mail, CheckCircle2, Copy, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialIndustry?: string;
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialIndustry = '',
  initialPackage = 'Growth (₹9,999)'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: initialIndustry || 'Luxury Hair & Color Suite',
    city: 'Global / National Flagship',
    phone: '',
    email: '',
    hasWebsite: 'No, starting fresh',
    preferredPackage: initialPackage,
    needs: ['24-hr launch', 'WhatsApp Lead Gen']
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  useEffect(() => {
    if (initialIndustry) {
      setFormData(prev => ({ ...prev, businessType: initialIndustry }));
    }
  }, [initialIndustry]);

  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({ ...prev, preferredPackage: initialPackage }));
    }
  }, [initialPackage]);

  const handleCheckboxChange = (needVal: string) => {
    setFormData(prev => {
      const exists = prev.needs.includes(needVal);
      return {
        ...prev,
        needs: exists ? prev.needs.filter(n => n !== needVal) : [...prev.needs, needVal]
      };
    });
  };

  const generateWhatsAppMessage = () => {
    return `Hi AURA LUXE! I'd like to commission our digital flagship website.
Name: ${formData.fullName || 'Business Owner'}
Business: ${formData.businessName || 'My Business'} (${formData.businessType})
Location: ${formData.city}
Phone: ${formData.phone || 'N/A'}
Package: ${formData.preferredPackage}
Current Site: ${formData.hasWebsite}
Needs: ${formData.needs.join(', ')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FFB800', '#EC4899', '#8B5CF6', '#00FF9D']
      });
    } catch {
      // safe fallback
    }

    const waText = encodeURIComponent(generateWhatsAppMessage());
    setTimeout(() => {
      window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${waText}`, '_blank');
    }, 700);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB800]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#EC4899]/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4 shadow-lg shadow-[#FFB800]/10">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">GLOBAL RAPID SPRINT</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">24-HOUR SLA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">24-Hour Digital Presence</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Fill out the brief below, and we'll connect with your live concept preview and action plan within a few hours.
          </p>
        </div>

        {/* 12-Col Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Lead Form (8 Col) */}
          <div className="lg:col-span-8 bg-[#0f0c22]/90 p-7 sm:p-10 rounded-3xl border border-[#2e2354] shadow-2xl backdrop-blur-2xl">
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-4 font-space">
                <div className="w-16 h-16 bg-[#00FF9D]/20 text-[#00FF9D] rounded-2xl flex items-center justify-center mx-auto border border-[#00FF9D]/40 shadow-lg shadow-[#00FF9D]/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-syne font-bold text-white">Inquiry Submitted!</h3>
                <p className="text-sm text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                  Thank you! We received your details for <strong className="text-[#FFB800]">{formData.businessName || 'your business'}</strong>. Opening WhatsApp to connect directly with our engineering team.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 bg-[#171330] hover:bg-[#231b45] text-[#cbd5e1] hover:text-white text-xs font-semibold rounded-xl border border-[#372b5f] transition-colors"
                  >
                    Edit Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-space">
                {/* Row 1: Full Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="full-name">
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikram Reddy"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[#FFB800] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="business-name">
                      Business Name *
                    </label>
                    <input
                      id="business-name"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Royal Atelier Jewels"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[#FFB800] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Business Type & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="business-type">
                      Business Vertical *
                    </label>
                    <select
                      id="business-type"
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white focus:border-[#FFB800] outline-none transition-colors"
                    >
                      <option value="Luxury Hair & Color Suite">Luxury Hair &amp; Color Suite</option>
                      <option value="Med Spa & Aesthetic Clinic">Med Spa &amp; Aesthetic Clinic</option>
                      <option value="Destination Day Spa & Hammam">Destination Day Spa &amp; Hammam</option>
                      <option value="Boutique Nail & Lash Lounge">Boutique Nail &amp; Lash Lounge</option>
                      <option value="Executive Men's Grooming Club">Executive Men's Grooming Club</option>
                      <option value="Multi-Location Salon Brand">Multi-Location Flagship Salon Brand</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="city">
                      City / Territory (Global or Domestic)
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. London / New York / Dubai / Mumbai"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white focus:border-[#FFB800] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Phone (WhatsApp) & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="phone">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[#FFB800] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="email">
                      Email Address (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[#FFB800] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Existing Website Radio */}
                <div>
                  <span className="block text-xs font-semibold text-white mb-2">
                    Current Online Status
                  </span>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#cbd5e1]">
                      <input
                        type="radio"
                        name="existing_site"
                        checked={formData.hasWebsite === 'No, starting fresh'}
                        onChange={() => setFormData({ ...formData, hasWebsite: 'No, starting fresh' })}
                        className="accent-[#FFB800]"
                      />
                      <span>Starting completely fresh (No site yet)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#cbd5e1]">
                      <input
                        type="radio"
                        name="existing_site"
                        checked={formData.hasWebsite === 'Yes, needs redesign / refresh'}
                        onChange={() => setFormData({ ...formData, hasWebsite: 'Yes, needs redesign / refresh' })}
                        className="accent-[#FFB800]"
                      />
                      <span>Have old site, needs 2026 redesign</span>
                    </label>
                  </div>
                </div>

                {/* Checkboxes: Priorities */}
                <div>
                  <span className="block text-xs font-semibold text-white mb-2">
                    Key Website Priorities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: '24-hr launch', label: '24-Hour Express Launch' },
                      { id: 'WhatsApp Lead Gen', label: 'Direct 1-Tap WhatsApp Leads' },
                      { id: 'Google Maps Setup', label: 'Google Maps & Local Search SEO' },
                      { id: 'Complete Redesign', label: 'Flagship Visual Aesthetic' }
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#14102c] border border-[#2e2354] cursor-pointer hover:border-[#FFB800]/40 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.needs.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="accent-[#FFB800]"
                        />
                        <span className="text-xs text-white">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Package */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="pkg">
                    Selected Package
                  </label>
                  <select
                    id="pkg"
                    value={formData.preferredPackage}
                    onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                    className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white focus:border-[#FFB800] outline-none transition-colors"
                  >
                    <option value="Starter (₹4,999)">Starter Package — ₹4,999</option>
                    <option value="Growth (₹9,999)">Growth Package (Most Popular) — ₹9,999</option>
                    <option value="Premium (₹14,999)">Premium Package — ₹14,999</option>
                    <option value="Custom Consultation">Custom Enterprise Build</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] hover:shadow-[0_10px_35px_-5px_rgba(255,184,0,0.5)] text-white font-syne font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <span>Request My 24-Hour Website</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Details (4 Col) */}
          <div className="lg:col-span-4 flex flex-col gap-6 font-space">
            {/* Direct Connect Box */}
            <div className="bg-[#0f0c22]/90 p-6 sm:p-7 rounded-3xl border border-[#2e2354] shadow-xl backdrop-blur-2xl">
              <h4 className="text-lg font-syne font-bold text-white mb-4">
                Prefer To Speak Directly?
              </h4>
              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-6">
                Skip the form and message our engineering desk directly on WhatsApp. We typically reply within 10 minutes.
              </p>

              <div className="space-y-4 text-xs">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20a%20website%20for%20my%20business`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#14102c] hover:bg-[#1f173f] border border-[#2e2354] hover:border-[#00FF9D]/50 text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00FF9D]/20 text-[#00FF9D] flex items-center justify-center shrink-0 border border-[#00FF9D]/40">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#00FF9D] transition-colors">
                      WhatsApp Quick Chat
                    </div>
                    <div className="text-[11px] text-[#94a3b8] font-mono-num">{CONTACT_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.whatsappNumber}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#14102c] hover:bg-[#1f173f] border border-[#2e2354] hover:border-[#FFB800]/50 text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center shrink-0 border border-[#FFB800]/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#FFB800] transition-colors">
                      Direct Voice Call
                    </div>
                    <div className="text-[11px] text-[#94a3b8] font-mono-num">Mon - Sat: 9 AM - 9 PM</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#14102c] border border-[#2e2354] text-white">
                  <div className="w-10 h-10 rounded-xl bg-[#EC4899]/20 text-[#EC4899] flex items-center justify-center shrink-0 border border-[#EC4899]/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Engineering Studio Hubs</div>
                    <div className="text-[11px] text-[#94a3b8]">London · New York · Dubai · Mumbai · Singapore</div>
                  </div>
                </div>
              </div>

              {/* Copy WhatsApp template */}
              <div className="mt-6 pt-5 border-t border-[#251d45]">
                <button
                  onClick={handleCopyWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#14102c] hover:bg-[#201842] border border-[#2e2354] text-xs font-semibold text-[#cbd5e1] hover:text-white transition-colors"
                >
                  {copiedWhatsApp ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00FF9D]" />
                      <span className="text-[#00FF9D]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#FFB800]" />
                      <span>Copy WhatsApp Brief Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* SLA Trust Badges */}
            <div className="p-6 rounded-3xl bg-[#0f0c22]/90 border border-[#2e2354] shadow-xl backdrop-blur-2xl">
              <h5 className="text-xs uppercase tracking-wider text-[#FFB800] font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FFB800]" />
                <span>Our 24-Hour Global Flagship Guarantee</span>
              </h5>
              <ul className="space-y-2 text-xs text-[#cbd5e1]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>First functional interactive preview delivered within 24 hours of brief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>100% full source code ownership — zero recurring hostage fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>Sub-second mobile optimization for international &amp; domestic clientele</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
