/**
 * バッジシステム定義
 * Tutorial_require.mdに基づくバッジとリワードシステム
 */

import { Badge, BadgeCategory, BadgeRarity, LearnerProfile } from '../../types/tutorial';

// バッジ定義
export const badges: Record<string, Omit<Badge, 'earnedAt'>> = {
  // =============================================================================
  // 初級バッジ (Badges Débutant)
  // =============================================================================
  
  baguettes_master: {
    id: 'baguettes_master',
    name: 'Maître des Baguettes',
    description: '箸の正しい使い方をマスターしました',
    icon: '🥢',
    category: 'manners',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  ticket_machine_expert: {
    id: 'ticket_machine_expert',
    name: 'Expert Ticket-Machine',
    description: '券売機の操作をマスターしました',
    icon: '🎟️',
    category: 'systems',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: ['matsuya', 'nakau', 'fuji-soba'],
  },

  gyudon_discoverer: {
    id: 'gyudon_discoverer',
    name: 'Découvreur de Gyūdon',
    description: '牛丼の基本を理解しました',
    icon: '🍚',
    category: 'chains',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
  },

  ramen_amateur: {
    id: 'ramen_amateur',
    name: 'Amateur de Ramen',
    description: 'ラーメンの基本知識を習得しました',
    icon: '🍜',
    category: 'chains',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: ['ichiran', 'ippudo', 'tenkaippin'],
  },

  kaiten_zushi_initiate: {
    id: 'kaiten_zushi_initiate',
    name: 'Initié Kaiten-Zushi',
    description: '回転寿司の基本システムを理解しました',
    icon: '🍣',
    category: 'systems',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: ['sushiro', 'kura-sushi', 'hama-sushi'],
  },

  first_lesson_complete: {
    id: 'first_lesson_complete',
    name: 'Premier Pas',
    description: '最初のレッスンを完了しました',
    icon: '👶',
    category: 'manners',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  manners_student: {
    id: 'manners_student',
    name: 'Étudiant en Manières',
    description: 'マナーレッスンを完了しました',
    icon: '🎓',
    category: 'manners',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  // =============================================================================
  // 中級バッジ (Badges Intermédiaire)
  // =============================================================================

  chains_connoisseur: {
    id: 'chains_connoisseur',
    name: 'Connaisseur des Chaînes',
    description: 'チェーン店の特徴を深く理解しています',
    icon: '🏪',
    category: 'chains',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 500,
  },

  touch_panel_master: {
    id: 'touch_panel_master',
    name: 'Maître du Tactile',
    description: 'タッチパネル注文システムをマスターしました',
    icon: '📱',
    category: 'systems',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: ['saizeriya', 'gusto', 'jonathans'],
  },

  family_restaurant_expert: {
    id: 'family_restaurant_expert',
    name: 'Expert Family Restaurant',
    description: 'ファミリーレストランの専門知識を習得しました',
    icon: '👨‍👩‍👧‍👦',
    category: 'chains',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: ['gusto', 'jonathans', 'saizeriya'],
  },

  curry_specialist: {
    id: 'curry_specialist',
    name: 'Spécialiste Curry',
    description: 'カレーチェーンの専門家になりました',
    icon: '🍛',
    category: 'chains',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: ['coco-ichibanya', 'go-go-curry'],
  },

  flavor_explorer: {
    id: 'flavor_explorer',
    name: 'Explorateur de Saveurs',
    description: '様々な味を探求する冒険者です',
    icon: '🌈',
    category: 'expert',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 750,
  },

  quiz_champion: {
    id: 'quiz_champion',
    name: 'Champion de Quiz',
    description: 'クイズで高得点を獲得しました',
    icon: '🏆',
    category: 'expert',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  consistent_learner: {
    id: 'consistent_learner',
    name: 'Apprenant Assidu',
    description: '継続的に学習を続けています',
    icon: '📚',
    category: 'expert',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  // =============================================================================
  // 上級バッジ (Badges Avancé)
  // =============================================================================

  master_47_chains: {
    id: 'master_47_chains',
    name: 'Maître des 47 Chaînes',
    description: '47のチェーン店すべてをマスターしました',
    icon: '🏆',
    category: 'expert',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 2000,
  },

  order_expert: {
    id: 'order_expert',
    name: 'Expert en Commande',
    description: 'あらゆる注文システムのエキスパートです',
    icon: '📋',
    category: 'systems',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 1500,
  },

  culinary_strategist: {
    id: 'culinary_strategist',
    name: 'Stratège Culinaire',
    description: '食文化の戦略的理解者です',
    icon: '🎯',
    category: 'expert',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 1800,
  },

  chains_sensei: {
    id: 'chains_sensei',
    name: 'Sensei des Chaînes',
    description: 'チェーン店の先生として認められました',
    icon: '🔰',
    category: 'expert',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 2500,
  },

  cultural_ambassador: {
    id: 'cultural_ambassador',
    name: 'Ambassadeur Culturel',
    description: '日本食文化の大使です',
    icon: '🌟',
    category: 'expert',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 3000,
  },

  perfect_student: {
    id: 'perfect_student',
    name: 'Étudiant Parfait',
    description: '全てのレッスンを完璧にクリアしました',
    icon: '💎',
    category: 'expert',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  knowledge_keeper: {
    id: 'knowledge_keeper',
    name: 'Gardien du Savoir',
    description: '深い文化的知識を身につけました',
    icon: '📜',
    category: 'expert',
    rarity: 'legendary',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  // =============================================================================
  // 実店舗限定バッジ (Badges Visite Réelle)
  // =============================================================================

  real_visitor: {
    id: 'real_visitor',
    name: 'Vrai Visiteur',
    description: '初回実店舗訪問を達成しました',
    icon: '🚪',
    category: 'real_visit',
    rarity: 'rare',
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 1,
  },

  real_explorer: {
    id: 'real_explorer',
    name: 'Explorateur Réel',
    description: '5店舗制覇を達成しました',
    icon: '🗺️',
    category: 'real_visit',
    rarity: 'rare',
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 5,
  },

  chains_conqueror: {
    id: 'chains_conqueror',
    name: 'Conquérant des Chaînes',
    description: '10店舗制覇を達成しました',
    icon: '👑',
    category: 'real_visit',
    rarity: 'legendary',
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 10,
  },

  field_master: {
    id: 'field_master',
    name: 'Maître du Terrain',
    description: '20店舗制覇を達成しました',
    icon: '🎌',
    category: 'real_visit',
    rarity: 'legendary',
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 20,
  },

  living_legend: {
    id: 'living_legend',
    name: 'Légende Vivante',
    description: '30店舗制覇を達成しました',
    icon: '🏯',
    category: 'real_visit',
    rarity: 'legendary',
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 30,
  },

  ultimate_explorer: {
    id: 'ultimate_explorer',
    name: 'Explorateur Ultime',
    description: '全47チェーンを実際に訪問しました',
    icon: '🌟',
    category: 'real_visit',
    rarity: 'legendary',
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 47,
  },

  // =============================================================================
  // 特別バッジ (Badges Spéciaux)
  // =============================================================================

  speed_learner: {
    id: 'speed_learner',
    name: 'Apprenant Rapide',
    description: '短時間で多くのレッスンを完了しました',
    icon: '⚡',
    category: 'expert',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  streak_master: {
    id: 'streak_master',
    name: 'Maître de la Régularité',
    description: '7日連続で学習しました',
    icon: '🔥',
    category: 'expert',
    rarity: 'rare',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  comeback_kid: {
    id: 'comeback_kid',
    name: 'Retour Triomphant',
    description: '学習を再開し、継続しています',
    icon: '💪',
    category: 'expert',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  night_owl: {
    id: 'night_owl',
    name: 'Chouette de Nuit',
    description: '夜遅くに学習しました',
    icon: '🦉',
    category: 'expert',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: [],
  },

  early_bird: {
    id: 'early_bird',
    name: 'Lève-tôt',
    description: '早朝に学習しました',
    icon: '🐦',
    category: 'expert',
    rarity: 'common',
    isRealVisitBadge: false,
    relatedChains: [],
  }
};

// バッジ取得条件チェッカー
export class BadgeChecker {
  /**
   * プロフィールに基づいて新しく獲得可能なバッジをチェック
   */
  static checkEligibleBadges(profile: LearnerProfile): Badge[] {
    const earnedBadgeIds = profile.badges.map(badge => badge.id);
    const newBadges: Badge[] = [];

    // 各バッジの取得条件をチェック
    Object.values(badges).forEach(badgeTemplate => {
      // 既に取得済みの場合はスキップ
      if (earnedBadgeIds.includes(badgeTemplate.id)) return;

      if (this.checkBadgeCondition(badgeTemplate, profile)) {
        const badge: Badge = {
          ...badgeTemplate,
          earnedAt: new Date()
        };
        newBadges.push(badge);
      }
    });

    return newBadges;
  }

  /**
   * 特定のバッジの取得条件をチェック
   */
  private static checkBadgeCondition(
    badgeTemplate: Omit<Badge, 'earnedAt'>, 
    profile: LearnerProfile
  ): boolean {
    const badgeId = badgeTemplate.id;

    // ポイント要件
    if (badgeTemplate.requiredPoints && profile.totalPoints < badgeTemplate.requiredPoints) {
      return false;
    }

    // 実店舗訪問要件
    if (badgeTemplate.requiredVisits && profile.realStoreVisits < badgeTemplate.requiredVisits) {
      return false;
    }

    // 個別条件チェック
    switch (badgeId) {
      case 'first_lesson_complete':
        return profile.completedLessons.length >= 1;

      case 'manners_student':
        return profile.completedLessons.includes('bonnes_manieres_lesson');

      case 'baguettes_master':
        return profile.completedLessons.includes('bonnes_manieres_lesson');

      case 'ticket_machine_expert':
        return profile.completedLessons.includes('ticket_machine_lesson');

      case 'gyudon_discoverer':
        return profile.completedLessons.includes('gyudon_big3_lesson');

      case 'ramen_amateur':
        return profile.completedLessons.includes('ramen_masters_lesson');

      case 'kaiten_zushi_initiate':
        return profile.completedLessons.includes('kaiten_zushi_lesson');

      case 'touch_panel_master':
        return profile.completedLessons.includes('family_restaurant_lesson');

      case 'family_restaurant_expert':
        return profile.completedLessons.includes('family_restaurant_lesson');

      case 'curry_specialist':
        return profile.completedLessons.includes('popular_chains_lesson') &&
               profile.visitedChains.includes('coco-ichibanya');

      case 'quiz_champion':
        return profile.averageQuizScore >= 90;

      case 'consistent_learner':
        return profile.currentStreak >= 3;

      case 'master_47_chains':
        return profile.completedLessons.includes('master_47_chains_lesson');

      case 'cultural_ambassador':
        return profile.completedLessons.includes('cultural_significance_lesson');

      case 'perfect_student':
        const totalLessons = Object.keys(badges).length;
        return profile.completedLessons.length >= totalLessons;

      case 'speed_learner':
        // 1日で3レッスン以上完了
        const today = new Date().toDateString();
        const todayLessons = profile.completedLessons.length; // 簡略化
        return todayLessons >= 3;

      case 'streak_master':
        return profile.currentStreak >= 7;

      case 'night_owl':
        const now = new Date();
        return now.getHours() >= 22 || now.getHours() <= 5;

      case 'early_bird':
        const currentHour = new Date().getHours();
        return currentHour >= 5 && currentHour <= 8;

      default:
        return true; // デフォルトは取得可能
    }
  }

  /**
   * レッスン完了時のバッジチェック
   */
  static checkLessonCompletionBadges(
    lessonId: string, 
    profile: LearnerProfile
  ): Badge[] {
    // レッスン完了に関連するバッジのみチェック
    const relevantBadgeIds = [
      'first_lesson_complete',
      'manners_student',
      'baguettes_master',
      'ticket_machine_expert',
      'gyudon_discoverer',
      'ramen_amateur',
      'kaiten_zushi_initiate',
      'touch_panel_master',
      'family_restaurant_expert',
      'curry_specialist',
      'master_47_chains',
      'cultural_ambassador',
      'perfect_student'
    ];

    return this.checkEligibleBadges(profile).filter(badge =>
      relevantBadgeIds.includes(badge.id)
    );
  }

  /**
   * 実店舗訪問時のバッジチェック
   */
  static checkStoreVisitBadges(profile: LearnerProfile): Badge[] {
    const realVisitBadgeIds = [
      'real_visitor',
      'real_explorer', 
      'chains_conqueror',
      'field_master',
      'living_legend',
      'ultimate_explorer'
    ];

    return this.checkEligibleBadges(profile).filter(badge =>
      realVisitBadgeIds.includes(badge.id)
    );
  }

  /**
   * 特定の条件での即座バッジ付与
   */
  static awardInstantBadge(badgeId: string): Badge | null {
    const badgeTemplate = badges[badgeId];
    if (!badgeTemplate) return null;

    return {
      ...badgeTemplate,
      earnedAt: new Date()
    };
  }
}

// バッジ表示用ヘルパー
export class BadgeDisplay {
  /**
   * バッジの色を取得
   */
  static getBadgeColor(rarity: BadgeRarity): string {
    switch (rarity) {
      case 'common':
        return 'bg-gray-100 border-gray-300 text-gray-700';
      case 'rare':
        return 'bg-blue-100 border-blue-300 text-blue-700';
      case 'legendary':
        return 'bg-yellow-100 border-yellow-300 text-yellow-700';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  }

  /**
   * カテゴリー色を取得
   */
  static getCategoryColor(category: BadgeCategory): string {
    switch (category) {
      case 'manners':
        return 'bg-green-100 border-green-300 text-green-700';
      case 'chains':
        return 'bg-purple-100 border-purple-300 text-purple-700';
      case 'systems':
        return 'bg-blue-100 border-blue-300 text-blue-700';
      case 'expert':
        return 'bg-red-100 border-red-300 text-red-700';
      case 'real_visit':
        return 'bg-orange-100 border-orange-300 text-orange-700';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  }

  /**
   * バッジのランク表示
   */
  static getRarityDisplay(rarity: BadgeRarity): { icon: string; label: string } {
    switch (rarity) {
      case 'common':
        return { icon: '🥉', label: 'Commun' };
      case 'rare':
        return { icon: '🥈', label: 'Rare' };
      case 'legendary':
        return { icon: '🥇', label: 'Légendaire' };
      default:
        return { icon: '🏅', label: 'Inconnu' };
    }
  }
}

// カテゴリー定義
export const badgeCategories = {
  manners: {
    id: 'manners',
    name: 'Bonnes Manières',
    nameJa: 'マナー',
    description: 'Badges liés au respect de l\'étiquette japonaise',
    icon: '🙏',
    color: 'green'
  },
  chains: {
    id: 'chains',
    name: 'Chaînes Spécifiques',
    nameJa: 'チェーン店',
    description: 'Badges pour la maîtrise des différentes chaînes',
    icon: '🏪',
    color: 'purple'
  },
  systems: {
    id: 'systems',
    name: 'Systèmes de Commande',
    nameJa: '注文システム',
    description: 'Badges pour la maîtrise des systèmes de commande',
    icon: '📱',
    color: 'blue'
  },
  expert: {
    id: 'expert',
    name: 'Expertise',
    nameJa: '専門知識',
    description: 'Badges d\'expertise et de performance',
    icon: '🎓',
    color: 'red'
  },
  real_visit: {
    id: 'real_visit',
    name: 'Visites Réelles',
    nameJa: '実店舗訪問',
    description: 'Badges pour les visites de vrais restaurants',
    icon: '🚪',
    color: 'orange'
  }
} as const;
