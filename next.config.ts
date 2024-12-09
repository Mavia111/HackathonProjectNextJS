import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds:true,
  },

  // next.config.js

  
};
// next.config.js
module.exports = {
  reactStrictMode: true,
  // Ensure you don't have conflicting rewrites or redirects
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
  // Add any other required settings
};
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
};


export default nextConfig;
