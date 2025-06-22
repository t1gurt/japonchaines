import Link from "next/link";
import Image from "next/image";

export default function GyudonPage() {
  const gyudonChains = [    {
      name: "Yoshinoya",
      japanese: "吉野家",
      logo: "/logos/yoshinoya.png", // プレースホルダー
      description: "L'ORIGINAL ! Fondée en 1899 au marché aux poissons de Nihonbashi, créatrice du gyūdon moderne.",
      specialties: ["Gyūdon d'origine", "Yakiniku Don", "Curry Gyūdon", "Toppings personnalisés"],
      priceRange: "¥468 (並盛) - ¥700+",
      locations: "1,261 restaurants au Japon + International",
      orderingMethod: "Comptoir en U iconique + Distributeurs dans certains magasins",
      vegetarianOptions: "Limitées (quelques options de curry)",
      uniqueFeatures: [
        "Philosophie 'Umai, Yasui, Hayai' (Délicieux, Pas cher, Rapide)",
        "Viande importée des USA (qualité 'Japan Spec')",
        "Sauce secrète au vin blanc et gingembre",
        "Méthode de cuisson '継ぎ足し' (ajout continu)",
        "Épaisseur de viande optimisée à 1.3mm",
        "Comptoir en U révolutionnaire pour l'efficacité"
      ],
      foundingYear: 1899,
      heritage: "125+ ans d'histoire, survécu à la crise BSE (2004-2006)",
      href: "/chaines/yoshinoya"
    },    {
      name: "Sukiya",
      japanese: "すき家",
      logo: "/logos/sukiya.png",
      description: "Leader en nombre de magasins (1,942+), spécialisé dans la diversité et l'accessibilité familiale.",
      specialties: ["Mega Gyūdon", "Cheese Gyūdon", "Kimchi Gyūdon", "Menu desserts"],
      priceRange: "¥400 (並盛) - ¥800+",
      locations: "1,942 restaurants (leader du marché)",
      orderingMethod: "Commande au comptoir + Drive-through",
      vegetarianOptions: "Options végétariennes disponibles",
      uniqueFeatures: [
        "Plus grand réseau de magasins au Japon",
        "Forte présence en banlieue et zones familiales",
        "Menu le plus diversifié (toppings, desserts, fruits de mer)",
        "Stratégie famille et convenience",
        "Viande australienne pendant la crise BSE (avantage concurrentiel)",
        "Options drive-through développées"
      ],
      foundingYear: 1982,
      heritage: "Expansion rapide, focus sur l'innovation et la diversité",
      href: "/chaines/sukiya"
    },
    {
      name: "Matsuya",
      japanese: "松屋",
      logo: "/logos/matsuya.png",
      description: "L'innovateur ! Appelle ses plats 'Gyūmeshi' et se distingue par ses créations audacieuses.",
      specialties: ["Gyūmeshi (牛めし)", "Hamburger Steak", "Menu 'Saveurs du Monde'", "Curry"],
      priceRange: "¥400 (並盛) - ¥1000+ (plats premium)",
      locations: "986 restaurants",
      orderingMethod: "Distributeur automatique (pionnier)",
      vegetarianOptions: "Curry végétarien et options variées",
      uniqueFeatures: [
        "Miso gratuit avec les repas en salle",
        "Terme unique 'Gyūmeshi' au lieu de 'Gyūdon'",
        "Innovateur constant (menus limités audacieux)",
        "Série 'Saveurs du Monde' (plats à 1000¥+)",
        "Menu teishoku (repas complets) développé",
        "Positionnement d'innovateur culinaire"
      ],
      foundingYear: 1966,
      heritage: "Challenger créatif qui repousse les limites du fast-food",
      href: "/chaines/matsuya"
    }
  ];

  const menuItems = [
    {
      name: "Gyūdon (並盛)",
      japanese: "牛丼",
      romaji: "Gyūdon",
      description: "Le gyūdon classique : bol de riz surmonté de lamelles de bœuf mijotées dans une sauce sucrée-salée à base de sauce soja, mirin et sucre.",
      price: "¥300-400",
      calories: "約650kcal",
      image: "/menu/gyudon-regular.jpg"
    },
    {
      name: "Gyūdon Grande (大盛)",
      japanese: "牛丼大盛",
      romaji: "Gyūdon Ōmori",
      description: "Version grande du gyūdon classique avec plus de riz et de viande.",
      price: "¥450-550",
      calories: "約850kcal",
      image: "/menu/gyudon-large.jpg"
    },
    {
      name: "Cheese Gyūdon",
      japanese: "チーズ牛丼",
      romaji: "Chīzu Gyūdon",
      description: "Gyūdon agrémenté de fromage fondu, créant un mélange savoureux entre tradition japonaise et influence occidentale.",
      price: "¥450-600",
      calories: "約750kcal",
      image: "/menu/cheese-gyudon.jpg"
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
            <span className="text-gray-900 font-medium">Gyūdon</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🥩</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Gyūdon
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">牛丼</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Le plat japonais iconique : un bol de riz surmonté de lamelles de bœuf 
                mijotées dans une sauce douce. Rapide, abordable et délicieux.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥300-800
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Rapide
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Nourrissant
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qu'est-ce que le Gyūdon ?</h3>
              <p className="text-gray-600 mb-4">
                Le gyūdon (牛丼) est composé de fines lamelles de bœuf et d'oignons mijotées 
                dans une sauce à base de sauce soja, mirin, saké et sucre, servies sur un 
                bol de riz blanc chaud.
              </p>
              <p className="text-gray-600">
                Né à la fin du 19ème siècle, ce plat est devenu un symbole de la restauration 
                rapide japonaise, apprécié pour sa simplicité, son prix abordable et sa saveur réconfortante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Variations Populaires de Gyūdon
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image : {item.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="japanese-text">{item.japanese}</span>
                    <span className="italic">{item.romaji}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold">{item.price}</span>
                    <span className="text-gray-500 text-sm">{item.calories}</span>
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
            Principales Chaînes de Gyūdon
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {gyudonChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xs text-gray-500">Logo</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                    </div>
                  </div>
                    <p className="text-gray-600 mb-4">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Spécialités :</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Prix : </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Magasins : </span>
                        <span className="text-gray-600">{chain.locations}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Commande : </span>
                      <span className="text-gray-600">{chain.orderingMethod}</span>
                    </div>
                    
                    {chain.foundingYear && (
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">Fondé en : </span>
                        <span className="text-gray-600">{chain.foundingYear} ({chain.heritage})</span>
                      </div>
                    )}
                    
                    {chain.uniqueFeatures && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Caractéristiques uniques :</h4>
                        <div className="flex flex-wrap gap-1">
                          {chain.uniqueFeatures.slice(0, 3).map((feature, featureIndex) => (
                            <span key={featureIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                              {feature.length > 30 ? `${feature.substring(0, 30)}...` : feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Végétarien : </span>
                      <span className="text-gray-600">{chain.vegetarianOptions}</span>
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

      {/* Ordering Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Commander du Gyūdon
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-4">🎫 Méthode de Commande</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• La plupart des chaînes utilisent des distributeurs automatiques</li>
                <li>• Sélectionnez la taille : 並盛 (normal), 大盛 (grand), 特盛 (très grand)</li>
                <li>• Payez en espèces ou carte IC</li>
                <li>• Remettez le ticket au comptoir</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🥗 Options Personnalisation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• つゆだく (Tsuyu-daku) : plus de sauce</li>
                <li>• つゆ抜き (Tsuyu-nuki) : sans sauce</li>
                <li>• ねぎだく (Negi-daku) : plus d'oignons verts</li>
                <li>• 玉ねぎ抜き (Tamanegi-nuki) : sans oignons</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/guides/commander"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              Guide Complet de Commande
            </Link>
          </div>
        </div>
      </section>

      {/* L'Histoire et la Philosophie du Gyūdon */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            L'Histoire du Gyūdon : Du Marché aux Poissons au Phénomène National
            <span className="block text-lg text-gray-600 mt-2">牛丼の歴史と哲学</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                1899 : Naissance d'une Légende
                <span className="block text-sm font-normal text-gray-600 mt-1">伝説の始まり</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Le Marché de Nihonbashi :</strong> L'histoire du gyūdon moderne commence en 1899 
                  quand Matsuda Eikichi ouvre le premier Yoshinoya au marché aux poissons de Nihonbashi, Tokyo. 
                  Les travailleurs du marché avaient besoin d'un repas rapide, savoureux et abordable.
                </p>
                <p>
                  <strong>L'Innovation Révolutionnaire :</strong> Matsuda adapte le "gyūmeshi" traditionnel 
                  aux besoins spécifiques des travailleurs du marché : rapidité, qualité constante, prix accessible. 
                  Cette philosophie devient les fondements du fast-food japonais.
                </p>
                <p>
                  <strong>De Nihonbashi à Tsukiji :</strong> Après le Grand Tremblement de terre de 1923, 
                  Yoshinoya suit le marché vers Tsukiji en 1926. Cette fidélité à la clientèle du marché 
                  forge l'ADN du gyūdon moderne.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                La Philosophie "Umai, Yasui, Hayai"
                <span className="block text-sm font-normal text-gray-600">うまい、やすい、はやい</span>
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-bold text-red-800">うまい (Umai) - Délicieux</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Viande de qualité "Japan Spec", sauce secrète au vin blanc et gingembre, 
                    méthode de cuisson "継ぎ足し" (ajout continu pour développer les saveurs)
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-bold text-orange-800">やすい (Yasui) - Abordable</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Optimisation des coûts par l'efficacité opérationnelle, 
                    partenariats directs avec les producteurs américains
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-bold text-yellow-800">はやい (Hayai) - Rapide</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Comptoir en U révolutionnaire, viande tranchée à 1.3mm précisément, 
                    louche à 47 trous pour le service optimal
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Révolution Industrielle</h4>
              <p className="text-gray-600 text-sm">
                Le gyūdon naît pendant la modernisation du Japon, symbolisant l'adaptation 
                de la cuisine traditionnelle aux besoins de l'ère industrielle.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Culture Salaryman</h4>
              <p className="text-gray-600 text-sm">
                Devient le symbole du repas du travailleur japonais - rapide, nourrissant, 
                et adapté au rythme effréné de la vie urbaine moderne.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Phénomène Global</h4>
              <p className="text-gray-600 text-sm">
                De ses origines modestes à Nihonbashi, le gyūdon s'exporte dans le monde entier, 
                devenant ambassadeur de la cuisine japonaise.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">La Crise BSE : Épreuve et Renaissance (2004-2006)</h3>
            <p className="text-lg text-red-100 max-w-4xl mx-auto mb-4">
              Quand l'import de bœuf américain fut interdit, Yoshinoya choisit d'arrêter la vente de gyūdon 
              plutôt que de compromettre la qualité. Cette décision héroïque renforça paradoxalement 
              la confiance des consommateurs.
            </p>
            <p className="text-red-50">
              <strong>Leçon :</strong> L'intégrité et la qualité avant le profit - 
              une philosophie qui distingue les vraies marques japonaises.
            </p>
          </div>
        </div>
      </section>

      {/* Les Secrets Techniques du Gyūdon */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Secrets Techniques du Gyūdon Parfait
            <span className="block text-lg text-gray-600 mt-2">牛丼の技術的秘密</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Science de la Viande
                <span className="block text-sm font-normal text-gray-600">肉の科学</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🥩 Sélection du Bœuf</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Coupe :</strong> Short Plate (バラ肉) - ratio optimal 6:4 entre viande rouge et gras<br/>
                    <strong>Origine :</strong> Bœuf nourri aux céréales d'Amérique du Nord (standard "Japan Spec")<br/>
                    <strong>Épaisseur :</strong> Précisément 1.3mm - ni trop fin (se déchire), ni trop épais (dur à mâcher)
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">⏱️ Processus de Maturation</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Décongélation :</strong> 14 jours de maturation lente en usine<br/>
                    <strong>Effet :</strong> Décomposition des protéines en acides aminés (umami)<br/>
                    <strong>Résultat :</strong> Texture tendre et saveur profonde développée
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">🍯 Sauce Secrète</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Base :</strong> Sauce soja, mirin, sucre, vin blanc, gingembre<br/>
                    <strong>Méthode "継ぎ足し" :</strong> Ajout continu pendant la cuisson<br/>
                    <strong>Evolution :</strong> Chaque restaurant développe sa propre complexité
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                Révolution Opérationnelle
                <span className="block text-sm font-normal text-gray-600">運営革命</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">🔄 Comptoir en U</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Innovation :</strong> Design révolutionnaire pour maximiser l'efficacité<br/>
                    <strong>Avantage :</strong> Un employé peut servir plusieurs clients simultanément<br/>
                    <strong>Impact :</strong> Réduction des temps d'attente et des coûts opérationnels
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">🥄 Louche Technique</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Design :</strong> 47 trous précisément positionnés<br/>
                    <strong>Fonction :</strong> Ratio parfait viande/sauce en une seule portion<br/>
                    <strong>Résultat :</strong> Consistance absolue et service ultra-rapide
                  </p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">📊 Optimisation Continue</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Objectif :</strong> Servir un gyūdon en moins de 30 secondes<br/>
                    <strong>Méthode :</strong> Standardisation de chaque geste et mouvement<br/>
                    <strong>Évolution :</strong> Adaptation constante basée sur les retours clients
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Service Express</h4>
              <p className="text-sm text-gray-600">
                De la commande au service : moins de 30 secondes grâce à l'optimisation totale
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-bold text-gray-900 mb-2">Précision Scientifique</h4>
              <p className="text-sm text-gray-600">
                Chaque élément mesuré au millimètre près pour une expérience constante
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Qualité Absolue</h4>
              <p className="text-sm text-gray-600">
                Standards si stricts que Yoshinoya a préféré arrêter les ventes lors de la crise BSE
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🌏</div>
              <h4 className="font-bold text-gray-900 mb-2">Influence Mondiale</h4>
              <p className="text-sm text-gray-600">
                Le modèle gyūdon a inspiré l'industrie mondiale du fast-food
              </p>
            </div>
          </div>
        </div>      </section>
    </div>
  );
}
