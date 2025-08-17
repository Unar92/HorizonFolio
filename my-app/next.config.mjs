/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '',
    images: {
      domains: ['images.unsplash.com'],
      unoptimized: true,
    },
    assetPrefix: '',
  };
  
  export default nextConfig;