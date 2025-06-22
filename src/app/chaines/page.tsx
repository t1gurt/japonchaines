'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, Star, TrendingUp, Clock, MapPin } from 'lucide-react';

export default function ChainesPage() {
  const chains = [
    {
      slug: 'bamiyan',
      name: 'Bamiyan',
      nameJp: 'バーミヤン',
      category: 'Cuisine Chinoise',
      description: 'Chaîne de restaurant chinois familial avec des plats généreux à prix abordables.',
      popularity: 'Populaire',
      avgPrice: '800-1500¥'
    },
    {
      slug: 'coco-ichibanya',
      name: 'CoCo Ichibanya',
      nameJp: 'CoCo壱番屋',
      category: 'Curry',
      description: 'La chaîne de curry japonais la plus populaire avec de nombreuses options de personnalisation.',
      popularity: 'Très populaire',
      avgPrice: '600-1200¥'
    },
    {
      slug: 'freshness-burger',
      name: 'Freshness Burger',
      nameJp: 'フレッシュネスバーガー',
      category: 'Hamburgers',
      description: 'Chaîne de burgers premium avec des ingrédients frais et des options healthy.',
      popularity: 'Modéré',
      avgPrice: '800-1500¥'
    },
    {
      slug: 'go-go-curry',
      name: 'Go Go Curry',
      nameJp: 'ゴーゴーカレー',
      category: 'Curry',
      description: 'Curry de style Kanazawa servi rapidement avec une sauce épaisse caractéristique.',
      popularity: 'Populaire',
      avgPrice: '500-900¥'
    },
    {
      slug: 'gusto',
      name: 'Gusto',
      nameJp: 'ガスト',
      category: 'Restaurant Familial',
      description: 'Restaurant familial 24h/24 avec un menu varié de plats occidentaux et japonais.',
      popularity: 'Très populaire',
      avgPrice: '600-1200¥'
    },
    {
      slug: 'gyoza-no-ohsho',
      name: 'Gyoza no Ohsho',
      nameJp: '餃子の王将',
      category: 'Cuisine Chinoise',
      description: 'Spécialiste des gyoza et plats chinois à prix populaires.',
      popularity: 'Très populaire',
      avgPrice: '400-800¥'
    },
    {
      slug: 'hama-sushi',
      name: 'Hama Sushi',
      nameJp: 'はま寿司',
      category: 'Sushi',
      description: 'Sushi sur tapis roulant à 110¥ la pièce avec commande par tablette.',
      popularity: 'Très populaire',
      avgPrice: '100-120¥/pièce'
    },
    {
      slug: 'ichiran',
      name: 'Ichiran',
      nameJp: '一蘭',
      category: 'Ramen',
      description: 'Ramen tonkotsu dans des boxes individuels pour une expérience unique.',
      popularity: 'Très populaire',
      avgPrice: '800-1200¥'
    },
    {
      slug: 'ippudo',
      name: 'Ippudo',
      nameJp: '一風堂',
      category: 'Ramen',
      description: 'Ramen tonkotsu haut de gamme originaire de Hakata (Fukuoka).',
      popularity: 'Populaire',
      avgPrice: '900-1500¥'
    },
    {
      slug: 'jonathans',
      name: 'Jonathan\'s',
      nameJp: 'ジョナサン',
      category: 'Restaurant Familial',
      description: 'Restaurant familial avec menu varié, ouvert tard et adapté aux familles.',
      popularity: 'Populaire',
      avgPrice: '700-1300¥'
    },
    {
      slug: 'kura-sushi',
      name: 'Kura Sushi',
      nameJp: 'くら寿司',
      category: 'Sushi',
      description: 'Sushi sur tapis roulant avec système de jeu et récompenses pour enfants.',
      popularity: 'Très populaire',
      avgPrice: '100-120¥/pièce'
    },
    {
      slug: 'lotteria',
      name: 'Lotteria',
      nameJp: 'ロッテリア',
      category: 'Fast Food',
      description: 'Chaîne de fast food japonaise avec des burgers au style local.',
      popularity: 'Modéré',
      avgPrice: '500-1000¥'
    },
    {
      slug: 'marugame-seimen',
      name: 'Marugame Seimen',
      nameJp: '丸亀製麺',
      category: 'Udon',
      description: 'Udon fraîchement préparés devant vous avec de nombreux toppings.',
      popularity: 'Très populaire',
      avgPrice: '300-600¥'
    },
    {
      slug: 'matsuya',
      name: 'Matsuya',
      nameJp: '松屋',
      category: 'Gyudon',
      description: 'Gyudon et curry bon marché, ouvert 24h/24 dans de nombreux endroits.',
      popularity: 'Très populaire',
      avgPrice: '350-700¥'
    },
    {
      slug: 'mos-burger',
      name: 'Mos Burger',
      nameJp: 'モスバーガー',
      category: 'Hamburgers',
      description: 'Burgers japonais avec des ingrédients locaux et des saveurs uniques.',
      popularity: 'Populaire',
      avgPrice: '600-1200¥'
    },
    {
      slug: 'ringer-hut',
      name: 'Ringer Hut',
      nameJp: 'リンガーハット',
      category: 'Champon/Ramen',
      description: 'Spécialiste du champon de Nagasaki avec des légumes frais.',
      popularity: 'Populaire',
      avgPrice: '600-1000¥'
    },
    {
      slug: 'saizeriya',
      name: 'Saizeriya',
      nameJp: 'サイゼリヤ',
      category: 'Italien',
      description: 'Restaurant italien très abordable populaire auprès des étudiants.',
      popularity: 'Très populaire',
      avgPrice: '200-800¥'
    },
    {
      slug: 'shirokiya',
      name: 'Shirokiya',
      nameJp: '白木屋',
      category: 'Izakaya',
      description: 'Chaîne d\'izakaya avec formules à volonté et ambiance décontractée.',
      popularity: 'Populaire',
      avgPrice: '2000-3500¥'
    },
    {
      slug: 'sukiya',
      name: 'Sukiya',
      nameJp: 'すき家',
      category: 'Gyudon',
      description: 'La plus grande chaîne de gyudon du Japon, ouverte 24h/24.',
      popularity: 'Très populaire',
      avgPrice: '300-600¥'
    },
    {
      slug: 'sukiya-curry',
      name: 'Sukiya Curry',
      nameJp: 'すき家のカレー',
      category: 'Curry',
      description: 'Version curry de Sukiya avec des currys rapides et abordables.',
      popularity: 'Modéré',
      avgPrice: '400-700¥'
    },
    {
      slug: 'sushiro',
      name: 'Sushiro',
      nameJp: 'スシロー',
      category: 'Sushi',
      description: 'Leader du sushi sur tapis roulant avec application mobile pour éviter l\'attente.',
      popularity: 'Très populaire',
      avgPrice: '100-120¥/pièce'
    },
    {
      slug: 'tenkaippin',
      name: 'Tenkaippin',
      nameJp: '天下一品',
      category: 'Ramen',
      description: 'Ramen au bouillon épais et crémeux, style unique très populaire.',
      popularity: 'Populaire',
      avgPrice: '700-1100¥'
    },
    {
      slug: 'tenya',
      name: 'Tenya',
      nameJp: 'てんや',
      category: 'Tempura',
      description: 'Spécialiste du tendon (tempura sur riz) rapide et abordable.',
      popularity: 'Populaire',
      avgPrice: '500-900¥'
    },
    {
      slug: 'torikizoku',
      name: 'Torikizoku',
      nameJp: '鳥貴族',
      category: 'Yakitori',
      description: 'Chaîne de yakitori avec prix unique de 327¥ par brochette.',
      popularity: 'Très populaire',
      avgPrice: '327¥/brochette'
    },
    {
      slug: 'tsunahachi',
      name: 'Tsunahachi',
      nameJp: 'つな八',
      category: 'Tempura',
      description: 'Tempura traditionnelle de qualité supérieure depuis 1923.',
      popularity: 'Modéré',
      avgPrice: '1500-3000¥'
    },
    {
      slug: 'watami',
      name: 'Watami',
      nameJp: 'ワタミ',
      category: 'Izakaya',
      description: 'Grande chaîne d\'izakaya avec formules à volonté et ambiance conviviale.',
      popularity: 'Populaire',
      avgPrice: '2500-4000¥'
    },
    {
      slug: 'yoshinoya',
      name: 'Yoshinoya',
      nameJp: '吉野家',
      category: 'Gyudon',
      description: 'Pionnier du gyudon depuis 1899, ouvert 24h/24 dans tout le Japon.',
      popularity: 'Très populaire',
      avgPrice: '300-600¥'
    }  ];

  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    'Tous',
    'Gyudon',
    'Ramen',
    'Sushi',
    'Curry',
    'Hamburgers',
    'Restaurant Familial',
    'Cuisine Chinoise',
    'Fast Food',
    'Udon',
    'Italien',
    'Izakaya',
    'Champon/Ramen',
    'Tempura',    'Yakitori'
  ];

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
  }, [searchTerm, selectedCategory, chains]);

  const getPopularityBadge = (popularity: string) => {
    switch (popularity) {
      case 'Très populaire':
        return 'bg-red-100 text-red-800';
      case 'Populaire':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPopularityIcon = (popularity: string) => {
    switch (popularity) {
      case 'Très populaire':
        return <Star className="w-4 h-4" />;
      case 'Populaire':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Chaînes de Restaurants Japonais
            </h1>            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Découvrez les {filteredChains.length} chaînes de restaurants japonais 
              {selectedCategory !== 'Tous' ? ` spécialisées en ${selectedCategory}` : ''} 
              {searchTerm ? ` correspondant à "${searchTerm}"` : ''} avec leurs spécialités, 
              prix et conseils pour commander en toute confiance.
            </p>
              {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher une chaîne..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>      {/* Chains Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChains.map((chain) => (
            <Link
              key={chain.slug}
              href={`/chaines/${chain.slug}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                {/* Header with popularity badge */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {chain.name}
                    </h3>
                    <p className="text-sm text-gray-500 japanese-text">
                      {chain.nameJp}
                    </p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getPopularityBadge(chain.popularity)}`}>
                    {getPopularityIcon(chain.popularity)}
                    <span>{chain.popularity}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    {chain.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {chain.description}
                </p>

                {/* Price info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Prix moyen</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {chain.avgPrice}
                  </span>                </div>
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="text-gray-600 mb-6">
              Consultez nos guides pratiques pour mieux comprendre les différents types de restaurants.
            </p>
          </div>
          
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
        </div>
      </div>
    </div>
  );
}
