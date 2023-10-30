/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
      {
        hostname: "placehold.co\//",
      },
    ],
  },
};

module.exports = nextConfig;
