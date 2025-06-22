import Link from "next/link";

export default function FamilyRestaurantsPage() {
  const familyChains = [
    {
      name: "Saizeriya",
      japanese: "サイゼリヤ",
      englishName: "Saizeriya",
      description: "Chaîne italienne abordable très populaire au Japon, célèbre pour ses prix mini et sa pizza à ¥300.",
      specialties: ["Margherita Pizza", "Pasta Arrabbiata", "Salade de la Maison"],
      priceRange: "¥200-800",
      style: "Casual italien",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Bonnes options italiennes",
      uniqueFeatures: ["Prix exceptionnels", "Pizza ¥300", "Menu multilingue"],
      cuisine: "Italienne",
      href: "/chaines/saizeriya"
    },
    {
      name: "Gusto",
      japanese: "ガスト",
      englishName: "Gusto",
      description: "Grande chaîne de family restaurant proposant cuisine japonaise et occidentale dans une ambiance décontractée.",
      specialties: ["Hamburg Steak", "Pasta", "Teishoku Sets"],
      priceRange: "¥400-1200",
      style: "Family restaurant classique",
      orderingMethod: "Tablet tactile + service à table",
      vegetarianOptions: "Options variées disponibles",
      uniqueFeatures: ["Menu tablette", "Boissons à volonté", "Ambiance familiale"],
      cuisine: "Variée (Japonaise + Occidentale)",
      href: "/chaines/gusto"
    },
    {
      name: "Jonathan's",
      japanese: "ジョナサン",
      englishName: "Jonathan's",
      description: "Family restaurant haut de gamme avec décor soigné et menu fusion japonais-occidental de qualité.",
      specialties: ["Gratin", "Pasta Premium", "Desserts élaborés"],
      priceRange: "¥600-1800",
      style: "Family restaurant premium",
      orderingMethod: "Service à table traditionnel",
      vegetarianOptions: "Sélection décente",
      uniqueFeatures: ["Décor soigné", "Qualité supérieure", "Desserts remarquables"],
      cuisine: "Fusion Japonaise-Occidentale",
      href: "/chaines/jonathans"
    }
  ];

  const menuCategories = [
    {
      name: "Cuisine Japonaise",
      japanese: "和食",
      description: "Plats traditionnels adaptés au goût familial",
      items: ["Teishoku Sets", "Donburi", "Curry Rice", "Miso Soup"],
      price: "¥400-1200",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Cuisine Occidentale",
      japanese: "洋食",
      description: "Plats européens et américains adaptés au Japon",
      items: ["Hamburg Steak", "Pasta", "Pizza", "Gratin"],
      price: "¥500-1500",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Desserts & Boissons",
      japanese: "デザート・ドリンク",
      description: "Large sélection de desserts et boissons",
      items: ["Parfait", "Cake Sets", "Soft Cream", "Drink Bar"],
      price: "¥200-800",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Sets Menu",
      japanese: "セットメニュー",
      description: "Menus complets avec plat + accompagnements",
      items: ["Main + Salad + Soup", "Pasta Sets", "Gratin Sets"],
      price: "¥800-1600",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    }
  ];

  const popularDishes = [
    {
      name: "Hamburg Steak",
      japanese: "ハンバーグステーキ",
      description: "Steak haché japonais avec sauce demi-glace",
      characteristics: "Savoureux, copieux, familial",
      price: "¥600-1200",
      availability: "Toutes chaînes",
      beginner: true
    },
    {
      name: "Pasta",
      japanese: "パスタ",
      description: "Spaghetti et autres pâtes, style italien-japonais",
      characteristics: "Varié, généreux, populaire",
      price: "¥400-1000",
      availability: "Toutes chaînes",
      beginner: true
    },
    {
      name: "Pizza",
      japanese: "ピザ",
      description: "Pizza style italien à prix très accessible",
      characteristics: "Croustillant, économique, à partager",
      price: "¥300-800",
      availability: "Surtout Saizeriya",
      beginner: true
    },
    {
      name: "Teishoku Set",
      japanese: "定食セット",
      description: "Set traditionnel japonais avec riz, miso, légumes",
      characteristics: "Équilibré, traditionnel, sain",
      price: "¥700-1400",
      availability: "Gusto, Jonathan's",
      beginner: true
    },
    {
      name: "Gratin",
      japanese: "グラタン",
      description: "Gratin français adapté au goût japonais",
      characteristics: "Crémeux, réconfortant, gourmand",
      price: "¥800-1500",
      availability: "Jonathan's, Gusto",
      beginner: false
    },
    {
      name: "Drink Bar",
      japanese: "ドリンクバー",
      description: "Boissons à volonté (soft, café, thé)",
      characteristics: "Illimité, varié, économique",
      price: "¥200-400",
      availability: "Toutes chaînes",
      beginner: true
    }
  ];

  const advantages = [
    {
      title: "Menu Multilingue",
      icon: "🌍",
      description: "Menus souvent disponibles en anglais et parfois français",
      benefit: "Idéal pour les débutants"
    },
    {
      title: "Prix Abordables",
      icon: "💰",
      description: "Excellent rapport qualité-prix pour toute la famille",
      benefit: "Budget maîtrisé"
    },
    {
      title: "Variété",
      icon: "🍽️",
      description: "Cuisine japonaise ET occidentale dans le même restaurant",
      benefit: "Satisfait tous les goûts"
    },
    {
      title: "Ambiance Détendue",
      icon: "😊",
      description: "Atmosphère familiale et décontractée",
      benefit: "Parfait pour groupes"
    },
    {
      title: "Service Long",
      icon: "⏰",
      description: "Pas de pression pour libérer la table rapidement",
      benefit: "Prendre son temps"
    },
    {
      title: "Boissons Illimitées",
      icon: "🥤",
      description: "Drink bar avec boissons à volonté",
      benefit: "Hydratation assurée"
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
            <span className="text-gray-900 font-medium">Family Restaurants</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍽️</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Family Restaurants
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">ファミリーレストラン</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                La solution parfaite pour les groupes : menus variés alliant cuisine 
                japonaise et occidentale, prix doux et ambiance décontractée où 
                chacun trouve son bonheur.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥200-1800
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cuisine variée
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Groupes bienvenus
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L'Esprit Family Restaurant</h3>
              <p className="text-gray-600 mb-4">
                Nés dans les années 1970, les family restaurants incarnent l'adaptation 
                japonaise de la culture diner américaine. Ils offrent un espace où 
                familles et amis peuvent partager un moment sans contrainte de temps.
              </p>
              <p className="text-gray-600">
                Avec leurs menus illustrés, leurs prix abordables et leur service 
                attentionné, ils représentent l'hospitalité japonaise moderne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pourquoi Choisir un Family Restaurant ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{advantage.description}</p>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {advantage.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Catégories de Menu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{category.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Exemples :</h4>
                  <div className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="block text-xs text-gray-600">• {item}</span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{category.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{category.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Plats Incontournables
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((dish, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                dish.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                {dish.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Recommandé débutants
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{dish.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{dish.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Caractère :</span>
                    <span className="text-gray-600">{dish.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{dish.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Disponibilité :</span>
                    <span className="text-gray-600">{dish.availability}</span>
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
            Principales Chaînes Family Restaurant
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {familyChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">🍽️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.englishName}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Spécialités :</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Particularités :</h4>
                      <p className="text-sm text-gray-600">{chain.uniqueFeatures.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Prix : </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Cuisine : </span>
                        <span className="text-gray-600">{chain.cuisine}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
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
            Comment Profiter d'un Family Restaurant
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🚪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Entrée</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Attendez qu'on vous place</li>
                <li>• Précisez le nombre de personnes</li>
                <li>• Tables ou banquettes disponibles</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Commande</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Menu papier ou tablette</li>
                <li>• Photos des plats disponibles</li>
                <li>• Service à table traditionnel</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Drink Bar</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• +¥200-400 pour boissons illimitées</li>
                <li>• Café, thé, soft drinks</li>
                <li>• Self-service</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Temps</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prenez votre temps</li>
                <li>• Parfait pour discussions</li>
                <li>• Ambiance détendue</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Yonin desu</span> <span className="japanese-text">4人です</span></p>
                <p className="text-gray-600 mb-2">Nous sommes 4 personnes</p>
                
                <p><span className="font-semibold">Dorinku bā onegaishimasu</span> <span className="japanese-text">ドリンクバーお願いします</span></p>
                <p className="text-gray-600 mb-2">Le drink bar, s'il vous plaît</p>
              </div>
              <div>
                <p><span className="font-semibold">Menyu wa arimasu ka?</span> <span className="japanese-text">メニューはありますか？</span></p>
                <p className="text-gray-600 mb-2">Avez-vous un menu ?</p>
                
                <p><span className="font-semibold">Osusume wa nan desu ka?</span> <span className="japanese-text">おすすめは何ですか？</span></p>
                <p className="text-gray-600">Que recommandez-vous ?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour les Family Restaurants
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Économiser</h3>
              <p className="text-gray-600 text-sm">
                Les sets menu offrent le meilleur rapport qualité-prix. Le drink bar 
                est rentable si vous restez plus d'une heure.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Groupes</h3>
              <p className="text-gray-600 text-sm">
                Parfait pour les groupes avec des goûts différents. Chacun peut 
                commander selon ses préférences dans la même catégorie de prix.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Horaires</h3>
              <p className="text-gray-600 text-sm">
                Évitez les heures de pointe (12h-14h, 18h-20h) pour un service 
                plus rapide et une ambiance plus calme.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Desserts</h3>
              <p className="text-gray-600 text-sm">
                Les family restaurants excellent en desserts. Parfaits, cakes et 
                soft cream sont souvent spectaculaires et abordables.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Langue</h3>
              <p className="text-gray-600 text-sm">
                Menus souvent illustrés avec photos. Certaines chaînes proposent 
                des menus en anglais sur demande.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎂</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Occasions Spéciales</h3>
              <p className="text-gray-600 text-sm">
                Beaucoup proposent des services pour anniversaires avec desserts 
                spéciaux. Idéal pour célébrer en famille.
              </p>
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
              <h5 className="font-semibold mb-4">Types de Cuisine</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="hover:text-white">Cuisine Japonaise</span></li>
                <li><span className="hover:text-white">Cuisine Occidentale</span></li>
                <li><span className="hover:text-white">Fusion</span></li>
                <li><span className="hover:text-white">Desserts</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Chaînes Family</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/chaines/saizeriya" className="hover:text-white">Saizeriya</Link></li>
                <li><Link href="/chaines/gusto" className="hover:text-white">Gusto</Link></li>
                <li><Link href="/chaines/jonathans" className="hover:text-white">Jonathan's</Link></li>
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
