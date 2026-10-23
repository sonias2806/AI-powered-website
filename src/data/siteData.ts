import { PortfolioItem, IndustryItem, PricingTier, FaqItem, ServiceItem, ProcessStep, FounderBio, SuccessStory } from '../types';

export const ASSETS = {
  heroShowcase: '/src/assets/images/hero_web_showcase_1792692052621.jpg',
  demoSalon: '/src/assets/images/demo_salon_concept_1792692052993.jpg',
  demoClinic: '/src/assets/images/demo_clinic_concept_1792692053856.jpg',
  demoCafe: '/src/assets/images/demo_cafe_concept_1792692054539.jpg',
  founderPhoto: '/src/assets/images/founder_sonia_portrait_1792758276848.jpg',
  founderPlaceholder: '/src/assets/images/founder_sonia_portrait_1792758276848.jpg',
  salon: '/src/assets/images/demo_salon_concept_1792692052993.jpg',
  spa: '/src/assets/images/demo_salon_concept_1792692052993.jpg',
  heroMockup: '/src/assets/images/hero_web_showcase_1792692052621.jpg',
  realEstate: '/src/assets/images/demo_clinic_concept_1792692053856.jpg',
  jewellery: '/src/assets/images/demo_salon_concept_1792692052993.jpg',
  fitness: '/src/assets/images/demo_cafe_concept_1792692054539.jpg',
  education: '/src/assets/images/demo_clinic_concept_1792692053856.jpg',
};

// Configurable contact details placeholder. Never invent real personal data.
export const CONTACT_CONFIG = {
  brandName: 'Aura Web Studio',
  tagline: 'High-Converting Websites for National & International Clients',
  // Configurable placeholder phone number - replace with your real number:
  displayPhone: '+1 (555) 019-2834 / +91 98765 43210',
  whatsappNumber: '919876543210',
  displayEmail: 'hello@aurawebstudio.com',
  location: 'Global Remote Web Studio · Serving National & International Clients',
  areasServed: [
    'United States & Canada',
    'United Kingdom & Europe',
    'United Arab Emirates & Gulf',
    'India (National Pan-India)',
    'Singapore & Asia-Pacific',
    'Australia & New Zealand',
    'Global Remote Clients'
  ],
  isConfigurablePlaceholder: true,
  placeholderNotice: 'Phone number and WhatsApp are configurable placeholders (+91 98765 43210). Update them in siteData.ts when ready.'
};

export const HERO_CONTENT = {
  headline: 'Your Business Deserves a Website That Wins Customers.',
  supportingText: 'Professional websites for salons, clinics, cafes, gyms and growing businesses worldwide. Serving national and international clients with modern responsive architecture, sub-second loading speed, and handcrafted bespoke design.',
  primaryCta: 'Get a Free Website Consultation',
  secondaryCta: '3D Showcase Demo',
  subValuePoints: [
    'Sub-2s global CDN loading speed',
    'Direct WhatsApp & 1-tap booking funnels',
    'Personal human review on every screen',
    'USD & INR transparent pricing'
  ]
};

// THREE CLEARLY LABELLED DEMO CONCEPTS (Never presented as real clients)
export const DEMO_CONCEPTS: PortfolioItem[] = [
  {
    id: 'demo-salon-concept',
    name: 'Salon Website (Demo Concept)',
    category: 'Beauty, Salon & Spa',
    industry: 'Hair Salon & Luxury Wellness Spa',
    location: 'Demo Concept · Designed for Luxury Salons & Spas Worldwide',
    image: ASSETS.demoSalon,
    altText: 'Demo concept mockup of a modern beauty salon and spa website on a 3D tablet display',
    headline: 'High-Converting Lookbook, Treatment Menu & WhatsApp Chair Booking',
    description: 'A clean, aesthetic demonstration website tailored for high-end salons, aesthetic suites, and luxury spas worldwide. Showcases styling packages, bridal artistry, stylist profiles, and seamless 1-tap WhatsApp chair reservations.',
    features: [
      'Visual treatment & bridal rate card',
      '1-tap WhatsApp chair & appointment booking',
      'Stylist team profiles with specialties',
      'Instagram visual feed embed layout',
      'Google Maps directions for walk-ins'
    ],
    isDemoConcept: true,
    demoType: 'salon',
    metrics: '99/100 Mobile Score',
    simulatedPreview: {
      tagline: 'Artisanal Hair Dressing & Skin Spa',
      services: [
        { title: 'Signature Cut & Balayage', price: '₹2,499 / $45', detail: 'Consultation, scalp massage, custom tone' },
        { title: 'Hydra-Infusion Facial', price: '₹3,200 / $55', detail: 'Deep pore cleanse, lymphatic drainage, glow mask' },
        { title: 'Bridal Artistry Package', price: '₹14,999 / $220', detail: 'Hair styling, trial session, HD makeup & drape' }
      ],
      operatingHours: 'Tuesday – Sunday: 10:00 AM – 8:30 PM (Mondays Closed)',
      address: 'Flagship Avenue, Luxury Suite 402 (Demo Global Location)',
      keyCta: 'Book Hair Consultation'
    }
  },
  {
    id: 'demo-clinic-concept',
    name: 'Clinic Website (Demo Concept)',
    category: 'Healthcare & Dental',
    industry: 'Medical Clinic & Dental Studio',
    location: 'Demo Concept · Designed for Modern Medical & Dental Practices',
    image: ASSETS.demoClinic,
    altText: 'Demo concept mockup of a medical clinic and dental care website on a 3D tablet display',
    headline: 'Trustworthy Doctor Profiles, Timings & Direct Patient Appointments',
    description: 'A reassuring, clean medical website concept engineered to build patient trust nationally and internationally. Features verified practitioner credentials, consultation fee transparency, operating hours, treatment overviews, and appointment inquiry forms.',
    features: [
      'Verified doctor credentials & specialty cards',
      'Online appointment inquiry form with time slots',
      'Clinic working hours & weekend schedule notice',
      'Patient FAQ accordion for common treatments',
      'Direct emergency call & clinic directions'
    ],
    isDemoConcept: true,
    demoType: 'clinic',
    metrics: '1.2s Global Load',
    simulatedPreview: {
      tagline: 'Comprehensive Dental & Specialty Healthcare',
      services: [
        { title: 'Digital Smile Assessment', price: '₹500 / $25', detail: 'Full 3D intraoral scan, treatment plan overview' },
        { title: 'Laser Teeth Whitening', price: '₹4,500 / $75', detail: 'Single-session painless enamel brightening' },
        { title: 'Clear Orthodontic Aligners', price: '₹45,000 / $650', detail: 'Invisible teeth straightening with digital review' }
      ],
      operatingHours: 'Monday – Saturday: 9:00 AM – 1:00 PM, 4:30 PM – 8:30 PM',
      address: 'Medical Pavilion, Suite 101 (Demo Global Location)',
      keyCta: 'Request Doctor Appointment'
    }
  },
  {
    id: 'demo-cafe-concept',
    name: 'Cafe Website (Demo Concept)',
    category: 'Food, Cafe & Restaurant',
    industry: 'Specialty Coffee & Artisan Bakery',
    location: 'Demo Concept · Designed for Artisan Roasteries & Bistros',
    image: ASSETS.demoCafe,
    altText: 'Demo concept mockup of an artisanal cafe and bakery website on a 3D tablet display',
    headline: 'Digital Menu with Prices, Warm Ambiance & Table Reservations',
    description: 'A cozy, appetizing demonstration website created for boutique cafes, roasteries, and bistros worldwide. Features an easy-to-read mobile menu, signature brew spotlights, daily baking specials, and a simple table reservation request button.',
    features: [
      'Mobile-friendly food & beverage menu with pricing',
      'Table reservation and private gathering inquiry form',
      'Opening hours, parking info, and pet-friendly notices',
      'WhatsApp direct ordering for takeaway and cakes',
      'One-tap Google Maps directions link'
    ],
    isDemoConcept: true,
    demoType: 'cafe',
    metrics: '3.4x Enquiries',
    simulatedPreview: {
      tagline: 'Handcrafted Espresso, Sourdough Bakes & Calm Space',
      services: [
        { title: 'Single-Origin Cortado', price: '₹220 / $4.50', detail: 'Highland washed roast with silky microfoam' },
        { title: 'Wild Forest Honey French Toast', price: '₹340 / $6.00', detail: 'Brioche toast, seasonal berries, mascarpone' },
        { title: 'Artisanal Sourdough Loaf (Takeaway)', price: '₹280 / $5.00', detail: 'Naturally fermented 36-hour country bread' }
      ],
      operatingHours: 'Daily: 8:00 AM – 11:00 PM (High-Speed WiFi Available)',
      address: 'Central Boulevard, Roastery Quarter (Demo Global Location)',
      keyCta: 'Reserve a Table via WhatsApp'
    }
  }
];

export const FOUNDER_DATA: FounderBio = {
  name: 'Sonia S.',
  role: 'Founder & Creative Web Director',
  location: 'Serving National & International Clients',
  image: ASSETS.founderPhoto,
  bioHeading: 'Why I Work Directly with Growing Businesses Worldwide',
  bioParagraphs: [
    'I founded Aura Web Studio because business owners—salons, wellness spas, dental clinics, boutique cafes, and service entrepreneurs—deserve captivating, high-performing websites without the exorbitant $4,000+ agency markup or the cookie-cutter mediocrity of DIY page builders.',
    'I bring a blend of artistic design direction and modern, high-speed frontend engineering. Every client site is crafted with vivid visual aesthetics, intuitive mobile ergonomics, transparent rate cards, and direct 1-tap WhatsApp booking funnels.',
    'When you partner with Aura Web Studio, you collaborate directly with me from concept to launch. Whether you are expanding locally or catering to clients across India, North America, the UK, the UAE, or Asia-Pacific, I personally guarantee your website will be lightning-fast, distinctive, and built to convert.'
  ],
  guarantees: [
    {
      title: 'Direct Founder Collaboration',
      description: 'You speak directly with me on WhatsApp, email, or video call throughout your project with zero middlemen.'
    },
    {
      title: 'Rapid Turnaround & Bespoke Craft',
      description: 'Fast 3-to-5 day delivery with dedicated human attention to visual polish, mobile UX, and typography.'
    },
    {
      title: '100% Full Ownership',
      description: 'You own your domain, code, and content. Zero monthly lock-in or proprietary platform hostage fees.'
    },
    {
      title: 'Global CDN & Dual Currency',
      description: 'Ultra-fast worldwide CDN delivery with support for dual-currency pricing (USD & INR).'
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'local-business-website',
    title: 'Custom Business Websites',
    icon: 'Globe',
    description: 'Clean, modern websites purpose-built for salons, clinics, cafes, gyms, and growing companies to display services and attract enquiries globally.',
    highlight: 'Tailored Architecture',
    benefits: [
      'Tailored for your specific business category',
      'Display full service menus, pricing, and FAQs',
      'Professional typography & award-winning color harmony',
      'Free SSL security certificate configuration'
    ]
  },
  {
    id: 'mobile-first',
    title: 'Mobile-First & Ultra-Fast Global CDN',
    icon: 'Smartphone',
    description: 'Over 80% of customers browse on smartphones. Your website is engineered for sub-2s loading speed across international networks.',
    highlight: 'Sub-2s Loading',
    benefits: [
      'Flawless layout on iPhones and Android devices',
      'Thumb-friendly buttons and tap targets',
      'Optimised image sizes for instant rendering',
      'Zero layout shift or awkward text overlapping'
    ]
  },
  {
    id: 'whatsapp-leads',
    title: '1-Tap WhatsApp & Booking Leads',
    icon: 'MessageSquare',
    description: 'Turn visitors into immediate paying clients with direct WhatsApp chat, pre-filled service inquiries, and 1-tap call triggers.',
    highlight: 'Zero Lead Friction',
    benefits: [
      'Pre-filled WhatsApp messages for specific services',
      'Click-to-call button prominently visible on phones',
      'Floating action dock for instant customer reach',
      'Clean contact enquiry form with instant feedback'
    ]
  },
  {
    id: 'local-seo-maps',
    title: 'Search Optimization & Global Discovery',
    icon: 'MapPin',
    description: 'Help customers find your location, opening hours, services, and credentials effortlessly on Google Search and Maps worldwide.',
    highlight: 'High Discovery',
    benefits: [
      'Interactive Google Maps embed on contact section',
      'Schema.org structured data for search engines',
      'Turn-by-turn directions link for walk-in clients',
      'Guidance for Google Business Profile optimization'
    ]
  },
  {
    id: 'fast-turnaround',
    title: 'Fast Delivery in 3 to 5 Days',
    icon: 'Clock',
    description: 'Modern streamlined engineering and direct founder execution enable us to launch your complete, polished website within days instead of waiting months for legacy agencies.',
    highlight: 'Rapid Launch',
    benefits: [
      'Interactive draft ready for review within 48 hours',
      'Quick revision turnarounds based on your feedback',
      'Content and photo upload assistance included',
      'Stress-free, guided remote onboarding'
    ]
  },
  {
    id: 'ownership-support',
    title: 'Full Ownership & Ongoing Guidance',
    icon: 'ShieldCheck',
    description: 'Complete freedom. You own your code, domain, and content with no recurring lock-in contracts or agency retainers.',
    highlight: '100% Client Owned',
    benefits: [
      'Complete transfer of all website assets & code',
      'Domain & hosting setup under your own account',
      'Easy instructions to update prices or photos later',
      '30 days of complimentary post-launch support'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery & Requirement Blueprint',
    timeframe: 'Day 1 · Video call or WhatsApp chat',
    description: 'We discuss your business, services, target audience (national or international), brand positioning, and the primary actions you want visitors to take.',
    deliverables: [
      'Select the right layout structure for your industry',
      'Gather your service list, price card, and contact details',
      'Agree on transparent package pricing with no surprises'
    ]
  },
  {
    stepNumber: '02',
    title: 'Bespoke Build & Handcrafted Engineering',
    timeframe: 'Days 2–3 · Rapid development & review',
    description: 'I construct the full custom responsive architecture and styling within 48 hours. Then I personally refine every heading, mobile button, color balance, and booking funnel by hand.',
    deliverables: [
      'Complete mobile-responsive draft ready to test on your phone',
      'Working 1-tap WhatsApp and phone call buttons',
      'Clean typography and optimized image loading'
    ]
  },
  {
    stepNumber: '03',
    title: 'Revisions, Domain Setup & Global Launch',
    timeframe: 'Days 4–5 · Polish and go live',
    description: 'We review the preview together. I incorporate your text tweaks, link your custom domain (e.g. yourbusiness.com), set up search tags, and hand over 100% full ownership.',
    deliverables: [
      'Unlimited revisions during the review window',
      'Connecting your custom domain & securing with SSL',
      'Ready to share with customers on WhatsApp & Google'
    ]
  }
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Presence',
    price: '₹4,999 / $79',
    priceValue: 4999,
    cadence: 'One-time investment · No monthly fees',
    description: 'A crisp, single-page mobile-friendly website designed for single-location businesses and solo professionals seeking a clean global presence quickly.',
    idealFor: 'Solo practitioners, small cafes, new salon chairs, boutique clinics',
    features: [
      'Clean, modern 1-page responsive layout',
      'Mobile-optimized for sub-2s loading speed',
      'Service list with clear pricing cards',
      '1-tap WhatsApp chat & direct call buttons',
      'Google Maps location embed & directions link',
      'Working consultation / enquiry form',
      '30-day post-launch support & minor text updates'
    ],
    ctaText: 'Choose Starter Presence',
    deliveryTime: '3 Business Days'
  },
  {
    id: 'growth',
    name: 'Growth Business',
    price: '₹9,999 / $149',
    priceValue: 9999,
    cadence: 'One-time investment · Most Popular',
    badge: 'Most Popular for National & International Clients',
    isPopular: true,
    description: 'A complete multi-section website with dedicated service breakdowns, practitioner profiles, lookbook showcase, and search discovery setup.',
    idealFor: 'Salons, dental clinics, specialty cafes, gyms, coaching academies',
    features: [
      'Up to 5 custom-designed sections/pages',
      'Personalised human review on every screen',
      'Interactive service menus with category filtering',
      'Staff / Doctor / Stylist profile highlight cards',
      'Smart WhatsApp lead funnels with pre-filled messages',
      'Search discovery setup (Schema tags & Google Business tips)',
      'Instagram visual feed embed or photo gallery',
      'Custom domain connection assistance',
      '45-day post-launch support & maintenance'
    ],
    ctaText: 'Choose Growth Business',
    deliveryTime: '4–5 Business Days'
  },
  {
    id: 'flagship',
    name: 'Custom Flagship',
    price: '₹16,999 / $249',
    priceValue: 16999,
    cadence: 'One-time investment · Full-Service',
    description: 'Comprehensive digital presence for multi-branch clinics, premier luxury spas, high-capacity venues, and premium academies serving national & international clients.',
    idealFor: 'Multi-location businesses, established clinics, high-traffic brands',
    features: [
      'Full multi-page architecture with advanced layout',
      'Online appointment inquiry workflow with date/time picker',
      'Multi-currency and multi-branch location selector',
      'Advanced menu or treatment catalog with instant search',
      'Full search optimization and international CDN setup',
      'Custom graphics & tailored photography optimization',
      'Priority revision turnaround & direct WhatsApp support',
      '90-day extended support & handover training call'
    ],
    ctaText: 'Choose Custom Flagship',
    deliveryTime: '7 Business Days'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Why do I need a website if I already have an Instagram page or Google Maps listing?',
    answer: 'An Instagram page is great for casual social browsing, but over 60% of high-intent customers search on Google when they actively need a clinic, salon, or cafe. An Instagram account is controlled by algorithms and requires a login. A dedicated website gives you professional credibility, displays your full price card without compression, shows your location, and provides a direct 1-tap WhatsApp booking button without social media distractions.'
  },
  {
    id: 'faq-2',
    category: 'process',
    question: 'How do you work with national and international clients remotely?',
    answer: 'We collaborate seamlessly via WhatsApp, email, and video calls (Google Meet or Zoom). Time zone differences are managed easily with asynchronous progress updates and interactive preview links that you can test live on your phone or laptop at your own convenience.'
  },
  {
    id: 'faq-3',
    category: 'process',
    question: 'How do you deliver custom websites so fast without sacrificing quality?',
    answer: 'Because you work directly with a senior digital craftsman rather than going through layers of account managers, sales reps, and agency bureaucracy. We use modern modular frontend architectures and reusable high-performance component systems to build rapidly, while personally testing every screen, typography rhythm, and mobile interaction on real devices.'
  },
  {
    id: 'faq-4',
    category: 'process',
    question: 'How long does the entire website creation take from start to finish?',
    answer: 'Most starter websites are completed and launched within 3 business days. The comprehensive Growth package typically takes 4 to 5 business days. Because I handle projects directly from start to finish with modern streamlined engineering, you will never wait weeks or months for an agency committee.'
  },
  {
    id: 'faq-5',
    category: 'pricing',
    question: 'Are there any hidden monthly fees or recurring contracts?',
    answer: 'No. All our website design packages are straightforward, one-time investments. You pay once for the design, build, and launch. Hosting and domain are registered directly under your own name, meaning you have 100% ownership with zero lock-in.'
  },
  {
    id: 'faq-6',
    category: 'technical',
    question: 'What currencies and payment methods do you accept?',
    answer: 'We accept payments in INR (UPI, Netbanking, Credit Cards) for clients in India, and USD / EUR / GBP (Stripe, International Cards, PayPal, Bank Wire) for international clients.'
  },
  {
    id: 'faq-7',
    category: 'technical',
    question: 'Can I update my prices, services, or food menu after the website is live?',
    answer: 'Yes. Every project includes clean, well-organized content sections. I also include 30 to 45 days of free post-launch support to update prices, timings, or announcements for you. If you need regular updates later, affordable on-demand update options are available.'
  }
];

export const TARGET_BUSINESS_TYPES = [
  { name: 'Hair & Beauty Salons', example: 'Styling, Hair Spa, Bridal, Nail Care' },
  { name: 'Medical & Dental Clinics', example: 'Dentists, Physiotherapy, Dermatology, ENT' },
  { name: 'Cafes & Bakeries', example: 'Artisan Coffee, Sourdough, Bistro, Desserts' },
  { name: 'Restaurants & Dining', example: 'Dine-In, Family Restaurants, Gourmet, Takeaway' },
  { name: 'Gyms & Fitness Studios', example: 'Strength, Crossfit, Yoga, Personal Training' },
  { name: 'Coaching & Academies', example: 'Test Prep, Professional Skills, Languages, Tutors' },
  { name: 'Boutiques & Retail', example: 'Fashion, Organic Groceries, Jewellery, Lifestyle' }
];

// Backwards-compatible aliases for legacy references
export const CONTACT_INFO = {
  name: CONTACT_CONFIG.brandName,
  phone: CONTACT_CONFIG.displayPhone,
  whatsappNumber: CONTACT_CONFIG.whatsappNumber,
  email: CONTACT_CONFIG.displayEmail,
  location: CONTACT_CONFIG.location,
  targetHubs: CONTACT_CONFIG.areasServed
};

export const PORTFOLIO: PortfolioItem[] = DEMO_CONCEPTS;
export const PRICING_TIERS: PricingTier[] = PRICING_PACKAGES;
export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    businessName: 'Lumiere Salon & Spa (Demo Concept)',
    ownerName: 'Demo Concept Architecture',
    ownerRole: 'Salon & Spa Showcase',
    industry: 'Hair & Beauty Care',
    location: 'Global Demo Concept',
    quote: 'Engineered with 1-tap WhatsApp chair reservations, lookbook showcase, and sub-2s mobile loading speed.',
    launchDuration: '3 Business Days',
    metrics: [
      { stat: 'Sub-2s', label: 'Global Load' },
      { stat: '100%', label: 'Mobile Optimized' }
    ],
    tags: ['Hair Salon', 'WhatsApp Booking', 'Global CDN'],
    avatarInitial: 'L',
    avatarBg: '#F59E0B',
    packageUsed: 'Growth Business'
  },
  {
    id: 'story-2',
    businessName: 'Aura Smile Dental Studio (Demo Concept)',
    ownerName: 'Demo Concept Architecture',
    ownerRole: 'Medical & Dental Showcase',
    industry: 'Dental & Healthcare',
    location: 'National & Global Concept',
    quote: 'Designed to build patient trust with transparent procedure rates, doctor credentials, and direct appointment inquiry forms.',
    launchDuration: '4 Business Days',
    metrics: [
      { stat: '1.2s', label: 'Response Speed' },
      { stat: '3.4x', label: 'Patient Leads' }
    ],
    tags: ['Dental Clinic', 'Doctor Credentials', 'SSL Secured'],
    avatarInitial: 'D',
    avatarBg: '#38BDF8',
    packageUsed: 'Growth Business'
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'salon',
    name: 'Salon & Spa',
    icon: 'Sparkles',
    tagline: 'Hair Styling & Spa',
    description: 'Showcase hair styling services and 1-tap chair bookings.',
    accentColor: '#F59E0B',
    features: ['Service card', 'WhatsApp booking', 'Mobile-first'],
    sampleDeliverables: ['Salon demo concept']
  },
  {
    id: 'clinic',
    name: 'Medical & Dental Clinic',
    icon: 'Activity',
    tagline: 'Doctor Consultations',
    description: 'Build patient trust with doctor credentials and appointment inquiries.',
    accentColor: '#38BDF8',
    features: ['Doctor profiles', 'Timings', 'Directions'],
    sampleDeliverables: ['Clinic demo concept']
  },
  {
    id: 'cafe',
    name: 'Cafe & Restaurant',
    icon: 'Coffee',
    tagline: 'Artisan Coffee & Food',
    description: 'Mobile food & drink menu with pricing and table reservations.',
    accentColor: '#10B981',
    features: ['Price card', 'Directions', 'Table inquiry'],
    sampleDeliverables: ['Cafe demo concept']
  }
];
