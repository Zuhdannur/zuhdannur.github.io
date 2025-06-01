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
  ssetPrefix: isProd ? '/portofolio/' : '',
  basePath: isProd ? '/portofolio' : '',
  output: 'export'
}

export default nextConfig