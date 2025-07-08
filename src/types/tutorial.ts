// src/types/tutorial.ts

// 学習者プロフィール
export type LearningLevel = 'debutant' | 'intermediaire' | 'avance';

// バッジカテゴリー
export type BadgeCategory = 'manners' | 'chains' | 'systems' | 'expert' | 'real_visit';

// バッジレアリティ
export type BadgeRarity = 'common' | 'rare' | 'legendary';

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
}

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
}

// チュートリアル進捗（ローカルストレージ）
export interface TutorialProgress {
  userId: string;
  profile: LearnerProfile;
  achievements: Achievement[];
  settings: UserSettings;
  dataVersion: string;
  lastBackup: Date;
}

// ユーザー設定
export interface UserSettings {
  enableNotifications: boolean;
  preferredLanguage: 'fr' | 'ja';
  autoBackup: boolean;
  shareProgress: boolean;
}

// アチーブメント（修了証など）
export interface Achievement {
  id: string;
  type: 'certificate' | 'wallpaper';
  title: string;
  description: string;
  earnedAt: Date;
  dataUrl?: string; // e.g., for storing generated image data
}

// レッスン情報
export interface Lesson {
  id: string;
  level: LearningLevel;
  title: string;
  description: string;
  type: 'quiz' | 'simulation' | 'video';
  points: number;
  duration: number; // minutes
}

// クイズの質問情報
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

// クイズ情報
export interface Quiz {
  lessonId: string;
  questions: QuizQuestion[];
}

// チェーン店情報
export interface Chain {
  id: string;
  name: string;
  japanese: string;
  category: string;
  description: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  features: string[];
}

// 訪問レポート（自己申告システム用）
export interface VisitReport {
  id: string;
  chainId: string;
  visitDate: string;
  status: 'reported' | 'pending' | 'verified' | 'rejected';
  timestamp: string;
  hasPhoto?: boolean;
  notes?: string;
}