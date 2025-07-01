// src/components/tutorial/SelfReportModal.tsx
'use client';

import React, { useState } from 'react';
import { chains } from '@/data/tutorial/chains';

interface SelfReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReport: (chainId: string) => void;
}

const SelfReportModal: React.FC<SelfReportModalProps> = ({ isOpen, onClose, onReport }) => {
  const [selectedChain, setSelectedChain] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (selectedChain) {
      onReport(selectedChain);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Signaler une Visite de Magasin</h2>
        <div className="mb-6">
          <label htmlFor="chain-select" className="block text-sm font-medium text-gray-700 mb-2">
            Quelle chaîne de restaurants avez-vous visitée ?
          </label>
          <select
            id="chain-select"
            value={selectedChain}
            onChange={(e) => setSelectedChain(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Sélectionnez une chaîne</option>
            {chains.map(chain => (
              <option key={chain.id} value={chain.id}>{chain.name}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedChain}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            Soumettre le Rapport
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfReportModal;
