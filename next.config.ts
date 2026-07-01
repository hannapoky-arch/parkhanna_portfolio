import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};