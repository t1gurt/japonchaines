// src/components/tutorial/SelfReportModal.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { chains, getChainsByCategory } from '@/data/tutorial/chains';
import { Chain } from '@/types/tutorial';

interface SelfReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReport: (chainIds: string[]) => void;
}

const SelfReportModal: React.FC<SelfReportModalProps> = ({ isOpen, onClose, onReport }) => {
  const [selectedChains, setSelectedChains] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Catégories uniques avec compteurs - toujours appeler les hooks
  const categories = useMemo(() => {
    const categoryCount: Record<string, number> = {};
    chains.forEach(chain => {
      categoryCount[chain.category] = (categoryCount[chain.category] || 0) + 1;
    });
    
    return [
      { id: 'all', name: 'Toutes', count: chains.length },
      { id: 'gyudon', name: 'Gyūdon', count: categoryCount['gyudon'] || 0 },
      { id: 'ramen', name: 'Ramen', count: categoryCount['ramen'] || 0 },
      { id: 'kaiten-zushi', name: 'Sushi Tournant', count: categoryCount['kaiten-zushi'] || 0 },
      { id: 'curry', name: 'Curry', count: categoryCount['curry'] || 0 },
      { id: 'tempura', name: 'Tempura/Tendon', count: categoryCount['tempura'] || 0 },
      { id: 'udon', name: 'Udon', count: categoryCount['udon'] || 0 },
      { id: 'soba', name: 'Soba', count: categoryCount['soba'] || 0 },
      { id: 'family-restaurant', name: 'Family Restaurant', count: categoryCount['family-restaurant'] || 0 },
      { id: 'burger', name: 'Burger Japonais', count: categoryCount['burger'] || 0 },
      { id: 'chinese', name: 'Cuisine Chinoise', count: categoryCount['chinese'] || 0 },
      { id: 'izakaya', name: 'Izakaya', count: categoryCount['izakaya'] || 0 },
      { id: 'cafe', name: 'Café', count: categoryCount['cafe'] || 0 },
      { id: 'street-food', name: 'Street Food', count: categoryCount['street-food'] || 0 },
      { id: 'steak', name: 'Steak', count: categoryCount['steak'] || 0 },
      { id: 'yakiniku', name: 'Yakiniku', count: categoryCount['yakiniku'] || 0 },
      { id: 'karaoke', name: 'Karaoke', count: categoryCount['karaoke'] || 0 },
      { id: 'teishoku', name: 'Teishoku', count: categoryCount['teishoku'] || 0 },
    ];
  }, []);

  // Chaînes filtrées
  const filteredChains = useMemo(() => {
    let filtered = selectedCategory === 'all' ? chains : getChainsByCategory(selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(chain => 
        chain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.japanese.includes(searchTerm) ||
        chain.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm]);

  // Retourner null après avoir appelé tous les hooks
  if (!isOpen) return null;

  const handleChainToggle = (chainId: string) => {
    const newSelected = new Set(selectedChains);
    if (newSelected.has(chainId)) {
      newSelected.delete(chainId);
    } else {
      newSelected.add(chainId);
    }
    setSelectedChains(newSelected);
  };

  const handleSubmit = () => {
    if (selectedChains.size > 0) {
      onReport(Array.from(selectedChains));
      setSelectedChains(new Set());
      setSelectedCategory('all');
      setSearchTerm('');
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedChains(new Set());
    setSelectedCategory('all');
    setSearchTerm('');
    onClose();
  };

  // Icônes par catégorie
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'all': return '🏪';
      case 'gyudon': return '🍚';
      case 'ramen': return '🍜';
      case 'kaiten-zushi': return '🍣';
      case 'curry': return '🍛';
      case 'tempura': return '🍤';
      case 'udon': return '🍲';
      case 'soba': return '🥢';
      case 'family-restaurant': return '🍽️';
      case 'burger': return '🍔';
      case 'chinese': return '🥟';
      case 'izakaya': return '🍻';
      case 'cafe': return '☕';
      case 'street-food': return '🥡';
      case 'steak': return '🥩';
      case 'yakiniku': return '🔥';
      case 'karaoke': return '�';
      case 'teishoku': return '🥢';
      default: return '🏪';
    }
  };

  // Couleur par difficulté
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800 border-green-200';
      case 'moyen': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'difficile': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* En-tête */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">🏪 Enregistrer des Visites</h2>
              <p className="text-blue-100">Sélectionnez les chaînes que vous avez visitées récemment</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{selectedChains.size}</div>
              <div className="text-sm text-blue-100">sélectionnée(s)</div>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Barre de recherche */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher une chaîne (nom, japonais, description)..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              />
            </div>
          </div>

          {/* Filtres par catégorie */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Catégories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl border-2 font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <span className="mr-2">{getCategoryIcon(category.id)}</span>
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grille des chaînes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Chaînes disponibles ({filteredChains.length})
            </h3>
            
            {filteredChains.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">😕</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune chaîne trouvée</h3>
                <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredChains.map(chain => {
                  const isSelected = selectedChains.has(chain.id);
                  return (
                    <div
                      key={chain.id}
                      onClick={() => handleChainToggle(chain.id)}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:scale-105 ${
                        isSelected
                          ? 'bg-blue-50 border-blue-500 shadow-lg ring-2 ring-blue-200'
                          : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                      }`}
                    >
                      {/* Indicateur de sélection */}
                      <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected 
                          ? 'bg-blue-600 border-blue-600' 
                          : 'bg-white border-gray-300'
                      }`}>
                        {isSelected && <span className="text-white text-sm">✓</span>}
                      </div>

                      {/* Contenu de la carte */}
                      <div className="pr-8">
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="text-2xl">{getCategoryIcon(chain.category)}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-lg">{chain.name}</h4>
                            <p className="text-gray-600 text-sm">{chain.japanese}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{chain.description}</p>

                        {/* Niveau de difficulté */}
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(chain.difficulty)}`}>
                            {chain.difficulty}
                          </span>
                          <div className="text-xs text-gray-500">
                            {chain.features.length} caractéristiques
                          </div>
                        </div>

                        {/* Caractéristiques principales */}
                        <div className="mt-2 flex flex-wrap gap-1">
                          {chain.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                          {chain.features.length > 2 && (
                            <span className="text-xs text-gray-400">
                              +{chain.features.length - 2} autres
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Pied de page */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {selectedChains.size > 0 && (
                <span>
                  <strong>{selectedChains.size}</strong> chaîne(s) sélectionnée(s)
                </span>
              )}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleClose}
                className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Annuler
              </button>
              <button
                onClick={handleSubmit}
                disabled={selectedChains.size === 0}
                className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all font-medium shadow-lg"
              >
                Enregistrer {selectedChains.size > 0 && `(${selectedChains.size})`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfReportModal;
