import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CoCo Ichibanya ココイチ | Curry N°1 | Japonchaines",
  description: "Personnalisez votre curry : épices (1-10), riz, 40+ toppings. Leader curry japonais.",
  keywords: [
    'coco ichibanya', 'ココイチ', 'curry japonais', 'personnalisation',
    'qualité constante', 'curry authentique', 'style japonais',
    'leader curry', 'épices personnalisées', 'curry rice'
  ],
  openGraph: {
    title: "CoCo Ichibanya ココイチ | Curry N°1 | Japonchaines",
    description: "Personnalisez votre curry : épices (1-10), riz, 40+ toppings. Leader curry japonais.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/coco-ichibanya',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CocoIchibanyaPage() {
  const menuCategories = [
    {
      name: "Curry Classiques",
      japanese: "定番カレー",
      items: [
        {
          name: "Pork Cutlet Curry",
          japanese: "ポークカツカレー",
          price: "¥820",
          description: "L'incontournable escalope de porc panée avec curry signature CoCo",
          spiceLevel: "Personnalisable 0-10",
          isPopular: true
        },
        {
          name: "Chicken Cutlet Curry",
          japanese: "チキンカツカレー",
          price: "¥790",
          description: "Escalope de poulet croustillante, option plus légère que le porc",
          spiceLevel: "Personnalisable 0-10"
        },
        {
          name: "Beef Curry",
          japanese: "ビーフカレー",
          price: "¥740",
          description: "Curry simple avec morceaux de bœuf tendres",
          spiceLevel: "Personnalisable 0-10"
        },
        {
          name: "Vegetable Curry",
          japanese: "野菜カレー",
          price: "¥620",
          description: "Option végétarienne avec légumes de saison",
          spiceLevel: "Personnalisable 0-10",
          isVegetarian: true
        }
      ]
    },
    {
      name: "Curry Premium",
      japanese: "プレミアムカレー",
      items: [
        {
          name: "Seafood Curry",
          japanese: "シーフードカレー",
          price: "¥980",
          description: "Crevettes, calamars et légumes dans un curry riche",
          spiceLevel: "Personnalisable 0-10"
        },
        {
          name: "Grand Mother Curry",
          japanese: "グランドマザーカレー",
          price: "¥890",
          description: "Recette traditionnelle avec légumes mijotés longuement",
          spiceLevel: "Personnalisable 0-10"
        },
        {
          name: "Chicken & Vegetables",
          japanese: "チキンと野菜",
          price: "¥850",
          description: "Morceaux de poulet avec assortiment de légumes frais",
          spiceLevel: "Personnalisable 0-10"
        }
      ]
    }
  ];

  const spiceLevels = [
    { level: 0, name: "Très doux", japanese: "甘口", description: "Pour enfants, aucun piquant", color: "bg-green-100 text-green-800" },
    { level: 1, name: "Doux", japanese: "やや甘口", description: "Très léger, débutants", color: "bg-green-200 text-green-800" },
    { level: 2, name: "Normal", japanese: "普通", description: "Standard japonais, populaire", color: "bg-yellow-100 text-yellow-800" },
    { level: 3, name: "Moyennement épicé", japanese: "やや辛口", description: "Commence à piquer légèrement", color: "bg-yellow-200 text-yellow-800" },
    { level: 4, name: "Épicé", japanese: "辛口", description: "Niveau moyen d'épice", color: "bg-orange-200 text-orange-800" },
    { level: 5, name: "Très épicé", japanese: "大辛", description: "Pour amateurs confirmés", color: "bg-orange-300 text-orange-800" },
    { level: 6, name: "Ultra épicé", japanese: "激辛", description: "Défi sérieux", color: "bg-red-200 text-red-800" },
    { level: 7, name: "Extrême", japanese: "極辛", description: "Attention ! Très intense", color: "bg-red-300 text-red-800" },
    { level: 8, name: "Diabolique", japanese: "悪魔辛", description: "Réservé aux experts", color: "bg-red-400 text-red-900" },
    { level: 9, name: "Enfer", japanese: "地獄辛", description: "Limite humaine", color: "bg-red-500 text-white" },
    { level: 10, name: "Apocalypse", japanese: "終末辛", description: "Challenge ultime !", color: "bg-red-600 text-white" }
  ];

  const toppings = [
    {
      category: "Protéines",
      japanese: "タンパク質",
      items: [
        { name: "Escalope de porc", japanese: "ポークカツ", price: "¥250" },
        { name: "Escalope de poulet", japanese: "チキンカツ", price: "¥220" },
        { name: "Saucisse", japanese: "ソーセージ", price: "¥180" },
        { name: "Œuf", japanese: "たまご", price: "¥120" },
        { name: "Crevettes frites", japanese: "エビフライ", price: "¥280" }
      ]
    },
    {
      category: "Légumes",
      japanese: "野菜",
      items: [
        { name: "Épinards", japanese: "ほうれん草", price: "¥150" },
        { name: "Aubergines", japanese: "なす", price: "¥160" },
        { name: "Champignons", japanese: "きのこ", price: "¥140" },
        { name: "Courgettes", japanese: "ズッキーニ", price: "¥140" },
        { name: "Pommes de terre", japanese: "じゃがいも", price: "¥130" }
      ]
    },
    {
      category: "Suppléments",
      japanese: "トッピング",
      items: [
        { name: "Fromage", japanese: "チーズ", price: "¥160" },
        { name: "Natto", japanese: "納豆", price: "¥120" },
        { name: "Mayonnaise", japanese: "マヨネーズ", price: "¥60" },
        { name: "Œuf poché", japanese: "温泉たまご", price: "¥100" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: 1,
      title: "Choisir la base",
      japanese: "ベース選択",
      description: "Sélectionnez votre curry de base (porc, poulet, bœuf, légumes, etc.)"
    },
    {
      step: 2,
      title: "Niveau d'épice",
      japanese: "辛さレベル",
      description: "Indiquez votre niveau d'épice préféré de 0 à 10 (2 est le standard)"
    },
    {
      step: 3,
      title: "Taille de portion",
      japanese: "ライスの量",
      description: "Choisissez la quantité de riz : Normale (普通), Grande (大盛り), Petite (少なめ)"
    },
    {
      step: 4,
      title: "Toppings",
      japanese: "トッピング",
      description: "Ajoutez des toppings supplémentaires selon vos goûts"
    },
    {
      step: 5,
      title: "Boissons",
      japanese: "ドリンク",
      description: "Optionnel : commandez une boisson (recommandé pour les niveaux épicés élevés)"
    }
  ];

  const practicalInfo = [
    {
      category: "Heures d'ouverture",
      japanese: "営業時間",
      info: "Généralement 11h00-23h00, varie selon la localisation"
    },
    {
      category: "Moyens de paiement",
      japanese: "支払い方法",
      info: "Espèces, cartes de crédit, IC cards (Suica, Pasmo), PayPay"
    },
    {
      category: "Réservations",
      japanese: "予約",
      info: "Non nécessaire, service au comptoir uniquement"
    },
    {
      category: "Wi-Fi",
      japanese: "Wi-Fi",
      info: "Disponible dans la plupart des établissements"
    },
    {
      category: "Menu anglais",
      japanese: "英語メニュー",
      info: "Disponible, avec photos et descriptions claires"
    }
  ];

  const culturalTips = [
    {
      title: "Le système d'épice CoCo",
      japanese: "ココのスパイスシステム",
      description: "CoCo壱番屋 a popularisé le système de niveaux d'épice de 0 à 10. Le niveau 2 est considéré comme 'normal' au Japon."
    },
    {
      title: "Personnalisation infinie",
      japanese: "無限カスタマイズ",
      description: "CoCo est célèbre pour permettre de personnaliser complètement son curry avec plus de 40 toppings différents."
    },
    {
      title: "Origine et expansion",
      japanese: "起源と拡大",
      description: "Fondé en 1978 à Nagoya, CoCo est devenu la plus grande chaîne de curry au monde avec des restaurants dans 7 pays."
    },
    {
      title: "Options végétariennes",
      japanese: "ベジタリアン対応",
      description: "CoCo propose des options végétariennes et même vegan certifiées, rare au Japon."
    }
  ];

  const usefulPhrases = [
    {
      situation: "Commander",
      japanese: "注文時",
      phrases: [
        { french: "Curry de porc katsu, niveau 3 s'il vous plaît", japanese: "ポークカツカレー、3番でお願いします", romaji: "Pōku katsu karē, san-ban de onegaishimasu" },
        { french: "Riz normal", japanese: "ライス普通で", romaji: "Raisu futsū de" },
        { french: "Grande portion de riz", japanese: "ライス大盛りで", romaji: "Raisu ōmori de" },
        { french: "Avec du fromage en plus", japanese: "チーズトッピングで", romaji: "Chīzu toppingu de" }
      ]
    },
    {
      situation: "Niveau d'épice",
      japanese: "辛さについて",
      phrases: [
        { french: "Pas épicé du tout", japanese: "全然辛くないで", romaji: "Zenzen karakunai de" },
        { french: "Un peu épicé", japanese: "少し辛めで", romaji: "Sukoshi karame de" },
        { french: "Très épicé", japanese: "とても辛くて", romaji: "Totemo karakute" },
        { french: "Le plus épicé possible", japanese: "一番辛いので", romaji: "Ichiban karai no de" }
      ]
    },
    {
      situation: "Questions",
      japanese: "質問",
      phrases: [
        { french: "Quels sont les toppings disponibles ?", japanese: "どんなトッピングがありますか？", romaji: "Donna toppingu ga arimasu ka?" },
        { french: "C'est végétarien ?", japanese: "ベジタリアン対応ですか？", romaji: "Bejitarian taiō desu ka?" },
        { french: "Combien de temps d'attente ?", japanese: "どのくらい待ちますか？", romaji: "Dono kurai machimasu ka?" }
      ]
    }  ];
  return (
    <>
      <ChainViewTracker chainName="coco-ichibanya" chainCategory="curry" />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CoCo壱番屋
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-orange-100">
                CoCo Ichibanya
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-orange-100 max-w-4xl mx-auto">
              Record Guinness • La plus grande chaîne de curry au monde
            </p>
            <p className="text-lg mb-8 text-orange-50 max-w-3xl mx-auto">
              De la philosophie "此処が一番や！" (C'est ici le meilleur !) à l'empire mondial du curry personnalisé. 
              Plus de 12 milliards de combinaisons possibles depuis 1978.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">1978</div>
                <div className="text-sm text-orange-50">Fondation à Nagoya</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">1,480+</div>
                <div className="text-sm text-orange-50">Restaurants mondiaux</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">12億+</div>
                <div className="text-sm text-orange-50">Combinaisons curry</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">12</div>
                <div className="text-sm text-orange-50">Pays & territoires</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                🌶️ Niveaux 0-10
              </span>
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                🥗 Options Vegan
              </span>
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                ⚡ Service Rapide
              </span>
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                💰 ¥500-1200
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Menu Signature
            <span className="block text-lg text-gray-600 mt-2">メニュー</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-orange-800">
                  {category.name}
                  <span className="block text-sm font-normal text-gray-600">{category.japanese}</span>
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-4 shadow-sm relative">
                      {item.isPopular && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          人気 No.1
                        </span>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {item.name}
                          {item.isVegetarian && <span className="ml-2 text-green-600">🌱</span>}
                        </h4>
                        <span className="text-lg font-bold text-orange-600">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.japanese}</p>
                      <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                      <p className="text-xs text-orange-600 font-medium">{item.spiceLevel}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Level Guide */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Guide des Niveaux d'Épice
            <span className="block text-lg text-gray-600 mt-2">辛さレベルガイド</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spiceLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-bold px-3 py-1 rounded-full ${level.color}`}>
                    {level.level}
                  </span>
                  <div className="text-right">
                    <h4 className="font-semibold text-gray-900">{level.name}</h4>
                    <p className="text-sm text-gray-600">{level.japanese}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{level.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">💡 Conseils pour Choisir</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-600">Débutants :</p>
                <p>Commencez par le niveau 1 ou 2</p>
              </div>
              <div>
                <p className="font-semibold text-orange-600">Amateurs :</p>
                <p>Niveaux 3 à 5 sont parfaits</p>
              </div>
              <div>
                <p className="font-semibold text-red-600">Experts :</p>
                <p>Niveaux 6+ sont un vrai défi</p>
              </div>
              <div>
                <p className="font-semibold text-purple-600">Challenge :</p>
                <p>Niveau 10 = Signature requise !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Toppings Disponibles
            <span className="block text-lg text-gray-600 mt-2">トッピング一覧</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {toppings.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-orange-800">
                  {category.category}
                  <span className="block text-sm font-normal text-gray-600">{category.japanese}</span>
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.japanese}</p>
                        </div>
                        <span className="text-orange-600 font-semibold">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Comment Commander
            <span className="block text-lg text-gray-600 mt-2">注文方法</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {orderingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

      {/* Cultural Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Culture & Histoire
            <span className="block text-lg text-gray-600 mt-2">文化と歴史</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {culturalTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-800">
                  {tip.title}
                  <span className="block text-sm font-normal text-gray-600">{tip.japanese}</span>
                </h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Phrases */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Phrases Utiles
            <span className="block text-lg text-gray-600 mt-2">便利なフレーズ</span>
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
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Explorer Plus
            <span className="block text-lg text-gray-600 mt-2">関連ページ</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/type-plat/curry" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4">🍛</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
                Tous les Curry Japonais
              </h3>
              <p className="text-gray-600">Découvrez CoCo壱番屋, Go!Go!Curry et plus</p>
            </Link>
            
            <Link href="/guides/comment-commander" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
                Guide de Commande
              </h3>
              <p className="text-gray-600">Maîtrisez l'art de commander au Japon</p>
            </Link>
            
            <Link href="/guides/regimes-alimentaires" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
                Régimes Alimentaires
              </h3>
              <p className="text-gray-600">Options végétariennes et restrictions</p>
            </Link>
          </div>        </div>
      </section>

      {/* Histoire et Philosophie */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            L'Histoire d'un Empire du Curry
            <span className="block text-lg text-gray-600 mt-2">カレー帝国の歴史</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-orange-800 mb-6">
                Des Origines Humbles aux Records Mondiaux
                <span className="block text-sm font-normal text-gray-600 mt-1">humble beginning to world records</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>1974 :</strong> Tout commence dans la modeste cafétéria "Bacchus" (バッカス) 
                  de Munetsugu Tokuji et sa femme Naomi à Nagoya. Le curry fait maison de Mme Munetsugu 
                  devient si populaire qu'ils décident de se spécialiser.
                </p>
                <p>
                  <strong>1978 :</strong> Ouverture du premier "Curry House CoCo Ichibanya" 
                  à Nishibibajima-cho, dans la banlieue de Nagoya, entouré de rizières. 
                  Les habitants disaient : "Un restaurant ne peut pas marcher dans un endroit pareil !"
                </p>
                <p>
                  <strong>La révélation :</strong> Le premier jour d'ouverture, en voyant la joie 
                  des clients, le fondateur abandonne instantanément son business immobilier. 
                  Il avait trouvé sa vocation : servir le meilleur curry du monde.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Philosophie "此処が一番や！"
                <span className="block text-sm font-normal text-gray-600">Koko ga ichiban ya!</span>
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-semibold text-orange-800">此処が一番や！</p>
                  <p className="text-sm text-gray-600">"C'est ici le meilleur !"</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Né d'un voyage en shinkansen après avoir goûté les currys de Tokyo. 
                    Le fondateur réalise que son curry était le meilleur.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-semibold text-yellow-800">ニコ・キビ・ハキ</p>
                  <p className="text-sm text-gray-600">Nico • Kibi • Haki</p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Nico :</strong> Toujours sourire<br/>
                    <strong>Kibi :</strong> Bouger avec énergie<br/>
                    <strong>Haki :</strong> Parler clairement
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Record Guinness</h4>
              <p className="text-gray-600 text-sm">
                Officiellement reconnu comme "la plus grande chaîne de restaurants de curry au monde" 
                avec plus de 1,480 restaurants dans 12 pays et territoires.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🌏</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Expansion Mondiale</h4>
              <p className="text-gray-600 text-sm">
                Premier restaurant à l'étranger en 1994 à Hawaï. Aujourd'hui présent en Asie, 
                Europe (Londres), et même en Inde - le pays d'origine du curry !
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Système Bloom</h4>
              <p className="text-gray-600 text-sm">
                Système unique de formation d'employés-propriétaires. 90%+ de taux de survie 
                après 10 ans - un record dans l'industrie de la restauration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Internationale */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            CoCo壱番屋 à Travers le Monde
            <span className="block text-lg text-gray-600 mt-2">グローバル展開戦略</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Stratégie d'Adaptation Mondiale</h3>
              <p className="text-gray-700 mb-6">
                La réussite internationale de CoCo壱番屋 repose sur une philosophie unique : 
                maintenir la <strong>consistance du goût</strong> tout en s'adaptant aux cultures locales.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">🇺🇸 États-Unis & Hawaï</h4>
                  <p className="text-sm text-gray-600">
                    Immense popularité auprès des militaires américains. Menu adapté avec 
                    macaroni & cheese pour enfants et portions généreuses.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">🇬🇧 Royaume-Uni</h4>
                  <p className="text-sm text-gray-600">
                    Positionnement premium à Londres. Le "Katsu Curry" était déjà populaire, 
                    CoCo apporte l'authenticité japonaise.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">🇨🇳 Chine</h4>
                  <p className="text-sm text-gray-600">
                    Transformation réussie : design Instagram-friendly, ciblage des jeunes femmes, 
                    CoCo devient LA référence du curry japonais.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">🇮🇳 Inde</h4>
                  <p className="text-sm text-gray-600">
                    Le défi ultime ! Menu 100% adapté : séparation végétarien/non-végétarien, 
                    paneer, agneau, aucun bœuf ou porc.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Présence Mondiale en Chiffres
                <span className="block text-sm font-normal text-gray-600">Global footprint by numbers</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
                  <div className="text-2xl font-bold text-orange-700">1,264</div>
                  <div className="text-xs text-gray-600">Restaurants Japon</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">216</div>
                  <div className="text-xs text-gray-600">Restaurants International</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">968億</div>
                  <div className="text-xs text-gray-600">Ventes Japon (¥)</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">185億</div>
                  <div className="text-xs text-gray-600">Ventes International (¥)</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Pays les Plus Importants :</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">🇹🇭 Thaïlande</span>
                    <span className="text-sm font-semibold text-gray-900">51 restaurants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">🇨🇳 Chine</span>
                    <span className="text-sm font-semibold text-gray-900">50 restaurants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">🇰🇷 Corée du Sud</span>
                    <span className="text-sm font-semibold text-gray-900">31 restaurants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">🇹🇼 Taïwan</span>
                    <span className="text-sm font-semibold text-gray-900">28 restaurants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Le Secret du Succès Mondial</h3>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              "Même goût partout, adaptations locales intelligentes" - CoCo壱番屋 prouve qu'une 
              chaîne peut être à la fois globalement cohérente et localement pertinente.
            </p>
          </div>
        </div>
      </section>

      {/* Le Système CoCo壱番屋 */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce qui Rend CoCo壱番屋 Unique
            <span className="block text-lg text-gray-600 mt-2">ココイチの独自システム</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">
                Le "Bloom System" (ブルームシステム)
                <span className="block text-sm font-normal text-gray-600">Système unique de formation des propriétaires</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">🎯 Concept Révolutionnaire</h4>
                  <p className="text-sm text-gray-700">
                    Contrairement aux franchises classiques, CoCo壱番屋 forme ses futurs propriétaires 
                    en interne pendant 3-6 ans avant de les laisser ouvrir leur restaurant.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">💰 Aucun Royalty</h4>
                  <p className="text-sm text-gray-700">
                    Les propriétaires ne paient AUCUN pourcentage sur leurs ventes ! 
                    CoCo壱番屋 gagne via la vente d'ingrédients et matériaux.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">📈 Taux de Succès Exceptionnel</h4>
                  <p className="text-sm text-gray-700">
                    Plus de 90% des propriétaires Bloom continuent leur activité après 10 ans - 
                    un record absolu dans la restauration !
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                Mass Customization (マス・カスタマイゼーション)
                <span className="block text-sm font-normal text-gray-600">Personnalisation de masse</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎨 Votre Curry, Votre Création</h4>
                  <p className="text-sm text-gray-700">
                    Plus de 12 milliards de combinaisons possibles ! Chaque client crée 
                    SON curry unique impossible à reproduire ailleurs.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">🧠 Psychologie de l'Attachment</h4>
                  <p className="text-sm text-gray-700">
                    En créant "leur" curry, les clients développent un attachement émotionnel 
                    unique qui les rend fidèles à la marque.
                  </p>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">⚡ Curry "Neutre" Génial</h4>
                  <p className="text-sm text-gray-700">
                    Le curry de base est volontairement "sans caractère" - il sert de toile 
                    vierge pour que vos toppings brillent !
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🏪</div>
              <h4 className="font-bold text-gray-900 mb-2">Qualité Constante</h4>
              <p className="text-sm text-gray-600">
                Même sauce curry importée du Japon dans tous les restaurants mondiaux
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-bold text-gray-900 mb-2">Innovation Digitale</h4>
              <p className="text-sm text-gray-600">
                App officielle, QR codes, commande mobile, livraison partenaire
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-bold text-gray-900 mb-2">Options Végétariennes</h4>
              <p className="text-sm text-gray-600">
                Curry végétarien certifié, adaptations locales respectueuses
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">Partenariat Haus</h4>
              <p className="text-sm text-gray-600">
                Alliance avec Haus Foods pour sécuriser la chaîne d'approvisionnement
              </p>
            </div>          </div>
        </div>
      </section>
    </div>
    </>
  );
}
