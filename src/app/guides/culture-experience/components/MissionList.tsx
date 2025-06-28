'use client';

import { useState, useEffect } from 'react';
import { Mission, CultureLevel, MissionType } from '@/types/culture';
import { getUserProgress } from '@/lib/culture-storage';
import MissionCard from './MissionCard';

interface MissionListProps {
  missions: Mission[];
  chainId?: string;
}

export default function MissionList({ missions, chainId }: MissionListProps) {
  const [userProgress, setUserProgress] = useState<any>(null);
  const [userLevel, setUserLevel] = useState<CultureLevel>('beginner');

  useEffect(() => {
    // ユーザーの進捗を読み込み
    const progress = getUserProgress();
    setUserProgress(progress);
    setUserLevel(progress.cultureLevel);
  }, []);

  const handleMissionComplete = (missionId: string) => {
    // 進捗を再読み込み
    const updatedProgress = getUserProgress();
    setUserProgress(updatedProgress);
    setUserLevel(updatedProgress.cultureLevel);
  };

  const isMissionCompleted = (mission: Mission): boolean => {
    if (!userProgress) return false;
    
    const missionId = `${mission.chainId}-${mission.id}`;
    return userProgress.completedMissions.some((completed: any) => 
      completed.chainId === mission.chainId && 
      completed.missionType === mission.id
    );
  };

  if (!userProgress) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-100 h-48 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {missions.map((mission) => (
        <MissionCard
          key={mission.id}
          mission={mission}
          isCompleted={isMissionCompleted(mission)}
          userLevel={userLevel}
          onMissionComplete={handleMissionComplete}
        />
      ))}
    </div>
  );
}
