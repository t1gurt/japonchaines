import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import StructuredData from "@/components/StructuredData";
import { generateWebsiteSchema } from "@/lib/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guide des Chaînes de Restaurants Japonais | Chain Japanese Restaurants",
  description: "Guide complet en français des chaînes de restaurants japonais - Menus, méthodes de commande et conseils pratiques pour les voyageurs francophones au Japon.",
  keywords: ["restaurants japonais", "chaînes", "japon", "guide français", "yoshinoya", "sukiya", "matsuya", "ramen", "sushi"],
  authors: [{ name: "Chain Japanese Restaurants" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Guide des Chaînes de Restaurants Japonais",
    description: "Votre guide français complet pour naviguer dans les chaînes de restaurants japonais",
    type: "website",
    locale: "fr_FR",
    url: '/',
    siteName: 'Chain Japanese Restaurants',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guide des Chaînes de Restaurants Japonais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide des Chaînes de Restaurants Japonais',
    description: 'Votre guide français complet pour naviguer dans les chaînes de restaurants japonais',
    images: ['/og-image.jpg'],
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
  verification: {
    // Google Search Console verification tag (実際の値に置き換えてください)
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebsiteSchema();
  
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <GoogleAnalytics />
        <StructuredData data={websiteSchema} />
        <AnalyticsProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
