import { ArrowLeft, ArrowRight, ArrowUpRight, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import type { Destination, DestinationCountry } from '../data/safareData';
import { SafeImage } from './SafeImage';

interface DestinationsSectionProps {
  destinations: Destination[];
  allDestinations: Destination[];
  countryFilter: DestinationCountry;
  onCountryFilterChange: (country: DestinationCountry) => void;
  activeSearchSummary: string | null;
  onClearSearch: () => void;
  spotlightId: string;
  onCycleSpotlight: (direction: 'prev' | 'next') => void;
  onSelectDestination: (destination: Destination) => void;
}

const COUNTRY_TABS: DestinationCountry[] = ['All', 'Saudi Arabia', 'Turkey'];

export function DestinationsSection({
  destinations,
  allDestinations,
  countryFilter,
  onCountryFilterChange,
  activeSearchSummary,
  onClearSearch,
  spotlightId,
  onCycleSpotlight,
  onSelectDestination,
}: DestinationsSectionProps) {
  return (
    <section
      id="destinations"
      className="scroll-mt-24 px-6 sm:px-12 lg:px-16 py-14 sm:py-20"
    >
      {/* Active Search Feedback Bar */}
      {activeSearchSummary && (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-white border border-[#D8C7A5]/60 text-sm">
          <p className="text-[#242824]">
            <span className="font-semibold text-[#123D35]">Active Journey Search:</span>{' '}
            <span>{activeSearchSummary}</span>
          </p>
          <button
            type="button"
            onClick={onClearSearch}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123D35] hover:text-[#1D5145] underline underline-offset-4 cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset Search</span>
          </button>
        </div>
      )}

      {/* Asymmetric Editorial Split matching Reference Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Editorial Intro Column */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between">
          <div>
            <div className="w-9 h-[2px] bg-[#B99A63] mb-5" aria-hidden="true" />

            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#123D35] text-balance leading-tight">
              Where Will Your Journey Take You?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#242824]/75 leading-relaxed">
              Explore extraordinary destinations, meaningful experiences, and
              unforgettable memories.
            </p>

            {/* Interactive Country Filter Tabs */}
            <div
              role="group"
              aria-label="Filter destinations by region"
              className="mt-6 inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#D8C7A5]/30"
            >
              {COUNTRY_TABS.map((tab) => {
                const isActive = countryFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => onCountryFilterChange(tab)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#123D35] text-white shadow-sm'
                        : 'text-[#242824]/75 hover:text-[#123D35]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Circular Arrow Controls */}
            <div className="mt-7 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onCycleSpotlight('prev')}
                aria-label="Previous destination spotlight"
                className="w-11 h-11 rounded-full border border-[#D8C7A5] bg-white/70 text-[#123D35] hover:bg-[#123D35] hover:text-white hover:border-[#123D35] transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63]"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onCycleSpotlight('next')}
                aria-label="Next destination spotlight"
                className="w-11 h-11 rounded-full bg-[#123D35] text-white hover:bg-[#1D5145] transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63]"
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Unboxed Editorial Destination Directory */}
          <div className="hidden lg:block mt-10 pt-6 border-t border-[#D8C7A5]/50">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#242824]/50 mb-3">
              Curated Index
            </p>
            <ul className="space-y-2">
              {allDestinations.map((item, idx) => {
                const isSpotlight = item.id === spotlightId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onSelectDestination(item)}
                      className={`w-full text-left flex items-center justify-between text-xs py-1 transition-colors cursor-pointer ${
                        isSpotlight
                          ? 'text-[#123D35] font-semibold'
                          : 'text-[#242824]/65 hover:text-[#123D35]'
                      }`}
                    >
                      <span className="tabular-nums">
                        0{idx + 1}. {item.name}
                      </span>
                      <span className="text-[#242824]/45">{item.country}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Destination Vertical Portrait Cards */}
        <div className="lg:col-span-8 xl:col-span-9">
          {destinations.length === 0 ? (
            <div className="rounded-2xl border border-[#D8C7A5]/60 bg-white p-10 text-center">
              <p className="font-display text-lg font-semibold text-[#123D35]">
                No destinations match your current filter.
              </p>
              <p className="mt-2 text-sm text-[#242824]/70">
                Reset the search filter to explore all six sacred and cultural destinations.
              </p>
              <button
                type="button"
                onClick={onClearSearch}
                className="mt-5 px-5 py-2.5 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] cursor-pointer"
              >
                Show All Destinations
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {destinations.map((dest, index) => {
                const isSpotlight = dest.id === spotlightId;
                return (
                  <motion.article
                    key={dest.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`group relative rounded-[20px] overflow-hidden aspect-[3/4] bg-[#123D35] transition-all duration-300 ${
                      isSpotlight
                        ? 'ring-2 ring-[#B99A63] ring-offset-4 ring-offset-[#F6F1E8]'
                        : ''
                    }`}
                  >
                    <SafeImage
                      src={dest.image}
                      alt={`${dest.name}, ${dest.country} — ${dest.description}`}
                      fallbackTitle={`${dest.name}, ${dest.country}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Bottom Gradient Overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/90"
                    />

                    {/* Top-Right Circular Arrow Button */}
                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest)}
                      aria-label={`Explore ${dest.name}, ${dest.country}`}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F6F1E8]/92 text-[#123D35] flex items-center justify-center shadow-md transition-all duration-200 group-hover:bg-[#B99A63] group-hover:text-[#123D35] group-hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63]"
                    >
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>

                    {/* Bottom Card Typography */}
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#D8C7A5]">
                        {dest.country}
                      </p>
                      <h3 className="font-display text-xl font-bold tracking-tight mt-0.5">
                        {dest.name}
                      </h3>
                      <p className="text-sm font-medium text-[#F6F1E8]/90 mt-0.5">
                        {dest.description}
                      </p>
                      <p className="mt-2 text-xs text-[#F6F1E8]/75 leading-relaxed line-clamp-2">
                        {dest.highlight}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
