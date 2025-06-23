import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Teishoku no Yoshi (定食のよし) - Guide Complet | Restaurant Teishoku Authentique',
  description: 'Découvrez Teishoku no Yoshi, spécialiste du poisson grillé traditionnel avec une approche authentique du teishoku japonais et des techniques de cuisson ancestrales.',
  keywords: 'Teishoku no Yoshi, 定食のよし, teishoku authentique, poisson grillé, cuisine traditionnelle, techniques ancestrales, yakizakana',
  openGraph: {
    title: 'Teishoku no Yoshi - Maître du Poisson Grillé Traditionnel',
    description: 'Guide complet de Teishoku no Yoshi : teishoku authentiques centrés sur le poisson grillé avec techniques traditionnelles et saveurs ancestrales.',
    type: 'article'
  }
};

export default function TeishokuNoYoshiPage() {
  const menuItems = [
    {
      category: "Poissons Grillés Signature",
      items: [
        { name: "Saba Shioyaki", japanese: "鯖塩焼き定食", price: "¥980", description: "Maquereau grillé au charbon, technique traditionnelle robatayaki" },
        { name: "Sanma Shioyaki", japanese: "さんま塩焼き定食", price: "¥1180", description: "Balaou du Pacifique grillé entier, poisson d'automne premium" },
        { name: "Hokke Shioyaki", japanese: "ホッケ塩焼き定食", price: "¥1380", description: "Poisson atka d'Hokkaido, grillage lent et patient" },
        { name: "Aji Shioyaki", japanese: "鯵塩焼き定食", price: "¥880", description: "Chinchard frais grillé, peau croustillante et chair tendre" }
      ]
    },
    {
      category: "Spécialités Saisonnières",
      items: [
        { name: "Iwashi Shioyaki", japanese: "鰯塩焼き定食", price: "¥780", description: "Sardines fraîches, riches en oméga-3, grillées avec art" },
        { name: "Sawara Saikyo", japanese: "鰆西京焼き定食", price: "¥1480", description: "Bonite marinée au miso blanc de Kyoto, technique raffinée" },
        { name: "Buri Teriyaki", japanese: "ブリ照り焼き定食", price: "¥1580", description: "Sériole en sauce teriyaki traditionnelle, cuisson maîtrisée" },
        { name: "Tai Shioyaki", japanese: "鯛塩焼き定食", price: "¥1880", description: "Daurade rouge, poisson noble grillé avec respect" }
      ]
    },
    {
      category: "Accompagnements Traditionnels",
      items: [
        { name: "Nimono Set", japanese: "煮物セット", price: "+¥380", description: "Légumes mijotés selon recettes ancestrales" },
        { name: "Tsukemono Moriawase", japanese: "漬物盛り合わせ", price: "+¥280", description: "Assortiment de légumes marinés maison" },
        { name: "Chawan Mushi", japanese: "茶碗蒸し", price: "+¥450", description: "Flan salé aux fruits de mer, texture soyeuse" },
        { name: "Dashimaki Tamago", japanese: "だし巻き玉子", price: "+¥350", description: "Omelette roulée au bouillon dashi, savoir-faire artisanal" }
      ]
    }
  ];

  const grillingTechniques = [
    {
      name: "Robatayaki",
      japanese: "炉端焼き",
      description: "Grillage au charbon traditionnel",
      details: "Technique ancienne utilisant du charbon binchōtan pour une cuisson uniforme et fumée subtile",
      benefits: ["Saveur fumée naturelle", "Texture croustillante", "Conservation des nutriments"],
      icon: "🔥"
    },
    {
      name: "Shioyaki",
      japanese: "塩焼き",
      description: "Grillage au sel marin",
      details: "Méthode pure mettant en valeur le goût naturel du poisson avec uniquement du sel de mer",
      benefits: ["Goût authentique", "Simplicité raffinée", "Respect du produit"],
      icon: "🧂"
    },
    {
      name: "Saikyo-yaki",
      japanese: "西京焼き",
      description: "Marinade au miso blanc",
      details: "Technique de Kyoto marinant le poisson dans du miso blanc sucré avant grillage délicat",
      benefits: ["Saveur umami profonde", "Texture moelleuse", "Tradition millénaire"],
      icon: "🍯"
    }
  ];

  const yoshiFeatures = [
    {
      title: "Maîtrise du Grillage",
      icon: "👨‍🍳",
      description: "Chefs spécialisés dans l'art du yakizakana (poisson grillé)",
      details: "Formation traditionnelle de 3 ans minimum pour maîtriser les techniques de grillage du poisson.",
      specialty: "Technique robatayaki"
    },
    {
      title: "Sélection Quotidienne",
      icon: "🐟",
      description: "Poissons frais sélectionnés chaque matin au marché",
      details: "Approvisionnement direct des criées pour garantir fraîcheur et qualité optimales.",
      specialty: "Poissons de saison"
    },
    {
      title: "Cuisson au Charbon",
      icon: "🔥",
      description: "Feu de charbon binchōtan pour une saveur authentique",
      details: "Charbon blanc japonais premium pour une combustion propre et température constante.",
      specialty: "Saveur fumée naturelle"
    },
    {
      title: "Recettes Ancestrales",
      icon: "📜",
      description: "Méthodes transmises de génération en génération",
      details: "Recettes familiales préservées depuis l'ère Edo, adaptées aux goûts contemporains.",
      specialty: "Tradition authentique"
    },
    {
      title: "Présentation Esthétique",
      icon: "🎨",
      description: "Art de la présentation selon l'esthétique japonaise",
      details: "Chaque plat disposé selon les principes du kaiseki pour plaisir visuel et gustatif.",
      specialty: "Beauté traditionnelle"
    },
    {
      title: "Respect des Saisons",
      icon: "🍂",
      description: "Menu évoluant selon les saisons et disponibilités",
      details: "Cuisine qui honore le concept japonais de saisonnalité (kissetsu) dans chaque plat.",
      specialty: "Harmonie naturelle"
    }
  ];

  const fishGuide = [
    {
      season: "Printemps",
      months: "Mars - Mai",
      fish: ["Tai (Daurade)", "Suzuki (Bar)", "Sawara (Bonite)"],
      characteristics: "Poissons délicats aux chairs tendres, préparation subtile",
      icon: "🌸"
    },
    {
      season: "Été", 
      months: "Juin - Août",
      fish: ["Aji (Chinchard)", "Iwashi (Sardine)", "Ayu (Poisson-doux)"],
      characteristics: "Poissons riches en huiles, grillage intense pour sublimer",
      icon: "☀️"
    },
    {
      season: "Automne",
      months: "Septembre - Novembre", 
      fish: ["Sanma (Balaou)", "Saba (Maquereau)", "Sake (Saumon)"],
      characteristics: "Poissons gras parfaits, saveurs intenses et robustes",
      icon: "🍁"
    },
    {
      season: "Hiver",
      months: "Décembre - Février",
      fish: ["Buri (Sériole)", "Hokke (Atka)", "Fugu (préparé)"],
      characteristics: "Poissons charnus d'hiver, cuissons longues et patientes",
      icon: "❄️"
    }
  ];

  const orderingTips = [
    {
      title: "Choisir selon la Saison",
      icon: "📅",
      tip: "Demander quel poisson est le plus frais du jour",
      phrase: "Kyou no osusume wa nan desu ka?",
      japanese: "今日のおすすめは何ですか？",
      translation: "Quelle est votre recommandation du jour ?"
    },
    {
      title: "Niveau de Cuisson",
      icon: "🔥",
      tip: "Préciser si vous préférez plus ou moins grillé",
      phrase: "Yoku yaite kudasai",
      japanese: "よく焼いてください",
      translation: "Bien grillé, s'il vous plaît"
    },
    {
      title: "Accompagnements",
      icon: "🥬",
      tip: "Ajouter des accompagnements traditionnels pour experience complète",
      phrase: "Tsukemono mo onegaishimasu",
      japanese: "漬物もお願いします",
      translation: "Des légumes marinés aussi, s'il vous plaît"
    },
    {
      title: "Appréciation",
      icon: "😋",
      tip: "Complimenter la cuisson du poisson",
      phrase: "Yakikata ga totemo ii desu",
      japanese: "焼き方がとてもいいです",
      translation: "La cuisson est parfaite"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Teishoku no Yoshi" chainCategory="Teishoku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/chaines" className="text-gray-500 hover:text-red-600">Chaînes</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Teishoku no Yoshi</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-red-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🐟</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Teishoku no Yoshi
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">定食のよし</p>
                  <p className="text-lg text-gray-600">Maître du Poisson Grillé</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                L'excellence du yakizakana traditionnell ! Teishoku no Yoshi perpétue 
                l'art ancestral du poisson grillé au charbon avec des techniques 
                transmises de génération en génération. L'authenticité japonaise à l'état pur.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Poisson Grillé
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cuisson Charbon
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Techniques Ancestrales
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Saisonnier
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Pratiques</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Prix moyen :</span>
                  <span className="text-gray-600">¥780-1880</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style :</span>
                  <span className="text-gray-600">Teishoku authentique</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Spécialité :</span>
                  <span className="text-orange-600 font-medium">Yakizakana</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Cuisson :</span>
                  <span className="text-red-600 font-medium">Charbon binchōtan</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Fraîcheur :</span>
                  <span className="text-blue-600 font-medium">Sélection quotidienne</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Tradition :</span>
                  <span className="text-purple-600 font-medium">Recettes familiales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grilling Techniques */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            L'Art du Yakizakana - Techniques Traditionnelles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            焼き魚 (Yakizakana) - L'art japonais de griller le poisson, technique millénaire 
            préservée et perfectionnée chez Teishoku no Yoshi.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {grillingTechniques.map((technique, index) => (
              <div key={index} className="bg-orange-50 rounded-xl p-8 border border-orange-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{technique.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{technique.name}</h3>
                  <p className="text-lg text-gray-600 japanese-text">{technique.japanese}</p>
                  <p className="text-sm text-gray-500 mt-1">{technique.description}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{technique.details}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Avantages :</h4>
                  <div className="space-y-1">
                    {technique.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-sm text-gray-600">• {benefit}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Fish Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guide des Poissons de Saison
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fishGuide.map((season, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{season.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{season.season}</h3>
                  <p className="text-gray-600 text-sm">{season.months}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Poissons phares :</h4>
                  <div className="space-y-1">
                    {season.fish.map((fish, idx) => (
                      <p key={idx} className="text-sm text-gray-600">• {fish}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">{season.characteristics}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">🐟 Philosophie de la Saisonnalité</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Principe du Shun (旬) :</h4>
                <p className="mb-2">• <span className="font-semibold">Moment optimal :</span> Chaque poisson a sa période de perfection</p>
                <p className="mb-2">• <span className="font-semibold">Qualité maximale :</span> Saveur, texture et nutriments au sommet</p>
                <p>• <span className="font-semibold">Respect naturel :</span> Harmonie avec les cycles de reproduction</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Avantages Teishoku no Yoshi :</h4>
                <p className="mb-2">• <span className="font-semibold">Fraîcheur garantie :</span> Approvisionnement quotidien selon saison</p>
                <p className="mb-2">• <span className="font-semibold">Prix optimisés :</span> Coûts réduits en haute saison</p>
                <p>• <span className="font-semibold">Expérience authentique :</span> Goût véritable du Japon traditionnel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Menu Teishoku no Yoshi - Sélection du Maître
          </h2>
          
          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  {category.category === "Accompagnements Traditionnels" && <span className="text-green-500 mr-2">🥬</span>}
                  {category.category === "Spécialités Saisonnières" && <span className="text-purple-500 mr-2">🍂</span>}
                  {category.category === "Poissons Grillés Signature" && <span className="text-orange-500 mr-2">🔥</span>}
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-orange-600 font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text text-sm mb-2">{item.japanese}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      {!item.price.includes('+') && (
                        <p className="text-xs text-orange-600 mt-2 font-medium">+ Riz, soupe miso, légumes marinés</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            L'Excellence de Teishoku no Yoshi
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yoshiFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 mb-3">
                  <p className="text-gray-500 text-xs">{feature.details}</p>
                </div>
                
                <div className="text-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    {feature.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Commander chez Teishoku no Yoshi
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderingTips.map((tip, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{tip.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{tip.tip}</p>
                
                <div className="bg-white p-3 rounded-lg border border-orange-100">
                  <p className="font-semibold text-sm text-gray-900 mb-1">{tip.phrase}</p>
                  <p className="text-gray-600 japanese-text text-sm mb-1">{tip.japanese}</p>
                  <p className="text-gray-500 text-xs">{tip.translation}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-orange-50 p-6 rounded-xl border border-orange-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Étiquette du Yakizakana</h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Comment déguster :</h5>
                <p className="mb-2">• <span className="font-semibold">Tête vers la gauche :</span> Position traditionnelle du poisson</p>
                <p className="mb-2">• <span className="font-semibold">Arêtes avec respect :</span> Les mettre de côté proprement</p>
                <p>• <span className="font-semibold">Peau croustillante :</span> À savourer pour la texture</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-2">Appréciation :</h5>
                <p className="mb-2">• <span className="font-semibold">Complimenter la cuisson :</span> Marque de respect au chef</p>
                <p className="mb-2">• <span className="font-semibold">Observer la technique :</span> Cuisine souvent visible</p>
                <p>• <span className="font-semibold">Terminer le riz :</span> Respect de la nourriture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Autres Chaînes de Teishoku
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/chaines/ootoya" className="group bg-green-50 p-6 rounded-xl border border-green-200 hover:border-green-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 mb-3">Ootoya</h3>
              <p className="text-gray-600 text-sm">Teishoku haut de gamme avec légumes frais et cuisine visible.</p>
            </Link>
            
            <Link href="/chaines/yayoiken" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">Yayoiken</h3>
              <p className="text-gray-600 text-sm">Teishoku populaires avec riz illimité et prix abordables.</p>
            </Link>
            
            <Link href="/type-plat/teishoku" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">Tous les Teishoku</h3>
              <p className="text-gray-600 text-sm">Découvrez toutes les chaînes de teishoku et leur philosophie.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
