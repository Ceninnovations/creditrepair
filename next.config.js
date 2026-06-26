/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // pdfjs-dist requires canvas to be aliased out in server environments
    config.resolve.alias.canvas = false;
    return config;
  },
  async redirects() {
    return [
      // DisputeGator design-system prototype (served statically from /public/disputegator)
      {
        source: '/design',
        destination: '/disputegator/ui_kits/disputegator-app/index.html',
        permanent: false,
      },
      {
        source: '/design-system',
        destination: '/disputegator/index.html',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
