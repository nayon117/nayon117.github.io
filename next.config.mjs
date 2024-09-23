/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true,
},
eslint:{
    ignoreDuringBuilds: true,
},
transpilePackages: ['swiper'],
output: 'export',
basePath: '/nayon117.github.io',
trailingSlash: true,

};

export default nextConfig;
