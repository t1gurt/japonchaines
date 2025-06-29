'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const sushiroMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'sushiro',
    title: 'Maîtriser le système tactile Sushiro',
    titleJapanese: 'スシローのタッチパネルシステムをマスターする',
    description: 'Découvrir et utiliser les tablettes tactiles de commande de Sushiro, naviguer dans les menus multilingues, comprendre le système de livraison directe au siège et effectuer votre première commande technologique.',
    culturalContext: 'Le système de tablettes tactiles de Sushiro représente l\'évolution technologique de la restauration japonaise moderne. Cette expérience illustre l\'adaptation japonaise de la technologie pour améliorer l\'efficacité tout en préservant l\'omotenashi (hospitalité). Comprendre ce système, c\'est saisir comment le Japon intègre l\'innovation pour maintenir un service de qualité accessible.',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      'Maîtriser la technologie culinaire japonaise moderne',
      'Comprendre l\'efficacité opérationnelle nippone',
      'Découvrir l\'accessibilité multilingue japonaise'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'sushiro',
    title: 'Explorer l\'empire du sushi démocratisé',
    titleJapanese: '庶民の寿司帝国を探求する',
    description: 'Engager une conversation avec le personnel sur l\'histoire de Sushiro depuis 1984, découvrir comment cette chaîne a révolutionné l\'accès au sushi au Japon, et comprendre l\'impact social de la démocratisation culinaire.',
    culturalContext: 'Sushiro a transformé le sushi d\'un mets de luxe en plaisir quotidien accessible, incarnant la philosophie japonaise de démocratisation de la qualité. Cette révolution culturelle reflète l\'évolution sociale du Japon post-guerre, où l\'accessibilité et l\'égalité alimentaire sont devenues des valeurs centrales. Comprendre cette mission, c\'est saisir la transformation sociale japonaise contemporaine.',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      'Découvrir la révolution alimentaire japonaise',
      'Comprendre la démocratisation de la gastronomie',
      'Saisir l\'évolution sociale du Japon moderne'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'sushiro',
    title: 'Décoder les innovations saisonnières premium',
    titleJapanese: '季節限定プレミアム革新を解読する',
    description: 'Identifier et commander les créations saisonnières exclusives, explorer les sushi premium de la gamme dorée et rouge, comprendre la philosophie d\'innovation constante de Sushiro, et maîtriser le vocabulaire technique des sushi d\'exception.',
    culturalContext: 'Les innovations saisonnières de Sushiro reflètent le concept japonais de "kisetsukan" (sens des saisons) appliqué à l\'industrie moderne. Cette quête permanente d\'innovation respecte les traditions culinaires tout en les réinventant. Maîtriser ces créations premium, c\'est comprendre comment le Japon concilie tradition, innovation et excellence accessible.',
    difficulty: 'hard',
    estimatedTime: 30,
    rewards: [
      'Maîtriser l\'innovation culinaire saisonnière',
      'Comprendre l\'excellence accessible japonaise',
      'Découvrir le vocabulaire technique des sushi'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'sushiro',
    title: 'Cultiver les liens familiaux Sushiro',
    titleJapanese: 'スシロー家族の絆を育む',
    description: 'Effectuer au moins 5 visites sur un mois, observer l\'évolution de votre accueil par l\'équipe, créer des liens authentiques avec le personnel régulier, et découvrir comment Sushiro crée une communauté familiale moderne.',
    culturalContext: 'Sushiro transcende le simple fast-food pour devenir un espace familial multigénérationnel, incarnant le concept de "kazoku no ba" (lieu familial). Ces relations construites dans la durée révèlent la capacité japonaise à créer de l\'authenticité et de la chaleur humaine même dans un environnement industrialisé. Cette expérience dévoile l\'essence de l\'hospitalité japonaise moderne.',
    difficulty: 'medium',
    estimatedTime: 90,
    rewards: [
      'Créer des liens familiaux authentiques',
      'Découvrir l\'hospitalité technologique japonaise',
      'Expérimenter la communauté moderne nippone'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['cultural']
  }
];

export default function SushiroCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('sushiro-missions-completed');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const progressSteps = [
    {
      title: 'Novice Technologique',
      description: 'Maîtrise des systèmes tactiles',
      missions: ['basic'],
      icon: '📱',
      color: 'blue'
    },
    {
      title: 'Explorateur Culturel',
      description: 'Compréhension de la révolution démocratique',
      missions: ['cultural'],
      icon: '🏛️',
      color: 'green'
    },
    {
      title: 'Expert Innovation',
      description: 'Maîtrise des créations premium',
      missions: ['advanced'],
      icon: '⭐',
      color: 'yellow'
    },
    {
      title: 'Membre Familial',
      description: 'Intégration dans la communauté',
      missions: ['relationship'],
      icon: '👨‍👩‍👧‍👦',
      color: 'purple'
    }
  ];

  const getStepStatus = (missions: string[]) => {
    return missions.every(id => completedMissions.includes(id));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-xl shadow-lg p-8 mb-8">
      {/* ヘッダーセクション */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-4">
          <span className="text-4xl">🍣</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Sushiro
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Plongez dans l'univers technologique du leader mondial du kaiten-zushi. Ces missions vous 
          guideront à travers l'innovation culinaire, la démocratisation du sushi et la création 
          d'une communauté familiale moderne dans l'empire Sushiro.
        </p>
      </div>

      {/* Secteur de progression */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle Sushiro
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
      <MissionList missions={sushiroMissions} chainId="sushiro" />

      {/* Section de conseils spéciaux Sushiro */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Sushiro
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-blue-800 mb-2">🎯 Optimisation Technologique</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Utilisez l'application mobile pour réserver votre table</li>
              <li>• Profitez du système de commande anticipée</li>
              <li>• Explorez les menus multilingues pour apprendre le vocabulaire</li>
              <li>• Observez l'efficacité du système de livraison directe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-cyan-800 mb-2">🌸 Stratégie Saisonnière</h4>
            <ul className="text-sm text-cyan-700 space-y-1">
              <li>• Visitez pendant les périodes de nouveautés (mars, juin, septembre)</li>
              <li>• Goûtez les créations premium aux assiettes dorées</li>
              <li>• Engagez la conversation sur les innovations récentes</li>
              <li>• Photographiez l'évolution du menu pour créer votre album Sushiro</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">⚡ Astuce Pro Sushiro</h4>
          <p className="text-sm text-gray-600">
            Visitez en semaine entre 14h et 17h pour une expérience plus détendue et une meilleure 
            interaction avec le personnel. C'est le moment idéal pour explorer les créations premium 
            et approfondir votre compréhension culturelle.
          </p>
        </div>
      </div>

      {/* Lien vers le guide de l'expérience culturelle */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
