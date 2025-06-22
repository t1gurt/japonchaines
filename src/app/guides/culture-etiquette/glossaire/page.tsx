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
        { jp: '刺身', romaji: 'sashimi', fr: 'sashimi', note: 'Poisson cru sans riz' },
        { jp: '天ぷら', romaji: 'tempura', fr: 'tempura', note: 'Friture légère japonaise' },
        { jp: 'カレー', romaji: 'karē', fr: 'curry japonais', note: 'Version douce et sucrée' },
        { jp: '定食', romaji: 'teishoku', fr: 'menu complet', note: 'Repas équilibré traditionnel' }
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
        { jp: 'かに', romaji: 'kani', fr: 'crabe', note: 'Ingrédient de luxe' },
        { jp: 'いか', romaji: 'ika', fr: 'calmar', note: 'Texture unique appréciée' },
        { jp: 'たこ', romaji: 'tako', fr: 'poulpe', note: 'Spécialité d\'Osaka' }
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
        { jp: '豆腐', romaji: 'tōfu', fr: 'tofu', note: 'Protéine végétale traditionnelle' },
        { jp: '海苔', romaji: 'nori', fr: 'algue séchée', note: 'Enrobage pour sushi' },
        { jp: 'わかめ', romaji: 'wakame', fr: 'algue wakame', note: 'Dans les soupes miso' }
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
        { jp: '生姜', romaji: 'shōga', fr: 'gingembre', note: 'Fraîcheur et digestion' },
        { jp: 'ごま', romaji: 'goma', fr: 'sésame', note: 'Graines ou huile aromatique' },
        { jp: 'マヨネーズ', romaji: 'mayonēzu', fr: 'mayonnaise japonaise', note: 'Plus douce et crémeuse' },
        { jp: 'ソース', romaji: 'sōsu', fr: 'sauce (style occidental)', note: 'Sauce brune épaisse' }
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
        { jp: 'ジュース', romaji: 'jūsu', fr: 'jus de fruits', note: 'Souvent en distributeur' },
        { jp: 'ソフトドリンク', romaji: 'sofuto dorinku', fr: 'boisson gazeuse', note: 'Soda, limonade' },
        { jp: '麦茶', romaji: 'mugicha', fr: 'thé d\'orge', note: 'Rafraîchissant en été' }
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
        { jp: '漬け', romaji: 'tsuke', fr: 'mariné', note: 'Macéré dans une sauce' },
        { jp: '燻製', romaji: 'kunsei', fr: 'fumé', note: 'Aromatisé par la fumée' },
        { jp: '刺身', romaji: 'sashimi', fr: 'tranché cru', note: 'Technique de découpe précise' }
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
    { jp: '一人前', romaji: 'ichininmae', fr: 'une portion', note: 'Quantité pour une personne' },
    { jp: '大盛り', romaji: 'ōmori', fr: 'grande portion', note: 'Portion XL' },
    { jp: '持ち帰り', romaji: 'mochikaeri', fr: 'à emporter', note: 'Take away' },
    { jp: '食べ放題', romaji: 'tabehōdai', fr: 'à volonté', note: 'Buffet illimité' }
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
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Plus de 300 termes essentiels pour comprendre les menus et commander en toute confiance. 
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
