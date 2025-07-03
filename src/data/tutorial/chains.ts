// src/data/tutorial/chains.ts

import { Chain } from '@/types/tutorial';

export const chains: Chain[] = [
  // Gyūdon chains
  {
    id: 'yoshinoya',
    name: 'Yoshinoya',
    japanese: '吉野家',
    category: 'gyudon',
    description: 'Le pionnier du gyūdon, fondé en 1899',
    difficulty: 'facile',
    features: ['Commande au comptoir', 'Service rapide', 'Prix abordable'],
  },
  {
    id: 'sukiya',
    name: 'Sukiya',
    japanese: 'すき家',
    category: 'gyudon',
    description: 'La plus grande chaîne de gyūdon au Japon',
    difficulty: 'facile',
    features: ['Machine à tickets', 'Menu varié', 'Ouvert 24h/24'],
  },
  {
    id: 'matsuya',
    name: 'Matsuya',
    japanese: '松屋',
    category: 'gyudon',
    description: 'Connu pour ses machines à tickets orange',
    difficulty: 'facile',
    features: ['Machine à tickets orange', 'Set menus', 'Curry populaire'],
  },
  {
    id: 'nakau',
    name: 'Nakau',
    japanese: 'なか卯',
    category: 'gyudon',
    description: 'Spécialisé dans les plats à base d\'œufs',
    difficulty: 'facile',
    features: ['Oyakodon célèbre', 'Udon disponible', 'Ambiance familiale'],
  },

  // Ramen chains
  {
    id: 'ichiran',
    name: 'Ichiran',
    japanese: '一蘭',
    category: 'ramen',
    description: 'Ramen tonkotsu avec système de concentration',
    difficulty: 'moyen',
    features: ['Comptoir individuel', 'Personnalisation poussée', 'Bouillon secret'],
  },
  {
    id: 'ippudo',
    name: 'Ippudo',
    japanese: '一風堂',
    category: 'ramen',
    description: 'Chaîne de ramen internationale haut de gamme',
    difficulty: 'moyen',
    features: ['Shiromaru célèbre', 'Ambiance moderne', 'Kaedama disponible'],
  },
  {
    id: 'tenkaippin',
    name: 'Tenkaippin',
    japanese: '天下一品',
    category: 'ramen',
    description: 'Bouillon kotteri ultra-épais et crémeux',
    difficulty: 'moyen',
    features: ['Bouillon kotteri unique', 'Fidèles inconditionnels', 'Ambiance vintage'],
  },

  // Kaiten-zushi chains
  {
    id: 'sushiro',
    name: 'Sushiro',
    japanese: 'スシロー',
    category: 'kaiten-zushi',
    description: 'Leader du sushi tournant avec réservation en ligne',
    difficulty: 'moyen',
    features: ['Réservation en ligne', 'Sushi de qualité', 'Prix fixes'],
  },
  {
    id: 'kura-sushi',
    name: 'Kura Sushi',
    japanese: 'くら寿司',
    category: 'kaiten-zushi',
    description: 'Système de capsules surprises "Bikkurapon"',
    difficulty: 'moyen',
    features: ['Système Bikkurapon', 'Sushi sans conservateur', 'Technologie avancée'],
  },
  {
    id: 'hama-sushi',
    name: 'Hama Sushi',
    japanese: 'はま寿司',
    category: 'kaiten-zushi',
    description: 'Prix les plus bas du marché',
    difficulty: 'facile',
    features: ['Prix très bas', 'Commande tactile', 'Grande variété'],
  },

  // Family restaurants
  {
    id: 'saizeriya',
    name: 'Saizeriya',
    japanese: 'サイゼリヤ',
    category: 'family-restaurant',
    description: 'Restaurant familial italien à prix abordable',
    difficulty: 'facile',
    features: ['Cuisine italienne', 'Prix très bas', 'Menu photo'],
  },
  {
    id: 'gusto',
    name: 'Gusto',
    japanese: 'ガスト',
    category: 'family-restaurant',
    description: 'Family restaurant avec menu occidental et japonais',
    difficulty: 'facile',
    features: ['Menu varié', 'Tablettes de commande', 'Drink bar'],
  },
  {
    id: 'jonathans',
    name: 'Jonathan\'s',
    japanese: 'ジョナサン',
    category: 'family-restaurant',
    description: 'Family restaurant haut de gamme du groupe Skylark',
    difficulty: 'moyen',
    features: ['Qualité premium', 'Service attentionné', 'Ambiance chic'],
  },

  // Specialty chains
  {
    id: 'coco-ichibanya',
    name: 'CoCo Ichibanya',
    japanese: 'CoCo壱番屋',
    category: 'curry',
    description: 'Chaîne de curry japonais avec personnalisation',
    difficulty: 'facile',
    features: ['Niveaux de piment 1-10', 'Toppings nombreux', 'Portions ajustables'],
  },
  {
    id: 'ootoya',
    name: 'Ootoya',
    japanese: '大戸屋',
    category: 'teishoku',
    description: 'Cuisine japonaise traditionnelle en version moderne',
    difficulty: 'moyen',
    features: ['Teishoku authentique', 'Ingrédients frais', 'Ambiance traditionnelle'],
  },
];

export const getChainsByCategory = (category: string) => {
  return chains.filter(chain => chain.category === category);
};

export const getChainById = (id: string) => {
  return chains.find(chain => chain.id === id);
};

export const getChainsByDifficulty = (difficulty: 'facile' | 'moyen' | 'difficile') => {
  return chains.filter(chain => chain.difficulty === difficulty);
};