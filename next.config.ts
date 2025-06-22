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
  // ESLintとTypeScriptチェックを有効化（警告のみ）
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
