/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
