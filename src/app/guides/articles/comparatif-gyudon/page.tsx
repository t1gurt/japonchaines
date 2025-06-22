import Link from 'next/link';
import { BookOpen, Clock, Calendar, ArrowLeft, TrendingUp, Users, MapPin, Award, DollarSign, Star } from 'lucide-react';

export default function ComparatifGyudonPage() {
  const chainsOverview = [
    {
      name: 'Yoshinoya',
      founded: 1899,
      philosophy: 'Tradition et authenticité',
      positioning: 'Le pionnier historique',
      signature: 'Gyudon classique inchangé',
      stores: '2,800+ (Japon)',
      global: '1,200+ (International)',
      stock: 'Cotée NYSE & TSE',
      color: 'bg-orange-500'
    },
    {
      name: 'Sukiya',
      founded: 1982,
      philosophy: 'Innovation et personnalisation',
      positioning: 'Le leader technologique',
      signature: 'Variétés infinies',
      stores: '3,500+ (Japon)',
      global: '600+ (International)',
      stock: 'Filiale Zensho Holdings',
      color: 'bg-green-500'
    },
    {
      name: 'Matsuya',
      founded: 1968,
      philosophy: 'Qualité-prix optimale',
      positioning: 'L\'alternative équilibrée',
      signature: 'Définition + miso gratuit',
      stores: '1,000+ (Japon)',
      global: '100+ (International)',
      stock: 'Cotée Tokyo',
      color: 'bg-blue-500'
    }
  ];

  const businessMetrics = [
    {
      metric: 'Chiffre d\'affaires 2023',
      yoshinoya: '¥165 milliards',
      sukiya: '¥280 milliards',
      matsuya: '¥75 milliards',
      winner: 'sukiya'
    },
    {
      metric: 'Nombre de magasins',
      yoshinoya: '4,000 mondial',
      sukiya: '4,100 mondial',
      matsuya: '1,100 mondial',
      winner: 'sukiya'
    },
    {
      metric: 'Prix moyen (gyudon M)',
      yoshinoya: '¥380',
      sukiya: '¥350',
      matsuya: '¥320',
      winner: 'matsuya'
    },
    {
      metric: 'Temps service moyen',
      yoshinoya: '90 secondes',
      sukiya: '75 secondes',
      matsuya: '95 secondes',
      winner: 'sukiya'
    },
    {
      metric: 'Innovation technologique',
      yoshinoya: 'Conservateur',
      sukiya: 'Leader',
      matsuya: 'Suiveur',
      winner: 'sukiya'
    },
    {
      metric: 'Expansion internationale',
      yoshinoya: 'USA focus',
      sukiya: 'Asie focus',
      matsuya: 'Limitée',
      winner: 'yoshinoya'
    }
  ];

  const strategicAnalysis = [
    {
      chain: 'Yoshinoya',
      strengths: [
        'Héritage historique inégalé (125 ans)',
        'Recette originale et authentique',
        'Forte reconnaissance de marque',
        'Présence établie aux États-Unis'
      ],
      weaknesses: [
        'Innovation limitée',
        'Prix parfois plus élevés',
        'Résistance au changement',
        'Dépendance à un seul produit'
      ],
      opportunities: [
        'Expansion en Europe',
        'Produits premium',
        'Tourisme culinaire',
        'Partenariats luxe'
      ],
      threats: [
        'Concurrence aggressive',
        'Changement habitudes',
        'Coût des matières premières',
        'Saturation marché domestique'
      ]
    },
    {
      chain: 'Sukiya',
      strengths: [
        'Innovation technologique continue',
        'Variété de menu la plus large',
        'Efficacité opérationnelle',
        'Croissance internationale rapide'
      ],
      weaknesses: [
        'Moins d\'authenticité perçue',
        'Complexité opérationnelle',
        'Dépendance technologie',
        'Image moins premium'
      ],
      opportunities: [
        'Digitalisation poussée',
        'Nouveaux marchés asiatiques',
        'Personnalisation IA',
        'Écosystème Zensho'
      ],
      threats: [
        'Surcomplication de l\'offre',
        'Pression sur les marges',
        'Pannes technologiques',
        'Concurrence low-cost'
      ]
    },
    {
      chain: 'Matsuya',
      strengths: [
        'Rapport qualité-prix optimal',
        'Positionnement unique (teishoku)',
        'Clientèle fidèle',
        'Simplicité d\'exploitation'
      ],
      weaknesses: [
        'Taille limitée vs concurrents',
        'Innovation ralentie',
        'Expansion internationale faible',
        'Visibilité marketing réduite'
      ],
      opportunities: [
        'Niche qualité-prix',
        'Expansion domestique',
        'Amélioration service',
        'Partnerships locaux'
      ],
      threats: [
        'Guerre des prix',
        'Marginalisation marché',
        'Pression immobilière',
        'Consolidation secteur'
      ]
    }
  ];

  const culturalImpact = [
    {
      aspect: 'Héritage Yoshinoya',
      description: 'Invention du gyudon moderne en 1899',
      impact: 'Création d\'une catégorie alimentaire entière',
      legacy: 'Standard de référence pour tous les concurrents',
      modernization: 'Adaptation progressive aux goûts contemporains'
    },
    {
      aspect: 'Innovation Sukiya',
      description: 'Révolution de la personnalisation massive',
      impact: 'Transformation des attentes consommateurs',
      legacy: 'Modèle d\'efficacité et de variété',
      modernization: 'Integration AI et digitalisation complète'
    },
    {
      aspect: 'Pragmatisme Matsuya',
      description: 'Concept teishoku dans le fast-food',
      impact: 'Démocratisation des repas équilibrés',
      legacy: 'Alternative santé dans la restauration rapide',
      modernization: 'Focus sur la nutrition et qualité'
    }
  ];

  const recipeSecrets = [
    {
      chain: 'Yoshinoya',
      beef: 'Tranches fines, marinade sauce soja douce',
      onions: 'Cuisson lente jusqu\'à caramélisation parfaite',
      sauce: 'Recette secrète inchangée depuis 1899',
      rice: 'Riz japonica premium, cuisson vapeur',
      secret: 'Proportion viande/oignon 3:1 exacte',
      philosophy: 'Simplicité absolue et respect tradition'
    },
    {
      chain: 'Sukiya',
      beef: 'Découpe standardisée, assaisonnement variable',
      onions: 'Cuisson contrôlée par minuterie automatique',
      sauce: 'Variantes multiples selon personnalisation',
      rice: 'Trois tailles, qualité constante',
      secret: 'Système modulaire permettant 100+ combinaisons',
      philosophy: 'Customisation maximale dans efficacité'
    },
    {
      chain: 'Matsuya',
      beef: 'Qualité supérieure, cuisson plus longue',
      onions: 'Caramélisation poussée, texture fondante',
      sauce: 'Équilibre umami-sucré optimal',
      rice: 'Portion généreuse, accompagnements inclus',
      secret: 'Miso shiru gratuit qui complète le profil gustatif',
      philosophy: 'Valeur ajoutée maximum pour prix donné'
    }
  ];

  const futureStrategies = [
    {
      chain: 'Yoshinoya',
      strategy: 'Heritage Premium',
      focus: 'Valorisation de l\'authenticité historique',
      initiatives: [
        'Ouverture de restaurants "Yoshinoya Premium"',
        'Partenariats avec des chefs étoilés',
        'Musée de la marque et expériences culturelles',
        'Certification "Original Gyudon" internationale'
      ],
      timeline: '2025-2027',
      risk: 'Alienation clientèle price-sensitive'
    },
    {
      chain: 'Sukiya',
      strategy: 'Tech Leadership',
      focus: 'Domination par l\'innovation technologique',
      initiatives: [
        'IA pour prédiction des goûts personnels',
        'Robots cuisiniers dans 50% des magasins',
        'App intégrée écosystème Zensho complet',
        'Expansion agressive marchés émergents'
      ],
      timeline: '2024-2026',
      risk: 'Complexité excessive, pannes système'
    },
    {
      chain: 'Matsuya',
      strategy: 'Value Excellence',
      focus: 'Optimisation rapport qualité-prix imbattable',
      initiatives: [
        'Certification nutritionnelle tous plats',
        'Expansion ciblée villes moyennes',
        'Partenariats producteurs locaux',
        'Format "Matsuya Express" stations service'
      ],
      timeline: '2025-2028',
      risk: 'Pression marges, guerre des prix'
    }
  ];

  const getWinnerColor = (winner: string, current: string) => {
    if (winner === current) return 'bg-green-100 text-green-800 font-bold';
    return 'text-gray-700';
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides/articles" className="text-gray-500 hover:text-red-600">Articles de Fond</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Comparatif des Chaînes Gyudon</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/guides/articles" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                🎋 Expert
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Analyse
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comparatif des Chaînes Gyudon
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Yoshinoya vs Sukiya vs Matsuya : analyse détaillée des trois géants du bol de bœuf japonais. 
              Stratégies, philosophies et secrets des empires du gyudon.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min de lecture
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                5 décembre 2024
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Business, Comparaison, Stratégie marketing
              </div>
            </div>
          </div>
          
          <div className="japanese-text text-center text-gray-500">
            牛丼チェーン三大巨頭の徹底比較分析
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-orange-900 mb-3">La bataille des titans du gyudon</h2>
            <p className="text-orange-800">
              Depuis plus de 40 ans, trois chaînes se livrent une guerre commerciale impitoyable pour dominer 
              le marché du gyudon au Japon. Yoshinoya, la vénérable pionière. Sukiya, l'innovatrice technologique. 
              Matsuya, la pragmatique challenger. Cette analyse révèle leurs stratégies, leurs forces, 
              leurs faiblesses et leur vision de l'avenir du fast-food japonais.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Histoire d'une Rivalité Légendaire</h2>
          
          <p className="mb-6">
            L'histoire commence en 1899 quand Eikichi Matsuda ouvre le premier Yoshinoya à Tokyo, inventant 
            littéralement le concept de gyudon. Pendant près d'un siècle, Yoshinoya règne sans partage sur 
            ce marché qu'elle a créé. Mais les années 1980 changent la donne.
          </p>

          <p className="mb-6">
            En 1982, Sukiya débarque avec une approche révolutionnaire : pourquoi se limiter au gyudon classique 
            quand on peut offrir des dizaines de variantes ? En 1968, Matsuya avait déjà commencé à grignoter 
            des parts de marché avec une promesse simple : plus de valeur pour moins cher.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="italic text-blue-900">
              "Cette rivalité a transformé un simple bol de riz à la viande en laboratoire d'innovation 
              business, redéfinissant les codes de la restauration rapide mondiale."
            </p>
          </div>
        </div>
      </div>

      {/* Chains Overview */}
      <div className="bg-gray-100 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Vue d'Ensemble des Trois Géants
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {chainsOverview.map((chain, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className={`${chain.color} w-6 h-6 rounded mr-3`}></div>
                  <h3 className="text-xl font-bold text-gray-900">{chain.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Fondation :</span>
                    <p className="text-sm text-gray-600">{chain.founded}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Philosophie :</span>
                    <p className="text-sm text-gray-600">{chain.philosophy}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Positionnement :</span>
                    <p className="text-sm font-medium text-purple-700">{chain.positioning}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Signature :</span>
                    <p className="text-sm text-gray-600">{chain.signature}</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-semibold">Japon :</span>
                        <p>{chain.stores}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Mondial :</span>
                        <p>{chain.global}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-xs font-semibold">Statut :</span>
                      <p className="text-xs text-gray-600">{chain.stock}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Metrics Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Analyse Comparative des Performances
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Métrique</th>
                <th className="px-6 py-4 text-center font-semibold text-orange-800">Yoshinoya</th>
                <th className="px-6 py-4 text-center font-semibold text-green-800">Sukiya</th>
                <th className="px-6 py-4 text-center font-semibold text-blue-800">Matsuya</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {businessMetrics.map((metric, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 font-medium text-gray-900">{metric.metric}</td>
                  <td className={`px-6 py-4 text-center text-sm ${getWinnerColor(metric.winner, 'yoshinoya')}`}>
                    {metric.yoshinoya}
                  </td>
                  <td className={`px-6 py-4 text-center text-sm ${getWinnerColor(metric.winner, 'sukiya')}`}>
                    {metric.sukiya}
                  </td>
                  <td className={`px-6 py-4 text-center text-sm ${getWinnerColor(metric.winner, 'matsuya')}`}>
                    {metric.matsuya}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            💡 <strong>Note :</strong> Les performances en gras indiquent le leader dans chaque catégorie. 
            Sukiya domine en taille et efficacité, Matsuya en prix, Yoshinoya en expansion internationale.
          </p>
        </div>
      </div>

      {/* Strategic Analysis (SWOT) */}
      <div className="bg-blue-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Analyse Stratégique SWOT
          </h2>
          
          <div className="space-y-8">
            {strategicAnalysis.map((analysis, index) => (
              <div key={index} className="bg-white border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{analysis.chain}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center font-semibold text-green-800 mb-3">
                        <Star className="w-5 h-5 mr-2" />
                        Forces (Strengths)
                      </h4>
                      <ul className="space-y-2">
                        {analysis.strengths.map((strength, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center font-semibold text-blue-800 mb-3">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Opportunités (Opportunities)
                      </h4>
                      <ul className="space-y-2">
                        {analysis.opportunities.map((opportunity, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="flex items-center font-semibold text-orange-800 mb-3">
                        <MapPin className="w-5 h-5 mr-2" />
                        Faiblesses (Weaknesses)
                      </h4>
                      <ul className="space-y-2">
                        {analysis.weaknesses.map((weakness, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center font-semibold text-red-800 mb-3">
                        <Award className="w-5 h-5 mr-2" />
                        Menaces (Threats)
                      </h4>
                      <ul className="space-y-2">
                        {analysis.threats.map((threat, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {threat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recipe Secrets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Secrets Culinaires et Philosophies
        </h2>
        
        <div className="space-y-8">
          {recipeSecrets.map((recipe, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{recipe.chain}</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bœuf :</h4>
                    <p className="text-sm text-gray-700">{recipe.beef}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Oignons :</h4>
                    <p className="text-sm text-gray-700">{recipe.onions}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sauce :</h4>
                    <p className="text-sm text-gray-700">{recipe.sauce}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Riz :</h4>
                    <p className="text-sm text-gray-700">{recipe.rice}</p>
                  </div>
                </div>
                
                <div>
                  <div className="bg-purple-50 border border-purple-200 rounded p-4 mb-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Secret :</h4>
                    <p className="text-sm text-purple-800">{recipe.secret}</p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Philosophie :</h4>
                    <p className="text-sm text-yellow-800">{recipe.philosophy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Impact */}
      <div className="bg-orange-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Impact Culturel et Social
          </h2>
          
          <div className="space-y-6">
            {culturalImpact.map((impact, index) => (
              <div key={index} className="bg-white border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{impact.aspect}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Description :</h4>
                    <p className="text-sm text-gray-700">{impact.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact :</h4>
                    <p className="text-sm text-gray-700">{impact.impact}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Héritage :</h4>
                    <p className="text-sm text-gray-700">{impact.legacy}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Modernisation :</h4>
                    <p className="text-sm text-orange-700 font-medium">{impact.modernization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Strategies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Stratégies d'Avenir 2025-2030
        </h2>
        
        <div className="space-y-8">
          {futureStrategies.map((strategy, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{strategy.chain}</h3>
                  <p className="text-lg font-medium text-purple-700">{strategy.strategy}</p>
                </div>
                <div className="text-right">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
                    {strategy.timeline}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{strategy.focus}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Initiatives clés :</h4>
                  <ul className="space-y-2">
                    {strategy.initiatives.map((initiative, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="bg-red-50 border border-red-200 rounded p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Risque principal :</h4>
                    <p className="text-sm text-red-800">{strategy.risk}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verdict : Trois Visions, Un Avenir</h2>
          
          <p className="mb-6">
            Cette bataille titanesque révèle trois philosophies business distinctes. Yoshinoya mise sur 
            l'héritage et l'authenticité pour justifier une montée en gamme. Sukiya pousse l'innovation 
            technologique à l'extrême pour maintenir sa domination. Matsuya joue la carte de la valeur 
            intelligente pour survivre entre les géants.
          </p>

          <p className="mb-6">
            Paradoxalement, cette concurrence acharnée profite aux consommateurs. Chaque chaîne excelle 
            dans son domaine : tradition chez Yoshinoya, innovation chez Sukiya, rapport qualité-prix 
            chez Matsuya. Le marché japonais est assez vaste pour les trois, et leur expansion 
            internationale les positionne différemment.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-orange-900 mb-3">L'Avenir du Gyudon</h3>
            <p className="text-orange-800">
              Ces trois chaînes ne se contentent plus de vendre des bols de riz au bœuf. Elles exportent 
              des modèles économiques, des innovations technologiques et des philosophies culturelles. 
              Leur rivalité façonne l'avenir de la restauration rapide mondiale, un gyudon à la fois.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Articles Liés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/guides/articles/histoire-ramen" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🍜</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    L'Histoire du Ramen au Japon
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Découvrez l'évolution fascinante du ramen, de ses origines chinoises à la conquête mondiale.
                </p>
              </div>
            </Link>
            
            <Link href="/guides/articles/secrets-dashi" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🥣</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    Les Secrets du Dashi
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Plongez dans l'art millénaire du dashi, le bouillon fondamental de la cuisine japonaise.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/guides/articles"
              className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Tous les articles
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
