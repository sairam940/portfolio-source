/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the site as static files for GitHub Pages
  output: "export",

  // If you are hosting at a repo path (https://user.github.io/repo), set
  // NEXT_PUBLIC_BASE_PATH=/repo when building (used as assetPrefix)
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",

  images: {
    // Disable Next.js image optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },


};

module.exports = nextConfig;
