import type { NextConfig } from "next";

// GitHub Pagesではrepo名がbasePathになる
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages ? '/japonchaines' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: basePath,
  basePath: basePath,
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
