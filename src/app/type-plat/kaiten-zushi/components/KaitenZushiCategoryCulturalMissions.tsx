'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const kaitenZushiCategoryMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'kaiten-zushi-category',
    title: 'Comprendre la révolution du sushi tournant',
    titleJapanese: '回転寿司革命を理解する',
    description: 'Explorer l\'histoire révolutionnaire du kaiten-zushi depuis 1958, comprendre comment Yoshiaki Shiraishi a démocratisé le sushi, découvrir l\'impact social de cette innovation, et expérimenter la transformation culturelle du Japon moderne.',
    culturalContext: 'Le kaiten-zushi représente une révolution culturelle majeure qui a transformé le sushi d\'un art élitiste en plaisir populaire. Cette démocratisation illustre l\'évolution sociale du Japon post-guerre, où l\'égalité d\'accès à la qualité culinaire est devenue une valeur fondamentale. Comprendre cette révolution, c\'est saisir la transformation profonde de la société japonaise contemporaine.',
    difficulty: 'easy',
    estimatedTime: 20,
    rewards: [
      'Comprendre la démocratisation culinaire japonaise',
      'Découvrir l\'innovation sociale nippone',
      'Saisir l\'évolution post-guerre du Japon'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'kaiten-zushi-category',
    title: 'Maîtriser la fusion tradition-modernité',
    titleJapanese: '伝統と現代の融合をマスターする',
    description: 'Analyser comment les trois approches distinctes (Sushiro technologique, Kura Sushi ludique, Hama Sushi économique) préservent et réinventent la tradition sushi, découvrir les points communs et différences culturelles.',
    culturalContext: 'Le kaiten-zushi incarne parfaitement le concept japonais de "wakon-yōsai" (esprit japonais, techniques occidentales) en adaptant l\'innovation moderne aux valeurs traditionnelles. Cette synthèse révèle la capacité unique du Japon à préserver son essence culturelle tout en embrassant le progrès. Maîtriser cette fusion, c\'est comprendre le génie adaptatif de la civilisation japonaise.',
    difficulty: 'medium',
    estimatedTime: 35,
    rewards: [
      'Découvrir la synthèse tradition-innovation',
      'Comprendre l\'adaptabilité culturelle japonaise',
      'Maîtriser le concept wakon-yōsai'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'kaiten-zushi-category',
    title: 'Analyser l\'écosystème familial multigénérationnel',
    titleJapanese: '多世代家族エコシステムを分析する',
    description: 'Observer et analyser les dynamiques familiales dans les trois chaînes, comprendre comment le kaiten-zushi crée des espaces de transmission intergénérationnelle, identifier les nuances culturelles de chaque approche familiale.',
    culturalContext: 'Le kaiten-zushi a créé un espace social unique where grands-parents, parents et enfants partagent découvertes et traditions. Cette alchimie multigénérationnelle révèle l\'importance cruciale de la transmission familiale dans la culture japonaise et comment l\'innovation peut renforcer les liens traditionnels. Analyser cet écosystème dévoile la profondeur des structures sociales japonaises.',
    difficulty: 'hard',
    estimatedTime: 45,
    rewards: [
      'Maîtriser les dynamiques familiales japonaises',
      'Comprendre la transmission intergénérationnelle',
      'Analyser l\'innovation sociale nippone'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'kaiten-zushi-category',
    title: 'S\'intégrer dans la communauté kaiten-zushi globale',
    titleJapanese: '回転寿司グローバルコミュニティに統合する',
    description: 'Créer des liens authentiques dans les trois chaînes, développer une compréhension comparative des cultures d\'entreprise, devenir un ambassadeur culturel du kaiten-zushi, et contribuer à la communauté internationale.',
    culturalContext: 'La maîtrise de l\'écosystème kaiten-zushi complet révèle la richesse de la diversité japonaise dans l\'unité. Cette intégration multichaîne illustre comment le Japon cultive l\'excellence par la compétition bienveillante et l\'innovation continue. Devenir membre de cette communauté globale, c\'est accéder à l\'essence même de l\'hospitalité et de l\'innovation japonaise contemporaine.',
    difficulty: 'medium',
    estimatedTime: 180,
    rewards: [
      'Devenir ambassadeur culturel kaiten-zushi',
      'Maîtriser l\'écosystème complet japonais',
      'Créer un réseau communautaire authentique'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['cultural']
  }
];

export default function KaitenZushiCategoryCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('kaiten-zushi-category-missions-completed');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const progressSteps = [
    {
      title: 'Historien Révolutionnaire',
      description: 'Compréhension de la démocratisation sushi',
      missions: ['basic'],
      icon: '📚',
      color: 'blue'
    },
    {
      title: 'Synthésiste Culturel',
      description: 'Maître de la fusion tradition-modernité',
      missions: ['cultural'],
      icon: '⚖️',
      color: 'purple'
    },
    {
      title: 'Analyste Familial',
      description: 'Expert des dynamiques multigénérationnelles',
      missions: ['advanced'],
      icon: '🔬',
      color: 'green'
    },
    {
      title: 'Ambassadeur Global',
      description: 'Intégré dans l\'écosystème complet',
      missions: ['relationship'],
      icon: '🌏',
      color: 'orange'
    }
  ];

  const getStepStatus = (missions: string[]) => {
    return missions.every(id => completedMissions.includes(id));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 rounded-xl shadow-lg p-8 mb-8">
      {/* ヘッダーセクション */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-4">
          <span className="text-4xl">🍣</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Kaiten-zushi Maîtres
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'univers complet du sushi tournant japonais. Ces missions maîtres vous 
          guideront à travers la compréhension holistique de la révolution kaiten-zushi, 
          de son impact social et de sa contribution unique à la culture culinaire mondiale.
        </p>
      </div>

      {/* Secteur de progression */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle Kaiten-zushi Maître
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {progressSteps.map((step, index) => {
            const isCompleted = getStepStatus(step.missions);
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isCompleted
                    ? `bg-${step.color}-50 border-${step.color}-200`
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="text-center">
                  <div className={`text-2xl mb-2 ${isCompleted ? '' : 'grayscale'}`}>
                    {step.icon}
                  </div>
                  <h4 className={`font-medium text-sm ${
                    isCompleted ? `text-${step.color}-800` : 'text-gray-600'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs mt-1 ${
                    isCompleted ? `text-${step.color}-600` : 'text-gray-500'
                  }`}>
                    {step.description}
                  </p>
                  {isCompleted && (
                    <div className={`mt-2 text-${step.color}-600`}>
                      <span className="text-xs font-medium">✓ Complété</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Liste des missions */}
      <MissionList missions={kaitenZushiCategoryMissions} chainId="kaiten-zushi-category" />

      {/* Section de conseils spéciaux Catégorie */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Kaiten-zushi Maîtres
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">🎯 Approche Comparative</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Visitez les 3 chaînes dans la même semaine</li>
              <li>• Prenez des notes sur les différences culturelles</li>
              <li>• Observez les clientèles spécifiques</li>
              <li>• Comparez les innovations technologiques</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-teal-800 mb-2">🌸 Stratégie Saisonnière</h4>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>• Explorez les variations saisonnières</li>
              <li>• Identifiez les traditions préservées</li>
              <li>• Découvrez les innovations récentes</li>
              <li>• Participez aux événements spéciaux</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-cyan-800 mb-2">👥 Perspective Sociale</h4>
            <ul className="text-sm text-cyan-700 space-y-1">
              <li>• Observez les dynamiques familiales</li>
              <li>• Identifiez les groupes sociaux</li>
              <li>• Analysez les interactions intergénérationnelles</li>
              <li>• Comprenez les codes sociaux subtils</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">⚡ Astuce Pro Kaiten-zushi Maître</h4>
          <p className="text-sm text-gray-600">
            Planifiez un "Kaiten-zushi Tour" mensuel en visitant les 3 chaînes le même jour pour 
            saisir les nuances comparatives. Cette immersion intensive révèle la richesse et la 
            diversité de l'innovation japonaise dans un seul secteur culinaire.
          </p>
        </div>
      </div>

      {/* Section des chaînes associées */}
      <div className="mt-8 p-6 bg-white rounded-xl border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🏪</span>
          Écosystème Kaiten-zushi Complet
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="/chaines/sushiro" 
             className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200">
            <div className="flex items-center mb-2">
              <span className="text-blue-600 text-xl mr-2">🚀</span>
              <h4 className="font-medium text-blue-800">Sushiro</h4>
            </div>
            <p className="text-sm text-blue-600">Innovation technologique</p>
            <p className="text-xs text-blue-500 mt-1">Leader & efficiency</p>
          </a>
          <a href="/chaines/kura-sushi" 
             className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200">
            <div className="flex items-center mb-2">
              <span className="text-purple-600 text-xl mr-2">🎮</span>
              <h4 className="font-medium text-purple-800">Kura Sushi</h4>
            </div>
            <p className="text-sm text-purple-600">Innovation santé & divertissement</p>
            <p className="text-xs text-purple-500 mt-1">Muttenka & gamification</p>
          </a>
          <a href="/chaines/hama-sushi" 
             className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200">
            <div className="flex items-center mb-2">
              <span className="text-green-600 text-xl mr-2">💰</span>
              <h4 className="font-medium text-green-800">Hama Sushi</h4>
            </div>
            <p className="text-sm text-green-600">Accessibilité économique</p>
            <p className="text-xs text-green-500 mt-1">Démocratisation & qualité</p>
          </a>
        </div>
      </div>

      {/* Lien vers le guide de l'expérience culturelle */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">📚</span>
          Guide Complet de l'Expérience Culturelle
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
