'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const burgerCategoryMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'burgers',
    title: 'Découvrir la japonisation du burger',
    titleJapanese: 'ハンバーガーの日本化発見',
    description: 'Visitez les trois chaînes principales et comparez leurs approches distinctes : qualité artisanale (Mos), fusion culturelle (Lotteria), et premium santé (Freshness). Documentez les différences d\'adaptation culturelle.',
    culturalContext: 'ハンバーガーの日本化は、外来文化の受容と適応における日本社会の独特なメカニズムを表現します。アメリカ発祥のファストフードが日本で三つの異なる進化を遂げた過程は、グローバル化における地域性の維持と革新性の両立を示し、文化的消化力と創造的適応能力の実例。各チェーンの独自性は日本市場の多様性と消費者の洗練された選択基準を反映しています。',
    difficulty: 'easy',
    estimatedTime: 45,
    rewards: [
      '文化適応の多様性理解',
      '日本化メカニズムの発見',
      '市場分化戦略の体験'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'burgers',
    title: 'Maîtriser les philosophies divergentes',
    titleJapanese: '三つの哲学の習得',
    description: 'Approfondissez la compréhension des trois approches : craftmanship japonais, multiculturalisme asiatique, et lifestyle occidentalisé. Analysez comment chaque philosophie reflète différents aspects de la société japonaise moderne.',
    culturalContext: 'ハンバーガー業界の三つの哲学は現代日本社会の複層性を映し出します。職人的品質追求（モス）は伝統的な日本的価値観の継承を、多文化融合（ロッテリア）は国際化社会への適応を、ライフスタイル重視（フレッシュネス）は個人化する価値観を表現。これらの共存は日本社会の寛容性と多様性受容能力を示し、単一文化から多文化社会への移行期の象徴といえます。',
    difficulty: 'medium',
    estimatedTime: 60,
    rewards: [
      '現代日本の多層性理解',
      '価値観の多様化体験',
      '文化的寛容性の発見'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'burgers',
    title: 'Analyser l\'écosystème concurrentiel',
    titleJapanese: '競争生態系の深層分析',
    description: 'Menez une analyse comparative approfondie des stratégies, positionnements, et impacts socioculturels. Évaluez comment la coexistence de ces modèles différents enrichit le paysage culturel japonais.',
    culturalContext: 'ハンバーガー業界の競争生態系は、日本の市場成熟度と消費者の洗練度を表現する完璧な事例です。異なる価値提案が共存し繁栄する環境は、画一性から多様性への社会変化と、セグメント化された消費者ニーズの高度化を反映。この生態系は効率性一辺倒から体験価値重視への経済構造転換と、個人のアイデンティティ表現手段としての消費文化の発達を象徴しています。',
    difficulty: 'hard',
    estimatedTime: 90,
    rewards: [
      '市場成熟メカニズムの理解',
      '消費者セグメンテーションの洞察',
      '経済文化構造の変化認識'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'burgers',
    title: 'Construire un réseau burger multiculturel',
    titleJapanese: 'マルチカルチャー・ネットワーク構築',
    description: 'Établissez des relations continues dans les trois environnements et observez les différences de dynamiques sociales. Participez aux communautés distinctes et comparez les types d\'interactions culturelles.',
    culturalContext: 'ハンバーガー・コミュニティでのマルチカルチャー・ネットワーク構築は、現代日本の社会結束パターンの多様化を体験する貴重な機会です。職人コミュニティ、多文化交流、ライフスタイル共有という三つの異なる結束メカニズムを通じて、個人が複数のアイデンティティと所属感を持つ現代的社会参加の形を理解。このネットワークは従来の単一コミュニティから複数コミュニティ参加への社会構造変化を表現しています。',
    difficulty: 'medium',
    estimatedTime: 120,
    rewards: [
      '複数コミュニティ参加の体験',
      '多様な社会結束の理解',
      '現代的アイデンティティ構築の発見'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function BurgerCategoryCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('burgers-category-completed-missions');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const updateProgress = (missionId: string, completed: boolean) => {
    const updated = completed 
      ? [...completedMissions, missionId]
      : completedMissions.filter(id => id !== missionId);
    
    setCompletedMissions(updated);
    localStorage.setItem('burgers-category-completed-missions', JSON.stringify(updated));
  };

  const getProgressLevel = () => {
    if (completedMissions.length === 0) return { level: 'Débutant', color: 'gray', percentage: 0 };
    if (completedMissions.length === 1) return { level: 'Explorateur', color: 'blue', percentage: 25 };
    if (completedMissions.length === 2) return { level: 'Connaisseur', color: 'green', percentage: 50 };
    if (completedMissions.length === 3) return { level: 'Expert', color: 'purple', percentage: 75 };
    return { level: 'Maître de la Fusion Culturelle', color: 'indigo', percentage: 100 };
  };

  const progress = getProgressLevel();

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
          <span className="text-4xl">🌍</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles - Écosystème Burger
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Maîtrisez l'écosystème complexe des burgers japonais à travers trois approches distinctes qui 
          révèlent les mécanismes d'adaptation culturelle et de diversification du marché japonais.
        </p>
      </div>

      {/* Three Approaches Overview */}
      <div className="mb-8 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mb-3">
              <span className="text-xl text-white">🍔</span>
            </div>
            <h3 className="font-bold text-gray-900">Approche Qualité</h3>
            <p className="text-sm text-gray-600">Mos Burger</p>
          </div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Made to Order</li>
            <li>• Ingredients locaux</li>
            <li>• Craftmanship japonais</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-xl border border-pink-200">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full mb-3">
              <span className="text-xl text-white">🌏</span>
            </div>
            <h3 className="font-bold text-gray-900">Approche Fusion</h3>
            <p className="text-sm text-gray-600">Lotteria</p>
          </div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Saveurs coréennes</li>
            <li>• Adaptation multiculturelle</li>
            <li>• Innovation fusion</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-full mb-3">
              <span className="text-xl text-white">🌱</span>
            </div>
            <h3 className="font-bold text-gray-900">Approche Lifestyle</h3>
            <p className="text-sm text-gray-600">Freshness Burger</p>
          </div>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Premium santé</li>
            <li>• Customisation</li>
            <li>• Tendances wellness</li>
          </ul>
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-indigo-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Votre Progression Culturelle
        </h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-600">
            Niveau: <span className={`text-${progress.color}-600 font-bold`}>{progress.level}</span>
          </span>
          <span className="text-sm text-gray-500">{completedMissions.length}/4 missions</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500`}
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('basic') ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🗾</div>
            <div className="text-xs font-medium">Japonisation</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('cultural') ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🔄</div>
            <div className="text-xs font-medium">Philosophies</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('advanced') ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">⚖️</div>
            <div className="text-xs font-medium">Écosystème</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('relationship') ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🤝</div>
            <div className="text-xs font-medium">Réseau</div>
          </div>
        </div>
      </div>

      {/* Mission List */}
      <MissionList missions={burgerCategoryMissions} chainId="burgers" />

      {/* Cultural Insights Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🧠</span>
          Insights Culturels Clés
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-indigo-200">
            <h4 className="font-semibold text-indigo-700 mb-2">🔄 Adaptation vs Innovation</h4>
            <p className="text-sm text-gray-600">
              Chaque chaîne démontre une stratégie différente pour équilibrer fidélité culturelle 
              et innovation adaptative.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">🎯 Segmentation sophistiquée</h4>
            <p className="text-sm text-gray-600">
              Le marché japonais permet la coexistence de niches spécialisées grâce à 
              des consommateurs exigeants.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-pink-200">
            <h4 className="font-semibold text-pink-700 mb-2">🌍 Multiculturalisme pratique</h4>
            <p className="text-sm text-gray-600">
              L'écosystème burger révèle comment le Japon intègre influences externes 
              sans perdre son identité.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-700 mb-2">⚡ Évolution sociale</h4>
            <p className="text-sm text-gray-600">
              Des valeurs traditionnelles (qualité) aux tendances modernes (wellness), 
              l'évolution se reflète dans l'offre.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
