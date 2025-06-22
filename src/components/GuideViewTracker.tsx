'use client';

import { useEffect } from 'react';
import { trackGuideView } from '@/lib/analytics-events';

interface GuideViewTrackerProps {
  guideName: string;
}

export default function GuideViewTracker({ guideName }: GuideViewTrackerProps) {
  useEffect(() => {
    // コンポーネントがマウントされた時にガイド閲覧イベントを送信
    trackGuideView(guideName);
  }, [guideName]);

  // このコンポーネントは何も表示しない
  return null;
}
