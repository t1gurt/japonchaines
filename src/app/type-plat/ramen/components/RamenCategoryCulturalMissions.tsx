'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const ramenCategoryMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'ramen-category',
    title: 'Explorer la diversité des quatre bouillons',
    titleJapanese: '四大スープの探求',
    description: 'Goûtez les quatre types fondamentaux de ramen (tonkotsu, shoyu, shio, miso) dans différents restaurants et comprenez leurs origines régionales',
    culturalContext: 'Les quatre bouillons de ramen incarnent la diversité géographique et culturelle du Japon moderne. Chaque style reflète l\'âme de sa région : le tonkotsu de Kyushu exprime la richesse du Sud, le shoyu de Tokyo la sophistication urbaine, le shio de Hakodate la délicatesse nordique, et le miso de Sapporo l\'innovation Hokkaido. Cette diversité illustre comment le Japon unifie les particularismes régionaux.',
    difficulty: 'easy',
    estimatedTime: 120,
    rewards: [
      'Comprendre la géographie gustative japonaise',
      'Maîtriser les bases de la culture ramen',
      'Développer son palais pour les nuances régionales'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'ramen-category',
    title: 'Décoder les philosophies culinaires opposées',
    titleJapanese: '料理哲学の対比理解',
    description: 'Comparez les approches radicalement différentes : perfectionnisme d\'Ichiran, traditionalisme de Tenkaippin, innovation de Ringer Hut, et analysez leurs philosophies',
    culturalContext: 'Ces trois chaînes représentent les facettes de l\'âme japonaise contemporaine : Ichiran incarne l\'obsession de la perfection individuelle (perfectionnisme nippon), Tenkaippin la résistance aux modes (tradition obstinée), Ringer Hut l\'adaptation moderne respectueuse (évolution harmonieuse). Cette trinité révèle comment le Japon équilibre innovation, tradition et quête d\'excellence.',
    difficulty: 'medium',
    estimatedTime: 180,
    rewards: [
      'Maîtriser l\'analyse des philosophies d\'entreprise japonaises',
      'Comprendre les tensions culturelles contemporaines',
      'Développer une vision systémique de la culture ramen',
      'Apprécier la diversité des approches nippones'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'ramen-category',
    title: 'Maîtriser l\'art de l\'expérience holistique',
    titleJapanese: '総合体験の極意',
    description: 'Intégrez tous les aspects : technique culinaire, service, ambiance, philosophie, et créez votre propre système d\'appréciation du ramen authentique',
    culturalContext: 'L\'appréciation holistique du ramen reflète l\'esthétique japonaise du "sōgō-geijutsu" - l\'art total où chaque élément contribue à l\'expérience globale. Cette approche transcende la simple dégustation pour embrasser l\'ensemble : l\'artisanat du bouillon, la poésie du service, l\'harmonie de l\'espace, la philosophie du créateur. C\'est l\'essence même de l\'appréciation culturelle japonaise.',
    difficulty: 'hard',
    estimatedTime: 240,
    rewards: [
      'Développer une expertise en appréciation culturelle japonaise',
      'Maîtriser l\'art de l\'analyse holistique',
      'Créer son propre système d\'évaluation authentique',
      'Atteindre une compréhension profonde de l\'esthétique japonaise'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'ramen-category',
    title: 'Devenir ambassadeur de la culture ramen',
    titleJapanese: 'ラーメン文化大使への道',
    description: 'Partagez vos connaissances avec d\'autres, guidez des novices, participez aux discussions communautaires et contribuez à la préservation de cette culture',
    culturalContext: 'Devenir ambassadeur de la culture ramen incarne l\'idéal japonais du "sensei" - celui qui transmet non seulement la connaissance mais l\'âme d\'une tradition. Cette responsabilité reflète la croyance japonaise que la vraie maîtrise se mesure à sa capacité à préserver et enrichir la culture pour les générations futures, incarnant l\'esprit de continuité culturelle.',
    difficulty: 'medium',
    estimatedTime: 300,
    rewards: [
      'Contribuer à la préservation culturelle',
      'Développer ses compétences de transmission',
      'Créer des liens communautaires authentiques',
      'Incarner l\'esprit du sensei japonais',
      'Participer à l\'évolution respectueuse de la tradition'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function RamenCategoryCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full mb-4">
          <span className="text-4xl">🍜</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles : Catégorie Ramen
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Embarquez pour un voyage à travers l'univers du ramen japonais où chaque bouillon 
          raconte l'histoire d'une région, chaque chaîne révèle une philosophie, 
          et chaque bol devient une fenêtre sur l'âme du Japon contemporain.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-orange-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Parcours Maître Ramen
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-2xl font-bold text-red-600">🗾</div>
            <div className="text-sm text-gray-600 mt-1">Diversité</div>
            <div className="text-xs text-red-700 mt-2">4 bouillons régionaux</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">🧠</div>
            <div className="text-sm text-gray-600 mt-1">Philosophies</div>
            <div className="text-xs text-orange-700 mt-2">3 approches opposées</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">🎨</div>
            <div className="text-sm text-gray-600 mt-1">Holisme</div>
            <div className="text-xs text-yellow-700 mt-2">Art total japonais</div>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
            <div className="text-2xl font-bold text-pink-600">👨‍🏫</div>
            <div className="text-sm text-gray-600 mt-1">Sensei</div>
            <div className="text-xs text-pink-700 mt-2">Transmission culturelle</div>
          </div>
        </div>
      </div>

      <MissionList missions={ramenCategoryMissions} chainId="ramen-category" />

      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Guide du Voyage Ramen
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">🗺️ Itinéraire recommandé</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Semaine 1 : Ichiran (concentration individuelle)</li>
              <li>• Semaine 2 : Tenkaippin (tradition obstinée)</li>
              <li>• Semaine 3 : Ringer Hut (fusion moderne)</li>
              <li>• Semaine 4 : Synthèse et maîtrise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">📝 Carnet d'expériences</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Notez vos impressions gustatives</li>
              <li>• Observez les ambiances contrastées</li>
              <li>• Comparez les philosophies de service</li>
              <li>• Développez votre propre système</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎌</span>
          Les Trois Piliers de la Culture Ramen
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2">🏮 Ichiran : Perfectionnisme</h4>
            <p className="text-gray-700">L'obsession japonaise pour la perfection technique et l'expérience individuelle optimisée.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">⛩️ Tenkaippin : Tradition</h4>
            <p className="text-gray-700">La résistance aux modes et la fidélité absolue aux valeurs ancestrales.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-700 mb-2">🌸 Ringer Hut : Évolution</h4>
            <p className="text-gray-700">L'adaptation moderne respectueuse qui honore le passé tout en embrassant l'avenir.</p>
          </div>
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
