// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "static.wikia.nocookie.net",
      "covers.openlibrary.org", // Add this line
    ],
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
