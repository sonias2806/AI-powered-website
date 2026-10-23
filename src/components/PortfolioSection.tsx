import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Layers,
  Grid,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Smartphone,
  Laptop,
  Clock,
  MapPin,
  ShieldCheck,
  Zap,
  X,
  Rotate3d,
  DollarSign
} from 'lucide-react';
import { DEMO_CONCEPTS, CONTACT_CONFIG } from '../data/siteData';
import { PortfolioItem } from '../types';
import confetti from 'canvas-confetti';

interface PortfolioSectionProps {
  onSelectConceptForConsultation: (conceptName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectConceptForConsultation
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [previewModalItem, setPreviewModalItem] = useState<PortfolioItem | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'laptop' | 'mobile'>('laptop');
  const [cardTab, setCardTab] = useState<'overview' | 'pricing'>('overview');

  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = DEMO_CONCEPTS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== '3d' || previewModalItem) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5200);
    return () => clearInterval(interval);
  }, [isAutoPlaying, viewMode, nextSlide, previewModalItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== '3d' || previewModalItem) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextSlide, prevSlide, previewModalItem]);

  // Interactive 3D mouse tilt with smooth depth
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 18, y: -y * 18 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Drag / swipe gesture handling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = e.clientX - dragStartX;
    if (diff > 50) {
      prevSlide();
    } else if (diff < -50) {
      nextSlide();
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.8 },
        colors: ['#FFB800', '#EC4899', '#8B5CF6', '#06B6D4', '#00FF9D']
      });
    } catch {
      // safe fallback
    }
  };

  const categoryTabs = [
    { label: 'All 3D Demos', index: null, icon: Sparkles },
    { label: 'Salon & Spa Demo', index: 0, icon: Sparkles },
    { label: 'Dental & Clinic Demo', index: 1, icon: ShieldCheck },
    { label: 'Cafe & Bakery Demo', index: 2, icon: Zap }
  ];

  return (
    <section id="portfolio" className="relative w-full py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-rose-200/50">
      {/* Radiant Multi-Hue Glow Blobs (Vibrant & Warm) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-400/30 via-rose-500/25 to-purple-500/20 rounded-full blur-[160px]" />
        <div className="absolute -bottom-20 right-10 w-[550px] h-[550px] bg-cyan-400/25 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-pink-500/25 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Explicit '3D Showcase Demo' Branding */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white/85 border border-rose-200 text-xs font-semibold uppercase tracking-wider text-rose-700 mb-4 backdrop-blur-2xl shadow-md shadow-rose-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Rotate3d className="w-3.5 h-3.5 text-rose-500" />
            <span className="font-bold tracking-widest">3D SHOWCASE DEMO</span>
            <span className="text-slate-300">·</span>
            <span className="text-purple-700 font-bold">Interactive Client Prototypes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-slate-900 tracking-tight max-w-4xl text-balance">
            Interactive <span className="gradient-text-rainbow">3D Showcase Demo</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mt-4 font-normal leading-relaxed text-balance">
            Rotate through live 3D showcase prototypes engineered for salons, clinics, and artisan cafes worldwide. Drag the 3D deck, test viewport responsiveness, and explore bespoke conversion funnels ready to deploy nationally and internationally.
          </p>

          {/* Ethical Transparency Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50/90 border border-amber-300 text-xs text-amber-900 text-left backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong className="text-amber-800">Demonstration Prototypes:</strong> Handcrafted demonstration concepts showing layouts and 1-tap booking flows—never misrepresented as past client projects.
            </span>
          </div>

          {/* Interactive Category Filter Pills (21st.dev style instant switching) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categoryTabs.map((tab, idx) => {
              const isActive = tab.index === null ? false : activeIndex === tab.index;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (tab.index !== null) {
                      setActiveIndex(tab.index);
                      setViewMode('3d');
                    } else {
                      setViewMode('3d');
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all backdrop-blur-xl border ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 text-white font-bold border-rose-300 shadow-md shadow-rose-500/20 scale-105'
                      : 'bg-white/80 text-slate-700 hover:text-rose-600 border-rose-100 hover:border-rose-200'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Controls Bar: Mode Switcher & Autoplay Toggle */}
          <div className="flex items-center gap-3 mt-5 p-1.5 bg-white/90 backdrop-blur-2xl rounded-2xl border border-rose-200 shadow-xl">
            <div className="flex items-center gap-1 bg-rose-50/60 p-1 rounded-xl border border-rose-100">
              <button
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === '3d'
                    ? 'bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 text-white shadow-md shadow-rose-500/20'
                    : 'text-slate-700 hover:text-rose-600'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Spatial Deck</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 text-white shadow-md shadow-rose-500/20'
                    : 'text-slate-700 hover:text-rose-600'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid Catalog</span>
              </button>
            </div>

            {viewMode === '3d' && (
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-700 hover:text-rose-600 text-xs font-mono-num border border-rose-200 transition-colors shadow-xs"
                title={isAutoPlaying ? 'Pause 3D rotation' : 'Resume 3D rotation'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-600" /> : <Play className="w-3.5 h-3.5 text-amber-500" />}
                <span className="hidden sm:inline font-semibold">{isAutoPlaying ? 'Auto' : 'Paused'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 3D SPATIAL CAROUSEL VIEW (21st.dev Style Perspective Stage) */}
        {viewMode === '3d' ? (
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="relative w-full py-8 select-none"
            style={{ minHeight: '660px' }}
          >
            {/* Showroom Stage Pedestal & Floor Reflection Underneath 3D Cards */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[860px] h-[200px] pointer-events-none -z-0">
              {/* Ambient Radial Spotlight */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_60%,rgba(244,63,94,0.25),rgba(245,158,11,0.2)_40%,transparent_75%)] animate-stage-pulse" />
              {/* Outer Illuminated Pedestal Ellipse */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[460px] sm:w-[680px] h-[48px] rounded-[100%] border border-rose-300 bg-gradient-to-r from-amber-400/20 via-rose-500/25 to-purple-500/20 blur-[1px] animate-pedestal-glow" />
              {/* Concentric Halo Ring */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[32px] rounded-[100%] border border-amber-300 bg-amber-400/15 blur-[2px]" />
            </div>

            {/* Desktop Side Floating Feature Signals */}
            <div className="hidden xl:flex flex-col gap-3 absolute left-4 top-1/3 z-20 pointer-events-none">
              <div className="px-4 py-2.5 rounded-2xl bg-white/90 border border-emerald-300 backdrop-blur-xl shadow-lg flex items-center gap-2 text-xs">
                <Zap className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span className="text-slate-800 font-bold">Sub-2s Worldwide CDN</span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-white/90 border border-purple-300 backdrop-blur-xl shadow-lg flex items-center gap-2 text-xs">
                <Smartphone className="w-3.5 h-3.5 text-purple-600" />
                <span className="text-slate-800 font-bold">Touch Gesture Responsive</span>
              </div>
            </div>

            <div className="hidden xl:flex flex-col gap-3 absolute right-4 top-1/3 z-20 pointer-events-none text-right">
              <div className="px-4 py-2.5 rounded-2xl bg-white/90 border border-rose-300 backdrop-blur-xl shadow-lg flex items-center justify-end gap-2 text-xs">
                <span className="text-slate-800 font-bold">1-Tap WhatsApp Funnel</span>
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-white/90 border border-amber-300 backdrop-blur-xl shadow-lg flex items-center justify-end gap-2 text-xs">
                <span className="text-slate-800 font-bold">USD &amp; INR Rate Cards</span>
                <DollarSign className="w-3.5 h-3.5 text-amber-500" />
              </div>
            </div>

            {/* 3D Perspective Stage Container */}
            <div
              className="relative w-full max-w-5xl mx-auto h-[580px] sm:h-[620px] flex items-center justify-center z-10"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d'
              }}
            >
              {DEMO_CONCEPTS.map((item, index) => {
                // Compute cyclic offset from active index
                let offset = (index - activeIndex) % totalItems;
                if (offset > totalItems / 2) offset -= totalItems;
                if (offset < -totalItems / 2) offset += totalItems;

                const isCenter = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;

                // 3D positioning
                const rotateY = offset * 36;
                const translateX = offset * 290;
                const translateZ = isCenter ? 150 : isAdjacent ? -110 : -340;
                const scale = isCenter ? 1 : isAdjacent ? 0.86 : 0.72;
                const opacity = isCenter ? 1 : isAdjacent ? 0.8 : 0.4;
                const zIndex = 50 - Math.abs(offset) * 10;

                // Mouse tilt applied to center card
                const currentTiltX = isCenter ? tilt.x : 0;
                const currentTiltY = isCenter ? tilt.y : 0;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIndex(index);
                      }
                    }}
                    onMouseMove={isCenter ? handleMouseMove : undefined}
                    onMouseLeave={isCenter ? handleMouseLeave : undefined}
                    className="absolute w-[330px] sm:w-[450px] h-[550px] sm:h-[590px] rounded-3xl transition-transform duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `
                        translateX(${translateX}px)
                        translateZ(${translateZ}px)
                        rotateY(${rotateY + currentTiltX}deg)
                        rotateX(${currentTiltY}deg)
                        scale(${scale})
                      `,
                      opacity,
                      zIndex,
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'center center'
                    }}
                  >
                    {/* Glowing Chromatic Frame on Active Center Card */}
                    {isCenter && (
                      <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 opacity-90 blur-[3px] -z-10 animate-pulse-glow" />
                    )}

                    {/* Card Body in Frosted Glass */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white/95 border border-white/90 backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(244,63,94,0.18)] flex flex-col group transition-all duration-300">
                      {/* Specular Sheen Sweep Animation */}
                      {isCenter && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl z-30">
                          <div className="w-[120px] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-specular-sheen" />
                        </div>
                      )}

                      {/* Top Visual: Screen Header */}
                      <div className="relative h-56 sm:h-64 overflow-hidden shrink-0 bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.altText}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

                        {/* Top Badges inside card preview */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl border border-rose-200 shadow-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            3D LIVE DEMO
                          </span>

                          <span className="flex items-center gap-1 text-[11px] font-mono-num font-bold text-amber-800 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl border border-amber-300 shadow-md">
                            <Zap className="w-3 h-3 text-amber-500" />
                            {item.metrics || 'Sub-2s Speed'}
                          </span>
                        </div>

                        {/* Hover Overlay Button to Inspect in Device Frame */}
                        {isCenter && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/40 backdrop-blur-xs">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewModalItem(item);
                              }}
                              className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                            >
                              <Eye className="w-4 h-4 text-white" />
                              <span>Inspect 3D Device Screen</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info Section with Dynamic Switcher */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Category & Location */}
                          <div className="flex items-center justify-between gap-2 text-xs text-rose-600 font-bold mb-1">
                            <span className="flex items-center gap-1 truncate">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              {item.category}
                            </span>
                            <span className="text-[10px] text-purple-700 font-mono-num uppercase px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200">
                              Demo Prototype
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-slate-900 tracking-tight leading-snug">
                            {item.name}
                          </h3>

                          {/* Quick Interactive Card Sub-Tab (Overview vs Rate Card Preview) */}
                          <div className="flex items-center gap-2 mt-3 mb-2 p-1 bg-rose-50/70 rounded-xl border border-rose-100">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCardTab('overview');
                              }}
                              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                cardTab === 'overview'
                                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs'
                                  : 'text-slate-600 hover:text-rose-600'
                              }`}
                            >
                              Concept Overview
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCardTab('pricing');
                              }}
                              className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all ${
                                cardTab === 'pricing'
                                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs'
                                  : 'text-slate-600 hover:text-rose-600'
                              }`}
                            >
                              Sample Menu &amp; Rates
                            </button>
                          </div>

                          {cardTab === 'overview' ? (
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>
                          ) : (
                            <div className="space-y-1 py-1">
                              {item.simulatedPreview?.services.slice(0, 2).map((s: { title: string; price: string; detail: string }, sIdx: number) => (
                                <div key={sIdx} className="flex items-center justify-between text-xs bg-white px-2 py-1 rounded-lg border border-rose-100">
                                  <span className="text-slate-800 font-medium truncate">{s.title}</span>
                                  <span className="font-mono-num font-bold text-rose-600 shrink-0 ml-2">{s.price}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Features Tags & Bottom Action Buttons */}
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.features.slice(0, 3).map((feat: string, i: number) => (
                              <span
                                key={i}
                                className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-200/60"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 pt-3 border-t border-rose-100">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewModalItem(item);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-bold text-rose-700 flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <Smartphone className="w-3.5 h-3.5 text-rose-500" />
                              <span>Live Simulator</span>
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                triggerConfetti();
                                onSelectConceptForConsultation(item.name);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-rose-500/20 transition-all hover:-translate-y-0.5"
                            >
                              <span>Select Demo</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Spatial Navigation Controls (Prev / Next & Progress Indicators) */}
            <div className="flex items-center justify-between max-w-xl mx-auto mt-6 px-4">
              <button
                onClick={prevSlide}
                aria-label="Previous 3D Showcase Card"
                className="w-12 h-12 rounded-2xl bg-white hover:bg-rose-50 border border-rose-200 text-slate-800 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg hover:border-rose-300"
              >
                <ChevronLeft className="w-5 h-5 text-rose-600" />
              </button>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2.5">
                {DEMO_CONCEPTS.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-10 bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 shadow-md shadow-rose-500/30'
                        : 'w-2.5 bg-rose-200 hover:bg-rose-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next 3D Showcase Card"
                className="w-12 h-12 rounded-2xl bg-white hover:bg-rose-50 border border-rose-200 text-slate-800 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg hover:border-rose-300"
              >
                <ChevronRight className="w-5 h-5 text-rose-600" />
              </button>
            </div>

            {/* Helpful Gesture Hint */}
            <div className="text-center mt-3 text-xs font-semibold text-slate-500 flex items-center justify-center gap-2">
              <Rotate3d className="w-3.5 h-3.5 text-rose-500 animate-spin-slow" />
              <span>Interactive 3D Stage · Drag horizontally · Arrow keys · Move mouse for 3D gyro tilt</span>
            </div>
          </div>
        ) : (
          /* GRID CATALOG VIEW (21st.dev Style Bento Cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
            {DEMO_CONCEPTS.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white/90 border border-rose-100 overflow-hidden flex flex-col justify-between hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 group shadow-xl backdrop-blur-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg border border-rose-200 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-mono-num font-bold text-amber-800 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-amber-300 shadow-sm">
                      {item.metrics || 'Sub-2s Speed'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-rose-600 font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-xl font-syne font-bold text-slate-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.features.map((feat: string, i: number) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-200/60"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-rose-100">
                      <button
                        onClick={() => setPreviewModalItem(item)}
                        className="flex-1 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-xs font-bold text-rose-700 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-rose-500" />
                        <span>Interactive Demo</span>
                      </button>

                      <button
                        onClick={() => {
                          triggerConfetti();
                          onSelectConceptForConsultation(item.name);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 text-white font-bold text-xs flex items-center justify-center gap-1 hover:opacity-95 shadow-md shadow-rose-500/20 transition-all"
                      >
                        <span>Select Concept</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 21st.dev-Style Interactive Device Simulator Modal in Frosted Glass */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden bg-white border border-rose-200 rounded-3xl shadow-2xl flex flex-col text-left">
            {/* Top Device Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-rose-50/80 border-b border-rose-100 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-none">
                    {previewModalItem.name}
                  </h3>
                  <span className="text-[11px] text-rose-600 font-mono-num font-semibold">
                    {previewModalItem.category} · 3D Showcase Demo Simulation
                  </span>
                </div>
              </div>

              {/* Device Selector (MacBook vs iPhone) */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white p-1 rounded-xl border border-rose-200">
                  <button
                    onClick={() => setPreviewDevice('laptop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      previewDevice === 'laptop'
                        ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">MacBook</span>
                  </button>

                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      previewDevice === 'mobile'
                        ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">iPhone</span>
                  </button>
                </div>

                <button
                  onClick={() => setPreviewModalItem(null)}
                  className="p-2 rounded-xl bg-rose-100/80 text-slate-700 hover:text-slate-900 hover:bg-rose-200 transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50 flex items-center justify-center">
              <div className={`transition-all duration-300 ${previewDevice === 'mobile' ? 'w-full max-w-sm' : 'w-full max-w-3xl'}`}>
                {/* Simulated Screen */}
                <div className="rounded-2xl bg-white border border-rose-200/80 overflow-hidden shadow-xl p-4 sm:p-6 space-y-5">
                  {/* Hero simulation inside screen */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={previewModalItem.image}
                      alt={previewModalItem.altText}
                      className="w-full h-44 sm:h-52 object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-4 flex flex-col justify-end">
                      <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                        {previewModalItem.simulatedPreview?.tagline}
                      </span>
                      <h4 className="text-base sm:text-xl font-extrabold text-white leading-snug">
                        {previewModalItem.headline}
                      </h4>
                    </div>
                  </div>

                  {/* Sample Services & Rates */}
                  <div>
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center justify-between">
                      <span>Service Menu &amp; Rates</span>
                      <span className="text-emerald-600 text-[11px] font-mono-num font-bold">USD &amp; INR Ready</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {previewModalItem.simulatedPreview?.services.map((s: { title: string; price: string; detail: string }, idx: number) => (
                        <div key={idx} className="p-3 rounded-xl bg-rose-50/50 border border-rose-100">
                          <div className="text-xs font-bold text-slate-900 truncate">{s.title}</div>
                          <div className="text-sm font-extrabold text-rose-600 my-1 font-mono-num">{s.price}</div>
                          <div className="text-[11px] text-slate-600 leading-snug">{s.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operating Hours & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                    <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100 flex items-start gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Operating Schedule</span>
                        <span className="text-slate-600">{previewModalItem.simulatedPreview?.operatingHours}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-100 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Location Setup</span>
                        <span className="text-slate-600">{previewModalItem.simulatedPreview?.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Footer inside simulator */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-slate-600 font-medium">
                      Want this exact responsive structure tailored to your brand?
                    </div>
                    <button
                      onClick={() => {
                        setPreviewModalItem(null);
                        triggerConfetti();
                        onSelectConceptForConsultation(previewModalItem.name);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs whitespace-nowrap shadow-lg shadow-rose-500/20"
                    >
                      Consult on this 3D Showcase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
