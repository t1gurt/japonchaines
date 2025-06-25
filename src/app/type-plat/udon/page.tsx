import Link from "next/link";
import CategoryViewTracker from "../../../components/CategoryViewTracker";

export default function UdonPage() {
  const udonChains = [
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
    }
  ];

  const udonTypes = [
    {
      name: "Kake Udon",
      japanese: "かけうどん",
      description: "Udon simple dans un bouillon dashi chaud",
      characteristics: "Simple, pur, économique",
      price: "¥200-400",
      difficulty: "Très facile",
      beginner: true
    },
    {
      name: "Tempura Udon",
      japanese: "天ぷらうどん",
      description: "Udon avec tempura de crevette croustillante",
      characteristics: "Croustillant, copieux, populaire",
      price: "¥450-700",
      difficulty: "Facile",
      beginner: true
    },
    {
      name: "Curry Udon",
      japanese: "カレーうどん",
      description: "Udon dans un bouillon curry épais et parfumé",
      characteristics: "Fusion, copieux, original",
      price: "¥500-800",
      difficulty: "Facile",
      beginner: false
    },
    {
      name: "Niku Udon",
      japanese: "肉うどん",
      description: "Udon avec fines tranches de bœuf mijoté",
      characteristics: "Protéiné, savoureux, consistant",
      price: "¥500-900",
      difficulty: "Facile",
      beginner: false
    },
    {
      name: "Zaru Udon",
      japanese: "ざるうどん",
      description: "Udon froides servies avec sauce à tremper",
      characteristics: "Rafraîchissant, été, texture pure",
      price: "¥400-800",
      difficulty: "Facile",
      beginner: true
    },
    {
      name: "Bukkake Udon",
      japanese: "ぶっかけうどん",
      description: "Udon avec sauce concentrée versée directement",
      characteristics: "Intense, moderne, texturé",
      price: "¥350-600",
      difficulty: "Intermédiaire",
      beginner: false
    }
  ];

  const servingStyles = [
    {
      name: "Chaud (Atsu)",
      japanese: "温かい (あつ)",
      description: "Servi dans un bouillon chaud réconfortant",
      season: "Automne/Hiver",
      temperature: "Chaud",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Froid (Hiya)",
      japanese: "冷たい (ひや)",
      description: "Nouilles froides avec sauce à tremper",
      season: "Printemps/Été",
      temperature: "Froid",
      popularity: "⭐⭐⭐⭐"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="udon" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-blue-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-blue-600">Types de Plats</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-blue-600 font-medium">Udon</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🍲</span>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-2">Udon</h1>
                    <p className="text-2xl text-blue-200 japanese-text">うどん</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-blue-100">
                  Les nouilles épaisses et moelleuses du Kansai. Réconfortantes, 
                  polyvalentes et délicieuses, les udon incarnent la convivialité 
                  et la simplicité de la cuisine japonaise.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Prix : ¥200-800
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Tradition Kansai
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Texture Moelleuse
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Repas Rapide
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">L'Univers des Udon</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Nouilles de blé épaisses et élastiques
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Origines dans la région du Kansai
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Texture moelleuse caractéristique
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Variété infinie de préparations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Parfait pour tous les âges
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
                  L'Âme Moelleuse du Kansai
                  <span className="block text-lg text-gray-600 mt-2">関西の心</span>
                </h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'udon représente l'esprit du <strong>Kansai</strong> (région d'Osaka-Kyoto-Kobe) : 
                    chaleureux, généreux et sans prétention. Ces <strong>nouilles épaisses de blé</strong> 
                    incarnent une philosophie culinaire où la texture prime sur la complexité.
                  </p>
                  <p className="text-gray-700">
                    Contrairement aux soba fines et raffinées d'Edo, les udon privilégient la 
                    <strong>satisfaction immédiate</strong> et le réconfort. Leur texture moelleuse 
                    et élastique, appelée <strong>"koshi"</strong>, est l'essence même de leur identité.
                  </p>
                  <p className="text-gray-700">
                    Aujourd'hui, les chaînes d'udon modernes ont démocratisé cette tradition millénaire, 
                    rendant accessible à tous cette <strong>cuisine de réconfort japonaise</strong> 
                    authentique et abordable.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Caractéristiques des Udon</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌾</span>
                    <div>
                      <p className="font-semibold text-gray-900">Ingrédients</p>
                      <p className="text-sm text-gray-600">Farine de blé, eau, sel</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📏</span>
                    <div>
                      <p className="font-semibold text-gray-900">Dimensions</p>
                      <p className="text-sm text-gray-600">Épaisseur : 2-4mm, largeur : 2-4mm</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🥢</span>
                    <div>
                      <p className="font-semibold text-gray-900">Texture</p>
                      <p className="text-sm text-gray-600">Moelleuse, élastique, réconfortante</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🗾</span>
                    <div>
                      <p className="font-semibold text-gray-900">Origine</p>
                      <p className="text-sm text-gray-600">Région du Kansai (Osaka/Kyoto)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'udon populaires */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Variétés d'Udon Populaires
              <span className="block text-lg text-gray-600 mt-2">人気のうどん</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {udonTypes.map((type, index) => (
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
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Deux Façons de Déguster
              <span className="block text-lg text-gray-600 mt-2">二つの食べ方</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {servingStyles.map((style, index) => (
                <div key={index} className={`rounded-xl p-8 border ${
                  style.name.includes('Chaud') ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">
                      {style.name.includes('Chaud') ? '🔥' : '❄️'}
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
          </div>
        </section>

        {/* Chaînes spécialisées */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Principales Chaînes Udon
              <span className="block text-lg text-gray-600 mt-2">主要うどんチェーン</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {udonChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">{chain.priceRange}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{chain.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-gray-900">Spécialités : </span>
                        <span className="text-gray-600">{chain.specialties.join(", ")}</span>
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
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {chain.uniqueFeatures.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
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

        {/* Guide pratique */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Guide Pratique des Udon
              <span className="block text-lg text-gray-600 mt-2">うどん実用ガイド</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🍜</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Première Dégustation</h3>
                <p className="text-gray-600 text-sm">
                  Commencez par Kake Udon pour apprécier la texture pure des nouilles. 
                  La simplicité révèle la qualité du udon.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🥢</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Technique de Dégustation</h3>
                <p className="text-gray-600 text-sm">
                  Aspirez les udon bruyamment pour améliorer les saveurs. 
                  La texture moelleuse se révèle pleinement ainsi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Rapport Qualité-Prix</h3>
                <p className="text-gray-600 text-sm">
                  Les chaînes d'udon offrent une expérience authentique à prix mini. 
                  Un repas complet pour le prix d'un café parisien !
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🌡️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Selon la Saison</h3>
                <p className="text-gray-600 text-sm">
                  Été : udon froids rafraîchissants. Hiver : udon chauds réconfortants. 
                  Adaptez votre choix à la météo !
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Timing Optimal</h3>
                <p className="text-gray-600 text-sm">
                  Service ultra-rapide : 3-5 minutes. Parfait pour un déjeuner 
                  express entre deux visites touristiques.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🍤</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Toppings Populaires</h3>
                <p className="text-gray-600 text-sm">
                  Tempura, œuf mollet et negi (oignons verts) sont les plus appréciés. 
                  Personnalisez selon vos goûts !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Découvrez la Convivialité des Udon
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Les udon vous invitent à savourer la simplicité et la générosité 
              de la cuisine du Kansai dans toute sa splendeur moelleuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chaines/marugame-seimen"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Découvrir Marugame Seimen
              </Link>
              <Link 
                href="/guides/comment-commander"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Guide de Commande
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
