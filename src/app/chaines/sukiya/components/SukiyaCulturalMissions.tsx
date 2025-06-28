'use client';

import { useState, useEffect } from 'react';
import { Mission } from '@/types/culture';
import MissionList from '@/app/guides/culture-experience/components/MissionList';

const sukiyaMissions: Mission[] = [
  {
    id: 'basic',
    chainId: 'sukiya',
    title: 'Découvrir le service 24h/24',
    titleJapanese: '24時間サービス体験',
    description: 'Visitez un Sukiya ouvert 24h/24 pendant une période non conventionnelle (tard le soir ou tôt le matin)',
    culturalContext: 'Le service 24h/24 de Sukiya reflète la culture japonaise moderne où l\'accessibilité et le service client priment. Cette innovation montre comment les chaînes s\'adaptent aux rythmes de vie contemporains japonais.',
    difficulty: 'easy',
    estimatedTime: 20,
    rewards: [
      'Comprendre la culture du service permanent japonais',
      'Observer les différentes clientèles selon les heures',
      'Expérimenter la commodité moderne japonaise'
    ],
    requiredLevel: 'beginner',
    points: 50,
    prerequisites: []
  },
  {
    id: 'cultural',
    chainId: 'sukiya',
    title: 'Maîtriser l\'art de la personnalisation',
    titleJapanese: 'カスタマイズマスター',
    description: 'Commandez un gyūdon personnalisé avec au moins 3 modifications : fromage, kimchi, œuf, sauce extra, oignons extra',
    culturalContext: 'Sukiya a révolutionné le gyūdon en introduisant la personnalisation, reflétant l\'évolution de la société japonaise vers plus d\'individualité tout en gardant l\'efficacité. Cette approche montre l\'adaptation de la tradition aux goûts modernes.',
    difficulty: 'medium',
    estimatedTime: 25,
    rewards: [
      'Maîtriser le système de personnalisation japonais',
      'Comprendre l\'évolution culinaire moderne',
      'Créer votre propre combinaison signature'
    ],
    requiredLevel: 'intermediate',
    points: 100,
    prerequisites: ['basic']
  },
  {
    id: 'advanced',
    chainId: 'sukiya',
    title: 'Explorer l\'expérience drive-through',
    titleJapanese: 'ドライブスルー文化体験',
    description: 'Utilisez le service drive-through en japonais, en comprenant le système de commande automobile japonais',
    culturalContext: 'Sukiya fut pionnier du drive-through dans la restauration rapide japonaise, adaptant un concept occidental à la culture locale. C\'est un exemple parfait de l\'adaptation culturelle japonaise : adopter l\'innovation tout en gardant l\'efficacité et la politesse.',
    difficulty: 'hard',
    estimatedTime: 30,
    rewards: [
      'Maîtriser les interactions drive-through en japonais',
      'Comprendre l\'adaptation culturelle des innovations',
      'Expérimenter l\'hospitalité japonaise mobile'
    ],
    requiredLevel: 'advanced',
    points: 200,
    prerequisites: ['basic', 'cultural']
  },
  {
    id: 'relationship',
    chainId: 'sukiya',
    title: 'Devenir une famille Sukiya',
    titleJapanese: 'すき家ファミリーになる',
    description: 'Visitez avec une famille ou un groupe, commandez le menu enfants, et observez l\'approche familiale du service',
    culturalContext: 'Sukiya a transformé le gyūdon d\'un repas de salaryman solitaire en expérience familiale. Cette évolution reflète les changements sociétaux japonais modernes où les repas en famille deviennent plus valorisés, même dans la restauration rapide.',
    difficulty: 'medium',
    estimatedTime: 45,
    rewards: [
      'Comprendre l\'évolution sociale du repas japonais',
      'Expérimenter l\'hospitalité familiale japonaise',
      'Observer l\'adaptation intergénérationnelle',
      'Créer des souvenirs familiaux authentiques'
    ],
    requiredLevel: 'intermediate',
    points: 150,
    prerequisites: ['basic']
  }
];

export default function SukiyaCulturalMissions() {
  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-4">
          <span className="text-4xl">🌟</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Missions Culturelles Sukiya
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Découvrez comment l'innovation rencontre la tradition. Sukiya vous fait vivre 
          l'évolution moderne de la culture japonaise : diversité, commodité et approche familiale.
        </p>
      </div>

      <div className="mb-8 p-6 bg-white rounded-xl border border-green-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🚀</span>
          Votre Parcours d'Innovation
        </h3>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="text-2xl font-bold text-green-600">24H</div>
            <div className="text-sm text-gray-600 mt-1">Service permanent</div>
            <div className="text-xs text-green-700 mt-2">Commodité moderne</div>
          </div>
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <div className="text-2xl font-bold text-emerald-600">🎨</div>
            <div className="text-sm text-gray-600 mt-1">Personnalisation</div>
            <div className="text-xs text-emerald-700 mt-2">Créativité culinaire</div>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <div className="text-2xl font-bold text-teal-600">🚗</div>
            <div className="text-sm text-gray-600 mt-1">Drive-through</div>
            <div className="text-xs text-teal-700 mt-2">Innovation service</div>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <div className="text-2xl font-bold text-cyan-600">👨‍👩‍👧‍👦</div>
            <div className="text-sm text-gray-600 mt-1">Famille</div>
            <div className="text-xs text-cyan-700 mt-2">Expérience partagée</div>
          </div>
        </div>
      </div>

      <MissionList missions={sukiyaMissions} chainId="sukiya" />

      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🎯</span>
          Stratégies Sukiya
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">⏰ Moments optimaux</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• 24h/24 : 23h-6h pour l'expérience nocturne</li>
              <li>• Famille : 11h-14h, 17h-19h weekend</li>
              <li>• Drive-through : heures de pointe évitées</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-emerald-700 mb-2">🗣️ Vocabulaire essentiel</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• "チーズをください" - Avec du fromage</li>
              <li>• "カスタマイズできますか" - Peut-on personnaliser?</li>
              <li>• "ドライブスルーで" - En drive-through</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-3">🏆</span>
          L'Esprit Sukiya
        </h3>
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Innovation respectueuse :</strong> Sukiya montre comment innover tout en respectant les fondamentaux japonais.
          </p>
          <p>
            <strong>Adaptabilité culturelle :</strong> De la tradition du gyūdon aux besoins familiaux modernes.
          </p>
          <p>
            <strong>Service évolutif :</strong> Du comptoir traditionnel au drive-through, l'hospitalité reste constante.
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <a 
          href="/guides/culture-experience"
          className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">🌸</span>
          Guide Complet de l'Expérience Culturelle
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
