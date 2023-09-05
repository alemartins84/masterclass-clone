/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'fakeimg.pl'],
  },
}

module.exports = nextConfig
