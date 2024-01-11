/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/promo',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
