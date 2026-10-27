import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, MapPin, Phone, Mail, CheckCircle2, Copy, Check, ArrowRight, Sparkles, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialIndustry?: string;
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialIndustry = '',
  initialPackage = 'Growth Sprint (₹10,999) · 2-Day Live Launch'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: initialIndustry || 'Salon and Spa',
    location: 'National & Global',
    phone: '',
    email: '',
    hasWebsite: 'No, starting fresh',
    preferredPackage: initialPackage,
    needs: ['2-Day Express Launch', 'Turnkey Hosting & Deployment', 'Monthly Maintenance']
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
    return `Hi LaunchCraft Web Studio! I'm interested in launching my website in 2 days.
Name: ${formData.fullName || 'Business Owner'}
Business: ${formData.businessName || 'My Brand'} (${formData.businessType})
Location: ${formData.location || 'Global/National'}
Phone: ${formData.phone || 'N/A'}
Selected Plan: ${formData.preferredPackage}
Current Status: ${formData.hasWebsite}
Priorities: ${formData.needs.join(', ')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#06B6D4', '#FFB800', '#00FF9D']
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
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--theme-primary)]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--theme-secondary)]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e29] border border-[var(--theme-border)] text-xs font-space font-medium text-[var(--theme-primary)] mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">START YOUR 2-DAY SPRINT</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">48-HOUR DELIVERY SLA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Let's Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">Website in 2 Days</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance font-space">
            Share your brief below. We'll set up your tailored design architecture, configure cloud hosting &amp; deployment, and have your working website live in 48 hours.
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
                <h3 className="text-2xl font-syne font-bold text-white">Sprint Brief Received!</h3>
                <p className="text-sm text-[#cbd5e1] max-w-md mx-auto leading-relaxed">
                  Thank you! We received your details for <strong className="text-[var(--theme-primary)]">{formData.businessName || 'your business'}</strong>. We are opening WhatsApp to coordinate your 2-day live launch directly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:scale-105"
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
                      Your Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[var(--theme-primary)] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="business-name">
                      Business or Brand Name *
                    </label>
                    <input
                      id="business-name"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Lumina Studio"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[var(--theme-primary)] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Business Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="business-type">
                      Business Category *
                    </label>
                    <select
                      id="business-type"
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white focus:border-[var(--theme-primary)] outline-none transition-colors"
                    >
                      <option value="Salon and Spa">Salon &amp; Luxury Spa</option>
                      <option value="Jewellery">Jewellery Atelier / Luxury Goods</option>
                      <option value="Real Estate">Real Estate &amp; Architecture</option>
                      <option value="Gym & Fitness">Gym &amp; Athletic Club</option>
                      <option value="Clinic">Medical / Dental Practice</option>
                      <option value="Coaching Institute">Education &amp; Professional Academy</option>
                      <option value="Startup / Tech">Startup / Tech Company</option>
                      <option value="Local Business">Local Business / Service Provider</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="location">
                      City / Country
                    </label>
                    <input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. London, New York, Mumbai, Sydney"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white focus:border-[var(--theme-primary)] outline-none transition-colors"
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
                      placeholder="+1 (555) 000-0000 or +91 98765 43210"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[var(--theme-primary)] outline-none transition-colors"
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
                      placeholder="alex@example.com"
                      className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white placeholder:text-[#64748b] focus:border-[var(--theme-primary)] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Existing Website Radio */}
                <div>
                  <span className="block text-xs font-semibold text-white mb-2">
                    Current Website Status
                  </span>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#cbd5e1]">
                      <input
                        type="radio"
                        name="existing_site"
                        checked={formData.hasWebsite === 'No, starting fresh'}
                        onChange={() => setFormData({ ...formData, hasWebsite: 'No, starting fresh' })}
                        className="accent-[var(--theme-primary)]"
                      />
                      <span>Starting fresh (Need new website in 2 days)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-[#cbd5e1]">
                      <input
                        type="radio"
                        name="existing_site"
                        checked={formData.hasWebsite === 'Yes, needs modern refresh'}
                        onChange={() => setFormData({ ...formData, hasWebsite: 'Yes, needs modern refresh' })}
                        className="accent-[var(--theme-primary)]"
                      />
                      <span>Have old site, needs 2-day modern overhaul</span>
                    </label>
                  </div>
                </div>

                {/* Checkboxes: Priorities */}
                <div>
                  <span className="block text-xs font-semibold text-white mb-2">
                    Key Sprint Priorities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: '2-Day Express Launch', label: '2-Day Express Live Launch (48h)' },
                      { id: 'Turnkey Hosting & Deployment', label: 'Turnkey Cloud Hosting & Custom Domain' },
                      { id: 'Monthly Maintenance', label: 'Continuous Monthly Maintenance & Updates' },
                      { id: 'WhatsApp Lead Gen', label: 'Direct 1-Tap WhatsApp Inbound Chat' }
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-[#14102c] border border-[#2e2354] cursor-pointer hover:border-[var(--theme-border)] transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.needs.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="accent-[var(--theme-primary)]"
                        />
                        <span className="text-xs text-white">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Package */}
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5" htmlFor="pkg">
                    Selected Package or Service
                  </label>
                  <select
                    id="pkg"
                    value={formData.preferredPackage}
                    onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                    className="w-full h-12 px-4 bg-[#14102c] border border-[#2e2354] rounded-xl text-sm text-white focus:border-[var(--theme-primary)] outline-none transition-colors"
                  >
                    <option value="Starter Sprint (₹5,999) · 2-Day Live Launch">Starter Sprint — ₹5,999 (2-Day Live Launch)</option>
                    <option value="Growth Sprint (₹10,999) · 2-Day Live Launch">Growth Sprint — ₹10,999 (Most Popular · 2-Day Live Launch)</option>
                    <option value="Scale Sprint (₹16,999) · 2-3 Day Live Launch">Scale Sprint — ₹16,999 (Full Custom Digital Flagship)</option>
                    <option value="Essential Monthly Maintenance (₹999/mo)">Essential Monthly Care (₹999/mo)</option>
                    <option value="Growth Monthly Maintenance (₹1,999/mo)">Growth Monthly Care & Updates (₹1,999/mo)</option>
                    <option value="Custom Enterprise Build">Custom Enterprise Build</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] hover:brightness-110 text-white font-syne font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer shadow-lg"
                >
                  <span>Launch My 2-Day Website</span>
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
                Chat Directly With Us
              </h4>
              <p className="text-xs text-[#cbd5e1] leading-relaxed mb-6">
                Message our development desk on WhatsApp. We answer questions, review your requirements, and schedule your 48-hour sprint immediately.
              </p>

              <div className="space-y-4 text-xs">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20LaunchCraft%2C%20I%20am%20interested%20in%20a%20website%20delivered%20in%202%20days`}
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
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#14102c] hover:bg-[#1f173f] border border-[#2e2354] hover:border-[var(--theme-border)] text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-primary)]/20 text-[var(--theme-primary)] flex items-center justify-center shrink-0 border border-[var(--theme-border)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[var(--theme-primary)] transition-colors">
                      Direct Sprint Line
                    </div>
                    <div className="text-[11px] text-[#94a3b8] font-mono-num">Mon - Sat: 9 AM - 9 PM</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#14102c] border border-[#2e2354] text-white">
                  <div className="w-10 h-10 rounded-xl bg-[var(--theme-secondary)]/20 text-[var(--theme-secondary)] flex items-center justify-center shrink-0 border border-[var(--theme-secondary)]/40">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Global Reach</div>
                    <div className="text-[11px] text-[#94a3b8]">Serving Clients Worldwide &amp; Nationally</div>
                  </div>
                </div>
              </div>

              {/* Copy WhatsApp template */}
              <div className="mt-6 pt-5 border-t border-[#251d45]">
                <button
                  onClick={handleCopyWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#14102c] hover:bg-[#201842] border border-[#2e2354] text-xs font-semibold text-[#cbd5e1] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedWhatsApp ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00FF9D]" />
                      <span className="text-[#00FF9D]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--theme-primary)]" />
                      <span>Copy WhatsApp Brief Text</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* SLA Trust Badges */}
            <div className="p-6 rounded-3xl bg-[#0f0c22]/90 border border-[#2e2354] shadow-xl backdrop-blur-2xl">
              <h5 className="text-xs uppercase tracking-wider text-[var(--theme-primary)] font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--theme-primary)]" />
                <span>Our 2-Day Delivery Guarantee</span>
              </h5>
              <ul className="space-y-2 text-xs text-[#cbd5e1]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>Working website delivered and live within 48 hours of brief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>Turnkey cloud hosting, custom domain mapping &amp; SSL included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>Predictable monthly maintenance for continuous updates &amp; zero stress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1.5 shrink-0" />
                  <span>100% full source code ownership — zero platform hostage lock-in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
