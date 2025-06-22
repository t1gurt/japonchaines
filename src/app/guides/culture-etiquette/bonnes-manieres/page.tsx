import Link from 'next/link';
import { Users, Heart, CheckCircle, XCircle, AlertTriangle, Clock, Utensils, Gift } from 'lucide-react';

export default function BonnesManieres() {
  const etiquetteRules = [
    {
      category: 'Entrée et placement',
      icon: '🚪',
      dos: [
        'Attendez d\'être placé par le personnel',
        'Retirez votre chapeau à l\'intérieur',
        'Saluez d\'un hochement de tête',
        'Rangez vos affaires discrètement'
      ],
      donts: [
        'Ne vous asseyez pas sans autorisation',
        'N\'entrez pas avec un parapluie mouillé',
        'Ne criez pas pour attirer l\'attention',
        'N\'occupez pas plus de place que nécessaire'
      ],
      cultural: 'L\'hospitalité japonaise (omotenashi) commence dès votre entrée. Le personnel vous guidera naturellement.'
    },
    {
      category: 'Utilisation des baguettes',
      icon: '🥢',
      dos: [
        'Tenez-les correctement dans une main',
        'Posez-les sur le porte-baguettes',
        'Utilisez-les pour séparer la nourriture',
        'Nettoyez-les avec la serviette humide'
      ],
      donts: [
        'Ne les plantez jamais dans le riz (rappelle l\'encens funéraire)',
        'Ne pointez jamais vers quelqu\'un',
        'Ne les croisez jamais sur la table',
        'Ne passez jamais de nourriture de baguettes à baguettes'
      ],
      cultural: 'Les baguettes ont une signification spirituelle profonde. Les règles d\'usage évitent les gestes associés aux rites funéraires.'
    },
    {
      category: 'Consommation de soupe',
      icon: '🍲',
      dos: [
        'Buvez directement du bol',
        'Soulevez le bol avec les deux mains',
        'Utilisez les baguettes pour les ingrédients solides',
        'Terminez entièrement votre soupe'
      ],
      donts: [
        'N\'utilisez pas de cuillère pour la soupe miso',
        'Ne laissez pas de soupe dans le bol',
        'Ne soufflez pas sur la soupe chaude',
        'Ne trempez pas le riz dans la soupe'
      ],
      cultural: 'Boire au bol montre l\'appréciation. Laisser de la soupe peut être perçu comme du gaspillage.'
    },
    {
      category: 'Sushi et sashimi',
      icon: '🍣',
      dos: [
        'Mangez en une bouchée si possible',
        'Trempez le poisson (pas le riz) dans la sauce soja',
        'Utilisez vos doigts pour les nigiri si préféré',
        'Mangez le gingembre entre les pièces'
      ],
      donts: [
        'Ne noyez pas le sushi dans la sauce soja',
        'Ne séparez pas le poisson du riz',
        'Ne mélangez pas wasabi et sauce soja',
        'Ne gardez pas le sushi trop longtemps'
      ],
      cultural: 'Le sushi est un art. Chaque pièce est équilibrée par le chef pour être consommée telle quelle.'
    },
    {
      category: 'Boissons et service',
      icon: '🍵',
      dos: [
        'Laissez le personnel remplir votre verre',
        'Tenez votre verre quand on vous sert',
        'Servez les autres avant vous-même',
        'Remerciez à chaque service'
      ],
      donts: [
        'Ne vous servez jamais vous-même (alcool)',
        'Ne refusez pas qu\'on remplisse votre verre',
        'Ne buvez pas d\'une traite devant les autres',
        'Ne laissez jamais un verre vide trop longtemps'
      ],
      cultural: 'Servir les autres avant soi-même exprime la considération mutuelle, valeur fondamentale japonaise.'
    },
    {
      category: 'Paiement et départ',
      icon: '💴',
      dos: [
        'Payez au comptoir, pas à table',
        'Préparez l\'argent exact si possible',
        'Dites "Gochisousama" en partant',
        'Remerciez tout le personnel visible'
      ],
      donts: [
        'Ne laissez jamais de pourboire',
        'Ne payez pas à table sauf indication',
        'Ne partez pas sans remercier',
        'Ne traînez pas après avoir payé'
      ],
      cultural: 'Le pourboire peut être perçu comme insultant. Un service excellent est attendu, pas récompensé financièrement.'
    }
  ];

  const specialSituations = [
    {
      title: 'Restaurant bondé',
      scenario: 'Que faire quand il y a beaucoup de monde ?',
      advice: [
        'Attendez patiemment votre tour',
        'Respectez la file d\'attente',
        'Parlez à voix basse',
        'Libérez rapidement votre table après le repas'
      ],
      cultural: 'La patience et l\'ordre sont très valorisés. Presser le service est mal vu.'
    },
    {
      title: 'Avec des enfants',
      scenario: 'Comment se comporter avec des enfants ?',
      advice: [
        'Surveillez qu\'ils ne dérangent pas les autres',
        'Apprenez-leur les bases des baguettes',
        'Choisissez des restaurants familiaux le midi',
        'Préparez des activités silencieuses'
      ],
      cultural: 'Les enfants bruyants peuvent déranger dans la culture du respect mutuel japonaise.'
    },
    {
      title: 'Allergies ou restrictions',
      scenario: 'Comment communiquer des besoins alimentaires spéciaux ?',
      advice: [
        'Préparez une carte explicative en japonais',
        'Montrez votre carte avant de commander',
        'Soyez patient avec la vérification',
        'Remerciez pour l\'attention particulière'
      ],
      cultural: 'Le personnel prendra vos restrictions très au sérieux et vérifiera minutieusement.'
    },
    {
      title: 'Erreur de commande',
      scenario: 'Que faire si votre commande est incorrecte ?',
      advice: [
        'Appelez poliment avec "Sumimasen"',
        'Pointez gentiment le problème',
        'Restez calme et souriant',
        'Acceptez les excuses gracieusement'
      ],
      cultural: 'Les erreurs sont rares mais traitées avec beaucoup de sérieux et d\'excuses.'
    }
  ];

  const socialEtiquette = [
    {
      situation: 'Attendre une table',
      proper: 'Attendez patiemment, consultez le menu affiché',
      improper: 'Demander combien de temps encore, montrer l\'impatience'
    },
    {
      situation: 'Commander',
      proper: 'Pointez le menu, utilisez "Kore onegaishimasu" (ceci s\'il vous plaît)',
      improper: 'Crier votre commande, gesticuler excessivement'
    },
    {
      situation: 'Pendant le repas',
      proper: 'Manger à un rythme normal, apprécier en silence',
      improper: 'Parler fort, téléphoner, prendre beaucoup de photos'
    },
    {
      situation: 'Appeler le serveur',
      proper: 'Lever discrètement la main, dire "Sumimasen"',
      improper: 'Claquer des doigts, siffler, crier "Garçon"'
    },
    {
      situation: 'Finir son repas',
      proper: 'Dire "Gochisousama deshita", ranger ses baguettes',
      improper: 'Partir sans un mot, laisser la table en désordre'
    }
  ];

  const culturalInsights = [
    {
      concept: 'Omotenashi (お・も・て・な・し)',
      explanation: 'Hospitalité sincère sans attente de retour',
      impact: 'Le service exceptionnel est la norme, pas l\'exception',
      response: 'Appréciez avec gratitude, pas de pourboire nécessaire'
    },
    {
      concept: 'Wa (和)',
      explanation: 'Harmonie sociale et maintien de la paix',
      impact: 'Éviter tout comportement qui pourrait déranger autrui',
      response: 'Modérez votre voix et vos gestes'
    },
    {
      concept: 'Kuuki wo yomu (空気を読む)',
      explanation: 'Lire l\'atmosphère et s\'adapter',
      impact: 'Observer l\'ambiance avant d\'agir',
      response: 'Regardez comment se comportent les autres clients'
    },
    {
      concept: 'Rei (礼)',
      explanation: 'Respect et courtoisie dans tous les échanges',
      impact: 'Chaque interaction commence et finit par la politesse',
      response: 'Inclinez-vous légèrement, remerciez fréquemment'
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
            <Link href="/guides/culture-etiquette" className="text-gray-500 hover:text-red-600">Culture & Étiquette</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Bonnes Manières</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bonnes Manières au Restaurant
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Maîtrisez l'étiquette japonaise pour une expérience culinaire respectueuse et harmonieuse. 
              Des gestes simples qui font toute la différence.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              レストランでのマナーガイド
            </div>
          </div>
        </div>
      </div>

      {/* Etiquette Rules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Règles d'Étiquette Essentielles
        </h2>
        
        <div className="space-y-8">
          {etiquetteRules.map((rule, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{rule.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{rule.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="flex items-center font-semibold text-green-800 mb-3">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    À faire
                  </h4>
                  <ul className="space-y-2">
                    {rule.dos.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="flex items-center font-semibold text-red-800 mb-3">
                    <XCircle className="w-5 h-5 mr-2" />
                    À éviter
                  </h4>
                  <ul className="space-y-2">
                    {rule.donts.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Contexte culturel</h4>
                    <p className="text-sm text-blue-800">{rule.cultural}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Situations */}
      <div className="bg-yellow-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Situations Particulières
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialSituations.map((situation, index) => (
              <div key={index} className="bg-white border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="font-bold text-gray-900">{situation.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-4 font-medium">{situation.scenario}</p>
                
                <ul className="space-y-2 mb-4">
                  {situation.advice.map((advice, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      {advice}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-yellow-100 border border-yellow-300 rounded p-3">
                  <p className="text-xs text-yellow-800">{situation.cultural}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Etiquette */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Étiquette Sociale Comparée
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-900">Situation</th>
                <th className="px-6 py-4 text-left font-semibold text-green-800">Comportement approprié</th>
                <th className="px-6 py-4 text-left font-semibold text-red-800">Comportement à éviter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {socialEtiquette.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 font-medium text-gray-900">{item.situation}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      {item.proper}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      {item.improper}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cultural Insights */}
      <div className="bg-purple-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Concepts Culturels Fondamentaux
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {culturalInsights.map((insight, index) => (
              <div key={index} className="bg-white border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 japanese-text">
                  {insight.concept}
                </h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Signification :</h4>
                    <p className="text-sm text-gray-700">{insight.explanation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Impact au restaurant :</h4>
                    <p className="text-sm text-gray-700">{insight.impact}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800">Votre réponse :</h4>
                    <p className="text-sm text-purple-700 font-medium">{insight.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Aide-mémoire rapide
            </h2>
            <p className="text-gray-600">Les gestes essentiels à retenir</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🙇</div>
              <div className="text-sm font-medium">Saluez en inclinant la tête</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🥢</div>
              <div className="text-sm font-medium">Posez les baguettes correctement</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔇</div>
              <div className="text-sm font-medium">Parlez à voix basse</div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🙏</div>
              <div className="text-sm font-medium">Remerciez souvent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Une expérience respectueuse et enrichissante
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En suivant ces conseils, vous honorerez la culture japonaise et profiterez 
              pleinement de votre expérience culinaire.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/guides/culture-etiquette/glossaire"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
            >
              Consulter le glossaire
            </Link>
            <Link
              href="/chaines"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors text-center"
            >
              Explorer les chaînes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
