'use client';

import { useState, useMemo } from 'react';
import { Search, Star, TrendingUp, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ResourceGrid from '@/components/ResourceGrid';
import ResourceCard from '@/components/ResourceCard';
import ContentSection from '@/components/ContentSection';
import { chains, chainCategories } from '@/data/chains';

export default function ChainesPage() {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Filtered chains based on search and category
  const filteredChains = useMemo(() => {
    return chains.filter(chain => {
      const matchesSearch = searchTerm === '' ||
        chain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.nameJp.includes(searchTerm) ||
        chain.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'Tous' || chain.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getPopularityBadge = (popularity: string) => {
    switch (popularity) {
      case 'Très populaire':
        return <span className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"><Star className="w-3 h-3 mr-1" />{popularity}</span>;
      case 'Populaire':
        return <span className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800"><TrendingUp className="w-3 h-3 mr-1" />{popularity}</span>;
      default:
        return <span className="flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"><Clock className="w-3 h-3 mr-1" />{popularity}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Chaînes de Restaurants Japonais"
        description={`Découvrez les ${filteredChains.length} chaînes de restaurants japonais ${selectedCategory !== 'Tous' ? ` spécialisées en ${selectedCategory}` : ''} ${searchTerm ? ` correspondant à "${searchTerm}"` : ''} avec leurs spécialités, prix et conseils pour commander en toute confiance.`}
      />

      {/* Search and Filters Section */}
      <div className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher une chaîne..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {chainCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === selectedCategory
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ContentSection background="gray">
        {filteredChains.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucune chaîne trouvée
            </h3>
            <p className="text-gray-600 mb-4">
              Essayez de modifier votre recherche ou vos filtres
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Tous');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <ResourceGrid columns={3}>
            {filteredChains.map((chain) => (
              <ResourceCard
                key={chain.slug}
                title={chain.name}
                subtitle={chain.nameJp}
                description={chain.description}
                href={`/chaines/${chain.slug}`}
                image={chain.bgImage}
                price={chain.avgPrice}
                tags={[chain.category]}
                badges={[getPopularityBadge(chain.popularity)]}
                color="red"
              />
            ))}
          </ResourceGrid>
        )}
      </ContentSection>

      {/* Stats Section */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{chains.length}</div>
              <div className="text-gray-600">Chaînes référencées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{filteredChains.length}</div>
              <div className="text-gray-600">Affichées actuellement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">En français</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Accessible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <ContentSection title="Besoin d'aide pour choisir ?" subtitle="Consultez nos guides pratiques pour mieux comprendre les différents types de restaurants.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/type-plat"
            className="text-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <div className="text-2xl mb-3">🍜</div>
            <h3 className="font-semibold text-gray-900 mb-2">Par Type de Plat</h3>
            <p className="text-sm text-gray-600">
              Trouvez les chaînes par spécialité culinaire
            </p>
          </Link>

          <Link
            href="/guides/comment-commander"
            className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <div className="text-2xl mb-3">📱</div>
            <h3 className="font-semibold text-gray-900 mb-2">Comment Commander</h3>
            <p className="text-sm text-gray-600">
              Guide complet pour passer commande
            </p>
          </Link>

          <Link
            href="/guides"
            className="text-center p-6 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <div className="text-2xl mb-3">📚</div>
            <h3 className="font-semibold text-gray-900 mb-2">Tous les Guides</h3>
            <p className="text-sm text-gray-600">
              Conseils pratiques et astuces
            </p>
          </Link>
        </div>
      </ContentSection>
    </div>
  );
}
