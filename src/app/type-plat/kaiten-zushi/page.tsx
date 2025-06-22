import Link from "next/link";

export default function KaitenZushiPage() {
  const sushiChains = [
    {
      name: "Sushiro",
      japanese: "スシロー",
      description: "Le leader du marché japonais avec plus de 600 restaurants. Connu pour sa qualité constante et ses prix abordables.",
      specialties: ["Sushi traditionnel", "Sushi créatif", "Desserts japonais"],
      priceRange: "¥100-300 par assiette",
      orderingMethod: "Tapis roulant + commande par tablette",
      vegetarianOptions: "Options limitées (inari, concombre)",
      uniqueFeatures: ["Système de réservation", "Menu saisonnier", "Desserts variés"],
      href: "/chaines/sushiro"
    },
    {
      name: "Kura Sushi",
      japanese: "くら寿司",
      description: "Pionnier du concept 'sans additifs' avec un système unique de capsules-récompenses pour les assiettes vides.",
      specialties: ["Sushi sans additifs", "Système Bikkura-Pon", "Menu varié"],
      priceRange: "¥100-500 par assiette",
      orderingMethod: "Tapis roulant + commande par écran tactile",
      vegetarianOptions: "Quelques options végétariennes",
      uniqueFeatures: ["Jeu Bikkura-Pon", "Sans additifs", "Produits bio"],
      href: "/chaines/kura-sushi"
    },
    {
      name: "Hama Sushi",
      japanese: "はま寿司",
      description: "Chaîne du groupe Zensho offrant un excellent rapport qualité-prix avec des innovations constantes.",
      specialties: ["Sushi abordable", "Menu fusion", "Ramen et plats chauds"],
      priceRange: "¥100-250 par assiette",
      orderingMethod: "Commande par tablette principalement",
      vegetarianOptions: "Options végétariennes disponibles",
      uniqueFeatures: ["Prix très compétitifs", "Menu non-sushi étendu", "Service rapide"],
      href: "/chaines/hama-sushi"
    }
  ];

  const plateColors = [
    {
      color: "Jaune",
      japanese: "黄色",
      price: "¥100-120",
      description: "Sushi d'entrée de gamme, parfaits pour découvrir"
    },
    {
      color: "Rouge",
      japanese: "赤",
      price: "¥150-180",
      description: "Sushi populaires de qualité standard"
    },
    {
      color: "Noir",
      japanese: "黒",
      price: "¥200-250",
      description: "Sushi premium avec des ingrédients de qualité"
    },
    {
      color: "Argent",
      japanese: "銀",
      price: "¥300-400",
      description: "Sushi haut de gamme et spécialités saisonnières"
    },
    {
      color: "Or",
      japanese: "金",
      price: "¥500+",
      description: "Sushi d'exception avec des ingrédients rares"
    }
  ];

  const popularSushi = [
    {
      name: "Maguro",
      japanese: "まぐろ",
      french: "Thon Rouge",
      description: "Le sushi le plus populaire au Japon. Chair rouge tendre et savoureuse.",
      price: "¥100-200",
      beginner: true
    },
    {
      name: "Salmon",
      japanese: "サーモン",
      french: "Saumon",
      description: "Très apprécié des débutants. Goût doux et texture fondante.",
      price: "¥100-150",
      beginner: true
    },
    {
      name: "Ebi",
      japanese: "えび",
      french: "Crevette",
      description: "Crevette cuite, douce et légèrement sucrée. Idéal pour les enfants.",
      price: "¥100-150",
      beginner: true
    },
    {
      name: "Tamago",
      japanese: "たまご",
      french: "Omelette Sucrée",
      description: "Omelette japonaise sucrée. Option parfaite pour les végétariens.",
      price: "¥100-120",
      beginner: true
    },
    {
      name: "Ika",
      japanese: "いか",
      french: "Calmar",
      description: "Texture unique et goût délicat. Populaire au Japon.",
      price: "¥120-180",
      beginner: false
    },
    {
      name: "Uni",
      japanese: "うに",
      french: "Oursin",
      description: "Délicatesse japonaise au goût iodé intense. Pour les connaisseurs.",
      price: "¥300-500",
      beginner: false
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
            <span className="text-gray-900 font-medium">Kaiten-zushi</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍣</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Kaiten-zushi
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">回転寿司</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                L'expérience sushi la plus accessible du Japon. Des sushi frais qui défilent 
                devant vous sur un tapis roulant, à des prix abordables.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥100-500 par assiette
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Familial
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Accessible
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L'Innovation Kaiten-zushi</h3>
              <p className="text-gray-600 mb-4">
                Inventé en 1958 par Yoshiaki Shiraishi, le concept de kaiten-zushi (sushi tournant) 
                a révolutionné l'accès aux sushi en les rendant abordables et conviviaux.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, ces restaurants combinent tradition et technologie avec des systèmes 
                de commande par tablette, tout en conservant le charme du tapis roulant original.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plate Color System */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Système de Prix par Couleur d'Assiette
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {plateColors.map((plate, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full border-4 shadow-lg ${
                  plate.color === 'Jaune' ? 'bg-yellow-400 border-yellow-500' :
                  plate.color === 'Rouge' ? 'bg-red-400 border-red-500' :
                  plate.color === 'Noir' ? 'bg-gray-800 border-gray-900' :
                  plate.color === 'Argent' ? 'bg-gray-300 border-gray-400' :
                  'bg-yellow-300 border-yellow-400'
                }`}></div>
                <h3 className="font-bold text-gray-900 mb-1">{plate.color}</h3>
                <p className="text-sm text-gray-600 japanese-text mb-2">{plate.japanese}</p>
                <p className="font-semibold text-red-600 mb-2">{plate.price}</p>
                <p className="text-xs text-gray-500">{plate.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-xl">
            <h4 className="font-bold text-blue-900 mb-2">💡 Conseil pratique</h4>
            <p className="text-blue-700 text-sm">
              Les couleurs peuvent varier selon les chaînes, mais le principe reste le même : 
              plus la couleur est "précieuse", plus le prix est élevé. Vérifiez toujours le 
              tableau des prix affiché dans le restaurant.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Sushi Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide des Sushi Populaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSushi.map((sushi, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border ${
                sushi.beginner ? 'border-green-200' : 'border-gray-200'
              }`}>
                {sushi.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Débutant-friendly
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{sushi.french}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span className="japanese-text">{sushi.japanese}</span>
                  <span className="italic">{sushi.name}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{sushi.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-red-600">{sushi.price}</span>
                  {sushi.beginner && (
                    <span className="text-green-600 text-xs">👍 Recommandé</span>
                  )}
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
            Principales Chaînes de Kaiten-zushi
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {sushiChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 text-xl">🍣</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
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
                        <span className="font-semibold text-gray-900">Commande : </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Eat Guide */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide Pratique du Kaiten-zushi
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🚪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Entrée</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Attendez d'être placé par le personnel</li>
                <li>• Prenez place au comptoir ou en table</li>
                <li>• Récupérez votre tablette de commande</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍽️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Commande</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prenez les assiettes qui passent</li>
                <li>• Ou commandez via la tablette</li>
                <li>• Empilez vos assiettes vides</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Dégustation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mangez en une bouchée si possible</li>
                <li>• Trempez légèrement dans la sauce soja</li>
                <li>• Le gingembre nettoie le palais</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Paiement</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Le personnel compte vos assiettes</li>
                <li>• Payez selon les couleurs</li>
                <li>• Cartes IC acceptées</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Sumimasen</span> <span className="japanese-text">すみません</span></p>
                <p className="text-gray-600 mb-2">Excusez-moi (pour appeler le personnel)</p>
                
                <p><span className="font-semibold">Kore wa nan desu ka?</span> <span className="japanese-text">これは何ですか？</span></p>
                <p className="text-gray-600 mb-2">Qu'est-ce que c'est ?</p>
              </div>
              <div>
                <p><span className="font-semibold">Okaikei onegaishimasu</span> <span className="japanese-text">お会計お願いします</span></p>
                <p className="text-gray-600 mb-2">L'addition, s'il vous plaît</p>
                
                <p><span className="font-semibold">Gochisousama</span> <span className="japanese-text">ごちそうさま</span></p>
                <p className="text-gray-600">Merci pour le repas (en partant)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Chain Japanese Restaurants</h4>
              <p className="text-gray-400 text-sm">
                Votre guide français complet pour les chaînes de restaurants japonais.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Types de Sushi</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="hover:text-white">Maguro (Thon)</span></li>
                <li><span className="hover:text-white">Salmon (Saumon)</span></li>
                <li><span className="hover:text-white">Ebi (Crevette)</span></li>
                <li><span className="hover:text-white">Tamago (Omelette)</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Chaînes Kaiten-zushi</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/chaines/sushiro" className="hover:text-white">Sushiro</Link></li>
                <li><Link href="/chaines/kura-sushi" className="hover:text-white">Kura Sushi</Link></li>
                <li><Link href="/chaines/hama-sushi" className="hover:text-white">Hama Sushi</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Guides</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/guides/commander" className="hover:text-white">Comment Commander</Link></li>
                <li><Link href="/guides/regimes" className="hover:text-white">Régimes Alimentaires</Link></li>
                <li><Link href="/guides/culture" className="hover:text-white">Culture & Étiquette</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Chain Japanese Restaurants. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
