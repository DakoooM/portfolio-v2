/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  pageExtensions: ["pages/portfolio/config.jsx", "pages/home/home.config.jsx"]
}

module.exports = nextConfig;