export interface ThemeConfig {
  id: 'gold' | 'emerald' | 'crimson' | 'violet';
  name: string;
  badge: string;
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  border: string;
  bgGradient: string;
  buttonGradient: string;
  particleColors: [string, string, string];
}

export const THEMES: Record<string, ThemeConfig> = {
  gold: {
    id: 'gold',
    name: 'Obsidian Gold',
    badge: 'Luxury & Atelier',
    primary: '#FFB800',
    secondary: '#EC4899',
    accent: '#8B5CF6',
    glow: 'rgba(255, 184, 0, 0.25)',
    border: 'rgba(255, 184, 0, 0.4)',
    bgGradient: 'from-[#FFB800] via-[#EC4899] to-[#8B5CF6]',
    buttonGradient: 'bg-gradient-to-r from-[#FFB800] via-[#EC4899] to-[#8B5CF6]',
    particleColors: ['#FFB800', '#EC4899', '#00FF9D']
  },
  emerald: {
    id: 'emerald',
    name: 'Cyber Emerald',
    badge: 'High Growth',
    primary: '#00FF9D',
    secondary: '#10B981',
    accent: '#06B6D4',
    glow: 'rgba(0, 255, 157, 0.25)',
    border: 'rgba(0, 255, 157, 0.4)',
    bgGradient: 'from-[#00FF9D] via-[#10B981] to-[#06B6D4]',
    buttonGradient: 'bg-gradient-to-r from-[#00FF9D] via-[#10B981] to-[#06B6D4]',
    particleColors: ['#00FF9D', '#10B981', '#FFB800']
  },
  crimson: {
    id: 'crimson',
    name: 'Sunset Crimson',
    badge: 'Creative Agency',
    primary: '#F43F5E',
    secondary: '#EC4899',
    accent: '#FFB800',
    glow: 'rgba(244, 63, 94, 0.25)',
    border: 'rgba(244, 63, 94, 0.4)',
    bgGradient: 'from-[#F43F5E] via-[#EC4899] to-[#FFB800]',
    buttonGradient: 'bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#FFB800]',
    particleColors: ['#F43F5E', '#EC4899', '#FFB800']
  },
  violet: {
    id: 'violet',
    name: 'Ultraviolet',
    badge: 'Global Enterprise',
    primary: '#8B5CF6',
    secondary: '#A855F7',
    accent: '#38BDF8',
    glow: 'rgba(139, 92, 246, 0.25)',
    border: 'rgba(139, 92, 246, 0.4)',
    bgGradient: 'from-[#8B5CF6] via-[#A855F7] to-[#38BDF8]',
    buttonGradient: 'bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#38BDF8]',
    particleColors: ['#8B5CF6', '#A855F7', '#38BDF8']
  }
};

export type ThemeId = 'gold' | 'emerald' | 'crimson' | 'violet';
