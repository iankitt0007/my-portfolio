import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false; // Disable Webpack caching for development
    return config;
  },
};

export default nextConfig;
