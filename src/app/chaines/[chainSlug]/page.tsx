import { notFound } from 'next/navigation';
import { restaurantChains } from '@/data/site-data';
import Image from 'next/image';
import { StructuredData } from '@/components/StructuredData';
import { generateRestaurantJsonLd } from '@/lib/structured-data';
import { Breadcrumb } from '@/components/Breadcrumb';
import { AdSenseUnit } from '@/components/AdSenseUnit';
import { ChainViewTracker } from '@/components/ChainViewTracker';
import ChainVisitButton from '@/components/ChainVisitButton';
import { Metadata } from 'next';

// Define the type for chainInfo
interface ChainInfo {
  slug: string;
  name: string;
  nameJp: string;
  category: string;
  description: string;
  specialties: string[];
  founded?: string;
  image?: string; // Add image property
  priceRange?: string;
  idealFor?: string;
  ambiance?: string;
  menuHighlights?: string;
  opinion?: string;
}

// Définir les props pour la page
interface ChainPageProps {
  params: Promise<{
    chainSlug: string;
  }>;
}

// Générer les métadonnées dynamiques
export async function generateMetadata({ params }: ChainPageProps): Promise<Metadata> {
  const { chainSlug } = await params;
  const chain = restaurantChains.find(c => c.slug === chainSlug);

  if (!chain) {
    return {
      title: 'Chaîne non trouvée',
      description: 'Cette chaîne de restaurants n\'a pas été trouvée.',
    };
  }

  const title = `${chain.name} (${chain.nameJp}) | ${chain.category} | Guide Restaurants Japonais`;
  const description = `${chain.description} Menu complet, prix, conseils de commande et guide pratique pour ${chain.name}.`;

  return {
    title,
    description,
    keywords: [
      chain.name.toLowerCase(),
      chain.nameJp,
      chain.category.toLowerCase(),
      ...chain.specialties.map(s => s.toLowerCase()),
      'restaurant japonais',
      'chaîne restaurant japon',
      'guide voyage japon',
      'comment commander au japon'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/chaines/${chainSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/chaines/${chainSlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Générer les chemins statiques pour toutes les chaînes
export async function generateStaticParams() {
  return restaurantChains.map(chain => ({
    chainSlug: chain.slug,
  }));
}

// Le composant de la page de la chaîne
const ChainPage = async ({ params }: ChainPageProps) => {
  const { chainSlug } = await params;
  const chain = restaurantChains.find(c => c.slug === chainSlug) as ChainInfo | undefined;

  if (!chain) {
    notFound();
  }

  // Mock data for missing fields for now
  chain.image = chain.image ?? `/images/chains/${chain.slug}.jpg`;
  chain.priceRange = chain.priceRange ?? '¥1000 - ¥2000';
  chain.idealFor = chain.idealFor ?? 'Repas rapide, Dîner décontracté';
  chain.ambiance = chain.ambiance ?? 'Ambiance décontractée et conviviale.';
  chain.menuHighlights = chain.menuHighlights ?? 'Le menu propose une variété de plats centrés sur la spécialité de la maison.';
  chain.opinion = chain.opinion ?? 'Un excellent choix pour un repas savoureux et abordable.';

  const jsonLd = generateRestaurantJsonLd(chain);

  const breadcrumbItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Chaînes', href: '/chaines' },
    { name: chain.name, href: `/chaines/${chain.slug}` },
  ];

  return (
    <>
      <ChainViewTracker chainName={chain.slug} chainCategory={chain.category} />
      <StructuredData data={jsonLd} />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <header className="relative">
            <div className="h-64 w-full bg-gray-200">
              {chain.image && (
                <Image
                  src={chain.image}
                  alt={`Image de ${chain.name}`}
                  fill
                  className="object-cover w-full h-full"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    {chain.name}
                  </h1>
                  <p className="text-xl md:text-2xl font-semibold mt-2">
                    {chain.nameJp}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 md:p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                À propos de {chain.name}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {chain.description}
              </p>
              <div className="mt-6">
                <ChainVisitButton chainId={chain.slug} chainName={chain.name} />
              </div>
            </section>

            <AdSenseUnit slot="7890123456" />

            <section className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Informations Clés
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-6 h-6 mr-3 text-center">🍽️</span>
                    <span>
                      <strong>Type :</strong> {chain.category}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 mr-3 text-center">💰</span>
                    <span>
                      <strong>Prix :</strong> {chain.priceRange}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 mr-3 text-center">👍</span>
                    <span>
                      <strong>Idéal pour :</strong> {chain.idealFor}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Ambiance
                </h3>
                <p className="text-gray-700">
                  {chain.ambiance}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Menu et Spécialités
              </h3>
              <p className="text-gray-700">
                {chain.menuHighlights}
              </p>
            </section>

            <AdSenseUnit slot="8901234567" />

            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Notre Avis
              </h3>
              <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-700">
                <p>{chain.opinion}</p>
              </blockquote>
            </section>
          </div>
        </article>
      </div>
    </>
  );
};

export default ChainPage;