/**
 * Master SEO keyword catalog for Ink Baba Tattoo House (Goa).
 * Used in meta keywords and schema knowsAbout — not visible on-page.
 */

export const CANONICAL_SITE_URL = 'https://inkbabatattoo.com';

/** Secondary domain — must 301 to CANONICAL_SITE_URL (see vercel.json / netlify.toml). */
export const ALTERNATE_SITE_URLS = [
  'https://inkbabatattoos.com',
  'https://www.inkbabatattoo.com',
  'https://www.inkbabatattoos.com',
] as const;

/** 120+ tattoo & piercing keywords for Goa / Arambol discovery. */
export const SEO_KEYWORDS_MASTER = [
  'Ink Baba Tattoo House',
  'InkBaba tattoo studio',
  'Ink Baba Arambol',
  'inkbabatattoos',
  'inkbabatattoo',
  'tattoo studio Goa',
  'best tattoo studio Goa',
  'tattoo shop Arambol',
  'tattoo parlour Goa',
  'tattoo artist Goa',
  'tattoo near Arambol beach',
  'tattoo North Goa',
  'Arambol tattoo studio',
  'Mandrem tattoo shop',
  'Morjim tattoo artist',
  'Vagator tattoo studio',
  'Anjuna tattoo Goa',
  'Mapusa tattoo shop',
  'Panaji tattoo studio',
  'Calangute tattoo Goa',
  'Baga beach tattoo',
  'spiritual tattoo Goa',
  'mandala tattoo Goa',
  'sacred symbol tattoo India',
  'ritual tattoo Arambol',
  'healing ritual tattoo',
  'custom tattoo Goa',
  'walk-in tattoo Goa',
  'same day tattoo Arambol',
  'free tattoo consultation Goa',
  'tattoo booking WhatsApp Goa',
  'tattoo price Goa',
  'affordable tattoo Arambol',
  'premium tattoo studio India',
  'international tattoo artists Goa',
  'guest tattoo artist Goa',
  'Western tattoo artist India',
  'female tattoo artist Goa',
  'male tattoo artist Arambol',
  'fine line tattoo Goa',
  'minimalist tattoo Arambol',
  'small tattoo Goa beach',
  'couple tattoo Goa',
  'matching tattoo Arambol',
  'cover up tattoo Goa',
  'tattoo rework India',
  'blackwork tattoo Goa',
  'dotwork tattoo Arambol',
  'geometric tattoo Goa',
  'ornamental tattoo India',
  'traditional tattoo Goa',
  'Japanese tattoo Arambol',
  'realism tattoo Goa',
  'portrait tattoo Arambol',
  'abstract realism tattoo',
  'bioorganic tattoo Goa',
  'biomechanical tattoo India',
  'tribal tattoo Arambol',
  'hand poke tattoo Goa',
  'typography tattoo Arambol',
  'calligraphy tattoo Goa',
  'trash polka tattoo India',
  'color tattoo Goa',
  'black and grey tattoo Arambol',
  'vegan tattoo ink Goa',
  'hygienic tattoo studio Goa',
  'sterile tattoo parlour India',
  'UK hygiene standard tattoo',
  'tattoo aftercare Goa',
  'first tattoo Goa',
  'travel tattoo India',
  'backpacker tattoo Arambol',
  'beach tattoo studio Goa',
  'tattoo holiday Goa',
  'tattoo retreat Goa',
  'yoga tattoo Arambol',
  'spiritual art tattoo India',
  'Om tattoo Goa',
  'lotus tattoo Arambol',
  'Shiva tattoo Goa',
  'Ganesha tattoo India',
  'chakra tattoo Arambol',
  'yantra tattoo Goa',
  'sacred geometry tattoo',
  'body piercing Goa',
  'nose piercing Arambol',
  'ear piercing Goa beach',
  'professional piercing studio India',
  'safe piercing Goa',
  'piercing aftercare Arambol',
  'nose ring Goa',
  'earlobe piercing Arambol',
  'septum piercing Goa',
  'belly piercing North Goa',
  'tattoo and piercing Arambol',
  'Ink Baba piercing',
  'Ink Baba reviews',
  'tattoo studio reviews Goa',
  'Google reviews tattoo Arambol',
  '4.9 rated tattoo studio Goa',
  'best piercing Goa',
  'tattoo studio near me Arambol',
  'open now tattoo Goa',
  'tattoo studio Khalcha Wada',
  'Arambol Market Beach Road tattoo',
  'Goa tattoo appointment',
  'book tattoo online Goa',
  'WhatsApp tattoo booking',
  'Sachin tattoo artist Goa',
  'Bhumika tattoo Arambol',
  'Niculin tattoo guest artist',
  'tattoo gallery Goa',
  'tattoo portfolio Arambol',
  'tattoo inspiration India',
  'meaningful tattoo Goa',
  'personalized tattoo design',
  'custom sleeve tattoo Goa',
  'half sleeve tattoo Arambol',
  'full sleeve tattoo Goa',
  'back tattoo studio India',
  'arm tattoo Arambol',
  'leg tattoo Goa',
  'finger tattoo Arambol',
  'wrist tattoo Goa beach',
  'ankle tattoo Arambol',
  'scar cover tattoo Goa',
  'sensitive skin tattoo consultation',
  'tattoo FAQ Goa',
  'tattoo terms Arambol studio',
  'tattoo deposit policy Goa',
  'UPI payment tattoo India',
  'tattoo studio email Goa',
  'tattoo studio phone Arambol',
  'inkbabatattoostudio',
  'spiritual tattoo art Arambol',
  'creative tattoo community Goa',
  'tattoo house India',
  'Goa ink studio',
  'Arambol ink artists',
] as const;

export type SeoKeywordPage =
  | 'home'
  | 'about'
  | 'gallery'
  | 'services'
  | 'tattoo-services'
  | 'piercing-services'
  | 'healing-rituals'
  | 'tattoo-retreat'
  | 'contact'
  | 'testimonials'
  | 'faq'
  | 'terms'
  | 'artist'
  | 'category'
  | '404';

const PAGE_KEYWORD_EXTRAS: Record<SeoKeywordPage, readonly string[]> = {
  home: [],
  about: [
    'tattoo studio story Goa',
    'meet tattoo artists Arambol',
    'Ink Baba team',
    'tattoo philosophy spiritual',
  ],
  gallery: [
    'tattoo photos Goa',
    'finished tattoo work',
    'mandala tattoo pictures',
    'blackwork portfolio',
  ],
  services: [
    'spiritual tattoo services',
    'mandala tattoo booking',
    'sacred portrait tattoo',
  ],
  'tattoo-services': [
    'tattoo styles list Goa',
    'book custom tattoo Arambol',
    'guest artist schedule',
  ],
  'piercing-services': [
    'body mod piercing Goa',
    'sterile piercing needle',
    'piercing consultation free',
  ],
  'healing-rituals': [
    'intention setting tattoo',
    'life transition tattoo ritual',
    'mindful tattoo experience',
  ],
  'tattoo-retreat': [
    'immersive tattoo experience',
    'artist residency Goa',
    'creative tattoo vacation',
  ],
  contact: [
    'tattoo studio address Arambol',
    'directions Ink Baba',
    'call tattoo studio Goa',
  ],
  testimonials: [
    'client stories tattoo Goa',
    'five star tattoo reviews',
    'traveler tattoo experience',
  ],
  faq: [
    'how much tattoo Goa',
    'tattoo healing tips',
    'tattoo age limit India',
  ],
  terms: ['tattoo cancellation policy', 'studio liability tattoo'],
  artist: ['book tattoo artist Goa', 'artist portfolio Ink Baba'],
  category: ['tattoo style specialists Goa'],
  '404': ['Ink Baba tattoo house'],
};

/** Full keyword string for homepage (120+ terms). */
export function getHomeKeywords(): string {
  return SEO_KEYWORDS_MASTER.join(', ');
}

/** Page-specific keywords merged with a relevant slice of the master list. */
export function getPageKeywords(
  page: SeoKeywordPage,
  extra: string[] = []
): string {
  const extras = PAGE_KEYWORD_EXTRAS[page];
  const sliceStart =
    page === 'home' ? 0 : Math.abs(hashPage(page)) % 40;
  const masterSlice =
    page === 'home'
      ? [...SEO_KEYWORDS_MASTER]
      : SEO_KEYWORDS_MASTER.slice(sliceStart, sliceStart + 45);

  const combined = [...extra, ...extras, ...masterSlice];
  const unique = [...new Set(combined.map((k) => k.trim()).filter(Boolean))];
  return unique.join(', ');
}

function hashPage(page: string): number {
  let h = 0;
  for (let i = 0; i < page.length; i++) h = (h + page.charCodeAt(i) * 31) | 0;
  return h;
}

export const SEO_KEYWORD_COUNT = SEO_KEYWORDS_MASTER.length;
