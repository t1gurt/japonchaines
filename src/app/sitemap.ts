import { MetadataRoute } from 'next';

// 静的エクスポート用の設定
export const dynamic = 'force-static';

// サイトの基本URL（GitHub Pagesの場合）
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';

// 静的ページのリスト
const staticPages = [
  '',
  '/chaines',
  '/type-plat',
  '/guides',
  '/guides/comment-commander',
  '/guides/comment-choisir-restaurant-japonais',
  '/guides/culture-etiquette',
  '/guides/culture-etiquette/bonnes-manieres',
  '/guides/culture-etiquette/glossaire',
  '/guides/regimes-alimentaires',
  '/guides/regimes-alimentaires/allergies',
  '/guides/regimes-alimentaires/sans-porc-halal',
  '/guides/regimes-alimentaires/vegetarien-vegan',
  '/guides/restaurant-sushi',
  '/guides/articles',
  '/guides/articles/comparatif-gyudon',
  '/guides/articles/histoire-ramen',
  '/guides/articles/secrets-dashi',
  '/a-propos',
  '/contact',
];

// レストランチェーンのリスト
const restaurantChains = [
  'bamiyan',
  'coco-ichibanya',
  'freshness-burger',
  'fuji-soba',
  'go-go-curry',
  'gusto',
  'gyoza-no-ohsho',
  'hama-sushi',
  'hanamaru-udon',
  'ichiran',
  'ippudo',
  'jonathans',
  'kura-sushi',
  'lotteria',
  'marugame-seimen',
  'matsuya',
  'mos-burger',
  'ringer-hut',
  'saizeriya',
  'shirokiya',
  'sukiya',
  'sukiya-curry',
  'sushiro',
  'tenkaippin',
  'tenya',
  'torikizoku',
  'tsunahachi',
  'watami',
  'yoshinoya',
];

// 料理タイプのリスト
const foodTypes = [
  'burgers',
  'cuisine-chinoise',
  'curry',
  'family-restaurants',
  'gyudon',
  'izakaya',
  'kaiten-zushi',
  'ramen',
  'tempura',
  'udon-soba',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

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
