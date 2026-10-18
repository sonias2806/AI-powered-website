export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  industry: string;
  location: string;
  image: string;
  altText: string;
  headline: string;
  description: string;
  metrics: string;
  features: string[];
  siteUrl?: string;
  hasInteractiveScreen?: boolean;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  accentColor: string;
  sampleDeliverables: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  cadence: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
  deliveryTime: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'technical';
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlight: string;
  benefits: string[];
}

export interface SuccessStory {
  id: string;
  businessName: string;
  ownerName: string;
  ownerRole: string;
  industry: string;
  location: string;
  quote: string;
  launchDuration: string;
  metrics: {
    stat: string;
    label: string;
  }[];
  tags: string[];
  avatarInitial: string;
  avatarBg: string;
  packageUsed: string;
}

