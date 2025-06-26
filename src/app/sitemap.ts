import { MetadataRoute } from 'next';
import { restaurantChains, foodTypes, staticPages } from '../data/site-data';

// 静的エクスポート用の設定
export const dynamic = 'force-static';

// サイトの基本URL（GitHub Pagesの場合）
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date('2025-06-26');

  // 静的ページのサイトマップエントリ
  const staticSitemapEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  // レストランチェーンページのサイトマップエントリ
  const restaurantSitemapEntries = restaurantChains.map((chain) => ({
    url: `${baseUrl}/chaines/${chain}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 料理タイプページのサイトマップエントリ
  const foodTypeSitemapEntries = foodTypes.map((type) => ({
    url: `${baseUrl}/type-plat/${type}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticSitemapEntries,
    ...restaurantSitemapEntries,
    ...foodTypeSitemapEntries,
  ];
}
