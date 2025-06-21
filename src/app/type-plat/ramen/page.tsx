import Link from "next/link";

export default function RamenPage() {
  const ramenChains = [
    {
      name: "Ichiran",
      japanese: "一蘭",
      description: "Célèbre pour ses ramen tonkotsu et son système de commande unique avec box individuels.",
      specialties: ["Tonkotsu Ramen", "Ramen sans ail", "Ramen extra épicé"],
      priceRange: "¥800-1200",
      orderingMethod: "Formulaire papier personnalisé",
      vegetarianOptions: "Non disponibles",
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
      toppings: "Chashu, œuf mariné, oignons verts, algues nori"
    },
    {
      name: "Shoyu Ramen",
      japanese: "醤油ラーメン",
      description: "Bouillon clair à base de sauce soja, le style le plus traditionnel",
      region: "Tokyo",
      characteristics: "Léger, savoureux, équilibré",
      toppings: "Chashu, menma, oignons verts, naruto"
    },
    {
      name: "Shio Ramen",
      japanese: "塩ラーメン",
      description: "Bouillon salé le plus léger, souvent à base de fruits de mer",
      region: "Hakodate",
      characteristics: "Délicat, clair, rafraîchissant",
      toppings: "Chashu, wonbok, oignons verts"
    },
    {
      name: "Miso Ramen",
      japanese: "味噌ラーメン",
      description: "Bouillon à base de pâte miso, souvent plus robuste et épicé",
      region: "Sapporo",
      characteristics: "Riche, salé, complexe",
      toppings: "Chashu, maïs, beurre, oignons verts"
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
                        <span className="font-semibold text-gray-900">Commande : </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
                      </div>
                      <div>
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
