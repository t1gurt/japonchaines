/**
 * バッジシステム管理hook
 * バッジの取得、表示、チェック機能
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Badge, BadgeCategory, BadgeRarity, LearnerProfile } from '../../types/tutorial';
import { badges, BadgeChecker, BadgeDisplay, badgeCategories } from '../../data/tutorial/badges';
import { useLocalStorage } from './useLocalStorage';

export const useBadgeSystem = () => {
  const { progress, addBadge } = useLocalStorage();
  const [newBadges, setNewBadges] = useState<Badge[]>([]);
  const [showBadgeAnimation, setShowBadgeAnimation] = useState(false);

  // 現在のプロフィール
  const profile = progress?.profile;

  // 獲得済みバッジ
  const earnedBadges = useMemo(() => {
    return profile?.badges || [];
  }, [profile]);

  // 未獲得バッジ
  const availableBadges = useMemo(() => {
    if (!profile) return Object.values(badges);
    
    const earnedBadgeIds = profile.badges.map(badge => badge.id);
    return Object.values(badges).filter(badge => !earnedBadgeIds.includes(badge.id));
  }, [profile]);

  // カテゴリー別バッジ統計
  const badgeStatsByCategory = useMemo(() => {
    if (!profile) return {};

    const stats: Record<BadgeCategory, { earned: number; total: number; percentage: number }> = {
      manners: { earned: 0, total: 0, percentage: 0 },
      chains: { earned: 0, total: 0, percentage: 0 },
      systems: { earned: 0, total: 0, percentage: 0 },
      expert: { earned: 0, total: 0, percentage: 0 },
      real_visit: { earned: 0, total: 0, percentage: 0 }
    };

    // 全バッジをカテゴリー別に集計
    Object.values(badges).forEach(badge => {
      stats[badge.category].total++;
    });

    // 獲得済みバッジをカテゴリー別に集計
    profile.badges.forEach(badge => {
      stats[badge.category].earned++;
    });

    // パーセンテージ計算
    Object.keys(stats).forEach(category => {
      const cat = category as BadgeCategory;
      stats[cat].percentage = stats[cat].total > 0 
        ? Math.round((stats[cat].earned / stats[cat].total) * 100)
        : 0;
    });

    return stats;
  }, [profile]);

  // 希少度別バッジ統計
  const badgeStatsByRarity = useMemo(() => {
    if (!profile) return {};

    const stats: Record<BadgeRarity, { earned: number; total: number; percentage: number }> = {
      common: { earned: 0, total: 0, percentage: 0 },
      rare: { earned: 0, total: 0, percentage: 0 },
      legendary: { earned: 0, total: 0, percentage: 0 }
    };

    // 全バッジを希少度別に集計
    Object.values(badges).forEach(badge => {
      stats[badge.rarity].total++;
    });

    // 獲得済みバッジを希少度別に集計
    profile.badges.forEach(badge => {
      stats[badge.rarity].earned++;
    });

    // パーセンテージ計算
    Object.keys(stats).forEach(rarity => {
      const r = rarity as BadgeRarity;
      stats[r].percentage = stats[r].total > 0 
        ? Math.round((stats[r].earned / stats[r].total) * 100)
        : 0;
    });

    return stats;
  }, [profile]);

  // バッジの進捗確認
  const checkForNewBadges = useCallback(async () => {
    if (!profile) return [];

    const eligibleBadges = BadgeChecker.checkEligibleBadges(profile);
    
    if (eligibleBadges.length > 0) {
      setNewBadges(eligibleBadges);
      setShowBadgeAnimation(true);
      
      // バッジを一つずつ追加（アニメーション効果のため）
      for (const badge of eligibleBadges) {
        await new Promise(resolve => setTimeout(resolve, 500)); // 0.5秒間隔
        addBadge(badge);
      }
      
      return eligibleBadges;
    }
    
    return [];
  }, [profile, addBadge]);

  // レッスン完了時のバッジチェック
  const checkLessonBadges = useCallback(async (lessonId: string) => {
    if (!profile) return [];

    const lessonBadges = BadgeChecker.checkLessonCompletionBadges(lessonId, profile);
    
    if (lessonBadges.length > 0) {
      setNewBadges(lessonBadges);
      setShowBadgeAnimation(true);
      
      for (const badge of lessonBadges) {
        await new Promise(resolve => setTimeout(resolve, 500));
        addBadge(badge);
      }
      
      return lessonBadges;
    }
    
    return [];
  }, [profile, addBadge]);

  // 店舗訪問時のバッジチェック
  const checkStoreVisitBadges = useCallback(async () => {
    if (!profile) return [];

    const visitBadges = BadgeChecker.checkStoreVisitBadges(profile);
    
    if (visitBadges.length > 0) {
      setNewBadges(visitBadges);
      setShowBadgeAnimation(true);
      
      for (const badge of visitBadges) {
        await new Promise(resolve => setTimeout(resolve, 500));
        addBadge(badge);
      }
      
      return visitBadges;
    }
    
    return [];
  }, [profile, addBadge]);

  // 特定バッジの即座付与
  const awardInstantBadge = useCallback((badgeId: string) => {
    const badge = BadgeChecker.awardInstantBadge(badgeId);
    if (badge) {
      setNewBadges([badge]);
      setShowBadgeAnimation(true);
      addBadge(badge);
      return badge;
    }
    return null;
  }, [addBadge]);

  // バッジアニメーションを非表示
  const dismissBadgeAnimation = useCallback(() => {
    setShowBadgeAnimation(false);
    setNewBadges([]);
  }, []);

  // バッジフィルター
  const getFilteredBadges = useCallback((
    category?: BadgeCategory,
    rarity?: BadgeRarity,
    onlyEarned = false
  ) => {
    let badgesToFilter = onlyEarned ? earnedBadges : Object.values(badges);

    if (category) {
      badgesToFilter = badgesToFilter.filter(badge => badge.category === category);
    }

    if (rarity) {
      badgesToFilter = badgesToFilter.filter(badge => badge.rarity === rarity);
    }

    return badgesToFilter.sort((a, b) => {
      // 獲得日順（新しい順）、または名前順
      if (onlyEarned && 'earnedAt' in a && 'earnedAt' in b) {
        const aDate = a.earnedAt as Date;
        const bDate = b.earnedAt as Date;
        return new Date(bDate).getTime() - new Date(aDate).getTime();
      }
      return a.name.localeCompare(b.name);
    });
  }, [earnedBadges]);

  // 次に獲得可能なバッジ
  const getUpcomingBadges = useCallback(() => {
    if (!profile) return [];

    return availableBadges
      .filter(badge => {
        // 条件が明確なバッジのみ表示
        return badge.requiredPoints || badge.requiredVisits || 
               ['first_lesson_complete', 'manners_student', 'consistent_learner'].includes(badge.id);
      })
      .slice(0, 5) // 最大5つ
      .map(badge => {
        let progress = 0;
        let target = 100;
        let progressText = '';

        if (badge.requiredPoints) {
          progress = Math.min(profile.totalPoints, badge.requiredPoints);
          target = badge.requiredPoints;
          progressText = `${progress}/${target} points`;
        } else if (badge.requiredVisits) {
          progress = Math.min(profile.realStoreVisits, badge.requiredVisits);
          target = badge.requiredVisits;
          progressText = `${progress}/${target} visites`;
        } else if (badge.id === 'consistent_learner') {
          progress = profile.currentStreak;
          target = 3;
          progressText = `${progress}/${target} jours`;
        } else if (badge.id === 'first_lesson_complete') {
          progress = profile.completedLessons.length > 0 ? 1 : 0;
          target = 1;
          progressText = progress > 0 ? 'Complété !' : 'Terminez une leçon';
        }

        return {
          badge,
          progress: Math.round((progress / target) * 100),
          progressText,
          isClose: progress / target >= 0.8 // 80%以上で "近い"
        };
      });
  }, [profile, availableBadges]);

  // バッジの詳細情報
  const getBadgeDetails = useCallback((badgeId: string) => {
    const badgeTemplate = badges[badgeId];
    if (!badgeTemplate) return null;

    const earnedBadge = profile?.badges.find(b => b.id === badgeId);
    const isEarned = !!earnedBadge;

    let requirements = '';
    if (badgeTemplate.requiredPoints) {
      requirements = `${badgeTemplate.requiredPoints} points requis`;
    } else if (badgeTemplate.requiredVisits) {
      requirements = `${badgeTemplate.requiredVisits} visites de magasin requises`;
    }

    const categoryInfo = badgeCategories[badgeTemplate.category];
    const rarityInfo = BadgeDisplay.getRarityDisplay(badgeTemplate.rarity);

    return {
      ...badgeTemplate,
      isEarned,
      earnedAt: earnedBadge?.earnedAt,
      requirements,
      categoryInfo,
      rarityInfo,
      colorClass: BadgeDisplay.getBadgeColor(badgeTemplate.rarity),
      categoryColorClass: BadgeDisplay.getCategoryColor(badgeTemplate.category)
    };
  }, [profile]);

  // バッジコレクション完成度
  const getCollectionCompleteness = useCallback(() => {
    if (!profile) return 0;

    const totalBadges = Object.keys(badges).length;
    const earnedBadges = profile.badges.length;
    
    return {
      earned: earnedBadges,
      total: totalBadges,
      percentage: Math.round((earnedBadges / totalBadges) * 100),
      remaining: totalBadges - earnedBadges
    };
  }, [profile]);

  // 最近獲得したバッジ
  const getRecentBadges = useCallback((limit = 5) => {
    if (!profile) return [];

    return profile.badges
      .sort((a, b) => new Date(b.earnedAt).getTime() - new Date(a.earnedAt).getTime())
      .slice(0, limit);
  }, [profile]);

  // プロフィール変更時のバッジチェック
  useEffect(() => {
    if (profile) {
      // 自動バッジチェック（レンダリング負荷を避けるため遅延実行）
      const timer = setTimeout(() => {
        checkForNewBadges();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [profile?.totalPoints, profile?.completedLessons?.length, profile?.realStoreVisits, checkForNewBadges]);

  return {
    // 状態
    earnedBadges,
    availableBadges,
    newBadges,
    showBadgeAnimation,

    // 統計
    badgeStatsByCategory,
    badgeStatsByRarity,
    getCollectionCompleteness,

    // アクション
    checkForNewBadges,
    checkLessonBadges,
    checkStoreVisitBadges,
    awardInstantBadge,
    dismissBadgeAnimation,

    // フィルターと検索
    getFilteredBadges,
    getUpcomingBadges,
    getBadgeDetails,
    getRecentBadges,

    // 便利な関数
    hasBadge: (badgeId: string) => {
      return profile ? profile.badges.some(badge => badge.id === badgeId) : false;
    },

    getBadgeCount: (category?: BadgeCategory, rarity?: BadgeRarity) => {
      let count = earnedBadges.length;
      
      if (category) {
        count = earnedBadges.filter(badge => badge.category === category).length;
      }
      
      if (rarity) {
        count = earnedBadges.filter(badge => badge.rarity === rarity).length;
      }
      
      return count;
    },

    // バッジカテゴリー情報
    badgeCategories
  };
};
