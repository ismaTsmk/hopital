/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   pwa: {
//     dest: 'public'
//   }
// }
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: 'public'
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,

  }
})

// module.exports = nextConfig
