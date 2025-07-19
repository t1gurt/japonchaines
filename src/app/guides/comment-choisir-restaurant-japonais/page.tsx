import Link from 'next/link';
import { ArrowLeft, HelpCircle, Star, DollarSign, Users, Clock, Utensils, MapPin, Award, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Choisir Restaurant Japon | Guide 2025 | Japonchaines',
  description: 'Guide pratique par cuisine, budget, occasion. Évitez pièges, mangez comme local.',
  keywords: 'comment choisir restaurant japonais, guide restaurant japon, types restaurants japonais, budget restaurant japon, conseils voyage japon',
  openGraph: {
    title: 'Comment Choisir son Restaurant au Japon ? | Guide 2025 | Japonchaines',
    description: 'Guide pratique pour choisir où manger au Japon. Par type de cuisine, budget et occasion. Conseils pour éviter les pièges touristiques.',
    type: 'article',
    url: '/guides/comment-choisir-restaurant-japonais',
  },
  alternates: {
    canonical: '/guides/comment-choisir-restaurant-japonais',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommentChoisirRestaurantJaponaisPage() {
  const decisionFactors = [
    {
      title: "Budget",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      factors: [
        "Économique (¥500-1500) : Chaînes comme Yoshinoya, Sukiya, Sushiro",
        "Moyen (¥1500-3000) : Restaurants familiaux, ramen premium",
        "Élevé (¥3000+) : Sushi-ya traditionnels, restaurants gastronomiques"
      ]
    },
    {
      title: "Type d'expérience",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      factors: [
        "Authentique : Petits restaurants locaux, izakaya traditionnels",
        "Pratique : Chaînes modernes avec interface multilingue",
        "Culturelle : Restaurants avec démonstrations, cours de cuisine"
      ]
    },
    {
      title: "Composition du groupe",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      factors: [
        "Solo : Comptoirs ramen, kaiten-zushi, distributeurs automatiques",
        "Couple : Restaurants romantiques, izakaya intimes",
        "Famille : Chaînes familiales, menu enfants, espaces spacieux"
      ]
    },
    {
      title: "Horaires",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      factors: [
        "24h/24 : Sukiya, McDonald's Japon, certains Yoshinoya",
        "Déjeuner : Teishoku, bento, restaurants d'affaires",
        "Dîner : Izakaya, restaurants gastronomiques, teppanyaki"
      ]
    }
  ];

  const restaurantTypes = [
    {
      type: "Chaînes de fast-food japonais",
      examples: ["Yoshinoya", "Matsuya", "Sukiya"],
      bestFor: "Budget serré, rapidité, première expérience",
      price: "¥300-1000",
      difficulty: "Très facile",
      description: "Restaurants avec distributeurs automatiques, menus simples et prix affichés clairement."
    },
    {
      type: "Kaiten-zushi (sushi sur tapis)",
      examples: ["Sushiro", "Kura Sushi", "Hama Sushi"],
      bestFor: "Découverte du sushi, familles, contrôle du budget",
      price: "¥100-300/assiette",
      difficulty: "Facile",
      description: "Système de tapis roulant intuitif, tablettes multilingues, prix fixes par couleur d'assiette."
    },
    {
      type: "Restaurants familiaux",
      examples: ["Gusto", "Saizeriya", "Jonathan's"],
      bestFor: "Groupes, menu varié, ambiance décontractée",
      price: "¥800-2000",
      difficulty: "Facile",
      description: "Menus tablette, grand choix de plats, service à table, adapté aux non-japonophones."
    },
    {
      type: "Ramen-ya spécialisés",
      examples: ["Ichiran", "Ippudo", "restaurants locaux"],
      bestFor: "Expérience ramen authentique, repas rapide",
      price: "¥800-1500",
      difficulty: "Moyen",
      description: "Spécialisés en ramen, souvent avec distributeurs, certains avec boxes individuels."
    },
    {
      type: "Izakaya traditionnels",
      examples: ["Torikizoku", "Watami", "établissements locaux"],
      bestFor: "Expérience sociale, découverte culturelle, soirée",
      price: "¥2000-4000",
      difficulty: "Difficile",
      description: "Ambiance japonaise authentique, commande vocale, variété de petits plats et alcool."
    },
    {
      type: "Restaurants haut de gamme",
      examples: ["Sushi Jiro", "Kappo", "Kaiseki"],
      bestFor: "Occasions spéciales, expérience gastronomique",
      price: "¥8000-30000+",
      difficulty: "Très difficile",
      description: "Réservation obligatoire, étiquette stricte, souvent pas d'anglais, expérience culturelle profonde."
    }
  ];

  const practicalTips = [
    {
      title: "Reconnaître un bon restaurant japonais",
      icon: Award,
      tips: [
        "Queue de locaux = généralement bon signe",
        "Menu plastifié avec photos = accessible aux étrangers",
        "Distributeur automatique = système simple et économique",
        "Tablettes multilingues = facilité de commande",
        "Échantillons de plats en vitrine = aide à la décision"
      ]
    },
    {
      title: "Éviter les pièges touristiques",
      icon: MapPin,
      tips: [
        "Éviter les restaurants avec rabatteurs",
        "Méfiance si le menu n'est qu'en anglais près des sites touristiques",
        "Prix excessivement élevés sans justification qualité",
        "Absence totale de clients japonais",
        "Pressions pour commander rapidement"
      ]
    },
    {
      title: "Adaptation aux régimes alimentaires",
      icon: Heart,
      tips: [
        "Végétarien : Saizeriya, certains kaiten-zushi (inari, concombre)",
        "Halal : rechercher certification, éviter porc et alcool en cuisine",
        "Allergies : préparer cartes explicatives en japonais",
        "Vegan : plus difficile, privilégier restaurants spécialisés",
        "Apps de traduction pour ingrédients"
      ]
    }
  ];

  const budgetGuide = [
    {
      budget: "Petit budget (¥500-1500/repas)",
      recommendations: [
        "Gyudon : Yoshinoya, Sukiya, Matsuya",
        "Kaiten-zushi : Sushiro, Hama Sushi",
        "Bento : konbini (Seven-Eleven, Lawson)",
        "Udon/Soba : Marugame Seimen, Hanamaru"
      ]
    },
    {
      budget: "Budget moyen (¥1500-3000/repas)",
      recommendations: [
        "Restaurants familiaux : Gusto, Saizeriya",
        "Ramen premium : Ippudo, Ichiran",
        "Tonkatsu : chaînes spécialisées",
        "Curry japonais : CoCo Ichibanya"
      ]
    },
    {
      budget: "Budget élevé (¥3000+/repas)",
      recommendations: [
        "Sushi traditionnel : sushi-ya locaux",
        "Kaiseki : cuisine traditionnelle raffinée",
        "Teppanyaki : spectacle culinaire",
        "Wagyu : restaurants spécialisés en bœuf premium"
      ]
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Comment Choisir un Restaurant Japonais ?</h1>
              <p className="text-lg text-gray-600">Guide complet pour faire le bon choix selon votre situation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-red max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Avec plus de <strong>380 000 restaurants</strong> au Japon, choisir où manger peut sembler 
              intimidant. Ce guide vous aide à sélectionner le restaurant japonais parfait selon votre 
              budget, vos goûts, votre groupe et votre niveau de confort avec la culture nippone.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">🎯 Ce que vous apprendrez :</h3>
              <ul className="text-red-800 space-y-1">
                <li>• <strong>4 facteurs clés</strong> pour choisir un restaurant japonais</li>
                <li>• <strong>6 types</strong> de restaurants du plus simple au plus complexe</li>
                <li>• <strong>Conseils pratiques</strong> pour éviter les pièges</li>
                <li>• <strong>Guide budget</strong> avec recommandations spécifiques</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Facteurs de décision */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Les 4 Facteurs Clés pour Choisir
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {decisionFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${factor.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <factor.icon className={`w-6 h-6 ${factor.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{factor.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {factor.factors.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Types de restaurants */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Types de Restaurants par Niveau de Difficulté
          </h2>
          
          <div className="space-y-6">
            {restaurantTypes.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid lg:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{restaurant.type}</h3>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.examples.map((example, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Idéal pour :</div>
                    <div className="text-sm text-gray-900 font-medium">{restaurant.bestFor}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Prix :</div>
                    <div className="text-sm text-green-600 font-semibold">{restaurant.price}</div>
                    <div className="text-sm text-gray-600 mt-1">Difficulté :</div>
                    <div className={`text-sm font-medium ${
                      restaurant.difficulty === 'Très facile' ? 'text-green-600' :
                      restaurant.difficulty === 'Facile' ? 'text-blue-600' :
                      restaurant.difficulty === 'Moyen' ? 'text-yellow-600' :
                      restaurant.difficulty === 'Difficile' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {restaurant.difficulty}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-700">{restaurant.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Conseils Pratiques
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {practicalTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <tip.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Guide budget */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Guide Budget et Recommandations
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {budgetGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{guide.budget}</h3>
                
                <ul className="space-y-3">
                  {guide.recommendations.map((rec, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      <strong className="text-gray-900">{rec.split(' : ')[0]} :</strong>
                      <span className="ml-1">{rec.split(' : ')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            En Résumé : Votre Checklist pour Choisir
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Questions à se poser :</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Quel est mon budget par repas ?</li>
                <li>• Suis-je seul(e) ou en groupe ?</li>
                <li>• Veux-je une expérience authentique ou pratique ?</li>
                <li>• Ai-je des restrictions alimentaires ?</li>
                <li>• Suis-je à l'aise avec la barrière linguistique ?</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">✅ Recommandations pour débuter :</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Premier voyage :</strong> Chaînes avec distributeurs (Yoshinoya, Sukiya)</li>
                <li>• <strong>Sushi :</strong> Kaiten-zushi (Sushiro, Kura Sushi)</li>
                <li>• <strong>Famille :</strong> Restaurants familiaux (Gusto, Saizeriya)</li>
                <li>• <strong>Expérience :</strong> Ramen spécialisés (Ichiran, Ippudo)</li>
                <li>• <strong>Gastronomie :</strong> Réserver à l'avance, se renseigner sur l'étiquette</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
