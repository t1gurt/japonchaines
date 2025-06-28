'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const lotteriaMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'lotteria',
    title: 'Découvrir l\'approche coréo-japonaise',
    titleJapanese: '韓国系アプローチの初体験',
    description: 'Commandez un Ebi (crevette) Burger et observez les différences avec les autres chaînes japonaises. Découvrez comment Lotteria adapte les goûts coréens au marché japonais.',
    culturalContext: 'ロッテリアのエビバーガーは韓国企業による日本市場適応の象徴です。韓国の海産物重視文化と日本人の海老好きを組み合わせた絶妙な文化融合であり、単純な現地化を超えた創造的適応の例。韓国系企業が日本で成功するために必要な文化的感受性と革新性を表現し、東アジア文化圏内での相互理解と適応メカニズムを体現しています。',
    difficulty: 'easy',
    estimatedTime: 15,
    rewards: [
      '韓国系企業の日本適応戦略理解',
      '東アジア文化融合の体験',
      'ユニークメニューの文化的背景発見'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'lotteria',
    title: 'Maîtriser les spécialités fusion',
    titleJapanese: '融合メニューの文化理解',
    description: 'Explorez la gamme de saveurs uniques : Bulgogi Burger, Kimchi Potato, et les desserts coréens. Discutez avec le personnel des influences culturelles de ces créations.',
    culturalContext: 'ロッテリアのプルコギバーガーやキムチポテトは、韓国の伝統的食材を日本のファストフード文化に導入した画期的な実験です。発酵食品であるキムチの導入は日本人の健康意識と韓国の食文化の融合を表し、プルコギは肉料理における両国の共通項を活用した戦略的選択。これらは文化的境界を越えた食のイノベーションとして機能しています。',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      '韓国食文化の日本導入プロセス理解',
      '発酵食品文化の共通性発見',
      '文化境界突破のメカニズム学習'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'lotteria',
    title: 'Analyser la stratégie multiculturelle',
    titleJapanese: '多文化戦略の深層分析',
    description: 'Engagez une conversation approfondie sur la gestion multiculturelle, les défis d\'adaptation, et comment Lotteria équilibre identité coréenne et acceptation japonaise.',
    culturalContext: 'ロッテリアの多文化戦略は、グローバル化時代における企業アイデンティティの複雑性を象徴します。韓国のルーツを保持しながら日本市場で受容されるバランスは、文化的authenticity と商業的成功の微妙な均衡を要求。この戦略は在日韓国企業の立ち位置と、東アジア地域における文化的多様性の受容度を反映した社会実験といえます。',
    difficulty: 'hard',
    estimatedTime: 30,
    rewards: [
      '多文化企業経営の複雑性理解',
      '文化的アイデンティティのバランス学習',
      '東アジア地域統合の現実認識'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['cultural']
  },
  {
    id: 'relationship',
    chainId: 'lotteria',
    title: 'Construire des ponts culturels',
    titleJapanese: '文化架橋関係の構築',
    description: 'Établissez une relation continue avec l\'équipe et observez comment les interactions reflètent les dynamiques interculturelles. Participez aux événements spéciaux coréens.',
    culturalContext: 'ロッテリアでの継続的関係構築は、日韓文化間コミュニケーションの縮図を提供します。スタッフとの交流を通じて両国民の相互理解プロセスを体験し、言語的・文化的障壁の克服方法を学習。韓国系企業で働く日本人スタッフとの対話は、現代東アジアの多文化社会の現実と、若い世代の文化的開放性を反映しています。',
    difficulty: 'medium',
    estimatedTime: 90,
    rewards: [
      '日韓文化間コミュニケーション体験',
      '多文化職場環境の理解',
      '東アジア若者文化の共通性発見'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function LotteriaCulturalMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('lotteria-completed-missions');
    if (saved) {
      setCompletedMissions(JSON.parse(saved));
    }
  }, []);

  const updateProgress = (missionId: string, completed: boolean) => {
    const updated = completed 
      ? [...completedMissions, missionId]
      : completedMissions.filter(id => id !== missionId);
    
    setCompletedMissions(updated);
    localStorage.setItem('lotteria-completed-missions', JSON.stringify(updated));
  };

  const getProgressLevel = () => {
    if (completedMissions.length === 0) return { level: 'Débutant', color: 'gray', percentage: 0 };
    if (completedMissions.length === 1) return { level: 'Explorateur', color: 'blue', percentage: 25 };
    if (completedMissions.length === 2) return { level: 'Connaisseur', color: 'green', percentage: 50 };
    if (completedMissions.length === 3) return { level: 'Expert', color: 'purple', percentage: 75 };
    return { level: 'Ambassadeur Culturel', color: 'red', percentage: 100 };
  };

  const progress = getProgressLevel();

  return (
    <div className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 rounded-xl shadow-lg p-8 mb-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-600 to-red-600 rounded-full mb-4">
          <span className="text-4xl">🍤</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Lotteria
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Explorez la fusion coréo-japonaise unique à travers Lotteria, qui démontre comment 
          les entreprises asiatiques adaptent leurs identités culturelles aux marchés voisins.
        </p>
      </div>

      {/* Progress Section */}
      <div className="mb-8 p-6 bg-white rounded-xl border border-pink-200">
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
            className={`bg-gradient-to-r from-pink-500 to-red-500 h-3 rounded-full transition-all duration-500`}
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('basic') ? 'bg-pink-100 text-pink-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🍤</div>
            <div className="text-xs font-medium">Ebi Burger</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('cultural') ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🌶️</div>
            <div className="text-xs font-medium">Fusion</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('advanced') ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🌏</div>
            <div className="text-xs font-medium">Multiculturel</div>
          </div>
          <div className={`text-center p-3 rounded-lg ${completedMissions.includes('relationship') ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-400'}`}>
            <div className="text-lg mb-1">🤝</div>
            <div className="text-xs font-medium">Pont Culturel</div>
          </div>
        </div>
      </div>

      {/* Mission List */}
      <MissionList missions={lotteriaMissions} chainId="lotteria" />

      {/* Special Tips Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Conseils Spéciaux Lotteria
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-pink-200">
            <h4 className="font-semibold text-pink-700 mb-2">🍤 Ebi Burger</h4>
            <p className="text-sm text-gray-600">
              Le burger signature aux crevettes - une innovation coréenne adaptée aux goûts japonais.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-700 mb-2">🌶️ Saveurs coréennes</h4>
            <p className="text-sm text-gray-600">
              Découvrez les influences subtiles : gochujang dans les sauces, kimchi en accompagnement.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-700 mb-2">🗣️ Dialogue interculturel</h4>
            <p className="text-sm text-gray-600">
              Posez des questions sur les différences culturelles et les adaptations nécessaires.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-700 mb-2">🎉 Événements spéciaux</h4>
            <p className="text-sm text-gray-600">
              Participez aux promotions liées aux fêtes coréennes ou aux collaborations K-pop.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Experience Guide Link */}
      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-700 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
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
