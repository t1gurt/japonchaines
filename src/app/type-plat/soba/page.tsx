import Link from "next/link";
import CategoryViewTracker from "../../../components/CategoryViewTracker";

export default function SobaPage() {
  const sobaChains = [
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
    },
    {
      name: "Yudetaro",
      japanese: "ゆで太郎",
      englishName: "Yudetaro",
      description: "Chaîne moderne de soba proposant des nouilles artisanales à prix abordables avec service rapide.",
      specialties: ["Kake Soba", "Zaru Soba", "Tempura Soba"],
      priceRange: "¥300-600",
      style: "Modern fast-casual",
      orderingMethod: "Tickets distributeur + self-service",
      vegetarianOptions: "Quelques options disponibles",
      uniqueFeatures: ["Soba fraîches", "Prix compétitifs", "Qualité artisanale"],
      href: "/chaines/yudetaro"
    },
    {
      name: "Komoro Soba",
      japanese: "小諸そば",
      englishName: "Komoro Soba",
      description: "Expérience authentique tachi-gui (manger debout) avec soba traditionnel de style Shinshu.",
      specialties: ["Mori Soba", "Tempura Soba", "Curry Nanban"],
      priceRange: "¥290-550",
      style: "Tachi-gui traditionnel",
      orderingMethod: "Tickets distributeur + comptoir debout",
      vegetarianOptions: "Limitées (bouillon traditionnel)",
      uniqueFeatures: ["Tradition Shinshu", "Tachi-gui authentique", "Ambiance rétro"],
      href: "/chaines/komoro-soba"
    }
  ];

  const sobaTypes = [
    {
      name: "Kake Soba",
      japanese: "かけそば",
      description: "Soba simple dans un bouillon dashi chaud",
      characteristics: "Simple, pur, essence du sarrasin",
      price: "¥290-400",
      difficulty: "Très facile",
      beginner: true
    },
    {
      name: "Zaru Soba",
      japanese: "ざるそば",
      description: "Soba froides servies sur bambou avec sauce à tremper",
      characteristics: "Rafraîchissant, été, texture pure",
      price: "¥400-800",
      difficulty: "Facile",
      beginner: true
    },
    {
      name: "Tempura Soba",
      japanese: "天ぷらそば",
      description: "Soba avec tempura de crevette délicate",
      characteristics: "Croustillant, copieux, classique",
      price: "¥450-700",
      difficulty: "Facile",
      beginner: true
    },
    {
      name: "Tsukimi Soba",
      japanese: "月見そば",
      description: "Soba avec œuf cru qui ressemble à la pleine lune",
      characteristics: "Poétique, riche, automnal",
      price: "¥350-550",
      difficulty: "Facile",
      beginner: false
    },
    {
      name: "Tanuki Soba",
      japanese: "たぬきそば",
      description: "Soba avec tenkasu (miettes de tempura)",
      characteristics: "Croustillant, texture, populaire",
      price: "¥320-480",
      difficulty: "Facile",
      beginner: false
    },
    {
      name: "Curry Nanban",
      japanese: "カレー南蛮",
      description: "Soba dans un bouillon curry épicé avec negi",
      characteristics: "Fusion, épicé, moderne",
      price: "¥500-750",
      difficulty: "Intermédiaire",
      beginner: false
    }
  ];

  const servingStyles = [
    {
      name: "Chaud (Atsu)",
      japanese: "温かい (あつ)",
      description: "Servi dans un bouillon dashi chaud et parfumé",
      season: "Automne/Hiver",
      temperature: "Chaud",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Froid (Zaru/Mori)",
      japanese: "冷たい (ざる・もり)",
      description: "Nouilles froides avec sauce tsuyu concentrée",
      season: "Printemps/Été",
      temperature: "Froid",
      popularity: "⭐⭐⭐⭐⭐"
    }
  ];

  const sobaQuality = [
    {
      aspect: "Sarrasin",
      japanese: "そば粉",
      description: "Grains de sarrasin moulus finement",
      importance: "Détermine le goût et l'arôme"
    },
    {
      aspect: "Technique",
      japanese: "技術",
      description: "Pétrissage, découpe et cuisson précise",
      importance: "Influence texture et qualité"
    },
    {
      aspect: "Fraîcheur",
      japanese: "新鮮さ",
      description: "Consommation rapide après préparation",
      importance: "Préserve goût et texture optimale"
    },
    {
      aspect: "Eau",
      japanese: "水",
      description: "Qualité de l'eau de préparation et cuisson",
      importance: "Affecte goût et texture finale"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="soba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-purple-600">Types de Plats</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Soba</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🌾</span>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-2">Soba</h1>
                    <p className="text-2xl text-purple-200 japanese-text">そば</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-purple-100">
                  Les nouilles fines de sarrasin, joyau de la tradition culinaire d'Edo. 
                  Élégantes, parfumées et authentiques, les soba incarnent la philosophie 
                  japonaise de simplicité et de perfection.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Prix : ¥290-800
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Tradition Edo
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Sarrasin Authentique
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Goût Raffiné
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">L'Art du Soba</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Nouilles fines de sarrasin pur
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Tradition millénaire d'Edo (Tokyo)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Goût subtil et parfumé unique
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Techniques artisanales préservées
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Expérience culturelle authentique
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction culturelle */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  L'Héritage Raffiné d'Edo
                  <span className="block text-lg text-gray-600 mt-2">江戸の洗練された遺産</span>
                </h2>
                <div className="prose prose-purple max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Le soba incarne l'<strong>âme d'Edo</strong> (ancien Tokyo) : raffinement, 
                    simplicité et recherche de la perfection dans l'épurement. Ces 
                    <strong>nouilles fines de sarrasin</strong> représentent une philosophie 
                    culinaire où moins est plus.
                  </p>
                  <p className="text-gray-700">
                    Contrairement aux udon généreux du Kansai, les soba privilégient la 
                    <strong>subtilité aromatique</strong> et la texture ferme. Le goût unique 
                    du sarrasin, légèrement amer et parfumé, se révèle pleinement dans sa simplicité.
                  </p>
                  <p className="text-gray-700">
                    La tradition du soba dépasse la simple alimentation : c'est un <strong>art de vivre</strong> 
                    qui enseigne l'appréciation des saveurs pures et la beauté de l'instant présent. 
                    Chaque slurp résonne avec des siècles de tradition.
                  </p>
                  <p className="text-gray-700">
                    Les chaînes modernes de soba perpétuent cet héritage avec respect, 
                    rendant accessible cette <strong>haute cuisine populaire</strong> 
                    dans le rythme effréné du Tokyo contemporain.
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Philosophie du Soba</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧘</span>
                    <div>
                      <p className="font-semibold text-gray-900">Simplicité (簡素)</p>
                      <p className="text-sm text-gray-600">La beauté dans la pureté</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <div>
                      <p className="font-semibold text-gray-900">Instantané (瞬間)</p>
                      <p className="text-sm text-gray-600">Savourer l'instant présent</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900">Perfection (完璧)</p>
                      <p className="text-sm text-gray-600">Excellence dans les détails</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌸</span>
                    <div>
                      <p className="font-semibold text-gray-900">Élégance (優雅)</p>
                      <p className="text-sm text-gray-600">Raffinement dans la sobriété</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualité du sarrasin */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Les Secrets du Sarrasin
              <span className="block text-lg text-gray-600 mt-2">そば粉の秘密</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {sobaQuality.map((quality, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {quality.aspect}
                  </h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">
                    {quality.japanese}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    {quality.description}
                  </p>
                  <p className="text-purple-600 text-xs font-medium">
                    {quality.importance}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Le Processus Artisanal du Soba
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌾</div>
                  <h4 className="font-bold text-gray-900 mb-2">1. Sélection</h4>
                  <p className="text-sm text-gray-600">
                    Choix minutieux du sarrasin selon la région et la saison. 
                    Chaque grain compte pour la qualité finale.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🥄</div>
                  <h4 className="font-bold text-gray-900 mb-2">2. Pétrissage</h4>
                  <p className="text-sm text-gray-600">
                    Technique ancestrale de mélange eau-farine. 
                    Le maître soba développe le gluten parfait.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🔪</div>
                  <h4 className="font-bold text-gray-900 mb-2">3. Découpe</h4>
                  <p className="text-sm text-gray-600">
                    Coupe précise en nouilles uniformes. 
                    L'épaisseur détermine la texture finale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de soba populaires */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Variétés de Soba Authentiques
              <span className="block text-lg text-gray-600 mt-2">本格そばの種類</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sobaTypes.map((type, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border ${
                  type.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}>
                  {type.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                      Recommandé débutants
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{type.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{type.japanese}</p>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Caractère :</span>
                      <span className="text-gray-600">{type.characteristics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Prix :</span>
                      <span className="text-red-600 font-medium">{type.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Difficulté :</span>
                      <span className="text-gray-600">{type.difficulty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Styles de service */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Deux Traditions de Dégustation
              <span className="block text-lg text-gray-600 mt-2">二つの食べ方の伝統</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {servingStyles.map((style, index) => (
                <div key={index} className={`rounded-xl p-8 border ${
                  style.name.includes('Chaud') ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">
                      {style.name.includes('Chaud') ? '🍜' : '🥢'}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{style.name}</h3>
                    <p className="text-gray-600 japanese-text">{style.japanese}</p>
                  </div>
                  <p className="text-gray-700 mb-4 text-center">{style.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Saison :</span>
                      <span className="text-gray-600">{style.season}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Température :</span>
                      <span className="text-gray-600">{style.temperature}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Popularité :</span>
                      <span>{style.popularity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Art de la Dégustation Soba
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🥄 Soba Froids (Zaru/Mori)</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Trempez seulement 1/3 de la nouille dans la sauce</li>
                    <li>• Aspirez énergiquement pour libérer les arômes</li>
                    <li>• Finissez par boire l'eau de cuisson (sobayu)</li>
                    <li>• Appréciez la texture ferme du sarrasin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🍜 Soba Chauds (Kake)</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Slurpez rapidement avant qu'elles ramollissent</li>
                    <li>• Le bouillon révèle des saveurs complémentaires</li>
                    <li>• Mangez d'abord les nouilles, puis le bouillon</li>
                    <li>• Savourez l'harmonie sarrasin-dashi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chaînes spécialisées */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Principales Chaînes Soba
              <span className="block text-lg text-gray-600 mt-2">主要そばチェーン</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {sobaChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                      <span className="text-purple-600 font-bold text-lg">{chain.priceRange}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{chain.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div>
                        <span className="font-semibold text-gray-900">Spécialités : </span>
                        <span className="text-gray-600 text-sm">{chain.specialties.join(", ")}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Style : </span>
                        <span className="text-gray-600 text-sm">{chain.style}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {chain.uniqueFeatures.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
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

        {/* Guide culturel */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Étiquette et Tradition Soba
              <span className="block text-lg text-gray-600 mt-2">そばの作法と伝統</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🥄</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sobayu (そば湯)</h3>
                <p className="text-gray-600 text-sm">
                  L'eau de cuisson des soba, riche en nutriments, se boit traditionnellement 
                  après le repas, mélangée au reste de sauce tsuyu.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Vitesse de Consommation</h3>
                <p className="text-gray-600 text-sm">
                  Les soba se consomment rapidement pour préserver leur texture. 
                  Cette urgence fait partie intégrante de l'expérience culinaire.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Festivals Soba</h3>
                <p className="text-gray-600 text-sm">
                  Le 31 décembre, manger des toshikoshi soba (soba de fin d'année) 
                  porte bonheur et coupe les liens avec les malheurs passés.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🏔️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Terroir & Saison</h3>
                <p className="text-gray-600 text-sm">
                  Le sarrasin varie selon les régions et saisons. Les connaisseurs 
                  apprécient ces subtiles différences de goût et texture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🧘</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Méditation Culinaire</h3>
                <p className="text-gray-600 text-sm">
                  Déguster des soba est considéré comme une forme de méditation, 
                  concentrant l'esprit sur l'instant présent et les saveurs pures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Esthétique Wabi-Sabi</h3>
                <p className="text-gray-600 text-sm">
                  La beauté des soba réside dans leur imperfection apparente : 
                  chaque nouille unique reflète la main de l'artisan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Embarquez pour un Voyage Sensoriel Authentique
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Les soba vous invitent à découvrir l'essence de la cuisine japonaise : 
              simplicité, perfection et respect de la tradition millénaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chaines/fuji-soba"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Découvrir Fuji Soba
              </Link>
              <Link 
                href="/guides/culture-etiquette"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Guide Culturel
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
