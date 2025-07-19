import TutorialDashboard from '@/components/tutorial/TutorialDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tutoriel Interactif de la Culture Culinaire Japonaise | Japonchaines',
  description: 'Apprenez à maîtriser la culture des restaurants japonais avec notre tutoriel interactif. Leçons, quiz et badges à collectionner.',
  keywords: 'tutoriel restaurant japonais, apprentissage culture japonaise, guide interactif, leçons culinaires japon, étiquette restaurant',
  openGraph: {
    title: 'Tutoriel Interactif de la Culture Culinaire Japonaise | Japonchaines',
    description: 'Apprenez à maîtriser la culture des restaurants japonais avec notre tutoriel interactif. Leçons, quiz et badges à collectionner.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Japonchaines - Guide des Restaurants Japonais'
  },
  alternates: {
    canonical: '/tutorial'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function TutorialPage() {
  return <TutorialDashboard />;
}