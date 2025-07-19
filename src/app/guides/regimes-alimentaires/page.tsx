import Link from 'next/link';
import { Leaf, Heart, AlertTriangle, CheckCircle, XCircle, Info, Users, Globe } from 'lucide-react';
import { Metadata } from 'next';
import GuideViewTracker from '../../../components/GuideViewTracker';
import { getTotalChainCount } from '../../../lib/chain-count';

export const metadata: Metadata = {
  title: 'Régimes Japon : Végétarien Halal | Japonchaines',
  description: 'Guides complets végétariens, végans, sans porc (halal), gestion allergies.',
  keywords: 'végétarien Japon, végan Japon, halal Japon, sans porc Japon, allergies Japon, restrictions alimentaires',
  openGraph: {
    title: 'Guide des Régimes Alimentaires au Japon',
    description: 'Manger au Japon avec des restrictions alimentaires. Guides complets pour végétariens, végans, sans porc (halal) et gestion des allergies.',
    type: 'article',
  },
};

export default function RegimesAlimentairesPage() {
  const totalChains = getTotalChainCount();
  
  const dietaryGuides = [
    {
      slug: 'vegetarien-vegan',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Végétarien & Végan',
      titleJp: 'ベジタリアン・ヴィーガン',
      description: 'Guide complet pour les options végétariennes et véganes dans les chaînes japonaises.',
      challenges: [
        'Dashi (bouillon) de poisson dans de nombreux plats',
        'Sauces contenant des ingrédients animaux',
        'Options limitées mais en croissance'
      ],
      solutions: '25+ restaurants avec options végan identifiées',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800'
    },
    {
      slug: 'sans-porc-halal',
      icon: <Heart className="w-8 h-8" />,
      title: 'Sans Porc & Halal',
      titleJp: '豚肉不使用・ハラル',
      description: 'Options sans porc et informations halal pour les restaurants japonais.',
      challenges: [
        'Porc très présent dans la cuisine japonaise',
        'Certification halal limitée',
        'Contamination croisée possible'
      ],
      solutions: '15+ chaînes avec options sans porc sûres',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800'
    },
    {
      slug: 'allergies',
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Guide des Allergies',
      titleJp: 'アレルギー対応ガイド',
      description: 'Informations détaillées sur les allergènes dans les chaînes de restaurants.',
      challenges: [
        '7 allergènes majeurs obligatoires au Japon',
        'Contamination croisée fréquente',
        'Communication en japonais nécessaire'
      ],
      solutions: 'Phrases clés et cartes d\'allergie fournies',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800'
    }
  ];

  const japaneseAllergens = [
    { jp: '卵', fr: 'Œufs', en: 'Eggs' },
    { jp: '乳', fr: 'Lait/Produits laitiers', en: 'Milk' },
    { jp: '小麦', fr: 'Blé', en: 'Wheat' },
    { jp: 'そば', fr: 'Sarrasin', en: 'Buckwheat' },
    { jp: '落花生', fr: 'Cacahuètes', en: 'Peanuts' },
    { jp: 'えび', fr: 'Crevettes', en: 'Shrimp' },
    { jp: 'かに', fr: 'Crabe', en: 'Crab' }
  ];  return (
    <>
      <GuideViewTracker guideName="regimes-alimentaires" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Régimes Alimentaires</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guide des Régimes Alimentaires
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Naviguer dans les restaurants japonais avec des restrictions alimentaires. 
              Guides détaillés, phrases utiles et conseils pratiques pour manger en toute sérénité.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Pour tous les régimes</span>
              </div>              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>{totalChains} chaînes analysées</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Options vérifiées</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Guide Matters */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi ce guide est essentiel
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Défis uniques au Japon</h3>
              <p className="text-gray-600 text-sm">
                Le dashi (bouillon de poisson), la sauce soja et les ingrédients animaux 
                sont omniprésents dans la cuisine japonaise.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Barrière linguistique</h3>
              <p className="text-gray-600 text-sm">
                Communiquer ses restrictions alimentaires en japonais peut être complexe 
                sans les bonnes phrases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Solutions pratiques</h3>
              <p className="text-gray-600 text-sm">
                Nous identifions les options sûres et fournissons les outils 
                pour commander en confiance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Guides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dietaryGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/regimes-alimentaires/${guide.slug}`}
              className={`${guide.bgColor} ${guide.borderColor} border-2 rounded-lg p-8 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}
            >
              <div className={`${guide.textColor} mb-4`}>
                {guide.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {guide.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 japanese-text">
                {guide.titleJp}
              </p>
              
              <p className="text-gray-700 mb-6">
                {guide.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Défis principaux :</h4>
                  <ul className="space-y-1">
                    {guide.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${guide.bgColor} rounded p-3`}>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Solution :</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{guide.solutions}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Japanese Allergens Reference */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Les 7 Allergènes Majeurs au Japon
            </h2>
            <p className="text-gray-600">
              Allergènes obligatoirement mentionnés sur les menus japonais (depuis 2015)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {japaneseAllergens.map((allergen, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold japanese-text text-gray-900 mb-2">
                  {allergen.jp}
                </div>
                <div className="font-semibold text-gray-800 mb-1">
                  {allergen.fr}
                </div>
                <div className="text-sm text-gray-500">
                  {allergen.en}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important à savoir :</h3>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• D'autres allergènes peuvent être présents mais ne sont pas obligatoirement mentionnés</li>
                  <li>• La contamination croisée est fréquente dans les cuisines japonaises</li>
                  <li>• Toujours confirmer avec le personnel pour les allergies graves</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <Link
                  href="/guides/regimes-alimentaires/vegetarien-vegan"
                  className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <span className="font-medium text-green-800">Options végétariennes →</span>
                  <Leaf className="w-5 h-5 text-green-600" />
                </Link>
                
                <Link
                  href="/guides/regimes-alimentaires/sans-porc-halal"
                  className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="font-medium text-blue-800">Sans porc & Halal →</span>
                  <Heart className="w-5 h-5 text-blue-600" />
                </Link>
                
                <Link
                  href="/guides/regimes-alimentaires/allergies"
                  className="flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <span className="font-medium text-orange-800">Guide allergies →</span>
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ressources utiles
              </h3>
              <div className="space-y-3">
                <Link
                  href="/guides/comment-commander"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">Comment commander</span>
                  <span className="text-gray-500">→</span>
                </Link>
                  <Link
                  href="/guides/culture-etiquette"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">Culture & étiquette</span>
                  <span className="text-gray-500">→</span>
                </Link>
                
                <Link
                  href="/guides/articles"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">Articles de Fond</span>
                  <span className="text-gray-500">→</span>
                </Link>
                
                <Link
                  href="/chaines"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">Toutes les chaînes</span>
                  <span className="text-gray-500">→</span>
                </Link>
              </div>
            </div>          </div>
        </div>
      </div>
      </div>
    </>
  );
}
