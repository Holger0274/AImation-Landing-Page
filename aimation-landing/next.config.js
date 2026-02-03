/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ESM package support for @lobehub/icons
  transpilePackages: ['@lobehub/icons'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
