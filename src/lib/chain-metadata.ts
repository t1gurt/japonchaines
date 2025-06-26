import { Metadata } from 'next';

// チェーン情報のマスターデータ
const chainData: Record<string, {
  name: string;
  nameJp: string;
  category: string;
  description: string;
  specialties: string[];
  founded?: string;
}> = {
  'anan': {
    name: 'Anan',
    nameJp: '安安',
    category: 'Yakiniku',
    description: 'Yakiniku abordable au charbon de bois authentique avec le concept "安くて旨い" (bon marché et délicieux).',
    specialties: ['Kalbi au charbon', 'Harami', 'Formules à volonté', 'Légumes grillés'],
    founded: '1999'
  },
  'bamiyan': {
    name: 'Bamiyan',
    nameJp: 'バーミヤン',
    category: 'Cuisine Chinoise',
    description: 'Chaîne de restaurant chinois familial avec des plats généreux à prix abordables et une ambiance décontractée.',
    specialties: ['Gyoza', 'Ramen chinois', 'Riz frit', 'Bœuf au poivre noir'],
    founded: '1986'
  },
  'coco-ichibanya': {
    name: 'CoCo Ichibanya',
    nameJp: 'CoCo壱番屋',
    category: 'Curry',
    description: 'La chaîne de curry japonais la plus populaire avec personnalisation complète des épices et garnitures.',
    specialties: ['Curry katsu', 'Curry végétarien', 'Niveaux épices', 'Toppings variés'],
    founded: '1978'
  },
  'doutor': {
    name: 'Doutor Coffee',
    nameJp: 'ドトールコーヒー',
    category: 'Café',
    description: 'Pionnier du café à prix accessible au Japon, révolutionnaire dans la culture café japonaise.',
    specialties: ['Café de qualité', 'Sandwichs', 'Milan sandwich', 'Café glacé'],
    founded: '1980'
  },
  'freshness-burger': {
    name: 'Freshness Burger',
    nameJp: 'フレッシュネスバーガー',
    category: 'Hamburgers',
    description: 'Chaîne de burgers premium avec ingrédients frais et options healthy dans un concept moderne.',
    specialties: ['Burgers frais', 'Avocado burger', 'Options healthy', 'Salades gourmet'],
    founded: '1992'
  },
  'fuji-soba': {
    name: 'Fuji Soba',
    nameJp: '富士そば',
    category: 'Soba',
    description: 'Chaîne emblématique de soba 24h/24 à Tokyo, symbole de la restauration rapide populaire.',
    specialties: ['Soba traditionnelles', 'Service 24h', 'Kake soba', 'Tempura soba'],
    founded: '1966'
  },
  'gindako': {
    name: 'Gindako',
    nameJp: '銀だこ',
    category: 'Street Food',
    description: 'Spécialiste des takoyaki authentiques d\'Osaka, apportant la street food dans tout le Japon.',
    specialties: ['Takoyaki croustillants', 'Sauce originale', 'Techniques Osaka', 'Variations créatives'],
    founded: '1997'
  },
  'go-go-curry': {
    name: 'Go Go Curry',
    nameJp: 'ゴーゴーカレー',
    category: 'Curry',
    description: 'Curry de style Kanazawa avec roux noir épais et ambiance unique inspirée du baseball.',
    specialties: ['Curry noir', 'Portion généreuse', 'Ambiance baseball', 'Sauce épaisse'],
    founded: '2004'
  },
  'gusto': {
    name: 'Gusto',
    nameJp: 'ガスト',
    category: 'Family Restaurant',
    description: 'Restaurant familial leader au Japon avec menu varié et prix accessibles pour toute la famille.',
    specialties: ['Menu familial', 'Drink bar', 'Plats occidentaux', 'Desserts'],
    founded: '1992'
  },
  'gyoza-no-ohsho': {
    name: 'Gyoza no Ohsho',
    nameJp: '餃子の王将',
    category: 'Cuisine Chinoise',
    description: 'Chaîne authentique de cuisine chinoise populaire, spécialisée dans les gyoza faits main.',
    specialties: ['Gyoza faits main', 'Yakimeshi', 'Ramen chinois', 'Plats généreux'],
    founded: '1967'
  },
  'gyukaku': {
    name: 'Gyukaku',
    nameJp: '牛角',
    category: 'Yakiniku',
    description: 'Chaîne de yakiniku haut de gamme proposant des viandes de qualité premium dans une ambiance moderne.',
    specialties: ['Kalbi Premium', 'Wagyu', 'Courses dégustation', 'Formules à volonté'],
    founded: '1996'
  },
  'hama-sushi': {
    name: 'Hama Sushi',
    nameJp: 'はま寿司',
    category: 'Kaiten-zushi',
    description: 'Sushi tournant abordable avec qualité constante et innovation technologique pour le service.',
    specialties: ['Sushi abordable', 'Poisson frais', 'Service automatisé', 'Menu varié'],
    founded: '1999'
  },
  'hanamaru-udon': {
    name: 'Hanamaru Udon',
    nameJp: 'はなまるうどん',
    category: 'Udon',
    description: 'Chaîne d\'udon rapide et abordable avec nouilles fraîches préparées quotidiennement.',
    specialties: ['Udon fraîches', 'Tempura variées', 'Service rapide', 'Prix accessibles'],
    founded: '2000'
  },
  'hidakaya': {
    name: 'Hidakaya',
    nameJp: '日高屋',
    category: 'Cuisine Chinoise',
    description: 'Cuisine chinoise populaire et abordable, spécialisée dans les ramen et gyoza du quotidien.',
    specialties: ['Ramen populaire', 'Gyoza croustillants', 'Fried rice', 'Prix populaires'],
    founded: '1986'
  },
  'hoshino': {
    name: 'Hoshino Coffee',
    nameJp: '星乃珈琲店',
    category: 'Café',
    description: 'Café traditionnel avec ambiance rétro, spécialisé dans le café siphon et les pancakes épais.',
    specialties: ['Café siphon', 'Pancakes épais', 'Ambiance rétro', 'Desserts maison'],
    founded: '2011'
  },
  'ichiran': {
    name: 'Ichiran',
    nameJp: '一蘭',
    category: 'Ramen',
    description: 'Ramen tonkotsu spécialisé avec système de commande unique et expérience individuelle focalisée.',
    specialties: ['Tonkotsu ramen', 'Système yatai', 'Personnalisation', 'Focus individuel'],
    founded: '1960'
  },
  'ikinari-steak': {
    name: 'Ikinari Steak',
    nameJp: 'いきなりステーキ',
    category: 'Steak',
    description: 'Révolution du steak debout avec viande au poids et cuisson minute dans un concept innovant.',
    specialties: ['Steak debout', 'Vente au poids', 'Cuisson minute', 'Viande premium'],
    founded: '2013'
  },
  'ippudo': {
    name: 'Ippudo',
    nameJp: '一風堂',
    category: 'Ramen',
    description: 'Ramen haut de gamme de Hakata avec bouillon tonkotsu raffiné et renommée internationale.',
    specialties: ['Tonkotsu Hakata', 'Shiromaru', 'Akamaru', 'Ramen premium'],
    founded: '1985'
  },
  'jolly-pasta': {
    name: 'Jolly Pasta',
    nameJp: 'ジョリーパスタ',
    category: 'Family Restaurant',
    description: 'Restaurant familial spécialisé dans les pâtes avec menu varié adapté aux goûts japonais.',
    specialties: ['Pâtes japonaises', 'Sauces originales', 'Menu familial', 'Plats fusion'],
    founded: '1994'
  },
  'jonathans': {
    name: 'Jonathan\'s',
    nameJp: 'ジョナサン',
    category: 'Family Restaurant',
    description: 'Restaurant familial haut de gamme du groupe Skylark avec cuisine variée et ambiance raffinée.',
    specialties: ['Menu varié', 'Qualité premium', 'Ambiance familiale', 'Desserts'],
    founded: '1979'
  },
  'komeda': {
    name: 'Komeda Coffee',
    nameJp: 'コメダ珈琲店',
    category: 'Café',
    description: 'Café traditionnel de Nagoya célèbre pour son morning service et son ambiance nostalgique.',
    specialties: ['Morning service', 'Shiro-noir', 'Café traditionnel', 'Ambiance Showa'],
    founded: '1968'
  },
  'komoro-soba': {
    name: 'Komoro Soba',
    nameJp: '小諸そば',
    category: 'Soba',
    description: 'Chaîne traditionnelle de soba avec recettes authentiques et service rapide en centre-ville.',
    specialties: ['Soba traditionnelles', 'Tsuyu maison', 'Service rapide', 'Tempura fraîches'],
    founded: '1984'
  },
  'kura-sushi': {
    name: 'Kura Sushi',
    nameJp: 'くら寿司',
    category: 'Kaiten-zushi',
    description: 'Sushi tournant innovant avec système de capsules et technologie pour une expérience ludique.',
    specialties: ['Système capsules', 'Sushi frais', 'Technologie ludique', 'Prix accessibles'],
    founded: '1977'
  },
  'kushikatsu-tanaka': {
    name: 'Kushikatsu Tanaka',
    nameJp: '串カツ田中',
    category: 'Izakaya',
    description: 'Spécialiste des kushikatsu d\'Osaka avec ambiance populaire et interdiction de double trempage.',
    specialties: ['Kushikatsu Osaka', 'Sauce interdite 2x', 'Ambiance populaire', 'Bière bien fraîche'],
    founded: '1929'
  },
  'lotteria': {
    name: 'Lotteria',
    nameJp: 'ロッテリア',
    category: 'Hamburgers',
    description: 'Chaîne de burgers japonaise historique avec saveurs locales et innovations uniques.',
    specialties: ['Burgers japonais', 'Ebi burger', 'Innovations locales', 'Saveurs fusion'],
    founded: '1972'
  },
  'marugame-seimen': {
    name: 'Marugame Seimen',
    nameJp: '丸亀製麺',
    category: 'Udon',
    description: 'Udon fraîches préparées devant vous avec tradition de Sanuki et tempura croustillantes.',
    specialties: ['Udon Sanuki', 'Préparation visible', 'Tempura fraîches', 'Qualité artisanale'],
    founded: '2000'
  },
  'matsuya': {
    name: 'Matsuya',
    nameJp: '松屋',
    category: 'Gyudon',
    description: 'Gyudon économique 24h/24 avec menu varié et système de tickets automatique.',
    specialties: ['Gyudon économique', 'Service 24h', 'Menu varié', 'Prix imbattables'],
    founded: '1966'
  },
  'miyamoto-munashi': {
    name: 'Miyamoto Munashi',
    nameJp: '宮本むなし',
    category: 'Teishoku',
    description: 'Teishoku traditionnel avec riz et miso à volonté dans une ambiance populaire authentique.',
    specialties: ['Riz à volonté', 'Miso gratuit', 'Teishoku complets', 'Ambiance populaire'],
    founded: '1953'
  },
  'mos-burger': {
    name: 'Mos Burger',
    nameJp: 'モスバーガー',
    category: 'Hamburgers',
    description: 'Burgers japonais premium avec ingrédients locaux et qualité artisanale made-to-order.',
    specialties: ['Made-to-order', 'Ingrédients japonais', 'Qualité premium', 'Teriyaki burger'],
    founded: '1972'
  },
  'ootoya': {
    name: 'Ootoya',
    nameJp: '大戸屋',
    category: 'Teishoku',
    description: 'Teishoku authentique avec cuisine maison, ingrédients frais et plats équilibrés.',
    specialties: ['Cuisine maison', 'Teishoku équilibrés', 'Poisson grillé', 'Légumes frais'],
    founded: '1992'
  },
  'osaka-ohsho': {
    name: 'Osaka Ohsho',
    nameJp: '大阪王将',
    category: 'Cuisine Chinoise',
    description: 'Cuisine chinoise d\'Osaka avec gyoza croustillants et plats généreux dans l\'esprit Kansai.',
    specialties: ['Gyoza d\'Osaka', 'Yakimeshi généreux', 'Esprit Kansai', 'Portions copieuses'],
    founded: '1969'
  },
  'ringer-hut': {
    name: 'Ringer Hut',
    nameJp: 'リンガーハット',
    category: 'Cuisine Chinoise',
    description: 'Spécialiste du chanpon de Nagasaki avec légumes frais et bouillon authentique.',
    specialties: ['Chanpon Nagasaki', 'Légumes frais', 'Sara udon', 'Bouillon authentique'],
    founded: '1974'
  },
  'saizeriya': {
    name: 'Saizeriya',
    nameJp: 'サイゼリヤ',
    category: 'Family Restaurant',
    description: 'Restaurant italien familial avec prix ultra-accessibles et menu varié pour tous.',
    specialties: ['Italien abordable', 'Prix imbattables', 'Drink bar', 'Menu familial'],
    founded: '1973'
  },
  'shirokiya': {
    name: 'Shirokiya',
    nameJp: '白木屋',
    category: 'Izakaya',
    description: 'Izakaya traditionnel avec ambiance conviviale, menu varié et prix accessibles pour groupes.',
    specialties: ['Ambiance izakaya', 'Menu varié', 'Boissons variées', 'Groupes amis'],
    founded: '1983'
  },
  'sukiya': {
    name: 'Sukiya',
    nameJp: 'すき家',
    category: 'Gyudon',
    description: 'Leader du gyudon avec le plus grand réseau au Japon et menu diversifié 24h/24.',
    specialties: ['Gyudon leader', 'Plus grand réseau', 'Menu diversifié', 'Service 24h'],
    founded: '1982'
  },
  'sukiya-curry': {
    name: 'Sukiya Curry',
    nameJp: 'すき家カレー',
    category: 'Curry',
    description: 'Extension curry de Sukiya avec curry japonais authentique et prix Sukiya accessibles.',
    specialties: ['Curry Sukiya', 'Prix accessibles', 'Menu rapide', 'Qualité constante'],
    founded: '2010'
  },
  'sushiro': {
    name: 'Sushiro',
    nameJp: 'スシロー',
    category: 'Kaiten-zushi',
    description: 'Leader du sushi tournant avec innovation technologique et qualité à prix accessible.',
    specialties: ['Leader kaiten', 'Innovation tech', 'Qualité accessible', 'Menu saisonnier'],
    founded: '1984'
  },
  'tenkaippin': {
    name: 'Tenkaippin',
    nameJp: '天下一品',
    category: 'Ramen',
    description: 'Ramen kotteri unique avec bouillon ultra-riche et texture crémeuse incomparable.',
    specialties: ['Kotteri unique', 'Bouillon crémeux', 'Texture épaisse', 'Style Kyoto'],
    founded: '1971'
  },
  'tenya': {
    name: 'Tenya',
    nameJp: 'てんや',
    category: 'Tempura',
    description: 'Tempura rapide et abordable avec technique professionnelle et ingrédients de saison.',
    specialties: ['Tempura rapide', 'Technique pro', 'Prix accessibles', 'Ingrédients saison'],
    founded: '1989'
  },
  'torikizoku': {
    name: 'Torikizoku',
    nameJp: '鳥貴族',
    category: 'Izakaya',
    description: 'Yakitori à prix unique révolutionnaire avec qualité constante et ambiance décontractée.',
    specialties: ['Prix unique', 'Yakitori qualité', 'Révolution prix', 'Ambiance décontractée'],
    founded: '1985'
  },
  'tsunahachi': {
    name: 'Tsunahachi',
    nameJp: '綱八',
    category: 'Tempura',
    description: 'Tempura traditionnelle historique de Tokyo avec technique ancestrale et respect des saisons.',
    specialties: ['Tempura historique', 'Technique ancestrale', 'Tradition Tokyo', 'Respect saisons'],
    founded: '1923'
  },
  'watami': {
    name: 'Watami',
    nameJp: 'ワタミ',
    category: 'Izakaya',
    description: 'Izakaya moderne avec concept écologique, menu varié et ambiance contemporaine.',
    specialties: ['Concept écologique', 'Menu moderne', 'Ambiance contemporaine', 'Groupes'],
    founded: '1984'
  },
  'yayoiken': {
    name: 'Yayoiken',
    nameJp: 'やよい軒',
    category: 'Teishoku',
    description: 'Teishoku authentique avec riz blanc illimité et plats cuisinés maison de qualité.',
    specialties: ['Riz illimité', 'Plats maison', 'Teishoku authentique', 'Qualité constante'],
    founded: '1886'
  },
  'yoshinoya': {
    name: 'Yoshinoya',
    nameJp: '吉野家',
    category: 'Gyudon',
    description: 'Pionnier historique du gyudon depuis 1899 avec tradition et innovation continues.',
    specialties: ['Pionnier gyudon', 'Tradition 1899', 'Innovation continue', 'Recette secrète'],
    founded: '1899'
  },
  'yudetaro': {
    name: 'Yudetaro',
    nameJp: 'ゆで太郎',
    category: 'Soba',
    description: 'Soba et udon rapide avec tempura fraîches dans un concept de restauration efficace.',
    specialties: ['Soba et udon', 'Tempura fraîches', 'Service rapide', 'Prix raisonnables'],
    founded: '1994'
  }
};

export function generateChainMetadata(chainSlug: string): Metadata {
  const chain = chainData[chainSlug];
  
  if (!chain) {
    return {
      title: 'Chaîne de Restaurant Japonais | Guide Complet',
      description: 'Découvrez cette chaîne de restaurant japonais avec notre guide détaillé.',
    };
  }

  const title = `${chain.name} (${chain.nameJp}) | ${chain.category} | Guide Restaurants Japonais`;
  const description = `${chain.description} Menu complet, prix, conseils de commande et guide pratique pour ${chain.name}.`;
  
  return {
    title,
    description,
    keywords: [
      chain.name.toLowerCase(),
      chain.nameJp,
      chain.category.toLowerCase(),
      ...chain.specialties.map(s => s.toLowerCase()),
      'restaurant japonais',
      'chaîne restaurant japon',
      'guide voyage japon',
      'comment commander au japon'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/chaines/${chainSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/chaines/${chainSlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
