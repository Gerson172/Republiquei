/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'a0.muscache.com', 'i.pinimg.com', 'github.com','play-lh.googleusercontent.com'],
    unoptimized: true,
    loader: 'akamai',
    path: '',
  }

}

const path = require('path')

module.exports = {
  distDir: 'build',
  images: {
    unoptimized: true,
    loader: 'imgix',
  },
};

module.exports = nextConfig