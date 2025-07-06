import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comprendre la Culture Japonaise - Guide Complet pour Francophones | Chain Japanese Restaurants',
  description: 'Guide exhaustif pour décoder les comportements et l\'esprit japonais. Analyse approfondie de la mentalité japonaise au-delà des stéréotypes : honne/tatemae, uchi/soto, concepts de modestie et communication indirecte pour francophones.',
  keywords: [
    'culture japonaise',
    'mentalité japonaise',
    'honne tatemae', 
    'uchi soto',
    'communication japonaise',
    'étiquette Japon',
    'psychologie japonaise',
    'comportement japonais',
    'guide culturel Japon',
    'comprendre les Japonais',
    'société japonaise',
    'codes sociaux Japon',
    'anthropologie japonaise',
    'interculturel Japon France',
    'voyage Japon culture'
  ],
  openGraph: {
    title: 'Comprendre la Culture Japonaise - Guide Complet',
    description: 'Décryptez les codes culturels japonais : de l\'harmonie (wa) aux concepts de honne/tatemae. Guide approfondi pour une communication efficace au Japon.',
    type: 'article',
    locale: 'fr_FR',
    images: [
      {
        url: '/images/culture-japonaise-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide de compréhension de la culture japonaise pour francophones'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprendre la Culture Japonaise - Guide Complet',
    description: 'Au-delà des stéréotypes : guide approfondi de la mentalité japonaise pour francophones. Honne/tatemae, uchi/soto et codes sociaux décryptés.',
  },
  alternates: {
    canonical: '/guides/comprendre-culture-japonaise'
  },
  robots: {
    index: true,
    follow: true
  }
};
