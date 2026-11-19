import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'join') => void;
}

const NAV_LINKS = [
  { label: 'Explore', href: '#explore' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Umrah Packages', href: '#umrah-packages' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenAuth }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F1E8]/92 backdrop-blur-md text-[#123D35] border-b border-[#D8C7A5]/50 shadow-sm'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#explore"
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A63] rounded-md"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M16 3L27 14V27H20V19C20 16.7909 18.2091 15 16 15C13.7909 15 12 16.7909 12 19V27H5V14L16 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="10" r="1.75" fill="#B99A63" />
          </svg>
          <span className="font-display text-lg sm:text-xl font-bold tracking-[0.14em]">
            SAFARÉ
          </span>
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap shrink-0 relative py-1 transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-200 hover:after:w-full ${
                isScrolled
                  ? 'text-[#242824]/85 hover:text-[#123D35] after:bg-[#123D35]'
                  : 'text-white/90 hover:text-white after:bg-[#B99A63]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenAuth('signin')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A63] ${
              isScrolled
                ? 'border border-[#123D35]/25 text-[#123D35] hover:bg-[#123D35]/8'
                : 'border border-white/40 text-white hover:bg-white/15 backdrop-blur-sm'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth('join')}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A63] ${
              isScrolled
                ? 'bg-[#123D35] text-white hover:bg-[#1D5145]'
                : 'bg-[#B99A63] text-[#123D35] hover:bg-[#c8aa74]'
            }`}
          >
            Join Journey
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className={`lg:hidden p-2.5 rounded-full transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
            isScrolled
              ? 'text-[#123D35] hover:bg-[#123D35]/10'
              : 'text-white hover:bg-white/15'
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#F6F1E8] text-[#123D35] border-b border-[#D8C7A5] shadow-xl px-6 py-5"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="py-2.5 text-base font-medium text-[#242824] hover:text-[#123D35] border-b border-[#D8C7A5]/40"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenAuth('signin');
                  }}
                  className="flex-1 py-2.5 px-4 text-sm font-medium rounded-full border border-[#123D35]/30 text-[#123D35] hover:bg-[#123D35]/5 cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenAuth('join');
                  }}
                  className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-full bg-[#123D35] text-white hover:bg-[#1D5145] cursor-pointer"
                >
                  Join Journey
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
