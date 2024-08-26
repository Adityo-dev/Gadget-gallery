/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["example.com"],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
