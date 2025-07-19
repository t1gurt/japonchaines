import Link from 'next/link';
import { Wine, Coffee, Beer, Droplets, Star, ArrowRight, BookOpen, Heart, Globe, Thermometer, Clock, Award } from 'lucide-react';
import GuideViewTracker from '../../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boissons Japonaises | Saké Shochu | Japonchaines',
  description: 'Expert saké, shochu, whisky, bière. Accords parfaits, culture, étiquette.',
  keywords: 'boissons japonaises, saké, nihonshu, shochu, whisky japonais, bière japonaise, umeshu, chuhai, guide français, culture japonaise, accord mets boissons',
  openGraph: {
    title: 'Guide des Boissons Japonaises : Saké, Shochu, Bière | Japonchaines',
    description: 'Apprenez à choisir et déguster les boissons japonaises. Guide complet sur le saké, shochu, whisky japonais et l\'art de boire au Japon.',
    type: 'article',
    url: '/guides/boissons-japonaises',
  },
  alternates: {
    canonical: '/guides/boissons-japonaises',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BoissonsJaponaisesPage() {
  const drinkCategories = [
    {
      id: 'sake',
      title: 'Saké (日本酒)',
      subtitle: 'Le Cœur Liquide du Japon',
      description: 'Boisson fermentée à base de riz, symbole de raffinement et de tradition japonaise. Découvrez les secrets de la fabrication parallèle et les classifications premium.',
      icon: Wine,
      color: 'purple',
      alcohol: '14-16%',
      temp: '5-50°C',
      highlights: [
        'Processus de fermentation parallèle unique',
        'Classifications : Junmai, Ginjo, Daiginjo',
        'Service traditionnel : froid, tiède ou chaud',
        'Accords parfaits avec sushi et cuisine japonaise'
      ]
    },
    {
      id: 'shochu',
      title: 'Shochu (焼酎)',
      subtitle: 'L\'Esprit du Terroir Japonais',
      description: 'Spiritueux distillé japonais aux multiples visages selon ses ingrédients : patate douce, orge, riz. L\'expression pure du terroir nippon.',
      icon: Droplets,
      color: 'orange',
      alcohol: '20-45%',
      temp: 'Variable',
      highlights: [
        'Variétés : Imo (patate), Mugi (orge), Kome (riz)',
        'Shochu authentique vs industriel',
        'Modes de dégustation : pur, dilué, cocktails',
        'Patrimoine cultural régional'
      ]
    },
    {
      id: 'whisky',
      title: 'Whisky Japonais',
      subtitle: 'L\'Excellence de la Distillation Nippone',
      description: 'Whisky japonais de renommée mondiale, fusion parfaite entre tradition écossaise et perfectionnisme japonais. Highball : la révolution du whisky quotidien.',
      icon: Coffee,
      color: 'amber',
      alcohol: '40-43%',
      temp: 'Avec glace',
      highlights: [
        'Standards stricts 2021 pour l\'authenticité',
        'Single malts d\'exception',
        'Culture du Highball (whisky-soda)',
        'Marques iconiques : Suntory, Nikka'
      ]
    },
    {
      id: 'biere',
      title: 'Bière Japonaise',
      subtitle: 'La Convivialité Quotidienne',
      description: 'Lagers cristallines au goût pur, parfaites pour le climat japonais. "Toriaezu biru" - la phrase magique qui ouvre tous les repas entre amis.',
      icon: Beer,
      color: 'yellow',
      alcohol: '3-5%',
      temp: 'Très froide',
      highlights: [
        'Style Pilsner dominant',
        'Rituel social "Toriaezu biru"',
        'Tailles : Dai, Chu, Sho',
        'Fraîcheur et propreté avant tout'
      ]
    }
  ];

  const servingStyles = [
    {
      name: 'Reishu (冷酒)',
      temp: '5-15°C',
      description: 'Saké servi froid, idéal pour les ginjo aromatiques',
      icon: '❄️'
    },
    {
      name: 'Hiya (冷や)',
      temp: '20-25°C',
      description: 'Température ambiante, révèle l\'équilibre naturel',
      icon: '🌡️'
    },
    {
      name: 'Kanzake (燗酒)',
      temp: '35-50°C',
      description: 'Saké chauffé, enrichit les arômes des junmai',
      icon: '🔥'
    }
  ];

  const pairingPrinciples = [
    {
      type: 'Harmonie (調和)',
      description: 'Associer des saveurs similaires pour créer une unité',
      examples: [
        'Sushi délicat + Saké Ginjo cristallin',
        'Ramen soja + Saké Junmai umami',
        'Yakitori sel + Saké sec et léger'
      ],
      icon: '🤝'
    },
    {
      type: 'Contraste (補完)',
      description: 'Utiliser l\'opposition pour nettoyer et rafraîchir',
      examples: [
        'Karaage gras + Highball pétillant',
        'Gyoza huileux + Bière carbonatée',
        'Tempura + Saké acide ou pétillant'
      ],
      icon: '⚖️'
    }
  ];

  const etiquetteRules = [
    {
      rule: 'Kanpai (乾杯)',
      description: 'Attendez que tous soient servis avant de trinquer',
      tip: 'Placez votre verre plus bas que celui de vos aînés',
      icon: '🥂'
    },
    {
      rule: 'Oshaku (お酌)',
      description: 'Servez les autres, ne vous servez jamais vous-même',
      tip: 'Tenez la bouteille à deux mains, étiquette visible',
      icon: '🍶'
    },
    {
      rule: 'Otoshi (お通し)',
      description: 'Amuse-bouche automatique facturé comme couvert',
      tip: 'Ne pas refuser, c\'est inclus dans l\'expérience',
      icon: '🍤'
    }
  ];

  const vocabularyGuide = [
    { japanese: '日本酒', romaji: 'Nihonshu', french: 'Saké japonais authentique' },
    { japanese: '醸造酒', romaji: 'Jōzōshu', french: 'Boisson fermentée' },
    { japanese: '蒸留酒', romaji: 'Jōryūshu', french: 'Spiritueux distillé' },
    { japanese: '純米', romaji: 'Junmai', french: 'Saké pur riz (sans alcool ajouté)' },
    { japanese: '吟醸', romaji: 'Ginjō', french: 'Saké premium poli à 60% minimum' },
    { japanese: '大吟醸', romaji: 'Daiginjō', french: 'Saké ultra-premium poli à 50% minimum' },
    { japanese: '焼酎', romaji: 'Shōchū', french: 'Spiritueux japonais distillé' },
    { japanese: '芋/麦/米', romaji: 'Imo/Mugi/Kome', french: 'Patate douce/Orge/Riz' },
    { japanese: '水割り', romaji: 'Mizuwari', french: 'Allongé à l\'eau froide' },
    { japanese: 'お湯割り', romaji: 'Oyuwari', french: 'Allongé à l\'eau chaude' },
    { japanese: '梅酒', romaji: 'Umeshu', french: 'Liqueur de prune' },
    { japanese: 'チューハイ', romaji: 'Chūhai', french: 'Cocktail en canette' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        accent: 'bg-purple-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        accent: 'bg-orange-600'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: 'text-amber-600',
        accent: 'bg-amber-600'
      },
      yellow: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        icon: 'text-yellow-600',
        accent: 'bg-yellow-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <>
      <GuideViewTracker guideName="boissons-japonaises" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-900">Boissons Japonaises</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Wine className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                L'Art des Boissons Japonaises
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
                Découvrez l'univers fascinant des boissons japonaises : du saké raffiné au shochu authentique, 
                maîtrisez la culture de la boisson au Japon avec un regard français expert.
              </p>
              <div className="text-sm text-purple-200 japanese-text">
                日本の酒文化完全ガイド
              </div>
            </div>
          </div>
        </div>

        {/* Introduction philosophique */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Une Philosophie de la Boisson
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Comme le vin en France révèle l'âme du terroir, les boissons japonaises racontent 
                l'histoire d'une nation, ses valeurs et son rapport à la nature. Ce guide vous invite 
                à découvrir non seulement <strong>comment boire</strong>, mais <strong>pourquoi</strong> 
                chaque gorgée porte en elle des siècles de tradition et d'innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">🍶 Fermentation (醸造)</h3>
                  <p className="text-gray-700">
                    Saké et bière révèlent la patience japonaise. La fermentation parallèle du saké, 
                    technique unique au monde, symbolise l'harmonie entre nature et savoir-faire humain.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-orange-900 mb-3">🔥 Distillation (蒸留)</h3>
                  <p className="text-gray-700">
                    Shochu et whisky japonais incarnent la quête de pureté. Chaque distillation capture 
                    l'essence même des ingrédients, du terroir à l'esprit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Catégories principales */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Les Quatre Piliers de la Boisson Japonaise
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {drinkCategories.map((category) => {
              const colors = getColorClasses(category.color);
              const IconComponent = category.icon;
              return (
                <div key={category.id} className={`${colors.bg} ${colors.border} border-2 rounded-xl p-8 hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-4 rounded-lg mr-4">
                      <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-lg text-gray-600">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">Alcool : {category.alcohol}</span>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-sm text-gray-600">Service : {category.temp}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Styles de service */}
        <div className="bg-purple-50 border-t border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              L'Art du Service : Température et Expression
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Contrairement aux vins qui ont leur température optimale, le saké révèle des personnalités 
              différentes selon sa température de service. Une même bouteille devient trois expériences distinctes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servingStyles.map((style, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-4xl mb-4">{style.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{style.name}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{style.temp}</div>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principes d'accords */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Maîtriser les Accords : Harmonie vs Contraste
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pairingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{principle.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{principle.type}</h3>
                </div>
                <p className="text-gray-600 mb-6">{principle.description}</p>
                <div className="space-y-3">
                  {principle.examples.map((example, i) => (
                    <div key={i} className="flex items-center bg-gray-50 p-3 rounded">
                      <ArrowRight className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Étiquette japonaise */}
        <div className="bg-red-50 border-t border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Étiquette : Les Codes Sociaux de la Boisson
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Boire au Japon n'est jamais qu'un acte individuel. C'est un rituel social codifié 
              qui renforce les liens et exprime le respect mutuel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {etiquetteRules.map((etiquette, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-4xl mb-4">{etiquette.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{etiquette.rule}</h3>
                  <p className="text-gray-600 mb-4">{etiquette.description}</p>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <p className="text-sm text-red-800 font-medium">{etiquette.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vocabulaire essentiel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Vocabulaire Essentiel
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vocabularyGuide.map((term, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="japanese-text text-xl font-bold text-gray-900">{term.japanese}</span>
                    <BookOpen className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-600 italic mb-2">{term.romaji}</div>
                  <div className="text-gray-700">{term.french}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion et call-to-action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Votre Voyage Commence Maintenant
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Armé de ces connaissances, vous n'êtes plus un simple touriste mais un amateur éclairé, 
                prêt à découvrir les subtilités de la culture japonaise de la boisson.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/chaines"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Explorer les chaînes
                </Link>
                <Link
                  href="/guides/culture-etiquette"
                  className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Approfondir l'étiquette
                </Link>
              </div>
              
              <div className="mt-8 text-purple-200">
                <p className="text-lg japanese-text">乾杯！- Kanpai !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
