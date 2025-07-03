// src/components/tutorial/TutorialDashboard.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLearningProgress } from '@/hooks/tutorial/useLearningProgress';
import { lessons } from '@/data/tutorial/lessons';
import { allBadges } from '@/data/tutorial/badges';
import SelfReportModal from './SelfReportModal';
import { chains } from '@/data/tutorial/chains';
import { Trophy, Star, Target, Award, MapPin, RotateCcw, AlertTriangle } from 'lucide-react';

const TutorialDashboard = () => {
  const { profile, isLoading, reportStoreVisit, resetProgress } = useLearningProgress();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isResetModalOpen, setResetModalOpen] = useState(false);

  // If still loading or profile is not available, show a loading indicator
  if (isLoading || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Chargement de votre profil d'apprentissage...</p>
        </div>
      </div>
    );
  }

  const handleReportVisit = (chainId: string) => {
    const chain = chains.find(c => c.id === chainId);
    if (chain) {
      reportStoreVisit(chainId, chain.name);
    }
  };

  const handleResetProgress = () => {
    resetProgress();
    setResetModalOpen(false);
  };

  const progressPercentage = Math.round((profile.completedLessons.length / lessons.length) * 100);
  const nextLevelThreshold = profile.level === 'debutant' ? 4 : profile.level === 'intermediaire' ? 7 : 9;
  const completedInLevel = profile.completedLessons.length;
  const levelProgress = Math.min((completedInLevel / nextLevelThreshold) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Bienvenue, {profile.name} !
            </h1>
            <p className="text-lg text-gray-600">
              Continuez votre apprentissage de la culture culinaire japonaise
            </p>
          </div>
          <div className="mt-4 lg:mt-0 flex gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg"
            >
              Signaler une Visite
            </button>
            <button
              onClick={() => setResetModalOpen(true)}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg flex items-center"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Points Totaux</h3>
                <p className="text-3xl font-bold text-blue-600">{profile.totalPoints}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Progression</h3>
                <p className="text-3xl font-bold text-green-600">{progressPercentage}%</p>
                <p className="text-sm text-gray-500">{profile.completedLessons.length}/{lessons.length} leçons</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Badges</h3>
                <p className="text-3xl font-bold text-yellow-600">{profile.badges.length}</p>
                <p className="text-sm text-gray-500">sur {allBadges.length} disponibles</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Visites Réelles</h3>
                <p className="text-3xl font-bold text-purple-600">{profile.realStoreVisits}</p>
                <p className="text-sm text-gray-500">{profile.visitedChains.length} chaînes différentes</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Progression par niveau */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre Niveau</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold capitalize text-gray-700">{profile.level}</span>
                <span className="text-sm text-gray-500">{completedInLevel}/{nextLevelThreshold} leçons</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    profile.level === 'debutant' ? 'bg-green-500' : 
                    profile.level === 'intermediaire' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}
                  style={{ width: `${levelProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Leçons par niveau */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {['debutant', 'intermediaire', 'avance'].map((level) => {
            const levelLessons = lessons.filter(lesson => lesson.level === level);
            const completedInThisLevel = levelLessons.filter(lesson => 
              profile.completedLessons.includes(lesson.id)
            ).length;
            
            const levelColors = {
              debutant: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', accent: 'text-green-600' },
              intermediaire: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', accent: 'text-blue-600' },
              avance: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', accent: 'text-purple-600' }
            };
            
            const colors = levelColors[level as keyof typeof levelColors];
            
            return (
              <div key={level} className={`${colors.bg} ${colors.border} border rounded-xl p-6`}>
                <h3 className={`text-xl font-bold ${colors.text} mb-2 capitalize`}>
                  Niveau {level}
                </h3>
                <p className={`${colors.accent} font-medium mb-4`}>
                  {completedInThisLevel}/{levelLessons.length} leçons terminées
                </p>
                <div className="space-y-3">
                  {levelLessons.map(lesson => {
                    const isCompleted = profile.completedLessons.includes(lesson.id);
                    return (
                      <Link
                        key={lesson.id}
                        href={`/tutorial/lesson/${lesson.id}`}
                        className={`block p-3 rounded-lg transition-all duration-200 ${
                          isCompleted 
                            ? 'bg-white border-2 border-green-300 shadow-sm' 
                            : 'bg-white hover:shadow-md border border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {lesson.title}
                              {isCompleted && <span className="ml-2 text-green-600">✓</span>}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">{lesson.duration}min • {lesson.points} pts</p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Collection de badges */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Collection de Badges</h2>
          {profile.badges.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {profile.badges.map(badge => (
                <div key={badge.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200 text-center group hover:scale-105 transition-transform duration-200">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{badge.name}</h4>
                  <p className="text-xs text-gray-600">{badge.description}</p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                    badge.rarity === 'common' ? 'bg-gray-100 text-gray-700' :
                    badge.rarity === 'rare' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {badge.rarity}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aucun badge pour le moment</p>
              <p className="text-gray-400 text-sm">Commencez une leçon pour gagner votre premier badge !</p>
            </div>
          )}
        </div>
      </div>

      <SelfReportModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onReport={handleReportVisit}
      />

      {/* Modal de confirmation de réinitialisation */}
      {isResetModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mb-4">
                <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Confirmer la Réinitialisation
              </h3>
              <p className="text-gray-600 mb-6">
                Êtes-vous sûr de vouloir réinitialiser toute votre progression ? 
                Cette action supprimera définitivement :
              </p>
              <div className="text-left bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <ul className="space-y-2 text-sm text-orange-800">
                  <li>• Tous vos points ({profile?.totalPoints || 0} points)</li>
                  <li>• Tous vos badges ({profile?.badges.length || 0} badges)</li>
                  <li>• Toutes vos leçons terminées ({profile?.completedLessons.length || 0} leçons)</li>
                  <li>• Tous vos rapports de visites ({profile?.realStoreVisits || 0} visites)</li>
                </ul>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Cette action est irréversible et ne peut pas être annulée.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setResetModalOpen(false)}
                  className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  Annuler
                </button>
                <button
                  onClick={handleResetProgress}
                  className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorialDashboard;