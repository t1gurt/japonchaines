'use client';

import React from 'react';
import { Clock, Users, Utensils, Heart } from 'lucide-react';

interface Mission {
  id: string;
  title: string;
  titleJapanese: string;
  description: string;
  culturalContext: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: number;
  rewards: string[];
  requiredLevel: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  category: 'basic' | 'cultural' | 'advanced' | 'relationship';
}

const familyRestaurantCategoryMissions: Mission[] = [
  {
    id: 'family-restaurant-basic',
    title: 'Maîtriser l\'écosystème ファミレス japonais',
    titleJapanese: 'ファミレス生態系の習得',
    description: 'Comparez et contrastez les trois approches du family restaurant pour comprendre la diversité de ce concept japonais.',
    culturalContext: 'Le ファミレス représente l\'évolution de la structure familiale japonaise moderne : de la tradition rigide vers l\'adaptabilité sociale. Ces espaces incarnent la démocratisation du dining out et la recherche d\'équilibre entre individualité et harmonie collective, révélant les aspirations contemporaines de la société nippone.',
    difficulty: 'easy',
    estimatedTime: 30,
    rewards: [
      'Vision panoramique du concept ファミレス',
      'Compréhension des variantes culturelles',
      'Analyse comparative des modèles'
    ],
    requiredLevel: 'beginner',
    points: 50,
    category: 'basic'
  },
  {
    id: 'family-restaurant-cultural',
    title: 'Analyser l\'évolution des valeurs familiales japonaises',
    titleJapanese: '日本家族価値観の変遷分析',
    description: 'Explorez comment les ファミレス reflètent et façonnent les nouvelles dynamiques familiales du Japon contemporain.',
    culturalContext: 'Les family restaurants japonais sont des laboratoires sociaux où se négocient les nouveaux codes familiaux : égalité des choix entre générations, inclusion des goûts individuels, adaptation aux contraintes temporelles modernes. Ils révèlent la transition subtile d\'une société hiérarchique vers un modèle plus horizontal.',
    difficulty: 'medium',
    estimatedTime: 45,
    rewards: [
      'Compréhension profonde des mutations sociales',
      'Analyse des nouveaux codes familiaux',
      'Appréciation de l\'adaptabilité culturelle japonaise'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    category: 'cultural'
  },
  {
    id: 'family-restaurant-advanced',
    title: 'Décrypter les stratégies de positionnement différencié',
    titleJapanese: '差別化ポジショニング戦略解読',
    description: 'Analysez comment Gusto, Jonathan\'s et Jolly Pasta créent des identités distinctes dans le même segment.',
    culturalContext: 'La sophistication du marché ファミレス illustre la maturité consumériste japonaise : même dans la restauration familiale, des niches précises émergent (populaire, premium, spécialisé). Cette segmentation révèle comment le Japon transforme des concepts occidentaux en créant des catégories nouvelles adaptées aux nuances culturelles locales.',
    difficulty: 'hard',
    estimatedTime: 55,
    rewards: [
      'Maîtrise des stratégies de différenciation',
      'Compréhension du marketing culturel japonais',
      'Analyse experte des positionnements de marque'
    ],
    requiredLevel: 'advanced',
    points: 150,
    category: 'advanced'
  },
  {
    id: 'family-restaurant-relationship',
    title: 'Construire des relations dans l\'écosystème familial japonais',
    titleJapanese: '日本家族エコシステムでの関係構築',
    description: 'Développez des connexions authentiques en naviguant entre les différents environnements ファミレス.',
    culturalContext: 'Maîtriser les relations dans l\'univers ファミレス signifie comprendre les codes subtils de chaque environnement : familiarité démocratique chez Gusto, raffinement décontracté chez Jonathan\'s, convivialité passionnée chez Jolly Pasta. Cette adaptabilité relationnelle reflète la sophistication sociale japonaise.',
    difficulty: 'medium',
    estimatedTime: 50,
    rewards: [
      'Flexibilité relationnelle multiculturelle',
      'Maîtrise des codes sociaux différenciés',
      'Réseau social diversifié dans l\'écosystème ファミレス'
    ],
    requiredLevel: 'intermediate',
    points: 200,
    category: 'relationship'
  }
];

const difficultyConfig = {
  easy: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', label: 'Facile' },
  medium: { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', label: 'Moyen' },
  hard: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', label: 'Difficile' }
};

const categoryIcons = {
  basic: Clock,
  cultural: Users,
  advanced: Utensils,
  relationship: Heart
};

export default function FamilyRestaurantCategoryCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-600 to-pink-600 rounded-full mb-4">
          <span className="text-4xl">👨‍👩‍👧‍👦</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles ファミリーレストラン
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'évolution de la famille japonaise moderne à travers l'écosystème des family restaurants, 
          véritables laboratoires sociaux où se réinventent les liens intergénérationnels et les valeurs contemporaines.
        </p>
      </div>

      {/* Category Overview */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-amber-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🏗️</span>
          Architecture Culturelle du ファミレス
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🍽️</span>
              <h4 className="font-semibold text-orange-800">Gusto - Diversité</h4>
            </div>
            <p className="text-orange-700 text-sm">
              Modèle démocratique représentant la société multigénérationnelle japonaise dans sa richesse et sa complexité.
            </p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🥂</span>
              <h4 className="font-semibold text-blue-800">Jonathan's - Raffinement</h4>
            </div>
            <p className="text-blue-700 text-sm">
              Évolution sophistiquée incarnant l'aspiration de la classe moyenne vers un lifestyle occidental raffiné.
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">🍝</span>
              <h4 className="font-semibold text-green-800">Jolly Pasta - Spécialisation</h4>
            </div>
            <p className="text-green-700 text-sm">
              Maîtrise de l'adaptation culturelle transformant l'exotisme italien en expérience familiale accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-amber-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle Master
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {familyRestaurantCategoryMissions.map((mission, index) => {
            const IconComponent = categoryIcons[mission.category];
            const difficulty = difficultyConfig[mission.difficulty];
            
            return (
              <div key={mission.id} className={`p-4 rounded-lg border-2 ${difficulty.border} ${difficulty.bg}`}>
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`w-5 h-5 ${difficulty.color}`} />
                  <span className={`text-xs font-medium ${difficulty.color}`}>
                    {difficulty.label}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{mission.title}</h4>
                <p className="text-xs text-gray-600 mb-2">{mission.titleJapanese}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{mission.estimatedTime}min</span>
                  <span className="text-xs font-semibold text-amber-600">{mission.points}pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Missions List */}
      <div className="space-y-6">
        {familyRestaurantCategoryMissions.map((mission, index) => {
          const IconComponent = categoryIcons[mission.category];
          const difficulty = difficultyConfig[mission.difficulty];
          
          return (
            <div key={mission.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${difficulty.bg} ${difficulty.border} border-2 flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${difficulty.color}`} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{mission.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficulty.bg} ${difficulty.color}`}>
                      {difficulty.label}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      {mission.points} points
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-japanese mb-3">{mission.titleJapanese}</p>
                  <p className="text-gray-700 mb-4">{mission.description}</p>
                  
                  <div className="bg-gradient-to-r from-amber-50 to-pink-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-amber-800 mb-2">🎌 Contexte Culturel Master</h4>
                    <p className="text-amber-700 text-sm leading-relaxed">{mission.culturalContext}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🏆 Récompenses</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {mission.rewards.map((reward, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-amber-500 mr-2">•</span>
                            {reward}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📋 Détails</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Durée estimée:</span>
                          <span className="font-medium">{mission.estimatedTime} minutes</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Niveau requis:</span>
                          <span className="font-medium capitalize">{mission.requiredLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Catégorie:</span>
                          <span className="font-medium capitalize">{mission.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Synthesis Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-pink-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎭</span>
          Synthèse Culturelle ファミレス
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">🏛️ Révolution sociale</h4>
            <p className="text-amber-700 text-sm">
              Les ファミレス incarnent la démocratisation du restaurant au Japon, brisant les codes 
              traditionnels du dining out pour créer des espaces inclusifs multigénérationnels.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">🌏 Adaptation culturelle</h4>
            <p className="text-amber-700 text-sm">
              Chaque chaîne révèle une stratégie unique d'adaptation des influences occidentales 
              aux sensibilités japonaises, créant de nouvelles formes d'authenticité.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">👥 Laboratoire familial</h4>
            <p className="text-amber-700 text-sm">
              Ces espaces sont des observatoires privilégiés des mutations familiales japonaises : 
              de la hiérarchie traditionnelle vers l'harmonie négociée.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-amber-800 mb-2">🔮 Vision d'avenir</h4>
            <p className="text-amber-700 text-sm">
              L'écosystème ファミレス préfigure l'évolution sociale japonaise vers plus d'individualité 
              dans le respect de l'harmonie collective.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-amber-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
