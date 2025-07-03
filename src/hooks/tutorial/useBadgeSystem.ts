/**
 * バッジシステム管理hook
 * バッジの取得、表示、チェック機能
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Badge, BadgeCategory, BadgeRarity, LearnerProfile } from '../../types/tutorial';
import { allBadges, getBadgesByCategory, getBadgesByRarity } from '../../data/tutorial/badges';
import { useLearningProgress } from './useLearningProgress';

// バッジカテゴリー情報
export const badgeCategories: Record<BadgeCategory, { name: string; icon: string; color: string }> = {
  manners: { name: 'Bonnes Manières', icon: '🥢', color: 'bg-green-100 text-green-800' },
  chains: { name: 'Chaînes', icon: '🏪', color: 'bg-blue-100 text-blue-800' },
  systems: { name: 'Systèmes', icon: '📱', color: 'bg-purple-100 text-purple-800' },
  expert: { name: 'Expert', icon: '🎓', color: 'bg-yellow-100 text-yellow-800' },
  real_visit: { name: 'Visites Réelles', icon: '🏆', color: 'bg-red-100 text-red-800' }
};

export const useBadgeSystem = () => {
  const { profile, addBadge } = useLearningProgress();
  const [newBadges, setNewBadges] = useState<Badge[]>([]);
  const [showBadgeAnimation, setShowBadgeAnimation] = useState(false);

  // 獲得済みバッジ
  const earnedBadges = useMemo(() => {
    return profile?.badges || [];
  }, [profile]);

  // 未獲得バッジ
  const availableBadges = useMemo(() => {
    if (!profile) return allBadges;
    
    const earnedBadgeIds = profile.badges.map(badge => badge.id);
    return allBadges.filter(badge => !earnedBadgeIds.includes(badge.id));
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
    allBadges.forEach(badge => {
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
    allBadges.forEach(badge => {
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

  // バッジフィルター
  const getFilteredBadges = useCallback((
    category?: BadgeCategory,
    rarity?: BadgeRarity,
    onlyEarned = false
  ) => {
    let badgesToFilter = onlyEarned ? earnedBadges : allBadges;

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
      .slice(0, 5) // 最大5つ
      .map(badge => {
        let progress = 0;
        let target = 100;
        let progressText = 'En cours...';

        // 簡単な進捗計算
        if (badge.category === 'manners') {
          progress = profile.completedLessons.length > 0 ? 100 : 0;
          progressText = progress > 0 ? 'Complété !' : 'Terminez une leçon de manières';
        } else if (badge.category === 'chains') {
          progress = Math.min(profile.completedLessons.length * 25, 100);
          progressText = `${profile.completedLessons.length} leçons complétées`;
        } else if (badge.category === 'real_visit') {
          progress = Math.min(profile.realStoreVisits * 20, 100);
          progressText = `${profile.realStoreVisits} visites de magasin`;
        }

        return {
          badge,
          progress,
          progressText,
          isClose: progress >= 80 // 80%以上で "近い"
        };
      });
  }, [profile, availableBadges]);

  // バッジの詳細情報
  const getBadgeDetails = useCallback((badgeId: string) => {
    const badgeTemplate = allBadges.find(b => b.id === badgeId);
    if (!badgeTemplate) return null;

    const earnedBadge = profile?.badges.find(b => b.id === badgeId);
    const isEarned = !!earnedBadge;

    const categoryInfo = badgeCategories[badgeTemplate.category];
    const rarityInfo = {
      icon: badgeTemplate.rarity === 'legendary' ? '🥇' : 
            badgeTemplate.rarity === 'rare' ? '🥈' : '🥉',
      label: badgeTemplate.rarity === 'legendary' ? 'Légendaire' : 
             badgeTemplate.rarity === 'rare' ? 'Rare' : 'Commun'
    };

    return {
      ...badgeTemplate,
      isEarned,
      earnedAt: earnedBadge?.earnedAt,
      requirements: 'Terminez les leçons correspondantes',
      categoryInfo,
      rarityInfo,
      categoryColorClass: categoryInfo.color
    };
  }, [profile]);

  // バッジコレクション完成度
  const getCollectionCompleteness = useCallback(() => {
    if (!profile) return 0;

    const totalBadges = allBadges.length;
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
