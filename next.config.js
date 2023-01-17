/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLEMAPS_APIKEY: process.env.GOOGLEMAPS_APIKEY,
    GEOAPIFY_APIKEY: process.env.GEOAPIFY_APIKEY,
  },
};

module.exports = nextConfig;
