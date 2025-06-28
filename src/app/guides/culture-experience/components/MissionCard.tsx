'use client';

import { useState, useEffect } from 'react';
import { Mission, CultureLevel } from '@/types/culture';
import { completeMission } from '@/lib/culture-storage';

interface MissionCardProps {
  mission: Mission;
  isCompleted?: boolean;
  userLevel: CultureLevel;
  onMissionComplete?: (missionId: string) => void;
}

export default function MissionCard({ mission, isCompleted = false, userLevel, onMissionComplete }: MissionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    hard: 'bg-red-100 text-red-800 border-red-200'
  };

  const levelColors = {
    beginner: 'border-l-green-500 bg-green-50',
    intermediate: 'border-l-orange-500 bg-orange-50',
    advanced: 'border-l-red-500 bg-red-50'
  };

  const canAccess = () => {
    const levelOrder = { beginner: 0, intermediate: 1, advanced: 2 };
    return levelOrder[userLevel] >= levelOrder[mission.requiredLevel];
  };

  const handleComplete = async () => {
    if (canAccess() && !isCompleted) {
      setIsCompleting(true);
      
      try {
        // ミッションIDを生成（チェーンID + ミッションタイプの組み合わせ）
        const missionId = `${mission.chainId}-${mission.id}`;
        
        // ローカルストレージに保存
        completeMission(missionId, mission.chainId, mission.id as any, `Mission "${mission.title}" complétée`);
        
        // 親コンポーネントに通知
        if (onMissionComplete) {
          onMissionComplete(missionId);
        }
        
        // 成功フィードバック
        alert('🎉 Mission complétée ! Vous avez gagné ' + mission.points + ' points culturels !');
        
      } catch (error) {
        console.error('Erreur lors de la complétion de la mission:', error);
        alert('Erreur lors de la sauvegarde. Veuillez réessayer.');
      } finally {
        setIsCompleting(false);
      }
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 p-6 ${levelColors[mission.requiredLevel]} ${!canAccess() ? 'opacity-50' : ''}`}>
      {/* Header de la mission */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{mission.title}</h3>
            {mission.titleJapanese && (
              <span className="text-sm text-gray-600 font-japanese">{mission.titleJapanese}</span>
            )}
            {isCompleted && (
              <span className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Complétée
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
            <span className={`px-2 py-1 rounded border ${difficultyColors[mission.difficulty]}`}>
              {mission.difficulty === 'easy' ? 'Facile' : mission.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {mission.estimatedTime} min
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {mission.points} pts
            </span>
          </div>
        </div>
      </div>

      {/* Description courte */}
      <p className="text-gray-700 mb-4">{mission.description}</p>

      {/* Bouton pour étendre */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
      >
        {isExpanded ? 'Réduire' : 'Voir les détails'}
        <svg className={`w-4 h-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Détails étendus */}
      {isExpanded && (
        <div className="border-t pt-4 space-y-4">
          {/* Contexte culturel */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
              <span className="mr-2">🎌</span>
              Contexte culturel
            </h4>
            <p className="text-sm text-gray-700">{mission.culturalContext}</p>
          </div>

          {/* Récompenses */}
          {mission.rewards && mission.rewards.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">🏆</span>
                Ce que vous apprendrez
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {mission.rewards.map((reward, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {reward}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prérequis */}
          {mission.prerequisites && mission.prerequisites.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">📋</span>
                Prérequis
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {mission.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {prereq}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Bouton d'action */}
      {!isCompleted && (
        <div className="mt-6 pt-4 border-t">
          {canAccess() ? (
            <button
              onClick={handleComplete}
              disabled={isCompleting}
              className={`w-full py-2 px-4 rounded-lg transition-colors flex items-center justify-center ${
                isCompleting 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isCompleting ? (
                <>
                  <svg className="animate-spin w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enregistrement...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Marquer comme complétée
                </>
              )}
            </button>
          ) : (
            <div className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-lg text-center">
              Niveau {mission.requiredLevel} requis
            </div>
          )}
        </div>
      )}
    </div>
  );
}
