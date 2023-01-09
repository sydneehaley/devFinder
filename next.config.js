/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLEMAPS_APIKEY: process.env.GOOGLEMAPS_APIKEY,
    GEOAPIFY_APIKEY: process.env.GEOAPIFY_APIKEY,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/jobs',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
