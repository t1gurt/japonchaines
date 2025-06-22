import Link from 'next/link';
import { BookOpen, Clock, Calendar, ArrowLeft, Beaker, Atom, Droplets, Thermometer } from 'lucide-react';

export default function SecretsDashiPage() {
  const dashiTypes = [
    {
      name: 'Kombu Dashi',
      kanji: '昆布だし',
      base: 'Algue kombu',
      flavor: 'Umami océanique subtil',
      usage: 'Base végétarienne, cuisine kaiseki',
      technique: 'Extraction à froid ou chaude contrôlée',
      chains: ['Restaurants végétariens', 'Haute cuisine'],
      color: 'bg-green-500'
    },
    {
      name: 'Katsuobushi Dashi',
      kanji: 'かつお節だし',
      base: 'Copeaux de bonite séchée',
      flavor: 'Umami intense et fumé',
      usage: 'Soupes miso, sauce de tempura',
      technique: 'Infusion rapide eau bouillante',
      chains: ['Ichiran', 'Tenkaippin'],
      color: 'bg-orange-500'
    },
    {
      name: 'Niboshi Dashi',
      kanji: '煮干しだし',
      base: 'Petits poissons séchés',
      flavor: 'Umami profond et minéral',
      usage: 'Ramen traditionnel, miso rustique',
      technique: 'Mijotage prolongé',
      chains: ['Ramen locaux', 'Ippudo variations'],
      color: 'bg-blue-500'
    },
    {
      name: 'Shiitake Dashi',
      kanji: 'しいたけだし',
      base: 'Champignons shiitake séchés',
      flavor: 'Umami terreux et boisé',
      usage: 'Cuisine végétarienne, plats mijotés',
      technique: 'Réhydratation et infusion',
      chains: ['Options végétariennes'],
      color: 'bg-brown-500'
    }
  ];

  const umamiScience = [
    {
      molecule: 'Glutamate',
      source: 'Kombu (algue)',
      effect: 'Goût umami de base',
      concentration: 'Très élevée',
      discovery: '1908 par Kikunae Ikeda'
    },
    {
      molecule: 'Inosinate',
      source: 'Katsuobushi (bonite)',
      effect: 'Amplification umami',
      concentration: 'Élevée',
      discovery: 'Synergie avec glutamate'
    },
    {
      molecule: 'Guanylate',
      source: 'Shiitake (champignons)',
      effect: 'Umami terreux',
      concentration: 'Modérée',
      discovery: 'Complément aromatique'
    }
  ];

  const preparationSteps = [
    {
      step: 1,
      title: 'Sélection des ingrédients',
      description: 'Choisir des ingrédients de qualité premium',
      details: [
        'Kombu : épais, vert foncé, sans taches blanches',
        'Katsuobushi : copeaux épais, couleur acajou',
        'Eau : pure, faiblement minéralisée'
      ],
      temperature: 'Température ambiante',
      timing: '5-10 minutes'
    },
    {
      step: 2,
      title: 'Préparation du kombu',
      description: 'Extraction lente des glutamates',
      details: [
        'Essuyer délicatement (ne pas rincer)',
        'Trempage à froid 30 minutes minimum',
        'Chauffage très lent jusqu\'à 60°C'
      ],
      temperature: '60°C maximum',
      timing: '30-60 minutes'
    },
    {
      step: 3,
      title: 'Retrait du kombu',
      description: 'Éviter l\'amertume par surchauffe',
      details: [
        'Retirer juste avant ébullition',
        'Réserver pour usage secondaire',
        'Température critique : 65°C'
      ],
      temperature: '60-65°C',
      timing: 'Surveillance constante'
    },
    {
      step: 4,
      title: 'Ajout du katsuobushi',
      description: 'Infusion flash pour umami optimal',
      details: [
        'Eau à ébullition franche',
        'Ajout des copeaux en pluie',
        'Extinction immédiate du feu'
      ],
      temperature: '100°C puis extinction',
      timing: '30 secondes maximum'
    },
    {
      step: 5,
      title: 'Filtrage et conservation',
      description: 'Clarification et préservation',
      details: [
        'Filtrage à travers tissu fin',
        'Ne jamais presser les copeaux',
        'Utilisation immédiate conseillée'
      ],
      temperature: 'Refroidissement naturel',
      timing: '2-3 minutes filtrage'
    }
  ];

  const industrialInnovations = [
    {
      chain: 'Ichiran',
      innovation: 'Tonkotsu-dashi hybride',
      technique: 'Fusion os de porc + katsuobushi',
      benefit: 'Umami complexe en 30 minutes',
      secret: 'Proportion secrète 70/30'
    },
    {
      chain: 'Ippudo',
      innovation: 'Dashi concentré',
      technique: 'Réduction sous vide basse température',
      benefit: 'Conservation longue durée',
      secret: 'Cristallisation umami'
    },
    {
      chain: 'CoCo Ichibanya',
      innovation: 'Dashi curry adapté',
      technique: 'Dashi léger pour ne pas masquer épices',
      benefit: 'Harmonie japonaise-indienne',
      secret: 'Kombu uniquement, extraction courte'
    }
  ];

  const qualityFactors = [
    {
      factor: 'Origine du kombu',
      excellent: 'Hokkaido (Rausu, Makombu)',
      good: 'Autres régions japonaises',
      mediocre: 'Importation',
      impact: 'Intensité umami x3'
    },
    {
      factor: 'Âge du katsuobushi',
      excellent: '6+ mois de séchage',
      good: '3-6 mois',
      mediocre: 'Moins de 3 mois',
      impact: 'Complexité aromatique'
    },
    {
      factor: 'Qualité de l\'eau',
      excellent: 'Eau de source pure',
      good: 'Eau filtrée',
      mediocre: 'Eau du robinet',
      impact: 'Clarté et pureté'
    },
    {
      factor: 'Contrôle température',
      excellent: 'Précision ±2°C',
      good: 'Approximation ±5°C',
      mediocre: 'Sans contrôle',
      impact: 'Extraction optimale'
    }
  ];

  const philosophy = [
    {
      concept: 'Simplicité (簡素 - Kanso)',
      explanation: 'Révéler l\'essence pure des ingrédients',
      application: 'Techniques minimales, résultats maximaux',
      wisdom: 'La perfection naît de la suppression du superflu'
    },
    {
      concept: 'Harmonie (調和 - Chōwa)',
      explanation: 'Équilibre entre tous les éléments',
      application: 'Proportions parfaites, pas de dominance',
      wisdom: 'Chaque composant sert l\'ensemble'
    },
    {
      concept: 'Temporalité (時 - Toki)',
      explanation: 'Respect du timing naturel',
      application: 'Patience dans l\'extraction, urgence dans l\'usage',
      wisdom: 'Le goût optimal a son moment précis'
    },
    {
      concept: 'Pureté (純粋 - Junsui)',
      explanation: 'Recherche de la clarté absolue',
      application: 'Bouillon transparent, goût limpide',
      wisdom: 'La pureté révèle la vérité du goût'
    }
  ];
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
            <span className="text-gray-900">Les Secrets du Dashi</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/guides/articles" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                🌳 Avancé
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Technique
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Les Secrets du Dashi
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Le bouillon fondamental de la cuisine japonaise : ingrédients, techniques et philosophie 
              du goût umami qui révolutionne toute la gastronomie nippone.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 min de lecture
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                10 décembre 2024
              </div>
              <div className="flex items-center">
                <Beaker className="w-4 h-4 mr-1" />
                Umami, Technique culinaire, Ingrédients traditionnels
              </div>
            </div>
          </div>
          
          <div className="japanese-text text-center text-gray-500">
            だしの秘密 - 日本料理の魂
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-3">L'essence invisible de la cuisine japonaise</h2>
            <p className="text-blue-800">
              Le dashi (だし) est bien plus qu'un simple bouillon. C'est l'âme invisible qui anime chaque plat japonais, 
              le secret qui transforme des ingrédients simples en symphonie gustative. Ce liquide transparent et discret 
              porte en lui des siècles de sagesse culinaire et la découverte scientifique du cinquième goût : l'umami.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">La Révélation Scientifique de l'Umami</h2>
          
          <p className="mb-6">
            En 1908, le professeur Kikunae Ikeda de l'Université impériale de Tokyo fait une découverte qui révolutionnera 
            la compréhension du goût. En analysant le kombu utilisé par sa femme pour préparer le dashi, il isole une 
            substance cristalline responsable d'un goût qu'aucun terme occidental ne peut décrire : <strong>l'umami</strong> (旨味), 
            littéralement "goût délicieux".
          </p>

          <p className="mb-6">
            Cette molécule, le <em>glutamate monosodique</em>, explique enfin pourquoi le dashi possède cette capacité 
            unique d'amplifier et d'harmoniser tous les autres goûts. Les chaînes de restaurants japonais modernes 
            construisent encore leurs recettes sur cette découverte centenaire.
          </p>
        </div>
      </div>

      {/* Umami Science */}
      <div className="bg-gray-100 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            La Science de l'Umami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {umamiScience.map((molecule, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Atom className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">{molecule.molecule}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Source :</span>
                    <p className="text-sm text-gray-600">{molecule.source}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Effet :</span>
                    <p className="text-sm text-gray-600">{molecule.effect}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Concentration :</span>
                    <p className="text-sm font-medium text-purple-700">{molecule.concentration}</p>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="text-xs text-purple-800">{molecule.discovery}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">L'Effet Synergique</h3>
            <p className="text-gray-700 mb-4">
              Le génie du dashi réside dans la synergie entre ces molécules. Quand le glutamate du kombu 
              rencontre l'inosinate du katsuobushi, l'effet umami est multiplié par 7 ! Cette découverte 
              explique pourquoi les bouillons mixtes sont infiniment plus savoureux que leurs composants individuels.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-sm text-blue-800 font-medium">
                💡 Les chaînes modernes utilisent cette science pour créer des bouillons puissants en temps record, 
                là où la tradition demandait des heures de mijotage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashi Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Les Quatre Piliers du Dashi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dashiTypes.map((type, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className={`${type.color} w-4 h-4 rounded mr-3`}></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                  <div className="japanese-text text-gray-600">{type.kanji}</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Base :</span>
                    <p className="text-gray-600">{type.base}</p>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-700">Saveur :</span>
                    <p className="text-gray-600">{type.flavor}</p>
                  </div>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Usage principal :</span>
                  <p className="text-sm text-gray-600">{type.usage}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Technique :</span>
                  <p className="text-sm text-gray-600">{type.technique}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Chaînes utilisatrices :</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {type.chains.map((chain, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {chain}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preparation Steps */}
      <div className="bg-blue-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            La Technique Parfaite : Dashi Awase
          </h2>
          
          <div className="space-y-8">
            {preparationSteps.map((step, index) => (
              <div key={index} className="bg-white border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    {step.step}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-800 mb-2">Détails techniques :</h4>
                        <ul className="space-y-1">
                          {step.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <Droplets className="w-3 h-3 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-orange-50 border border-orange-200 rounded p-3">
                          <div className="flex items-center mb-1">
                            <Thermometer className="w-4 h-4 text-orange-600 mr-2" />
                            <span className="text-sm font-semibold text-orange-800">Température</span>
                          </div>
                          <p className="text-sm text-orange-700">{step.temperature}</p>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded p-3">
                          <div className="flex items-center mb-1">
                            <Clock className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm font-semibold text-green-800">Timing</span>
                          </div>
                          <p className="text-sm text-green-700">{step.timing}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Innovations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Innovations des Chaînes Modernes
        </h2>
        
        <div className="space-y-6">
          {industrialInnovations.map((innovation, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{innovation.chain}</h3>
                  <p className="text-sm font-medium text-orange-600">{innovation.innovation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technique :</h4>
                  <p className="text-sm text-gray-600">{innovation.technique}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Bénéfice :</h4>
                  <p className="text-sm text-gray-600">{innovation.benefit}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Secret :</h4>
                  <p className="text-sm text-purple-700 font-medium">{innovation.secret}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Factors */}
      <div className="bg-green-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Facteurs de Qualité du Dashi
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Facteur</th>
                  <th className="px-6 py-4 text-left font-semibold text-green-800">Excellent</th>
                  <th className="px-6 py-4 text-left font-semibold text-yellow-800">Bon</th>
                  <th className="px-6 py-4 text-left font-semibold text-red-800">Médiocre</th>
                  <th className="px-6 py-4 text-left font-semibold text-purple-800">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {qualityFactors.map((factor, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900">{factor.factor}</td>
                    <td className="px-6 py-4 text-sm text-green-700">{factor.excellent}</td>
                    <td className="px-6 py-4 text-sm text-yellow-700">{factor.good}</td>
                    <td className="px-6 py-4 text-sm text-red-700">{factor.mediocre}</td>
                    <td className="px-6 py-4 text-sm font-medium text-purple-700">{factor.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          La Philosophie du Dashi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophy.map((concept, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 japanese-text">
                {concept.concept}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Principe :</h4>
                  <p className="text-sm text-gray-700">{concept.explanation}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Application :</h4>
                  <p className="text-sm text-gray-700">{concept.application}</p>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded p-3">
                  <h4 className="font-semibold text-teal-900 mb-1">Sagesse :</h4>
                  <p className="text-sm text-teal-800 italic">"{concept.wisdom}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Héritage Perpétuel</h2>
          
          <p className="mb-6">
            Le dashi transcende la simple technique culinaire pour devenir une philosophie du goût. 
            Des laboratoires d'Ikeda aux cuisines d'Ichiran, cette quête de l'umami parfait continue 
            d'évoluer tout en préservant son essence millénaire.
          </p>

          <p className="mb-6">
            Chaque bol de ramen dans une chaîne moderne porte en lui cette sagesse ancestrale, 
            cette compréhension profonde que la perfection culinaire naît de la simplicité maîtrisée. 
            Le dashi reste le secret invisible qui transforme des ingrédients ordinaires en expérience extraordinaire.
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-teal-900 mb-3">La Leçon Éternelle</h3>
            <p className="text-teal-800">
              Dans un monde obsédé par la complexité, le dashi nous enseigne que la vraie maîtrise 
              réside dans la compréhension profonde de quelques principes simples. C'est cette sagesse 
              que les grandes chaînes japonaises exportent dans le monde entier, un bol à la fois.
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
            
            <Link href="/guides/articles/comparatif-gyudon" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🥩</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    Comparatif des Chaînes Gyudon
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Analyse détaillée des stratégies et philosophies des trois géants du bol de bœuf.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/guides/articles"
              className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
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
