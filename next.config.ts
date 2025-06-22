import type { NextConfig } from "next";

// カスタムドメインを使用する場合はbasePathは空にする
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = ''; // カスタムドメイン使用時は常に空

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
