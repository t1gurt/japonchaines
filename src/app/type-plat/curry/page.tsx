import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Curry Japonais : Guide des Meilleures Chaînes (CoCo Ichibanya) | Japonchaines",
  description: "Plongez dans l'univers du curry japonais. Personnalisez votre plat chez CoCo Ichibanya ou goûtez le curry noir de Go!Go!Curry.",
  keywords: "curry japonais, CoCo Ichibanya, Go Go Curry, curry katsu, curry japonais personnalisé",
  openGraph: {
    title: "Curry Japonais : Guide des Meilleures Chaînes (CoCo Ichibanya) | Japonchaines",
    description: "Plongez dans l'univers du curry japonais. Personnalisez votre plat chez CoCo Ichibanya ou goûtez le curry noir de Go!Go!Curry.",
    type: "article",
    url: "https://japonchaines.com/type-plat/curry",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/curry-japonais-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Curry japonais - CoCo Ichibanya et autres chaînes"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Curry Japonais : Guide des Meilleures Chaînes (CoCo Ichibanya) | Japonchaines",
    description: "Plongez dans l'univers du curry japonais. Personnalisez votre plat chez CoCo Ichibanya ou goûtez le curry noir de Go!Go!Curry.",
    images: ["/images/curry-japonais-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/curry"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function CurryPage() {
  const curryChains = [
    {
      name: "CoCo壱番屋",
      japanese: "ココイチ",
      englishName: "CoCo Ichibanya",
      description: "Le roi incontesté du curry japonais avec plus de 1400 restaurants dans le monde. Connu pour sa personnalisation infinie.",
      specialties: ["Curry de porc katsu", "Curry végétarien", "Curry épicé niveau 10"],
      priceRange: "¥500-1200",
      spiceLevel: "Niveau 0-10 (personnalisable)",
      orderingMethod: "Commande au comptoir",
      vegetarianOptions: "Excellentes options végétariennes et vegan",
      uniqueFeatures: ["21 niveaux d'épice", "Plus de 40 toppings", "Options vegan certifiées"],
      href: "/chaines/coco-ichibanya"
    },
    {
      name: "Go!Go!Curry",
      japanese: "ゴーゴーカレー",
      englishName: "Go Go Curry",
      description: "Chaîne originaire de Kanazawa, célèbre pour son curry noir épais et son atmosphère rétro unique.",
      specialties: ["Curry noir de Kanazawa", "Major Curry", "Champion Curry"],
      priceRange: "¥600-1000",
      spiceLevel: "Épicé par défaut",
      orderingMethod: "Commande au comptoir + tickets",
      vegetarianOptions: "Limitées",
      uniqueFeatures: ["Curry noir signature", "Thème baseball", "Portion XXL disponible"],
      href: "/chaines/go-go-curry"
    },
    {
      name: "Sukiya Curry",
      japanese: "すき家カレー",
      englishName: "Sukiya Curry",
      description: "Extension curry de la célèbre chaîne Sukiya, offrant curry et gyūdon dans le même restaurant.",
      specialties: ["Curry Gyūdon", "Cheese Curry", "Katsu Curry"],
      priceRange: "¥400-800",
      spiceLevel: "Doux à moyennement épicé",
      orderingMethod: "Commande au comptoir",
      vegetarianOptions: "Quelques options",
      uniqueFeatures: ["Combinaison curry + gyūdon", "Prix abordables", "Service 24h/24"],
      href: "/chaines/sukiya"
    }
  ];

  const curryTypes = [
    {
      name: "Katsu Curry",
      japanese: "カツカレー",
      description: "Curry avec escalope de porc panée, le plus populaire au Japon",
      characteristics: "Croustillant, copieux, savoureux",
      price: "¥700-1200",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Chicken Curry",
      japanese: "チキンカレー",
      description: "Curry avec morceaux de poulet tendre, option classique",
      characteristics: "Doux, familial, accessible",
      price: "¥600-1000",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Vegetable Curry",
      japanese: "野菜カレー",
      description: "Curry aux légumes, parfait pour les végétariens",
      characteristics: "Sain, coloré, nutritif",
      price: "¥500-900",
      popularity: "⭐⭐⭐",
      beginner: true
    },
    {
      name: "Seafood Curry",
      japanese: "シーフードカレー",
      description: "Curry aux fruits de mer, spécialité de certaines chaînes",
      characteristics: "Riche, iodé, gourmand",
      price: "¥800-1400",
      popularity: "⭐⭐⭐",
      beginner: false
    },
    {
      name: "Beef Curry",
      japanese: "ビーフカレー",
      description: "Curry au bœuf mijoté, version plus haut de gamme",
      characteristics: "Tendre, savoureux, premium",
      price: "¥900-1600",
      popularity: "⭐⭐⭐⭐",
      beginner: false
    }
  ];

  const spiceLevels = [
    { level: 0, name: "Très doux", japanese: "甘口", description: "Pour enfants et débutants" },
    { level: 1, name: "Doux", japanese: "やや甘口", description: "Légèrement relevé" },
    { level: 2, name: "Normal", japanese: "普通", description: "Standard japonais" },
    { level: 3, name: "Moyennement épicé", japanese: "やや辛口", description: "Commence à piquer" },
    { level: 5, name: "Épicé", japanese: "辛口", description: "Pour amateurs" },
    { level: 10, name: "Très épicé", japanese: "激辛", description: "Défi extrême !" }
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
            <span className="text-gray-900 font-medium">Curry Japonais</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍛</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Curry Japonais
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">カレー</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                La version japonaise du curry indien, plus douce et épaisse, devenue un 
                comfort food national. Personnalisable à l'infini selon vos goûts.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥400-1600
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Personnalisable
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Comfort Food
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Le Curry Japonais Unique</h3>
              <p className="text-gray-600 mb-4">
                Introduit à l'époque Meiji via la marine britannique, le curry japonais a évolué 
                pour devenir plus doux et plus épais que l'original indien, adapté au palais japonais.
              </p>
              <p className="text-gray-600">
                Servi avec du riz blanc, il est devenu si populaire qu'il est considéré comme 
                l'un des trois plats nationaux du Japon avec les ramen et les sushi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curry Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types de Curry Populaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curryTypes.map((curry, index) => (
              <div key={index} className={`bg-gray-50 rounded-xl p-6 border ${
                curry.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                {curry.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Recommandé débutants
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{curry.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{curry.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{curry.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Caractère :</span>
                    <span className="text-gray-600">{curry.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{curry.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{curry.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Level Guide */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide des Niveaux d'Épice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spiceLevels.map((spice, index) => (
              <div key={index} className={`bg-white rounded-lg p-4 border-l-4 ${
                spice.level === 0 ? 'border-green-400' :
                spice.level <= 2 ? 'border-yellow-400' :
                spice.level <= 5 ? 'border-orange-400' :
                'border-red-500'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">Niveau {spice.level}</h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    spice.level === 0 ? 'bg-green-400' :
                    spice.level <= 2 ? 'bg-yellow-400' :
                    spice.level <= 5 ? 'bg-orange-400' :
                    'bg-red-500'
                  }`}>
                    {spice.level}
                  </div>
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">{spice.name}</h5>
                <p className="text-gray-600 japanese-text text-sm mb-2">{spice.japanese}</p>
                <p className="text-gray-500 text-xs">{spice.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-6 rounded-xl border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-2">🌶️ Conseil pour débutants</h4>
            <p className="text-yellow-700 text-sm">
              Commencez par le niveau 1-2. Le niveau 0 est très doux (adapté aux enfants). 
              Les niveaux 5+ sont réservés aux amateurs d'épice ! Vous pouvez toujours 
              ajouter des épices mais pas les enlever.
            </p>
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principales Chaînes de Curry
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {curryChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-yellow-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-yellow-600 text-xl">🍛</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
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
                        <span className="font-semibold text-gray-900">Épice : </span>
                        <span className="text-gray-600">{chain.spiceLevel}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander du Curry Japonais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍛</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Type de Curry</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Choisissez votre base (porc, poulet, légumes...)</li>
                <li>• Katsu curry = le plus populaire</li>
                <li>• Végétarien disponible partout</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Niveau d'Épice</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• De 0 (très doux) à 10 (extrême)</li>
                <li>• Niveau 2 = standard pour débutants</li>
                <li>• Vous pouvez demander "Kara-sa wa?" (Épice ?)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Portion</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Riz normal = gratuit</li>
                <li>• Large (大盛) = +¥100-200</li>
                <li>• Curry extra = plus de sauce</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">➕</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Toppings</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Œuf (卵) = +¥100</li>
                <li>• Fromage (チーズ) = +¥150</li>
                <li>• Légumes supplémentaires</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Katsu karē kudasai</span> <span className="japanese-text">カツカレーください</span></p>
                <p className="text-gray-600 mb-2">Un katsu curry, s'il vous plaît</p>
                
                <p><span className="font-semibold">Ni-ban onegaishimasu</span> <span className="japanese-text">2番お願いします</span></p>
                <p className="text-gray-600 mb-2">Niveau 2 d'épice, s'il vous plaît</p>
              </div>
              <div>
                <p><span className="font-semibold">Ōmori dekimasu ka?</span> <span className="japanese-text">大盛りできますか？</span></p>
                <p className="text-gray-600 mb-2">Pouvez-vous faire une grande portion ?</p>
                
                <p><span className="font-semibold">Yasai karē arimasu ka?</span> <span className="japanese-text">野菜カレーありますか？</span></p>
                <p className="text-gray-600">Avez-vous du curry végétarien ?</p>
              </div>
            </div>
          </div>
        </div>      </section>
    </div>
  );
}
