import { ArrowRight, Building2, Check, Clock, Train } from 'lucide-react';
import { motion } from 'motion/react';
import { UMRAH_PACKAGES, type UmrahPackage } from '../data/safareData';
import { SafeImage } from './SafeImage';

interface UmrahPackagesSectionProps {
  onSelectPackage: (pkg: UmrahPackage) => void;
}

export function UmrahPackagesSection({
  onSelectPackage,
}: UmrahPackagesSectionProps) {
  return (
    <section
      id="umrah-packages"
      className="scroll-mt-24 px-6 sm:px-12 lg:px-16 py-16 sm:py-22 border-t border-[#D8C7A5]/45"
    >
      <div className="max-w-2xl mb-12">
        <div className="w-9 h-[2px] bg-[#B99A63] mb-5" aria-hidden="true" />
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1D5145] mb-2">
          Curated Pilgrimage Tiers
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123D35] text-balance">
          Your Spiritual Journey Starts Here
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#242824]/75 leading-relaxed">
          Three thoughtfully paced Umrah journeys designed around proximity to
          the Two Holy Mosques, trusted scholarly guidance, and seamless comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {UMRAH_PACKAGES.map((pkg, index) => {
          const isFeatured = pkg.id === 'premium-umrah';
          return (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-[24px] overflow-hidden flex flex-col transition-all duration-300 ${
                isFeatured
                  ? 'bg-[#123D35] text-[#F6F1E8] shadow-xl'
                  : 'bg-white text-[#242824] border border-[#D8C7A5]/60'
              }`}
            >
              {/* Package Photography */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1D5145]">
                <SafeImage
                  src={pkg.image}
                  alt={`${pkg.tier} accommodation and spiritual journey`}
                  fallbackTitle={pkg.tier}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-medium text-white">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D8C7A5]" aria-hidden="true" />
                    <span className="tabular-nums">{pkg.duration}</span>
                  </span>
                  {isFeatured && (
                    <span className="text-[#D8C7A5] font-semibold tracking-wide">
                      Most Requested
                    </span>
                  )}
                </div>
              </div>

              {/* Package Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3
                  className={`font-display text-2xl font-bold tracking-tight ${
                    isFeatured ? 'text-white' : 'text-[#123D35]'
                  }`}
                >
                  {pkg.tier}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isFeatured ? 'text-[#F6F1E8]/80' : 'text-[#242824]/75'
                  }`}
                >
                  {pkg.subtitle}
                </p>

                {/* Hotel & Transport Details */}
                <div
                  className={`mt-5 pt-5 border-t space-y-3 text-xs ${
                    isFeatured
                      ? 'border-white/15 text-[#F6F1E8]/90'
                      : 'border-[#D8C7A5]/45 text-[#242824]/85'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <Building2
                      className="w-4 h-4 text-[#B99A63] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{pkg.hotel}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Train
                      className="w-4 h-4 text-[#B99A63] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{pkg.transportation}</span>
                  </div>
                </div>

                {/* Facilities */}
                <ul className="mt-5 space-y-2 flex-1">
                  {pkg.facilities.map((facility) => (
                    <li
                      key={facility}
                      className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                        isFeatured ? 'text-[#F6F1E8]/85' : 'text-[#242824]/80'
                      }`}
                    >
                      <Check
                        className="w-3.5 h-3.5 text-[#B99A63] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Label & Action */}
                <div
                  className={`mt-7 pt-5 border-t flex items-center justify-between gap-4 ${
                    isFeatured ? 'border-white/15' : 'border-[#D8C7A5]/45'
                  }`}
                >
                  <div>
                    <span
                      className={`block text-[11px] uppercase tracking-wider ${
                        isFeatured ? 'text-[#D8C7A5]' : 'text-[#242824]/55'
                      }`}
                    >
                      Bespoke Quote
                    </span>
                    <span
                      className={`font-display text-sm font-semibold ${
                        isFeatured ? 'text-white' : 'text-[#123D35]'
                      }`}
                    >
                      {pkg.pricingLabel}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63] ${
                      isFeatured
                        ? 'bg-[#B99A63] text-[#123D35] hover:bg-[#c8aa74]'
                        : 'bg-[#123D35] text-white hover:bg-[#1D5145]'
                    }`}
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
