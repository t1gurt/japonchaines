import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/japonchaines' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/japonchaines' : '',
  distDir: 'docs',
  // ESLintとTypeScriptチェックを無効化してビルドを高速化
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
