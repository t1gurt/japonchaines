import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Flame, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yakiniku : Découvrez la Culture Japonaise du Gril | Guide Japonchaines',
  description: 'Explorez l\'univers du yakiniku japonais, une expérience gastronomique interactive et conviviale. Découvrez les meilleurs restaurants et les secrets de cette tradition.',
  keywords: [
    'yakiniku', 'grill japonais', 'culture culinaire', 'convivialité', 'tradition japonaise',
    'viande grillée', 'restaurants yakiniku', 'expérience interactive'
  ],
  openGraph: {
    title: 'Yakiniku : Découvrez la Culture Japonaise du Gril',
    description: 'Explorez l\'univers du yakiniku japonais, une expérience gastronomique interactive et conviviale.',
    type: 'article',
    url: '/type-plat/yakiniku',
  },
  alternates: {
    canonical: '/type-plat/yakiniku',
  },
};

export default function YakinikuPage() {
  const yakinikuChains = [
    {
      name: "Gyukaku",
      japanese: "牛角",
      englishName: "Gyukaku",
      description: "Chaîne de yakiniku haut de gamme proposant des viandes de qualité premium dans une ambiance moderne et conviviale.",
      specialties: ["Kalbi Premium", "Harami Selection", "Gyukaku Special Course", "All-you-can-eat"],
      priceRange: "¥2000-4000",
      style: "Yakiniku moderne haut de gamme",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Légumes grillés, salade, accompagnements",
      uniqueFeatures: ["Viandes premium", "Formules à volonté", "Ambiance moderne"],
      cuisine: "Yakiniku/BBQ Japonais",
      href: "/chaines/gyukaku"
    },
    {
      name: "Anan",
      japanese: "安安",
      englishName: "Anan",
      description: "Yakiniku abordable au charbon de bois authentique avec le concept '安くて旨い' (bon marché et délicieux).",
      specialties: ["Shichirin au charbon", "Kalbi abordable", "Formules à volonté", "Ambiance populaire"],
      priceRange: "¥1500-2500",
      style: "Yakiniku traditionnel accessible",
      orderingMethod: "Menu papier simple + grill au charbon",
      vegetarianOptions: "Légumes de saison, kimchi, accompagnements coréens",
      uniqueFeatures: ["Prix accessibles", "Charbon de bois traditionnel", "Ambiance décontractée"],
      cuisine: "Yakiniku/BBQ Japonais",
      href: "/chaines/anan"
    }
  ];

  const menuCategories = [
    {
      name: "Kalbi (갈비)",
      description: "Côtes de bœuf marinées",
      items: ["Kalbi Premium", "Kalbi Harami", "Kalbi Spécial"]
    },
    {
      name: "Harami (ハラミ)",
      description: "Onglet de bœuf tendre",
      items: ["Harami Selection", "Harami Premium", "Harami Sauce"]
    },
    {
      name: "Formules",
      description: "Menu complets et à volonté",
      items: ["Course Premium", "All-you-can-eat", "Family Set"]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Types de Plat
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Yakiniku : Découvrez la Culture Japonaise du Gril
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-1" />
                    Tradition et Convivialité
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Expérience Interactive
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Gastronomie Japonaise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bienvenue dans l'univers du Yakiniku</h2>
              <p className="text-gray-700 leading-relaxed">
                Le yakiniku japonais est bien plus qu'un simple repas. C'est une expérience où les convives
                grillent eux-mêmes des morceaux de viande de haute qualité, tout en partageant un moment
                convivial autour d'une table. Découvrez les secrets de cette tradition unique qui allie
                gastronomie et interaction sociale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Les Meilleurs Restaurants de Yakiniku</h2>
              <p className="text-gray-700 leading-relaxed">
                Explorez les chaînes de yakiniku les plus populaires au Japon, comme Gyukaku et Anan, qui
                offrent une variété de viandes et de sauces pour une expérience inoubliable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi le Yakiniku est Unique</h2>
              <p className="text-gray-700 leading-relaxed">
                Le yakiniku se distingue par sa philosophie de partage et de convivialité. Chaque morceau
                de viande est soigneusement grillé pour révéler son potentiel maximal, créant une harmonie
                parfaite entre saveurs et textures.
              </p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
