/**
 * 簡素なチュートリアルページ - エラー修正版
 * Hydrationエラーを完全に回避
 */
'use client';

import React, { useState, useEffect } from 'react';

export default function SimpleTutorialPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="animate-pulse">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    {
      id: 'dashboard',
      label: '学習ダッシュボード',
      icon: '📊',
      description: '学習進捗と推奨アクション'
    },
    {
      id: 'badges',
      label: 'バッジコレクション',
      icon: '🏆',
      description: '獲得したバッジとマイルストーン'
    },
    {
      id: 'reports',
      label: '実店舗レポート',
      icon: '📝',
      description: '実際の店舗訪問記録'
    },
    {
      id: 'quiz',
      label: 'クイズチャレンジ',
      icon: '🧠',
      description: '知識確認とスキルアップ'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">学習ダッシュボード</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">現在の進捗</h3>
                <div className="bg-blue-200 rounded-full h-4 mb-2">
                  <div className="bg-blue-500 h-4 rounded-full w-1/4"></div>
                </div>
                <p className="text-blue-700">25% 完了</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800">総ポイント</h4>
                  <p className="text-2xl font-bold text-green-600">0</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800">獲得バッジ</h4>
                  <p className="text-2xl font-bold text-purple-600">0</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'badges':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">バッジコレクション</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <p className="text-sm text-gray-600">バッジ {i + 1}</p>
                  <p className="text-xs text-gray-400">未獲得</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'reports':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">実店舗レポート</h2>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">まだレポートがありません</h3>
              <p className="text-gray-600 mb-4">実際にチェーン店を訪問して、体験をレポートしましょう！</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                新しいレポートを作成
              </button>
            </div>
          </div>
        );
      
      case 'quiz':
        return (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">クイズチャレンジ</h2>
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">サンプルクイズ</h3>
                <p className="text-yellow-700 mb-4">マクドナルドで注文する際の基本的なマナーは？</p>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 bg-white border border-yellow-200 rounded hover:bg-yellow-50 transition-colors">
                    大きな声で注文する
                  </button>
                  <button className="w-full text-left p-3 bg-white border border-yellow-200 rounded hover:bg-yellow-50 transition-colors">
                    列に並んで順番を待つ
                  </button>
                  <button className="w-full text-left p-3 bg-white border border-yellow-200 rounded hover:bg-yellow-50 transition-colors">
                    指で商品を指差す
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
                onClick={() => setActiveTab(tab.id)}
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
          {renderContent()}
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
}
