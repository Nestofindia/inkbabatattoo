export function slugifyTattooPath(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function tattooServicesPath(): string {
  return '/tattoo-services';
}

export function tattooCategoryPath(categorySlug: string): string {
  return `/tattoo-services/${categorySlug}`;
}

export function tattooArtistPath(categorySlug: string, artistId: string): string {
  return `/tattoo-services/${categorySlug}/${artistId}`;
}

export function tattooArtistInstagramUrl(handle: string): string {
  return `https://www.instagram.com/${handle.replace(/^@/, '')}/`;
}
