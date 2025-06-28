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

const jonathansMissions: Mission[] = [
  {
    id: 'jonathans-basic',
    title: 'Première expérience au restaurant familial haut de gamme',
    titleJapanese: '上質ファミレスでの初体験',
    description: 'Découvrez l\'élégance décontractée de Jonathan\'s et son approche raffinée du dining familial.',
    culturalContext: 'Jonathan\'s incarne l\'évolution sophistiquée du concept ファミレス, où l\'influence américaine se mêle au raffinement japonais pour créer une expérience familiale élevée sans perdre son accessibilité, reflétant l\'aspiration de la classe moyenne japonaise à un style de vie occidental raffiné.',
    difficulty: 'easy',
    estimatedTime: 25,
    rewards: [
      'Compréhension du ファミレス upscale',
      'Maîtrise de l\'ambiance décontractée-chic',
      'Appréciation du service personnalisé'
    ],
    requiredLevel: 'beginner',
    points: 50,
    category: 'basic'
  },
  {
    id: 'jonathans-cultural',
    title: 'Explorer la culture occidentale adaptée au Japon',
    titleJapanese: '日本適応型欧米文化の探求',
    description: 'Analysez comment Jonathan\'s traduit les codes du dining américain en respectant les sensibilités japonaises.',
    culturalContext: 'L\'art de Jonathan\'s réside dans sa capacité à présenter une expérience "occidentale" tout en respectant les codes japonais : portions adaptées, service attentionné, atmosphère feutrée. Cette alchimie révèle la sophistication culturelle japonaise dans l\'adoption et l\'adaptation des influences étrangères.',
    difficulty: 'medium',
    estimatedTime: 40,
    rewards: [
      'Analyse de l\'adaptation culturelle',
      'Compréhension des aspirations de la classe moyenne',
      'Appréciation de la fusion Est-Ouest'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    category: 'cultural'
  },
  {
    id: 'jonathans-advanced',
    title: 'Maîtriser l\'art du casual fine dining à la japonaise',
    titleJapanese: '和風カジュアルファインダイニングの極意',
    description: 'Explorez les subtilités du service raffiné dans un cadre décontracté, spécialité japonaise unique.',
    culturalContext: 'Jonathan\'s perfectionne un concept uniquement japonais : le "casual fine dining" où l\'excellence du service et la qualité culinaire côtoient la décontraction familiale. Cette philosophie illustre la capacité japonaise à créer de nouvelles catégories culturelles en fusionnant des concepts apparemment contradictoires.',
    difficulty: 'hard',
    estimatedTime: 50,
    rewards: [
      'Maîtrise des codes du casual fine dining',
      'Compréhension de l\'innovation culturelle japonaise',
      'Appréciation de l\'équilibre sophistication-accessibilité'
    ],
    requiredLevel: 'advanced',
    points: 150,
    category: 'advanced'
  },
  {
    id: 'jonathans-relationship',
    title: 'Créer des liens dans un environnement familial raffiné',
    titleJapanese: '上質な家族空間での人間関係構築',
    description: 'Développez des relations authentiques dans l\'atmosphère sophistiquée mais chaleureuse de Jonathan\'s.',
    culturalContext: 'L\'environnement Jonathan\'s favorise des interactions plus profondes et mesurées, reflétant l\'idéal japonais de relations humaines où la qualité prime sur la quantité. Cette atmosphère permet d\'explorer les nuances de la politesse japonaise dans un contexte de détente contrôlée.',
    difficulty: 'medium',
    estimatedTime: 45,
    rewards: [
      'Relations dans un cadre sophistiqué',
      'Compréhension des nuances relationnelles japonaises',
      'Expérience de l\'hospitalité raffinée'
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

export default function JonathansCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
          <span className="text-4xl">🥂</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Jonathan's
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'art du casual fine dining à la japonaise, où l'élégance occidentale 
          rencontre le raffinement familial nippon dans une symphonie d'hospitalité sophistiquée.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {jonathansMissions.map((mission, index) => {
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
                  <span className="text-xs font-semibold text-blue-600">{mission.points}pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Missions List */}
      <div className="space-y-6">
        {jonathansMissions.map((mission, index) => {
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
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {mission.points} points
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-japanese mb-3">{mission.titleJapanese}</p>
                  <p className="text-gray-700 mb-4">{mission.description}</p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2">🎌 Contexte Culturel</h4>
                    <p className="text-blue-700 text-sm leading-relaxed">{mission.culturalContext}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🏆 Récompenses</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {mission.rewards.map((reward, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
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

      {/* Special Tips Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Jonathan's
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">🍽️ Étiquette raffinée</h4>
            <p className="text-blue-700 text-sm">
              Adoptez une posture légèrement plus formelle qu'dans un ファミレス classique. 
              L'atmosphère encourage une conversation mesurée et respectueuse.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">👔 Code vestimentaire</h4>
            <p className="text-blue-700 text-sm">
              Smart casual recommandé. Jonathan's attire une clientèle soucieuse de son apparence, 
              reflétant l'aspiration à un lifestyle sophistiqué.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">🗣️ Interaction avec le staff</h4>
            <p className="text-blue-700 text-sm">
              Le personnel est formé à un service plus personnalisé. N'hésitez pas à demander 
              des recommandations détaillées sur les plats signature.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">🥂 Phrases élégantes</h4>
            <p className="text-blue-700 text-sm">
              "Suteki na funiki desu ne" (素敵な雰囲気ですね) - "Quelle belle atmosphère"<br/>
              "Osusume no kōsu wa arimasu ka" (おすすめのコースはありますか) - "Avez-vous un menu recommandé ?"
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
