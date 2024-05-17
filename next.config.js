/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en-IN'], // Specify the locales supported by your application
    defaultLocale: 'en-IN', // Set the default locale to India (English)
  },
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
