/**
 * 自己申告システム管理hook
 * 実店舗訪問の自己申告機能
 */

import { useState, useCallback, useMemo } from 'react';
import { VisitedStore, Chain } from '../../types/tutorial';
import { chains } from '../../data/tutorial/chains';
import { useLearningProgress } from './useLearningProgress';

export const useSelfReport = () => {
  const { profile, reportStoreVisit: addStoreVisit } = useLearningProgress();
  const [isReporting, setIsReporting] = useState(false);
  const [reportError, setReportError] = useState<string | null>(null);

  // 訪問済み店舗
  const visitedStores = useMemo(() => {
    return profile?.selfReportedStores || [];
  }, [profile]);

  // 訪問可能なチェーン店（まだ訪問していない）
  const availableChains = useMemo(() => {
    if (!profile) return chains;

    const visitedChainIds = profile.selfReportedStores.map((store: VisitedStore) => store.chainId);
    return chains.filter((chain: Chain) => 
      !visitedChainIds.includes(chain.id)
    );
  }, [profile]);

  // カテゴリー別訪問統計
  const visitStatsByCategory = useMemo(() => {
    if (!visitedStores.length) return {};

    const stats: Record<string, { visited: number; total: number; percentage: number; chains: string[] }> = {};

    // 全チェーンをカテゴリー別に集計
    chains.forEach((chain: Chain) => {
      if (!stats[chain.category]) {
        stats[chain.category] = { visited: 0, total: 0, percentage: 0, chains: [] };
      }
      stats[chain.category].total++;
    });

    // 訪問済みチェーンをカテゴリー別に集計
    visitedStores.forEach((store: VisitedStore) => {
      const chain = chains.find((c: Chain) => c.id === store.chainId);
      if (chain && stats[chain.category]) {
        stats[chain.category].visited++;
        stats[chain.category].chains.push(chain.name);
      }
    });

    // パーセンテージ計算
    Object.keys(stats).forEach(category => {
      const stat = stats[category];
      stat.percentage = stat.total > 0 ? Math.round((stat.visited / stat.total) * 100) : 0;
    });

    return stats;
  }, [visitedStores]);

  // 制覇レベルの計算
  const getConquestLevel = useCallback(() => {
    const totalVisited = visitedStores.length;
    const totalChains = chains.length;
    const percentage = Math.round((totalVisited / totalChains) * 100);

    let level = 'Débutant';
    let nextTarget = 5;

    if (totalVisited >= 30) {
      level = 'Légende';
      nextTarget = totalChains;
    } else if (totalVisited >= 20) {
      level = 'Maître';
      nextTarget = 30;
    } else if (totalVisited >= 10) {
      level = 'Expert';
      nextTarget = 20;
    } else if (totalVisited >= 5) {
      level = 'Explorateur';
      nextTarget = 10;
    }

    return {
      level,
      visited: totalVisited,
      total: totalChains,
      percentage,
      nextTarget,
      remaining: nextTarget - totalVisited
    };
  }, [visitedStores]);

  // 店舗訪問の報告
  const reportStoreVisit = useCallback(async (
    chainId: string,
    visitDate?: Date
  ): Promise<boolean> => {
    setIsReporting(true);
    setReportError(null);

    try {
      const chain = chains.find((c: Chain) => c.id === chainId);
      if (!chain) {
        throw new Error('Chaîne non trouvée');
      }

      // 既に訪問済みかチェック
      const alreadyVisited = visitedStores.some((store: VisitedStore) => store.chainId === chainId);
      if (alreadyVisited) {
        throw new Error('Vous avez déjà signalé une visite pour cette chaîne');
      }

      // 基本ポイント
      const earnedPoints = 20;

      // 訪問記録の作成
      const storeVisit: VisitedStore = {
        chainId,
        chainName: chain.name,
        visitDate,
        earnedPoints,
        earnedBadges: [],
        registeredAt: new Date()
      };

      // 訪問記録を保存
      addStoreVisit(chainId, chain.name);

      setIsReporting(false);
      return true;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'enregistrement';
      setReportError(errorMessage);
      setIsReporting(false);
      return false;
    }
  }, [visitedStores, addStoreVisit]);

  // 訪問履歴の取得
  const getVisitHistory = useCallback((limit?: number) => {
    const sortedVisits = visitedStores
      .sort((a: VisitedStore, b: VisitedStore) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime());

    if (limit) {
      return sortedVisits.slice(0, limit);
    }

    return sortedVisits;
  }, [visitedStores]);

  // チェーン検索（訪問報告用）
  const searchChains = useCallback((query: string) => {
    const lowercaseQuery = query.toLowerCase();
    
    return availableChains.filter((chain: Chain) =>
      chain.name.toLowerCase().includes(lowercaseQuery) ||
      chain.category.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 10); // 最大10件
  }, [availableChains]);

  return {
    // 状態
    visitedStores,
    availableChains,
    isReporting,
    reportError,

    // 統計
    visitStatsByCategory,
    getConquestLevel,

    // アクション
    reportStoreVisit,

    // 取得・検索
    getVisitHistory,
    searchChains,

    // 便利な関数
    hasVisited: (chainId: string) => {
      return visitedStores.some((store: VisitedStore) => store.chainId === chainId);
    },

    getVisitDetails: (chainId: string) => {
      return visitedStores.find((store: VisitedStore) => store.chainId === chainId);
    },

    getTotalPoints: () => {
      return visitedStores.reduce((sum: number, store: VisitedStore) => sum + store.earnedPoints, 0);
    }
  };
};
