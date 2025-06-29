import { Metadata } from 'next';
import Link from 'next/link';
import RelationshipTracker from '../components/RelationshipTracker';

export const metadata: Metadata = {
  title: 'Comprendre la nature humaine japonaise | Relations authentiques',
  description: 'Découvrez pourquoi les Japonais semblent distants et comment créer des liens authentiques grâce au japonais et aux chaînes de restaurants.',
  keywords: 'culture japonaise, relations humaines, communication interculturelle, japonais timides, liens authentiques',
  openGraph: {
    title: 'Comprendre la nature humaine japonaise',
    description: 'Comment dépasser les apparences et créer des relations authentiques au Japon',
    type: 'article',
  }
};

export default function JapaneseNaturePage() {
  // Données d'exemple pour le tracker de relations
  const sampleRelationships = [
    {
      chainId: 'yoshinoya',
      visitCount: 5,
      relationshipLevel: 'friendly' as const,
      staffInteractions: [
        {
          date: '2024-06-20',
          interaction: 'Premier sourire spontané du staff',
          japaneseUsed: true,
          staffResponse: 'warm' as const,
          notes: 'A souri quand j\'ai dit "oishii desu"'
        },
        {
          date: '2024-06-25',
          interaction: 'Reconnaissance et recommandation personnelle',
          japaneseUsed: true,
          staffResponse: 'friendly' as const,
          notes: 'M\'a recommandé le menu du jour sans que je demande'
        }
      ],
      personalNotes: 'Le staff commence à me reconnaître et semble apprécier mes efforts en japonais'
    }
  ];

  const progressionStages = [
    {
      stage: 'Première impression',
      title: 'L\'apparente froideur',
      description: 'Politesse formelle, distance respectueuse, interactions minimales',
      duration: '1-2 visites',
      characteristics: [
        'Service professionnel mais impersonnel',
        'Réponses courtes et formelles',
        'Évitement du contact visuel prolongé',
        'Gestes mécaniques et précis'
      ],
      reality: 'Cette "froideur" est en réalité de la considération pour votre espace personnel et de l\'anxiété de bien faire.',
      whatToDo: [
        'Respecter cette distance initiale',
        'Utiliser des phrases basiques en japonais',
        'Montrer de la patience et du respect',
        'Ne pas prendre la distance comme un rejet personnel'
      ]
    },
    {
      stage: 'Reconnaissance',
      title: 'Les premiers signes d\'ouverture',
      description: 'Sourires timides, légère personnalisation du service',
      duration: '3-5 visites',
      characteristics: [
        'Reconnaissance visuelle à votre arrivée',
        'Sourires plus naturels et spontanés',
        'Attention particulière à vos préférences',
        'Tentatives discrètes de conversation'
      ],
      reality: 'Votre effort en japonais et votre respect des codes ont créé une première connexion.',
      whatToDo: [
        'Continuer à utiliser le japonais avec confiance',
        'Montrer votre appréciation sincère',
        'Poser des questions simples sur les recommandations',
        'Être patient avec leurs réponses en anglais'
      ]
    },
    {
      stage: 'Amitié naissante',
      title: 'La barrière se lève',
      description: 'Conversations spontanées, conseils personnalisés, intérêt pour votre culture',
      duration: '6-10 visites',
      characteristics: [
        'Questions sur votre pays d\'origine',
        'Recommandations basées sur vos goûts',
        'Rires et plaisanteries légères',
        'Préoccupation pour votre bien-être'
      ],
      reality: 'Vous n\'êtes plus un étranger mais un invité apprécié qui fait l\'effort de comprendre leur culture.',
      whatToDo: [
        'Partager un peu de votre culture',
        'Poser des questions sur la leur',
        'Montrer de l\'intérêt pour leurs recommandations',
        'Exprimer votre gratitude pour leur gentillesse'
      ]
    },
    {
      stage: 'Relation authentique',
      title: 'L\'amitié véritable',
      description: 'Chaleur genuine, service personnalisé, relation qui dépasse le professionnel',
      duration: '10+ visites',
      characteristics: [
        'Accueil enthousiaste à votre arrivée',
        'Conversations sur la vie quotidienne',
        'Attention particulière même lors de rushes',
        'Sentiment d\'être un membre de la communauté'
      ],
      reality: 'Vous avez gagné leur confiance et leur affection. Ils vous considèrent comme un ami.',
      whatToDo: [
        'Maintenir la réciprocité dans l\'amitié',
        'Respecter leurs moments chargés',
        'Continuer à apprendre et à utiliser le japonais',
        'Apprécier ce privilège rare et précieux'
      ]
    }
  ];

  const culturalMyths = [
    {
      myth: '❌ "Les Japonais sont naturellement froids"',
      reality: '✅ Les Japonais sont prudents mais profondément chaleureux',
      explanation: 'La distance initiale est une marque de respect pour éviter d\'imposer leur présence. Une fois la confiance établie, ils sont parmi les plus chaleureux au monde.'
    },
    {
      myth: '❌ "Ils n\'aiment pas les étrangers"',
      reality: '✅ Ils sont anxieux de bien vous accueillir',
      explanation: 'Leur perfectionnisme les rend nerveux à l\'idée de ne pas vous offrir le meilleur service possible. Cette anxiété peut être perçue comme de la froideur.'
    },
    {
      myth: '❌ "Le service est robotique"',
      reality: '✅ Le service est profondément humain mais codifié',
      explanation: 'Les gestes précis et les phrases standardisées cachent une véritable préoccupation pour votre confort et votre satisfaction.'
    },
    {
      myth: '❌ "Ils ne parlent que japonais par xenophobie"',
      reality: '✅ Ils évitent l\'anglais par peur de vous embarrasser',
      explanation: 'Beaucoup préfèrent ne pas parler anglais plutôt que de mal le parler, par respect pour vous et par perfectionnisme.'
    }
  ];

  const languageImpact = [
    {
      scenario: 'Commande en anglais uniquement',
      staffReaction: 'Stress, anxiété de ne pas comprendre parfaitement',
      outcome: 'Service correct mais distance maintenue',
      illustration: 'Le staff fait de son mieux mais reste dans une position inconfortable'
    },
    {
      scenario: 'Quelques mots de japonais basique',
      staffReaction: 'Surprise positive, appréciation de l\'effort',
      outcome: 'Atmosphère plus détendue, sourires spontanés',
      illustration: 'Votre "arigatou gozaimasu" déclenche un sourire sincère'
    },
    {
      scenario: 'Conversation simple en japonais',
      staffReaction: 'Joie visible, envie d\'aider et d\'enseigner',
      outcome: 'Engagement personnel, conseils spontanés',
      illustration: 'Le staff prend le temps de vous expliquer les spécialités'
    },
    {
      scenario: 'Usage régulier du japonais avec progrès visible',
      staffReaction: 'Fierté de votre évolution, sentiment de complicité',
      outcome: 'Relation personnelle, traitement privilégié',
      illustration: 'Ils se souviennent de vos préférences et anticipent vos besoins'
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
            <span>Nature Humaine Japonaise</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Comprendre la nature humaine japonaise
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Pourquoi les Japonais semblent distants et comment créer des liens authentiques qui dureront toute une vie
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              18 minutes de lecture
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Focus : Relations humaines
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">

            {/* Introduction choquante */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">💫</span>
                La vérité qui va vous surprendre
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                  <p className="text-lg font-semibold text-blue-900 mb-3">
                    Les Japonais ne sont PAS naturellement froids ou distants.
                  </p>
                  <p className="text-blue-800">
                    Ils sont en réalité parmi les peuples les plus chaleureux, attentionnés et loyaux au monde. 
                    Leur apparente froideur initiale est une <strong>protection bienveillante</strong> pour vous éviter 
                    toute gêne ou obligation sociale que vous ne comprendriez pas.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Cette révélation change tout. Quand vous comprenez que leur distance n&apos;est pas du rejet 
                  mais de la considération, vous pouvez commencer à construire des relations extraordinaires. 
                  Les chaînes de restaurants deviennent alors des laboratoires parfaits pour expérimenter 
                  cette transformation humaine.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>🔑 La clé universelle :</strong> L&apos;usage du japonais, même basique, signale 
                    instantanément votre respect pour leur culture et votre volonté de vous adapter à leurs codes. 
                    C&apos;est le sésame qui ouvre leur cœur.
                  </p>
                </div>
              </div>
            </section>

            {/* Démanteler les mythes */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🪞</span>
                Démanteler les mythes sur les Japonais
              </h2>

              <div className="space-y-6">
                {culturalMyths.map((item, index) => (
                  <div key={index} className="border-l-4 border-red-300 bg-red-50 p-6 rounded-r-lg">
                    <div className="mb-3">
                      <div className="text-red-700 font-medium mb-2">{item.myth}</div>
                      <div className="text-green-700 font-medium">{item.reality}</div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.explanation}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">La véritable personnalité japonaise</h3>
                <p className="text-green-800 mb-4">
                  Une fois la confiance établie, les Japonais révèlent une personnalité incroyablement :
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center"><span className="text-green-600 mr-2">❤️</span> Chaleureuse</div>
                    <div className="flex items-center"><span className="text-green-600 mr-2">😄</span> Drôle</div>
                    <div className="flex items-center"><span className="text-green-600 mr-2">🤝</span> Loyale</div>
                    <div className="flex items-center"><span className="text-green-600 mr-2">🎭</span> Expressive</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center"><span className="text-green-600 mr-2">💝</span> Généreuse</div>
                    <div className="flex items-center"><span className="text-green-600 mr-2">🧸</span> Attachante</div>
                    <div className="flex items-center"><span className="text-green-600 mr-2">🌟</span> Spontanée</div>
                    <div className="flex items-center"><span className="text-green-600 mr-2">🤗</span> Bienveillante</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Progression des relations */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">📈</span>
                La progression naturelle des relations
              </h2>

              <div className="space-y-8">
                {progressionStages.map((stage, index) => (
                  <div key={index} className="relative">
                    {/* Timeline connector */}
                    {index !== progressionStages.length - 1 && (
                      <div className="absolute left-6 top-16 w-0.5 h-16 bg-blue-200"></div>
                    )}
                    
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold text-lg mr-6 flex-shrink-0">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{stage.title}</h3>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              {stage.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">{stage.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Ce que vous observez :</h4>
                            <ul className="space-y-1">
                              {stage.characteristics.map((char, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                  <span className="text-blue-500 mr-2">•</span>
                                  {char}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Comment réagir :</h4>
                            <ul className="space-y-1">
                              {stage.whatToDo.map((action, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-700">
                                  <span className="text-green-500 mr-2">•</span>
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-purple-50 p-4 rounded border-l-2 border-purple-300">
                          <p className="text-sm text-purple-800">
                            <strong>Réalité culturelle :</strong> {stage.reality}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact du japonais */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🗾</span>
                L&apos;impact magique du japonais sur les relations
              </h2>

              <div className="space-y-6">
                {languageImpact.map((scenario, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Votre approche</h4>
                        <p className="text-sm text-gray-700">{scenario.scenario}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Réaction du staff</h4>
                        <p className="text-sm text-blue-700">{scenario.staffReaction}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Résultat</h4>
                        <p className="text-sm text-green-700">{scenario.outcome}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t bg-gray-50 p-3 rounded">
                      <p className="text-sm text-gray-600 italic">
                        <strong>En pratique :</strong> {scenario.illustration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 Stratégie gagnante</h3>
                <p className="text-blue-800 mb-4">
                  Chaque mot de japonais que vous apprenez multiplie exponentiellement vos chances de créer 
                  des relations authentiques. C&apos;est un investissement qui se paie immédiatement en chaleur humaine.
                </p>
                <div className="text-sm text-blue-700">
                  <strong>Progression recommandée :</strong> Commencez par 3-4 phrases basiques, puis ajoutez 
                  une nouvelle expression à chaque visite. Vous verrez la transformation en temps réel !
                </div>
              </div>
            </section>

            {/* Témoignages et cas pratiques */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🌟</span>
                Transformations réelles observées
              </h2>

              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="font-semibold text-green-900 mb-2">Cas #1 : Yoshinoya Shibuya</h3>
                  <p className="text-green-800 text-sm mb-3">
                    Après 5 visites avec des "arigatou gozaimasu" sincères, le staff a commencé à préparer 
                    ma commande habituelle dès qu&apos;ils me voyaient arriver. Ils me gardaient même une place 
                    au comptoir pendant les heures de pointe.
                  </p>
                  <div className="text-xs text-green-700 italic">
                    Evolution : Étranger → Client reconnu → Ami de la famille
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Cas #2 : Ichiran Harajuku</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Malgré le concept de boxes individuels, utiliser le japonais a créé une connexion humaine. 
                    Le chef a commencé à personnaliser mes ramen et à me laisser des petits mots d&apos;encouragement 
                    pour mon apprentissage du japonais.
                  </p>
                  <div className="text-xs text-blue-700 italic">
                    Preuve que même les concepts les plus impersonnels ne résistent pas à l&apos;effort culturel
                  </div>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                  <h3 className="font-semibold text-purple-900 mb-2">Cas #3 : Sushiro local</h3>
                  <p className="text-purple-800 text-sm mb-3">
                    Après avoir appris à commander des recommandations en japonais, le staff a commencé à 
                    me présenter des spécialités non disponibles sur le tapis roulant. Ils m&apos;invitaient 
                    même à goûter de nouveaux produits en avant-première.
                  </p>
                  <div className="text-xs text-purple-700 italic">
                    Transformation : Client → Testeur privilégié → Membre de la communauté
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tracker de relations exemple */}
            <RelationshipTracker relationships={sampleRelationships} />

            {/* Menu de navigation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
              <nav className="space-y-3">
                <Link href="/guides/culture-experience" className="block text-blue-600 hover:text-blue-800 text-sm">
                  ← Retour au guide principal
                </Link>
                <Link href="/guides/culture-experience/conversation" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Guide de conversation
                </Link>
                <Link href="/guides/culture-experience/omotenashi" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Comprendre l&apos;Omotenashi
                </Link>
              </nav>
            </div>

            {/* Phrases clés pour créer des liens */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Phrases clés pour créer des liens</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-japanese">はじめてです</div>
                  <div className="text-gray-600">Hajimete desu - C&apos;est ma première fois</div>
                  <div className="text-xs text-blue-600">Déclenche l&apos;aide bienveillante</div>
                </div>
                <div>
                  <div className="font-japanese">おすすめは？</div>
                  <div className="text-gray-600">Osusume wa? - Que recommandez-vous?</div>
                  <div className="text-xs text-blue-600">Montre votre confiance en eux</div>
                </div>
                <div>
                  <div className="font-japanese">とてもおいしいです</div>
                  <div className="text-gray-600">Totemo oishii desu - C&apos;est très délicieux</div>
                  <div className="text-xs text-blue-600">Fait briller leurs yeux</div>
                </div>
                <div>
                  <div className="font-japanese">また来ます</div>
                  <div className="text-gray-600">Mata kimasu - Je reviendrai</div>
                  <div className="text-xs text-blue-600">Crée une attente positive</div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Commencez votre transformation</h3>
              <p className="text-sm mb-4 opacity-90">
                Chaque visite est une opportunité de créer des liens authentiques !
              </p>
              <Link 
                href="/guides/culture-experience/conversation" 
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Apprendre les phrases clés
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
