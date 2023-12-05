/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ["pages/portfolio/config.jsx", "pages/home/home.config.jsx"],

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
