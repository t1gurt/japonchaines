import Link from "next/link";
import Image from "next/image";

export default function GyudonPage() {
  const gyudonChains = [
    {
      name: "Yoshinoya",
      japanese: "吉野家",
      logo: "/logos/yoshinoya.png", // プレースホルダー
      description: "La chaîne de gyūdon la plus ancienne et emblématique du Japon, fondée en 1899.",
      specialties: ["Gyūdon classique", "Yakiniku Don", "Curry Gyūdon"],
      priceRange: "¥300-¥700",
      locations: "Partout au Japon",
      orderingMethod: "Distributeur automatique + Commande au comptoir",
      vegetarianOptions: "Limitées",
      href: "/chaines/yoshinoya"
    },
    {
      name: "Sukiya",
      japanese: "すき家",
      logo: "/logos/sukiya.png",
      description: "La plus grande chaîne de gyūdon avec plus de 2000 restaurants, connue pour ses portions généreuses.",
      specialties: ["Mega Gyūdon", "Cheese Gyūdon", "Kimchi Gyūdon"],
      priceRange: "¥290-¥800",
      locations: "Partout au Japon",
      orderingMethod: "Commande au comptoir",
      vegetarianOptions: "Quelques options",
      href: "/chaines/sukiya"
    },
    {
      name: "Matsuya",
      japanese: "松屋",
      logo: "/logos/matsuya.png",
      description: "Chaîne populaire offrant un excellent rapport qualité-prix avec des options variées.",
      specialties: ["Gyūdon", "Hamburger Steak", "Curry"],
      priceRange: "¥320-¥750",
      locations: "Partout au Japon",
      orderingMethod: "Distributeur automatique",
      vegetarianOptions: "Curry végétarien disponible",
      href: "/chaines/matsuya"
    }
  ];

  const menuItems = [
    {
      name: "Gyūdon (並盛)",
      japanese: "牛丼",
      romaji: "Gyūdon",
      description: "Le gyūdon classique : bol de riz surmonté de lamelles de bœuf mijotées dans une sauce sucrée-salée à base de sauce soja, mirin et sucre.",
      price: "¥300-400",
      calories: "約650kcal",
      image: "/menu/gyudon-regular.jpg"
    },
    {
      name: "Gyūdon Grande (大盛)",
      japanese: "牛丼大盛",
      romaji: "Gyūdon Ōmori",
      description: "Version grande du gyūdon classique avec plus de riz et de viande.",
      price: "¥450-550",
      calories: "約850kcal",
      image: "/menu/gyudon-large.jpg"
    },
    {
      name: "Cheese Gyūdon",
      japanese: "チーズ牛丼",
      romaji: "Chīzu Gyūdon",
      description: "Gyūdon agrémenté de fromage fondu, créant un mélange savoureux entre tradition japonaise et influence occidentale.",
      price: "¥450-600",
      calories: "約750kcal",
      image: "/menu/cheese-gyudon.jpg"
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
            <span className="text-gray-900 font-medium">Gyūdon</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🥩</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Gyūdon
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">牛丼</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Le plat japonais iconique : un bol de riz surmonté de lamelles de bœuf 
                mijotées dans une sauce douce. Rapide, abordable et délicieux.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥300-800
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Rapide
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Nourrissant
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Qu'est-ce que le Gyūdon ?</h3>
              <p className="text-gray-600 mb-4">
                Le gyūdon (牛丼) est composé de fines lamelles de bœuf et d'oignons mijotées 
                dans une sauce à base de sauce soja, mirin, saké et sucre, servies sur un 
                bol de riz blanc chaud.
              </p>
              <p className="text-gray-600">
                Né à la fin du 19ème siècle, ce plat est devenu un symbole de la restauration 
                rapide japonaise, apprécié pour sa simplicité, son prix abordable et sa saveur réconfortante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Variations Populaires de Gyūdon
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image : {item.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="japanese-text">{item.japanese}</span>
                    <span className="italic">{item.romaji}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold">{item.price}</span>
                    <span className="text-gray-500 text-sm">{item.calories}</span>
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
            Principales Chaînes de Gyūdon
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {gyudonChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xs text-gray-500">Logo</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
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
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Prix : </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Commande : </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-900">Options végétariennes : </span>
                      <span className="text-gray-600">{chain.vegetarianOptions}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Commander du Gyūdon
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-4">🎫 Méthode de Commande</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• La plupart des chaînes utilisent des distributeurs automatiques</li>
                <li>• Sélectionnez la taille : 並盛 (normal), 大盛 (grand), 特盛 (très grand)</li>
                <li>• Payez en espèces ou carte IC</li>
                <li>• Remettez le ticket au comptoir</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🥗 Options Personnalisation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• つゆだく (Tsuyu-daku) : plus de sauce</li>
                <li>• つゆ抜き (Tsuyu-nuki) : sans sauce</li>
                <li>• ねぎだく (Negi-daku) : plus d'oignons verts</li>
                <li>• 玉ねぎ抜き (Tamanegi-nuki) : sans oignons</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/guides/commander"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
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
              <h5 className="font-semibold mb-4">Types de Plats</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/type-plat/gyudon" className="hover:text-white">Gyūdon</Link></li>
                <li><Link href="/type-plat/ramen" className="hover:text-white">Ramen</Link></li>
                <li><Link href="/type-plat/kaiten-zushi" className="hover:text-white">Kaiten-zushi</Link></li>
                <li><Link href="/type-plat/curry" className="hover:text-white">Curry</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Chaînes Gyūdon</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/chaines/yoshinoya" className="hover:text-white">Yoshinoya</Link></li>
                <li><Link href="/chaines/sukiya" className="hover:text-white">Sukiya</Link></li>
                <li><Link href="/chaines/matsuya" className="hover:text-white">Matsuya</Link></li>
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
