import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/safareData';
import { SafeImage } from './SafeImage';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 sm:px-12 lg:px-16 py-16 sm:py-22 border-t border-[#D8C7A5]/45"
    >
      <div className="max-w-2xl mb-14">
        <div className="w-9 h-[2px] bg-[#B99A63] mb-5" aria-hidden="true" />
        <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1D5145] mb-2">
          The SAFARÉ Approach
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#123D35] text-balance">
          More Than Just a Destination
        </h2>
      </div>

      <div className="space-y-16 sm:space-y-20">
        {EXPERIENCES.map((exp, index) => {
          const isReversed = index % 2 === 1;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Photo Column */}
              <div
                className={`lg:col-span-6 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] bg-[#123D35]">
                  <SafeImage
                    src={exp.image}
                    alt={`${exp.title} — ${exp.subtitle}`}
                    fallbackTitle={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Editorial Prose Column */}
              <div
                className={`lg:col-span-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-[#B99A63] tabular-nums">
                  {exp.index}.
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#123D35]">
                  {exp.title}
                </h3>
                <p className="mt-2 text-base font-medium text-[#1D5145]">
                  {exp.subtitle}
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#242824]/80 leading-relaxed max-w-xl">
                  {exp.description}
                </p>

                <ul className="mt-6 pt-5 border-t border-[#D8C7A5]/50 space-y-2.5">
                  {exp.detailPoints.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-[#242824]/80 flex items-start gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B99A63] shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
