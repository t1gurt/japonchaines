'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview, GA_TRACKING_ID } from '@/lib/gtag';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    // 静的エクスポートではクエリパラメータは使用せず、パスのみを送信
    const url = pathname;
    pageview(url);
  }, [pathname]);
}
