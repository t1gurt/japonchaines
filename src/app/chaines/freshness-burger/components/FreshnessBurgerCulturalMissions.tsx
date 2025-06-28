'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const freshnessBurgerMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'freshness-burger',
    title: 'Découvrir le premium accessible',
    titleJapanese: 'プレミアム・アクセシブルの体験',
    description: 'Commandez un Classic Burger avec avocat et observez la qualité de présentation. Découvrez comment Freshness Burger redéfinit le concept de fast-food premium au Japon.',
    culturalContext: 'フレッシュネスバーガーのアボカドバーガーは、健康志向とプレミアム品質を両立させる現代日本の価値観を体現しています。アボカドの導入は西海岸文化への憧れと健康意識の高まりを反映し、手頃な価格でのプレミアム体験提供は日本の中間層の「ちょっとした贅沢」文化に対応。この戦略は効率性重視のファストフードに質的差別化を持ち込んだ革新的アプローチです。',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      'プレミアム・ファストフードの理解',
      '健康志向トレンドの体験',
      '質的差別化戦略の発見'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'freshness-burger',
    title: 'Maîtriser la personnalisation santé',
    titleJapanese: 'ヘルス・カスタマイゼーションの習得',
    description: 'Explorez les options de customisation : pain complet, sans gluten, légumes supplémentaires. Discutez avec le personnel des tendances santé et de l\'adaptation aux régimes spécifiques.',
    culturalContext: 'フレッシュネスバーガーのカスタマイゼーションシステムは、個人の健康意識と多様性を尊重する現代日本社会の変化を表現しています。グルテンフリーや低糖質オプションの提供は、西洋の健康トレンドの迅速な導入と日本人の健康への関心の高さを示し、個人のニーズに応える柔軟性は画一性を重視してきた日本文化の新たな展開といえます。',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      '個人化健康文化の理解',
      '多様性尊重の社会変化体験',
      'トレンド適応メカニズムの学習'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'freshness-burger',
    title: 'Analyser la stratégie lifestyle',
    titleJapanese: 'ライフスタイル戦略の深層分析',
    description: 'Participez à une discussion sur le positionnement lifestyle, l\'influence des réseaux sociaux, et comment la marque cultive une image aspirationnelle auprès des jeunes urbains.',
    culturalContext: 'フレッシュネスバーガーのライフスタイル戦略は、SNS時代の若者文化とブランディングの融合を象徴します。インスタ映えする美しい盛り付けと健康的なイメージは、自己表現としての食事文化と承認欲求を満たす仕組みを提供。この戦略は従来の機能的価値中心から体験価値・象徴価値重視への日本消費文化の転換を表現しています。',
    difficulty: 'hard',
    estimatedTime: 30,
    rewards: [
      'SNS時代のブランディング理解',
      '体験価値経済の深層認識',
      '若者文化の変化パターン学習'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'freshness-burger',
    title: 'Intégrer la communauté wellness',
    titleJapanese: 'ウェルネス・コミュニティへの参加',
    description: 'Devenez membre de la communauté des habitués wellness-orientés. Participez aux conversations sur la nutrition et observez les rituels sociaux autour de l\'alimentation saine.',
    culturalContext: 'フレッシュネスバーガーでのウェルネス・コミュニティ形成は、現代日本の新しい社会結束パターンを表現しています。健康意識を共有する顧客間の自然な交流は、従来の地域コミュニティに代わる価値観ベースの結束を示し、個人の選択が社会的アイデンティティを形成する現代的メカニズムを体現。このコミュニティは都市部における新しい人間関係構築の場として機能しています。',
    difficulty: 'medium',
    estimatedTime: 90,
    rewards: [
      '価値観ベース・コミュニティの体験',
      '現代的人間関係構築の理解',
      'ウェルネス文化の社会的意味発見'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function FreshnessBurgerCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('freshness-burger-completed-missions');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const updateProgress = (missionId: string, completed: boolean) => {
    const updated = completed 
      ? [...completedMissions, missionId]
      : completedMissions.filter(id => id !== missionId);
    
    setCompletedMissions(updated);
    localStorage.setItem('freshness-burger-completed-missions', JSON.stringify(updated));
  };

  const getProgressLevel = () => {
    if (completedMissions.length === 0) return { level: 'Débutant', color: 'gray', percentage: 0 };
    if (completedMissions.length === 1) return { level: 'Explorateur', color: 'blue', percentage: 25 };
    if (completedMissions.length === 2) return { level: 'Connaisseur', color: 'green', percentage: 50 };
    if (completedMissions.length === 3) return { level: 'Expert', color: 'purple', percentage: 75 };
    return { level: 'Lifestyle Guru', color: 'emerald', percentage: 100 };
  };

  const progress = getProgressLevel();

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full mb-4">
          <span className="text-4xl">🥑</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Freshness Burger
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez la révolution wellness du fast-food japonais à travers Freshness Burger, 
          pionnier du premium accessible et de la personnalisation santé.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-emerald-200">
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
            className={`bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full transition-all duration-500`}
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('basic') ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🥑</div>
            <div className="text-xs font-medium">Premium</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('cultural') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🌱</div>
            <div className="text-xs font-medium">Santé</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('advanced') ? 'bg-lime-100 text-lime-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">📱</div>
            <div className="text-xs font-medium">Lifestyle</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('relationship') ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🧘‍♀️</div>
            <div className="text-xs font-medium">Wellness</div>
          </div>
        </div>
      </div>

      {/* Mission List */}
      <MissionList missions={freshnessBurgerMissions} chainId="freshness-burger" />

      {/* Special Tips Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Freshness Burger
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-emerald-200">
            <h4 className="font-semibold text-emerald-700 mb-2">🥑 Avocat signature</h4>
            <p className="text-sm text-gray-600">
              L'avocat frais est la spécialité - symbol de la tendance santé et du premium accessible.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">🌾 Options personnalisées</h4>
            <p className="text-sm text-gray-600">
              Explorez les pains spéciaux, options sans gluten et suppléments nutritionnels.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-lime-200">
            <h4 className="font-semibold text-lime-700 mb-2">📸 Présentation instagram</h4>
            <p className="text-sm text-gray-600">
              Observez le soin apporté à la présentation - pensée pour les réseaux sociaux.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-700 mb-2">💬 Communauté wellness</h4>
            <p className="text-sm text-gray-600">
              Engagez des conversations sur la nutrition et les tendances de vie saine.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
