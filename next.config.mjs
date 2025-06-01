/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
console.log('is production ? ', isProd);
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
  ssetPrefix: isProd ? '/zuhdannur.github.io' : '',
  basePath: isProd ? '/zuhdannur.github.io' : '',
  output: 'export'
}

export default nextConfig