/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, context) => {
      // enable polling (for live refresh) based on env variable being set
      if(process.env.NEXT_WEBPACK_USEPOLLING) {
        config.watchOptions = {
          poll: 500,
          aggregateTimeout: 300
        }
      }
      return config
    },
}

module.exports = nextConfig
