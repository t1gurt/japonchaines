import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Yayoiken (やよい軒) - Guide Complet | Restaurant Teishoku Populaire',
  description: 'Découvrez Yayoiken, la chaîne de teishoku populaire avec riz illimité, prix abordables et service rapide. Le teishoku accessible à tous.',
  keywords: 'Yayoiken, やよい軒, teishoku, restaurant japonais, riz illimité, prix abordables, service rapide, teishoku populaire',
  openGraph: {
    title: 'Yayoiken - Teishoku Populaire avec Riz Illimité',
    description: 'Guide complet de Yayoiken : teishoku abordables avec riz à volonté, service rapide et saveurs authentiques pour tous les budgets.',
    type: 'article'
  }
};

export default function YayoikenPage() {
  const menuItems = [
    {
      category: "Teishoku Populaires",
      items: [
        { name: "Saba Shioyaki", japanese: "鯖塩焼き定食", price: "¥690", description: "Maquereau grillé au sel, riz illimité, soupe miso" },
        { name: "Chicken Katsu", japanese: "チキンカツ定食", price: "¥750", description: "Escalope de poulet panée, sauce tonkatsu, légumes" },
        { name: "Hamburger Teishoku", japanese: "ハンバーグ定食", price: "¥790", description: "Hamburger japonais sauce demi-glace" },
        { name: "Ginger Pork", japanese: "生姜焼き定食", price: "¥850", description: "Porc sauté au gingembre, légumes croquants" }
      ]
    },
    {
      category: "Teishoku Poisson",
      items: [
        { name: "Saba Miso", japanese: "鯖味噌煮定食", price: "¥790", description: "Maquereau mijoté au miso, saveur riche et umami" },
        { name: "Salmon Teriyaki", japanese: "鮭照り焼き定食", price: "¥850", description: "Saumon grillé sauce teriyaki sucrée-salée" },
        { name: "Sanma Shioyaki", japanese: "さんま塩焼き定食", price: "¥690", description: "Balaou grillé au sel, poisson d'automne" },
        { name: "Aji Fry", japanese: "アジフライ定食", price: "¥750", description: "Chinchard pané frit, sauce tartare japonaise" }
      ]
    },
    {
      category: "Options Économiques",
      items: [
        { name: "Egg Teishoku", japanese: "玉子焼き定食", price: "¥490", description: "Omelette japonaise sucrée, option la plus économique" },
        { name: "Natto Teishoku", japanese: "納豆定食", price: "¥450", description: "Haricots fermentés traditionnels, très nutritif" },
        { name: "Tofu Teishoku", japanese: "冷奴定食", price: "¥490", description: "Tofu froid avec condiments, léger et sain" },
        { name: "Vegetable Curry", japanese: "野菜カレー定食", price: "¥650", description: "Curry de légumes doux, option végétarienne" }
      ]
    }
  ];

  const yayoikenFeatures = [
    {
      title: "Riz Illimité",
      icon: "🍚",
      description: "Riz blanc à volonté inclus dans tous les teishoku",
      details: "Service gratuit de riz supplémentaire, idéal pour les gros appétits et les étudiants.",
      highlight: "Service signature"
    },
    {
      title: "Prix Abordables",
      icon: "💰",
      description: "Teishoku à partir de ¥450, accessibles à tous les budgets",
      details: "Positionnement économique sans compromis sur la qualité des ingrédients de base.",
      highlight: "Excellent rapport qualité-prix"
    },
    {
      title: "Service Rapide",
      icon: "⚡",
      description: "Préparation et service en moins de 10 minutes",
      details: "Cuisine en partie préparée à l'avance pour un service express adapté aux pauses déjeuner.",
      highlight: "Idéal pause déjeuner"
    },
    {
      title: "Menu Familial",
      icon: "👨‍👩‍👧‍👦",
      description: "Options adaptées aux enfants et familles nombreuses",
      details: "Portions généreuses et saveurs douces appréciées par toute la famille.",
      highlight: "Convivial pour tous"
    },
    {
      title: "Horaires Étendus",
      icon: "🕐",
      description: "Ouvert du petit-déjeuner au dîner dans la plupart des locations",
      details: "Disponibilité étendue pour s'adapter aux rythmes de vie japonais variés.",
      highlight: "Grande flexibilité"
    },
    {
      title: "Standardisation",
      icon: "📋",
      description: "Goût et qualité constants dans tous les restaurants",
      details: "Procédures strictes garantissant une expérience identique partout au Japon.",
      highlight: "Fiabilité assurée"
    }
  ];

  const riceTips = [
    {
      title: "Demander du Riz Supplémentaire",
      japanese: "ご飯のおかわり",
      romanji: "Gohan no okawari",
      description: "Lever légèrement la main et dire 'Gohan no okawari onegaishimasu'",
      icon: "🙋‍♂️"
    },
    {
      title: "Quantité de Riz Initial",
      japanese: "ご飯の量",
      romanji: "Gohan no ryou",
      description: "Demander 'oomori' (grande portion) ou 'sukuname' (petite portion) à la commande",
      icon: "📏"
    },
    {
      title: "Mélanger avec les Plats",
      japanese: "混ぜる",
      romanji: "Mazeru",
      description: "Utiliser le riz pour absorber les sauces et accompagner chaque bouchée",
      icon: "🥄"
    }
  ];

  const orderingGuide = [
    {
      step: 1,
      title: "Machine à Tickets",
      icon: "🎫",
      description: "Acheter son ticket au distributeur automatique",
      tips: ["Paiement en espèces ou carte", "Photos sur les boutons", "Prix clairement affichés"]
    },
    {
      step: 2,
      title: "Choisir sa Place",
      icon: "🪑",
      description: "S'installer librement aux tables disponibles",
      tips: ["Self-service pour les places", "Comptoir ou tables", "Apporter son ticket"]
    },
    {
      step: 3,
      title: "Remettre le Ticket",
      icon: "🎟️",
      description: "Donner le ticket au personnel de service",
      tips: ["Attendre qu'un serveur passe", "Garder le ticket visible", "Préciser quantité de riz si besoin"]
    },
    {
      step: 4,
      title: "Service Rapide",
      icon: "🍽️",
      description: "Réception du teishoku en 5-10 minutes",
      tips: ["Plateaux apportés à table", "Riz supplémentaire gratuit", "Self-service pour l'eau"]
    }
  ];

  const budgetGuide = [
    {
      category: "Budget Étudiant",
      range: "¥450-650",
      recommendations: ["Natto Teishoku", "Egg Teishoku", "Vegetable Curry"],
      description: "Options les plus économiques avec riz illimité pour compenser"
    },
    {
      category: "Déjeuner Standard",
      range: "¥650-850",
      recommendations: ["Saba Shioyaki", "Chicken Katsu", "Salmon Teriyaki"],
      description: "Teishoku populaires offrant le meilleur équilibre prix-saveur"
    },
    {
      category: "Repas Consistant",
      range: "¥850-1200",
      recommendations: ["Hamburger + side", "Tonkatsu Set", "Mix Plate"],
      description: "Options plus copieuses avec accompagnements supplémentaires"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Yayoiken" chainCategory="Teishoku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/chaines" className="text-gray-500 hover:text-red-600">Chaînes</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Yayoiken</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🍚</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Yayoiken
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">やよい軒</p>
                  <p className="text-lg text-gray-600">Teishoku Populaire</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                La référence du teishoku accessible ! Yayoiken propose des repas complets 
                traditionnels avec riz à volonté, prix imbattables et service express. 
                L'art du teishoku démocratisé pour tous les budgets.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Riz Illimité
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix Abordables
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Service Rapide
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Familial
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Pratiques</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Prix moyen :</span>
                  <span className="text-gray-600">¥450-850</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style :</span>
                  <span className="text-gray-600">Teishoku populaire</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Spécialité :</span>
                  <span className="text-yellow-600 font-medium">Riz illimité</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Commande :</span>
                  <span className="text-gray-600">Machine à tickets</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Service :</span>
                  <span className="text-blue-600 font-medium">Express (5-10 min)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Clientèle :</span>
                  <span className="text-gray-600">Étudiants, familles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Unlimited Feature */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🍚</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Riz à Volonté - Le Plus de Yayoiken</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Le service signature de Yayoiken : riz blanc illimité inclus dans tous les teishoku. 
              Une tradition qui fait de chaque repas un moment généreux et satisfaisant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {riceTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-yellow-200">
                <div className="text-3xl mb-4 text-center">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{tip.title}</h3>
                <p className="text-gray-600 japanese-text text-center mb-2">{tip.japanese}</p>
                <p className="text-gray-500 text-sm text-center mb-3">({tip.romanji})</p>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">💡 Conseils pour Profiter du Riz Illimité</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="mb-2"><span className="font-semibold">🍽️ Stratégie :</span> Commencer avec portion normale, redemander selon appétit</p>
                <p className="mb-2"><span className="font-semibold">⏰ Timing :</span> Demander plus de riz en milieu de repas pour accompagner les derniers plats</p>
                <p><span className="font-semibold">🥢 Étiquette :</span> Finir son riz avant d'en redemander (respect japonais)</p>
              </div>
              <div>
                <p className="mb-2"><span className="font-semibold">🧂 Association :</span> Utiliser le riz pour équilibrer les saveurs salées</p>
                <p className="mb-2"><span className="font-semibold">🍲 Technique :</span> Mélanger légèrement avec la soupe miso en fin de repas</p>
                <p><span className="font-semibold">💚 Santé :</span> Riz nature, source d'énergie sans additifs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide Budget - Yayoiken pour Tous
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {budgetGuide.map((budget, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{budget.category}</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">{budget.range}</div>
                <p className="text-gray-600 text-sm mb-4">{budget.description}</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Recommandations :</h4>
                <div className="space-y-1">
                  {budget.recommendations.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-600">• {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">💰 Calcul Économique Intelligent</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pourquoi Yayoiken est Économique :</h4>
                <p className="mb-2">• <span className="font-semibold">Riz illimité :</span> Complément gratuit pour se rassasier</p>
                <p className="mb-2">• <span className="font-semibold">Soupe miso incluse :</span> Nutrition et satiété ajoutées</p>
                <p className="mb-2">• <span className="font-semibold">Légumes inclus :</span> Équilibre nutritionnel dans le prix</p>
                <p>• <span className="font-semibold">Pas de frais cachés :</span> Prix tout compris affiché</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Comparaison Valeur :</h4>
                <p className="mb-2">• <span className="font-semibold">vs Fast-food :</span> Plus nutritif à prix similaire</p>
                <p className="mb-2">• <span className="font-semibold">vs Konbini :</span> Repas chaud complet vs snacks</p>
                <p className="mb-2">• <span className="font-semibold">vs Cuisine :</span> Gain de temps et vaisselle</p>
                <p>• <span className="font-semibold">vs Autres teishoku :</span> 30-40% moins cher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Menu Yayoiken - Sélection Populaire
          </h2>
          
          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  {category.category === "Options Économiques" && <span className="text-green-500 mr-2">💰</span>}
                  {category.category === "Teishoku Poisson" && <span className="text-blue-500 mr-2">🐟</span>}
                  {category.category === "Teishoku Populaires" && <span className="text-yellow-500 mr-2">⭐</span>}
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-green-600 font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text text-sm mb-2">{item.japanese}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <p className="text-xs text-green-600 mt-2 font-medium">+ Riz illimité inclus</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Avantages Yayoiken
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yayoikenFeatures.map((feature, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                
                <div className="bg-white p-3 rounded-lg border border-yellow-100 mb-3">
                  <p className="text-gray-500 text-xs">{feature.details}</p>
                </div>
                
                <div className="text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander chez Yayoiken
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderingGuide.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-600 font-bold">{step.step}</span>
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{step.description}</p>
                <div className="space-y-1">
                  {step.tips.map((tip, tipIndex) => (
                    <p key={tipIndex} className="text-xs text-gray-500">• {tip}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Phrases Utiles chez Yayoiken</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Gohan no okawari onegaishimasu</span></p>
                <p className="text-gray-600 japanese-text mb-2">ご飯のおかわりお願いします</p>
                <p className="text-gray-500 text-xs mb-3">Plus de riz, s'il vous plaît</p>
                
                <p><span className="font-semibold">Oomori de onegaishimasu</span></p>
                <p className="text-gray-600 japanese-text mb-2">大盛りでお願いします</p>
                <p className="text-gray-500 text-xs">En grande portion, s'il vous plaît</p>
              </div>
              <div>
                <p><span className="font-semibold">Yasui teishoku wa dore desu ka?</span></p>
                <p className="text-gray-600 japanese-text mb-2">安い定食はどれですか？</p>
                <p className="text-gray-500 text-xs mb-3">Quel est le teishoku le moins cher ?</p>
                
                <p><span className="font-semibold">Gochisousama deshita</span></p>
                <p className="text-gray-600 japanese-text mb-2">ごちそうさまでした</p>
                <p className="text-gray-500 text-xs">Merci pour ce repas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Autres Chaînes de Teishoku
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/chaines/ootoya" className="group bg-green-50 p-6 rounded-xl border border-green-200 hover:border-green-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 mb-3">Ootoya</h3>
              <p className="text-gray-600 text-sm">Teishoku haut de gamme avec ingrédients frais et cuisine visible.</p>
            </Link>
            
            <Link href="/chaines/teishoku-no-yoshi" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">Teishoku no Yoshi</h3>
              <p className="text-gray-600 text-sm">Teishoku authentiques focus sur le poisson grillé traditionnel.</p>
            </Link>
            
            <Link href="/type-plat/teishoku" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">Tous les Teishoku</h3>
              <p className="text-gray-600 text-sm">Découvrez toutes les chaînes de teishoku et leur philosophie.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
