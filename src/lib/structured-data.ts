// 構造化データ（JSON-LD）生成のユーティリティ

interface WebsiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
  publisher: {
    '@type': string;
    name: string;
  };
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

interface RestaurantSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  servesCuisine: string;
  url: string;
  priceRange: string;
  hasMenu: string;
}

// ウェブサイト全体の構造化データ
export function generateWebsiteSchema(): WebsiteSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Chain Japanese Restaurants',
    description: 'Guide complet des chaînes de restaurants japonais en français',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chain Japanese Restaurants',
    },
  };
}

// パンくずリストの構造化データ
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`,
    })),
  };
}

// レストランページの構造化データ
export function generateRestaurantSchema(
  name: string,
  description: string,
  cuisine: string,
  slug: string
): RestaurantSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name,
    description,
    servesCuisine: cuisine,
    url: `${baseUrl}/chaines/${slug}`,
    priceRange: '$',
    hasMenu: `${baseUrl}/chaines/${slug}#menu`,
  };
}
