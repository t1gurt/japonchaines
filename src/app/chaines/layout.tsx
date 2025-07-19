import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "46 Chaînes Japonaises | Guide 2025 | Japonchaines",
  description: "Explorez 46 chaînes classées par type. Avis, menus, prix pour choisir où manger au Japon.",
  keywords: "chaînes restaurant japonais, liste restaurant Japon, guide chaînes japonaises, manger Japon",
  openGraph: {
    title: "46 Chaînes Japonaises | Guide 2025 | Japonchaines",
    description: "Explorez 46 chaînes classées par type. Avis, menus, prix pour choisir où manger au Japon.",
    type: "website",
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: "/chaines"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ChainesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
