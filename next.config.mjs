/** @type {import('next').NextConfig} */

webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
    }
    return config
  }

const nextConfig = {};

export default nextConfig;
