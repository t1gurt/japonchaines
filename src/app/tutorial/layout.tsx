/**
 * チュートリアル専用レイアウト
 * チュートリアルセクション共通のナビゲーションとスタイル
 */

import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function TutorialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      {/* Navigation du tutorial */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo et titre */}
            <div className="flex items-center space-x-4">
              <Link href="/tutorial" className="flex items-center space-x-2">
                <span className="text-2xl">🎓</span>
                <span className="text-lg font-semibold text-gray-900">
                  Tutorial Japonais
                </span>
              </Link>
            </div>

            {/* Navigation principale */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/tutorial" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Accueil
              </Link>
              
              <div className="relative group">
                <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1">
                  <span>Niveaux</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link 
                      href="/tutorial/debutant" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      🥢 Niveau Débutant
                    </Link>
                    <Link 
                      href="/tutorial/intermediaire" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      🍜 Niveau Intermédiaire
                    </Link>
                    <Link 
                      href="/tutorial/avance" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      🏆 Niveau Avancé
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/tutorial/recompenses" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Badges
              </Link>
              
              <Link 
                href="/tutorial/profil" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Profil
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Bouton de signalement de visite */}
              <button 
                className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                onClick={() => alert('Fonctionnalité en développement')}
              >
                <span className="hidden sm:inline">Signaler une </span>Visite
              </button>

              {/* Retour au site principal */}
              <Link 
                href="/" 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation mobile */}
          <div className="md:hidden pb-4">
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/tutorial/debutant" 
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                Débutant
              </Link>
              <Link 
                href="/tutorial/intermediaire" 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                Intermédiaire
              </Link>
              <Link 
                href="/tutorial/avance" 
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                Avancé
              </Link>
              <Link 
                href="/tutorial/recompenses" 
                className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                Badges
              </Link>
              <Link 
                href="/tutorial/profil" 
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                Profil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Barre de progression globale (placeholder) */}
      <div className="bg-gray-100 h-1">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 h-full w-0 transition-all duration-500"></div>
      </div>

      {/* Contenu principal */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer du tutorial */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              🌟 Maîtrisez la Culture Alimentaire Japonaise
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ce système d&apos;apprentissage vous guide à travers 47 chaînes de restaurants japonais. 
              Apprenez, pratiquez, visitez et devenez un expert !
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="text-green-500">●</span>
                <span>10 Leçons interactives</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="text-blue-500">●</span>
                <span>30+ Badges à collecter</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="text-purple-500">●</span>
                <span>47 Chaînes à découvrir</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="text-orange-500">●</span>
                <span>Visites réelles</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="text-sm text-gray-500">
                  Système d&apos;apprentissage basé sur la confiance et l&apos;honnêteté
                </div>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Link 
                    href="/chaines" 
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Guide des Chaînes
                  </Link>
                  <Link 
                    href="/guides" 
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Guides Pratiques
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
