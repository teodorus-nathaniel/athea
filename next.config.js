const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    const found = config.module.rules.findIndex((rule) => {
      if (!rule.test) return false
      return new RegExp(rule.test).exec('u.svg')
    })
    config.module.rules[found].test = /\.(jpe?g|png|gif)$/i

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
      },
    ],
  ],
  nextConfig
)
