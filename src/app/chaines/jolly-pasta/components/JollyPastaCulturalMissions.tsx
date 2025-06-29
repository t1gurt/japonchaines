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

const jollyPastaMissions: Mission[] = [
  {
    id: 'jollypasta-basic',
    title: 'Première expérience de l\'italien abordable au Japon',
    titleJapanese: '手頃なイタリアンの初体験',
    description: 'Découvrez comment Jolly Pasta démocratise la cuisine italienne en respectant les goûts japonais.',
    culturalContext: 'Jolly Pasta illustre le génie japonais de l\'adaptation culturelle : transformer une cuisine étrangère en la rendant accessible financièrement et gustativement aux familles japonaises, créant une version "japonisée" de l\'Italie qui conserve l\'esprit sans copier servilement.',
    difficulty: 'easy',
    estimatedTime: 20,
    rewards: [
      'Compréhension de l\'adaptation culinaire japonaise',
      'Appréciation du concept "italian-japanese"',
      'Maîtrise des codes du casual dining spécialisé'
    ],
    requiredLevel: 'beginner',
    points: 50,
    category: 'basic'
  },
  {
    id: 'jollypasta-cultural',
    title: 'Explorer la japonisation de la culture italienne',
    titleJapanese: 'イタリア文化の日本化探求',
    description: 'Analysez comment les saveurs et présentations italiennes sont adaptées aux sensibilités nippones.',
    culturalContext: 'La philosophie Jolly Pasta révèle la sophistication de l\'approche japonaise de l\'internationalisation : plutôt que d\'imiter, elle créé une synthèse originale où les techniques italiennes rencontrent les ingrédients locaux et les préférences gustatives japonaises, engendrant une nouvelle forme d\'authenticité.',
    difficulty: 'medium',
    estimatedTime: 35,
    rewards: [
      'Analyse de la fusion culturelle East-West',
      'Compréhension de l\'adaptation gustative',
      'Appréciation de la créativité culinaire japonaise'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    category: 'cultural'
  },
  {
    id: 'jollypasta-advanced',
    title: 'Maîtriser l\'art du pasta customization à la japonaise',
    titleJapanese: '和風パスタカスタマイゼーションの極意',
    description: 'Explorez les options de personnalisation qui reflètent l\'approche japonaise du sur-mesure culinaire.',
    culturalContext: 'Les possibilités de customization chez Jolly Pasta incarnent l\'obsession japonaise du détail et de la personnalisation. Cette approche transforme un plat italien standardisé en expérience unique, démontrant comment le Japon enrichit les concepts étrangers par sa culture du service et de l\'attention individuelle.',
    difficulty: 'hard',
    estimatedTime: 40,
    rewards: [
      'Maîtrise des options de personnalisation avancées',
      'Compréhension de la culture du sur-mesure japonais',
      'Création de combinations Italy-Japan originales'
    ],
    requiredLevel: 'advanced',
    points: 150,
    category: 'advanced'
  },
  {
    id: 'jollypasta-relationship',
    title: 'Créer des liens autour de la passion italienne partagée',
    titleJapanese: 'イタリア愛を通じた人間関係構築',
    description: 'Développez des relations avec staff et clients autour de l\'amour commun pour la culture italienne adaptée.',
    culturalContext: 'L\'atmosphère Jolly Pasta crée une communauté temporaire d\'amateurs d\'Italie "à la japonaise". Cette passion partagée pour une version domestiquée de l\'exotisme permet des échanges authentiques sur les goûts, les voyages, et les rêves, révélant la façon dont les Japonais apprivoisent et s\'approprient les cultures étrangères.',
    difficulty: 'medium',
    estimatedTime: 35,
    rewards: [
      'Connexions autour des passions culinaires',
      'Compréhension des aspirations culturelles japonaises',
      'Expérience de la convivialité italianisée'
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

export default function JollyPastaCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-yellow-50 to-red-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-red-600 rounded-full mb-4">
          <span className="text-4xl">🍝</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Jolly Pasta
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'art de la japonisation culinaire à travers Jolly Pasta, où la passion italienne 
          rencontre l'ingéniosité nippone pour créer une nouvelle forme d'authenticité culturelle.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-green-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {jollyPastaMissions.map((mission, index) => {
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
                  <span className="text-xs font-semibold text-green-600">{mission.points}pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Missions List */}
      <div className="space-y-6">
        {jollyPastaMissions.map((mission, index) => {
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
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {mission.points} points
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-japanese mb-3">{mission.titleJapanese}</p>
                  <p className="text-gray-700 mb-4">{mission.description}</p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-red-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">🎌 Contexte Culturel</h4>
                    <p className="text-green-700 text-sm leading-relaxed">{mission.culturalContext}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🏆 Récompenses</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {mission.rewards.map((reward, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
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
      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-red-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Jolly Pasta
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-800 mb-2">🍝 Personnalisation pasta</h4>
            <p className="text-green-700 text-sm">
              Explorez toutes les options de sauce, fromage et garniture. Chaque combinaison 
              révèle une approche différente de l'adaptation italienne.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 mb-2">🇮🇹 Ambiance italianisée</h4>
            <p className="text-green-700 text-sm">
              Observez les éléments décoratifs "italiens" : ils révèlent la perception 
              japonaise de l'Italie, souvent plus romantique que la réalité.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 mb-2">👨‍🍳 Technique fusion</h4>
            <p className="text-green-700 text-sm">
              Demandez des informations sur la préparation : vous découvrirez des 
              techniques japonaises appliquées aux recettes italiennes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 mb-2">🗣️ Phrases italienisées</h4>
            <p className="text-green-700 text-sm">
              "Pasta ga totemo oishii desu" (パスタがとてもおいしいです) - "Les pâtes sont délicieuses"<br/>
              "Italia-fū desu ne" (イタリア風ですね) - "C'est dans le style italien"
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
