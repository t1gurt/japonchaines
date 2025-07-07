import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// 静的エクスポート用の設定
export const dynamic = 'force-static';

// サイトの基本URL
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';

// ファイルの最終更新日時を取得するヘルパー関数
const getFileLastModified = (filePath: string): Date => {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return new Date(); // ファイルが見つからない場合は現在日時
  }
};

// 指定されたディレクトリ内のページを動的に取得する汎用関数
const getDynamicPages = (dir: string): MetadataRoute.Sitemap => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const pages: MetadataRoute.Sitemap = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // page.tsxが存在するか確認
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        const urlPath = `/${path.relative(path.join(process.cwd(), 'src', 'app'), fullPath).replace(/\\/g, '/')}`;
        const url = `${baseUrl}${urlPath}`;
        pages.push({
          url,
          lastModified: getFileLastModified(path.join(fullPath, 'page.tsx')),
          changeFrequency: 'weekly',
          priority: 0.7,
          alternates: { languages: { fr: url } },
        });
      }
      // サブディレクトリも再帰的に探索
      pages.push(...getDynamicPages(fullPath));
    }
  }
  return pages;
};

// 静的ページをスキャンしてサイトマップエントリを生成する関数
const getStaticPages = (): MetadataRoute.Sitemap => {
  const appDir = path.join(process.cwd(), 'src', 'app');
  const entries = fs.readdirSync(appDir, { withFileTypes: true });
  const pages: MetadataRoute.Sitemap = [];

  // ルートページ
  if (fs.existsSync(path.join(appDir, 'page.tsx'))) {
    const url = `${baseUrl}/`;
    pages.push({
      url,
      lastModified: getFileLastModified(path.join(appDir, 'page.tsx')),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: { fr: url } },
    });
  }

  for (const entry of entries) {
    const fullPath = path.join(appDir, entry.name);
    // ディレクトリであり、動的ルートではない、かつ予約済みフォルダでもない
    if (entry.isDirectory() && !entry.name.startsWith('(') && !['chaines', 'type-plat', 'guides', 'api'].includes(entry.name)) {
      if (fs.existsSync(path.join(fullPath, 'page.tsx'))) {
        const urlPath = `/${entry.name}`;
        const url = `${baseUrl}${urlPath}`;
        pages.push({
          url,
          lastModified: getFileLastModified(path.join(fullPath, 'page.tsx')),
          changeFrequency: 'weekly',
          priority: 0.8,
          alternates: { languages: { fr: url } },
        });
      }
    }
  }
  return pages;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticSitemapEntries = getStaticPages();
  
  const chainesDir = path.join(process.cwd(), 'src', 'app', 'chaines');
  const restaurantSitemapEntries = getDynamicPages(chainesDir);

  const typePlatDir = path.join(process.cwd(), 'src', 'app', 'type-plat');
  const foodTypeSitemapEntries = getDynamicPages(typePlatDir);

  const guidesDir = path.join(process.cwd(), 'src', 'app', 'guides');
  const guideSitemapEntries = getDynamicPages(guidesDir);

  return [
    ...staticSitemapEntries,
    ...restaurantSitemapEntries,
    ...foodTypeSitemapEntries,
    ...guideSitemapEntries,
  ].filter((value, index, self) => self.findIndex(v => v.url === value.url) === index); // 重複URLを削除
}
