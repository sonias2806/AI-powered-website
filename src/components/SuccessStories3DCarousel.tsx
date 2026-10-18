import React, { useState, useEffect, useCallback } from 'react';
import {
  Quote,
  MapPin,
  CheckCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';
import { SUCCESS_STORIES } from '../data/siteData';
import { SuccessStory } from '../types';

interface SuccessStories3DCarouselProps {
  onSelectStoryForContact?: (businessName: string) => void;
}

export const SuccessStories3DCarousel: React.FC<SuccessStories3DCarouselProps> = ({
  onSelectStoryForContact
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const total = SUCCESS_STORIES.length;

  const nextStory = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevStory = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextStory();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextStory]);

  const current = SUCCESS_STORIES[currentIndex];

  return (
    <section id="success-stories" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#05060f] overflow-hidden">
      {/* Ambient Radiant Beams */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#FFB800]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#EC4899]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120e24] border border-[#FFB800]/30 text-xs font-space font-medium text-[#FFB800] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            <span className="uppercase tracking-widest font-bold">VERIFIED HYDERABAD REVENUE DATA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight max-w-3xl text-balance">
            Real Hyderabad Businesses. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]">Explosive Growth.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#cbd5e1] max-w-2xl mt-4 font-normal leading-relaxed text-balance">
            Explore 3D verified case studies from businesses across Jubilee Hills, Gachibowli, and Panjagutta that transitioned from zero online footprint to high-margin WhatsApp conversions in 24 hours.
          </p>

          {/* Aggregate Impact Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-4xl p-4 sm:p-5 rounded-2xl bg-[#0e0c1f]/80 backdrop-blur-xl border border-[#2a1e4a] shadow-2xl">
            <div className="text-center p-2 border-r border-[#2a1e4a] last:border-none">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-[#FFB800] font-mono-num">24 Hrs</div>
              <div className="text-[11px] font-space text-[#94a3b8] mt-0.5">Rapid Deployment</div>
            </div>
            <div className="text-center p-2 border-r sm:border-r border-[#2a1e4a] last:border-none">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-[#00FF9D] font-mono-num">3.4x</div>
              <div className="text-[11px] font-space text-[#94a3b8] mt-0.5">Average Lead Lift</div>
            </div>
            <div className="text-center p-2 border-r border-[#2a1e4a] last:border-none">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-white font-mono-num">99.4</div>
              <div className="text-[11px] font-space text-[#94a3b8] mt-0.5">Mobile Speed Score</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-syne font-extrabold text-[#EC4899] font-mono-num">100%</div>
              <div className="text-[11px] font-space text-[#94a3b8] mt-0.5">Direct Code Ownership</div>
            </div>
          </div>
        </div>

        {/* 3D Spatial Deck Showcase */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: '1600px' }}>
          {/* Main 3D Card with Flip capability */}
          <div
            className={`relative w-full rounded-3xl transition-transform duration-700 ease-out preserve-3d shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)] cursor-pointer ${
              isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ minHeight: '440px' }}
          >
            {/* FRONT FACE OF 3D CARD */}
            <div className="w-full h-full rounded-3xl p-7 sm:p-10 bg-gradient-to-br from-[#160f2b] via-[#0d091e] to-[#070512] border border-[#332356] backface-hidden flex flex-col justify-between">
              {/* Top Row: Business Brand & Location & 24h Badge */}
              <div>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${current.avatarBg} text-white flex items-center justify-center font-syne font-bold text-lg shadow-xl shrink-0 ring-2 ring-white/20`}>
                      {current.avatarInitial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white">
                          {current.businessName}
                        </h3>
                        <ShieldCheck className="w-4 h-4 text-[#00FF9D]" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#FFB800] font-space mt-1 font-bold">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{current.location}</span>
                        <span className="text-[#4b3d67]">·</span>
                        <span className="text-[#cbd5e1]">{current.industry}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#070512] border border-[#2a1e4a] text-xs font-mono-num text-[#00FF9D] font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{current.launchDuration}</span>
                    </div>

                    <span className="text-[11px] font-space text-[#cbd5e1] bg-[#1a1436] px-2.5 py-1 rounded-lg border border-[#2a1e4a]">
                      {current.packageUsed}
                    </span>
                  </div>
                </div>

                {/* Quote Body with Accent Border */}
                <div className="relative my-6 pl-4 border-l-2 border-[#FFB800]">
                  <Quote className="w-7 h-7 text-[#FFB800]/30 absolute -top-4 -left-3" />
                  <p className="text-base sm:text-lg text-[#e2e8f0] font-sans leading-relaxed italic">
                    "{current.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom: Verifiable Metrics Matrix */}
              <div>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#070512]/90 border border-[#2a1e4a] mb-6">
                  {current.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl sm:text-2xl font-syne font-extrabold text-[#00FF9D] font-mono-num leading-tight">
                        {metric.stat}
                      </div>
                      <div className="text-[11px] font-space text-[#94a3b8] mt-0.5 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer: Founder Bio + Flip hint & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#231b3e]">
                  <div>
                    <div className="font-space font-bold text-white text-sm">{current.ownerName}</div>
                    <div className="text-xs text-[#94a3b8]">{current.ownerRole}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono-num text-[#94a3b8] hidden sm:inline">
                      Click card to flip
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectStoryForContact) onSelectStoryForContact(current.businessName);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] text-white font-space font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-[#FFB800]/25 hover:shadow-[#EC4899]/40 hover:scale-[1.02] transition-all"
                    >
                      <span>Build Similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK FACE OF 3D CARD */}
            <div className="absolute inset-0 w-full h-full rounded-3xl p-7 sm:p-10 bg-[#0e0c1f] border border-[#FFB800]/60 [transform:rotateY(180deg)] backface-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#2a1e4a] pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#FFB800]" />
                    <h4 className="font-syne font-bold text-lg text-white">
                      Behind The Build: {current.businessName}
                    </h4>
                  </div>
                  <span className="text-xs font-mono-num text-[#00FF9D] font-bold">Delivered in 24h</span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-space">
                  <p>
                    <strong className="text-white">Challenge Solved:</strong> High volume of untapped search intent in {current.location}. Previous reliance on Instagram DM caused dropped bookings and lost inquiries.
                  </p>
                  <p>
                    <strong className="text-white">Technical Architecture:</strong> Zero-bloat modern React architecture, pre-filled WhatsApp conversion links, sub-second 4G/5G mobile load times, and structured local SEO schema.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {current.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#1a1436] text-[#FFB800] text-xs font-mono-num border border-[#2a1e4a]">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2a1e4a]">
                <span className="text-xs text-[#94a3b8] font-space">Click anywhere to flip back</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectStoryForContact) onSelectStoryForContact(current.businessName);
                  }}
                  className="px-4 py-2 rounded-xl bg-white text-black font-space font-bold text-xs uppercase"
                >
                  Start Your Website
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Navigation Bar */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevStory}
              aria-label="Previous story"
              className="w-12 h-12 rounded-2xl bg-[#0e0c1f] hover:bg-[#1a1436] border border-[#2a1e4a] text-white flex items-center justify-center transition-all hover:scale-105 hover:border-[#FFB800]/50"
            >
              <ChevronLeft className="w-5 h-5 text-[#FFB800]" />
            </button>

            {/* Pagination Thumbnails */}
            <div className="flex items-center gap-2">
              {SUCCESS_STORIES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setIsFlipped(false);
                    setCurrentIndex(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-space transition-all flex items-center gap-2 ${
                    idx === currentIndex
                      ? 'bg-[#1a1436] text-white border border-[#FFB800]/60 shadow-sm'
                      : 'text-[#94a3b8] hover:text-white'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-[#FFB800]' : 'bg-[#2a1e4a]'}`} />
                  <span className="hidden sm:inline truncate max-w-[100px]">{s.businessName.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            <button
              onClick={nextStory}
              aria-label="Next story"
              className="w-12 h-12 rounded-2xl bg-[#0e0c1f] hover:bg-[#1a1436] border border-[#2a1e4a] text-white flex items-center justify-center transition-all hover:scale-105 hover:border-[#FFB800]/50"
            >
              <ChevronRight className="w-5 h-5 text-[#FFB800]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
