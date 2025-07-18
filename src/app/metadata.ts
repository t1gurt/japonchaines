import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.japonchaines.net'),
  title: {
    default: 'Japonchaines - Guide des chaînes de restaurants japonais',
    template: '%s | Japonchaines'
  },
  description: 'Le guide complet des chaînes de restaurants japonais en français. Découvrez les meilleurs restaurants japonais, leurs spécialités et comment commander.',
  keywords: ['restaurants japonais', 'chaînes japonaises', 'guide restaurant', 'japon', 'cuisine japonaise'],
  authors: [{ name: 'Japonchaines' }],
  creator: 'Japonchaines',
  publisher: 'Japonchaines',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.japonchaines.net',
    title: 'Japonchaines - Guide des chaînes de restaurants japonais',
    description: 'Le guide complet des chaînes de restaurants japonais en français. Découvrez les meilleurs restaurants japonais, leurs spécialités et comment commander.',
    siteName: 'Japonchaines',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japonchaines - Guide des chaînes de restaurants japonais',
    description: 'Le guide complet des chaînes de restaurants japonais en français. Découvrez les meilleurs restaurants japonais, leurs spécialités et comment commander.',
  },
  alternates: {
    canonical: 'https://www.japonchaines.net',
  },
};
