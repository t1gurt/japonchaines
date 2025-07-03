/**
 * 学習ダッシュボードコンポーネント
 * 学習進捗、統計、推奨アクションを表示
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useLearningProgress } from '../../hooks/tutorial/useLearningProgress';
import { useBadgeSystem } from '../../hooks/tutorial/useBadgeSystem';
import { LearningLevel } from '../../types/tutorial';

interface LearningDashboardProps {
  className?: string;
}

export const LearningDashboard: React.FC<LearningDashboardProps> = ({ className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    profile,
    isLoading
  } = useLearningProgress();

  const {
    earnedBadges,
    badgeStatsByCategory,
    getRecentBadges,
    getCollectionCompleteness
  } = useBadgeSystem();

  const [selectedLevel, setSelectedLevel] = useState<LearningLevel>('debutant');

  // クライアントサイドでない場合またはローディング状態
  if (!isClient || !profile) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  const recentBadges = getRecentBadges(3);
  const collectionStats = getCollectionCompleteness();
  
  // 簡素化された計算値
  const overallProgress = Math.round((profile.completedLessons.length / 10) * 100); // 仮定：10レッスン
  const learningStats = {
    totalLessonsCompleted: profile.completedLessons.length,
    totalQuizzesPassed: Math.floor(profile.completedLessons.length * 0.8) // 仮定
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* En-tête du profil */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Bonjour, {profile.name} ! 🎌</h2>
            <p className="text-blue-100">
              Niveau {profile.level} • {profile.totalPoints} points • {earnedBadges.length} badges
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{overallProgress}%</div>
            <div className="text-sm text-blue-100">Progression totale</div>
          </div>
        </div>

        {/* Barre de progression globale */}
        <div className="mt-4">
          <div className="bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{learningStats?.totalLessonsCompleted || 0}</div>
          <div className="text-sm text-gray-600">Leçons terminées</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{learningStats?.totalQuizzesPassed || 0}</div>
          <div className="text-sm text-gray-600">Quiz réussis</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{profile.realStoreVisits}</div>
          <div className="text-sm text-gray-600">Visites réelles</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{profile.currentStreak}</div>
          <div className="text-sm text-gray-600">Jours consécutifs</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Progression par niveau */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 Progression par Niveau</h3>
          
          {/* Sélecteur de niveau */}
          <div className="flex space-x-2 mb-4">
            {(['debutant', 'intermediaire', 'avance'] as LearningLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          {/* Détails du niveau sélectionné */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progression</span>
                <span>{selectedLevel === profile.level ? overallProgress : 0}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${selectedLevel === profile.level ? overallProgress : 0}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Leçons complétées</span>
                <div className="font-semibold">{selectedLevel === profile.level ? profile.completedLessons.length : 0}/10</div>
              </div>
              <div>
                <span className="text-gray-600">Temps estimé restant</span>
                <div className="font-semibold">{Math.max(0, 300 - (profile.completedLessons.length * 30))}min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Prochaines étapes recommandées */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Prochaines Étapes</h3>
          
          <div className="text-center py-8">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-gray-600 mb-4">Continuez votre apprentissage avec les prochaines leçons !</p>
            <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Voir les leçons disponibles
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Badges récents */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🏅 Badges Récents</h3>
          
          {recentBadges.length > 0 ? (
            <div className="space-y-3">
              {recentBadges.map((badge: any) => (
                <div key={badge.id} className="flex items-center space-x-3">
                  <div className="text-2xl">{badge.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-gray-900 truncate">{badge.name}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(badge.earnedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-2 border-t border-gray-200">
                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    {typeof collectionStats === 'object' ? (
                      `${collectionStats.earned}/${collectionStats.total} badges (${collectionStats.percentage}%)`
                    ) : (
                      '0/0 badges (0%)'
                    )}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm text-gray-600">Terminez votre première leçon pour gagner votre premier badge !</p>
            </div>
          )}
        </div>

        {/* Prochains objectifs */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎖️ Prochains Objectifs</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Terminer 5 leçons</span>
                <span>{Math.min(100, Math.round((profile.completedLessons.length / 5) * 100))}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((profile.completedLessons.length / 5) * 100))}%` }}
                />
              </div>
              <p className="text-xs text-gray-600">Progressez dans vos études pour débloquer de nouveaux contenus</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Visiter 3 restaurants</span>
                <span>{Math.min(100, Math.round((profile.realStoreVisits / 3) * 100))}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((profile.realStoreVisits / 3) * 100))}%` }}
                />
              </div>
              <p className="text-xs text-gray-600">Mettez en pratique vos connaissances dans de vrais restaurants</p>
            </div>
          </div>
        </div>

        {/* Statistiques de temps */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">⏱️ Temps d&apos;Apprentissage</h3>
          
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{profile.completedLessons.length * 30}min</div>
              <div className="text-sm text-gray-600">Temps total d&apos;étude</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Moyenne par leçon</span>
                <div className="font-semibold">30min</div>
              </div>
              <div>
                <span className="text-gray-600">Efficacité</span>
                <div className="font-semibold text-green-600">Excellent</div>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Continuez à ce rythme pour maintenir une bonne progression !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Appel à l'action */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-2">🚀 Continuez votre Apprentissage !</h3>
        <p className="mb-4 text-green-100">
          Chaque leçon vous rapproche de la maîtrise de la culture alimentaire japonaise.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Continuer l&apos;Apprentissage
          </button>
          <button className="bg-green-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-500 transition-colors">
            Signaler une Visite
          </button>
        </div>
      </div>
    </div>
  );
};
