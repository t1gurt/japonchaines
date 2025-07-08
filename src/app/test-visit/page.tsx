'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SelfReportingSystem } from '@/components/tutorial/SelfReportingSystem';

export default function TestVisitPage() {
  const [localStorageData, setLocalStorageData] = useState<string>('');
  const [debugInfo, setDebugInfo] = useState<any>({});
  const pathname = usePathname();

  useEffect(() => {
    // クライアントサイドでのみlocalStorageを確認
    const checkLocalStorage = () => {
      try {
        const reports = localStorage.getItem('tutorial_visit_reports');
        setLocalStorageData(reports || 'データなし');
      } catch (error) {
        setLocalStorageData('エラー: ' + String(error));
      }
    };

    checkLocalStorage();
    // 1秒ごとにチェック
    const interval = setInterval(checkLocalStorage, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // デバッグ情報を更新
    setDebugInfo({
      pathname,
      isChainPage: pathname.startsWith('/chaines/'),
      currentTime: new Date().toLocaleTimeString(),
      windowLocation: typeof window !== 'undefined' ? window.location.href : 'サーバーサイド'
    });
  }, [pathname]);

  const clearLocalStorage = () => {
    try {
      localStorage.removeItem('tutorial_visit_reports');
      setLocalStorageData('データなし');
    } catch (error) {
      console.error('LocalStorage削除エラー:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">テスト: フローティング訪問履歴機能</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
        <h2 className="text-lg font-bold text-yellow-800 mb-2">📱 フローティングボタンのテスト方法</h2>
        <ol className="text-yellow-700 space-y-1">
          <li>1. 任意のチェーン店ページにアクセス (例: <a href="/chaines/sukiya" className="underline text-blue-600">/chaines/sukiya</a>)</li>
          <li>2. 画面右下にフローティングボタンが表示されることを確認</li>
          <li>3. ボタンをクリックして訪問記録</li>
          <li>4. 成功メッセージが表示されることを確認</li>
        </ol>
      </div>

      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8">
        <h2 className="text-lg font-bold text-blue-800 mb-2">🔍 デバッグ情報</h2>
        <pre className="text-sm bg-white p-2 rounded border">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">🔗 テスト用チェーン店リンク</h2>
          <div className="space-y-2">
            <a href="/chaines/sukiya" className="block text-blue-600 hover:underline">→ Sukiya (すき家)</a>
            <a href="/chaines/yoshinoya" className="block text-blue-600 hover:underline">→ Yoshinoya (吉野家)</a>
            <a href="/chaines/matsuya" className="block text-blue-600 hover:underline">→ Matsuya (松屋)</a>
            <a href="/chaines/saizeriya" className="block text-blue-600 hover:underline">→ Saizeriya (サイゼリヤ)</a>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">💡 機能の特徴</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• チェーン店ページでのみ表示</li>
            <li>• ホバー時に展開アニメーション</li>
            <li>• モバイルメニューとの競合を解決</li>
            <li>• 直感的なMapPinアイコン</li>
            <li>• チェーン名のツールチップ表示</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-2">LocalStorage データ確認</h3>
        <pre className="text-sm bg-white p-2 rounded border overflow-auto max-h-32">
          {localStorageData}
        </pre>
        <button 
          onClick={clearLocalStorage}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          LocalStorageをクリア
        </button>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">自己申告システム</h2>
        <SelfReportingSystem />
      </div>
    </div>
  );
}
