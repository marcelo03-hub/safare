import type { Destination, DestinationCountry } from '../data/safareData';

export interface SearchCriteria {
  destinationId: string;
  travelDate: string;
  travelers: number;
}

export interface InquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  travelers: number;
  notes?: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

export function clampTravelers(count: number): number {
  if (!Number.isFinite(count)) return 2;
  return Math.min(12, Math.max(1, Math.round(count)));
}

export function filterDestinations(
  destinations: Destination[],
  countryFilter: DestinationCountry,
  selectedDestinationId: string
): Destination[] {
  let result = destinations;

  if (countryFilter !== 'All') {
    result = result.filter((item) => item.country === countryFilter);
  }

  if (selectedDestinationId && selectedDestinationId !== 'all') {
    const exactMatch = result.filter((item) => item.id === selectedDestinationId);
    if (exactMatch.length > 0) {
      return exactMatch;
    }
  }

  return result;
}

export function getCarouselStartIndex(
  currentIndex: number,
  direction: 'prev' | 'next',
  totalItems: number,
  visibleCount: number
): number {
  if (totalItems <= visibleCount) return 0;
  const maxStart = totalItems - visibleCount;
  if (direction === 'next') {
    return currentIndex >= maxStart ? 0 : currentIndex + 1;
  }
  return currentIndex <= 0 ? maxStart : currentIndex - 1;
}

export function formatSearchSummary(
  criteria: SearchCriteria,
  destinations: Destination[]
): string {
  const destinationLabel =
    criteria.destinationId === 'all' || !criteria.destinationId
      ? 'All Curated Destinations'
      : destinations.find((d) => d.id === criteria.destinationId)?.name ??
        'Selected Destination';

  const dateLabel = criteria.travelDate ? criteria.travelDate : 'Flexible Dates';
  const guestLabel =
    criteria.travelers === 1
      ? '1 Traveler'
      : `${criteria.travelers} Travelers`;

  return `${destinationLabel} · ${dateLabel} · ${guestLabel}`;
}

export function validateInquiryForm(payload: InquiryPayload): ValidationResult {
  if (!payload.fullName.trim() || payload.fullName.trim().length < 2) {
    return { valid: false, error: 'Please enter your full name.' };
  }
  if (!isValidEmail(payload.email)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  if (!payload.phone.trim() || payload.phone.trim().length < 6) {
    return { valid: false, error: 'Please enter a reachable contact number.' };
  }
  if (payload.travelers < 1 || payload.travelers > 20) {
    return { valid: false, error: 'Travelers count must be between 1 and 20.' };
  }
  return { valid: true };
}
