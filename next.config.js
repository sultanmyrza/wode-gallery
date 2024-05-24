/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

// NOTE: We can ignore typescript, eslint build and run them in separate github action to speed up builds.
// You can notice that once you TS codebase grows.
/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
