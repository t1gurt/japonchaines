import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import GuideViewTracker from '../../../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Révolution du Burger Japonais : Du Fast-Food à la Gastronomie | Japonchaines',
  description: 'Découvrez comment le Japon a transformé le hamburger en un art culinaire, avec des innovations comme le Rice Burger et le Teriyaki Burger.',
  keywords: 'révolution burger japonais, rice burger, teriyaki burger, gastronomie japonaise, innovation culinaire, fast food japonais',
  openGraph: {
    title: 'La Révolution du Burger Japonais : Du Fast-Food à la Gastronomie',
    description: 'Découvrez comment le Japon a transformé le hamburger en un art culinaire, avec des innovations comme le Rice Burger et le Teriyaki Burger.',
    type: 'article',
    locale: 'fr_FR',
    siteName: 'Japonchaines - Guide des Restaurants Japonais'
  },
  alternates: {
    canonical: '/guides/articles/revolution-burger-japonais'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RevolutionBurgerJaponaisPage() {
  const article = {
    title: 'La Révolution Burger Japonaise : Du Fast-Food à la Gastronomie',
    subtitle: 'Comment le Japon a Réinventé l\'Art du Hamburger',
    publishDate: '2025-01-15',
    readTime: '15 min',
    author: 'Équipe Japanese Chains',
    category: 'Histoire Culinaire',
    tags: ['Innovation', 'Gastronomie', 'Histoire', 'Culture']
  };

  const timeline = [
    {
      year: '1945-1960',
      title: 'Les Bases Militaires : Premier Contact',
      description: 'L\'introduction du hamburger via les bases militaires américaines, particulièrement à Sasebo (Nagasaki).',
      impact: 'Découverte culturelle limitée aux zones militaires'
    },
    {
      year: '1970',
      title: 'Dom Dom Hamburger : Le Pionnier Japonais',
      description: 'Première chaîne japonaise de hamburgers, anticipant l\'arrivée de McDonald\'s.',
      impact: 'Adaptation précoce aux goûts japonais'
    },
    {
      year: '1971',
      title: 'McDonald\'s Débarque à Ginza',
      description: 'Ouverture du premier McDonald\'s japonais, déclenchant la "Hamburger Rush".',
      impact: 'Révolution du fast-food au Japon'
    },
    {
      year: '1972',
      title: 'MOS Burger : La Réponse Japonaise',
      description: 'Création de MOS Burger avec la philosophie "Mountain Ocean Sun" et l\'innovation japonaise.',
      impact: 'Naissance du burger premium japonais'
    },
    {
      year: '1973',
      title: 'L\'Invention du Teriyaki Burger',
      description: 'MOS Burger développe le Teriyaki Burger avec un secret : la sauce miso.',
      impact: 'Première "japonisation" majeure du burger'
    },
    {
      year: '1987',
      title: 'Rice Burger : Innovation Révolutionnaire',
      description: 'MOS Burger lance le Rice Burger, remplaçant le pain par du riz pressé.',
      impact: 'Création d\'une catégorie entièrement nouvelle'
    },
    {
      year: '2000-2020',
      title: 'L\'Ère du Gourmet Burger',
      description: 'Émergence des burgers à la Wagyu A5 et des chaînes gastronomiques.',
      impact: 'Élévation du burger au rang d\'art culinaire'
    }
  ];

  const innovations = [
    {
      title: 'Rice Burger (ライスバーガー)',
      description: 'Pain remplacé par du riz pressé grillé',
      year: '1987',
      creator: 'MOS Burger',
      impact: 'Révolution pour les intolérants au gluten et authentification japonaise',
      technical: 'Technique de pressage du riz inspirée des onigiri traditionnels'
    },
    {
      title: 'Teriyaki Burger (照り焼きバーガー)',
      description: 'Sauce teriyaki avec secret : miso pour l\'umami',
      year: '1973',
      creator: 'MOS Burger',
      impact: 'Premier burger "japonisé", adopté ensuite par McDonald\'s',
      technical: 'Équilibre sucré-salé typiquement japonais, complexité umami'
    },
    {
      title: 'Ebi Burger (エビバーガー)',
      description: 'Crevettes tempura, première innovation mondiale',
      year: '1977',
      creator: 'Lotteria',
      impact: 'McDonald\'s a mis 28 ans à proposer une version similaire',
      technical: 'Adaptation de la tempura traditionnelle au format burger'
    },
    {
      title: 'Wagyu Burger (和牛バーガー)',
      description: 'Bœuf de Wagyu A5, pinnacle gastronomique',
      year: '2000s',
      creator: 'Diverses chaînes premium',
      impact: 'Transformation du fast-food en fine dining',
      technical: 'Cuisson respectant la qualité exceptionnelle de la viande'
    }
  ];

  const culturalAspects = [
    {
      title: 'Made-to-Order (作りたて)',
      description: 'Contrairement au fast-food classique, préparation à la commande',
      philosophy: 'Respect du client et qualité fraîcheur'
    },
    {
      title: 'Omotenashi (おもてなし)',
      description: 'Service à la japonaise : plateau en porcelaine, serviettes chaudes',
      philosophy: 'Hospitalité sincère et attention aux détails'
    },
    {
      title: 'Kaizen (改善)',
      description: 'Amélioration continue des recettes et processus',
      philosophy: 'Perfectionnement constant de l\'expérience'
    },
    {
      title: 'Shokunin (職人)',
      description: 'Esprit artisanal appliqué au burger, même en chaîne',
      philosophy: 'Maîtrise technique et fierté professionnelle'
    }
  ];

  return (
    <>
      <GuideViewTracker guideName="revolution-burger-japonais" />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides/articles" className="text-gray-500 hover:text-red-600">Articles</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-900">Révolution Burger</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4">🍔</span>
                <span className="text-6xl mr-4">🗾</span>
                <span className="text-6xl">⚡</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                {article.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {article.author}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dans l'histoire de la gastronomie mondiale, peu de transformations ont été aussi spectaculaires 
              que l'évolution du hamburger au Japon. Ce qui a commencé comme une simple importation culturelle 
              via les bases militaires américaines est devenu une révolution culinaire qui redéfinit les 
              standards mondiaux du fast-food.
            </p>
            
            <p className="text-gray-700 mb-6">
              Le Japon n'a pas seulement adopté le hamburger : il l'a complètement réinventé, le transformant 
              d'un repas rapide standardisé en une expression de l'excellence culinaire japonaise. Cette 
              métamorphose illustre parfaitement la capacité unique du Japon à absorber, adapter et transcender 
              les influences étrangères.
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Chronologie de la Révolution</h2>
            <div className="space-y-8">
              {timeline.map((period, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                        {period.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{period.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{period.description}</p>
                    <div className="bg-white p-3 rounded border-l-4 border-orange-300">
                      <span className="text-sm font-semibold text-orange-700">Impact : </span>
                      <span className="text-sm text-gray-600">{period.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Innovations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Les Innovations Révolutionnaires</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {innovations.map((innovation, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{innovation.title}</h3>
                      <p className="text-sm text-gray-600">{innovation.creator} • {innovation.year}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{innovation.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-300">
                      <span className="text-sm font-semibold text-blue-700">Technique : </span>
                      <span className="text-sm text-gray-600">{innovation.technical}</span>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-300">
                      <span className="text-sm font-semibold text-green-700">Impact : </span>
                      <span className="text-sm text-gray-600">{innovation.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">La Philosophie Culturelle Japonaise</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                La transformation du hamburger au Japon ne s'est pas limitée aux ingrédients. Elle a 
                intégré les valeurs fondamentales de la culture japonaise, créant une expérience qui 
                transcende la simple restauration rapide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {culturalAspects.map((aspect, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{aspect.title}</h3>
                  <p className="text-gray-700 mb-4">{aspect.description}</p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <span className="text-sm font-semibold text-indigo-700">Philosophie : </span>
                    <span className="text-sm text-gray-600">{aspect.philosophy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison France-Japan */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Burger Japonais vs Burger Français</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">🇯🇵 Approche Japonaise</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Cuisson non personnalisée :</strong> Le chef détermine la cuisson optimale par confiance en son expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Ingrédients harmonieux :</strong> Recherche de l'équilibre parfait des saveurs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Innovation technique :</strong> Rice Burger, techniques de tempura adaptées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Service raffiné :</strong> Plateau en porcelaine, présentation soignée</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">🇫🇷 Approche Française</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Cuisson personnalisée :</strong> Choix de la cuisson selon les préférences individuelles</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Fromages d'exception :</strong> Focus sur la qualité et la variété des fromages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Terroir local :</strong> Produits régionaux et appellations contrôlées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Art de vivre :</strong> Convivialité et plaisir de la table</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Era */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">L'Ère Moderne : Vers la Gastronomie</h2>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                Aujourd'hui, le burger japonais a atteint le sommet de son évolution. Les restaurants 
                haut de gamme proposent des créations à base de bœuf de Wagyu A5, transformant ce qui 
                était autrefois un simple fast-food en expérience gastronomique comparable aux 
                meilleurs restaurants.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">🥩 Wagyu Premium</h4>
                  <p className="text-sm text-gray-600">
                    Burgers utilisant le bœuf de Wagyu A5, le plus prestigieux au monde, 
                    avec une cuisson maîtrisée au gramme près.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">🔥 Techniques Avancées</h4>
                  <p className="text-sm text-gray-600">
                    Cuisson sous vide, grillades au charbon de binchotan, 
                    fermentation contrôlée des condiments.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">🍽️ Présentation Artistique</h4>
                  <p className="text-sm text-gray-600">
                    Service à l'assiette, accompagnements sophistiqués, 
                    attention portée à chaque détail visuel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">L'Héritage d'une Révolution</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                La révolution du burger japonais illustre parfaitement la capacité d'innovation du Japon. 
                En prenant un concept américain simple, les Japonais ont créé quelque chose de totalement 
                nouveau qui influence aujourd'hui les tendances mondiales du fast-food et de la restauration 
                casual.
              </p>
              
              <p className="text-gray-700 mb-6">
                Cette transformation démontre que l'excellence culinaire n'est pas une question de tradition 
                ancestrale, mais d'approche philosophique. Le respect des ingrédients, l'attention aux détails, 
                la recherche constante de l'amélioration et l'hospitalité sincère peuvent transformer n'importe 
                quel plat en expérience mémorable.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-700 font-medium">
                  <strong>Pour les voyageurs français :</strong> Découvrir les burgers japonais, c'est 
                  comprendre comment une culture peut s'approprier et sublimer une influence extérieure 
                  tout en conservant son identité. Une leçon de créativité culinaire qui mérite d'être 
                  savourée autant qu'étudiée.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/guides/articles"
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux articles
              </Link>
              
              <div className="flex space-x-4">
                <Link
                  href="/type-plat/burgers"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Découvrir les burgers japonais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
