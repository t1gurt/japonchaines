import Link from "next/link";

export default function CafePage() {
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
            <span className="text-purple-600 font-medium">Café</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">☕</span>
            <span className="text-6xl mr-4">🥛</span>
            <span className="text-6xl">🍰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Café
          </h1>
          <p className="text-2xl mb-4 text-yellow-100 japanese-text">カフェ・喫茶店</p>
          <p className="text-xl mb-8 text-yellow-100">
            Kissaten et Cafés Modernes - L'Art du Temps Qui S'Arrête
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Culture Café Japonaise</h2>
            <p className="text-lg text-yellow-200">
              Plus qu'un simple café, le kissaten japonais est un refuge culturel 
              où se mêlent tradition, hospitalité et cette atmosphère unique 
              qui fait l'âme du Japon urbain moderne.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Kissaten Traditionnel
            </span>
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
              Morning Service
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Hospitalité Omotenashi
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
              🏮 L'Univers du Café Japonais
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Les cafés japonais incarnent une philosophie unique où le temps prend 
                une autre dimension. Du kissaten traditionnel aux chaînes modernes, 
                ils offrent bien plus qu'une simple pause café : un véritable art de vivre.
              </p>
              <p className="text-lg text-gray-700">
                Découvrez ces espaces où l'hospitalité japonaise (omotenashi) transforme 
                chaque visite en moment de ressourcement authentique.
              </p>
            </div>
          </div>

          {/* Chaînes de Café */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ☕ Chaînes de Café au Japon
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Komeda Coffee */}
              <Link href="/chaines/komeda">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">☕</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        Komeda Coffee
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">コメダ珈琲店</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🌅 Morning Service</h4>
                      <p className="text-sm text-gray-700">
                        Toast épais + œuf dur offerts avec tout café avant 11h. Tradition depuis 1968!
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🍰 Shironoir</h4>
                      <p className="text-sm text-gray-700">
                        Le fameux dessert : brioche chaude, glace vanille, sirop noir.
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Prix café :</span>
                        <span className="font-semibold">450¥-650¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shironoir :</span>
                        <span className="font-semibold">580¥</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-amber-200">
                    <p className="text-xs text-gray-600">
                      <strong>Style :</strong> Kissaten moderne, hospitalité omotenashi
                    </p>
                  </div>
                </div>
              </Link>

              {/* Doutor Coffee */}
              <Link href="/chaines/doutor">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚀</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                        Doutor Coffee
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">ドトールコーヒー</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🚀 Pioneer du Café</h4>
                      <p className="text-sm text-gray-700">
                        Révolutionnaire depuis 1980 : qualité européenne, rapidité japonaise.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🥪 Milano Sandwiches</h4>
                      <p className="text-sm text-gray-700">
                        Pain focaccia, ingrédients premium, saveurs européennes adaptées.
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Blend Coffee :</span>
                        <span className="font-semibold">220¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Milano Sandwich :</span>
                        <span className="font-semibold">420¥-450¥</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-orange-200">
                    <p className="text-xs text-gray-600">
                      <strong>Style :</strong> Moderne, efficace, rapport qualité/prix
                    </p>
                  </div>
                </div>
              </Link>

              {/* Hoshino Coffee */}
              <Link href="/chaines/hoshino">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">⭐</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        Hoshino Coffee
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">星乃珈琲店</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🌸 Nostalgie Showa</h4>
                      <p className="text-sm text-gray-700">
                        Renaissance de l'ère Showa : café siphon, mobilier vintage.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🥞 Pancakes Signature</h4>
                      <p className="text-sm text-gray-700">
                        Pancakes épais style Showa, moelleux exceptionnels, beurre artisanal.
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Siphon Coffee :</span>
                        <span className="font-semibold">480¥-680¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pancakes :</span>
                        <span className="font-semibold">880¥</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-yellow-200">
                    <p className="text-xs text-gray-600">
                      <strong>Style :</strong> Vintage authentique, atmosphère nostalgique
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Culture Kissaten */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏛️ La Culture Kissaten (喫茶店)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🕰️ Temps Suspendu</h3>
                <p className="text-gray-700 mb-4">
                  Le kissaten offre un refuge temporal où le rythme urbain s'apaise. 
                  Ici, pas de pression pour partir vite : on savoure l'instant.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Durée :</strong> 1-3 heures acceptées</li>
                  <li>• <strong>Ambiance :</strong> Feutrée, relaxante</li>
                  <li>• <strong>Activités :</strong> Lecture, travail, méditation</li>
                  <li>• <strong>Musique :</strong> Jazz soft, classique</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🌸 Omotenashi</h3>
                <p className="text-gray-700 mb-4">
                  L'hospitalité japonaise s'exprime dans chaque détail : 
                  service attentionné, eau glacée offerte, respect du client.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Service :</strong> Discret mais attentionné</li>
                  <li>• <strong>Offrandes :</strong> Eau, serviettes chaudes</li>
                  <li>• <strong>Respect :</strong> Intimité préservée</li>
                  <li>• <strong>Qualité :</strong> Constante et fiable</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏮 Tradition Moderne</h3>
                <p className="text-gray-700 mb-4">
                  Les chaînes modernes préservent l'essence du kissaten 
                  tout en innovant : Morning Service, standardisation qualité.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Innovation :</strong> Services uniques</li>
                  <li>• <strong>Accessibilité :</strong> Prix démocratiques</li>
                  <li>• <strong>Expansion :</strong> Tout le Japon</li>
                  <li>• <strong>Constance :</strong> Expérience standardisée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types de Cafés */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ☕ Types de Cafés au Japon
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Kissaten Traditionnel</h3>
                <p className="text-gray-700 mb-4">
                  Café à l'ancienne, souvent familial, atmosphère rétro, 
                  service siphon, clientèle fidèle. L'authentique expérience japonaise.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Caractéristiques :</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Décor vintage</li>
                      <li>• Service personnel</li>
                      <li>• Café siphon</li>
                      <li>• Ambiance feutrée</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prix moyens :</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Café : 400¥-600¥</li>
                      <li>• Toast : 300¥-500¥</li>
                      <li>• Dessert : 400¥-700¥</li>
                      <li>• Repas : 800¥-1200¥</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Chaîne Moderne</h3>
                <p className="text-gray-700 mb-4">
                  Chaînes standardisées préservant l'esprit kissaten 
                  avec innovations modernes : Morning Service, wifi, accessibilité.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Avantages :</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Qualité constante</li>
                      <li>• Services innovants</li>
                      <li>• Prix accessibles</li>
                      <li>• Wifi gratuit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Exemples de Chaînes :</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <strong>Komeda :</strong> Morning Service pionnier</li>
                      <li>• <strong>Doutor :</strong> Innovation café moderne</li>
                      <li>• <strong>Hoshino :</strong> Nostalgie Showa authentique</li>
                      <li>• Service omotenashi universel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Morning Service Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🌅 Guide du Morning Service
            </h2>
            
            <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                  Le Phénomène Morning Service
                </h3>
                <p className="text-gray-700">
                  Invention japonaise révolutionnaire : petit-déjeuner gratuit 
                  avec votre café du matin. Un concept qui a conquis tout le Japon.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">⏰ Comment ça marche</h4>
                  <ol className="text-sm text-gray-700 space-y-2">
                    <li>1. Arrivez avant 11h00</li>
                    <li>2. Commandez un café (chaud/glacé)</li>
                    <li>3. Recevez toast + œuf GRATUIT</li>
                    <li>4. Savourez tranquillement</li>
                  </ol>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">💡 Astuces</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Best deal : 450¥ = petit-déj complet</li>
                    <li>• 7h-8h moins bondé</li>
                    <li>• Beurre/confiture fournis</li>
                    <li>• Possible de demander variantes</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🎯 Où trouver</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Komeda :</strong> Morning Service pionnier</li>
                    <li>• <strong>Doutor :</strong> Morning set rapide</li>
                    <li>• <strong>Hoshino :</strong> Brunch nostalgique</li>
                    <li>• <strong>Kissaten locaux :</strong> Versions variées</li>
                    <li>• <strong>Région Nagoya :</strong> Plus répandu</li>
                    <li>• <strong>Tokyo/Osaka :</strong> Chaînes principales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Régimes Alimentaires */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥗 Régimes Alimentaires dans les Cafés
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4">✅ Végétarien</h3>
                <p className="text-gray-700 mb-4">
                  Options limitées mais possibles : desserts, boissons, 
                  quelques plats sans viande. Vérifier ingrédients œufs/lait.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Tous cafés et thés</li>
                  <li>• ✅ Desserts (Shironoir, gâteaux)</li>
                  <li>• ✅ Toast simple (sans jambon)</li>
                  <li>• ⚠️ Vérifier œufs dans Morning Service</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                <p className="text-gray-700 mb-4">
                  Attention aux plats contenant porc. Pas de certification halal 
                  mais options possibles à vérifier avec le personnel.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Cafés, thés, desserts</li>
                  <li>• ❌ Sandwichs au jambon</li>
                  <li>• ⚠️ Hot dogs (vérifier saucisse)</li>
                  <li>• ⚠️ Demander détails au staff</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                <p className="text-gray-700 mb-4">
                  Menus avec indications allergènes disponibles. 
                  Staff formé pour renseigner sur ingrédients détaillés.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ⚠️ Gluten (pain, pâtisseries)</li>
                  <li>• ⚠️ Lait (desserts, café au lait)</li>
                  <li>• ⚠️ Œufs (Morning Service, gâteaux)</li>
                  <li>• ✅ Menus allergènes disponibles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/type-plat"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Tous les Types
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
  );
}
