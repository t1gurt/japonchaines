import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tempura et Tendon : Guide de la Friture Japonaise | Japonchaines",
  description: "Maîtrisez l'art de la tempura. Guide des beignets japonais légers et des bols de riz garnis (tendon) dans des chaînes comme Tenya.",
  keywords: "tempura, tendon, Tenya, Tsunahachi, friture japonaise, beignets japonais",
  openGraph: {
    title: "Tempura et Tendon : Guide de la Friture Japonaise | Japonchaines",
    description: "Maîtrisez l'art de la tempura. Guide des beignets japonais légers et des bols de riz garnis (tendon) dans des chaînes comme Tenya.",
    type: "article",
    url: "https://japonchaines.com/type-plat/tempura",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/tempura-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Tempura japonaise - Guide des beignets et tendon"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempura et Tendon : Guide de la Friture Japonaise | Japonchaines",
    description: "Maîtrisez l'art de la tempura. Guide des beignets japonais légers et des bols de riz garnis (tendon) dans des chaînes comme Tenya.",
    images: ["/images/tempura-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/tempura"
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

export default function TempuraTendonPage() {
  const tempuraChains = [
    {
      name: "Tenya",
      japanese: "てんや",
      englishName: "Tenya",
      description: "Le leader de la tempura accessible au Japon. Connu pour ses tendon de qualité à prix raisonnable depuis 1989.",
      specialties: ["All Star Tendon", "Ebi (crevette) Tendon", "Yasai (légumes) Tendon"],
      priceRange: "¥500-1200",
      style: "Fast-casual, comptoir",
      orderingMethod: "Tickets distributeur + comptoir",
      vegetarianOptions: "Excellentes (yasai tendon)",
      uniqueFeatures: ["Huile de sésame", "Pâte à tempura maison", "Tendon depuis 1989"],
      href: "/chaines/tenya"
    },
    {
      name: "Tsunahachi",
      japanese: "つな八",
      englishName: "Tsunahachi",
      description: "Chaîne premium de tempura fondée en 1923, maintenant présente dans tout le Japon avec des standards élevés.",
      specialties: ["Ebi Fry Premium", "Anago Tempura", "Set complets"],
      priceRange: "¥1200-2500",
      style: "Restaurant traditionnel",
      orderingMethod: "Service à table",
      vegetarianOptions: "Bonnes options légumes",
      uniqueFeatures: ["Depuis 1923", "Qualité premium", "Service traditionnel"],
      href: "/chaines/tsunahachi"
    },
    {
      name: "Hanafusa",
      japanese: "花房",
      englishName: "Hanafusa",
      description: "Chaîne de tempura milieu de gamme, populaire pour ses sets familiaux et sa tempura fraîche.",
      specialties: ["Mix Tempura Set", "Tempura Soba", "Kakiage Don"],
      priceRange: "¥800-1800",
      style: "Restaurant familial",
      orderingMethod: "Commande à table",
      vegetarianOptions: "Options végétales disponibles",
      uniqueFeatures: ["Sets familiaux", "Soba + tempura", "Fraîcheur garantie"],
      href: "/chaines/hanafusa"
    }
  ];

  const tempuraTypes = [
    {
      name: "Ebi Tempura",
      japanese: "海老天ぷら",
      description: "Crevettes en tempura, le roi de la tempura",
      characteristics: "Croustillant, sucré, juteux",
      difficulty: "Facile",
      price: "¥200-400/pièce",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Yasai Tempura",
      japanese: "野菜天ぷら",
      description: "Légumes variés en tempura (aubergine, potiron, etc.)",
      characteristics: "Léger, coloré, sain",
      difficulty: "Facile",
      price: "¥100-250/pièce",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Anago Tempura",
      japanese: "穴子天ぷら",
      description: "Anguille de mer en tempura, délicatesse raffinée",
      characteristics: "Fondant, délicat, umami",
      difficulty: "Intermédiaire",
      price: "¥300-600/pièce",
      popularity: "⭐⭐⭐",
      beginner: false
    },
    {
      name: "Kakiage",
      japanese: "かき揚げ",
      description: "Mélange de légumes et/ou fruits de mer frits ensemble",
      characteristics: "Varié, copieux, textural",
      difficulty: "Facile",
      price: "¥250-450/portion",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Ten-zaru Soba",
      japanese: "天ざるそば",
      description: "Soba froides avec tempura à côté",
      characteristics: "Rafraîchissant, équilibré",
      difficulty: "Facile",
      price: "¥800-1400",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Ika Tempura",
      japanese: "イカ天ぷら",
      description: "Calmar en tempura, texture unique",
      characteristics: "Caoutchouteux, salé, marin",
      difficulty: "Intermédiaire",
      price: "¥200-350/pièce",
      popularity: "⭐⭐⭐",
      beginner: false
    }
  ];

  const tendonTypes = [
    {
      name: "Ebi Tendon",
      japanese: "海老天丼",
      description: "Bol de riz avec tempura de crevettes, le classique absolu",
      ingredients: "2-4 crevettes tempura sur riz",
      price: "¥700-1200",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "All Star Tendon",
      japanese: "オールスター天丼",
      description: "Mix de plusieurs tempuras (crevette, légumes, poisson)",
      ingredients: "Crevette + légumes + poisson tempura",
      price: "¥900-1500",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Yasai Tendon",
      japanese: "野菜天丼",
      description: "Version végétarienne avec légumes de saison",
      ingredients: "Aubergine, potiron, poivron, etc.",
      price: "¥600-1000",
      popularity: "⭐⭐⭐⭐"
    },
    {
      name: "Anago Tendon",
      japanese: "穴子天丼",
      description: "Version premium avec anguille de mer",
      ingredients: "Anguille de mer + légumes tempura",
      price: "¥1200-2000",
      popularity: "⭐⭐⭐"
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
            <span className="text-gray-900 font-medium">Tempura & Tendon</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍤</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Tempura & Tendon
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">天ぷら・天丼</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                L&apos;art japonais de la friture légère. Tempura croustillante servie seule
                ou sur riz (tendon) avec une sauce sucrée-salée délicieuse.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥500-2500
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Friture légère
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Art culinaire
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">L&apos;Art de la Tempura</h3>
              <p className="text-gray-600 mb-4">
                Introduite par les missionnaires portugais au 16ème siècle, la tempura
                est devenue un pilier de la cuisine japonaise grâce à sa pâte légère
                et aérée qui sublime les ingrédients.
              </p>
              <p className="text-gray-600">
                Le tendon (tempura + don = bol) transforme cette technique en plat
                complet et abordable, parfait pour un repas rapide mais raffiné.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tempura vs Tendon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tempura vs Tendon : Quelle Différence ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-200">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🍤</span>
                <h3 className="text-2xl font-bold text-gray-900">Tempura</h3>
                <p className="text-gray-600 japanese-text">天ぷら</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Friture légère avec pâte aérée à base de farine, œuf et eau glacée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Servi séparément avec sauce tentsuyu (dashi + soja + mirin)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Plus cher mais préservation optimale du croustillant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Souvent accompagné de riz blanc et de miso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Expérience plus raffinée, idéal à partager</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🍚</span>
                <h3 className="text-2xl font-bold text-gray-900">Tendon</h3>
                <p className="text-gray-600 japanese-text">天丼</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Tempura servie sur bol de riz avec sauce tendon sucrée-salée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Plat complet en une seule portion, plus rapide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Plus abordable, parfait pour un repas individuel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Sauce caramélisée qui imprègne le riz</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Option fast-food mais de qualité supérieure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Tempura */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types de Tempura Populaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tempuraTypes.map((tempura, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${tempura.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}>
                {tempura.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Recommandé débutants
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tempura.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{tempura.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{tempura.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Caractère :</span>
                    <span className="text-gray-600">{tempura.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{tempura.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Difficulté :</span>
                    <span className="text-gray-600">{tempura.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{tempura.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tendon Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types de Tendon à Essayer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tendonTypes.map((tendon, index) => (
              <div key={index} className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <div className="text-center mb-4">
                  <span className="text-3xl mb-2 block">🍚</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tendon.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{tendon.japanese}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4">{tendon.description}</p>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Contenu :</span>
                    <p className="text-gray-600 text-xs mt-1">{tendon.ingredients}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{tendon.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularité :</span>
                    <span>{tendon.popularity}</span>
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
            Principales Chaînes de Tempura
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {tempuraChains.map((chain, index) => (
              <Link
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-orange-600 text-xl">🍤</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
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
                        <span className="font-semibold text-gray-900">Style : </span>
                        <span className="text-gray-600">{chain.style}</span>
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
            Comment Commander Tempura et Tendon
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Ticket ou Comptoir</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tenya = distributeur de tickets</li>
                <li>• Chaînes premium = service à table</li>
                <li>• Paiement avant ou après service</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🍤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Type de Plat</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tendon = sur riz (plus copieux)</li>
                <li>• Tempura = à part (plus fin)</li>
                <li>• Sets = tempura + riz + miso</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Ingrédients</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ebi (crevette) = le plus populaire</li>
                <li>• Yasai (légumes) = option végétarienne</li>
                <li>• Mix = plusieurs ingrédients</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Accompagnements</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Miso shiru (soupe miso)</li>
                <li>• Soba/udon avec tempura</li>
                <li>• Salade de chou (service)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Ebi tendon kudasai</span> <span className="japanese-text">海老天丼ください</span></p>
                <p className="text-gray-600 mb-2">Un tendon aux crevettes, s'il vous plaît</p>

                <p><span className="font-semibold">Yasai tempura arimasu ka?</span> <span className="japanese-text">野菜天ぷらありますか？</span></p>
                <p className="text-gray-600 mb-2">Avez-vous de la tempura de légumes ?</p>
              </div>
              <div>
                <p><span className="font-semibold">Ten-zaru soba onegaishimasu</span> <span className="japanese-text">天ざるそばお願いします</span></p>
                <p className="text-gray-600 mb-2">Des soba froides avec tempura, s'il vous plaît</p>

                <p><span className="font-semibold">Tentsuyu motto kudasai</span> <span className="japanese-text">天つゆもっとください</span></p>
                <p className="text-gray-600">Plus de sauce tempura, s'il vous plaît</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Profiter de la Tempura
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mangez Rapidement</h3>
              <p className="text-gray-600 text-sm">
                La tempura est meilleure chaude et croustillante. Ne la laissez pas refroidir
                trop longtemps, surtout dans un tendon où elle peut ramollir avec la sauce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technique de Trempage</h3>
              <p className="text-gray-600 text-sm">
                Trempez délicatement la tempura dans la sauce tentsuyu. Ajoutez du daikon
                râpé et du gingembre pour une saveur plus fraîche et digestive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Options Végétariennes</h3>
              <p className="text-gray-600 text-sm">
                La tempura de légumes (yasai) est excellente et souvent moins chère.
                Parfait pour découvrir des légumes japonais comme le kabocha (potiron).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Économiser</h3>
              <p className="text-gray-600 text-sm">
                Les tendon sont plus abordables que la tempura seule. Les sets lunch
                (midi) offrent souvent un excellent rapport qualité-prix.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Combiner avec Soba</h3>
              <p className="text-gray-600 text-sm">
                Ten-zaru soba (soba froides + tempura) est un classique rafraîchissant
                en été. Parfait équilibre entre le chaud et le froid.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Équilibrer le Repas</h3>
              <p className="text-gray-600 text-sm">
                La tempura étant frite, accompagnez-la de légumes frais ou de salade
                de chou souvent proposée gratuitement dans les chaînes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
