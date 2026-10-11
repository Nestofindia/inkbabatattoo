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

      <section className="bg-[#f8f2eb] px-4 py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto max-w-3xl rounded-[1.5rem] border border-traditional-200 bg-white/90 p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-600">
            Booking Enquiry
          </p>
          <h2 className="mt-2 text-2xl font-heading font-bold text-traditional-900 sm:text-3xl">
            Ready to plan your visit?
          </h2>
          <p className="mt-3 text-sm leading-6 text-traditional-600 sm:text-base">
            Share your preferred date, style, and idea and we’ll help you lock in a smooth consultation.
          </p>
        </div>
      </section>

      {showBooking && seasonArtist && <ArtistSeasonBooking artist={seasonArtist} />}
    </>
  );
};

export default TattooArtistDetail;
