export interface FoodType {
    id: string;
    name: string;
    japanese: string;
    description: string;
    detailedDescription: string;
    chains: string[];
    color: string;
    icon: string;
    bgImage?: string;
}

export const foodTypes: FoodType[] = [
    {
        id: "gyudon",
        name: "Gyūdon",
        japanese: "牛丼",
        description: "Bols de riz garnis de lamelles de bœuf mijotées dans une sauce sucrée-salée",
        detailedDescription: "Les gyūdon sont des bols de riz blanc surmontés de fines lamelles de bœuf cuites dans un bouillon doux à base de sauce soja, mirin et sucre. C'est un plat rapide, économique et nourrissant, très populaire au Japon.",
        chains: ["Yoshinoya", "Sukiya", "Matsuya"],
        color: "bg-red-500",
        icon: "🥩",
        bgImage: "/images/chaines/yoshinoya/gyudaku-gyudon-kimuchi-set.jpg"
    },
    {
        id: "ramen",
        name: "Ramen",
        japanese: "ラーメン",
        description: "Nouilles japonaises servies dans un bouillon riche avec divers garnitures",
        detailedDescription: "Les ramen sont des nouilles de blé servies dans un bouillon chaud, garnis de porc, légumes, œufs et autres ingrédients. Chaque région et chaîne a ses propres variations de bouillon et garnitures.",
        chains: ["Ichiran", "Ippudo", "Tenkaippin"],
        color: "bg-orange-500",
        icon: "🍜",
        bgImage: "/images/chaines/ippudo/shiromaru-motoaji.jpg"
    },
    {
        id: "aburasoba",
        name: "Abura Soba",
        japanese: "油そば",
        description: "Nouilles sans bouillon, mélangées à une sauce concentrée et huile parfumée",
        detailedDescription: "L'abura soba est une spécialité de Tokyo née dans les années 1950. Paradoxalement plus sain qu'un ramen classique, ce plat transforme le mangeur en chef cuisinier qui mélange lui-même les ingrédients.",
        chains: ["Tokyo Abura-gumi", "Ganso Aburado"],
        color: "bg-amber-500",
        icon: "🍜"
    },
    {
        id: "kaiten-zushi",
        name: "Kaiten-zushi",
        japanese: "回転寿司",
        description: "Sushi servi sur un tapis roulant, accessible et abordable",
        detailedDescription: "Les restaurants de kaiten-zushi proposent des sushi sur un tapis roulant. Les clients prennent les assiettes qui les intéressent. Le prix est généralement déterminé par la couleur de l'assiette.",
        chains: ["Sushiro", "Kura Sushi", "Hama Sushi"],
        color: "bg-blue-500",
        icon: "🍣",
        bgImage: "/images/chaines/sushiro/maguro.jpg"
    },
    {
        id: "curry",
        name: "Curry Japonais",
        japanese: "カレー",
        description: "Version japonaise du curry, plus douce et épaisse que l'original indien",
        detailedDescription: "Le curry japonais est plus doux et plus épais que le curry indien, souvent servi avec du riz blanc et accompagné de légumes, viande ou fruits de mer. C'est un comfort food très apprécié.",
        chains: ["CoCo壱番屋", "Go!Go!Curry"],
        color: "bg-yellow-500",
        icon: "🍛",
        bgImage: "/images/chaines/cocoichi/cocoichi-curry.jpg"
    },
    {
        id: "tempura",
        name: "Tempura / Tendon",
        japanese: "天ぷら・天丼",
        description: "Beignets japonais légers et croustillants, souvent servis sur riz",
        detailedDescription: "La tempura consiste en des légumes ou fruits de mer enrobés d'une pâte légère puis frits. Les tendon sont des bols de riz surmontés de tempura avec une sauce sucrée-salée.",
        chains: ["Tenya", "Tsunahachi"],
        color: "bg-green-500",
        icon: "🍤"
    },
    {
        id: "udon",
        name: "Udon",
        japanese: "うどん",
        description: "Nouilles japonaises épaisses et moelleuses dans un bouillon savoureux",
        detailedDescription: "L'udon sont des nouilles de blé épaisses et souples, servies chaudes dans un bouillon dashi parfumé ou froides avec une sauce à tremper. Originaires du sud du Japon, elles offrent une expérience réconfortante et authentique.",
        chains: ["Marugame Seimen", "Hanamaru Udon"],
        color: "bg-orange-500",
        icon: "🍲"
    },
    {
        id: "soba",
        name: "Soba",
        japanese: "そば",
        description: "Nouilles fines de sarrasin, symbole de la tradition culinaire d'Edo",
        detailedDescription: "Les soba sont des nouilles fines de sarrasin au goût subtil et parfumé. Elles incarnent l'élégance d'Edo (Tokyo) et se dégustent chaudes dans un bouillon ou froides avec une sauce tsuyu. Une expérience raffinée et authentique.",
        chains: ["Fuji Soba", "Yudetaro", "Komoro Soba"],
        color: "bg-purple-500",
        icon: "🥢"
    },
    {
        id: "family-restaurants",
        name: "Family Restaurants",
        japanese: "ファミリーレストラン",
        description: "Restaurants familiaux proposant une cuisine variée dans une ambiance décontractée",
        detailedDescription: "Les family restaurants proposent une large gamme de plats occidentaux et japonais dans un cadre familial. Ils sont parfaits pour les groupes avec des goûts variés.",
        chains: ["Saizeriya", "Gusto", "Jonathan's"],
        color: "bg-pink-500",
        icon: "🍽️"
    },
    {
        id: "burgers",
        name: "Burgers Japonais",
        japanese: "日本のハンバーガー",
        description: "Hamburgers à la japonaise avec des ingrédients et saveurs uniques",
        detailedDescription: "Les chaînes de hamburgers japonaises proposent des créations uniques mélangeant influences occidentales et goûts japonais, avec des ingrédients comme le riz, la sauce teriyaki, ou le wasabi.",
        chains: ["MOS Burger", "Freshness Burger"],
        color: "bg-indigo-500",
        icon: "🍔"
    },
    {
        id: "cuisine-chinoise",
        name: "Cuisine Chinoise",
        japanese: "中華料理",
        description: "Plats chinois adaptés au goût japonais, abordables et savoureux",
        detailedDescription: "Ces chaînes proposent des plats chinois adaptés au palais japonais, souvent plus doux que les versions originales. Les gyoza, ramen chinois et riz sautés sont populaires.",
        chains: ["Bamiyan", "Ohsho", "Gyoza no Ohsho"],
        color: "bg-red-600",
        icon: "🥟"
    },
    {
        id: "teishoku",
        name: "Teishoku",
        japanese: "定食",
        description: "Repas complets traditionnels avec riz, soupe et accompagnements",
        detailedDescription: "Les teishoku sont des repas équilibrés composés d'un plat principal, de riz, de soupe miso et de petits accompagnements (tsukemono). C'est l'essence de la cuisine familiale japonaise, nutritive et authentique.",
        chains: ["Ootoya", "Yayoiken", "Miyamoto Munashi"],
        color: "bg-green-600",
        icon: "🍱"
    },
    {
        id: "izakaya",
        name: "Izakaya",
        japanese: "居酒屋",
        description: "Bars japonais traditionnels servant des petits plats et de l'alcool",
        detailedDescription: "Les izakaya sont des établissements où l'on boit de l'alcool en grignotant de petits plats variés. L'ambiance est décontractée et conviviale, parfaite pour socialiser.",
        chains: ["Torikizoku", "Shirokiya", "Warawara"],
        color: "bg-amber-600",
        icon: "🍻"
    },
    {
        id: "cafe",
        name: "Café",
        japanese: "カフェ・喫茶店",
        description: "Kissaten et cafés modernes - L'art du temps qui s'arrête",
        detailedDescription: "Les cafés japonais incarnent une philosophie unique où le temps prend une autre dimension. Du kissaten traditionnel aux chaînes modernes, ils offrent bien plus qu'une simple pause café : un véritable art de vivre.",
        chains: ["Komeda Coffee"],
        color: "bg-amber-700",
        icon: "☕"
    },
    {
        id: "okonomiyaki",
        name: "Okonomiyaki",
        japanese: "お好み焼き",
        description: "La 'pizza japonaise' d'Osaka - Invention culinaire révolutionnaire",
        detailedDescription: "L'okonomiyaki, littéralement 'grillé comme vous l'aimez', est l'âme culinaire d'Osaka. Cette galette à base de chou et pâte spéciale, inventée avec mayonnaise et Modan-yaki par les pionniers comme Botejyu, incarne la créativité et convivialité osakienne.",
        chains: ["Botejyu"],
        color: "bg-red-600",
        icon: "🥞"
    },
    {
        id: "street-food",
        name: "Street Food",
        japanese: "屋台・街角グルメ",
        description: "Yatai moderne et takoyaki - L'âme de la rue japonaise",
        detailedDescription: "Des festivals d'été aux coins de rue animés, la street food japonaise transforme chaque bouchée en moment de convivialité authentique, perpétuant une tradition millénaire d'excellence culinaire nomade.",
        chains: ["Gindako"],
        color: "bg-red-600",
        icon: "🥟"
    },
    {
        id: "steak",
        name: "Steak",
        japanese: "ステーキ",
        description: "Steaks premium et innovation culinaire - L'excellence bovine à la japonaise",
        detailedDescription: "Le steak au Japon représente l'union parfaite entre la qualité exceptionnelle du bœuf wagyu et l'innovation dans le service. Des concepts révolutionnaires comme le tachi-gui aux steakhouses traditionnels.",
        chains: ["Ikinari Steak"],
        color: "bg-red-800",
        icon: "🥩"
    },
    {
        id: "yakiniku",
        name: "Yakiniku",
        japanese: "焼肉",
        description: "Art gastronomique du gril - De la culture coréenne à l'excellence japonaise",
        detailedDescription: "Le yakiniku transcende le simple barbecue pour devenir une expérience culinaire raffinée où chaque convive maîtrise la cuisson de morceaux de bœuf premium. Cette tradition issue de la culture coréenne s'est épanouie au Japon pour créer un art unique mêlant convivialité, précision technique et qualité exceptionnelle des viandes wagyu.",
        chains: ["Gyukaku", "Anan"],
        color: "bg-red-700",
        icon: "🔥"
    },
    {
        id: "karaoke",
        name: "Karaoke",
        japanese: "カラオケ",
        description: "Divertissement musical japonais - Culture du chant entre amis",
        detailedDescription: "Le karaoke est né au Japon et fait partie intégrante de la culture sociale japonaise. Dans des salles privées équipées de systèmes audio modernes, c'est l'expérience parfaite pour se détendre et s'amuser entre amis ou collègues.",
        chains: ["Big Echo", "Karaoke Kan"],
        color: "bg-purple-600",
        icon: "🎤"
    }
];

export const implementedFoodTypeIds = [
    'gyudon', 'ramen', 'aburasoba', 'kaiten-zushi', 'curry', 'tempura', 'udon', 'soba',
    'family-restaurants', 'burgers', 'cuisine-chinoise', 'izakaya', 'teishoku', 'cafe',
    'okonomiyaki', 'street-food', 'steak', 'yakiniku', 'karaoke'
];
