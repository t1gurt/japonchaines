// src/data/tutorial/quizzes.ts

import { Quiz, QuizQuestion } from '@/types/tutorial';

export const quizzes: Quiz[] = [
  {
    lessonId: 'debutant-manners',
    questions: [
      {
        question: 'Que dit-on au Japon avant de commencer à manger ?',
        options: [
          'Arigato gozaimasu',
          'Itadakimasu',
          'Sumimasen',
          'Konnichiwa',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Comment doit-on tenir les baguettes (chopsticks) ?',
        options: [
          'Comme un crayon, avec une seule main',
          'À deux mains pour plus de stabilité',
          'La baguette du haut bouge, celle du bas reste fixe',
          'Les deux baguettes bougent ensemble',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Dans les restaurants avec machine à tickets, quand payez-vous ?',
        options: [
          'Avant de commander, à la machine',
          'Après le repas, au comptoir',
          'Pendant le repas, au serveur',
          'En ligne, avant d\'arriver',
        ],
        correctAnswerIndex: 0,
      },
      {
        question: 'Que dit-on après avoir terminé de manger ?',
        options: [
          'Itadakimasu',
          'Gochisousama deshita',
          'Oishikatta desu',
          'Arigato gozaimashita',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Comment appelle-t-on les restaurants en libre-service avec des machines à tickets ?',
        options: [
          'Family restaurant',
          'Kaiten-zushi',
          'Shokken-shiki (食券式)',
          'Izakaya',
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    lessonId: 'debutant-ticket-machine',
    questions: [
      {
        question: 'Quelle est la première étape pour utiliser une machine à tickets ?',
        options: [
          'Insérer l\'argent',
          'Choisir le plat',
          'Regarder le menu affiché',
          'Appuyer sur le bouton de démarrage',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Que faire si vous avez inséré trop d\'argent dans la machine ?',
        options: [
          'Demander de l\'aide au personnel',
          'La machine rend automatiquement la monnaie',
          'Acheter quelque chose de plus cher',
          'L\'argent est perdu',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Chez Matsuya, que faites-vous avec votre ticket après l\'achat ?',
        options: [
          'Le garder comme souvenir',
          'Le donner au personnel de cuisine',
          'Le mettre dans une boîte spéciale',
          'Le jeter immédiatement',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Quelle chaîne est célèbre pour ses machines à tickets orange ?',
        options: [
          'Yoshinoya',
          'Sukiya',
          'Matsuya',
          'Nakau',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Si une machine à tickets n\'accepte que les pièces, que devez-vous faire avec vos billets ?',
        options: [
          'Aller dans un autre restaurant',
          'Utiliser le distributeur de monnaie à proximité',
          'Demander au personnel de changer votre argent',
          'Payer avec une carte de crédit',
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonId: 'debutant-gyudon-chains',
    questions: [
      {
        question: 'Quelle est la plus ancienne chaîne de gyūdon parmi ces trois ?',
        options: [
          'Sukiya',
          'Matsuya', 
          'Yoshinoya',
          'Nakau',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Quelle chaîne de gyūdon est reconnaissable par sa couleur orange dominante ?',
        options: [
          'Yoshinoya',
          'Sukiya',
          'Matsuya',
          'Tenya',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Sukiya se distingue des autres chaînes de gyūdon par :',
        options: [
          'Ses prix les plus élevés',
          'Son menu le plus varié avec des curry et des hamburgers',
          'Sa spécialisation uniquement dans le bœuf',
          'Ses horaires d\'ouverture limités',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Quelle chaîne propose le "Premium Gyūdon" avec des ingrédients haut de gamme ?',
        options: [
          'Sukiya',
          'Matsuya',
          'Yoshinoya', 
          'Toutes les trois',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Comment reconnaît-on facilement un restaurant Sukiya ?',
        options: [
          'Par ses couleurs rouge et blanc',
          'Par ses couleurs bleue et jaune',
          'Par ses couleurs orange et noir',
          'Par ses couleurs verte et blanc',
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonId: 'debutant-popular-chains',
    questions: [
      {
        question: 'Saizeriya est une chaîne de type :',
        options: [
          'Fast-food japonais',
          'Restaurant italien familial',
          'Sushi bar',
          'Café traditionnel',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Chez CoCo Ichibanya, vous pouvez personnaliser votre curry en choisissant :',
        options: [
          'Seulement la quantité de riz',
          'Le niveau de piment de 1 à 10 et la quantité de riz',
          'Seulement les légumes',
          'Seulement la viande',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Gusto est principalement un :',
        options: [
          'Restaurant de ramen',
          'Café spécialisé',
          'Family restaurant avec menu varié',
          'Restaurant de sushi',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Quelle est la particularité principale du "Drink Bar" chez Gusto et Saizeriya ?',
        options: [
          'Boissons alcoolisées illimitées',
          'Café uniquement',
          'Boissons non-alcoolisées à volonté',
          'Thé traditionnel japonais',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Chez Saizeriya, quel est l\'avantage principal pour les étudiants et familles ?',
        options: [
          'Menu uniquement en japonais',
          'Prix très abordables et portions généreuses',
          'Service ultra-rapide',
          'Plats exclusivement végétariens',
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    lessonId: 'intermediaire-ramen-masters',
    questions: [
      {
        question: 'Quelle est la caractéristique la plus connue d\'Ichiran (一蘭) ?',
        options: [
          'Un bar à kimchi gratuit',
          'Le "comptoir de concentration sur le goût"',
          'Impossible de choisir la fermeté des nouilles',
          'Un bouillon de poulet blanc très riche',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Chez Ippudo (一風堂), comment appelle-t-on le fait de commander des nouilles supplémentaires après avoir terminé son bol ?',
        options: [
          'Okawari (refill)',
          'Ōmori (grande portion)',
          'Kaedama (nouilles de remplacement)',
          'Tsuika-men (nouilles supplémentaires)',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Quel système unique utilise Ichiran pour personnaliser votre ramen ?',
        options: [
          'Un questionnaire sur tablette tactile',
          'Une feuille de commande papier avec des choix',
          'Un système vocal automatisé',
          'Un code QR personnalisé',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Quelle chaîne de ramen est célèbre pour son ramen "Shiromaru" ?',
        options: [
          'Ichiran',
          'Tenkaippin',
          'Ippudo',
          'Menya Saimi',
        ],
        correctAnswerIndex: 2,
      },
      {
        question: 'Chez Tenkaippin (天下一品), quel type de bouillon est leur spécialité ?',
        options: [
          'Bouillon clair de porc (tonkotsu)',
          'Bouillon de miso rouge',
          'Bouillon très épais et crémeux',
          'Bouillon de légumes végétarien',
        ],
        correctAnswerIndex: 2,
      },
    ],
  },
  {
    lessonId: 'avance-47-chains',
    questions: [
      {
        question: 'Quelle chaîne est considérée comme l\'origine du gyūdon et a la plus longue histoire ?',
        options: ['Sukiya', 'Matsuya', 'Nakau', 'Yoshinoya'],
        correctAnswerIndex: 3,
      },
      {
        question: 'Quel système de commande est le plus couramment utilisé dans les chaînes de gyūdon ?',
        options: [
          'Commande au comptoir avec un serveur',
          'Machine à tickets (distributeur automatique)',
          'Application mobile uniquement',
          'Système de réservation en ligne',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Quelle chaîne de kaiten-zushi (sushi tournant) est connue pour son système de "bikkurapon" (surprise) ?',
        options: [
          'Sushiro',
          'Kura Sushi',
          'Hama Sushi',
          'Genki Sushi',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Dans les family restaurants japonais, que signifie généralement le terme "drink bar" ?',
        options: [
          'Un bar à alcool',
          'Un distributeur de boissons à volonté',
          'Un service de cocktails',
          'Un bar à smoothies',
        ],
        correctAnswerIndex: 1,
      },
      {
        question: 'Quelle chaîne de curry est célèbre pour son système de niveaux de piment de 1 à 10 ?',
        options: [
          'Curry House CoCo Ichibanya',
          'Go Go Curry',
          'Sukiya (curry)',
          'Matsuya (curry)',
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
];