'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const hamaSushiMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'hama-sushi',
    title: 'Maîtriser l\'accessibilité prix Hama Sushi',
    titleJapanese: 'はま寿司の価格アクセシビリティをマスターする',
    description: 'Découvrir le système de prix ultra-compétitifs de Hama Sushi, comprendre la stratégie du groupe Zensho, expérimenter la qualité accessible, et effectuer votre premier repas économique de qualité.',
    culturalContext: 'La philosophie de Hama Sushi incarne l\'idéal japonais d\'accessibilité universelle ("minna no tame ni" - pour tout le monde). Cette approche démocratique de la gastronomie reflète les valeurs d\'égalité sociale japonaise, où la qualité culinaire ne doit pas être un privilège. Découvrir ce modèle, c\'est comprendre l\'engagement social japonais pour l\'inclusion alimentaire.',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      'Comprendre l\'accessibilité culinaire japonaise',
      'Découvrir l\'égalité sociale alimentaire',
      'Expérimenter la qualité économique nippone'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'hama-sushi',
    title: 'Explorer l\'écosystème Zensho diversifié',
    titleJapanese: 'ゼンショー多様化エコシステムを探求する',
    description: 'Comprendre la connexion avec Sukiya et l\'empire Zensho, découvrir comment cette synergie crée une expérience culinaire intégrée, et explorer la philosophie de diversification alimentaire accessible.',
    culturalContext: 'Le groupe Zensho représente une approche japonaise unique de l\'écosystème alimentaire intégré, where différentes chaînes se complètent pour servir tous les besoins sociaux. Cette stratégie illustre le concept japonais de "sogo-sayou" (synergie mutuelle) appliqué à l\'industrie. Comprendre cette interconnexion révèle la pensée systémique japonaise en matière d\'entreprise sociale.',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      'Découvrir l\'écosystème alimentaire intégré',
      'Comprendre la synergie entrepreneuriale japonaise',
      'Saisir la pensée systémique nippone'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'hama-sushi',
    title: 'Décoder les innovations醤油 (shouyu) variées',
    titleJapanese: '醤油バリエーション革新を解読する',
    description: 'Identifier et goûter les différentes variétés de sauce soja proposées, comprendre les nuances régionales, maîtriser l\'art de l\'assaisonnement personnel, et découvrir la sophistication cachée dans la simplicité.',
    culturalContext: 'Les variations de shouyu chez Hama Sushi révèlent la complexité sophistiquée cachée dans l\'apparente simplicité japonaise. Cette attention aux détails illustre le concept de "kodawari" (obsession du détail) même dans l\'environnement le plus accessible. Maîtriser ces nuances, c\'est découvrir comment le Japon préserve la sophistication culturelle à tous les niveaux sociaux.',
    difficulty: 'hard',
    estimatedTime: 20,
    rewards: [
      'Maîtriser les subtilités de la sauce soja',
      'Comprendre la sophistication accessible',
      'Découvrir l\'art culinaire démocratisé'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'hama-sushi',
    title: 'S\'intégrer dans la communauté économique',
    titleJapanese: '経済的コミュニティに統合する',
    description: 'Développer des relations avec les habitués de divers milieux sociaux, observer la mixité sociale unique de Hama Sushi, créer des liens avec les familles, étudiants et travailleurs, et découvrir l\'harmonie sociale japonaise.',
    culturalContext: 'Hama Sushi crée un espace social unique where toutes les couches de la société japonaise se côtoient naturellement. Cette mixité sociale révèle l\'idéal japonais d\'harmonie entre les classes et la capacité niponne à créer de l\'unité dans la diversité économique. S\'intégrer dans cet espace social dévoile l\'authenticité des liens humains japonais au-delà des différences matérielles.',
    difficulty: 'medium',
    estimatedTime: 100,
    rewards: [
      'Créer des liens sociaux transgénérationnels',
      'Découvrir l\'harmonie sociale japonaise',
      'Expérimenter l\'unité dans la diversité'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['cultural']
  }
];

export default function HamaSushiCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('hama-sushi-missions-completed');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const progressSteps = [
    {
      title: 'Découvreur Économique',
      description: 'Maîtrise de l\'accessibilité prix',
      missions: ['basic'],
      icon: '💰',
      color: 'green'
    },
    {
      title: 'Explorateur Zensho',
      description: 'Compréhension de l\'écosystème intégré',
      missions: ['cultural'],
      icon: '🏢',
      color: 'blue'
    },
    {
      title: 'Maître Shouyu',
      description: 'Expert des variations de sauce soja',
      missions: ['advanced'],
      icon: '🥢',
      color: 'amber'
    },
    {
      title: 'Membre Communautaire',
      description: 'Intégré dans la mixité sociale',
      missions: ['relationship'],
      icon: '🤝',
      color: 'orange'
    }
  ];

  const getStepStatus = (missions: string[]) => {
    return missions.every(id => completedMissions.includes(id));
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 mb-8">
      {/* ヘッダーセクション */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-4">
          <span className="text-4xl">💰</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Hama Sushi
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez l'univers de l'accessibilité culinaire japonaise. Ces missions vous 
          guideront à travers l'innovation économique, l'écosystème Zensho intégré et la 
          sophistication accessible dans l'expérience Hama Sushi démocratique.
        </p>
      </div>

      {/* Secteur de progression */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-green-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle Hama Sushi
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
      <MissionList missions={hamaSushiMissions} chainId="hama-sushi" />

      {/* Section de conseils spéciaux Hama Sushi */}
      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Hama Sushi
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-green-800 mb-2">💰 Stratégie Économique</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Profitez des heures de pointe pour observer la diversité sociale</li>
              <li>• Comparez les prix avec d'autres chaînes du quartier</li>
              <li>• Observez les stratégies d'économie des familles japonaises</li>
              <li>• Découvrez les menus spéciaux étudiants et seniors</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-emerald-800 mb-2">🥢 Expertise Shouyu</h4>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>• Testez chaque variété de sauce soja disponible</li>
              <li>• Demandez au personnel les différences régionales</li>
              <li>• Observez les préférences des clients japonais</li>
              <li>• Créez votre propre mélange personnalisé</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">⚡ Astuce Pro Hama Sushi</h4>
          <p className="text-sm text-gray-600">
            Visitez pendant l'heure de déjeuner (11h30-13h30) pour observer la véritable mixité 
            sociale japonaise : salarymen, étudiants, familles et seniors se côtoient naturellement, 
            révélant l'harmonie sociale authentique du Japon.
          </p>
        </div>
      </div>

      {/* Lien vers le guide de l'expérience culturelle */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
