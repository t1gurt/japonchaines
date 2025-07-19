import Link from 'next/link';
import { ArrowLeft, Fish, MapPin, Clock, Award, Utensils, DollarSign, Users, ChefHat, Star } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurants Sushi Japon | Kaiten Traditionnel | Japonchaines',
  description: 'Choisir restaurant sushi : kaiten-zushi (Sushiro), sushi-ya traditionnels, chaînes.',
  keywords: 'restaurant sushi, sushi japon, kaiten-zushi, restaurant japonais, guide sushi, sushiro, kura sushi, hama sushi',
  openGraph: {
    title: 'Guide des Restaurants Sushi au Japon : Kaiten, Traditionnel | Japonchaines',
    description: 'Comment choisir votre restaurant sushi au Japon ? Guide complet des kaiten-zushi, sushi-ya traditionnels et chaînes modernes.',
    type: 'article',
    url: '/guides/restaurant-sushi',
  },
  alternates: {
    canonical: '/guides/restaurant-sushi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RestaurantSushiPage() {
  const sushiTypes = [
    {
      type: "Kaiten-zushi",
      japanese: "回転寿司",
      description: "Restaurants sushi avec tapis roulant",
      priceRange: "¥100-300/assiette",
      bestFor: "Familles, budgets serrés, découverte",
      examples: ["Sushiro", "Kura Sushi", "Hama Sushi"],
      pros: ["Prix abordables", "Pas d'attente", "Menu varié", "Commande facile"],
      icon: "🍣"
    },
    {
      type: "Sushi-ya traditionnel",
      japanese: "寿司屋",
      description: "Restaurants sushi authentiques avec chef",
      priceRange: "¥3000-15000",
      bestFor: "Expérience authentique, occasions spéciales",
      examples: ["Jiro", "Kyubei", "Ginza Sushi-Ko"],
      pros: ["Qualité exceptionnelle", "Expérience culturelle", "Sushi frais", "Interaction avec le chef"],
      icon: "🥢"
    },
    {
      type: "Restaurant sushi moderne",
      japanese: "モダン寿司",
      description: "Fusion moderne et créative",
      priceRange: "¥2000-8000",
      bestFor: "Innovation culinaire, ambiance moderne",
      examples: ["Nabezo", "Genki Sushi", "Numazuko"],
      pros: ["Créativité", "Ambiance moderne", "Qualité-prix", "Menu fusion"],
      icon: "🌟"
    }
  ];

  const sushiChains = [
    {
      name: "Sushiro",
      japanese: "スシロー",
      rank: "#1",
      description: "Le leader incontesté du marché avec 627+ restaurants",
      specialty: "Qualité constante et innovation",
      avgPrice: "¥110-300",
      popularity: "⭐⭐⭐⭐⭐",
      href: "/chaines/sushiro",
      color: "bg-blue-500"
    },
    {
      name: "Kura Sushi",
      japanese: "くら寿司",
      rank: "#2",
      description: "Pionnier du concept 'sans additifs' avec jeux ludiques",
      specialty: "Système Bikkura-Pon et produits bio",
      avgPrice: "¥110-500",
      popularity: "⭐⭐⭐⭐⭐",
      href: "/chaines/kura-sushi",
      color: "bg-purple-500"
    },
    {
      name: "Hama Sushi",
      japanese: "はま寿司",
      rank: "#3",
      description: "Le choix économique du groupe Zensho",
      specialty: "Prix ultra-compétitifs et menu élargi",
      avgPrice: "¥110-250",
      popularity: "⭐⭐⭐⭐",
      href: "/chaines/hama-sushi",
      color: "bg-green-500"
    }
  ];

  const choosingTips = [
    {
      situation: "Premier voyage au Japon",
      recommendation: "Kaiten-zushi (Sushiro ou Kura Sushi)",
      reason: "Interface simple, prix clairs, pas de barrière linguistique"
    },
    {
      situation: "Budget limité",
      recommendation: "Hama Sushi ou Sushiro",
      reason: "Prix fixes à 110¥, excellent rapport qualité-prix"
    },
    {
      situation: "Expérience authentique",
      recommendation: "Sushi-ya traditionnel local",
      reason: "Interaction avec le chef, sushi préparés à la commande"
    },
    {
      situation: "Famille avec enfants",
      recommendation: "Kura Sushi",
      reason: "Système de jeu Bikkura-Pon, ambiance ludique"
    },
    {
      situation: "Repas d'affaires",
      recommendation: "Restaurant sushi moderne ou traditionnel haut de gamme",
      reason: "Cadre approprié, qualité exceptionnelle"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/guides" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Guides
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Fish className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Guide Complet des Restaurants Sushi au Japon</h1>
              <p className="text-lg text-gray-600">Tout savoir pour choisir le bon restaurant sushi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Le Japon compte plus de <strong>45 000 restaurants sushi</strong>, des chaînes kaiten-zushi 
              accessibles aux sushi-ya traditionnels prestigieux. Ce guide vous aidera à naviguer dans 
              cet univers et à choisir le restaurant sushi parfait selon votre budget, vos attentes et votre expérience.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 Dans ce guide :</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• <strong>3 types</strong> de restaurants sushi au Japon</li>
                <li>• <strong>Comparatif détaillé</strong> des meilleures chaînes</li>
                <li>• <strong>Conseils pratiques</strong> pour choisir selon votre situation</li>
                <li>• <strong>Guide des prix</strong> et budget recommandé</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Types de restaurants sushi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Les 3 Types de Restaurants Sushi au Japon
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sushiTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-2 block">{type.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{type.type}</h3>
                    <p className="text-sm text-gray-600 japanese-text">{type.japanese}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-center">{type.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Prix :</span>
                      <span className="text-sm font-semibold text-green-600">{type.priceRange}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-1">Idéal pour :</span>
                      <span className="text-sm text-gray-700">{type.bestFor}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-2">Avantages :</span>
                      <div className="space-y-1">
                        {type.pros.map((pro, i) => (
                          <div key={i} className="text-xs text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {pro}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-1">Exemples :</span>
                      <div className="flex flex-wrap gap-1">
                        {type.examples.map((example, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chaînes de sushi populaires */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Top 3 des Chaînes de Restaurants Sushi
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sushiChains.map((chain, index) => (
              <Link key={index} href={chain.href}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-white text-xs font-bold px-2 py-1 rounded ${chain.color}`}>
                      {chain.rank}
                    </span>
                    <span className="text-sm">{chain.popularity}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{chain.name}</h3>
                  <p className="text-sm text-gray-600 japanese-text mb-3">{chain.japanese}</p>
                  <p className="text-gray-700 text-sm mb-4">{chain.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">Spécialité :</span>
                      <span className="text-xs text-gray-900 font-medium">{chain.specialty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-600">Prix moyen :</span>
                      <span className="text-xs text-green-600 font-semibold">{chain.avgPrice}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Voir le guide détaillé →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Guide de choix */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Comment Choisir Votre Restaurant Sushi ?
          </h2>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-6">
              {choosingTips.map((tip, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    🎯 {tip.situation}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-1">
                    Recommandation : {tip.recommendation}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {tip.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Sushi vs Kaiten-zushi */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Restaurant Sushi Traditionnel vs Kaiten-zushi
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <ChefHat className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Restaurant Sushi Traditionnel</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Avantages :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Qualité exceptionnelle des ingrédients</li>
                    <li>• Sushi préparés à la minute par le chef</li>
                    <li>• Expérience culturelle authentique</li>
                    <li>• Interaction directe avec l'itamae (chef sushi)</li>
                    <li>• Sélection de saké premium</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">⚠️ Inconvénients :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Prix élevé (¥3000-15000)</li>
                    <li>• Réservation souvent nécessaire</li>
                    <li>• Barrière linguistique possible</li>
                    <li>• Codes sociaux à respecter</li>
                    <li>• Moins adapté aux familles</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Utensils className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Kaiten-zushi (Chaînes)</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Avantages :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Prix très abordables (¥110-300)</li>
                    <li>• Pas de réservation nécessaire</li>
                    <li>• Interface multilingue</li>
                    <li>• Adapté aux familles et enfants</li>
                    <li>• Large choix et menu varié</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">⚠️ Inconvénients :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Qualité standardisée (moins premium)</li>
                    <li>• Expérience moins authentique</li>
                    <li>• Possibles files d'attente</li>
                    <li>• Ambiance plus commerciale</li>
                    <li>• Sushi pré-préparés</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions Fréquentes sur les Restaurants Sushi
          </h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Q: Quelle est la différence entre un restaurant sushi et un kaiten-zushi ?
              </h4>
              <p className="text-gray-700 text-sm">
                Un restaurant sushi traditionnel propose des sushi préparés à la commande par un chef, 
                tandis qu'un kaiten-zushi utilise un tapis roulant avec des sushi pré-préparés. 
                La différence principale réside dans le prix, la qualité et l'expérience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Q: Quel budget prévoir pour un restaurant sushi au Japon ?
              </h4>
              <p className="text-gray-700 text-sm">
                Kaiten-zushi : ¥1000-2000 par personne. Restaurant sushi moderne : ¥2000-8000. 
                Sushi-ya traditionnel : ¥5000-20000. Les chaînes comme Sushiro restent l'option 
                la plus économique avec des prix fixes à ¥110.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Q: Les restaurants sushi au Japon acceptent-ils les cartes de crédit ?
              </h4>
              <p className="text-gray-700 text-sm">
                La plupart des chaînes modernes (Sushiro, Kura Sushi) acceptent les cartes. 
                Les restaurants traditionnels préfèrent souvent le cash. Il est recommandé 
                d'avoir toujours des espèces sur soi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
