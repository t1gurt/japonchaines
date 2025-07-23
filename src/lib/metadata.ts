import { Metadata } from 'next';
import { SITE_CONFIG, getCanonicalUrl, getOpenGraphUrl } from './config';

/**
 * ページメタデータの設定インターface
 */
export interface PageMetadataConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  alternateUrls?: {
    href: string;
    hreflang: string;
  }[];
}

/**
 * SEO最適化されたメタデータを生成
 * @param config - ページ設定
 * @returns Next.js Metadata オブジェクト
 */
export function generatePageMetadata(config: PageMetadataConfig): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    ogImage,
    ogType = 'website',
    noIndex = false,
    alternateUrls = []
  } = config;

  // Canonical URLの生成
  const canonicalUrl = getCanonicalUrl(path);
  const openGraphUrl = getOpenGraphUrl(path);

  // メタタイトルの処理（サイト名との重複チェック）
  const fullTitle = title.includes(SITE_CONFIG.siteName) 
    ? title 
    : `${title} | ${SITE_CONFIG.siteName}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    
    // Canonical URL（最重要）
    alternates: {
      canonical: canonicalUrl,
      languages: alternateUrls.length > 0 ? Object.fromEntries(
        alternateUrls.map(url => [url.hreflang, url.href])
      ) : undefined
    },

    // Keywords（指定がある場合のみ）
    keywords: keywords || undefined,

    // Open Graph設定
    openGraph: {
      title: fullTitle,
      description,
      url: openGraphUrl,
      siteName: SITE_CONFIG.siteName,
      type: ogType,
      locale: SITE_CONFIG.locale,
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        }
      ] : undefined,
    },

    // Twitter Card設定
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
    },

    // Robots設定
    robots: noIndex ? {
      index: false,
      follow: false
    } : SITE_CONFIG.robots,

    // その他のSEO設定
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    
    // 構造化データ（JSON-LD）は別コンポーネントで処理
    other: {
      'format-detection': 'telephone=no'
    }
  };

  return metadata;
}

/**
 * ホームページ用の特別なメタデータ生成
 * @returns ホームページMetadata
 */
export function generateHomeMetadata(): Metadata {
  return generatePageMetadata({
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    path: '/',
    keywords: 'restaurant japonais, chaînes japonaises, voyage Japon, guide restaurant, menu japonais, prix Japon',
    ogType: 'website'
  });
}

/**
 * カテゴリページ用メタデータ生成
 * @param categoryName - カテゴリ名
 * @param categoryPath - カテゴリパス
 * @param description - 説明
 * @returns カテゴリMetadata
 */
export function generateCategoryMetadata(
  categoryName: string, 
  categoryPath: string, 
  description: string
): Metadata {
  return generatePageMetadata({
    title: `${categoryName} - Guide Complet des Restaurants Japonais`,
    description,
    path: categoryPath,
    keywords: `${categoryName.toLowerCase()}, restaurant japonais, chaînes japonaises, guide ${categoryName.toLowerCase()}`,
    ogType: 'website'
  });
}

/**
 * チェーン店ページ用メタデータ生成
 * @param chainName - チェーン名
 * @param chainPath - チェーンパス
 * @param description - 説明
 * @param category - カテゴリ
 * @returns チェーンMetadata
 */
export function generateChainMetadata(
  chainName: string,
  chainPath: string,
  description: string,
  category?: string
): Metadata {
  const categoryKeyword = category ? `, ${category.toLowerCase()}` : '';
  
  return generatePageMetadata({
    title: `${chainName} - Guide Complet et Avis`,
    description,
    path: chainPath,
    keywords: `${chainName.toLowerCase()}, restaurant japonais${categoryKeyword}, menu ${chainName.toLowerCase()}, prix ${chainName.toLowerCase()}`,
    ogType: 'article'
  });
}
