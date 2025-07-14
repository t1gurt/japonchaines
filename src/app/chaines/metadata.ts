import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Toutes les Chaînes de Restaurants Japonais | Guide Complet',
    description: 'Découvrez toutes les chaînes de restaurants japonais avec notre guide complet. 45 chaînes référencées avec menus, prix et conseils de commande pour voyageurs francophones.',
    keywords: [
      'chaînes restaurants japonais',
      'yoshinoya', 'sukiya', 'matsuya', 
      'sushiro', 'kura sushi', 'hama sushi',
      'ichiran', 'ippudo', 'tenkaippin',
      'coco ichibanya', 'go go curry',
      'ootoya', 'tenya', 'gyukaku',
      'isomaru suisan', 'izakaya', 'fruits de mer',
      'guide restaurants japon',
      'comment manger au japon',
      'restaurants pas chers japon'
    ],
    openGraph: {
      title: 'Toutes les Chaînes de Restaurants Japonais',
      description: 'Guide complet de 45 chaînes de restaurants japonais avec menus et conseils pratiques',
      type: 'website',
      url: '/chaines',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Toutes les Chaînes de Restaurants Japonais',
      description: 'Guide complet de 45 chaînes de restaurants japonais',
    },
    alternates: {
      canonical: '/chaines',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
