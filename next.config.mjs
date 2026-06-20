/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // This site serves art-directed media through custom lazy <img>/<video>
    // components, never next/image — so the Image Optimization API is disabled
    // entirely (smaller attack surface; sidesteps optimizer-related advisories).
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'inkbaba.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'szekpgvomczeswpvthiy.supabase.co' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'inkbabatattoo.com' },
      { protocol: 'https', hostname: 'www.inkbabatattoo.com' },
    ],
  },
  async redirects() {
    return [
      {
        // Legacy/short path -> canonical piercing route (was a client <Navigate> in the SPA)
        source: '/piercing',
        destination: '/piercing-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
