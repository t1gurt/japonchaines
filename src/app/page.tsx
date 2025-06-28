import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Votre Guide Français des
            <span className="text-red-600 block">Chaînes de Restaurants Japonais</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Le premier guide complet en français pour naviguer facilement dans les chaînes 
            de restaurants japonais. Menus détaillés, méthodes de commande et conseils pratiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/type-plat"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explorer par Type de Plat
            </Link>
            <Link 
              href="/chaines"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              Voir Toutes les Chaînes
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Experience Promotion */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Allez Au-Delà de la Simple Commande
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Découvrez comment transformer vos visites dans les chaînes japonaises en véritables 
              expériences culturelles et créer des relations authentiques qui dureront toute une vie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🗾</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Comprenez la Culture</h4>
              <p className="text-gray-600 text-sm">
                Découvrez pourquoi les Japonais semblent distants et comment cette "froideur" 
                cache en réalité une chaleur humaine extraordinaire.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Créez des Liens</h4>
              <p className="text-gray-600 text-sm">
                Apprenez les phrases japonaises qui transforment un service froid en accueil 
                chaleureux, et le staff en véritables amis.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Progressez Étape par Étape</h4>
              <p className="text-gray-600 text-sm">
                Suivez un parcours de 50 missions progressives qui vous mènent du statut de 
                touriste à celui d'ami apprécié de la communauté locale.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/guides/culture-experience"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">✨</span>
              Commencer l'Expérience Culturelle
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Découvrez par Type de Cuisine
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Gyūdon", subtitle: "牛丼", description: "Bols de riz au bœuf", href: "/type-plat/gyudon" },
              { name: "Ramen", subtitle: "ラーメン", description: "Nouilles japonaises", href: "/type-plat/ramen" },
              { name: "Kaiten-zushi", subtitle: "回転寿司", description: "Sushi tournant", href: "/type-plat/kaiten-zushi" },
              { name: "Curry Japonais", subtitle: "カレー", description: "Curry à la japonaise", href: "/type-plat/curry" },
              { name: "Teishoku", subtitle: "定食", description: "Repas complets", href: "/type-plat/teishoku" },
              { name: "Tempura", subtitle: "天ぷら", description: "Beignets japonais", href: "/type-plat/tempura" },
              { name: "Udon", subtitle: "うどん", description: "Nouilles épaisses", href: "/type-plat/udon" },
              { name: "Soba", subtitle: "そば", description: "Nouilles de sarrasin", href: "/type-plat/soba" },
              { name: "Family Restaurant", subtitle: "ファミレス", description: "Restaurants familiaux", href: "/type-plat/family-restaurants" },
              { name: "Burgers Japonais", subtitle: "日本のハンバーガー", description: "Innovation burger", href: "/type-plat/burgers" },
              { name: "Cuisine Chinoise", subtitle: "中華料理", description: "Adaptation japonaise", href: "/type-plat/cuisine-chinoise" },
              { name: "Izakaya", subtitle: "居酒屋", description: "Bars traditionnels", href: "/type-plat/izakaya" },
              { name: "Yakiniku", subtitle: "焼肉", description: "BBQ japonais convivial", href: "/type-plat/yakiniku" },
              { name: "Steak", subtitle: "ステーキ", description: "Excellence bovine", href: "/type-plat/steak" },
              { name: "Karaoke", subtitle: "カラオケ", description: "Divertissement musical", href: "/type-plat/karaoke" },
            ].map((category) => (
              <Link 
                key={category.name}
                href={category.href}
                className="group bg-gray-50 rounded-lg p-6 hover:bg-red-50 transition-colors border border-gray-200 hover:border-red-200"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-red-600 mb-1">
                  {category.name}
                </h4>
                <p className="text-sm text-gray-600 japanese-text mb-2">
                  {category.subtitle}
                </p>
                <p className="text-xs text-gray-500">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Chains */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Chaînes Populaires
          </h3>          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Yoshinoya", japanese: "吉野家", type: "Gyūdon", slug: "yoshinoya" },
              { name: "Nakau", japanese: "なか卯", type: "Gyūdon", slug: "nakau" },
              { name: "Sushiro", japanese: "スシロー", type: "Kaiten-zushi", slug: "sushiro" },
              { name: "CoCo Ichibanya", japanese: "ココイチ", type: "Curry", slug: "coco-ichibanya" },
              { name: "Ootoya", japanese: "大戸屋", type: "Teishoku", slug: "ootoya" },
              { name: "Ichiran", japanese: "一蘭", type: "Ramen", slug: "ichiran" },
              { name: "Marugame Seimen", japanese: "丸亀製麺", type: "Udon", slug: "marugame-seimen" },
              { name: "Yudetaro", japanese: "ゆで太郎", type: "Soba", slug: "yudetaro" },
              { name: "Tenya", japanese: "てんや", type: "Tempura", slug: "tenya" },
              { name: "Gyukaku", japanese: "牛角", type: "Yakiniku", slug: "gyukaku" },
              { name: "Jolly Pasta", japanese: "ジョリーパスタ", type: "Family Restaurant", slug: "jolly-pasta" },
              { name: "Ikinari Steak", japanese: "いきなりステーキ", type: "Steak", slug: "ikinari-steak" },
              { name: "Big Echo", japanese: "ビッグエコー", type: "Karaoke", slug: "big-echo" },
            ].map((chain) => (
              <Link 
                key={chain.name}
                href={`/chaines/${chain.slug}`}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-red-200"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{chain.name}</h4>
                <p className="text-sm text-gray-600 japanese-text mb-2">{chain.japanese}</p>
                <p className="text-xs text-red-600 font-medium">{chain.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Guides Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Guides Pratiques
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comment Commander",                description: "Maîtrisez les distributeurs de tickets, écrans tactiles et commandes QR code",
                icon: "🎫",
                href: "/guides/comment-commander"
              },
              {
                title: "Régimes Alimentaires",
                description: "Guide complet pour végétariens, vegans, sans porc et allergies",
                icon: "🥗",
                href: "/guides/regimes-alimentaires"
              },
              {
                title: "Culture & Étiquette",
                description: "Apprenez les bonnes manières et la culture culinaire japonaise",
                icon: "🙏",
                href: "/guides/culture-etiquette"
              }
            ].map((guide) => (
              <Link 
                key={guide.title}
                href={guide.href}
                className="bg-gray-50 rounded-lg p-8 hover:bg-red-50 transition-colors border border-gray-200 hover:border-red-200"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h4>
                <p className="text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>      </section>
    </div>
  );
}
