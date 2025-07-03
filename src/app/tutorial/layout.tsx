'use client';

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
          </div>
        </div>
      </footer>
    </div>
  );
}
