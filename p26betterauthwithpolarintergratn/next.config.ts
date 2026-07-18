import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com"
      },
      {
        hostname: "avatars.githubusercontent.com"
      }
    ]
  },
  allowedDevOrigins: ['mace-tycoon-refuse.ngrok-free.dev'],
};

export default nextConfig;
