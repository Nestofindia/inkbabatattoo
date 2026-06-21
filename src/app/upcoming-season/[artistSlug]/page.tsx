import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSeasonArtist } from '@/config/seasonBookings';
import SeasonGuestArtistView from '@/views/SeasonGuestArtistView';

interface PageProps {
  params: { artistSlug: string };
}

export function generateStaticParams() {
  return [{ artistSlug: 'satish' }, { artistSlug: 'omkar' }];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const artist = getSeasonArtist(params.artistSlug);
  if (!artist || artist.pageType !== 'guest') {
    return { title: 'Artist Not Found' };
  }

  return {
    title: `Book ${artist.name} — Upcoming Season | Ink Baba Tattoo House`,
    description: `Reserve a session with ${artist.name} at Ink Baba Tattoo House, Arambol, Goa. November–March guest season booking.`,
  };
}

export default function SeasonGuestArtistPage({ params }: PageProps) {
  const artist = getSeasonArtist(params.artistSlug);

  if (!artist || artist.pageType !== 'guest' || !artist.bookingEnabled) {
    notFound();
  }

  return (
    <>
      <h1 className="sr-only">Book {artist.name} — Upcoming Season</h1>
      <SeasonGuestArtistView artist={artist} />
    </>
  );
}
