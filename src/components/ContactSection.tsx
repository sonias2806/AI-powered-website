import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Phone, Mail, CheckCircle2, Globe2, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/siteData';

interface ContactSectionProps {
  initialIndustry?: string;
  initialPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialIndustry = '',
  initialPackage = 'Growth Business (₹9,999 / $149)'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessCategory: initialIndustry || 'Hair & Beauty Salon',
    locationArea: 'India (National Pan-India)',
    phone: '',
    email: '',
    preferredPackage: initialPackage,
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialIndustry) {
      setFormData(prev => ({ ...prev, businessCategory: initialIndustry }));
    }
  }, [initialIndustry]);

  useEffect(() => {
    if (initialPackage) {
      setFormData(prev => ({ ...prev, preferredPackage: initialPackage }));
    }
  }, [initialPackage]);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name.';
    }

    if (!formData.businessName.trim()) {
      errs.businessName = 'Please enter your business or clinic name.';
    }

    // Phone number check (at least 8 digits for global numbers)
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone or WhatsApp number.';
    } else if (phoneClean.length < 8) {
      errs.phone = 'Please enter a valid phone number with country/area code.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `Hi Aura Web Studio! I would like to enquire about a website for my business.
• Name: ${formData.fullName.trim() || 'Business Owner'}
• Business: ${formData.businessName.trim() || 'My Business'} (${formData.businessCategory})
• Client Region: ${formData.locationArea}
• Phone / WhatsApp: ${formData.phone.trim()}
• Package Interest: ${formData.preferredPackage}
${formData.notes ? `• Project Details: ${formData.notes}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setSubmitted(true);
    // Build pre-filled WhatsApp link
    const waText = encodeURIComponent(generateWhatsAppMessage());
    const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${waText}`;

    // Auto-open after short visual confirmation
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-b border-white/10">
      {/* Dynamic Colorful Mesh Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/4 -right-28 w-[600px] h-[600px] bg-gradient-to-bl from-rose-500/20 via-purple-600/18 to-transparent rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-28 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-xs font-bold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-xl shadow-lg shadow-amber-950/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Get Started · Free Global &amp; National Consultation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-white tracking-tight">
            Let's Discuss Your Business Website
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed drop-shadow-sm">
            Fill in a few details or reach out directly on WhatsApp. We will review your requirements, recommend the best layout structure, and provide a clear quote in USD or INR.
          </p>
        </div>

        {/* 2-Column Split: Form (Left 7 Cols) + Direct WhatsApp / Phone Info (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Inquiry Form with Glassmorphic Rim */}
          <div className="lg:col-span-7 rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400/30 via-rose-500/20 to-indigo-500/30 shadow-2xl shadow-black/40">
            <div className="bg-[#0b0e1f]/95 p-7 sm:p-9 rounded-[22px] backdrop-blur-2xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/40 shadow-xl shadow-emerald-950/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Consultation Request Received!</h3>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-amber-400">{formData.fullName}</strong>. We've compiled your brief for <strong className="text-white">{formData.businessName}</strong>.
                  </p>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Click below to open WhatsApp with your pre-filled inquiry details:
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-xl shadow-emerald-950/40"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                      <span>Open Pre-filled WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl border border-white/15 transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-full-name">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Elena Rostova / Ramesh V."
                        className={`w-full h-11 px-3.5 bg-slate-900/90 border rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-white/15 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-business-name">
                        Business or Clinic Name *
                      </label>
                      <input
                        id="contact-business-name"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => {
                          setFormData({ ...formData, businessName: e.target.value });
                          if (errors.businessName) setErrors({ ...errors, businessName: '' });
                        }}
                        placeholder="e.g. Aura Luxury Clinic / Bloom Cafe"
                        className={`w-full h-11 px-3.5 bg-slate-900/90 border rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.businessName ? 'border-rose-500' : 'border-white/15 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Category & Global Region */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-category">
                        Business Category *
                      </label>
                      <select
                        id="contact-category"
                        value={formData.businessCategory}
                        onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                        className="w-full h-11 px-3.5 bg-slate-900/90 border border-white/15 rounded-xl text-xs text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="Hair & Beauty Salon">Hair &amp; Beauty Salon / Spa</option>
                        <option value="Medical & Dental Clinic">Medical or Dental Clinic</option>
                        <option value="Cafe & Bakery">Artisan Cafe or Bakery</option>
                        <option value="Restaurant & Dining">Restaurant or Food Brand</option>
                        <option value="Gym & Fitness Studio">Gym or Fitness Studio</option>
                        <option value="Coaching & Academy">Coaching Institute or Academy</option>
                        <option value="Boutique & Retail">Boutique, Studio or Retail</option>
                        <option value="Other Business">Other Business Category</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-area">
                        Your Location / Region
                      </label>
                      <select
                        id="contact-area"
                        value={formData.locationArea}
                        onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                        className="w-full h-11 px-3.5 bg-slate-900/90 border border-white/15 rounded-xl text-xs text-white focus:border-amber-400 focus:outline-none"
                      >
                        {CONTACT_CONFIG.areasServed.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Phone/WhatsApp & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-phone">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. +1 555 123 4567 or +91 98765 43210"
                        className={`w-full h-11 px-3.5 bg-slate-900/90 border rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-white/15 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-email">
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="name@business.com"
                        className={`w-full h-11 px-3.5 bg-slate-900/90 border rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/15 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/40'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Package Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-package">
                      Interested Package
                    </label>
                    <select
                      id="contact-package"
                      value={formData.preferredPackage}
                      onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
                      className="w-full h-11 px-3.5 bg-slate-900/90 border border-white/15 rounded-xl text-xs text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Starter Presence (₹4,999 / $79)">Starter Presence — ₹4,999 / $79 (1 Page)</option>
                      <option value="Growth Business (₹9,999 / $149)">Growth Business — ₹9,999 / $149 (Most Popular)</option>
                      <option value="Custom Flagship (₹16,999 / $249)">Custom Flagship — ₹16,999 / $249 (Full-Service)</option>
                      <option value="Need Advice on Best Option">Need Advice on Best Option</option>
                    </select>
                  </div>

                  {/* Requirements / Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="contact-notes">
                      Brief Notes or Specific Services (Optional)
                    </label>
                    <textarea
                      id="contact-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us what services you offer, if you have an existing Instagram page or domain, and what you'd like your website to achieve..."
                      className="w-full p-3 bg-slate-900/90 border border-white/15 rounded-xl text-xs text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-xl shadow-amber-950/30 flex items-center justify-center gap-2 mt-2 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 stroke-[2.4]" />
                    <span>Send Consultation Request &amp; Open WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Configurable Placeholder Info */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {/* Direct Connect Box */}
            <div className="bg-[#0b0e1f]/90 p-7 rounded-3xl border border-white/15 backdrop-blur-2xl shadow-xl shadow-black/40">
              <h3 className="text-base font-bold text-white mb-2">
                Prefer To Reach Out Directly?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                We work across time zones seamlessly. You can directly WhatsApp or call us to discuss your ideas with zero delay.
              </p>

              <div className="space-y-3">
                {/* WhatsApp button with configurable placeholder */}
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20a%20website%20consultation%20for%20my%20business`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 transition-colors group shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageSquare className="w-5 h-5 fill-emerald-500/20" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300">
                      WhatsApp Instant Chat
                    </div>
                    <div className="text-[11px] text-emerald-300/80 font-mono-num">{CONTACT_CONFIG.displayPhone}</div>
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${CONTACT_CONFIG.whatsappNumber}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 text-slate-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-amber-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300">
                      Direct Phone / Video Call
                    </div>
                    <div className="text-[11px] text-slate-400">Available across global time zones</div>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-indigo-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Direct Email</div>
                    <div className="text-[11px] text-slate-400 font-mono-num">{CONTACT_CONFIG.displayEmail}</div>
                  </div>
                </div>

                {/* Location / Global Coverage */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-rose-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Serving Clients Worldwide</div>
                    <div className="text-[11px] text-slate-400">India · United States · United Kingdom · UAE · Australia · Remote Global</div>
                  </div>
                </div>
              </div>

              {/* Explicit placeholder note ensuring we never invent personal user details */}
              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-slate-400 leading-normal">
                <span className="font-bold text-amber-300">Configurable Placeholder: </span>
                {CONTACT_CONFIG.placeholderNotice}
              </div>
            </div>

            {/* Trust Assurance Card */}
            <div className="p-5 rounded-3xl bg-slate-900/70 border border-white/15 backdrop-blur-xl text-xs text-slate-200 shadow-xl shadow-black/30">
              <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Our Digital Craft Commitment</span>
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-300">
                <li>• No aggressive sales pitches—only honest advice for your business.</li>
                <li>• Free initial consultation and layout structure recommendations.</li>
                <li>• Transparent one-time pricing in USD or INR with zero surprise charges.</li>
                <li>• 100% full source code and domain ownership upon launch.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
