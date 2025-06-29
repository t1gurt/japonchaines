'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const tenkaippinMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'tenkaippin',
    title: 'Découvrir le kotteri legendaire',
    titleJapanese: 'こってりスープ体験',
    description: 'Commandez votre premier ramen kotteri et expérimentez le bouillon ultra-riche de Tenkaippin qui divise le Japon depuis 50 ans',
    culturalContext: 'Le bouillon kotteri de Tenkaippin représente l\'audace culinaire japonaise - la capacité à pousser une technique traditionnelle vers l\'extrême absolu. Cette concentration maximale de saveurs incarne l\'obsession japonaise pour la perfection technique, transformant un simple bouillon en véritable défi gustatif qui révèle la philosophie du "zenkai" - donner tout ce qu\'on a.',
    difficulty: 'easy',
    estimatedTime: 30,
    rewards: [
      'Comprendre l\'art japonais de l\'intensité culinaire',
      'Expérimenter la polarisation gustative volontaire',
      'Découvrir la richesse maximale du bouillon'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'tenkaippin',
    title: 'Maîtriser l\'art de la résistance traditionnelle',
    titleJapanese: '伝統的頑固さの極意',
    description: 'Découvrez pourquoi Tenkaippin refuse tout changement depuis 50 ans, discutez avec le personnel de cette philosophie de résistance au modernisme',
    culturalContext: 'La résistance de Tenkaippin au changement incarne l\'esprit "gankō" - l\'obstination artisanale japonaise qui considère que la vraie excellence ne nécessite aucune évolution. Cette philosophie reflète la croyance profonde que certaines traditions sont si parfaites qu\'elles transcendent les modes et les époques, incarnant l\'âme véritable de l\'artisanat japonais.',
    difficulty: 'medium',
    estimatedTime: 40,
    rewards: [
      'Comprendre la philosophie de l\'obstination créative',
      'Apprécier la résistance culturelle japonaise',
      'Découvrir l\'art de la cohérence absolue',
      'Maîtriser l\'histoire culinaire de Kyoto'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'tenkaippin',
    title: 'Décrypter la polarisation gustative',
    titleJapanese: '味覚分裂の理解',
    description: 'Expérimentez les deux camps du kotteri en observant les réactions des autres clients et en analysant votre propre évolution gustative lors de visites répétées',
    culturalContext: 'La polarisation créée par Tenkaippin illustre le concept japonais de "mae-muki" versus "ushiro-muki" - l\'acceptation que certaines expériences authentiques divisent naturellement les gens. Cette division volontaire reflète la conviction que l\'art véritable ne cherche pas le consensus mais l\'authenticité absolue, principe fondamental de l\'esthétique japonaise.',
    difficulty: 'hard',
    estimatedTime: 90,
    rewards: [
      'Maîtriser l\'art de l\'analyse gustative comparative',
      'Comprendre la psychologie culinaire japonaise',
      'Développer une appréciation pour l\'extrême',
      'Décoder l\'évolution personnelle du goût'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'tenkaippin',
    title: 'Rejoindre la communauté des Ten-chan addicts',
    titleJapanese: 'てんちゃん中毒者コミュニティ',
    description: 'Développez une routine de visite régulière, participez aux conversations entre habitués et découvrez les codes sociaux uniques de cette communauté passionnée',
    culturalContext: 'La communauté Tenkaippin incarne l\'esprit "nakama" - la fraternité née d\'une passion partagée extrême. Ces liens transcendent les conventions sociales japonaises habituelles, créant une micro-société basée sur l\'amour commun pour l\'intensité culinaire, reflétant la capacité japonaise à créer des communautés profondes autour d\'expériences sensorielles spécifiques.',
    difficulty: 'medium',
    estimatedTime: 120,
    rewards: [
      'Intégrer une communauté culinaire unique',
      'Comprendre les codes sociaux des passionnés',
      'Développer des relations basées sur le goût',
      'Expérimenter la loyauté culinaire japonaise',
      'Découvrir l\'esprit de fraternité gustative'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function TenkaippinCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full mb-4">
          <span className="text-4xl">🍜</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Tenkaippin
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez l'univers du kotteri extrême où l'obstination artisanale se transforme 
          en art culinaire. Découvrez comment la résistance au changement devient 
          la plus pure expression de l'authenticité japonaise.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-orange-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Parcours Kotteri
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">🔥</div>
            <div className="text-sm text-gray-600 mt-1">Kotteri</div>
            <div className="text-xs text-red-700 mt-2">Bouillon extrême</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">💪</div>
            <div className="text-sm text-gray-600 mt-1">Gankō</div>
            <div className="text-xs text-orange-700 mt-2">Obstination</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">⚖️</div>
            <div className="text-sm text-gray-600 mt-1">Polarisation</div>
            <div className="text-xs text-yellow-700 mt-2">Division volontaire</div>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <div className="text-2xl font-bold text-pink-600">👥</div>
            <div className="text-sm text-gray-600 mt-1">Nakama</div>
            <div className="text-xs text-pink-700 mt-2">Communauté</div>
          </div>
        </div>
      </div>

      <MissionList missions={tenkaippinMissions} chainId="tenkaippin" />

      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Tenkaippin
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">🍜 Stratégie kotteri</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Première fois : commandez le kotteri standard</li>
              <li>• Mélangez bien avant de goûter</li>
              <li>• Prenez de petites gorgées au début</li>
              <li>• Alternez bouillon et nouilles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Vocabulaire essentiel</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "こってり" (kotteri) - Ultra riche</li>
              <li>• "あっさり" (assari) - Léger</li>
              <li>• "濃い" (koi) - Concentré</li>
              <li>• "がんこ" (gankō) - Obstiné</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎌</span>
          L'Esprit Tenkaippin
        </h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Gankō Spirit :</strong> L'obstination comme forme de respect pour la tradition parfaite.
          </p>
          <p>
            <strong>Kodawari Extreme :</strong> L'attachement absolu à sa vision originale malgré les modes.
          </p>
          <p>
            <strong>Bunka no Teikō :</strong> La résistance culturelle comme garde de l'authenticité pure.
          </p>
          <p>
            <strong>Nakama Consciousness :</strong> La fraternité née de l'amour partagé pour l'extrême gustatif.
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
