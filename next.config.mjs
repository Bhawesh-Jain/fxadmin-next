/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ATLAS_URI: process.env.ATLAS_URI,
  },
  webpack: (config, { isServer }) => {
    config.experiments = {
      layers: true,
    };
    return config;
  },
};

export default nextConfig;
