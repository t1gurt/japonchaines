'use client';

import { useEffect } from 'react';
import { event } from '@/lib/gtag';

interface PageViewTrackerProps {
  pageName: string;
  pageCategory: string;
  pageType?: string;
}

export default function PageViewTracker({ 
  pageName, 
  pageCategory, 
  pageType = 'info_page' 
}: PageViewTrackerProps) {
  useEffect(() => {
    // コンポーネントがマウントされた時にページビューイベントを送信
    event({
      action: 'view_page',
      category: 'page_engagement',
      label: pageName,
      custom_parameters: {
        page_name: pageName,
        page_category: pageCategory,
        content_type: pageType
      }
    });
  }, [pageName, pageCategory, pageType]);

  // このコンポーネントは何も表示しない
  return null;
}
