'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-600">🍜 Chain Japanese Restaurants</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/type-plat" 
              className={`transition-colors ${
                isActivePath('/type-plat') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Par Type de Plat
            </Link>
            <Link 
              href="/chaines" 
              className={`transition-colors ${
                isActivePath('/chaines') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Par Chaîne A-Z
            </Link>
            <Link 
              href="/guides" 
              className={`transition-colors ${
                isActivePath('/guides') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Guides Pratiques
            </Link>
            <Link 
              href="/a-propos" 
              className={`transition-colors ${
                isActivePath('/a-propos') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              À Propos
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActivePath('/contact') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
