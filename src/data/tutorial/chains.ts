/**
 * チェーン店情報データ
 * 既存のサイトデータと連携したチュートリアル用チェーン店情報
 */

import { ChainInfo } from '../../types/tutorial';

// チュートリアル用チェーン店情報
export const tutorialChains: Record<string, ChainInfo> = {
  // =============================================================================
  // 牛丼チェーン
  // =============================================================================
  
  yoshinoya: {
    id: 'yoshinoya',
    name: 'Yoshinoya',
    nameJa: '吉野家',
    category: 'gyudon',
    description: 'La chaîne de gyudon la plus ancienne et emblématique du Japon',
    features: [
      'Fondée en 1899',
      'Slogan "Umai, Yasui, Hayai"',
      'Service au comptoir',
      'Présence internationale'
    ],
    orderingSystem: 'counter',
    priceRange: 'budget',
    popularItems: [
      'Gyudon (牛丼)',
      'Buta-don (豚丼)',
      'Gyukalbi-don (牛カルビ丼)',
      'Curry gyudon (カレー牛丼)'
    ],
    culturalSignificance: 'Pionnier du concept de fast-food japonais, symbole de la modernisation alimentaire',
    tips: [
      'Commandez directement au personnel',
      'Payez généralement après avoir mangé',
      'Service très rapide aux heures de pointe',
      'Populaire auprès des salarymen'
    ],
    locations: 1200,
    founded: 1899,
    isActive: true
  },

  sukiya: {
    id: 'sukiya',
    name: 'Sukiya',
    nameJa: 'すき家',
    category: 'gyudon',
    description: 'La plus grande chaîne de gyudon avec plus de 2000 restaurants',
    features: [
      'Plus grand nombre de restaurants',
      'Ouvert 24h/24 dans la plupart des endroits',
      'Menu très varié',
      'Système de commande au comptoir'
    ],
    orderingSystem: 'counter',
    priceRange: 'budget',
    popularItems: [
      'Gyudon (牛丼)',
      'Cheese gyudon (チーズ牛丼)',
      'Kara-age set (唐揚げセット)',
      'Unagi-don (うな丼)'
    ],
    culturalSignificance: 'Expansion massive qui a démocratisé le gyudon dans tout le Japon',
    tips: [
      'Très pratique pour les repas nocturnes',
      'Nombreuses options de toppings',
      'Service drive-through disponible',
      'Cartes de fidélité acceptées'
    ],
    locations: 2000,
    founded: 1982,
    isActive: true
  },

  matsuya: {
    id: 'matsuya',
    name: 'Matsuya',
    nameJa: '松屋',
    category: 'gyudon',
    description: 'Chaîne de gyudon utilisant un système de machine à tickets',
    features: [
      'Système de machine à tickets',
      'Miso shiru gratuite',
      'Menu teishoku disponible',
      'Service efficace'
    ],
    orderingSystem: 'ticket_machine',
    priceRange: 'budget',
    popularItems: [
      'Gyumeshi (牛めし)',
      'Kalbi-yaki teishoku (カルビ焼き定食)',
      'Katsu curry (カツカレー)',
      'Hamburg teishoku (ハンバーグ定食)'
    ],
    culturalSignificance: 'Innovation avec les machines à tickets, efficacité maximale',
    tips: [
      'Utilisez la machine à tickets à l\'entrée',
      'Soup miso toujours gratuite',
      'Service très rapide et efficace',
      'Bon rapport qualité-prix'
    ],
    locations: 1000,
    founded: 1966,
    isActive: true
  },

  nakau: {
    id: 'nakau',
    name: 'Nakau',
    nameJa: 'なか卯',
    category: 'gyudon',
    description: 'Chaîne spécialisée en gyudon et udon avec système de tickets',
    features: [
      'Spécialité gyudon et udon',
      'Machine à tickets',
      'Petit déjeuner disponible',
      'Ambiance décontractée'
    ],
    orderingSystem: 'ticket_machine',
    priceRange: 'budget',
    popularItems: [
      'Oyako-don (親子丼)',
      'Katsu-don (カツ丼)',
      'Kitsune udon (きつねうどん)',
      'Gyudon (牛丼)'
    ],
    culturalSignificance: 'Fusion réussie entre traditions (udon) et modernité (gyudon)',
    tips: [
      'Excellent pour le petit déjeuner',
      'Portions généreuses',
      'Udon fraîchement préparé',
      'Service courtois'
    ],
    locations: 500,
    founded: 1969,
    isActive: true
  },

  // =============================================================================
  // ラーメンチェーン
  // =============================================================================

  ichiran: {
    id: 'ichiran',
    name: 'Ichiran',
    nameJa: '一蘭',
    category: 'ramen',
    description: 'Chaîne de ramen célèbre pour ses boxes individuelles',
    features: [
      'Boxes individuelles (yatai)',
      'Concentration sur tonkotsu ramen',
      'Système de commande par formulaire',
      'Expérience unique'
    ],
    orderingSystem: 'counter',
    priceRange: 'moderate',
    popularItems: [
      'Tonkotsu ramen (とんこつラーメン)',
      'Kaedama (替え玉)',
      'Cha-shu (チャーシュー)',
      'Ajitama (味玉)'
    ],
    culturalSignificance: 'Révolution de l\'expérience ramen avec le concept d\'individualité',
    tips: [
      'Remplissez le formulaire de commande',
      'Ajustez la fermeté des nouilles',
      'Concentrez-vous sur votre ramen',
      'Service discret et efficace'
    ],
    locations: 300,
    founded: 1960,
    isActive: true
  },

  ippudo: {
    id: 'ippudo',
    name: 'Ippudo',
    nameJa: '一風堂',
    category: 'ramen',
    description: 'Chaîne de ramen moderne avec ambiance décontractée',
    features: [
      'Ambiance moderne et branchée',
      'Variété de ramens',
      'Service à table',
      'Présence internationale'
    ],
    orderingSystem: 'table_service',
    priceRange: 'moderate',
    popularItems: [
      'Shiromaru motoaji (白丸元味)',
      'Akamaru shinaji (赤丸新味)',
      'Tsukemen (つけ麺)',
      'Gyoza (餃子)'
    ],
    culturalSignificance: 'Modernisation du ramen traditionnel pour une clientèle urbaine',
    tips: [
      'Ambiance décontractée, prenez votre temps',
      'Excellent pour les groupes',
      'Gyoza hautement recommandés',
      'Réservation possible'
    ],
    locations: 200,
    founded: 1985,
    isActive: true
  },

  tenkaippin: {
    id: 'tenkaippin',
    name: 'Tenkaippin',
    nameJa: '天下一品',
    category: 'ramen',
    description: 'Ramen traditionnel avec bouillon épais du Kansai',
    features: [
      'Bouillon très épais (kotteri)',
      'Style traditionnel du Kansai',
      'Recette secrète familiale',
      'Fidèles réguliers'
    ],
    orderingSystem: 'counter',
    priceRange: 'moderate',
    popularItems: [
      'Kotteri ramen (こってりラーメン)',
      'Assari ramen (あっさりラーメン)',
      'Cha-han (チャーハン)',
      'Gyoza (餃子)'
    ],
    culturalSignificance: 'Préservation du style ramen traditionnel du Kansai',
    tips: [
      'Essayez le kotteri pour l\'expérience authentique',
      'Populaire parmi les locaux',
      'Portions généreuses',
      'Atmosphère traditionnelle'
    ],
    locations: 200,
    founded: 1971,
    isActive: true
  },

  // =============================================================================
  // 回転寿司チェーン
  // =============================================================================

  sushiro: {
    id: 'sushiro',
    name: 'Sushiro',
    nameJa: 'スシロー',
    category: 'kaiten-zushi',
    description: 'La plus grande chaîne de sushi tournant au Japon',
    features: [
      'Plus grande chaîne de kaiten-zushi',
      'Prix uniformes par couleur d\'assiette',
      'Commandes via écran tactile',
      'Qualité constante'
    ],
    orderingSystem: 'touch_panel',
    priceRange: 'budget',
    popularItems: [
      'Maguro (マグロ)',
      'Salmon (サーモン)',
      'Uni (ウニ)',
      'Ebi (エビ)'
    ],
    culturalSignificance: 'Démocratisation du sushi pour toutes les générations',
    tips: [
      'Utilisez l\'écran tactile pour commander',
      'Assiettes colorées = prix différents',
      'Rail express pour commandes spéciales',
      'Comptez vos assiettes pour le paiement'
    ],
    locations: 600,
    founded: 1984,
    isActive: true
  },

  'kura-sushi': {
    id: 'kura-sushi',
    name: 'Kura Sushi',
    nameJa: 'くら寿司',
    category: 'kaiten-zushi',
    description: 'Chaîne innovante avec système de jeu et technologie',
    features: [
      'Système de jeu BigiCap',
      'Technologie anti-contamination',
      'Prix fixes',
      'Innovation constante'
    ],
    orderingSystem: 'touch_panel',
    priceRange: 'budget',
    popularItems: [
      'Salmon (サーモン)',
      'Tuna (マグロ)',
      'Tamago (玉子)',
      'Desserts'
    ],
    culturalSignificance: 'Innovation technologique dans la tradition du kaiten-zushi',
    tips: [
      'Collectionnez les assiettes pour jouer',
      'Système très hygiénique',
      'Amusant pour les familles',
      'Desserts surprenants'
    ],
    locations: 500,
    founded: 1977,
    isActive: true
  },

  'hama-sushi': {
    id: 'hama-sushi',
    name: 'Hama Sushi',
    nameJa: 'はま寿司',
    category: 'kaiten-zushi',
    description: 'Chaîne de sushi tournant avec excellent rapport qualité-prix',
    features: [
      'Prix très abordables',
      'Commande par tablette',
      'Service rapide',
      'Qualité décente'
    ],
    orderingSystem: 'touch_panel',
    priceRange: 'budget',
    popularItems: [
      'Maguro (マグロ)',
      'Ika (イカ)',
      'Salmon (サーモン)',
      'Miso soup (味噌汁)'
    ],
    culturalSignificance: 'Accessibilité maximale du sushi pour tous les budgets',
    tips: [
      'Prix très compétitifs',
      'Bon pour les grandes familles',
      'Service efficace',
      'Qualité acceptable pour le prix'
    ],
    locations: 500,
    founded: 2002,
    isActive: true
  },

  // =============================================================================
  // ファミリーレストラン
  // =============================================================================

  saizeriya: {
    id: 'saizeriya',
    name: 'Saizeriya',
    nameJa: 'サイゼリヤ',
    category: 'family-restaurant',
    description: 'Restaurant italien abordable très populaire',
    features: [
      'Cuisine italienne adaptée',
      'Prix très abordables',
      'Drink bar populaire',
      'Menu étudiant-friendly'
    ],
    orderingSystem: 'table_service',
    priceRange: 'budget',
    popularItems: [
      'Margherita pizza (マルゲリータ)',
      'Milano-style doria (ミラノ風ドリア)',
      'Pasta (パスタ)',
      'Drink bar (ドリンクバー)'
    ],
    culturalSignificance: 'Adaptation réussie de la cuisine italienne au marché japonais',
    tips: [
      'Parfait pour les étudiants',
      'Drink bar très populaire',
      'Portions généreuses',
      'Atmosphère décontractée'
    ],
    locations: 1000,
    founded: 1967,
    isActive: true
  },

  gusto: {
    id: 'gusto',
    name: 'Gusto',
    nameJa: 'ガスト',
    category: 'family-restaurant',
    description: 'Family restaurant avec écrans tactiles et menu varié',
    features: [
      'Écrans tactiles à chaque table',
      'Menu très varié',
      'Service 24h/24 (certains endroits)',
      'Ambiance familiale'
    ],
    orderingSystem: 'touch_panel',
    priceRange: 'moderate',
    popularItems: [
      'Hamburg steak (ハンバーグ)',
      'Pasta set (パスタセット)',
      'Chicken nanban (チキン南蛮)',
      'Parfait (パフェ)'
    ],
    culturalSignificance: 'Modernisation du concept de family restaurant avec la technologie',
    tips: [
      'Utilisez l\'écran tactile pour commander',
      'Parfait pour les familles',
      'Menu enfant disponible',
      'Service courtois'
    ],
    locations: 1300,
    founded: 1970,
    isActive: true
  },

  jonathans: {
    id: 'jonathans',
    name: 'Jonathan\'s',
    nameJa: 'ジョナサン',
    category: 'family-restaurant',
    description: 'Family restaurant haut de gamme avec service de qualité',
    features: [
      'Qualité supérieure',
      'Service attentionné',
      'Menu sophistiqué',
      'Ambiance élégante'
    ],
    orderingSystem: 'table_service',
    priceRange: 'moderate',
    popularItems: [
      'Steak (ステーキ)',
      'Seafood gratin (シーフードグラタン)',
      'Cake set (ケーキセット)',
      'Wine selection (ワイン)'
    ],
    culturalSignificance: 'Élévation du standard des family restaurants japonais',
    tips: [
      'Plus cher mais meilleure qualité',
      'Bon pour les occasions spéciales',
      'Réservation recommandée',
      'Excellent service'
    ],
    locations: 300,
    founded: 1979,
    isActive: true
  },

  // =============================================================================
  // カレーチェーン
  // =============================================================================

  'coco-ichibanya': {
    id: 'coco-ichibanya',
    name: 'CoCo Ichibanya',
    nameJa: 'CoCo壱番屋',
    category: 'curry',
    description: 'La plus grande chaîne de curry au Japon',
    features: [
      'Curry personnalisable',
      'Niveau de piquant ajustable (0-10)',
      'Portions variables',
      'Toppings variés'
    ],
    orderingSystem: 'counter',
    priceRange: 'moderate',
    popularItems: [
      'Pork curry (ポークカレー)',
      'Katsu curry (カツカレー)',
      'Chicken curry (チキンカレー)',
      'Vegetable curry (野菜カレー)'
    ],
    culturalSignificance: 'Roi incontesté du curry japonais, adaptation locale réussie',
    tips: [
      'Choisissez votre niveau de piquant',
      'Taille des portions ajustable',
      'Nombreux toppings disponibles',
      'Carte de fidélité avantageuse'
    ],
    locations: 1400,
    founded: 1978,
    isActive: true
  },

  'go-go-curry': {
    id: 'go-go-curry',
    name: 'Go Go Curry',
    nameJa: 'ゴーゴーカレー',
    category: 'curry',
    description: 'Chaîne de curry de style Kanazawa',
    features: [
      'Style Kanazawa',
      'Curry noir distinctif',
      'Service rapide',
      'Portions généreuses'
    ],
    orderingSystem: 'counter',
    priceRange: 'budget',
    popularItems: [
      'Major curry (メジャーカレー)',
      'Katsu curry (カツカレー)',
      'Sausage curry (ソーセージカレー)',
      'Ebi fry curry (エビフライカレー)'
    ],
    culturalSignificance: 'Popularisation du curry de style Kanazawa dans tout le Japon',
    tips: [
      'Curry très copieux',
      'Prix abordable',
      'Service ultra-rapide',
      'Atmosphère dynamique'
    ],
    locations: 200,
    founded: 2001,
    isActive: true
  },

  // =============================================================================
  // 蕎麦・うどんチェーン
  // =============================================================================

  'fuji-soba': {
    id: 'fuji-soba',
    name: 'Fuji Soba',
    nameJa: '富士そば',
    category: 'soba-udon',
    description: 'Chaîne de soba et udon avec machine à tickets',
    features: [
      'Soba et udon frais',
      'Machine à tickets',
      'Service très rapide',
      'Ouvert tard'
    ],
    orderingSystem: 'ticket_machine',
    priceRange: 'budget',
    popularItems: [
      'Kake soba (かけそば)',
      'Tempura soba (天ぷらそば)',
      'Katsu-don (カツ丼)',
      'Curry udon (カレーうどん)'
    ],
    culturalSignificance: 'Préservation de la tradition soba dans un format moderne',
    tips: [
      'Parfait pour un repas rapide',
      'Nouilles fraîches',
      'Prix très raisonnables',
      'Pratique près des gares'
    ],
    locations: 100,
    founded: 1966,
    isActive: true
  },

  'marugame-seimen': {
    id: 'marugame-seimen',
    name: 'Marugame Seimen',
    nameJa: '丸亀製麺',
    category: 'soba-udon',
    description: 'Chaîne d\'udon avec nouilles fraîches fait maison',
    features: [
      'Udon fait maison',
      'Système de self-service',
      'Tempura fraîche',
      'Prix transparent'
    ],
    orderingSystem: 'counter',
    priceRange: 'budget',
    popularItems: [
      'Kake udon (かけうどん)',
      'Bukkake udon (ぶっかけうどん)',
      'Tempura (天ぷら)',
      'Katsu-don (カツ丼)'
    ],
    culturalSignificance: 'Révolution de l\'udon avec transparence et fraîcheur',
    tips: [
      'Regardez faire les nouilles',
      'Self-service pour les accompagnements',
      'Tempura très fraîche',
      'Excellent rapport qualité-prix'
    ],
    locations: 800,
    founded: 2000,
    isActive: true
  },

  'hanamaru-udon': {
    id: 'hanamaru-udon',
    name: 'Hanamaru Udon',
    nameJa: 'はなまるうどん',
    category: 'soba-udon',
    description: 'Chaîne d\'udon abordable avec système self-service',
    features: [
      'Prix très bas',
      'Système self-service',
      'Service rapide',
      'Simplicité'
    ],
    orderingSystem: 'counter',
    priceRange: 'budget',
    popularItems: [
      'Kake udon (かけうどん)',
      'Wakame udon (わかめうどん)',
      'Beef udon (肉うどん)',
      'Onigiri (おにぎり)'
    ],
    culturalSignificance: 'Démocratisation maximale de l\'udon traditionnel',
    tips: [
      'Prix imbattables',
      'Parfait pour un budget serré',
      'Service ultra-rapide',
      'Qualité décente'
    ],
    locations: 400,
    founded: 2000,
    isActive: true
  }
};

// チェーン店管理用ヘルパー関数
export const chainUtils = {
  /**
   * カテゴリー別チェーン店を取得
   */
  getChainsByCategory(category: string): ChainInfo[] {
    return Object.values(tutorialChains)
      .filter(chain => chain.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  /**
   * 注文システム別チェーン店を取得
   */
  getChainsByOrderingSystem(system: string): ChainInfo[] {
    return Object.values(tutorialChains)
      .filter(chain => chain.orderingSystem === system)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  /**
   * 価格帯別チェーン店を取得
   */
  getChainsByPriceRange(priceRange: string): ChainInfo[] {
    return Object.values(tutorialChains)
      .filter(chain => chain.priceRange === priceRange)
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  /**
   * チェーン店検索
   */
  searchChains(query: string): ChainInfo[] {
    const lowercaseQuery = query.toLowerCase();
    return Object.values(tutorialChains)
      .filter(chain => 
        chain.name.toLowerCase().includes(lowercaseQuery) ||
        chain.nameJa.includes(query) ||
        chain.description.toLowerCase().includes(lowercaseQuery) ||
        chain.features.some(feature => 
          feature.toLowerCase().includes(lowercaseQuery)
        ) ||
        chain.popularItems.some(item => 
          item.toLowerCase().includes(lowercaseQuery)
        )
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  },

  /**
   * レッスン関連チェーン店を取得
   */
  getChainsForLesson(lessonId: string): ChainInfo[] {
    // レッスンに関連するチェーンIDを定義
    const lessonChainMap: Record<string, string[]> = {
      'bonnes_manieres_lesson': ['yoshinoya', 'sukiya', 'matsuya'],
      'ticket_machine_lesson': ['matsuya', 'nakau', 'fuji-soba'],
      'gyudon_big3_lesson': ['yoshinoya', 'sukiya', 'matsuya'],
      'popular_chains_lesson': ['saizeriya', 'gusto', 'coco-ichibanya'],
      'sushi_basics_lesson': ['sushiro', 'kura-sushi', 'hama-sushi'],
      'ramen_masters_lesson': ['ichiran', 'ippudo', 'tenkaippin'],
      'kaiten_zushi_lesson': ['sushiro', 'kura-sushi', 'hama-sushi'],
      'family_restaurant_lesson': ['saizeriya', 'gusto', 'jonathans']
    };

    const chainIds = lessonChainMap[lessonId] || [];
    return chainIds
      .map(id => tutorialChains[id])
      .filter(chain => chain);
  },

  /**
   * チェーン店の難易度を判定
   */
  getChainDifficulty(chainId: string): 'beginner' | 'intermediate' | 'advanced' {
    const chain = tutorialChains[chainId];
    if (!chain) return 'beginner';

    // 注文システムに基づく難易度判定
    switch (chain.orderingSystem) {
      case 'counter':
        return 'beginner';
      case 'ticket_machine':
        return 'intermediate';
      case 'touch_panel':
        return 'intermediate';
      case 'table_service':
        return 'advanced';
      default:
        return 'beginner';
    }
  },

  /**
   * おすすめチェーン店を取得（初心者向け）
   */
  getRecommendedChainsForBeginners(): ChainInfo[] {
    return [
      tutorialChains.yoshinoya,
      tutorialChains.sushiro,
      tutorialChains.saizeriya,
      tutorialChains['coco-ichibanya']
    ].filter(chain => chain);
  },

  /**
   * チェーン店統計を取得
   */
  getChainStats() {
    const chains = Object.values(tutorialChains);
    
    return {
      total: chains.length,
      byCategory: chains.reduce((acc, chain) => {
        acc[chain.category] = (acc[chain.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byOrderingSystem: chains.reduce((acc, chain) => {
        acc[chain.orderingSystem] = (acc[chain.orderingSystem] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byPriceRange: chains.reduce((acc, chain) => {
        acc[chain.priceRange] = (acc[chain.priceRange] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      totalLocations: chains.reduce((sum, chain) => sum + chain.locations, 0),
      averageLocations: Math.round(
        chains.reduce((sum, chain) => sum + chain.locations, 0) / chains.length
      )
    };
  }
};

// カテゴリー定義
export const chainCategories = {
  'gyudon': {
    id: 'gyudon',
    name: 'Gyudon',
    nameJa: '牛丼',
    description: 'Bols de riz au bœuf, rapides et abordables',
    icon: '🍚',
    difficulty: 'beginner'
  },
  'ramen': {
    id: 'ramen',
    name: 'Ramen',
    nameJa: 'ラーメン',
    description: 'Soupes de nouilles, grande variété de styles',
    icon: '🍜',
    difficulty: 'intermediate'
  },
  'kaiten-zushi': {
    id: 'kaiten-zushi',
    name: 'Kaiten Zushi',
    nameJa: '回転寿司',
    description: 'Sushi tournant, système unique japonais',
    icon: '🍣',
    difficulty: 'intermediate'
  },
  'family-restaurant': {
    id: 'family-restaurant',
    name: 'Family Restaurant',
    nameJa: 'ファミリーレストラン',
    description: 'Restaurants familiaux, menu varié',
    icon: '👨‍👩‍👧‍👦',
    difficulty: 'intermediate'
  },
  'curry': {
    id: 'curry',
    name: 'Curry',
    nameJa: 'カレー',
    description: 'Curry japonais, personnalisable',
    icon: '🍛',
    difficulty: 'beginner'
  },
  'soba-udon': {
    id: 'soba-udon',
    name: 'Soba & Udon',
    nameJa: 'そば・うどん',
    description: 'Nouilles traditionnelles japonaises',
    icon: '🥢',
    difficulty: 'beginner'
  }
} as const;

// Backward compatibility alias
export const CHAINS = tutorialChains;
