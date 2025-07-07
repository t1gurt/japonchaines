import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export default function GyukakuPage() {
  const menuItems = [
    {
      category: "Kalbi Premium",
      items: [
        { name: "Kalbi Spécial", price: "¥1,580", description: "Côtes de bœuf marinées signature" },
        { name: "Kalbi Premium", price: "¥1,980", description: "Qualité supérieure, coupe traditionnelle" },
        { name: "Kalbi Harami Set", price: "¥2,380", description: "Combinaison kalbi et harami" }
      ]
    },
    {
      category: "Harami Selection",
      items: [
        { name: "Harami Classique", price: "¥1,280", description: "Onglet de bœuf tendre et savoureux" },
        { name: "Harami Premium", price: "¥1,680", description: "Qualité premium, texture fondante" },
        { name: "Harami Sauce Spéciale", price: "¥1,480", description: "Mariné dans la sauce maison" }
      ]
    },
    {
      category: "Formules & Courses",
      items: [
        { name: "Course Premium", price: "¥3,980", description: "Sélection de viandes premium + accompagnements" },
        { name: "All-you-can-eat", price: "¥2,980", description: "Buffet à volonté 120 minutes" },
        { name: "Family Set", price: "¥5,980", description: "Pour 3-4 personnes, viandes variées" }
      ]
    },
    {
      category: "Accompagnements",
      items: [
        { name: "Kimchi Maison", price: "¥480", description: "Chou fermenté traditionnel" },
        { name: "Salade Cesar", price: "¥680", description: "Fraîcheur pour équilibrer" },
        { name: "Riz Coréen", price: "¥380", description: "Riz parfumé, accompagnement idéal" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: "1. Installation",
      description: "Prise de place à une table avec grill intégré",
      tip: "Demander une explication du système de grill si nécessaire"
    },
    {
      step: "2. Commande",
      description: "Sélection via menu papier avec photos détaillées",
      tip: "Commencer par une sélection variée pour découvrir vos préférences"
    },
    {
      step: "3. Cuisson",
      description: "Grill personnel, cuisson maîtrisée par le client",
      tip: "Viandes fines : 30-60 secondes par face, plus épaisses : 2-3 minutes"
    },
    {
      step: "4. Service",
      description: "Staff attentif pour renouveler grill et accompagnements",
      tip: "N'hésitez pas à demander de l'aide pour la cuisson optimale"
    }
  ];

  const specialties = [
    {
      name: "🥩 Kalbi Premium",
      description: "Côtes de bœuf marinées dans une sauce secrète alliant soja, mirin et épices coréennes",
      cultural: "Le kalbi (갈비) est l'âme du yakiniku, hérité de la tradition culinaire coréenne"
    },
    {
      name: "🍖 Harami Selection",
      description: "Onglet de bœuf réputé pour sa tendreté et son goût intense, coupe favorite des connaisseurs",
      cultural: "Le harami est considéré comme la 'perle cachée' du bœuf japonais"
    },
    {
      name: "🔥 Expérience Grill",
      description: "Tables équipées de grills haute performance pour une cuisson parfaite maîtrisée par le client",
      cultural: "Philosophie du 'jibun de yaku' (griller soi-même) pour une expérience personnalisée"
    },
    {
      name: "🏮 Ambiance Moderne",
      description: "Décor contemporain alliant tradition yakiniku et confort moderne japonais",
      cultural: "Evolution du yakiniku traditionnel vers une expérience premium accessible"
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
