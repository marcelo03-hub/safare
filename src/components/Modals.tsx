import { FormEvent, useState } from 'react';
import {
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  MapPin,
  Train,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Destination, UmrahPackage } from '../data/safareData';
import { isValidEmail, validateInquiryForm } from '../utils/journeyFilter';
import { SafeImage } from './SafeImage';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onInquire: (destination: Destination) => void;
}

export function DestinationModal({
  destination,
  onClose,
  onInquire,
}: DestinationModalProps) {
  return (
    <AnimatePresence>
      {destination && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dest-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl rounded-[26px] bg-[#F6F1E8] text-[#242824] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
          >
            <div className="md:col-span-5 relative min-h-[220px] md:min-h-full bg-[#123D35]">
              <SafeImage
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                fallbackTitle={destination.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#1D5145]">
                    {destination.country}
                  </p>
                  <h3
                    id="dest-modal-title"
                    className="font-display text-2xl sm:text-3xl font-bold text-[#123D35] mt-1"
                  >
                    {destination.name}
                  </h3>
                  <p className="text-sm font-medium text-[#B99A63] mt-0.5">
                    {destination.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close destination details"
                  className="p-2 rounded-full border border-[#D8C7A5] text-[#123D35] hover:bg-[#123D35] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-4 text-sm text-[#242824]/85 leading-relaxed">
                {destination.highlight}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 py-4 border-y border-[#D8C7A5]/55 text-xs">
                <div>
                  <span className="text-[#242824]/55 block">Ideal Duration</span>
                  <span className="font-semibold text-[#123D35] inline-flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#B99A63]" aria-hidden="true" />
                    {destination.idealDuration}
                  </span>
                </div>
                <div>
                  <span className="text-[#242824]/55 block">Best Season</span>
                  <span className="font-semibold text-[#123D35] inline-flex items-center gap-1.5 mt-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B99A63]" aria-hidden="true" />
                    {destination.bestSeason}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#242824]/60 mb-2.5">
                  Featured Highlights
                </p>
                <ul className="space-y-2">
                  {destination.featuredStops.map((stop) => (
                    <li
                      key={stop}
                      className="flex items-start gap-2.5 text-sm text-[#242824]/85"
                    >
                      <MapPin
                        className="w-4 h-4 text-[#B99A63] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{stop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onInquire(destination)}
                  className="px-6 py-3 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] transition-colors cursor-pointer"
                >
                  Request Custom Itinerary
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-full border border-[#D8C7A5] text-[#123D35] text-sm font-medium hover:bg-white transition-colors cursor-pointer"
                >
                  Back to Destinations
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface PackageModalProps {
  pkg: UmrahPackage | null;
  customDestinationName?: string | null;
  onClose: () => void;
}

export function PackageModal({
  pkg,
  customDestinationName,
  onClose,
}: PackageModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isOpen = Boolean(pkg || customDestinationName);
  const title = pkg
    ? pkg.tier
    : customDestinationName
      ? `Custom Journey: ${customDestinationName}`
      : '';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm({
      fullName,
      email,
      phone,
      travelers,
      notes,
    });
    if (!validation.valid) {
      setError(validation.error || 'Please check your inquiry details.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pkg-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl rounded-[26px] bg-[#F6F1E8] text-[#242824] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#D8C7A5]/60">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#1D5145]">
                  {pkg ? `${pkg.duration} · ${pkg.pricingLabel}` : 'SAFARÉ Concierge'}
                </p>
                <h3
                  id="pkg-modal-title"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#123D35] mt-1"
                >
                  {title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close package inquiry dialog"
                className="p-2 rounded-full border border-[#D8C7A5] text-[#123D35] hover:bg-[#123D35] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {pkg && (
              <div className="py-5 border-b border-[#D8C7A5]/60 space-y-4">
                <p className="text-sm text-[#242824]/80 leading-relaxed">
                  {pkg.subtitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white p-4 rounded-2xl border border-[#D8C7A5]/50">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#B99A63] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pkg.hotel}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Train className="w-4 h-4 text-[#B99A63] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{pkg.transportation}</span>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.itineraryHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#242824]/80">
                      <Check className="w-3.5 h-3.5 text-[#123D35] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {submitted ? (
              <div role="status" className="py-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#123D35] mx-auto mb-3" aria-hidden="true" />
                <h4 className="font-display text-xl font-bold text-[#123D35]">
                  Consultation Request Received
                </h4>
                <p className="mt-2 text-sm text-[#242824]/75 max-w-md mx-auto">
                  Thank you, {fullName}. Our travel concierge will contact you at{' '}
                  <span className="font-semibold text-[#123D35]">{email}</span> with
                  available dates and tailored pricing for {title}.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <p className="text-sm font-semibold text-[#123D35]">
                  Contact for Pricing &amp; Private Consultation
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Amina Rahmawati"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="amina@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                    >
                      WhatsApp / Phone
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+62 812 3456 7890"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="inquiry-travelers"
                      className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                    >
                      Number of Travelers
                    </label>
                    <input
                      id="inquiry-travelers"
                      type="number"
                      min={1}
                      max={20}
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-notes"
                    className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                  >
                    Preferred Travel Month or Notes (Optional)
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share preferred departure dates, room preferences, or family needs"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-red-700">
                    {error}
                  </p>
                )}

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-2.5 rounded-full border border-[#D8C7A5] text-sm font-medium text-[#123D35] hover:bg-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] transition-colors cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface AuthModalProps {
  mode: 'signin' | 'join' | null;
  onSwitchMode: (mode: 'signin' | 'join') => void;
  onClose: () => void;
}

export function AuthModal({ mode, onSwitchMode, onClose }: AuthModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [completedUser, setCompletedUser] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'join' && name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError(null);
    setCompletedUser(mode === 'join' ? name.trim() : email.trim());
  };

  const handleClose = () => {
    setCompletedUser(null);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {mode && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md rounded-[26px] bg-[#F6F1E8] text-[#242824] p-7 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1D5145]">
                  SAFARÉ Member Circle
                </p>
                <h3
                  id="auth-modal-title"
                  className="font-display text-2xl font-bold text-[#123D35] mt-1"
                >
                  {mode === 'signin' ? 'Welcome Back' : 'Join the Journey'}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close member dialog"
                className="p-2 rounded-full border border-[#D8C7A5] text-[#123D35] hover:bg-[#123D35] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {completedUser ? (
              <div role="status" className="py-6 text-center">
                <CheckCircle2 className="w-11 h-11 text-[#123D35] mx-auto mb-3" aria-hidden="true" />
                <p className="font-display text-lg font-bold text-[#123D35]">
                  {mode === 'join'
                    ? `Assalamu'alaikum, ${completedUser}`
                    : `Signed in as ${completedUser}`}
                </p>
                <p className="mt-2 text-sm text-[#242824]/75">
                  Your SAFARÉ member profile is ready for saving Umrah itineraries and heritage journeys.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] cursor-pointer"
                >
                  Continue Exploring
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                {mode === 'join' && (
                  <div>
                    <label
                      htmlFor="auth-name"
                      className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="auth-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="auth-email"
                    className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="auth-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="auth-password"
                    className="block text-xs font-medium text-[#242824]/75 mb-1.5"
                  >
                    Password
                  </label>
                  <input
                    id="auth-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D8C7A5] text-sm focus:outline-none focus:border-[#123D35]"
                  />
                </div>

                {error && (
                  <p role="alert" className="text-xs font-medium text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] transition-colors cursor-pointer"
                >
                  {mode === 'signin' ? 'Sign In' : 'Join Journey'}
                </button>

                <p className="text-center text-xs text-[#242824]/70 pt-1">
                  {mode === 'signin' ? (
                    <>
                      New to SAFARÉ?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setError(null);
                          onSwitchMode('join');
                        }}
                        className="font-semibold text-[#123D35] underline underline-offset-4 cursor-pointer"
                      >
                        Join Journey
                      </button>
                    </>
                  ) : (
                    <>
                      Already a member?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setError(null);
                          onSwitchMode('signin');
                        }}
                        className="font-semibold text-[#123D35] underline underline-offset-4 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </>
                  )}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
