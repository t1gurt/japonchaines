'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const yoshinoyaMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'yoshinoya',
    title: 'Première commande au comptoir',
    titleJapanese: '初回カウンター注文',
    description: 'Commandez votre premier gyūdon au comptoir en forme de U iconique de Yoshinoya',
    culturalContext: 'Le comptoir en U de Yoshinoya est une innovation brevetée qui symbolise l\'efficacité japonaise et favorise l\'interaction entre clients et staff. C\'est ici que vous découvrirez l\'hospitalité authentique japonaise.',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      'Comprendre le système de commande traditionnel',
      'Observer l\'efficacité du service japonais',
      'Première interaction avec le staff local'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'yoshinoya',
    title: 'Découvrir l\'histoire avec le staff',
    titleJapanese: '店員と歴史探索',
    description: 'Engagez une conversation sur l\'histoire de Yoshinoya (1899) et la tradition du gyūdon',
    culturalContext: 'Yoshinoya est fier de ses 125 ans d\'histoire. Le staff aime partager cette fierté avec les clients qui montrent un intérêt sincère pour l\'héritage culturel.',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      'Apprendre l\'histoire authentique du gyūdon',
      'Créer une connexion personnelle avec le staff',
      'Comprendre la fierté japonaise du patrimoine'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'yoshinoya',
    title: 'Maîtriser les commandes spécialisées',
    titleJapanese: '専門注文マスター',
    description: 'Commandez avec les termes spécialisés: tsuyudaku (sauce extra), negidaku (oignons extra)',
    culturalContext: 'Utiliser le vocabulaire spécialisé montre votre intégration dans la culture japonaise. Cela transforme votre statut de "touriste" à "connaisseur".',
    difficulty: 'hard',
    estimatedTime: 20,
    rewards: [
      'Maîtriser le vocabulaire culinaire spécialisé',
      'Recevoir le respect du staff pour votre connaissance',
      'Découvrir des saveurs authentiques personnalisées'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'yoshinoya',
    title: 'Devenir un client régulier',
    titleJapanese: '常連客になる',
    description: 'Effectuez 5 visites en utilisant le japonais et observez l\'évolution de votre relation avec le staff',
    culturalContext: 'La culture des "jōrenkyaku" (clients réguliers) est fondamentale au Japon. Après plusieurs visites avec effort linguistique, vous passerez du statut d\'étranger à celui de membre de la communauté locale.',
    difficulty: 'medium',
    estimatedTime: 60,
    rewards: [
      'Expérimenter l\'évolution de votre statut social',
      'Recevoir un service personnalisé',
      'Comprendre la vraie nature chaleureuse des Japonais',
      'Créer des liens durables au-delà de la transaction commerciale'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function YoshinoyaCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-4">
          <span className="text-4xl">🏮</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Yoshinoya
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Vivez une progression authentique : de touriste à client régulier respecté. 
          Chaque mission complétée vous rapproche de la vraie culture japonaise.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-orange-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">初級</div>
            <div className="text-sm text-gray-600 mt-1">Débutant</div>
            <div className="text-xs text-green-700 mt-2">Première découverte</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">中級</div>
            <div className="text-sm text-gray-600 mt-1">Intermédiaire</div>
            <div className="text-xs text-orange-700 mt-2">Connexion culturelle</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">上級</div>
            <div className="text-sm text-gray-600 mt-1">Avancé</div>
            <div className="text-xs text-red-700 mt-2">Expertise technique</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">常連</div>
            <div className="text-sm text-gray-600 mt-1">Client régulier</div>
            <div className="text-xs text-purple-700 mt-2">Membre de la communauté</div>
          </div>
        </div>
      </div>

      <MissionList missions={yoshinoyaMissions} chainId="yoshinoya" />

      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Yoshinoya
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">🕐 Meilleurs moments</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Déjeuner (11h-14h) : Rush des salarymen</li>
              <li>• Soir (18h-20h) : Ambiance détendue</li>
              <li>• Tard le soir : Staff plus disponible pour converser</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">💬 Phrases magiques</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "1899年からですね" - Depuis 1899</li>
              <li>• "伝統の味ですね" - Le goût traditionnel</li>
              <li>• "つゆだくで" - Avec plus de sauce</li>
            </ul>
          </div>
        </div>
      </div>

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
