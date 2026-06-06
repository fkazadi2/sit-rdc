import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Requis pour cPanel car il n'y a pas de serveur Node.js pour optimiser les images
  },
};

export default nextConfig;
