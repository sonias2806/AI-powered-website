import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  withText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none group cursor-pointer ${className}`}>
      {/* 3D Geometric Isometric Chromatic Crystal Prism (Aura Luxe Crest) */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6`}>
        {/* Dynamic Multi-layered Ambient Light Blooms */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-[#FFB800]/40 via-[#EC4899]/35 to-[#8B5CF6]/40 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />
        <div className="absolute -inset-0.5 bg-[#00FF9D]/20 rounded-xl blur-md opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-[0_8px_25px_rgba(255,184,0,0.45)]"
        >
          <defs>
            {/* Prismatic Holographic Gradients */}
            <linearGradient id="aura-facet-top" x1="8" y1="12" x2="56" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF1B8" />
              <stop offset="45%" stopColor="#FFB800" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>

            <linearGradient id="aura-facet-left" x1="6" y1="26" x2="32" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4338CA" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="aura-facet-right" x1="32" y1="26" x2="58" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFB800" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>

            <linearGradient id="aura-core-beam" x1="20" y1="20" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#00FF9D" />
              <stop offset="80%" stopColor="#FFB800" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>

            <linearGradient id="aura-inner-a" x1="32" y1="18" x2="32" y2="46" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFB800" />
            </linearGradient>

            <filter id="aura-superglow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Isometric Hexagonal Diamond Shield */}
          <path
            d="M32 4L58 18V46L32 60L6 46V18L32 4Z"
            fill="#090714"
            stroke="url(#aura-facet-top)"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Top Facet (Upper Refraction Plane) */}
          <path
            d="M32 6L54 18.5L32 30L10 18.5L32 6Z"
            fill="url(#aura-facet-top)"
            fillOpacity="0.45"
            stroke="#FFF1B8"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Left Facet (Deep Cyber Violet & Magenta Plane) */}
          <path
            d="M10 20L31 31.5V56L10 44.5V20Z"
            fill="url(#aura-facet-left)"
            fillOpacity="0.55"
            stroke="#EC4899"
            strokeWidth="1"
          />

          {/* Right Facet (Solar Amber Gold Plane) */}
          <path
            d="M54 20L33 31.5V56L54 44.5V20Z"
            fill="url(#aura-facet-right)"
            fillOpacity="0.55"
            stroke="#FFB800"
            strokeWidth="1"
          />

          {/* Central Architectural Monogram: Intersecting "A" (Apex) & "L" (Luxe) */}
          {/* Left leg of A */}
          <path
            d="M32 17L22 43"
            stroke="url(#aura-core-beam)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Right leg of A forming into an elongated L base */}
          <path
            d="M32 17L42 43H47"
            stroke="url(#aura-core-beam)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* A Horizontal Energy Crossbar */}
          <path
            d="M26 34H38"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Glowing Center Core Singularity (Pulsing Diamond Spark) */}
          <circle cx="32" cy="27" r="3" fill="#FFFFFF" filter="url(#aura-superglow)" />
          <circle cx="32" cy="27" r="1.5" fill="#00FF9D" />

          {/* Micro Geometric Accents (Technological Precision Marks) */}
          <circle cx="10" cy="19" r="1.5" fill="#FFB800" />
          <circle cx="54" cy="19" r="1.5" fill="#EC4899" />
          <circle cx="32" cy="58" r="1.5" fill="#00FF9D" />
        </svg>
      </div>

      {/* Brand Wordmark with Syne & Space Grotesk Typography */}
      {withText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center tracking-tight">
            <span className={`font-syne font-black ${textSizes[size]} text-white tracking-wider leading-none`}>
              AURA
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] font-syne font-black mx-1">
              ·
            </span>
            <span className={`font-syne font-black ${textSizes[size]} text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6] tracking-wider leading-none`}>
              LUXE
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] font-space uppercase tracking-[0.32em] text-[#FFB800] font-extrabold leading-none">
              GLOBAL FLAGSHIPS
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF9D] animate-ping" />
          </div>
        </div>
      )}
    </div>
  );
};
