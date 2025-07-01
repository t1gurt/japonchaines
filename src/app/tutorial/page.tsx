/**
 * メインチュートリアルページ
 * 学習ダッシュボード、進捗表示、クイックアクセス機能
 */
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Hydrationエラーを防ぐため、SSRを無効にしてクライアントサイドでのみレンダリング
const ClientOnlyTutorial = dynamic(
  () => import('@/components/tutorial/ClientOnlyTutorial').then(mod => ({ default: mod.ClientOnlyTutorial })),
  { 
    ssr: false,
    loading: () => (
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
          <div className="min-h-[600px] bg-white rounded-lg shadow-lg p-8">
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
);

export default function TutorialPage() {
  return <ClientOnlyTutorial />;
}