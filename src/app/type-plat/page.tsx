'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ResourceGrid from '@/components/ResourceGrid';
import ResourceCard from '@/components/ResourceCard';
import ContentSection from '@/components/ContentSection';
import { foodTypes, implementedFoodTypeIds } from '@/data/food-types';

export default function TypePlatPage() {
  const getImplementationPath = (id: string) => {
    // Check if the page is implemented
    if (implementedFoodTypeIds.includes(id)) {
      return `/type-plat/${id}`;
    }
    return `/type-plat/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Types de Cuisine Japonaise"
        description="Explorez la richesse de la gastronomie japonaise par catégorie. Des ramen réconfortants aux sushis raffinés, découvrez les meilleures chaînes pour chaque spécialité."
      />

      <ContentSection>
        <ResourceGrid columns={3}>
          {foodTypes.map((type) => (
            <ResourceCard
              key={type.id}
              title={type.name}
              subtitle={type.japanese}
              description={type.description}
              href={getImplementationPath(type.id)}
              icon={<span className="text-2xl">{type.icon}</span>}
              tags={type.chains.slice(0, 3)}
              color={type.color.replace('bg-', '').replace('-500', '').replace('-600', '').replace('-700', '').replace('-800', '')}
              badges={implementedFoodTypeIds.includes(type.id) ? [<span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">✅ Page disponible</span>] : []}
            />
          ))}
        </ResourceGrid>
      </ContentSection>

      {/* Help Section */}
      <ContentSection background="gray" title="Vous ne savez pas par où commencer ?" subtitle="Laissez-vous guider par nos articles populaires">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link
            href="/guides/comment-choisir-restaurant-japonais"
            className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">🤔</div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">Comment choisir son restaurant ?</h3>
              <p className="text-sm text-gray-600">Guide pour s'y retrouver dans l'offre pléthorique</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
          </Link>

          <Link
            href="/guides/etiquette-alimentaire"
            className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">🥢</div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">L'étiquette à table</h3>
              <p className="text-sm text-gray-600">Les règles de base pour manger comme un local</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
          </Link>
        </div>
      </ContentSection>
    </div>
  );
}
