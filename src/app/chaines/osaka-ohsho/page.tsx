import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Osaka Ohsho (大阪王将) - Guide Complet | Restaurant Chinois Japonais',
  description: 'Découvrez Osaka Ohsho, la célèbre chaîne de cuisine chinoise d\'Osaka. Gyoza croustillants, yakimeshi signature et plats généreux dans une ambiance décontractée.',
  keywords: 'Osaka Ohsho, 大阪王将, restaurant chinois japonais, gyoza, yakimeshi, cuisine chinoise Osaka',
  openGraph: {
    title: 'Osaka Ohsho - Restaurant Chinois Style Osaka',
    description: 'Guide complet d\'Osaka Ohsho : spécialités, prix, conseils de commande et culture du restaurant chinois style Osaka.',
    type: 'article'
  }
};

export default function OsakaOhshoPage() {
  const menuItems = [
    {
      category: "Gyoza & Entrées",
      items: [
        { name: "Gyoza (6 pièces)", japanese: "餃子", price: "¥350", description: "Gyoza croustillants style Osaka, plus épais que la moyenne" },
        { name: "Gyoza (12 pièces)", japanese: "餃子", price: "¥650", description: "Portion famille, parfait pour partager" },
        { name: "Ebi Chili", japanese: "エビチリ", price: "¥680", description: "Crevettes sauce piquante, spécialité populaire" },
        { name: "Harumaki", japanese: "春巻き", price: "¥420", description: "Rouleaux de printemps croustillants" }
      ]
    },
    {
      category: "Riz & Nouilles",
      items: [
        { name: "Yakimeshi", japanese: "焼きめし", price: "¥650", description: "Riz sauté signature d'Osaka Ohsho, léger et parfumé" },
        { name: "Tenshin-han", japanese: "天津飯", price: "¥750", description: "Riz surmonté d'omelette aux crabes, sauce aigre-douce" },
        { name: "Ramen Chinois", japanese: "中華ラーメン", price: "¥580", description: "Ramen style chinois, bouillon clair et savoureux" },
        { name: "Yakisoba", japanese: "焼きそば", price: "¥680", description: "Nouilles sautées aux légumes et viande" }
      ]
    },
    {
      category: "Plats Principaux",
      items: [
        { name: "Subuta", japanese: "酢豚", price: "¥880", description: "Porc aigre-doux avec légumes colorés" },
        { name: "Mapo Tofu", japanese: "麻婆豆腐", price: "¥750", description: "Tofu sauce épicée, moins piquant qu'en Chine" },
        { name: "Karaage", japanese: "唐揚げ", price: "¥650", description: "Poulet frit croustillant, mariné aux épices chinoises" },
        { name: "Hoikoro", japanese: "ホイコーロー", price: "¥820", description: "Porc sauté au chou et miso, plat robuste" }
      ]
    }
  ];

  const tips = [
    {
      title: "Signature Yakimeshi",
      icon: "🍚",
      description: "Le yakimeshi d'Osaka Ohsho est leur plat signature - plus léger que le fried rice classique, avec un goût distinctement japonais."
    },
    {
      title: "Gyoza Style Osaka",
      icon: "🥟", 
      description: "Leurs gyoza sont plus épais et croustillants que la moyenne, reflétant le style culinaire d'Osaka."
    },
    {
      title: "Portions Généreuses",
      icon: "🍽️",
      description: "Connu pour ses portions généreuses à prix abordables, parfait pour les familles et les gros appétits."
    },
    {
      title: "Ambiance Décontractée",
      icon: "😊",
      description: "Atmosphere familiale et décontractée typique d'Osaka, service amical et sans cérémonie."
    }
  ];

  const culturalNotes = [
    {
      title: "Origine Osaka",
      description: "Fondée à Osaka, la chaîne reflète l'esprit culinaire de cette ville : généreux, sans prétention et savoureux."
    },
    {
      title: "Style Kansai",
      description: "Influence de la région Kansai visible dans les saveurs légèrement plus douces et l'approche décontractée du service."
    },
    {
      title: "Adaptation Locale",
      description: "Cuisine chinoise adaptée au goût japonais, particulièrement celui de la région Osaka-Kansai."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Osaka Ohsho" chainCategory="Cuisine Chinoise" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/chaines" className="text-gray-500 hover:text-red-600">Chaînes</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Osaka Ohsho</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🥟</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Osaka Ohsho
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">大阪王将</p>
                  <p className="text-lg text-gray-600">Restaurant Chinois Style Osaka</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                Découvrez l'esprit culinaire d'Osaka avec Osaka Ohsho : gyoza croustillants, 
                yakimeshi signature et cuisine chinoise généreuse dans une ambiance décontractée 
                typiquement kansai.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Gyoza Style Osaka
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Yakimeshi Signature
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Portions Généreuses
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Ambiance Familiale
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Pratiques</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Prix moyen :</span>
                  <span className="text-gray-600">¥500-1300</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style :</span>
                  <span className="text-gray-600">Chinois style Osaka</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Spécialité :</span>
                  <span className="text-gray-600">Gyoza & Yakimeshi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Commande :</span>
                  <span className="text-gray-600">Menu papier</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Ambiance :</span>
                  <span className="text-gray-600">Décontractée familiale</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Végétarien :</span>
                  <span className="text-gray-600">Options limitées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Menu Osaka Ohsho
          </h2>
          
          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-red-600 font-bold text-lg">{item.price}</span>
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

      {/* Tips Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils Osaka Ohsho
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
                <div className="text-3xl mb-4 text-center">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{tip.title}</h3>
                <p className="text-gray-600 text-sm text-center">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Culture & Origine
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {culturalNotes.map((note, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{note.title}</h3>
                <p className="text-gray-600">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander chez Osaka Ohsho
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4 text-center">🥟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">1. Commencez par les Gyoza</h3>
              <p className="text-gray-600 text-sm text-center">
                Les gyoza d'Osaka Ohsho sont épais et croustillants, 
                parfaits pour découvrir leur style unique.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4 text-center">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">2. Essayez le Yakimeshi</h3>
              <p className="text-gray-600 text-sm text-center">
                Leur yakimeshi signature est différent du fried rice classique, 
                plus léger et parfumé.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4 text-center">🍤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">3. Ebi Chili Populaire</h3>
              <p className="text-gray-600 text-sm text-center">
                L'ebi chili (crevettes sauce piquante) est une spécialité 
                très appréciée des habitués.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Commandes Recommandées</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h5 className="font-bold text-gray-900 mb-2">Set Découverte</h5>
                <p className="text-gray-600 text-sm mb-2">Gyoza (6) + Yakimeshi + Boisson</p>
                <p className="text-red-600 font-bold">≈ ¥1200</p>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-gray-900 mb-2">Set Famille</h5>
                <p className="text-gray-600 text-sm mb-2">Gyoza (12) + 2 Plats + Riz</p>
                <p className="text-red-600 font-bold">≈ ¥2500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Autres Chaînes Similaires
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/chaines/gyoza-no-ohsho" className="group bg-red-50 p-6 rounded-xl border border-red-200 hover:border-red-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 mb-3">Gyoza no Ohsho</h3>
              <p className="text-gray-600 text-sm">L'autre grande chaîne de gyoza, style plus traditionnel chinois.</p>
            </Link>
            
            <Link href="/chaines/bamiyan" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">Bamiyan</h3>
              <p className="text-gray-600 text-sm">Cuisine chinoise familiale avec drink bar et ambiance décontractée.</p>
            </Link>
            
            <Link href="/type-plat/cuisine-chinoise" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">Toute la Cuisine Chinoise</h3>
              <p className="text-gray-600 text-sm">Découvrez toutes les chaînes de cuisine chinoise au Japon.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
