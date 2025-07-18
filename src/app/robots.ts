import { MetadataRoute } from 'next';

// 静的エクスポート用の設定
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.japonchaines.net';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '*.json',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
