import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: "Ootoya 大戸屋 | Teishoku Sain | Japonchaines",
  description: "Teishoku haut de gamme. Ingrédients frais, cuisine visible, repas équilibrés.",
  keywords: 'Ootoya, 大戸屋, teishoku, restaurant japonais, repas complet, cuisine traditionnelle, légumes frais, saba teishoku',
  openGraph: {
    title: "Ootoya 大戸屋 | Teishoku Sain | Japonchaines",
    description: "Teishoku haut de gamme. Ingrédients frais, cuisine visible, repas équilibrés.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/ootoya'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function OotoyaPage() {
  const menuItems = [
    {
      category: "Teishoku Poisson",
      items: [
        { name: "Saba Teishoku", japanese: "鯖定食", price: "¥980", description: "Maquereau grillé avec riz, soupe miso et légumes de saison" },
        { name: "Saba no Sumibiyaki to Tori Tatsuta-age", japanese: "さばの炭火焼きと鶏竜田揚げ", price: "¥1230", description: "Maquereau grillé au feu de charbon et poulet frit tatsuta-age dans un set luxueux", image: "/images/chaines/ootoya/ootoya-teishoku-bg.jpg" },
        { name: "Salmon Teishoku", japanese: "鮭定食", price: "¥1080", description: "Saumon grillé sauce teriyaki, accompagnements traditionnels" },
        { name: "Hokke Teishoku", japanese: "ホッケ定食", price: "¥1180", description: "Poisson atka grillé, spécialité d'Hokkaido" },
        { name: "Buri Teriyaki", japanese: "ブリ照り焼き", price: "¥1280", description: "Sériole laquée teriyaki, légumes sautés" }
      ]
    },
    {
      category: "Teishoku Viande",
      items: [
        { name: "Chicken Nanban", japanese: "チキン南蛮", price: "¥1080", description: "Poulet frit sauce aigre-douce, salade de chou, riz" },
        { name: "Tori Karaage", japanese: "鶏唐揚げ", price: "¥980", description: "Poulet frit japonais croustillant avec légumes" },
        { name: "Buta Shogayaki", japanese: "豚生姜焼き", price: "¥1180", description: "Porc sauté au gingembre, légumes croquants" },
        { name: "Gyoza Teishoku", japanese: "餃子定食", price: "¥880", description: "Gyoza faits maison avec riz et soupe" }
      ]
    },
    {
      category: "Options Végétariennes",
      items: [
        { name: "Tofu Hamburger", japanese: "豆腐ハンバーグ", price: "¥980", description: "Hamburger de tofu maison avec sauce ponzu" },
        { name: "Yasai Itame", japanese: "野菜炒め", price: "¥880", description: "Légumes sautés de saison, riche en vitamines" },
        { name: "Agedashi Tofu", japanese: "揚げ出し豆腐", price: "¥780", description: "Tofu frit dans bouillon dashi léger" },
        { name: "Vegetable Curry", japanese: "野菜カレー", price: "¥980", description: "Curry de légumes japonais, doux et nutritif" }
      ]
    }
  ];

  const ootoyaFeatures = [
    {
      title: "Ingrédients Frais",
      icon: "🥬",
      description: "Légumes de saison sélectionnés pour leur fraîcheur et leur qualité nutritionnelle",
      details: "Ootoya privilégie les légumes japonais de saison, préparés le jour même pour préserver vitamines et saveurs."
    },
    {
      title: "Cuisine Visible",
      icon: "👨‍🍳",
      description: "Cuisine ouverte permettant de voir la préparation des plats en temps réel",
      details: "Transparence totale sur la préparation, gage de qualité et de fraîcheur des teishoku."
    },
    {
      title: "Présentation Soignée",
      icon: "🎨",
      description: "Dressage esthétique respectant l'art culinaire japonais traditionnel",
      details: "Chaque teishoku est présenté avec soin, reflétant la philosophie esthétique japonaise."
    },
    {
      title: "Options Végétariennes",
      icon: "🌱",
      description: "Large choix végétarien rare dans les chaînes de teishoku traditionnelles",
      details: "Ootoya propose de nombreuses alternatives végétariennes sans compromettre l'authenticité."
    },
    {
      title: "Qualité Constante",
      icon: "⭐",
      description: "Standards élevés maintenus dans tous les restaurants de la chaîne",
      details: "Formation rigoureuse du personnel pour garantir une expérience uniforme."
    },
    {
      title: "Ambiance Familiale",
      icon: "👨‍👩‍👧‍👦",
      description: "Atmosphère chaleureuse adaptée aux familles et repas d'affaires décontractés",
      details: "Décor en bois naturel et éclairage tamisé créent une ambiance apaisante."
    }
  ];

  const ichijuuSansai = [
    {
      element: "一汁",
      name: "Ichijuu (Une Soupe)",
      description: "Soupe miso traditionnelle",
      content: "Base du repas japonais, la soupe miso apporte umami, probiotiques et réconfort.",
      ingredients: ["Miso rouge ou blanc", "Tofu soyeux", "Wakame", "Ciboule"],
      significance: "Prépare l'estomac et stimule l'appétit"
    },
    {
      element: "三菜",
      name: "Sansai (Trois Plats)",
      description: "Trois accompagnements équilibrés",
      content: "Plat principal (poisson/viande), légumes de saison, et petits accompagnements marinés.",
      ingredients: ["Plat principal grillé", "Légumes sautés", "Tsukemono (marinés)"],
      significance: "Équilibre nutritionnel et variété des saveurs"
    }
  ];

  const orderingGuide = [
    {
      step: 1,
      title: "Entrée au Restaurant",
      icon: "🚪",
      description: "Attendre d'être placé par le personnel",
      tips: ["Dire 'Irasshaimase' en retour", "Indiquer le nombre de personnes", "Suivre jusqu'à la table"]
    },
    {
      step: 2,
      title: "Consultation du Menu",
      icon: "📋",
      description: "Menu illustré avec photos détaillées",
      tips: ["Photos de tous les teishoku", "Prix clairement indiqués", "Options végétariennes marquées"]
    },
    {
      step: 3,
      title: "Commande",
      icon: "✍️",
      description: "Commander auprès du serveur ou via QR code",
      tips: ["Système QR code disponible dans certains restaurants", "Commande sur smartphone en plusieurs langues", "Idéal pour les touristes étrangers"]
    },
    {
      step: 4,
      title: "Attente",
      icon: "⏱️",
      description: "Préparation fraîche, compter 10-15 minutes",
      tips: ["Thé vert servi gratuitement", "Observer la cuisine ouverte", "Temps de préparation plus long que fast-food"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Ootoya" chainCategory="Teishoku" />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat/teishoku" className="text-gray-500 hover:text-red-600">Teishoku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Ootoya</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🍱</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Ootoya
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">大戸屋</p>
                  <p className="text-lg text-gray-600">Teishoku Haut de Gamme</p>
                </div>
              </div>

              <p className="text-xl text-gray-700 mb-6">
                Découvrez l'excellence du teishoku chez Ootoya : cuisine traditionnelle
                raffinée avec des ingrédients frais, préparation visible et présentation
                soignée. L'art de la cuisine familiale japonaise élevé au niveau supérieur.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Légumes Frais
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cuisine Visible
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Options Végétariennes
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Qualité Premium
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Pratiques</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Prix moyen :</span>
                  <span className="text-gray-600">¥800-1500</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style :</span>
                  <span className="text-gray-600">Teishoku raffiné</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Spécialité :</span>
                  <span className="text-gray-600">Poisson grillé & légumes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Commande :</span>
                  <span className="text-gray-600">Service à table</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Ambiance :</span>
                  <span className="text-gray-600">Familiale chaleureuse</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Végétarien :</span>
                  <span className="text-green-600 font-medium">Excellentes options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ichijuu Sansai Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            La Philosophie Ichijuu Sansai chez Ootoya
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            一汁三菜 (Ichijuu Sansai) - "Une soupe, trois plats" - principe fondamental
            de l'équilibre alimentaire japonais, parfaitement incarné dans chaque teishoku Ootoya.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {ichijuuSansai.map((element, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-8 border border-green-200">
                <div className="text-center mb-6">
                  <div className="text-4xl japanese-text mb-2">{element.element}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{element.name}</h3>
                  <p className="text-lg text-gray-600">{element.description}</p>
                </div>

                <p className="text-gray-700 mb-4">{element.content}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Composants typiques :</h4>
                  <div className="flex flex-wrap gap-2">
                    {element.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-1">Signification nutritionnelle :</h4>
                  <p className="text-gray-600 text-sm">{element.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Menu Ootoya - Teishoku Sélection
          </h2>

          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  {category.category === "Options Végétariennes" && <span className="text-green-500 mr-2">🌱</span>}
                  {category.category === "Teishoku Poisson" && <span className="text-blue-500 mr-2">🐟</span>}
                  {category.category === "Teishoku Viande" && <span className="text-red-500 mr-2">🍖</span>}
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-hidden">
                      {item.image && (
                        <div className="mb-3 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-green-600 font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text text-sm mb-2">{item.japanese}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Atouts d'Ootoya
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ootoyaFeatures.map((feature, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                <div className="bg-white p-3 rounded-lg border border-green-100">
                  <p className="text-gray-500 text-xs">{feature.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander chez Ootoya
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderingGuide.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold">{step.step}</span>
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{step.description}</p>
                <div className="space-y-1">
                  {step.tips.map((tip, tipIndex) => (
                    <p key={tipIndex} className="text-xs text-gray-500">• {tip}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Phrases Utiles chez Ootoya</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Saba teishoku onegaishimasu</span></p>
                <p className="text-gray-600 japanese-text mb-2">鯖定食お願いします</p>
                <p className="text-gray-500 text-xs mb-3">Un teishoku au maquereau, s'il vous plaît</p>

                <p><span className="font-semibold">Yasai wa nan ga arimasu ka?</span></p>
                <p className="text-gray-600 japanese-text mb-2">野菜は何がありますか？</p>
                <p className="text-gray-500 text-xs">Quels légumes avez-vous ?</p>
              </div>
              <div>
                <p><span className="font-semibold">Bejitarian menyuu wa?</span></p>
                <p className="text-gray-600 japanese-text mb-2">ベジタリアンメニューは？</p>
                <p className="text-gray-500 text-xs mb-3">Avez-vous un menu végétarien ?</p>

                <p><span className="font-semibold">Oishikatta desu</span></p>
                <p className="text-gray-600 japanese-text mb-2">美味しかったです</p>
                <p className="text-gray-500 text-xs">C'était délicieux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Autres Chaînes de Teishoku
          </h2>

          <div className="grid md:grid-cols-3 gap-6">            <Link href="/chaines/yayoiken" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">Yayoiken</h3>
            <p className="text-gray-600 text-sm">Teishoku populaires avec riz illimité et prix abordables.</p>
          </Link>

            <Link href="/chaines/miyamoto-munashi" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">Miyamoto Munashi</h3>
              <p className="text-gray-600 text-sm">Teishoku économique d'Osaka avec portions généreuses à petit prix.</p>
            </Link>

            <Link
              href="/type-plat/teishoku"
              className="group relative overflow-hidden bg-green-50 p-6 rounded-xl border border-green-200 hover:border-green-300 transition-colors"
              style={{
                backgroundImage: "url('/images/chaines/ootoya/ootoya-teishoku-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="absolute inset-0 group-hover:opacity-75 transition-all duration-300"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              ></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white group-hover:text-green-200 mb-3">Tous les Teishoku</h3>
                <p className="text-gray-200 text-sm">Découvrez toutes les chaînes de teishoku et leur philosophie.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
