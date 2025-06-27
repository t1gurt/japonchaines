import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Anan (安安) - Guide Complet | Seven Yakiniku Abordable',
  description: 'Découvrez Anan (七輪焼肉 安安), la chaîne de yakiniku abordable proposant des grillades savoureuses au charbon de bois dans une ambiance décontractée.',
  keywords: 'Anan, 安安, 七輪焼肉, yakiniku abordable, barbecue japonais, charbon de bois, shichirin, restaurant japonais',
  openGraph: {
    title: 'Anan - Yakiniku Abordable au Charbon de Bois',
    description: 'Guide complet d\'Anan : yakiniku traditionnel au charbon, prix accessibles et ambiance conviviale pour tous les budgets.',
    type: 'article'
  }
};

export default function AnanPage() {
  const menuItems = [
    {
      category: "Viandes Populaires",
      items: [
        { name: "Kalbi Standard", price: "¥480", description: "Côtes de bœuf marinées, le classique abordable" },
        { name: "Harami", price: "¥580", description: "Onglet de bœuf tendre et savoureux" },
        { name: "Butabara", price: "¥380", description: "Poitrine de porc grillée au charbon" },
        { name: "Tori Momo", price: "¥350", description: "Cuisse de poulet juteuse" }
      ]
    },
    {
      category: "Formules à Volonté",
      items: [
        { name: "Tabehōdai Standard", price: "¥1,980", description: "Buffet viandes + légumes 90 minutes" },
        { name: "Tabehōdai Premium", price: "¥2,980", description: "Sélection élargie + boissons incluses" },
        { name: "Lunch Buffet", price: "¥1,480", description: "Formule déjeuner économique" },
        { name: "Kids Set", price: "¥980", description: "Menu enfant avec dessert" }
      ]
    },
    {
      category: "Légumes & Accompagnements",
      items: [
        { name: "Yasai Moriawase", price: "¥480", description: "Assortiment de légumes de saison" },
        { name: "Kimchi", price: "¥380", description: "Chou fermenté traditionnel maison" },
        { name: "Namul Set", price: "¥450", description: "Trio de légumes marinés coréens" },
        { name: "Wakame Soup", price: "¥280", description: "Soupe d'algues réconfortante" }
      ]
    },
    {
      category: "Boissons",
      items: [
        { name: "Beer Jockey", price: "¥480", description: "Bière pression grande taille" },
        { name: "Nomihodai", price: "¥1,480", description: "Boissons à volonté 120 minutes" },
        { name: "Soft Drinks", price: "¥280", description: "Sodas, thé glacé, café" },
        { name: "Makgeolli", price: "¥580", description: "Alcool de riz coréen traditionnel" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: "1. Installation",
      description: "Table avec grille au charbon de bois (shichirin) intégrée",
      tip: "Le charbon met quelques minutes à chauffer - patience récompensée !"
    },
    {
      step: "2. Commande",
      description: "Menu papier simple avec photos et prix clairs",
      tip: "Commencer par la formule à volonté si vous avez faim"
    },
    {
      step: "3. Grillade",
      description: "Cuisson au charbon de bois pour un goût authentique",
      tip: "Viandes fines : 1-2 minutes, plus épaisses : 3-4 minutes par face"
    },
    {
      step: "4. Service",
      description: "Atmosphere décontractée, service efficace et amical",
      tip: "N'hésitez pas à demander du charbon supplémentaire"
    }
  ];

  const specialties = [
    {
      name: "🔥 Shichirin Authentique",
      description: "Cuisson au charbon de bois traditionnel pour un goût fumé incomparable et une expérience authentique",
      cultural: "Le shichirin (七輪) est le grill traditionnel japonais qui donne son caractère unique au yakiniku"
    },
    {
      name: "💰 Prix Accessibles",
      description: "Philosophie 'Yasukute Umai' (安くて旨い) - bon marché et délicieux pour démocratiser le yakiniku",
      cultural: "Anan brise les codes du yakiniku premium pour le rendre accessible à tous les japonais"
    },
    {
      name: "🍖 Sélection Globale",
      description: "Viandes sélectionnées mondialement pour offrir qualité et fraîcheur à prix réduits",
      cultural: "Approche moderne du sourcing international appliquée à la tradition yakiniku"
    },
    {
      name: "🏮 Ambiance Populaire",
      description: "Atmosphere détendue et conviviale où familles et amis partagent des moments chaleureux",
      cultural: "Incarnation du yakiniku de quartier, accessible et sans prétention"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="anan" chainCategory="yakiniku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat/yakiniku" className="text-gray-500 hover:text-red-600">Yakiniku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-red-600 font-medium">Anan</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-800 via-red-700 to-yellow-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl mr-4">🍖</span>
            <span className="text-6xl">🏮</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Anan
          </h1>
          <p className="text-2xl mb-4 text-orange-100 japanese-text">七輪焼肉 安安</p>
          <p className="text-xl mb-8 text-orange-100">
            Yakiniku Abordable - Le Charbon de Bois Authentique
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">安くて旨い - Bon Marché et Délicieux</h2>
            <p className="text-lg text-orange-200">
              Depuis sa création, Anan révolutionne le yakiniku en offrant la véritable 
              expérience du grill au charbon de bois à des prix accessibles, rendant 
              cette tradition culinaire disponible pour tous les budgets.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Prix Accessibles
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Charbon Authentique
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Ambiance Populaire
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Formules à Volonté
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
            🍖 Menu & Prix Anan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start pb-2 border-b border-orange-100 last:border-b-0">
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
            📋 Comment Commander chez Anan
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
                  <span><strong>Optez pour le buffet</strong> si c'est votre première fois</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>Le charbon met du temps</strong> - commandez des légumes d'abord</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>Grillez par petites quantités</strong> pour éviter de trop cuire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span><strong>L'ambiance est décontractée</strong> - détendez-vous !</span>
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
            ⭐ Spécialités Anan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
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
            🏮 Histoire & Culture Anan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Histoire</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-red-600">Fondation :</strong> Création par la société Fuji Tatsu avec la vision yakiniku accessible
                </div>
                <div>
                  <strong className="text-red-600">Concept :</strong> "安くて旨い" (Yasukute Umai) - bon marché et délicieux
                </div>
                <div>
                  <strong className="text-red-600">Expansion :</strong> Développement national avec focus sur l'accessibilité
                </div>
                <div>
                  <strong className="text-red-600">Innovation :</strong> Démocratisation du yakiniku traditionnel au charbon
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Philosophie Anan</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-red-600">• Accessibilité :</strong> Yakiniku de qualité pour tous les budgets
                </li>
                <li>
                  <strong className="text-red-600">• Authenticité :</strong> Cuisson traditionnelle au charbon de bois
                </li>
                <li>
                  <strong className="text-red-600">• Convivialité :</strong> Ambiance décontractée et familiale
                </li>
                <li>
                  <strong className="text-red-600">• Qualité :</strong> Sourcing international pour le meilleur rapport qualité-prix
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
                <li>• <strong>Déjeuner :</strong> 11h30-14h, formules économiques</li>
                <li>• <strong>Dîner :</strong> 17h30-22h, ambiance conviviale</li>
                <li>• <strong>Weekend :</strong> Affluence modérée, plus détendu</li>
                <li>• <strong>Durée :</strong> Prévoir 60-90 minutes minimum</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💳 Budget & Paiement</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>À la carte :</strong> ¥1,500-2,500/personne</li>
                <li>• <strong>Buffet :</strong> ¥1,980-2,980/personne</li>
                <li>• <strong>Paiement :</strong> Espèces principalement</li>
                <li>• <strong>Boissons :</strong> Budget supplémentaire ¥500-1,500</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Étiquette Yakiniku</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Charbon :</strong> Attendre qu'il soit bien rouge</li>
                <li>• <strong>Partage :</strong> Griller pour les autres est poli</li>
                <li>• <strong>Pinces :</strong> Séparer cru et cuit</li>
                <li>• <strong>Ambiance :</strong> Plus décontracté que les yakiniku haut de gamme</li>
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
            <Link href="/chaines/gyukaku" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Découvrir Gyukaku
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
