import Link from "next/link";

export default function UdonSobaPage() {
  const udonSobaChains = [
    {
      name: "Marugame Seimen",
      japanese: "丸亀製麺",
      englishName: "Marugame Seimen",
      description: "Le leader de l'udon au Japon, célèbre pour ses nouilles fraîches faites à la main devant les clients.",
      specialties: ["Kake Udon", "Tempura Udon", "Karaage Udon"],
      priceRange: "¥290-800",
      style: "Self-service, fast-casual",
      orderingMethod: "File + self-service",
      vegetarianOptions: "Options limitées (bouillon à base de poisson)",
      uniqueFeatures: ["Nouilles faites sur place", "Tempura fraîche", "Prix très abordables"],
      href: "/chaines/marugame-seimen"
    },
    {
      name: "Hanamaru Udon",
      japanese: "はなまるうどん",
      englishName: "Hanamaru Udon",
      description: "Chaîne populaire d'udon avec un excellent rapport qualité-prix et de nombreuses options de toppings.",
      specialties: ["Zaru Udon", "Curry Udon", "Niku Udon"],
      priceRange: "¥200-600",
      style: "Self-service rapide",
      orderingMethod: "File + comptoir self-service",
      vegetarianOptions: "Quelques options (attention au dashi)",
      uniqueFeatures: ["Prix mini", "Toppings variés", "Service rapide"],
      href: "/chaines/hanamaru-udon"
    },
    {
      name: "Fuji Soba",
      japanese: "富士そば",
      englishName: "Fuji Soba",
      description: "Chaîne de soba traditionnelle de Tokyo, ouverte 24h/24, populaire auprès des salarymen.",
      specialties: ["Kake Soba", "Tempura Soba", "Tsukimi Soba"],
      priceRange: "¥350-900",
      style: "Fast-food traditionnel",
      orderingMethod: "Tickets distributeur",
      vegetarianOptions: "Limitées (dashi traditionnel)",
      uniqueFeatures: ["24h/24", "Style Tokyo", "Tradition depuis 1966"],
      href: "/chaines/fuji-soba"
    }
  ];

  const noodleTypes = [
    {
      name: "Udon",
      japanese: "うどん",
      description: "Nouilles de blé épaisses et moelleuses",
      characteristics: "Épais, doux, réconfortant",
      texture: "Moelleuses et élastiques",
      origin: "Originaire de la région du Kansai",
      price: "¥200-800",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Soba",
      japanese: "そば",
      description: "Nouilles de sarrasin fines et parfumées",
      characteristics: "Fin, parfumé, rustique",
      texture: "Fermes avec goût de sarrasin",
      origin: "Tradition d'Edo (Tokyo)",
      price: "¥350-1200",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    }
  ];

  const popularDishes = [
    {
      name: "Kake Udon/Soba",
      japanese: "かけうどん・そば",
      description: "Version la plus simple avec bouillon chaud et garnish minimal",
      characteristics: "Simple, pur, économique",
      price: "¥200-400",
      difficulty: "Très facile",
      beginner: true
    },
    {
      name: "Tempura Udon/Soba",
      japanese: "天ぷらうどん・そば",
      description: "Avec tempura de crevette sur le dessus",
      characteristics: "Croustillant, copieux, populaire",
      price: "¥450-700",
      difficulty: "Facile",
      beginner: true
    },
    {
      name: "Zaru Soba",
      japanese: "ざるそば",
      description: "Soba froides servies sur bambou avec sauce à tremper",
      characteristics: "Rafraîchissant, été, traditionnel",
      price: "¥400-800",
      difficulty: "Facile",
      beginner: true
    },
    {
      name: "Curry Udon",
      japanese: "カレーうどん",
      description: "Udon dans un bouillon curry épais",
      characteristics: "Fusion, copieux, original",
      price: "¥500-800",
      difficulty: "Facile",
      beginner: false
    },
    {
      name: "Tsukimi Udon/Soba",
      japanese: "月見うどん・そば",
      description: "Avec un œuf cru qui ressemble à la pleine lune",
      characteristics: "Poétique, riche, traditionnel",
      price: "¥350-550",
      difficulty: "Facile",
      beginner: false
    },
    {
      name: "Niku Udon/Soba",
      japanese: "肉うどん・そば",
      description: "Avec viande de bœuf mijotée",
      characteristics: "Protéiné, savoureux, consistant",
      price: "¥500-900",
      difficulty: "Facile",
      beginner: false
    }
  ];

  const servingStyles = [
    {
      name: "Chaud (Kake)",
      japanese: "温かい (かけ)",
      description: "Servi dans un bouillon chaud",
      season: "Automne/Hiver",
      temperature: "Chaud",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Froid (Zaru)",
      japanese: "冷たい (ざる)",
      description: "Nouilles froides avec sauce à tremper",
      season: "Printemps/Été",
      temperature: "Froid",
      popularity: "⭐⭐⭐⭐"
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
            <span className="text-gray-900 font-medium">Udon & Soba</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍲</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Udon & Soba
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">うどん・そば</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Les deux stars des nouilles japonaises : udon épaisses et moelleuses, 
                soba fines au sarrasin. Chaudes ou froides, elles offrent réconfort 
                et authenticité à petit prix.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥200-1200
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tradition ancestrale
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Repas rapide
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L'Art des Nouilles Japonaises</h3>
              <p className="text-gray-600 mb-4">
                L'udon et le soba représentent deux traditions culinaires distinctes du Japon. 
                L'udon, originaire du Kansai, privilégie la texture moelleuse, tandis que 
                le soba d'Edo (Tokyo) met en avant le goût subtil du sarrasin.
              </p>
              <p className="text-gray-600">
                Ces nouilles se dégustent chaudes en hiver dans un bouillon réconfortant, 
                ou froides en été avec une sauce à tremper rafraîchissante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Udon vs Soba */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Udon vs Soba : Deux Univers de Saveurs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {noodleTypes.map((noodle, index) => (
              <div key={index} className={`rounded-xl p-8 border ${
                noodle.name === 'Udon' ? 'bg-blue-50 border-blue-200' : 'bg-purple-50 border-purple-200'
              }`}>
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">🍲</span>
                  <h3 className="text-2xl font-bold text-gray-900">{noodle.name}</h3>
                  <p className="text-gray-600 japanese-text">{noodle.japanese}</p>
                </div>
                <p className="text-gray-700 mb-4">{noodle.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Caractère :</span>
                    <span className="text-gray-600">{noodle.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Texture :</span>
                    <span className="text-gray-600">{noodle.texture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Origine :</span>
                    <span className="text-gray-600">{noodle.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{noodle.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{noodle.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plats Populaires à Essayer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((dish, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                dish.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                {dish.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Recommandé débutants
                  </span>
                )}
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
                    <span className="font-semibold text-gray-900">Difficulté :</span>
                    <span className="text-gray-600">{dish.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Deux Façons de Déguster
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {servingStyles.map((style, index) => (
              <div key={index} className={`rounded-xl p-8 border ${
                style.temperature === 'Chaud' ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'
              }`}>
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{style.temperature === 'Chaud' ? '🔥' : '❄️'}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{style.name}</h3>
                  <p className="text-gray-600 japanese-text">{style.japanese}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{style.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Saison :</span>
                    <span className="text-gray-600">{style.season}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{style.popularity}</span>
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
            Principales Chaînes Udon & Soba
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {udonSobaChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 text-xl">🍲</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.englishName}</p>
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
                    <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
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
            Comment Commander Udon et Soba
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Méthode</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Marugame = File d'attente</li>
                <li>• Fuji Soba = Distributeur tickets</li>
                <li>• Hanamaru = Self-service</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">🍲</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Type de Nouilles</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Udon = épaisses, moelleuses</li>
                <li>• Soba = fines, parfumées</li>
                <li>• Commencez par Kake (simple)</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🌡️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Température</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chaud (kake) = bouillon</li>
                <li>• Froid (zaru) = sauce à tremper</li>
                <li>• Été = froid, Hiver = chaud</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">➕</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Toppings</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tempura = +¥200-400</li>
                <li>• Œuf (tamago) = +¥80-120</li>
                <li>• Viande (niku) = +¥200-300</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Kake udon kudasai</span> <span className="japanese-text">かけうどんください</span></p>
                <p className="text-gray-600 mb-2">Un udon simple, s'il vous plaît</p>
                
                <p><span className="font-semibold">Zaru soba onegaishimasu</span> <span className="japanese-text">ざるそばお願いします</span></p>
                <p className="text-gray-600 mb-2">Des soba froides, s'il vous plaît</p>
              </div>
              <div>
                <p><span className="font-semibold">Tempura tsukemasu ka?</span> <span className="japanese-text">天ぷらつけますか？</span></p>
                <p className="text-gray-600 mb-2">Puis-je ajouter de la tempura ?</p>
                
                <p><span className="font-semibold">Ōmori dekimasu ka?</span> <span className="japanese-text">大盛りできますか？</span></p>
                <p className="text-gray-600">Pouvez-vous faire une grande portion ?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Apprécier Udon et Soba
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technique de Dégustation</h3>
              <p className="text-gray-600 text-sm">
                Pour les soba froides, trempez seulement 1/3 de la nouille dans la sauce. 
                Pour les nouilles chaudes, slurpez bruyamment - c'est bon signe !
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Rapport Qualité-Prix</h3>
              <p className="text-gray-600 text-sm">
                Les chaînes offrent un excellent rapport qualité-prix. Un repas complet 
                coûte souvent moins cher qu'un sandwich en France !
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Options Végétariennes</h3>
              <p className="text-gray-600 text-sm">
                Attention : la plupart des bouillons contiennent du dashi (poisson). 
                Demandez "yasai dake" (légumes seulement) pour plus de sûreté.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Timing</h3>
              <p className="text-gray-600 text-sm">
                Les chaînes d'udon/soba sont parfaites pour un repas rapide entre 
                visites. Service généralement très rapide (5-10 minutes).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Finir le Bouillon</h3>
              <p className="text-gray-600 text-sm">
                Il est normal de boire le bouillon directement du bol. Certains 
                restaurants offrent même de l'eau chaude pour diluer la sauce soba restante.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Toppings Populaires</h3>
              <p className="text-gray-600 text-sm">
                Tempura, œuf mollet (onsen tamago), et negi (oignons verts) sont les 
                ajouts les plus populaires. N'hésitez pas à personnaliser !
              </p>
            </div>
          </div>
        </div>      </section>
    </div>
  );
}
