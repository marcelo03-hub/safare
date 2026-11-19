import { FormEvent, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { isValidEmail } from '../utils/journeyFilter';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setSubscribedEmail(email.trim());
    setEmail('');
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className="px-6 sm:px-12 lg:px-16 py-14 sm:py-18 border-t border-[#D8C7A5]/45"
    >
      <div className="rounded-[24px] bg-white border border-[#D8C7A5]/60 px-6 sm:px-10 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <div className="w-9 h-[2px] bg-[#B99A63] mb-4" aria-hidden="true" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#123D35] text-balance">
            Get Inspired for Your Next Journey
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#242824]/75 leading-relaxed">
            Discover new destinations, travel inspiration, and exclusive journey
            updates.
          </p>
        </div>

        <div className="lg:col-span-6">
          {subscribedEmail ? (
            <div
              role="status"
              className="flex items-start gap-3 p-4 rounded-2xl bg-[#123D35]/8 border border-[#123D35]/20 text-[#123D35]"
            >
              <CheckCircle2 className="w-5 h-5 text-[#123D35] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm">
                <p className="font-semibold">
                  Thank you for subscribing to SAFARÉ Journal.
                </p>
                <p className="text-[#242824]/75 mt-0.5">
                  Seasonal Umrah windows and destination notes will be sent to{' '}
                  <span className="font-medium text-[#123D35]">{subscribedEmail}</span>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your email address"
                  aria-invalid={error ? 'true' : 'false'}
                  className="flex-1 px-5 py-3.5 rounded-full bg-[#F6F1E8]/70 border border-[#D8C7A5] text-sm text-[#242824] placeholder:text-[#242824]/50 focus:outline-none focus:border-[#123D35] focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#123D35] text-white text-sm font-semibold hover:bg-[#1D5145] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B99A63]"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              {error && (
                <p role="alert" className="mt-2.5 text-xs font-medium text-red-700 pl-3">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
