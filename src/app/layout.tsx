import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guide des Chaînes de Restaurants Japonais | Chain Japanese Restaurants",
  description: "Guide complet en français des chaînes de restaurants japonais - Menus, méthodes de commande et conseils pratiques pour les voyageurs francophones au Japon.",
  keywords: ["restaurants japonais", "chaînes", "japon", "guide français", "yoshinoya", "sukiya", "matsuya", "ramen", "sushi"],
  authors: [{ name: "Chain Japanese Restaurants" }],
  openGraph: {
    title: "Guide des Chaînes de Restaurants Japonais",
    description: "Votre guide français complet pour naviguer dans les chaînes de restaurants japonais",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
