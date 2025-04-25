import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true, // Enables ES Module support
  },
  // Any other Next.js config options can go here
};

export default nextConfig;
