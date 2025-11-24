'use client';

import PageHero from '@/components/PageHero';
import ResourceGrid from '@/components/ResourceGrid';
import ResourceCard from '@/components/ResourceCard';
import ContentSection from '@/components/ContentSection';
import { guides } from '@/data/guides';

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Guides Pratiques"
        description="Maîtrisez l'art de manger dans les chaînes japonaises avec nos guides experts. De l'étiquette à la commande, nous vous accompagnons à chaque étape."
        backgroundImage="/images/hero-guides.jpg"
      />

      <ContentSection title="Votre Passeport Culinaire" subtitle="Au-delà de la simple liste de restaurants, nous vous offrons les clés pour vivre une expérience authentique.">
        <ResourceGrid columns={2}>
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <ResourceCard
                key={guide.id}
                title={guide.title}
                subtitle={guide.subtitle}
                description={guide.description}
                href={guide.available ? `/guides/${guide.id}` : '#'}
                icon={<Icon className="w-6 h-6" />}
                color={guide.color}
                badges={!guide.available ? [<span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Bientôt disponible</span>] : []}
                tags={guide.highlights.slice(0, 2)}
              />
            );
          })}
        </ResourceGrid>
      </ContentSection>
    </div>
  );
}
