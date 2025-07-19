import Link from 'next/link';
import { ArrowLeft, Book, Utensils, Heart, Globe, ChefHat, HelpCircle, Brain, Wine } from 'lucide-react';
import GuideViewTracker from '../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Guides Pratiques | Manger Japon | Japonchaines",
  description: "Maîtrisez l'art de manger au Japon : commander, étiquette, régimes, culture culinaire.",
  keywords: "guide voyage Japon, restaurant japonais, comment commander, étiquette Japon, régimes alimentaires",
  openGraph: {
    title: "Guides Pratiques | Manger Japon | Japonchaines",
    description: "Maîtrisez l'art de manger au Japon : commander, étiquette, régimes, culture culinaire.",
    type: "website",
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: "/guides"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function GuidesPage() {  const guides = [
    {
      id: 'comprendre-culture-japonaise',
      title: 'Comprendre la Culture Japonaise',
      subtitle: 'Guide complet de la mentalité japonaise',
      description: 'Analyse approfondie de l\'esprit japonais au-delà des stéréotypes. Décryptez les concepts de honne/tatemae, uchi/soto et la communication indirecte pour une compréhension authentique.',
      icon: Brain,
      color: 'purple',
      available: true,
      highlights: [
        'Fondements historiques et géographiques',
        'Concepts clés : honne/tatemae, uchi/soto',
        'Psychologie sociale japonaise',
        'Communication interculturelle efficace'
      ]
    },
    {
      id: 'comment-choisir-restaurant-japonais',
      title: 'Comment Choisir un Restaurant Japonais',
      subtitle: 'Guide de sélection selon votre situation',
      description: 'Conseils pratiques pour choisir le restaurant japonais idéal selon votre budget, groupe et préférences alimentaires.',
      icon: HelpCircle,
      color: 'orange',
      available: true,
      highlights: [
        'Facteurs de décision clés',
        'Types de restaurants par difficulté',
        'Conseils budget et recommandations',
        'Éviter les pièges touristiques'
      ]
    },
    {
      id: 'comment-commander',
      title: 'Comment Commander',
      subtitle: 'Maîtrisez tous les systèmes de commande japonais',
      description: 'Guide complet des distributeurs automatiques, écrans tactiles, QR codes et phrases utiles pour commander sans stress.',
      icon: Utensils,
      color: 'red',
      available: true,
      highlights: [
        'Distributeurs de tickets étape par étape',
        'Écrans tactiles interactifs',
        'Commande par QR code',
        'Phrases essentielles en 3 langues'
      ]
    },
    {
      id: 'restaurant-sushi',
      title: 'Guide des Restaurants Sushi',
      subtitle: 'Choisissez le restaurant sushi parfait',
      description: 'Guide complet pour naviguer dans l\'univers des restaurants sushi japonais : kaiten-zushi, sushi-ya traditionnels et chaînes modernes.',
      icon: ChefHat,
      color: 'blue',
      available: true,
      highlights: [
        'Comparaison des types de restaurants',
        'Top 3 des chaînes de sushi',
        'Conseils de choix par situation',
        'Guide des prix et budgets'
      ]
    },
    {
      id: 'regimes-alimentaires',
      title: 'Guide des Régimes Alimentaires',
      subtitle: 'Mangez selon vos besoins et convictions',
      description: 'Informations détaillées pour végétariens, vegans, halal et allergies alimentaires dans chaque chaîne.',
      icon: Heart,
      color: 'green',
      available: true,
      highlights: [
        'Options végétariennes et vegan',
        'Aliments halal et sans porc',
        'Guide des allergènes',
        'Conseils par chaîne de restaurant'
      ]
    },
    {
      id: 'culture-etiquette',
      title: 'Culture & Étiquette',
      subtitle: 'Découvrez les codes culturels japonais',
      description: 'Apprenez les bonnes manières, le vocabulaire culinaire et les traditions pour une expérience authentique.',
      icon: Globe,
      color: 'blue',
      available: true,
      highlights: [
        'Glossaire de la cuisine japonaise',
        'Étiquette au restaurant',
        'Traditions culinaires',
        'Expressions courantes'
      ]
    },
    {
      id: 'boissons-japonaises',
      title: 'Guide des Boissons Japonaises',
      subtitle: 'L\'art de boire au Japon',
      description: 'Guide complet des boissons japonaises : saké, shochu, whisky japonais, bière. Culture, étiquette et accords parfaits pour une expérience authentique.',
      icon: Wine,
      color: 'purple',
      available: true,
      highlights: [
        'Saké : classifications et températures',
        'Shochu et whisky japonais',
        'Étiquette et culture du service',
        'Accords mets-boissons experts'
      ]
    },
    {
      id: 'articles',
      title: 'Articles de Fond',
      subtitle: 'Plongez dans la culture culinaire japonaise',
      description: 'Articles approfondis sur l\'histoire des plats, comparaisons entre chaînes et secrets de la gastronomie japonaise.',
      icon: Book,
      color: 'purple',
      available: true,
      highlights: [
        'Histoire du ramen',
        'Secrets du dashi',
        'Comparatif des chaînes gyūdon',
        'Évolution de la cuisine japonaise'
      ]
    }
  ];

  const getColorClasses = (color: string) => {    const colorMap = {
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        coming: 'bg-red-100 text-red-800'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        coming: 'bg-orange-100 text-orange-800'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        coming: 'bg-green-100 text-green-800'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        coming: 'bg-blue-100 text-blue-800'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        coming: 'bg-purple-100 text-purple-800'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };  return (
    <>
      <GuideViewTracker guideName="guides-overview" />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <ChefHat className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Guides Pratiques
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Maîtrisez l'art de manger dans les chaînes japonaises avec nos guides experts
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Votre Passeport Culinaire pour le Japon</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Au-delà de la simple liste de restaurants, nous vous offrons les clés pour vivre une <strong>expérience authentique</strong> 
            dans les chaînes japonaises. Ces guides pratiques transforment l'appréhension en confiance et la confusion en plaisir.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
            <p className="text-gray-800 font-medium">
              💡 <strong>Conseil d'expert :</strong> Commencez par le guide "Comment Commander" pour acquérir les bases, 
              puis explorez les autres sections selon vos besoins spécifiques.
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-8">
          {guides.map((guide) => {
            const colors = getColorClasses(guide.color);
            const IconComponent = guide.icon;
            
            return (
              <div key={guide.id} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`${colors.icon} bg-white p-3 rounded-full mr-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
                        <p className="text-lg text-gray-600">{guide.subtitle}</p>
                      </div>
                      {!guide.available && (
                        <div className={`${colors.coming} px-3 py-1 rounded-full text-sm font-medium ml-4`}>
                          Bientôt disponible
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-6">{guide.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {guide.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center">
                          <span className="bg-white rounded-full w-2 h-2 mr-3"></span>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    {guide.available ? (
                      <Link 
                        href={`/guides/${guide.id}`}
                        className={`${colors.button} text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-block text-center`}
                      >
                        Découvrir le guide
                      </Link>
                    ) : (
                      <div className="bg-gray-200 text-gray-600 px-8 py-4 rounded-xl font-semibold text-center">
                        En préparation
                      </div>
                    )}                  </div>
                </div>
              </div>
            );
          })}        </div>
      </div>
      </div>
    </>
  );
}
