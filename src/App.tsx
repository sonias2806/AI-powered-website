/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThreeCanvasBackdrop } from './components/ThreeCanvasBackdrop';
import { Showcase3DCarousel } from './components/Showcase3DCarousel';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { InteractiveScreenModal } from './components/InteractiveScreenModal';
import { MessageSquare, ArrowRight, Zap, Palette, Cloud, RefreshCw } from 'lucide-react';
import { CONTACT_INFO } from './data/siteData';
import { PortfolioItem } from './types';
import { soundManager } from './utils/soundEffects';
import { THEMES, ThemeId } from './utils/theme';

export default function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Salon and Spa');
  const [selectedPackage, setSelectedPackage] = useState<string>('Growth Sprint (₹10,999) · 2-Day Live Launch');
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [modalConceptId, setModalConceptId] = useState<string>('lumiere-salon-spa');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [colorTheme, setColorTheme] = useState<ThemeId>('gold');
  const [showThemeToast, setShowThemeToast] = useState(false);

  const themeOrder: ThemeId[] = ['gold', 'emerald', 'crimson', 'violet'];

  const handleToggleSound = () => {
    const nextState = soundManager.toggle();
    setSoundEnabled(nextState);
  };

  const handleCycleTheme = () => {
    soundManager.playClick();
    setColorTheme(prev => {
      const idx = themeOrder.indexOf(prev);
      const next = themeOrder[(idx + 1) % themeOrder.length];
      return next;
    });
    setShowThemeToast(true);
    setTimeout(() => setShowThemeToast(false), 2400);
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

  const currentThemeConfig = THEMES[colorTheme] || THEMES.gold;

  return (
    <div
      data-theme={colorTheme}
      className="min-h-screen bg-[#08070e] text-[#f1f4fb] flex flex-col font-sans selection:bg-[var(--theme-primary)] selection:text-black relative transition-colors duration-500"
    >
      {/* 3D WebGL Constellation Canvas Backdrop reacting to active theme colors */}
      <ThreeCanvasBackdrop themeId={colorTheme} />

      {/* Top Header with LaunchCraft LC Monogram & Color Switcher */}
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
        {/* Strong Hero Section with headline "Your Business Deserves a Website That Wins Customers." */}
        <Hero
          onOpenConsultation={() => {
            const contactElem = document.getElementById('contact');
            if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
          }}
          activeThemeId={colorTheme}
          onCycleTheme={handleCycleTheme}
        />

        {/* 3D SPATIAL WORKING PROTOTYPE SHOWCASE */}
        <Showcase3DCarousel
          onOpenLiveConcept={handleOpenPortfolioItemModal}
          onSelectConceptForContact={handleSelectConceptForContact}
        />

        {/* Services & USP Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Industries Section */}
        <IndustriesSection
          onSelectIndustry={handleSelectIndustry}
          onPreviewConcept={handleOpenLiveConcept}
        />

        {/* How It Works Section (2-Day Sprint & Monthly Maintenance) */}
        <HowItWorksSection />

        {/* Callout Banner between Workflow and Pricing */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#07060d] border-y border-[#2e2354] relative overflow-hidden">
          {/* Ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[var(--theme-primary)]/15 via-[var(--theme-secondary)]/15 to-[var(--theme-accent)]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#120e29] via-[#1a1238] to-[#120e29] p-8 sm:p-12 border border-[var(--theme-border)] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl backdrop-blur-2xl relative z-10">
            <div className="max-w-xl text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#140e29] border border-[var(--theme-border)] text-xs font-mono-num text-[var(--theme-primary)] mb-3 font-bold">
                <Zap className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span>2-DAY DELIVERY SLA · ZERO STRESS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-syne font-extrabold text-white mb-2 leading-tight">
                A Working Website In 2 Days.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">
                  Turnkey Hosting &amp; Managed Care.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-space mt-2">
                We configure your custom domain, set up high-speed global cloud CDN hosting, deploy SSL certificates, and keep your website constantly updated with transparent monthly maintenance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center font-space font-extrabold text-xs uppercase tracking-wider text-white px-7 py-4 rounded-xl shadow-lg transition-all hover:scale-105 bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]"
              >
                <span>Launch in 2 Days</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20LaunchCraft%2C%20I%20am%20interested%20in%20a%20website%20delivered%20in%202%20days`}
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

        {/* Pricing Section with 2-Day Launch & Monthly Maintenance tabs */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* Contact & Enquiry Section */}
        <ContactSection
          initialIndustry={selectedIndustry}
          initialPackage={selectedPackage}
        />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final Callout Banner */}
        <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#07060d] relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-br from-[#130f2d] via-[#1a123a] to-[#0e0a22] p-8 sm:p-16 text-center border border-[var(--theme-border)] shadow-2xl overflow-hidden backdrop-blur-2xl">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--theme-primary)]/20 via-[var(--theme-secondary)]/20 to-[var(--theme-accent)]/20 rounded-full blur-[130px] pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-xs font-space font-bold uppercase tracking-widest text-[var(--theme-primary)] bg-[#140e29] px-4 py-1.5 rounded-full mb-4 border border-[var(--theme-border)] shadow-lg">
                48-HOUR SPRINT GUARANTEE · NATIONAL &amp; GLOBAL
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white max-w-2xl mb-4 text-balance">
                Your Business Deserves a Website That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]">
                  Wins Customers.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#cbd5e1] max-w-xl mb-8 text-balance font-normal leading-relaxed font-space">
                Launch in 2 days. Host on high-speed global infrastructure. Enjoy peaceful, reliable monthly maintenance with zero technical headaches.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-space font-extrabold uppercase tracking-wider text-white px-8 py-4 rounded-xl shadow-xl hover:scale-105 transition-all bg-gradient-to-r from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)]"
                >
                  <span>Get My Website In 2 Days</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%20LaunchCraft%2C%20I%20am%20ready%20to%20get%20my%20website%20live%20in%202%20days`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-space font-bold uppercase tracking-wider bg-[#171332] text-white px-8 py-4 rounded-xl border border-[#2e2354] hover:bg-[#251d4d] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#00FF9D]" />
                  <span>Chat On WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Theme Changed Toast Notification */}
      {showThemeToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#120e29]/95 border border-[var(--theme-border)] text-white px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-2xl flex items-center gap-2.5 text-xs font-space animate-fade-in">
          <Palette className="w-4 h-4 text-[var(--theme-primary)]" />
          <span>Active Palette: <strong className="font-bold text-[var(--theme-primary)]">{currentThemeConfig.name}</strong> ({currentThemeConfig.badge})</span>
        </div>
      )}

      {/* Floating WhatsApp Action Dock */}
      <FloatingWhatsApp />

      {/* Footer with LaunchCraft logo & links */}
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
