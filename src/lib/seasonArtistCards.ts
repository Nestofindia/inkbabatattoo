import { getTattooArtistBySlug } from '@/config/tattooArtists';
import type { SeasonArtistBooking } from '@/config/seasonBookings';
import { getSeasonArtistPath } from '@/config/seasonBookings';

const CHAKTI_IMAGE = 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/chakti.jpeg';
const FALLBACK_IMAGE = 'https://ik.imagekit.io/wt9brvtz5/logos/Png%20black%20orange';

export interface SeasonArtistCardData {
  id: string;
  name: string;
  specialty: string;
  countryFlag?: string;
  subtitle: string;
  image: string;
  href: string;
}

export function toSeasonArtistCard(artist: SeasonArtistBooking): SeasonArtistCardData {
  let image = artist.profileImage ?? FALLBACK_IMAGE;
  let subtitle = artist.subtitle ?? artist.specialty;
  let countryFlag = artist.countryFlag;

  if (artist.pageType === 'tattoo' && artist.categorySlug) {
    const profile = getTattooArtistBySlug(artist.categorySlug, artist.id);
    if (profile) {
      image = profile.profileImage;
      subtitle = profile.subtitle;
      countryFlag = profile.countryFlag;
    }
  }

  if (artist.id === 'chakti') {
    image = CHAKTI_IMAGE;
    subtitle = 'Professional Piercing Artist';
  }

  return {
    id: artist.id,
    name: artist.name,
    specialty: artist.specialty,
    countryFlag,
    subtitle,
    image,
    href: getSeasonArtistPath(artist),
  };
}
