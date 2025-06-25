import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";

export default function KushikatsuTanakaPage() {
  return (
    <>
      <ChainViewTracker chainName="kushikatsu-tanaka" chainCategory="izakaya" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/chaines" className="text-gray-500 hover:text-purple-600">Chaînes</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Kushikatsu Tanaka</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-800 via-yellow-700 to-red-800 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🍢</span>
              <span className="text-6xl mr-4">🔥</span>
              <span className="text-6xl">🍺</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kushikatsu Tanaka
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">串カツ田中</p>
            <p className="text-xl mb-8 text-orange-100">
              Le Roi du Kushikatsu - Beignets Frits d'Osaka dans le Monde
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">L'Essence du Kushikatsu d'Osaka</h2>
              <p className="text-lg text-orange-200">
                Depuis 1929, Kushikatsu Tanaka perpétue la tradition du kushikatsu d'Osaka : 
                des brochettes panées et frites, servies avec la sauce secrète, dans l'ambiance 
                décontractée d'un authentique izakaya.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Spécialité Osaka
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Tradition 1929
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Ambiance Populaire
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Héritage */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏮 L'Héritage du Kushikatsu d'Osaka
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Naissance d'une Tradition (1929)</h3>
                  <p className="text-gray-700 mb-4">
                    Kushikatsu Tanaka naît en 1929 dans le quartier populaire de Shinsekai à Osaka, 
                    berceau du kushikatsu. Cette spécialité d'Osaka consiste en des ingrédients 
                    variés enfilés sur brochettes, panés et frits dans l'huile.
                  </p>
                  <p className="text-gray-700">
                    Le fondateur Tanaka-san révolutionne le concept en créant une sauce secrète 
                    qui accompagne parfaitement les kushikatsu, devenant la signature de la chaîne.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌏 Expansion Mondiale</h3>
                  <p className="text-gray-700 mb-4">
                    De ses humbles débuts à Osaka, Kushikatsu Tanaka s'est étendu dans tout le Japon 
                    puis à l'international, exportant l'authentique culture du kushikatsu d'Osaka.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>1929 :</strong> Premier restaurant à Osaka</li>
                    <li>• <strong>1990s :</strong> Expansion dans le Kansai</li>
                    <li>• <strong>2000s :</strong> Présence nationale au Japon</li>
                    <li>• <strong>2010s :</strong> Ouverture internationale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Kushikatsu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🍢 L'Art du Kushikatsu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Kushikatsu Classiques */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥩 Kushikatsu Classiques</h3>
                  <p className="text-gray-600 japanese-text mb-2">定番串カツ</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">130¥-280¥/brochette</p>
                  <p className="text-gray-700 mb-4">
                    Les incontournables du kushikatsu : bœuf, porc, poulet et légumes, 
                    tous panés dans la chapelure unique et frits à la perfection.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Bœuf (牛):</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Porc (豚):</span>
                      <span className="text-sm font-semibold">230¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Poulet (鶏):</span>
                      <span className="text-sm font-semibold">200¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Légumes:</span>
                      <span className="text-sm font-semibold">130¥-180¥</span>
                    </div>
                  </div>
                </div>

                {/* Kushikatsu Premium */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Kushikatsu Premium</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアム串カツ</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">350¥-580¥/brochette</p>
                  <p className="text-gray-700 mb-4">
                    Versions raffinées avec ingrédients premium : fruits de mer, 
                    wagyu, légumes de saison et créations spéciales du chef.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wagyu:</span>
                      <span className="text-sm font-semibold">580¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Crevettes:</span>
                      <span className="text-sm font-semibold">450¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Fromage:</span>
                      <span className="text-sm font-semibold">350¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Spéciaux:</span>
                      <span className="text-sm font-semibold">400¥-500¥</span>
                    </div>
                  </div>
                </div>

                {/* Sets & Accompagnements */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍺 Sets & Boissons</h3>
                  <p className="text-gray-600 japanese-text mb-2">セット・ドリンク</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">800¥-1500¥</p>
                  <p className="text-gray-700 mb-4">
                    Sets kushikatsu avec bière, accompagnements traditionnels 
                    et sauces variées pour une expérience complète d'izakaya.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Discovery:</span>
                      <span className="text-sm font-semibold">1200¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Famille:</span>
                      <span className="text-sm font-semibold">1500¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Bière + 3 kushikatsu:</span>
                      <span className="text-sm font-semibold">800¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sauce extra:</span>
                      <span className="text-sm font-semibold">100¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Règles Importantes */}
              <div className="mt-8 bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-4">⚠️ Règle d'Or du Kushikatsu</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🚫 "NO DOUBLE DIPPING!"</h4>
                    <p className="text-sm text-gray-700">
                      <strong>INTERDICTION ABSOLUE :</strong> Tremper deux fois la même brochette 
                      dans la sauce commune. Cette règle sacrée d'Osaka garantit l'hygiène 
                      et le respect mutuel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">✅ Comment bien faire :</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Une seule trempe dans la sauce commune</li>
                      <li>• Utilisez le chou comme "cuillère" si besoin</li>
                      <li>• Commandez de la sauce supplémentaire si nécessaire</li>
                      <li>• Respectez cette tradition d'Osaka !</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Izakaya */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏮 L'Expérience Izakaya Kushikatsu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🍺 Ambiance Izakaya</h3>
                  <p className="text-gray-700 mb-4">
                    Atmosphère décontractée et conviviale typique d'Osaka. 
                    Comptoirs animés, discussions entre clients, et le son caractéristique 
                    de la friture qui grésille.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Style :</strong> Populaire et chaleureux</li>
                    <li>• <strong>Clientèle :</strong> Travailleurs, amis, familles</li>
                    <li>• <strong>Ambiance :</strong> Décontractée, animée</li>
                    <li>• <strong>Service :</strong> Rapide et efficace</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Comment Commander</h3>
                  <p className="text-gray-700 mb-4">
                    Système de commande simple : menu papier avec cases à cocher, 
                    remis au serveur. Les kushikatsu arrivent au fur et à mesure.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">1</span>
                      <span>Installation libre</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">2</span>
                      <span>Menu papier à cocher</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">3</span>
                      <span>Commande boissons</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">4</span>
                      <span>Service continu</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⏰ Timing & Prix</h3>
                  <p className="text-gray-700 mb-4">
                    Parfait pour l'apéritif ou le dîner décontracté. 
                    Budget moyen de 1500-2500¥ pour un repas complet avec boissons.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Apéritif :</span>
                      <span className="font-semibold">800-1200¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dîner :</span>
                      <span className="font-semibold">1500-2500¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Groupe :</span>
                      <span className="font-semibold">2000-3000¥</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="text-gray-800 font-semibold">Durée moyenne :</span>
                      <span className="font-bold text-orange-600">1-2 heures</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Pratique */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                💡 Guide Pratique pour Visiteurs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">✅ Recommandations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🍢</span>
                      <span><strong>Commencez par les classiques :</strong> Bœuf, porc, poulet pour découvrir les bases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🍺</span>
                      <span><strong>Accompagnez de bière :</strong> La bière froide japonaise se marie parfaitement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🥬</span>
                      <span><strong>Utilisez le chou :</strong> Fourni gratuitement, il rafraîchit entre les bouchées</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">⏰</span>
                      <span><strong>Évitez 19h-21h :</strong> Pic de fréquentation, préférez 17h-19h ou après 21h</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">ℹ️ Informations Pratiques</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🏪</span>
                      <span><strong>Répartition :</strong> Plus de 300 restaurants dans tout le Japon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🚇</span>
                      <span><strong>Localisation :</strong> Centres-villes, quartiers d'affaires, zones commerçantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">💳</span>
                      <span><strong>Paiement :</strong> Espèces principalement, certains acceptent les cartes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🌐</span>
                      <span><strong>Site officiel :</strong> Localisation et menus en japonais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Régimes Alimentaires */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥗 Régimes Alimentaires & Restrictions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🚫 Végétarien/Végan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Options limitées</strong> : La majorité des kushikatsu contient viande ou poisson. 
                    Quelques options légumes disponibles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Kushikatsu légumes (aubergine, poivron)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Chou fourni (végétarien)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Huile de friture partagée</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">🐷 Halal/Sans Porc</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Attention requise</strong> : Porc présent dans certains kushikatsu. 
                    Pas de certification halal officielle.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Kushikatsu bœuf, poulet</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Kushikatsu porc</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Vérifier les ingrédients</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Prudence recommandée : panure contient gluten, 
                    huile de friture partagée entre tous les ingrédients.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (panure)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Fruits de mer (certains kushikatsu)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Contamination croisée possible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture du Kushikatsu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎌 La Culture du Kushikatsu d'Osaka
              </h2>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Patrimoine Culinaire</h3>
                    <p className="text-gray-700 mb-4">
                      Le kushikatsu est né dans les quartiers populaires d'Osaka comme nourriture 
                      de rue abordable et nourrissante. Kushikatsu Tanaka perpétue cette tradition 
                      en gardant l'esprit populaire et accessible.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Origine :</strong> Cuisine de rue d'Osaka (1920s)</li>
                      <li>• <strong>Philosophie :</strong> Nourriture simple et savoureuse</li>
                      <li>• <strong>Social :</strong> Rassemblement et convivialité</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Innovation & Tradition</h3>
                    <p className="text-gray-700 mb-4">
                      Kushikatsu Tanaka modernise l'expérience tout en respectant les traditions : 
                      nouveaux ingrédients, hygiène améliorée, mais toujours la même sauce secrète 
                      et les mêmes règles sacrées.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Modernité :</strong> Nouveaux ingrédients, hygiène</li>
                      <li>• <strong>Tradition :</strong> Sauce secrète, règles d'Osaka</li>
                      <li>• <strong>Global :</strong> Export de la culture japonaise</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    🍢 "Le Kushikatsu : Plus qu'un Plat, un Art de Vivre"
                  </h3>
                  <p className="text-gray-600">
                    Kushikatsu Tanaka transforme un simple plat frit en expérience culturelle authentique, 
                    où chaque bouchée raconte l'histoire d'Osaka et de sa générosité populaire.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/izakaya"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Izakaya
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
