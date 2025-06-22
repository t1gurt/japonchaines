'use client';

import { useEffect } from 'react';
import { trackChainView } from '@/lib/analytics-events';

interface ChainViewTrackerProps {
  chainName: string;
  chainCategory: string;
}

export default function ChainViewTracker({ chainName, chainCategory }: ChainViewTrackerProps) {
  useEffect(() => {
    // コンポーネントがマウントされた時にチェーン店閲覧イベントを送信
    trackChainView(chainName, chainCategory);
  }, [chainName, chainCategory]);

  // このコンポーネントは何も表示しない
  return null;
}
