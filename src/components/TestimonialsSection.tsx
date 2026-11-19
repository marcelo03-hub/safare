import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../data/safareData';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      aria-label="Traveler Reflections"
      className="px-6 sm:px-12 lg:px-16 py-16 sm:py-22 border-t border-[#D8C7A5]/45"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Title & Carousel Controls */}
        <div className="lg:col-span-4">
          <div className="w-9 h-[2px] bg-[#B99A63] mb-5" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1D5145] mb-2">
            Illustrative Sample Stories
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#123D35] text-balance">
            Voices From Meaningful Journeys
          </h2>
          <p className="mt-3 text-sm text-[#242824]/70 leading-relaxed">
            Sample traveler reflections illustrating the calm, guided experience
            crafted across our pilgrimage and heritage itineraries.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-[#D8C7A5] bg-white text-[#123D35] hover:bg-[#123D35] hover:text-white hover:border-[#123D35] transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-[#123D35] text-white hover:bg-[#1D5145] transition-all duration-200 hover:scale-105 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63]"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <span className="ml-2 text-xs font-semibold text-[#242824]/60 tabular-nums">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>
          </div>
        </div>

        {/* Right Carousel Card */}
        <div className="lg:col-span-8">
          <div className="rounded-[24px] bg-white border border-[#D8C7A5]/60 p-7 sm:p-10 min-h-[260px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote
                  className="w-8 h-8 text-[#B99A63]/70 mb-5"
                  aria-hidden="true"
                />

                <blockquote className="font-display text-lg sm:text-xl font-medium text-[#123D35] leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="mt-8 pt-6 border-t border-[#D8C7A5]/45 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-display font-bold text-base text-[#123D35]">
                      {current.name}
                    </p>
                    <p className="text-xs text-[#242824]/65 mt-0.5">
                      {current.city} · {current.packageName} (Sample Review)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#1D5145]">
                      {current.destination}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicator Buttons */}
            <div className="mt-6 flex items-center gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show testimonial ${idx + 1}: ${item.name}`}
                  aria-current={idx === activeIndex ? 'true' : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? 'w-8 bg-[#123D35]'
                      : 'w-2.5 bg-[#D8C7A5] hover:bg-[#B99A63]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
