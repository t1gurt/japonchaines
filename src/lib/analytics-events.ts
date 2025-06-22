import { event } from '@/lib/gtag';

// レストランチェーンページの閲覧を追跡
export const trackRestaurantView = (restaurantName: string) => {
  event({
    action: 'view_restaurant',
    category: 'engagement',
    label: restaurantName,
  });
};

// ガイドページの閲覧を追跡
export const trackGuideView = (guideName: string) => {
  event({
    action: 'view_guide',
    category: 'engagement',
    label: guideName,
  });
};

// 外部リンクのクリックを追跡
export const trackExternalLink = (url: string, linkName: string) => {
  event({
    action: 'click_external_link',
    category: 'engagement',
    label: `${linkName} - ${url}`,
  });
};

// 検索機能の使用を追跡
export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
  });
};
