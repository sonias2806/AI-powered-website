/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { FounderSection } from './components/FounderSection';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { ThreeCanvasBackdrop } from './components/ThreeCanvasBackdrop';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { CONTACT_CONFIG } from './data/siteData';

export default function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Hair & Beauty Salon');
  const [selectedPackage, setSelectedPackage] = useState<string>('Growth Business (₹9,999)');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    scrollToContact();
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedIndustry(serviceName);
    scrollToContact();
  };

  const handleSelectConceptForContact = (conceptName: string) => {
    if (conceptName.toLowerCase().includes('salon')) {
      setSelectedIndustry('Hair & Beauty Salon');
    } else if (conceptName.toLowerCase().includes('clinic')) {
      setSelectedIndustry('Medical & Dental Clinic');
    } else if (conceptName.toLowerCase().includes('cafe')) {
      setSelectedIndustry('Cafe & Bakery');
    } else {
      setSelectedIndustry('Other Local Business');
    }
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#060713] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 relative overflow-x-hidden">
      {/* Dynamic 3D Particle Constellation Canvas */}
      <ThreeCanvasBackdrop />

      {/* Vibrant Award-Winning Ambient Aurora Mesh Background Layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Top-Right Sunset Amber-Coral Glowing Orb */}
        <div className="absolute -top-32 -right-24 w-[620px] h-[620px] bg-gradient-to-br from-amber-500/25 via-rose-500/20 to-transparent rounded-full blur-[140px] animate-float-slow" />

        {/* Top-Left Royal Indigo & Electric Violet Orb */}
        <div className="absolute -top-20 -left-28 w-[580px] h-[580px] bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-transparent rounded-full blur-[140px] animate-float-reverse" />

        {/* Mid-Left Cyber Cyan & Emerald Glow */}
        <div className="absolute top-[35%] -left-36 w-[640px] h-[640px] bg-gradient-to-br from-cyan-500/20 via-emerald-500/15 to-transparent rounded-full blur-[150px] animate-pulse-glow" />

        {/* Mid-Right Neon Hot Pink & Magenta Aura */}
        <div className="absolute top-[50%] -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-pink-500/22 via-purple-600/20 to-transparent rounded-full blur-[150px] animate-float-slow" />

        {/* Bottom Ambient Solar Gold & Violet Mesh */}
        <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-gradient-to-t from-amber-500/20 via-indigo-600/20 to-transparent rounded-full blur-[160px] animate-float-reverse" />

        {/* Subtle Cyber Grid with Radial Vignette */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
      </div>

      {/* Top Header with strict 3-zone Top Bar Contract */}
      <Header
        onSelectContact={scrollToContact}
        onOpenDemoWork={scrollToPortfolio}
      />

      <main className="flex-1 w-full relative z-10">
        {/* Hero Section with exact required headline, supporting text, and dual CTAs */}
        <Hero
          onOpenConsultation={scrollToContact}
          onViewWork={scrollToPortfolio}
        />

        {/* Portfolio Section with 3 Clearly Labelled Demo Concepts (Salon, Clinic, Cafe) */}
        <PortfolioSection
          onSelectConceptForConsultation={handleSelectConceptForContact}
        />

        {/* Founder Introduction Section with Photograph Placeholder & Professional Biography */}
        <FounderSection
          onOpenConsultation={scrollToContact}
        />

        {/* Service Cards tailored for National & International Businesses */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* Simple Three-Step Project Process */}
        <HowItWorksSection
          onOpenConsultation={scrollToContact}
        />

        {/* Transparent Package Information in INR */}
        <PricingSection
          onSelectPackage={handleSelectPackage}
        />

        {/* Mid-Page Callout Banner with Radiant Gradient Border & Glassmorphic Glow */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-4xl mx-auto rounded-3xl p-[1.5px] bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 shadow-2xl shadow-indigo-950/40">
            <div className="rounded-[22px] bg-[#0c0e1e]/90 backdrop-blur-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
              {/* Internal subtle colorful glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Zero Obligation Consultation · National &amp; International</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-syne font-extrabold text-white">
                  Not Sure Which Structure Fits Your Business?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-lg">
                  Send us a quick WhatsApp with your business type. We will share a tailored layout outline and honest advice within 2 hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto relative z-10">
                <a
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20get%20advice%20on%20a%20website%20for%20my%20business`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-950/30 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950/20" />
                  <span>WhatsApp Advice</span>
                </a>
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all hover:-translate-y-0.5"
                >
                  <span>Request Free Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Strong Contact & Consultation Section with Form Validation & Configurable WhatsApp Placeholder */}
        <ContactSection
          initialIndustry={selectedIndustry}
          initialPackage={selectedPackage}
        />

        {/* Practical FAQs for Small Business Owners */}
        <FaqSection />
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Clean Footer with Global Client Hubs & Contact Details */}
      <Footer />
    </div>
  );
}
