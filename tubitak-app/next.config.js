/** @type {import('next').NextConfig} */

// ilk hali bu şekilde
// const nextConfig = {}

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
};

module.exports = nextConfig;
