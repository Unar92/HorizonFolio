/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';

const nextConfig = {
    basePath: isStaging ? '/demo' : '',
    assetPrefix: isStaging ? '/demo' : '',
    images: {
      domains: ['images.unsplash.com'],
      unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
  };

  export default nextConfig;