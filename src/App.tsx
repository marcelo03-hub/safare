import { useMemo, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { AuthModal, DestinationModal, PackageModal } from './components/Modals';
import { Navbar } from './components/Navbar';
import { NewsletterSection } from './components/NewsletterSection';
import { PartnerStrip } from './components/PartnerStrip';
import { TestimonialsSection } from './components/TestimonialsSection';
import { UmrahPackagesSection } from './components/UmrahPackagesSection';
import {
  DESTINATIONS,
  HERO_IMAGE,
  type Destination,
  type DestinationCountry,
  type UmrahPackage,
} from './data/safareData';
import {
  filterDestinations,
  formatSearchSummary,
  type SearchCriteria,
} from './utils/journeyFilter';

export default function App() {
  const [countryFilter, setCountryFilter] = useState<DestinationCountry>('All');
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria | null>(null);
  const [spotlightId, setSpotlightId] = useState<string>(DESTINATIONS[0].id);

  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<UmrahPackage | null>(
    null
  );
  const [customDestinationInquiry, setCustomDestinationInquiry] = useState<
    string | null
  >(null);
  const [authMode, setAuthMode] = useState<'signin' | 'join' | null>(null);

  const filteredDestinations = useMemo(() => {
    return filterDestinations(
      DESTINATIONS,
      countryFilter,
      searchCriteria?.destinationId ?? 'all'
    );
  }, [countryFilter, searchCriteria]);

  const activeSearchSummary = useMemo(() => {
    if (!searchCriteria) return null;
    return formatSearchSummary(searchCriteria, DESTINATIONS);
  }, [searchCriteria]);

  const handleSearch = (criteria: SearchCriteria) => {
    setCountryFilter('All');
    setSearchCriteria(criteria);
    if (criteria.destinationId !== 'all') {
      setSpotlightId(criteria.destinationId);
    }
    const target = document.getElementById('destinations');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClearSearch = () => {
    setSearchCriteria(null);
    setCountryFilter('All');
    setSpotlightId(DESTINATIONS[0].id);
  };

  const handleCountryFilterChange = (country: DestinationCountry) => {
    setCountryFilter(country);
    setSearchCriteria(null);
    const matching = filterDestinations(DESTINATIONS, country, 'all');
    if (matching.length > 0) {
      setSpotlightId(matching[0].id);
    }
  };

  const handleCycleSpotlight = (direction: 'prev' | 'next') => {
    const list = filteredDestinations.length > 0 ? filteredDestinations : DESTINATIONS;
    const currentIdx = list.findIndex((d) => d.id === spotlightId);
    const safeIdx = currentIdx === -1 ? 0 : currentIdx;
    const nextIdx =
      direction === 'next'
        ? (safeIdx + 1) % list.length
        : (safeIdx - 1 + list.length) % list.length;
    setSpotlightId(list[nextIdx].id);
  };

  const handleSelectDestinationById = (id: string) => {
    const found = DESTINATIONS.find((d) => d.id === id);
    if (found) {
      setSelectedDestination(found);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen relative bg-[#123D35] text-[#242824] overflow-x-clip">
        {/* Top Atmospheric Backdrop Framing Navbar & Cream Editorial Sheet */}
        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-0 h-[760px] pointer-events-none z-0"
        >
          <img
            src={HERO_IMAGE}
            alt=""
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123D35]/70 via-[#123D35]/45 to-[#123D35]" />
        </div>

        <Navbar onOpenAuth={setAuthMode} />

        {/* Main Floating Warm Cream Editorial Sheet */}
        <main className="relative z-10 pt-20 sm:pt-24 px-3 sm:px-6 lg:px-8">
          <div className="max-w-[1300px] mx-auto bg-[#F6F1E8] rounded-[28px] sm:rounded-[36px] shadow-[0_32px_90px_-20px_rgba(0,0,0,0.45)] overflow-hidden">
            <HeroSection onSearch={handleSearch} />
            <PartnerStrip />
            <DestinationsSection
              destinations={filteredDestinations}
              allDestinations={DESTINATIONS}
              countryFilter={countryFilter}
              onCountryFilterChange={handleCountryFilterChange}
              activeSearchSummary={activeSearchSummary}
              onClearSearch={handleClearSearch}
              spotlightId={spotlightId}
              onCycleSpotlight={handleCycleSpotlight}
              onSelectDestination={setSelectedDestination}
            />
            <UmrahPackagesSection onSelectPackage={setSelectedPackage} />
            <ExperienceSection />
            <AboutSection />
            <TestimonialsSection />
            <NewsletterSection />
          </div>
        </main>

        <div className="relative z-10">
          <Footer onSelectDestinationById={handleSelectDestinationById} />
        </div>

        {/* Interactive Detail & Inquiry Modals */}
        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onInquire={(dest) => {
            setSelectedDestination(null);
            setCustomDestinationInquiry(`${dest.name}, ${dest.country}`);
          }}
        />

        <PackageModal
          pkg={selectedPackage}
          customDestinationName={customDestinationInquiry}
          onClose={() => {
            setSelectedPackage(null);
            setCustomDestinationInquiry(null);
          }}
        />

        <AuthModal
          mode={authMode}
          onSwitchMode={setAuthMode}
          onClose={() => setAuthMode(null)}
        />
      </div>
    </MotionConfig>
  );
}
