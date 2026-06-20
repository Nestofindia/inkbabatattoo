/** Homepage video URLs — used for preloading and featured section */
export const HERO_VIDEO_URL =
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/new_banner_video/Banner%201_1.mp4';

export const ABOUT_VIDEO_URL =
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/Inkbaba%20family.mp4';

export const FEATURED_PREVIEW_VIDEOS = [
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/chakti.mp4',
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/dana_sha.mp4',
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/giada.mp4',
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/pallada.mp4',
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/sachin_aarote.mp4',
  'https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/satish.mp4',
] as const;

/** Videos to prefetch as soon as the homepage loads */
export const HOME_PRELOAD_VIDEO_URLS = [
  HERO_VIDEO_URL,
  ABOUT_VIDEO_URL,
  ...FEATURED_PREVIEW_VIDEOS.slice(0, 4),
] as const;
