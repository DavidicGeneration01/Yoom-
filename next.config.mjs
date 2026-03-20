/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@stream-io/video-react-sdk',
    '@stream-io/video-filters-web',
    '@stream-io/node-sdk',
  ],
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;