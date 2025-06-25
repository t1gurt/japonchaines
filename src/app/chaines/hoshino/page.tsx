import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";

export default function HoshinoPage() {
  return (
    <>
      <ChainViewTracker chainName="hoshino" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/chaines" className="text-gray-500 hover:text-purple-600">Chaînes</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Hoshino Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">⭐</span>
              <span className="text-6xl mr-4">☕</span>
              <span className="text-6xl">🌸</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hoshino Coffee
            </h1>
            <p className="text-2xl mb-4 text-yellow-100 japanese-text">星乃珈琲店</p>
            <p className="text-xl mb-8 text-yellow-100">
              L'Âme du Showa Moderne - Renaissance de la Nostalgie Café
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Nostalgie Showa Authentique</h2>
              <p className="text-lg text-yellow-200">
                Depuis 2011, Hoshino Coffee ressuscite la magie des kissaten de l'ère Showa, 
                créant un pont temporel entre la nostalgie du Japon d'autrefois 
                et les aspirations contemporaines de réconfort authentique.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Nostalgie Showa
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                Café Siphon Artisanal
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Pancakes Signature
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Philosophie */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌸 Renaissance de l'Ère Showa
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Naissance de la Nostalgie (2011)</h3>
                  <p className="text-gray-700 mb-4">
                    Hoshino Coffee naît d'une vision romantique : recréer l'atmosphère 
                    chaleureuse des kissaten de l'ère Showa (1926-1989), 
                    époque dorée où le temps s'écoulait différemment.
                  </p>
                  <p className="text-gray-700">
                    Le concept mélange nostalgie authentique et confort moderne : 
                    mobilier vintage, service siphon traditionnel, mais avec 
                    l'hospitalité et la qualité d'aujourd'hui.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🕰️ Philosophie Temporelle</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission :</strong> "Retrouver le temps perdu". Hoshino incarne 
                    la nostalgie positive du Japon : l'époque où chaque café était 
                    un voyage sensoriel et émotionnel.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Nostalgie :</strong> Esthétique Showa authentique</li>
                    <li>• <strong>Artisanat :</strong> Café siphon traditionnel</li>
                    <li>• <strong>Confort :</strong> Atmosphère chaleureuse</li>
                    <li>• <strong>Qualité :</strong> Ingrédients premium sélectionnés</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Signature */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ⭐ L'Art du Café Nostalgique Hoshino
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Café Siphon */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Café Siphon Artisanal</h3>
                  <p className="text-gray-600 japanese-text mb-2">サイフォンコーヒー</p>
                  <p className="text-2xl font-bold text-amber-600 mb-3">480¥-680¥</p>
                  <p className="text-gray-700 mb-4">
                    Café préparé selon la méthode siphon traditionnelle : 
                    spectacle visuel fascinant et goût incomparable d'authenticité.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blend Original :</span>
                      <span className="text-sm font-semibold">480¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Siphon Premium :</span>
                      <span className="text-sm font-semibold">580¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blend Spécial :</span>
                      <span className="text-sm font-semibold">680¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Temps préparation :</span>
                      <span className="text-sm font-semibold">5-7 min</span>
                    </div>
                  </div>
                </div>

                {/* Pancakes Signature */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥞 Pancakes Nostalgiques</h3>
                  <p className="text-gray-600 japanese-text mb-2">懐かしのパンケーキ</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">880¥-1280¥</p>
                  <p className="text-gray-700 mb-4">
                    Pancakes moelleux style Showa : épais, fondants, servis chauds 
                    avec beurre artisanal et sirop d'érable authentique.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pancakes Classic :</span>
                      <span className="text-sm font-semibold">880¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Fruits de Saison :</span>
                      <span className="text-sm font-semibold">1180¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Special Premium :</span>
                      <span className="text-sm font-semibold">1280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Épaisseur :</span>
                      <span className="text-sm font-semibold">3-4 cm</span>
                    </div>
                  </div>
                </div>

                {/* Spécialités Rétro */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍰 Desserts Rétro</h3>
                  <p className="text-gray-600 japanese-text mb-2">昭和デザート</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">580¥-980¥</p>
                  <p className="text-gray-700 mb-4">
                    Desserts inspirés de l'ère Showa : pudding caramel, 
                    cheese-cake japonais, parfaits aux fruits nostalgiques.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pudding Caramel :</span>
                      <span className="text-sm font-semibold">580¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cheese-cake :</span>
                      <span className="text-sm font-semibold">680¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Parfait Rétro :</span>
                      <span className="text-sm font-semibold">880¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Café+Dessert :</span>
                      <span className="text-sm font-semibold">980¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Complet */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Menu Complet Hoshino</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Boissons Chaudes :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Café au Lait Artisanal</strong> - 520¥ - Lait mousseusement parfait</li>
                      <li>• <strong>Thé Royal Milk (ロイヤルミルクティー)</strong> - 480¥ - Thé crémeux style Showa</li>
                      <li>• <strong>Chocolat Chaud Premium</strong> - 580¥ - Cacao belge authentique</li>
                      <li>• <strong>Thé Noir Ceylon</strong> - 450¥ - Sélection premium</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Repas Légers :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Sandwich Club (クラブサンド)</strong> - 980¥ - Triple étage généreux</li>
                      <li>• <strong>Toast Épais Beurré</strong> - 680¥ - Pain artisanal + beurre fermier</li>
                      <li>• <strong>Curry Nostalgique</strong> - 1080¥ - Recette style Showa</li>
                      <li>• <strong>Omelette Rice</strong> - 1180¥ - Comfort food japonais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Showa */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌸 L'Expérience Showa Authentique
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🕰️ Ambiance Nostalgique</h3>
                  <p className="text-gray-700 mb-4">
                    Décor soigneusement pensé : mobilier vintage, éclairage tamisé, 
                    musique jazz douce. Chaque détail évoque l'âge d'or du kissaten.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Design :</strong> Vintage authentique Showa</li>
                    <li>• <strong>Mobilier :</strong> Bois noble, cuir vieilli</li>
                    <li>• <strong>Éclairage :</strong> Lampes rétro chaleureuses</li>
                    <li>• <strong>Musique :</strong> Jazz et classique doux</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">☕ Rituel Café Siphon</h3>
                  <p className="text-gray-700 mb-4">
                    Spectacle fascinant de la préparation siphon : bulles, vapeur, 
                    transformation alchimique du café. Un art visuel et gustatif.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Préparation :</span>
                      <span className="font-semibold">5-7 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Température :</span>
                      <span className="font-semibold">85-90°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spectacle :</span>
                      <span className="font-semibold">Visible du comptoir</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Résultat :</span>
                      <span className="font-semibold">Café d'exception</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎌 Service à l'Ancienne</h3>
                  <p className="text-gray-700 mb-4">
                    Service attentionné style Showa : politesse exquise, 
                    timing parfait, attention aux moindres détails.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Accueil chaleureux personnalisé</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Présentation soignée des plats</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Timing respecté, sans précipitation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span>Atmosphère détendue et feutrée</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Pancakes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥞 Guide des Pancakes Signature
              </h2>
              
              <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">🎯 L'Art du Pancake Parfait</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Commandez avec patience</p>
                          <p className="text-sm text-gray-600">Préparation à la commande : 15-20 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Admirez la présentation</p>
                          <p className="text-sm text-gray-600">Arrivée chaude, beurre fondant, sirop à côté</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Savourez immédiatement</p>
                          <p className="text-sm text-gray-600">Texture optimale à chaud, moelleux parfait</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Accompagnez de café siphon</p>
                          <p className="text-sm text-gray-600">Mariage parfait avec café artisanal</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">💡 Secrets des Pancakes Hoshino</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">🥞</span>
                        <span><strong>Épaisseur :</strong> 3-4 cm, texture soufflée unique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">🧈</span>
                        <span><strong>Beurre :</strong> Fermier premium, fondant à cœur</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">🍯</span>
                        <span><strong>Sirop :</strong> Érable authentique canadien</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">⏰</span>
                        <span><strong>Timing :</strong> Idéal pour brunch tranquille</span>
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
                    <strong>Options disponibles</strong> : Pancakes, desserts, boissons. 
                    Menu limité mais quelques choix savoureux pour végétariens.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pancakes (œufs/lait)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Tous cafés et thés</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Desserts sans viande</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Vérifier sandwichs (jambon)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Généralement OK</strong> : La plupart des options 
                    ne contiennent pas de porc. Pas de certification halal officielle.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pancakes, desserts, boissons</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Omelette rice</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Sandwich club (vérifier)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Demander détails au staff</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Ingrédients premium avec informations allergènes. 
                    Staff expérimenté peut renseigner sur compositions détaillées.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (pancakes, pain)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Lait (pancakes, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Œufs (pancakes, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Staff formé, infos détaillées</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Showa */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌸 Hoshino et la Nostalgie Showa
              </h2>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🕰️ L'Âge d'Or Réinventé</h3>
                    <p className="text-gray-700 mb-4">
                      L'ère Showa (1926-1989) représente pour les Japonais une époque 
                      de simplicité et d'authenticité. Hoshino ressuscite cette nostalgie 
                      avec respect et créativité moderne.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Esthétique :</strong> Design vintage authentique</li>
                      <li>• <strong>Valeurs :</strong> Artisanat et temps de qualité</li>
                      <li>• <strong>Expérience :</strong> Lenteur assumée et valorisée</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Innovation Nostalgique</h3>
                    <p className="text-gray-700 mb-4">
                      Hoshino ne copie pas le passé, il le réinterprète : 
                      qualité moderne + esthétique vintage + service contemporain. 
                      Une formule qui séduit toutes les générations.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Multigénérationnel :</strong> Nostalgie partagée</li>
                      <li>• <strong>Qualité :</strong> Standards modernes exigeants</li>
                      <li>• <strong>Émotion :</strong> Connexion au temps passé</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ⭐ "Hoshino : Quand la Nostalgie Devient Art de Vivre"
                  </h3>
                  <p className="text-gray-600">
                    En ressuscitant l'esprit des kissaten Showa, Hoshino Coffee offre bien plus 
                    qu'un café : un voyage temporel vers une époque où chaque moment 
                    était savouré avec intention et beauté.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/cafe"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
