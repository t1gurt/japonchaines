import Link from 'next/link';
import { BookOpen, Users, Heart, Utensils, Star, ArrowRight, Globe, Calendar, Clock } from 'lucide-react';
import GuideViewTracker from '../../../components/GuideViewTracker';

export default function CultureEtiquettePage() {
  const sections = [
    {
      title: 'Glossaire Culinaire',
      description: 'Vocabulaire essentiel pour comprendre les menus et commander en toute confiance',
      href: '/guides/culture-etiquette/glossaire',
      icon: BookOpen,
      features: ['300+ termes traduits', 'Pronunciations incluses', 'Catégories organisées'],
      color: 'bg-blue-500'
    },
    {
      title: 'Bonnes Manières',
      description: 'Étiquette et comportements appropriés dans les restaurants japonais',
      href: '/guides/culture-etiquette/bonnes-manieres',
      icon: Users,
      features: ['Règles de savoir-vivre', 'Gestes à éviter', 'Interactions avec le personnel'],
      color: 'bg-green-500'
    }
  ];

  const culturalTips = [
    {
      title: 'Respect du silence',
      description: 'Les restaurants japonais valorisent une atmosphère calme',
      icon: '🔇',
      tip: 'Parlez à voix basse, évitez les appels téléphoniques'
    },
    {
      title: 'Patience et courtoisie',
      description: 'Le service peut sembler lent mais il est méticuleux',
      icon: '⏰',
      tip: 'Attendez patiemment, remerciez avec un sourire'
    },
    {
      title: 'Propreté et ordre',
      description: 'Maintenez votre espace de table propre',
      icon: '✨',
      tip: 'Utilisez les serviettes fournies, rangez vos affaires'
    },
    {
      title: 'Respect des règles',
      description: 'Chaque restaurant a ses propres procédures',
      icon: '📋',
      tip: 'Observez les autres clients, suivez les instructions'
    }
  ];

  const commonPhrases = [
    {
      situation: 'En entrant',
      japanese: 'いらっしゃいませ',
      romaji: 'Irasshaimase',
      french: 'Bienvenue',
      response: 'Hochement de tête ou sourire'
    },
    {
      situation: 'En partant',
      japanese: 'ありがとうございました',
      romaji: 'Arigatō gozaimashita',
      french: 'Merci beaucoup',
      response: 'どういたしまして (Dōitashimashite) - De rien'
    },
    {
      situation: 'Excusez-moi',
      japanese: 'すみません',
      romaji: 'Sumimasen',
      french: 'Excusez-moi / S\'il vous plaît',
      response: 'Pour attirer l\'attention du personnel'
    },
    {
      situation: 'C\'était délicieux',
      japanese: 'おいしかったです',
      romaji: 'Oishikatta desu',
      french: 'C\'était délicieux',
      response: 'Compliment apprécié par le personnel'
    }
  ];

  const etiquetteRules = [
    {
      category: 'Baguettes (Hashi)',
      rules: [
        'Ne jamais planter les baguettes dans le riz',
        'Ne pas pointer avec les baguettes',
        'Poser les baguettes sur le porte-baguettes'
      ],
      icon: '🥢'
    },
    {
      category: 'Soupe Miso',
      rules: [
        'Boire directement du bol',
        'Utiliser les baguettes pour les ingrédients',
        'Terminer entièrement la soupe'
      ],
      icon: '🍲'
    },
    {
      category: 'Sushi',
      rules: [
        'Manger en une bouchée si possible',
        'Tremper le poisson, pas le riz, dans la sauce soja',
        'Le gingembre nettoie le palais entre les pièces'
      ],
      icon: '🍣'
    },
    {
      category: 'Paiement',
      rules: [
        'Payer au comptoir, pas à table',
        'Le pourboire n\'est pas nécessaire',
        'Préparer l\'argent exact si possible'
      ],
      icon: '💴'
    }  ];
  return (
    <>
      <GuideViewTracker guideName="culture-etiquette" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Culture & Étiquette</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Culture & Étiquette
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Découvrez les codes culturels et les bonnes manières pour profiter pleinement 
              de votre expérience culinaire au Japon. Respect, harmonie et gratitude.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              文化とマナーガイド
            </div>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Guides Détaillés
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Link key={index} href={section.href} className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className={`${section.color} p-3 rounded-lg mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {section.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                    Consulter le guide
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Cultural Tips */}
      <div className="bg-purple-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Conseils Culturels Essentiels
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                <p className="text-xs text-purple-700 font-medium">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Phrases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Phrases Courantes au Restaurant
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commonPhrases.map((phrase, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-bold text-gray-900">{phrase.situation}</h3>
              </div>
              
              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-sm text-gray-500">Japonais:</span>
                  <div className="japanese-text text-lg">{phrase.japanese}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Pronunciation:</span>
                  <div className="italic text-gray-700">{phrase.romaji}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Français:</span>
                  <div className="font-medium">{phrase.french}</div>
                </div>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded p-3">
                <span className="text-sm text-purple-800">{phrase.response}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Etiquette Rules */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Règles d'Étiquette Fondamentales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.rules.map((rule, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à découvrir la culture culinaire japonaise ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez nos guides détaillés pour maîtriser l'art de manger au Japon 
              et enrichir votre expérience culinaire.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/guides/culture-etiquette/glossaire"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
            >
              Consulter le glossaire
            </Link>
            <Link
              href="/guides/culture-etiquette/bonnes-manieres"
              className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors text-center"
            >              Apprendre l'étiquette
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
