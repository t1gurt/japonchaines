import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';

export const metadata: Metadata = {
  title: "CoCo Ichibanya : Créez votre curry \"sur mesure\" avec plus de 40 toppings",
  description: "Personnalisez votre curry : épices (1-10), riz, 40+ toppings. Leader curry japonais.",
  keywords: [
    'coco ichibanya', 'ココイチ', 'curry japonais', 'personnalisation',
    'qualité constante', 'curry authentique', 'style japonais',
    'leader curry', 'épices personnalisées', 'curry rice'
  ],
  openGraph: {
    title: "CoCo Ichibanya : Créez votre curry \"sur mesure\" avec plus de 40 toppings",
    description: "Personnalisez votre curry : épices (1-10), riz, 40+ toppings. Leader curry japonais.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais",
    images: [
      {
        url: '/images/chaines/cocoichi/cocoichi-curry.jpg',
        width: 1200,
        height: 630,
        alt: 'CoCo Ichibanya Curry',
      }
    ]
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
          name: "Rose Cutlet Curry",
          japanese: "ロースカツカレー",
          price: "¥820",
          description: "L'incontournable escalope de porc (longe) panée avec curry signature CoCo",
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
        { name: "Escalope de longe de porc", japanese: "ロースカツ", price: "¥250" },
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
        { french: "Curry de longe katsu, niveau 3 s'il vous plaît", japanese: "ロースカツカレー、3番でお願いします", romaji: "Rōsu katsu karē, san-ban de onegaishimasu" },
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="coco-ichibanya" chainCategory="curry" />

      <PageHero
        title="CoCo Ichibanya"
        subtitle="CoCo壱番屋"
        description="Record Guinness • La plus grande chaîne de curry au monde. De la philosophie 'C'est ici le meilleur !' à l'empire mondial du curry personnalisé."
        badges={[
          "🌶️ Niveaux 0-10",
          "🥗 Options Vegan",
          "⚡ Service Rapide",
          "💰 ¥500-1200"
        ]}
        backgroundImage="/images/chaines/cocoichi/cocoichi-curry.jpg"
      />

      <ContentSection title="Menu Signature" subtitle="メニュー" background="white">
        <div className="mb-12 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 text-orange-800">
              Plat Vedette - Rose Cutlet Curry
              <span className="block text-sm font-normal text-gray-600">人気No.1 ロースカツカレー</span>
            </h3>
            <div className="relative">
              {/* Image component commented out if image not guaranteed, but keeping structure */}
              {/* <Image ... /> */}
              <div className="mt-4 text-gray-700">
                <p className="text-sm">
                  L'escalope de longe de porc parfaitement panée, croustillante à l'extérieur et juteuse à l'intérieur,
                  servie avec le curry signature CoCo Ichibanya.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm">
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
      </ContentSection>

      <ContentSection title="Guide des Niveaux d'Épice" subtitle="辛さレベルガイド" background="gray">
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

        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
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
      </ContentSection>

      <ContentSection title="Toppings Disponibles" subtitle="トッピング一覧" background="white">
        <div className="grid lg:grid-cols-3 gap-8">
          {toppings.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm">
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
      </ContentSection>

      <ContentSection title="Comment Commander" subtitle="注文方法" background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {orderingSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{step.japanese}</p>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Culture & Histoire" subtitle="文化と歴史" background="white">
        <div className="grid md:grid-cols-2 gap-8">
          {culturalTips.map((tip, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-orange-800">
                {tip.title}
                <span className="block text-sm font-normal text-gray-600">{tip.japanese}</span>
              </h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Phrases Utiles" subtitle="便利なフレーズ" background="gray">
        <div className="grid lg:grid-cols-3 gap-8">
          {usefulPhrases.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
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
      </ContentSection>

      <ContentSection title="Informations Pratiques" subtitle="実用情報" background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicalInfo.map((info, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {info.category}
                <span className="block text-sm font-normal text-gray-600">{info.japanese}</span>
              </h3>
              <p className="text-gray-700">{info.info}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Explorer Plus" subtitle="関連ページ" background="gray">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/type-plat/curry" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4">🍛</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
              Tous les Curry Japonais
            </h3>
            <p className="text-gray-600">Découvrez CoCo壱番屋, Go!Go!Curry et plus</p>
          </Link>

          <Link href="/guides/comment-commander" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
              Guide de Commande
            </h3>
            <p className="text-gray-600">Maîtrisez l'art de commander au Japon</p>
          </Link>

          <Link href="/guides/regimes-alimentaires" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
              Régimes Alimentaires
            </h3>
            <p className="text-gray-600">Options végétariennes et restrictions</p>
          </Link>
        </div>
      </ContentSection>
    </div>
  );
}
