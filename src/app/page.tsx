import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600">
                Chain Japanese Restaurants
              </h1>
              <span className="ml-2 text-sm text-gray-500 japanese-text">
                日本のチェーン飲食店
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-red-600 font-medium">
                Accueil
              </Link>
              <Link href="/type-plat" className="text-gray-600 hover:text-red-600">
                Par Type de Plat
              </Link>
              <Link href="/chaines" className="text-gray-600 hover:text-red-600">
                Par Chaîne A-Z
              </Link>
              <Link href="/guides" className="text-gray-600 hover:text-red-600">
                Guides Pratiques
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-red-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

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
              { name: "Tempura", subtitle: "天ぷら", description: "Beignets japonais", href: "/type-plat/tempura" },
              { name: "Udon/Soba", subtitle: "うどん・そば", description: "Nouilles traditionnelles", href: "/type-plat/udon-soba" },
              { name: "Family Restaurant", subtitle: "ファミレス", description: "Restaurants familiaux", href: "/type-plat/family-restaurants" },
              { name: "Burgers Japonais", subtitle: "日本のハンバーガー", description: "Innovation burger", href: "/type-plat/burgers" },
              { name: "Cuisine Chinoise", subtitle: "中華料理", description: "Adaptation japonaise", href: "/type-plat/cuisine-chinoise" },
              { name: "Izakaya", subtitle: "居酒屋", description: "Bars traditionnels", href: "/type-plat/izakaya" },
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
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Yoshinoya", japanese: "吉野家", type: "Gyūdon" },
              { name: "Sukiya", japanese: "すき家", type: "Gyūdon" },
              { name: "Sushiro", japanese: "スシロー", type: "Kaiten-zushi" },
              { name: "CoCo壱番屋", japanese: "ココイチ", type: "Curry" },
              { name: "Ichiran", japanese: "一蘭", type: "Ramen" },
              { name: "Marugame Seimen", japanese: "丸亀製麺", type: "Udon" },
              { name: "Saizeriya", japanese: "サイゼリヤ", type: "Family Restaurant" },
              { name: "Tenya", japanese: "てんや", type: "Tempura" },
            ].map((chain) => (
              <Link 
                key={chain.name}
                href={`/chaines/${chain.name.toLowerCase().replace(/\s+/g, '-')}`}
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
                title: "Comment Commander",
                description: "Maîtrisez les distributeurs de tickets, écrans tactiles et commandes QR code",
                icon: "🎫",
                href: "/guides/commander"
              },
              {
                title: "Régimes Alimentaires",
                description: "Guide complet pour végétariens, vegans, sans porc et allergies",
                icon: "🥗",
                href: "/guides/regimes"
              },
              {
                title: "Culture & Étiquette",
                description: "Apprenez les bonnes manières et la culture culinaire japonaise",
                icon: "🙏",
                href: "/guides/culture"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Chain Japanese Restaurants</h4>
              <p className="text-gray-400 text-sm">
                Votre guide français complet pour les chaînes de restaurants japonais.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Explorer</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/type-plat" className="hover:text-white">Par Type de Plat</Link></li>
                <li><Link href="/chaines" className="hover:text-white">Par Chaîne A-Z</Link></li>
                <li><Link href="/guides" className="hover:text-white">Guides Pratiques</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Guides</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/guides/commander" className="hover:text-white">Comment Commander</Link></li>
                <li><Link href="/guides/regimes" className="hover:text-white">Régimes Alimentaires</Link></li>
                <li><Link href="/guides/culture" className="hover:text-white">Culture & Étiquette</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">À Propos</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/mission" className="hover:text-white">Notre Mission</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Chain Japanese Restaurants. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
