import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "covers.openlibrary.org", // Add this line for book covers
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
