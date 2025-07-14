import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Flame, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'YAKINIKU : L\'Art Gastronomique Japonais du Gril | Guide Complet Japonchaines',
  description: 'Découvrez l\'univers fascinant du yakiniku japonais : une expérience gastronomique interactive où convivialité et excellence culinaire se rencontrent. Guide complet des techniques, menus et meilleures adresses.',
  keywords: [
    'yakiniku', 'grill japonais', 'wagyu', 'kalbi', 'harami', 'culture culinaire japonaise',
    'barbecue japonais', 'convivialité', 'gastronomie interactive', 'restaurant yakiniku',
    'viande grillée', 'technique de cuisson', 'sauce tare', 'ホルモン hormone'
  ],
  openGraph: {
    title: 'YAKINIKU : L\'Art Gastronomique Japonais du Gril',
    description: 'Une expérience gastronomique unique où la convivialité française rencontre l\'excellence culinaire japonaise.',
    type: 'article',
    url: '/type-plat/yakiniku',
  },
  alternates: {
    canonical: '/type-plat/yakiniku',
  },
};

export default function YakinikuPage() {
  const yakinikuChains = [
    {
      name: "Gyukaku",
      japanese: "牛角",
      englishName: "Gyukaku",
      description: "Chaîne de yakiniku haut de gamme proposant des viandes de qualité premium dans une ambiance moderne et conviviale.",
      specialties: ["Kalbi Premium", "Harami Selection", "Gyukaku Special Course", "All-you-can-eat"],
      priceRange: "¥2000-4000",
      style: "Yakiniku moderne haut de gamme",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Légumes grillés, salade, accompagnements",
      uniqueFeatures: ["Viandes premium", "Formules à volonté", "Ambiance moderne"],
      cuisine: "Yakiniku/BBQ Japonais",
      href: "/chaines/gyukaku"
    },
    {
      name: "Futago",
      japanese: "ふたご",
      englishName: "Futago",
      description: "Révolution du yakiniku premium d'Osaka avec le légendaire 'Hasami-deru Kalbi' et service 'jusqu'à la bouche'.",
      specialties: ["Hasami-deru Kalbi", "Hormone gastronomique", "Service premium", "Quantité moitié/Prix moitié"],
      priceRange: "¥3000-5000",
      style: "Yakiniku premium entertainment",
      orderingMethod: "Service complet par le staff",
      vegetarianOptions: "Légumes premium, accompagnements traditionnels",
      uniqueFeatures: ["Entertainment culinaire", "Hasmi-deru spectacle", "Service jusqu'à la bouche"],
      cuisine: "Yakiniku Premium/Hormone",
      href: "/chaines/futago"
    },
    {
      name: "Anan",
      japanese: "安安",
      englishName: "Anan",
      description: "Yakiniku abordable au charbon de bois authentique avec le concept '安くて旨い' (bon marché et délicieux).",
      specialties: ["Shichirin au charbon", "Kalbi abordable", "Formules à volonté", "Ambiance populaire"],
      priceRange: "¥1500-2500",
      style: "Yakiniku traditionnel accessible",
      orderingMethod: "Menu papier simple + grill au charbon",
      vegetarianOptions: "Légumes de saison, kimchi, accompagnements coréens",
      uniqueFeatures: ["Prix accessibles", "Charbon de bois traditionnel", "Ambiance décontractée"],
      cuisine: "Yakiniku/BBQ Japonais",
      href: "/chaines/anan"
    }
  ];

  // Nouvelles données basées sur yakiniku_add.md
  const premiumBeefParts = [
    {
      name: "Sankaku-bara",
      japanese: "三角バラ",
      french: "Poitrine triangulaire",
      description: "Le « Roi du Kalbi » - La partie la plus savoureuse avec un persillé exceptionnel",
      characteristics: "Persillé dense, saveur riche et fondante",
      rarity: "Premium",
      recommendedSauce: "Sauce soja concentrée, Wasabi-shoyu",
      cookingTip: "Cuisson moyenne, surveiller la fonte des graisses"
    },
    {
      name: "Zabuton",
      japanese: "ザブトン",
      french: "Coussin (Épaule)",
      description: "Persillé fin comme du beurre, texture fondante exceptionnelle",
      characteristics: "Persillé très fin, goût riche et onctueux",
      rarity: "Premium",
      recommendedSauce: "Sel, Wasabi-shoyu, Sauce douce",
      cookingTip: "Cuisson saignante, retourner dès que la graisse fond"
    },
    {
      name: "Misuji",
      japanese: "ミスジ",
      french: "Trois nervures (Épaule)",
      description: "Partie rare avec trois nervures caractéristiques et persillé unique",
      characteristics: "Texture gélatineuse unique, fond en bouche",
      rarity: "Premium",
      recommendedSauce: "Sel, Sudachi, Wasabi-shoyu",
      cookingTip: "Cuisson saignante à point"
    },
    {
      name: "Chateaubriand",
      japanese: "シャトーブリアン",
      french: "Châteaubriand",
      description: "Summum de la tendreté - Centre du filet de bœuf",
      characteristics: "Tendreté absolue, peu de graisse, goût raffiné",
      rarity: "Premium",
      recommendedSauce: "Sel, Sel aux truffes, Wasabi",
      cookingTip: "Saisir fort puis cuire par la chaleur résiduelle"
    }
  ];

  const hormonParts = [
    {
      name: "Mino",
      japanese: "ミノ",
      description: "Premier estomac - Texture croquante, goût neutre",
      texture: "Croquant élastique",
      difficulty: "Débutant"
    },
    {
      name: "Shimacho",
      japanese: "シマチョウ",
      description: "Gros intestin rayé - Roi des abats",
      texture: "Ferme et juteux",
      difficulty: "Intermédiaire"
    },
    {
      name: "Harami",
      japanese: "ハラミ",
      description: "Diaphragme - N°1 popularité, goût de viande rouge",
      texture: "Tendre et juteux",
      difficulty: "Débutant"
    },
    {
      name: "Tan-moto",
      japanese: "タン元",
      description: "Base de langue - Partie la plus tendre et grasse",
      texture: "Fondant persillé",
      difficulty: "Intermédiaire"
    }
  ];

  const waguyuBrands = [
    {
      name: "Kobe Beef",
      japanese: "神戸ビーフ",
      region: "Hyogo",
      characteristics: "Standards ultimes - A4+ et BMS 6+ obligatoire",
      specialty: "Prestige mondial absolu"
    },
    {
      name: "Matsusaka",
      japanese: "松阪牛",
      region: "Mie",
      characteristics: "Vaches vierges uniquement - Graisse fondant à basse température",
      specialty: "Richesse et parfum exceptionnels"
    },
    {
      name: "Omi",
      japanese: "近江牛",
      region: "Shiga",
      characteristics: "Plus ancienne histoire - Offert aux shoguns depuis l'époque d'Edo",
      specialty: "Finesse de grain et arôme délicat"
    },
    {
      name: "Yonezawa",
      japanese: "米沢牛",
      region: "Yamagata",
      characteristics: "Candidate au Top 3 - Élevage en région froide",
      specialty: "Équilibre saveur-tendreté"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Types de Plat
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  YAKINIKU <span className="text-lg font-medium text-gray-600">(焼肉)</span>
                </h1>
                <p className="text-xl text-gray-700 mb-3">
                  L'expérience gastronomique et conviviale du Japon
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-1" />
                    Art du Gril
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Convivialité (おもてなし)
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Wagyu & Techniques
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm p-8">
            {/* Introduction enrichie */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bienvenue dans l'univers du YAKINIKU <span className="text-gray-600">(焼肉)</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Le yakiniku japonais transcende la simple notion de « grillades ». Né de la culture coréenne et raffiné par l'excellence japonaise,
                  c'est une <strong>expérience gastronomique interactive</strong> où la convivialité française du barbecue rencontre 
                  la précision et l'art culinaire japonais. Imaginez-vous autour d'un grill, partageant le feu comme dans une pierrade,
                  mais avec la finesse incomparable des viandes wagyu et un savoir-faire millénaire.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
                  <h3 className="font-semibold text-red-900 mb-2">🔥 La Philosophie du Yakiniku</h3>
                  <p className="text-red-800">
                    Chaque morceau de viande est une œuvre d'art que vous sculptez par la cuisson. 
                    Du choix de la partie (部位 - bui) à la maîtrise du feu, vous devenez l'artisan de votre propre festin,
                    transformant des matières premières d'exception en moments gustatifs inoubliables.
                  </p>
                </div>
              </div>
            </section>

            {/* Anatomie complète du bœuf */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Anatomie d'un Festin <span className="text-gray-600">- L'art de la découpe japonaise</span>
              </h2>
              
              <p className="text-gray-700 mb-8">
                Au Japon, une seule carcasse de bœuf peut donner naissance à plus de 50 parties différentes, 
                chacune avec ses propres caractéristiques gustatives et techniques de cuisson. 
                Cette précision anatomique transforme chaque repas en voyage à travers les saveurs.
              </p>

              {/* Parties Premium */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">🏆 Les Parties Premium - Pour les Connaisseurs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {premiumBeefParts.map((part, index) => (
                    <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-amber-900">{part.name}</h4>
                          <p className="text-sm text-amber-700">{part.japanese} - <em>{part.french}</em></p>
                        </div>
                        <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                          {part.rarity}
                        </span>
                      </div>
                      <p className="text-amber-800 text-sm mb-3">{part.description}</p>
                      <div className="space-y-2 text-xs">
                        <div><strong>Caractéristiques :</strong> {part.characteristics}</div>
                        <div><strong>Sauce recommandée :</strong> {part.recommendedSauce}</div>
                        <div><strong>Conseil de cuisson :</strong> {part.cookingTip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hormone - L'univers des abats */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  🥩 Hormone (ホルモン) - L'Univers des Abats d'Exception
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <strong>Philosophie « Mottainai » (もったいない) :</strong> Ne rien gaspiller, transformer chaque partie en délice. 
                    Le terme « hormone » vient du dialecte kansai « hōrumon » (放るもん = « ce qu'on jette »), 
                    illustrant la transformation de l'ordinaire en extraordinaire.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {hormonParts.map((part, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900">{part.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{part.japanese}</p>
                      <p className="text-xs text-gray-700 mb-3">{part.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Texture: {part.texture}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          part.difficulty === 'Débutant' ? 'bg-green-100 text-green-800' :
                          part.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {part.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technique de cuisson optimale */}
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">⚡ Techniques de Maître - L'Art de la Cuisson Parfaite</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">🥩 Règle Fondamentale</h4>
                    <p className="text-sm">« <em>Retourner une seule fois, au bon moment</em> » - Attendre que les sucs apparaissent en surface avant de retourner pour préserver tous les arômes.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">🔥 Progression des Saveurs</h4>
                    <ol className="text-sm space-y-1">
                      <li>1. Langue (sel + citron)</li>
                      <li>2. Viandes rouges (sauces légères)</li>
                      <li>3. Parties persillées (sauces riches)</li>
                      <li>4. Abats (sauces robustes)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">🚨 Règle d'Hygiène Sacrée</h4>
                    <p className="text-sm">JAMAIS les mêmes pinces pour viande crue et cuite ! Cette règle japonaise absolue garantit sécurité et respect de la tradition.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Wagyu - L'excellence absolue */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                WAGYU (和牛) <span className="text-gray-600">- L'Excellence Bovine Mondiale</span>
              </h2>
              
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">✨ La Science du « Shimofuri » (霜降り)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-4">
                      Le wagyu n'est pas « gras » - c'est un <strong>chef-d'œuvre génétique</strong>. 
                      Son persillé unique fond à <span className="text-yellow-400">25°C</span> (température corporelle !), 
                      créant cette sensation de fonte en bouche comparable au foie gras le plus fin.
                    </p>
                    <h4 className="font-semibold mb-2">🔬 Caractéristiques Scientifiques</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Point de fusion ultra-bas des graisses</li>
                      <li>• Concentration d'acides gras oléiques</li>
                      <li>• Arôme « wagyu-kō » unique au monde</li>
                      <li>• Maillage intramusculaire parfait</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">🏆 Décryptage A5 - Mythe vs Réalité</h4>
                    <div className="bg-gray-700 p-4 rounded">
                      <p className="text-sm mb-2">
                        <strong>A</strong> = Rendement (A{'>'}B{'>'}C) - Pour les producteurs<br/>
                        <strong>5</strong> = Qualité (1-5) - Basé sur le persillé visible
                      </p>
                      <p className="text-yellow-300 text-xs">
                        💡 A5 ≠ « Le plus délicieux » ! Les vrais connaisseurs apprécient parfois 
                        les A3-A4 pour leur équilibre saveur/texture optimal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marques de Wagyu légendaires */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌟 Les Marques Légendaires du Wagyu</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {waguyuBrands.map((brand, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900">{brand.name}</h4>
                          <p className="text-gray-600">{brand.japanese} - {brand.region}</p>
                        </div>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Légendaire
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{brand.characteristics}</p>
                      <p className="text-red-600 text-sm font-medium">{brand.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sauces et accompagnements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Alchimie des Sauces « Tare » (タレ)</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">🍯 Sauce Soja (醤油ベース)</h3>
                  <p className="text-amber-800 text-sm mb-3">
                    Base universelle sucrée-salée avec fruits (pomme, poire), ail et gingembre. 
                    Parfaite pour kalbi et viandes riches.
                  </p>
                  <div className="text-xs text-amber-700">
                    <strong>Mariages :</strong> Kalbi, Rosu, viandes persillées
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">🌶️ Sauce Miso (味噌ベース)</h3>
                  <p className="text-red-800 text-sm mb-3">
                    Fermentée profonde et corsée, souvent épicée. Sa puissance sublime 
                    les saveurs fortes des abats sans les masquer.
                  </p>
                  <div className="text-xs text-red-700">
                    <strong>Mariages :</strong> Hormone, abats, parties corsées
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">🧂 Sauce Sel (塩ベース)</h3>
                  <p className="text-green-800 text-sm mb-3">
                    Pureté minérale avec huile de sésame, ail et parfois citron. 
                    Révèle l'essence même des viandes d'exception.
                  </p>
                  <div className="text-xs text-green-700">
                    <strong>Mariages :</strong> Langue, wagyu premium, parties délicates
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">🌿 Condiments d'Exception</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div><strong>Wasabi :</strong> Tranche la richesse des parties grasses</div>
                  <div><strong>Yuzu-kosho :</strong> Agrumes + piment, accent parfait</div>
                  <div><strong>Citron/Sudachi :</strong> Révèle les saveurs de la langue</div>
                  <div><strong>Ail/Gingembre :</strong> Neutralise les odeurs d'abats</div>
                </div>
              </div>
            </section>

            {/* Chaînes Recommandées */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Chaînes Yakiniku d'Excellence
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {yakinikuChains.map((chain) => (
                  <Link
                    key={chain.name}
                    href={chain.href}
                    className="block bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 hover:border-red-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{chain.name}</h3>
                        <p className="text-gray-600 font-medium">{chain.japanese}</p>
                      </div>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                        {chain.priceRange}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{chain.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-semibold text-gray-900">Spécialités :</span>
                        <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-900">Style :</span>
                        <p className="text-sm text-gray-600">{chain.style}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {chain.uniqueFeatures.map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Guide de commande optimal */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide de Commande - Devenir un Expert</h2>
              
              <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 La « Règle d'Or » des Commandes</h3>
                <p className="mb-6">
                  Comme pour composer un menu dégustation, l'art du yakiniku suit une progression orchestrée : 
                  du délicat au puissant, créant une symphonie gustative parfaite.
                </p>
                
                <div className="grid md:grid-cols-4 gap-4 text-black">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">1️⃣ Entrées</h4>
                    <p className="text-sm text-black">Kimchi, Namul → Stimuler l'appétit</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">2️⃣ Sel (塩もの)</h4>
                    <p className="text-sm text-black">Langue, viandes délicates → Pureté des saveurs</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">3️⃣ Sauce (タレもの)</h4>
                    <p className="text-sm text-black">Kalbi, parties riches → Apogée gustative</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">4️⃣ Finition</h4>
                    <p className="text-sm text-black">Nouilles froides, Kuppa → Conclusion parfaite</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Votre Initiation au Yakiniku est Complète
                </h2>
                <p className="text-lg mb-6">
                  Armé de la connaissance des parties, des techniques de cuisson et du respect des traditions, 
                  vous êtes désormais prêt à vivre une expérience yakiniku authentique et inoubliable.
                </p>
                <div className="flex justify-center items-center space-x-4 text-lg">
                  <span>いただきます</span>
                  <span>🥢</span>
                  <span>🔥</span>
                  <span>🥩</span>
                  <span>Bon appétit !</span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
