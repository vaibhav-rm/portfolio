/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 tells Next.js to produce a static /out folder
  images: { unoptimized: true }, // 👈 needed for static export
};

module.exports = nextConfig;
