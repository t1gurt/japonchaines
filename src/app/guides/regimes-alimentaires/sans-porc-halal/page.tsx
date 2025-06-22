import Link from 'next/link';
import { Heart, CheckCircle, XCircle, Info, AlertTriangle, Star, ArrowRight, Shield } from 'lucide-react';

export default function SansPorcHalalPage() {
  const halalFriendlyChains = [
    {
      name: 'CoCo Ichibanya',
      category: 'Curry',
      halalCertified: false,
      porkFree: true,
      rating: 'Excellent',
      highlights: ['Curry de bœuf, poulet, légumes', 'Pas de porc au menu', 'Ingrédients clairement listés'],
      warnings: 'Cuisine partagée - contamination croisée possible',
      recommendedItems: ['Beef Curry', 'Chicken Curry', 'Vegetable Curry'],
      avoidItems: []
    },
    {
      name: 'Yoshinoya',
      category: 'Gyudon',
      halalCertified: false,
      porkFree: true,
      rating: 'Bon',
      highlights: ['Spécialisé dans le bœuf', 'Pas de porc', 'Menu simple et clair'],
      warnings: 'Sauce peut contenir de l\'alcool (mirin)',
      recommendedItems: ['Gyudon (bœuf)', 'Chicken Bowl'],
      avoidItems: ['Buta-don (porc)']
    },
    {
      name: 'Sukiya',
      category: 'Gyudon',
      halalCertified: false,
      porkFree: false,
      rating: 'Moyen',
      highlights: ['Options bœuf et poulet', 'Menu étendu'],
      warnings: 'Certains plats contiennent du porc',
      recommendedItems: ['Gyudon', 'Chicken Bowl'],
      avoidItems: ['Buta-don', 'Tonkatsu Bowl']
    },
    {
      name: 'Saizeriya',
      category: 'Italien',
      halalCertified: false,
      porkFree: false,
      rating: 'Bon',
      highlights: ['Menu varié', 'Options poisson et bœuf', 'Prix abordables'],
      warnings: 'Beaucoup de plats contiennent du porc - vérifier attentivement',
      recommendedItems: ['Margherita Pizza', 'Seafood Pasta', 'Chicken Dishes'],
      avoidItems: ['Prosciutto Pizza', 'Carbonara', 'Most pasta with meat']
    },
    {
      name: 'Tenya',
      category: 'Tempura',
      halalCertified: false,
      porkFree: true,
      rating: 'Bon',
      highlights: ['Principalement poisson et légumes', 'Tempura de crevettes'],
      warnings: 'Huile de friture partagée',
      recommendedItems: ['Ebi Tendon (crevettes)', 'Vegetable Tempura'],
      avoidItems: []
    }
  ];

  const keyPhrases = [
    {
      french: 'Je ne mange pas de porc',
      japanese: '豚肉は食べません',
      romaji: 'Butaniku wa tabemasen'
    },
    {
      french: 'Y a-t-il du porc dans ce plat ?',
      japanese: 'この料理に豚肉は入っていますか？',
      romaji: 'Kono ryōri ni butaniku wa haitte imasu ka?'
    },
    {
      french: 'Sans porc, s\'il vous plaît',
      japanese: '豚肉抜きでお願いします',
      romaji: 'Butaniku nuki de onegaishimasu'
    },
    {
      french: 'Je suis musulman(e)',
      japanese: '私はイスラム教徒です',
      romaji: 'Watashi wa Isuramu-kyōto desu'
    },
    {
      french: 'Halal seulement',
      japanese: 'ハラルのみ',
      romaji: 'Hararu nomi'
    },
    {
      french: 'Y a-t-il de l\'alcool dans la sauce ?',
      japanese: 'ソースにお酒は入っていますか？',
      romaji: 'Sōsu ni osake wa haitte imasu ka?'
    }
  ];

  const porkIngredients = [
    {
      name: 'Butaniku',
      nameJp: '豚肉',
      description: 'Porc (terme général)',
      commonIn: 'Ramen, gyoza, tonkatsu',
      alternatives: 'Demander du bœuf (gyūniku) ou poulet (toriniku)'
    },
    {
      name: 'Buta',
      nameJp: '豚',
      description: 'Porc (préfixe)',
      commonIn: 'Buta-don, buta-kimchi',
      alternatives: 'Chercher gyū- (bœuf) ou tori- (poulet)'
    },
    {
      name: 'Tonkatsu',
      nameJp: 'とんかつ',
      description: 'Escalope de porc panée',
      commonIn: 'Katsu curry, katsu sandwich',
      alternatives: 'Chicken katsu disponible'
    },
    {
      name: 'Chashu',
      nameJp: 'チャーシュー',
      description: 'Porc braisé pour ramen',
      commonIn: 'Ramen, riz chashu',
      alternatives: 'Demander sans chashu ou avec poulet'
    }
  ];

  const alcoholIngredients = [
    {
      name: 'Mirin',
      nameJp: 'みりん',
      description: 'Vin de riz doux pour cuisine',
      alcoholContent: '~14%',
      usage: 'Sauces, marinades'
    },
    {
      name: 'Sake',
      nameJp: '日本酒',
      description: 'Alcool de riz japonais',
      alcoholContent: '~15%',
      usage: 'Cuisson, marinades'
    },
    {
      name: 'Ryōrishu',
      nameJp: '料理酒',
      description: 'Sake de cuisine',
      alcoholContent: '~14%',
      usage: 'Cuisson (alcool s\'évapore partiellement)'
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
            <span className="text-gray-900">Sans Porc & Halal</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guide Sans Porc & Halal
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Naviguer dans les restaurants japonais en évitant le porc et en respectant 
              les exigences halal. Options vérifiées et conseils pratiques.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              豚肉不使用・ハラルガイド
            </div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-amber-600 mt-1" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Note importante sur la certification halal</h3>
              <p className="text-amber-700 text-sm">
                <strong>Aucune des chaînes listées n'est officiellement certifiée halal au Japon.</strong> 
                Ce guide identifie les options sans porc et fournit des informations pour vous aider à faire 
                des choix éclairés selon vos propres critères religieux. Toujours vérifier avec le personnel 
                en cas de doute sur les ingrédients ou la préparation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Défis spécifiques
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Porc très courant</h3>
                    <p className="text-gray-600 text-sm">
                      Le porc est largement utilisé dans la cuisine japonaise, 
                      souvent de manière inattendue.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Alcool dans la cuisine</h3>
                    <p className="text-gray-600 text-sm">
                      Mirin et sake sont couramment utilisés dans les sauces 
                      et marinades japonaises.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Contamination croisée</h3>
                    <p className="text-gray-600 text-sm">
                      Les cuisines partagent souvent les équipements 
                      entre différents types de viande.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Solutions pratiques
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Chaînes spécialisées</h3>
                    <p className="text-gray-600 text-sm">
                      Certaines chaînes se concentrent sur le bœuf ou 
                      le poulet, réduisant les risques.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Communication claire</h3>
                    <p className="text-gray-600 text-sm">
                      Avec les bonnes phrases, la plupart du personnel 
                      peut vous aider à éviter le porc.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Options identifiées</h3>
                    <p className="text-gray-600 text-sm">
                      Nous avons identifié les plats les plus sûrs 
                      dans chaque chaîne recommandée.
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
          Chaînes Recommandées (Sans Porc)
        </h2>
        
        <div className="space-y-6">
          {halalFriendlyChains.map((chain, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
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
                        {chain.porkFree && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            Sans porc principal
                          </span>
                        )}
                        {chain.halalCertified && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            Halal certifié
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
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Plats recommandés :</h4>
                  <ul className="space-y-1 mb-4">
                    {chain.recommendedItems.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {chain.avoidItems.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">À éviter :</h4>
                      <ul className="space-y-1">
                        {chain.avoidItems.map((item, i) => (
                          <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                            <XCircle className="w-4 h-4 text-red-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-1">Attention :</h4>
                        <p className="text-sm text-yellow-700">
                          {chain.warnings}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      href={`/chaines/${chain.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Voir les détails complets
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Phrases */}
      <div className="bg-blue-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Phrases Essentielles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPhrases.map((phrase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-blue-200">
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
        </div>
      </div>

      {/* Ingredients to Know */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pork Ingredients */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Ingrédients à base de porc à reconnaître
            </h2>
            
            <div className="space-y-4">
              {porkIngredients.map((ingredient, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{ingredient.name}</h3>
                      <p className="text-gray-500 japanese-text">{ingredient.nameJp}</p>
                    </div>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                      Porc
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{ingredient.description}</p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Trouvé dans :</strong> {ingredient.commonIn}
                  </p>
                  <p className="text-sm text-green-700">
                    <strong>Alternative :</strong> {ingredient.alternatives}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Alcohol Ingredients */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Alcool dans la cuisine japonaise
            </h2>
            
            <div className="space-y-4">
              {alcoholIngredients.map((ingredient, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{ingredient.name}</h3>
                      <p className="text-gray-500 japanese-text">{ingredient.nameJp}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                      {ingredient.alcoholContent}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{ingredient.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Utilisé pour :</strong> {ingredient.usage}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="font-semibold text-orange-800 mb-2">Note sur l'alcool de cuisine :</h3>
              <p className="text-sm text-orange-700">
                L'alcool de cuisine s'évapore partiellement pendant la cuisson, mais des traces peuvent subsister. 
                Certains pratiquants considèrent cela acceptable, d'autres non. Consultez votre guide religieux personnel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à explorer en toute confiance ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utilisez ces informations pour faire des choix éclairés. N'hésitez pas à poser des questions 
              au personnel - la plupart sont très accommodants.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/chaines"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Voir toutes les chaînes
            </Link>
            <Link
              href="/guides/regimes-alimentaires/allergies"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
            >
              Guide des allergies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
