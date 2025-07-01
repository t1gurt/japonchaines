/**
 * インタラクティブクイズコンポーネント
 * 学習内容の確認と評価機能
 */

'use client';

import React, { useState, useEffect } from 'react';
import { QuizQuestion, QuizResult, QuizAnswer } from '../../types/tutorial';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (result: QuizResult) => void;
  className?: string;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({ 
  questions, 
  onComplete, 
  className = '' 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: string]: string | string[] }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeStart, setTimeStart] = useState<Date | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<Date | null>(null);
  const [timeSpent, setTimeSpent] = useState<{ [questionId: string]: number }>({});

  // クライアントサイドの初期化
  useEffect(() => {
    setIsClient(true);
    const now = new Date();
    setTimeStart(now);
    setQuestionStartTime(now);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasAnswered = selectedAnswers[currentQuestion?.id] != null;

  // クライアントサイドでない場合はローディング表示
  if (!isClient) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 質問開始時刻をリセット
  useEffect(() => {
    if (isClient) {
      setQuestionStartTime(new Date());
    }
  }, [currentQuestionIndex, isClient]);

  // 回答を選択
  const handleAnswerSelect = (answer: string) => {
    if (!currentQuestion) return;

    const questionId = currentQuestion.id;

    if (currentQuestion.type === 'multiple_choice' || currentQuestion.type === 'true_false') {
      // 単一選択
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }));
    } else {
      // その他のタイプも単一選択として扱う
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: answer
      }));
    }
  };

  // 回答を確認
  const handleConfirmAnswer = () => {
    if (!hasAnswered || !questionStartTime) return;

    // 時間を記録
    const questionTime = new Date().getTime() - questionStartTime.getTime();
    setTimeSpent(prev => ({
      ...prev,
      [currentQuestion.id]: questionTime
    }));

    setShowExplanation(true);
  };

  // 次の質問へ
  const handleNextQuestion = () => {
    setShowExplanation(false);
    
    if (isLastQuestion) {
      // クイズ完了
      handleQuizComplete();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // クイズ完了処理
  const handleQuizComplete = () => {
    if (!timeStart) return;
    
    const totalTime = new Date().getTime() - timeStart.getTime();
    let correctAnswers = 0;

    const detailedResults = questions.map(question => {
      const userAnswer = selectedAnswers[question.id];
      let isCorrect = false;

      // 回答の正誤判定
      if (Array.isArray(question.correctAnswer)) {
        // 複数回答の場合
        isCorrect = Array.isArray(userAnswer) && 
          userAnswer.length === question.correctAnswer.length &&
          userAnswer.every(ans => question.correctAnswer.includes(ans));
      } else {
        // 単一回答の場合
        isCorrect = userAnswer === question.correctAnswer;
      }

      if (isCorrect) {
        correctAnswers++;
      }

      return {
        questionId: question.id,
        questionText: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        timeSpent: timeSpent[question.id] || 0,
        explanation: question.explanation
      };
    });

    const result: QuizResult = {
      lessonId: 'current_lesson', // 実際のレッスンIDを設定する必要があります
      totalQuestions: questions.length,
      correctAnswers,
      score: Math.round((correctAnswers / questions.length) * 100),
      duration: totalTime,
      answers: detailedResults.map((result, index) => ({
        questionIndex: index,
        selectedAnswer: 0, // 実際の回答インデックスを設定する必要があります
        isCorrect: result.isCorrect
      })),
      completedAt: isClient ? new Date() : new Date('2025-01-01')
    };

    onComplete(result);
  };

  // 現在の質問の正解確認
  const isAnswerCorrect = (option: string) => {
    if (!showExplanation) return null;
    
    if (Array.isArray(currentQuestion.correctAnswer)) {
      return currentQuestion.correctAnswer.includes(option);
    } else {
      return currentQuestion.correctAnswer === option;
    }
  };

  // 答えのスタイルクラス
  const getAnswerClassName = (option: string) => {
    const isSelected = selectedAnswers[currentQuestion?.id] === option;
    
    if (!showExplanation) {
      return `p-4 border-2 rounded-lg cursor-pointer transition-all text-left ${
        isSelected 
          ? 'bg-blue-100 border-blue-500 text-blue-800' 
          : 'bg-white border-gray-300 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
      }`;
    }

    // 解説表示時
    const isCorrect = isAnswerCorrect(option);
    if (isCorrect) {
      return 'p-4 border-2 rounded-lg bg-green-100 border-green-500 text-green-800';
    } else if (isSelected) {
      return 'p-4 border-2 rounded-lg bg-red-100 border-red-500 text-red-800';
    } else {
      return 'p-4 border-2 rounded-lg bg-gray-100 border-gray-300 text-gray-600';
    }
  };

  if (!currentQuestion) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 text-center ${className}`}>
        <div className="text-4xl mb-4">❓</div>
        <p className="text-gray-600">Aucune question disponible</p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* En-tête du quiz */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Quiz Interactif</h2>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        
        {/* Barre de progression */}
        <div className="bg-white/20 rounded-full h-2">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6">
        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
              {currentQuestion.difficulty === 'easy' ? '🟢 Facile' :
               currentQuestion.difficulty === 'medium' ? '🟡 Moyen' : '🔴 Difficile'}
            </div>
            <div className="text-sm text-gray-500">
              {currentQuestion.points} points
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {currentQuestion.question}
          </h3>
          
          {currentQuestion.image && (
            <div className="mb-4">
              <img 
                src={currentQuestion.image} 
                alt="Question illustration"
                className="max-w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Réponses */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options?.map((option, index) => (
            <div
              key={index}
              className={getAnswerClassName(option)}
              onClick={() => !showExplanation && handleAnswerSelect(option)}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-4 h-4 border-2 rounded-full ${
                    selectedAnswers[currentQuestion.id] === option
                      ? 'bg-blue-600 border-blue-600'
                      : 'border-gray-400'
                  }`}>
                    {selectedAnswers[currentQuestion.id] === option && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-medium">{option}</p>
                </div>

                {showExplanation && (
                  <div className="flex-shrink-0">
                    {isAnswerCorrect(option) ? (
                      <span className="text-green-600">✅</span>
                    ) : selectedAnswers[currentQuestion.id] === option ? (
                      <span className="text-red-600">❌</span>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Explication */}
        {showExplanation && currentQuestion.explanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-blue-900 mb-2">💡 Explication</h4>
            <p className="text-sm text-blue-800">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {hasAnswered ? (
              showExplanation ? (
                '✅ Réponse confirmée'
              ) : (
                '👍 Prêt à confirmer'
              )
            ) : (
              'Sélectionnez votre réponse'
            )}
          </div>

          <div className="space-x-3">
            {!showExplanation ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={!hasAnswered}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  hasAnswered
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Confirmer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                {isLastQuestion ? 'Terminer le Quiz' : 'Question Suivante'}
              </button>
            )}
          </div>
        </div>

        {/* Raccourcis clavier */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            💡 Astuce : Cliquez sur la réponse pour la sélectionner
          </p>
        </div>
      </div>
    </div>
  );
};
