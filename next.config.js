/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "jungoauction.com",
        },
      ],
    },
  },
  // webpack: (config, options) => {
  //   // Setup @svgr as loader for SVG images using the webpack hook
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });
  //
  //   return config;
  // },
};
