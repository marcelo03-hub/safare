import test from 'node:test';
import assert from 'node:assert/strict';
import { DESTINATIONS } from '../data/safareData';
import {
  clampTravelers,
  filterDestinations,
  formatSearchSummary,
  getCarouselStartIndex,
  isValidEmail,
  validateInquiryForm,
} from './journeyFilter';

test('filterDestinations filters by country and specific destination ID', () => {
  const saudi = filterDestinations(DESTINATIONS, 'Saudi Arabia', 'all');
  assert.equal(saudi.length, 4);
  assert.ok(saudi.every((d) => d.country === 'Saudi Arabia'));

  const turkey = filterDestinations(DESTINATIONS, 'Turkey', 'all');
  assert.equal(turkey.length, 2);

  const alula = filterDestinations(DESTINATIONS, 'All', 'alula');
  assert.equal(alula.length, 1);
  assert.equal(alula[0].name, 'AlUla');
});

test('getCarouselStartIndex wraps cleanly across bounds', () => {
  assert.equal(getCarouselStartIndex(0, 'next', 6, 3), 1);
  assert.equal(getCarouselStartIndex(3, 'next', 6, 3), 0);
  assert.equal(getCarouselStartIndex(0, 'prev', 6, 3), 3);
  assert.equal(getCarouselStartIndex(2, 'prev', 6, 3), 1);
  assert.equal(getCarouselStartIndex(0, 'next', 2, 3), 0);
});

test('clampTravelers bounds input between 1 and 12', () => {
  assert.equal(clampTravelers(0), 1);
  assert.equal(clampTravelers(15), 12);
  assert.equal(clampTravelers(3), 3);
  assert.equal(clampTravelers(Number.NaN), 2);
});

test('formatSearchSummary builds clean editorial summary string', () => {
  const summary = formatSearchSummary(
    { destinationId: 'thaif', travelDate: '2026-12', travelers: 3 },
    DESTINATIONS
  );
  assert.equal(summary, 'Thaif · 2026-12 · 3 Travelers');

  const allSummary = formatSearchSummary(
    { destinationId: 'all', travelDate: '', travelers: 1 },
    DESTINATIONS
  );
  assert.equal(allSummary, 'All Curated Destinations · Flexible Dates · 1 Traveler');
});

test('isValidEmail and validateInquiryForm enforce required fields', () => {
  assert.equal(isValidEmail('amina@example.com'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail(''), false);

  const missingName = validateInquiryForm({
    fullName: '',
    email: 'amina@example.com',
    phone: '+62812345678',
    travelers: 2,
  });
  assert.equal(missingName.valid, false);

  const valid = validateInquiryForm({
    fullName: 'Amina Rahmawati',
    email: 'amina@example.com',
    phone: '+62812345678',
    travelers: 2,
  });
  assert.equal(valid.valid, true);
});
