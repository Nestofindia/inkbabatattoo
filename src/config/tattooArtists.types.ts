export type TattooArtistWorkItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export type TattooArtistProfile = {
  id: string;
  name: string;
  subtitle: string;
  countryFlag: string;
  category: string;
  categorySlug: string;
  profileImage: string;
  about: string[];
  instagramHandle: string;
  workItems: TattooArtistWorkItem[];
};

export type TattooCategoryGroup = {
  name: string;
  slug: string;
  artists: TattooArtistProfile[];
  coverImage: string;
};
