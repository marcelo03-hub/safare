export type DestinationCountry = 'All' | 'Saudi Arabia' | 'Turkey';

export interface Destination {
  id: string;
  name: string;
  country: 'Saudi Arabia' | 'Turkey';
  description: string;
  highlight: string;
  image: string;
  bestSeason: string;
  idealDuration: string;
  featuredStops: string[];
}

export interface UmrahPackage {
  id: string;
  tier: 'Essential Umrah' | 'Premium Umrah' | 'Luxury Umrah';
  subtitle: string;
  duration: string;
  hotel: string;
  transportation: string;
  facilities: string[];
  pricingLabel: 'Contact for Pricing';
  image: string;
  itineraryHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  detailPoints: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  destination: string;
  quote: string;
  packageName: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_saudi_mountains_1795061552867.jpg';
export const FOOTER_BACKDROP = '/src/assets/images/exp_desert_sanctuary_1795061554130.jpg';

export const DESTINATIONS: Destination[] = [
  {
    id: 'thaif',
    name: 'Thaif',
    country: 'Saudi Arabia',
    description: 'The City of Roses',
    highlight: 'Mountains, rose gardens, cool weather, and beautiful landscapes.',
    image: '/src/assets/images/dest_thaif_roses_1795061553652.jpg',
    bestSeason: 'March – October',
    idealDuration: '3 Days · 2 Nights',
    featuredStops: [
      'Al Hada Mountain Cable Car & Escarpment',
      'Traditional Damask Rose Distilleries',
      'Shubra Palace & Historic Souq Okaz',
    ],
  },
  {
    id: 'alula',
    name: 'AlUla',
    country: 'Saudi Arabia',
    description: 'Ancient Wonders',
    highlight: 'Historic Nabataean heritage, desert landscapes, and Elephant Rock.',
    image: '/src/assets/images/dest_alula_wonders_1795061552519.jpg',
    bestSeason: 'October – April',
    idealDuration: '4 Days · 3 Nights',
    featuredStops: [
      'Hegra (Madain Salih) UNESCO Heritage Site',
      'Jabal AlFil (Elephant Rock) Sunset Sanctuary',
      'AlUla Old Town Mudbrick Oasis & Dadan',
    ],
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    description: 'Where East Meets West',
    highlight: 'Ottoman architecture, Blue Mosque, Hagia Sophia, and Bosphorus.',
    image: '/src/assets/images/dest_istanbul_bosphorus_1795061553875.jpg',
    bestSeason: 'April – November',
    idealDuration: '5 Days · 4 Nights',
    featuredStops: [
      'Sultan Ahmed (Blue Mosque) & Hagia Sophia',
      'Private Bosphorus Sunset Cruise',
      'Topkapi Palace Sacred Relics & Eyup Sultan Mosque',
    ],
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia',
    country: 'Turkey',
    description: 'A Magical Landscape',
    highlight: 'Hot air balloons, unique valleys, and beautiful sunrise views.',
    image: '/src/assets/images/dest_cappadocia_balloons_1795061552853.jpg',
    bestSeason: 'April – October',
    idealDuration: '3 Days · 2 Nights',
    featuredStops: [
      'Sunrise Hot Air Balloon Over Goreme Valley',
      'Uchisar Castle & Pasabag Fairy Chimneys',
      'Boutique Stone Cave Suites with Halal Dining',
    ],
  },
  {
    id: 'madinah',
    name: 'Madinah',
    country: 'Saudi Arabia',
    description: 'City of Peace',
    highlight: 'Masjid Nabawi and meaningful spiritual experiences.',
    image: '/src/assets/images/dest_madinah_nabawi_1795061553181.jpg',
    bestSeason: 'Year-Round',
    idealDuration: '4 Days · 3 Nights',
    featuredStops: [
      'Al-Masjid an-Nabawi & Rawdah Sharif Guided Visit',
      'Masjid Quba & Mount Uhud Historical Ziyarah',
      'Qiblatain Mosque & Madinah Date Palm Gardens',
    ],
  },
  {
    id: 'makkah',
    name: 'Makkah',
    country: 'Saudi Arabia',
    description: 'The Sacred City',
    highlight: 'Masjidil Haram and the Kaaba.',
    image: '/src/assets/images/dest_makkah_haram_1795061553238.jpg',
    bestSeason: 'Year-Round',
    idealDuration: '5 Days · 4 Nights',
    featuredStops: [
      'Masjidil Haram Tawaf & Guided Umrah Rituals',
      'Jabal al-Nour, Cave of Hira & Arafat Plains',
      'Courtyard Steps-Away Hospitality & Scholar Briefings',
    ],
  },
];

export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: 'essential-umrah',
    tier: 'Essential Umrah',
    subtitle: 'Thoughtfully paced pilgrimage for first-time pilgrims and families.',
    duration: '9 Days · 8 Nights',
    hotel: '4-Star Sanctuary Hotels (350m from Haram & Nabawi)',
    transportation: 'Haramain High-Speed Rail & Private Air-Conditioned Coaches',
    facilities: [
      'Official Umrah Visa & Travel Insurance',
      'Experienced Bilingual Mutawwif Guidance',
      'Daily Halal Breakfast & Authentic Dinner',
      'Makkah, Madinah & Thaif Day Ziyarah',
    ],
    pricingLabel: 'Contact for Pricing',
    image: '/src/assets/images/dest_madinah_nabawi_1795061553181.jpg',
    itineraryHighlights: [
      'Arrival in Madinah with serene Rawdah coordination',
      'Haramain High-Speed Rail transfer to Makkah',
      'Full Umrah guidance and historical Ziyarah in both Holy Cities',
    ],
  },
  {
    id: 'premium-umrah',
    tier: 'Premium Umrah',
    subtitle: 'Elevated comfort with courtyard-facing suites and curated heritage extensions.',
    duration: '12 Days · 11 Nights',
    hotel: '5-Star Direct Courtyard Hotels (Steps from Masjidil Haram & Nabawi)',
    transportation: 'Business Class Haramain Rail & Executive Private SUVs',
    facilities: [
      'Priority Visa Processing & VIP Airport Meet-and-Greet',
      'Private Scholar-Led Spiritual Reflections',
      'Full-Board Fine Halal Culinary Experience',
      'Guided Cultural Excursion to Thaif or AlUla',
    ],
    pricingLabel: 'Contact for Pricing',
    image: '/src/assets/images/umrah_luxury_suite_1795061552881.jpg',
    itineraryHighlights: [
      '5 nights in Madinah followed by 4 nights in Makkah',
      '2-night scenic highland or desert heritage retreat in Thaif or AlUla',
      'Dedicated 24/7 concierge and small-group spiritual circle',
    ],
  },
  {
    id: 'luxury-umrah',
    tier: 'Luxury Umrah',
    subtitle: 'Bespoke private pilgrimage uniting the Two Holy Mosques with Istanbul or AlUla.',
    duration: '14 Days · 13 Nights',
    hotel: 'Ultra-Luxury Kaaba & Haram-View Suites + Heritage Resorts',
    transportation: 'Business Class Flights, Private Chauffeur Fleet & High-Speed Rail',
    facilities: [
      'Dedicated Private Mutawwif & Personal Travel Concierge',
      'Tailored Departure Dates for Families & Private Groups',
      'Private Lounge Access & Seamless Luggage Porterage',
      'Curated Extension to AlUla Desert Sanctuary or Istanbul',
    ],
    pricingLabel: 'Contact for Pricing',
    image: '/src/assets/images/dest_makkah_haram_1795061553238.jpg',
    itineraryHighlights: [
      'Direct Haram-view luxury suites in Makkah and Madinah',
      'Private sunset excursion to AlUla Hegra or Bosphorus yacht cruise',
      'Completely customizable schedule tailored around prayer times',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'spiritual-journey',
    index: '01',
    title: 'Spiritual Journey',
    subtitle: 'Perjalanan ibadah yang lebih bermakna.',
    description:
      'Every step between Madinah and Makkah is unhurried and deeply supported. From serene pre-dawn prayer walks to scholar-led reflections, we handle every logistical detail so your heart remains anchored in worship.',
    detailPoints: [
      'Small-group & private Mutawwif accompaniment',
      'Hotels selected within calm walking distance of the Haramain',
      'Dedicated Rawdah scheduling & structured manasik briefings',
    ],
    image: '/src/assets/images/dest_makkah_haram_1795061553238.jpg',
  },
  {
    id: 'cultural-discovery',
    index: '02',
    title: 'Cultural Discovery',
    subtitle: 'Mengenal sejarah dan budaya Islam.',
    description:
      'Walk through centuries of living Islamic civilization—from the prophetic heritage valleys of Madinah and Thaif to the grand Ottoman mosques, libraries, and Bosphorus horizons of Istanbul.',
    detailPoints: [
      'Historian-guided visits to Topkapi Sacred Relics & Sultan Ahmed',
      'Curated Ziyarah across Uhud, Quba, and historic Hijaz valleys',
      'Muslim-friendly gastronomy rooted in local heritage',
    ],
    image: '/src/assets/images/exp_islamic_heritage_1795061553795.jpg',
  },
  {
    id: 'extraordinary-escape',
    index: '03',
    title: 'Extraordinary Escape',
    subtitle: 'Menikmati keindahan alam dan destinasi dunia.',
    description:
      'Pause in awe before creation’s quiet grandeur. Witness sunrise balloons drifting over Cappadocia’s sculpted valleys, misty damask rose terraces in Thaif, and starlit sandstone canyons in AlUla.',
    detailPoints: [
      'Boutique desert sanctuaries in AlUla & highland retreats in Thaif',
      'Sunrise hot air balloon & valley exploration in Cappadocia',
      'Prayer-conscious pacing with private family accommodations',
    ],
    image: '/src/assets/images/exp_desert_sanctuary_1795061554130.jpg',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sample-1',
    name: 'Amina & Tariq Rahmawati',
    city: 'Jakarta, Indonesia',
    destination: 'Makkah, Madinah & Thaif',
    packageName: 'Premium Umrah',
    quote:
      'Everything moved with quiet grace. Walking straight into Masjid Nabawi at Fajr and spending two peaceful days among the rose-scented mountains of Thaif gave our family an Umrah we will cherish for life.',
  },
  {
    id: 'sample-2',
    name: 'Dr. Yusuf Al-Mansoor',
    city: 'Kuala Lumpur, Malaysia',
    destination: 'AlUla & Madinah',
    packageName: 'Luxury Umrah',
    quote:
      'SAFARÉ curated our Madinah stay and private AlUla extension with remarkable care. Having prayer times respected throughout our desert itinerary made exploring Nabataean heritage effortless.',
  },
  {
    id: 'sample-3',
    name: 'Nadia Hakim',
    city: 'Singapore',
    destination: 'Istanbul & Cappadocia',
    packageName: 'Turkish Heritage Collection',
    quote:
      'From the Ottoman heritage tour around the Blue Mosque to watching sunrise balloons in Cappadocia with verified halal dining at every stop, every detail felt warm, personal, and deeply thoughtful.',
  },
];

export const TRUST_PARTNERS = [
  { name: 'Haramain Rail', detail: 'High-Speed Transit' },
  { name: 'Muslim-Friendly', detail: 'Halal Verified' },
  { name: 'Saudi Heritage', detail: 'Licensed Concierge' },
  { name: 'Ottoman Trails', detail: 'Curated Cultural Guides' },
  { name: 'Sanctuary Stays', detail: 'Courtyard Proximity' },
];
