/**
 * クライアントサイドでのみレンダリングされるチュートリアルコンポーネント
 * Hydrationエラーを完全に防ぐため
 */
'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { LearningDashboard } from './LearningDashboard';
import { BadgeDisplay } from './BadgeDisplay';
import { SelfReportingSystem } from './SelfReportingSystem';
import { QuizComponent } from './QuizComponent';
import { type QuizQuestion, type QuizResult } from '@/types/tutorial';

interface ClientOnlyTutorialProps {
  className?: string;
}

const ClientOnlyTutorial: React.FC<ClientOnlyTutorialProps> = ({ 
  className = '' 
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'badges' | 'reports' | 'quiz'>('dashboard');

  // サンプルクイズ質問
  const sampleQuestions: QuizQuestion[] = useMemo(() => [
    {
      id: 'q1',
      question: 'マクドナルドで注文する際の基本的なマナーは？',
      type: 'multiple_choice',
      options: [
        '大きな声で注文する',
        '列に並んで順番を待つ',
        '指で商品を指差す',
        '注文前に席を確保する'
      ],
      correctAnswer: '1',
      explanation: '日本では列に並んで順番を待つのが基本的なマナーです。',
      points: 10,
      difficulty: 'easy',
      category: 'manners'
    },
    {
      id: 'q2',
      question: 'すき家の牛丼の基本的なサイズは？',
      type: 'multiple_choice',
      options: [
        'S、M、L',
        '並盛、大盛、特盛',
        '小、中、大',
        'レギュラー、ラージ'
      ],
      correctAnswer: '1',
      explanation: 'すき家では「並盛」「大盛」「特盛」というサイズ展開です。',
      points: 10,
      difficulty: 'easy',
      category: 'chains'
    }
  ], []);

  const handleQuizComplete = useCallback((result: QuizResult) => {
    console.log('Quiz completed:', result);
    // ここで結果を保存したり、バッジ獲得の処理を行う
  }, []);

  const handleTabChange = useCallback((tabId: 'dashboard' | 'badges' | 'reports' | 'quiz') => {
    setActiveTab(tabId);
  }, []);

  const tabs = [
    {
      id: 'dashboard' as const,
      label: '学習ダッシュボード',
      icon: '📊',
      description: '学習進捗と推奨アクション'
    },
    {
      id: 'badges' as const,
      label: 'バッジコレクション',
      icon: '🏆',
      description: '獲得したバッジとマイルストーン'
    },
    {
      id: 'reports' as const,
      label: '実店舗レポート',
      icon: '📝',
      description: '実際の店舗訪問記録'
    },
    {
      id: 'quiz' as const,
      label: 'クイズチャレンジ',
      icon: '🧠',
      description: '知識確認とスキルアップ'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🍣 日本チェーン店チュートリアル
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            日本の主要チェーン店について学び、実践的な知識を身につけましょう。
            マナーから注文方法まで、幅広い情報をインタラクティブに学習できます。
          </p>
        </div>

        {/* タブナビゲーション */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  p-4 rounded-lg border-2 transition-all duration-300
                  ${activeTab === tab.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }
                `}
              >
                <div className="text-2xl mb-2">{tab.icon}</div>
                <div className="font-semibold mb-1">{tab.label}</div>
                <div className="text-xs text-gray-600">{tab.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className="min-h-[600px]">
          {activeTab === 'dashboard' && <LearningDashboard />}
          {activeTab === 'badges' && <BadgeDisplay />}
          {activeTab === 'reports' && <SelfReportingSystem />}
          {activeTab === 'quiz' && (
            <QuizComponent 
              questions={sampleQuestions} 
              onComplete={handleQuizComplete} 
            />
          )}
        </div>

        {/* フッター情報 */}
        <div className="mt-12 text-center text-gray-600">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-3 text-gray-800">📚 学習の進め方</h3>
              <p className="text-sm">
                ダッシュボードで現在の進捗を確認し、推奨されるアクションを実行しましょう。
                段階的に知識を深めていけます。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-3 text-gray-800">🏆 バッジシステム</h3>
              <p className="text-sm">
                学習の進捗に応じてバッジを獲得できます。
                全30種類以上のバッジを集めて、専門家を目指しましょう。
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold mb-3 text-gray-800">🍜 実践レポート</h3>
              <p className="text-sm">
                実際に店舗を訪問した際の体験をレポートできます。
                写真付きで記録し、知識を実践に活かしましょう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOnlyTutorial;
