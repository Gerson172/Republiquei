/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'a0.muscache.com', 'i.pinimg.com', 'github.com','play-lh.googleusercontent.com'],
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
    async headers() {
        return [
            {
                // matching all API routes
                source: '/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
                ],
            },
        ];
    },
}

const path = require('path')

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "api/Usuario/ObterUsuarioPorId?IdUsuario=1",
        destination: "http:apirepubliquei.azurewebsites.net",
      },
    ];
  };
  return {
    rewrites,
  };
};

module.exports = nextConfig