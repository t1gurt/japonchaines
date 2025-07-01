// src/data/tutorial/badges.ts
import type { Badge } from '@/types/tutorial';

export const badges: Omit<Badge, 'earnedAt'>[] = [
  // 初級バッジ
  {
    id: 'baguettes-maitre',
    name: 'Maître des Baguettes',
    description: '箸の正しい使い方をマスターした証。',
    icon: '🥢',
    category: 'manners',
    rarity: 'common',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'ticket-machine-expert',
    name: 'Expert Ticket-Machine',
    description: '券売機の操作をスムーズに行えるようになった。',
    icon: '🎟️',
    category: 'systems',
    rarity: 'common',
    relatedChains: ['matsuya', 'fuji-soba'],
    isRealVisitBadge: false,
  },
  {
    id: 'gyudon-decouvreur',
    name: 'Découvreur de Gyūdon',
    description: '牛丼の世界へようこそ！主要3チェーンの違いがわかる。 ',
    icon: '🍚',
    category: 'chains',
    rarity: 'common',
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
    isRealVisitBadge: false,
  },

  // 中級バッジ
  {
    id: 'chain-connaisseur',
    name: 'Connaisseur des Chaînes',
    description: '主要なチェーン店の特徴を理解し、語ることができる。',
    icon: '🧐',
    category: 'chains',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'tactile-maitre',
    name: 'Maître du Tactile',
    description: 'タッチパネルでの注文をマスターした。',
    icon: '📱',
    category: 'systems',
    rarity: 'rare',
    relatedChains: ['sushiro', 'gusto'],
    isRealVisitBadge: false,
  },

  // 上級バッジ
  {
    id: '47-chains-maitre',
    name: 'Maître des 47 Chaînes',
    description: '47全てのチェーン店の知識を習得した究極のマスター。',
    icon: '👑',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },

  // 実店舗訪問バッジ
  {
    id: 'vrai-visiteur',
    name: 'Vrai Visiteur',
    description: '初めて実際のチェーン店を訪問した記念。',
    icon: '🏆',
    category: 'real_visit',
    rarity: 'common',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'explorateur-reel',
    name: 'Explorateur Réel',
    description: '5つの異なるチェーン店を訪問した探検家。',
    icon: '🌟',
    category: 'real_visit',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: true,
  },
];