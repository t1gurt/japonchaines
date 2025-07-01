// src/components/tutorial/TutorialDashboard.tsx
'use client';

import React, { useState } from 'react';
import { useLearningProgress } from '@/hooks/tutorial/useLearningProgress';
import { lessons } from '@/data/tutorial/lessons';
import { badges } from '@/data/tutorial/badges';
import SelfReportModal from './SelfReportModal';
import { chains } from '@/data/tutorial/chains';

const TutorialDashboard = () => {
  const { profile, reportStoreVisit, resetProgress } = useLearningProgress();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReportVisit = (chainId: string) => {
    const chain = chains.find(c => c.id === chainId);
    if (chain) {
      reportStoreVisit(chainId, chain.name);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Mon Tableau de Bord d'Apprentissage</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-700 transition-colors shadow-lg"
        >
          Signaler une Visite
        </button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Points Totaux</h2>
          <p className="text-3xl font-bold text-blue-600">{profile.totalPoints}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Leçons Terminées</h2>
          <p className="text-3xl font-bold text-green-600">{profile.completedLessons.length} / {lessons.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Badges Acquis</h2>
          <p className="text-3xl font-bold text-yellow-600">{profile.badges.length} / {badges.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Visites Réelles</h2>
          <p className="text-3xl font-bold text-purple-600">{profile.realStoreVisits}</p>
        </div>
      </div>

      {/* Lesson List */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Leçons Disponibles</h2>
        <ul className="space-y-4">
          {lessons.map(lesson => (
            <li key={lesson.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{lesson.title}</h3>
                <p className="text-sm text-gray-600">{lesson.description}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-blue-500">{lesson.points} pts</p>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${lesson.level === 'debutant' ? 'bg-green-200 text-green-800' : lesson.level === 'intermediaire' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'}`}>
                  {lesson.level}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Badge Collection */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Collection de Badges</h2>
        <div className="flex flex-wrap gap-4">
          {profile.badges.length > 0 ? (
            profile.badges.map(badge => (
              <div key={badge.id} className="text-center p-4 bg-gray-100 rounded-lg w-32">
                <p className="text-4xl">{badge.icon}</p>
                <p className="text-sm font-semibold mt-2">{badge.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Aucun badge pour le moment. Commencez une leçon pour en gagner !</p>
          )}
        </div>
      </div>

      <SelfReportModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onReport={handleReportVisit}
      />

      <div className="mt-8 text-center">
        <button
          onClick={resetProgress}
          className="text-sm text-gray-500 hover:text-red-600 hover:underline"
        >
          Réinitialiser la progression
        </button>
      </div>
    </div>
  );
};

export default TutorialDashboard;
