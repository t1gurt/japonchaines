import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";

export default function DoutorPage() {
  return (
    <>
      <ChainViewTracker chainName="doutor" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/cafe" className="text-gray-500 hover:text-purple-600">Café</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Doutor Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">☕</span>
              <span className="text-6xl mr-4">🏃‍♂️</span>
              <span className="text-6xl">⚡</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Doutor Coffee
            </h1>
            <p className="text-2xl mb-4 text-green-100 japanese-text">ドトールコーヒー</p>
            <p className="text-xl mb-8 text-green-100">
              Le Pionnier du Café Express Japonais - Révolution du Self-Service
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">L'Innovation Café Japonaise</h2>
              <p className="text-lg text-green-200">
                Depuis 1980, Doutor révolutionne la culture café japonaise en introduisant 
                le concept de café rapide et abordable, transformant la pause café 
                en expérience accessible au rythme effréné de la vie urbaine.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Pionnier 1980
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                Self-Service Rapide
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
                Prix Accessibles
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Innovation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏆 Révolution du Café Express
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">☕ Naissance de l'Innovation (1980)</h3>
                  <p className="text-gray-700 mb-4">
                    Doutor Coffee naît en 1980 avec une vision révolutionnaire : 
                    démocratiser le café de qualité en créant le premier système 
                    de café self-service au Japon, brisant les codes du service traditionnel.
                  </p>
                  <p className="text-gray-700">
                    Le fondateur Hiromichi Toriba s'inspire des coffee shops américains 
                    pour créer un concept hybride unique : qualité japonaise + 
                    efficacité moderne + prix accessibles.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Impact Culturel</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Révolution :</strong> Doutor transforme la perception du café au Japon, 
                    le rendant accessible aux masses et introduisant la culture du 
                    "café nomade" dans l'archipel.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Démocratisation :</strong> Café de qualité pour tous</li>
                    <li>• <strong>Rapidité :</strong> Service express adapté au rythme urbain</li>
                    <li>• <strong>Accessibilité :</strong> Prix abordables sans compromis</li>
                    <li>• <strong>Modernité :</strong> Ambiance contemporaine décontractée</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu & Spécialités */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ☕ L'Art du Café Express Doutor
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Café Signature */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Café Premium</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアムブレンド</p>
                  <p className="text-2xl font-bold text-green-600 mb-3">250¥-380¥</p>
                  <p className="text-gray-700 mb-4">
                    Blend exclusif Doutor, torréfaction soignée, extraction rapide 
                    mais parfaite. Qualité constante à prix démocratique.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blend Original :</span>
                      <span className="text-sm font-semibold">250¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Café Glacé :</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Espresso :</span>
                      <span className="text-sm font-semibold">220¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Café au Lait :</span>
                      <span className="text-sm font-semibold">320¥</span>
                    </div>
                  </div>
                </div>

                {/* Sandwichs & Fast Food */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥪 Repas Express</h3>
                  <p className="text-gray-600 japanese-text mb-2">サンドイッチ・軽食</p>
                  <p className="text-2xl font-bold text-emerald-600 mb-3">380¥-580¥</p>
                  <p className="text-gray-700 mb-4">
                    Sandwichs fraîchement préparés, hot-dogs, pâtisseries. 
                    Parfait pour un repas rapide et savoureux en déplacement.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sandwich Jambon :</span>
                      <span className="text-sm font-semibold">380¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Hot Dog :</span>
                      <span className="text-sm font-semibold">420¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Croissant :</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Café+Sandwich :</span>
                      <span className="text-sm font-semibold">580¥</span>
                    </div>
                  </div>
                </div>

                {/* Boissons Variées */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥤 Boissons Modernes</h3>
                  <p className="text-gray-600 japanese-text mb-2">モダンドリンク</p>
                  <p className="text-2xl font-bold text-teal-600 mb-3">280¥-450¥</p>
                  <p className="text-gray-700 mb-4">
                    Large sélection de thés, smoothies, boissons glacées. 
                    Innovation constante pour suivre les tendances contemporaines.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thé Royal Milk :</span>
                      <span className="text-sm font-semibold">320¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Smoothie Fruits :</span>
                      <span className="text-sm font-semibold">420¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thé Glacé :</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Latte Saisonnier :</span>
                      <span className="text-sm font-semibold">450¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Sets */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Sets Express Doutor</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sets Matinaux :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Morning Set A (モーニングセットA)</strong> - 480¥ - Café + toast + œuf</li>
                      <li>• <strong>Morning Set B (モーニングセットB)</strong> - 520¥ - Café + croissant + salade</li>
                      <li>• <strong>Business Morning</strong> - 580¥ - Café + sandwich + journal</li>
                      <li>• <strong>Express Morning</strong> - 380¥ - Café + pain au chocolat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sets Déjeuner :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Lunch Set (ランチセット)</strong> - 680¥ - Sandwich + café + dessert</li>
                      <li>• <strong>Quick Lunch</strong> - 580¥ - Hot dog + boisson + chips</li>
                      <li>• <strong>Salad Set</strong> - 620¥ - Salade + café + petit pain</li>
                      <li>• <strong>Business Lunch</strong> - 750¥ - Repas complet express</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Self-Service */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏃‍♂️ L'Expérience Self-Service Révolutionnaire
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⚡ Rapidité Optimisée</h3>
                  <p className="text-gray-700 mb-4">
                    Système perfectionné : commande au comptoir, service immédiat, 
                    rotation rapide. Idéal pour les salarymen pressés.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Commande :</strong> 30 secondes maximum</li>
                    <li>• <strong>Préparation :</strong> 2-3 minutes</li>
                    <li>• <strong>Service :</strong> Plateau self-service</li>
                    <li>• <strong>Efficacité :</strong> File fluide garantie</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💰 Accessibilité Prix</h3>
                  <p className="text-gray-700 mb-4">
                    Philosophie démocratique : qualité sans premium price. 
                    Café quotidien abordable pour tous les budgets urbains.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Café simple :</span>
                      <span className="font-semibold">250¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Set complet :</span>
                      <span className="font-semibold">580¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget moyen :</span>
                      <span className="font-semibold">400¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Compétitif vs :</span>
                      <span className="font-semibold">Starbucks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Clientèle Urbaine</h3>
                  <p className="text-gray-700 mb-4">
                    Espace adapté au rythme japonais : lecture rapide, pause efficace, 
                    rencontres informelles. Atmosphère décontractée mais dynamique.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Wifi gratuit rapide</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Tables individuelles</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Ambiance moderne</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Journaux gratuits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Self-Service */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎯 Guide du Self-Service Doutor
              </h2>
              
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">📋 Procédure Step-by-Step</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Consultez le menu affiché</p>
                          <p className="text-sm text-gray-600">Panneaux clairs avec photos et prix</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Commandez au comptoir</p>
                          <p className="text-sm text-gray-600">Staff multilingue dans centres touristiques</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Payez (cash/carte)</p>
                          <p className="text-sm text-gray-600">Cartes internationales acceptées</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Récupérez votre commande</p>
                          <p className="text-sm text-gray-600">Plateau + numéro ou nom appelé</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">💡 Tips Expérience Optimale</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">☕</span>
                        <span><strong>Horaires optimaux :</strong> 7h-9h éviter rush matinal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">💰</span>
                        <span><strong>Best value :</strong> Sets matinaux, petit-déjeuner complet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">🏃‍♂️</span>
                        <span><strong>Express mode :</strong> Commande simple, café + croissant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">📱</span>
                        <span><strong>Moderne :</strong> Points de fidélité, app mobile disponible</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Régimes Alimentaires */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥗 Régimes Alimentaires & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ Végétarien</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Options possibles</strong> : Plusieurs choix végétariens 
                    disponibles, notamment boissons, pâtisseries et quelques sandwichs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Tous cafés et thés</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pâtisseries sans viande</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Sandwichs légumes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Vérifier pain (beurre/lait)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Généralement OK</strong> : La plupart des options 
                    ne contiennent pas de porc. Certification halal non officielle.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Cafés, thés, desserts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Plupart des sandwichs</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Sandwich jambon (vérifier)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Demander ingrédients staff</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Informations allergènes disponibles sur demande. 
                    Staff formé pour renseigner sur ingrédients principaux.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (pain, pâtisseries)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Lait (café au lait, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Œufs (certaines pâtisseries)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Staff peut renseigner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Business Express */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                💼 Doutor et la Culture Business Express
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Révolution Salaryman</h3>
                    <p className="text-gray-700 mb-4">
                      Doutor transforme la pause café des salarymen japonais : 
                      exit les longs rituels, place à l'efficacité sans compromettre 
                      la qualité. Une innovation qui répond au rythme urbain moderne.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Rapidité :</strong> Adapté aux horaires serrés</li>
                      <li>• <strong>Économie :</strong> Budget quotidien raisonnable</li>
                      <li>• <strong>Flexibilité :</strong> Emporter ou consommer sur place</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Impact Social</h3>
                    <p className="text-gray-700 mb-4">
                      Au-delà du café, Doutor démocratise l'accès à un moment de qualité : 
                      pause matinale, rendez-vous informels, transition entre métro et bureau. 
                      Une nouvelle façon de vivre la ville.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Démocratisation :</strong> Café de qualité pour tous</li>
                      <li>• <strong>Socialisation :</strong> Rencontres décontractées</li>
                      <li>• <strong>Innovation :</strong> Modèle copié dans toute l'Asie</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ☕ "Doutor : Le Café qui a Révolutionné le Japon"
                  </h3>
                  <p className="text-gray-600">
                    En créant le premier concept de café express au Japon, Doutor a non seulement 
                    changé la façon de consommer le café, mais a aussi redéfini la pause urbaine, 
                    influençant toute une génération de chaînes à travers l'Asie.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/cafe"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Café
                </Link>
                <Link 
                  href="/chaines"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Toutes les Chaînes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
