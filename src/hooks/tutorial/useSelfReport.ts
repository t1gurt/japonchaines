/**
 * 自己申告システム管理hook
 * 実店舗訪問の自己申告機能
 */

import { useState, useCallback, useMemo } from 'react';
import { VisitedStore, ChainInfo } from '../../types/tutorial';
import { tutorialChains } from '../../data/tutorial/chains';
import { useLocalStorage } from './useLocalStorage';
import { useBadgeSystem } from './useBadgeSystem';

export const useSelfReport = () => {
  const { progress, addStoreVisit } = useLocalStorage();
  const { checkStoreVisitBadges } = useBadgeSystem();
  const [isReporting, setIsReporting] = useState(false);
  const [reportError, setReportError] = useState<string | null>(null);

  // 現在のプロフィール
  const profile = progress?.profile;

  // 訪問済み店舗
  const visitedStores = useMemo(() => {
    return profile?.selfReportedStores || [];
  }, [profile]);

  // 訪問可能なチェーン店（まだ訪問していない）
  const availableChains = useMemo(() => {
    if (!profile) return Object.values(tutorialChains);

    const visitedChainIds = profile.selfReportedStores.map(store => store.chainId);
    return Object.values(tutorialChains).filter(chain => 
      !visitedChainIds.includes(chain.id)
    );
  }, [profile]);

  // カテゴリー別訪問統計
  const visitStatsByCategory = useMemo(() => {
    if (!visitedStores.length) return {};

    const stats: Record<string, { visited: number; total: number; percentage: number; chains: string[] }> = {};

    // 全チェーンをカテゴリー別に集計
    Object.values(tutorialChains).forEach(chain => {
      if (!stats[chain.category]) {
        stats[chain.category] = { visited: 0, total: 0, percentage: 0, chains: [] };
      }
      stats[chain.category].total++;
    });

    // 訪問済みチェーンをカテゴリー別に集計
    visitedStores.forEach(store => {
      const chain = tutorialChains[store.chainId];
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
    const totalChains = Object.keys(tutorialChains).length;
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
    visitDate?: Date,
    notes?: string
  ): Promise<boolean> => {
    setIsReporting(true);
    setReportError(null);

    try {
      const chain = tutorialChains[chainId];
      if (!chain) {
        throw new Error('Chaîne non trouvée');
      }

      // 既に訪問済みかチェック
      const alreadyVisited = visitedStores.some(store => store.chainId === chainId);
      if (alreadyVisited) {
        throw new Error('Vous avez déjà signalé une visite pour cette chaîne');
      }

      // 訪問ポイントの計算（チェーンの希少度や難易度に基づく）
      let earnedPoints = 20; // 基本ポイント
      
      // 注文システムによるボーナス
      switch (chain.orderingSystem) {
        case 'ticket_machine':
          earnedPoints += 10;
          break;
        case 'touch_panel':
          earnedPoints += 15;
          break;
        case 'table_service':
          earnedPoints += 5;
          break;
      }

      // 価格帯によるボーナス
      if (chain.priceRange === 'premium') {
        earnedPoints += 10;
      }

      // 訪問記録の作成
      const storeVisit: VisitedStore = {
        chainId,
        chainName: chain.name,
        visitDate,
        earnedPoints,
        earnedBadges: [], // バッジは後で追加
        registeredAt: new Date()
      };

      // 訪問記録を保存
      addStoreVisit(storeVisit);

      // バッジチェック（少し遅延させてアニメーション効果を高める）
      setTimeout(() => {
        checkStoreVisitBadges();
      }, 500);

      setIsReporting(false);
      return true;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erreur lors de l\'enregistrement';
      setReportError(errorMessage);
      setIsReporting(false);
      return false;
    }
  }, [visitedStores, addStoreVisit, checkStoreVisitBadges]);

  // 訪問記録の削除（間違って報告した場合）
  const removeStoreVisit = useCallback((chainId: string) => {
    if (!profile) return false;

    const confirmRemove = window.confirm(
      'Êtes-vous sûr de vouloir supprimer cette visite ? Cette action ne peut pas être annulée.'
    );

    if (confirmRemove) {
      // ここでは簡単な実装として、useLocalStorageに削除機能を追加する必要があります
      // 今回は警告メッセージのみ表示
      console.warn('Suppression de visite non implémentée - contactez le support');
      return false;
    }

    return false;
  }, [profile]);

  // 訪問履歴の取得
  const getVisitHistory = useCallback((limit?: number) => {
    const sortedVisits = visitedStores
      .sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime());

    if (limit) {
      return sortedVisits.slice(0, limit);
    }

    return sortedVisits;
  }, [visitedStores]);

  // チェーン検索（訪問報告用）
  const searchChains = useCallback((query: string) => {
    const lowercaseQuery = query.toLowerCase();
    
    return availableChains.filter(chain =>
      chain.name.toLowerCase().includes(lowercaseQuery) ||
      chain.nameJa.includes(query) ||
      chain.category.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 10); // 最大10件
  }, [availableChains]);

  // おすすめ訪問先
  const getRecommendedVisits = useCallback((limit = 5) => {
    if (!profile) return [];

    // 学習したレッスンに関連するチェーンを優先
    const learningRelatedChains = availableChains.filter(chain => {
      // 完了したレッスンに関連するチェーンかどうか
      return profile.completedLessons.some(lessonId => {
        const lesson = require('../../data/tutorial/lessons').lessons[lessonId];
        return lesson?.relatedChains.includes(chain.id);
      });
    });

    // レベルに適した難易度のチェーンを優先
    const levelAppropriateChains = availableChains.filter(chain => {
      if (profile.level === 'debutant') {
        return ['counter', 'ticket_machine'].includes(chain.orderingSystem);
      } else if (profile.level === 'intermediaire') {
        return ['touch_panel', 'table_service'].includes(chain.orderingSystem);
      }
      return true; // 上級者は全て
    });

    // 優先順位: 学習関連 > レベル適合 > その他
    const recommendations = [
      ...learningRelatedChains.slice(0, 2),
      ...levelAppropriateChains.filter(chain => 
        !learningRelatedChains.includes(chain)
      ).slice(0, 2),
      ...availableChains.filter(chain => 
        !learningRelatedChains.includes(chain) && 
        !levelAppropriateChains.includes(chain)
      ).slice(0, 1)
    ].slice(0, limit);

    return recommendations.map(chain => ({
      chain,
      reason: learningRelatedChains.includes(chain) 
        ? 'Lié à vos leçons complétées'
        : levelAppropriateChains.includes(chain)
        ? 'Adapté à votre niveau'
        : 'Nouvelle expérience recommandée',
      difficulty: chain.orderingSystem === 'counter' ? 'Facile' :
                 chain.orderingSystem === 'ticket_machine' ? 'Moyen' :
                 chain.orderingSystem === 'touch_panel' ? 'Moyen' : 'Difficile',
      estimatedPoints: 20 + (chain.orderingSystem === 'touch_panel' ? 15 : 
                           chain.orderingSystem === 'ticket_machine' ? 10 : 5)
    }));
  }, [profile, availableChains]);

  // 制覇進捗の詳細
  const getProgressDetails = useCallback(() => {
    const conquestLevel = getConquestLevel();
    const categoryStats = visitStatsByCategory;

    // 次のマイルストーン
    const milestones = [
      { visits: 1, title: 'Premier Visiteur', achieved: conquestLevel.visited >= 1 },
      { visits: 5, title: 'Explorateur', achieved: conquestLevel.visited >= 5 },
      { visits: 10, title: 'Conquérant', achieved: conquestLevel.visited >= 10 },
      { visits: 20, title: 'Maître du Terrain', achieved: conquestLevel.visited >= 20 },
      { visits: 30, title: 'Légende Vivante', achieved: conquestLevel.visited >= 30 },
      { visits: 47, title: 'Conquérant Ultime', achieved: conquestLevel.visited >= 47 }
    ];

    const nextMilestone = milestones.find(m => !m.achieved);

    return {
      conquestLevel,
      categoryStats,
      milestones,
      nextMilestone,
      totalEarnedPoints: visitedStores.reduce((sum, store) => sum + store.earnedPoints, 0),
      averagePointsPerVisit: visitedStores.length > 0 
        ? Math.round(visitedStores.reduce((sum, store) => sum + store.earnedPoints, 0) / visitedStores.length)
        : 0
    };
  }, [getConquestLevel, visitStatsByCategory, visitedStores]);

  // 月間/週間統計
  const getTimeBasedStats = useCallback(() => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const thisWeek = visitedStores.filter(store => 
      new Date(store.registeredAt) >= oneWeekAgo
    ).length;

    const thisMonth = visitedStores.filter(store => 
      new Date(store.registeredAt) >= oneMonthAgo
    ).length;

    return {
      thisWeek,
      thisMonth,
      total: visitedStores.length,
      weeklyAverage: Math.round(thisMonth / 4), // 月の訪問数を4で割る
      isActiveThisWeek: thisWeek > 0
    };
  }, [visitedStores]);

  return {
    // 状態
    visitedStores,
    availableChains,
    isReporting,
    reportError,

    // 統計
    visitStatsByCategory,
    getConquestLevel,
    getProgressDetails,
    getTimeBasedStats,

    // アクション
    reportStoreVisit,
    removeStoreVisit,

    // 取得・検索
    getVisitHistory,
    searchChains,
    getRecommendedVisits,

    // 便利な関数
    hasVisited: (chainId: string) => {
      return visitedStores.some(store => store.chainId === chainId);
    },

    getVisitDetails: (chainId: string) => {
      return visitedStores.find(store => store.chainId === chainId);
    },

    getTotalPoints: () => {
      return visitedStores.reduce((sum, store) => sum + store.earnedPoints, 0);
    },

    getChainsByCategory: (category: string) => {
      return Object.values(tutorialChains).filter(chain => chain.category === category);
    },

    // 訪問推奨ロジック
    shouldRecommendVisit: (chainId: string) => {
      if (!profile) return false;
      
      const chain = tutorialChains[chainId];
      if (!chain) return false;

      // 既に訪問済みの場合は推奨しない
      if (visitedStores.some(store => store.chainId === chainId)) {
        return false;
      }

      // 関連レッスンを完了している場合は推奨
      return profile.completedLessons.some(lessonId => {
        const lesson = require('../../data/tutorial/lessons').lessons[lessonId];
        return lesson?.relatedChains.includes(chainId);
      });
    }
  };
};
