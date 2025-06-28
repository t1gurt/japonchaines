'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const nakauMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'nakau',
    title: 'Découvrir la fusion gyūdon-udon',
    titleJapanese: '牛丼とうどんの融合体験',
    description: 'Commandez un set combinant gyūdon et udon pour comprendre l\'innovation unique de Nakau qui fusionne deux piliers de la cuisine japonaise rapide',
    culturalContext: 'Nakau révolutionne la restauration rapide japonaise en combinant deux cultures culinaires distinctes sous un même toit. Cette fusion reflète la capacité japonaise à innover tout en respectant les traditions, créant une expérience authentiquement japonaise qui dépasse la simple addition de deux plats.',
    difficulty: 'easy',
    estimatedTime: 25,
    rewards: [
      'Comprendre l\'innovation culinaire japonaise moderne',
      'Expérimenter la fusion harmonieuse de deux traditions',
      'Découvrir l\'art de l\'équilibre nutritionnel japonais'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'nakau',
    title: 'Maîtriser l\'art de l\'oyako-don',
    titleJapanese: '親子丼の心を理解する',
    description: 'Commandez l\'oyako-don signature et discutez avec le personnel de la philosophie "oyako" (parent-enfant) qui reflète les liens familiaux japonais',
    culturalContext: 'L\'oyako-don de Nakau transcende le simple plat pour incarner la philosophie familiale japonaise. Le terme "parent-enfant" symbolise l\'harmonie intergénérationnelle, valeur fondamentale de la société japonaise. Ce plat reflète l\'importance du lien familial et de la transmission des valeurs à travers la nourriture.',
    difficulty: 'medium',
    estimatedTime: 30,
    rewards: [
      'Saisir la profondeur symbolique de la cuisine japonaise',
      'Comprendre l\'importance des liens familiaux au Japon',
      'Apprécier la poésie culinaire japonaise',
      'Découvrir la communication émotionnelle par la nourriture'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'nakau',
    title: 'Explorer la technique du dashi authentique',
    titleJapanese: '本格だしの技法を学ぶ',
    description: 'Observez la préparation du dashi, demandez au chef les secrets du katsuobushi et comprenez pourquoi Nakau insiste sur la fraîcheur quotidienne',
    culturalContext: 'Le dashi représente l\'âme de la cuisine japonaise - l\'umami authentique qui différencie la gastronomie japonaise du reste du monde. Chez Nakau, cette préparation quotidienne montre l\'engagement envers la qualité ancestrale même dans un contexte de restauration rapide, incarnant le concept japonais de "shokunin" (artisan perfectionniste).',
    difficulty: 'hard',
    estimatedTime: 40,
    rewards: [
      'Maîtriser les fondamentaux de la cuisine japonaise',
      'Comprendre l\'esprit "shokunin" du perfectionnisme',
      'Développer une appréciation pour l\'umami authentique',
      'Découvrir les secrets de la transmission culinaire'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'nakau',
    title: 'Créer des liens familiaux Nakau',
    titleJapanese: 'なか卯ファミリーの絆を築く',
    description: 'Visitez régulièrement en famille ou entre amis, explorez l\'ambiance détendue et observez comment Nakau facilite les interactions intergénérationnelles',
    culturalContext: 'Nakau transcende le modèle traditionnel de restauration rapide pour salaryman solitaire en créant un espace familial authentique. Cette approche reflète l\'évolution de la société japonaise moderne qui valorise les moments familiaux partagés tout en conservant l\'efficacité japonaise, créant un pont entre tradition familiale et modernité.',
    difficulty: 'medium',
    estimatedTime: 60,
    rewards: [
      'Expérimenter l\'hospitalité familiale japonaise moderne',
      'Comprendre l\'évolution des valeurs sociales japonaises',
      'Créer des souvenirs familiaux authentiques',
      'Découvrir l\'art japonais de l\'harmonie intergénérationnelle',
      'Apprécier la qualité du temps partagé japonais'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function NakauCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mb-4">
          <span className="text-4xl">🍜</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Nakau
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'harmonie unique de Nakau où se rencontrent tradition et innovation. 
          Découvrez comment la fusion gyūdon-udon incarne l'esprit familial japonais et 
          la quête de l'excellence culinaire accessible.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-amber-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Parcours Fusion
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="text-2xl font-bold text-amber-600">🍱</div>
            <div className="text-sm text-gray-600 mt-1">Fusion</div>
            <div className="text-xs text-amber-700 mt-2">Gyūdon + Udon</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">👨‍👩‍👧</div>
            <div className="text-sm text-gray-600 mt-1">Oyako</div>
            <div className="text-xs text-orange-700 mt-2">Liens familiaux</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">🥢</div>
            <div className="text-sm text-gray-600 mt-1">Dashi</div>
            <div className="text-xs text-yellow-700 mt-2">Artisanat authentique</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">🏠</div>
            <div className="text-sm text-gray-600 mt-1">Famille</div>
            <div className="text-xs text-red-700 mt-2">Harmonie moderne</div>
          </div>
        </div>
      </div>

      <MissionList missions={nakauMissions} chainId="nakau" />

      <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Nakau
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-amber-700 mb-2">🕐 Moments optimaux</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Déjeuner familial : 11h30-14h weekend</li>
              <li>• Observation dashi : matin 7h-9h</li>
              <li>• Ambiance détendue : 15h-17h semaine</li>
              <li>• Expérience complète : heures creuses</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Vocabulaire essentiel</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "だしの味はどうですか" - Comment est le dashi?</li>
              <li>• "親子丼の意味を教えて" - Expliquez l'oyako-don</li>
              <li>• "うどんは手作りですか" - L'udon est-il fait main?</li>
              <li>• "家族で来ました" - Nous venons en famille</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🌸</span>
          L'Esprit Nakau
        </h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Harmonie fusion :</strong> Nakau prouve que tradition et innovation peuvent coexister harmonieusement dans la culture japonaise.
          </p>
          <p>
            <strong>Qualité familiale :</strong> Chaque plat reflète l'attention et le soin qu'une famille apporte à sa cuisine quotidienne.
          </p>
          <p>
            <strong>Excellence accessible :</strong> Le perfectionnisme japonais rendu accessible à tous, sans compromis sur la qualité.
          </p>
          <p>
            <strong>Innovation respectueuse :</strong> Créer du nouveau tout en honorant les techniques ancestrales du dashi et de l'umami.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
