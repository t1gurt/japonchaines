// src/data/tutorial/badges.ts
import type { Badge, BadgeCategory, BadgeRarity } from '@/types/tutorial';

export const allBadges: Omit<Badge, 'earnedAt'>[] = [
  // 初級バッジ (Badges Débutants)
  {
    id: 'maitre-baguettes',
    name: 'Maître des Baguettes',
    description: 'Vous maîtrisez l\'art d\'utiliser les baguettes correctement',
    icon: '🥢',
    category: 'manners',
    rarity: 'common',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'expert-ticket-machine',
    name: 'Expert Ticket-Machine',
    description: 'Vous savez utiliser les machines à tickets comme un pro',
    icon: '�',
    category: 'systems',
    rarity: 'common',
    relatedChains: ['matsuya', 'nakau'],
    isRealVisitBadge: false,
  },
  {
    id: 'decouvreur-gyudon',
    name: 'Découvreur de Gyūdon',
    description: 'Vous connaissez les bases du plat national japonais',
    icon: '🍚',
    category: 'chains',
    rarity: 'common',
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
    isRealVisitBadge: false,
  },
  {
    id: 'amateur-ramen',
    name: 'Amateur de Ramen',
    description: 'Première approche du monde complexe des ramen',
    icon: '🍜',
    category: 'chains',
    rarity: 'common',
    relatedChains: ['ichiran', 'ippudo'],
    isRealVisitBadge: false,
  },
  {
    id: 'initie-kaiten-zushi',
    name: 'Initié Kaiten-Zushi',
    description: 'Vous comprenez le système du sushi tournant',
    icon: '🍣',
    category: 'systems',
    rarity: 'common',
    relatedChains: ['sushiro', 'kura-sushi'],
    isRealVisitBadge: false,
  },

  // 中級バッジ (Badges Intermédiaires)
  {
    id: 'connaisseur-chaines',
    name: 'Connaisseur des Chaînes',
    description: 'Vous distinguez facilement les différentes chaînes',
    icon: '🏪',
    category: 'chains',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'maitre-tactile',
    name: 'Maître du Tactile',
    description: 'Expert des systèmes de commande tactile',
    icon: '📱',
    category: 'systems',
    rarity: 'rare',
    relatedChains: ['gusto', 'saizeriya'],
    isRealVisitBadge: false,
  },
  {
    id: 'expert-family-restaurant',
    name: 'Expert Family Restaurant',
    description: 'Maîtrise des codes du family restaurant japonais',
    icon: '👨‍👩‍👧‍👦',
    category: 'chains',
    rarity: 'rare',
    relatedChains: ['gusto', 'saizeriya', 'jonathans'],
    isRealVisitBadge: false,
  },
  {
    id: 'specialiste-curry',
    name: 'Spécialiste Curry',
    description: 'Vous savez naviguer dans l\'univers du curry japonais',
    icon: '🍛',
    category: 'chains',
    rarity: 'rare',
    relatedChains: ['coco-ichibanya'],
    isRealVisitBadge: false,
  },
  {
    id: 'explorateur-saveurs',
    name: 'Explorateur de Saveurs',
    description: 'Aventurier culinaire qui explore tous les goûts',
    icon: '👅',
    category: 'expert',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: false,
  },

  // 上級バッジ (Badges Avancés)
  {
    id: 'maitre-47-chaines',
    name: 'Maître des 47 Chaînes',
    description: 'Connaissance encyclopédique de toutes les chaînes',
    icon: '🎓',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'expert-commande',
    name: 'Expert en Commande',
    description: 'Maîtrise parfaite de tous les systèmes de commande',
    icon: '⚡',
    category: 'systems',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'stratege-culinaire',
    name: 'Stratège Culinaire',
    description: 'Capable d\'optimiser n\'importe quelle expérience restaurant',
    icon: '🧠',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'sensei-chaines',
    name: 'Sensei des Chaînes',
    description: 'Niveau de maîtrise digne d\'enseigner aux autres',
    icon: '�',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'ambassadeur-culturel',
    name: 'Ambassadeur Culturel',
    description: 'Compréhension profonde de la culture alimentaire japonaise',
    icon: '🌟',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },

  // 実店舗バッジ (Badges de Visite Réelle)
  {
    id: 'vrai-visiteur',
    name: 'Vrai Visiteur',
    description: 'Première visite réelle dans un restaurant japonais',
    icon: '🏆',
    category: 'real_visit',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'explorateur-reel',
    name: 'Explorateur Réel',
    description: 'Visite de 5 chaînes différentes',
    icon: '🌟',
    category: 'real_visit',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'conquerant-chaines',
    name: 'Conquérant des Chaînes',
    description: 'Maîtrise pratique de 10 chaînes',
    icon: '👑',
    category: 'real_visit',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'maitre-terrain',
    name: 'Maître du Terrain',
    description: 'Expert confirmé avec 20 chaînes visitées',
    icon: '🎌',
    category: 'real_visit',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'legende-vivante',
    name: 'Légende Vivante',
    description: 'Légende absolue avec 30+ chaînes explorées',
    icon: '🏯',
    category: 'real_visit',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: true,
  },
];

export const getBadgesByCategory = (category: BadgeCategory) => {
  return allBadges.filter(badge => badge.category === category);
};

export const getBadgesByRarity = (rarity: BadgeRarity) => {
  return allBadges.filter(badge => badge.rarity === rarity);
};

export const getRealVisitBadges = () => {
  return allBadges.filter(badge => badge.isRealVisitBadge);
};

export const getBadgeById = (id: string) => {
  return allBadges.find(badge => badge.id === id);
};