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
  features: string[];
  metrics?: string;
  siteUrl?: string;
  hasInteractiveScreen?: boolean;
  isDemoConcept?: boolean;
  demoType?: 'salon' | 'clinic' | 'cafe' | 'gym' | 'other' | string;
  simulatedPreview?: {
    tagline: string;
    services: { title: string; price: string; detail: string }[];
    operatingHours: string;
    address: string;
    keyCta: string;
  };
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
  idealFor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'local' | 'technical';
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlight: string;
  benefits: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  timeframe: string;
  description: string;
  deliverables: string[];
}

export interface FounderBio {
  name: string;
  role: string;
  location: string;
  image: string;
  bioHeading: string;
  bioParagraphs: string[];
  guarantees: { title: string; description: string }[];
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

export interface ConsultationFormState {
  fullName: string;
  businessName: string;
  category: string;
  phone: string;
  email: string;
  locationArea: string;
  notes: string;
  preferredPackage?: string;
}
