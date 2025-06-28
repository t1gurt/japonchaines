import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comprendre l\'Omotenashi : L\'hospitalité japonaise authentique',
  description: 'Découvrez la véritable signification de l\'omotenashi et comment cette philosophie transforme l\'expérience dans les restaurants japonais.',
  keywords: 'omotenashi, hospitalité japonaise, service client Japon, culture japonaise, philosophie service',
  openGraph: {
    title: 'Comprendre l\'Omotenashi : L\'hospitalité japonaise',
    description: 'La philosophie de l\'hospitalité japonaise expliquée à travers les chaînes de restaurants',
    type: 'article',
  }
};

export default function OmotenashiPage() {
  const omotenashiPillars = [
    {
      pillar: 'Sassuru (察する)',
      japanese: '察する力',
      title: 'L\'art de percevoir sans qu\'on vous dise',
      description: 'Anticiper les besoins avant qu\'ils ne soient exprimés',
      examples: [
        'Votre verre d\'eau est rempli avant d\'être vide',
        'Les serviettes supplémentaires apparaissent sans que vous les demandiez',
        'Le personnel observe discrètement votre rythme de repas'
      ],
      restaurantExample: 'Chez Yoshinoya, le personnel remarque si c\'est votre première fois et s\'assure que vous comprenez le système sans vous faire sentir novice.'
    },
    {
      pillar: 'Kanpeki (完璧)',
      japanese: '完璧主義',
      title: 'La perfection dans les moindres détails',
      description: 'Aucun compromis n\'est acceptable, même pour un service rapide',
      examples: [
        'Chaque grain de riz est à sa place dans le bol',
        'La température des plats est surveillée constamment',
        'L\'espace de travail est nettoyé après chaque client'
      ],
      restaurantExample: 'Même dans un fast-food comme Sukiya, chaque commande est préparée avec le même soin qu\'un restaurant gastronomique.'
    },
    {
      pillar: 'Sonkei (尊敬)',
      japanese: '相互尊重',
      title: 'Le respect mutuel authentique',
      description: 'Client et personnel se respectent mutuellement en tant qu\'êtres humains',
      examples: [
        'Le personnel vous accueille avec une révérence sincère',
        'Votre choix est respecté sans jugement',
        'La relation reste professionnelle mais chaleureuse'
      ],
      restaurantExample: 'Dans les izakaya comme Torikizoku, même ivre, vous serez traité avec le même respect qu\'un client sobre.'
    },
    {
      pillar: 'Kansha (感謝)',
      japanese: '感謝の表現',
      title: 'La gratitude comme foundation',
      description: 'Reconnaissance profonde pour l\'opportunité de servir et d\'être servi',
      examples: [
        'Chaque "arigatou gozaimasu" est sincère',
        'Le service est vu comme un privilège, pas une obligation',
        'La gratitude s\'exprime dans chaque geste'
      ],
      restaurantExample: 'Quand vous dites "gochisousama" chez Ichiran, vous participez à un ritual de gratitude millénaire.'
    },
    {
      pillar: 'Kireisa (清潔さ)',
      japanese: '清潔への執着',
      title: 'La propreté comme respect de soi et d\'autrui',
      description: 'La propreté va au-delà de l\'hygiène, c\'est une philosophie',
      examples: [
        'Chaque surface est immaculée',
        'L\'uniforme du personnel est toujours impeccable',
        'Même les espaces cachés sont maintenus propres'
      ],
      restaurantExample: 'Chez Sushiro, vous pouvez voir la cuisine ouverte et constater que chaque geste maintient la propreté absolue.'
    }
  ];

  const omotenashiEvolution = [
    {
      era: 'Période Heian (794-1185)',
      development: 'Naissance dans les cérémonies du thé',
      description: 'L\'omotenashi prend racine dans l\'art de recevoir les invités lors des cérémonies du thé, où chaque détail compte.'
    },
    {
      era: 'Période Edo (1603-1868)',
      development: 'Codification dans l\'hôtellerie',
      description: 'Les auberges (ryokan) développent un système raffiné d\'hospitalité qui influence toute la culture de service.'
    },
    {
      era: 'Ère Meiji (1868-1912)',
      development: 'Modernisation et industrialisation',
      description: 'L\'omotenashi s\'adapte aux nouveaux modes de vie tout en gardant ses valeurs fondamentales.'
    },
    {
      era: 'Après-guerre (1945-1970)',
      development: 'Démocratisation du service',
      description: 'L\'omotenashi sort des cercles élites et devient la norme dans tous les établissements, y compris les plus modestes.'
    },
    {
      era: 'Ère moderne (1970-présent)',
      development: 'Révolution des chaînes de restaurants',
      description: 'Les chaînes prouvent qu\'omotenashi et efficacité peuvent coexister, créant un modèle unique au monde.'
    }
  ];

  const chainExamples = [
    {
      chain: 'Yoshinoya',
      concept: 'Omotenashi de l\'efficacité',
      manifestation: 'Service ultra-rapide sans sacrifier la qualité humaine',
      details: [
        'Accueil chaleureux malgré le rythme soutenu',
        'Attention à votre confort même dans un espace compact',
        'Respect de votre temps avec une efficacité remarquable'
      ]
    },
    {
      chain: 'Ichiran',
      concept: 'Omotenashi de l\'intimité',
      manifestation: 'Respect absolu de votre espace personnel',
      details: [
        'Boxes individuels pour éviter toute gêne',
        'Communication par écrit pour préserver votre tranquillité',
        'Adaptation du service à votre rythme personnel'
      ]
    },
    {
      chain: 'Sushiro',
      concept: 'Omotenashi technologique',
      manifestation: 'La technologie au service de votre expérience',
      details: [
        'Tablettes multilingues pour éliminer les barrières',
        'Système de tapis roulant qui respecte votre choix',
        'Innovation constante pour améliorer votre satisfaction'
      ]
    },
    {
      chain: 'Saizeriya',
      concept: 'Omotenashi familial',
      manifestation: 'Atmosphère accueillante pour tous les âges',
      details: [
        'Patience infinie avec les enfants',
        'Adaptation du service aux besoins familiaux',
        'Prix accessibles sans compromis sur l\'accueil'
      ]
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
            <span>Omotenashi</span>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Comprendre l&apos;Omotenashi (おもてなし)
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            La philosophie japonaise de l&apos;hospitalité qui transforme chaque interaction en expérience mémorable
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              12 minutes de lecture
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Philosophie fondamentale
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
                <span className="mr-3">🏮</span>
                Au-delà du simple service client
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  L&apos;omotenashi n&apos;est pas simplement un &quot;bon service client&quot;. C&apos;est une philosophie 
                  profondément ancrée dans la culture japonaise qui considère l&apos;acte de servir et d&apos;être servi 
                  comme un échange sacré entre êtres humains. Dans les restaurants japonais, cette philosophie 
                  transforme un simple repas en expérience culturelle authentique.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">
                    おもてなし : Décomposition du terme
                  </h3>
                  <div className="space-y-2 text-red-800">
                    <p><strong>Omote (表)</strong> : La surface, le visible, l&apos;apparence</p>
                    <p><strong>Nashi (無し)</strong> : Sans, absence</p>
                    <p><strong>Signification :</strong> Servir sans façade, avec authenticité totale</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Cette absence de &quot;façade&quot; signifie que le service vient du cœur, sans calcul ni 
                  attente de retour. C&apos;est ce qui rend l&apos;expérience dans les restaurants japonais 
                  si unique et touchante.
                </p>
              </div>
            </section>

            {/* Les 5 piliers */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🏛️</span>
                Les 5 piliers de l&apos;Omotenashi
              </h2>

              <div className="space-y-8">
                {omotenashiPillars.map((pillar, index) => (
                  <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
                        <div className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="font-japanese">{pillar.japanese}</span>
                          <span>•</span>
                          <span>{pillar.pillar}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{pillar.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Manifestations concrètes :</h4>
                      <ul className="space-y-1">
                        {pillar.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="text-blue-500 mr-2">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border-l-2 border-blue-300">
                      <p className="text-sm text-blue-800">
                        <strong>En pratique :</strong> {pillar.restaurantExample}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Evolution historique */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">📜</span>
                L&apos;évolution de l&apos;Omotenashi à travers l&apos;histoire
              </h2>

              <div className="space-y-6">
                {omotenashiEvolution.map((period, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      {index !== omotenashiEvolution.length - 1 && (
                        <div className="w-0.5 h-16 bg-blue-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{period.era}</h3>
                      <h4 className="text-md font-medium text-blue-600 mb-2">{period.development}</h4>
                      <p className="text-gray-700 text-sm">{period.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Exemples par chaîne */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🍜</span>
                L&apos;Omotenashi dans les chaînes modernes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chainExamples.map((example, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.chain}</h3>
                    <h4 className="text-md font-medium text-blue-600 mb-3">{example.concept}</h4>
                    <p className="text-gray-700 text-sm mb-4">{example.manifestation}</p>
                    
                    <ul className="space-y-1">
                      {example.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600">
                          <span className="text-green-500 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Comment reconnaître et apprécier */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">👁️</span>
                Comment reconnaître et apprécier l&apos;Omotenashi
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Signes subtils à observer :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Gestes spontanés</h4>
                      <p className="text-sm text-green-800">
                        Le personnel fait des choses sans qu&apos;on le lui demande : 
                        remplir votre verre, ajuster l&apos;éclairage, apporter des serviettes.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Attention aux détails</h4>
                      <p className="text-sm text-green-800">
                        Chaque élément est parfaitement placé, de la position des baguettes 
                        à l&apos;angle de présentation des plats.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Adaptabilité discrète</h4>
                      <p className="text-sm text-green-800">
                        Le service s&apos;adapte à votre rythme et vos besoins sans que 
                        vous ayez à rien expliquer.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Sincérité des interactions</h4>
                      <p className="text-sm text-green-800">
                        Les sourires et les remerciements ne semblent pas forcés 
                        mais viennent naturellement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Comment montrer votre appréciation :</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Un simple &quot;arigatou gozaimasu&quot; sincère</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Respecter les règles non-dites (ne pas faire de bruit, ranger après soi)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Montrer que vous appréciez la nourriture avec un &quot;oishii desu&quot;</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Terminer votre repas et dire &quot;gochisousama deshita&quot; en partant</span>
                    </li>
                  </ul>
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
                <Link href="/guides/culture-experience/conversation" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Guide de conversation
                </Link>
                <Link href="/guides/culture-experience/japanese-nature" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Nature humaine japonaise
                </Link>
              </nav>
            </div>

            {/* Lexique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lexique Omotenashi</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-japanese text-base">おもてなし</div>
                  <div className="text-gray-600">Omotenashi - Hospitalité sincère</div>
                </div>
                <div>
                  <div className="font-japanese text-base">察する</div>
                  <div className="text-gray-600">Sassuru - Percevoir, deviner</div>
                </div>
                <div>
                  <div className="font-japanese text-base">完璧</div>
                  <div className="text-gray-600">Kanpeki - Perfection</div>
                </div>
                <div>
                  <div className="font-japanese text-base">尊敬</div>
                  <div className="text-gray-600">Sonkei - Respect</div>
                </div>
                <div>
                  <div className="font-japanese text-base">感謝</div>
                  <div className="text-gray-600">Kansha - Gratitude</div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Expérimentez l&apos;Omotenashi</h3>
              <p className="text-sm mb-4 opacity-90">
                Découvrez cette philosophie en action dans vos prochaines visites !
              </p>
              <Link 
                href="/guides/culture-experience" 
                className="inline-block bg-white text-red-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Plan d&apos;expérience culturelle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
