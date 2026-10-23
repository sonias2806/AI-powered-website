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
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Zap,
  X
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
    }, 4800);
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

  // Interactive 3D mouse tilt on active center card (21st.dev style)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 16, y: -y * 16 });
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
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FFB800', '#EC4899', '#8B5CF6', '#06B6D4', '#00FF9D']
      });
    } catch {
      // fallback safe
    }
  };

  const activeConcept = DEMO_CONCEPTS[activeIndex];

  return (
    <section id="portfolio" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-white/10">
      {/* 21st.dev-inspired Radiant Multi-Hue Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-amber-500/20 via-rose-500/18 to-indigo-600/15 rounded-full blur-[160px]" />
        <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-purple-600/18 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with 21st.dev-Style Spatial Badge */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4 backdrop-blur-2xl shadow-xl shadow-amber-950/20">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>3D Interactive Website Showcase</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-300 font-bold">National &amp; International Concepts</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight max-w-4xl text-balance">
            Interactive <span className="gradient-text-rainbow">3D Demo Websites</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mt-4 font-normal leading-relaxed text-balance">
            Rotate through live 3D concepts created for salons, clinics, and cafes. Each demo showcases mobile ergonomics, clear rate cards, and 1-tap WhatsApp booking funnels ready to deploy worldwide.
          </p>

          {/* Ethical Transparency Disclaimer */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 text-left backdrop-blur-md shadow-md">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-amber-300">Demonstration Concepts:</strong> Handcrafted prototypes showing layouts and booking conversion funnels—never misrepresented as real client projects.
            </span>
          </div>

          {/* 21st.dev-Inspired Controls Bar: Mode Switcher & Autoplay Toggle */}
          <div className="flex items-center gap-3 mt-8 p-1.5 bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-2xl">
            <div className="flex items-center gap-1 bg-[#090b16] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === '3d'
                    ? 'bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 text-white shadow-lg shadow-rose-950/40'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Spatial Deck</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 text-white shadow-lg shadow-rose-950/40'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid Catalog</span>
              </button>
            </div>

            {viewMode === '3d' && (
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#090b16] text-slate-300 hover:text-white text-xs font-mono-num border border-white/10 transition-colors"
                title={isAutoPlaying ? 'Pause 3D rotation' : 'Resume 3D rotation'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-amber-400" />}
                <span className="hidden sm:inline">{isAutoPlaying ? 'Auto' : 'Paused'}</span>
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
            className="relative w-full py-6 select-none"
            style={{ minHeight: '620px' }}
          >
            {/* 3D Perspective Stage */}
            <div
              className="relative w-full max-w-5xl mx-auto h-[550px] sm:h-[600px] flex items-center justify-center"
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

                // 3D parameters
                const rotateY = offset * 36;
                const translateX = offset * 280;
                const translateZ = isCenter ? 140 : isAdjacent ? -110 : -320;
                const scale = isCenter ? 1 : isAdjacent ? 0.86 : 0.72;
                const opacity = isCenter ? 1 : isAdjacent ? 0.75 : 0.3;
                const zIndex = 50 - Math.abs(offset) * 10;

                // Tilt on center card
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
                    className="absolute w-[320px] sm:w-[440px] h-[520px] sm:h-[570px] rounded-3xl transition-transform duration-700 ease-out cursor-pointer"
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
                    {/* 21st.dev Glassmorphic Card Container with Radiant Border */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0c0f22]/95 border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col group transition-all duration-300">
                      {/* Active Card Glowing Edge in Amber & Rose */}
                      {isCenter && (
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-amber-400/80 shadow-[inset_0_0_30px_rgba(245,158,11,0.25)] z-20" />
                      )}

                      {/* Top Visual: Concept Screen Header */}
                      <div className="relative h-60 sm:h-64 overflow-hidden shrink-0 bg-slate-950">
                        <img
                          src={item.image}
                          alt={item.altText}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f22] via-transparent to-black/40" />

                        {/* Top Bar inside card preview */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-mono-num font-bold text-emerald-300 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-emerald-400/40">
                            <Zap className="w-3 h-3 text-emerald-400" />
                            {item.metrics || 'Sub-2s Speed'}
                          </span>
                        </div>

                        {/* Center Hover Action Pill */}
                        {isCenter && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-xs">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewModalItem(item);
                              }}
                              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                            >
                              <Eye className="w-4 h-4 text-white" />
                              <span>Inspect Live Screen</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info Section */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Location & Title */}
                          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{item.location}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white tracking-tight leading-snug">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Features Tags & Bottom Actions */}
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.features.slice(0, 3).map((feat, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono-num text-slate-200 bg-white/5 px-2.5 py-0.5 rounded-lg border border-white/10"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewModalItem(item);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                              <span>Live Screen</span>
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                triggerConfetti();
                                onSelectConceptForConsultation(item.name);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-950/30 transition-all hover:-translate-y-0.5"
                            >
                              <span>Build This</span>
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

            {/* Spatial Navigation Controls (Prev / Next & Dots) */}
            <div className="flex items-center justify-between max-w-xl mx-auto mt-6 px-4">
              <button
                onClick={prevSlide}
                aria-label="Previous 3D Showcase Card"
                className="w-12 h-12 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl hover:border-amber-400/50"
              >
                <ChevronLeft className="w-5 h-5 text-amber-400" />
              </button>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2">
                {DEMO_CONCEPTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-8 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-500'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next 3D Showcase Card"
                className="w-12 h-12 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl hover:border-amber-400/50"
              >
                <ChevronRight className="w-5 h-5 text-amber-400" />
              </button>
            </div>

            {/* Hint */}
            <div className="text-center mt-3 text-[11px] font-mono-num text-slate-400">
              Drag horizontally · Use ← → arrow keys · Click adjacent cards to focus
            </div>
          </div>
        ) : (
          /* GRID CATALOG VIEW (21st.dev Style Bento Cards) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
            {DEMO_CONCEPTS.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-[#0c0f22]/90 border border-white/15 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 group shadow-2xl backdrop-blur-xl"
              >
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f22] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-mono-num font-bold text-emerald-300 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-emerald-400/40">
                      {item.metrics || 'Sub-2s Speed'}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-xl font-syne font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.features.map((feat, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono-num text-slate-200 bg-white/5 px-2.5 py-0.5 rounded border border-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                      <button
                        onClick={() => setPreviewModalItem(item)}
                        className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5 text-amber-400" />
                        <span>Interactive Demo</span>
                      </button>

                      <button
                        onClick={() => {
                          triggerConfetti();
                          onSelectConceptForConsultation(item.name);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 hover:brightness-110 shadow-md shadow-amber-950/25 transition-all"
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

      {/* 21st.dev-Style Interactive Device Simulator Modal */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden bg-[#0d1024] border border-white/20 rounded-3xl shadow-2xl flex flex-col text-left">
            {/* Top Device Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-white/10 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h3 className="text-sm font-bold text-white leading-none">
                    {previewModalItem.name}
                  </h3>
                  <span className="text-[11px] text-amber-300/80 font-mono-num">
                    {previewModalItem.category} · Interactive Simulation
                  </span>
                </div>
              </div>

              {/* Device Selector (MacBook vs iPhone) */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setPreviewDevice('laptop')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      previewDevice === 'laptop'
                        ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 shadow-sm font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">MacBook</span>
                  </button>

                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      previewDevice === 'mobile'
                        ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 shadow-sm font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">iPhone</span>
                  </button>
                </div>

                <button
                  onClick={() => setPreviewModalItem(null)}
                  className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950/60 flex items-center justify-center">
              <div className={`transition-all duration-300 ${previewDevice === 'mobile' ? 'w-full max-w-sm' : 'w-full max-w-3xl'}`}>
                {/* Simulated Screen */}
                <div className="rounded-2xl bg-[#0e1226] border border-white/15 overflow-hidden shadow-2xl p-4 sm:p-6 space-y-5">
                  {/* Hero simulation inside screen */}
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                    <img
                      src={previewModalItem.image}
                      alt={previewModalItem.altText}
                      className="w-full h-44 sm:h-52 object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
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
                    <div className="text-xs font-bold text-white uppercase tracking-wide mb-3 flex items-center justify-between">
                      <span>Service Menu &amp; Rates</span>
                      <span className="text-emerald-400 text-[11px] font-mono-num">USD &amp; INR Ready</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {previewModalItem.simulatedPreview?.services.map((s, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                          <div className="text-xs font-semibold text-white truncate">{s.title}</div>
                          <div className="text-sm font-extrabold text-amber-400 my-1 font-mono-num">{s.price}</div>
                          <div className="text-[11px] text-slate-300 leading-snug">{s.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operating Hours & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-2">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Operating Schedule</span>
                        <span className="text-slate-300">{previewModalItem.simulatedPreview?.operatingHours}</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Location Setup</span>
                        <span className="text-slate-300">{previewModalItem.simulatedPreview?.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Footer inside simulator */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-slate-300">
                      Want this exact responsive structure tailored to your brand?
                    </div>
                    <button
                      onClick={() => {
                        setPreviewModalItem(null);
                        triggerConfetti();
                        onSelectConceptForConsultation(previewModalItem.name);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-bold text-xs whitespace-nowrap shadow-lg shadow-amber-950/20"
                    >
                      Consult on this Concept
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
