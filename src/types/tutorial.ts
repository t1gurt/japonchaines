// src/types/tutorial.ts

// 学習者プロフィール
export interface LearnerProfile {
  id: string;
  name: string;
  level: 'debutant' | 'intermediaire' | 'avance';
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
}

// バッジ情報
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'manners' | 'chains' | 'systems' | 'expert' | 'real_visit';
  rarity: 'common' | 'rare' | 'legendary';
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