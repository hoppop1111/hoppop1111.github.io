import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only: emit plain HTML/CSS/JS into `out/`.
  output: "export",
  // The default image loader needs a server; serve images as-is.
  images: { unoptimized: true },
  // cacheComponents / partialPrefetching (scaffold defaults) need a server:
  // "PPR cannot be enabled in export mode", so they stay off.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
