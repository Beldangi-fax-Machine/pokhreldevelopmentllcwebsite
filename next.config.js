/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'beldangi-fax-machine.github.io',
      'aqubebarbershop.com', 
      'dahalmechanical.com'
    ]
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  exportTrailingSlash: true,
  generateEtags: false,
  compress: true
}

module.exports = nextConfig 