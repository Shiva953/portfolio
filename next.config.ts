import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ishaand.com',
        pathname: '/_next/**',
      },
    ],
  },
};

export default nextConfig;
