import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, ChefHat, DollarSign } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miyamoto Munashi 宮本むなし | Teishoku Osaka | Japonchaines',
  description: 'Teishoku Osaka ultra-économique. Repas complets généreux, prix défiant concurrence.',
  keywords: [
    'miyamoto munashi', '宮本むなし', 'teishoku', 'repas équilibrés',
    'prix abordables', 'cuisine japonaise', 'restaurant traditionnel',
    'menu japonais', 'repas complets', 'style teishoku'
  ],
  openGraph: {
    title: 'Miyamoto Munashi : Le Teishoku d\'Osaka Ultra-Économique | Japonchaines',
    description: 'Découvrez Miyamoto Munashi, la chaîne de teishoku d\'Osaka. Des repas complets et généreux à des prix défiant toute concurrence.',
    type: 'article',
    url: '/chaines/miyamoto-munashi',
  },
  alternates: {
    canonical: '/chaines/miyamoto-munashi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MiyamotoMunashiPage() {
  const menuItems = [
    {
      category: "Teishoku Signature",
      items: [
        { name: "Katsu Teishoku", nameJp: "カツ定食", price: "¥490", description: "Côtelette panée, riz, soupe miso, pickles" },
        { name: "Ginger Pork Teishoku", nameJp: "生姜焼き定食", price: "¥450", description: "Porc au gingembre, portion généreuse" },
        { name: "Fried Chicken Teishoku", nameJp: "唐揚げ定食", price: "¥480", description: "Poulet frit croustillant, sauce tartare" },
        { name: "Grilled Fish Teishoku", nameJp: "焼き魚定食", price: "¥520", description: "Poisson grillé du jour, très économique" }
      ]
    },
    {
      category: "Rice Bowls",
      items: [
        { name: "Katsu Don", nameJp: "カツ丼", price: "¥390", description: "Bol de riz avec côtelette et œuf" },
        { name: "Oyako Don", nameJp: "親子丼", price: "¥380", description: "Poulet et œuf sur riz" },
        { name: "Pork Bowl", nameJp: "豚丼", price: "¥420", description: "Porc sauté sur riz" }
      ]
    },
    {
      category: "Curry & Others",
      items: [
        { name: "Katsu Curry", nameJp: "カツカレー", price: "¥480", description: "Curry japonais avec côtelette" },
        { name: "Hamburg Steak", nameJp: "ハンバーグ", price: "¥460", description: "Steak haché à la japonaise" },
        { name: "Udon Set", nameJp: "うどんセット", price: "¥450", description: "Nouilles udon avec petit bol de riz" }
      ]
    }
  ];
  const orderingSteps = [
    {
      step: "1",
      title: "Distributeur de tickets",
      description: "Achetez votre ticket au distributeur automatique à l'entrée",
      tip: "Les photos sur les boutons facilitent la sélection"
    },
    {
      step: "2",
      title: "Trouvez une place",
      description: "Asseyez-vous au comptoir ou aux tables communes",
      tip: "Ambiance décontractée, idéal pour manger seul"
    },
    {
      step: "3",
      title: "Remettez le ticket",
      description: "Donnez votre ticket au personnel en cuisine",
      tip: "Service très rapide, 3-5 minutes d'attente"
    },
    {
      step: "4",
      title: "Dégustez",
      description: "Savourez votre teishoku généreux à petit prix",
      tip: "Riz en libre-service dans certains restaurants"
    }
  ];

  return (
    <>      <ChainViewTracker 
        chainName="miyamoto-munashi" 
        chainCategory="teishoku"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400">→</span>
              <Link href="/type-plat/teishoku" className="text-gray-500 hover:text-red-600">Teishoku</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-900">Miyamoto Munashi</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Teishoku Économique
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-4">
                  Miyamoto Munashi
                </h1>
                <div className="text-2xl mb-6 japanese-text opacity-90">
                  宮本むなし
                </div>
                <p className="text-xl leading-relaxed mb-8">
                  La chaîne de teishoku la plus économique du Japon, née à Osaka en 1989. 
                  Réputée pour ses portions XXL à prix imbattables.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span>¥400-800</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Principalement Kansai</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Service très rapide</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Points Clés</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-3 text-yellow-300" />
                      Prix les plus bas du marché
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-yellow-300" />
                      Portions généreuses
                    </li>
                    <li className="flex items-center">
                      <Utensils className="w-5 h-5 mr-3 text-yellow-300" />
                      Teishoku authentiques
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-yellow-300" />
                      Service express
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">L'Histoire de Miyamoto Munashi</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Fondée en 1989 à Osaka, Miyamoto Munashi révolutionne le concept de teishoku économique. 
                Le nom "むなし" (munashi) signifie "vide" ou "futile", une référence ironique à l'idée 
                que même avec un budget serré, on peut se rassasier dignement.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                La philosophie de la chaîne repose sur trois piliers : <strong>volume maximal</strong>, 
                <strong>prix minimal</strong>, et <strong>qualité constante</strong>. Cette approche 
                a séduit les travailleurs, étudiants et familles d'Osaka avant de s'étendre dans tout le Kansai.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Concept Unique</h3>
                <p className="text-orange-700">
                  Miyamoto Munashi défie les codes en proposant des teishoku complets à moins de 500¥, 
                  une prouesse dans un marché où la qualité rime souvent avec prix élevé.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Menu Signature</h2>
              <p className="text-xl text-gray-600">Des teishoku généreux à prix imbattables</p>
            </div>
            
            <div className="grid gap-8">
              {menuItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <span className="japanese-text text-sm text-gray-600">{item.nameJp}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <span className="text-lg font-bold text-orange-600">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ordering Guide */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment Commander</h2>
            <p className="text-xl text-gray-600">Simple et efficace, le système de tickets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderingSteps.map((step, index) => (
              <div key={index} className="text-center">                <div className="relative">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < orderingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="bg-orange-50 text-orange-700 text-sm p-3 rounded-lg">
                  💡 {step.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Tips */}
        <div className="bg-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conseils Culturels</h2>
              <p className="text-xl text-gray-600">Profiter pleinement de l'expérience Miyamoto Munashi</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">🥢</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ambiance Populaire</h3>
                <p className="text-gray-600">
                  Atmosphère décontractée et bruyante, typique des restaurants populaires d'Osaka. 
                  Parfait pour une expérience authentique du Kansai.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Budget Étudiant</h3>
                <p className="text-gray-600">
                  Très populaire chez les étudiants et travailleurs pour sa proposition 
                  "maximum de nourriture, minimum d'argent".
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">🍚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Riz en Libre-Service</h3>
                <p className="text-gray-600">
                  Dans certains restaurants, le riz est servi en libre-service. 
                  N'hésitez pas à vous resservir si vous avez encore faim !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt pour un teishoku économique ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez pourquoi Miyamoto Munashi est devenu l'emblème du teishoku abordable 
              et des portions généreuses à Osaka.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/type-plat/teishoku"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explorer le Teishoku
              </Link>
              <Link
                href="/chaines"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Autres Chaînes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
