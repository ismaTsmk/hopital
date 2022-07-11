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
  }
})

// module.exports = nextConfig
