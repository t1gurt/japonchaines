import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, TrendingUp, Users, History, Award, Utensils, Heart, Crown, Flame } from 'lucide-react';
import CategoryViewTracker from '../../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Okonomiyaki (お好み焼き) | Guide Restaurants Japonais',
  description: 'Guide complet de l\'okonomiyaki - la "pizza japonaise" d\'Osaka. Histoire, techniques, chaînes recommandées et secrets des maîtres.',
  keywords: [
    'okonomiyaki', 'お好み焼き', 'pizza japonaise', 'osaka cuisine',
    'botejyu', 'ぼてぢゅう', 'modan-yaki', 'konamon',
    'mayonnaise okonomiyaki', 'takoyaki', 'teppanyaki',
    'street food osaka', 'cuisine osaka'
  ],
  openGraph: {
    title: 'Okonomiyaki (お好み焼き) | La Pizza Japonaise d\'Osaka',
    description: 'Découvrez l\'okonomiyaki authentique d\'Osaka, ses innovations historiques et les meilleures chaînes',
    type: 'article',
    url: '/type-plat/okonomiyaki',
  },
  alternates: {
    canonical: '/type-plat/okonomiyaki',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OkonomiyakiPage() {
  const chains = [
    {
      name: 'Botejyu',
      nameJp: 'ぼてぢゅう',
      slug: 'botejyu',
      description: 'L\'inventeur légendaire du okonomiyaki avec mayonnaise et créateur du Modan-yaki depuis 1946',
      specialties: ['Okonomiyaki Original', 'Modan-yaki (Invention)', 'Sauce & Mayonnaise Secrètes'],
      avgPrice: '¥800-1800',
      popularity: 'Légendaire',
      heritage: 'Fondé 1946',
      innovation: 'Révolution Mayonnaise 1955',
      locations: 'Osaka originale + International',
      experience: 'Cuisson professionnelle + Histoire vivante'
    }
  ];

  const okonomiyakiHistory = [
    {
      period: "Période Edo",
      japanese: "江戸時代",
      development: "Funoyaki - L'Ancêtre",
      description: "Crêpes simples à base de farine et eau, ancêtre lointain de l'okonomiyaki"
    },
    {
      period: "Ère Meiji",
      japanese: "明治時代", 
      development: "Yoshokuyaki - Évolution",
      description: "Influence occidentale : ajout d'œufs et légumes, se rapprochant de la forme moderne"
    },
    {
      period: "Période Taishō",
      japanese: "大正時代",
      development: "Issen Yoshoku - Précurseur",
      description: "Version populaire avec sauce Worcestershire, populaire dans les quartiers ouvriers"
    },
    {
      period: "Après-guerre",
      japanese: "戦後",
      development: "Okonomiyaki Moderne",
      description: "Naissance de la version actuelle avec chou abondant, devenu plat de reconstruction"
    },
    {
      period: "1946-1955",
      japanese: "ぼてぢゅう革命",
      development: "Révolution Botejyu",
      description: "Botejyu révolutionne avec mayonnaise (1955) et crée le Modan-yaki, définissant les standards"
    },
    {
      period: "Aujourd'hui",
      japanese: "現代",
      development: "Culture Mondiale",
      description: "Symbole culinaire d'Osaka, exporté mondialement, variations infinies"
    }
  ];

  const preparationSecrets = [
    {
      title: "La Pâte Magique",
      japanese: "魔法の生地",
      technique: "Mélange précis farine + dashi + igname",
      secret: "Le dashi (bouillon) dans la pâte apporte l'umami profond qui différencie le vrai okonomiyaki des imitations",
      icon: "🍜"
    },
    {
      title: "Science du Chou",
      japanese: "キャベツの科学", 
      technique: "Coupe spécifique + timing parfait",
      secret: "Le chou doit être coupé en lanières de 2-3mm, ni trop fin (devient pâteux) ni trop épais (ne cuit pas uniformément)",
      icon: "🥬"
    },
    {
      title: "Maîtrise de la Plaque",
      japanese: "鉄板の支配",
      technique: "Température 140°C + techniques de retournement",
      secret: "Une seule fois retourné avec les spatules (kote), jamais pressé - l'air emprisonné crée la texture moelleuse parfaite",
      icon: "🔥"
    },
    {
      title: "L'Art des Sauces",
      japanese: "ソースの芸術",
      technique: "Layering des saveurs",
      secret: "Sauce okonomiyaki + mayonnaise + katsuobushi + nori - chaque couche a son rôle gustatif et visuel précis",
      icon: "🎨"
    }
  ];

  const regionalVariations = [
    {
      region: "Osaka Style",
      japanese: "大阪風",
      description: "Le style 'mix' - tous ingrédients mélangés dans la pâte avant cuisson",
      characteristics: ["Pâte + ingrédients mélangés", "Texture moelleuse", "Mayonnaise standard", "Sauce sucrée"],
      originality: "Style dominant et exporté mondialement"
    },
    {
      region: "Hiroshima Style", 
      japanese: "広島風",
      description: "Le style 'layer' - ingrédients superposés en couches distinctes",
      characteristics: ["Crêpe fine de base", "Légumes en couches", "Yakisoba inclus", "Plus volumineux"],
      originality: "Tradition locale distincte mais moins internationale"
    },
    {
      region: "Tokyo Modern",
      japanese: "東京モダン",
      description: "Adaptations urbaines avec ingrédients premium",
      characteristics: ["Fruits de mer premium", "Fromages importés", "Légumes bio", "Présentation raffinée"],
      originality: "Innovation contemporaine pour clientèle aisée"
    },
    {
      region: "International Fusion",
      japanese: "国際フュージョン",
      description: "Adaptations mondiales avec saveurs locales",
      characteristics: ["Ingrédients locaux", "Sauces adaptées", "Formats modifiés", "Végétarien/vegan"],
      originality: "Évolution naturelle pour marchés internationaux"
    }
  ];

  const culturalSignificance = [
    {
      aspect: "Âme d'Osaka",
      japanese: "大阪の魂",
      description: "L'okonomiyaki incarne l'esprit d'Osaka : créativité, convivialité, absence de prétention et joie de vivre authentique."
    },
    {
      aspect: "Cuisine de Reconstruction",
      japanese: "復興の料理",
      description: "Né de la nécessité d'après-guerre, symbolise la résilience japonaise et la capacité à créer du beau avec le simple."
    },
    {
      aspect: "Culture Konamon",
      japanese: "粉もん文化",
      description: "Représente la culture populaire des 'plats à base de farine' face à la haute gastronomie, démocratisant le plaisir culinaire."
    },
    {
      aspect: "Innovation Perpétuelle",
      japanese: "永続的革新",
      description: "De Botejyu à aujourd'hui, continue d'évoluer tout en préservant ses racines, modèle d'adaptation créative."
    }
  ];

  const orderingTips = [
    {
      situation: "Première Visite",
      japanese: "初回訪問",
      tip: "Commencez par l'okonomiyaki au porc (classique) pour comprendre la base avant d'explorer",
      phrase: "豚お好み焼きをお願いします (Buta okonomiyaki wo onegaishimasu)"
    },
    {
      situation: "Expérience Authentique", 
      japanese: "本格体験",
      tip: "Chez Botejyu, commandez le Modan-yaki original pour goûter l'invention historique",
      phrase: "元祖モダン焼きを (Ganso modan-yaki wo)"
    },
    {
      situation: "Cuisson Maison",
      japanese: "自分で焼く",
      tip: "Si vous cuisinez vous-même : ne retournez qu'UNE FOIS et ne pressez jamais",
      phrase: "自分で焼きたいです (Jibun de yakitai desu)"
    },
    {
      situation: "Accompagnements",
      japanese: "付け合わせ",
      tip: "Bière froide ou thé vert compensent la richesse - évitez les boissons sucrées",
      phrase: "ビールも一緒に (Bīru mo issho ni)"
    }
  ];

  const nutritionalInfo = [
    {
      component: "Chou (主要)",
      benefits: ["Vitamine C", "Fibres", "Faible en calories"],
      role: "Base nutritionnelle saine, texture et fraîcheur"
    },
    {
      component: "Pâte (生地)",
      benefits: ["Glucides complexes", "Protéines végétales"],
      role: "Énergie durable, satiété"
    },
    {
      component: "Protéines",
      benefits: ["Acides aminés essentiels", "Fer (porc)"],
      role: "Construction musculaire, énergie"
    },
    {
      component: "Garnitures",
      benefits: ["Calcium (katsuobushi)", "Umami naturel"],
      role: "Rehaussement gustatif et nutritionnel"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="okonomiyaki" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Types de Plat</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-red-600 font-medium">Okonomiyaki</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🥞</span>
              <span className="text-6xl mr-4">🍜</span>
              <span className="text-6xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Okonomiyaki
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">お好み焼き</p>
            <p className="text-xl mb-8 text-orange-100">
              La "Pizza Japonaise" d'Osaka - Révolution Culinaire depuis 1946
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Philosophie "Comme Vous L'Aimez"</h2>
              <p className="text-lg text-orange-200">
                "お好み焼き" signifie littéralement "grillé comme vous l'aimez". 
                Cette philosophie de personnalisation révolutionnaire, née à Osaka, 
                a transformé un simple mélange de farine et chou en symbole 
                de créativité culinaire et convivialité japonaise.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Invention Mayonnaise 1955
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Créateur Modan-yaki
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Âme d'Osaka
              </span>
              <span className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold">
                ¥800-1800
              </span>
            </div>
          </div>
        </section>

        {/* Historical Evolution */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Évolution Historique de l'Okonomiyaki
              <span className="block text-lg text-gray-600 mt-2">お好み焼きの歴史的進化</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-300"></div>
              
              <div className="space-y-12">
                {okonomiyakiHistory.map((era, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="mr-4">
                            <h3 className="text-lg font-bold text-red-800">{era.period}</h3>
                            <p className="text-sm text-gray-600">{era.japanese}</p>
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{era.development}</h4>
                        <p className="text-gray-700">{era.description}</p>
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

        {/* Preparation Secrets */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Les Secrets de la Maîtrise
              <span className="block text-lg text-gray-600 mt-2">お好み焼きマスターの秘密</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {preparationSecrets.map((secret, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{secret.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">{secret.title}</h3>
                      <p className="text-sm text-gray-600">{secret.japanese}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technique :</h4>
                    <p className="text-gray-700">{secret.technique}</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Secret du Maître :</h4>
                    <p className="text-sm text-gray-700">{secret.secret}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Variations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Variations Régionales et Évolutions
              <span className="block text-lg text-gray-600 mt-2">地域差と進化</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {regionalVariations.map((variation, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {variation.region}
                    <span className="block text-sm font-normal text-gray-600">{variation.japanese}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{variation.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques :</h4>
                    <ul className="space-y-1">
                      {variation.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs font-semibold text-red-700 mb-1">Originalité :</p>
                    <p className="text-xs text-gray-600">{variation.originality}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Signification Culturelle Profonde
              <span className="block text-lg text-gray-600 mt-2">深い文化的意義</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {culturalSignificance.map((significance, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {significance.aspect}
                    <span className="block text-sm font-normal text-gray-600">{significance.japanese}</span>
                  </h3>
                  <p className="text-gray-700">{significance.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chains Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Chaînes Spécialisées Recommandées
              <span className="block text-lg text-gray-600 mt-2">推奨専門チェーン</span>
            </h2>
            
            <div className="space-y-8">
              {chains.map((chain, index) => (
                <Link 
                  key={index}
                  href={`/chaines/${chain.slug}`}
                  className="block bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-red-800 mb-2 group-hover:text-red-600">
                        {chain.name}
                        <span className="block text-lg font-normal text-gray-600">{chain.nameJp}</span>
                      </h3>
                      <p className="text-gray-700 mb-4">{chain.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Crown className="w-4 h-4 text-yellow-600 mr-2" />
                          <span className="text-sm font-semibold">{chain.popularity}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-red-600 mr-2" />
                          <span className="text-sm">{chain.avgPrice}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Spécialités :</h4>
                      <ul className="space-y-1 mb-4">
                        {chain.specialties.map((specialty, specIndex) => (
                          <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                            <Flame className="w-3 h-3 text-orange-500 mr-2" />
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs font-semibold text-red-700 mb-1">Héritage :</p>
                        <p className="text-xs text-gray-600">{chain.heritage}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs font-semibold text-orange-700 mb-1">Innovation :</p>
                        <p className="text-xs text-gray-600">{chain.innovation}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Expérience :</p>
                        <p className="text-xs text-gray-600">{chain.experience}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Tips */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Conseils de Commande Expert
              <span className="block text-lg text-gray-600 mt-2">注文のコツ</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {orderingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-3">
                    {tip.situation}
                    <span className="block text-sm font-normal text-gray-600">{tip.japanese}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{tip.tip}</p>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800 mb-1">Phrase utile :</p>
                    <p className="text-lg text-gray-800">{tip.phrase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutritional Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Aspects Nutritionnels
              <span className="block text-lg text-gray-600 mt-2">栄養面の特徴</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionalInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">{info.component}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Bénéfices :</h4>
                    <ul className="space-y-1">
                      {info.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-700 mb-1">Rôle :</p>
                    <p className="text-xs text-gray-600">{info.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Explorer Plus
              <span className="block text-lg text-gray-600 mt-2">関連コンテンツ</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/chaines/botejyu" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Botejyu - L'Inventeur
                </h3>
                <p className="text-gray-600">Le restaurant légendaire qui a créé l'okonomiyaki moderne</p>
              </Link>
              
              <Link href="/type-plat/street-food" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🍡</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Street Food d'Osaka
                </h3>
                <p className="text-gray-600">Takoyaki et autres spécialités de rue osakiennes</p>
              </Link>
              
              <Link href="/guides/culture-etiquette" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🎌</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Culture & Étiquette
                </h3>
                <p className="text-gray-600">Comprendre les traditions et savoir-vivre japonais</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/type-plat" 
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux Types de Plat
              </Link>
              
              <div className="flex space-x-4">
                <Link 
                  href="/chaines/botejyu" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Voir Botejyu →
                </Link>
                <Link 
                  href="/type-plat/street-food" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Street Food →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
