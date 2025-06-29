'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const ringerHutMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'ringer-hut',
    title: 'Découvrir le champon de Nagasaki',
    titleJapanese: '長崎ちゃんぽん体験',
    description: 'Commandez votre premier champon authentique et découvrez ce plat fusion unique né de l\'échange culturel entre le Japon et la Chine à Nagasaki',
    culturalContext: 'Le champon de Nagasaki incarne l\'esprit "wakon-yōsai" - l\'âme japonaise avec les techniques étrangères. Né du port ouvert de Nagasaki au 19ème siècle, ce plat symbolise la capacité japonaise à absorber, adapter et perfectionner les influences externes tout en gardant son identité. Le champon représente la philosophie japonaise de l\'harmonie multiculturelle.',
    difficulty: 'easy',
    estimatedTime: 25,
    rewards: [
      'Comprendre l\'art japonais de la fusion culturelle',
      'Découvrir l\'héritage du port de Nagasaki',
      'Expérimenter l\'équilibre légumes-nouilles-bouillon'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'ringer-hut',
    title: 'Maîtriser la philosophie santé-plaisir',
    titleJapanese: '健康と美味しさの哲学',
    description: 'Explorez l\'engagement de Ringer Hut pour l\'agriculture sans pesticides, la traçabilité complète et l\'équilibre nutritionnel, discutez avec le personnel de cette approche',
    culturalContext: 'L\'approche santé de Ringer Hut reflète l\'évolution moderne du concept japonais "ishoku-dōgen" - la nourriture comme médecine. Cette philosophie contemporaine combine la sagesse traditionnelle japonaise sur l\'alimentation équilibrée avec les préoccupations modernes de sécurité alimentaire, incarnant l\'adaptation permanente des valeurs japonaises aux défis contemporains.',
    difficulty: 'medium',
    estimatedTime: 35,
    rewards: [
      'Comprendre l\'évolution de la conscience alimentaire japonaise',
      'Apprécier l\'innovation dans la tradition',
      'Découvrir l\'agriculture responsable japonaise',
      'Maîtriser l\'équilibre nutritionnel oriental'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'ringer-hut',
    title: 'Explorer l\'art de la régionalisation',
    titleJapanese: '地域特色の展開術',
    description: 'Découvrez comment Ringer Hut adapte ses recettes aux goûts régionaux japonais tout en préservant l\'essence du champon de Nagasaki',
    culturalContext: 'La stratégie de régionalisation de Ringer Hut illustre le concept "chiiki-mitsuchaku" - l\'adaptation locale profonde. Cette approche montre comment une entreprise japonaise respecte la diversité culturelle interne du Japon, reconnaissant que même dans un pays unifié, chaque région a ses spécificités gustatives qu\'il faut honorer plutôt que d\'uniformiser.',
    difficulty: 'hard',
    estimatedTime: 50,
    rewards: [
      'Maîtriser l\'art de l\'adaptation respectueuse',
      'Comprendre la diversité culturelle japonaise',
      'Apprécier la finesse des variations régionales',
      'Découvrir l\'équilibre entre unité et diversité'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'ringer-hut',
    title: 'Cultiver l\'esprit famille-santé',
    titleJapanese: '家族健康の絆',
    description: 'Observez comment Ringer Hut crée une expérience familiale saine, participez aux conversations sur l\'alimentation équilibrée et découvrez cette approche communautaire',
    culturalContext: 'L\'ambiance familiale de Ringer Hut reflète l\'idéal japonais "kazoku-danran" - la communion familiale autour du repas sain. Cette approche montre comment une chaîne moderne peut perpétuer les valeurs traditionnelles de rassemblement familial tout en intégrant les préoccupations contemporaines de nutrition, créant un nouveau modèle de restauration communautaire.',
    difficulty: 'medium',
    estimatedTime: 60,
    rewards: [
      'Expérimenter l\'harmonie familiale moderne',
      'Comprendre l\'évolution des valeurs familiales',
      'Découvrir l\'approche communautaire de la santé',
      'Apprécier l\'adaptation des traditions',
      'Développer une conscience alimentaire partagée'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function RingerHutCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full mb-4">
          <span className="text-4xl">🍜</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Ringer Hut
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez l'art de la fusion culturelle responsable où l'héritage de Nagasaki 
          rencontre la conscience moderne. Explorez comment la tradition du champon 
          évolue avec les valeurs contemporaines de santé et famille.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-orange-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Parcours Champon
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">🌏</div>
            <div className="text-sm text-gray-600 mt-1">Fusion</div>
            <div className="text-xs text-red-700 mt-2">Champon original</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">🌱</div>
            <div className="text-sm text-gray-600 mt-1">Santé</div>
            <div className="text-xs text-orange-700 mt-2">Agriculture pure</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">🗾</div>
            <div className="text-sm text-gray-600 mt-1">Régional</div>
            <div className="text-xs text-yellow-700 mt-2">Adaptation locale</div>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <div className="text-2xl font-bold text-pink-600">👨‍👩‍👧‍👦</div>
            <div className="text-sm text-gray-600 mt-1">Famille</div>
            <div className="text-xs text-pink-700 mt-2">Communion saine</div>
          </div>
        </div>
      </div>

      <MissionList missions={ringerHutMissions} chainId="ringer-hut" />

      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Ringer Hut
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">🍜 Dégustation optimale</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Première fois : champon aux légumes standard</li>
              <li>• Observez la variété des légumes</li>
              <li>• Goûtez le bouillon d'abord</li>
              <li>• Mélangez bien pour l'harmonie</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Vocabulaire essentiel</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "ちゃんぽん" (chanpon) - Le plat signature</li>
              <li>• "野菜たっぷり" (yasai tappuri) - Plein de légumes</li>
              <li>• "無農薬" (mu-nōyaku) - Sans pesticides</li>
              <li>• "家族向け" (kazoku-muke) - Pour la famille</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎌</span>
          L'Esprit Ringer Hut
        </h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Wakon-Yōsai :</strong> L'âme japonaise avec les techniques du monde, incarnée dans le champon.
          </p>
          <p>
            <strong>Ishoku-Dōgen :</strong> La nourriture comme médecine, adaptée aux préoccupations modernes.
          </p>
          <p>
            <strong>Chiiki-Mitsuchaku :</strong> L'adaptation respectueuse aux spécificités régionales japonaises.
          </p>
          <p>
            <strong>Kazoku-Danran :</strong> La communion familiale autour d'une alimentation saine et équilibrée.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-red-600 to-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
