import Link from "next/link";

export default function RamenPage() {  const ramenChains = [
    {
      name: "Ichiran",
      japanese: "一蘭",
      description: "Célèbre pour ses ramen tonkotsu et son système de commande unique avec box individuels.",
      specialties: ["Tonkotsu Ramen", "Ramen sans ail", "Ramen extra épicé"],
      priceRange: "¥800-1200",
      orderingMethod: "Formulaire papier personnalisé",
      vegetarianOptions: "Non disponibles",
      uniqueFeatures: ["Système 'Ajimi-Shūchū'", "Box individuels", "Commande sans interaction"],
      founded: "1960",
      href: "/chaines/ichiran"
    },
    {
      name: "Ippudo",
      japanese: "一風堂",
      description: "Chaîne haut de gamme spécialisée dans les ramen tonkotsu de Hakata, fondée à Fukuoka.",
      specialties: ["Shiromaru Motoaji", "Akamaru Shinaji", "Karaka-men"],
      priceRange: "¥900-1500",
      orderingMethod: "Commande au serveur",
      vegetarianOptions: "Ramen végétarien disponible",
      uniqueFeatures: ["Expansion internationale", "Design moderne", "Qualité premium"],
      founded: "1985",
      href: "/chaines/ippudo"
    },
    {
      name: "Tenkaippin",
      japanese: "天下一品",
      description: "Connue pour son bouillon kotteri (épais et riche) unique à base d'os de porc et légumes.",
      specialties: ["Kotteri Ramen", "Assari Ramen", "Karaage"],
      priceRange: "¥700-1100",
      orderingMethod: "Distributeur automatique",
      vegetarianOptions: "Limitées",
      uniqueFeatures: ["Bouillon 'kotteri' signature", "Fans dévoués", "Texture unique"],
      founded: "1971",
      href: "/chaines/tenkaippin"
    }
  ];
  const ramenTypes = [
    {
      name: "Tonkotsu Ramen",
      japanese: "豚骨ラーメン",
      description: "Bouillon blanc et crémeux à base d'os de porc mijotés pendant des heures",
      region: "Kyushu (Fukuoka)",
      characteristics: "Riche, crémeux, saveur intense",
      toppings: "Chashu, œuf mariné, oignons verts, algues nori",
      history: "Né en 1947 à Kurume par accident, quand un cuisinier a oublié d'éteindre le feu sous les os de porc"
    },
    {
      name: "Shoyu Ramen",
      japanese: "醤油ラーメン",
      description: "Bouillon clair à base de sauce soja, le style le plus traditionnel",
      region: "Tokyo",
      characteristics: "Léger, savoureux, équilibré",
      toppings: "Chashu, menma, oignons verts, naruto",
      history: "Créé en 1910 au restaurant Rairaiken d'Asakusa, premier ramen adapté au goût japonais"
    },
    {
      name: "Shio Ramen",
      japanese: "塩ラーメン",
      description: "Bouillon salé le plus léger, souvent à base de fruits de mer",
      region: "Hakodate",
      characteristics: "Délicat, clair, rafraîchissant",
      toppings: "Chashu, wonbok, oignons verts",
      history: "Le plus ancien style, permettant de goûter purement la qualité du bouillon"
    },
    {
      name: "Miso Ramen",
      japanese: "味噌ラーメン",
      description: "Bouillon à base de pâte miso, souvent plus robuste et épicé",
      region: "Sapporo",
      characteristics: "Riche, salé, complexe",
      toppings: "Chashu, maïs, beurre, oignons verts",
      history: "Inventé en 1954 au restaurant Aji no Sanpei à Sapporo, révolutionnant le monde du ramen"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-red-600">
                Chain Japanese Restaurants
              </Link>
              <span className="ml-2 text-sm text-gray-500">
                日本のチェーン飲食店
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-red-600">
                Accueil
              </Link>
              <Link href="/type-plat" className="text-gray-900 hover:text-red-600 font-medium">
                Par Type de Plat
              </Link>
              <Link href="/chaines" className="text-gray-600 hover:text-red-600">
                Par Chaîne A-Z
              </Link>
              <Link href="/guides" className="text-gray-600 hover:text-red-600">
                Guides Pratiques
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Type de Plat</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Ramen</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-red-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍜</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Ramen
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">ラーメン</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Le plat de nouilles le plus emblématique du Japon. Nouilles de blé servies 
                dans un bouillon savoureux avec diverses garnitures.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥700-1500
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Réconfortant
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Nombreuses variétés
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L'Art du Ramen</h3>
              <p className="text-gray-600 mb-4">
                Le ramen moderne est né au début du 20ème siècle, influencé par les nouilles 
                chinoises. Chaque région du Japon a développé son propre style unique.
              </p>
              <p className="text-gray-600">
                Un bon ramen se compose de trois éléments essentiels : le bouillon (dashi), 
                les nouilles (men) et les garnitures (toppings). L'harmonie entre ces éléments 
                crée l'expérience ramen parfaite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ramen Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Quatre Grands Types de Ramen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ramenTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{type.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Origine : </span>
                    <span className="text-gray-600">{type.region}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Caractère : </span>
                    <span className="text-gray-600">{type.characteristics}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Garnitures : </span>
                    <span className="text-gray-600">{type.toppings}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Histoire : </span>
                    <span className="text-gray-600 text-xs">{type.history}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principales Chaînes de Ramen
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {ramenChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xs text-gray-500">Logo</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
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
                      <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Prix : </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Fondée : </span>
                        <span className="text-gray-600">{chain.founded}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Commande : </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Caractéristiques uniques :</h4>
                      <div className="flex flex-wrap gap-1">
                        {chain.uniqueFeatures.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide de Commande pour les Ramen
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-800 mb-4">🎫 Méthodes de Commande</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Distributeur :</strong> La majorité des chaînes</li>
                <li>• <strong>Formulaire :</strong> Ichiran (personnalisation)</li>
                <li>• <strong>Serveur :</strong> Restaurants haut de gamme</li>
                <li>• <strong>QR Code :</strong> Nouvelles chaînes modernes</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-4">🍜 Personnalisation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>硬さ (Katasa) :</strong> Fermeté des nouilles</li>
                <li>• <strong>濃さ (Kosa) :</strong> Intensité du bouillon</li>
                <li>• <strong>油 (Abura) :</strong> Quantité d'huile</li>
                <li>• <strong>ニンニク (Ninniku) :</strong> Ail</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🥢 Étiquette Ramen</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Aspirez les nouilles bruyamment (OK !)</li>
                <li>• Mangez rapidement (les nouilles ramollissent)</li>
                <li>• Ne laissez pas de bouillon</li>
                <li>• Libérez votre place rapidement</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/guides/commander"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
            >
              Guide Complet de Commande
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural History Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Histoire et Culture du Ramen
            <span className="block text-lg text-gray-600 mt-2">ラーメンの歴史と文化</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🏮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Origines (1910-1920)</h3>
              <p className="text-gray-600 mb-4">
                Le ramen moderne naît en 1910 au restaurant <strong>Rairaiken</strong> d'Asakusa, Tokyo. 
                Le propriétaire Ozaki Kanichi adapte les nouilles chinoises au goût japonais en utilisant 
                un bouillon plus léger avec de la sauce soja.
              </p>
              <p className="text-sm text-gray-500">
                Cette "japonisation" d'un plat chinois marque le début de l'évolution unique du ramen.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expansion (1920-1950)</h3>
              <p className="text-gray-600 mb-4">
                Le <strong>Grand Séisme de Kantō (1923)</strong> disperse les cuisiniers de Tokyo dans tout 
                le Japon. Puis, après la Seconde Guerre mondiale, les rapatriés de Chine et la farine 
                américaine bon marché démocratisent le ramen.
              </p>
              <p className="text-sm text-gray-500">
                Le ramen devient la nourriture de reconstruction du Japon d'après-guerre.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation (1950-présent)</h3>
              <p className="text-gray-600 mb-4">
                Les années 1950-60 voient naître les grandes innovations : <strong>miso ramen</strong> (1954), 
                <strong>tsukemen</strong> (1955), et l'invention du <strong>ramen instantané</strong> (1958) 
                qui popularise mondialement le terme "ramen".
              </p>
              <p className="text-sm text-gray-500">
                De simple plat populaire, le ramen devient un art culinaire raffiné.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Les Trois Piliers du Ramen Moderne
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🥄</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Dashi (出汁)</h4>
                <p className="text-gray-600 text-sm">
                  Le bouillon de base, extrait d'os de porc, poulet, poisson ou légumes. 
                  Peut être <strong>chintan</strong> (clair) ou <strong>paitan</strong> (trouble).
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🥢</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Tare (タレ)</h4>
                <p className="text-gray-600 text-sm">
                  L'assaisonnement concentré qui détermine le type : shoyu (soja), 
                  shio (sel), ou miso (pâte de soja fermentée).
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🍜</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Kansui (かん水)</h4>
                <p className="text-gray-600 text-sm">
                  L'eau alcaline qui donne aux nouilles leur texture caractéristique, 
                  leur couleur jaunâtre et leur goût unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Ramen Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ramen Régionaux Emblématiques
            <span className="block text-lg text-gray-600 mt-2">ご当地ラーメン</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">❄️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sapporo Ramen</h3>
                  <p className="text-gray-600">札幌ラーメン - Hokkaido</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Miso ramen</strong> né en 1954 au restaurant "Aji no Sanpei". Bouillon épais au miso, 
                nouilles épaisses et ondulées, garni de maïs et beurre. L'épaisse couche de graisse 
                protège du froid hivernal.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Spécialité :</strong> Miso + légumes sautés</div>
                <div><strong>Particularité :</strong> Cuisson au wok</div>
                <div><strong>Saison :</strong> Parfait en hiver</div>
                <div><strong>Prix :</strong> ¥800-1200</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🌸</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hakata Ramen</h3>
                  <p className="text-gray-600">博多ラーメン - Fukuoka</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Tonkotsu</strong> au bouillon blanc crémeux, né par accident en 1947. Nouilles très fines, 
                cuisson rapide. Système unique de "kaedama" (nouilles supplémentaires) car elles s'amollissent vite.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Spécialité :</strong> Tonkotsu + chashu</div>
                <div><strong>Particularité :</strong> Système kaedama</div>
                <div><strong>Garnitures :</strong> Gingembre rouge</div>
                <div><strong>Prix :</strong> ¥600-900</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🏔️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Kitakata Ramen</h3>
                  <p className="text-gray-600">喜多方ラーメン - Fukushima</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Tradition du <strong>"asa-ra"</strong> (ramen du matin) depuis 1925. Bouillon shoyu léger, 
                nouilles plates et ondulées à haute teneur en eau. Chashu généreux recouvrant le bol.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Spécialité :</strong> Shoyu + chashu XXL</div>
                <div><strong>Particularité :</strong> Petit-déjeuner</div>
                <div><strong>Nouilles :</strong> Plates et épaisses</div>
                <div><strong>Prix :</strong> ¥700-1000</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🌊</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Yokohama Iekei</h3>
                  <p className="text-gray-600">横浜家系 - Kanagawa</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Créé en 1974 par Yoshimura Minoru. Fusion tonkotsu-shoyu avec huile de poulet (chi-yu). 
                Personnalisation : dureté des nouilles, intensité du goût, quantité d'huile.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Spécialité :</strong> Tonkotsu-shoyu</div>
                <div><strong>Particularité :</strong> Personnalisation</div>
                <div><strong>Garnitures :</strong> 3 feuilles nori</div>
                <div><strong>Prix :</strong> ¥800-1100</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Ramen Trends */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tendances Modernes du Ramen
            <span className="block text-lg text-gray-600 mt-2">現代のラーメントレンド</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tantanmen</h3>
              <p className="text-gray-600 text-sm mb-3">
                Version japonaise du dandan chinois. Bouillon crémeux au sésame et miso, moins épicé que l'original.
              </p>
              <span className="text-xs text-orange-600 font-medium">Tendance croissante</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🍅</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tomato Ramen</h3>
              <p className="text-gray-600 text-sm mb-3">
                Innovation moderne combinant bouillon traditionnel et tomates. Fusion East-West populaire.
              </p>
              <span className="text-xs text-green-600 font-medium">Innovation récente</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🥦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vegan Ramen</h3>
              <p className="text-gray-600 text-sm mb-3">
                Bouillons à base de légumes, miso et algues. Répond à la demande croissante pour des options végétales.
              </p>
              <span className="text-xs text-blue-600 font-medium">Marché émergent</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mazesoba</h3>
              <p className="text-gray-600 text-sm mb-3">
                "Ramen sec" sans bouillon, mélangé avec une sauce épaisse. Alternative moderne très populaire.
              </p>
              <span className="text-xs text-purple-600 font-medium">Style établi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Phrases Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Phrases Utiles pour Commander
            <span className="block text-lg text-gray-600 mt-2">便利なフレーズ</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-green-800">
                Commande de Base
                <span className="block text-sm font-normal text-gray-600">基本注文</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Ramen tonkotsu s'il vous plaît</p>
                  <p className="text-lg text-gray-800 mb-1">豚骨ラーメンをお願いします</p>
                  <p className="text-sm text-gray-600 italic">Tonkotsu rāmen o onegaishimasu</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Avec un œuf mariné</p>
                  <p className="text-lg text-gray-800 mb-1">味玉付きで</p>
                  <p className="text-sm text-gray-600 italic">Ajitama tsuki de</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Nouilles supplémentaires</p>
                  <p className="text-lg text-gray-800 mb-1">替え玉お願いします</p>
                  <p className="text-sm text-gray-600 italic">Kaedama onegaishimasu</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-blue-800">
                Personnalisation
                <span className="block text-sm font-normal text-gray-600">カスタマイズ</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Nouilles fermes</p>
                  <p className="text-lg text-gray-800 mb-1">麺硬めで</p>
                  <p className="text-sm text-gray-600 italic">Men katame de</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Bouillon léger</p>
                  <p className="text-lg text-gray-800 mb-1">あっさりで</p>
                  <p className="text-sm text-gray-600 italic">Assari de</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Peu d'huile</p>
                  <p className="text-lg text-gray-800 mb-1">油少なめで</p>
                  <p className="text-sm text-gray-600 italic">Abura sukuname de</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-orange-800">
                Situations Utiles
                <span className="block text-sm font-normal text-gray-600">便利な場面</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">C'est délicieux !</p>
                  <p className="text-lg text-gray-800 mb-1">美味しいです！</p>
                  <p className="text-sm text-gray-600 italic">Oishii desu!</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">L'addition s'il vous plaît</p>
                  <p className="text-lg text-gray-800 mb-1">お会計お願いします</p>
                  <p className="text-sm text-gray-600 italic">Okaikei onegaishimasu</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Merci pour le repas</p>
                  <p className="text-lg text-gray-800 mb-1">ごちそうさまでした</p>
                  <p className="text-sm text-gray-600 italic">Gochisōsama deshita</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Niveaux de Fermeté des Nouilles
              <span className="block text-sm font-normal text-gray-600">麺の硬さレベル</span>
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-bold text-gray-900">粉落とし</p>
                <p className="text-sm text-gray-600">Konootoshi</p>
                <p className="text-xs text-gray-500">Ultra ferme</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-gray-900">針金</p>
                <p className="text-sm text-gray-600">Harigane</p>
                <p className="text-xs text-gray-500">Très ferme</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="font-bold text-gray-900">バリカタ</p>
                <p className="text-sm text-gray-600">Barikata</p>
                <p className="text-xs text-gray-500">Ferme</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="font-bold text-gray-900">普通</p>
                <p className="text-sm text-gray-600">Futsū</p>
                <p className="text-xs text-gray-500">Normal</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="font-bold text-gray-900">やわ</p>
                <p className="text-sm text-gray-600">Yawa</p>
                <p className="text-xs text-gray-500">Tendre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Chain Japanese Restaurants</h4>
              <p className="text-gray-400 text-sm">
                Votre guide français complet pour les chaînes de restaurants japonais.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Types de Ramen</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="hover:text-white">Tonkotsu Ramen</span></li>
                <li><span className="hover:text-white">Shoyu Ramen</span></li>
                <li><span className="hover:text-white">Shio Ramen</span></li>
                <li><span className="hover:text-white">Miso Ramen</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Chaînes Ramen</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/chaines/ichiran" className="hover:text-white">Ichiran</Link></li>
                <li><Link href="/chaines/ippudo" className="hover:text-white">Ippudo</Link></li>
                <li><Link href="/chaines/tenkaippin" className="hover:text-white">Tenkaippin</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Guides</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/guides/commander" className="hover:text-white">Comment Commander</Link></li>
                <li><Link href="/guides/regimes" className="hover:text-white">Régimes Alimentaires</Link></li>
                <li><Link href="/guides/culture" className="hover:text-white">Culture & Étiquette</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Chain Japanese Restaurants. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
