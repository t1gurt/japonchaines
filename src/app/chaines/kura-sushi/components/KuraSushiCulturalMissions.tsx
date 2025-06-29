'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const kuraSushiMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'kura-sushi',
    title: 'Découvrir le concept "Muttenka" sans additifs',
    titleJapanese: '無添加「むてんか」コンセプトを発見する',
    description: 'Comprendre la philosophie révolutionnaire "sans additifs" de Kura Sushi, identifier les produits certifiés sans conservateurs, et expérimenter la différence gustative des sushi naturels dans votre première dégustation santé.',
    culturalContext: 'Le concept "Muttenka" (無添加) de Kura Sushi incarne la préoccupation croissante des Japonais pour une alimentation saine et naturelle. Cette philosophie révolutionnaire va au-delà de la restauration pour devenir un mouvement culturel japonais valorisant la pureté des ingrédients. Découvrir ce concept, c\'est comprendre l\'évolution des valeurs alimentaires japonaises contemporaines.',
    difficulty: 'easy',
    estimatedTime: 20,
    rewards: [
      'Comprendre la révolution alimentaire sans additifs',
      'Découvrir les valeurs santé japonaises modernes',
      'Expérimenter la pureté gustative naturelle'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'kura-sushi',
    title: 'Maîtriser le système Bikkura-Pon ludique',
    titleJapanese: 'ビッくらポンの楽しいシステムをマスターする',
    description: 'Participer au jeu iconique Bikkura-Pon en collectant 5 assiettes, découvrir les capsules récompenses, comprendre comment Kura Sushi a transformé le repas en expérience ludique familiale, et explorer la culture du divertissement culinaire.',
    culturalContext: 'Le système Bikkura-Pon révèle la capacité japonaise unique à transformer l\'ordinaire en extraordinaire par la gamification. Cette innovation culturelle reflète l\'importance du "tanoshimi" (plaisir) et du "kazoku no kizuna" (liens familiaux) dans la société japonaise. Participer à ce jeu, c\'est découvrir comment le Japon crée de la joie collective dans les expériences quotidiennes.',
    difficulty: 'medium',
    estimatedTime: 30,
    rewards: [
      'Expérimenter la gamification japonaise',
      'Découvrir la culture du divertissement familial',
      'Comprendre l\'innovation ludique nippone'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'kura-sushi',
    title: 'Explorer les technologies antibactériennes avancées',
    titleJapanese: '先端抗菌技術を探求する',
    description: 'Observer et comprendre les systèmes de protection antibactérienne automatique, découvrir les robots de cuisine en action, maîtriser les commandes tactiles multilingues avancées, et analyser l\'intégration technologique de pointe.',
    culturalContext: 'Les technologies antibactériennes de Kura Sushi illustrent l\'obsession japonaise pour la propreté ("kireisuki") et l\'innovation technologique appliquée à l\'hygiène alimentaire. Cette quête de perfection sanitaire révèle les standards d\'excellence japonais et leur capacité à anticiper les besoins futurs. Maîtriser ces technologies, c\'est saisir l\'avant-gardisme technologique nippon.',
    difficulty: 'hard',
    estimatedTime: 25,
    rewards: [
      'Maîtriser les innovations sanitaires japonaises',
      'Comprendre l\'excellence technologique culinaire',
      'Découvrir les standards de propreté nippons'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'kura-sushi',
    title: 'Intégrer la communauté familiale Kura',
    titleJapanese: 'くら寿司ファミリーコミュニティに統合する',
    description: 'Développer des relations avec l\'équipe sur plusieurs visites, partager l\'expérience Bikkura-Pon avec d\'autres familles, créer des liens intergénérationnels autour du jeu, et découvrir l\'esprit communautaire unique de Kura Sushi.',
    culturalContext: 'Kura Sushi crée un espace multigénérationnel unique où grands-parents, parents et enfants partagent plaisir et découvertes. Cette dynamique familiale reflète la valorisation japonaise de l\'harmonie intergénérationnelle et de l\'apprentissage mutuel. S\'intégrer dans cette communauté révèle la profondeur des liens sociaux japonais construits autour du partage culinaire.',
    difficulty: 'medium',
    estimatedTime: 120,
    rewards: [
      'Créer des liens intergénérationnels authentiques',
      'Découvrir l\'harmonie familiale japonaise',
      'Expérimenter la communauté ludique multigénérationnelle'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['cultural']
  }
];

export default function KuraSushiCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('kura-sushi-missions-completed');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const progressSteps = [
    {
      title: 'Découvreur Santé',
      description: 'Maîtrise du concept sans additifs',
      missions: ['basic'],
      icon: '🌿',
      color: 'green'
    },
    {
      title: 'Joueur Culturel',
      description: 'Expert du système Bikkura-Pon',
      missions: ['cultural'],
      icon: '🎮',
      color: 'purple'
    },
    {
      title: 'Technologue Avancé',
      description: 'Maître des innovations antibactériennes',
      missions: ['advanced'],
      icon: '🔬',
      color: 'blue'
    },
    {
      title: 'Membre Familial',
      description: 'Intégré dans la communauté multigénérationnelle',
      missions: ['relationship'],
      icon: '👨‍👩‍👧‍👦',
      color: 'pink'
    }
  ];

  const getStepStatus = (missions: string[]) => {
    return missions.every(id => completedMissions.includes(id));
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-xl shadow-lg p-8 mb-8">
      {/* ヘッダーセクション */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
          <span className="text-4xl">🎮</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Kura Sushi
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'univers révolutionnaire du kaiten-zushi sans additifs. Ces missions vous 
          guideront à travers l'innovation santé, l'expérience ludique familiale et la technologie 
          antibactérienne de pointe dans l'écosystème Kura Sushi unique.
        </p>
      </div>

      {/* Secteur de progression */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-purple-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle Kura Sushi
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
      <MissionList missions={kuraSushiMissions} chainId="kura-sushi" />

      {/* Section de conseils spéciaux Kura Sushi */}
      <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Kura Sushi
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-purple-800 mb-2">🎮 Stratégie Bikkura-Pon</h4>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Collectez 5 assiettes pour déclencher le jeu</li>
              <li>• Partagez l'excitation avec les familles voisines</li>
              <li>• Photographiez vos capsules pour créer votre collection</li>
              <li>• Observez les réactions des enfants japonais</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-pink-800 mb-2">🌿 Philosophie Muttenka</h4>
            <ul className="text-sm text-pink-700 space-y-1">
              <li>• Identifiez les symboles "sans additifs" sur les menus</li>
              <li>• Goûtez la différence avec d'autres chaînes</li>
              <li>• Discutez santé avec le personnel</li>
              <li>• Explorez les options bio et naturelles</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">⚡ Astuce Pro Kura Sushi</h4>
          <p className="text-sm text-gray-600">
            Venez avec des enfants ou une famille pour vivre pleinement l'expérience multigénérationnelle. 
            L'ambiance familiale révèle la vraie magie de Kura Sushi et facilite les interactions 
            authentiques avec les autres clients japonais.
          </p>
        </div>
      </div>

      {/* Lien vers le guide de l'expérience culturelle */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
