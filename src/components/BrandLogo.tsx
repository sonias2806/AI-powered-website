import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  className?: string;
  themeId?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  withText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* 3D Geometric Isometric Monogram (LaunchCraft LC Diamond Engine) */}
      <div className={`relative ${iconSizes[size]} shrink-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3`}>
        {/* Radiant back aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-primary)] via-[var(--theme-secondary)] to-[var(--theme-accent)] rounded-xl blur-md opacity-80 group-hover:opacity-100 transition-opacity" />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
        >
          <defs>
            <linearGradient id="lc-facet-top" x1="8" y1="8" x2="40" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--theme-primary)" />
              <stop offset="100%" stopColor="var(--theme-secondary)" />
            </linearGradient>

            <linearGradient id="lc-facet-left" x1="8" y1="20" x2="24" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--theme-secondary)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="lc-facet-right" x1="24" y1="20" x2="40" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--theme-primary)" />
              <stop offset="100%" stopColor="var(--theme-accent)" />
            </linearGradient>

            <linearGradient id="lc-core" x1="16" y1="16" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="var(--theme-primary)" />
              <stop offset="100%" stopColor="var(--theme-secondary)" />
            </linearGradient>

            <filter id="lc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Isometric Diamond Hex Outer Frame */}
          <path
            d="M24 4L42 14.5V33.5L24 44L6 33.5V14.5L24 4Z"
            fill="#0b0918"
            stroke="url(#lc-facet-top)"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />

          {/* Facet Top (Isometric Upper Plane) */}
          <path
            d="M24 6L39 15L24 23.5L9 15L24 6Z"
            fill="url(#lc-facet-top)"
            fillOpacity="0.35"
            stroke="var(--theme-primary)"
            strokeWidth="0.75"
            strokeLinejoin="round"
          />

          {/* Facet Left */}
          <path
            d="M9 16L23 24V41L9 32.5V16Z"
            fill="url(#lc-facet-left)"
            fillOpacity="0.45"
            stroke="var(--theme-secondary)"
            strokeWidth="0.75"
          />

          {/* Facet Right */}
          <path
            d="M39 16L25 24V41L39 32.5V16Z"
            fill="url(#lc-facet-right)"
            fillOpacity="0.45"
            stroke="var(--theme-primary)"
            strokeWidth="0.75"
          />

          {/* "L" Beam (Vertical stem & bottom shelf) */}
          <path
            d="M17 17V33H24"
            stroke="#FFFFFF"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* "C" Arc (Craft curve) */}
          <path
            d="M32 20C28.5 18 24.5 20 24.5 25C24.5 30 28.5 32 32 30"
            stroke="url(#lc-core)"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Radiant Center Spark */}
          <circle cx="24" cy="24" r="2.2" fill="#FFFFFF" filter="url(#lc-glow)" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {withText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className={`font-syne font-extrabold ${textSizes[size]} tracking-tight text-white leading-none`}>
              LAUNCH<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-secondary)]">CRAFT</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[10px] font-space uppercase tracking-[0.22em] text-[#cbd5e1] font-semibold leading-none">
              WEB STUDIO
            </span>
            <span className="text-[9px] font-mono-num font-bold text-[var(--theme-primary)] bg-[var(--theme-primary)]/10 px-1.5 py-0.2 rounded border border-[var(--theme-primary)]/30">
              48H LIVE
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
