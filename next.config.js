/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

const path = require('path')

module.exports = {
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    images: {
      unoptimized: true,
      loader: 'static',
    },
  }
};

module.exports = nextConfig
