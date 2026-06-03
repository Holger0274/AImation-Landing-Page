const path = require('path');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // ESM package support for @lobehub/icons
  transpilePackages: ['@lobehub/icons'],
  async redirects() {
    return [
      { source: '/en/impressum', destination: '/impressum', permanent: true },
      { source: '/en/datenschutz', destination: '/datenschutz', permanent: true },
      { source: '/en/blog/:slug', destination: '/blog/:slug', permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Turbopack alias: stub out @lobehub/ui which is only used by
  // @lobehub/icons' Dashboard/Editor components we never import.
  // Without this, the build fails pulling in antd + heavy deps.
  turbopack: {
    resolveAlias: {
      '@lobehub/ui': './lib/stubs/lobehub-ui.js',
      '@lobehub/ui/storybook': './lib/stubs/lobehub-ui.js',
      '@lobehub/ui/icons': './lib/stubs/lobehub-ui.js',
      'antd-style': './lib/stubs/lobehub-ui.js',
      'antd': './lib/stubs/lobehub-ui.js',
    },
  },
  // Webpack fallback for non-Turbopack builds (e.g. Vercel)
  webpack: (config, { webpack }) => {
    const stub = path.resolve(__dirname, 'lib/stubs/lobehub-ui.js');
    config.resolve.alias['antd-style'] = stub;
    config.resolve.alias['antd'] = stub;
    // Use NormalModuleReplacementPlugin to catch @lobehub/ui and all subpaths
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^@lobehub\/ui(\/.*)?$/,
        stub
      )
    );
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
