import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Monorepo-style root has another lockfile; keep Turbopack rooted in `web/`. */
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
