import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";

export default function GindakoPage() {
  return (
    <>
      <ChainViewTracker chainName="gindako" chainCategory="street-food" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/chaines" className="text-gray-500 hover:text-purple-600">Chaînes</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Gindako</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-800 via-orange-700 to-yellow-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🐙</span>
              <span className="text-6xl mr-4">🔥</span>
              <span className="text-6xl">🥢</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gindako
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">銀だこ</p>
            <p className="text-xl mb-8 text-orange-100">
              Le Roi du Takoyaki - Boulettes de Poulpe d'Osaka au Monde
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">L'Art du Takoyaki Authentique</h2>
              <p className="text-lg text-orange-200">
                Depuis 1997, Gindako révolutionne le takoyaki traditionnel d'Osaka en créant 
                des boulettes de poulpe parfaitement croustillantes à l'extérieur et 
                fondantes à l'intérieur, dans l'esprit authentique du street food japonais.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Spécialité Osaka
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Street Food Premium
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Tradition 1997
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
                🏮 L'Innovation du Takoyaki Moderne
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🐙 Révolution Takoyaki (1997)</h3>
                  <p className="text-gray-700 mb-4">
                    Gindako naît en 1997 avec une mission révolutionnaire : transformer le takoyaki 
                    traditionnel d'Osaka en un produit standardisé de haute qualité, accessible 
                    partout au Japon et dans le monde.
                  </p>
                  <p className="text-gray-700">
                    L'innovation principale : une technique de cuisson unique qui garantit 
                    la texture parfaite "kari-fuma" (croustillant-fondant) à chaque bouchée.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Expansion Mondiale</h3>
                  <p className="text-gray-700 mb-4">
                    De ses débuts à Tokyo, Gindako s'est imposé comme LA référence mondiale 
                    du takoyaki, exportant cette spécialité d'Osaka dans plus de 10 pays.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>1997 :</strong> Premier stand à Tokyo</li>
                    <li>• <strong>2000s :</strong> Expansion nationale Japon</li>
                    <li>• <strong>2010s :</strong> Ouverture Asie (Taiwan, Hong Kong)</li>
                    <li>• <strong>2020s :</strong> Présence mondiale (USA, Europe)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Takoyaki */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🐙 L'Art du Takoyaki Gindako
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Takoyaki Classique */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🔥 Takoyaki Classique</h3>
                  <p className="text-gray-600 japanese-text mb-2">たこ焼き</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">580¥ (8 pièces)</p>
                  <p className="text-gray-700 mb-4">
                    Le takoyaki original Gindako : boulettes parfaitement rondes avec 
                    morceaux de poulpe généreux, sauce takoyaki secrète, mayonnaise 
                    et copeaux de bonite dansants.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Poulpe :</span>
                      <span className="text-sm font-semibold">Frais, généreux</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Texture :</span>
                      <span className="text-sm font-semibold">Kari-fuma</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sauce :</span>
                      <span className="text-sm font-semibold">Recette secrète</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Garniture :</span>
                      <span className="text-sm font-semibold">Katsuobushi + Mayo</span>
                    </div>
                  </div>
                </div>

                {/* Takoyaki Premium */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Takoyaki Premium</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアムたこ焼き</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">780¥-980¥ (8 pièces)</p>
                  <p className="text-gray-700 mb-4">
                    Versions haut de gamme avec ingrédients premium : poulpe sélectionné, 
                    sauces spéciales, garnitures raffinées et présentations créatives.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Jumbo Tako :</span>
                      <span className="text-sm font-semibold">780¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cheese Tako :</span>
                      <span className="text-sm font-semibold">680¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mentai Mayo :</span>
                      <span className="text-sm font-semibold">750¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Special Limited :</span>
                      <span className="text-sm font-semibold">980¥</span>
                    </div>
                  </div>
                </div>

                {/* Sets & Accompagnements */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥤 Sets & Boissons</h3>
                  <p className="text-gray-600 japanese-text mb-2">セット・ドリンク</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">800¥-1200¥</p>
                  <p className="text-gray-700 mb-4">
                    Sets takoyaki avec boissons fraîches, accompagnements d'Osaka 
                    et options dessert pour une expérience street food complète.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Drink :</span>
                      <span className="text-sm font-semibold">800¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Dessert :</span>
                      <span className="text-sm font-semibold">950¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Mega :</span>
                      <span className="text-sm font-semibold">1200¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Boisson seule :</span>
                      <span className="text-sm font-semibold">200¥-350¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technique de Cuisson */}
              <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">🔥 La Technique Gindako</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🎯 "Kari-Fuma" Perfection</h4>
                    <p className="text-sm text-gray-700">
                      <strong>Secret Gindako :</strong> Technique de cuisson en deux temps qui garantit 
                      l'extérieur parfaitement croustillant ("kari") et l'intérieur fondant ("fuma"). 
                      Cette texture unique est la signature de la marque.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🐙 Ingrédients Premium :</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Poulpe frais sélectionné quotidiennement</li>
                      <li>• Pâte à base de dashi authentique</li>
                      <li>• Sauce takoyaki recette secrète depuis 1997</li>
                      <li>• Katsuobushi (copeaux bonite) premium</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Street Food */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎪 L'Expérience Street Food Gindako
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🏪 Concept Stand</h3>
                  <p className="text-gray-700 mb-4">
                    Format stand compact typique du street food japonais. 
                    Cuisson en direct visible, service rapide, atmosphère décontractée 
                    et conviviale.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Format :</strong> Stand compact</li>
                    <li>• <strong>Service :</strong> À emporter prioritaire</li>
                    <li>• <strong>Cuisson :</strong> En direct, visible</li>
                    <li>• <strong>Attente :</strong> 3-7 minutes</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Comment Commander</h3>
                  <p className="text-gray-700 mb-4">
                    Système simple : menu visuel, commande au comptoir, 
                    paiement immédiat, attente courte et récupération.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">1</span>
                      <span>Choix menu visuel</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">2</span>
                      <span>Commande au comptoir</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">3</span>
                      <span>Paiement immédiat</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">4</span>
                      <span>Récupération rapide</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Localisation</h3>
                  <p className="text-gray-700 mb-4">
                    Stands stratégiquement placés dans les zones de forte affluence : 
                    gares, centres commerciaux, quartiers animés.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gares JR :</span>
                      <span className="font-semibold">Fréquent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Centres commerciaux :</span>
                      <span className="font-semibold">Food courts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quartiers jeunes :</span>
                      <span className="font-semibold">Shibuya, Harajuku</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="text-gray-800 font-semibold">Horaires :</span>
                      <span className="font-bold text-red-600">10h-21h</span>
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
                      <span className="text-green-600 mr-2">🐙</span>
                      <span><strong>Commencez par le classique :</strong> Takoyaki 8 pièces pour découvrir l'authentique</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🔥</span>
                      <span><strong>Mangez chaud :</strong> Meilleur immédiatement après cuisson, texture optimale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🥢</span>
                      <span><strong>Technique :</strong> Utilisez les cure-dents fournis, attention c'est très chaud!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">📱</span>
                      <span><strong>App Gindako :</strong> Localisation des stands et promotions exclusives</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">ℹ️ Informations Pratiques</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🏪</span>
                      <span><strong>Répartition :</strong> Plus de 800 stands dans tout le Japon</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🚇</span>
                      <span><strong>Accès :</strong> Majoritairement dans/près des gares principales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">💳</span>
                      <span><strong>Paiement :</strong> Espèces + cartes IC (Suica/Pasmo) + cartes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🌐</span>
                      <span><strong>International :</strong> Présent en Asie, USA, quelques villes européennes</span>
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
                    <strong>Non adapté</strong> : Le takoyaki contient du poulpe et la pâte 
                    utilise dashi (bouillon de poisson). Aucune option végétarienne.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Poulpe (ingrédient principal)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Dashi (bouillon poisson)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Katsuobushi (copeaux bonite)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">🐷 Halal/Sans Porc</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Compatible</strong> : Pas de porc dans les takoyaki, 
                    mais attention aux sauces qui peuvent contenir traces.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pas de porc</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Poulpe (fruits de mer)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Vérifier sauces (traces possibles)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Attention : gluten (farine), fruits de mer (poulpe, dashi), 
                    œufs dans la pâte. Informations détaillées disponibles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (farine)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Fruits de mer (poulpe)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Œufs (pâte)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture du Takoyaki */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎌 La Culture du Takoyaki au Japon
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Héritage d'Osaka</h3>
                    <p className="text-gray-700 mb-4">
                      Le takoyaki est né à Osaka dans les années 1930 comme nourriture de rue 
                      populaire. Gindako modernise cette tradition en préservant l'authenticité 
                      tout en garantissant qualité et hygiène constantes.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Origine :</strong> Street food d'Osaka (1930s)</li>
                      <li>• <strong>Tradition :</strong> Cuisson sur plaques spéciales</li>
                      <li>• <strong>Social :</strong> Convivialité et partage</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Innovation Gindako</h3>
                    <p className="text-gray-700 mb-4">
                      Gindako révolutionne le takoyaki en créant le premier concept de chaîne 
                      standardisée, exportant cette spécialité d'Osaka dans le monde entier 
                      sans perdre son âme authentique.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Standardisation :</strong> Qualité constante</li>
                      <li>• <strong>Innovation :</strong> Technique "kari-fuma"</li>
                      <li>• <strong>Global :</strong> Ambassadeur du takoyaki mondial</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    🐙 "Gindako : L'Âme d'Osaka dans Chaque Boulette"
                  </h3>
                  <p className="text-gray-600">
                    Plus qu'un simple snack, le takoyaki Gindako incarne l'esprit d'Osaka : 
                    chaleureux, généreux, authentique et toujours avec le sourire.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/street-food"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Street Food
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
