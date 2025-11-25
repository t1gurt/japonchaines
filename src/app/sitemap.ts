import { MetadataRoute } from 'next';
import { restaurantChains, foodTypes, staticPages } from '../data/site-data';
import { promises as fs } from 'fs';
import { join } from 'path';

// 静的エクスポート用の設定
export const dynamic = 'force-static';

// サイトの基本URL（カスタムドメインを使用）
const baseUrl = 'https://www.japonchaines.net';

// ファイルの更新日時を取得する関数
async function getFileModifiedDate(filePath: string): Promise<Date> {
  try {
    const stats = await fs.stat(filePath);
    return stats.mtime;
  } catch (error) {
    // ファイルが存在しない場合は現在の日時を返す
    return new Date();
  }
}

// ページパスからファイルパスを生成する関数
function getPageFilePath(page: string): string {
  const srcDir = join(process.cwd(), 'src', 'app');

  if (page === '') {
    return join(srcDir, 'page.tsx');
  }

  return join(srcDir, page.slice(1), 'page.tsx');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // 静的ページのサイトマップエントリ
  const staticSitemapEntries = await Promise.all(
    staticPages.map(async (page) => {
      const filePath = getPageFilePath(page);
      const lastModified = await getFileModifiedDate(filePath);

      const isRoot = page === '';
      const url = isRoot ? `${baseUrl}` : `${baseUrl}${page}/`;

      return {
        url,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: isRoot ? 1.0 : 0.8,
        alternates: {
          languages: {
            'fr-FR': url,
          },
        },
      };
    })
  );

  // レストランチェーンページのサイトマップエントリ
  const restaurantSitemapEntries = await Promise.all(
    restaurantChains.map(async (chain) => {
      const filePath = join(process.cwd(), 'src', 'app', 'chaines', chain, 'page.tsx');
      const lastModified = await getFileModifiedDate(filePath);
      const url = `${baseUrl}/chaines/${chain}/`;

      return {
        url,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            'fr-FR': url,
          },
        },
      };
    })
  );

  // 料理タイプページのサイトマップエントリ
  const foodTypeSitemapEntries = await Promise.all(
    foodTypes.map(async (type) => {
      const filePath = join(process.cwd(), 'src', 'app', 'type-plat', type, 'page.tsx');
      const lastModified = await getFileModifiedDate(filePath);
      const url = `${baseUrl}/type-plat/${type}/`;

      return {
        url,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: {
          languages: {
            'fr-FR': url,
          },
        },
      };
    })
  );

  return [
    ...staticSitemapEntries,
    ...restaurantSitemapEntries,
    ...foodTypeSitemapEntries,
  ];
}
