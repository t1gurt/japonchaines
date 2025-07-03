/**
 * 自己申告システムコンポーネント
 * レストラン訪問の自己申告と確認機能
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useSelfReporting } from '../../hooks/tutorial/useSelfReporting';
import { chains } from '../../data/tutorial/chains';
import { VisitedStore } from '../../types/tutorial';

interface SelfReportingSystemProps {
  className?: string;
}

export const SelfReportingSystem: React.FC<SelfReportingSystemProps> = ({ className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    reports,
    pendingReports,
    verifiedReports,
    submitReport,
    getReportsByChain,
    getRecentReports,
    getTotalVisits,
    getUniqueChains,
    getVisitStreak
  } = useSelfReporting();

  const [selectedChain, setSelectedChain] = useState('');
  const [visitDate, setVisitDate] = useState('');

  // クライアントサイドでのみ日付を設定
  useEffect(() => {
    if (isClient) {
      setVisitDate(new Date().toISOString().split('T')[0]);
    }
  }, [isClient]);

  // クライアントサイドでない場合はローディング表示
  if (!isClient) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRecentReports, setShowRecentReports] = useState(true);

  const recentReports = getRecentReports(5);
  const totalVisits = getTotalVisits();
  const uniqueChains = getUniqueChains();
  const visitStreak = getVisitStreak();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChain) return;

    setIsSubmitting(true);
    try {
      // 簡素化されたレポート送信
      await submitReport({
        chainId: selectedChain,
        visitDate: visitDate
      });
      
      // Reset form
      setSelectedChain('');
      setVisitDate(new Date().toISOString().split('T')[0]);
      setNotes('');
      setPhoto(null);
      
      alert('✅ Rapport de visite enregistré avec succès !');
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      alert('❌ Erreur lors de l\'enregistrement. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Vérification de la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('La photo ne doit pas dépasser 5MB');
        return;
      }
      
      // Vérification du type
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image');
        return;
      }
      
      setPhoto(file);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* En-tête du système */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🍽️ Système d&apos;Auto-Déclaration</h2>
          <p className="text-green-100 mb-4">
            Partagez vos visites dans les chaînes de restaurants japonais et gagnez des points d&apos;expérience !
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{totalVisits}</div>
              <div className="text-xs text-green-100">Visites totales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{uniqueChains}</div>
              <div className="text-xs text-green-100">Chaînes visitées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{visitStreak}</div>
              <div className="text-xs text-green-100">Série en cours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{verifiedReports.length}</div>
              <div className="text-xs text-green-100">Visites vérifiées</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Formulaire de déclaration */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Déclarer une Visite</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Sélection de la chaîne */}
            <div>
              <label htmlFor="chain" className="block text-sm font-medium text-gray-700 mb-1">
                Chaîne de restaurant visitée *
              </label>
              <select
                id="chain"
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionnez une chaîne...</option>
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date de visite */}
            <div>
              <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                Date de visite *
              </label>
              <input
                type="date"
                id="visitDate"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes sur votre expérience (optionnel)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Partagez votre expérience : plats essayés, impressions, recommandations..."
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Photo */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                Photo de votre visite (optionnel)
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {photo && (
                <p className="text-sm text-green-600 mt-1">
                  ✅ Photo sélectionnée : {photo.name}
                </p>
              )}
            </div>

            {/* Informations importantes */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">💡 Système basé sur la confiance</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Vos déclarations sont enregistrées automatiquement</li>
                <li>• Soyez honnête pour maintenir l&apos;intégrité du système</li>
                <li>• Chaque visite vous rapporte des points d&apos;expérience</li>
                <li>• Les photos et notes aident à vérifier l&apos;authenticité</li>
              </ul>
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={isSubmitting || !selectedChain}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                isSubmitting || !selectedChain
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enregistrement...
                </span>
              ) : (
                'Déclarer cette visite'
              )}
            </button>
          </form>
        </div>

        {/* Rapports récents */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">📊 Activité Récente</h3>
          </div>

          <div className="text-center py-6">
            <div className="text-3xl mb-2">📝</div>
            <p className="text-gray-600">Système de rapports en développement.</p>
            <p className="text-sm text-gray-500">Les rapports de visite seront bientôt disponibles !</p>
          </div>

          {/* Encouragement */}
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
            <h4 className="font-medium text-orange-900 mb-2">🎯 Continuez à explorer !</h4>
            <p className="text-sm text-orange-800">
              Il reste {chains.length - uniqueChains} chaînes à découvrir. 
              Chaque nouvelle visite vous rapproche du statut d&apos;expert !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
