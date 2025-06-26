import Link from "next/link";

export default function YakinikuPage() {
  const yakinikuChains = [
    {
      name: "Gyukaku",
      japanese: "牛角",
      englishName: "Gyukaku",
      description: "Chaîne de yakiniku haut de gamme proposant des viandes de qualité premium dans une ambiance moderne et conviviale.",
      specialties: ["Kalbi Premium", "Harami Selection", "Gyukaku Special Course", "All-you-can-eat"],
      priceRange: "¥2000-4000",
      style: "Yakiniku moderne haut de gamme",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Légumes grillés, salade, accompagnements",
      uniqueFeatures: ["Viandes premium", "Formules à volonté", "Ambiance moderne"],
      cuisine: "Yakiniku/BBQ Japonais",
      href: "/chaines/gyukaku"
    },
    {
      name: "Anan",
      japanese: "安安",
      englishName: "Anan",
      description: "Yakiniku abordable au charbon de bois authentique avec le concept '安くて旨い' (bon marché et délicieux).",
      specialties: ["Shichirin au charbon", "Kalbi abordable", "Formules à volonté", "Ambiance populaire"],
      priceRange: "¥1500-2500",
      style: "Yakiniku traditionnel accessible",
      orderingMethod: "Menu papier simple + grill au charbon",
      vegetarianOptions: "Légumes de saison, kimchi, accompagnements coréens",
      uniqueFeatures: ["Prix accessibles", "Charbon de bois traditionnel", "Ambiance décontractée"],
      cuisine: "Yakiniku/BBQ Japonais",
      href: "/chaines/anan"
    }
  ];

  const menuCategories = [
    {
      name: "Kalbi (갈비)",
      description: "Côtes de bœuf marinées",
      items: ["Kalbi Premium", "Kalbi Harami", "Kalbi Spécial"]
    },
    {
      name: "Harami (ハラミ)",
      description: "Onglet de bœuf tendre",
      items: ["Harami Selection", "Harami Premium", "Harami Sauce"]
    },
    {
      name: "Formules",
      description: "Menu complets et à volonté",
      items: ["Course Premium", "All-you-can-eat", "Family Set"]
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
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Types de Plat</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-red-600 font-medium">Yakiniku</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🥩</span>
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl">🍖</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Yakiniku
          </h1>
          <p className="text-2xl mb-4 text-red-100 japanese-text">焼肉</p>
          <p className="text-xl mb-8 text-red-100">
            Barbecue Japonais - L'Art du Grillé à Table
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Culture Yakiniku</h2>
            <p className="text-lg text-red-200">
              Plus qu'un simple repas, le yakiniku est une expérience sociale 
              authentique où la convivialité se mêle au plaisir de griller 
              soi-même des viandes de qualité exceptionnelle.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Grillé à Table
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Viandes Premium
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Expérience Conviviale
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              🔥 L'Univers du Yakiniku
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Le yakiniku incarne l'essence de la convivialité japonaise. Dans ces 
                restaurants spécialisés, chaque table dispose de son propre grill pour 
                cuire viandes et légumes selon ses préférences.
              </p>
              <p className="text-lg text-gray-700">
                Découvrez cette tradition culinaire où la qualité des ingrédients 
                rencontre l'art du partage dans une atmosphère détendue et chaleureuse.
              </p>
            </div>
          </div>

          {/* Chaînes de Yakiniku */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥩 Chaînes de Yakiniku au Japon
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {yakinikuChains.map((chain, index) => (
                <Link key={index} href={chain.href}>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">🥩</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-sm text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🔥 Spécialités Premium</h4>
                        <p className="text-sm text-gray-700">
                          {chain.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-3">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">Spécialités:</h5>
                          <div className="text-xs text-gray-600">
                            {chain.specialties.slice(0, 2).map((specialty, i) => (
                              <div key={i}>• {specialty}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">Prix moyen:</h5>
                          <div className="text-xs text-gray-600">{chain.priceRange}</div>
                          <h5 className="font-semibold text-gray-800 mb-1 mt-2">Style:</h5>
                          <div className="text-xs text-gray-600">{chain.style}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-red-200">
                      <p className="text-xs text-gray-600">
                        <strong>Caractéristiques:</strong> {chain.uniqueFeatures.join(", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Types de Viandes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🍖 Types de Viandes Yakiniku
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {menuCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Culture Yakiniku */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏮 La Culture Yakiniku
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🔥 Expérience Grill</h3>
                <p className="text-gray-700 mb-4">
                  Chaque table possède son propre grill intégré. Les convives 
                  cuisent eux-mêmes leurs morceaux de viande selon leurs préférences.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• <strong>Grill personnel</strong> à chaque table</div>
                  <div>• <strong>Cuisson maîtrisée</strong> par le client</div>
                  <div>• <strong>Interaction sociale</strong> autour du grill</div>
                  <div>• <strong>Rythme libre</strong> et détendu</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🥩 Qualité Premium</h3>
                <p className="text-gray-700 mb-4">
                  Les restaurants yakiniku sélectionnent rigoureusement leurs viandes, 
                  privilégiant la qualité et la fraîcheur pour une expérience gustative optimale.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• <strong>Bœuf wagyu</strong> de qualité supérieure</div>
                  <div>• <strong>Découpes spécialisées</strong> (kalbi, harami)</div>
                  <div>• <strong>Marinades artisanales</strong></div>
                  <div>• <strong>Fraîcheur garantie</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Guide Pratique */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📋 Guide Pratique du Yakiniku
            </h2>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Comment Commander</h3>
                  <ol className="text-gray-700 space-y-2">
                    <li>1. <strong>Choisir sa formule</strong> : à la carte ou à volonté</li>
                    <li>2. <strong>Sélectionner les viandes</strong> selon vos préférences</li>
                    <li>3. <strong>Commander les accompagnements</strong> (riz, salade, kimchi)</li>
                    <li>4. <strong>Demander les sauces</strong> et condiments</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🔥 Conseils de Cuisson</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Viandes fines</strong> : cuisson rapide (30-60 secondes)</li>
                    <li>• <strong>Viandes épaisses</strong> : cuisson plus longue</li>
                    <li>• <strong>Retourner une seule fois</strong> pour préserver les jus</li>
                    <li>• <strong>Attention aux flammes</strong> : éviter les surcuissons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
