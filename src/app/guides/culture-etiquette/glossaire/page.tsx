import Link from 'next/link';
import { BookOpen, Search, Filter, Volume2, Star } from 'lucide-react';
import { useState } from 'react';

export default function GlossairePage() {
  const categories = [
    {
      name: 'Plats Principaux',
      color: 'bg-red-500',
      terms: [
        { jp: 'ご飯', romaji: 'gohan', fr: 'riz cuit', note: 'Base de l\'alimentation japonaise' },
        { jp: '丼', romaji: 'donburi/don', fr: 'bol de riz garni', note: 'Plat complet très populaire' },
        { jp: 'ラーメン', romaji: 'ramen', fr: 'nouilles en soupe', note: 'Soupe chaude avec nouilles' },
        { jp: 'うどん', romaji: 'udon', fr: 'nouilles épaisses', note: 'Nouilles de blé blanches' },
        { jp: 'そば', romaji: 'soba', fr: 'nouilles de sarrasin', note: 'Nouilles grises, goût de noisette' },
        { jp: '寿司', romaji: 'sushi', fr: 'sushi', note: 'Riz vinaigré avec poisson' },
        { jp: '刺身', romaji: 'sashimi', fr: 'sashimi', note: 'Poisson cru sans riz' },        { jp: '天ぷら', romaji: 'tempura', fr: 'tempura', note: 'Friture légère japonaise' },
        { jp: 'カレー', romaji: 'karē', fr: 'curry japonais', note: 'Version douce et sucrée' },
        { jp: '定食', romaji: 'teishoku', fr: 'menu complet', note: 'Repas équilibré traditionnel' },
        { jp: 'おかず', romaji: 'okazu', fr: 'accompagnement', note: 'Plat qui accompagne le riz' },
        { jp: 'オムライス', romaji: 'omuraisu', fr: 'riz à l\'omelette', note: 'Riz frit enveloppé d\'œuf' },
        { jp: 'ハンバーグ', romaji: 'hanbāgu', fr: 'steak haché', note: 'Hamburger sans pain' },
        { jp: 'エビフライ', romaji: 'ebi furai', fr: 'crevette frite', note: 'Crevette panée' },
        { jp: 'とんかつ', romaji: 'tonkatsu', fr: 'côtelette panée', note: 'Porc pané japonais' },
        { jp: 'から揚げ', romaji: 'karaage', fr: 'friture japonaise', note: 'Poulet frit croustillant' },
        { jp: 'コロッケ', romaji: 'korokke', fr: 'croquette', note: 'Croquette de pomme de terre' },
        { jp: 'グラタン', romaji: 'guratan', fr: 'gratin', note: 'Gratin à la japonaise' },
        { jp: 'パスタ', romaji: 'pasuta', fr: 'pâtes', note: 'Pâtes style japonais' }
      ]
    },
    {
      name: 'Viandes & Poissons',
      color: 'bg-orange-500',
      terms: [
        { jp: '牛肉', romaji: 'gyūniku', fr: 'bœuf', note: 'Viande de qualité supérieure' },
        { jp: '豚肉', romaji: 'butaniku', fr: 'porc', note: 'Très utilisé dans la cuisine japonaise' },
        { jp: '鶏肉', romaji: 'toriniku', fr: 'poulet', note: 'Préparé de multiples façons' },
        { jp: '魚', romaji: 'sakana', fr: 'poisson', note: 'Élément central de l\'alimentation' },
        { jp: 'まぐろ', romaji: 'maguro', fr: 'thon', note: 'Poisson très prisé pour sushi' },
        { jp: 'サーモン', romaji: 'sāmon', fr: 'saumon', note: 'Popular dans les chaînes' },
        { jp: 'えび', romaji: 'ebi', fr: 'crevette', note: 'Souvent en tempura' },
        { jp: 'かに', romaji: 'kani', fr: 'crabe', note: 'Ingrédient de luxe' },        { jp: 'いか', romaji: 'ika', fr: 'calmar', note: 'Texture unique appréciée' },
        { jp: 'たこ', romaji: 'tako', fr: 'poulpe', note: 'Spécialité d\'Osaka' },
        { jp: 'うなぎ', romaji: 'unagi', fr: 'anguille d\'eau douce', note: 'Grillée avec sauce sucrée' },
        { jp: 'あなご', romaji: 'anago', fr: 'anguille de mer', note: 'Plus douce que unagi' },
        { jp: 'ぶり', romaji: 'buri', fr: 'sériole', note: 'Poisson d\'hiver savoureux' },
        { jp: 'あじ', romaji: 'aji', fr: 'chinchard', note: 'Poisson populaire frit' },
        { jp: 'さば', romaji: 'saba', fr: 'maquereau', note: 'Riche en oméga-3' },
        { jp: 'いわし', romaji: 'iwashi', fr: 'sardine', note: 'Petit poisson nutritif' },
        { jp: 'ほたて', romaji: 'hotate', fr: 'coquille Saint-Jacques', note: 'Mollusque délicat' },
        { jp: 'あさり', romaji: 'asari', fr: 'palourde', note: 'Pour soupes et pâtes' },
        { jp: 'はまぐり', romaji: 'hamaguri', fr: 'praire', note: 'Coquillage festif' },
        { jp: 'あわび', romaji: 'awabi', fr: 'ormeau', note: 'Mollusque de luxe' }
      ]
    },
    {
      name: 'Légumes & Accompagnements',
      color: 'bg-green-500',
      terms: [
        { jp: '野菜', romaji: 'yasai', fr: 'légumes', note: 'Souvent marinés ou sautés' },
        { jp: 'キャベツ', romaji: 'kyabetsu', fr: 'chou', note: 'Accompagnement très courant' },
        { jp: 'もやし', romaji: 'moyashi', fr: 'pousses de soja', note: 'Croquant et rafraîchissant' },
        { jp: 'にんじん', romaji: 'ninjin', fr: 'carotte', note: 'Souvent sculptée artistiquement' },
        { jp: 'たまねぎ', romaji: 'tamanegi', fr: 'oignon', note: 'Base de nombreux plats' },
        { jp: 'ねぎ', romaji: 'negi', fr: 'oignon vert', note: 'Garniture essentielle' },
        { jp: 'きのこ', romaji: 'kinoko', fr: 'champignons', note: 'Variétés japonaises uniques' },
        { jp: '豆腐', romaji: 'tōfu', fr: 'tofu', note: 'Protéine végétale traditionnelle' },        { jp: '海苔', romaji: 'nori', fr: 'algue séchée', note: 'Enrobage pour sushi' },
        { jp: 'わかめ', romaji: 'wakame', fr: 'algue wakame', note: 'Dans les soupes miso' },
        { jp: 'ごぼう', romaji: 'gobō', fr: 'bardane', note: 'Racine au goût de terre' },
        { jp: 'れんこん', romaji: 'renkon', fr: 'racine de lotus', note: 'Texture croquante unique' },
        { jp: 'だいこん', romaji: 'daikon', fr: 'radis blanc', note: 'Légume-racine polyvalent' },
        { jp: 'かぼちゃ', romaji: 'kabocha', fr: 'potiron japonais', note: 'Plus sucré que occidental' },
        { jp: 'なす', romaji: 'nasu', fr: 'aubergine', note: 'Absorbe bien les saveurs' },
        { jp: 'ピーマン', romaji: 'pīman', fr: 'poivron vert', note: 'Légèrement amer' },
        { jp: 'トマト', romaji: 'tomato', fr: 'tomate', note: 'Utilisée dans cuisine moderne' },
        { jp: 'きゅうり', romaji: 'kyūri', fr: 'concombre', note: 'Souvent en pickles' },
        { jp: 'レタス', romaji: 'retasu', fr: 'laitue', note: 'Salade verte' },
        { jp: 'ほうれん草', romaji: 'hōrensō', fr: 'épinards', note: 'Riche en fer' }
      ]
    },
    {
      name: 'Sauces & Assaisonnements',
      color: 'bg-blue-500',
      terms: [
        { jp: '醤油', romaji: 'shōyu', fr: 'sauce soja', note: 'Condiment de base japonais' },
        { jp: '味噌', romaji: 'miso', fr: 'pâte de soja fermentée', note: 'Umami intense et complexe' },
        { jp: 'みりん', romaji: 'mirin', fr: 'saké de cuisine sucré', note: 'Apporte brillance et douceur' },
        { jp: '酢', romaji: 'su', fr: 'vinaigre de riz', note: 'Plus doux que le vinaigre occidental' },
        { jp: 'だし', romaji: 'dashi', fr: 'bouillon japonais', note: 'Base umami fondamentale' },
        { jp: 'わさび', romaji: 'wasabi', fr: 'raifort japonais', note: 'Piquant distinctif' },
        { jp: '生姜', romaji: 'shōga', fr: 'gingembre', note: 'Fraîcheur et digestion' },        { jp: 'ごま', romaji: 'goma', fr: 'sésame', note: 'Graines ou huile aromatique' },
        { jp: 'マヨネーズ', romaji: 'mayonēzu', fr: 'mayonnaise japonaise', note: 'Plus douce et crémeuse' },
        { jp: 'ソース', romaji: 'sōsu', fr: 'sauce (style occidental)', note: 'Sauce brune épaisse' },
        { jp: 'ケチャップ', romaji: 'kechappu', fr: 'ketchup', note: 'Souvent avec omurice' },
        { jp: '塩', romaji: 'shio', fr: 'sel', note: 'Condiment de base universel' },
        { jp: '砂糖', romaji: 'satō', fr: 'sucre', note: 'Adoucit les sauces' },
        { jp: 'にんにく', romaji: 'ninniku', fr: 'ail', note: 'Aromatise les plats' },
        { jp: '七味', romaji: 'shichimi', fr: 'mélange 7 épices', note: 'Piquant et parfumé' },
        { jp: 'のり', romaji: 'nori', fr: 'sauce algue', note: 'Condiment salé-sucré' },
        { jp: 'ポン酢', romaji: 'ponzu', fr: 'sauce ponzu', note: 'Vinaigre citronné' }
      ]
    },
    {
      name: 'Boissons',
      color: 'bg-purple-500',
      terms: [
        { jp: 'お茶', romaji: 'ocha', fr: 'thé', note: 'Thé vert généralement' },
        { jp: '緑茶', romaji: 'ryokucha', fr: 'thé vert', note: 'Thé traditionnel japonais' },
        { jp: 'ウーロン茶', romaji: 'ūroncha', fr: 'thé oolong', note: 'Thé semi-fermenté' },
        { jp: 'コーヒー', romaji: 'kōhī', fr: 'café', note: 'De plus en plus populaire' },
        { jp: '水', romaji: 'mizu', fr: 'eau', note: 'Gratuite dans tous les restaurants' },
        { jp: 'ビール', romaji: 'bīru', fr: 'bière', note: 'Accompagne bien la cuisine japonaise' },
        { jp: '日本酒', romaji: 'nihonshu', fr: 'saké', note: 'Alcool de riz traditionnel' },
        { jp: 'ジュース', romaji: 'jūsu', fr: 'jus de fruits', note: 'Souvent en distributeur' },        { jp: 'ソフトドリンク', romaji: 'sofuto dorinku', fr: 'boisson gazeuse', note: 'Soda, limonade' },
        { jp: '麦茶', romaji: 'mugicha', fr: 'thé d\'orge', note: 'Rafraîchissant en été' },
        { jp: 'ほうじ茶', romaji: 'hōjicha', fr: 'thé grillé', note: 'Goût torréfié unique' },
        { jp: '抹茶', romaji: 'matcha', fr: 'thé vert en poudre', note: 'Cérémonie du thé' },
        { jp: '焼酎', romaji: 'shōchū', fr: 'alcool de patate douce', note: 'Spiritueux japonais' },
        { jp: 'チューハイ', romaji: 'chūhai', fr: 'cocktail shochu', note: 'Boisson alcoolisée fruitée' },
        { jp: 'ハイボール', romaji: 'haibōru', fr: 'whisky-soda', note: 'Whisky japonais avec soda' },
        { jp: 'カルピス', romaji: 'karupisu', fr: 'boisson lactée', note: 'Goût acidulé rafraîchissant' },
        { jp: 'ラムネ', romaji: 'ramune', fr: 'limonade japonaise', note: 'Bouteille à bille' },
        { jp: 'お冷', romaji: 'ohiya', fr: 'eau froide', note: 'Eau glacée gratuite' }
      ]
    },
    {
      name: 'Méthodes de Cuisson',
      color: 'bg-pink-500',
      terms: [
        { jp: '焼き', romaji: 'yaki', fr: 'grillé', note: 'Cuisson à la plancha ou grill' },
        { jp: '揚げ', romaji: 'age', fr: 'frit', note: 'Friture à l\'huile chaude' },
        { jp: '煮', romaji: 'ni', fr: 'mijoté', note: 'Cuisson lente en sauce' },
        { jp: '蒸し', romaji: 'mushi', fr: 'cuit à la vapeur', note: 'Méthode saine préservant les nutriments' },
        { jp: '生', romaji: 'nama', fr: 'cru', note: 'Non cuit, frais' },
        { jp: '茹で', romaji: 'yude', fr: 'bouilli', note: 'Cuit dans l\'eau bouillante' },
        { jp: '炒め', romaji: 'itame', fr: 'sauté', note: 'Cuisson rapide à feu vif' },
        { jp: '漬け', romaji: 'tsuke', fr: 'mariné', note: 'Macéré dans une sauce' },        { jp: '燻製', romaji: 'kunsei', fr: 'fumé', note: 'Aromatisé par la fumée' },
        { jp: '刺身', romaji: 'sashimi', fr: 'tranché cru', note: 'Technique de découpe précise' },
        { jp: '炙り', romaji: 'aburi', fr: 'grillé surface', note: 'Brûlé légèrement en surface' },
        { jp: '漬け込み', romaji: 'tsukekami', fr: 'marinade longue', note: 'Trempage prolongé' },
        { jp: '下茹で', romaji: 'shitayude', fr: 'blanchir', note: 'Cuisson préliminaire' },
        { jp: '炊く', romaji: 'taku', fr: 'cuire le riz', note: 'Cuisson spécifique du riz' },
        { jp: '和える', romaji: 'aeru', fr: 'mélanger', note: 'Mélanger délicatement' },
        { jp: '裏ごし', romaji: 'uragoshi', fr: 'passer au tamis', note: 'Filtrer finement' },
        { jp: '削る', romaji: 'kezuru', fr: 'râper', note: 'Râper finement (bonite)' },        { jp: '叩く', romaji: 'tataku', fr: 'hacher', note: 'Hacher grossièrement' }
      ]
    },
    {
      name: 'Riz & Nouilles',
      color: 'bg-yellow-500',
      terms: [
        { jp: '白米', romaji: 'hakumai', fr: 'riz blanc', note: 'Riz poli standard' },
        { jp: '玄米', romaji: 'genmai', fr: 'riz complet', note: 'Riz non poli, plus nutritif' },
        { jp: 'もち米', romaji: 'mochigome', fr: 'riz gluant', note: 'Pour les mochi et desserts' },
        { jp: '酢飯', romaji: 'sumeshi', fr: 'riz vinaigré', note: 'Base des sushi' },
        { jp: 'おにぎり', romaji: 'onigiri', fr: 'boulette de riz', note: 'En-cas populaire' },
        { jp: 'チャーハン', romaji: 'chāhan', fr: 'riz sauté', note: 'Riz frit à la chinoise' },
        { jp: 'そうめん', romaji: 'sōmen', fr: 'nouilles fines', note: 'Nouilles d\'été très fines' },
        { jp: 'ひやむぎ', romaji: 'hiyamugi', fr: 'nouilles moyennes', note: 'Plus épaisses que sōmen' },
        { jp: 'きしめん', romaji: 'kishimen', fr: 'nouilles plates', note: 'Spécialité de Nagoya' },
        { jp: 'やきそば', romaji: 'yakisoba', fr: 'nouilles sautées', note: 'Nouilles frites aux légumes' },
        { jp: 'つけ麺', romaji: 'tsukemen', fr: 'ramen trempé', note: 'Nouilles à tremper' },
        { jp: 'インスタント', romaji: 'insutanto', fr: 'instantané', note: 'Nouilles instantanées' }
      ]
    },
    {
      name: 'Soupes & Bouillons',
      color: 'bg-indigo-500',
      terms: [
        { jp: '味噌汁', romaji: 'misoshiru', fr: 'soupe miso', note: 'Soupe traditionnelle quotidienne' },
        { jp: 'すまし汁', romaji: 'sumashijiru', fr: 'bouillon clair', note: 'Bouillon délicat transparent' },
        { jp: 'とん汁', romaji: 'tonjiru', fr: 'soupe porc-miso', note: 'Soupe miso avec porc' },
        { jp: 'けんちん汁', romaji: 'kenchinjiru', fr: 'soupe légumes', note: 'Soupe végétarienne bouddhiste' },
        { jp: 'お吸い物', romaji: 'osuimono', fr: 'consommé', note: 'Bouillon léger raffiné' },
        { jp: 'ちゃんこ鍋', romaji: 'chanko nabe', fr: 'pot-au-feu sumo', note: 'Pot-au-feu des lutteurs' },
        { jp: 'しゃぶしゃぶ', romaji: 'shabu-shabu', fr: 'fondue japonaise', note: 'Viande trempée dans bouillon' },
        { jp: 'すき焼き', romaji: 'sukiyaki', fr: 'sukiyaki', note: 'Bœuf mijoté sucré-salé' },
        { jp: 'もつ鍋', romaji: 'motsunabe', fr: 'pot-au-feu abats', note: 'Spécialité de Kyushu' },
        { jp: 'ちりとり鍋', romaji: 'chiritori nabe', fr: 'hot pot carré', note: 'Pot-au-feu en forme pelle' },
        { jp: '水炊き', romaji: 'mizutaki', fr: 'bouillon poulet', note: 'Bouillon de poule simple' },
        { jp: 'キムチ鍋', romaji: 'kimuchi nabe', fr: 'pot-au-feu kimchi', note: 'Influence coréenne' }
      ]
    },
    {
      name: 'Desserts & Sucreries',
      color: 'bg-rose-500',
      terms: [
        { jp: '餅', romaji: 'mochi', fr: 'gâteau de riz', note: 'Pâte de riz gluant' },
        { jp: 'だんご', romaji: 'dango', fr: 'boulettes sucrées', note: 'Brochettes de boulettes' },
        { jp: 'どら焼き', romaji: 'dorayaki', fr: 'pancake fourré', note: 'Deux crêpes avec pâte azuki' },
        { jp: 'たい焼き', romaji: 'taiyaki', fr: 'gaufre poisson', note: 'En forme de poisson' },
        { jp: '大福', romaji: 'daifuku', fr: 'mochi fourré', note: 'Mochi avec garniture sucrée' },
        { jp: 'かき氷', romaji: 'kakigōri', fr: 'glace pilée', note: 'Dessert d\'été rafraîchissant' },
        { jp: 'ソフトクリーム', romaji: 'sofuto kurīmu', fr: 'glace à l\'italienne', note: 'Très populaire au Japon' },
        { jp: 'パフェ', romaji: 'pafe', fr: 'parfait', note: 'Dessert en coupe élaboré' },
        { jp: 'プリン', romaji: 'purin', fr: 'flan', note: 'Crème caramel japonaise' },
        { jp: 'カステラ', romaji: 'kasutera', fr: 'gâteau éponge', note: 'Gâteau portugais adapté' },
        { jp: 'アイス', romaji: 'aisu', fr: 'glace', note: 'Crème glacée' },
        { jp: 'あんみつ', romaji: 'anmitsu', fr: 'salade de fruits sucrée', note: 'Gelée, fruits et pâte azuki' }
      ]
    },
    {
      name: 'Ustensiles & Vaisselle',
      color: 'bg-gray-500',
      terms: [
        { jp: '箸', romaji: 'hashi', fr: 'baguettes', note: 'Ustensiles traditionnels' },
        { jp: 'お椀', romaji: 'owan', fr: 'bol à soupe', note: 'Bol laqué traditionnel' },
        { jp: '茶碗', romaji: 'chawan', fr: 'bol à riz', note: 'Petit bol pour le riz' },
        { jp: '皿', romaji: 'sara', fr: 'assiette', note: 'Assiette plate' },
        { jp: 'どんぶり', romaji: 'donburi', fr: 'grand bol', note: 'Bol profond pour don' },
        { jp: '湯呑み', romaji: 'yunomi', fr: 'tasse à thé', note: 'Tasse sans anse' },
        { jp: 'おしぼり', romaji: 'oshibori', fr: 'serviette humide', note: 'Pour se nettoyer les mains' },
        { jp: 'れんげ', romaji: 'renge', fr: 'cuillère chinoise', note: 'Cuillère en porcelaine' },
        { jp: 'フォーク', romaji: 'fōku', fr: 'fourchette', note: 'Ustensile occidental' },
        { jp: 'ナイフ', romaji: 'naifu', fr: 'couteau', note: 'Rarement utilisé' },
        { jp: 'スプーン', romaji: 'supūn', fr: 'cuillère', note: 'Pour curry et desserts' },
        { jp: 'とっくり', romaji: 'tokkuri', fr: 'carafe à saké', note: 'Récipient traditionnel' }
      ]
    },
    {
      name: 'Types de Restaurants',
      color: 'bg-teal-500',
      terms: [
        { jp: '回転寿司', romaji: 'kaiten-zushi', fr: 'sushi tournant', note: 'Sushi sur tapis roulant' },
        { jp: '居酒屋', romaji: 'izakaya', fr: 'bistrot japonais', note: 'Bar-restaurant décontracté' },
        { jp: '焼き鳥屋', romaji: 'yakitoriya', fr: 'grill yakitori', note: 'Spécialisé en brochettes' },
        { jp: 'ラーメン屋', romaji: 'rāmenya', fr: 'restaurant ramen', note: 'Spécialisé en nouilles' },
        { jp: '定食屋', romaji: 'teishokuya', fr: 'restaurant de menu', note: 'Repas complets équilibrés' },
        { jp: 'そば屋', romaji: 'sobaya', fr: 'restaurant soba', note: 'Spécialisé en sarrasin' },
        { jp: 'うどん屋', romaji: 'udonya', fr: 'restaurant udon', note: 'Spécialisé en udon' },
        { jp: '丼物屋', romaji: 'donmonoya', fr: 'restaurant donburi', note: 'Bols de riz garnis' },
        { jp: 'カレー屋', romaji: 'karēya', fr: 'restaurant curry', note: 'Spécialisé en curry' },
        { jp: 'ファミレス', romaji: 'famiresu', fr: 'restaurant familial', note: 'Chaîne familiale' },
        { jp: 'ファーストフード', romaji: 'fāsuto fūdo', fr: 'fast-food', note: 'Restauration rapide' },
        { jp: '弁当屋', romaji: 'bentōya', fr: 'magasin bento', note: 'Plats à emporter' }
      ]
    },
    {
      name: 'Quantités & Portions',
      color: 'bg-amber-500',
      terms: [
        { jp: '一人前', romaji: 'ichininmae', fr: 'une portion', note: 'Quantité standard' },
        { jp: '大盛り', romaji: 'ōmori', fr: 'grande portion', note: 'Portion augmentée' },
        { jp: '小盛り', romaji: 'komori', fr: 'petite portion', note: 'Portion réduite' },
        { jp: '特盛り', romaji: 'tokumori', fr: 'portion géante', note: 'Très grosse portion' },
        { jp: '半分', romaji: 'hanbun', fr: 'moitié', note: 'Demi-portion' },
        { jp: '倍', romaji: 'bai', fr: 'double', note: 'Portion doublée' },
        { jp: '追加', romaji: 'tsuika', fr: 'supplément', note: 'En plus' },
        { jp: 'おかわり', romaji: 'okawari', fr: 'resservi', note: 'Deuxième portion' },
        { jp: '食べ放題', romaji: 'tabehōdai', fr: 'à volonté', note: 'Buffet illimité' },
        { jp: '飲み放題', romaji: 'nomihōdai', fr: 'boissons illimitées', note: 'Open bar' },
        { jp: 'セット', romaji: 'setto', fr: 'menu', note: 'Formule complète' },
        { jp: '単品', romaji: 'tanpin', fr: 'à la carte', note: 'Plat individuel' }
      ]
    }
  ];

  const restaurantTerms = [
    { jp: 'いらっしゃいませ', romaji: 'irasshaimase', fr: 'bienvenue', note: 'Salutation du personnel' },
    { jp: 'ありがとうございました', romaji: 'arigatō gozaimashita', fr: 'merci beaucoup', note: 'Au départ du restaurant' },
    { jp: 'すみません', romaji: 'sumimasen', fr: 'excusez-moi', note: 'Pour appeler le serveur' },
    { jp: 'お会計', romaji: 'okaikei', fr: 'addition', note: 'Demander à payer' },
    { jp: 'メニュー', romaji: 'menyū', fr: 'menu', note: 'Carte des plats' },
    { jp: '注文', romaji: 'chūmon', fr: 'commande', note: 'Passer commande' },
    { jp: '一人前', romaji: 'ichininmae', fr: 'une portion', note: 'Quantité pour une personne' },    { jp: '大盛り', romaji: 'ōmori', fr: 'grande portion', note: 'Portion XL' },
    { jp: '持ち帰り', romaji: 'mochikaeri', fr: 'à emporter', note: 'Take away' },
    { jp: '食べ放題', romaji: 'tabehōdai', fr: 'à volonté', note: 'Buffet illimité' },
    { jp: '席', romaji: 'seki', fr: 'siège/place', note: 'Demander une place' },
    { jp: '予約', romaji: 'yoyaku', fr: 'réservation', note: 'Réserver une table' },
    { jp: '個室', romaji: 'koshitsu', fr: 'salon privé', note: 'Salle privée' },
    { jp: 'カウンター', romaji: 'kauntā', fr: 'comptoir', note: 'Place au bar' },
    { jp: 'テーブル', romaji: 'tēburu', fr: 'table', note: 'Table standard' },
    { jp: '座敷', romaji: 'zashiki', fr: 'tatami', note: 'Salle japonaise traditionnelle' },
    { jp: '禁煙', romaji: 'kin\'en', fr: 'non-fumeur', note: 'Zone sans tabac' },
    { jp: '喫煙', romaji: 'kitsuen', fr: 'fumeur', note: 'Zone fumeur' },
    { jp: 'お箸', romaji: 'ohashi', fr: 'baguettes', note: 'Demander des baguettes' },
    { jp: 'フォーク', romaji: 'fōku', fr: 'fourchette', note: 'Ustensile occidental' },
    { jp: 'おかわり', romaji: 'okawari', fr: 'resservi', note: 'Redemander' },
    { jp: 'ごちそうさま', romaji: 'gochisōsama', fr: 'merci pour le repas', note: 'Après avoir mangé' },
    { jp: 'レシート', romaji: 'reshīto', fr: 'reçu', note: 'Ticket de caisse' },
    { jp: '現金', romaji: 'genkin', fr: 'espèces', note: 'Paiement en liquide' },
    { jp: 'カード', romaji: 'kādo', fr: 'carte', note: 'Carte de crédit' },
    { jp: 'お釣り', romaji: 'otsuri', fr: 'monnaie', note: 'Rendu de monnaie' },
    { jp: '割り勘', romaji: 'warikan', fr: 'partager l\'addition', note: 'Payer chacun sa part' }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides/culture-etiquette" className="text-gray-500 hover:text-red-600">Culture & Étiquette</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Glossaire</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Glossaire Culinaire Japonais
            </h1>            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Plus de 320 termes essentiels pour comprendre les menus et commander en toute confiance. 
              Avec prononciation, traduction et conseils culturels.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              日本料理用語集
            </div>
          </div>
        </div>
      </div>

      {/* Search Note */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-4">
            <Search className="w-5 h-5 text-blue-600" />
            <p className="text-blue-800">
              Utilisez <kbd className="bg-white px-2 py-1 rounded border">Ctrl+F</kbd> pour rechercher un terme spécifique
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className={`${category.color} w-6 h-6 rounded mr-4`}></div>
              <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              <div className="ml-4 bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">
                {category.terms.length} termes
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.terms.map((term, termIndex) => (
                <div key={termIndex} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="japanese-text text-xl font-bold text-gray-900 mb-1">
                        {term.jp}
                      </div>
                      <div className="text-sm text-gray-600 italic mb-1">
                        {term.romaji}
                      </div>
                      <div className="font-medium text-gray-900">
                        {term.fr}
                      </div>
                    </div>
                    <Volume2 className="w-4 h-4 text-gray-400 cursor-pointer hover:text-blue-600" />
                  </div>
                  
                  {term.note && (
                    <div className="mt-3 p-2 bg-gray-50 rounded text-xs text-gray-700">
                      💡 {term.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant Terms */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Expressions Utiles au Restaurant
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="font-bold text-gray-900">{term.fr}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="japanese-text text-lg text-gray-800">
                    {term.jp}
                  </div>
                  <div className="italic text-gray-600">
                    {term.romaji}
                  </div>
                  <div className="text-sm text-gray-700 bg-yellow-50 p-2 rounded">
                    {term.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-blue-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Conseils pour utiliser ce glossaire
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Sur mobile</h3>
              <p className="text-sm text-gray-600">
                Enregistrez cette page en favori pour y accéder rapidement au restaurant
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">👆</div>
              <h3 className="font-bold text-gray-900 mb-2">Montrer du doigt</h3>
              <p className="text-sm text-gray-600">
                N'hésitez pas à montrer les caractères japonais au personnel
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">🔊</div>
              <h3 className="font-bold text-gray-900 mb-2">Prononciation</h3>
              <p className="text-sm text-gray-600">
                Utilisez le romaji pour vous faire comprendre oralement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à commander comme un local ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Avec ce vocabulaire, vous pourrez comprendre la plupart des menus 
              et communiquer vos préférences au personnel.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/guides/culture-etiquette/bonnes-manieres"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Apprendre l'étiquette
            </Link>
            <Link
              href="/guides/comment-commander"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
            >
              Guide de commande
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
