import React from 'react';
import { PenTool } from 'lucide-react';
import ServiceCard from './ServiceCard';
import PiercingWorkGallery from './PiercingWorkGallery';
import type { TattooArtistProfile } from '../../config/tattooArtists.types';
import { toServiceWorkItems } from '../../config/tattooArtists';
import { galleryCategoryPath } from '../../config/gallery';
import { getSeasonArtist, isSeasonBookingEnabled } from '../../config/seasonBookings';
import ArtistSeasonBooking from '../booking/ArtistSeasonBooking';
// import { tattooArtistInstagramUrl } from '../../config/tattooArtists.paths';

interface TattooArtistDetailProps {
  artist: TattooArtistProfile;
}

const TattooArtistDetail: React.FC<TattooArtistDetailProps> = ({ artist }) => {
  const seasonArtist = getSeasonArtist(artist.id);
  const showBooking = isSeasonBookingEnabled(artist.id) && seasonArtist;

  return (
    <>
      <section className="bg-white pt-24 pb-0">
        <div className="container mx-auto px-4 md:px-8">
          <ServiceCard
            id={artist.id}
            title={`${artist.name} ${artist.countryFlag}`}
            subtitle={artist.subtitle}
            description=""
            features={artist.about}
            image={artist.profileImage}
            icon={<PenTool className="h-8 w-8 text-accent-600" />}
            category={artist.category}
            categoryHref={galleryCategoryPath(artist.category)}
          />
        </div>
      </section>

      <PiercingWorkGallery items={toServiceWorkItems(artist)} />

      {showBooking && seasonArtist && <ArtistSeasonBooking artist={seasonArtist} />}
    </>
  );
};

export default TattooArtistDetail;
