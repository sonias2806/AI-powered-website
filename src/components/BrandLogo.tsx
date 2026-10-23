import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  withText = true,
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Clean modern geometric monogram */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-amber-500 p-0.5 shadow-md shadow-indigo-950/20`}>
        <div className="w-full h-full bg-[#0d1017] rounded-[10px] flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-amber-400"
          >
            {/* Modern architectural 'A' with subtle digital craftsmanship crossbar */}
            <path d="M12 3L3 20h4.5l1.8-4h5.4l1.8 4H21L12 3z" fill="currentColor" fillOpacity="0.15" />
            <path d="M9.3 16h5.4" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-syne font-extrabold ${textSizes[size]} text-white tracking-tight`}>
              Aura
            </span>
            <span className={`font-syne font-semibold ${textSizes[size]} text-indigo-300 tracking-tight`}>
              Web Studio
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">
            Global &amp; National · High-Converting Websites
          </span>
        </div>
      )}
    </div>
  );
};
