/**
 * チュートリアルレッスンデータ
 * Tutorial_require.mdに基づく完全なレッスン体系
 */

import { Lesson, LearningLevel, LessonType, Quiz, QuizQuestion, SimulationConfig, VideoConfig } from '../../types/tutorial';

// レッスンデータ定義
export const lessons: Record<string, Lesson> = {
  // =============================================================================
  // 初級レベル (Niveau Débutant)
  // =============================================================================

  // レッスン1: チェーン店での基本マナー
  bonnes_manieres_lesson: {
    id: 'bonnes_manieres_lesson',
    title: 'Les Bonnes Manières dans les Chaînes',
    description: '券売機エリアでの並び方、「いただきます」「ごちそうさま」の使い方',
    level: 'debutant',
    type: 'video',
    estimatedTime: 10,
    points: 50,
    order: 1,
    prerequisites: [],
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
    category: 'manners',
    content: {
      introduction: 'Ce cours vous apprendra les bonnes manières de base dans les chaînes de restaurants japonais.',
      sections: [
        {
          id: 'section_1',
          title: 'Faire la queue près des machines à tickets',
          content: 'Apprenez comment vous placer correctement dans la file d\'attente près des distributeurs de tickets.',
          images: ['/tutorial/images/queue-etiquette.jpg'],
          tips: [
            'Attendez votre tour patiemment',
            'Gardez une distance d\'environ 1 mètre',
            'Préparez votre argent à l\'avance'
          ],
          culturalNotes: [
            'Au Japon, l\'ordre dans la file est très respecté',
            'Couper la file est considéré comme très impoli'
          ]
        },
        {
          id: 'section_2',
          title: 'Les expressions essentielles',
          content: 'Découvrez la signification et l\'utilisation de "いただきます" (Itadakimasu) et "ごちそうさま" (Gochisousama).',
          images: ['/tutorial/images/expressions.jpg'],
          tips: [
            'Dites "Itadakimasu" avant de manger',
            'Dites "Gochisousama" après avoir fini',
            'Ces expressions montrent la gratitude'
          ],
          culturalNotes: [
            '"Itadakimasu" exprime la gratitude envers tous ceux qui ont contribué au repas',
            '"Gochisousama" remercie pour le repas et le service'
          ]
        }
      ],
      quiz: {
        id: 'bonnes_manieres_quiz',
        title: 'Quiz sur les bonnes manières',
        questions: [
          {
            id: 'q1',
            type: 'multiple_choice',
            question: 'Que dit-on avant de commencer à manger au Japon ?',
            options: ['Itadakimasu', 'Gochisousama', 'Arigatou', 'Konnichiwa'],
            correctAnswer: 'Itadakimasu',
            explanation: '"Itadakimasu" est l\'expression traditionnelle pour exprimer la gratitude avant de manger.',
            points: 10,
            difficulty: 'easy',
            category: 'manners'
          },
          {
            id: 'q2',
            type: 'multiple_choice',
            question: 'Quelle est la bonne distance à maintenir dans la file d\'attente ?',
            options: ['50 cm', '1 mètre', '2 mètres', 'Peu importe'],
            correctAnswer: '1 mètre',
            explanation: 'Une distance d\'environ 1 mètre est appropriée pour respecter l\'espace personnel.',
            points: 10,
            difficulty: 'easy',
            category: 'manners'
          },
          {
            id: 'q3',
            type: 'multiple_choice',
            question: 'Que signifie "Gochisousama" ?',
            options: ['Bon appétit', 'Merci pour le repas', 'Au revoir', 'Bonjour'],
            correctAnswer: 'Merci pour le repas',
            explanation: '"Gochisousama" exprime la gratitude après avoir fini de manger.',
            points: 10,
            difficulty: 'easy',
            category: 'manners'
          },
          {
            id: 'q4',
            type: 'true_false',
            question: 'Il est acceptable de couper la file d\'attente au Japon.',
            options: ['Vrai', 'Faux'],
            correctAnswer: 'Faux',
            explanation: 'Couper la file est considéré comme très impoli dans la culture japonaise.',
            points: 10,
            difficulty: 'easy',
            category: 'manners'
          },
          {
            id: 'q5',
            type: 'multiple_choice',
            question: 'Quand doit-on dire "Itadakimasu" ?',
            options: ['Après le repas', 'Avant le repas', 'Pendant le repas', 'En payant'],
            correctAnswer: 'Avant le repas',
            explanation: '"Itadakimasu" se dit avant de commencer à manger pour exprimer la gratitude.',
            points: 10,
            difficulty: 'easy',
            category: 'manners'
          }
        ],
        passingScore: 80,
        timeLimit: 120
      },
      summary: 'Vous avez appris les bonnes manières de base dans les restaurants japonais.'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン2: 券売機の基本操作
  ticket_machine_lesson: {
    id: 'ticket_machine_lesson',
    title: 'Maîtriser les Machines à Tickets',
    description: '券売機の基本操作（松屋、なか卯、富士そば等）',
    level: 'debutant',
    type: 'simulation',
    estimatedTime: 15,
    points: 75,
    order: 2,
    prerequisites: ['bonnes_manieres_lesson'],
    relatedChains: ['matsuya', 'nakau', 'fuji-soba'],
    category: 'systems',
    content: {
      introduction: 'Maîtrisez l\'utilisation des machines à tickets utilisées dans de nombreuses chaînes japonaises.',
      sections: [
        {
          id: 'section_1',
          title: 'Comprendre l\'interface de la machine',
          content: 'Les machines à tickets ont généralement un écran avec des photos des plats et leurs prix.',
          images: ['/tutorial/images/ticket-machine-interface.jpg'],
          tips: [
            'Regardez d\'abord les photos des plats',
            'Les prix sont clairement affichés',
            'Les boutons avec photos sont plus faciles à utiliser'
          ]
        },
        {
          id: 'section_2',
          title: 'Processus d\'achat étape par étape',
          content: '1. Insérez l\'argent, 2. Sélectionnez votre plat, 3. Récupérez le ticket et la monnaie',
          images: ['/tutorial/images/ticket-process.jpg'],
          tips: [
            'Insérez les billets d\'abord, puis les pièces',
            'Appuyez fermement sur le bouton de votre choix',
            'N\'oubliez pas de prendre votre monnaie'
          ]
        }
      ],
      simulation: {
        id: 'ticket_machine_sim',
        type: 'ticket_machine',
        chainId: 'matsuya',
        steps: [
          {
            id: 'step_1',
            instruction: 'Insérez 500 yens dans la machine',
            expectedAction: 'insert_money_500',
            feedback: {
              success: 'Parfait ! Vous avez inséré l\'argent.',
              error: 'Vous devez d\'abord insérer l\'argent.',
              hint: 'Cherchez la fente pour insérer les billets.'
            },
            points: 5
          },
          {
            id: 'step_2',
            instruction: 'Sélectionnez un gyudon (牛めし)',
            expectedAction: 'select_gyudon',
            feedback: {
              success: 'Excellent ! Vous avez sélectionné le gyudon.',
              error: 'Ce n\'est pas le bon plat.',
              hint: 'Cherchez l\'image du bol de riz avec du bœuf.'
            },
            points: 10
          },
          {
            id: 'step_3',
            instruction: 'Récupérez votre ticket',
            expectedAction: 'take_ticket',
            feedback: {
              success: 'Bravo ! Vous maîtrisez la machine à tickets.',
              error: 'N\'oubliez pas de prendre votre ticket.',
              hint: 'Le ticket sort en bas de la machine.'
            },
            points: 5
          }
        ],
        successCriteria: ['Compléter tous les étapes', 'Score minimum 80%']
      },
      summary: 'Vous savez maintenant utiliser les machines à tickets des restaurants japonais !'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン3: 主要チェーン店識別
  gyudon_big3_lesson: {
    id: 'gyudon_big3_lesson',
    title: 'Reconnaître les Big 3 du Gyūdon',
    description: '吉野家・すき家・松屋の特徴と違い',
    level: 'debutant',
    type: 'quiz',
    estimatedTime: 12,
    points: 60,
    order: 3,
    prerequisites: ['ticket_machine_lesson'],
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
    category: 'chains',
    content: {
      introduction: 'Apprenez à distinguer les trois plus grandes chaînes de gyudon du Japon.',
      sections: [
        {
          id: 'section_1',
          title: 'Yoshinoya - Le pionnier',
          content: 'Fondée en 1899, Yoshinoya est la plus ancienne chaîne de gyudon.',
          images: ['/tutorial/images/yoshinoya-store.jpg'],
          tips: [
            'Logo orange et rouge distinctif',
            'Slogan "Umai, Yasui, Hayai" (Délicieux, Pas cher, Rapide)',
            'Commande au comptoir sans ticket'
          ],
          culturalNotes: [
            'Considérée comme l\'inventeur du gyudon moderne',
            'Très populaire auprès des salarymen'
          ]
        },
        {
          id: 'section_2',
          title: 'Sukiya - Le géant',
          content: 'La plus grande chaîne de gyudon avec plus de 2000 restaurants.',
          images: ['/tutorial/images/sukiya-store.jpg'],
          tips: [
            'Logo rouge et blanc',
            'Ouvert 24h/24 dans la plupart des endroits',
            'Menu très varié avec de nombreux toppings'
          ]
        },
        {
          id: 'section_3',
          title: 'Matsuya - Le technologique',
          content: 'Utilise un système de machine à tickets.',
          images: ['/tutorial/images/matsuya-store.jpg'],
          tips: [
            'Machine à tickets obligatoire',
            'Miso shiru (soupe miso) gratuite',
            'Offre également des teishoku (sets de repas)'
          ]
        }
      ],
      quiz: {
        id: 'gyudon_big3_quiz',
        title: 'Quiz Big 3 Gyudon',
        questions: [
          {
            id: 'q1',
            type: 'multiple_choice',
            question: 'Quelle chaîne utilise des machines à tickets ?',
            options: ['Yoshinoya', 'Sukiya', 'Matsuya'],
            correctAnswer: 'Matsuya',
            explanation: 'Matsuya est la seule des trois à utiliser un système de machine à tickets.',
            points: 15,
            difficulty: 'medium',
            category: 'chains'
          },
          {
            id: 'q2',
            type: 'multiple_choice',
            question: 'Quelle chaîne a le plus de restaurants ?',
            options: ['Yoshinoya', 'Sukiya', 'Matsuya'],
            correctAnswer: 'Sukiya',
            explanation: 'Sukiya est la plus grande chaîne avec plus de 2000 restaurants.',
            points: 10,
            difficulty: 'medium',
            category: 'chains'
          }
        ],
        passingScore: 75
      },
      summary: 'Vous pouvez maintenant distinguer les trois principales chaînes de gyudon !'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン4: 人気チェーン店紹介
  popular_chains_lesson: {
    id: 'popular_chains_lesson',
    title: 'Introduction aux Chaînes Populaires',
    description: 'サイゼリヤ、ガスト、CoCo壱番屋の基本知識',
    level: 'debutant',
    type: 'flashcard',
    estimatedTime: 10,
    points: 50,
    order: 4,
    prerequisites: ['gyudon_big3_lesson'],
    relatedChains: ['saizeriya', 'gusto', 'coco-ichibanya'],
    category: 'chains',
    content: {
      introduction: 'Découvrez trois chaînes populaires avec des spécialités différentes.',
      sections: [
        {
          id: 'section_1',
          title: 'Saizeriya - Italien abordable',
          content: 'Restaurant italien à petit prix, très populaire.',
          images: ['/tutorial/images/saizeriya.jpg'],
          tips: [
            'Prix très abordables',
            'Menu italien adapté au goût japonais',
            'Drink bar populaire'
          ]
        },
        {
          id: 'section_2',
          title: 'Gusto - Family restaurant',
          content: 'Restaurant familial avec écrans tactiles.',
          images: ['/tutorial/images/gusto.jpg'],
          tips: [
            'Écrans tactiles à chaque table',
            'Menu très varié',
            'Service 24h/24 dans certains endroits'
          ]
        },
        {
          id: 'section_3',
          title: 'CoCo Ichibanya - Roi du curry',
          content: 'La plus grande chaîne de curry au Japon.',
          images: ['/tutorial/images/coco-ichibanya.jpg'],
          tips: [
            'Curry personnalisable',
            'Niveau de piquant ajustable',
            'Portions variables'
          ]
        }
      ],
      summary: 'Vous connaissez maintenant les chaînes populaires de différentes catégories !'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン5: 寿司の基本
  sushi_basics_lesson: {
    id: 'sushi_basics_lesson',
    title: 'Les Bases du Sushi',
    description: '寿司の基本的な種類と食べ方',
    level: 'debutant',
    type: 'video',
    estimatedTime: 10,
    points: 50,
    order: 5,
    prerequisites: ['popular_chains_lesson'],
    relatedChains: ['sushiro', 'kura-sushi', 'hama-sushi'],
    category: 'food',
    content: {
      introduction: 'Apprenez les bases du sushi et comment le déguster correctement.',
      sections: [
        {
          id: 'section_1',
          title: 'Types de sushi de base',
          content: 'Nigiri, maki, sashimi - comprendre les différences.',
          images: ['/tutorial/images/sushi-types.jpg'],
          tips: [
            'Nigiri = riz + poisson',
            'Maki = roulé dans du nori',
            'Sashimi = juste le poisson'
          ]
        },
        {
          id: 'section_2',
          title: 'Comment manger le sushi',
          content: 'Techniques correctes pour déguster le sushi.',
          images: ['/tutorial/images/sushi-eating.jpg'],
          tips: [
            'Avec les doigts ou les baguettes',
            'Trempez légèrement dans la sauce soja',
            'Mangez en une bouchée'
          ]
        }
      ],
      quiz: {
        id: 'sushi_basics_quiz',
        title: 'Quiz sur les bases du sushi',
        questions: [
          {
            id: 'q1',
            type: 'multiple_choice',
            question: 'Qu\'est-ce qu\'un nigiri ?',
            options: ['Sushi roulé', 'Riz avec poisson dessus', 'Poisson sans riz', 'Soupe'],
            correctAnswer: 'Riz avec poisson dessus',
            explanation: 'Le nigiri est une boulette de riz avec un morceau de poisson dessus.',
            points: 10,
            difficulty: 'easy',
            category: 'food'
          },
          {
            id: 'q2',
            type: 'multiple_choice',
            question: 'Comment doit-on manger le sushi ?',
            options: ['En plusieurs bouchées', 'En une seule bouchée', 'Avec une fourchette', 'Sans sauce'],
            correctAnswer: 'En une seule bouchée',
            explanation: 'Le sushi doit être mangé en une seule bouchée pour préserver l\'équilibre des saveurs.',
            points: 10,
            difficulty: 'easy',
            category: 'food'
          },
          {
            id: 'q3',
            type: 'true_false',
            question: 'Le sashimi contient du riz.',
            options: ['Vrai', 'Faux'],
            correctAnswer: 'Faux',
            explanation: 'Le sashimi est uniquement du poisson cru, sans riz.',
            points: 10,
            difficulty: 'easy',
            category: 'food'
          },
          {
            id: 'q4',
            type: 'multiple_choice',
            question: 'Avec quoi peut-on manger le sushi ?',
            options: ['Seulement les baguettes', 'Seulement les doigts', 'Baguettes ou doigts', 'Fourchette'],
            correctAnswer: 'Baguettes ou doigts',
            explanation: 'Il est acceptable de manger le sushi avec les baguettes ou les doigts.',
            points: 10,
            difficulty: 'easy',
            category: 'food'
          },
          {
            id: 'q5',
            type: 'multiple_choice',
            question: 'Que signifie "maki" ?',
            options: ['Poisson cru', 'Sushi roulé', 'Riz vinaigré', 'Sauce soja'],
            correctAnswer: 'Sushi roulé',
            explanation: 'Maki signifie "roulé" et désigne les sushis roulés dans du nori.',
            points: 10,
            difficulty: 'easy',
            category: 'food'
          }
        ],
        passingScore: 80,
        timeLimit: 150
      },
      summary: 'Vous connaissez maintenant les bases du sushi et comment le déguster !'
    },
    isCompleted: false,
    attempts: 0
  },

  // =============================================================================
  // 中級レベル (Niveau Intermédiaire)
  // =============================================================================

  // レッスン6: ラーメン店システム
  ramen_masters_lesson: {
    id: 'ramen_masters_lesson',
    title: 'Les Maîtres du Ramen',
    description: '一蘭・一風堂・天下一品の特色とシステム',
    level: 'intermediaire',
    type: 'quiz',
    estimatedTime: 18,
    points: 100,
    order: 6,
    prerequisites: ['sushi_basics_lesson'],
    relatedChains: ['ichiran', 'ippudo', 'tenkaippin'],
    category: 'chains',
    content: {
      introduction: 'Découvrez les spécificités des grandes chaînes de ramen.',
      sections: [
        {
          id: 'section_1',
          title: 'Ichiran - L\'expérience individuelle',
          content: 'Système unique de boxes individuelles.',
          images: ['/tutorial/images/ichiran.jpg'],
          tips: [
            'Boxes individuelles (yatai)',
            'Formulaire de commande détaillé',
            'Concentration sur le tonkotsu ramen'
          ]
        },
        {
          id: 'section_2',
          title: 'Ippudo - Le style moderne',
          content: 'Ramen moderne avec ambiance décontractée.',
          images: ['/tutorial/images/ippudo.jpg'],
          tips: [
            'Ambiance moderne et branchée',
            'Variété de ramens',
            'Service à table'
          ]
        },
        {
          id: 'section_3',
          title: 'Tenkaippin - La tradition',
          content: 'Ramen traditionnel avec bouillon épais.',
          images: ['/tutorial/images/tenkaippin.jpg'],
          tips: [
            'Bouillon très riche et épais',
            'Style traditionnel',
            'Populaire dans le Kansai'
          ]
        }
      ],
      quiz: {
        id: 'ramen_masters_quiz',
        title: 'Quiz Maîtres du Ramen',
        questions: [
          {
            id: 'q1',
            type: 'multiple_choice',
            question: 'Quelle chaîne utilise des boxes individuelles ?',
            options: ['Ichiran', 'Ippudo', 'Tenkaippin'],
            correctAnswer: 'Ichiran',
            explanation: 'Ichiran est célèbre pour ses boxes individuelles appelées yatai.',
            points: 20,
            difficulty: 'medium',
            category: 'chains'
          }
        ],
        passingScore: 80
      },
      summary: 'Vous distinguez maintenant les principales chaînes de ramen !'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン7: 回転寿司システム
  kaiten_zushi_lesson: {
    id: 'kaiten_zushi_lesson',
    title: 'Navigation dans les Kaiten-Zushi',
    description: 'スシロー・くら寿司・はま寿司のシステムと違い',
    level: 'intermediaire',
    type: 'simulation',
    estimatedTime: 20,
    points: 125,
    order: 7,
    prerequisites: ['ramen_masters_lesson'],
    relatedChains: ['sushiro', 'kura-sushi', 'hama-sushi'],
    category: 'systems',
    content: {
      introduction: 'Maîtrisez le système des restaurants de sushi tournant.',
      sections: [
        {
          id: 'section_1',
          title: 'Le système de base',
          content: 'Comment fonctionne le tapis roulant et les commandes.',
          images: ['/tutorial/images/kaiten-system.jpg'],
          tips: [
            'Les assiettes de couleur indiquent le prix',
            'Commandes spéciales via écran tactile',
            'Rail express pour les commandes'
          ]
        }
      ],
      simulation: {
        id: 'kaiten_zushi_sim',
        type: 'kaiten_sushi',
        chainId: 'sushiro',
        steps: [
          {
            id: 'step_1',
            instruction: 'Prenez une assiette de saumon',
            expectedAction: 'take_salmon_plate',
            feedback: {
              success: 'Parfait !',
              error: 'Attendez qu\'une assiette passe.',
              hint: 'Les assiettes circulent sur le tapis.'
            },
            points: 10
          }
        ],
        successCriteria: ['Comprendre le système']
      },
      summary: 'Vous maîtrisez le système des sushi tournants !'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン8: ファミリーレストラン
  family_restaurant_lesson: {
    id: 'family_restaurant_lesson',
    title: 'Maîtriser les Family Restaurants',
    description: 'サイゼリヤ・ガスト・ジョナサンの注文システム',
    level: 'intermediaire',
    type: 'video',
    estimatedTime: 22,
    points: 110,
    order: 8,
    prerequisites: ['kaiten_zushi_lesson'],
    relatedChains: ['saizeriya', 'gusto', 'jonathans'],
    category: 'systems',
    content: {
      introduction: 'Apprenez les systèmes des family restaurants.',
      sections: [
        {
          id: 'section_1',
          title: 'Écrans tactiles',
          content: 'Comment utiliser les tablettes de commande.',
          images: ['/tutorial/images/touch-panel.jpg'],
          tips: [
            'Écrans à chaque table',
            'Commande en libre-service',
            'Paiement à la caisse'
          ]
        }
      ],
      summary: 'Vous savez naviguer dans les family restaurants !'
    },
    isCompleted: false,
    attempts: 0
  },

  // =============================================================================
  // 上級レベル (Niveau Avancé)
  // =============================================================================

  // レッスン9: 47チェーン店マスター
  master_47_chains_lesson: {
    id: 'master_47_chains_lesson',
    title: 'Expert des 47 Chaînes',
    description: '全47チェーンの特徴、歴史、注文システム',
    level: 'avance',
    type: 'quiz',
    estimatedTime: 35,
    points: 200,
    order: 9,
    prerequisites: ['family_restaurant_lesson'],
    relatedChains: [], // Toutes les chaînes
    category: 'expert',
    content: {
      introduction: 'Testez vos connaissances approfondies sur les 47 chaînes.',
      sections: [
        {
          id: 'section_1',
          title: 'Vue d\'ensemble des 47 chaînes',
          content: 'Chaque chaîne a sa place unique dans la culture alimentaire japonaise.',
          images: ['/tutorial/images/all-chains.jpg'],
          tips: [
            'Chaque chaîne a son système spécifique',
            'Les prix et clientèles varient',
            'L\'histoire reflète l\'évolution sociale'
          ]
        }
      ],
      quiz: {
        id: 'master_47_quiz',
        title: 'Quiz Expert 47 Chaînes',
        questions: [
          {
            id: 'q1',
            type: 'multiple_choice',
            question: 'Quelle chaîne a été fondée en 1899 ?',
            options: ['Sukiya', 'Yoshinoya', 'Matsuya'],
            correctAnswer: 'Yoshinoya',
            explanation: 'Yoshinoya est la plus ancienne chaîne de gyudon.',
            points: 50,
            difficulty: 'hard',
            category: 'expert'
          }
        ],
        passingScore: 85
      },
      summary: 'Félicitations ! Vous êtes un expert des chaînes japonaises !'
    },
    isCompleted: false,
    attempts: 0
  },

  // レッスン10: 文化的意義
  cultural_significance_lesson: {
    id: 'cultural_significance_lesson',
    title: 'Histoire et Impact Cultural des Chaînes',
    description: 'チェーン店が日本社会に与えた影響と文化的意義',
    level: 'avance',
    type: 'video',
    estimatedTime: 30,
    points: 250,
    order: 10,
    prerequisites: ['master_47_chains_lesson'],
    relatedChains: [],
    category: 'culture',
    content: {
      introduction: 'Explorez l\'impact des chaînes sur la société japonaise.',
      sections: [
        {
          id: 'section_1',
          title: 'Évolution historique',
          content: 'Comment les chaînes ont transformé l\'alimentation japonaise.',
          images: ['/tutorial/images/history.jpg'],
          culturalNotes: [
            'Démocratisation de l\'alimentation',
            'Reflet des changements sociaux',
            'Innovation constante'
          ]
        }
      ],
      video: {
        id: 'cultural_impact_video',
        title: 'Impact culturel des chaînes',
        url: '/tutorial/videos/cultural-impact.mp4',
        duration: 600,
        subtitles: [
          {
            language: 'fr',
            url: '/tutorial/subtitles/cultural-impact-fr.vtt'
          }
        ]
      },
      summary: 'Vous comprenez la place des chaînes dans la culture japonaise moderne.'
    },
    isCompleted: false,
    attempts: 0
  }
};

// レッスン管理用のヘルパー関数
export const lessonUtils = {
  /**
   * レベル別レッスンを取得
   */
  getLessonsByLevel(level: LearningLevel): Lesson[] {
    return Object.values(lessons)
      .filter(lesson => lesson.level === level)
      .sort((a, b) => a.order - b.order);
  },

  /**
   * カテゴリー別レッスンを取得
   */
  getLessonsByCategory(category: string): Lesson[] {
    return Object.values(lessons)
      .filter(lesson => lesson.category === category)
      .sort((a, b) => a.order - b.order);
  },

  /**
   * 特定のチェーンに関連するレッスンを取得
   */
  getLessonsForChain(chainId: string): Lesson[] {
    return Object.values(lessons)
      .filter(lesson => lesson.relatedChains.includes(chainId))
      .sort((a, b) => a.order - b.order);
  },

  /**
   * 前提条件をチェック
   */
  checkPrerequisites(lessonId: string, completedLessons: string[]): boolean {
    const lesson = lessons[lessonId];
    if (!lesson) return false;
    
    return lesson.prerequisites.every(prereq => completedLessons.includes(prereq));
  },

  /**
   * 次に受講可能なレッスンを取得
   */
  getAvailableLessons(completedLessons: string[]): Lesson[] {
    return Object.values(lessons)
      .filter(lesson => {
        // 既に完了していない
        if (completedLessons.includes(lesson.id)) return false;
        
        // 前提条件をクリアしている
        return lesson.prerequisites.every(prereq => completedLessons.includes(prereq));
      })
      .sort((a, b) => a.order - b.order);
  },

  /**
   * レッスンの進捗率を計算
   */
  calculateProgress(completedLessons: string[], level?: LearningLevel): number {
    const totalLessons = level 
      ? Object.values(lessons).filter(lesson => lesson.level === level)
      : Object.values(lessons);
    
    if (totalLessons.length === 0) return 0;
    
    const completedCount = totalLessons.filter(lesson => 
      completedLessons.includes(lesson.id)
    ).length;
    
    return Math.round((completedCount / totalLessons.length) * 100);
  },

  /**
   * 推定学習時間を計算
   */
  calculateEstimatedTime(lessonIds: string[]): number {
    return lessonIds.reduce((total, lessonId) => {
      const lesson = lessons[lessonId];
      return total + (lesson?.estimatedTime || 0);
    }, 0);
  },

  /**
   * 獲得可能ポイントを計算
   */
  calculateTotalPoints(lessonIds: string[]): number {
    return lessonIds.reduce((total, lessonId) => {
      const lesson = lessons[lessonId];
      return total + (lesson?.points || 0);
    }, 0);
  },

  /**
   * 学習パスの推奨順序を取得
   */
  getRecommendedLearningPath(currentLevel: LearningLevel = 'debutant'): string[] {
    const levelOrder: LearningLevel[] = ['debutant', 'intermediaire', 'avance'];
    const currentLevelIndex = levelOrder.indexOf(currentLevel);
    
    const path: string[] = [];
    
    // 現在のレベル以下のレッスンを順序通りに追加
    for (let i = 0; i <= currentLevelIndex; i++) {
      const level = levelOrder[i];
      if (level) {
        const levelLessons = this.getLessonsByLevel(level);
        path.push(...levelLessons.map((lesson: Lesson) => lesson.id));
      }
    }
    
    return path;
  }
};

// カテゴリー定義
export const lessonCategories = {
  manners: {
    id: 'manners',
    name: 'Bonnes Manières',
    nameJa: 'マナー',
    description: 'Étiquette et bonnes manières dans les restaurants japonais',
    icon: '🙏',
    color: 'blue'
  },
  systems: {
    id: 'systems',
    name: 'Systèmes de Commande',
    nameJa: '注文システム',
    description: 'Maîtrisez les différents systèmes de commande',
    icon: '📱',
    color: 'green'
  },
  chains: {
    id: 'chains',
    name: 'Chaînes Spécifiques',
    nameJa: 'チェーン店',
    description: 'Spécificités de chaque chaîne',
    icon: '🏪',
    color: 'purple'
  },
  food: {
    id: 'food',
    name: 'Cuisine Japonaise',
    nameJa: '日本料理',
    description: 'Bases de la cuisine japonaise',
    icon: '🍱',
    color: 'orange'
  },
  expert: {
    id: 'expert',
    name: 'Expertise Avancée',
    nameJa: '上級知識',
    description: 'Connaissances approfondies',
    icon: '🎓',
    color: 'yellow'
  },
  culture: {
    id: 'culture',
    name: 'Culture et Histoire',
    nameJa: '文化・歴史',
    description: 'Contexte culturel et historique',
    icon: '🏛️',
    color: 'red'
  }
} as const;
