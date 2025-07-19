import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: "Gyukaku 牛角 | Yakiniku Premium | Japonchaines",
  description: "Leader yakiniku Japon. Viandes premium, formules à volonté, barbecue convivial.",
  keywords: 'Gyukaku, 牛角, yakiniku, barbecue japonais, kalbi, harami, viande premium, restaurant japonais',
  openGraph: {
    title: "Gyukaku 牛角 | Yakiniku Premium | Japonchaines",
    description: "Leader yakiniku Japon. Viandes premium, formules à volonté, barbecue convivial.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/gyukaku',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GyukakuPage() {
  const menuItems = [
    {
      category: "Parties Premium (上級部位)",
      items: [
        { name: "Sankaku-bara (三角バラ)", price: "¥2,980", description: "Le 'Roi du Kalbi' - Persillé exceptionnel, fonte en bouche" },
        { name: "Zabuton (ザブトン)", price: "¥3,480", description: "Épaule premium - Texture fondante comme du beurre" },
        { name: "Misuji (ミスジ)", price: "¥2,680", description: "Trois nervures - Partie rare avec gélatine unique" },
        { name: "Tan-moto (タン元)", price: "¥1,980", description: "Base de langue - La partie la plus tendre" }
      ]
    },
    {
      category: "Kalbi & Harami Classiques",
      items: [
        { name: "Kalbi Spécial", price: "¥1,580", description: "Côtes marinées dans la sauce signature Gyukaku" },
        { name: "Harami Premium", price: "¥1,680", description: "Diaphragme - N°1 popularité au Japon" },
        { name: "Kalbi Harami Set", price: "¥2,380", description: "Combinaison des deux favoris" },
        { name: "Naka-ochi Kalbi", price: "¥1,280", description: "Viande entre les côtes - Saveur concentrée" }
      ]
    },
    {
      category: "Hormone (ホルモン) - Abats d'Exception",
      items: [
        { name: "Mino (ミノ)", price: "¥980", description: "Premier estomac - Texture croquante, idéal débutants" },
        { name: "Shimacho (シマチョウ)", price: "¥1,280", description: "Gros intestin rayé - Roi des abats" },
        { name: "Senmai (センマイ)", price: "¥880", description: "Troisième estomac - Mille feuilles, texture unique" },
        { name: "Hatsu (ハツ)", price: "¥980", description: "Cœur - Goût pur, texture ferme" }
      ]
    },
    {
      category: "Formules & Courses Découverte",
      items: [
        { name: "Course Wagyu Premium", price: "¥5,980", description: "Sélection de parties wagyu + accompagnements traditionnels" },
        { name: "All-you-can-eat Premium", price: "¥3,980", description: "À volonté avec parties premium incluses" },
        { name: "Hormone Dégustation", price: "¥2,980", description: "Découverte guidée des abats japonais" },
        { name: "Débutant Discovery", price: "¥2,480", description: "Sélection adaptée aux novices avec guide de cuisson" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: "1. Installation & Préparation",
      description: "Table avec grill intégré - Attendre 5min de chauffe avant utilisation",
      tip: "Demander l'explication du système de 3 sauces (soja/miso/sel) disponibles"
    },
    {
      step: "2. Stratégie de Commande",
      description: "Menu avec photos détaillées - Suivre la 'Règle d'Or' yakiniku",
      tip: "Commencer par Langue (sel) → Viandes rouges → Parties persillées → Abats"
    },
    {
      step: "3. Maîtrise de la Cuisson",
      description: "Technique 'une seule fois retournée' - Observer les sucs en surface",
      tip: "Langue: 30-45 sec/face | Kalbi: 1-2 min/face | Wagyu: saignant recommandé"
    },
    {
      step: "4. Étiquette & Sécurité",
      description: "Pinces séparées crues/cuites - Partage convivial autour du grill",
      tip: "JAMAIS les mêmes pinces ! Cuire pour les autres = courtoisie japonaise"
    }
  ];

  const specialties = [
    {
      name: "🥩 Anatomie Premium",
      description: "Gyukaku maîtrise la découpe japonaise : 50+ parties d'une seule carcasse, chacune avec sa technique optimale",
      cultural: "Application de la tradition 'bui-wake' (部位分け) - art de la découpe respectant chaque muscle"
    },
    {
      name: "🔥 Trois Écoles de Sauce",
      description: "Sauces Tare signature : Soja (viandes riches), Miso (abats), Sel (parties délicates) - alchimie des saveurs",
      cultural: "Héritage de la culture coréenne adapté au palais japonais depuis 30 ans d'innovation"
    },
    {
      name: "⚡ Technique 'Ichido-gaeshi'",
      description: "Philosophie 'retourner une seule fois' - Patience et observation des sucs pour préserver les arômes",
      cultural: "Zen culinaire : chaque geste compte, la précision prime sur la rapidité"
    },
    {
      name: "🏮 Hormone Revolution",
      description: "Démocratisation des abats japonais - De 'hōrumon' (放るもん = 'ce qu'on jette') à délicatesse recherchée",
      cultural: "Philosophie 'Mottainai' (もったいない) : transformer chaque partie en expérience gustative"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="gyukaku" chainCategory="yakiniku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat/yakiniku" className="text-gray-500 hover:text-red-600">Yakiniku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-red-600 font-medium">Gyukaku</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🥩</span>
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl">🍖</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gyukaku
          </h1>
          <p className="text-2xl mb-4 text-red-100 japanese-text">牛角</p>
          <p className="text-xl mb-8 text-red-100">
            Yakiniku Premium - L'Excellence du Barbecue Japonais
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">La Référence Yakiniku</h2>
            <p className="text-lg text-red-200">
              Depuis 1996, Gyukaku révolutionne l'expérience yakiniku en proposant 
              des viandes premium dans un cadre moderne et accessible, démocratisant 
              le plaisir du barbecue japonais de qualité.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Viandes Premium
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Ambiance Moderne
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Expérience Conviviale
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Leader National
            </span>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#menu" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Menu & Prix</a>
            <a href="#commander" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Comment Commander</a>
            <a href="#specialites" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Spécialités</a>
            <a href="#culture" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Culture & Histoire</a>
            <a href="#conseils" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Conseils Pratiques</a>
          </div>
        </div>
      </section>

      {/* Section Menu */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🍖 Menu & Prix Gyukaku
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start pb-2 border-b border-red-100 last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-red-600 font-bold text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Comment Commander */}
      <section id="commander" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📋 Comment Commander chez Gyukaku
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {orderingSteps.map((step, index) => (
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
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Conseils pour Débutants</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>Commencez par le Course Premium</strong> pour découvrir les spécialités</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>Demandez l'aide du staff</strong> pour la cuisson optimale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>Équilibrez avec des légumes</strong> et accompagnements frais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>Prenez votre temps</strong> - l'expérience yakiniku est social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spécialités */}
      <section id="specialites" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ⭐ Spécialités Gyukaku
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.name}</h3>
                <p className="text-gray-700 mb-4">{specialty.description}</p>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>🏮 Contexte culturel :</strong> {specialty.cultural}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Culture & Histoire */}
      <section id="culture" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🏮 Histoire & Culture Gyukaku
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Histoire</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-red-600">1996 :</strong> Fondation de Gyukaku à Tokyo par Reins International
                </div>
                <div>
                  <strong className="text-red-600">2000s :</strong> Expansion rapide dans tout le Japon, standardisation qualité
                </div>
                <div>
                  <strong className="text-red-600">2010s :</strong> Innovation avec formules à volonté et menus adaptés aux familles
                </div>
                <div>
                  <strong className="text-red-600">Aujourd'hui :</strong> Plus de 600 restaurants, leader du yakiniku accessible
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Innovation Gyukaku</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-red-600">• Démocratisation :</strong> Yakiniku premium accessible à tous
                </li>
                <li>
                  <strong className="text-red-600">• Standardisation :</strong> Qualité constante dans tous les restaurants
                </li>
                <li>
                  <strong className="text-red-600">• Modernité :</strong> Décor contemporain et service efficace
                </li>
                <li>
                  <strong className="text-red-600">• Flexibilité :</strong> Formules variées pour tous les budgets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conseils Pratiques */}
      <section id="conseils" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            💡 Conseils Pratiques
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🕐 Timing Optimal</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Déjeuner :</strong> 11h30-14h, menus économiques</li>
                <li>• <strong>Dîner :</strong> 17h30-22h, expérience complète</li>
                <li>• <strong>Weekend :</strong> Réservation recommandée</li>
                <li>• <strong>Durée :</strong> Prévoir 90-120 minutes</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💳 Budget & Paiement</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>À la carte :</strong> ¥2,000-4,000/personne</li>
                <li>• <strong>À volonté :</strong> ¥2,980-3,980/personne</li>
                <li>• <strong>Paiement :</strong> Espèces et cartes acceptées</li>
                <li>• <strong>Boissons :</strong> Budget supplémentaire ¥500-1,500</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Étiquette Yakiniku</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Partage :</strong> Cuire pour les autres est courtois</li>
                <li>• <strong>Patience :</strong> Laisser chauffer le grill 5 minutes</li>
                <li>• <strong>Hygiène :</strong> Pinces séparées crues/cuites</li>
                <li>• <strong>Convivialité :</strong> Profiter de l'expérience sociale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation vers autres chaînes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Découvrir d'autres expériences
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/type-plat/yakiniku" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              ← Retour aux Yakiniku
            </Link>
            <Link href="/type-plat/izakaya" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Découvrir les Izakaya
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
