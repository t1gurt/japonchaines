import type { NextConfig } from "next";

// カスタムドメインを使用する場合はbasePathは空にする
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = ''; // カスタムドメイン使用時は常に空

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  assetPrefix: basePath,
  basePath: basePath,
  // 開発時は通常の.nextディレクトリ、本番ビルド時のみdocsディレクトリを使用
  distDir: process.env.NODE_ENV === 'production' ? 'docs' : '.next',
  // SEO最適化のための設定
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  // ESLintとTypeScriptチェックを有効化（警告のみ）
  eslint: {
    ignoreDuringBuilds: true, // Désactiver ESLint pendant le build
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Static Generation最適化
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
