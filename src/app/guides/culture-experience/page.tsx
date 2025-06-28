import { Metadata } from 'next';
import Link from 'next/link';
import ProgressTracker from './components/ProgressTracker';
import MissionCard from './components/MissionCard';
import CultureLevel from './components/CultureLevel';

export const metadata: Metadata = {
  title: 'Découvrir le Japon à travers ses chaînes de restaurants | Guide culturel complet',
  description: 'Apprenez la culture japonaise authentique à travers l\'expérience des chaînes de restaurants. Guide complet pour développer des relations et comprendre l\'omotenashi.',
  keywords: 'culture japonaise, restaurants, omotenashi, voyage Japon, apprentissage japonais, chaînes restaurants',
  openGraph: {
    title: 'Découvrir le Japon à travers ses chaînes de restaurants',
    description: 'Guide culturel complet pour comprendre le Japon à travers ses chaînes de restaurants',
    type: 'article',
  }
};

export default function CultureExperiencePage() {
  // Données d'exemple pour les missions (en réalité, ces données viendraient d'une base de données)
  const sampleMissions = [
    {
      id: 'yoshinoya-basic',
      chainId: 'yoshinoya',
      title: 'Première expérience au distributeur automatique',
      titleJapanese: '券売機での初体験',
      description: 'Découvrez la culture de l\'efficacité japonaise à travers votre première commande à Yoshinoya.',
      culturalContext: 'Les distributeurs automatiques (券売機) représentent l\'efficacité et la précision japonaises. Ils éliminent les barrières linguistiques tout en maintenant la qualité du service.',
      difficulty: 'easy' as const,
      estimatedTime: 15,
      rewards: [
        'Compréhension du système de distributeur automatique',
        'Apprentissage des phrases de base',
        'Expérience de la culture d\'efficacité japonaise'
      ],
      requiredLevel: 'beginner' as const,
      points: 50,
      prerequisites: []
    },
    {
      id: 'yoshinoya-cultural',
      chainId: 'yoshinoya',
      title: 'Observer la culture du comptoir en U',
      titleJapanese: 'U字型カウンターの文化観察',
      description: 'Comprenez pourquoi le comptoir en U de Yoshinoya favorise la communauté et l\'efficacité.',
      culturalContext: 'Le comptoir en U encourage les interactions discrètes entre clients et crée un sentiment de communauté temporaire typiquement japonais.',
      difficulty: 'medium' as const,
      estimatedTime: 25,
      rewards: [
        'Compréhension de l\'architecture sociale japonaise',
        'Observation des interactions subtiles',
        'Appréciation de l\'espace communautaire'
      ],
      requiredLevel: 'intermediate' as const,
      points: 100,
      prerequisites: ['yoshinoya-basic']
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
            <span>Expérience Culturelle</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <CultureLevel level="beginner" size="lg" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Découvrir le Japon à travers ses chaînes de restaurants
              </h1>
              <p className="text-lg text-gray-600">
                Un guide complet pour comprendre la culture japonaise authentique et développer des relations humaines significatives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Temps de lecture : 25-30 minutes
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Niveau : Tous niveaux
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
            
            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-3">🎌</span>
                  Une approche révolutionnaire de la découverte culturelle
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Contrairement aux guides touristiques traditionnels qui se concentrent sur les temples et les monuments, 
                  ce guide vous invite à découvrir l&apos;âme véritable du Japon à travers ses chaînes de restaurants. 
                  C&apos;est dans ces espaces du quotidien que se révèlent les valeurs profondes de la société japonaise : 
                  l&apos;omotenashi (hospitalité), le respect mutuel, et surtout, la capacité extraordinaire des Japonais 
                  à créer des liens authentiques une fois la barrière culturelle franchie.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-blue-800 italic">
                    <strong>💡 Notre philosophie :</strong> Les chaînes de restaurants ne sont pas seulement des lieux 
                    pour se nourrir, mais des écoles de culture vivante où chaque interaction peut transformer 
                    votre compréhension du Japon et créer des souvenirs durables.
                  </p>
                </div>
              </div>
            </section>

            {/* Part 1: Fondements culturels */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🏗️</span>
                Part 1 : Les fondements culturels des chaînes japonaises
                <span className="ml-auto text-sm font-normal text-gray-500">(7-8 minutes)</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">La révolution de l&apos;omotenashi dans la restauration</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    L&apos;omotenashi (おもてなし) n&apos;est pas simplement un &quot;bon service&quot;. C&apos;est une philosophie 
                    qui consiste à anticiper les besoins de l&apos;autre sans qu&apos;il ait à les exprimer. Dans les chaînes 
                    de restaurants, cette philosophie s&apos;est industrialisée de manière géniale : chaque geste, 
                    chaque système, chaque détail est pensé pour votre confort, même dans un restaurant à 300 yens.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <strong>Exemple concret :</strong> Chez Yoshinoya, les baguettes sont placées exactement 
                      à la bonne distance, le verre d&apos;eau est rempli avant que vous n&apos;ayez soif, et le 
                      personnel observe discrètement pour intervenir au moment parfait.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">L&apos;obsession qualité : pourquoi les chaînes japonaises dominent le monde</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Au Japon, il n&apos;y a pas de compromis sur la qualité, même dans le fast-food. Cette mentalité 
                    du &quot;kaizen&quot; (amélioration continue) fait qu&apos;une chaîne comme Sukiya améliore 
                    constamment ses recettes, ses processus, et même l&apos;angle de présentation de ses plats.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">L&apos;harmonie entre tradition et innovation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Les chaînes japonaises réussissent le tour de force de combiner efficacité moderne et 
                    respect des traditions. Les distributeurs automatiques coexistent avec les techniques 
                    culinaires séculaires, créant une expérience unique au monde.
                  </p>
                </div>
              </div>
            </section>

            {/* Part 2: Bases linguistiques */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🗣️</span>
                Part 2 : Bases linguistiques pour créer des connexions
                <span className="ml-auto text-sm font-normal text-gray-500">(8-10 minutes)</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-yellow-800">
                    <strong>🔑 Clé essentielle :</strong> Utiliser ne serait-ce qu&apos;un peu de japonais transforme 
                    instantanément votre relation avec le personnel. C&apos;est le signal universel que vous 
                    respectez leur culture et que vous faites un effort.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Phrases essentielles pour briser la glace</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="font-japanese text-lg mb-1">いらっしゃいませ</div>
                      <div className="text-sm text-gray-600 mb-1">Irasshaimase</div>
                      <div className="text-sm"><strong>Situation :</strong> À votre entrée (pas besoin de répondre)</div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="font-japanese text-lg mb-1">すみません</div>
                      <div className="text-sm text-gray-600 mb-1">Sumimasen</div>
                      <div className="text-sm"><strong>Situation :</strong> Pour attirer l&apos;attention poliment</div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="font-japanese text-lg mb-1">これをお願いします</div>
                      <div className="text-sm text-gray-600 mb-1">Kore wo onegaishimasu</div>
                      <div className="text-sm"><strong>Situation :</strong> Pour commander (en pointant le menu)</div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="font-japanese text-lg mb-1">ありがとうございます</div>
                      <div className="text-sm text-gray-600 mb-1">Arigatou gozaimasu</div>
                      <div className="text-sm"><strong>Situation :</strong> Remerciement formel</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Phrases pour montrer votre appréciation</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <span className="font-japanese text-lg">おいしいです</span>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600">Oishii desu</div>
                        <div className="text-sm text-blue-800">&quot;C&apos;est délicieux&quot; - Cette phrase simple fait briller les yeux du personnel</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <span className="font-japanese text-lg">はじめてです</span>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600">Hajimete desu</div>
                        <div className="text-sm text-blue-800">&quot;C&apos;est ma première fois&quot; - Déclenche souvent une aide bienveillante</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Part 3: Plan d'expérience progressive */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">📈</span>
                Part 3 : Plan d&apos;expérience culturelle progressive
                <span className="ml-auto text-sm font-normal text-gray-500">(8-10 minutes)</span>
              </h2>

              <div className="space-y-8">
                {/* Missions d'exemple */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Vos premières missions culturelles</h3>
                  <div className="space-y-4">
                    {sampleMissions.map((mission) => (
                      <MissionCard 
                        key={mission.id} 
                        mission={mission} 
                        userLevel="beginner"
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">🎯 Votre progression personnalisée</h4>
                  <p className="text-purple-800 mb-4">
                    Ce système s&apos;adapte à votre rythme. Chaque mission accomplie débloqueque de nouvelles expériences 
                    et vous fait progresser dans votre compréhension de la culture japonaise.
                  </p>
                  <Link 
                    href="/guides/culture-experience/conversation"
                    className="inline-flex items-center text-purple-700 hover:text-purple-900 font-medium"
                  >
                    Découvrir le guide de conversation détaillé
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Navigation vers autres articles */}
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Approfondissez votre compréhension</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/guides/culture-experience/omotenashi" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🏮</span>
                    <h3 className="text-lg font-semibold text-gray-900">Comprendre l&apos;Omotenashi</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Plongez dans la philosophie de l&apos;hospitalité japonaise et découvrez comment elle transforme chaque interaction.</p>
                </Link>

                <Link href="/guides/culture-experience/japanese-nature" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">❤️</span>
                    <h3 className="text-lg font-semibold text-gray-900">La nature humaine japonaise</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Découvrez pourquoi les Japonais semblent distants au premier abord et comment créer des liens authentiques.</p>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progression tracker exemple */}
            <ProgressTracker 
              stats={{
                totalMissions: 50,
                completedMissions: 2,
                chainsVisited: 1,
                totalChains: 47,
                cultureLevel: 'beginner',
                nextLevelProgress: 15,
                totalPoints: 150,
                relationshipCount: 0
              }}
            />

            {/* Menu de navigation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Guides connexes</h3>
              <nav className="space-y-3">
                <Link href="/guides/culture-experience/conversation" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Guide de conversation
                </Link>
                <Link href="/guides/culture-experience/omotenashi" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Comprendre l&apos;Omotenashi
                </Link>
                <Link href="/guides/culture-experience/japanese-nature" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Nature humaine japonaise
                </Link>
                <Link href="/type-plat/gyudon" className="block text-blue-600 hover:text-blue-800 text-sm">
                  Commencer par les gyudon
                </Link>
              </nav>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Prêt à commencer ?</h3>
              <p className="text-sm mb-4 opacity-90">
                Visitez votre premier restaurant et commencez votre aventure culturelle !
              </p>
              <Link 
                href="/chaines/yoshinoya" 
                className="inline-block bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Commencer chez Yoshinoya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
