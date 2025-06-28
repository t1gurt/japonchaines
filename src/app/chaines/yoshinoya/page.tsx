import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Globe, Award, History } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import YoshinoyaCulturalMissions from './components/YoshinoyaCulturalMissions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoshinoya (吉野家) | Gyudon | Guide Restaurants Japonais',
  description: 'Guide complet de Yoshinoya - Pionnier historique du gyudon depuis 1899 avec tradition et innovation continues. Menu détaillé, prix et histoire légendaire.',
  keywords: [
    'yoshinoya', '吉野家', 'gyudon', 'pionnier gyudon',
    'bœuf riz', 'tradition 1899', 'restauration rapide japon',
    'recette secrète', 'innovation continue', 'histoire gyudon'
  ],
  openGraph: {
    title: 'Yoshinoya (吉野家) | Pionnier du Gyudon depuis 1899',
    description: 'Découvrez Yoshinoya, le pionnier historique du gyudon au Japon avec plus de 120 ans de tradition',
    type: 'article',
    url: '/chaines/yoshinoya',
  },
  alternates: {
    canonical: '/chaines/yoshinoya',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function YoshinoyaPage() {
  return (
    <>
      <ChainViewTracker chainName="yoshinoya" chainCategory="gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Gyūdon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">吉</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Yoshinoya</h1>
              <p className="text-lg text-gray-600">吉野家 | よしのや</p>
              <p className="text-sm text-gray-500">Le pionnier du gyūdon depuis 1899</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Présentation générale */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Original et l&apos;Éternel</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Yoshinoya n&apos;est pas simplement une chaîne de restaurants : c&apos;est <strong>l&apos;inventeur du gyūdon moderne</strong>. 
                  Depuis 1899, cette institution japonaise incarne l&apos;essence même du fast-food à la japonaise avec sa philosophie 
                  légendaire <strong>&quot;Umai, Yasui, Hayai&quot;</strong> (Délicieux, Abordable, Rapide).
                </p>
                <p className="text-gray-700">
                  Avec <strong>1 261 restaurants</strong> à travers le Japon et une présence dans 12 pays, Yoshinoya reste 
                  fidèle à ses origines tout en s&apos;adaptant aux goûts modernes. Chaque bol de gyūdon raconte l&apos;histoire 
                  d&apos;une tradition culinaire qui a su traverser plus d&apos;un siècle.
                </p>
              </div>
            </div>

            {/* Histoire et héritage */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Histoire d&apos;une Légende</h2>
              </div>
              
              <div className="space-y-6">
                {/* Origines */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1899 : Naissance au Marché aux Poissons</h3>
                  <p className="text-gray-700">
                    Matsuda Eikichi fonde Yoshinoya au <strong>marché aux poissons de Nihonbashi</strong>, Tokyo. 
                    Face aux travailleurs pressés du marché, il perfectionne le &quot;gyūmeshi&quot; pour créer le gyūdon moderne. 
                    Le nom &quot;Yoshinoya&quot; rend hommage aux cerisiers de Yoshino, dans la préfecture de Nara.
                  </p>
                </div>

                {/* Évolution */}
                <div className="border-l-4 border-orange-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1926 : Déménagement à Tsukiji</h3>
                  <p className="text-gray-700">
                    Après le grand tremblement de terre de Tokyo (1923), Yoshinoya suit le marché aux poissons vers 
                    <strong> Tsukiji</strong>. Cette période forge la réputation de la marque auprès des professionnels 
                    les plus exigeants du Japon.
                  </p>
                </div>

                {/* Crise BSE */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2004-2006 : L&apos;Épreuve du Feu</h3>
                  <p className="text-gray-700">
                    La crise de la <strong>maladie de la vache folle (BSE)</strong> force Yoshinoya à arrêter la vente 
                    de gyūdon pendant 2 ans et 7 mois, refusant tout compromis sur la qualité. Cette décision 
                    renforce paradoxalement la confiance des consommateurs dans l&apos;engagement qualité de la marque.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">La Philosophie &quot;Umai, Yasui, Hayai&quot;</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">うまい</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Umai (Délicieux)</div>
                  <p className="text-sm text-gray-700">
                    Bœuf américain sélectionné, sauce secrète au vin blanc et gingembre, 
                    technique de &quot;tsugi-tashi&quot; (ajout continu) pour concentrer les saveurs.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">やすい</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Yasui (Abordable)</div>
                  <p className="text-sm text-gray-700">
                    Efficacité opérationnelle maximale et contrôle strict de la chaîne 
                    d&apos;approvisionnement pour maintenir des prix accessibles.
                  </p>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">はやい</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">Hayai (Rapide)</div>
                  <p className="text-sm text-gray-700">
                    Comptoir en U iconique, louche spéciale à 47 trous, 
                    processus optimisé pour un service en moins de 2 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Secrets techniques */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Les Secrets de l&apos;Excellence</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Viande d&apos;Exception</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Bœuf Short Plate américain</strong> à grain nourri, ratio parfait 6:4 (maigre:gras), 
                      maturation de 14 jours, tranchage précis à 1,3mm d&apos;épaisseur.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Sauce Secrète</h3>
                    <p className="text-gray-700 text-sm">
                      Recette au <strong>vin blanc et gingembre</strong>, méthode &quot;tsugi-tashi&quot; 
                      (ajout continu) qui concentre les saveurs à chaque service.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comptoir Révolutionnaire</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Comptoir en forme de U</strong> breveté, optimisant les déplacements du personnel 
                      et maximisant le débit client avec un design ergonomique unique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Louche Spécialisée</h3>
                    <p className="text-gray-700 text-sm">
                      Louche percée de <strong>47 trous</strong> pour l&apos;équilibre parfait entre viande et sauce, 
                      permettant un service rapide et constant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Yoshinoya Cultural Missions */}
            <YoshinoyaCulturalMissions />

            {/* Cultural Experience Integration */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-sm p-8 mb-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <span className="text-3xl">🌸</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Vivez l'Expérience Yoshinoya Authentique
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Yoshinoya offre l'opportunité parfaite de créer des liens avec les Japonais. 
                  En tant que pionnier du gyūdon, c'est ici que tradition et modernité se rencontrent.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Mission Première Visite
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-50 p-3 rounded">
                      <div className="font-japanese text-base mb-1">はじめてです</div>
                      <div className="text-gray-600 mb-1">Hajimete desu - C'est ma première fois</div>
                      <div className="text-xs text-green-700">→ Le staff va vous aider avec une attention particulière</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <div className="font-japanese text-base mb-1">おすすめはなんですか？</div>
                      <div className="text-gray-600 mb-1">Osusume wa nan desu ka? - Que recommandez-vous ?</div>
                      <div className="text-xs text-blue-700">→ Ils vous expliqueront l'histoire du gyūdon avec fierté</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Mission Visite Régulière
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-orange-50 p-3 rounded">
                      <div className="font-japanese text-base mb-1">つゆだくでお願いします</div>
                      <div className="text-gray-600 mb-1">Tsuyudaku de onegaishimasu - Avec beaucoup de sauce</div>
                      <div className="text-xs text-orange-700">→ Montre que vous connaissez les subtilités</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <div className="font-japanese text-base mb-1">1899年からの伝統ですね</div>
                      <div className="text-gray-600 mb-1">1899-nen kara no dentō desu ne - Tradition depuis 1899</div>
                      <div className="text-xs text-purple-700">→ Conversation sur l'histoire et la fierté de l'entreprise</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🏮</span>
                  Pourquoi Yoshinoya est idéal pour créer des liens
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Histoire Légendaire</h4>
                    <p className="text-gray-700">125 ans d'histoire donnent de nombreux sujets de conversation avec le staff fier de cette tradition.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Comptoir en U</h4>
                    <p className="text-gray-700">Le design iconique favorise les interactions naturelles entre clients et staff.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-700 mb-2">Clientèle Respectée</h4>
                    <p className="text-gray-700">Fréquenté par des professionnels exigeants, un effort en japonais est particulièrement apprécié.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📚</span>
                  Sujets de conversation spécial Yoshinoya
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Histoire et tradition</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Marché aux poissons de Nihonbashi (1899)</li>
                      <li>• Déménagement à Tsukiji (1926)</li>
                      <li>• Crise BSE et retour triomphal (2004-2006)</li>
                      <li>• Philosophie "Umai, Yasui, Hayai"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Technique et qualité</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Sauce secrète au vin blanc</li>
                      <li>• Méthode "tsugi-tashi" (ajout continu)</li>
                      <li>• Louche à 47 trous</li>
                      <li>• Épaisseur de viande 1.3mm</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="/guides/culture-experience"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">🎌</span>
                  Guide Complet de l'Expérience Culturelle
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Yoshinoya</h2>
              
              {/* Gyūdon classiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Signature</span>
                  Gyūdon Classiques
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Plat</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Taille</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Calories</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅうどん</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Normale (並盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">468¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">633 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅうどん</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Grande (大盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">588¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">853 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅうどん</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Extra-grande (特盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">708¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">1073 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon Mini</div>
                          <div className="text-sm text-gray-500">ミニ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Mini</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">348¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">413 kcal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Variations spéciales */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Spécial</span>
                  Variations Premium
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Plat</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon avec Œuf</div>
                          <div className="text-sm text-gray-500">牛丼玉子</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Gyūdon traditionnel surmonté d&apos;un œuf cru</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">548¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Atama no Ōmori</div>
                          <div className="text-sm text-gray-500">頭の大盛</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Riz normal avec double portion de viande</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">708¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Cheese Gyūdon</div>
                          <div className="text-sm text-gray-500">チーズ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Avec fromage fondu pour une saveur plus riche</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">628¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Commandes spéciales */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Personnalisations Populaires</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>つゆだく (Tsuyudaku)</strong> - Sauce extra
                  </div>
                  <div>
                    <strong>ねぎだく (Negidaku)</strong> - Oignons extra
                  </div>
                  <div>
                    <strong>つゆ抜き (Tsuyunuki)</strong> - Sans sauce
                  </div>
                  <div>
                    <strong>ねぎ抜き (Neginuki)</strong> - Sans oignons
                  </div>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comment Commander chez Yoshinoya</h2>
              
              <div className="space-y-6">
                {/* Étapes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Entrez</h3>
                    <p className="text-sm text-gray-600">Trouvez une place au comptoir en U caractéristique</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commandez</h3>
                    <p className="text-sm text-gray-600">Annoncez votre commande au personnel</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dégustez</h3>
                    <p className="text-sm text-gray-600">Votre gyūdon arrive en moins de 2 minutes</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payez</h3>
                    <p className="text-sm text-gray-600">Au comptoir en sortant</p>
                  </div>
                </div>

                {/* Phrases utiles */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles en Japonais</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Commander un gyūdon :</div>
                      <div className="text-gray-700">&quot;Gyūdon hitotsu onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">牛丼一つお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Avec de la sauce extra :</div>
                      <div className="text-gray-700">&quot;Tsuyudaku de&quot;</div>
                      <div className="text-gray-500 text-xs">つゆだくで</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Grande taille :</div>
                      <div className="text-gray-700">&quot;Ōmori de&quot;</div>
                      <div className="text-gray-500 text-xs">大盛で</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Avec un œuf :</div>
                      <div className="text-gray-700">&quot;Tamago tsukete&quot;</div>
                      <div className="text-gray-500 text-xs">卵つけて</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Position sur le marché */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Position sur le Marché</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">1er</div>
                  <div className="text-sm font-medium text-gray-900">En Héritage</div>
                  <div className="text-xs text-gray-600">Créateur du gyūdon moderne</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2e</div>
                  <div className="text-sm font-medium text-gray-900">En Taille</div>
                  <div className="text-xs text-gray-600">1 261 restaurants</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
                  <div className="text-sm font-medium text-gray-900">Qualité</div>
                  <div className="text-xs text-gray-600">Aucun compromis depuis 1899</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">vs. Concurrents Principaux</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><strong>Sukiya :</strong> Plus de restaurants (1 942) mais positionnement plus populaire</div>
                  <div><strong>Matsuya :</strong> Innovation constante mais moins de tradition</div>
                  <div><strong>Yoshinoya :</strong> L&apos;équilibre parfait entre tradition, qualité et accessibilité</div>
                </div>
              </div>
            </div>

            {/* Expansion mondiale */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Présence Internationale</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Yoshinoya exporte l&apos;âme du gyūdon dans <strong>12 pays</strong>, adaptant subtilement ses recettes 
                aux goûts locaux tout en préservant l&apos;authenticité japonaise.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-gray-50 rounded text-center">
                  <div className="font-medium">🇺🇸 États-Unis</div>
                  <div className="text-gray-600">Côte Ouest</div>
                </div>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <div className="font-medium">🇨🇳 Chine</div>
                  <div className="text-gray-600">Grandes villes</div>
                </div>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <div className="font-medium">🇸🇬 Singapour</div>
                  <div className="text-gray-600">Centre-ville</div>
                </div>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <div className="font-medium">🇹🇭 Thaïlande</div>
                  <div className="text-gray-600">Bangkok</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations pratiques */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-orange-600 mr-2" />
                Informations Pratiques
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Horaires</div>
                    <div className="text-gray-600">24h/24 (la plupart des restaurants)</div>
                    <div className="text-gray-500 text-xs">Vérifiez les horaires locaux</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Stations de métro, centres-villes</div>
                    <div className="text-gray-500 text-xs">1 261 restaurants au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">Espèces, cartes IC</div>
                    <div className="text-gray-500 text-xs">Certains acceptent les cartes bancaires</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Ambiance</div>
                    <div className="text-gray-600">Comptoir traditionnel</div>
                    <div className="text-gray-500 text-xs">Service ultra-rapide</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.yoshinoya.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Site officiel Yoshinoya →
                </a>
              </div>
            </div>

            {/* Prix moyens */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gyūdon normal</span>
                  <span className="font-medium">468¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avec œuf</span>
                  <span className="font-medium">548¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Grande portion</span>
                  <span className="font-medium">588¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas moyen</span>
                    <span className="text-gray-900">500-600¥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre avis */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-orange-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Incontournable</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>L&apos;expérience authentique par excellence.</strong> Yoshinoya offre plus qu&apos;un repas : 
                c&apos;est un voyage dans l&apos;histoire du Japon moderne. La qualité constante depuis 1899 et 
                l&apos;ambiance unique du comptoir en U en font une expérience inoubliable.
              </p>
            </div>

            {/* Navigation vers d'autres chaînes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Chaînes de Gyūdon</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chaines/sukiya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Sukiya</div>
                  <div className="text-sm text-gray-600">Le leader en nombre de restaurants</div>
                </Link>
                
                <Link 
                  href="/chaines/matsuya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Matsuya</div>
                  <div className="text-sm text-gray-600">L&apos;innovateur du gyūdon</div>
                </Link>
              </div>
            </div>
          </div>
        </div>      </div>
    </div>
    </>
  );
}
