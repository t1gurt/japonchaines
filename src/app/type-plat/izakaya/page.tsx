import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Izakaya : Guide des Bars à Tapas Japonais | Japonchaines",
  description: "Découvrez la culture de l'izakaya, le bistrot japonais. Yakitori, bière et ambiance conviviale. Guide des chaînes comme Torikizoku.",
  keywords: "izakaya, Torikizoku, Isomaru Suisan, yakitori, bar japonais, bistrot japonais",
  openGraph: {
    title: "Izakaya : Guide des Bars à Tapas Japonais | Japonchaines",
    description: "Découvrez la culture de l'izakaya, le bistrot japonais. Yakitori, bière et ambiance conviviale. Guide des chaînes comme Torikizoku.",
    type: "article",
    url: "https://japonchaines.com/type-plat/izakaya",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/izakaya-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Izakaya - Bars à tapas japonais"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Izakaya : Guide des Bars à Tapas Japonais | Japonchaines",
    description: "Découvrez la culture de l'izakaya, le bistrot japonais. Yakitori, bière et ambiance conviviale. Guide des chaînes comme Torikizoku.",
    images: ["/images/izakaya-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/izakaya"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function IzakayaPage() {
  const izakayaChains = [
    {
      name: "Isomaru Suisan",
      japanese: "磯丸水産",
      englishName: "Isomaru Suisan",
      description: "Izakaya révolutionnaire recréant l'ambiance d'une 'maison de la mer' en ville. Grillez vous-même des fruits de mer ultra-frais sur votre table.",
      specialties: ["Hamayaki", "Kani Miso Kōra Yaki", "Hotate", "Kaisendon"],
      priceRange: "¥1000-4000",
      style: "Fruits de mer interactif",
      orderingMethod: "Tablette tactile multilingue",
      atmosphere: "Convivial, maritime",
      uniqueFeatures: ["Grill de table", "Fruits de mer vivants", "Ouvert 24h/24"],
      ageGroup: "Tous âges, groupes",
      href: "/chaines/isomaru-suisan"
    },
    {
      name: "Torikizoku",
      japanese: "鳥貴族",
      englishName: "Torikizoku",
      description: "Chaîne d'izakaya spécialisée dans le yakitori avec un système de prix unique : tous les plats à 328¥.",
      specialties: ["Yakitori", "Tebasaki", "Chicken Nanban", "Tori Kawa"],
      priceRange: "¥328 uniforme",
      style: "Yakitori spécialisé",
      orderingMethod: "Menu papier + service table",
      atmosphere: "Décontracté, animé",
      uniqueFeatures: ["Prix unique 328¥", "Spécialiste poulet", "Ambiance festive"],
      ageGroup: "Jeunes adultes",
      href: "/chaines/torikizoku"
    },
    {
      name: "Kushikatsu Tanaka",
      japanese: "串カツ田中",
      englishName: "Kushikatsu Tanaka",
      description: "Spécialiste du kushikatsu d'Osaka depuis 1929. Brochettes panées et frites avec la fameuse sauce secrète dans l'ambiance populaire d'Osaka.",
      specialties: ["Kushikatsu", "Kushikatsu Premium", "Sauce Secrète", "Bière"],
      priceRange: "¥1500-2500",
      style: "Izakaya Osaka style",
      orderingMethod: "Menu papier à cocher",
      atmosphere: "Populaire, convivial",
      uniqueFeatures: ["Tradition Osaka", "NO double dipping", "Sauce légendaire"],
      ageGroup: "Tous âges",
      href: "/chaines/kushikatsu-tanaka"
    },
    {
      name: "Shirokiya",
      japanese: "白木屋",
      englishName: "Shirokiya",
      description: "Izakaya traditionnel offrant une large gamme de plats et boissons dans une ambiance typique.",
      specialties: ["Sashimi", "Karaage", "Edamame", "Grilled Fish"],
      priceRange: "¥200-800",
      style: "Izakaya traditionnel",
      orderingMethod: "Menu + service table",
      atmosphere: "Traditionnel japonais",
      uniqueFeatures: ["Menu varié", "Ambiance authentique", "Drink options"],
      ageGroup: "Adultes, salariés",
      href: "/chaines/shirokiya"
    },
    {
      name: "Watami",
      japanese: "和民",
      englishName: "Watami",
      description: "Grande chaîne d'izakaya familiale avec menu varié et options saines, populaire auprès des familles.",
      specialties: ["Robatayaki", "Salades", "Grilled Vegetables", "Family Sets"],
      priceRange: "¥300-1000",
      style: "Izakaya familial",
      orderingMethod: "Tablette + service table",
      atmosphere: "Familial, moderne",
      uniqueFeatures: ["Options saines", "Familles bienvenues", "Tablettes tactiles"],
      ageGroup: "Familles, tous âges",
      href: "/chaines/watami"
    }
  ];

  const izakayaDishes = [
    {
      name: "Yakitori",
      japanese: "焼き鳥",
      description: "Brochettes de poulet grillées, plat emblématique des izakaya",
      characteristics: "Fumé, savoureux, convivial",
      price: "¥150-400 par brochette",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Bière, sake"
    },
    {
      name: "Edamame",
      japanese: "枝豆",
      description: "Fèves de soja bouillies et salées, accompagnement classique",
      characteristics: "Frais, salé, léger",
      price: "¥200-400",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Bière parfaite"
    },
    {
      name: "Karaage",
      japanese: "から揚げ",
      description: "Poulet frit japonais croustillant et juteux",
      characteristics: "Croustillant, juteux, réconfortant",
      price: "¥400-700",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Bière, highball"
    },
    {
      name: "Sashimi",
      japanese: "刺身",
      description: "Poisson cru tranché finement, fraîcheur garantie",
      characteristics: "Frais, délicat, authentique",
      price: "¥500-1500",
      difficulty: "Moyen",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      drinkPairing: "Sake, shochu"
    },
    {
      name: "Takoyaki",
      japanese: "たこ焼き",
      description: "Boulettes de poulpe d'Osaka, spécialité de rue",
      characteristics: "Crémeux, savoureux, typique",
      price: "¥300-600",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Bière"
    },
    {
      name: "Gyoza",
      japanese: "餃子",
      description: "Raviolis grillés, parfaits pour accompagner les boissons",
      characteristics: "Croustillant, juteux, addictif",
      price: "¥300-600",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Bière, highball"
    }
  ];

  const drinkOptions = [
    {
      name: "Bière",
      japanese: "ビール",
      description: "Boisson la plus populaire, servie très froide",
      varieties: ["Asahi", "Kirin", "Sapporo", "Premium Malts"],
      price: "¥300-600",
      alcoholLevel: "5%",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Highball",
      japanese: "ハイボール",
      description: "Whisky japonais avec soda, très rafraîchissant",
      varieties: ["Suntory", "Nikka", "Jim Beam", "Kaku"],
      price: "¥200-500",
      alcoholLevel: "7-9%",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sake",
      japanese: "日本酒",
      description: "Vin de riz traditionnel, chaud ou froid",
      varieties: ["Junmai", "Ginjo", "Daiginjo", "Honjozo"],
      price: "¥400-1000",
      alcoholLevel: "15-16%",
      popularity: "⭐⭐⭐⭐"
    },
    {
      name: "Shochu",
      japanese: "焼酎",
      description: "Alcool distillé, moins cher que le sake",
      varieties: ["Imo", "Mugi", "Kome", "Kokuto"],
      price: "¥300-700",
      alcoholLevel: "20-25%",
      popularity: "⭐⭐⭐⭐"
    },
    {
      name: "Chu-Hi",
      japanese: "チューハイ",
      description: "Cocktail pré-mixé fruité et léger",
      varieties: ["Lemon", "Grapefruit", "Peach", "Grape"],
      price: "¥200-400",
      alcoholLevel: "3-7%",
      popularity: "⭐⭐⭐⭐"
    }
  ];

  const izakayaCulture = [
    {
      title: "Nomihōdai",
      icon: "🍻",
      description: "Système à volonté pour les boissons, très populaire",
      details: "2h de boissons illimitées pour 1500-3000¥",
      tips: "Idéal pour les groupes, réservation recommandée"
    },
    {
      title: "Otōshi",
      icon: "🥗",
      description: "Petit plat d'accompagnement servi automatiquement",
      details: "¥200-500 par personne, non-négociable",
      tips: "Fait partie de la culture, comme un cover charge"
    },
    {
      title: "Kanpai",
      icon: "🥂",
      description: "Toast obligatoire avant de boire",
      details: "Attendez que tout le monde soit servi",
      tips: "Dites 'Kanpai!' en levant votre verre"
    },
    {
      title: "Sharing",
      icon: "🍽️",
      description: "Partage des plats au centre de la table",
      details: "Commandez plusieurs petits plats pour tous",
      tips: "Utilisez les baguettes de service"
    },
    {
      title: "Nijikai",
      icon: "🏮",
      description: "Deuxième bar après l'izakaya principal",
      details: "Tradition de continuer la soirée ailleurs",
      tips: "Karaoke ou bar plus petit typique"
    },
    {
      title: "Enkai",
      icon: "🎉",
      description: "Banquet d'entreprise ou événement de groupe",
      details: "Réservations de groupe avec menu fixe",
      tips: "Événements sociaux importants au Japon"
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Type de Plat</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Izakaya</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-red-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🏮</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Izakaya
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">居酒屋</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Plongez dans l'art de vivre japonais : les izakaya sont bien plus 
                que des bars, ce sont des lieux de convivialité où yakitori, bière 
                et amitié se mélangent dans une ambiance authentique.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥200-2500
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Culture authentique
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ambiance conviviale
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L'Âme du Japon</h3>
              <p className="text-gray-600 mb-4">
                Les izakaya sont le cœur de la socialisation japonaise après le travail. 
                Ces "bars-restaurants" offrent une expérience unique alliant cuisine 
                décontractée et boissons dans une ambiance chaleureuse.
              </p>
              <p className="text-gray-600">
                Plus qu'un simple repas, c'est un moment de détente authentique où 
                les Japonais se retrouvent pour décompresser et créer des liens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Izakaya Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            La Culture Izakaya : Codes et Traditions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {izakayaCulture.map((culture, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <div className="text-3xl mb-4">{culture.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{culture.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{culture.description}</p>
                <p className="text-gray-700 text-sm font-medium mb-2">{culture.details}</p>
                <p className="text-orange-700 text-xs bg-orange-100 p-2 rounded">
                  💡 <strong>Conseil :</strong> {culture.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drink Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide des Boissons d'Izakaya
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drinkOptions.map((drink, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{drink.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{drink.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{drink.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{drink.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Alcool :</span>
                    <span className="text-gray-600">{drink.alcoholLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{drink.popularity}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Variétés :</h4>
                  <div className="flex flex-wrap gap-1">
                    {drink.varieties.map((variety, varietyIndex) => (
                      <span key={varietyIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Izakaya Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plats Classiques d'Izakaya
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {izakayaDishes.map((dish, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                dish.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  {dish.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Parfait débutants
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    dish.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {dish.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{dish.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{dish.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Caractère :</span>
                    <span className="text-gray-600">{dish.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{dish.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{dish.popularity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Avec :</span>
                    <span className="text-gray-600">{dish.drinkPairing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principales Chaînes d'Izakaya
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {izakayaChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-orange-600 text-xl">🏮</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.ageGroup}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Spécialités :</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Particularités :</h4>
                      <p className="text-sm text-gray-600">{chain.uniqueFeatures.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Prix : </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Style : </span>
                        <span className="text-gray-600">{chain.style}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Ambiance : </span>
                        <span className="text-gray-600">{chain.atmosphere}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Etiquette Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Étiquette et Savoir-Vivre en Izakaya
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🥂</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Kanpai!</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Attendez que tous soient servis</li>
                <li>• Levez votre verre</li>
                <li>• Dites "Kanpai!" ensemble</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🍽️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Partage</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Commandez pour le groupe</li>
                <li>• Utilisez les baguettes de service</li>
                <li>• Partagez tout</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4">🥗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Otōshi</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Acceptez le plat automatique</li>
                <li>• C'est inclus dans le service</li>
                <li>• ¥200-500 par personne</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🍻</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Versez pour les autres</li>
                <li>• Ne vous servez jamais</li>
                <li>• Réciprocité importante</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Essentielles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Kanpai!</span> <span className="japanese-text">乾杯！</span></p>
                <p className="text-gray-600 mb-2">Santé ! (toast obligatoire)</p>
                
                <p><span className="font-semibold">Yakitori kudasai</span> <span className="japanese-text">焼き鳥ください</span></p>
                <p className="text-gray-600 mb-2">Des yakitori, s'il vous plaît</p>
              </div>
              <div>
                <p><span className="font-semibold">Bīru onegaishimasu</span> <span className="japanese-text">ビールお願いします</span></p>
                <p className="text-gray-600 mb-2">Une bière, s'il vous plaît</p>
                
                <p><span className="font-semibold">Otsukare-sama</span> <span className="japanese-text">お疲れ様</span></p>
                <p className="text-gray-600">Bon travail (salutation du soir)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Profiter des Izakaya
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🕰️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Heures d'Affluence</h3>
              <p className="text-gray-600 text-sm">
                Les izakaya sont bondés après 18h en semaine (salariés) et 
                le weekend. Arrivez tôt ou réservez pour les groupes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Budget Prévisionnel</h3>
              <p className="text-gray-600 text-sm">
                Comptez 2000-4000¥ par personne pour une soirée complète 
                avec boissons. Le nomihōdai peut être économique en groupe.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expérience de Groupe</h3>
              <p className="text-gray-600 text-sm">
                Les izakaya sont faits pour les groupes. Venez à 2-6 personnes 
                pour une expérience authentique et conviviale.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍻</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Nomihōdai Strategy</h3>
              <p className="text-gray-600 text-sm">
                Le système à volonté (nomihōdai) est rentable si vous buvez 
                plus de 3-4 verres. Durée limitée à 2-3h généralement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🚭</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Zones Fumeurs</h3>
              <p className="text-gray-600 text-sm">
                Beaucoup d'izakaya permettent encore de fumer. Vérifiez 
                les sections non-fumeurs si vous êtes sensible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎌</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Immersion Culturelle</h3>
              <p className="text-gray-600 text-sm">
                C'est votre chance de vivre la socialisation japonaise 
                authentique. Observez, participez et amusez-vous !
              </p>
            </div>
          </div>
        </div>      </section>
    </div>
  );
}
