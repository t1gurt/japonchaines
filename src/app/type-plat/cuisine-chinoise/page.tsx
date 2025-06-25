import Link from "next/link";

export default function CuisineChinoisePage() {
  const chineseChains = [
    {
      name: "Bamiyan",
      japanese: "バーミヤン",
      englishName: "Bamiyan",
      description: "Chaîne de cuisine chinoise populaire offrant des plats familiaux à prix abordable dans une ambiance décontractée.",
      specialties: ["Gyoza", "Fried Rice", "Sweet & Sour Pork", "Ramen Chinois"],
      priceRange: "¥600-1500",
      style: "Familial décontracté",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Options végétariennes disponibles",
      uniqueFeatures: ["Portions généreuses", "Prix famille", "Drink bar"],
      atmosphere: "Restaurant familial",
      href: "/chaines/bamiyan"
    },
    {
      name: "Hidakaya",
      japanese: "日高屋",
      englishName: "Hidakaya",
      description: "Gyoza & ramen populaires - Cuisine chinoise accessible depuis 1979. Spécialiste des gyoza croustillants et prix ultra-compétitifs.",
      specialties: ["Gyoza", "Ramen", "Fried Rice", "Tantanmen"],
      priceRange: "¥300-700",
      style: "Populaire décontracté",
      orderingMethod: "Tickets-repas + comptoir",
      vegetarianOptions: "Options très limitées",
      uniqueFeatures: ["Prix ultra-compétitifs", "Gyoza signature", "Service rapide"],
      atmosphere: "Casual populaire",
      href: "/chaines/hidakaya"
    },    {
      name: "Ohsho (Gyoza no Ohsho)",
      japanese: "餃子の王将",
      englishName: "Gyoza no Ohsho",
      description: "Spécialiste des gyoza et cuisine chinoise authentique, très populaire pour ses gyoza faits maison.",
      specialties: ["Gyoza", "Fried Rice", "Ramen", "Char Siu"],
      priceRange: "¥400-1200",
      style: "Authentique chinois",
      orderingMethod: "Menu papier + comptoir",
      vegetarianOptions: "Quelques options",
      uniqueFeatures: ["Gyoza fait maison", "Wok cooking", "Authentique"],
      atmosphere: "Restaurant traditionnel",
      href: "/chaines/gyoza-no-ohsho"
    },
    {
      name: "Osaka Ohsho",
      japanese: "大阪王将",
      englishName: "Osaka Ohsho",
      description: "Chaîne de cuisine chinoise populaire originaire d'Osaka, réputée pour ses gyoza croustillants et ses plats généreux.",
      specialties: ["Gyoza", "Yakimeshi", "Ramen", "Ebi Chili"],
      priceRange: "¥500-1300",
      style: "Style Osaka décontracté",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Options limitées",
      uniqueFeatures: ["Gyoza style Osaka", "Yakimeshi signature", "Portions généreuses"],
      atmosphere: "Décontracté familial",
      href: "/chaines/osaka-ohsho"
    },
    {
      name: "Ringer Hut",
      japanese: "リンガーハット",
      englishName: "Ringer Hut",
      description: "Chaîne spécialisée dans les nouilles chanpon et sara-udon, originaire de Nagasaki.",
      specialties: ["Chanpon", "Sara-udon", "Gyoza", "Fried Rice"],
      priceRange: "¥500-1000",
      style: "Nouilles chinoises japonaises",
      orderingMethod: "Comptoir + tickets",
      vegetarianOptions: "Options végétariennes limitées",
      uniqueFeatures: ["Chanpon authentique", "Légumes frais", "Rapide"],
      atmosphere: "Fast-casual",
      href: "/chaines/ringer-hut"
    }
  ];

  const dishTypes = [
    {
      name: "Gyoza",
      japanese: "餃子",
      description: "Raviolis chinois frits ou vapeur, garniture porc et légumes",
      characteristics: "Croustillant, juteux, parfumé",
      price: "¥300-600",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      sauce: "Sauce soja + vinaigre + huile de sésame"
    },    {
      name: "Fried Rice",
      japanese: "チャーハン",
      description: "Riz sauté à la chinoise avec œuf, légumes et viande",
      characteristics: "Savoureux, consistant, réconfortant",
      price: "¥600-900",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      sauce: "Sauce soja intégrée"
    },
    {
      name: "Yakimeshi",
      japanese: "焼きめし",
      description: "Riz sauté style japonais, légèrement différent du fried rice chinois",
      characteristics: "Parfumé, léger, style japonais",
      price: "¥650-950",
      difficulty: "Facile",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      sauce: "Sauce soja japonaise"
    },
    {
      name: "Sweet & Sour Pork",
      japanese: "酢豚",
      description: "Porc frit sauce aigre-douce avec légumes colorés",
      characteristics: "Sucré-aigre, coloré, festif",
      price: "¥800-1200",
      difficulty: "Moyen",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      sauce: "Sauce aigre-douce maison"
    },
    {
      name: "Chanpon",
      japanese: "ちゃんぽん",
      description: "Nouilles dans bouillon laiteux avec fruits de mer et légumes",
      characteristics: "Crémeux, nourrissant, unique",
      price: "¥700-1000",
      difficulty: "Moyen",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      sauce: "Bouillon laiteux spécial"
    },
    {
      name: "Mapo Tofu",
      japanese: "麻婆豆腐",
      description: "Tofu dans sauce épicée au porc haché et miso",
      characteristics: "Épicé, savoureux, authentique",
      price: "¥600-900",
      difficulty: "Moyen",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      sauce: "Sauce miso épicée"
    },
    {
      name: "Char Siu",
      japanese: "チャーシュー",
      description: "Porc laqué grillé, spécialité cantonaise",
      characteristics: "Sucré, tendre, caramélisé",
      price: "¥800-1500",
      difficulty: "Difficile",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      sauce: "Sauce laquée sucrée"
    }
  ];

  const culturalAdaptations = [
    {
      title: "Goût Japonais",
      icon: "🇯🇵",
      description: "Adaptation au palais japonais : moins épicé, plus doux",
      examples: ["Moins d'huile", "Saveurs adoucies", "Présentation soignée"]
    },
    {
      title: "Service Japonais",
      icon: "🙏",
      description: "Service à la japonaise : hospitalité et propreté",
      examples: ["Omotenashi", "Tables propres", "Service attentionné"]
    },
    {
      title: "Prix Accessibles",
      icon: "💰",
      description: "Prix familiaux pour une cuisine accessible à tous",
      examples: ["Sets économiques", "Portions généreuses", "Drink bar"]
    },
    {
      title: "Ingrédients Locaux",
      icon: "🥬",
      description: "Utilisation d'ingrédients japonais frais et locaux",
      examples: ["Légumes japonais", "Riz japonais", "Sauces adaptées"]
    },
    {
      title: "Ambiance Familiale",
      icon: "👨‍👩‍👧‍👦",
      description: "Restaurants pensés pour les familles japonaises",
      examples: ["Chaises hautes", "Menus enfants", "Ambiance calme"]
    },
    {
      title: "Rapidité",
      icon: "⚡",
      description: "Service rapide adapté au rythme de vie japonais",
      examples: ["Plats rapides", "Tickets machines", "Efficacité"]
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
            <span className="text-gray-900 font-medium">Cuisine Chinoise</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🥟</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Cuisine Chinoise
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">中華料理</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Découvrez la cuisine chinoise adaptée au goût japonais : saveurs 
                adoucies, service impeccable et prix familiaux. Des gyoza croustillants 
                aux nouilles chanpon, une fusion culinaire unique.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥300-1500
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Adapté au goût japonais
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Familial
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">La Cuisine Chinoise au Japon</h3>
              <p className="text-gray-600 mb-4">
                Les chaînes de cuisine chinoise au Japon offrent une expérience unique : 
                les saveurs chinoises authentiques sont adaptées au palais japonais, 
                créant une fusion culinaire accessible à tous.
              </p>
              <p className="text-gray-600">
                Moins épicée que l'originale chinoise, mais conservant toute sa richesse 
                aromatique, cette cuisine représente l'art japonais de l'adaptation culturelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Adaptations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            L'Adaptation Japonaise de la Cuisine Chinoise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalAdaptations.map((adaptation, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="text-3xl mb-4">{adaptation.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{adaptation.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{adaptation.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Caractéristiques :</h4>
                  <div className="space-y-1">
                    {adaptation.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="block text-xs text-gray-600">• {example}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dish Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plats Incontournables de la Cuisine Chinoise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishTypes.map((dish, index) => (
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
                    dish.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
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
                    <span className="font-semibold text-gray-900">Sauce :</span>
                    <span className="text-gray-600">{dish.sauce}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principales Chaînes de Cuisine Chinoise
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {chineseChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl">🥟</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.atmosphere}</p>
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
                        <span className="font-semibold text-gray-900">Commande : </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander dans un Restaurant Chinois
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4">🥟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Choisir l'Entrée</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gyoza = valeur sûre</li>
                <li>• 6-8 pièces par personne</li>
                <li>• Vapeur ou grillés</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Plat Principal</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fried rice = familier</li>
                <li>• Sweet & sour = populaire</li>
                <li>• Chanpon = unique</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Boissons</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Drink bar populaire</li>
                <li>• Thé oolong traditionnel</li>
                <li>• Bière chinoise disponible</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🍨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Desserts</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sesame balls populaires</li>
                <li>• Almond tofu rafraîchissant</li>
                <li>• Ice cream parfois</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Gyōza kudasai</span> <span className="japanese-text">ギョーザください</span></p>
                <p className="text-gray-600 mb-2">Des gyoza, s'il vous plaît</p>
                
                <p><span className="font-semibold">Chāhan wa arimasu ka?</span> <span className="japanese-text">チャーハンはありますか？</span></p>
                <p className="text-gray-600 mb-2">Avez-vous du fried rice ?</p>
              </div>
              <div>
                <p><span className="font-semibold">Amaku nai desu ka?</span> <span className="japanese-text">甘くないですか？</span></p>
                <p className="text-gray-600 mb-2">Ce n'est pas sucré ?</p>
                
                <p><span className="font-semibold">Karai desu ka?</span> <span className="japanese-text">辛いですか？</span></p>
                <p className="text-gray-600">C'est épicé ?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour la Cuisine Chinoise au Japon
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Moins Épicé</h3>
              <p className="text-gray-600 text-sm">
                La cuisine chinoise au Japon est adaptée au palais japonais : 
                moins épicée et plus douce que l'originale chinoise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Familial</h3>
              <p className="text-gray-600 text-sm">
                Ces restaurants sont pensés pour les familles : portions 
                généreuses, prix abordables et ambiance décontractée.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Commencez par les Gyoza</h3>
              <p className="text-gray-600 text-sm">
                Les gyoza sont un excellent point d'entrée : délicieux, 
                pas chers et appréciés de tous. Parfaits pour débuter !
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sets Économiques</h3>
              <p className="text-gray-600 text-sm">
                La plupart des chaînes proposent des sets combinant 
                plat principal + gyoza + riz, plus économiques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Drink Bar</h3>
              <p className="text-gray-600 text-sm">
                Beaucoup de restaurants chinois proposent un drink bar 
                à volonté. Excellent rapport qualité-prix pour les familles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Service Rapide</h3>
              <p className="text-gray-600 text-sm">
                Le service est généralement rapide, idéal pour un repas 
                entre amis ou en famille sans attendre longtemps.
              </p>
            </div>
          </div>
        </div>      </section>
    </div>
  );
}
