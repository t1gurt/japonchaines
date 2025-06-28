import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import JollyPastaCulturalMissions from "./components/JollyPastaCulturalMissions";

export default function JollyPastaPage() {
  return (
    <>
      <ChainViewTracker chainName="jolly-pasta" chainCategory="family-restaurants" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/family-restaurants" className="text-gray-500 hover:text-purple-600">Family Restaurants</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Jolly Pasta</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-800 via-orange-700 to-yellow-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🍝</span>
              <span className="text-6xl mr-4">🇮🇹</span>
              <span className="text-6xl">👨‍👩‍👧‍👦</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jolly Pasta
            </h1>
            <p className="text-2xl mb-4 text-yellow-100 japanese-text">ジョリーパスタ</p>
            <p className="text-xl mb-8 text-yellow-100">
              L'Italie Familiale au Japon - Pasta Autentica à Prix Accessible
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Trattoria Japonaise Populaire</h2>
              <p className="text-lg text-yellow-200">
                Depuis 1979, Jolly Pasta démocratise la cuisine italienne au Japon 
                en proposant des pâtes authentiques dans une atmosphère familiale 
                chaleureuse, accessible à tous les budgets.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Cuisine Italienne
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Restaurant Familial
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Prix Populaires
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Concept */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇮🇹 L'Italie Accessible au Japon
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🍝 Naissance d'une Passion (1979)</h3>
                  <p className="text-gray-700 mb-4">
                    Jolly Pasta naît de la volonté de rendre la cuisine italienne 
                    accessible aux familles japonaises, à une époque où les pâtes 
                    étaient encore un luxe exotique.
                  </p>
                  <p className="text-gray-700">
                    L'objectif : proposer de vraies saveurs italiennes avec 
                    l'hospitalité japonaise, dans des portions généreuses 
                    et à des prix familiaux raisonnables.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Philosophie Familiale</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission :</strong> "Buongiorno ! Bonne humeur en famille". 
                    Jolly Pasta cultive une atmosphère décontractée où toutes 
                    les générations se retrouvent autour de bons plats.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Familial :</strong> Menu enfants et espaces adaptés</li>
                    <li>• <strong>Authentique :</strong> Recettes italiennes respectées</li>
                    <li>• <strong>Accessible :</strong> Prix modérés, portions généreuses</li>
                    <li>• <strong>Convivial :</strong> Service chaleureux japonais</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Signature */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🍝 Menu Italiana Autentica
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Pâtes Classiques */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍝 Pâtes Signature</h3>
                  <p className="text-gray-600 japanese-text mb-2">パスタクラシック</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">680¥-1380¥</p>
                  <p className="text-gray-700 mb-4">
                    Pâtes authentiques italiennes : spaghetti al dente, 
                    sauces maison préparées quotidiennement, fromages importés.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Spaghetti Bolognaise :</span>
                      <span className="text-sm font-semibold">880¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Carbonara Classique :</span>
                      <span className="text-sm font-semibold">980¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Penne Arrabbiata :</span>
                      <span className="text-sm font-semibold">780¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Fruits de Mer :</span>
                      <span className="text-sm font-semibold">1280¥</span>
                    </div>
                  </div>
                </div>

                {/* Pizza & Specialità */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍕 Pizza & Risotto</h3>
                  <p className="text-gray-600 japanese-text mb-2">ピッツァ＆リゾット</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">880¥-1580¥</p>
                  <p className="text-gray-700 mb-4">
                    Pizzas à pâte fine croustillante, risottos crémeux al dente. 
                    Tous les classiques de la trattoria italienne.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pizza Margherita :</span>
                      <span className="text-sm font-semibold">880¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pizza Quattro Stagioni :</span>
                      <span className="text-sm font-semibold">1280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Risotto aux Champignons :</span>
                      <span className="text-sm font-semibold">1180¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Calzone Jambon :</span>
                      <span className="text-sm font-semibold">1080¥</span>
                    </div>
                  </div>
                </div>

                {/* Menu Famille */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Menu Famille</h3>
                  <p className="text-gray-600 japanese-text mb-2">ファミリーセット</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">480¥-1980¥</p>
                  <p className="text-gray-700 mb-4">
                    Sets familiaux généreux, menus enfants adaptés, 
                    partage convivial à l'italienne, desserts maison.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Menu Enfant :</span>
                      <span className="text-sm font-semibold">480¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Famille 2-3 pers :</span>
                      <span className="text-sm font-semibold">1680¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Grande Famiglia 4-6 pers :</span>
                      <span className="text-sm font-semibold">2980¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tiramisu Maison :</span>
                      <span className="text-sm font-semibold">420¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Complet */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Menu Complet Jolly Pasta</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Antipasti & Entrées :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Antipasto Misto</strong> - 680¥ - Assortiment italien</li>
                      <li>• <strong>Bruschetta Tomate Basilic</strong> - 480¥ - Pain grillé authentique</li>
                      <li>• <strong>Salade César</strong> - 580¥ - Laitue croquante, parmesan</li>
                      <li>• <strong>Soupe Minestrone</strong> - 380¥ - Légumes mijotés tradition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Boissons & Desserts :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Café Espresso</strong> - 280¥ - Importé d'Italie</li>
                      <li>• <strong>Vin Rouge Chianti</strong> - 680¥ - Bouteille/verre disponible</li>
                      <li>• <strong>Gelato 3 Boules</strong> - 380¥ - Glace italienne artisanale</li>
                      <li>• <strong>Panna Cotta</strong> - 450¥ - Dessert signature maison</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Familiale */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                👨‍👩‍👧‍👦 L'Expérience Famiglia Jolly
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🇮🇹 Atmosphère Trattoria</h3>
                  <p className="text-gray-700 mb-4">
                    Décor chaleureux inspiré des trattorias italiennes : 
                    couleurs chaudes, mobilier en bois, photos de l'Italie.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Design :</strong> Trattoria authentique italienne</li>
                    <li>• <strong>Musique :</strong> Hits italiens et ambiance</li>
                    <li>• <strong>Éclairage :</strong> Chaleureux et convivial</li>
                    <li>• <strong>Espace :</strong> Tables familiales spacieuses</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">👶 Accueil Enfants</h3>
                  <p className="text-gray-700 mb-4">
                    Service spécialement adapté aux familles avec enfants : 
                    chaises hautes, menu coloré, portions adaptées.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chaises hautes :</span>
                      <span className="font-semibold">Disponibles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Menu enfant :</span>
                      <span className="font-semibold">480¥-680¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Portions :</span>
                      <span className="font-semibold">Adaptées âge</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jouets :</span>
                      <span className="font-semibold">Petits cadeaux</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🍝 Service Rapide & Frais</h3>
                  <p className="text-gray-700 mb-4">
                    Cuisine visible, préparation rapide, ingrédients frais 
                    renouvelés quotidiennement pour garantir l'authenticité.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Pâtes cuites à la commande</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Sauces préparées quotidiennement</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Service en 10-15 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Staff formé aux recettes italiennes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Commande */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎯 Guide de Commande Jolly Pasta
              </h2>
              
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">📋 Comment Commander</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Installation</p>
                          <p className="text-sm text-gray-600">Accueil chaleureux, placement en famille</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Menu & Conseils</p>
                          <p className="text-sm text-gray-600">Staff peut recommander selon goûts</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Commande table</p>
                          <p className="text-sm text-gray-600">Service traditionnel, pas de machine</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Dégustation famiglia</p>
                          <p className="text-sm text-gray-600">Plats servis ensemble, partage convivial</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">💡 Conseils Expérience</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🍝</span>
                        <span><strong>Spécialité :</strong> Essayez les sauces maison signature</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">👨‍👩‍👧‍👦</span>
                        <span><strong>Famille :</strong> Sets à partager très avantageux</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🕐</span>
                        <span><strong>Timing :</strong> Moins d'attente hors heures de pointe</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">💰</span>
                        <span><strong>Budget :</strong> Sets lunch très économiques</span>
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
                    <strong>Très bonnes options</strong> : cuisine italienne naturellement 
                    riche en plats végétariens savoureux et authentiques.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pâtes aux légumes, fromages</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pizza Margherita, Quattro Formaggi</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Risotto champignons, légumes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Salades, antipasti végétariens</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Options limitées</strong> : beaucoup de plats contiennent 
                    du jambon ou pancetta. Informer le staff pour adaptations.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pâtes tomate, fromage, légumes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pizza sans charcuterie</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Carbonara, Amatriciana (porc)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Demander adaptation possible</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Cuisine italienne avec gluten, lait, œufs fréquents. 
                    Staff peut informer sur ingrédients spécifiques.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (pâtes, pizza, pain)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Lait (fromages, sauces crémeuses)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Œufs (pâtes fraîches, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Staff peut adapter certains plats</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Italienne au Japon */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇮🇹 L'Italie Adoptée par le Japon
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🍝 Révolution Culinaire</h3>
                    <p className="text-gray-700 mb-4">
                      Jolly Pasta a joué un rôle clé dans l'adoption de la cuisine 
                      italienne par les familles japonaises, transformant les pâtes 
                      d'exotisme en comfort food quotidien.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Pionnier :</strong> Démocratisation des pâtes</li>
                      <li>• <strong>Adaptation :</strong> Goûts japonais respectés</li>
                      <li>• <strong>Accessibilité :</strong> Prix familiaux populaires</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Impact Social</h3>
                    <p className="text-gray-700 mb-4">
                      En créant un espace familial décontracté autour de la cuisine 
                      italienne, Jolly Pasta a influencé la culture du repas familial 
                      au Japon, encourageant le partage et la convivialité.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Tradition :</strong> Repas famille réunis</li>
                      <li>• <strong>Modernité :</strong> Ouverture internationale</li>
                      <li>• <strong>Générations :</strong> Plaisirs multigénérationnels</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    🇮🇹 "Jolly Pasta : Quand l'Italie Rencontre la Famiglia Japonaise"
                  </h3>
                  <p className="text-gray-600">
                    En rendant la cuisine italienne accessible et familiale, Jolly Pasta 
                    a créé un pont culturel entre l'art de vivre italien et l'hospitalité 
                    japonaise, offrant une expérience authentique et chaleureuse.
                  </p>
                </div>
              </div>
            </div>

            {/* Missions Culturelles */}
            <JollyPastaCulturalMissions />

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/family-restaurants"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Restaurants Familiaux
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
