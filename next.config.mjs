/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
output: 'export',
assetPrefix: '/',
basePath: '/',
};

export default nextConfig;
