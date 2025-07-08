'use client';

import dynamic from 'next/dynamic';

// クライアントサイドでのみ動作するFloatingVisitButtonを作成
const DynamicFloatingVisitButton = dynamic(
  () => import('@/components/FloatingVisitButton'),
  { 
    ssr: false,  // サーバーサイドレンダリングを無効化
    loading: () => null  // ローディング中は何も表示しない
  }
);

export default DynamicFloatingVisitButton;
