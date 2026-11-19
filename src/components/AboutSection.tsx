import { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 sm:px-12 lg:px-16 py-16 sm:py-22 border-t border-[#D8C7A5]/45"
    >
      <div className="rounded-[26px] bg-[#123D35] text-[#F6F1E8] px-7 sm:px-12 lg:px-16 py-12 sm:py-16 relative overflow-hidden">
        {/* Subtle Decorative Arch Lines */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute -right-14 -bottom-16 w-72 h-72 rounded-full border border-[#B99A63]/20 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute -right-4 -bottom-8 w-52 h-52 rounded-full border border-[#D8C7A5]/15 pointer-events-none"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="w-9 h-[2px] bg-[#B99A63] mb-5" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#D8C7A5] mb-3">
              About SAFARÉ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
              Every Journey Has a Deeper Meaning
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#F6F1E8]/85 leading-relaxed max-w-2xl">
              SAFARÉ is more than a travel experience. We believe every journey
              brings new perspectives, meaningful connections, and unforgettable
              memories.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#B99A63] text-[#123D35] text-sm font-semibold hover:bg-[#c8aa74] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>{expanded ? 'Show Less' : 'Learn More'}</span>
                {expanded ? (
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Right Editorial Summary Commitments */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:border-l lg:border-white/15 lg:pl-10">
            <div>
              <p className="font-display text-lg font-bold text-[#D8C7A5]">
                Prayer-First Pacing
              </p>
              <p className="mt-1 text-sm text-[#F6F1E8]/75 leading-relaxed">
                Every itinerary honors daily prayer times and peaceful mosque access.
              </p>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#D8C7A5]">
                Verified Halal &amp; Sanctuary Stays
              </p>
              <p className="mt-1 text-sm text-[#F6F1E8]/75 leading-relaxed">
                Handpicked family-friendly hotels and heritage retreats across Saudi Arabia and Turkey.
              </p>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-[#D8C7A5]">
                Dedicated Concierge
              </p>
              <p className="mt-1 text-sm text-[#F6F1E8]/75 leading-relaxed">
                From Umrah visa coordination to private transfers in AlUla and Cappadocia.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Story Drawer */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#F6F1E8]/85 leading-relaxed">
                <div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    01. Sincere Stewardship
                  </h3>
                  <p>
                    We view pilgrimage and heritage travel as an amanah—treating every elder, parent, and child in our care with unhurried hospitality.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    02. Curated Scholars &amp; Historians
                  </h3>
                  <p>
                    Licensed Mutawwif guides in Makkah and Madinah pair seamlessly with cultural historians in AlUla, Thaif, and Istanbul.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2">
                    03. Transparent Planning
                  </h3>
                  <p>
                    Every group size and departure window receives a tailored proposal before booking, with zero hidden surcharges.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
