import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Scissors, Check, X, Phone, MessageSquare, ChevronRight, Star, Sparkles } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/siteData';

interface LumiereScreenProps {
  deviceMode?: 'desktop' | 'mobile';
  onClose?: () => void;
  isModal?: boolean;
}

export const LumiereScreen: React.FC<LumiereScreenProps> = ({
  deviceMode = 'desktop',
  onClose,
  isModal = false
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'salon' | 'spa'>('all');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState<'form' | 'confirmed'>('form');
  const [bookingData, setBookingData] = useState({
    name: '',
    service: 'Signature Balayage & Cut',
    date: '2026-09-24',
    time: '14:00',
    guests: '1 Guest',
    notes: ''
  });

  const spaTherapies = [
    { name: 'Swedish Aromatherapy & Hot Stone Massage', duration: '90 min', price: '₹4,500', desc: 'Warm volcanic stones, essential floral oils, deep myofascial tension relief' },
    { name: '24K Gold Cellular Anti-Aging Facial', duration: '75 min', price: '₹5,800', desc: 'Micro-exfoliation, collagen induction, pure 24K gold foil firming mask' },
    { name: 'Deep Tissue & Sports Recovery Suite', duration: '60 min', price: '₹3,900', desc: 'Targeted acupressure, eucalyptus balm, postural muscle realignment' },
    { name: 'Himalayan Pink Salt Glow & Body Polish', duration: '60 min', price: '₹3,600', desc: 'Mineral rich body exfoliation, warm lavender steam wrap, hydrating glow' }
  ];

  const salonServices = [
    { name: 'Signature French Balayage', duration: '150 min', price: '₹7,500', tag: 'Most Popular' },
    { name: 'Keratin Botanical Glossing', duration: '90 min', price: '₹4,800', tag: 'Restorative' },
    { name: 'Gentlemen’s Precision Fade & Beard', duration: '45 min', price: '₹1,900', tag: 'Executive' },
    { name: 'Moroccan Oil Hydrating Spa', duration: '60 min', price: '₹3,400', tag: 'Relaxation' }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('confirmed');
  };

  const handleSendWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hi Lumière Salon & Spa! I want to book an appointment:\nName: ${bookingData.name || 'Guest'}\nService: ${bookingData.service}\nDate: ${bookingData.date} at ${bookingData.time}\nGuests: ${bookingData.guests}`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className={`relative bg-[#121214] text-[#f4efe6] font-sans antialiased overflow-y-auto selection:bg-[#c5a880] selection:text-black ${isModal ? 'max-h-[85vh]' : 'h-full'}`}>
      {/* Top ambient banner */}
      <div className="bg-[#1c1a17] border-b border-[#2d2924] py-2 px-4 text-center text-xs tracking-widest uppercase text-[#c5a880] flex items-center justify-between">
        <span className="flex items-center gap-1.5 mx-auto">
          <Star className="w-3 h-3 text-[#c5a880] fill-[#c5a880]" />
          Flagship Boutique · Private Suites &amp; Valet Parking Available
        </span>
        {isModal && onClose && (
          <button 
            onClick={onClose}
            className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
            title="Close Preview"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Luxury Nav Header - exactly matching the screenshot! */}
      <header className="sticky top-0 z-20 bg-[#121214]/95 backdrop-blur-md border-b border-[#24221f] px-4 md:px-8 py-4 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand mark */}
          <div className="flex flex-col text-left">
            <span className="font-serif-luxury text-2xl md:text-3xl tracking-[0.2em] font-semibold text-[#f4efe6] uppercase">
              LUMIÈRE
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#a49683] uppercase -mt-1">
              SALON &amp; SPA
            </span>
          </div>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase text-[#b8ada0]">
            <button 
              onClick={() => setActiveTab('all')}
              className={`hover:text-[#e4d4be] transition-colors ${activeTab === 'all' ? 'text-[#c5a880] font-semibold' : ''}`}
            >
              HOME
            </button>
            <button 
              onClick={() => setActiveTab('salon')}
              className={`hover:text-[#e4d4be] transition-colors ${activeTab === 'salon' ? 'text-[#c5a880] font-semibold' : ''}`}
            >
              SALON
            </button>
            <button 
              onClick={() => setActiveTab('spa')}
              className={`hover:text-[#e4d4be] transition-colors ${activeTab === 'spa' ? 'text-[#c5a880] font-semibold' : ''}`}
            >
              SPA
            </button>
            <a href="#lumiere-contact" className="hover:text-[#e4d4be] transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBookingModal(true)}
              className="px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#c5a880] text-[#121214] rounded-sm hover:bg-[#d8bd95] active:scale-95 transition-all shadow-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Main Showcase Hero - Matching Image 1.jpeg layout */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {/* Hero Banner Headline with High Luxury Treatment */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c5a880] mb-2 font-medium">
            HAUTE COIFFURE &amp; HOLISTIC SANCTUARY SPA
          </p>
          <h1 className="font-serif-luxury text-3xl md:text-5xl lg:text-6xl text-[#f4efe6] font-normal tracking-tight text-balance">
            Experience Serenity &amp; Transformation
          </h1>
          <p className="text-sm md:text-base text-[#a09485] max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Where bespoke French hair styling meets rejuvenating holistic spa wellness in the serene heart of Banjara Hills.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setShowBookingModal(true)}
              className="px-6 py-2.5 bg-[#f4efe6] text-[#121214] text-xs uppercase tracking-widest font-semibold rounded-sm hover:bg-[#c5a880] transition-colors"
            >
              Book Your Chair
            </button>
            <button
              onClick={() => setActiveTab(activeTab === 'spa' ? 'salon' : 'spa')}
              className="px-6 py-2.5 border border-[#3f3a33] text-[#e0d6c9] text-xs uppercase tracking-widest font-medium rounded-sm hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
            >
              {activeTab === 'spa' ? 'View Salon Menu' : 'Explore Spa Therapies'}
            </button>
          </div>
        </div>

        {/* Dual Card Showcase from the Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Salon Sanctuary */}
          <div className="group relative rounded-xl overflow-hidden border border-[#2b2722] bg-[#181614] flex flex-col justify-between shadow-2xl">
            <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
              <img
                src={ASSETS.salon}
                alt="Lumière Hair Salon Styling Station"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-black/30" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] tracking-widest uppercase text-[#c5a880] font-semibold border border-[#3a352c]">
                Hair Atelier
              </div>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 text-xs text-[#c5a880] mb-1">
                <Scissors className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[10px]">French Cutting &amp; Color</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#f4efe6] mb-2">The Hair Salon</h3>
              <p className="text-xs md:text-sm text-[#9f9485] leading-relaxed mb-4">
                Personalized consultations with Parisian-trained masters. Precision cuts, bespoke Balayage, scalp rejuvenation, and couture styling.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#2d2822]">
                <span className="text-xs text-[#a09485]">From ₹1,500</span>
                <button
                  onClick={() => {
                    setActiveTab('salon');
                    setShowBookingModal(true);
                  }}
                  className="inline-flex items-center gap-1 text-xs text-[#c5a880] hover:text-[#f4efe6] font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Reserve Chair</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Serene Sanctuary Spa */}
          <div className="group relative rounded-xl overflow-hidden border border-[#2b2722] bg-[#181614] flex flex-col justify-between shadow-2xl">
            <div className="relative aspect-[16/11] overflow-hidden bg-stone-900">
              <img
                src={ASSETS.spa}
                alt="Lumière Luxury Wellness Sanctuary and Serene Spa Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-black/30" />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] tracking-widest uppercase text-[#FFB800] font-semibold border border-[#3a352c]">
                Aesthetics &amp; Spa
              </div>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 text-xs text-[#FFB800] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[10px]">Rejuvenating Wellness Sanctuary</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#f4efe6] mb-2">The Spa &amp; Wellness Suites</h3>
              <p className="text-xs md:text-sm text-[#9f9485] leading-relaxed mb-4">
                Immerse yourself in Swedish aromatherapy, 24K gold cellular facials, and hot volcanic stone therapies in private serene suites.
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#2d2822]">
                <span className="text-xs text-[#a09485]">Holistic Wellness Treatments</span>
                <button
                  onClick={() => setActiveTab('spa')}
                  className="inline-flex items-center gap-1 text-xs text-[#FFB800] hover:text-[#f4efe6] font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>View Therapies</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Interactive Section (Salon vs Spa) */}
        <section className="bg-[#181614] border border-[#2b2722] rounded-xl p-5 md:p-8 mb-10">
          <div className="flex items-center justify-between border-b border-[#2b2722] pb-4 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#FFB800] font-semibold">
                CURATED EXPERIENCES
              </span>
              <h2 className="font-serif-luxury text-2xl md:text-3xl text-[#f4efe6]">
                {activeTab === 'spa' ? 'Holistic Spa & Body Therapies' : 'Signature Hair & Styling Services'}
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-[#121214] p-1 rounded-md border border-[#2d2822]">
              <button
                onClick={() => setActiveTab('salon')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-all ${
                  activeTab !== 'spa' ? 'bg-[#FFB800] text-black font-semibold' : 'text-[#a09485] hover:text-white'
                }`}
              >
                Salon
              </button>
              <button
                onClick={() => setActiveTab('spa')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded transition-all ${
                  activeTab === 'spa' ? 'bg-[#FFB800] text-black font-semibold' : 'text-[#a09485] hover:text-white'
                }`}
              >
                Spa
              </button>
            </div>
          </div>

          {activeTab !== 'spa' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {salonServices.map((service, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#141210] border border-[#26221d] flex flex-col justify-between hover:border-[#FFB800]/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs uppercase tracking-wider text-[#FFB800] font-semibold">{service.tag}</span>
                      <span className="text-xs text-[#8a7f72] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {service.duration}
                      </span>
                    </div>
                    <h4 className="text-base text-[#f4efe6] font-medium mb-1">{service.name}</h4>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#221e1a]">
                    <span className="text-sm font-semibold text-[#f4efe6]">{service.price}</span>
                    <button
                      onClick={() => {
                        setBookingData({ ...bookingData, service: service.name });
                        setShowBookingModal(true);
                      }}
                      className="text-xs text-[#FFB800] hover:text-white font-medium underline"
                    >
                      Book this
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {spaTherapies.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#141210] border border-[#26221d] flex flex-col justify-between hover:border-[#FFB800]/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base text-[#f4efe6] font-medium">{item.name}</h4>
                      <span className="text-sm font-semibold text-[#FFB800]">{item.price}</span>
                    </div>
                    <p className="text-xs text-[#8c8173] leading-relaxed mb-1">{item.desc}</p>
                    <span className="text-[11px] text-[#a09485] font-mono">{item.duration}</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#221e1a] text-right">
                    <button
                      onClick={() => {
                        const waMsg = encodeURIComponent(`Hi Lumière Salon & Spa, I would like to book the spa therapy: ${item.name} (${item.price})`);
                        window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${waMsg}`, '_blank');
                      }}
                      className="text-xs text-[#FFB800] hover:text-white font-medium flex items-center gap-1 justify-end ml-auto"
                    >
                      <span>Book on WhatsApp</span>
                      <MessageSquare className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Footer info in Lumière */}
        <div id="lumiere-contact" className="border-t border-[#24221f] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8a7f72] gap-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#c5a880]" />
            <span>Flagship Atelier, Private Suite Concourse · Mayfair &amp; Flagship Suites</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Tues–Sun: 9:00 AM – 9:00 PM</span>
            <a href="tel:+919876543210" className="text-[#c5a880] hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> +91 98765 43210
            </a>
          </div>
        </div>
      </main>

      {/* Interactive Booking Modal for Lumière */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#181614] border border-[#3d372e] rounded-xl p-6 text-[#f4efe6] shadow-2xl">
            <button
              onClick={() => {
                setShowBookingModal(false);
                setBookingStep('form');
              }}
              className="absolute top-4 right-4 text-[#8a7f72] hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingStep === 'form' ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="border-b border-[#2d2822] pb-3 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a880]">LUMIÈRE RESERVATIONS</span>
                  <h3 className="font-serif-luxury text-2xl text-[#f4efe6]">Reserve Your Experience</h3>
                  <p className="text-xs text-[#9d9283]">Salon styling or table appointment in Banjara Hills</p>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a09485] mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="e.g. Ananya Rao"
                    className="w-full px-3 py-2 bg-[#121214] border border-[#332e27] rounded text-sm text-[#f4efe6] focus:border-[#c5a880] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a09485] mb-1 font-medium">Select Service / Experience *</label>
                  <select
                    value={bookingData.service}
                    onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                    className="w-full px-3 py-2 bg-[#121214] border border-[#332e27] rounded text-sm text-[#f4efe6] focus:border-[#c5a880] outline-none"
                  >
                    <option value="Signature French Balayage">Signature French Balayage (₹7,500)</option>
                    <option value="Keratin Botanical Glossing">Keratin Botanical Glossing (₹4,800)</option>
                    <option value="Gentlemen’s Precision Fade">Gentlemen’s Precision Fade (₹1,900)</option>
                    <option value="Moroccan Oil Hydrating Spa">Moroccan Oil Hydrating Spa (₹3,400)</option>
                    <option value="Café Table Reservation (2-4 guests)">Café Table Reservation (2-4 guests)</option>
                    <option value="Bridal Trial &amp; Consultation">Bridal Trial &amp; Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a09485] mb-1 font-medium">Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full px-3 py-2 bg-[#121214] border border-[#332e27] rounded text-sm text-[#f4efe6] focus:border-[#c5a880] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a09485] mb-1 font-medium">Time</label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="w-full px-3 py-2 bg-[#121214] border border-[#332e27] rounded text-sm text-[#f4efe6] focus:border-[#c5a880] outline-none"
                    >
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="06:30 PM">06:30 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c5a880] text-black font-semibold uppercase tracking-wider text-xs rounded hover:bg-[#d8bd95] transition-colors mt-2"
                >
                  Confirm &amp; Generate WhatsApp Ticket
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#f4efe6]">Booking Requested!</h3>
                <p className="text-xs text-[#a39788] max-w-sm mx-auto">
                  We reserved your provisional chair for <strong>{bookingData.service}</strong> on <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleSendWhatsAppBooking}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold uppercase tracking-wider text-xs rounded flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp for Instant Confirmation</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowBookingModal(false);
                      setBookingStep('form');
                    }}
                    className="text-xs text-[#9d9283] hover:text-white pt-1"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
