/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Production-friendly defaults
  reactStrictMode: true,
  swcMinify: true,
  // If you use the experimental React compiler, keep this; otherwise remove it.
  reactCompiler: true,
  // Configure external image domains used by the site (placeholder images, etc.)
  images: {
    domains: ["via.placeholder.com"]
  },
  output: "export",
};

export default nextConfig;
