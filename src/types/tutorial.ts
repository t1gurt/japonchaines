/**
 * チュートリアルシステムの型定義
 * Tutorial_require.mdの仕様に基づく完全な型システム
 */

// 学習レベル
export type LearningLevel = 'debutant' | 'intermediaire' | 'avance';

// 言語設定
export type PreferredLanguage = 'fr' | 'ja';

// バッジカテゴリ
export type BadgeCategory = 'manners' | 'chains' | 'systems' | 'expert' | 'real_visit';

// バッジの希少度
export type BadgeRarity = 'common' | 'rare' | 'legendary';

// レッスンタイプ
export type LessonType = 'video' | 'quiz' | 'simulation' | 'flashcard' | 'scenario';

// 訪問店舗情報
export interface VisitedStore {
  chainId: string;
  chainName: string;
  visitDate?: Date; // 任意：記録したい場合のみ
  earnedPoints: number;
  earnedBadges: string[];
  registeredAt: Date; // 登録日時
}

// バッジ情報
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: BadgeCategory;
  rarity: BadgeRarity;
  earnedAt: Date;
  relatedChains: string[];
  isRealVisitBadge: boolean; // 実店舗訪問バッジかどうか
  requiredPoints?: number; // 必要ポイント
  requiredVisits?: number; // 必要訪問数
}

// 実績情報
export interface Achievement {
  id: string;
  type: 'lesson_completed' | 'quiz_passed' | 'level_completed' | 'store_visited' | 'badge_earned' | 'streak_achieved';
  title: string;
  description: string;
  points: number;
  earnedAt: Date;
  relatedData?: {
    lessonId?: string;
    quizId?: string;
    level?: LearningLevel;
    chainId?: string;
    badgeId?: string;
    streakDays?: number;
  };
}

// 学習者プロフィール
export interface LearnerProfile {
  id: string;
  name: string;
  level: LearningLevel;
  totalPoints: number;
  badges: Badge[];
  completedLessons: string[];
  visitedChains: string[];
  favoriteCategories: string[];
  currentStreak: number;
  lastVisit: Date;
  realStoreVisits: number; // 実店舗訪問回数
  selfReportedStores: VisitedStore[]; // 自己申告店舗リスト
  createdAt: Date;
  lastLessonDate?: Date;
  averageQuizScore: number;
  totalLearningTime: number; // 分単位
}

// ユーザー設定
export interface UserSettings {
  enableNotifications: boolean;
  preferredLanguage: PreferredLanguage;
  autoBackup: boolean;
  shareProgress: boolean;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  difficultyPreference: 'easy' | 'normal' | 'hard';
}

// チュートリアル進捗（ローカルストレージ）
export interface TutorialProgress {
  userId: string;
  profile: LearnerProfile;
  achievements: Achievement[];
  settings: UserSettings;
  dataVersion: string;
  lastBackup: Date;
  createdAt: Date;
  lastSyncDate: Date;
}

// レッスン情報
export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: LearningLevel;
  type: LessonType;
  estimatedTime: number; // 分
  points: number;
  order: number;
  prerequisites: string[]; // 前提レッスンID
  content: LessonContent;
  relatedChains: string[];
  category: string;
  isCompleted?: boolean;
  completedAt?: Date;
  attempts: number;
  bestScore?: number;
}

// レッスンコンテンツ
export interface LessonContent {
  introduction: string;
  sections: LessonSection[];
  quiz?: Quiz;
  simulation?: SimulationConfig;
  video?: VideoConfig;
  summary: string;
}

// レッスンセクション
export interface LessonSection {
  id: string;
  title: string;
  content: string;
  images?: string[];
  tips?: string[];
  culturalNotes?: string[];
}

// クイズ情報
export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number; // パーセンテージ
  timeLimit?: number; // 秒
  attempts?: QuizAttempt[];
}

// クイズ問題
export interface QuizQuestion {
  id: string;
  type: 'multiple_choice' | 'true_false' | 'image_selection' | 'matching' | 'ordering';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  image?: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

// クイズ試行記録
export interface QuizAttempt {
  id: string;
  quizId: string;
  startedAt: Date;
  completedAt?: Date;
  score: number;
  answers: QuizAnswer[];
  timeSpent: number; // 秒
  passed: boolean;
}

// クイズ回答
export interface QuizAnswer {
  questionId: string;
  userAnswer: string | string[];
  isCorrect: boolean;
  timeSpent: number; // 秒
}

// シミュレーション設定
export interface SimulationConfig {
  id: string;
  type: 'ticket_machine' | 'touch_panel' | 'kaiten_sushi' | 'ordering_system';
  chainId: string;
  steps: SimulationStep[];
  successCriteria: string[];
}

// シミュレーションステップ
export interface SimulationStep {
  id: string;
  instruction: string;
  expectedAction: string;
  feedback: {
    success: string;
    error: string;
    hint: string;
  };
  points: number;
}

// ビデオ設定
export interface VideoConfig {
  id: string;
  title: string;
  url: string;
  duration: number; // 秒
  subtitles?: {
    language: PreferredLanguage;
    url: string;
  }[];
  chapters?: VideoChapter[];
}

// ビデオチャプター
export interface VideoChapter {
  id: string;
  title: string;
  startTime: number; // 秒
  description?: string;
}

// 店舗チェーン情報（拡張）
export interface ChainInfo {
  id: string;
  name: string;
  nameJa: string;
  category: string;
  description: string;
  features: string[];
  orderingSystem: 'ticket_machine' | 'touch_panel' | 'counter' | 'table_service';
  priceRange: 'budget' | 'moderate' | 'premium';
  popularItems: string[];
  culturalSignificance: string;
  tips: string[];
  locations: number;
  founded?: number;
  isActive: boolean;
}

// 学習統計
export interface LearningStats {
  totalLessonsCompleted: number;
  totalQuizzesPassed: number;
  totalPointsEarned: number;
  totalBadgesEarned: number;
  totalStoresVisited: number;
  currentStreak: number;
  longestStreak: number;
  averageQuizScore: number;
  totalTimeSpent: number; // 分
  levelProgress: {
    [key in LearningLevel]: {
      completedLessons: number;
      totalLessons: number;
      completionPercentage: number;
    };
  };
  categoryProgress: {
    [category: string]: {
      completedLessons: number;
      totalLessons: number;
      completionPercentage: number;
    };
  };
  recentActivity: RecentActivity[];
}

// 最近のアクティビティ
export interface RecentActivity {
  id: string;
  type: 'lesson_completed' | 'quiz_passed' | 'badge_earned' | 'store_visited' | 'level_up';
  title: string;
  description: string;
  points: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

// データバックアップ
export interface BackupData {
  version: string;
  exportedAt: Date;
  userId: string;
  data: TutorialProgress;
  checksum: string;
}

// ローカルストレージキー
export const LOCAL_STORAGE_KEYS = {
  TUTORIAL_PROGRESS: 'japonchaines_tutorial_progress',
  USER_SETTINGS: 'japonchaines_user_settings',
  BACKUP_DATA: 'japonchaines_backup_data',
  LAST_SYNC: 'japonchaines_last_sync',
} as const;

// バッジ定義（事前定義されたバッジ）
export const PREDEFINED_BADGES = {
  // 初級バッジ
  BAGUETTES_MASTER: {
    id: 'baguettes_master',
    name: 'Maître des Baguettes',
    description: '箸の正しい使い方をマスターしました',
    icon: '🥢',
    category: 'manners' as BadgeCategory,
    rarity: 'common' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
  },
  TICKET_MACHINE_EXPERT: {
    id: 'ticket_machine_expert',
    name: 'Expert Ticket-Machine',
    description: '券売機の操作をマスターしました',
    icon: '🎟️',
    category: 'systems' as BadgeCategory,
    rarity: 'common' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['matsuya', 'nakau', 'fuji-soba'],
  },
  GYUDON_DISCOVERER: {
    id: 'gyudon_discoverer',
    name: 'Découvreur de Gyūdon',
    description: '牛丼の基本を理解しました',
    icon: '🍚',
    category: 'chains' as BadgeCategory,
    rarity: 'common' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
  },
  RAMEN_AMATEUR: {
    id: 'ramen_amateur',
    name: 'Amateur de Ramen',
    description: 'ラーメンの基本知識を習得しました',
    icon: '🍜',
    category: 'chains' as BadgeCategory,
    rarity: 'common' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['ichiran', 'ippudo', 'tenkaippin'],
  },
  KAITEN_ZUSHI_INITIATE: {
    id: 'kaiten_zushi_initiate',
    name: 'Initié Kaiten-Zushi',
    description: '回転寿司の基本システムを理解しました',
    icon: '🍣',
    category: 'systems' as BadgeCategory,
    rarity: 'common' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['sushiro', 'kura-sushi', 'hama-sushi'],
  },

  // 中級バッジ
  CHAINS_CONNOISSEUR: {
    id: 'chains_connoisseur',
    name: 'Connaisseur des Chaînes',
    description: 'チェーン店の特徴を深く理解しています',
    icon: '🏪',
    category: 'chains' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 500,
  },
  TOUCH_PANEL_MASTER: {
    id: 'touch_panel_master',
    name: 'Maître du Tactile',
    description: 'タッチパネル注文システムをマスターしました',
    icon: '📱',
    category: 'systems' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['saizeriya', 'gusto', 'jonathans'],
  },
  FAMILY_RESTAURANT_EXPERT: {
    id: 'family_restaurant_expert',
    name: 'Expert Family Restaurant',
    description: 'ファミリーレストランの専門知識を習得しました',
    icon: '👨‍👩‍👧‍👦',
    category: 'chains' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['gusto', 'jonathans', 'saizeriya'],
  },
  CURRY_SPECIALIST: {
    id: 'curry_specialist',
    name: 'Spécialiste Curry',
    description: 'カレーチェーンの専門家になりました',
    icon: '🍛',
    category: 'chains' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: ['coco-ichibanya', 'go-go-curry'],
  },
  FLAVOR_EXPLORER: {
    id: 'flavor_explorer',
    name: 'Explorateur de Saveurs',
    description: '様々な味を探求する冒険者です',
    icon: '🌈',
    category: 'expert' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 750,
  },

  // 上級バッジ
  MASTER_47_CHAINS: {
    id: 'master_47_chains',
    name: 'Maître des 47 Chaînes',
    description: '47のチェーン店すべてをマスターしました',
    icon: '🏆',
    category: 'expert' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 2000,
  },
  ORDER_EXPERT: {
    id: 'order_expert',
    name: 'Expert en Commande',
    description: 'あらゆる注文システムのエキスパートです',
    icon: '📋',
    category: 'systems' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 1500,
  },
  CULINARY_STRATEGIST: {
    id: 'culinary_strategist',
    name: 'Stratège Culinaire',
    description: '食文化の戦略的理解者です',
    icon: '🎯',
    category: 'expert' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 1800,
  },
  CHAINS_SENSEI: {
    id: 'chains_sensei',
    name: 'Sensei des Chaînes',
    description: 'チェーン店の先生として認められました',
    icon: '🔰',
    category: 'expert' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 2500,
  },
  CULTURAL_AMBASSADOR: {
    id: 'cultural_ambassador',
    name: 'Ambassadeur Culturel',
    description: '日本食文化の大使です',
    icon: '🌟',
    category: 'expert' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: false,
    relatedChains: [],
    requiredPoints: 3000,
  },

  // 実店舗限定バッジ
  REAL_VISITOR: {
    id: 'real_visitor',
    name: 'Vrai Visiteur',
    description: '初回実店舗訪問を達成しました',
    icon: '🏆',
    category: 'real_visit' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 1,
  },
  REAL_EXPLORER: {
    id: 'real_explorer',
    name: 'Explorateur Réel',
    description: '5店舗制覇を達成しました',
    icon: '🌟',
    category: 'real_visit' as BadgeCategory,
    rarity: 'rare' as BadgeRarity,
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 5,
  },
  CHAINS_CONQUEROR: {
    id: 'chains_conqueror',
    name: 'Conquérant des Chaînes',
    description: '10店舗制覇を達成しました',
    icon: '👑',
    category: 'real_visit' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 10,
  },
  FIELD_MASTER: {
    id: 'field_master',
    name: 'Maître du Terrain',
    description: '20店舗制覇を達成しました',
    icon: '🎌',
    category: 'real_visit' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 20,
  },
  LIVING_LEGEND: {
    id: 'living_legend',
    name: 'Légende Vivante',
    description: '30店舗制覇を達成しました',
    icon: '🏯',
    category: 'real_visit' as BadgeCategory,
    rarity: 'legendary' as BadgeRarity,
    isRealVisitBadge: true,
    relatedChains: [],
    requiredVisits: 30,
  },
} as const;

// Types supplémentaires pour l'interface de quiz
export interface QuizResult {
  lessonId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  duration: number;
  answers: Array<{
    questionIndex: number;
    selectedAnswer: number;
    isCorrect: boolean;
  }>;
  completedAt: Date;
}

// Type pour les visites de magasin (renommé de StoreVisit)
export type StoreVisit = VisitedStore;

// Constantes pour les niveaux de leçons
export const LESSONS_PER_LEVEL = {
  debutant: 5,
  intermediaire: 3,
  avance: 2,
} as const;

// エラータイプ
export interface TutorialError {
  code: string;
  message: string;
  details?: any;
}

// 自己申告システム関連の型
export interface VisitReport {
  id: string;
  chainId: string;
  visitDate: string;
  notes: string;
  hasPhoto: boolean;
  location: string;
  timestamp: string;
  status: 'reported' | 'pending' | 'verified' | 'rejected';
}

// APIレスポンス型
export interface TutorialResponse<T = any> {
  success: boolean;
  data?: T;
  error?: TutorialError;
  timestamp: Date;
}
