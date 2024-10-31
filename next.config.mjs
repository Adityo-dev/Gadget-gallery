import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgur.com", "i.imgur.com"],
  },
};

export default nextConfig;
