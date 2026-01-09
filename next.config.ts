import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for client deployment
  output: 'export',

  // Add trailing slashes to URLs for better compatibility with static hosting
  trailingSlash: true,

  // Disable image optimization for static export
  // (Next.js Image Optimization API requires a server)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
