import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'localhost'], // 或你的後端網址
  },
  
  env: {
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  },
};

export default nextConfig;
