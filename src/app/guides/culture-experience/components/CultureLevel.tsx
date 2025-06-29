'use client';

import type { CultureLevel } from '@/types/culture';

interface CultureLevelProps {
  level: CultureLevel;
  size?: 'sm' | 'md' | 'lg';
  showDescription?: boolean;
  className?: string;
}

export default function CultureLevel({ level, size = 'md', showDescription = false, className = '' }: CultureLevelProps) {
  const levelConfig = {
    beginner: {
      name: 'Débutant',
      nameJapanese: '初心者',
      icon: '🌱',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200',
      description: 'Découverte des bases de la culture japonaise des chaînes de restaurants'
    },
    intermediate: {
      name: 'Intermédiaire', 
      nameJapanese: '中級者',
      icon: '🌿',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-200',
      description: 'Compréhension approfondie des nuances culturelles et sociales'
    },
    advanced: {
      name: 'Avancé',
      nameJapanese: '上級者',
      icon: '🌸',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200',
      description: 'Maîtrise des subtilités culturelles et capacité à créer des liens authentiques'
    }
  };

  const sizeClasses = {
    sm: {
      container: 'px-2 py-1 text-xs',
      icon: 'text-sm',
      text: 'text-xs'
    },
    md: {
      container: 'px-3 py-2 text-sm',
      icon: 'text-base',
      text: 'text-sm'
    },
    lg: {
      container: 'px-4 py-3 text-base',
      icon: 'text-lg',
      text: 'text-base'
    }
  };

  const config = levelConfig[level];
  const sizeClass = sizeClasses[size];

  return (
    <div className={`inline-flex flex-col ${className}`}>
      {/* Badge principal */}
      <div className={`
        inline-flex items-center rounded-full border
        ${config.bgColor} ${config.borderColor} ${config.color}
        ${sizeClass.container}
        font-medium
        flex-wrap gap-1
      `}>
        <span className={`${sizeClass.icon} flex-shrink-0`}>{config.icon}</span>
        <span className={`${sizeClass.text} whitespace-nowrap`}>{config.name}</span>
        {size === 'lg' && (
          <span className={`text-gray-600 font-japanese ${sizeClass.text} hidden sm:inline whitespace-nowrap`}>
            {config.nameJapanese}
          </span>
        )}
      </div>

      {/* Description optionnelle */}
      {showDescription && (
        <div className="mt-2 text-xs text-gray-600 max-w-xs">
          {config.description}
        </div>
      )}
    </div>
  );
}

// Composant pour afficher la progression entre niveaux
interface LevelProgressProps {
  currentLevel: CultureLevel;
  progress: number; // 0-100
  className?: string;
}

export function LevelProgress({ currentLevel, progress, className = '' }: LevelProgressProps) {
  const levelConfig = {
    beginner: {
      name: 'Débutant',
      nameJapanese: '初心者',
      icon: '🌱',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200',
      description: 'Découverte des bases de la culture japonaise des chaînes de restaurants'
    },
    intermediate: {
      name: 'Intermédiaire', 
      nameJapanese: '中級者',
      icon: '🌿',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-200',
      description: 'Compréhension approfondie des nuances culturelles et sociales'
    },
    advanced: {
      name: 'Avancé',
      nameJapanese: '上級者',
      icon: '🌸',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200',
      description: 'Maîtrise des subtilités culturelles et capacité à créer des liens authentiques'
    }
  };

  const nextLevel: { [key in CultureLevel]: CultureLevel | null } = {
    beginner: 'intermediate',
    intermediate: 'advanced',
    advanced: null
  };

  const next = nextLevel[currentLevel];

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <CultureLevel level={currentLevel} size="sm" />
        {next && (
          <>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">
                {progress}%
              </div>
            </div>
            <CultureLevel level={next} size="sm" />
          </>
        )}
      </div>
      
      {next ? (
        <p className="text-xs text-gray-600 text-center">
          Continuez vos missions pour atteindre le niveau {levelConfig[next].name} !
        </p>
      ) : (
        <p className="text-xs text-gray-600 text-center">
          🎉 Félicitations ! Vous avez atteint le niveau maximum !
        </p>
      )}
    </div>
  );
}
