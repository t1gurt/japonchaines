import { event } from '@/lib/gtag';

// レストランチェーンページの閲覧を追跡（改良版）
export const trackChainView = (chainName: string, chainCategory: string) => {
  event({
    action: 'view_chain',
    category: 'restaurant_engagement',
    label: chainName,
    custom_parameters: {
      chain_name: chainName,
      chain_category: chainCategory,
      content_type: 'chain_detail'
    }
  });
};

// カテゴリページの閲覧を追跡
export const trackCategoryView = (categoryName: string) => {
  event({
    action: 'view_category',
    category: 'category_engagement', 
    label: categoryName,
    custom_parameters: {
      category_name: categoryName,
      content_type: 'category_listing'
    }
  });
};

// ガイドページの閲覧を追跡
export const trackGuideView = (guideName: string) => {
  event({
    action: 'view_guide',
    category: 'guide_engagement',
    label: guideName,
    custom_parameters: {
      guide_name: guideName,
      content_type: 'guide'
    }
  });
};

// チェーン店比較イベント
export const trackChainComparison = (chainsCompared: string[]) => {
  event({
    action: 'compare_chains',
    category: 'restaurant_engagement',
    label: chainsCompared.join(' vs '),
    custom_parameters: {
      chains_compared: chainsCompared,
      comparison_count: chainsCompared.length
    }
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
export const trackSearch = (searchTerm: string, resultCount?: number) => {
  event({
    action: 'search',
    category: 'search_engagement',
    label: searchTerm,
    custom_parameters: {
      search_term: searchTerm,
      result_count: resultCount
    }
  });
};

// レストランチェーンページの閲覧を追跡（後方互換性）
export const trackRestaurantView = (restaurantName: string) => {
  // カテゴリを推測する簡単なマッピング
  const categoryMap: { [key: string]: string } = {
    'yoshinoya': 'gyudon',
    'sukiya': 'gyudon', 
    'matsuya': 'gyudon',
    'ichiran': 'ramen',
    'ippudo': 'ramen',
    'sushiro': 'kaiten-zushi',
    'kura-sushi': 'kaiten-zushi',
    'coco-ichibanya': 'curry',
    'miyamoto-munashi': 'teishoku',
    'ootoya': 'teishoku',
    'yayoiken': 'teishoku'
  };
  
  const category = categoryMap[restaurantName.toLowerCase()] || 'other';
  trackChainView(restaurantName, category);
};
