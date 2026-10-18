/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreeCanvasBackdrop } from './components/ThreeCanvasBackdrop';
import { Showcase3DCarousel } from './components/Showcase3DCarousel';
import { SuccessStories3DCarousel } from './components/SuccessStories3DCarousel';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { InteractiveScreenModal } from './components/InteractiveScreenModal';
import { MessageSquare, ArrowRight, Sparkles, Zap, Award } from 'lucide-react';
import { CONTACT_INFO } from './data/siteData';
import { PortfolioItem } from './types';
import { soundManager } from './utils/soundEffects';

export default function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Salon and Spa');
  const [selectedPackage, setSelectedPackage] = useState<string>('Growth (₹9,999)');
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [modalConceptId, setModalConceptId] = useState<string>('lumiere-salon-spa');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [colorTheme, setColorTheme] = useState<'cosmic' | 'emerald' | 'sunset'>('cosmic');

  const handleToggleSound = () => {
    const nextState = soundManager.toggle();
    setSoundEnabled(nextState);
  };

  const handleCycleTheme = () => {
    soundManager.playClick();
    setColorTheme(prev => prev === 'cosmic' ? 'emerald' : prev === 'emerald' ? 'sunset' : 'cosmic');
  };

  const handleSelectIndustry = (industryName: string) => {
    soundManager.playClick();
    setSelectedIndustry(industryName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    soundManager.playChime();
    setSelectedPackage(packageName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    soundManager.playClick();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLiveConcept = (conceptId: string) => {
    soundManager.playClick();
    setModalConceptId(conceptId);
    setIsSimulatorModalOpen(true);
  };

  const handleOpenPortfolioItemModal = (item: PortfolioItem) => {
    soundManager.playClick();
    setModalConceptId(item.id);
    setIsSimulatorModalOpen(true);
  };

  const handleSelectConceptForContact = (conceptName: string) => {
    soundManager.playChime();
    setSelectedIndustry(conceptName.includes('Salon') || conceptName.includes('Spa') ? 'Salon and Spa' : 'Other Local Business');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStoryForContact = (businessName: string) => {
    soundManager.playChime();
    if (businessName.includes('Salon') || businessName.includes('Lumière') || businessName.includes('Spa')) {
      setSelectedIndustry('Salon and Spa');
    } else if (businessName.includes('Residences') || businessName.includes('PrimeNest')) {
      setSelectedIndustry('Real Estate');
    } else if (businessName.includes('Jewellery')) {
      setSelectedIndustry('Jewellery');
    } else if (businessName.includes('Gym') || businessName.includes('Crossfit')) {
      setSelectedIndustry('Gym & Fitness');
    } else {
      setSelectedIndustry('Other Local Business');
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08070e] text-[#f1f4fb] flex flex-col font-sans selection:bg-[#FFB800] selection:text-black relative">
      {/* 3D WebGL Constellation Canvas Backdrop */}
      <ThreeCanvasBackdrop />

      {/* Top Header with Award-Caliber BrandLogo & Atmosphere switcher */}
      <Header
        onOpenLivePreview={() => handleOpenLiveConcept('lumiere-salon-spa')}
        onSelectContact={() => {
          const contactElem = document.getElementById('contact');
          if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
        }}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        colorTheme={colorTheme}
        onCycleTheme={handleCycleTheme}
      />

      <main className="flex-1 w-full relative z-10">
        {/* Hero Section with 3D Tilt Showcase & Live Mockup */}
        <Hero
          onOpenConsultation={() => {
            const contactElem = document.getElementById('contact');
            if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3D SPATIAL BUSINESS PORTFOLIO CAROUSEL */}
        <Showcase3DCarousel
          onOpenLiveConcept={handleOpenPortfolioItemModal}
          onSelectConceptForContact={handleSelectConceptForContact}
        />

        {/* 3D SUCCESS STORIES CAROUSEL (Verified Hyderabad Revenue & 3D Flip Cards) */}
        <SuccessStories3DCarousel
          onSelectStoryForContact={handleSelectStoryForContact}
        />

        {/* 3D ROI & WHATSAPP CONVERSION PREDICTOR */}
        <RoiCalculatorSection />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Industries Section */}
        <IndustriesSection
          onSelectIndustry={handleSelectIndustry}
          onPreviewConcept={handleOpenLiveConcept}
        />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Callout Banner between Workflow and Pricing */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#07060d] border-y border-[#2e2354] relative overflow-hidden">
          {/* Ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#FFB800]/15 via-[#EC4899]/15 to-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#120e29] via-[#1a1238] to-[#120e29] p-8 sm:p-12 border border-[#FFB800]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-2xl relative z-10">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#140e29] border border-[#FFB800]/30 text-xs font-mono-num text-[#FFB800] mb-3 font-bold">
                <Zap className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span>HYDERABAD MARKET REALITY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white mb-2 leading-tight">
                Your Customers Are Searching On Their Phones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Right Now.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-space mt-2">
                Give them an ultra-fast place to discover your store, view service cards &amp; pricing, and message your WhatsApp counter in a single tap before your competitors do.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-space font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white px-7 py-4 rounded-xl shadow-[0_4px_25px_rgba(255,184,0,0.35)] hover:shadow-[0_6px_35px_rgba(236,72,153,0.5)] transition-all hover:scale-105"
              >
                <span>Launch My Website</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20a%20website%20for%20my%20business`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-space font-bold text-xs uppercase tracking-wider bg-[#171332] text-white border border-[#2e2354] hover:bg-[#251d4d] px-6 py-4 rounded-xl transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#00FF9D]" />
                <span>WhatsApp Brief</span>
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section with Interactive Addon Calculator */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* Contact & Enquiry Section */}
        <ContactSection
          initialIndustry={selectedIndustry}
          initialPackage={selectedPackage}
        />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA Banner */}
        <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-br from-[#130f2d] via-[#1a123a] to-[#0e0a22] p-8 sm:p-16 text-center border border-[#FFB800]/30 shadow-2xl overflow-hidden backdrop-blur-2xl">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FFB800]/20 via-[#EC4899]/20 to-[#8B5CF6]/20 rounded-full blur-[130px] pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xs font-space font-bold uppercase tracking-widest text-[#FFB800] bg-[#140e29] px-4 py-1.5 rounded-full mb-4 border border-[#FFB800]/30 shadow-lg shadow-[#FFB800]/10">
                FREE INITIAL HYDERABAD SPRINT CONSULTATION
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white max-w-2xl mb-4 text-balance">
                Ready to Put Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Online?</span>
              </h2>
              <p className="text-sm sm:text-base text-[#cbd5e1] max-w-xl mb-8 text-balance font-normal leading-relaxed font-space">
                Let's craft a website that makes your business easier to discover, trust, and contact across Hyderabad within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-space font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white px-8 py-4 rounded-xl shadow-[0_10px_35px_-5px_rgba(255,184,0,0.4)] hover:shadow-[0_15px_45px_-5px_rgba(236,72,153,0.5)] hover:scale-105 transition-all"
                >
                  <span>Get My Website In 24 Hours</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20am%20ready%20to%20get%20my%20website%20live`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-space font-bold uppercase tracking-wider bg-[#171332] text-white px-8 py-4 rounded-xl border border-[#2e2354] hover:bg-[#251d4d] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#00FF9D]" />
                  <span>Chat With Us First</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Action Dock */}
      <FloatingWhatsApp />

      {/* Footer with BrandLogo & 3D links */}
      <Footer />

      {/* Interactive Screen Simulation Modal */}
      <InteractiveScreenModal
        isOpen={isSimulatorModalOpen}
        onClose={() => setIsSimulatorModalOpen(false)}
        conceptId={modalConceptId}
        onSelectConceptForContact={handleSelectConceptForContact}
      />
    </div>
  );
}
