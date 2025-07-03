// src/components/tutorial/LessonView.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useLearningProgress } from '@/hooks/tutorial/useLearningProgress';
import type { Lesson, Quiz } from '@/types/tutorial';
import { lessons } from '@/data/tutorial/lessons';
import { quizzes } from '@/data/tutorial/quizzes';
import QuizComponent from '@/components/tutorial/QuizComponent';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson | null;
  quiz: Quiz | null;
}

export default function LessonView({ lesson, quiz }: LessonViewProps) {
  const { profile, isLoading, completeLesson } = useLearningProgress();
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isLoading && profile && lesson && profile.completedLessons.includes(lesson.id)) {
      setIsCompleted(true);
    }
  }, [isLoading, profile, lesson]);

  const handleQuizComplete = (finalScore: number, totalQuestions: number, isPerfectScore: boolean) => {
    if (!lesson) return;
    setScore(finalScore);
    
    // レッスン完了とバッジ獲得は満点の場合のみ
    if (isPerfectScore) {
      setIsCompleted(true);
      completeLesson(lesson.id, lesson.points);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Chargement du profil d'apprentissage...</p>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Leçon non trouvée</h1>
          <p className="text-gray-600 mb-6">Cette leçon n'existe pas ou a été supprimée.</p>
          <Link href="/tutorial" className="inline-flex items-center text-blue-600 hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl w-full">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-green-600 mb-4">Félicitations !</h1>
          <p className="text-xl text-gray-700 mb-2">Vous avez terminé la leçon "{lesson.title}".</p>
          {lesson.type === 'quiz' && quiz && (
            <p className="text-lg text-gray-600 mb-4">
              Score parfait : {quiz.questions.length} / {quiz.questions.length} ✨
            </p>
          )}
          <p className="text-lg text-gray-600 mb-6">Vous avez gagné {lesson.points} points et un nouveau badge !</p>
          <Link 
            href="/tutorial" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête de la leçon */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/tutorial" className="text-gray-600 hover:text-blue-600 transition-colors mr-4">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
              <p className="text-lg text-gray-600">{lesson.description}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium capitalize">
              {lesson.level}
            </span>
            <span>⏱️ {lesson.duration} min</span>
            <span>🎯 {lesson.points} points</span>
            {lesson.type === 'quiz' && <span>❓ Quiz interactif</span>}
          </div>
        </div>

        {/* Contenu de la leçon */}
        {lesson.type === 'quiz' && quiz ? (
          <QuizComponent 
            questions={quiz.questions} 
            onComplete={handleQuizComplete}
            lessonTitle={lesson.title}
          />
        ) : lesson.type === 'simulation' ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Simulation Interactive</h3>
            <p className="text-gray-600 text-lg">Cette fonctionnalité sera bientôt disponible.</p>
            <p className="text-gray-500 text-sm mt-2">Pratiquez vos compétences dans un environnement virtuel !</p>
          </div>
        ) : lesson.type === 'video' ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Leçon Vidéo</h3>
            <p className="text-gray-600 text-lg">Le contenu vidéo sera bientôt disponible.</p>
            <p className="text-gray-500 text-sm mt-2">Apprenez avec des exemples visuels et des démonstrations !</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Type de Leçon Non Supporté</h3>
            <p className="text-gray-600">Ce type de leçon n'est pas encore implémenté.</p>
          </div>
        )}
      </div>
    </div>
  );
}
