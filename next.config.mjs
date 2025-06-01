/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/zuhdannur.github.io' : '',
  basePath: isProd ? '/zuhdannur.github.io' : '',
  output: 'export'
}

export default nextConfig