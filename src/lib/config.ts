/**
 * サイト設定 - Canonical URLと基本情報の管理
 */

// 本番環境のドメイン設定
export const SITE_CONFIG = {
  // 本番ドメイン（実際のデプロイURLに変更してください）
  baseUrl: 'https://japonchaines.com',
  
  // 基本サイト情報
  siteName: 'Japonchaines - Guide des Restaurants Japonais',
  defaultTitle: 'Restaurants Japonais 2025 | Japonchaines',
  defaultDescription: '45+ chaînes japonaises détaillées. Menus, prix, guide complet pour votre voyage au Japon !',
  
  // メタデータ設定
  locale: 'fr_FR',
  language: 'fr',
  
  // ソーシャルメディア設定
  twitterHandle: '@japonchaines',
  
  // SEO設定
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
} as const;

/**
 * 完全なCanonical URLを生成
 * @param path - パス（先頭の/は自動で処理）
 * @returns 完全なCanonical URL
 */
export function getCanonicalUrl(path: string): string {
  // パスの正規化（先頭の/を確保）
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // trailing slashの処理（Next.jsの設定に合わせる）
  const finalPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '') + '/';
  
  return `${SITE_CONFIG.baseUrl}${finalPath}`;
}

/**
 * Open Graph用のURL生成
 * @param path - パス
 * @returns Open Graph URL
 */
export function getOpenGraphUrl(path: string): string {
  return getCanonicalUrl(path);
}
