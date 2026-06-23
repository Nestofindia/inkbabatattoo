/** Upcoming guest season: November through March — booking enabled per artist. */

export const SEASON_LABEL = 'November – March';

export const BOOKING_TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
] as const;

export type SeasonArtistPageType = 'tattoo' | 'piercing' | 'guest';

export interface SeasonArtistBooking {
  id: string;
  name: string;
  displayName: string;
  specialty: string;
  pageType: SeasonArtistPageType;
  /** Tattoo route segments when pageType is tattoo */
  categorySlug?: string;
  /** Guest profile when pageType is guest */
  profileImage?: string;
  subtitle?: string;
  countryFlag?: string;
  bookingEnabled: boolean;
}

export const SEASON_ARTISTS: SeasonArtistBooking[] = [
  {
    id: 'mo-naga',
    name: 'Mo Naga',
    displayName: 'Mo Naga',
    specialty: 'Hand Poke & Tribal',
    pageType: 'tattoo',
    categorySlug: 'hand-poke',
    bookingEnabled: true,
  },
  {
    id: 'tassos-zach',
    name: 'Tassos Zach',
    displayName: 'Tassos',
    specialty: 'Abstract Realism',
    pageType: 'tattoo',
    categorySlug: 'abstract-realism',
    bookingEnabled: true,
  },
  {
    id: 'giada',
    name: 'Giada',
    displayName: 'Giada',
    specialty: 'Geometric',
    pageType: 'tattoo',
    categorySlug: 'geometric',
    bookingEnabled: true,
  },
  {
    id: 'pallada',
    name: 'Pallada',
    displayName: 'Pallada',
    specialty: 'Ornamental',
    pageType: 'tattoo',
    categorySlug: 'ornamental',
    bookingEnabled: true,
  },
  {
    id: 'chakti',
    name: 'Chakti',
    displayName: 'Chakti',
    specialty: 'Professional Piercing',
    pageType: 'piercing',
    bookingEnabled: true,
  },
  {
    id: 'satish',
    name: 'Satish',
    displayName: 'Satish',
    specialty: 'Traditional',
    pageType: 'guest',
    profileImage: 'https://ik.imagekit.io/wt9brvtz5/logos/Png%20black%20orange',
    subtitle: 'Guest artist — upcoming season at Ink Baba, Arambol',
    bookingEnabled: true,
  },
  {
    id: 'manish-kadam',
    name: 'Manish Kadam',
    displayName: 'Manish',
    specialty: 'Typography & Calligraphy',
    pageType: 'tattoo',
    categorySlug: 'typography',
    bookingEnabled: true,
  },
  {
    id: 'omkar',
    name: 'Omkar',
    displayName: 'Omkar',
    specialty: 'Guest Artist',
    pageType: 'guest',
    profileImage: 'https://ik.imagekit.io/wt9brvtz5/logos/Png%20black%20orange',
    subtitle: 'Guest artist — upcoming season at Ink Baba, Arambol',
    bookingEnabled: true,
  },
];

const ARTIST_MAP = new Map(SEASON_ARTISTS.map((a) => [a.id, a]));

export function getSeasonArtist(id: string): SeasonArtistBooking | undefined {
  return ARTIST_MAP.get(id);
}

export function isSeasonBookingEnabled(artistId: string): boolean {
  const artist = ARTIST_MAP.get(artistId);
  return Boolean(artist?.bookingEnabled);
}

export function getSeasonArtistPath(artist: SeasonArtistBooking): string {
  if (artist.pageType === 'tattoo' && artist.categorySlug) {
    return `/tattoo-services/${artist.categorySlug}/${artist.id}`;
  }
  if (artist.pageType === 'piercing') {
    return '/piercing-services#season-booking-chakti';
  }
  return `/upcoming-season/${artist.id}`;
}

export const AVAILABLE_ARTISTS_PATH = '/available-artists';

export function getAvailableSeasonArtists(): SeasonArtistBooking[] {
  return SEASON_ARTISTS.filter((artist) => artist.bookingEnabled);
}

export const SEASON_TICKER_MESSAGES = [
  `Upcoming season ${SEASON_LABEL} at Ink Baba Tattoo House, Arambol, Goa`,
  'Guest artists returning — book your slot for tattoos and piercing',
  'More artists coming soon — stay tuned for updates on our site',
] as const;

export const SEASON_TICKER_CTA = {
  label: 'Available Artists of Season 2026-27',
  href: AVAILABLE_ARTISTS_PATH,
} as const;
