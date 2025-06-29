'use client';

import { ProgressStats, CultureLevel } from '@/types/culture';

interface ProgressTrackerProps {
  stats: ProgressStats;
  className?: string;
}

export default function ProgressTracker({ stats, className = '' }: ProgressTrackerProps) {
  const levelInfo = {
    beginner: {
      name: 'Débutant',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200',
      icon: '🌱'
    },
    intermediate: {
      name: 'Intermédiaire',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-200',
      icon: '🌿'
    },
    advanced: {
      name: 'Avancé',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200',
      icon: '🌸'
    }
  };

  const currentLevel = levelInfo[stats.cultureLevel];
  const completionPercentage = (stats.completedMissions / stats.totalMissions) * 100;
  const chainsPercentage = (stats.chainsVisited / stats.totalChains) * 100;

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 xl:p-6 ${className}`}>
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4 xl:mb-6 space-y-3 xl:space-y-0">
        <h2 className="text-lg xl:text-xl font-bold text-gray-900 leading-tight">
          Votre Progression Culturelle
        </h2>
        <div className={`flex items-center px-3 py-1 rounded-full border ${currentLevel.borderColor} ${currentLevel.bgColor} w-fit`}>
          <span className="mr-2 text-sm">{currentLevel.icon}</span>
          <span className={`text-sm font-medium ${currentLevel.color} whitespace-nowrap`}>
            {currentLevel.name}
          </span>
        </div>
      </div>

      {/* Stats principales */}
      <div className="grid grid-cols-2 gap-3 xl:gap-4 mb-4 xl:mb-6">
        <div className="text-center p-3 xl:p-4 bg-blue-50 rounded-lg">
          <div className="text-xl xl:text-2xl font-bold text-blue-600">{stats.totalPoints}</div>
          <div className="text-xs xl:text-sm text-blue-700">Points Totaux</div>
        </div>
        
        <div className="text-center p-3 xl:p-4 bg-green-50 rounded-lg">
          <div className="text-xl xl:text-2xl font-bold text-green-600">{stats.completedMissions}</div>
          <div className="text-xs xl:text-sm text-green-700">Missions</div>
        </div>
        
        <div className="text-center p-3 xl:p-4 bg-purple-50 rounded-lg">
          <div className="text-xl xl:text-2xl font-bold text-purple-600">{stats.chainsVisited}</div>
          <div className="text-xs xl:text-sm text-purple-700">Chaînes Visitées</div>
        </div>
        
        <div className="text-center p-3 xl:p-4 bg-pink-50 rounded-lg">
          <div className="text-xl xl:text-2xl font-bold text-pink-600">{stats.relationshipCount}</div>
          <div className="text-xs xl:text-sm text-pink-700">Relations</div>
        </div>
      </div>

      {/* Barres de progression */}
      <div className="space-y-4">
        {/* Missions complétées */}
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Missions Accomplies</span>
            <span>{stats.completedMissions}/{stats.totalMissions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {completionPercentage.toFixed(1)}% complété
          </div>
        </div>

        {/* Chaînes explorées */}
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Chaînes Explorées</span>
            <span>{stats.chainsVisited}/{stats.totalChains}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${chainsPercentage}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {chainsPercentage.toFixed(1)}% exploré
          </div>
        </div>

        {/* Progression vers le niveau suivant */}
        {stats.cultureLevel !== 'advanced' && (
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progression vers le niveau suivant</span>
              <span>{stats.nextLevelProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${stats.nextLevelProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Continuez vos missions pour débloquer le niveau suivant !
            </div>
          </div>
        )}
      </div>

      {/* Badges/Achievements */}
      <div className="mt-4 xl:mt-6 pt-4 xl:pt-6 border-t">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Accomplissements</h3>
        <div className="flex flex-wrap gap-2">
          {stats.completedMissions >= 1 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
              🎯 Première Mission
            </span>
          )}
          {stats.chainsVisited >= 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
              🗺️ Explorateur
            </span>
          )}
          {stats.relationshipCount >= 1 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-pink-100 text-pink-800">
              🤝 Créateur de Liens
            </span>
          )}
          {stats.cultureLevel === 'intermediate' && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
              🌿 Intermédiaire
            </span>
          )}
          {stats.cultureLevel === 'advanced' && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
              🌸 Maître Culturel
            </span>
          )}
          {stats.totalPoints >= 1000 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
              ⭐ Collectionneur
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
