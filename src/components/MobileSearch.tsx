'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, Utensils } from 'lucide-react';
import { chains } from '../data/tutorial/chains';

interface SearchResult {
  type: 'chain' | 'category';
  id: string;
  name: string;
  category?: string;
  href: string;
}

const MobileSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Catégories de plats
  const categories = [
    { id: 'gyudon', name: 'Gyudon', href: '/type-plat/gyudon' },
    { id: 'ramen', name: 'Ramen', href: '/type-plat/ramen' },
    { id: 'sushi', name: 'Sushi', href: '/type-plat/kaiten-zushi' },
    { id: 'udon', name: 'Udon', href: '/type-plat/udon' },
    { id: 'tempura', name: 'Tempura', href: '/type-plat/tempura' },
    { id: 'yakiniku', name: 'Yakiniku', href: '/type-plat/yakiniku' },
    { id: 'teishoku', name: 'Teishoku', href: '/type-plat/teishoku' },
    { id: 'curry', name: 'Curry', href: '/type-plat/curry' },
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Recherche dans les chaînes
    chains.forEach(chain => {
      if (
        chain.name.toLowerCase().includes(lowercaseQuery) ||
        chain.japanese.toLowerCase().includes(lowercaseQuery) ||
        chain.category.toLowerCase().includes(lowercaseQuery)
      ) {
        searchResults.push({
          type: 'chain',
          id: chain.id,
          name: chain.name,
          category: chain.category,
          href: `/chaines/${chain.id}`
        });
      }
    });

    // Recherche dans les catégories
    categories.forEach(category => {
      if (category.name.toLowerCase().includes(lowercaseQuery)) {
        searchResults.push({
          type: 'category',
          id: category.id,
          name: category.name,
          href: category.href
        });
      }
    });

    // Limiter les résultats
    setResults(searchResults.slice(0, 8));
  }, [query]);

  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleResultClick = () => {
    closeSearch();
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={openSearch}
        className="md:hidden flex items-center gap-2 w-full mx-4 my-2 p-3 bg-gray-100 text-gray-600 rounded-lg border border-gray-200 text-left"
      >
        <Search className="w-5 h-5" />
        <span>Rechercher une chaîne ou un type de plat...</span>
      </button>

      {/* Search Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
              />
            </div>
            <button
              onClick={closeSearch}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto">
            {query.trim() && (
              <div className="p-4">
                {results.length > 0 ? (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">
                      Résultats ({results.length})
                    </h3>
                    {results.map((result) => (
                      <Link
                        key={`${result.type}-${result.id}`}
                        href={result.href}
                        onClick={handleResultClick}
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          {result.type === 'chain' ? (
                            <MapPin className="w-5 h-5 text-red-600" />
                          ) : (
                            <Utensils className="w-5 h-5 text-orange-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {result.name}
                          </p>
                          {result.category && (
                            <p className="text-sm text-gray-500 capitalize">
                              {result.category}
                            </p>
                          )}
                          <p className="text-xs text-gray-400">
                            {result.type === 'chain' ? 'Chaîne' : 'Catégorie'}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Aucun résultat trouvé</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Essayez avec un autre terme de recherche
                    </p>
                  </div>
                )}
              </div>
            )}

            {!query.trim() && (
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Catégories populaires
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      onClick={handleResultClick}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Utensils className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSearch;
