import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Botejyu (ぼてぢゅう) | Okonomiyaki | Guide Restaurants Japonais',
  description: 'Guide complet de Botejyu - L\'inventeur du okonomiyaki moderne avec mayonnaise et Modan-yaki. Restaurant originel de Osaka depuis 1946.',
  keywords: [
    'botejyu', 'ぼてぢゅう', 'okonomiyaki', 'modan-yaki', 'mayonnaise okonomiyaki',
    'osaka cuisine', 'konamon', 'takoyaki', 'teppanyaki', 'restaurant osaka',
    'originel okonomiyaki', 'invention mayonnaise', 'takarazuka'
  ],
  openGraph: {
    title: 'Botejyu (ぼてぢゅう) | L\'Inventeur du Okonomiyaki Moderne',
    description: 'Découvrez Botejyu, le restaurant légendaire qui a inventé le okonomiyaki avec mayonnaise et le Modan-yaki depuis 1946',
    type: 'article',
    url: '/chaines/botejyu',
  },
  alternates: {
    canonical: '/chaines/botejyu',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BotejyuPage() {
  const menuCategories = [
    {
      name: "Okonomiyaki Classiques",
      japanese: "定番お好み焼き",
      items: [
        {
          name: "Okonomiyaki au Porc",
          japanese: "豚お好み焼き",
          price: "¥950",
          description: "Le classique intemporel avec porc, chou et l'incontournable mayonnaise Botejyu",
          isSignature: true,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Okonomiyaki aux Fruits de Mer",
          japanese: "海鮮お好み焼き",
          price: "¥1,280",
          description: "Crevettes, calamars et pétoncles avec sauce spéciale et mayonnaise blanche",
          isSignature: false,
          isPopular: true,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Okonomiyaki Végétarien",
          japanese: "野菜お好み焼き",
          price: "¥850",
          description: "Version végétarienne avec légumes de saison et champignons",
          isSignature: false,
          isPopular: false,
          isVegetarian: true,
          isInvention: false
        },
        {
          name: "Okonomiyaki Spécial Botejyu",
          japanese: "ぼてぢゅうスペシャル",
          price: "¥1,480",
          description: "La création signature avec bœuf wagyu, crevettes et pétoncles",
          isSignature: true,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        }
      ]
    },
    {
      name: "Modan-yaki (Invention Botejyu)",
      japanese: "モダン焼き（ぼてぢゅう発明）",
      items: [
        {
          name: "Modan-yaki Original",
          japanese: "元祖モダン焼き",
          price: "¥1,180",
          description: "L'invention révolutionnaire : okonomiyaki + yakisoba, née des repas ouvriers",
          isSignature: true,
          isPopular: false,
          isVegetarian: false,
          isInvention: true
        },
        {
          name: "Modan-yaki de Luxe",
          japanese: "デラックスモダン焼き",
          price: "¥1,580",
          description: "Version premium avec fruits de mer et bœuf premium",
          isSignature: false,
          isPopular: true,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Modan-yaki Épicé",
          japanese: "辛口モダン焼き",
          price: "¥1,280",
          description: "Avec sauce kimchi et épices coréennes pour les amateurs de piquant",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        }
      ]
    },
    {
      name: "Teppanyaki & Spécialités",
      japanese: "鉄板焼き・名物",
      items: [
        {
          name: "Takoyaki Botejyu (8 pièces)",
          japanese: "ぼてぢゅうたこ焼き",
          price: "¥680",
          description: "Takoyaki authentique d'Osaka avec poulpe frais et sauce maison",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Yakisoba Osaka Style",
          japanese: "大阪風焼きそば",
          price: "¥780",
          description: "Nouilles sautées avec légumes et sauce Worcestershire spéciale",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Bœuf Teppanyaki",
          japanese: "鉄板焼きビーフ",
          price: "¥1,980",
          description: "Bœuf japonais grillé sur plaque chauffante avec légumes",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Ika-yaki (Calamar Grillé)",
          japanese: "いか焼き",
          price: "¥580",
          description: "Calamar entier grillé, spécialité street-food d'Osaka",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        }
      ]
    }
  ];

  const historicalTimeline = [
    {
      year: "1946",
      event: "Fondation à Tamade",
      japanese: "玉出創業",
      description: "Nishino Eikichi et sa femme ouvrent le premier Botejyu dans le quartier ouvrier de Tamade, Osaka"
    },
    {
      year: "1953",
      event: "Expansion à Soemoncho",
      japanese: "宗右衛門町進出",
      description: "Ouverture dans le quartier des divertissements, gagnant en popularité"
    },
    {
      year: "1955",
      event: "Révolution Mayonnaise",
      japanese: "マヨネーズ革命",
      description: "Les actrices Takarazuka popularisent le okonomiyaki avec mayonnaise - invention qui changera la cuisine japonaise"
    },
    {
      year: "1960s",
      event: "Création du Modan-yaki",
      japanese: "モダン焼き誕生",
      description: "Né des repas d'ouvriers : okonomiyaki + yakisoba = 'Mori-dakusan-yaki' devenu 'Modan-yaki'"
    },
    {
      year: "1965",
      event: "Expansion Tokyo",
      japanese: "東京進出",
      description: "Premier restaurant à Shibuya, apportant la culture okonomiyaki au Kanto"
    },
    {
      year: "Présent",
      event: "Empire International",
      japanese: "国際展開",
      description: "Restaurants dans le monde entier, gardiens de la tradition okonomiyaki d'Osaka"
    }
  ];

  const cookingSecrets = [
    {
      title: "La Science de la Plaque de Fer",
      japanese: "鉄板の科学",
      description: "Plaques épaisses maintenant 140°C+ pour la réaction de Maillard parfaite",
      icon: "🔥"
    },
    {
      title: "Pâte au Dashi Secret",
      japanese: "秘伝の出汁生地",
      description: "Farine de blé + igname des montagnes + bouillon naturel (bonite, kombu, crevettes)",
      icon: "🍜"
    },
    {
      title: "Mayonnaise Blanche Spéciale",
      japanese: "特製白マヨネーズ",
      description: "Mayonnaise moins acide, plus douce, spécialement développée pour okonomiyaki",
      icon: "🥄"
    },
    {
      title: "Technique de Cuisson 'Bote-Juu'",
      japanese: "ぼてぢゅう調理法",
      description: "Son caractéristique : 'Bote' (retourner) + 'Juu' (grésiller) = perfection",
      icon: "👨‍🍳"
    }
  ];

  const sauceComponents = [
    {
      name: "Sauce Originale Botejyu",
      japanese: "ぼてぢゅうオリジナルソース",
      description: "30+ épices, légumes, fruits, sauce tamari Worcester - sans huile, sel réduit",
      color: "border-orange-400 bg-orange-50"
    },
    {
      name: "Mayonnaise Blanche d'Osaka",
      japanese: "大阪白マヨネーズ",
      description: "Moins acide que mayo classique, goût doux et crémeux parfait pour okonomiyaki",
      color: "border-yellow-400 bg-yellow-50"
    },
    {
      name: "Moutarde Japonaise",
      japanese: "和からし",
      description: "Pointe de piquant qui équilibre la richesse sauce-mayonnaise",
      color: "border-green-400 bg-green-50"
    },
    {
      name: "Katsuobushi (Bonite Séchée)",
      japanese: "かつお節",
      description: "Copeaux dansants qui apportent umami et spectacle visuel",
      color: "border-red-400 bg-red-50"
    }
  ];

  const orderingSteps = [
    {
      step: 1,
      title: "Choisir la Spécialité",
      japanese: "名物選択",
      description: "Okonomiyaki classique ou Modan-yaki (invention Botejyu)"
    },
    {
      step: 2,
      title: "Ingrédients Principal",
      japanese: "具材選択",
      description: "Porc, fruits de mer, végétarien ou spécial Botejyu"
    },
    {
      step: 3,
      title: "Cuisson Professionnelle",
      japanese: "プロ調理",
      description: "Le chef prépare devant vous avec technique 'Bote-Juu'"
    },
    {
      step: 4,
      title: "Service sur Plaque Chaude",
      japanese: "熱々サーブ",
      description: "Servi sur plaque chauffante pour garder la température parfaite"
    },
    {
      step: 5,
      title: "Dégustation aux Spatules",
      japanese: "コテで実食",
      description: "Mangez avec les petites spatules (kote) comme les Osakiens"
    }
  ];

  const culturalSignificance = [
    {
      title: "Révolution Mayonnaise",
      japanese: "マヨネーズ革命",
      description: "Botejyu a introduit la mayonnaise américaine sur okonomiyaki en 1955. Les actrices de Takarazuka l'ont popularisé, créant un standard national.",
      impact: "Aujourd'hui 99% des okonomiyaki au Japon incluent de la mayonnaise"
    },
    {
      title: "Naissance du Modan-yaki",
      japanese: "モダン焼き誕生",
      description: "Créé comme repas ouvrier (mori-dakusan = copieux), devenu 'modan' (moderne). Symbole de l'innovation culinaire japonaise d'après-guerre.",
      impact: "Marque déposée Botejyu, copié dans tout le Japon"
    },
    {
      title: "Culture du Konamon",
      japanese: "粉もん文化",
      description: "Botejyu incarne la tradition 'konamon' (plats à base de farine) d'Osaka, face populaire de la gastronomie face à la haute cuisine de Kyoto.",
      impact: "Ambassadeur de l'identité culinaire osakienne"
    },
    {
      title: "Expansion Culturelle",
      japanese: "文化発信",
      description: "Premier à exporter okonomiyaki hors du Kansai (Tokyo 1965), puis internationalement. Gardien de l'authenticité face aux adaptations.",
      impact: "Référence mondiale pour okonomiyaki authentique"
    }
  ];

  const practicalInfo = [
    {
      category: "Heures d'ouverture",
      japanese: "営業時間",
      info: "11h00-22h00 (varie selon restaurant), dernières commandes 21h30"
    },
    {
      category: "Moyens de paiement",
      japanese: "支払い方法",
      info: "Espèces, cartes de crédit principales, IC cards, PayPay dans certains restaurants"
    },
    {
      category: "Réservations",
      japanese: "予約",
      info: "Recommandées pour restaurants premium, non nécessaires pour casual dining"
    },
    {
      category: "Plaque de cuisson",
      japanese: "鉄板",
      info: "Service sur plaque chauffante maintenue à température optimale"
    },
    {
      category: "Menu anglais",
      japanese: "英語メニュー",
      info: "Disponible dans restaurants touristiques (aéroports, centres-villes)"
    },
    {
      category: "Expérience recommandée",
      japanese: "推奨体験",
      info: "Regarder la cuisson, manger aux spatules, goûter inventions historiques"
    }
  ];

  const usefulPhrases = [
    {
      situation: "Commander les Spécialités",
      japanese: "名物注文",
      phrases: [
        { french: "Okonomiyaki au porc s'il vous plaît", japanese: "豚お好み焼きをお願いします", romaji: "Buta okonomiyaki wo onegaishimasu" },
        { french: "Le Modan-yaki original", japanese: "元祖モダン焼きを", romaji: "Ganso modan-yaki wo" },
        { french: "Spécial Botejyu", japanese: "ぼてぢゅうスペシャル", romaji: "Botejyu supesharu" },
        { french: "Avec extra mayonnaise", japanese: "マヨネーズ多めで", romaji: "Mayonēzu ōme de" }
      ]
    },
    {
      situation: "À propos de l'Histoire",
      japanese: "歴史について",
      phrases: [
        { french: "C'est le restaurant original ?", japanese: "こちらが元祖のお店ですか？", romaji: "Kochira ga ganso no omise desu ka?" },
        { french: "Vous avez inventé la mayonnaise ?", japanese: "マヨネーズは発明されたんですか？", romaji: "Mayonēzu wa hatsumei sareta n desu ka?" },
        { french: "Histoire du Modan-yaki ?", japanese: "モダン焼きの歴史は？", romaji: "Modan-yaki no rekishi wa?" },
        { french: "Depuis quelle année ?", japanese: "何年からですか？", romaji: "Nan-nen kara desu ka?" }
      ]
    },
    {
      situation: "Pendant le Repas",
      japanese: "食事中",
      phrases: [
        { french: "Comment manger avec les spatules ?", japanese: "コテでどう食べますか？", romaji: "Kote de dō tabemasu ka?" },
        { french: "C'est très chaud !", japanese: "とても熱いです！", romaji: "Totemo atsui desu!" },
        { french: "Délicieux, comme prévu !", japanese: "美味しい、さすがです！", romaji: "Oishii, sasuga desu!" },
        { french: "La texture est parfaite", japanese: "食感が完璧です", romaji: "Shokkan ga kanpeki desu" }
      ]
    }
  ];

  return (
    <>
      <ChainViewTracker chainName="botejyu" chainCategory="okonomiyaki" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                ぼてぢゅう
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-orange-100">
                  Botejyu
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-orange-100 max-w-4xl mx-auto">
                元祖 • L'Inventeur du Okonomiyaki Moderne
              </p>
              <p className="text-lg mb-8 text-orange-50 max-w-3xl mx-auto">
                Du son 'Bote-Juu' de la spatule sur la plaque brûlante à l'empire mondial. 
                Depuis 1946, gardien des traditions révolutionnaires d'Osaka.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">1946</div>
                  <div className="text-sm text-orange-50">Fondation Osaka</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">1955</div>
                  <div className="text-sm text-orange-50">Révolution Mayo</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">1960s</div>
                  <div className="text-sm text-orange-50">Invention Modan-yaki</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">77</div>
                  <div className="text-sm text-orange-50">Ans de tradition</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  🏆 Inventeur Mayonnaise
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  🍜 Créateur Modan-yaki
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  🔥 Cuisson Pro
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  💰 ¥800-1800
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Menu des Inventions Légendaires
              <span className="block text-lg text-gray-600 mt-2">伝説の発明メニュー</span>
            </h2>
            
            <div className="space-y-12">
              {menuCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-red-800">
                    {category.name}
                    <span className="block text-sm font-normal text-gray-600">{category.japanese}</span>
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-lg p-6 shadow-sm relative">
                        {item.isSignature && (
                          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                            🏆 Signature
                          </span>
                        )}
                        {item.isInvention && (
                          <span className="absolute -top-2 -left-2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                            💡 Invention
                          </span>
                        )}
                        {item.isPopular && !item.isSignature && !item.isInvention && (
                          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            人気
                          </span>
                        )}
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {item.name}
                            {item.isVegetarian && <span className="ml-2 text-green-600">🌱</span>}
                          </h4>
                          <span className="text-xl font-bold text-red-600">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{item.japanese}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Chronologie des Révolutions Culinaires
              <span className="block text-lg text-gray-600 mt-2">料理革命の年表</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-300"></div>
              
              <div className="space-y-12">
                {historicalTimeline.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold text-red-600 mr-3">{event.year}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{event.event}</h3>
                            <p className="text-sm text-gray-600">{event.japanese}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 bg-red-600 border-4 border-white rounded-full shadow-lg z-10"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cooking Secrets */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Les Secrets de la Maîtrise Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅうの技術秘伝</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {cookingSecrets.map((secret, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{secret.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">{secret.title}</h3>
                      <p className="text-sm text-gray-600">{secret.japanese}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{secret.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sauce Components */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              L'Orchestre des Saveurs Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅう味の響き</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sauceComponents.map((component, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${component.color}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {component.name}
                    <span className="block text-sm font-normal text-gray-600">{component.japanese}</span>
                  </h3>
                  <p className="text-gray-700">{component.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">La Symphonie Gustative</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Ces quatre éléments, combinés sur la plaque brûlante, créent une symphonie 
                de textures et saveurs impossible à reproduire à la maison. L'art de Botejyu 
                réside dans l'équilibre parfait entre tradition et innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Impact Culturel et Historique
              <span className="block text-lg text-gray-600 mt-2">文化的歴史的影響</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {culturalSignificance.map((significance, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {significance.title}
                    <span className="block text-sm font-normal text-gray-600">{significance.japanese}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{significance.description}</p>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800">Impact :</p>
                    <p className="text-sm text-gray-700">{significance.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              L'Expérience Complète Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅう完全体験</span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              {orderingSteps.map((step, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.japanese}</p>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Useful Phrases */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Phrases Essentielles chez Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅうで使える日本語</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {usefulPhrases.map((section, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-green-800">
                    {section.situation}
                    <span className="block text-sm font-normal text-gray-600">{section.japanese}</span>
                  </h3>
                  <div className="space-y-4">
                    {section.phrases.map((phrase, phraseIndex) => (
                      <div key={phraseIndex} className="border-l-4 border-green-400 pl-4">
                        <p className="font-medium text-gray-900 mb-1">{phrase.french}</p>
                        <p className="text-lg text-gray-800 mb-1">{phrase.japanese}</p>
                        <p className="text-sm text-gray-600 italic">{phrase.romaji}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Informations Pratiques
              <span className="block text-lg text-gray-600 mt-2">実用情報</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {info.category}
                    <span className="block text-sm font-normal text-gray-600">{info.japanese}</span>
                  </h3>
                  <p className="text-gray-700">{info.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Explorer Plus de Culture Osaka
              <span className="block text-lg text-gray-600 mt-2">関連する大阪文化</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/type-plat/street-food" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🍡</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Street Food d'Osaka
                </h3>
                <p className="text-gray-600">Takoyaki, okonomiyaki et spécialités de rue</p>
              </Link>
              
              <Link href="/guides/culture-etiquette" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🎌</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Culture & Étiquette
                </h3>
                <p className="text-gray-600">Traditions et bonnes manières japonaises</p>
              </Link>
              
              <Link href="/guides/comprendre-culture-japonaise" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Comprendre le Japon
                </h3>
                <p className="text-gray-600">Histoire et mentalité japonaise</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Legacy and Global Expansion */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              L'Héritage Mondial de Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅうの世界的遺産</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  De Tamade aux Cuisines du Monde
                  <span className="block text-sm font-normal text-gray-600 mt-1">From Tamade to world kitchens</span>
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Ce qui a commencé comme un petit restaurant dans le quartier ouvrier de Tamade 
                    est devenu une révolution culinaire mondiale. Botejyu n'a pas seulement 
                    inventé des plats - il a transformé la façon dont le monde perçoit la cuisine japonaise.
                  </p>
                  <p>
                    <strong>Impact international :</strong> Aujourd'hui, du street-food de Londres aux 
                    festivals culinaires de São Paulo, l'okonomiyaki avec mayonnaise est reconnu 
                    comme authentiquement japonais. Cette "japanisation" de la mayonnaise sur okonomiyaki 
                    est directement liée à l'innovation de Botejyu en 1955.
                  </p>
                  <p>
                    <strong>Gardien de l'authenticité :</strong> Face aux nombreuses adaptations mondiales, 
                    Botejyu reste le référent de l'okonomiyaki authentique d'Osaka, maintenant 
                    ses recettes secrètes tout en s'adaptant aux goûts locaux.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Stratégie "Glocale" (Global + Local)
                  <span className="block text-sm font-normal text-gray-600">Global expansion with local adaptation</span>
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-semibold text-orange-800">🌏 Maintien du Cœur</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Recettes de base (pâte au dashi, sauce originale, technique de cuisson) 
                      identiques dans tous les restaurants mondiaux.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <p className="font-semibold text-red-800">🍽️ Adaptations Locales</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Ingrédients locaux intégrés respectueusement : fromages européens, 
                      légumes régionaux, adaptations halal/végétariennes.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-green-800">🎓 Formation Internationale</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Chefs locaux formés au Japon aux techniques authentiques avant 
                      d'ouvrir restaurants dans leurs pays d'origine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">🏪</div>
                <h4 className="font-bold text-gray-900 mb-2">Expansion Mondiale</h4>
                <p className="text-sm text-gray-600">
                  Restaurants en Asie, Europe, Amériques - ambassadeurs de la culture d'Osaka
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">👨‍🍳</div>
                <h4 className="font-bold text-gray-900 mb-2">Formation Continue</h4>
                <p className="text-sm text-gray-600">
                  Programme de formation continue pour maintenir standards authentiques
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">🔬</div>
                <h4 className="font-bold text-gray-900 mb-2">Innovation Constante</h4>
                <p className="text-sm text-gray-600">
                  R&D continue : nouveaux ingrédients, techniques modernes, durabilité
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">Héritage Préservé</h4>
                <p className="text-sm text-gray-600">
                  77 ans de traditions préservées et transmises aux nouvelles générations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/chaines" 
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux Chaînes
              </Link>
              
              <div className="flex space-x-4">
                <Link 
                  href="/type-plat/street-food" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Street Food →
                </Link>
                <Link 
                  href="/guides/culture-etiquette" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Culture →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
