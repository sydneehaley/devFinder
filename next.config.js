/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLEMAPS_APIKEY: 'AIzaSyBvnKCSxxNksfhdLRQw0Vu6WgAdFo-KZAI',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jobs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
