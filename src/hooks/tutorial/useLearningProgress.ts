/**
 * 学習進捗管理hook
 * レッスンの進捗追跡、レベル管理、推奨学習パスの提供
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  LearnerProfile,
  Lesson,
  LearningLevel,
  LearningStats,
  RecentActivity,
  QuizResult
} from '../../types/tutorial';
import { lessons, lessonUtils } from '../../data/tutorial/lessons';
import { useLocalStorage } from './useLocalStorage';

export const useLearningProgress = () => {
  const { progress, completeLesson, recordQuizResult, updateLevel, updateLearningTime } = useLocalStorage();
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  // 現在のプロフィール
  const profile = progress?.profile;

  // 利用可能なレッスン
  const availableLessons = useMemo(() => {
    if (!profile) return [];
    return lessonUtils.getAvailableLessons(profile.completedLessons);
  }, [profile]);

  // レベル別の進捗
  const levelProgress = useMemo(() => {
    if (!profile) return { debutant: 0, intermediaire: 0, avance: 0 };

    return {
      debutant: lessonUtils.calculateProgress(profile.completedLessons, 'debutant'),
      intermediaire: lessonUtils.calculateProgress(profile.completedLessons, 'intermediaire'),
      avance: lessonUtils.calculateProgress(profile.completedLessons, 'avance')
    };
  }, [profile]);

  // 全体進捗
  const overallProgress = useMemo(() => {
    if (!profile) return 0;
    return lessonUtils.calculateProgress(profile.completedLessons);
  }, [profile]);

  // 学習統計
  const learningStats = useMemo((): LearningStats | null => {
    if (!profile || !progress) return null;

    const totalLessons = Object.keys(lessons).length;
    const completedLessons = profile.completedLessons.length;
    const passedQuizzes = progress.achievements.filter(a => a.type === 'quiz_passed').length;

    // カテゴリー別進捗
    const categoryProgress: Record<string, any> = {};
    const categories = ['manners', 'systems', 'chains', 'food', 'expert', 'culture'];
    
    categories.forEach(category => {
      const categoryLessons = lessonUtils.getLessonsByCategory(category);
      const completedInCategory = categoryLessons.filter(lesson => 
        profile.completedLessons.includes(lesson.id)
      ).length;
      
      categoryProgress[category] = {
        completedLessons: completedInCategory,
        totalLessons: categoryLessons.length,
        completionPercentage: categoryLessons.length > 0 
          ? Math.round((completedInCategory / categoryLessons.length) * 100) 
          : 0
      };
    });

    // 最近のアクティビティ
    const recentActivity: RecentActivity[] = progress.achievements
      .slice(-10)
      .reverse()
      .map(achievement => ({
        id: achievement.id,
        type: achievement.type === 'level_completed' ? 'level_up' : achievement.type as 'lesson_completed' | 'quiz_passed' | 'store_visited' | 'badge_earned' | 'level_up',
        title: achievement.title,
        description: achievement.description,
        points: achievement.points,
        timestamp: achievement.earnedAt,
        metadata: achievement.relatedData
      }));

    return {
      totalLessonsCompleted: completedLessons,
      totalQuizzesPassed: passedQuizzes,
      totalPointsEarned: profile.totalPoints,
      totalBadgesEarned: profile.badges.length,
      totalStoresVisited: profile.realStoreVisits,
      currentStreak: profile.currentStreak,
      longestStreak: Math.max(profile.currentStreak, 0), // 簡略化
      averageQuizScore: profile.averageQuizScore,
      totalTimeSpent: profile.totalLearningTime,
      levelProgress: {
        debutant: {
          completedLessons: lessonUtils.getLessonsByLevel('debutant').filter(lesson => 
            profile.completedLessons.includes(lesson.id)
          ).length,
          totalLessons: lessonUtils.getLessonsByLevel('debutant').length,
          completionPercentage: levelProgress.debutant
        },
        intermediaire: {
          completedLessons: lessonUtils.getLessonsByLevel('intermediaire').filter(lesson => 
            profile.completedLessons.includes(lesson.id)
          ).length,
          totalLessons: lessonUtils.getLessonsByLevel('intermediaire').length,
          completionPercentage: levelProgress.intermediaire
        },
        avance: {
          completedLessons: lessonUtils.getLessonsByLevel('avance').filter(lesson => 
            profile.completedLessons.includes(lesson.id)
          ).length,
          totalLessons: lessonUtils.getLessonsByLevel('avance').length,
          completionPercentage: levelProgress.avance
        }
      },
      categoryProgress,
      recentActivity
    };
  }, [profile, progress, levelProgress]);

  // 推奨次ステップ
  const recommendedNextSteps = useMemo(() => {
    if (!profile) return [];

    const available = availableLessons.slice(0, 3); // 最大3つの推奨
    const recommendations = [];

    for (const lesson of available) {
      let reason = '';
      
      if (profile.completedLessons.length === 0) {
        reason = 'Commencez votre apprentissage !';
      } else if (lesson.prerequisites.length > 0) {
        reason = `Continuez après ${lesson.prerequisites[lesson.prerequisites.length - 1]}`;
      } else {
        reason = 'Parfait pour votre niveau actuel';
      }

      recommendations.push({
        lesson,
        reason,
        estimatedTime: lesson.estimatedTime,
        points: lesson.points
      });
    }

    return recommendations;
  }, [profile, availableLessons]);

  // レッスン開始
  const startLesson = useCallback((lessonId: string) => {
    setCurrentLessonId(lessonId);
    setStartTime(new Date());
  }, []);

  // レッスン完了
  const finishLesson = useCallback((lessonId: string, quizResult?: QuizResult) => {
    if (!profile) return;

    const lesson = lessons[lessonId];
    if (!lesson) return;

    // 学習時間の計算
    let timeSpent = lesson.estimatedTime; // デフォルト時間
    if (startTime && currentLessonId === lessonId) {
      const endTime = new Date();
      timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60)); // 分
    }

    // レッスン完了の記録
    completeLesson(lessonId, lesson.points);
    updateLearningTime(timeSpent);

    // クイズ結果の記録
    if (quizResult) {
      recordQuizResult(quizResult.correctAnswers, quizResult.totalQuestions);
    }

    // レベルアップのチェック
    const newLevelProgress = {
      debutant: lessonUtils.calculateProgress([...profile.completedLessons, lessonId], 'debutant'),
      intermediaire: lessonUtils.calculateProgress([...profile.completedLessons, lessonId], 'intermediaire'),
      avance: lessonUtils.calculateProgress([...profile.completedLessons, lessonId], 'avance')
    };

    // レベルアップロジック
    if (profile.level === 'debutant' && newLevelProgress.debutant === 100) {
      updateLevel('intermediaire');
    } else if (profile.level === 'intermediaire' && newLevelProgress.intermediaire === 100) {
      updateLevel('avance');
    }

    // 状態をリセット
    setCurrentLessonId(null);
    setStartTime(null);
  }, [profile, currentLessonId, startTime, completeLesson, updateLearningTime, recordQuizResult, updateLevel]);

  // レッスン中断
  const abandonLesson = useCallback(() => {
    setCurrentLessonId(null);
    setStartTime(null);
  }, []);

  // 特定レッスンの詳細情報
  const getLessonDetails = useCallback((lessonId: string) => {
    const lesson = lessons[lessonId];
    if (!lesson || !profile) return null;

    return {
      ...lesson,
      isCompleted: profile.completedLessons.includes(lessonId),
      isAvailable: lessonUtils.checkPrerequisites(lessonId, profile.completedLessons),
      completedAt: profile.lastLessonDate, // 簡略化
      attempts: 0, // TODO: 実際の試行回数を追跡
      bestScore: undefined // TODO: 最高スコアを追跡
    };
  }, [profile]);

  // レベル情報の取得
  const getLevelInfo = useCallback((level?: LearningLevel) => {
    const targetLevel = level || profile?.level || 'debutant';
    const levelLessons = lessonUtils.getLessonsByLevel(targetLevel);
    const completedInLevel = profile ? 
      levelLessons.filter(lesson => profile.completedLessons.includes(lesson.id)).length : 0;

    return {
      level: targetLevel,
      totalLessons: levelLessons.length,
      completedLessons: completedInLevel,
      completionPercentage: levelLessons.length > 0 ? 
        Math.round((completedInLevel / levelLessons.length) * 100) : 0,
      lessons: levelLessons,
      estimatedTotalTime: lessonUtils.calculateEstimatedTime(levelLessons.map(l => l.id)),
      totalPoints: lessonUtils.calculateTotalPoints(levelLessons.map(l => l.id))
    };
  }, [profile]);

  // 学習パスの取得
  const getLearningPath = useCallback(() => {
    if (!profile) return [];

    const currentLevel = profile.level;
    const recommendedPath = lessonUtils.getRecommendedLearningPath(currentLevel);
    
    return recommendedPath.map(lessonId => {
      const lesson = lessons[lessonId];
      const isCompleted = profile.completedLessons.includes(lessonId);
      const isAvailable = lessonUtils.checkPrerequisites(lessonId, profile.completedLessons);
      
      return {
        lessonId,
        lesson,
        isCompleted,
        isAvailable,
        isCurrent: !isCompleted && isAvailable
      };
    });
  }, [profile]);

  // 達成可能な次のマイルストーン
  const getNextMilestones = useCallback(() => {
    if (!profile) return [];

    const milestones = [];

    // レベル完了マイルストーン
    const currentLevelInfo = getLevelInfo();
    if (currentLevelInfo.completionPercentage < 100) {
      milestones.push({
        type: 'level_completion',
        title: `Terminer le niveau ${currentLevelInfo.level}`,
        description: `${currentLevelInfo.completedLessons}/${currentLevelInfo.totalLessons} leçons complétées`,
        progress: currentLevelInfo.completionPercentage,
        target: 100
      });
    }

    // ポイントマイルストーン
    const nextPointTarget = Math.ceil(profile.totalPoints / 500) * 500;
    if (nextPointTarget > profile.totalPoints) {
      milestones.push({
        type: 'points',
        title: `Atteindre ${nextPointTarget} points`,
        description: `${profile.totalPoints}/${nextPointTarget} points`,
        progress: Math.round((profile.totalPoints / nextPointTarget) * 100),
        target: nextPointTarget
      });
    }

    // ストリークマイルストーン
    const nextStreakTarget = Math.ceil((profile.currentStreak + 1) / 7) * 7;
    milestones.push({
      type: 'streak',
      title: `Séquence de ${nextStreakTarget} jours`,
      description: `${profile.currentStreak}/${nextStreakTarget} jours`,
      progress: Math.round((profile.currentStreak / nextStreakTarget) * 100),
      target: nextStreakTarget
    });

    return milestones;
  }, [profile, getLevelInfo]);

  // 学習時間の統計
  const getTimeStats = useCallback(() => {
    if (!profile) return null;

    const totalMinutes = profile.totalLearningTime;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const averagePerLesson = profile.completedLessons.length > 0 ? 
      Math.round(totalMinutes / profile.completedLessons.length) : 0;

    return {
      totalMinutes,
      totalHours: hours,
      remainingMinutes: minutes,
      averagePerLesson,
      formattedTotal: `${hours}h ${minutes}m`,
      efficiency: averagePerLesson <= 15 ? 'Efficace' : 
                 averagePerLesson <= 25 ? 'Normal' : 'Prendre son temps'
    };
  }, [profile]);

  return {
    // État
    profile,
    currentLessonId,
    isInLesson: currentLessonId !== null,
    
    // Progression
    overallProgress,
    levelProgress,
    learningStats,
    
    // Leçons
    availableLessons,
    recommendedNextSteps,
    getLessonDetails,
    getLearningPath,
    
    // Actions
    startLesson,
    finishLesson,
    abandonLesson,
    
    // Informations
    getLevelInfo,
    getNextMilestones,
    getTimeStats,
    
    // Utilitaires
    canAccessLesson: (lessonId: string) => {
      return profile ? lessonUtils.checkPrerequisites(lessonId, profile.completedLessons) : false;
    },
    
    isLessonCompleted: (lessonId: string) => {
      return profile ? profile.completedLessons.includes(lessonId) : false;
    }
  };
};
