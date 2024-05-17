/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    ATLAS_URI: process.env.ATLAS_URI,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(txt|LICENSE|README)$/,
      use: 'raw-loader',
      // test: /\.(txt|md|license)$/,
      // use: 'ignore-loader',
    });

    config.experiments = {
      layers: true,
    };

    return config;
  },
};

// export default nextConfig;
