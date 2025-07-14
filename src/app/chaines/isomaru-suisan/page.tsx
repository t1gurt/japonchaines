import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isomaru Suisan (磯丸水産) | Guide Complet de l'Izakaya de Fruits de Mer | Japonchaines.fr",
  description: "Découvrez Isomaru Suisan, l'izakaya révolutionnaire qui apporte l'ambiance d'une 'maison de la mer' au cœur des grandes villes japonaises. Grillez vos fruits de mer frais vous-même et vivez une expérience conviviale unique.",
  keywords: "Isomaru Suisan, 磯丸水産, izakaya, fruits de mer, grill, hamayaki, Tokyo, Osaka, poisson frais, coquillages, convivialité, culture japonaise",
  openGraph: {
    title: "Isomaru Suisan - L'Izakaya de Fruits de Mer le Plus Convivial du Japon",
    description: "Expérience unique de grill de fruits de mer dans une ambiance de 'maison de la mer' en plein centre-ville. Guide complet avec conseils pratiques.",
    url: "https://japonchaines.fr/chaines/isomaru-suisan",
    type: "article",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isomaru Suisan - Guide de l'Izakaya de Fruits de Mer",
    description: "Découvrez cette expérience unique de convivialité japonaise",
  },
};

export default function IsomaruSuisanPage() {
  const menuHighlights = [
    {
      name: "Kani Miso Kōra Yaki",
      japanese: "蟹味噌甲羅焼",
      description: "Le plat signature : crabe mijoté dans sa propre carapace avec une sauce secrète",
      price: "¥600-800",
      difficulty: "Facile",
      mustTry: true,
      tips: "Accompagnez avec du pain pour une expérience unique",
      cookingTime: "5-7 minutes"
    },
    {
      name: "Hotate no Hamayaki",
      japanese: "ホタテの浜焼き",
      description: "Coquilles Saint-Jacques grillées sur votre table, juteux et parfumés",
      price: "¥200-300 chacune",
      difficulty: "Facile",
      mustTry: true,
      tips: "Ne pas trop cuire pour garder la tendresse",
      cookingTime: "3-4 minutes par côté"
    },
    {
      name: "Sazae no Tsubo Yaki",
      japanese: "サザエの壺焼き",
      description: "Escargots de mer cuits dans leur coquille avec saké et soja",
      price: "¥300-400 chacun",
      difficulty: "Moyen",
      mustTry: false,
      tips: "Attention à la coquille chaude, utilisez les pinces",
      cookingTime: "6-8 minutes"
    },
    {
      name: "Kaisendon",
      japanese: "海鮮丼",
      description: "Bol de riz garni de poissons crus frais et variés",
      price: "¥900-1,400",
      difficulty: "Aucune",
      mustTry: false,
      tips: "Parfait pour le déjeuner, excellent rapport qualité-prix",
      cookingTime: "Servi immédiatement"
    },
    {
      name: "Ikasu Kai Moriwase",
      japanese: "活貝盛り合わせ",
      description: "Assortiment de coquillages vivants pour découvrir plusieurs saveurs",
      price: "¥1,200-1,800",
      difficulty: "Facile",
      mustTry: true,
      tips: "Idéal pour débuter et partager en groupe",
      cookingTime: "Variables selon les coquillages"
    },
    {
      name: "Geta Mori Sashimi",
      japanese: "ゲタ盛り刺身",
      description: "Sashimi variés présentés sur un plateau en bois traditionnel",
      price: "¥1,500-2,500",
      difficulty: "Aucune",
      mustTry: false,
      tips: "Fraîcheur garantie grâce aux viviers du restaurant",
      cookingTime: "Servi immédiatement"
    }
  ];

  const hamayakiGuide = [
    {
      step: "1. Préparation",
      description: "Allumez le petit grill sur votre table et laissez-le chauffer",
      icon: "🔥",
      tips: "Le grill est sûr et facile à utiliser"
    },
    {
      step: "2. Placement",
      description: "Placez les coquillages face plate vers le bas sur la grille",
      icon: "🐚",
      tips: "Cela évite que le jus s'échappe"
    },
    {
      step: "3. Cuisson",
      description: "Attendez que la coquille s'ouvre naturellement avec la chaleur",
      icon: "⏱️",
      tips: "Patience ! Ne forcez pas l'ouverture"
    },
    {
      step: "4. Retournement",
      description: "Retournez délicatement avec les pinces fournies",
      icon: "🔄",
      tips: "Attention au jus chaud qui peut éclabousser"
    },
    {
      step: "5. Dégustation",
      description: "Dégustez quand la chair devient opaque et sent bon",
      icon: "😋",
      tips: "Ajoutez une goutte de soja si désiré"
    }
  ];

  const atmosphereFeatures = [
    {
      title: "Décoration Maritime",
      description: "Drapeaux de pêche colorés, lanternes traditionnelles et filets",
      icon: "🏮"
    },
    {
      title: "Viviers à Poissons",
      description: "Poissons vivants nageant sous vos yeux, gage de fraîcheur",
      icon: "🐟"
    },
    {
      title: "Ambiance Festive",
      description: "Musique nostalgique des années 80 et cris d'accueil chaleureux",
      icon: "🎵"
    },
    {
      title: "Grills de Table",
      description: "Chaque table équipée d'un petit grill pour l'expérience hamayaki",
      icon: "🔥"
    },
    {
      title: "Style Umi no Ie",
      description: "Reproduction d'une 'maison de la mer' traditionnelle en pleine ville",
      icon: "🏠"
    },
    {
      title: "Service 24h/24",
      description: "Beaucoup d'établissements ouverts toute la nuit",
      icon: "🌙"
    }
  ];

  const culturalInsights = [
    {
      title: "Convivialité Française",
      description: "Comme la pierrade ou la raclette, Isomaru Suisan privilégie le partage et la cuisson commune",
      comparison: "🇫🇷 Pierrade = 🇯🇵 Hamayaki"
    },
    {
      title: "Concept Révolutionnaire",
      description: "Premier à démocratiser les fruits de mer haut de gamme dans un cadre décontracté",
      comparison: "Luxe accessible pour tous"
    },
    {
      title: "Innovation 2009",
      description: "Né à Kichijōji d'une inspiration de surfeur visitant les cabanes de plage",
      comparison: "De la plage à la ville"
    },
    {
      title: "Otōshi Unique",
      description: "Même l'amuse-bouche obligatoire se grille sur votre table",
      comparison: "Participation dès l'arrivée"
    }
  ];

  const practicalInfo = [
    {
      category: "Budget Moyen",
      details: [
        "Déjeuner : ¥1,000-1,500",
        "Dîner : ¥3,000-4,000", 
        "Otōshi : ¥329-399",
        "Boissons : ¥300-600"
      ]
    },
    {
      category: "Commande",
      details: [
        "Tablette tactile multilingue",
        "Photos détaillées des plats",
        "Personnel aidant volontiers",
        "Possibilité d'annuler l'otōshi"
      ]
    },
    {
      category: "Horaires",
      details: [
        "Beaucoup 24h/24",
        "Autres : 11h-5h du matin",
        "Idéal après les transports",
        "Réservation possible"
      ]
    },
    {
      category: "Paiement",
      details: [
        "Espèces acceptées",
        "Cartes bancaires",
        "IC Cards (Suica, etc.)",
        "QR codes (PayPay)"
      ]
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
            <Link href="/chaines" className="text-gray-500 hover:text-red-600">Chaînes</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Isomaru Suisan</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🦀</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Isomaru Suisan
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text mb-2">磯丸水産</p>
                  <p className="text-lg text-gray-600 italic">La "Maison de la Mer" en Ville</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Découvrez l'expérience unique de <strong>convivialité japonaise</strong> où vous 
                grillez vous-même des fruits de mer ultra-frais dans une ambiance de cabane 
                de pêcheur transportée au cœur des grandes villes.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Grill interactif
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fruits de mer frais
                </span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ouvert 24h/24
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Convivial
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-cyan-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌊 Le Concept Unique</h3>
              <p className="text-gray-600 mb-4">
                Isomaru Suisan révolutionne l'expérience des fruits de mer en recréant 
                l'atmosphère détendue des <em>"umi no ie"</em> (maisons de la mer) japonaises 
                dans des emplacements urbains pratiques.
              </p>
              <p className="text-gray-600">
                Plus qu'un restaurant, c'est un voyage sensoriel où la cuisson interactive 
                crée des moments de complicité authentique, à l'image de nos raclettes françaises !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Connection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🇫🇷 ❤️ 🇯🇵 : Quand Convivialité Française Rencontre Innovation Japonaise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalInsights.map((insight, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <p className="text-center text-sm font-medium text-blue-700">
                    {insight.comparison}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🏮 L'Ambiance : Voyage au Cœur d'un Port de Pêche
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atmosphereFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-cyan-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-cyan-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎭 Immersion Totale des 5 Sens</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👁️ Vue</h4>
                <p className="text-gray-600 text-sm">Poissons nageant dans les viviers, drapeaux colorés de pêche traditionnels</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👂 Ouïe</h4>
                <p className="text-gray-600 text-sm">Grésillements des grills, musique rétro, cris d'accueil chaleureux du personnel</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👃 Odorat</h4>
                <p className="text-gray-600 text-sm">Arômes marins, fumée parfumée du grill, soja caramélisé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hamayaki Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🔥 Maîtriser l'Art du Hamayaki (浜焼き)
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Le hamayaki, c'est l'âme d'Isomaru Suisan : griller soi-même ses fruits de mer 
            sur un petit brasero de table. Comme nos pierrades françaises, c'est un moment 
            de partage où chacun devient chef !
          </p>
          
          <div className="grid md:grid-cols-5 gap-6">
            {hamayakiGuide.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto border border-orange-200">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                <p className="text-orange-700 text-xs bg-orange-50 p-2 rounded border border-orange-200">
                  💡 {step.tips}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🚨 Conseils de Sécurité</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⚠️ Précautions</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Utilisez toujours les pinces fournies</li>
                  <li>• Ne touchez jamais le grill directement</li>
                  <li>• Attention aux projections de jus chaud</li>
                  <li>• Ne vous penchez pas trop au-dessus du grill</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✅ Bonnes Pratiques</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Surveillez la cuisson pour éviter de brûler</li>
                  <li>• Partagez l'expérience en groupe</li>
                  <li>• Demandez de l'aide au personnel si besoin</li>
                  <li>• Savourez le processus autant que le résultat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🍽️ Menu Incontournable
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((item, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
                item.mustTry ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-gray-200'
              }`}>
                {item.mustTry && (
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                      ⭐ INCONTOURNABLE
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{item.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Prix :</span>
                    <span className="text-red-600 font-medium">{item.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Difficulté :</span>
                    <span className={`font-medium ${
                      item.difficulty === 'Facile' ? 'text-green-600' : 
                      item.difficulty === 'Moyen' ? 'text-yellow-600' : 
                      'text-gray-600'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Cuisson :</span>
                    <span className="text-gray-600">{item.cookingTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">💡 Conseil du Chef</h4>
                  <p className="text-blue-700 text-xs">{item.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📋 Informations Pratiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{info.category}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🍻 L'Otōshi : Comprendre cette Tradition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Qu'est-ce que l'Otōshi ?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  L'otōshi est un petit plat servi automatiquement en début de repas dans les izakaya. 
                  Chez Isomaru Suisan, c'est souvent du poisson séché ou du fromage de poisson 
                  <strong> que vous grillez vous-même</strong> !
                </p>
                <p className="text-red-700 text-sm bg-red-100 p-3 rounded">
                  <strong>Prix :</strong> 329-399¥ par personne, inclus dans l'addition finale
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Approche Recommandée</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Considérez l'otōshi comme votre "ticket d'entrée" dans la culture japonaise. 
                  Chez Isomaru Suisan, c'est même amusant car vous participez dès l'arrivée !
                </p>
                <p className="text-green-700 text-sm bg-green-100 p-3 rounded">
                  <strong>Astuce :</strong> Si vraiment vous ne pouvez pas, demandez poliment 
                  "Otōshi wa iranai desu" dès l'arrivée
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Visit Guide */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🌟 Votre Première Visite Parfaite chez Isomaru Suisan
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🍻 Accueil et Kanpai !</h3>
                  <p className="text-gray-600">
                    Installez-vous, commandez une bière japonaise fraîche ou un saké. 
                    Profitez de l'otōshi grillé pour vous mettre dans l'ambiance !
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🦀 Le Plat Signature</h3>
                  <p className="text-gray-600">
                    Commandez absolument la <strong>Kani Miso Kōra Yaki</strong> (蟹味噌甲羅焼). 
                    Ce crabe mijoté dans sa carapace est LE plat qui a fait la réputation d'Isomaru Suisan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🐚 L'Expérience Hamayaki</h3>
                  <p className="text-gray-600">
                    Prenez l'<strong>Ikasu Kai Moriwase</strong> (活貝盛り合わせ) pour découvrir 
                    plusieurs coquillages. Grillez ensemble, partagez les techniques, riez des petites maladresses !
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🍜 La Touche Finale</h3>
                  <p className="text-gray-600">
                    Terminez par un plat réconfortant comme les ramen au poulet 
                    <strong>Tori Rā-men</strong> pour clôturer cette expérience en beauté.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Budget et Durée Conseillés</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Budget : </span>
                  <span className="text-gray-600">3,000-4,000¥ par personne</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Durée : </span>
                  <span className="text-gray-600">1h30 à 2h pour savourer</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Groupe : </span>
                  <span className="text-gray-600">2-6 personnes idéal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Finding Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📍 Trouver Isomaru Suisan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🗺️ Emplacements Stratégiques</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span><strong>Tokyo :</strong> Shibuya, Shinjuku, Ikebukuro, Ginza</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span><strong>Osaka :</strong> Namba, Umeda, Tennoji</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span><strong>Autres :</strong> Nagoya, Kyoto, Fukuoka, Sapporo</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">🔍 Comment Reconnaître</h4>
                <p className="text-gray-600 text-sm">
                  Cherchez les grandes enseignes avec des caractères japonais colorés, 
                  souvent près des gares. L'odeur de grill et l'ambiance festive sont 
                  reconnaissables à distance !
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📱 Aide Numérique</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🔍</span>
                  <span>Recherchez "Isomaru Suisan" sur Google Maps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌐</span>
                  <span>Site officiel : <strong>isomaru.jp</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">📞</span>
                  <span>Réservation possible en ligne ou par téléphone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🚇</span>
                  <span>La plupart sont à 2-5 min à pied des gares</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-green-100">
                <h4 className="font-semibold text-gray-900 mb-2">⏰ Conseil Timing</h4>
                <p className="text-gray-600 text-sm">
                  Évitez 18h-20h en semaine (affluence des salariés). 
                  Le weekend après-midi ou en soirée tardive sont plus calmes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🎉 Prêt pour l'Aventure Isomaru Suisan ?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Plus qu'un repas, Isomaru Suisan vous offre une véritable expérience de 
            <strong> convivialité japonaise</strong>. Griller ensemble ses fruits de mer 
            crée des souvenirs inoubliables et des fous rires garantis !
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              🌟 Pourquoi Choisir Isomaru Suisan ?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✅ Expérience unique de cuisson interactive</li>
                <li>✅ Ambiance authentique de port de pêche</li>
                <li>✅ Fruits de mer ultra-frais garantis</li>
                <li>✅ Accueil chaleureux et service aidant</li>
              </ul>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✅ Prix abordables pour la qualité</li>
                <li>✅ Ouvert très tard ou 24h/24</li>
                <li>✅ Parfait pour les groupes d'amis</li>
                <li>✅ Souvenirs mémorables garantis</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6 text-sm">
            <em>N'hésitez plus : Isomaru Suisan vous attend pour une soirée de rires, 
            de saveurs marines et de convivialité à la japonaise !</em>
          </p>
        </div>
      </section>
    </div>
  );
}
