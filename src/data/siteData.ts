import { PortfolioItem, IndustryItem, PricingTier, FaqItem, ServiceItem, SuccessStory } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1W3jQskTeuV4Z5PHmdXX-AoCbwcVbLo1DpxyA4V5KwwY0EE74gBCEBEfXn0Jz9MbdKqdHVaITkN_TeUO1KKkMQ9iu5xw2kzlTkPw8W0h5kClkIVadZJPYAdElxsYZ02w3X7ud7m1WGwLk53WYaCGU2w42J8AcRQLkZomIr2ndrib-yo262YulGsI9h2PXsDfGrtXcaUsPWttNjdkxdRpzzlFFHP66tD_4ThvGwbpEdr0jonq35ZrFf4RQ',
  heroMockup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmlmpJ8G4-RBdI7V1lMkEnUMYYbNKdIKfeuXGgnpJE-7topDtqdRMV_LeOdZpxW4WOzIwTaMPnpNeVl9DREbCNi_k6MmDELEFGINGwK_F3-po6X2Kh3k6kpQ6ZaDuJcg_rujbved1AvAWPwDN-tWWdhBwmEjT-DnDYjILCiCwdOwNgg63C1lo4W43_FcbnYegsTpQ4DZiMRTHY7ExfIXCnitChOePNnXQc2DT90OyLYLS9wzQbjydI',
  salon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJx-JZAY3HWLbE2OAozYnCMi5-ldhonkyi0IZC8LPeRJ6YQoP2WdNnWnFrcXWVBzlaOs404ZdO7yvrk56jQck8gw903hAIqKR6aUzEg1HQJ8JBwAPy_lJJk3577IVWfDop2Gj3Co6sc1HIGkKuntoiUDrVo_qO3DckEPurGXrYrzmjukYXPJMRQkFjQgIFflCdb5_ldKwu6iYyNu18S-xZcAclfxiX7RAQcJJSkOGgfM66apq8PgPx',
  realEstate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8jv0VPPPsWqV6KoiqtpGT6F6ELLKzMucCQ_SUwpsJBkgSYUj0_3ZN8VOW6fvIJIMOYydQm6C6j4BnTbTLdBYiMzR6Q9Bl1ltQH60lWTT-D0cp3kdVv0yaXlEHnV3YZfhGXNHnUHYhFIu4dqNpcmOTXDgJjolAVNPvsrSvSnlxr2XWmi8f9--wS50NfYAUb-gIyFNR-Rz4ZneU9NO5a_s4TqWHToc-C5gwfM3Sn2yLVq8_K6PJZ6CE',
  jewellery: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsXx6wz6RwyRKx1OihV4r7jPoEvqUQVP6hzPHhBPE1VNBLTNbWDTOsOJ1njrZ5kx-9vuXKojrZ3JABnmqdOlwYrvMUFlUoZJQGjfs_SzKpFCuaoBB2rTZnGxnFjT0G46bOHEDKgd2skZYJlAU3sf2wQw3HfJPRtQGOt7JdmkHms69lZJ7wsp2PvkYzBO0eXelZVVE6XPSybiOS5ZDqTDlDdxHCORaY7cCiSIa0Dli7hA8q0sBTGNpE',
  fitness: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS-1Hxkab3JsuG7V_IjqesQY3BT5cAWUviFFH1ZC41rYqlzoqfaqoq1JplwpduEMaZuYKDlMtOI7aF1DQKI-a2G2ZZJ9UxnkzNZJUr9xfdjONI_F2R_8CZSm72uVz5nKXBsj43gyWUfqPFonywuDccgbom1sB3oUGYpWifsh3SASo3HJitxceSazOwGjEzOzA1odudojx1lnDylHqtwDT1BLHsk3u9sZHP9ZJz8hSZyneKpo2C5bKo',
  education: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXzivN6954vHNCOmG06Hb-bcpJJk-RXzTu6T-VYORDDWraAN5U1mRLgWrtLAThjRds3Li7Ah9uJZ-2NrEKzYljENkakXfj57-mmH3zIu3PfS_AG-hzbXEHm5LHcvbuIGV0jqXKmDsm-NZjjeFJGSn1sDpDm4BSRD87jEgR7AHccusjH3d69AoQ_Dx7xcqGUGlm5pBv_hOnkh9CNTMMy7c3DWnJu_a82euwnMprEyoaG3l38oRgnAzY'
};

export const CONTACT_INFO = {
  name: 'AURA LUXE DIGITAL',
  phone: '+1 (800) 892-AURA · +91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'concierge@auraluxestudios.com',
  location: 'Serving National & International Clients',
  instagram: 'https://instagram.com/auraluxestudios',
  linkedin: 'https://linkedin.com/company/auraluxestudios',
  targetHubs: [
    'New York',
    'London',
    'Dubai',
    'Singapore',
    'Mumbai',
    'San Francisco',
    'Sydney',
    'Toronto'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    title: 'Digital Flagship Platform',
    icon: 'Globe',
    description: 'Bespoke high-converting website engineered to elevate your brand prestige, services, and high-ticket customer acquisition.',
    highlight: 'Tailored Architecture',
    benefits: ['Clean modern layout', 'Service catalogs & pricing', 'Branded styling', 'SSL security included']
  },
  {
    id: 'mobile-friendly',
    title: 'Ultra-Fluid Mobile Experience',
    icon: 'Smartphone',
    description: 'Flawless performance across iPhones, Android devices, tablets, and Retina displays with zero lag.',
    highlight: '100% Responsive',
    benefits: ['Zero-lag touch interaction', 'Thumb-friendly ergonomics', 'Fast loading on 4G/5G', 'Adaptive layout engine']
  },
  {
    id: 'whatsapp-integration',
    title: 'Instant Direct Lead Funnels',
    icon: 'MessageSquare',
    description: 'High-intent clients connect immediately with your team via frictionless 1-tap WhatsApp and booking conduits.',
    highlight: 'Zero Friction Inquiries',
    benefits: ['1-tap direct chat', 'Pre-populated service queries', 'Floating conversion dock', 'Zero lost leads']
  },
  {
    id: 'lead-generation',
    title: 'High-Conversion Architecture',
    icon: 'Target',
    description: 'Psychologically tuned call-to-actions designed to turn casual international and domestic visitors into paying clients.',
    highlight: 'Conversion Engineered',
    benefits: ['High-contrast appointment CTAs', 'Quick quote generators', 'Contact rate improvement', 'Direct calendar sync']
  },
  {
    id: 'google-maps',
    title: 'Global Search & Maps Presence',
    icon: 'MapPin',
    description: 'Position your business at the top of Google Maps, Search, and AI discovery engines with structured schema markup.',
    highlight: 'Search Optimized',
    benefits: ['Google Maps pin embed', 'Turn-by-turn directions link', 'Review collection prompts', 'Schema.org SEO tags']
  },
  {
    id: 'website-updates',
    title: 'Agile 24h Express Support',
    icon: 'RefreshCw',
    description: 'Rapid concierge updates for seasonal campaigns, luxury catalog refreshes, new offerings, and feature expansions.',
    highlight: 'Agile Maintenance',
    benefits: ['Fast turnaround requests', 'Festival and holiday specials', 'Menu / price card refreshes', 'Uptime monitoring']
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'salon-spa',
    name: 'Salon and Spa',
    icon: 'Sparkles',
    tagline: 'Hair Styling, Aesthetics & Luxury Spa',
    description: 'Showcase your hair styling services, bridal packages, rejuvenating spa therapies, salon location, and one-click chair or suite booking.',
    accentColor: '#FFB800',
    features: ['Styling & spa rate card', 'Bridal beauty packages', 'Instant chair & suite booking', 'Instagram lookbook embed'],
    sampleDeliverables: ['Lumière Salon and Spa concept', 'Interactive booking form', 'Before/After transformation gallery']
  },
  {
    id: 'jewellery',
    name: 'Jewellery Atelier',
    icon: 'Gem',
    tagline: 'Gold, Diamond & Heritage Polki',
    description: 'Showcase bridal collections, heritage polki designs, gold schemes, store locations, and private viewings.',
    accentColor: '#EC4899',
    features: ['Bridal catalog display', 'Daily gold rate widget', 'VIP viewing scheduler', 'Hallmark trust cues'],
    sampleDeliverables: ['Shrimati Heritage Jewellery', 'Interactive collection filter', 'Private consultation form']
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Builders',
    icon: 'Building2',
    tagline: 'Villas, Gated Communities & High-Rises',
    description: 'Showcase gated villa properties, high-rise projects, floorplans, location connectivity, and brochure enquiries.',
    accentColor: '#8B5CF6',
    features: ['Floor plan downloads', 'Regulatory compliance badges', 'Site visit scheduler', 'Location proximity matrix'],
    sampleDeliverables: ['PrimeNest Luxury Residences', 'Virtual tour trigger', 'Direct sales rep connect']
  },
  {
    id: 'fitness',
    name: 'Gym & Fitness Center',
    icon: 'Dumbbell',
    tagline: 'Strength, Crossfit & Personal Training',
    description: 'Promote gym memberships, trainer certifications, equipment tour, transformational stories, and free pass claims.',
    accentColor: '#00FF9D',
    features: ['Membership tier breakdown', 'Trainer profile cards', '1-Day free pass claim', 'Equipment virtual tour'],
    sampleDeliverables: ['Apex Elite Fitness Club', 'Membership calculator', 'Direct WhatsApp pass generation']
  },
  {
    id: 'coaching',
    name: 'Coaching & Academy',
    icon: 'GraduationCap',
    tagline: 'Competitive Exams & Executive Training',
    description: 'Highlight competitive courses, faculty credentials, top rankers, scholarship assessments, and free demo sessions.',
    accentColor: '#38BDF8',
    features: ['Batch schedule tables', 'Ranker success wall', 'Free demo class booking', 'Scholarship test register'],
    sampleDeliverables: ['Achievers Academy', 'Course syllabus download', 'Admission inquiry pipeline']
  },
  {
    id: 'clinic',
    name: 'Medical & Dental Clinic',
    icon: 'Activity',
    tagline: 'Doctor Consultations & Diagnostics',
    description: 'Present doctors\' expertise, clinical treatments, consultation timings, clinic location, and direct appointment requests.',
    accentColor: '#F43F5E',
    features: ['Doctor credentials & degrees', 'Treatment breakdowns', 'Appointment time slots', 'Patient FAQ accordion'],
    sampleDeliverables: ['CareDental Studio', 'Appointment scheduling', 'WhatsApp consultation assistance']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'lumiere-salon-spa',
    name: 'Lumière Salon and Spa',
    category: 'Salon and Spa',
    industry: 'Salon and Spa',
    location: 'Mayfair & Mumbai Flagship',
    image: ASSETS.salon,
    altText: 'Lumière Salon and Spa interior featuring bespoke styling stations and serene wellness sanctuary',
    headline: 'High-Aesthetic Hair Styling & Sanctuary Spa',
    description: 'A luxury sanctuary combining bespoke Parisian hair styling, rejuvenating spa therapies, and bridal beauty suites. Features online chair reservations and instant WhatsApp appointment requests.',
    metrics: '99 Mobile Performance',
    features: ['Bespoke Hair & Spa Suites', '1-Tap Chair & Suite Booking', 'Bridal Treatment Packages', 'Interactive Concierge Guide'],
    hasInteractiveScreen: true
  },
  {
    id: 'primenest-residences',
    name: 'PrimeNest Luxury Residences',
    category: 'Real Estate',
    industry: 'Real Estate',
    location: 'Downtown Dubai & Skyline Towers',
    image: ASSETS.realEstate,
    altText: 'Modern high-rise residential towers and penthouses',
    headline: 'Elevated Living in Premier Metropolitan Skylines',
    description: 'Interactive floorplan downloads, luxury penthouse specifications, 3D architectural renders, and instant VIP site-visit scheduler.',
    metrics: 'Instant Inquiries',
    features: ['Floor Plan Visualizer', '3D Walkthrough Portal', 'WhatsApp Sales Hotline', 'Connectivity Matrix']
  },
  {
    id: 'shrimati-jewellery',
    name: 'Shrimati Heritage Jewellery',
    category: 'Jewellery Atelier',
    industry: 'Jewellery',
    location: 'Heritage Atelier & NRI Global Suites',
    image: ASSETS.jewellery,
    altText: 'Opulent gold and uncut diamond bridal choker necklace on velvet display',
    headline: 'Royal Heritage Crafted in Pure Gold',
    description: 'Bridal catalog showcase, gold saving scheme registration, store location finder, and VIP private consultation bookings.',
    metrics: 'Fast Image Load',
    features: ['Bridal Catalog Viewer', 'Gold Scheme Sign-up', 'VIP Appointment Scheduler', 'Global Store Locator']
  },
  {
    id: 'apex-fitness',
    name: 'Apex Elite Fitness Club',
    category: 'Gym & Fitness',
    industry: 'Gym & Fitness',
    location: 'Metropolitan Athletic Performance Hub',
    image: ASSETS.fitness,
    altText: 'Strength training gym facility with modern athletic equipment',
    headline: 'Transform Your Body & Mind',
    description: 'Membership tier comparison, certified coach bios, transformation gallery, and 1-day free guest pass claim form.',
    metrics: '1-Tap Free Pass',
    features: ['Tier Comparison Matrix', 'Free Pass Generator', 'Trainer Bio Cards', 'Equipment Gallery']
  },
  {
    id: 'achievers-academy',
    name: 'Achievers Scholars Academy',
    category: 'Education & Coaching',
    industry: 'Coaching Institute',
    location: 'National Scholars & STEM Academy',
    image: ASSETS.education,
    altText: 'Bright modern educational classroom with smartboards',
    headline: 'Guiding Next-Generation Leaders & Rankers',
    description: 'Comprehensive batch schedules, faculty qualifications, previous year results showcase, and scholarship demo registrations.',
    metrics: 'Lead Form Tested',
    features: ['Batch Schedule Filter', 'Ranker Testimonials', 'Free Demo Class Booking', 'Syllabus PDF']
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹4,999',
    priceValue: 4999,
    cadence: 'one-time',
    description: 'For businesses ready to launch a fast, beautiful digital presence.',
    deliveryTime: '24 Hours Guaranteed',
    features: [
      'One-page structured flagship website',
      'Ultra-fluid mobile responsive layout',
      'Business overview & services showcase',
      'Direct 1-click WhatsApp booking button',
      'Contact hub & interactive map embed',
      'Core search SEO metadata setup'
    ],
    ctaText: 'Launch Starter'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '₹9,999',
    priceValue: 9999,
    cadence: 'one-time',
    badge: 'MOST POPULAR',
    isPopular: true,
    description: 'For ambitious businesses engineered to generate high-intent customer inquiries every day.',
    deliveryTime: '24-48 Hours Delivery',
    features: [
      'Multi-section flagship platform (up to 5 sections)',
      'Floating & inline WhatsApp lead integration',
      'Interactive customer lead capture conduit',
      'Interactive location & directions integration',
      'High-res photo gallery & portfolio showcase',
      'Social media integration (Instagram, LinkedIn)',
      'High-velocity search SEO acceleration',
      '2 rounds of VIP polish and refinement'
    ],
    ctaText: 'Choose Growth Flagship'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '₹14,999',
    priceValue: 14999,
    cadence: 'one-time',
    description: 'For elite brands demanding an unforgettable, authoritative digital presence.',
    deliveryTime: '48-72 Hours Delivery',
    features: [
      'Comprehensive custom flagship (up to 8 sections)',
      'Bespoke brand-matched visual architecture',
      'High-conversion sales funnels & lead captures',
      'Multi-location map & branch routing',
      'Full gallery, video & verified review showcase',
      '3 rounds of VIP revisions',
      '30-day priority concierge post-launch support'
    ],
    ctaText: 'Build Premium Flagship'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'process',
    question: 'How quickly can my website go live?',
    answer: 'Your first functional website is delivered within 24 hours of receiving your business details, media, and preferences. Revisions and custom domain connectivity are typically wrapped up swiftly within 24 to 48 hours.'
  },
  {
    id: 'faq-2',
    category: 'technical',
    question: 'Do I need any technical knowledge?',
    answer: 'Zero technical knowledge required. We manage the design, mobile optimization, conversion architecture, hosting deployment, and direct WhatsApp connection. You simply review on your smartphone and approve.'
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'Can I update the website later?',
    answer: 'Yes. We build clean, modular code with complete source ownership and offer fast, hassle-free updates for seasonal offers, price card adjustments, and new services anytime.'
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: 'Will the website perform smoothly on all mobile devices?',
    answer: 'Every website is engineered mobile-first because over 85% of modern high-value consumers browse and book from smartphones. Your flagship loads in under 1.2 seconds on 4G/5G connections and adapts seamlessly.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'How does WhatsApp lead integration work?',
    answer: 'Direct WhatsApp integration eliminates booking friction. When potential clients tap your call-to-action, a chat opens instantly on their phone with a pre-formatted message specifying the exact service or package they desire.'
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'Do you provide domain and hosting assistance?',
    answer: 'We provide full guidance and setup assistance for your custom domain (.com, .io, or national TLD) registered under your 100% legal ownership, paired with high-speed global cloud hosting.'
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Do you serve clients nationally and internationally?',
    answer: 'Yes, absolutely. We architect and launch high-converting digital flagships for clients across New York, London, Dubai, Singapore, Mumbai, and worldwide. Our rapid 24-hour sprint workflow functions seamlessly across time zones with white-glove communication.'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    businessName: 'Lumière Salon and Spa',
    ownerName: 'Sunita Reddy',
    ownerRole: 'Founder & Creative Director',
    industry: 'Salon and Spa',
    location: 'London & Mumbai Flagship',
    quote: 'Before launching our digital flagship, we lost dozens of high-ticket spa therapies and bridal inquiries every week. Our flagship went live in less than 24 hours, and within 3 weeks our booking rate doubled through frictionless WhatsApp conversion.',
    launchDuration: '24 Hours Delivery',
    packageUsed: 'Growth Package',
    metrics: [
      { stat: '+135%', label: 'Weekend Bookings' },
      { stat: '40+', label: 'Weekly WhatsApp Inquiries' },
      { stat: '99.4', label: 'Mobile Performance Score' }
    ],
    tags: ['Global Flagship', 'WhatsApp Lead Gen', 'Bridal & Spa Packages'],
    avatarInitial: 'SR',
    avatarBg: 'bg-gradient-to-br from-[#FFB800] via-[#EC4899] to-[#8B5CF6]'
  },
  {
    id: 'story-2',
    businessName: 'PrimeNest Luxury Residences',
    ownerName: 'Vikram K. Rao',
    ownerRole: 'Managing Partner',
    industry: 'Real Estate & Luxury Towers',
    location: 'Downtown Dubai & Skyline Towers',
    quote: 'Most real estate portals take months and cost a fortune. AURA LUXE delivered our luxury penthouse brochure site in a single sprint. High-net-worth buyers now review the floor plans, amenities, and connect with our private sales desk immediately without middlemen.',
    launchDuration: '24 Hours Delivery',
    packageUsed: 'Premium Package',
    metrics: [
      { stat: '3.4x', label: 'Direct Site Visit Requests' },
      { stat: '<1.1s', label: 'Page Load on 4G/5G' },
      { stat: '100%', label: 'Direct Client Inquiries' }
    ],
    tags: ['International Living', 'Floorplans & RERA', 'Direct High-Ticket Leads'],
    avatarInitial: 'VR',
    avatarBg: 'bg-gradient-to-br from-[#adc6ff] to-[#0ea5e9]'
  },
  {
    id: 'story-3',
    businessName: 'Shrimati Heritage Jewellery',
    ownerName: 'Maheshwar Chary',
    ownerRole: '3rd Generation Proprietor',
    industry: 'Gold & Diamond Atelier',
    location: 'Heritage Atelier & NRI Global Suites',
    quote: 'For decades we relied on word-of-mouth. When international NRI wedding planners began searching online, we had no presence. Having our high-jewelry Polki collections online gave us instant international prestige. We closed 14 high-ticket bridal commissions in our first month alone.',
    launchDuration: '24 Hours Delivery',
    packageUsed: 'Growth Package',
    metrics: [
      { stat: '14', label: 'Bridal Sets Booked in M1' },
      { stat: '68%', label: 'Global NRI & Out-of-City Reach' },
      { stat: '100%', label: 'Independent Ownership' }
    ],
    tags: ['Heritage Atelier', 'Bridal Catalog', 'Private Viewings'],
    avatarInitial: 'MC',
    avatarBg: 'bg-gradient-to-br from-[#f59e0b] to-[#ec4899]'
  },
  {
    id: 'story-4',
    businessName: 'Apex Elite Crossfit & Athletic Club',
    ownerName: 'Dr. Arjun Verma',
    ownerRole: 'Head Coach & Founder',
    industry: 'Fitness & Athletic Training',
    location: 'Metropolitan Performance Hub',
    quote: 'Our club targets ambitious professionals who make decisions on mobile. The VIP guest pass funnel with instant WhatsApp delivery skyrocketed our trial-to-membership conversion rate overnight. Ultra-fast delivery, zero technical friction.',
    launchDuration: '24 Hours Delivery',
    packageUsed: 'Starter Package',
    metrics: [
      { stat: '+85%', label: 'Walk-in Free Trial Claims' },
      { stat: '10 mins', label: 'Average Lead Response' },
      { stat: '5/5', label: 'Search Ranking' }
    ],
    tags: ['Performance Hub', 'Free Trial Pass', 'Instant Lead Funnel'],
    avatarInitial: 'AV',
    avatarBg: 'bg-gradient-to-br from-[#4edea3] to-[#0ea5e9]'
  }
];
