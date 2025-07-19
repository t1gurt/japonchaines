import Link from 'next/link';
import { ArrowLeft, Ticket, Monitor, QrCode, MessageCircle, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Metadata } from 'next';
import GuideViewTracker from '../../../components/GuideViewTracker';

export const metadata: Metadata = {
  title: 'Comment Commander au Japon : Guide des Distributeurs et Tablettes | Japonchaines',
  description: 'Guide complet pour commander dans les restaurants japonais : maîtrisez les distributeurs de tickets (kenbaiki), les tablettes tactiles et les QR codes.',
  keywords: 'commander japon, kenbaiki, distributeur tickets japon, tablette tactile restaurant, QR code commande, guide restaurant japon',
  openGraph: {
    title: 'Comment Commander au Japon : Distributeurs, Tablettes et QR Codes',
    description: 'Maîtrisez tous les systèmes de commande japonais : kenbaiki, écrans tactiles et QR codes. Guide pratique avec phrases utiles.',
    type: 'article',
  },
};

export default function CommentCommanderPage() {
  const orderingSystems = [
    {
      id: 'distributeurs',
      title: 'Distributeurs de Tickets',
      subtitle: '券売機 (Kenbaiki)',
      description: 'Le système classique japonais présent dans la plupart des restaurants de ramen, gyūdon et curry.',
      icon: Ticket,
      color: 'red',
      popularity: '70%',
      difficulty: 'Facile',
      steps: [
        'Approchez-vous du distributeur près de l\'entrée',
        'Regardez les photos des plats (généralement avec prix)',
        'Insérez votre argent (pièces et billets acceptés)',
        'Appuyez sur le bouton du plat désiré',
        'Récupérez votre ticket et la monnaie',
        'Donnez le ticket au staff en vous asseyant'
      ],
      tips: [
        'Préparez des pièces de 100¥ pour faciliter l\'achat',
        'Les boutons éclairés = plats disponibles',
        'Les boutons éteints = rupture de stock',
        'Gardez votre ticket jusqu\'à la fin du repas'
      ],
      phrases: [
        { fr: 'Excusez-moi, comment utiliser cette machine ?', jp: 'すみません、この機械の使い方を教えてください', romaji: 'Sumimasen, kono kikai no tsukai-kata wo oshiete kudasai' },
        { fr: 'Ce plat est-il disponible ?', jp: 'この料理はありますか', romaji: 'Kono ryōri wa arimasu ka?' },
        { fr: 'Un ticket, s\'il vous plaît', jp: '券を一枚お願いします', romaji: 'Ken wo ichi-mai onegaishimasu' }
      ]
    },
    {
      id: 'ecrans-tactiles',
      title: 'Écrans Tactiles',
      subtitle: 'タッチパネル (Touch Panel)',
      description: 'Systèmes modernes avec interface graphique, souvent multilingues dans les chaînes populaires.',
      icon: Monitor,
      color: 'blue',
      popularity: '25%',
      difficulty: 'Très Facile',
      steps: [
        'Touchez l\'écran pour commencer',
        'Sélectionnez la langue (souvent disponible en anglais)',
        'Parcourez les catégories de menu',
        'Touchez les plats désirés pour les ajouter',
        'Vérifiez votre commande et le total',
        'Choisissez le mode de paiement',
        'Payez et récupérez votre reçu/numéro'
      ],
      tips: [
        'Cherchez l\'icône drapeau pour changer de langue',
        'Utilisez les boutons + et - pour ajuster les quantités',
        'Vérifiez toujours le total avant de payer',
        'Conservez votre reçu avec le numéro de commande'
      ],
      phrases: [
        { fr: 'Y a-t-il un menu en anglais ?', jp: '英語のメニューはありますか', romaji: 'Eigo no menyū wa arimasu ka?' },
        { fr: 'Comment changer la langue ?', jp: '言語を変えるにはどうすればいいですか', romaji: 'Gengo wo kaeru ni wa dō sureba ii desu ka?' },
        { fr: 'J\'ai terminé ma commande', jp: '注文が終わりました', romaji: 'Chūmon ga owarimashita' }
      ]
    },
    {
      id: 'qr-code',
      title: 'Commande par QR Code',
      subtitle: 'QRコード注文 (QR Code Chūmon)',
      description: 'Le système le plus récent, popularisé depuis 2020. Commandez directement depuis votre smartphone.',
      icon: QrCode,
      color: 'green',
      popularity: '5%',
      difficulty: 'Très Facile',
      steps: [
        'Scannez le QR code sur votre table avec votre smartphone',
        'Ouvrez le lien dans votre navigateur',
        'Sélectionnez la langue si proposée',
        'Parcourez le menu digital',
        'Ajoutez vos plats au panier',
        'Confirmez et payez en ligne',
        'Attendez que vos plats arrivent à table'
      ],
      tips: [
        'Assurez-vous d\'avoir une connexion internet stable',
        'Certains systèmes nécessitent un paiement par carte',
        'Vos plats arrivent directement à votre table',
        'Vous pouvez commander plusieurs fois pendant le repas'
      ],
      phrases: [
        { fr: 'Le QR code ne fonctionne pas', jp: 'QRコードが動作しません', romaji: 'QR kōdo ga dōsa shimasen' },
        { fr: 'Comment payer avec mon téléphone ?', jp: 'スマートフォンで支払うにはどうすればいいですか', romaji: 'Sumātofon de shiharau ni wa dō sureba ii desu ka?' },
        { fr: 'J\'ai passé ma commande en ligne', jp: 'オンラインで注文しました', romaji: 'Onrain de chūmon shimashita' }
      ]
    }
  ];

  const commonPhrases = [
    {
      category: 'Arrivée au restaurant',
      phrases: [
        { fr: 'Bonjour', jp: 'いらっしゃいませ', romaji: 'Irasshaimase', note: 'Le staff dit cela en premier' },
        { fr: 'Une personne', jp: '一人です', romaji: 'Hitori desu', note: 'Pour "une personne"' },
        { fr: 'Deux personnes', jp: '二人です', romaji: 'Futari desu', note: 'Pour "deux personnes"' },
        { fr: 'Y a-t-il de la place ?', jp: '空いていますか', romaji: 'Aite imasu ka?', note: 'Si le restaurant semble plein' }
      ]
    },
    {
      category: 'Pendant la commande',
      phrases: [
        { fr: 'Je recommande ceci', jp: 'これがおすすめです', romaji: 'Kore ga osusume desu', note: 'Le staff peut dire cela' },
        { fr: 'Sans épices, s\'il vous plaît', jp: '辛くないでお願いします', romaji: 'Karakunai de onegaishimasu', note: 'Pour éviter le piquant' },
        { fr: 'Avec des légumes supplémentaires', jp: '野菜を多めでお願いします', romaji: 'Yasai wo ōme de onegaishimasu', note: 'Pour plus de légumes' },
        { fr: 'C\'est tout', jp: '以上です', romaji: 'Ijō desu', note: 'Quand vous avez terminé' }
      ]
    },
    {
      category: 'Pendant le repas',
      phrases: [
        { fr: 'Bon appétit !', jp: 'いただきます', romaji: 'Itadakimasu', note: 'Avant de commencer à manger' },
        { fr: 'C\'est délicieux', jp: 'おいしいです', romaji: 'Oishii desu', note: 'Pour complimenter' },
        { fr: 'L\'addition, s\'il vous plaît', jp: 'お会計お願いします', romaji: 'Okaikei onegaishimasu', note: 'Pour demander l\'addition' },
        { fr: 'Merci pour le repas', jp: 'ごちそうさまでした', romaji: 'Gochisōsama deshita', note: 'En partant' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-50 border-red-200 text-red-600',
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600'
    };
    return colorMap[color as keyof typeof colorMap];
  };  return (
    <>
      <GuideViewTracker guideName="comment-commander" />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comment Commander
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Maîtrisez tous les systèmes de commande japonais en toute confiance
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Les 3 Systèmes de Commande Japonais</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Au Japon, commander dans un restaurant peut sembler intimidant au premier abord. Cependant, une fois que vous 
            connaissez les trois systèmes principaux, vous vous sentirez à l\'aise partout ! Voici votre guide complet.
          </p>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-800 font-medium mb-2">
                  <strong>Conseil important :</strong> Ne vous inquiétez pas si vous faites une erreur !
                </p>
                <p className="text-gray-700">
                  Le personnel japonais est généralement très patient et aimable avec les étrangers. 
                  N\'hésitez pas à demander de l\'aide en montrant du doigt ou en utilisant les phrases de base ci-dessous.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ordering Systems */}
        <div className="space-y-12">
          {orderingSystems.map((system, index) => {
            const IconComponent = system.icon;
            return (
              <div key={system.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`${getColorClasses(system.color)} border-b-2 p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <IconComponent className="h-10 w-10 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{system.title}</h3>
                        <p className="text-lg text-gray-600">{system.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Popularité</div>
                      <div className="text-xl font-bold">{system.popularity}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{system.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      system.difficulty === 'Très Facile' ? 'bg-green-100 text-green-800' :
                      system.difficulty === 'Facile' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {system.difficulty}
                    </span>
                    <span className="text-sm text-gray-600">#{index + 1} dans ce guide</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Steps */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-red-600" />
                        Étapes à suivre
                      </h4>
                      <ol className="space-y-3">
                        {system.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-1 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Conseils pratiques
                      </h4>
                      <ul className="space-y-3">
                        {system.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start">
                            <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Phrases */}
                  <div className="mt-8 bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                      Phrases utiles pour ce système
                    </h4>
                    <div className="space-y-4">
                      {system.phrases.map((phrase, phraseIndex) => (
                        <div key={phraseIndex} className="bg-white rounded-lg p-4">
                          <div className="mb-2">
                            <span className="font-medium text-gray-900">{phrase.fr}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Japonais :</span> {phrase.jp}
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Prononciation :</span> {phrase.romaji}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Common Phrases Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Phrases Essentielles pour Tous les Restaurants</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Ces expressions vous seront utiles quel que soit le système de commande utilisé.
          </p>
          
          <div className="space-y-8">
            {commonPhrases.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-red-600 mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.phrases.map((phrase, phraseIndex) => (
                    <div key={phraseIndex} className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="mb-2">
                        <span className="font-medium text-gray-900">{phrase.fr}</span>
                        {phrase.note && (
                          <span className="text-sm text-gray-500 ml-2">({phrase.note})</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">日本語 :</span> {phrase.jp}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Romaji :</span> {phrase.romaji}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Tips */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Derniers Conseils d\'Expert</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prenez votre temps</h3>
              <p className="text-gray-700">Personne ne vous presse. Les Japonais préfèrent que vous preniez le temps de bien comprendre.</p>
            </div>
            <div>
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Utilisez les gestes</h3>
              <p className="text-gray-700">Montrer du doigt et sourire sont universels. N\'hésitez pas à communiquer avec vos mains.</p>
            </div>
            <div>
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entraînez-vous</h3>
              <p className="text-gray-700">Répétez les phrases à voix haute avant votre voyage. La pratique rend confiant.</p>
            </div>          </div>
        </div>
      </div>
      </div>
    </>
  );
}
