import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  MapPin,
  CheckCircle,
  Smartphone,
  Eye,
  Layers,
  Grid,
  Play,
  Pause,
  ArrowRight,
  TrendingUp,
  Zap
} from 'lucide-react';
import { PORTFOLIO } from '../data/siteData';
import { PortfolioItem } from '../types';
import confetti from 'canvas-confetti';

interface Showcase3DCarouselProps {
  onOpenLiveConcept?: (item: PortfolioItem) => void;
  onSelectConceptForContact?: (conceptName: string) => void;
}

export const Showcase3DCarousel: React.FC<Showcase3DCarouselProps> = ({
  onOpenLiveConcept,
  onSelectConceptForContact
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = PORTFOLIO.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== '3d') return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, viewMode, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== '3d') return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, nextSlide, prevSlide]);

  // Interactive 3D mouse tilt on active card
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
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FFB800', '#EC4899', '#00FF9D']
      });
    } catch {
      // fallback safe
    }
  };

  return (
    <section id="portfolio" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#05060f] overflow-hidden">
      {/* Radiant ambient gold & magenta light blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-[#FFB800]/15 via-[#EC4899]/15 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#00FF9D]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Flagship Badge */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e24] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4 shadow-lg shadow-[#FFB800]/5">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
            <span className="tracking-widest uppercase font-bold">DIGITAL FLAGSHIP 3D SHOWCASE</span>
            <span className="text-[#4b3d67]">/</span>
            <span className="text-[#00FF9D] font-bold">GLOBAL &amp; NATIONAL CLIENTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight max-w-4xl text-balance">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">3D Flagship Showcase</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance">
            Explore live digital experiences custom-crafted for luxury salons and spas, aesthetic suites, and wellness flagships worldwide. Sub-second performance engineered to convert discerning clientele instantly.
          </p>

          {/* Controls Bar: Mode switcher (3D vs Grid) + Autoplay toggle */}
          <div className="flex items-center gap-3 mt-8 p-1.5 bg-[#0e0c1f]/90 backdrop-blur-xl rounded-2xl border border-[#2a1e4a] shadow-2xl">
            <div className="flex items-center gap-1 bg-[#070512] p-1 rounded-xl border border-[#2a1e4a]">
              <button
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-space font-semibold transition-all ${
                  viewMode === '3d'
                    ? 'bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white shadow-md font-bold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Spatial View</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-space font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white shadow-md font-bold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Grid Catalog</span>
              </button>
            </div>

            {viewMode === '3d' && (
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#070512] text-[#94a3b8] hover:text-white text-xs font-mono-num border border-[#2a1e4a] transition-colors"
                title={isAutoPlaying ? 'Pause 3D rotation' : 'Resume 3D rotation'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#00FF9D]" /> : <Play className="w-3.5 h-3.5 text-[#FFB800]" />}
                <span className="hidden sm:inline">{isAutoPlaying ? 'Auto' : 'Paused'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 3D SPATIAL CAROUSEL VIEW */}
        {viewMode === '3d' ? (
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="relative w-full py-8 select-none"
            style={{ minHeight: '620px' }}
          >
            {/* 3D Perspective Stage */}
            <div
              className="relative w-full max-w-4xl mx-auto h-[540px] sm:h-[580px] flex items-center justify-center"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d'
              }}
            >
              {PORTFOLIO.map((item, index) => {
                // Compute cyclic offset from active index
                let offset = (index - activeIndex) % totalItems;
                if (offset > totalItems / 2) offset -= totalItems;
                if (offset < -totalItems / 2) offset += totalItems;

                const isCenter = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;

                // 3D parameters
                const rotateY = offset * 38;
                const translateX = offset * 260;
                const translateZ = isCenter ? 120 : isAdjacent ? -120 : -320;
                const scale = isCenter ? 1 : isAdjacent ? 0.85 : 0.7;
                const opacity = isCenter ? 1 : isAdjacent ? 0.65 : 0.25;
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
                    className="absolute w-[320px] sm:w-[420px] h-[520px] sm:h-[560px] rounded-3xl transition-transform duration-700 ease-out cursor-pointer"
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
                    {/* Glassmorphic Cyber Card Container with Golden/Magenta Accents */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0d0a1c]/95 border border-[#2a1e4a] backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col group transition-all duration-300">
                      {/* Active Card Glowing Edge in Gold & Magenta */}
                      {isCenter && (
                        <div className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-[#FFB800]/60 shadow-[inset_0_0_25px_rgba(255,184,0,0.2)] z-20" />
                      )}

                      {/* Top Visual: Concept Screen Header */}
                      <div className="relative h-60 sm:h-64 overflow-hidden shrink-0 bg-[#070512]">
                        <img
                          src={item.image}
                          alt={item.altText}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1c] via-transparent to-black/40" />

                        {/* Top Bar inside card preview */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="text-[11px] font-space font-bold tracking-wider uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-[#FFB800]/30">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-mono-num font-bold text-[#00FF9D] bg-[#0d0a1c]/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-[#00FF9D]/40">
                            <Zap className="w-3 h-3 text-[#00FF9D]" />
                            {item.metrics}
                          </span>
                        </div>

                        {/* Center Hover Action Pill */}
                        {isCenter && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenLiveConcept) onOpenLiveConcept(item);
                              }}
                              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-space font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
                            >
                              <Eye className="w-4 h-4 text-white" />
                              <span>Inspect Live Mockup</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Bottom Info Section */}
                      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Location & Title */}
                          <div className="flex items-center gap-1.5 text-xs text-[#FFB800] font-space font-bold mb-1">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span>{item.location}</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-syne font-bold text-white tracking-tight leading-snug">
                            {item.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#cbd5e1] mt-2 line-clamp-2 leading-relaxed font-space">
                            {item.description}
                          </p>
                        </div>

                        {/* Features Tags & Bottom Actions */}
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.features.slice(0, 3).map((feat, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono-num text-[#cbd5e1] bg-[#1a1436] px-2.5 py-0.5 rounded border border-[#2a1e4a]"
                              >
                                {feat}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 pt-3 border-t border-[#231b3e]">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onOpenLiveConcept) onOpenLiveConcept(item);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-[#17132e] hover:bg-[#231b45] border border-[#312356] text-xs font-space font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <Smartphone className="w-3.5 h-3.5 text-[#FFB800]" />
                              <span>Live Screen</span>
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                triggerConfetti();
                                if (onSelectConceptForContact) onSelectConceptForContact(item.name);
                              }}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-space font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#FFB800]/25 hover:shadow-[#EC4899]/40 hover:scale-[1.02] transition-all"
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
                className="w-12 h-12 rounded-2xl bg-[#0e0c1f] hover:bg-[#1a1436] border border-[#2a1e4a] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl hover:border-[#FFB800]/50"
              >
                <ChevronLeft className="w-5 h-5 text-[#FFB800]" />
              </button>

              {/* Step indicator pills */}
              <div className="flex items-center gap-2">
                {PORTFOLIO.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-8 bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]'
                        : 'w-2 bg-[#2a1e4a] hover:bg-[#4b3d67]'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next 3D Showcase Card"
                className="w-12 h-12 rounded-2xl bg-[#0e0c1f] hover:bg-[#1a1436] border border-[#2a1e4a] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl hover:border-[#FFB800]/50"
              >
                <ChevronRight className="w-5 h-5 text-[#FFB800]" />
              </button>
            </div>

            {/* Keyboard shortcut hint */}
            <div className="text-center mt-3 text-[11px] font-mono-num text-[#94a3b8]">
              Drag horizontally · Use ← → arrow keys · Click any card to center
            </div>
          </div>
        ) : (
          /* GRID CATALOG VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6">
            {PORTFOLIO.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-[#0b0c1a] border border-[#231b3e] overflow-hidden flex flex-col justify-between hover:border-[#FFB800]/50 transition-all duration-300 hover:-translate-y-1 group shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-[#070512]">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c1a] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-space font-bold uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-[#FFB800]/30">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-mono-num font-bold text-[#00FF9D] bg-[#0b0c1a]/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-[#00FF9D]/40">
                      {item.metrics}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#FFB800] font-space font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-xl font-syne font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#94a3b8] leading-relaxed mb-4 font-space">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.features.map((feat, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono-num text-[#cbd5e1] bg-[#1a1436] px-2.5 py-0.5 rounded border border-[#2a1e4a]"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-[#231b3e]">
                      <button
                        onClick={() => {
                          if (onOpenLiveConcept) onOpenLiveConcept(item);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-[#17132e] hover:bg-[#231b45] border border-[#312356] text-xs font-space font-bold text-white flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#FFB800]" />
                        <span>Interactive Demo</span>
                      </button>

                      <button
                        onClick={() => {
                          triggerConfetti();
                          if (onSelectConceptForContact) onSelectConceptForContact(item.name);
                        }}
                        className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white text-xs font-space font-bold flex items-center justify-center gap-1 hover:brightness-110 shadow-md shadow-[#FFB800]/25"
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
    </section>
  );
};
