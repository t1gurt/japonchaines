import Link from 'next/link';
import { AlertTriangle, CheckCircle, XCircle, Info, Heart, Shield, Phone, Download } from 'lucide-react';

export default function AllergiesPage() {
  const majorAllergens = [
    {
      nameJp: '卵',
      nameFr: 'Œufs',
      nameEn: 'Eggs',
      commonIn: 'Mayonnaise, pâtes, gâteaux, omelettes',
      hiddenIn: 'Sauces crémeuses, certains pains, tempura',
      safeOptions: 'Riz nature, sashimi, légumes grillés',
      severity: 'Élevée'
    },
    {
      nameJp: '乳',
      nameFr: 'Lait',
      nameEn: 'Milk/Dairy',
      commonIn: 'Fromage, beurre, crème glacée, lait',
      hiddenIn: 'Pains, sauces, certains currys',
      safeOptions: 'Cuisine japonaise traditionnelle, soja',
      severity: 'Élevée'
    },
    {
      nameJp: '小麦',
      nameFr: 'Blé',
      nameEn: 'Wheat',
      commonIn: 'Pain, pâtes, udon, tempura',
      hiddenIn: 'Sauce soja, certains misos, épaississants',
      safeOptions: 'Riz, soba (100% sarrasin), sashimi',
      severity: 'Très élevée'
    },
    {
      nameJp: 'そば',
      nameFr: 'Sarrasin',
      nameEn: 'Buckwheat',
      commonIn: 'Nouilles soba, galettes',
      hiddenIn: 'Mélanges de farines, certains pains',
      safeOptions: 'Udon, ramen, riz',
      severity: 'Très élevée'
    },
    {
      nameJp: '落花生',
      nameFr: 'Cacahuètes',
      nameEn: 'Peanuts',
      commonIn: 'Snacks, sauces satay, desserts',
      hiddenIn: 'Huiles de cuisson, sauces épicées',
      safeOptions: 'Cuisine japonaise pure sans influences',
      severity: 'Extrême'
    },
    {
      nameJp: 'えび',
      nameFr: 'Crevettes',
      nameEn: 'Shrimp',
      commonIn: 'Sushi, tempura, salades',
      hiddenIn: 'Bouillons, sauces, certains misos',
      safeOptions: 'Viandes, légumes, riz',
      severity: 'Élevée'
    },
    {
      nameJp: 'かに',
      nameFr: 'Crabe',
      nameEn: 'Crab',
      commonIn: 'Sushi, salades, soupes',
      hiddenIn: 'Bouillons de fruits de mer, sauces',
      safeOptions: 'Viandes, légumes, riz',
      severity: 'Élevée'
    }
  ];

  const emergencyPhrases = [
    {
      french: 'J\'ai une allergie grave',
      japanese: '重いアレルギーがあります',
      romaji: 'Omoi arerugī ga arimasu'
    },
    {
      french: 'Appelez une ambulance',
      japanese: '救急車を呼んでください',
      romaji: 'Kyūkyūsha wo yonde kudasai'
    },
    {
      french: 'J\'ai besoin d\'un médicament',
      japanese: '薬が必要です',
      romaji: 'Kusuri ga hitsuyō desu'
    },
    {
      french: 'Hôpital, s\'il vous plaît',
      japanese: '病院をお願いします',
      romaji: 'Byōin wo onegaishimasu'
    }
  ];

  const allergyPhrases = [
    {
      french: 'Je suis allergique à...',
      japanese: '私は...にアレルギーがあります',
      romaji: 'Watashi wa ... ni arerugī ga arimasu'
    },
    {
      french: 'Y a-t-il [allergène] dans ce plat ?',
      japanese: 'この料理に[アレルゲン]は入っていますか？',
      romaji: 'Kono ryōri ni [arergen] wa haitte imasu ka?'
    },
    {
      french: 'Sans [allergène], s\'il vous plaît',
      japanese: '[アレルゲン]抜きでお願いします',
      romaji: '[Arergen] nuki de onegaishimasu'
    },
    {
      french: 'C\'est très important pour ma santé',
      japanese: '健康のためにとても大切です',
      romaji: 'Kenkō no tame ni totemo taisetsu desu'
    },
    {
      french: 'Pouvez-vous vérifier avec le chef ?',
      japanese: 'シェフに確認していただけますか？',
      romaji: 'Shefu ni kakunin shite itadakemasu ka?'
    }
  ];

  const allergyCard = `私は重いアレルギーがあります
Watashi wa omoi arerugī ga arimasu
(J'ai une allergie grave)

以下の食材は絶対に食べられません：
Ika no shokuzai wa zettai ni taberaremasen:
(Je ne peux absolument pas manger les ingrédients suivants :)

[Insérer vos allergènes en japonais]

少しでも入っていると危険です
Sukoshi demo haitte iru to kiken desu
(Même une petite quantité est dangereuse)

料理を作る前に確認してください
Ryōri wo tsukuru mae ni kakunin shite kudasai
(Veuillez vérifier avant de préparer le plat)

ありがとうございます
Arigatō gozaimasu
(Merci beaucoup)

緊急連絡先：[Votre numéro]
Kinkyū renrakusaki: [Your number]
(Contact d'urgence)`;

  const safeChains = [
    {
      name: 'Yoshinoya',
      category: 'Gyudon',
      strengths: ['Menu très simple', 'Ingrédients limités', 'Préparation standardisée'],
      warnings: 'Sauce soja contient du blé',
      allergenFriendly: ['Œufs', 'Lait', 'Cacahuètes']
    },
    {
      name: 'Sushiro',
      category: 'Sushi',
      strengths: ['Ingrédients frais visibles', 'Menu avec photos', 'Personnel formé'],
      warnings: 'Contamination croisée poisson/crustacés',
      allergenFriendly: ['Lait', 'Cacahuètes']
    },
    {
      name: 'CoCo Ichibanya',
      category: 'Curry',
      strengths: ['Ingrédients listés', 'Personnalisation possible', 'Personnel attentif'],
      warnings: 'Certains currys contiennent du lait',
      allergenFriendly: ['Cacahuètes', 'Crustacés']
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Extrême': return 'bg-red-500 text-white';
      case 'Très élevée': return 'bg-red-400 text-white';
      case 'Élevée': return 'bg-orange-400 text-white';
      default: return 'bg-yellow-400 text-gray-900';
    }
  };
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
            <Link href="/guides/regimes-alimentaires" className="text-gray-500 hover:text-red-600">Régimes Alimentaires</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Guide des Allergies</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Guide des Allergies
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Naviguer en sécurité dans les restaurants japonais avec des allergies alimentaires. 
              Information détaillée sur les 7 allergènes majeurs et conseils pratiques.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              アレルギー対応ガイド
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-red-900 mb-2">
              Numéros d'urgence au Japon
            </h2>
            <p className="text-red-700">En cas de réaction allergique grave</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-red-300 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">119</div>
              <div className="font-semibold text-gray-900">Ambulance</div>
              <div className="text-sm text-gray-600">きゅうきゅうしゃ (Kyūkyūsha)</div>
            </div>
            
            <div className="bg-white border-2 border-red-300 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">110</div>
              <div className="font-semibold text-gray-900">Police</div>
              <div className="text-sm text-gray-600">けいさつ (Keisatsu)</div>
            </div>
            
            <div className="bg-white border-2 border-red-300 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">#7119</div>
              <div className="font-semibold text-gray-900">Conseil médical</div>
              <div className="text-sm text-gray-600">24h/24 Tokyo & régions</div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyPhrases.map((phrase, index) => (
              <div key={index} className="bg-white border border-red-300 rounded p-4">
                <div className="font-bold text-red-900">{phrase.french}</div>
                <div className="japanese-text text-gray-800">{phrase.japanese}</div>
                <div className="text-sm text-gray-600 italic">{phrase.romaji}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Major Allergens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Les 7 Allergènes Majeurs au Japon
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {majorAllergens.map((allergen, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{allergen.nameFr}</h3>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span className="japanese-text">{allergen.nameJp}</span>
                    <span className="italic">{allergen.nameEn}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(allergen.severity)}`}>
                  {allergen.severity}
                </span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Présent dans :</h4>
                  <p className="text-sm text-gray-700">{allergen.commonIn}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Caché dans :</h4>
                  <p className="text-sm text-gray-700">{allergen.hiddenIn}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Options sûres :</h4>
                  <p className="text-sm text-green-700">{allergen.safeOptions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Phrases */}
      <div className="bg-orange-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Phrases de Communication Essentielles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allergyPhrases.map((phrase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-orange-200">
                <div className="space-y-3">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">{phrase.french}</div>
                  </div>
                  <div>
                    <div className="text-lg japanese-text text-gray-800">{phrase.japanese}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 italic">{phrase.romaji}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Allergy Card Template */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border-2 border-orange-300 rounded-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Carte d'Allergie à Imprimer
            </h2>
            <div className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-medium">À personnaliser et imprimer</span>
            </div>
          </div>
          
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
            <pre className="whitespace-pre-line text-sm leading-relaxed font-mono">
              {allergyCard}
            </pre>
          </div>
          
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-4">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Instructions :</h3>
                <ul className="space-y-1 text-sm text-yellow-700">
                  <li>• Remplacez [Insérer vos allergènes] par vos allergènes spécifiques en japonais</li>
                  <li>• Ajoutez votre numéro de téléphone d'urgence</li>
                  <li>• Plastifiez la carte pour qu'elle dure plus longtemps</li>
                  <li>• Montrez cette carte au personnel avant de commander</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Safe Chain Recommendations */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Chaînes Recommandées pour les Allergies
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {safeChains.map((chain, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{chain.name}</h3>
                <p className="text-gray-600 mb-4">{chain.category}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Points forts :</h4>
                  <ul className="space-y-1">
                    {chain.strengths.map((strength, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Généralement sûr pour :</h4>
                  <div className="flex flex-wrap gap-2">
                    {chain.allergenFriendly.map((allergen, i) => (
                      <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <p className="text-sm text-yellow-800">{chain.warnings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Votre sécurité avant tout
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En cas de doute, n'hésitez jamais à poser des questions ou à éviter un plat. 
              La plupart du personnel japonais est très compréhensif avec les allergies alimentaires.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/chaines"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors text-center"
            >
              Voir toutes les chaînes
            </Link>
            <Link
              href="/guides/regimes-alimentaires"
              className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors text-center"
            >
              Autres régimes alimentaires
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
