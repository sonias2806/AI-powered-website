import React, { useRef, useState, useEffect, useCallback } from 'react';

interface GyroTiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glare?: boolean;
  glareOpacity?: number;
  disabled?: boolean;
}

export const GyroTiltCard: React.FC<GyroTiltCardProps> = ({
  children,
  className = '',
  maxTilt = 14,
  perspective = 1000,
  scale = 1.02,
  glare = true,
  glareOpacity = 0.25,
  disabled = false,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 to 1
    const y = (e.clientY - rect.top) / rect.height; // 0 to 1

    const tiltX = (y - 0.5) * -2 * maxTilt;
    const tiltY = (x - 0.5) * 2 * maxTilt;

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      setGlarePosition({
        x: x * 100,
        y: y * 100,
        opacity: glareOpacity
      });
    }
  }, [disabled, maxTilt, perspective, scale, glare, glareOpacity]);

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  // Mobile Device Orientation Gyroscope Support
  useEffect(() => {
    if (disabled) return;

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (!cardRef.current || isHovered) return;
      if (e.gamma === null || e.beta === null) return;

      const gamma = Math.max(-35, Math.min(35, e.gamma));
      const beta = Math.max(-35, Math.min(35, e.beta - 45));

      const tiltY = (gamma / 35) * (maxTilt * 0.7);
      const tiltX = -(beta / 35) * (maxTilt * 0.7);

      setTransformStyle(
        `perspective(${perspective}px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`
      );
    };

    window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, [disabled, isHovered, maxTilt, perspective]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative preserve-3d transition-transform ${
        isHovered ? 'duration-75 ease-out' : 'duration-500 ease-out'
      } ${className}`}
      style={{
        transform: transformStyle || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transformStyle: 'preserve-3d',
        ...style
      }}
      {...props}
    >
      {children}

      {/* Dynamic Specular Sheen / Gyro Light Flare */}
      {glare && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-30 overflow-hidden"
          style={{
            opacity: isHovered ? glarePosition.opacity : 0,
            background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45), rgba(255, 184, 0, 0.18) 40%, transparent 80%)`,
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </div>
  );
};
