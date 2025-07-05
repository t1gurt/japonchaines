import Link from 'next/link';
import { BookOpen, Clock, TrendingUp, Star, ArrowRight, Calendar, Users, Award } from 'lucide-react';
import GuideViewTracker from '../../../components/GuideViewTracker';

export default function ArticlesPage() {
  // 難易度順に記事を並べる
  const articles = [
    {
      title: 'Gotochiburger : Le Voyage Gastronomique Régional',
      slug: 'gotochiburger-voyage',
      description: 'Explorez les burgers régionaux uniques du Japon : du Sasebo historique aux créations marines de Suruga Bay',
      excerpt: 'Partez à la découverte des gotōchi burgers, ces spécialités régionales qui transforment chaque préfecture en destination culinaire unique. Du burger-ramen de Kitakata aux créations d\'Awaji.',
      readTime: '12 min',
      category: 'Culture Régionale',
      difficulty: 'Débutant',
      topics: ['Gotōchi', 'Régions', 'Spécialités', 'Voyage culinaire'],
      publishDate: '2025-01-20',
      featured: true,
      icon: '🗾',
      color: 'bg-green-500'
    },
    {
      title: 'La Révolution Burger Japonaise : Du Fast-Food à la Gastronomie',
      slug: 'revolution-burger-japonais',
      description: 'Comment le Japon a transformé le hamburger américain en art culinaire avec le Rice Burger, Teriyaki et Wagyu',
      excerpt: 'Découvrez comment le Japon a réinventé le hamburger en y intégrant sa philosophie culinaire : du Rice Burger révolutionnaire aux créations Wagyu gastronomiques, une histoire d\'innovation respectueuse.',
      readTime: '15 min',
      category: 'Histoire Culinaire',
      difficulty: 'Intermédiaire',
      topics: ['Innovation', 'Gastronomie', 'Histoire', 'Culture'],
      publishDate: '2025-01-15',
      featured: true,
      icon: '🍔',
      color: 'bg-red-500'
    },
    {
      title: 'L\'Histoire du Ramen au Japon',
      slug: 'histoire-ramen',
      description: 'De l\'importation chinoise à l\'invention japonaise : comment le ramen est devenu l\'âme de la street food nippone',
      excerpt: 'Découvrez comment un plat d\'origine chinoise s\'est transformé en symbole culinaire japonais, des premières échoppes de Yokohama aux chaînes modernes qui conquièrent le monde.',
      readTime: '8 min',
      category: 'Histoire',
      difficulty: 'Intermédiaire',
      topics: ['Culture', 'Histoire', 'Évolution culinaire'],
      publishDate: '2024-12-15',
      featured: true,
      icon: '🍜',
      color: 'bg-orange-500'
    },
    {
      title: 'Kaiten-zushi : La Révolution Technologique de la Restauration',
      slug: 'kaiten-zushi-technologie-revolution',
      description: 'Robots Pepper, IA prédictive, livraison express : comment les sushi tournants révolutionnent la gastronomie mondiale',
      excerpt: 'Découvrez comment les kaiten-zushi japonais sont devenus des laboratoires d\'innovation technologique, transformant l\'art culinaire en expérience du futur avec robots, IA et automatisation.',
      readTime: '16 min',
      category: 'Innovation & Technologie',
      difficulty: 'Intermédiaire',
      topics: ['Robotique', 'Intelligence Artificielle', 'Automatisation', 'Futur', 'Hama Sushi'],
      publishDate: '2025-01-30',
      featured: true,
      icon: '🤖',
      color: 'bg-cyan-500'
    },
    {
      title: 'Yakiniku : L\'Expérience Gastronomique et Conviviale du Japon',
      slug: 'yakiniku-culture-et-gastronomie',
      description: 'De ses origines coréennes à sa transformation en art culinaire japonais : histoire, philosophie et techniques du yakiniku',
      excerpt: 'Découvrez l\'univers du yakiniku japonais : de ses racines historiques à sa philosophie de partage, en passant par les techniques de grillage parfaites et l\'art des sauces tare. Une immersion complète dans cette tradition culinaire qui transcende la simple gastronomie.',
      readTime: '15 min',
      category: 'Culture & Gastronomie',
      difficulty: 'Intermédiaire',
      topics: ['Yakiniku', 'Culture', 'Convivialité', 'Wagyu', 'Techniques de grillage', 'Histoire'],
      publishDate: '2025-07-05',
      featured: true,
      icon: '🔥',
      color: 'bg-red-500'
    },
    {
      title: 'Kikan Gentei & Moe-dan : L\'Art Japonais du Burger',
      slug: 'culture-consommation-burger',
      description: 'Période limitée et esthétique de la coupe : comment le Japon a révolutionné la culture de consommation',
      excerpt: 'Analysez les phénomènes kikan gentei (期間限定) et moe-dan (萌え断) qui transforment chaque burger en expérience culturelle et virale sur les réseaux sociaux.',
      readTime: '14 min',
      category: 'Culture & Société',
      difficulty: 'Avancé',
      topics: ['Kikan Gentei', 'Moe-dan', 'Marketing', 'Esthétique', 'Social Media'],
      publishDate: '2025-01-25',
      featured: true,
      icon: '📸',
      color: 'bg-pink-500'
    },
    {
      title: 'Les Secrets du Dashi',
      slug: 'secrets-dashi',
      description: 'Le bouillon fondamental de la cuisine japonaise : ingrédients, techniques et philosophie du goût umami',
      excerpt: 'Plongez dans l\'art millénaire du dashi, ce bouillon transparent qui révolutionne le goût. Kombu, katsuobushi et innovations modernes des chaînes.',
      readTime: '10 min',
      category: 'Technique',
      difficulty: 'Avancé',
      topics: ['Umami', 'Technique culinaire', 'Ingrédients traditionnels'],
      publishDate: '2024-12-10',
      featured: true,
      icon: '🥣',
      color: 'bg-blue-500'
    },
    {
      title: 'Comparatif des Chaînes Gyudon',
      slug: 'comparatif-gyudon',
      description: 'Yoshinoya vs Sukiya vs Matsuya : analyse détaillée des trois géants du bol de bœuf japonais',
      excerpt: 'Battle royale des titans du gyudon ! Histoire, stratégies, recettes secrètes et positionnement de marché des trois chaînes qui dominent le Japon.',
      readTime: '12 min',
      category: 'Analyse',
      difficulty: 'Expert',
      topics: ['Business', 'Comparaison', 'Stratégie marketing'],
      publishDate: '2024-12-05',
      featured: true,
      icon: '🥩',
      color: 'bg-purple-500'
    }
  ];

  const categories = [
    {
      name: 'Culture & Gastronomie',
      description: 'Art culinaire et traditions gastronomiques japonaises',
      count: 1,
      color: 'bg-red-100 text-red-800'
    },
    {
      name: 'Innovation & Technologie',
      description: 'Révolutions technologiques dans la restauration japonaise',
      count: 1,
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      name: 'Histoire Culinaire',
      description: 'Les révolutions et évolutions de la cuisine japonaise',
      count: 2,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Culture Régionale',
      description: 'Spécialités et traditions locales japonaises',
      count: 1,
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'Culture & Société',
      description: 'Phénomènes sociaux et tendances contemporaines',
      count: 1,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      name: 'Technique',
      description: 'Secrets culinaires et méthodes traditionnelles',
      count: 1,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Analyse',
      description: 'Études approfondies des chaînes et tendances',
      count: 1,
      color: 'bg-purple-100 text-purple-800'
    }
  ];
  const difficultyLevels: Record<string, { color: string; icon: string }> = {
    'Débutant': { color: 'bg-green-100 text-green-800', icon: '🌱' },
    'Intermédiaire': { color: 'bg-yellow-100 text-yellow-800', icon: '🌿' },
    'Avancé': { color: 'bg-orange-100 text-orange-800', icon: '🌳' },
    'Expert': { color: 'bg-red-100 text-red-800', icon: '🎋' }
  };

  const stats = [
    { label: 'Articles disponibles', value: '7', icon: BookOpen },
    { label: 'Temps de lecture total', value: '87 min', icon: Clock },
    { label: 'Sujets couverts', value: '22', icon: Star },
    { label: 'Technologies couvertes', value: '100%', icon: Award }
  ];

  const comingSoon = [
    {
      title: 'L\'Art du Kaizen chez CoCo Ichibanya',
      description: 'Comment l\'amélioration continue façonne l\'expérience client',
      eta: 'Janvier 2025'
    },
    {
      title: 'La Révolution Sushi : de l\'Artisanat à l\'Industriel',
      description: 'L\'évolution technologique des chaînes de kaiten-zushi',
      eta: 'Février 2025'
    },
    {
      title: 'Psychologie du Design : Pourquoi Ichiran Isole ses Clients',
      description: 'Analyse comportementale de l\'architecture de restauration',
      eta: 'Mars 2025'
    }
  ];  return (
    <>
      <GuideViewTracker guideName="articles" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Articles de Fond</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Articles de Fond
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Explorations approfondies de la culture culinaire japonaise. Histoire, techniques, 
              analyses business et secrets des plus grandes chaînes du pays du Soleil-Levant.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              専門記事コレクション
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Articles Disponibles
        </h2>
        
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`${article.color} p-3 rounded-lg`}>
                      <span className="text-2xl">{article.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyLevels[article.difficulty].color}`}>
                          {difficultyLevels[article.difficulty].icon} {article.difficulty}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 font-medium">{article.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topic, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/guides/articles/${article.slug}`}
                    className="inline-flex items-center bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              {article.featured && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-t px-8 py-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-yellow-800">Article vedette</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Catégories d'Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.count} article{category.count > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Prochainement
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comingSoon.map((item, index) => (
            <div key={index} className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center mb-4">
                <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {item.eta}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ne manquez aucun nouvel article
            </h2>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              Soyez les premiers informés de nos analyses exclusives et découvertes 
              sur la culture culinaire japonaise.
            </p>            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/a-propos"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                À propos du projet
              </Link>
              <Link
                href="/guides"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Tous les guides
              </Link>
            </div>          </div>
        </div>
      </div>
      </div>
    </>
  );
}
