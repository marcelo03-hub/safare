import { Award, Compass, ShieldCheck, Train, Landmark } from 'lucide-react';
import { TRUST_PARTNERS } from '../data/safareData';

const ICONS = [Train, ShieldCheck, Landmark, Compass, Award];

export function PartnerStrip() {
  return (
    <div className="px-6 sm:px-12 lg:px-16 pt-10 pb-6 border-b border-[#D8C7A5]/40">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
        {TRUST_PARTNERS.map((partner, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <div
              key={partner.name}
              className="flex items-center justify-center lg:justify-start gap-2.5 text-[#242824]/60 select-none"
            >
              <Icon className="w-4 h-4 text-[#123D35]/70 shrink-0" aria-hidden="true" />
              <div className="leading-tight">
                <p className="font-display text-xs font-bold tracking-[0.12em] uppercase text-[#242824]/75">
                  {partner.name}
                </p>
                <p className="text-[11px] text-[#242824]/50">{partner.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
