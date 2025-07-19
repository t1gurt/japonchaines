import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, TrendingUp, Sparkles, Heart } from 'lucide-react';
import GuideViewTracker from '../../../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kikan Gentei & Moe-dan : L\'Art Japonais du Burger | Japonchaines',
  description: 'Découvrez comment les concepts de "période limitée" (kikan gentei) et d\'\"esthétique de la coupe" (moe-dan) ont révolutionné le burger au Japon.',
  keywords: 'kikan gentei, moe-dan, burger japonais, période limitée, esthétique coupe, culture consommation japon, marketing japonais',
  openGraph: {
    title: 'Kikan Gentei & Moe-dan : L\'Art Japonais du Burger',
    description: 'Découvrez comment les concepts de "période limitée" (kikan gentei) et d\'\"esthétique de la coupe" (moe-dan) ont révolutionné le burger au Japon.',
    type: 'article',
    locale: 'fr_FR',
    siteName: 'Japonchaines - Guide des Restaurants Japonais'
  },
  alternates: {
    canonical: '/guides/articles/culture-consommation-burger'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CultureConsommationBurgerPage() {
  const article = {
    title: 'Kikan Gentei & Moe-dan : L\'Art Japonais du Burger',
    subtitle: 'Période Limitée et Esthétique de la Coupe : Une Culture de Consommation Unique',
    publishDate: '2025-01-25',
    readTime: '14 min',
    author: 'Équipe Japanese Chains',
    category: 'Culture & Société',
    tags: ['Kikan Gentei', 'Moe-dan', 'Marketing', 'Esthétique', 'Social Media']
  };

  const concepts = {
    kikanGentei: {
      kanji: '期間限定',
      pronunciation: 'kikan gentei',
      meaning: 'Durée limitée / Période limitée',
      philosophy: 'La beauté de l\'éphémère appliquée au marketing moderne',
      origin: 'Concept enraciné dans le mono no aware (sensibilité à l\'éphémère)',
      impact: 'Crée un sentiment d\'urgence et d\'exclusivité'
    },
    moeDan: {
      kanji: '萌え断',
      pronunciation: 'moe-dan',
      meaning: 'Coupe attendrissante / Cross-section adorable',
      philosophy: 'Esthétique de l\'intérieur révélé, beauté de la structure',
      origin: 'Culture Instagram + sensibilité esthétique japonaise',
      impact: 'Transforme l\'acte de manger en expérience visuelle'
    }
  };

  const seasonalCampaigns = [
    {
      season: 'Automne (秋)',
      campaign: 'Tsukimi Burger (月見バーガー)',
      period: 'Septembre - Octobre',
      history: 'Lancé par McDonald\'s en 1991, devenu tradition nationale',
      symbolism: 'Œuf = pleine lune, contemplation automnale traditionnelle',
      evolution: 'De McDonald\'s uniquement à toutes les chaînes',
      culturalDepth: 'Fusion entre fast-food occidental et tradition japonaise millénaire',
      ingredients: ['Œuf au plat (symbole lunaire)', 'Sauce teriyaki', 'Bacon ou viande', 'Pain spécial'],
      marketing: 'Campagne émotionnelle liée aux souvenirs d\'enfance et tradition familiale'
    },
    {
      season: 'Hiver (冬)',
      campaign: 'Gratins & Hot Burgers',
      period: 'Décembre - Février',
      history: 'Développé pour contrer la baisse hivernale de consommation',
      symbolism: 'Chaleur, réconfort, convivialité hivernale',
      evolution: 'Innovation constante avec gratins fusion',
      culturalDepth: 'Adaptation du burger aux besoins saisonniers japonais',
      ingredients: ['Fromage gratiné chaud', 'Légumes d\'hiver', 'Sauces épicées', 'Pain réchauffé'],
      marketing: 'Focus sur la chaleur physique et émotionnelle'
    },
    {
      season: 'Printemps (春)',
      campaign: 'Sakura & Fresh Series',
      period: 'Mars - Mai',
      history: 'Capitalise sur l\'euphorie collective du hanami',
      symbolism: 'Renouveau, fraîcheur, espoir du nouveau cycle',
      evolution: 'Intégration d\'ingrédients sakura authentiques',
      culturalDepth: 'Connexion profonde avec le cycle naturel japonais',
      ingredients: ['Pétales de sakura', 'Saveurs printanières', 'Couleurs roses', 'Légumes nouveaux'],
      marketing: 'Esthétique Instagram + nostalgie poétique'
    },
    {
      season: 'Été (夏)',
      campaign: 'Refreshing & Tropical',
      period: 'Juin - Août',
      history: 'Réponse à la chaleur intense et l\'humidité',
      symbolism: 'Fraîcheur, évasion, énergie estivale',
      evolution: 'Inclusion d\'ingrédients tropicaux d\'Okinawa',
      culturalDepth: 'Célébration de la diversité géographique japonaise',
      ingredients: ['Fruits tropicaux', 'Sauces rafraîchissantes', 'Glace incluse', 'Légumes croquants'],
      marketing: 'Promesse d\'évasion et de rafraîchissement'
    }
  ];

  const moeDanEvolution = [
    {
      period: '2010-2015',
      phase: 'Émergence Digital',
      description: 'Première apparition sur les réseaux sociaux japonais',
      platforms: ['Twitter', 'Instagram naissant', 'Blogs culinaires'],
      focus: 'Documentation amateur de la beauté des coupes',
      impact: 'Niche communautaire'
    },
    {
      period: '2015-2018',
      phase: 'Mainstream Adoption',
      description: 'Adoption par les marques et restaurants',
      platforms: ['Instagram', 'YouTube', 'TikTok émergent'],
      focus: 'Optimisation esthétique professionnelle',
      impact: 'Influence sur le design produit'
    },
    {
      period: '2018-2021',
      phase: 'Art Form Recognition',
      description: 'Reconnaissance comme forme d\'art culinaire',
      platforms: ['TikTok dominant', 'Instagram Reels', 'Clubhouse'],
      focus: 'Techniques artistiques avancées',
      impact: 'Formation professionnelle dédiée'
    },
    {
      period: '2021-Present',
      phase: 'Global Influence',
      description: 'Export de l\'esthétique moe-dan mondiale',
      platforms: ['TikTok global', 'Instagram Stories', 'YouTube Shorts'],
      focus: 'Innovation technique continue',
      impact: 'Standard international de présentation'
    }
  ];

  const psychologyFactors = [
    {
      factor: 'FOMO (Fear of Missing Out)',
      description: 'Peur de rater l\'expérience limitée',
      mechanism: 'Urgence temporelle créée artificiellement',
      result: 'Achat impulsif et partage social massif',
      example: 'Files d\'attente pour le dernier burger saisonnier'
    },
    {
      factor: 'Collectionnisme (コレクション癖)',
      description: 'Désir de compléter la série saisonnière',
      mechanism: 'Gamification de la consommation',
      result: 'Fidélisation extreme et anticipation',
      example: 'Collecte de tous les burgers d\'une saison'
    },
    {
      factor: 'Social Proof (社会的証明)',
      description: 'Validation par la communauté en ligne',
      mechanism: 'Partage photographique obligatoire',
      result: 'Marketing viral organique',
      example: 'Hashtags de burger trending sur Twitter'
    },
    {
      factor: 'Perfectionnisme Esthétique (美意識)',
      description: 'Recherche de la photo parfaite',
      mechanism: 'Standards visuels élevés japonais',
      result: 'Qualité produit constamment améliorée',
      example: 'Retouche professionnelle des burgers Instagram'
    }
  ];

  const techniques = [
    {
      name: 'Layering Strategy (レイヤー戦略)',
      description: 'Superposition calculée des ingrédients pour maximiser l\'impact visuel',
      tools: ['Pinces de précision', 'Règles alimentaires', 'Éclairage LED'],
      time: '3-5 minutes par burger',
      skill: 'Formation professionnelle de 2 semaines'
    },
    {
      name: 'Color Coordination (色彩調和)',
      description: 'Harmonie chromatique inspirée de l\'art floral japonais',
      tools: ['Roue chromatique', 'Ingrédients colorés', 'Sauces teintées'],
      time: '2-3 minutes par ajustement',
      skill: 'Études esthétiques recommandées'
    },
    {
      name: 'Texture Contrast (質感対比)',
      description: 'Jeu de textures visible en coupe transversale',
      tools: ['Couteaux spécialisés', 'Techniques de découpe', 'Température contrôlée'],
      time: '1 minute de découpe précise',
      skill: 'Technique de chef professionnel'
    },
    {
      name: 'Geometric Precision (幾何学精度)',
      description: 'Proportions mathématiquement calculées',
      tools: ['Gabarits', 'Mesures standardisées', 'Appareils de mesure'],
      time: '30 secondes par vérification',
      skill: 'Formation technique spécialisée'
    }
  ];

  const businessImpact = [
    {
      metric: 'Augmentation des Ventes',
      data: '+40% pendant les campagnes kikan gentei',
      explanation: 'L\'urgence temporelle stimule les achats impulsifs',
      source: 'Données des principales chaînes 2020-2024'
    },
    {
      metric: 'Engagement Social Media',
      data: '+300% de posts pendant les lancements',
      explanation: 'Chaque burger devient contenu shareable',
      source: 'Analyse des hashtags Instagram/Twitter'
    },
    {
      metric: 'Temps de Préparation',
      data: '+150% pour les burgers moe-dan',
      explanation: 'L\'esthétique exige un travail artisanal',
      source: 'Études de temps et mouvement'
    },
    {
      metric: 'Formation du Personnel',
      data: '40h de formation esthétique par an',
      explanation: 'Maîtrise des techniques visuelles nécessaire',
      source: 'Plans de formation des chaînes premium'
    }
  ];

  const globalInfluence = [
    {
      country: 'Corée du Sud',
      adaptation: 'K-Beauty Burgers',
      elements: 'Esthétique pastel, ingrédients colorés naturels',
      success: 'Integration réussie dans la K-Culture'
    },
    {
      country: 'États-Unis',
      adaptation: 'Instagram-Ready Burgers',
      elements: 'Focus sur les couleurs vives, portions XXL',
      success: 'Adoption par les chaînes gourmet'
    },
    {
      country: 'France',
      adaptation: 'Burgers d\'Art',
      elements: 'Sophistication gastronomique, présentation raffinée',
      success: 'Niche haut de gamme parisienne'
    },
    {
      country: 'Thaïlande',
      adaptation: 'Tropical Moe-dan',
      elements: 'Fruits exotiques, couleurs naturelles vives',
      success: 'Tourism marketing viral'
    }
  ];

  return (
    <>
      <GuideViewTracker guideName="culture-consommation-burger" />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides/articles" className="text-gray-500 hover:text-red-600">Articles</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-900">Culture Consommation</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4">🍔</span>
                <span className="text-6xl mr-4">📸</span>
                <span className="text-6xl">✨</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                {article.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {article.author}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Au Japon, consommer un hamburger transcende l'acte alimentaire pour devenir une 
              expérience culturelle complexe, orchestrée par deux concepts révolutionnaires : 
              <strong>kikan gentei</strong> (期間限定) et <strong>moe-dan</strong> (萌え断). 
              Ces phénomènes redéfinissent notre rapport à la nourriture à l'ère des réseaux sociaux.
            </p>
            
            <p className="text-gray-700 mb-6">
              Entre l'art millénaire du mono no aware et l'esthétique Instagram, le Japon a créé 
              une nouvelle forme de consommation consciente qui influence désormais les tendances 
              mondiales du marketing alimentaire et de la culture visuelle.
            </p>
          </div>

          {/* Concepts Foundation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Les Deux Piliers Conceptuels</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kikan Gentei */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">⏰</div>
                  <h3 className="text-2xl font-bold text-gray-900">{concepts.kikanGentei.kanji}</h3>
                  <p className="text-gray-600 text-lg">{concepts.kikanGentei.pronunciation}</p>
                  <p className="text-gray-700 font-medium">{concepts.kikanGentei.meaning}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 mb-2">Philosophie</h4>
                    <p className="text-sm text-gray-600">{concepts.kikanGentei.philosophy}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 mb-2">Origine</h4>
                    <p className="text-sm text-gray-600">{concepts.kikanGentei.origin}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 mb-2">Impact</h4>
                    <p className="text-sm text-gray-600">{concepts.kikanGentei.impact}</p>
                  </div>
                </div>
              </div>

              {/* Moe-dan */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 border border-pink-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">💖</div>
                  <h3 className="text-2xl font-bold text-gray-900">{concepts.moeDan.kanji}</h3>
                  <p className="text-gray-600 text-lg">{concepts.moeDan.pronunciation}</p>
                  <p className="text-gray-700 font-medium">{concepts.moeDan.meaning}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-pink-700 mb-2">Philosophie</h4>
                    <p className="text-sm text-gray-600">{concepts.moeDan.philosophy}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-pink-700 mb-2">Origine</h4>
                    <p className="text-sm text-gray-600">{concepts.moeDan.origin}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-pink-700 mb-2">Impact</h4>
                    <p className="text-sm text-gray-600">{concepts.moeDan.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Campaigns */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Le Cycle Saisonnier des Émotions</h2>
            <div className="space-y-8">
              {seasonalCampaigns.map((campaign, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{campaign.campaign}</h3>
                        <p className="text-gray-600">{campaign.season} • {campaign.period}</p>
                      </div>
                      <div className="text-4xl">{
                        campaign.season.includes('秋') ? '🌕' :
                        campaign.season.includes('冬') ? '❄️' :
                        campaign.season.includes('春') ? '🌸' : '🌞'
                      }</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Histoire & Symbolisme</h4>
                        <p className="text-sm text-gray-700 mb-3">{campaign.history}</p>
                        <p className="text-sm text-gray-700 mb-4">{campaign.symbolism}</p>
                        
                        <h4 className="font-bold text-gray-900 mb-3">Profondeur Culturelle</h4>
                        <p className="text-sm text-gray-700">{campaign.culturalDepth}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Ingrédients Signature</h4>
                        <ul className="space-y-2 mb-4">
                          {campaign.ingredients.map((ingredient, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-600">{ingredient}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-bold text-gray-900 mb-3">Stratégie Marketing</h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{campaign.marketing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Moe-dan Evolution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Évolution du Moe-dan (2010-2025)</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-pink-300"></div>
              <div className="space-y-8">
                {moeDanEvolution.map((phase, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 w-4 h-4 bg-pink-500 rounded-full -translate-x-2"></div>
                    <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{phase.description}</p>
                      
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-bold text-pink-700 mb-2">Plateformes</h4>
                          <div className="space-y-1">
                            {phase.platforms.map((platform, i) => (
                              <span key={i} className="block text-xs text-gray-600">• {platform}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-pink-700 mb-2">Focus</h4>
                          <p className="text-xs text-gray-600">{phase.focus}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-pink-700 mb-2">Impact</h4>
                          <p className="text-xs text-gray-600">{phase.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Psychology Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Psychologie du Consommateur Japonais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {psychologyFactors.map((factor, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{factor.factor}</h3>
                  <p className="text-gray-700 mb-4">{factor.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-sm font-semibold text-yellow-700">Mécanisme : </span>
                      <span className="text-sm text-gray-600">{factor.mechanism}</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="text-sm font-semibold text-yellow-700">Résultat : </span>
                      <span className="text-sm text-gray-600">{factor.result}</span>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-yellow-500">
                      <span className="text-sm font-semibold text-yellow-800">Exemple : </span>
                      <span className="text-sm text-gray-700">{factor.example}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Techniques */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Techniques Professionnelles du Moe-dan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {techniques.map((technique, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{technique.name}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{technique.description}</p>
                  
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-purple-700">Outils : </span>
                      <span className="text-sm text-gray-600">{technique.tools.join(', ')}</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-blue-700">Temps : </span>
                      <span className="text-sm text-gray-600">{technique.time}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="text-sm font-semibold text-green-700">Compétence : </span>
                      <span className="text-sm text-gray-600">{technique.skill}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Économique Mesurable</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {businessImpact.map((metric, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">{metric.metric}</h3>
                  </div>
                  
                  <div className="text-3xl font-bold text-green-600 mb-3">{metric.data}</div>
                  <p className="text-gray-700 mb-4">{metric.explanation}</p>
                  
                  <div className="bg-white p-3 rounded-lg">
                    <span className="text-xs font-semibold text-gray-500">Source : </span>
                    <span className="text-xs text-gray-600">{metric.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Influence */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Influence Mondiale du Modèle Japonais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {globalInfluence.map((country, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{country.country}</h3>
                  <h4 className="text-md font-semibold text-blue-600 mb-2">{country.adaptation}</h4>
                  <p className="text-sm text-gray-700 mb-4">{country.elements}</p>
                  
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <span className="text-sm font-semibold text-blue-700">Succès : </span>
                    <span className="text-sm text-gray-600">{country.success}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* French Perspective */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perspective Franco-Japonaise</h2>
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 mb-4">🇫🇷 Vision Française</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Art de vivre :</strong> Plaisir de la table, convivialité, temps partagé</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Terroir :</strong> Authenticité, origine contrôlée, tradition ancestrale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Gastronomie :</strong> Technique culinaire, créativité des chefs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Résistance :</strong> Scepticisme face aux effets de mode</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">🇯🇵 Approche Japonaise</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Esthétique :</strong> Beauté visuelle, perfection formelle, harmonie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Innovation :</strong> Amélioration continue, adaptation créative</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Expérience :</strong> Moment unique, émotion partagée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Adoption :</strong> Enthousiasme pour les nouvelles tendances</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Synthèse Franco-Japonaise</h4>
                <p className="text-gray-700 text-sm">
                  L'influence du modèle japonais sur la France se manifeste dans l'émergence de restaurants 
                  "Instagrammables" et l'attention croissante portée à la présentation visuelle. Cependant, 
                  l'adaptation française privilégie la qualité gustative et l'authenticité des ingrédients, 
                  créant une synthèse unique entre esthétique japonaise et tradition gastronomique française.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Vers une Nouvelle Ère de la Consommation</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                Les concepts de kikan gentei et moe-dan représentent bien plus qu'une stratégie marketing : 
                ils incarnent une nouvelle philosophie de la consommation consciente qui réconcilie plaisir 
                immédiat et profondeur culturelle. En transformant chaque burger en œuvre d'art éphémère, 
                le Japon redéfinit notre rapport à la nourriture dans un monde hyperconnecté.
              </p>
              
              <p className="text-gray-700 mb-6">
                Cette révolution silencieuse influence désormais l'industrie alimentaire mondiale, prouvant 
                que l'innovation ne réside pas seulement dans les ingrédients ou les techniques, mais dans 
                la capacité à créer du sens et de l'émotion autour de l'acte de consommer.
              </p>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border-l-4 border-pink-500">
                <p className="text-gray-700 font-medium">
                  <strong>Pour les visiteurs français :</strong> Découvrir cette culture du burger japonais, 
                  c'est comprendre comment une société peut transformer un produit de consommation de masse 
                  en vecteur d'expression artistique et de lien social. Une leçon d'innovation culturelle 
                  qui dépasse largement le domaine de la restauration.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/guides/articles"
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux articles
              </Link>
              
              <div className="flex space-x-4">
                <Link
                  href="/type-plat/burgers"
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Découvrir les burgers japonais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
