export interface GalleryItem {
  id: number;
  artist: string;
  category: string;
  image: string;
  alt: string;
}

/** Legacy artwork entries — replaced by tattoo artist profiles in gallery */
export const galleryItems: GalleryItem[] = [];

export const galleryCategories = [
  'All',
  'Minimalistic',
  'Geometric',
  'Ornamental',
  'Realism',
  'Traditional',
  'Tribal',
  'Unique Style',
  'Typography',
  'Calligraphy',
  'Abstract Realism',
  'Japanese',
  'Hand Poke',
  'Black Work',
  'Dot Work',
  'New School',
  'Nomadic',
  'Bioorganic',
  'Trashpolka',
] as const;

export function searchGalleryItems(query: string, limit = 8): GalleryItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return galleryItems.slice(0, limit);
  }

  return galleryItems
    .filter(
      (item) =>
        item.category.toLowerCase().includes(trimmed) ||
        item.artist.toLowerCase().includes(trimmed) ||
        item.alt.toLowerCase().includes(trimmed)
    )
    .slice(0, limit);
}

export function getGalleryItemById(id: number): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}

export function galleryArtPath(id: number): string {
  return `/gallery?art=${id}`;
}

export function galleryCategoryPath(category: string): string {
  return `/gallery?category=${encodeURIComponent(category)}`;
}
