import React from 'react';
import { PenTool } from 'lucide-react';
import ServiceCard from './ServiceCard';
import PiercingWorkGallery from './PiercingWorkGallery';
import type { TattooArtistProfile } from '../../config/tattooArtists.types';
import { tattooArtistInstagramUrl } from '../../config/tattooArtists.paths';
import { toServiceWorkItems } from '../../config/tattooArtists';
import { galleryCategoryPath } from '../../config/gallery';

interface TattooArtistDetailProps {
  artist: TattooArtistProfile;
}

const TattooArtistDetail: React.FC<TattooArtistDetailProps> = ({ artist }) => {
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
            instagramHandle={artist.instagramHandle}
            instagramHref={tattooArtistInstagramUrl(artist.instagramHandle)}
          />
        </div>
      </section>

      <PiercingWorkGallery items={toServiceWorkItems(artist)} />
    </>
  );
};

export default TattooArtistDetail;
