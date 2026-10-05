/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/how-to-setup-iptv-firestick-complete-guide',
        destination: '/blog/how-to-setup-iptv-on-firestick-guide',
        permanent: true,
      },
      {
        source: '/blog/best-iptv-players-2026-comparison',
        destination: '/blog/best-iptv-players-comparison',
        permanent: true,
      },
      {
        source: '/blog/how-to-fix-iptv-buffering-freezing-guide',
        destination: '/blog/how-to-fix-iptv-buffering-freezing',
        permanent: true,
      },
      {
        source: '/blog/iptv-smarters-pro-setup-configuration-guide',
        destination: '/blog/iptv-smarters-pro-setup-guide',
        permanent: true,
      },
      {
        source: '/blog/streaming-live-sports-in-4k-speed-device-requirements',
        destination: '/blog/streaming-live-sports-in-4k-requirements',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
