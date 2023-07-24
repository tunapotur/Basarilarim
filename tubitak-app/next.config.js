/** @type {import('next').NextConfig} */

// ilk hali bu şekilde
// const nextConfig = {}

// TODO gerekli bir ayar mı bakılacak
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
};

module.exports = nextConfig;
