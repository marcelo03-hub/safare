import { Globe, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { DESTINATIONS, FOOTER_BACKDROP } from '../data/safareData';

interface FooterProps {
  onSelectDestinationById: (id: string) => void;
}

export function Footer({ onSelectDestinationById }: FooterProps) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-[#F6F1E8] pt-16 pb-12 mt-8"
    >
      {/* Atmospheric Backdrop Image + Deep Emerald Scrim matching Reference */}
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={FOOTER_BACKDROP}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#123D35]/90 via-[#123D35]/88 to-[#0c2924]/96" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Centered Heritage Emblem & Tagline Header matching Reference Footer */}
        <div className="text-center pb-12 border-b border-white/15">
          <div className="inline-flex items-center justify-center gap-2.5">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M16 3L27 14V27H20V19C20 16.7909 18.2091 15 16 15C13.7909 15 12 16.7909 12 19V27H5V14L16 3Z"
                stroke="#F6F1E8"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="10" r="1.75" fill="#B99A63" />
            </svg>
            <span className="font-display text-2xl font-bold tracking-[0.18em] text-white">
              SAFARÉ
            </span>
          </div>
          <div className="w-8 h-[1.5px] bg-[#B99A63] mx-auto my-3.5" aria-hidden="true" />
          <p className="text-sm sm:text-base tracking-wide text-[#D8C7A5] font-medium">
            Beyond the Journey, Closer to Allah
          </p>
        </div>

        {/* Footer Directory Columns */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Summary */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#D8C7A5] mb-4">
              SAFARÉ Travel
            </h3>
            <p className="text-sm text-[#F6F1E8]/80 leading-relaxed">
              Muslim Journey &amp; Spiritual Travel curated for peaceful Umrah
              pilgrimages and halal cultural escapes across Saudi Arabia and
              Turkey.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#explore"
                aria-label="SAFARÉ Instagram"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-[#F6F1E8] hover:bg-[#B99A63] hover:text-[#123D35] hover:border-[#B99A63] transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#explore"
                aria-label="SAFARÉ Telegram Updates"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-[#F6F1E8] hover:bg-[#B99A63] hover:text-[#123D35] hover:border-[#B99A63] transition-colors"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#explore"
                aria-label="SAFARÉ Global Website"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center text-[#F6F1E8] hover:bg-[#B99A63] hover:text-[#123D35] hover:border-[#B99A63] transition-colors"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#D8C7A5] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F6F1E8]/80">
              <li>
                <a href="#explore" className="hover:text-[#D8C7A5] transition-colors">
                  Explore
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D8C7A5] transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#umrah-packages" className="hover:text-[#D8C7A5] transition-colors">
                  Umrah Packages
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#D8C7A5] transition-colors">
                  Our Experience
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D8C7A5] transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#D8C7A5] mb-4">
              Destinations
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F6F1E8]/80">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDestinationById(dest.id)}
                    className="hover:text-[#D8C7A5] transition-colors text-left cursor-pointer"
                  >
                    {dest.name}, {dest.country}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#D8C7A5] mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-[#F6F1E8]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B99A63] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Kemang Raya Concierge Suite, South Jakarta · Partner Desk in
                  Jeddah &amp; Istanbul
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B99A63] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:concierge@safaretravel.com"
                  className="hover:text-[#D8C7A5] transition-colors"
                >
                  concierge@safaretravel.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B99A63] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+622150998420"
                  className="hover:text-[#D8C7A5] transition-colors tabular-nums"
                >
                  +62 21 5099 8420
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F1E8]/65">
          <p>&copy; {new Date().getFullYear()} SAFARÉ — Muslim Journey &amp; Travel. All rights reserved.</p>
          <p>Beyond the Journey, Closer to Allah</p>
        </div>
      </div>
    </footer>
  );
}
