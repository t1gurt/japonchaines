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

const gustoMissions: Mission[] = [
  {
    id: 'gusto-basic',
    title: 'Première expérience au ファミレス',
    titleJapanese: 'ファミレスでの初体験',
    description: 'Découvrez l\'univers du restaurant familial japonais à travers votre première visite chez Gusto.',
    culturalContext: 'Les family restaurants (ファミレス) représentent l\'évolution de la culture familiale japonaise moderne, offrant un espace démocratique où toutes les générations se retrouvent dans un environnement décontracté mais respectueux.',
    difficulty: 'easy',
    estimatedTime: 20,
    rewards: [
      'Compréhension du concept ファミレス',
      'Maîtrise de l\'accueil et du placement',
      'Introduction aux menus illustrés'
    ],
    requiredLevel: 'beginner',
    points: 50,
    category: 'basic'
  },
  {
    id: 'gusto-cultural',
    title: 'Explorer la diversité du menu multi-générationnel',
    titleJapanese: '多世代メニューの多様性探求',
    description: 'Comprenez comment Gusto adapte son offre pour satisfaire tous les membres de la famille japonaise.',
    culturalContext: 'La philosophie de Gusto reflète la société japonaise multigénérationnelle : des hamburgers pour les enfants, des plats traditionnels pour les grands-parents, des options saines pour les parents, incarnant l\'harmonie familiale à travers la diversité culinaire.',
    difficulty: 'medium',
    estimatedTime: 35,
    rewards: [
      'Analyse des préférences générationnelles',
      'Compréhension des valeurs familiales japonaises',
      'Appréciation de l\'inclusion culinaire'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    category: 'cultural'
  },
  {
    id: 'gusto-advanced',
    title: 'Maîtriser le système de commande tactile avancé',
    titleJapanese: 'タッチパネル注文システム上級操作',
    description: 'Explorez les fonctionnalités avancées du système de commande numérique et ses options de personnalisation.',
    culturalContext: 'Gusto fut pionnier des systèmes tactiles dans la restauration japonaise, révolutionnant l\'efficacité du service tout en préservant l\'omotenashi. Cette innovation reflète la capacité japonaise à intégrer la technologie sans perdre l\'essence humaine du service.',
    difficulty: 'hard',
    estimatedTime: 45,
    rewards: [
      'Maîtrise des options de personnalisation',
      'Compréhension de l\'innovation technologique japonaise',
      'Utilisation experte des fonctionnalités cachées'
    ],
    requiredLevel: 'advanced',
    points: 150,
    category: 'advanced'
  },
  {
    id: 'gusto-relationship',
    title: 'Créer des liens avec l\'équipe multigénérationnelle',
    titleJapanese: '多世代スタッフとの関係構築',
    description: 'Développez des relations authentiques avec le personnel Gusto de différentes générations.',
    culturalContext: 'L\'équipe Gusto représente un microcosme de la société japonaise moderne : étudiants, mères au foyer, seniors actifs. Interagir avec cette diversité offre une fenêtre unique sur les dynamiques sociales contemporaines du Japon et l\'importance du respect intergénérationnel.',
    difficulty: 'medium',
    estimatedTime: 40,
    rewards: [
      'Relations intergénérationnelles authentiques',
      'Compréhension des dynamiques sociales japonaises',
      'Expérience de l\'hospitalité collective'
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

export default function GustoCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-4">
          <span className="text-4xl">🍽️</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Gusto
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez l'art du ファミレス (family restaurant) à travers Gusto, symbole de la modernité 
          familiale japonaise où se rencontrent toutes les générations dans un esprit d'harmonie et de diversité.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-orange-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {gustoMissions.map((mission, index) => {
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
                  <span className="text-xs font-semibold text-orange-600">{mission.points}pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Missions List */}
      <div className="space-y-6">
        {gustoMissions.map((mission, index) => {
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
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {mission.points} points
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-japanese mb-3">{mission.titleJapanese}</p>
                  <p className="text-gray-700 mb-4">{mission.description}</p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-2">🎌 Contexte Culturel</h4>
                    <p className="text-orange-700 text-sm leading-relaxed">{mission.culturalContext}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🏆 Récompenses</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {mission.rewards.map((reward, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
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
      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Gusto
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">🕐 Meilleurs moments</h4>
            <p className="text-orange-700 text-sm">
              Visitez en semaine entre 14h-16h pour observer les dynamiques familiales authentiques. 
              Les week-ends offrent une expérience plus animée avec trois générations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">👨‍👩‍👧‍👦 Observation familiale</h4>
            <p className="text-orange-700 text-sm">
              Observez comment les familles japonaises négocient les choix de menu, reflétant 
              les compromis et l'harmonie intergénérationnelle.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">🍽️ Navigation menu</h4>
            <p className="text-orange-700 text-sm">
              Explorez toutes les sections pour comprendre comment Gusto répond aux besoins 
              diversifiés: enfants, seniors, végétariens, allergies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">🗣️ Phrases utiles</h4>
            <p className="text-orange-700 text-sm">
              "Kazoku de kimashita" (家族で来ました) - "Je suis venu en famille"<br/>
              "Osusume wa nan desu ka" (おすすめは何ですか) - "Qu'est-ce que vous recommandez ?"
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
