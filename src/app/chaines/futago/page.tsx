import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Futago ふたご | Yakiniku Premium Osaka | Japonchaines',
  description: 'Révolution yakiniku Osaka. "Hasami-deru Kalbi", service premium, hormone d\'exception.',
  keywords: [
    'futago', 'ふたご', 'yakiniku premium', 'hasami-deru kalbi', 'hormone',
    'osaka yakiniku', 'restaurant japonais', 'barbecue japonais premium',
    'service premium', 'revolution yakiniku'
  ],
  openGraph: {
    title: 'Futago : Le Yakiniku d\'Osaka Révolutionnaire | Japonchaines',
    description: 'Guide du restaurant Futago. Découvrez le "Hasami-deru Kalbi" qui déborde du grill et le service "jusqu\'à la bouche".',
    type: 'article',
    url: '/chaines/futago',
  },
  alternates: {
    canonical: '/chaines/futago',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FutagoPage() {
  const signatureMenuItems = [
    {
      category: "🥩 Signatures Futago - Exclusivités",
      items: [
        { 
          name: "Hasami-deru Kalbi (はみ出るカルビ)", 
          price: "¥2,890 → ¥1,445", 
          description: "LE plat emblématique - Kalbi A5 wagyu de 250g qui déborde spectaculairement du grill. Réservation obligatoire.",
          highlight: "⭐ SIGNATURE" as const
        },
        { 
          name: "Futago-mori (ふたご盛り)", 
          price: "¥1,680 → ¥840", 
          description: "Assortiment d'hormone du jour (4-5 variétés) - Parfait pour découvrir la diversité des textures.",
          highlight: "🎯 DÉCOUVERTE" as const
        },
        { 
          name: "Hasami-detai Harami (はみ出たいハラミ)", 
          price: "¥1,580 → ¥790", 
          description: "Harami méga-size avec sauce teriyaki signature - Le défi savoureux.",
          highlight: "💪 CHALLENGE" as const
        },
        { 
          name: "Tsutsumeru Wagyu Sirloin (包める和牛サーロイン)", 
          price: "¥2,480 → ¥1,240", 
          description: "Champion 'Nikufest' - A4/A5 tranché ultra-fin, negi frais, daikon râpé, sauce ponzu.",
          highlight: "🏆 CHAMPION" as const
        }
      ]
    },
    {
      category: "🫀 Hormone Premium - L'Art de l'Abat",
      items: [
        { 
          name: "Hoso-shio (ホソ塩)", 
          price: "¥980 → ¥490", 
          description: "Intestin grêle de bœuf au sel - Juteux et fondant, riche en collagène.",
          highlight: ""
        },
        { 
          name: "Yamerarenai Mino (やめられないミノ)", 
          price: "¥880 → ¥440", 
          description: "Premier estomac 'irrésistible' - Texture croquante addictive.",
          highlight: ""
        },
        { 
          name: "Maboroshi no Harami (幻のハラミ)", 
          price: "¥1,280 → ¥640", 
          description: "Diaphragme de porc rare - Tendreté exceptionnelle et saveur profonde.",
          highlight: ""
        },
        { 
          name: "Tomaranai Ago-niku (とまらないあご肉)", 
          price: "¥980 → ¥490", 
          description: "Joue de bœuf 'qui ne s'arrête pas' - Umami intense, texture gélatineuse.",
          highlight: ""
        }
      ]
    },
    {
      category: "🍜 Accompagnements & Finitions",
      items: [
        { 
          name: "Hangoroshi Kimchi (半殺しキムチ)", 
          price: "¥580 → ¥290", 
          description: "Kimchi aux légumes 'à moitié écrasés' selon la technique de Nagano - Fermentation parfaite.",
          highlight: ""
        },
        { 
          name: "Hitokuchi Reimen (一口冷麺)", 
          price: "¥680 → ¥340", 
          description: "Nouilles froides à l'unique - Bouillon de 12 ingrédients mijoté 8h, nouilles d'Iwate.",
          highlight: ""
        },
        { 
          name: "Omoni no Tail Soup (オモニの自家製テールスープ)", 
          price: "¥780 → ¥390", 
          description: "Soupe queue de bœuf de la mère fondatrice - Recette familiale secrète.",
          highlight: ""
        }
      ]
    }
  ];

  const experienceSteps = [
    {
      step: "1. Réservation Essentielle",
      description: "Absolument nécessaire pour le 'Hasami-deru Kalbi' - Quasi sold-out quotidien",
      tip: "Réserver 2-3 jours à l'avance pour garantir le plat signature"
    },
    {
      step: "2. L'Accueil 'Futago Style'",
      description: "Atmosphère rétro-décontractée, musique J-Pop 2000s, comptoir à gaz vintage restauré",
      tip: "Ranger manteaux dans les paniers sous la table pour éviter les odeurs"
    },
    {
      step: "3. Le Service 'Jusqu'à la Bouche'",
      description: "Le staff cuit TOUT à la perfection devant vous - Zero stress de cuisson",
      tip: "Profitez du spectacle : c'est de l'entertainment culinaire !"
    },
    {
      step: "4. Le Grand Moment 'Yoisho!'",
      description: "Cri signature du staff lors du retournement du Hasami-deru Kalbi",
      tip: "Participez à l'ambiance : applaudissez et filmez ce moment unique !"
    }
  ];

  const culturalBackground = [
    {
      title: "🏮 Histoire des Frères Futago",
      content: "Fondé en 2010 par les jumeaux Lee Soon-chul et Lee Soon-bong, originaires de Tsuruhashi (Osaka), quartier historique du yakiniku. De leur petit restaurant de 13 tsubo à Gotanda à l'expansion internationale (Taiwan 2014, NYC avec étoile Michelin).",
      highlight: "Du local au mondial en 4 ans"
    },
    {
      title: "🎯 Philosophie 'Futago Style'",
      content: "6 piliers révolutionnaires : 'Quantité moitié, prix moitié' pour multiplier les découvertes + 'Service jusqu'à la bouche' pour l'expérience sans stress. Innovation totale du modèle yakiniku traditionnel.",
      highlight: "Révolution de l'expérience client"
    },
    {
      title: "🔥 Art de l'Hormone",
      content: "Spécialistes de l'hormone (abats) avec une approche gastronomique française. Transformation du concept 'mottainai' (ne rien gaspiller) en expérience culinaire raffinée, comparable aux meilleurs 'abats' français.",
      highlight: "Pont culturel Franco-Japonais"
    }
  ];

  const hormoneDictionary = [
    { 
      japanese: "ミノ (Mino)", 
      french: "1er estomac", 
      description: "Texture croquante ferme, saveur délicate", 
      equivalent: "Panse/Gras-double",
      difficulty: "Débutant"
    },
    { 
      japanese: "ハチノス (Hachinosu)", 
      french: "2ème estomac", 
      description: "Aspect 'nid d'abeille', texture moelleuse unique", 
      equivalent: "Bonnet/Réticulum",
      difficulty: "Intermédiaire"
    },
    { 
      japanese: "センマイ (Senmai)", 
      french: "3ème estomac", 
      description: "Texture croquante légère, souvent en sashimi", 
      equivalent: "Feuillet/Omasum",
      difficulty: "Débutant"
    },
    { 
      japanese: "シマチョウ (Shimacho)", 
      french: "Gros intestin", 
      description: "Texture 'ressort' élastique, riche en graisse savoureuse", 
      equivalent: "Gros intestin",
      difficulty: "Expert"
    },
    { 
      japanese: "ハラミ (Harami)", 
      french: "Diaphragme", 
      description: "Apparence viande rouge mais classé abat - Tendre et juteux", 
      equivalent: "Hampe/Onglet",
      difficulty: "Débutant"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="futago" chainCategory="yakiniku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat/yakiniku" className="text-gray-500 hover:text-red-600">Yakiniku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-red-600 font-medium">Futago</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 via-orange-700 to-amber-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl mr-4">🥩</span>
            <span className="text-6xl">✨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FUTAGO
          </h1>
          <p className="text-2xl mb-4 text-orange-100 japanese-text">ふたご - 大阪焼肉・ホルモン</p>
          <p className="text-xl mb-8 text-orange-100">
            La Révolution du Yakiniku Premium d'Osaka
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">「焼肉を、単なる食事から忘れられない『食のエンターテイメント』へ。」</h2>
            <p className="text-lg text-orange-200">
              Des frères jumeaux d'Osaka qui ont révolutionné l'expérience yakiniku : 
              le légendaire "Hasami-deru Kalbi" (カルビはみ出る) qui déborde du grill, 
              le service "jusqu'à la bouche" et l'art gastronomique de l'hormone.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Hasami-deru Kalbi
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Service Premium
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Hormone Gastronomique
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Entertainment Culinaire
            </span>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#signatures" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Plats Signatures</a>
            <a href="#experience" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Expérience Futago</a>
            <a href="#hormone" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Guide Hormone</a>
            <a href="#histoire" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Histoire & Culture</a>
            <a href="#pratique" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Infos Pratiques</a>
          </div>
        </div>
      </section>

      {/* Section Innovation Tarifaire */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💡 Innovation "Quantité Moitié, Prix Moitié"
            </h2>
            <p className="text-lg text-gray-700">
              Futago révolutionne l'expérience yakiniku : goûtez plus de variétés pour le même budget !
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-orange-200 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-3">🎯 Concept Révolutionnaire</h3>
                <p className="text-red-700">
                  Toutes les portions divisées par 2<br/>
                  = Prix divisé par 2<br/>
                  = 2x plus de découvertes !
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-800 mb-3">🍽️ Avantages Concrets</h3>
                <p className="text-orange-700">
                  Parfait pour couples et petits groupes<br/>
                  Exploration culinaire maximale<br/>
                  Budget optimisé, plaisir doublé
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">✨ Résultat</h3>
                <p className="text-yellow-700">
                  De ¥2,890 → ¥1,445<br/>
                  Testez 4-5 plats au lieu de 2<br/>
                  Expérience gastronomique optimale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Menu Signatures */}
      <section id="signatures" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🌟 Menu Signatures Futago
          </h2>
          
          <div className="space-y-8">
            {signatureMenuItems.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                          {item.highlight && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.highlight === '⭐ SIGNATURE' ? 'bg-red-100 text-red-800' :
                              item.highlight === '🎯 DÉCOUVERTE' ? 'bg-blue-100 text-blue-800' :
                              item.highlight === '💪 CHALLENGE' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {item.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-red-600 font-bold text-lg ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expérience Futago */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎭 L'Expérience "Futago Style"
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {experienceSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-red-600 mb-3">{step.step}</h3>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>💡 Conseil :</strong> {step.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-red-800 to-orange-700 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">🔥 Le Service "Jusqu'à la Bouche"</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">👨‍🍳</span>
                  <div>
                    <h4 className="font-semibold mb-2">Maîtrise Professionnelle</h4>
                    <p className="text-sm text-red-100">
                      Chaque morceau cuit à la perfection par nos experts : 
                      wagyu mi-saignant, hormone caramélisé à l'extérieur, juteux à l'intérieur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">🎪</span>
                  <div>
                    <h4 className="font-semibold mb-2">Entertainment Live</h4>
                    <p className="text-sm text-red-100">
                      Show culinaire en direct : retournement spectaculaire du Hasami-deru Kalbi 
                      avec le cri signature "Yoisho!" qui électrise la salle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">😌</span>
                  <div>
                    <h4 className="font-semibold mb-2">Zéro Stress</h4>
                    <p className="text-sm text-red-100">
                      Concentration totale sur la conversation et le plaisir. 
                      Plus de crainte de brûler cette pièce de wagyu à ¥3000 !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Guide Hormone */}
      <section id="hormone" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            🫀 Guide de l'Hormone - L'Art Gastronomique de l'Abat
          </h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              🇫🇷 Pont Culturel : Des Abats Français à l'Hormone Japonaise
            </h3>
            <p className="text-blue-800 mb-4">
              Comme la France célèbre ses andouillettes, tripes et ris de veau, 
              le Japon a développé l'art de l'hormone. Futago élève cette tradition au niveau gastronomique, 
              transformant "ce qu'on jetait" (放るもん) en délices recherchés.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-900 text-sm">
                <strong>🧠 Philosophie "Mottainai" :</strong> Ne rien gaspiller, transformer chaque partie en expérience gustative. 
                L'hormone au feu direct révèle des textures et saveurs impossibles à obtenir par d'autres cuissons.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            📚 Dictionnaire de l'Hormone pour Francophones
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hormoneDictionary.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900 text-sm">{item.japanese}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.difficulty === 'Débutant' ? 'bg-green-100 text-green-800' :
                    item.difficulty === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-xs mb-2"><em>{item.french}</em></p>
                <p className="text-gray-700 text-xs mb-2">{item.description}</p>
                <p className="text-gray-500 text-xs">
                  <strong>🇫🇷 Équivalent :</strong> {item.equivalent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Histoire & Culture */}
      <section id="histoire" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📖 L'Histoire des Frères Futago
          </h2>
          
          <div className="space-y-8">
            {culturalBackground.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-700 mb-4">{section.content}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-800 font-medium text-sm">
                        ✨ {section.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Succès */}
          <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">⏰ Chronologie du Succès</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2010</h4>
                <p className="text-sm">Ouverture à Gotanda<br/>13 tsubo seulement</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2014</h4>
                <p className="text-sm">International : Taiwan<br/>Expansion asiatique</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2014</h4>
                <p className="text-sm">New York bentō<br/>Michelin Guide ⭐</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2025</h4>
                <p className="text-sm">Leader yakiniku premium<br/>+ de 30 établissements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
      <section id="pratique" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            💡 Informations Pratiques Futago
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏪 Accès & Réservation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Réservation :</strong> OBLIGATOIRE pour Hasami-deru Kalbi</li>
                <li>• <strong>Anticipation :</strong> 2-3 jours à l'avance minimum</li>
                <li>• <strong>Localisation :</strong> Principaux quartiers de Tokyo</li>
                <li>• <strong>Ambiance :</strong> Décontractée mais premium</li>
              </ul>
              <div className="bg-red-100 p-3 rounded-lg mt-4">
                <p className="text-red-800 text-xs">
                  <strong>⚠️ Important :</strong> Sans réservation = Pas de Hasmi-deru Kalbi !
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget & Tarification</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Système unique :</strong> Moitié prix = double découverte</li>
                <li>• <strong>Budget type :</strong> ¥3,000-5,000/personne</li>
                <li>• <strong>Service :</strong> +5% parfois au moment du règlement</li>
                <li>• <strong>Boissons :</strong> Budget additionnel ¥800-1,500</li>
              </ul>
              <div className="bg-green-100 p-3 rounded-lg mt-4">
                <p className="text-green-800 text-xs">
                  <strong>💡 Astuce :</strong> Commandez 4-5 plats différents au lieu de 2-3 !
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Conseils d'Expérience</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Ordre idéal :</strong> Futago-mori → Hasami-deru Kalbi → Hormone</li>
                <li>• <strong>Photos :</strong> Encouragées pendant le "Yoisho!"</li>
                <li>• <strong>Durée :</strong> 90-120 minutes pour profiter pleinement</li>
                <li>• <strong>Vêtements :</strong> Éviter le blanc (fumée d'hormone)</li>
              </ul>
              <div className="bg-blue-100 p-3 rounded-lg mt-4">
                <p className="text-blue-800 text-xs">
                  <strong>🌟 Secret :</strong> Le staff adore expliquer chaque partie !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            🎉 Prêt pour l'Adventure Futago ?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Du "Hasami-deru Kalbi" spectaculaire au service "jusqu'à la bouche", 
            vivez la révolution du yakiniku premium façon Osaka !
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">⭐ Votre Checklist Futago</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">✅ Avant la visite :</h4>
                <ul className="text-sm space-y-1 text-red-100">
                  <li>• Réserver 2-3 jours à l'avance</li>
                  <li>• Prévoir budget ¥4,000-5,000</li>
                  <li>• Porter des vêtements "hormone-friendly"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Incontournables :</h4>
                <ul className="text-sm space-y-1 text-red-100">
                  <li>• Hasami-deru Kalbi (signature)</li>
                  <li>• Futago-mori (découverte hormone)</li>
                  <li>• Participer au "Yoisho!" collectif</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-4 text-2xl">
            <span>いただきます</span>
            <span>🔥</span>
            <span>🥩</span>
            <span>🎭</span>
            <span>Bonne dégustation !</span>
          </div>
        </div>
      </section>

      {/* Navigation vers autres chaînes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Découvrir d'autres expériences yakiniku
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/type-plat/yakiniku" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              ← Retour aux Yakiniku
            </Link>
            <Link href="/chaines/gyukaku" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Découvrir Gyukaku
            </Link>
            <Link href="/chaines/anan" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Découvrir Anan
            </Link>
            <Link href="/chaines" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Toutes les Chaînes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
