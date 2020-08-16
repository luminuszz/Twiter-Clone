/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images');

module.exports = withImages({
  trailingSlash: true,
  pageExtensions: ['jsx', 'tsx'],
  reactStrictMode: true,

  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/landing' },
    };
  },
  async rewrites() {
    return [{}];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
