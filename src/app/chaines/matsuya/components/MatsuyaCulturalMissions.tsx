'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const matsuyaMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'matsuya',
    title: 'Maîtriser le distributeur automatique',
    titleJapanese: '券売機マスター',
    description: 'Utilisez le système de tickets automatisé de Matsuya pour commander votre premier gyūdon en autonomie complète',
    culturalContext: 'Le système de distributeurs automatiques de Matsuya représente l\'évolution de la société japonaise vers l\'efficacité technologique et l\'autonomie. Cette innovation révolutionnaire reflète la philosophie japonaise du "omotenashi" (hospitalité) à travers la technologie, permettant un service sans contact apprécié des introvertis japonais.',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      'Comprendre l\'innovation technologique japonaise',
      'Maîtriser un système automatisé typiquement japonais',
      'Expérimenter l\'autonomie dans la restauration moderne'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'matsuya',
    title: 'Explorer la philosophie "teishoku"',
    titleJapanese: '定食文化探究',
    description: 'Commandez un set complet (teishoku) et observez l\'équilibre nutritionnel et culturel des repas japonais traditionnels',
    culturalContext: 'Le concept de "teishoku" chez Matsuya illustre l\'adaptation moderne de la tradition culinaire japonaise. Ces sets complets reflètent la philosophie nutritionnelle japonaise d\'équilibre (riz, soupe, légumes, protéines) tout en s\'adaptant aux contraintes de la vie urbaine moderne. C\'est l\'essence de l\'évolution culturelle nippone.',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      'Comprendre l\'équilibre nutritionnel japonais',
      'Découvrir l\'adaptation moderne des traditions',
      'Apprécier la philosophie alimentaire japonaise'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'matsuya',
    title: 'Utiliser l\'application mobile Matsuya',
    titleJapanese: 'アプリ活用術',
    description: 'Téléchargez l\'app Matsuya, pré-commandez, utilisez les coupons et explorez les fonctionnalités digitales avancées',
    culturalContext: 'L\'application Matsuya représente l\'avant-garde de la digitalisation de la restauration japonaise. Elle incarne la fusion entre technologie de pointe et service à la clientèle, montrant comment le Japon intègre l\'innovation numérique dans les aspects les plus quotidiens de la vie tout en préservant l\'efficacité et la commodité.',
    difficulty: 'hard',
    estimatedTime: 30,
    rewards: [
      'Maîtriser la technologie mobile japonaise',
      'Comprendre l\'évolution digitale de la restauration',
      'Expérimenter l\'innovation japonaise appliquée'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'matsuya',
    title: 'Apprécier l\'efficacité sans contact',
    titleJapanese: '無接触サービス文化',
    description: 'Effectuez 5 visites en observant comment l\'automatisation influence les interactions sociales et l\'efficacité japonaise',
    culturalContext: 'L\'expérience Matsuya révèle un aspect fascinant de la société japonaise moderne : l\'appréciation du service sans contact. Cette approche reflète non seulement l\'efficacité légendaire japonaise, mais aussi le respect de l\'espace personnel et la réduction de l\'anxiété sociale, particulièrement appréciée dans une société où l\'introversion est respectée.',
    difficulty: 'medium',
    estimatedTime: 60,
    rewards: [
      'Comprendre la culture du service sans contact',
      'Apprécier l\'efficacité japonaise moderne',
      'Observer l\'évolution des interactions sociales',
      'Découvrir une nouvelle approche de l\'hospitalité'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function MatsuyaCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-4">
          <span className="text-4xl">🎫</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Matsuya
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez l'avant-garde technologique du gyūdon. Matsuya vous fait vivre 
          l'innovation japonaise : automatisation intelligente, efficacité sans contact 
          et évolution moderne de la tradition culinaire.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-red-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🚀</span>
          Votre Parcours Technologique
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">🎫</div>
            <div className="text-sm text-gray-600 mt-1">Automatisation</div>
            <div className="text-xs text-red-700 mt-2">Maîtrise technique</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">🍱</div>
            <div className="text-sm text-gray-600 mt-1">Teishoku</div>
            <div className="text-xs text-orange-700 mt-2">Culture alimentaire</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">📱</div>
            <div className="text-sm text-gray-600 mt-1">Digital</div>
            <div className="text-xs text-yellow-700 mt-2">Innovation mobile</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="text-2xl font-bold text-amber-600">⚡</div>
            <div className="text-sm text-gray-600 mt-1">Efficacité</div>
            <div className="text-xs text-amber-700 mt-2">Service moderne</div>
          </div>
        </div>
      </div>

      <MissionList missions={matsuyaMissions} chainId="matsuya" />

      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Stratégies Matsuya
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">🎫 Distributeur automatique</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Interface disponible en anglais</li>
              <li>• Cartes IC (Suica/Pasmo) acceptées</li>
              <li>• Personnel disponible pour assistance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Vocabulaire essentiel</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "券売機" (Kenbaiki) - Distributeur</li>
              <li>• "定食" (Teishoku) - Set complet</li>
              <li>• "アプリ" (Apuri) - Application</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🏆</span>
          L'Innovation Matsuya
        </h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Efficacité révolutionnaire :</strong> Matsuya a révolutionné le gyūdon par l'automatisation complète.
          </p>
          <p>
            <strong>Respect de l'introversion :</strong> Service sans contact apprécié dans la culture japonaise.
          </p>
          <p>
            <strong>Innovation continue :</strong> Application mobile, commandes avancées, technologie de pointe.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">🎌</span>
          Guide Complet de l'Expérience Culturelle
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
