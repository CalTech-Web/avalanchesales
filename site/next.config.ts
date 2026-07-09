import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
