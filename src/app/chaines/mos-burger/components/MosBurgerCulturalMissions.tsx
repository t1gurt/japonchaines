'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const mosBurgerMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'mos-burger',
    title: 'Découvrir la philosophie "Made to Order"',
    titleJapanese: '注文後調理システムの体験',
    description: 'Commandez votre premier Mos Burger et observez le processus de préparation minutieux. Découvrez comment cette chaîne japonaise a révolutionné le concept de fast-food en privilégiant la qualité sur la rapidité.',
    culturalContext: 'モスバーガーは「注文を受けてから作る」という革新的システムで、日本独特の品質重視文化をファストフード業界に導入しました。アメリカ発祥のハンバーガー文化を日本的価値観で再定義し、「早い・安い・美味しい」に「丁寧」を加えた四つ目の価値を創造。このシステムは日本人の完璧主義と顧客満足追求の精神を体現しています。',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      'Made to Order システムの理解',
      '日本的品質文化の体験',
      'ファストフード革新の発見'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'mos-burger',
    title: 'Maîtriser les spécialités japonaises uniques',
    titleJapanese: '日本独自メニューの文化理解',
    description: 'Explorez les créations uniques comme le Rice Burger, Mos Chicken, et les sauces spéciales. Engagez une conversation avec le personnel sur l\'histoire de ces innovations et leur signification culturelle.',
    culturalContext: 'モスバーガーのライスバーガーやモスチキンは、日本の食材と技術を活用した文化的イノベーションです。米を使ったバンズは日本人の主食文化への敬意と創造性を表し、独自のソースは日本人の味覚に合わせた細やかな調整の結果。これらの商品は単なるメニューではなく、日本企業の創造力と文化適応能力の象徴として機能しています。',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      '日本的イノベーションの理解',
      '文化適応メカニズムの発見',
      '創造的思考パターンの学習'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'mos-burger',
    title: 'Analyser la stratégie "Local & Fresh"',
    titleJapanese: '国産食材戦略の深層理解',
    description: 'Participez à une discussion approfondie sur la politique de sourcing local, la traçabilité des ingrédients, et l\'impact sur la communauté locale. Comparez avec les stratégies internationales des autres chaînes.',
    culturalContext: 'モスバーガーの国産食材重視は、食の安全と地域経済支援を両立させる日本的CSR哲学の実践です。トレーサビリティへの執着は食品偽装事件を経験した日本社会の食への信頼回復努力を反映し、地産地消は地域コミュニティとの共生を重視する日本企業の社会責任意識を表現。この戦略は経済合理性を超えた日本的価値観の体現といえます。',
    difficulty: 'hard',
    estimatedTime: 30,
    rewards: [
      '企業社会責任の日本的解釈',
      '食の安全文化の深層理解',
      '地域共生哲学の発見'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'mos-burger',
    title: 'Construire une relation avec l\'équipe Mos',
    titleJapanese: 'モス家族との絆構築',
    description: 'Devenez un habitué et observez l\'évolution de vos interactions avec le personnel. Participez aux événements locaux ou initiatives communautaires organisés par le restaurant.',
    culturalContext: 'モスバーガーの「モス家族」概念は、企業と顧客を家族的関係で結ぶ日本的ビジネス哲学の表現です。従業員の丁寧な接客と継続的な関係構築は、一期一会の精神と長期的信頼関係を重視する日本文化の融合。常連客との個人的なつながりを大切にする姿勢は、効率重視のファストフード業界において日本的人間性を保持する試みといえます。',
    difficulty: 'medium',
    estimatedTime: 90,
    rewards: [
      '日本的顧客関係の体験',
      '家族的企業文化の理解',
      '継続的信頼関係の構築'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function MosBurgerCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('mos-burger-completed-missions');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const updateProgress = (missionId: string, completed: boolean) => {
    const updated = completed 
      ? [...completedMissions, missionId]
      : completedMissions.filter(id => id !== missionId);
    
    setCompletedMissions(updated);
    localStorage.setItem('mos-burger-completed-missions', JSON.stringify(updated));
  };

  const getProgressLevel = () => {
    if (completedMissions.length === 0) return { level: 'Débutant', color: 'gray', percentage: 0 };
    if (completedMissions.length === 1) return { level: 'Explorateur', color: 'blue', percentage: 25 };
    if (completedMissions.length === 2) return { level: 'Connaisseur', color: 'green', percentage: 50 };
    if (completedMissions.length === 3) return { level: 'Expert', color: 'purple', percentage: 75 };
    return { level: 'Maître Mos', color: 'red', percentage: 100 };
  };

  const progress = getProgressLevel();

  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-4">
          <span className="text-4xl">🍔</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Mos Burger
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez l'innovation japonaise dans le fast-food à travers Mos Burger, pionnier du "Made to Order" 
          qui a révolutionné l'industrie en privilégiant la qualité artisanale sur la rapidité pure.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-red-200">
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
            className={`bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-500`}
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('basic') ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🍔</div>
            <div className="text-xs font-medium">Made to Order</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('cultural') ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🍙</div>
            <div className="text-xs font-medium">Innovation</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('advanced') ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🌾</div>
            <div className="text-xs font-medium">Local & Fresh</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('relationship') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">👨‍👩‍👧‍👦</div>
            <div className="text-xs font-medium">Famille Mos</div>
          </div>
        </div>
      </div>

      {/* Mission List */}
      <MissionList missions={mosBurgerMissions} chainId="mos-burger" />

      {/* Special Tips Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Mos Burger
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">🕒 Temps d'attente</h4>
            <p className="text-sm text-gray-600">
              L'attente fait partie de l'expérience. Observez la préparation minutieuse et 
              appréciez la différence de qualité.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Communication</h4>
            <p className="text-sm text-gray-600">
              Posez des questions sur les ingrédients locaux et l'histoire des recettes spéciales.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-700 mb-2">🍙 Rice Burger</h4>
            <p className="text-sm text-gray-600">
              Essayez absolument le Rice Burger - une innovation 100% japonaise qui utilise 
              le riz compressé comme pain.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-700 mb-2">🌱 Local sourcing</h4>
            <p className="text-sm text-gray-600">
              Remarquez les informations sur l'origine des ingrédients - témoignage de la 
              transparence japonaise.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
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
