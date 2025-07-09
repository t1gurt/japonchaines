import Link from "next/link";

export default function BurgersJaponaisPage() {
  const burgerChains = [
    {
      name: "Dom Dom Burger",
      japanese: "ドムドムバーガー",
      englishName: "Dom Dom Burger",
      description: "Le tout premier burger japonais (1970), phénix légendaire ressuscité avec des créations virales uniques et l'esprit authentique du Japon.",
      specialties: ["Burger Crabe entier", "Amakara Chicken", "Omelette épaisse", "Okonomiyaki Burger"],
      priceRange: "¥400-900",
      style: "Authentique & créatif",
      orderingMethod: "Comptoir traditionnel",
      vegetarianOptions: "Options créatives disponibles",
      uniqueFeatures: ["Premier burger japonais", "Créations virales", "Culture \"wabi-sabi\""],
      origin: "Japonaise (1970)",
      href: "/chaines/domdom"
    },
    {
      name: "MOS Burger",
      japanese: "モスバーガー",
      englishName: "MOS Burger",
      description: "Chaîne japonaise premium de burgers, célèbre pour ses ingrédients frais et ses créations uniques comme le Rice Burger.",
      specialties: ["Rice Burger", "MOS Burger", "Ebi (Crevette) Burger"],
      priceRange: "¥300-800",
      style: "Premium japonais",
      orderingMethod: "Comptoir + attente assise",
      vegetarianOptions: "Options végétariennes disponibles",
      uniqueFeatures: ["Pain de riz", "Ingrédients frais", "Made to order"],
      origin: "Japonaise (1972)",
      href: "/chaines/mos-burger"
    },
    {
      name: "Freshness Burger",
      japanese: "フレッシュネスバーガー",
      englishName: "Freshness Burger",
      description: "Chaîne haut de gamme axée sur la fraîcheur, proposant des burgers gourmet dans un cadre moderne et stylé.",
      specialties: ["Avocado Burger", "Gourmet Chicken", "Onion Rings"],
      priceRange: "¥400-1200",
      style: "Gourmet moderne",
      orderingMethod: "Comptoir + service à table",
      vegetarianOptions: "Excellentes options végétariennes",
      uniqueFeatures: ["Gourmet quality", "Décor branché", "Avocado focus"],
      origin: "Japonaise (1992)",
      href: "/chaines/freshness-burger"
    },
    {
      name: "Lotteria",
      japanese: "ロッテリア",
      englishName: "Lotteria",
      description: "Chaîne de fast-food style coréen-japonais, connue pour ses burgers créatifs et ses prix compétitifs.",
      specialties: ["Shrimp Burger", "Tower Cheeseburger", "Chicken Burger"],
      priceRange: "¥200-600",
      style: "Fast-food accessible",
      orderingMethod: "Comptoir fast-food",
      vegetarianOptions: "Options limitées",
      uniqueFeatures: ["Prix bas", "Portions généreuses", "Style coréen"],
      origin: "Coréenne (1972)",
      href: "/chaines/lotteria"
    }
  ];

  const burgerTypes = [
    {
      name: "Rice Burger",
      japanese: "ライスバーガー",
      description: "Pain remplacé par du riz pressé, invention japonaise unique",
      characteristics: "Innovant, sans gluten, authentiquement japonais",
      price: "¥300-500",
      availability: "MOS Burger uniquement",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      unique: true
    },
    {
      name: "Ebi Burger",
      japanese: "エビバーガー",
      description: "Burger aux crevettes tempura, spécialité japonaise",
      characteristics: "Croustillant, marin, typiquement japonais",
      price: "¥400-600",
      availability: "Plusieurs chaînes",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      unique: true
    },
    {
      name: "Avocado Burger",
      japanese: "アボカドバーガー",
      description: "Burger avec avocat frais, très populaire au Japon",
      characteristics: "Frais, sain, crémeux",
      price: "¥500-800",
      availability: "Freshness Burger",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      unique: false
    },
    {
      name: "Teriyaki Burger",
      japanese: "照り焼きバーガー",
      description: "Burger avec sauce teriyaki japonaise",
      characteristics: "Sucré-salé, familier, japonais",
      price: "¥350-550",
      availability: "Toutes chaînes",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      unique: false
    },
    {
      name: "Katsu Burger",
      japanese: "カツバーガー",
      description: "Burger avec escalope panée japonaise",
      characteristics: "Croustillant, copieux, fusion",
      price: "¥400-700",
      availability: "Plusieurs chaînes",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      unique: true
    },
    {
      name: "Fish Burger",
      japanese: "フィッシュバーガー",
      description: "Burger au poisson, très populaire au Japon",
      characteristics: "Léger, savoureux, sain",
      price: "¥300-500",
      availability: "Toutes chaînes",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      unique: false
    }
  ];

  const japaneseFeatures = [
    {
      title: "Ingrédients Uniques",
      icon: "🍚",
      description: "Pain de riz, sauce teriyaki, crevettes tempura",
      examples: ["Rice Burger", "Ebi Fry", "Teriyaki Sauce"]
    },
    {
      title: "Qualité Premium",
      icon: "⭐",
      description: "Ingrédients plus frais, préparation à la commande",
      examples: ["Légumes locaux", "Made to order", "Présentation soignée"]
    },
    {
      title: "Tailles Adaptées",
      icon: "📏",
      description: "Portions adaptées au marché japonais, moins imposantes",
      examples: ["Single size", "Portions équilibrées", "Pas de Super Size"]
    },
    {
      title: "Service Japonais",
      icon: "🙏",
      description: "Hospitalité, propreté et attention aux détails",
      examples: ["Omotenashi", "Service attentionné", "Plateau en porcelaine"]
    },
    {
      title: "Innovations Locales",
      icon: "💡",
      description: "Adaptations créatives pour le goût japonais",
      examples: ["Wasabi Mayo", "Nori Burger", "Matcha Shake"]
    },
    {
      title: "Ambiance Différente",
      icon: "🏪",
      description: "Décor plus raffiné que les chaînes américaines",
      examples: ["Design moderne", "Musique douce", "Éclairage tamisé"]
    }
  ];

  const vsAmericanChains = [
    {
      aspect: "Taille des Portions",
      japanese: "Plus petites, équilibrées",
      american: "Grandes, XXL options",
      advantage: "Moins de gaspillage"
    },
    {
      aspect: "Ingrédients",
      japanese: "Locaux, adaptés au goût japonais",
      american: "Standardisés mondialement",
      advantage: "Authenticité locale"
    },
    {
      aspect: "Service",
      japanese: "À table, hospitalité japonaise",
      american: "Rapide, efficace",
      advantage: "Expérience premium"
    },
    {
      aspect: "Prix",
      japanese: "¥300-800 (premium)",
      american: "¥200-600 (volume)",
      advantage: "Rapport qualité-prix"
    },
    {
      aspect: "Innovation",
      japanese: "Adaptations créatives locales",
      american: "Standardisation globale",
      advantage: "Découverte culinaire"
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
            <span className="text-gray-900 font-medium">Burgers Japonais</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍔</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Burgers Japonais
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">日本のハンバーガー</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Découvrez l'art japonais du burger : ingrédients premium, innovations 
                créatives comme le Rice Burger, et un service raffiné qui transforme 
                le fast-food en expérience culinaire. Du pionnier Sasebo Burger des années 1950 
                aux créations Wagyu contemporaines, explorez une révolution gastronomique unique.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥200-1200
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Innovation japonaise
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Qualité premium
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">La Révolution Burger Japonaise</h3>
              <p className="text-gray-600 mb-4">
                Les chaînes japonaises ont réinventé le burger en y apportant leur 
                philosophie culinaire : ingrédients frais, préparation soignée et 
                innovations surprenantes comme le fameux Rice Burger de MOS.
              </p>
              <p className="text-gray-600">
                Plus qu'un simple fast-food, ces restaurants offrent une expérience 
                gastronomique accessible, alliant tradition japonaise et influence américaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce qui Rend les Burgers Japonais Uniques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {japaneseFeatures.map((feature, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Exemples :</h4>
                  <div className="space-y-1">
                    {feature.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="block text-xs text-gray-600">• {example}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burger Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types de Burgers à Découvrir
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgerTypes.map((burger, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                burger.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  {burger.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Recommandé débutants
                    </span>
                  )}
                  {burger.unique && (
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      Uniquement au Japon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{burger.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{burger.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{burger.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Caractère :</span>
                    <span className="text-gray-600">{burger.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{burger.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Disponibilité :</span>
                    <span className="text-gray-600">{burger.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{burger.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Japanese vs American Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Chaînes Japonaises vs Américaines
          </h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-red-600">Chaînes Japonaises</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-600">Chaînes Américaines</th>
                    <th className="text-left py-3 px-4 font-semibold text-green-600">Avantage Japonais</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAmericanChains.map((comparison, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold text-gray-900">{comparison.aspect}</td>
                      <td className="py-3 px-4 text-red-700">{comparison.japanese}</td>
                      <td className="py-3 px-4 text-blue-700">{comparison.american}</td>
                      <td className="py-3 px-4 text-green-700">{comparison.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principales Chaînes de Burgers Japonais
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {burgerChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl">🍔</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.origin}</p>
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
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander dans une Chaîne de Burgers Japonaise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4">🍔</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Choisir le Burger</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Commencez par les classiques</li>
                <li>• Essayez les spécialités japonaises</li>
                <li>• Rice Burger = experience unique</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🍟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Set ou Single</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Set = burger + frites + boisson</li>
                <li>• Single = burger seulement</li>
                <li>• Sets plus économiques</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Boissons</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Soft drinks standards</li>
                <li>• Café de qualité supérieure</li>
                <li>• Parfois thé japonais</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🍰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Desserts</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Soft cream excellent</li>
                <li>• Parfois matcha flavors</li>
                <li>• Apple pie japonais</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Raisu bāgā kudasai</span> <span className="japanese-text">ライスバーガーください</span></p>
                <p className="text-gray-600 mb-2">Un Rice Burger, s'il vous plaît</p>
                
                <p><span className="font-semibold">Setto ni dekimasu ka?</span> <span className="japanese-text">セットにできますか？</span></p>
                <p className="text-gray-600 mb-2">Pouvez-vous en faire un set ?</p>
              </div>
              <div>
                <p><span className="font-semibold">Osusume wa nan desu ka?</span> <span className="japanese-text">おすすめは何ですか？</span></p>
                <p className="text-gray-600 mb-2">Que recommandez-vous ?</p>
                
                <p><span className="font-semibold">Kore wa nani desu ka?</span> <span className="japanese-text">これは何ですか？</span></p>
                <p className="text-gray-600">Qu'est-ce que c'est ?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour les Burgers Japonais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Essayez le Rice Burger</h3>
              <p className="text-gray-600 text-sm">
                Expérience unique au monde, le Rice Burger de MOS remplace le pain 
                par du riz pressé. Parfait pour les intolérants au gluten !
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Préparation sur Commande</h3>
              <p className="text-gray-600 text-sm">
                Contrairement au fast-food classique, les burgers sont souvent 
                préparés à la commande. Comptez 5-10 minutes d'attente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Rapport Qualité-Prix</h3>
              <p className="text-gray-600 text-sm">
                Bien que plus cher que McDonald's, la qualité justifie le prix. 
                Les sets offrent une meilleure valeur que les items individuels.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Options Végétariennes</h3>
              <p className="text-gray-600 text-sm">
                MOS et Freshness offrent d'excellentes options végétariennes, 
                notamment l'Avocado Burger et les burgers aux légumes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Frites Différentes</h3>
              <p className="text-gray-600 text-sm">
                Les frites japonaises sont souvent moins salées et parfois 
                assaisonnées différemment. Onion rings très populaires.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Spécialités Saisonnières</h3>
              <p className="text-gray-600 text-sm">
                Les chaînes japonaises proposent régulièrement des burgers 
                saisonniers limités avec des ingrédients uniques.
              </p>
            </div>
          </div>
        </div>      </section>

      {/* Articles de Fond Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Approfondissez Votre Connaissance des Burgers Japonais
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/guides/articles/revolution-burger-japonais"
              className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-3">🍔⚡</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  La Révolution Burger Japonaise
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Du fast-food américain à la gastronomie nippone : histoire complète de la transformation 
                du hamburger au Japon, du Rice Burger aux créations Wagyu.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-red-600 font-medium">Lire l'article →</span>
                <span className="text-gray-500">15 min</span>
              </div>
            </Link>

            <Link 
              href="/guides/articles/gotochiburger-voyage"
              className="group bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-3">🗾🎌</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Tour du Japon en Gotōchi Burgers
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Découvrez les spécialités régionales : du Sasebo Burger historique aux créations 
                marines de Suruga Bay, chaque région a son burger unique.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-600 font-medium">Explorer les régions →</span>
                <span className="text-gray-500">12 min</span>
              </div>
            </Link>

            <Link 
              href="/guides/articles/culture-consommation-burger"
              className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-3">📸✨</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  Kikan Gentei & Moe-dan
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Analysez les phénomènes culturels japonais : période limitée et esthétique de la coupe 
                qui révolutionnent la consommation moderne.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-600 font-medium">Découvrir la culture →</span>
                <span className="text-gray-500">14 min</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/guides/articles"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Voir tous les articles de fond
              <span className="ml-2">📚</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
