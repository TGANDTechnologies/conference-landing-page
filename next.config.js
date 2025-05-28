/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  // Font optimization
  optimizeFonts: true,
  // Compression
  compress: true,
  // Power optimizations
  poweredByHeader: false,
  // Modern browser targeting
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Target modern browsers to reduce polyfills
  target: 'server',
}

module.exports = nextConfig 