'use client';

import { useEffect } from 'react';
import { trackCategoryView } from '@/lib/analytics-events';

interface CategoryViewTrackerProps {
  categoryName: string;
}

export default function CategoryViewTracker({ categoryName }: CategoryViewTrackerProps) {
  useEffect(() => {
    // コンポーネントがマウントされた時にカテゴリ閲覧イベントを送信
    trackCategoryView(categoryName);
  }, [categoryName]);

  // このコンポーネントは何も表示しない
  return null;
}
