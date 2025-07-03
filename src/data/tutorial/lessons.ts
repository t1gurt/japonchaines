// src/data/tutorial/lessons.ts

import { Lesson } from '@/types/tutorial';

export const lessons: Lesson[] = [
  // 初級レベル (Niveau Débutant)
  {
    id: 'debutant-manners',
    level: 'debutant',
    title: 'Les Bonnes Manières dans les Chaînes',
    description: 'Apprenez les bases de l\'étiquette dans les restaurants japonais : l\'usage des baguettes, les salutations avant et après le repas, et comment se comporter dans une file d\'attente.',
    type: 'quiz',
    points: 50,
    duration: 8,
  },
  {
    id: 'debutant-ticket-machine',
    level: 'debutant',
    title: 'Maîtriser les Machines à Tickets',
    description: 'Découvrez comment utiliser les machines à tickets (券売機) présentes dans de nombreux restaurants japonais comme Matsuya, Nakau et Fuji Soba.',
    type: 'quiz',
    points: 75,
    duration: 15,
  },
  {
    id: 'debutant-gyudon-chains',
    level: 'debutant',
    title: 'Reconnaître les Big 3 du Gyūdon',
    description: 'Identifiez et différenciez les trois principales chaînes de gyūdon : Yoshinoya, Sukiya et Matsuya.',
    type: 'quiz',
    points: 60,
    duration: 12,
  },
  {
    id: 'debutant-popular-chains',
    level: 'debutant',
    title: 'Introduction aux Chaînes Populaires',
    description: 'Familiarisez-vous avec les chaînes les plus accessibles : Saizeriya, Gusto et CoCo Ichibanya.',
    type: 'quiz',
    points: 50,
    duration: 10,
  },

  // 中級レベル (Niveau Intermédiaire)
  {
    id: 'intermediaire-ramen-masters',
    level: 'intermediaire',
    title: 'Les Maîtres du Ramen',
    description: 'Explorez les spécificités d\'Ichiran, Ippudo et Tenkaippin, trois chaînes emblématiques du ramen.',
    type: 'quiz',
    points: 100,
    duration: 18,
  },
  {
    id: 'intermediaire-kaiten-zushi',
    level: 'intermediaire',
    title: 'Navigation dans les Kaiten-Zushi',
    description: 'Maîtrisez les systèmes de Sushiro, Kura Sushi et Hama Sushi pour une expérience optimale.',
    type: 'simulation',
    points: 125,
    duration: 20,
  },
  {
    id: 'intermediaire-family-restaurants',
    level: 'intermediaire',
    title: 'Maîtriser les Family Restaurants',
    description: 'Apprenez à naviguer dans les systèmes de commande tactile de Saizeriya, Gusto et Jonathan\'s.',
    type: 'simulation',
    points: 110,
    duration: 22,
  },

  // 上級レベル (Niveau Avancé)
  {
    id: 'avance-47-chains',
    level: 'avance',
    title: 'Expert des 47 Chaînes',
    description: 'Testez vos connaissances sur l\'ensemble des 47 chaînes couvertes dans ce guide complet.',
    type: 'quiz',
    points: 200,
    duration: 35,
  },
  {
    id: 'avance-cultural-impact',
    level: 'avance',
    title: 'Histoire et Impact Culturel des Chaînes',
    description: 'Comprenez l\'influence des chaînes de restaurants sur la société japonaise moderne.',
    type: 'video',
    points: 250,
    duration: 30,
  },
];

export const getLessonsByLevel = (level: 'debutant' | 'intermediaire' | 'avance') => {
  return lessons.filter(lesson => lesson.level === level);
};

export const getLessonById = (id: string) => {
  return lessons.find(lesson => lesson.id === id);
};
