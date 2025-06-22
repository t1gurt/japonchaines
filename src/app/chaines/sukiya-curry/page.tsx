import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Flame, Coffee, MapPin as LocationPin } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';

export default function SukiyaCurryPage() {
  return (
    <>
      <ChainViewTracker chainName="sukiya-curry" chainCategory="curry" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/curry" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au Curry Japonais
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sukiya Curry</h1>
              <p className="text-lg text-gray-600">すき家カレー</p>
              <p className="text-sm text-gray-500">Le curry accessible de la chaîne Sukiya depuis 2009</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Présentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Sukiya Curry</strong> (すき家カレー) est l'offre curry de la célèbre 
                  chaîne Sukiya, lancée en 2009 pour diversifier le menu au-delà du gyūdon. 
                  Présent dans plus de 2,000 restaurants Sukiya à travers le Japon, ce curry 
                  propose une alternative accessible et savoureuse avec la même philosophie 
                  de rapidité, qualité et prix abordable qui fait le succès de la marque.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-orange-800 mb-2">🍛 Extension naturelle Sukiya</h3>
                  <ul className="text-orange-700 space-y-1">
                    <li>• <strong>Lancé en 2009</strong> - Diversification réussie du menu</li>
                    <li>• <strong>2,000+ points de vente</strong> - Accessible dans tout Sukiya</li>
                    <li>• <strong>Prix Sukiya</strong> - Positionnement économique</li>
                    <li>• <strong>Service 24h/24</strong> - Disponibilité maximale</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🔄 Diversification stratégique</h3>
                <p className="mb-4">
                  L'introduction du curry chez Sukiya répond à une stratégie de diversification 
                  pour attirer une clientèle plus large et proposer plus d'options aux clients 
                  habituels du gyūdon. Cette extension naturelle s'appuie sur l'infrastructure 
                  existante et le savoir-faire culinaire de la chaîne, particulièrement 
                  dans la préparation de plats mijotés comme le gyūdon.
                </p>

                <h3 className="text-xl font-semibold mb-3">💰 Positionnement économique</h3>
                <p className="mb-4">
                  Fidèle à la philosophie Sukiya, le curry maintient un excellent rapport 
                  qualité-prix. Les portions sont généreuses, les prix restent très 
                  accessibles, et la qualité gustative rivalise avec des chaînes spécialisées 
                  plus chères. Cette stratégie permet à Sukiya de capter une part du marché 
                  du curry sans cannibaliser son activité gyūdon principale.
                </p>

                <h3 className="text-xl font-semibold mb-3">⚡ Service Sukiya optimisé</h3>
                <p className="mb-4">
                  Le curry Sukiya bénéficie de l'efficacité opérationnelle légendaire de 
                  la chaîne : service rapide, disponibilité 24h/24 dans de nombreux restaurants, 
                  commande simplifiée et préparation standardisée. Cette optimisation permet 
                  de servir un curry de qualité en quelques minutes, idéal pour les repas 
                  de midi pressés des salarymen.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌶️ Recette équilibrée</h3>
                <p className="mb-4">
                  Le curry Sukiya développe un profil gustatif équilibré : ni trop épicé 
                  ni trop doux, avec une texture onctueuse qui plaît au palais japonais 
                  mainstream. Cette recette universelle convient aussi bien aux enfants 
                  qu'aux adultes, maximisant l'appeal commercial sans compromettre la 
                  personnalité gustative.
                </p>

                <h3 className="text-xl font-semibold mb-3">🥩 Complémentarité gyūdon</h3>
                <p className="mb-4">
                  Loin de concurrencer le gyūdon signature, le curry Sukiya s'en inspire : 
                  même viande de bœuf mijotée, même approche du confort food, même 
                  générosité des portions. Cette complémentarité intelligente fidélise 
                  la clientèle existante tout en attirant de nouveaux consommateurs 
                  cherchant une alternative au riz-bœuf traditionnel.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Curry Accessible</h2>
              </div>

              {/* Curries de base */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍛 Curries Signature Sukiya</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">                  <div className="flex items-center space-x-2 mb-2">
                    <Coffee className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-orange-800">🥩 Savoir-faire Sukiya adapté</h4>
                  </div>
                  <p className="text-orange-800 text-sm">
                    Le curry Sukiya utilise la même expertise de mijotage que pour le 
                    gyūdon, avec des viandes tendres et une sauce onctueuse qui fait 
                    la réputation de la chaîne.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Curry classique</td>
                        <td className="p-3">カレー</td>
                        <td className="p-3">Curry de base Sukiya, douceur équilibrée</td>
                        <td className="p-3">¥390</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Curry bœuf</td>
                        <td className="p-3">ビーフカレー</td>
                        <td className="p-3">Avec lamelles de bœuf mijoté</td>
                        <td className="p-3">¥490</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Curry porc katsu</td>
                        <td className="p-3">カツカレー</td>
                        <td className="p-3">Escalope panée croustillante</td>
                        <td className="p-3">¥590</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Curry poulet</td>
                        <td className="p-3">チキンカレー</td>
                        <td className="p-3">Morceaux de poulet tendre</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Curry saucisse</td>
                        <td className="p-3">ソーセージカレー</td>
                        <td className="p-3">Saucisses épicées allemandes</td>
                        <td className="p-3">¥480</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Portions et formats */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">📏 Portions et Formats</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Format</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Supplément</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Taille normale</td>
                        <td className="p-3">並盛</td>
                        <td className="p-3">Portion standard, riz 200g</td>
                        <td className="p-3">Inclus</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grande portion</td>
                        <td className="p-3">大盛</td>
                        <td className="p-3">Riz 300g, sauce augmentée</td>
                        <td className="p-3">+¥100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Portion géante</td>
                        <td className="p-3">特盛</td>
                        <td className="p-3">Riz 400g, sauce généreuse</td>
                        <td className="p-3">+¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mega portion</td>
                        <td className="p-3">メガ盛</td>
                        <td className="p-3">Riz 500g, pour gros appétits</td>
                        <td className="p-3">+¥300</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mini curry</td>
                        <td className="p-3">ミニカレー</td>
                        <td className="p-3">Riz 150g, portion enfant/léger</td>
                        <td className="p-3">-¥50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Curries spéciaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🌟 Curries Spéciaux Sukiya</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Curry gyūdon fusion</td>
                        <td className="p-3">牛丼カレー</td>
                        <td className="p-3">Fusion signature : curry + lamelles gyūdon</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Triple protéine</td>
                        <td className="p-3">トリプルプロテイン</td>
                        <td className="p-3">Bœuf + poulet + saucisse combinés</td>
                        <td className="p-3">¥790</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Curry végétarien</td>
                        <td className="p-3">ベジタブルカレー</td>
                        <td className="p-3">Légumes de saison, sans viande</td>
                        <td className="p-3">¥450</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Cheese curry</td>
                        <td className="p-3">チーズカレー</td>
                        <td className="p-3">Fromage fondu sur curry bœuf</td>
                        <td className="p-3">¥590</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Spicy curry</td>
                        <td className="p-3">辛口カレー</td>
                        <td className="p-3">Version relevée pour amateurs épicé</td>
                        <td className="p-3">¥520</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥗 Accompagnements Traditionnels</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Salade verte</td>
                        <td className="p-3">サラダ</td>
                        <td className="p-3">Mix légumes frais, vinaigrette</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Soupe miso</td>
                        <td className="p-3">味噌汁</td>
                        <td className="p-3">Bouillon traditionnel wakame</td>
                        <td className="p-3">¥120</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Œuf au plat</td>
                        <td className="p-3">目玉焼き</td>
                        <td className="p-3">Œuf à cheval sur le curry</td>
                        <td className="p-3">¥80</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Légumes marinés</td>
                        <td className="p-3">お新香</td>
                        <td className="p-3">Chou et concombre acidulés</td>
                        <td className="p-3">¥100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kimchi</td>
                        <td className="p-3">キムチ</td>
                        <td className="p-3">Chou fermenté épicé coréen</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tofu frit agedashi</td>
                        <td className="p-3">揚げ出し豆腐</td>
                        <td className="p-3">Tofu croustillant, bouillon dashi</td>
                        <td className="p-3">¥200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sets économiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">💰 Sets Économiques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Sets curry standard</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Set basique</strong> - Curry + salade + soupe (¥580)</li>
                      <li>• <strong>Set katsu</strong> - Katsu curry + accompagnements (¥750)</li>
                      <li>• <strong>Set complet</strong> - Curry bœuf + tout (¥690)</li>
                      <li>• <strong>Set mini</strong> - Mini curry + soupe (¥480)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Combos spéciaux</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Gyūdon + Curry</strong> - Les deux signatures (¥800)</li>
                      <li>• <strong>Double curry</strong> - Deux currys différents (¥750)</li>
                      <li>• <strong>Famille set</strong> - 2 currys + accompagnements (¥1,200)</li>
                      <li>• <strong>Student set</strong> - Grande portion + boisson (¥620)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥤 Boissons Sukiya</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Boissons chaudes</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé vert</strong> - ¥150</li>
                      <li>• <strong>Café</strong> - ¥200</li>
                      <li>• <strong>Thé oolong</strong> - ¥150</li>
                      <li>• <strong>Chocolat chaud</strong> - ¥250</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Boissons froides</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé glacé</strong> - ¥180</li>
                      <li>• <strong>Cola</strong> - ¥200</li>
                      <li>• <strong>Jus d'orange</strong> - ¥220</li>
                      <li>• <strong>Eau minérale</strong> - ¥150</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Spécialités</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Lassi</strong> - ¥250</li>
                      <li>• <strong>Ramune</strong> - ¥200</li>
                      <li>• <strong>Lait froid</strong> - ¥180</li>
                      <li>• <strong>Bière Asahi</strong> - ¥300</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stratégie menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Stratégie Menu Sukiya</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🎯 Complémentarité intelligente</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Le curry Sukiya ne concurrence pas le gyūdon mais le complète, offrant 
                    une alternative dans le même registre confort food accessible, 
                    utilisant la même infrastructure et le même savoir-faire culinaire.
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Même positionnement prix</strong> - Cohérence économique</li>
                    <li>• <strong>Même rapidité service</strong> - Efficacité Sukiya</li>
                    <li>• <strong>Même qualité viande</strong> - Standards unifiés</li>
                    <li>• <strong>Combos possibles</strong> - Gyūdon + curry disponible</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📊 Avantages concurrentiels</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Prix imbattables sur marché curry</li>
                      <li>• Disponibilité 24h/24 unique</li>
                      <li>• 2,000+ points de vente</li>
                      <li>• Service ultra-rapide</li>
                      <li>• Portions modulables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎲 Positioning intelligent</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Entre curry premium et basic</li>
                      <li>• Qualité supérieure à prix Sukiya</li>
                      <li>• Alternative gyūdon pour variété</li>
                      <li>• Attire clientèle curry vers Sukiya</li>
                      <li>• Fidélise clients existants</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">🏆 Succès commercial</h4>
                  <p className="text-sm text-blue-700">
                    L'introduction du curry a augmenté de 15% la fréquentation moyenne 
                    des restaurants Sukiya, avec 30% des commandes curry provenant de 
                    nouveaux clients. Cette diversification réussie prouve l'efficacité 
                    de l'extension de gamme bien pensée dans la restauration rapide japonaise.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Curry Économique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🍛 Première découverte optimale</h3>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li><strong>1.</strong> Commencez par curry gyūdon fusion pour signature Sukiya</li>
                    <li><strong>2.</strong> Choisissez portion normale pour juger qualité/prix</li>
                    <li><strong>3.</strong> Ajoutez œuf au plat, classique curry japonais</li>
                    <li><strong>4.</strong> Comparez avec gyūdon si premier chez Sukiya</li>
                    <li><strong>5.</strong> Testez service rapide légendaire</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Menu budget découverte</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Curry gyūdon fusion</strong> - Signature (¥650)</li>
                      <li>• <strong>Œuf au plat</strong> - Classique japonais (¥80)</li>
                      <li>• <strong>Salade verte</strong> - Équilibre (¥150)</li>
                      <li>• <strong>Thé vert</strong> - Boisson traditionnelle (¥150)</li>
                      <li><strong>Total : ¥1,030</strong> expérience complète</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥩 Menu complet gourmand</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Triple protéine</strong> - Version ultime (¥790)</li>
                      <li>• <strong>Grande portion</strong> - Plus rassasiant (+¥100)</li>
                      <li>• <strong>Kimchi</strong> - Épicé accompagnement (¥150)</li>
                      <li>• <strong>Soupe miso</strong> - Traditionnel (¥120)</li>
                      <li><strong>Total : ¥1,160</strong> pour gros appétits</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">⚡ Conseils optimisation Sukiya</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Heures creuses avantageuses</strong> - Service encore plus rapide</li>
                    <li>• <strong>Combo gyūdon-curry</strong> - Découvrir les deux signatures</li>
                    <li>• <strong>Grandes portions</strong> - Excellent rapport qualité-prix</li>
                    <li>• <strong>24h/24 disponible</strong> - Idéal repas tardifs/noctambules</li>
                    <li>• <strong>Application mobile</strong> - Commande à l'avance possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations essentielles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Informations Essentielles</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">24h/24 (beaucoup)</div>
                    <div className="text-sm text-gray-500">Selon restaurant Sukiya</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">2,000+ restaurants Sukiya</div>
                    <div className="text-sm text-gray-500">Partout au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes acceptées</div>
                    <div className="text-sm text-gray-500">Paiement mobile disponible</div>
                  </div>
                </div>
                  <div className="flex items-start space-x-3">
                  <Coffee className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Budget moyen</div>
                    <div className="text-sm text-gray-600">¥400-800 par personne</div>
                    <div className="text-sm text-gray-500">Excellent rapport qualité-prix</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">
                💰 Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Prix imbattables</div>
                  <div className="text-orange-600">Curry de qualité à prix Sukiya économique</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Disponibilité maximale</div>
                  <div className="text-orange-600">24h/24 dans de nombreux restaurants</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Service ultra-rapide</div>
                  <div className="text-orange-600">Efficacité légendaire Sukiya</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Portions modulables</div>
                  <div className="text-orange-600">Du mini au mega selon appétit</div>
                </div>
              </div>
            </div>

            {/* Extension Sukiya */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🔄 Extension Sukiya Réussie
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Diversification intelligente</div>
                  <div className="text-blue-600">Complète gyūdon sans le concurrencer</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Même infrastructure</div>
                  <div className="text-blue-600">Utilise restaurants existants</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Standards Sukiya</div>
                  <div className="text-blue-600">Rapidité, prix, qualité préservés</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Combos possibles</div>
                  <div className="text-blue-600">Gyūdon + curry dans même commande</div>
                </div>
              </div>
            </div>

            {/* Note curry accessible */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🍛 Curry Accessible Excellence
              </h3>
              <p className="text-sm text-green-700">
                Sukiya Curry prouve qu'un curry de qualité peut être proposé à prix 
                très accessible sans compromettre le goût. Cette réussite commerciale 
                démontre l'efficacité de la stratégie d'extension de gamme dans 
                l'écosystème Sukiya, offrant plus de choix aux clients fidèles tout 
                en attirant de nouveaux consommateurs friands de curry économique.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.sukiya.jp/" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Site officiel Sukiya
                </a>
                <a href="/chaines/sukiya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Voir Sukiya gyūdon principal
                </a>
                <a href="/type-plat/curry" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet curry japonais
                </a>
                <a href="/chaines/coco-ichibanya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec CoCo Ichibanya
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
