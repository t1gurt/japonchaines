'use client';

import { RelationshipProgress, RelationshipLevel } from '@/types/culture';

interface RelationshipTrackerProps {
  relationships: RelationshipProgress[];
  className?: string;
}

export default function RelationshipTracker({ relationships, className = '' }: RelationshipTrackerProps) {
  const levelConfig = {
    stranger: {
      name: 'Inconnu',
      nameJapanese: '他人',
      icon: '👤',
      color: 'text-gray-500',
      bgColor: 'bg-gray-100',
      description: 'Première visite, relation neutre'
    },
    recognized: {
      name: 'Reconnu',
      nameJapanese: '知り合い',
      icon: '👋',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
      description: 'Le staff vous reconnaît'
    },
    friendly: {
      name: 'Amical',
      nameJapanese: '友好的',
      icon: '😊',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      description: 'Relation chaleureuse établie'
    },
    close: {
      name: 'Proche',
      nameJapanese: '親しい',
      icon: '❤️',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      description: 'Relation personnelle développée'
    }
  };

  const getChainName = (chainId: string): string => {
    // Cette fonction pourrait être améliorée avec une base de données des chaînes
    const chainNames: { [key: string]: string } = {
      'yoshinoya': 'Yoshinoya',
      'sukiya': 'Sukiya',
      'matsuya': 'Matsuya',
      'nakau': 'Nakau',
      'ichiran': 'Ichiran',
      'ippudo': 'Ippudo',
      'sushiro': 'Sushiro',
      'kura-sushi': 'Kura Sushi',
      'hama-sushi': 'Hama Sushi',
      // Ajouter d'autres chaînes au besoin
    };
    return chainNames[chainId] || chainId.charAt(0).toUpperCase() + chainId.slice(1);
  };

  const getProgressToNextLevel = (current: RelationshipLevel, visits: number): number => {
    const thresholds = {
      stranger: 3,    // Devient "recognized" à 3 visites
      recognized: 8,  // Devient "friendly" à 8 visites  
      friendly: 15,   // Devient "close" à 15 visites
      close: 15       // Déjà au maximum
    };
    
    if (current === 'close') return 100;
    
    const currentThreshold = thresholds[current];
    return Math.min((visits / currentThreshold) * 100, 100);
  };

  const getNextLevel = (current: RelationshipLevel): RelationshipLevel | null => {
    const progression: { [key in RelationshipLevel]: RelationshipLevel | null } = {
      stranger: 'recognized',
      recognized: 'friendly', 
      friendly: 'close',
      close: null
    };
    return progression[current];
  };

  if (relationships.length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Vos Relations avec le Staff</h3>
        <div className="text-center text-gray-500 py-8">
          <div className="text-4xl mb-2">🤝</div>
          <p>Commencez à visiter des chaînes pour développer des relations !</p>
          <p className="text-sm mt-2">
            Plus vous utilisez le japonais, plus vous créerez de liens authentiques.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Vos Relations avec le Staff</h3>
      
      <div className="space-y-4">
        {relationships.map((relation) => {
          const levelInfo = levelConfig[relation.relationshipLevel];
          const nextLevel = getNextLevel(relation.relationshipLevel);
          const progressPercent = getProgressToNextLevel(relation.relationshipLevel, relation.visitCount);
          
          return (
            <div key={relation.chainId} className="border rounded-lg p-4">
              {/* Header avec nom de chaîne et niveau */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{getChainName(relation.chainId)}</h4>
                  <p className="text-sm text-gray-500">{relation.visitCount} visite{relation.visitCount > 1 ? 's' : ''}</p>
                </div>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full border ${levelInfo.bgColor}`}>
                  <span className="mr-2">{levelInfo.icon}</span>
                  <span className={`text-sm font-medium ${levelInfo.color}`}>
                    {levelInfo.name}
                  </span>
                </div>
              </div>

              {/* Barre de progression vers le niveau suivant */}
              {nextLevel && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progression vers "{levelConfig[nextLevel].name}"</span>
                    <span>{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        nextLevel === 'recognized' ? 'bg-blue-500' :
                        nextLevel === 'friendly' ? 'bg-green-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Dernières interactions */}
              {relation.staffInteractions && relation.staffInteractions.length > 0 && (
                <div className="mt-3 pt-3 border-t">
                  <h5 className="text-xs font-medium text-gray-700 mb-2">Dernières interactions</h5>
                  <div className="space-y-2">
                    {relation.staffInteractions.slice(-2).map((interaction, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center justify-between">
                        <span className="truncate mr-2">{interaction.interaction}</span>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {interaction.japaneseUsed && (
                            <span className="text-blue-600" title="Japonais utilisé">🗾</span>
                          )}
                          <span className={`w-2 h-2 rounded-full ${
                            interaction.staffResponse === 'cold' ? 'bg-gray-400' :
                            interaction.staffResponse === 'neutral' ? 'bg-yellow-400' :
                            interaction.staffResponse === 'warm' ? 'bg-green-400' :
                            'bg-green-500'
                          }`} title={interaction.staffResponse}></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes personnelles */}
              {relation.personalNotes && (
                <div className="mt-3 pt-3 border-t">
                  <h5 className="text-xs font-medium text-gray-700 mb-1">Notes personnelles</h5>
                  <p className="text-xs text-gray-600 italic">"{relation.personalNotes}"</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Conseils pour améliorer les relations */}
      <div className="mt-6 pt-6 border-t bg-blue-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Conseils pour développer vos relations</h4>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• Utilisez des phrases simples en japonais comme "arigatou gozaimasu"</li>
          <li>• Visitez régulièrement les mêmes établissements</li>
          <li>• Souriez et montrez votre appréciation de la nourriture</li>
          <li>• Posez des questions sur les recommandations du menu</li>
          <li>• Respectez les heures moins chargées pour plus d'interactions</li>
        </ul>
      </div>
    </div>
  );
}
