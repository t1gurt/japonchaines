import { Metadata } from 'next';
import Link from 'next/link';
import PhraseCard from '../components/PhraseCard';

export const metadata: Metadata = {
  title: 'Guide de conversation japonaise pour restaurants | Phrases essentielles',
  description: 'Maîtrisez les phrases japonaises essentielles pour vos visites en restaurant. Guide pratique avec prononciation et contexte culturel.',
  keywords: 'japonais conversation, phrases restaurant, prononciation japonais, voyage Japon, communication',
  openGraph: {
    title: 'Guide de conversation japonaise pour restaurants',
    description: 'Phrases essentielles pour communiquer dans les restaurants japonais',
    type: 'article',
  }
};

export default function ConversationGuidePage() {
  // Phrases essentielles organisées par situation
  const phrasesByContext = {
    arrival: [
      {
        id: 'phrase-1',
        japanese: 'いらっしゃいませ',
        hiragana: 'いらっしゃいませ',
        romaji: 'Irasshaimase',
        french: 'Bienvenue (dit par le staff)',
        context: 'Accueil à l\'entrée',
        culturalNote: 'Pas besoin de répondre, un léger signe de tête suffit',
        difficulty: 'beginner' as const
      },
      {
        id: 'phrase-2', 
        japanese: 'すみません',
        hiragana: 'すみません',
        romaji: 'Sumimasen',
        french: 'Excusez-moi',
        context: 'Pour attirer l\'attention poliment',
        culturalNote: 'Plus poli que d\'élever la voix ou de faire signe',
        difficulty: 'beginner' as const
      }
    ],
    ordering: [
      {
        id: 'phrase-3',
        japanese: 'これをお願いします',
        hiragana: 'これをおねがいします',
        romaji: 'Kore wo onegaishimasu',
        french: 'Ceci, s\'il vous plaît',
        context: 'Commander en pointant le menu',
        culturalNote: 'Plus formel et respectueux que de simplement pointer',
        difficulty: 'beginner' as const
      },
      {
        id: 'phrase-4',
        japanese: 'おすすめは何ですか？',
        hiragana: 'おすすめはなんですか？',
        romaji: 'Osusume wa nan desu ka?',
        french: 'Que recommandez-vous ?',
        context: 'Demander une recommandation',
        culturalNote: 'Montre votre confiance dans l\'expertise du personnel',
        difficulty: 'intermediate' as const
      },
      {
        id: 'phrase-5',
        japanese: 'はじめてです',
        hiragana: 'はじめてです',
        romaji: 'Hajimete desu',
        french: 'C\'est ma première fois',
        context: 'Indiquer que c\'est votre première visite',
        culturalNote: 'Déclenche souvent une aide bienveillante et des explications',
        difficulty: 'beginner' as const
      }
    ],
    eating: [
      {
        id: 'phrase-6',
        japanese: 'いただきます',
        hiragana: 'いただきます',
        romaji: 'Itadakimasu',
        french: 'Bon appétit (littéralement: je reçois humblement)',
        context: 'Avant de commencer à manger',
        culturalNote: 'Expression de gratitude envers tous ceux qui ont contribué au repas',
        difficulty: 'beginner' as const
      },
      {
        id: 'phrase-7',
        japanese: 'おいしいです',
        hiragana: 'おいしいです',
        romaji: 'Oishii desu',
        french: 'C\'est délicieux',
        context: 'Exprimer votre satisfaction pendant le repas',
        culturalNote: 'Faire ce compliment au personnel lui fait énormément plaisir',
        difficulty: 'beginner' as const
      }
    ],
    payment: [
      {
        id: 'phrase-8',
        japanese: 'お会計お願いします',
        hiragana: 'おかいけいおねがいします',
        romaji: 'Okaikei onegaishimasu',
        french: 'L\'addition, s\'il vous plaît',
        context: 'Demander l\'addition',
        culturalNote: 'Dans certains restaurants, vous payez directement à la caisse',
        difficulty: 'intermediate' as const
      },
      {
        id: 'phrase-9',
        japanese: 'ありがとうございました',
        hiragana: 'ありがとうございました',
        romaji: 'Arigatou gozaimashita',
        french: 'Merci beaucoup (passé)',
        context: 'Remercier à la fin du repas',
        culturalNote: 'La forme passée indique la gratitude pour le service reçu',
        difficulty: 'beginner' as const
      }
    ],
    departure: [
      {
        id: 'phrase-10',
        japanese: 'ごちそうさまでした',
        hiragana: 'ごちそうさまでした',
        romaji: 'Gochisousama deshita',
        french: 'Merci pour ce repas',
        context: 'En partant du restaurant',
        culturalNote: 'Expression de gratitude profonde pour le repas et l\'hospitalité',
        difficulty: 'intermediate' as const
      }
    ],
    help: [
      {
        id: 'phrase-11',
        japanese: 'アレルギーがあります',
        hiragana: 'アレルギーがあります',
        romaji: 'Arerugii ga arimasu',
        french: 'J\'ai une allergie',
        context: 'Signaler une allergie alimentaire',
        culturalNote: 'Information de sécurité importante, sera prise très au sérieux',
        difficulty: 'intermediate' as const
      },
      {
        id: 'phrase-12',
        japanese: 'すみません、わかりません',
        hiragana: 'すみません、わかりません',
        romaji: 'Sumimasen, wakarimasen',
        french: 'Excusez-moi, je ne comprends pas',
        context: 'Quand vous ne comprenez pas',
        culturalNote: 'Honestement avouer sa confusion est respecté au Japon',
        difficulty: 'beginner' as const
      }
    ]
  };

  const conversationFlow = [
    {
      speaker: 'staff',
      text: 'いらっしゃいませ',
      romaji: 'Irasshaimase',
      french: 'Bienvenue !',
      response: 'Un léger signe de tête ou sourire'
    },
    {
      speaker: 'customer',
      text: 'すみません',
      romaji: 'Sumimasen',
      french: 'Excusez-moi',
      response: 'Pour attirer l\'attention si nécessaire'
    },
    {
      speaker: 'staff',
      text: 'ご注文はいかがですか？',
      romaji: 'Gochuumon wa ikaga desu ka?',
      french: 'Que souhaitez-vous commander ?',
      response: ''
    },
    {
      speaker: 'customer',
      text: 'これをお願いします',
      romaji: 'Kore wo onegaishimasu',
      french: 'Ceci, s\'il vous plaît',
      response: 'En pointant le menu'
    },
    {
      speaker: 'staff',
      text: 'こちらでよろしいですか？',
      romaji: 'Kochira de yoroshii desu ka?',
      french: 'Ceci convient-il ?',
      response: ''
    },
    {
      speaker: 'customer',
      text: 'はい',
      romaji: 'Hai',
      french: 'Oui',
      response: 'Confirmation simple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/guides" className="hover:text-gray-900">Guides</Link>
            <span className="mx-2">›</span>
            <Link href="/guides/culture-experience" className="hover:text-gray-900">Expérience Culturelle</Link>
            <span className="mx-2">›</span>
            <span>Guide de Conversation</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Guide de conversation pour débutants
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Maîtrisez les phrases essentielles pour transformer vos visites en restaurants en véritables échanges culturels
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15 minutes de lecture
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 phrases essentielles
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">

            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">🗣️</span>
                Pourquoi le japonais change tout
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Contrairement à ce que beaucoup pensent, vous n&apos;avez pas besoin de parler couramment japonais 
                  pour créer des connexions authentiques. Quelques phrases bien choisies et prononcées avec respect 
                  transforment instantanément l&apos;atmosphère et ouvrent le cœur des Japonais.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-blue-800">
                    <strong>💡 Secret culturel :</strong> Les Japonais sont souvent anxieux à l&apos;idée de mal 
                    parler anglais. Quand vous utilisez le japonais, vous inversez la dynamique et montrez que 
                    c&apos;est vous qui faites l&apos;effort, ce qui les met à l&apos;aise et les touche profondément.
                  </p>
                </div>
              </div>
            </section>

            {/* Flux de conversation */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">💬</span>
                Flux de conversation type
              </h2>

              <div className="space-y-4">
                {conversationFlow.map((step, index) => (
                  <div key={index} className={`flex ${step.speaker === 'customer' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-sm p-4 rounded-lg ${
                      step.speaker === 'customer' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <div className="font-japanese text-lg mb-1">{step.text}</div>
                      <div className="text-sm opacity-75 mb-1">{step.romaji}</div>
                      <div className="text-sm font-medium">{step.french}</div>
                      {step.response && (
                        <div className="text-xs mt-2 opacity-75 italic">{step.response}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>💡 Astuce :</strong> Cette conversation de base fonctionne dans 90% des restaurants. 
                  Même si vous ne comprenez pas tout ce que dit le personnel, ces phrases vous mèneront 
                  à bon port !
                </p>
              </div>
            </section>

            {/* Phrases par contexte */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Phrases essentielles par situation</h2>

              <div className="space-y-8">
                {Object.entries(phrasesByContext).map(([context, phrases]) => {
                  const contextTitles = {
                    arrival: { title: 'Arrivée au restaurant', icon: '🚪' },
                    ordering: { title: 'Commander', icon: '📝' },
                    eating: { title: 'Pendant le repas', icon: '🍽️' },
                    payment: { title: 'Paiement', icon: '💳' },
                    departure: { title: 'Départ', icon: '👋' },
                    help: { title: 'Demander de l\'aide', icon: '🆘' }
                  };

                  const contextInfo = contextTitles[context as keyof typeof contextTitles];

                  return (
                    <div key={context}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">{contextInfo.icon}</span>
                        {contextInfo.title}
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phrases.map((phrase) => (
                          <PhraseCard 
                            key={phrase.id} 
                            phrase={phrase}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Conseils avancés */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Conseils pour aller plus loin
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Langage corporel et attitude</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Inclinez légèrement la tête en signe de respect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Gardez les mains visibles et évitez de pointer avec l&apos;index</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Un sourire sincère vaut mille mots</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Erreurs à éviter</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Ne pas essayer de parler fort en anglais si on ne vous comprend pas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Éviter les gestes exagérés qui peuvent mettre mal à l&apos;aise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Ne pas s&apos;impatienter - la patience est une vertu très appréciée</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-2">🌟 Le secret ultime</h4>
                  <p className="text-green-800">
                    La prononciation parfaite n&apos;est pas l&apos;objectif. Ce qui compte, c&apos;est l&apos;effort 
                    sincère et le respect que vous montrez en essayant. Les Japonais apprécient enormément 
                    cette démarche et vous le feront sentir par leur chaleur et leur aide.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Menu de navigation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
              <nav className="space-y-3">
                <Link href="/guides/culture-experience" className="block text-blue-600 hover:text-blue-800 text-sm">
                  ← Retour au guide principal
                </Link>
                <Link href="/guides/culture-experience/omotenashi" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Comprendre l&apos;Omotenashi
                </Link>
                <Link href="/guides/culture-experience/japanese-nature" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Nature humaine japonaise
                </Link>
              </nav>
            </div>

            {/* Aide-mémoire */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aide-mémoire rapide</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-japanese">すみません</div>
                  <div className="text-gray-600">Sumimasen - Excusez-moi</div>
                </div>
                <div>
                  <div className="font-japanese">これをお願いします</div>
                  <div className="text-gray-600">Kore wo onegaishimasu - Ceci SVP</div>
                </div>
                <div>
                  <div className="font-japanese">おいしいです</div>
                  <div className="text-gray-600">Oishii desu - C&apos;est délicieux</div>
                </div>
                <div>
                  <div className="font-japanese">ありがとうございます</div>
                  <div className="text-gray-600">Arigatou gozaimasu - Merci</div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Prêt à pratiquer ?</h3>
              <p className="text-sm mb-4 opacity-90">
                Testez ces phrases lors de votre prochaine visite !
              </p>
              <Link 
                href="/type-plat/gyudon" 
                className="inline-block bg-white text-green-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Choisir un restaurant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
