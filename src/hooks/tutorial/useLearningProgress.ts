// src/hooks/tutorial/useLearningProgress.ts
'use client';

import useLocalStorage from './useLocalStorage';
import { LearnerProfile, Badge, VisitedStore } from '@/types/tutorial';
import { badges as allBadges } from '@/data/tutorial/badges';
import { v4 as uuidv4 } from 'uuid';

const initialProfile: LearnerProfile = {
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
};

export function useLearningProgress() {
  const [profile, setProfile] = useLocalStorage<LearnerProfile>('learnerProfile', initialProfile);

  const completeLesson = (lessonId: string, points: number) => {
    if (profile.completedLessons.includes(lessonId)) return;

    const newProfile = {
      ...profile,
      completedLessons: [...profile.completedLessons, lessonId],
      totalPoints: profile.totalPoints + points,
    };
    setProfile(newProfile);
  };

  const addBadge = (badgeId: string) => {
    if (profile.badges.some(b => b.id === badgeId)) return;

    const badgeToAdd = allBadges.find(b => b.id === badgeId);
    if (!badgeToAdd) return;

    const newBadge: Badge = { ...badgeToAdd, earnedAt: new Date() };
    const newProfile = {
      ...profile,
      badges: [...profile.badges, newBadge],
    };
    setProfile(newProfile);
  };

  const reportStoreVisit = (chainId: string, chainName: string) => {
    const newVisit: VisitedStore = {
      chainId,
      chainName,
      visitDate: new Date(),
      earnedPoints: 100, // Example points for a visit
      earnedBadges: [],
    };

    const newProfile = {
      ...profile,
      selfReportedStores: [...profile.selfReportedStores, newVisit],
      realStoreVisits: profile.realStoreVisits + 1,
      totalPoints: profile.totalPoints + newVisit.earnedPoints,
    };

    // Check for real visit badges
    if (newProfile.realStoreVisits === 1) {
      addBadge('vrai-visiteur');
    }
    if (newProfile.realStoreVisits === 5) {
      addBadge('explorateur-reel');
    }

    setProfile(newProfile);
  };

  const resetProgress = () => {
    setProfile(initialProfile);
  };

  return {
    profile,
    completeLesson,
    addBadge,
    reportStoreVisit,
    resetProgress,
  };
}