import Link from 'next/link';
import StructuredData from './StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {  // 構造化データ用のデータを準備
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  const breadcrumbData = items.map(item => ({
    name: item.name,
    url: `${baseUrl}${item.href}`,
  }));
  
  const structuredData = generateBreadcrumbSchema(breadcrumbData);

  return (
    <>
      <StructuredData data={structuredData} />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}
      >
        <Link 
          href="/" 
          className="hover:text-gray-700 transition-colors"
        >
          Accueil
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center space-x-2">
            <span className="text-gray-300">/</span>
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="hover:text-gray-700 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

export default Breadcrumb;
