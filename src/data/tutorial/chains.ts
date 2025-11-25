// src/data/tutorial/chains.ts

import { Chain } from '@/types/tutorial';

export const chains: Chain[] = [
  // Gyūdon chains (3 stores)
  {
    id: 'yoshinoya',
    name: 'Yoshinoya',
    japanese: '吉野家',
    category: 'gyudon',
    description: 'Symbole de la culture gyūdon',
    difficulty: 'facile',
    features: ['Commande au comptoir', 'Service rapide', 'Prix abordable'],
  },
  {
    id: 'sukiya',
    name: 'Sukiya',
    japanese: 'すき家',
    category: 'gyudon',
    description: 'Ouvert 24h/24 avec personnalisation',
    difficulty: 'facile',
    features: ['Machine à tickets', 'Menu varié', 'Ouvert 24h/24'],
  },
  {
    id: 'matsuya',
    name: 'Matsuya',
    japanese: '松屋',
    category: 'gyudon',
    description: 'Fusion avec la culture teishoku',
    difficulty: 'facile',
    features: ['Machine à tickets orange', 'Set menus', 'Curry populaire'],
  },

  // Ramen chains (3 stores)
  {
    id: 'ichiran',
    name: 'Ichiran',
    japanese: '一蘭',
    category: 'ramen',
    description: 'Ramen tonkotsu et expérience personnelle',
    difficulty: 'moyen',
    features: ['Comptoir individuel', 'Personnalisation poussée', 'Bouillon secret'],
  },
  {
    id: 'ippudo',
    name: 'Ippudo',
    japanese: '一風堂',
    category: 'ramen',
    description: 'Pionnier du tonkotsu moderne',
    difficulty: 'moyen',
    features: ['Shiromaru célèbre', 'Ambiance moderne', 'Kaedama disponible'],
  },
  {
    id: 'tenkaippin',
    name: 'Tenkaippin',
    japanese: '天下一品',
    category: 'ramen',
    description: 'Tradition du kotteri épais',
    difficulty: 'moyen',
    features: ['Bouillon kotteri unique', 'Fidèles inconditionnels', 'Ambiance vintage'],
  },

  // Kaiten-zushi chains (3 stores)
  {
    id: 'sushiro',
    name: 'Sushiro',
    japanese: 'スシロー',
    category: 'kaiten-zushi',
    description: 'Leader de l\'industrie avec innovation technologique',
    difficulty: 'moyen',
    features: ['Réservation en ligne', 'Sushi de qualité', 'Prix fixes'],
  },
  {
    id: 'kura-sushi',
    name: 'Kura Sushi',
    japanese: 'くら寿司',
    category: 'kaiten-zushi',
    description: 'Concept sans additifs',
    difficulty: 'moyen',
    features: ['Système Bikkurapon', 'Sushi sans conservateur', 'Technologie avancée'],
  },
  {
    id: 'hama-sushi',
    name: 'Hama Sushi',
    japanese: 'はま寿司',
    category: 'kaiten-zushi',
    description: 'Orienté performance de coût',
    difficulty: 'facile',
    features: ['Prix très bas', 'Commande tactile', 'Grande variété'],
  },

  // Curry chains (3 stores)
  {
    id: 'coco-ichibanya',
    name: 'CoCo Ichibanya',
    japanese: 'CoCo壱番屋',
    category: 'curry',
    description: 'Le roi du curry japonais',
    difficulty: 'facile',
    features: ['Niveaux de piment 1-10', 'Toppings nombreux', 'Portions ajustables'],
  },
  {
    id: 'go-go-curry',
    name: 'Go!Go!Curry',
    japanese: 'ゴーゴーカレー',
    category: 'curry',
    description: 'Authentique curry de Kanazawa',
    difficulty: 'moyen',
    features: ['Style Kanazawa', 'Sauce épaisse', 'Cabbage gratis'],
  },
  {
    id: 'sukiya-curry',
    name: 'Sukiya Curry',
    japanese: 'すき家カレー',
    category: 'curry',
    description: 'Évolution du gyūdon',
    difficulty: 'facile',
    features: ['Curry fusion', 'Prix abordable', 'Service rapide'],
  },

  // Tempura/Tendon chains (2 stores)
  {
    id: 'tenya',
    name: 'Tenya',
    japanese: 'てんや',
    category: 'tempura',
    description: 'Chaîne de tendon abordable',
    difficulty: 'facile',
    features: ['Prix raisonnable', 'Tempura fraîche', 'Service rapide'],
  },
  {
    id: 'tsunahachi',
    name: 'Tsunahachi',
    japanese: 'つな八',
    category: 'tempura',
    description: 'Technique traditionnelle des maîtres',
    difficulty: 'moyen',
    features: ['Tradition ancestrale', 'Technique artisanale', 'Qualité premium'],
  },

  // Udon chains (2 stores)
  {
    id: 'marugame-seimen',
    name: 'Marugame Seimen',
    japanese: '丸亀製麺',
    category: 'udon',
    description: 'Authentique udon de Sanuki',
    difficulty: 'moyen',
    features: ['Fabrication sur place', 'Udon fraîches', 'Style Sanuki'],
  },
  {
    id: 'hanamaru-udon',
    name: 'Hanamaru Udon',
    japanese: 'はなまるうどん',
    category: 'udon',
    description: 'Pionnier du self-service',
    difficulty: 'facile',
    features: ['Self-service', 'Prix bas', 'Tempura variée'],
  },

  // Soba chains (3 stores)
  {
    id: 'fuji-soba',
    name: 'Fuji Soba',
    japanese: '富士そば',
    category: 'soba',
    description: 'Représentant du soba debout de Tokyo',
    difficulty: 'facile',
    features: ['Service ultra-rapide', 'Comptoir debout', 'Style Tokyo'],
  },
  {
    id: 'yudetaro',
    name: 'Yudetaro',
    japanese: 'ゆで太郎',
    category: 'soba',
    description: 'Incarnation de la culture soba moderne',
    difficulty: 'facile',
    features: ['Soba moderne', 'Service efficace', 'Prix abordable'],
  },
  {
    id: 'komoro-soba',
    name: 'Komoro Soba',
    japanese: '小諸そば',
    category: 'soba',
    description: 'Technique traditionnelle du soba de Shinshu',
    difficulty: 'moyen',
    features: ['Tradition Shinshu', 'Soba artisanal', 'Qualité supérieure'],
  },

  // Family restaurants (4 stores)
  {
    id: 'saizeriya',
    name: 'Saizeriya',
    japanese: 'サイゼリヤ',
    category: 'family-restaurants',
    description: 'Performance de coût phénoménale',
    difficulty: 'facile',
    features: ['Cuisine italienne', 'Prix très bas', 'Menu photo'],
  },
  {
    id: 'gusto',
    name: 'Gusto',
    japanese: 'ガスト',
    category: 'family-restaurants',
    description: 'Plus grand family restaurant du Japon',
    difficulty: 'facile',
    features: ['Menu varié', 'Tablettes de commande', 'Drink bar'],
  },
  {
    id: 'jonathans',
    name: 'Jonathan\'s',
    japanese: 'ジョナサン',
    category: 'family-restaurants',
    description: 'Expérience premium',
    difficulty: 'moyen',
    features: ['Qualité premium', 'Service attentionné', 'Ambiance chic'],
  },
  {
    id: 'jolly-pasta',
    name: 'Jolly Pasta',
    japanese: 'ジョリーパスタ',
    category: 'family-restaurants',
    description: 'Spécialisé en pâtes italiennes',
    difficulty: 'facile',
    features: ['Pâtes italiennes', 'Menu varié', 'Prix raisonnable'],
  },

  // Japanese burgers (3 stores)
  {
    id: 'mos-burger',
    name: 'MOS Burger',
    japanese: 'モスバーガー',
    category: 'burger',
    description: 'Symbole de l\'évolution unique japonaise',
    difficulty: 'facile',
    features: ['Burger japonais', 'Ingrédients frais', 'Style unique'],
  },
  {
    id: 'freshness-burger',
    name: 'Freshness Burger',
    japanese: 'フレッシュネスバーガー',
    category: 'burger',
    description: 'Orientation premium',
    difficulty: 'moyen',
    features: ['Qualité premium', 'Ingrédients naturels', 'Ambiance moderne'],
  },
  {
    id: 'lotteria',
    name: 'Lotteria',
    japanese: 'ロッテリア',
    category: 'burger',
    description: 'Expansion japonaise d\'origine coréenne',
    difficulty: 'facile',
    features: ['Style unique', 'Prix abordable', 'Menu local'],
  },
  {
    id: 'domdom',
    name: 'Dom Dom Burger',
    japanese: 'ドムドムバーガー',
    category: 'burger',
    description: 'Le premier burger japonais, phénix ressuscité',
    difficulty: 'moyen',
    features: ['Histoire légendaire', 'Menus créatifs viraux', 'Culture "wabi-sabi"'],
  },

  // Chinese cuisine (4 stores)
  {
    id: 'bamiyan',
    name: 'Bamiyan',
    japanese: 'バーミヤン',
    category: 'chinese',
    description: 'Chinois familial',
    difficulty: 'facile',
    features: ['Menu familial', 'Prix abordable', 'Ambiance décontractée'],
  },
  {
    id: 'hidakaya',
    name: 'Hidakaya',
    japanese: '日高屋',
    category: 'chinese',
    description: 'Gyoza et ramen populaire',
    difficulty: 'facile',
    features: ['Gyoza fameux', 'Ramen chinois', 'Prix populaire'],
  },
  {
    id: 'gyoza-no-ohsho',
    name: 'Gyoza no Ohsho',
    japanese: '餃子の王将',
    category: 'chinese',
    description: 'Authentique originaire du Kansai',
    difficulty: 'moyen',
    features: ['Gyoza authentique', 'Origine Kansai', 'Technique traditionnelle'],
  },
  {
    id: 'ringer-hut',
    name: 'Ringer Hut',
    japanese: 'リンガーハット',
    category: 'chinese',
    description: 'Spécialisé en champon de Nagasaki',
    difficulty: 'moyen',
    features: ['Champon Nagasaki', 'Légumes abondants', 'Nouilles spéciales'],
  },

  // Izakaya (4 stores)
  {
    id: 'torikizoku',
    name: 'Torikizoku',
    japanese: '鳥貴族',
    category: 'izakaya',
    description: 'Révolution du prix uniforme',
    difficulty: 'moyen',
    features: ['Prix uniforme', 'Yakitori varié', 'Ambiance populaire'],
  },
  {
    id: 'kushikatsu-tanaka',
    name: 'Kushikatsu Tanaka',
    japanese: '串カツ田中',
    category: 'izakaya',
    description: 'Kushikatsu renommé d\'Osaka',
    difficulty: 'moyen',
    features: ['Kushikatsu Osaka', 'Sauce spéciale', 'Ambiance typique'],
  },
  {
    id: 'shirokiya',
    name: 'Shirokiya',
    japanese: '白木屋',
    category: 'izakaya',
    description: 'Représentant des izakaya complets',
    difficulty: 'moyen',
    features: ['Menu complet', 'Ambiance traditionnelle', 'Service varié'],
  },
  {
    id: 'watami',
    name: 'Watami',
    japanese: 'ワタミ',
    category: 'izakaya',
    description: 'Stabilité des grands groupes',
    difficulty: 'moyen',
    features: ['Chaîne majeure', 'Service stable', 'Menu étendu'],
  },

  // Cafe/Coffee shops (3 stores)
  {
    id: 'komeda',
    name: 'Komeda Coffee',
    japanese: 'コメダ珈琲店',
    category: 'cafe',
    description: 'Héritage de la culture kissaten et innovation du service matinal',
    difficulty: 'facile',
    features: ['Service matinal', 'Ambiance nostalgique', 'Café traditionnel'],
  },
  {
    id: 'doutor',
    name: 'Doutor Coffee',
    japanese: 'ドトールコーヒー',
    category: 'cafe',
    description: 'Pionnier de la révolution café japonaise et innovation qualité',
    difficulty: 'facile',
    features: ['Café de qualité', 'Service rapide', 'Prix raisonnable'],
  },
  {
    id: 'hoshino',
    name: 'Hoshino Coffee',
    japanese: '星乃珈琲店',
    category: 'cafe',
    description: 'Nostalgie Showa et renaissance du café siphon traditionnel',
    difficulty: 'moyen',
    features: ['Café siphon', 'Ambiance Showa', 'Qualité artisanale'],
  },

  // Street food (1 store)
  {
    id: 'gindako',
    name: 'Gindako',
    japanese: '銀だこ',
    category: 'street-food',
    description: 'Goût authentique takoyaki d\'Osaka et démonstration d\'artisanat',
    difficulty: 'facile',
    features: ['Takoyaki Osaka', 'Préparation en direct', 'Technique artisanale'],
  },

  // Steak (1 store)
  {
    id: 'ikinari-steak',
    name: 'Ikinari Steak',
    japanese: 'いきなりステーキ',
    category: 'steak',
    description: 'Révolution du steak debout',
    difficulty: 'moyen',
    features: ['Steak debout', 'Concept révolutionnaire', 'Viande de qualité'],
  },

  // Yakiniku (2 stores)
  {
    id: 'gyukaku',
    name: 'Gyukaku',
    japanese: '牛角',
    category: 'yakiniku',
    description: 'Représentant des chaînes yakiniku premium',
    difficulty: 'moyen',
    features: ['Yakiniku premium', 'Viande sélectionnée', 'Service de qualité'],
  },
  {
    id: 'anan',
    name: 'Anan',
    japanese: '安安',
    category: 'yakiniku',
    description: 'Chaîne yakiniku décontractée axée coût-performance',
    difficulty: 'facile',
    features: ['Prix abordable', 'Ambiance décontractée', 'Bonne performance'],
  },

  // Karaoke (2 stores)
  {
    id: 'big-echo',
    name: 'Big Echo',
    japanese: 'ビッグエコー',
    category: 'karaoke',
    description: 'Plus grande chaîne karaoke du Japon, équipements modernes et environnement confortable',
    difficulty: 'facile',
    features: ['Équipements modernes', 'Rooms variées', 'Service excellent'],
  },
  {
    id: 'karaoke-kan',
    name: 'Karaoke Kan',
    japanese: 'カラオケ館',
    category: 'karaoke',
    description: 'Service de haute qualité et expérience premium de karaoke traditionnel',
    difficulty: 'moyen',
    features: ['Service premium', 'Qualité son supérieure', 'Expérience traditionnelle'],
  },

  // Teishoku (3 stores - adding missing ones)
  {
    id: 'ootoya',
    name: 'Ootoya',
    japanese: '大戸屋',
    category: 'teishoku',
    description: 'Cuisine japonaise traditionnelle en version moderne',
    difficulty: 'moyen',
    features: ['Teishoku authentique', 'Ingrédients frais', 'Ambiance traditionnelle'],
  },
  {
    id: 'yayoiken',
    name: 'Yayoiken',
    japanese: 'やよい軒',
    category: 'teishoku',
    description: 'Culture teishoku traditionnelle',
    difficulty: 'facile',
    features: ['Teishoku varié', 'Riz illimité', 'Prix abordable'],
  },
  {
    id: 'miyamoto-munashi',
    name: 'Miyamoto Munashi',
    japanese: '宮本むなし',
    category: 'teishoku',
    description: 'Tradition teishoku',
    difficulty: 'facile',
    features: ['Style traditionnel', 'Menu classique', 'Service simple'],
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