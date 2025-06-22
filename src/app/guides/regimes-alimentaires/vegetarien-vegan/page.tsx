import Link from 'next/link';
import { Leaf, CheckCircle, XCircle, Info, AlertTriangle, Star, ArrowRight } from 'lucide-react';

export default function VegetarienVeganPage() {
  const vegetarianChains = [
    {
      name: 'CoCo Ichibanya',
      category: 'Curry',
      veganOptions: true,
      vegetarianOptions: true,
      rating: 'Excellent',
      highlights: ['Curry végétarien spécifique', 'Options végan clairement marquées', 'Personnalisation facile'],
      warningsFr: 'Vérifier que le curry ne contient pas de bouillon de bœuf',
      warningsJp: 'ビーフブイヨンが入っていないか確認'
    },
    {
      name: 'Marugame Seimen',
      category: 'Udon',
      veganOptions: false,
      vegetarianOptions: true,
      rating: 'Bon',
      highlights: ['Udon nature possible', 'Légumes tempura', 'Tofu disponible'],
      warningsFr: 'Le dashi contient du poisson - demander udon sans dashi',
      warningsJp: 'だしに魚が入っています - だし抜きうどんをお願いします'
    },
    {
      name: 'Saizeriya',
      category: 'Italien',
      veganOptions: false,
      vegetarianOptions: true,
      rating: 'Excellent',
      highlights: ['Menu végétarien étendu', 'Salades variées', 'Pizzas sans viande'],
      warningsFr: 'Vérifier les sauces et fromages',
      warningsJp: 'ソースとチーズを確認してください'
    },
    {
      name: 'Mos Burger',
      category: 'Burgers',
      veganOptions: false,
      vegetarianOptions: true,
      rating: 'Bon',
      highlights: ['Burger végétarien au menu', 'Options de personnalisation', 'Ingrédients frais'],
      warningsFr: 'Le pain peut contenir du lait - à vérifier',
      warningsJp: 'パンに牛乳が含まれている可能性があります'
    },
    {
      name: 'Tenya',
      category: 'Tempura',
      veganOptions: false,
      vegetarianOptions: true,
      rating: 'Moyen',
      highlights: ['Tempura de légumes uniquement', 'Riz blanc disponible'],
      warningsFr: 'Huile de friture partagée avec poisson/viande',
      warningsJp: '魚・肉と同じ油で揚げています'
    }
  ];

  const keyPhrases = [
    {
      french: 'Je suis végétarien(ne)',
      japanese: '私はベジタリアンです',
      romaji: 'Watashi wa bejitarian desu'
    },
    {
      french: 'Je suis végan(e)',
      japanese: '私はヴィーガンです', 
      romaji: 'Watashi wa biigan desu'
    },
    {
      french: 'Pas de viande, s\'il vous plaît',
      japanese: 'お肉は入れないでください',
      romaji: 'Oniku wa irenaide kudasai'
    },
    {
      french: 'Pas de poisson, s\'il vous plaît',
      japanese: 'お魚は入れないでください',
      romaji: 'Osakana wa irenaide kudasai'
    },
    {
      french: 'Y a-t-il du dashi (bouillon de poisson) ?',
      japanese: 'だしは入っていますか？',
      romaji: 'Dashi wa haitte imasu ka?'
    },
    {
      french: 'Sans produits d\'origine animale',
      japanese: '動物性の食品は使わないでください',
      romaji: 'Doubutsusei no shokuhin wa tsukawanaide kudasai'
    }
  ];

  const commonIngredients = [
    {
      name: 'Dashi',
      nameJp: 'だし',
      description: 'Bouillon de base japonais',
      typically: 'Fait avec du poisson (katsuobushi)',
      veganStatus: 'Non végan',
      alternatives: 'Dashi de kombu (algue) disponible dans certains restaurants'
    },
    {
      name: 'Miso',
      nameJp: '味噌',
      description: 'Pâte de soja fermentée',
      typically: 'Généralement végan',
      veganStatus: 'Souvent végan',
      alternatives: 'Vérifier qu\'il ne contient pas de dashi de poisson'
    },
    {
      name: 'Sauce soja',
      nameJp: '醤油',
      description: 'Sauce de base japonaise',
      typically: 'Généralement végan',
      veganStatus: 'Végan',
      alternatives: 'Sûr dans la plupart des cas'
    },
    {
      name: 'Mayonnaise',
      nameJp: 'マヨネーズ',
      description: 'Très populaire au Japon',
      typically: 'Contient des œufs',
      veganStatus: 'Non végan',
      alternatives: 'Éviter ou demander sans mayonnaise'
    }
  ];

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Bon': return 'bg-yellow-100 text-yellow-800';
      case 'Moyen': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides/regimes-alimentaires" className="text-gray-500 hover:text-red-600">Régimes Alimentaires</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Végétarien & Végan</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guide Végétarien & Végan
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Naviguer dans les restaurants japonais avec un régime végétarien ou végan. 
              Options vérifiées, phrases utiles et conseils pratiques.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              ベジタリアン・ヴィーガンガイド
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Overview */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Défis spécifiques au Japon
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dashi omniprésent</h3>
                    <p className="text-gray-600 text-sm">
                      Le bouillon de poisson (dashi) est la base de nombreux plats japonais, 
                      même ceux qui semblent végétariens.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ingrédients cachés</h3>
                    <p className="text-gray-600 text-sm">
                      Sauces, marinades et assaisonnements peuvent contenir 
                      des produits d'origine animale non évidents.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Communication</h3>
                    <p className="text-gray-600 text-sm">
                      Le concept de végétarisme/véganisme est moins familier 
                      au Japon, nécessitant des explications claires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bonnes nouvelles
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Croissance des options</h3>
                    <p className="text-gray-600 text-sm">
                      De plus en plus de chaînes proposent des options 
                      végétariennes et véganes clairement marquées.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cuisine adaptable</h3>
                    <p className="text-gray-600 text-sm">
                      Beaucoup de plats peuvent être modifiés pour 
                      exclure les ingrédients d'origine animale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personnel compréhensif</h3>
                    <p className="text-gray-600 text-sm">
                      La plupart des chaînes sont prêtes à accommoder 
                      les demandes spéciales avec les bonnes phrases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Chains */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Chaînes Recommandées pour Végétariens & Végans
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vegetarianChains.map((chain, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{chain.name}</h3>
                  <p className="text-gray-500">{chain.category}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRatingColor(chain.rating)}`}>
                    {chain.rating}
                  </span>
                  <div className="flex space-x-2">
                    {chain.vegetarianOptions && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        Végétarien
                      </span>
                    )}
                    {chain.veganOptions && (
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">
                        Végan
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Points forts :</h4>
                <ul className="space-y-1">
                  {chain.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                <div className="flex items-start space-x-2">
                  <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800 font-medium mb-1">
                      {chain.warningsFr}
                    </p>
                    <p className="text-sm text-yellow-700 japanese-text">
                      {chain.warningsJp}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Link
                  href={`/chaines/${chain.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Voir les détails complets
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Phrases */}
      <div className="bg-green-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Phrases Essentielles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPhrases.map((phrase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-green-200">
                <div className="space-y-3">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{phrase.french}</div>
                  </div>
                  <div>
                    <div className="text-lg japanese-text text-gray-800">{phrase.japanese}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 italic">{phrase.romaji}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Info className="w-5 h-5 text-green-600 mr-2" />
              Conseil : Carte d'explication
            </h3>
            <p className="text-gray-700 mb-4">
              Préparez une carte en japonais expliquant votre régime alimentaire. Voici un exemple :
            </p>
            <div className="bg-gray-50 border rounded p-4 japanese-text">
              <p className="font-semibold mb-2">私は菜食主義者です。</p>
              <p>肉、魚、だし（魚から作ったスープ）は食べられません。</p>
              <p>野菜、米、豆腐は大丈夫です。</p>
              <p className="mt-2 text-sm text-gray-600">
                (Watashi wa saishoku-shugisha desu. Niku, sakana, dashi wa taberaremasen. 
                Yasai, kome, tōfu wa daijōbu desu.)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Ingredients Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Guide des Ingrédients Courants
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commonIngredients.map((ingredient, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{ingredient.name}</h3>
                  <p className="text-gray-500 japanese-text">{ingredient.nameJp}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  ingredient.veganStatus === 'Végan' ? 'bg-green-100 text-green-800' :
                  ingredient.veganStatus === 'Souvent végan' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {ingredient.veganStatus}
                </span>
              </div>
              
              <p className="text-gray-700 mb-3">{ingredient.description}</p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Généralement :</strong> {ingredient.typically}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Alternative :</strong> {ingredient.alternatives}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à explorer ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilisez ces informations pour découvrir la cuisine japonaise en toute confiance. 
              Chaque chaîne a ses spécificités - consultez nos guides détaillés.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/chaines"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
            >
              Voir toutes les chaînes
            </Link>
            <Link
              href="/guides/regimes-alimentaires/sans-porc-halal"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors text-center"
            >
              Guide Sans Porc & Halal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
