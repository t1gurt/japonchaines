'use client';

import { useState } from 'react';
import { PhraseCard as PhraseCardType } from '@/types/culture';

interface PhraseCardProps {
  phrase: PhraseCardType;
  showAudio?: boolean;
}

export default function PhraseCard({ phrase, showAudio = false }: PhraseCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRomaji, setShowRomaji] = useState(true);

  const difficultyColors = {
    beginner: 'border-green-200 bg-green-50',
    intermediate: 'border-orange-200 bg-orange-50',
    advanced: 'border-red-200 bg-red-50'
  };

  const handlePractice = () => {
    console.log('Practicing phrase:', phrase.id);
  };

  return (
    <div className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${difficultyColors[phrase.difficulty]}`}>
      {/* Header avec niveau de difficulté */}
      <div className="flex justify-between items-center mb-3">
        <span className={`text-xs px-2 py-1 rounded border ${{ 
          beginner: 'bg-green-100 text-green-800 border-green-300',
          intermediate: 'bg-orange-100 text-orange-800 border-orange-300',
          advanced: 'bg-red-100 text-red-800 border-red-300'
        }[phrase.difficulty]}`}>
          {phrase.difficulty === 'beginner' ? 'Débutant' : 
           phrase.difficulty === 'intermediate' ? 'Intermédiaire' : 'Avancé'}
        </span>
        
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="text-blue-600 hover:text-blue-800 transition-colors"
          title={isFlipped ? 'Voir le japonais' : 'Voir la traduction'}
        >
          <svg className={`w-4 h-4 transition-transform ${isFlipped ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Contenu principal */}
      <div className="min-h-[120px] flex flex-col justify-center">
        {!isFlipped ? (
          // Face japonaise
          <div className="text-center space-y-3">
            <div className="text-xl font-japanese text-gray-900 leading-relaxed">
              {phrase.japanese}
            </div>
            
            {phrase.hiragana && phrase.hiragana !== phrase.japanese && (
              <div className="text-sm text-gray-600 font-japanese">
                {phrase.hiragana}
              </div>
            )}
            
            {showRomaji && (
              <div className="space-y-2">
                <button
                  onClick={() => setShowRomaji(!showRomaji)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  {showRomaji ? 'Masquer' : 'Afficher'} la prononciation
                </button>
                <div className="text-sm text-gray-700 italic">
                  {phrase.romaji}
                </div>
              </div>
            )}
          </div>
        ) : (
          // Face française
          <div className="text-center space-y-3">
            <div className="text-lg text-gray-900 font-medium">
              {phrase.french}
            </div>
            
            <div className="text-sm text-gray-600">
              <strong>Contexte :</strong> {phrase.context}
            </div>
            
            {phrase.culturalNote && (
              <div className="text-xs text-blue-700 bg-blue-50 p-2 rounded border-l-2 border-blue-200">
                <strong>💡 Note culturelle :</strong> {phrase.culturalNote}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          {phrase.context}
        </div>
        
        <div className="flex gap-2">
          {showAudio && (
            <button
              className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
              title="Écouter la prononciation"
              disabled // Future feature
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6 6h.01M9 6v12l8-6-8-6z" />
              </svg>
            </button>
          )}
          
          <button
            onClick={handlePractice}
            className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Pratiquer
          </button>
        </div>
      </div>
    </div>
  );
}
