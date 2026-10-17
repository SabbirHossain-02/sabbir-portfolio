import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js dev badge (the bottom-left "N") in development.
  devIndicators: false,
  images: {
    // Project screenshots hosted on our Cloudinary account.
    remotePatterns: [new URL("https://res.cloudinary.com/dlddbdmqy/image/upload/**")],
  },
};

export default nextConfig;
