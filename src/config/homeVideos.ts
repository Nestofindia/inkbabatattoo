/** Homepage video URLs — used for preloading and featured section */
export const HERO_VIDEO_URL =
  'https://ik.imagekit.io/kqgs8jfw2/videos/INKBABA.mp4';

export const ABOUT_VIDEO_URL =
  'https://ik.imagekit.io/kqgs8jfw2/videos/Inkbaba%20family.mov/ik-video.mp4';

export const FEATURED_PREVIEW_VIDEOS = [
  'https://ik.imagekit.io/kqgs8jfw2/videos/chakti%2002.mp4',
  'https://ik.imagekit.io/kqgs8jfw2/videos/Dana%20Sha%2006.mp4?updatedAt=1786387161161',
  'https://ik.imagekit.io/kqgs8jfw2/videos/Giada%2010.mp4',
  'https://ik.imagekit.io/kqgs8jfw2/videos/Pallada%2026.mp4',
  'https://ik.imagekit.io/kqgs8jfw2/videos/Sachin%20Aarote%2004.mp4',
  'https://ik.imagekit.io/kqgs8jfw2/videos/Mother%20Earth,%20reborn%20%E2%9C%A8Gave%20this%20existing%20piece%20on%20Emily%20a%20bold%20blastover%20_%20reworked,%20refined%20and.mp4',
] as const;

/** Videos to prefetch as soon as the homepage loads */
export const HOME_PRELOAD_VIDEO_URLS = [
  HERO_VIDEO_URL,
  ABOUT_VIDEO_URL,
  ...FEATURED_PREVIEW_VIDEOS,
] as const;
