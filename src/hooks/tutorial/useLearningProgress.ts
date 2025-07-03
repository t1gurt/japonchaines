// src/hooks/tutorial/useLearningProgress.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { LearnerProfile, Badge, VisitedStore } from '@/types/tutorial';
import { allBadges } from '@/data/tutorial/badges';
import { v4 as uuidv4 } from 'uuid';

// localStorageのキー
const PROFILE_STORAGE_KEY = 'learnerProfile';

export function useLearningProgress() {
  // profileは初期状態ではnull。クライアントサイドでlocalStorageから読み込まれるまで。
  const [profile, setProfile] = useState<LearnerProfile | null>(null);
  // isLoadingは初期状態ではtrue。localStorageからの読み込みが完了するまで。
  const [isLoading, setIsLoading] = useState(true);

  // クライアントサイドでのみ実行されるプロファイル作成関数
  const createFreshProfile = useCallback((): LearnerProfile => ({
    id: uuidv4(),
    name: 'Apprenant Anonyme',
    level: 'debutant',
    totalPoints: 0,
    badges: [],
    completedLessons: [],
    visitedChains: [],
    favoriteCategories: [],
    currentStreak: 0,
    lastVisit: new Date(),
    realStoreVisits: 0,
    selfReportedStores: [],
  }), []);

  // クライアントマウント時にlocalStorageからデータを読み込む
  useEffect(() => {
    // windowオブジェクトが存在するか（クライアントサイドか）を確認
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(PROFILE_STORAGE_KEY);
        if (item) {
          const parsedProfile = JSON.parse(item);
          // Date文字列をDateオブジェクトに変換
          parsedProfile.lastVisit = new Date(parsedProfile.lastVisit);
          if (parsedProfile.badges) {
              parsedProfile.badges.forEach((b: Badge) => b.earnedAt = new Date(b.earnedAt));
          }
          if (parsedProfile.selfReportedStores) {
              parsedProfile.selfReportedStores.forEach((s: VisitedStore) => {
                  if(s.visitDate) s.visitDate = new Date(s.visitDate)
              });
          }
          setProfile(parsedProfile);
        } else {
          // データがない場合は新しいプロファイルを作成
          const freshProfile = createFreshProfile();
          setProfile(freshProfile);
          window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(freshProfile));
        }
      } catch (error) {
        console.error("Failed to load or create profile from localStorage", error);
        // エラーが発生した場合でも、新しいプロファイルを作成して続行
        setProfile(createFreshProfile());
      } finally {
        setIsLoading(false); // 読み込み完了
      }
    } else {
      // サーバーサイドレンダリングの場合、profileはnullのまま、isLoadingはtrueのまま
      // このパスは通常、'use client'があるため実行されないはずですが、念のため。
      setIsLoading(false); // サーバーサイドでは読み込みは発生しないため、falseにする
    }
  }, [createFreshProfile]);

  // プロファイルが変更されたらlocalStorageに保存
  useEffect(() => {
    // profileがnullでなく、かつクライアントサイドで、かつ読み込みが完了している場合のみ保存
    if (profile && typeof window !== 'undefined' && !isLoading) {
      try {
        window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
      } catch (error) {
        console.error("Failed to save profile to localStorage", error);
      }
    }
  }, [profile, isLoading]);

  const completeLesson = useCallback((lessonId: string, points: number) => {
    setProfile(prevProfile => {
      if (!prevProfile || prevProfile.completedLessons.includes(lessonId)) return prevProfile;

      const newProfile = {
        ...prevProfile,
        completedLessons: [...prevProfile.completedLessons, lessonId],
        totalPoints: prevProfile.totalPoints + points,
        lastVisit: new Date(),
      };

      // バッジの自動チェック
      checkForNewBadges(newProfile, lessonId);

      return newProfile;
    });
  }, []);

  const checkForNewBadges = useCallback((updatedProfile: LearnerProfile, lessonId?: string) => {
    const earnedBadgeIds = updatedProfile.badges.map(b => b.id);
    
    allBadges.forEach(badgeTemplate => {
      if (!earnedBadgeIds.includes(badgeTemplate.id) && !badgeTemplate.isRealVisitBadge) {
        let shouldEarn = false;
        
        // レッスン完了に基づくバッジ
        switch (badgeTemplate.id) {
          case 'maitre-baguettes':
            shouldEarn = updatedProfile.completedLessons.includes('debutant-manners');
            break;
          case 'expert-ticket-machine':
            shouldEarn = updatedProfile.completedLessons.includes('debutant-ticket-machine');
            break;
          case 'decouvreur-gyudon':
            shouldEarn = updatedProfile.completedLessons.includes('debutant-gyudon-chains');
            break;
          case 'amateur-ramen':
            shouldEarn = updatedProfile.completedLessons.includes('intermediaire-ramen-masters');
            break;
          case 'maitre-47-chaines':
            shouldEarn = updatedProfile.completedLessons.includes('avance-47-chains');
            break;
          case 'connaisseur-chaines':
            shouldEarn = updatedProfile.completedLessons.length >= 5;
            break;
          case 'ambassadeur-culturel':
            shouldEarn = updatedProfile.completedLessons.length >= 8;
            break;
        }
        
        if (shouldEarn) {
          const newBadge: Badge = {
            ...badgeTemplate,
            earnedAt: new Date(),
          };
          updatedProfile.badges.push(newBadge);
        }
      }
    });
  }, []);

  const addBadge = useCallback((badgeId: string) => {
    setProfile(prevProfile => {
      if (!prevProfile || prevProfile.badges.some(b => b.id === badgeId)) return prevProfile;

      const badgeToAdd = allBadges.find(b => b.id === badgeId);
      if (!badgeToAdd) return prevProfile;

      const newBadge: Badge = { ...badgeToAdd, earnedAt: new Date() };
      return {
        ...prevProfile,
        badges: [...prevProfile.badges, newBadge],
      };
    });
  }, []);

  const reportStoreVisit = useCallback((chainId: string, chainName: string) => {
    setProfile(prevProfile => {
      if (!prevProfile) return prevProfile;

      // 既に訪問済みかチェック
      const alreadyVisited = prevProfile.selfReportedStores.some(store => store.chainId === chainId);
      if (alreadyVisited) return prevProfile;

      const newVisit: VisitedStore = {
        chainId,
        chainName,
        visitDate: new Date(),
        earnedPoints: 100, // ボーナスポイント
        earnedBadges: [],
      };

      let updatedProfile = {
        ...prevProfile,
        selfReportedStores: [...prevProfile.selfReportedStores, newVisit],
        realStoreVisits: prevProfile.realStoreVisits + 1,
        totalPoints: prevProfile.totalPoints + newVisit.earnedPoints,
        visitedChains: [...prevProfile.visitedChains, chainId],
        lastVisit: new Date(),
      };
      
      // 実店舗訪問バッジのチェック
      const checkAndAddVisitBadge = (id: string, requiredVisits: number) => {
          if (updatedProfile.realStoreVisits >= requiredVisits && !updatedProfile.badges.some(b => b.id === id)) {
              const badgeToAdd = allBadges.find(b => b.id === id);
              if (badgeToAdd) {
                  updatedProfile.badges = [...updatedProfile.badges, { ...badgeToAdd, earnedAt: new Date() }];
              }
          }
      };

      checkAndAddVisitBadge('vrai-visiteur', 1);
      checkAndAddVisitBadge('explorateur-reel', 5);
      checkAndAddVisitBadge('conquerant-chaines', 10);
      checkAndAddVisitBadge('maitre-terrain', 20);
      checkAndAddVisitBadge('legende-vivante', 30);

      return updatedProfile;
    });
  }, []);

  const resetProgress = useCallback(() => {
    const newProfile = createFreshProfile();
    setProfile(newProfile);
    // localStorageも即座に更新
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(newProfile));
    }
  }, [createFreshProfile]);

  // データエクスポート
  const exportData = useCallback(() => {
    if (!profile) return;
    
    const dataStr = JSON.stringify(profile, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `japonchaines-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [profile]);

  // データインポート
  const importData = useCallback((file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          // Date文字列を再変換
          imported.lastVisit = new Date(imported.lastVisit);
          if (imported.badges) {
            imported.badges.forEach((b: Badge) => b.earnedAt = new Date(b.earnedAt));
          }
          if (imported.selfReportedStores) {
            imported.selfReportedStores.forEach((s: VisitedStore) => {
              if (s.visitDate) s.visitDate = new Date(s.visitDate);
            });
          }
          setProfile(imported);
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Erreur de lecture du fichier'));
      reader.readAsText(file);
    });
  }, []);

  return {
    profile,
    isLoading,
    completeLesson,
    addBadge,
    reportStoreVisit,
    resetProgress,
    exportData,
    importData,
  };
}