import { FormEvent, useRef, useState } from 'react';
import { ArrowRight, Calendar, MapPin, Search, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DESTINATIONS, HERO_IMAGE } from '../data/safareData';
import type { SearchCriteria } from '../utils/journeyFilter';
import { clampTravelers } from '../utils/journeyFilter';

interface HeroSectionProps {
  onSearch: (criteria: SearchCriteria) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroContainerRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const [destinationId, setDestinationId] = useState('all');
  const [travelDate, setTravelDate] = useState('2026-12');
  const [travelers, setTravelers] = useState(2);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch({
      destinationId,
      travelDate,
      travelers: clampTravelers(travelers),
    });
  };

  return (
    <section id="explore" ref={heroContainerRef} className="relative pt-3 sm:pt-5 px-3 sm:px-5">
      {/* Main Rounded Hero Frame inside the Warm Cream Editorial Sheet */}
      <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center bg-[#123D35]">
        {/* Parallax Background Photography */}
        <motion.div
          style={{ y: parallaxY }}
          className="absolute inset-0 -top-8 -bottom-8 will-change-transform"
        >
          <img
            src={HERO_IMAGE}
            alt="Majestic sandstone canyon mountains and winding desert road in Saudi Arabia at golden hour"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Measured Gradient Overlay for WCAG AA+ Readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#123D35]/88 via-[#242824]/52 to-[#123D35]/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#123D35]/60 via-transparent to-black/25"
        />

        {/* Subtle Floating Geometric Arch Accent */}
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:block absolute right-10 top-10 w-44 h-56 rounded-t-full border border-[#D8C7A5]/25 pointer-events-none"
        />

        {/* Hero Copy */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-16 sm:py-20 pb-24 sm:pb-28">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-medium tracking-[0.18em] text-[#D8C7A5] uppercase mb-4"
            >
              Muslim Journey &amp; Spiritual Travel
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-white font-bold tracking-tight leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4.4vw, 3.85rem)' }}
            >
              Discover The Beauty of Every Journey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-base sm:text-lg text-[#F6F1E8]/90 leading-relaxed max-w-xl"
            >
              From the sacred cities of Makkah and Madinah to the breathtaking
              landscapes of Saudi Arabia and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#destinations"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#B99A63] text-[#123D35] font-semibold text-sm hover:bg-[#c8aa74] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 shadow-lg shadow-black/15"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/45 bg-white/10 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-all duration-200 hover:scale-[1.02] whitespace-nowrap shrink-0"
              >
                <span>Discover Our Journey</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating White Pill Search Bar Straddling Hero Bottom Edge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 -mt-12 sm:-mt-11 max-w-4xl mx-auto px-2 sm:px-6"
      >
        <form
          onSubmit={handleSubmit}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          aria-label="Search curated journeys"
          className={`bg-white rounded-3xl lg:rounded-full p-3 lg:p-2 lg:pl-6 border transition-all duration-300 shadow-[0_20px_50px_-14px_rgba(18,61,53,0.22)] ${
            isSearchFocused
              ? 'border-[#B99A63] ring-4 ring-[#B99A63]/15'
              : 'border-[#D8C7A5]/45'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_auto] items-center gap-3 lg:gap-2">
            {/* Destination Dropdown */}
            <div className="flex items-center gap-3 px-3 py-2 lg:py-1.5 rounded-2xl hover:bg-[#F6F1E8]/55 transition-colors">
              <MapPin
                className="w-5 h-5 text-[#123D35] shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="search-destination"
                  className="block text-[11px] font-semibold tracking-wider uppercase text-[#242824]/55"
                >
                  Destination
                </label>
                <select
                  id="search-destination"
                  value={destinationId}
                  onChange={(e) => setDestinationId(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#242824] focus:outline-none cursor-pointer truncate"
                >
                  <option value="all">All Destinations</option>
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.id} value={dest.id}>
                      {dest.name}, {dest.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Travel Date Picker */}
            <div className="flex items-center gap-3 px-3 py-2 lg:py-1.5 rounded-2xl lg:border-l lg:border-[#D8C7A5]/50 hover:bg-[#F6F1E8]/55 transition-colors">
              <Calendar
                className="w-5 h-5 text-[#123D35] shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="search-date"
                  className="block text-[11px] font-semibold tracking-wider uppercase text-[#242824]/55"
                >
                  Travel Date
                </label>
                <input
                  id="search-date"
                  type="month"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-[#242824] focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Travelers Select */}
            <div className="flex items-center gap-3 px-3 py-2 lg:py-1.5 rounded-2xl lg:border-l lg:border-[#D8C7A5]/50 hover:bg-[#F6F1E8]/55 transition-colors">
              <Users
                className="w-5 h-5 text-[#123D35] shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="search-travelers"
                  className="block text-[11px] font-semibold tracking-wider uppercase text-[#242824]/55"
                >
                  Travelers
                </label>
                <select
                  id="search-travelers"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-transparent text-sm font-semibold text-[#242824] focus:outline-none cursor-pointer"
                >
                  <option value={1}>1 traveler</option>
                  <option value={2}>2 travelers</option>
                  <option value={3}>3 travelers</option>
                  <option value={4}>4 travelers</option>
                  <option value={6}>6 travelers (Family)</option>
                </select>
              </div>
            </div>

            {/* Search Journey Button */}
            <button
              type="submit"
              className="sm:col-span-2 lg:col-span-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl lg:rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A63]"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              <span>Search Journey</span>
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
