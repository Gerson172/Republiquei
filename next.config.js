/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  }
};

module.exports = nextConfig
