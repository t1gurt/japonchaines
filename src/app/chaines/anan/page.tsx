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
      category: "Sélection Expertisée",
      items: [
        { name: "Kalbi Classique", price: "¥480", description: "Côtes de bœuf - découpe 'bui-wake' respectant chaque muscle, sauce tare 3 générations" },
        { name: "Harami Premium", price: "¥580", description: "Onglet横隔膜 - Champion popularité, équilibre parfait viande rouge/graisse interne" },
        { name: "Tan Salé", price: "¥680", description: "Langue de bœuf - Rituel d'ouverture yakiniku, cuisson 'ichido-gaeshi' recommandée" },
        { name: "Sankaku-bara", price: "¥880", description: "Triangle de poitrine - 'Roi du kalbi', découpe triangulaire 1ère-6ème côte, savoir rare" }
      ]
    },
    {
      category: "Exploration Hormone",
      items: [
        { name: "Marucho Mix", price: "¥580", description: "Assortiment abats - De 'hōrumon' (放るもん = jeté) à délicatesse, philosophie Mottainai" },
        { name: "Shimacho", price: "¥480", description: "Gros intestin - Texture unique, cuisson maîtrisée pour révéler les sucs naturels" },
        { name: "Mino", price: "¥380", description: "Estomac premier - Texture ferme, introduction parfaite au monde des abats" },
        { name: "Hatsu", price: "¥420", description: "Cœur de bœuf - Muscle pur, goût authentique sans artifice" }
      ]
    },
    {
      category: "Formules Découverte",
      items: [
        { name: "Tabehōdai Initiation", price: "¥1,980", description: "12 parties bovines + légumes + découverte hormone - 90 minutes d'exploration" },
        { name: "Tabehōdai Connaisseur", price: "¥2,980", description: "25 parties incluant coupes rares + boissons + guide dégustation intégré" },
        { name: "Lunch Tradition", price: "¥1,480", description: "Menu découverte midi - 6 coupes essentielles + initiation aux sauces tare" },
        { name: "Parcours Famille", price: "¥980", description: "Enfants 12 ans - Introduction ludique yakiniku + dessert japonais" }
      ]
    },
    {
      category: "Accompagnements Expertise",
      items: [
        { name: "Yasai Saison", price: "¥480", description: "Légumes saisonniers - Équilibre gustatif, nettoyage palais entre morceaux" },
        { name: "Kimchi Artisanal", price: "¥380", description: "Chou fermenté maison - Probiotiques, aide digestion graisses, tradition millénaire" },
        { name: "Namul Trio", price: "¥450", description: "Légumes marinés coréens - Épinards, pousses soja, radis, préparation traditionnelle" },
        { name: "Kombu Dashi", price: "¥280", description: "Bouillon algues - Nettoyage palais, umami naturel, fin de repas traditionnelle" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: "1. Rituel d'Installation",
      description: "Table avec shichirin (七輪) authentique - charbon binchotan traditionnel",
      tip: "Respecter les 5-8 minutes de chauffe - le charbon parfait révèle ses braises orangées"
    },
    {
      step: "2. Stratégie de Commande",
      description: "Menu éducatif avec anatomie bovine - débuter par progression 'tan → harami → kalbi'",
      tip: "Ordre expert : parties délicates d'abord, graisses riches en fin pour protéger les papilles"
    },
    {
      step: "3. Maîtrise de Cuisson",
      description: "Technique 'ichido-gaeshi' - retourner une seule fois, observer les sucs qui remontent",
      tip: "Viandes rouges : ¥80% surface, Hormone : saisir peau d'abord, intérieur juste tiède"
    },
    {
      step: "4. Étiquette Yakiniku",
      description: "Service communautaire - griller pour autrui, pinces séparées cru/cuit",
      tip: "Anan cultive l'esprit populaire : détente assumée, apprentissage par l'expérience"
    }
  ];

  const specialties = [
    {
      name: "🔥 Héritage Shichirin Populaire",
      description: "Cuisson charbon binchotan - Démocratisation de l'art traditionnel 七輪, flamme infrarouge sublimant les fibres",
      cultural: "Anan préserve l'âme yakiniku : le shichirin démocratisé sans compromise sur l'authenticité technique"
    },
    {
      name: "🥩 École de Découpe Accessible",
      description: "Application 'bui-wake' (部位分け) 50+ parties d'une carcasse - Anatomie bovine enseignée par l'assiette",
      cultural: "Révolution Anan : rendre l'expertise des maîtres bouchers accessible au grand public japonais"
    },
    {
      name: "� Trilogie Tare Héritée",
      description: "Sauces signature 3 écoles : Soja (viandes riches), Miso (abats complexes), Sel (parties délicates)",
      cultural: "30 ans d'adaptation coréenne au palais japonais - alchimie des saveurs transmise par générations"
    },
    {
      name: "♻️ Philosophie Mottainai Appliquée",
      description: "De 'hōrumon' (放るもん = jeté) à délicatesse - Transformation complète de chaque partie bovine",
      cultural: "Esprit anti-gaspillage japonais : chaque muscle, chaque abat devient expérience gustative recherchée"
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
