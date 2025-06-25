import Link from "next/link";

export default function SteakPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-purple-600">Types de Plat</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-purple-600 font-medium">Steak</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🥩</span>
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl">🇺🇸</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Steak
          </h1>
          <p className="text-2xl mb-4 text-orange-100 japanese-text">ステーキ</p>
          <p className="text-xl mb-8 text-orange-100">
            Steakhouses Japonais - L'Art de la Viande Premium
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Culture Steak au Japon</h2>
            <p className="text-lg text-orange-200">
              Le steak au Japon représente un luxe occidental adopté avec la précision 
              et la qualité japonaise. De l'innovation "debout" à la viande wagyu premium, 
              découvrez cette révolution culinaire moderne.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Viande Premium
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Innovation Japonaise
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Expérience Unique
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
              🥩 L'Univers du Steak Japonais
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Les steakhouses japonais ont révolutionné l'approche de la viande premium, 
                combinant qualité exceptionnelle, innovation de service et accessibilité. 
                De la révolution "standing style" aux wagyu d'exception.
              </p>
              <p className="text-lg text-gray-700">
                Découvrez comment le Japon a réinventé l'expérience steak, créant 
                des concepts uniques qui allient tradition occidentale et innovation nippone.
              </p>
            </div>
          </div>

          {/* Chaînes de Steak */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥩 Chaînes de Steak au Japon
            </h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Ikinari Steak */}
              <Link href="/chaines/ikinari-steak">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-6">
                      <span className="text-4xl mr-3">🥩</span>
                      <span className="text-4xl mr-3">⚡</span>
                      <span className="text-4xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                        Ikinari Steak
                      </h3>
                      <p className="text-lg text-gray-600 japanese-text">いきなりステーキ</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">⚡ Révolution Standing Style</h4>
                      <p className="text-gray-700 mb-4">
                        Concept révolutionnaire : steak premium debout, commande au poids, 
                        cuisson rapide. Innovation qui a transformé l'industrie japonaise.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Concept :</span>
                          <span className="font-semibold">Standing Steak</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Commande :</span>
                          <span className="font-semibold">Au poids (grammes)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service :</span>
                          <span className="font-semibold">Rapide & efficace</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🥩 Viande Premium Accessible</h4>
                      <p className="text-gray-700 mb-4">
                        Steaks de qualité supérieure à prix démocratiques, 
                        grâce au concept debout et à l'efficacité opérationnelle.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ribeye 200g :</span>
                          <span className="font-semibold">1500¥-2500¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sirloin 300g :</span>
                          <span className="font-semibold">2000¥-3000¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Wagyu disponible :</span>
                          <span className="font-semibold">Premium +</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-red-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Spécialité :</strong> Standing steak, commande au poids, viande premium accessible
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Innovation :</strong> Révolution du steakhouse, rapidité et qualité
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Culture Steak Japonais */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🇯🇵 La Culture Steak Japonaise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🥩 Qualité Absolue</h3>
                <p className="text-gray-700 mb-4">
                  Le Japon applique sa philosophie de perfection à la viande : 
                  sélection rigoureuse, traçabilité, respect du produit.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Wagyu :</strong> Élevage d'exception mondial</li>
                  <li>• <strong>Import :</strong> Viandes premium sélectionnées</li>
                  <li>• <strong>Fraîcheur :</strong> Approvisionnement quotidien</li>
                  <li>• <strong>Standards :</strong> Contrôles qualité stricts</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Innovation Service</h3>
                <p className="text-gray-700 mb-4">
                  Révolution du service traditionnel : concepts standing, 
                  commande digitale, efficacité opérationnelle maximale.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Standing :</strong> Rotation rapide, prix bas</li>
                  <li>• <strong>Personnalisation :</strong> Poids, cuisson au choix</li>
                  <li>• <strong>Rapidité :</strong> Service express de qualité</li>
                  <li>• <strong>Accessibilité :</strong> Luxury démocratisé</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Précision Japonaise</h3>
                <p className="text-gray-700 mb-4">
                  Application de la précision japonaise à la cuisson : 
                  températures exactes, timing parfait, présentation impeccable.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Cuisson :</strong> Maîtrise technique parfaite</li>
                  <li>• <strong>Timing :</strong> Service chronométré</li>
                  <li>• <strong>Présentation :</strong> Esthétique soignée</li>
                  <li>• <strong>Constance :</strong> Qualité garantie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guide Steak */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🎯 Guide du Steak au Japon
            </h2>
            
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">🥩 Choisir sa Viande</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types de Viande :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Wagyu A5 :</strong> Excellence ultime, prix premium</li>
                        <li>• <strong>Wagyu A4 :</strong> Très haute qualité, plus accessible</li>
                        <li>• <strong>Angus Importé :</strong> Qualité occidentale fiable</li>
                        <li>• <strong>Local Premium :</strong> Viande japonaise non-wagyu</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Morceaux Populaires :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Ribeye (リブアイ) :</strong> Gras, savoureux</li>
                        <li>• <strong>Sirloin (サーロイン) :</strong> Équilibré, tendre</li>
                        <li>• <strong>Filet (ヒレ) :</strong> Ultra-tendre, délicat</li>
                        <li>• <strong>Strip (ストリップ) :</strong> Ferme, goûteux</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">🔥 Maîtriser la Cuisson</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Niveaux de Cuisson :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Rare (レア) :</strong> Rouge, tiède au centre</li>
                        <li>• <strong>Medium Rare :</strong> Rose, chaud (recommandé)</li>
                        <li>• <strong>Medium :</strong> Rose-gris, chaud partout</li>
                        <li>• <strong>Well Done :</strong> Bien cuit, ferme</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Conseils :</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Wagyu :</strong> Medium rare optimal</li>
                        <li>• <strong>Première fois :</strong> Demander conseil</li>
                        <li>• <strong>Communication :</strong> Staff parle anglais basic</li>
                        <li>• <strong>Accompagnement :</strong> Sauces variées disponibles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Régimes Alimentaires */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥗 Régimes Alimentaires & Steakhouses
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-4">❌ Végétarien/Vegan</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Options très limitées</strong> : les steakhouses se concentrent 
                  sur la viande. Quelques accompagnements végétaux disponibles.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Salade, légumes grillés</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Riz, pommes de terre</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">❌</span>
                    <span>Plats principaux végétariens</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Pas l'endroit idéal pour végétariens</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Généralement OK</strong> : focus sur bœuf, pas de certification 
                  halal officielle mais peu de porc utilisé.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Steaks de bœuf (focus principal)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Accompagnements sans porc</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Vérifier sauces et assaisonnements</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Pas de certification halal</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                <p className="text-gray-700 mb-4">
                  Menu simple centré sur la viande facilite la gestion des allergies. 
                  Staff peut informer sur préparations et accompagnements.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Menu simple, peu d'allergènes cachés</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Steaks nature sans additifs</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Vérifier marinades et sauces</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Staff peut adapter préparations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Steakhouse */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🚀 L'Innovation Steakhouse Japonaise
            </h2>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Révolution Standing</h3>
                  <p className="text-gray-700 mb-4">
                    Le concept "standing steak" japonais a révolutionné l'industrie mondiale 
                    en prouvant qu'on peut démocratiser la haute gastronomie sans compromettre 
                    la qualité.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Efficacité :</strong> Rotation rapide = prix bas</li>
                    <li>• <strong>Qualité :</strong> Viande premium maintenue</li>
                    <li>• <strong>Accessibilité :</strong> Luxury pour tous</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Précision Technique</h3>
                  <p className="text-gray-700 mb-4">
                    Application de la précision japonaise à l'art occidental du steak : 
                    timing parfait, températures exactes, service orchestré comme une danse.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Techniques :</strong> Méthodes calibrées scientifiquement</li>
                    <li>• <strong>Formation :</strong> Staff ultra-qualifié</li>
                    <li>• <strong>Constance :</strong> Qualité identique partout</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  🥩 "Le Steak Japonais : Quand l'Excellence Rencontre l'Innovation"
                </h3>
                <p className="text-gray-600">
                  En réinventant l'expérience steakhouse, le Japon a prouvé que tradition 
                  et innovation peuvent coexister pour créer quelque chose d'entièrement nouveau 
                  et remarquablement efficace.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/type-plat"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Retour Types de Plat
              </Link>
              <Link 
                href="/chaines"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Voir Toutes les Chaînes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
