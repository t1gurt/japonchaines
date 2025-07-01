// src/data/tutorial/lessons.ts

export interface Lesson {
  id: string;
  level: 'debutant' | 'intermediaire' | 'avance';
  title: string;
  description: string;
  type: 'quiz' | 'simulation' | 'video';
  points: number;
  duration: number; // minutes
}

export const lessons: Lesson[] = [
  {
    id: 'debutant-manners',
    level: 'debutant',
    title: 'Les Bonnes Manières dans les Chaînes',
    description: '券売機エリアでの並び方、「いただきます」「ごちそうさま」の使い方を学びます。',
    type: 'video',
    points: 50,
    duration: 10,
  },
  {
    id: 'debutant-ticket-machine',
    level: 'debutant',
    title: 'Maîtriser les Machines à Tickets',
    description: '券売機の基本操作をシミュレーションで学びます。',
    type: 'simulation',
    points: 75,
    duration: 15,
  },
  {
    id: 'intermediaire-ramen-masters',
    level: 'intermediaire',
    title: 'Les Maîtres du Ramen',
    description: '一蘭・一風堂・天下一品の特色とシステムを比較します。',
    type: 'quiz',
    points: 100,
    duration: 18,
  },
  {
    id: 'avance-47-chains',
    level: 'avance',
    title: 'Expert des 47 Chaînes',
    description: '全47チェーンの特徴、歴史、注文システムを学びます。',
    type: 'quiz',
    points: 200,
    duration: 35,
  },
];