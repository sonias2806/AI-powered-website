import React, { useState } from 'react';
import { Quote, Star, MapPin, CheckCircle, TrendingUp, Clock, Sparkles, ArrowRight, Building } from 'lucide-react';
import { SUCCESS_STORIES } from '../data/siteData';
import { SuccessStory } from '../types';

interface SuccessStoriesSectionProps {
  onSelectStoryForContact?: (businessName: string) => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  onSelectStoryForContact
}) => {
  const [activeStoryId, setActiveStoryId] = useState<string>(SUCCESS_STORIES[0].id);

  const activeStory = SUCCESS_STORIES.find(s => s.id === activeStoryId) || SUCCESS_STORIES[0];

  return (
    <section id="success-stories" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#060e20] relative">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0ea5e9]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#4edea3]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#4edea3] font-bold bg-[#171f33] px-3.5 py-1 rounded-full mb-3 border border-[#2d3449]">
            HYDERABAD PROVEN RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#dae2fd] max-w-3xl tracking-tight">
            Local Success Stories &amp; Impact
          </h2>
          <p className="text-sm sm:text-base text-[#bec8d2] max-w-2xl mt-3 font-normal leading-relaxed">
            See how real local businesses across Jubilee Hills, Gachibowli, Panjagutta, and Madhapur launched in 24 hours and turned online searches into direct paying customers.
          </p>

          {/* Quick Aggregate Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-4xl bg-[#131b2e] p-4 sm:p-5 rounded-2xl border border-[#222a3d]">
            <div className="flex flex-col items-center justify-center p-2 text-center border-r border-[#222a3d] last:border-none">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#4edea3] font-mono">24 Hrs</span>
              <span className="text-[11px] text-[#bec8d2] mt-0.5">Average Turnaround</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-r sm:border-r border-[#222a3d] last:border-none">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#89ceff] font-mono">100%</span>
              <span className="text-[11px] text-[#bec8d2] mt-0.5">Client Code Ownership</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center border-r border-[#222a3d] last:border-none">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#dae2fd] font-mono">3.2x</span>
              <span className="text-[11px] text-[#bec8d2] mt-0.5">Average Lead Lift</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#adc6ff] font-mono">0</span>
              <span className="text-[11px] text-[#bec8d2] mt-0.5">Hidden Retainers</span>
            </div>
          </div>
        </div>

        {/* Stories Grid: 4 Interactive Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SUCCESS_STORIES.map((story) => {
            const isSelected = activeStoryId === story.id;
            return (
              <div
                key={story.id}
                onClick={() => setActiveStoryId(story.id)}
                className={`bg-[#131b2e] rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer ${
                  isSelected
                    ? 'border-[#0ea5e9] bg-[#171f33] shadow-[0_10px_35px_rgba(14,165,233,0.15)] ring-1 ring-[#0ea5e9]/50'
                    : 'border-[#222a3d] hover:border-[#2d3449] hover:bg-[#151e33]'
                }`}
              >
                <div>
                  {/* Top Bar: Business & Location */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl ${story.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0`}>
                        {story.avatarInitial}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#dae2fd] leading-snug">
                          {story.businessName}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-[#89ceff]">
                          <MapPin className="w-3 h-3 shrink-0" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-[#0b1326] px-2.5 py-1 rounded-md border border-[#222a3d] shrink-0">
                      <Clock className="w-3 h-3 text-[#4edea3]" />
                      <span className="text-[10px] font-mono font-medium text-[#dae2fd]">
                        {story.launchDuration}
                      </span>
                    </div>
                  </div>

                  {/* Industry & Package */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[11px] font-medium bg-[#0b1326] text-[#bec8d2] px-2.5 py-0.5 rounded border border-[#222a3d]">
                      {story.industry}
                    </span>
                    <span className="text-[11px] font-medium bg-[#00a572]/15 text-[#4edea3] px-2 py-0.5 rounded">
                      {story.packageUsed}
                    </span>
                  </div>

                  {/* Quote with Quotation mark */}
                  <div className="relative mb-5 pt-1">
                    <Quote className="w-6 h-6 text-[#0ea5e9]/30 mb-1" />
                    <p className="text-xs sm:text-sm text-[#bec8d2] leading-relaxed italic">
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom: Measurable Metrics Strip */}
                <div>
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-[#0b1326] rounded-xl border border-[#222a3d] mb-4">
                    {story.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-base sm:text-lg font-extrabold text-[#4edea3] font-mono leading-tight">
                          {m.stat}
                        </div>
                        <div className="text-[10px] text-[#88929b] truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Person Details & CTA Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#222a3d]/80 text-xs">
                    <div>
                      <div className="font-semibold text-[#dae2fd]">{story.ownerName}</div>
                      <div className="text-[11px] text-[#88929b]">{story.ownerRole}</div>
                    </div>

                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectStoryForContact) {
                          onSelectStoryForContact(story.businessName);
                        }
                      }}
                      className="inline-flex items-center gap-1 font-bold text-xs text-[#89ceff] hover:text-white transition-colors"
                    >
                      <span>Similar Site</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Verification Stamp */}
        <div className="mt-12 p-6 rounded-2xl bg-[#131b2e] border border-[#2d3449] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 border border-[#00a572]/40">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#dae2fd]">
                Real Hyderabad Businesses, Verified Fast Turnarounds
              </h4>
              <p className="text-xs text-[#bec8d2] mt-0.5">
                Every website is crafted natively with 0 bloated builders for top-tier mobile speeds and instant customer response.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#0ea5e9] hover:bg-[#89ceff] hover:text-[#001e2f] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            Launch Yours Next
          </a>
        </div>
      </div>
    </section>
  );
};
