// Google Analytics 4 (GA4) 設定
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// GA4が有効かどうかを確認
export const isProduction = process.env.NODE_ENV === 'production';

// GitHub Pagesのベースパスを取得
const basePath = process.env.NODE_ENV === 'production' ? '/japonchaines' : '';

// ページビューを送信
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    // GitHub Pagesの場合、ベースパスを除いた相対パスを使用
    const cleanUrl = url.startsWith(basePath) ? url.slice(basePath.length) : url;
    window.gtag('config', GA_TRACKING_ID, {
      page_location: window.location.origin + basePath + cleanUrl,
      page_path: cleanUrl,
    });
  }
};

// イベントを送信
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
