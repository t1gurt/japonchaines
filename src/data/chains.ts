export interface Chain {
    slug: string;
    name: string;
    nameJp: string;
    category: string;
    description: string;
    popularity: 'Très populaire' | 'Populaire' | 'Modéré';
    avgPrice: string;
    bgImage?: string;
}

export const chains: Chain[] = [
    {
        slug: 'anan',
        name: 'Anan',
        nameJp: '安安',
        category: 'Yakiniku',
        description: 'Yakiniku abordable au charbon de bois - "安くて旨い" (bon marché et délicieux) dans une ambiance décontractée.',
        popularity: 'Populaire',
        avgPrice: '1500-2500¥'
    },
    {
        slug: 'bamiyan',
        name: 'Bamiyan',
        nameJp: 'バーミヤン',
        category: 'Cuisine Chinoise',
        description: 'Chaîne de restaurant chinois familial avec des plats généreux à prix abordables.',
        popularity: 'Populaire',
        avgPrice: '800-1500¥'
    },
    {
        slug: 'big-echo',
        name: 'Big Echo',
        nameJp: 'ビッグエコー',
        category: 'Karaoke',
        description: 'Karaoke leader du Japon - technologie de pointe et bibliothèque musicale exhaustive.',
        popularity: 'Très populaire',
        avgPrice: '1500-3500¥'
    },
    {
        slug: 'botejyu',
        name: 'Botejyu',
        nameJp: 'ぼてぢゅう',
        category: 'Okonomiyaki',
        description: 'L\'inventeur légendaire du okonomiyaki avec mayonnaise et créateur du Modan-yaki depuis 1946.',
        popularity: 'Populaire',
        avgPrice: '800-1800¥'
    },
    {
        slug: 'coco-ichibanya',
        name: 'CoCo Ichibanya',
        nameJp: 'CoCo壱番屋',
        category: 'Curry',
        description: 'La chaîne de curry japonais la plus populaire avec de nombreuses options de personnalisation.',
        popularity: 'Très populaire',
        avgPrice: '600-1200¥',
        bgImage: '/images/chaines/cocoichi/cocoichi-curry.jpg'
    },
    {
        slug: 'domdom',
        name: 'Dom Dom Burger',
        nameJp: 'ドムドムハンバーガー',
        category: 'Hamburgers',
        description: 'Le plus ancien hamburger japonais (1970) - Phoenix ressuscité avec créations audacieuses et mascotte légendaire.',
        popularity: 'Modéré',
        avgPrice: '500-900¥'
    },
    {
        slug: 'doutor',
        name: 'Doutor Coffee',
        nameJp: 'ドトールコーヒー',
        category: 'Café',
        description: 'Pioneer du café moderne japonais - qualité artisanale et innovation depuis 1980.',
        popularity: 'Très populaire',
        avgPrice: '200-450¥'
    },
    {
        slug: 'freshness-burger',
        name: 'Freshness Burger',
        nameJp: 'フレッシュネスバーガー',
        category: 'Hamburgers',
        description: 'Chaîne de burgers premium avec des ingrédients frais et des options healthy.',
        popularity: 'Modéré',
        avgPrice: '800-1500¥'
    },
    {
        slug: 'fuji-soba',
        name: 'Fuji Soba',
        nameJp: '富士そば',
        category: 'Soba',
        description: 'Chaîne de nouilles soba traditionnelle de Tokyo, ouverte 24h/24, populaire auprès des salarymen.',
        popularity: 'Populaire',
        avgPrice: '300-700¥'
    },
    {
        slug: 'futago',
        name: 'Futago',
        nameJp: 'ふたご',
        category: 'Yakiniku',
        description: 'Révolution du yakiniku premium d\'Osaka avec le légendaire "Hasami-deru Kalbi" et service "jusqu\'à la bouche".',
        popularity: 'Populaire',
        avgPrice: '3000-5000¥'
    },
    {
        slug: 'gindako',
        name: 'Gindako',
        nameJp: '銀だこ',
        category: 'Street Food',
        description: 'Spécialiste des takoyaki authentiques d\'Osaka avec cuisson live et sauce secrète.',
        popularity: 'Très populaire',
        avgPrice: '480-800¥'
    },
    {
        slug: 'go-go-curry',
        name: 'Go Go Curry',
        nameJp: 'ゴーゴーカレー',
        category: 'Curry',
        description: 'Curry de style Kanazawa servi rapidement avec une sauce épaisse caractéristique.',
        popularity: 'Populaire',
        avgPrice: '500-900¥'
    },
    {
        slug: 'gusto',
        name: 'Gusto',
        nameJp: 'ガスト',
        category: 'Restaurant Familial',
        description: 'Restaurant familial 24h/24 avec un menu varié de plats occidentaux et japonais.',
        popularity: 'Très populaire',
        avgPrice: '600-1200¥'
    },
    {
        slug: 'gyoza-no-ohsho',
        name: 'Gyoza no Ohsho',
        nameJp: '餃子の王将',
        category: 'Cuisine Chinoise',
        description: 'Spécialiste des gyoza et plats chinois à prix populaires.',
        popularity: 'Très populaire',
        avgPrice: '400-800¥'
    },
    {
        slug: 'gyukaku',
        name: 'Gyukaku',
        nameJp: '牛角',
        category: 'Yakiniku',
        description: 'Leader du yakiniku premium - Viandes de qualité dans une ambiance moderne et conviviale.',
        popularity: 'Très populaire',
        avgPrice: '2000-4000¥'
    },
    {
        slug: 'hama-sushi',
        name: 'Hama Sushi',
        nameJp: 'はま寿司',
        category: 'Sushi',
        description: 'Sushi sur tapis roulant à 110¥ la pièce avec commande par tablette.',
        popularity: 'Très populaire',
        avgPrice: '100-120¥/pièce'
    },
    {
        slug: 'hanamaru-udon',
        name: 'Hanamaru Udon',
        nameJp: 'はなまるうどん',
        category: 'Udon',
        description: 'Spécialiste des udon frais à prix abordables avec de nombreux toppings.',
        popularity: 'Très populaire',
        avgPrice: '200-500¥'
    },
    {
        slug: 'hidakaya',
        name: 'Hidakaya',
        nameJp: '日高屋',
        category: 'Cuisine Chinoise',
        description: 'Gyoza & ramen populaires - Cuisine chinoise accessible depuis 1979.',
        popularity: 'Très populaire',
        avgPrice: '300-700¥'
    },
    {
        slug: 'hoshino',
        name: 'Hoshino Coffee',
        nameJp: '星乃珈琲店',
        category: 'Café',
        description: 'Nostalgie Showa authentique - café siphon artisanal et pancakes signature.',
        popularity: 'Populaire',
        avgPrice: '480-1280¥'
    },
    {
        slug: 'ichiran',
        name: 'Ichiran',
        nameJp: '一蘭',
        category: 'Ramen',
        description: 'Ramen tonkotsu dans des boxes individuels pour une expérience unique.',
        popularity: 'Très populaire',
        avgPrice: '800-1200¥'
    },
    {
        slug: 'isomaru-suisan',
        name: 'Isomaru Suisan',
        nameJp: '磯丸水産',
        category: 'Izakaya',
        description: 'Izakaya révolutionnaire avec grill de table pour fruits de mer frais - ambiance maritime conviviale.',
        popularity: 'Très populaire',
        avgPrice: '1000-4000¥'
    },
    {
        slug: 'ikinari-steak',
        name: 'Ikinari Steak',
        nameJp: 'いきなりステーキ',
        category: 'Steak',
        description: 'Révolution du steak au Japon : qualité premium debout à prix abordables.',
        popularity: 'Populaire',
        avgPrice: '1500-3000¥'
    },
    {
        slug: 'ippudo',
        name: 'Ippudo',
        nameJp: '一風堂',
        category: 'Ramen',
        description: 'Ramen tonkotsu haut de gamme originaire de Hakata (Fukuoka).',
        popularity: 'Populaire',
        avgPrice: '900-1500¥',
        bgImage: '/images/chaines/ippudo/shiromaru-motoaji.jpg'
    },
    {
        slug: 'jolly-pasta',
        name: 'Jolly Pasta',
        nameJp: 'ジョリーパスタ',
        category: 'Restaurant Familial',
        description: 'Spécialiste des pâtes italiennes adaptées au goût japonais, ambiance familiale.',
        popularity: 'Populaire',
        avgPrice: '800-1500¥'
    },
    {
        slug: 'jonathans',
        name: 'Jonathan\'s',
        nameJp: 'ジョナサン',
        category: 'Restaurant Familial',
        description: 'Restaurant familial avec menu varié, ouvert tard et adapté aux familles.',
        popularity: 'Populaire',
        avgPrice: '700-1300¥'
    },
    {
        slug: 'karaoke-kan',
        name: 'Karaoke Kan',
        nameJp: 'カラオケ館',
        category: 'Karaoke',
        description: 'Service premium et espaces haut de gamme pour expérience karaoke exceptionnelle.',
        popularity: 'Populaire',
        avgPrice: '2000-4500¥'
    },
    {
        slug: 'komeda',
        name: 'Komeda Coffee',
        nameJp: 'コメダ珈琲店',
        category: 'Café',
        description: 'Kissaten moderne avec Morning Service légendaire et spécialité Shironoir.',
        popularity: 'Très populaire',
        avgPrice: '450-780¥'
    },
    {
        slug: 'komoro-soba',
        name: 'Komoro Soba',
        nameJp: '小諸そば',
        category: 'Soba',
        description: 'Expérience authentique tachi-gui (manger debout) avec soba traditionnel de style Shinshu.',
        popularity: 'Modéré',
        avgPrice: '290-550¥'
    },
    {
        slug: 'kura-sushi',
        name: 'Kura Sushi',
        nameJp: 'くら寿司',
        category: 'Sushi',
        description: 'Sushi sur tapis roulant avec système de jeu et récompenses pour enfants.',
        popularity: 'Très populaire',
        avgPrice: '100-120¥/pièce'
    },
    {
        slug: 'kushikatsu-tanaka',
        name: 'Kushikatsu Tanaka',
        nameJp: '串カツ田中',
        category: 'Izakaya',
        description: 'Spécialiste du kushikatsu d\'Osaka - brochettes panées et frites avec sauce secrète.',
        popularity: 'Populaire',
        avgPrice: '1500-2500¥'
    },
    {
        slug: 'lotteria',
        name: 'Lotteria',
        nameJp: 'ロッテリア',
        category: 'Fast Food',
        description: 'Chaîne de fast food japonaise avec des burgers au style local.',
        popularity: 'Modéré',
        avgPrice: '500-1000¥'
    },
    {
        slug: 'marugame-seimen',
        name: 'Marugame Seimen',
        nameJp: '丸亀製麺',
        category: 'Udon',
        description: 'Udon fraîchement préparés devant vous avec de nombreux toppings.',
        popularity: 'Très populaire',
        avgPrice: '300-600¥'
    },
    {
        slug: 'matsuya',
        name: 'Matsuya',
        nameJp: '松屋',
        category: 'Gyudon',
        description: 'Gyudon et curry bon marché, ouvert 24h/24 dans de nombreux endroits.',
        popularity: 'Très populaire',
        avgPrice: '350-700¥'
    },
    {
        slug: 'miyamoto-munashi',
        name: 'Miyamoto Munashi',
        nameJp: '宮本むなし',
        category: 'Teishoku',
        description: 'Chaîne de teishoku économique d\'Osaka, réputée pour ses portions XXL à petit prix.',
        popularity: 'Populaire',
        avgPrice: '400-800¥'
    },
    {
        slug: 'mos-burger',
        name: 'Mos Burger',
        nameJp: 'モスバーガー',
        category: 'Hamburgers',
        description: 'Burgers japonais avec des ingrédients locaux et des saveurs uniques.',
        popularity: 'Populaire',
        avgPrice: '600-1200¥'
    },
    {
        slug: 'nakau',
        name: 'Nakau',
        nameJp: 'なか卯',
        category: 'Gyudon',
        description: 'Gyudon familial avec spécialités udon et options équilibrées.',
        popularity: 'Populaire',
        avgPrice: '350-650¥'
    },
    {
        slug: 'ootoya',
        name: 'Ootoya',
        nameJp: '大戸屋',
        category: 'Teishoku',
        description: 'Teishoku haut de gamme avec légumes frais, cuisine visible et présentation soignée.',
        popularity: 'Populaire',
        avgPrice: '800-1500¥'
    },
    {
        slug: 'osaka-ohsho',
        name: 'Osaka Ohsho',
        nameJp: '大阪王将',
        category: 'Cuisine Chinoise',
        description: 'Cuisine chinoise style Osaka avec gyoza croustillants et yakimeshi signature.',
        popularity: 'Populaire',
        avgPrice: '500-1300¥'
    },
    {
        slug: 'ringer-hut',
        name: 'Ringer Hut',
        nameJp: 'リンガーハット',
        category: 'Champon/Ramen',
        description: 'Spécialiste du champon de Nagasaki avec des légumes frais.',
        popularity: 'Populaire',
        avgPrice: '600-1000¥'
    },
    {
        slug: 'saizeriya',
        name: 'Saizeriya',
        nameJp: 'サイゼリヤ',
        category: 'Italien',
        description: 'Restaurant italien très abordable populaire auprès des étudiants.',
        popularity: 'Très populaire',
        avgPrice: '200-800¥'
    },
    {
        slug: 'shirokiya',
        name: 'Shirokiya',
        nameJp: '白木屋',
        category: 'Izakaya',
        description: 'Chaîne d\'izakaya avec formules à volonté et ambiance décontractée.',
        popularity: 'Populaire',
        avgPrice: '2000-3500¥'
    },
    {
        slug: 'sukiya',
        name: 'Sukiya',
        nameJp: 'すき家',
        category: 'Gyudon',
        description: 'La plus grande chaîne de gyudon du Japon, ouverte 24h/24.',
        popularity: 'Très populaire',
        avgPrice: '300-600¥'
    },
    {
        slug: 'sukiya-curry',
        name: 'Sukiya Curry',
        nameJp: 'すき家のカレー',
        category: 'Curry',
        description: 'Version curry de Sukiya avec des currys rapides et abordables.',
        popularity: 'Modéré',
        avgPrice: '400-700¥'
    },
    {
        slug: 'sushiro',
        name: 'Sushiro',
        nameJp: 'スシロー',
        category: 'Sushi',
        description: 'Leader du sushi sur tapis roulant avec application mobile pour éviter l\'attente.',
        popularity: 'Très populaire',
        avgPrice: '100-120¥/pièce',
        bgImage: '/images/chaines/sushiro/maguro.jpg'
    },
    {
        slug: 'tenkaippin',
        name: 'Tenkaippin',
        nameJp: '天下一品',
        category: 'Ramen',
        description: 'Ramen au bouillon épais et crémeux, style unique très populaire.',
        popularity: 'Populaire',
        avgPrice: '700-1100¥'
    },
    {
        slug: 'tenya',
        name: 'Tenya',
        nameJp: 'てんや',
        category: 'Tempura',
        description: 'Spécialiste du tendon (tempura sur riz) rapide et abordable.',
        popularity: 'Populaire',
        avgPrice: '500-900¥'
    },
    {
        slug: 'torikizoku',
        name: 'Torikizoku',
        nameJp: '鳥貴族',
        category: 'Yakitori',
        description: 'Chaîne de yakitori avec prix unique de 327¥ par brochette.',
        popularity: 'Très populaire',
        avgPrice: '327¥/brochette'
    },
    {
        slug: 'tsunahachi',
        name: 'Tsunahachi',
        nameJp: 'つな八',
        category: 'Tempura',
        description: 'Tempura traditionnelle de qualité supérieure depuis 1923.',
        popularity: 'Modéré',
        avgPrice: '1500-3000¥'
    },
    {
        slug: 'watami',
        name: 'Watami',
        nameJp: 'ワタミ',
        category: 'Izakaya',
        description: 'Grande chaîne d\'izakaya avec formules à volonté et ambiance conviviale.',
        popularity: 'Populaire',
        avgPrice: '2500-4000¥'
    },
    {
        slug: 'yayoiken',
        name: 'Yayoiken',
        nameJp: 'やよい軒',
        category: 'Teishoku',
        description: 'Teishoku populaire avec riz illimité gratuit et prix abordables pour tous.',
        popularity: 'Populaire',
        avgPrice: '450-850¥'
    },
    {
        slug: 'yoshinoya',
        name: 'Yoshinoya',
        nameJp: '吉野家',
        category: 'Gyudon',
        description: 'Pionnier du gyudon depuis 1899, ouvert 24h/24 dans tout le Japon.',
        popularity: 'Très populaire',
        avgPrice: '300-600¥',
        bgImage: '/images/chaines/yoshinoya/gyudaku-gyudon-kimuchi-set.jpg'
    },
    {
        slug: 'yudetaro',
        name: 'Yudetaro',
        nameJp: 'ゆで太郎',
        category: 'Soba',
        description: 'Chaîne moderne de soba proposant des nouilles artisanales à prix abordables avec service rapide.',
        popularity: 'Populaire',
        avgPrice: '300-600¥'
    }
];

export const chainCategories = [
    'Tous',
    'Café',
    'Champon/Ramen',
    'Cuisine Chinoise',
    'Curry',
    'Fast Food',
    'Gyudon',
    'Hamburgers',
    'Italien',
    'Izakaya',
    'Karaoke',
    'Okonomiyaki',
    'Ramen',
    'Restaurant Familial',
    'Soba',
    'Steak',
    'Street Food',
    'Sushi',
    'Teishoku',
    'Tempura',
    'Udon',
    'Yakitori',
    'Yakiniku'
];
