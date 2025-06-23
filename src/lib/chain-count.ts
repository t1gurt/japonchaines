/**
 * チェーン数管理ユーティリティ
 * 共有データから自動的にチェーン数を取得
 */

import { restaurantChains, foodTypes } from '../data/site-data';

/**
 * 総チェーン数を取得
 */
export const getTotalChainCount = (): number => {
  return restaurantChains.length;
};

/**
 * 総料理カテゴリ数を取得
 */
export const getTotalFoodTypeCount = (): number => {
  return foodTypes.length;
};

/**
 * フランス語での数字表記
 */
export const getChainCountText = (): string => {
  const count = getTotalChainCount();
  return `${count} chaînes`;
};

/**
 * 実装完了表記
 */
export const getImplementationStatusText = (): string => {
  const count = getTotalChainCount();
  return `${count}/${count} - 100%`;
};
