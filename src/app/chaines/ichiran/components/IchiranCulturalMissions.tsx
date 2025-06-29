'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const ichiranMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'ichiran',
    title: 'Découvrir le système yatai unique',
    titleJapanese: '屋台システム体験',
    description: 'Commandez votre premier ramen tonkotsu dans une box individuelle en utilisant le système de bulletins personnalisés d\'Ichiran',
    culturalContext: 'Le système yatai d\'Ichiran incarne la philosophie japonaise du "shokunin" - la quête obsessionnelle de la perfection dans un domaine précis. Cette expérience de dégustation en isolation totale reflète l\'appréciation japonaise pour la concentration et la méditation, transformant un simple repas en moment de communion spirituelle avec la nourriture.',
    difficulty: 'easy',
    estimatedTime: 25,
    rewards: [
      'Comprendre la philosophie japonaise de la concentration',
      'Expérimenter l\'individualisme culinaire unique',
      'Découvrir l\'art de la personnalisation extrême'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'ichiran',
    title: 'Maîtriser l\'art du bulletin de commande',
    titleJapanese: '注文用紙の極意',
    description: 'Personnalisez votre ramen en cochant chaque paramètre sur le bulletin : richesse du bouillon, quantité d\'ail, piment, oignons verts, et discutez avec le chef des nuances de chaque choix',
    culturalContext: 'Le bulletin d\'Ichiran représente l\'aboutissement de la culture japonaise du "omotenashi" - l\'hospitalité anticipée. Chaque case à cocher reflète des décennies d\'observation minutieuse des préférences clients, incarnant la capacité japonaise à standardiser l\'individualité tout en préservant l\'authenticité artisanale.',
    difficulty: 'medium',
    estimatedTime: 35,
    rewards: [
      'Maîtriser l\'art de la communication culinaire japonaise',
      'Comprendre la science derrière les saveurs tonkotsu',
      'Apprécier la précision japonaise dans le service',
      'Développer son palais pour les nuances umami'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'ichiran',
    title: 'Explorer les secrets du bouillon 24h',
    titleJapanese: '24時間スープの秘密',
    description: 'Demandez au chef de vous expliquer le processus de préparation du bouillon tonkotsu 24h, observez la cuisine ouverte et comprenez la science derrière la couleur blanche crémeuse',
    culturalContext: 'Le bouillon tonkotsu d\'Ichiran incarne l\'essence du "takumi" - l\'artisanat qui transcende la technique pour devenir art. Cette cuisson de 24h reflète la patience légendaire japonaise et la croyance que la vraie qualité ne peut être précipitée, principe fondamental de la culture gastronomique japonaise.',
    difficulty: 'hard',
    estimatedTime: 45,
    rewards: [
      'Découvrir les secrets de l\'artisanat culinaire japonais',
      'Comprendre la science de l\'émulsion tonkotsu',
      'Apprécier la philosophie du temps japonais',
      'Maîtriser le vocabulaire technique du ramen'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'ichiran',
    title: 'Cultiver la connexion chef-client',
    titleJapanese: '職人とのつながり',
    description: 'Visitez régulièrement le même restaurant Ichiran, développez une relation avec l\'équipe et observez comment votre expérience évolue avec la familiarité',
    culturalContext: 'Malgré son apparente impersonnalité, Ichiran cultive des relations profondes basées sur la reconnaissance mutuelle du respect pour l\'art culinaire. Cette approche reflète les relations japonaises authentiques : moins d\'échange verbal mais plus de compréhension intuitive et de respect mutuel pour l\'expertise.',
    difficulty: 'medium',
    estimatedTime: 60,
    rewards: [
      'Expérimenter l\'hospitalité japonaise authentique',
      'Comprendre les relations maître-client au Japon',
      'Développer une appréciation pour la constance qualitative',
      'Découvrir l\'évolution subtile du service personnalisé',
      'Apprécier l\'art japonais de la reconnaissance silencieuse'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function IchiranCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-4">
          <span className="text-4xl">🍜</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Ichiran
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Plongez dans l'univers unique d'Ichiran où la solitude devient communion spirituelle 
          avec l'art du ramen. Découvrez comment la concentration extrême révèle l'essence 
          de la perfection culinaire japonaise.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-red-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Parcours de Concentration
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">🏮</div>
            <div className="text-sm text-gray-600 mt-1">Yatai</div>
            <div className="text-xs text-red-700 mt-2">Système unique</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">📝</div>
            <div className="text-sm text-gray-600 mt-1">Bulletin</div>
            <div className="text-xs text-orange-700 mt-2">Personnalisation</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">⏰</div>
            <div className="text-sm text-gray-600 mt-1">24h</div>
            <div className="text-xs text-yellow-700 mt-2">Bouillon parfait</div>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <div className="text-2xl font-bold text-pink-600">🤝</div>
            <div className="text-sm text-gray-600 mt-1">Takumi</div>
            <div className="text-xs text-pink-700 mt-2">Maître artisan</div>
          </div>
        </div>
      </div>

      <MissionList missions={ichiranMissions} chainId="ichiran" />

      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Ichiran
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">🕐 Moments optimaux</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Première visite : 14h-16h (moins de queue)</li>
              <li>• Observation cuisine : heures creuses matinales</li>
              <li>• Expérience complète : éviter 12h-13h et 19h-21h</li>
              <li>• Discussion chef : en dehors des rush</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Vocabulaire essentiel</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "スープの濃さは？" - Richesse du bouillon?</li>
              <li>• "にんにく多めで" - Beaucoup d'ail</li>
              <li>• "24時間スープですか" - Bouillon 24h?</li>
              <li>• "美味しいです" - C'est délicieux</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎌</span>
          L'Esprit Ichiran
        </h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Mono-no-aware :</strong> La beauté de l'impermanence dans chaque bol parfaitement éphémère.
          </p>
          <p>
            <strong>Shokunin Dharma :</strong> L'obsession de la perfection transformée en méditation culinaire.
          </p>
          <p>
            <strong>Ma (間) :</strong> L'espace et le silence nécessaires pour apprécier véritablement la saveur.
          </p>
          <p>
            <strong>Takumi Spirit :</strong> L'artisanat élevé au rang d'art spirituel à travers la répétition parfaite.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
