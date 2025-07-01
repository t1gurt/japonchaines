/**
 * ローカルストレージ管理hook
 * チュートリアル進捗の永続化とデータ管理
 */

import { useState, useEffect, useCallback } from 'react';
import {
  TutorialProgress,
  LearnerProfile,
  UserSettings,
  Achievement,
  BackupData,
  LOCAL_STORAGE_KEYS,
  LearningLevel,
  VisitedStore
} from '../../types/tutorial';

// 初期プロフィール - サーバーサイドでは固定日付を使用
const createInitialProfile = (): LearnerProfile => {
  const now = typeof window !== 'undefined' ? new Date() : new Date('2025-01-01');
  return {
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: 'Apprenant',
    level: 'debutant',
    totalPoints: 0,
    badges: [],
    completedLessons: [],
    visitedChains: [],
    favoriteCategories: [],
    currentStreak: 0,
    lastVisit: now,
    realStoreVisits: 0,
    selfReportedStores: [],
    createdAt: now,
    averageQuizScore: 0,
    totalLearningTime: 0
  };
};

// 初期設定
const createInitialSettings = (): UserSettings => ({
  enableNotifications: true,
  preferredLanguage: 'fr',
  autoBackup: true,
  shareProgress: false,
  soundEnabled: true,
  animationsEnabled: true,
  difficultyPreference: 'normal'
});

// 初期進捗データ - サーバーサイドでは固定日付を使用
const createInitialProgress = (): TutorialProgress => {
  const now = typeof window !== 'undefined' ? new Date() : new Date('2025-01-01');
  return {
    userId: createInitialProfile().id,
    profile: createInitialProfile(),
    achievements: [],
    settings: createInitialSettings(),
    dataVersion: '1.0.0',
    lastBackup: now,
    createdAt: now,
    lastSyncDate: now
  };
};

export const useLocalStorage = () => {
  const [progress, setProgress] = useState<TutorialProgress | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドかどうかを確認
  useEffect(() => {
    setIsClient(true);
  }, []);

  // データ読み込み
  const loadProgress = useCallback((): TutorialProgress => {
    if (typeof window === 'undefined') {
      return createInitialProgress();
    }
    
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.TUTORIAL_PROGRESS);
      if (stored) {
        const parsed = JSON.parse(stored);
        // 日付文字列をDateオブジェクトに変換
        return {
          ...parsed,
          profile: {
            ...parsed.profile,
            lastVisit: new Date(parsed.profile.lastVisit),
            createdAt: new Date(parsed.profile.createdAt),
            lastLessonDate: parsed.profile.lastLessonDate 
              ? new Date(parsed.profile.lastLessonDate) 
              : undefined,
            badges: parsed.profile.badges.map((badge: any) => ({
              ...badge,
              earnedAt: new Date(badge.earnedAt)
            })),
            selfReportedStores: parsed.profile.selfReportedStores.map((store: any) => ({
              ...store,
              visitDate: store.visitDate ? new Date(store.visitDate) : undefined,
              registeredAt: new Date(store.registeredAt)
            }))
          },
          achievements: parsed.achievements.map((achievement: any) => ({
            ...achievement,
            earnedAt: new Date(achievement.earnedAt)
          })),
          lastBackup: new Date(parsed.lastBackup),
          createdAt: new Date(parsed.createdAt),
          lastSyncDate: new Date(parsed.lastSyncDate)
        };
      }
      return createInitialProgress();
    } catch (err) {
      console.error('Erreur lors du chargement des données:', err);
      return createInitialProgress();
    }
  }, []);

  // データ保存
  const saveProgress = useCallback((newProgress: TutorialProgress) => {
    if (typeof window === 'undefined') return;
    
    try {
      const dataToSave = {
        ...newProgress,
        lastSyncDate: new Date()
      };
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.TUTORIAL_PROGRESS,
        JSON.stringify(dataToSave)
      );
      setProgress(dataToSave);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur de sauvegarde';
      setError(errorMessage);
      console.error('Erreur lors de la sauvegarde:', err);
    }
  }, []);

  // 初期化 - クライアントサイドでのみ実行
  useEffect(() => {
    if (!isClient) return;
    
    setIsLoading(true);
    try {
      const loadedProgress = loadProgress();
      setProgress(loadedProgress);
    } catch (err) {
      setError('Erreur lors du chargement initial');
      console.error('Erreur lors du chargement initial:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isClient, loadProgress]);

  // プロフィール更新
  const updateProfile = useCallback((updates: Partial<LearnerProfile>) => {
    if (!progress) return;

    const updatedProgress = {
      ...progress,
      profile: {
        ...progress.profile,
        ...updates,
        lastVisit: new Date()
      }
    };
    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // 設定更新
  const updateSettings = useCallback((updates: Partial<UserSettings>) => {
    if (!progress) return;

    const updatedProgress = {
      ...progress,
      settings: {
        ...progress.settings,
        ...updates
      }
    };
    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // レッスン完了
  const completeLesson = useCallback((lessonId: string, points: number) => {
    if (!progress) return;

    const updatedProfile = {
      ...progress.profile,
      completedLessons: [...new Set([...progress.profile.completedLessons, lessonId])],
      totalPoints: progress.profile.totalPoints + points,
      lastLessonDate: new Date(),
      lastVisit: new Date()
    };

    // 実績追加
    const newAchievement: Achievement = {
      id: `lesson_${lessonId}_${Date.now()}`,
      type: 'lesson_completed',
      title: `Leçon complétée: ${lessonId}`,
      description: `Vous avez terminé la leçon ${lessonId}`,
      points,
      earnedAt: new Date(),
      relatedData: { lessonId }
    };

    const updatedProgress = {
      ...progress,
      profile: updatedProfile,
      achievements: [...progress.achievements, newAchievement]
    };

    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // バッジ追加
  const addBadge = useCallback((badge: any) => {
    if (!progress) return;

    const badgeWithEarnedAt = {
      ...badge,
      earnedAt: new Date()
    };

    const updatedProfile = {
      ...progress.profile,
      badges: [...progress.profile.badges, badgeWithEarnedAt]
    };

    // バッジ取得の実績も追加
    const newAchievement: Achievement = {
      id: `badge_${badge.id}_${Date.now()}`,
      type: 'badge_earned',
      title: `Badge obtenu: ${badge.name}`,
      description: badge.description,
      points: 50, // バッジ取得ボーナス
      earnedAt: new Date(),
      relatedData: { badgeId: badge.id }
    };

    const updatedProgress = {
      ...progress,
      profile: updatedProfile,
      achievements: [...progress.achievements, newAchievement]
    };

    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // 店舗訪問追加
  const addStoreVisit = useCallback((storeVisit: VisitedStore) => {
    if (!progress) return;

    const visitWithRegistration = {
      ...storeVisit,
      registeredAt: new Date()
    };

    const updatedProfile = {
      ...progress.profile,
      selfReportedStores: [...progress.profile.selfReportedStores, visitWithRegistration],
      visitedChains: [...new Set([...progress.profile.visitedChains, storeVisit.chainId])],
      realStoreVisits: progress.profile.realStoreVisits + 1,
      totalPoints: progress.profile.totalPoints + storeVisit.earnedPoints
    };

    // 店舗訪問の実績追加
    const newAchievement: Achievement = {
      id: `visit_${storeVisit.chainId}_${Date.now()}`,
      type: 'store_visited',
      title: `Visite de magasin: ${storeVisit.chainName}`,
      description: `Vous avez visité ${storeVisit.chainName}`,
      points: storeVisit.earnedPoints,
      earnedAt: new Date(),
      relatedData: { chainId: storeVisit.chainId }
    };

    const updatedProgress = {
      ...progress,
      profile: updatedProfile,
      achievements: [...progress.achievements, newAchievement]
    };

    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // レベルアップ
  const updateLevel = useCallback((newLevel: LearningLevel) => {
    if (!progress) return;

    const updatedProfile = {
      ...progress.profile,
      level: newLevel
    };

    // レベルアップの実績追加
    const newAchievement: Achievement = {
      id: `level_${newLevel}_${Date.now()}`,
      type: 'level_completed',
      title: `Niveau atteint: ${newLevel}`,
      description: `Vous avez atteint le niveau ${newLevel}`,
      points: 100,
      earnedAt: new Date(),
      relatedData: { level: newLevel }
    };

    const updatedProgress = {
      ...progress,
      profile: updatedProfile,
      achievements: [...progress.achievements, newAchievement]
    };

    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // ストリーク更新
  const updateStreak = useCallback((streakDays: number) => {
    if (!progress) return;

    const updatedProfile = {
      ...progress.profile,
      currentStreak: streakDays
    };

    // ストリーク達成の実績追加（7日達成時など）
    if (streakDays === 7) {
      const newAchievement: Achievement = {
        id: `streak_7_${Date.now()}`,
        type: 'streak_achieved',
        title: 'Séquence de 7 jours !',
        description: 'Vous avez appris pendant 7 jours consécutifs',
        points: 100,
        earnedAt: new Date(),
        relatedData: { streakDays: 7 }
      };

      const updatedProgress = {
        ...progress,
        profile: updatedProfile,
        achievements: [...progress.achievements, newAchievement]
      };

      saveProgress(updatedProgress);
    } else {
      const updatedProgress = {
        ...progress,
        profile: updatedProfile
      };
      saveProgress(updatedProgress);
    }
  }, [progress, saveProgress]);

  // データエクスポート
  const exportData = useCallback((): BackupData | null => {
    if (!progress) return null;

    const checksum = btoa(JSON.stringify(progress)).slice(0, 16);
    
    return {
      version: '1.0.0',
      exportedAt: new Date(),
      userId: progress.userId,
      data: progress,
      checksum
    };
  }, [progress]);

  // データインポート
  const importData = useCallback((backupData: BackupData): boolean => {
    try {
      // チェックサムの検証（簡単な検証）
      const expectedChecksum = btoa(JSON.stringify(backupData.data)).slice(0, 16);
      if (backupData.checksum !== expectedChecksum) {
        setError('Données corrompues - checksum invalide');
        return false;
      }

      // データの復元
      saveProgress(backupData.data);
      return true;
    } catch (err) {
      setError('Erreur lors de l\'importation des données');
      console.error('Erreur d\'importation:', err);
      return false;
    }
  }, [saveProgress]);

  // データリセット
  const resetProgress = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const confirmReset = window.confirm(
      'Êtes-vous sûr de vouloir réinitialiser toutes vos données ? Cette action est irréversible.'
    );
    
    if (confirmReset) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TUTORIAL_PROGRESS);
      const newProgress = createInitialProgress();
      setProgress(newProgress);
      saveProgress(newProgress);
    }
  }, [saveProgress]);

  // 学習時間の更新
  const updateLearningTime = useCallback((additionalMinutes: number) => {
    if (!progress) return;

    const updatedProfile = {
      ...progress.profile,
      totalLearningTime: progress.profile.totalLearningTime + additionalMinutes
    };

    const updatedProgress = {
      ...progress,
      profile: updatedProfile
    };

    saveProgress(updatedProgress);
  }, [progress, saveProgress]);

  // クイズ結果の記録
  const recordQuizResult = useCallback((score: number, totalQuestions: number) => {
    if (!progress) return;

    const percentage = Math.round((score / totalQuestions) * 100);
    const currentAverage = progress.profile.averageQuizScore;
    const totalQuizzes = progress.achievements.filter(a => a.type === 'quiz_passed').length + 1;
    
    // 新しい平均スコアを計算
    const newAverage = Math.round(
      ((currentAverage * (totalQuizzes - 1)) + percentage) / totalQuizzes
    );

    const updatedProfile = {
      ...progress.profile,
      averageQuizScore: newAverage
    };

    // クイズ合格の実績追加（80%以上で合格とする）
    if (percentage >= 80) {
      const newAchievement: Achievement = {
        id: `quiz_passed_${Date.now()}`,
        type: 'quiz_passed',
        title: 'Quiz réussi !',
        description: `Score: ${percentage}%`,
        points: Math.round(percentage / 2), // スコアに応じたポイント
        earnedAt: new Date()
      };

      const updatedProgress = {
        ...progress,
        profile: updatedProfile,
        achievements: [...progress.achievements, newAchievement]
      };

      saveProgress(updatedProgress);
    } else {
      const updatedProgress = {
        ...progress,
        profile: updatedProfile
      };
      saveProgress(updatedProgress);
    }
  }, [progress, saveProgress]);

  // ストレージ使用量の取得
  const getStorageUsage = useCallback((): { used: number; total: number; percentage: number } => {
    if (typeof window === 'undefined') {
      return { used: 0, total: 0, percentage: 0 };
    }
    
    try {
      const used = new Blob([localStorage.getItem(LOCAL_STORAGE_KEYS.TUTORIAL_PROGRESS) || '']).size;
      const total = 5 * 1024 * 1024; // 5MB (approximate localStorage limit)
      const percentage = Math.round((used / total) * 100);
      
      return { used, total, percentage };
    } catch {
      return { used: 0, total: 0, percentage: 0 };
    }
  }, []);

  return {
    // State
    progress,
    isLoading,
    error,

    // Actions
    updateProfile,
    updateSettings,
    completeLesson,
    addBadge,
    addStoreVisit,
    updateLevel,
    updateStreak,
    updateLearningTime,
    recordQuizResult,

    // Data management
    exportData,
    importData,
    resetProgress,
    getStorageUsage,

    // Direct save
    saveProgress
  };
};
