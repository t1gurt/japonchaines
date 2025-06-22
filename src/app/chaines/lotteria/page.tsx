import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap, Candy, Globe } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';

export default function LotteriaPage() {
  return (
    <>
      <ChainViewTracker chainName="lotteria" chainCategory="burgers" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/burgers" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Burgers Japonais
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">L</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Lotteria</h1>
                <p className="text-lg text-gray-600">ロッテリア</p>
                <p className="text-sm text-gray-500">Le burger japonais aux saveurs uniques depuis 1972</p>
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
                  <Info className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Lotteria</strong> est une chaîne de fast-food unique appartenant au géant 
                    des confiseries Lotte. Fondée en 1972, elle est la plus ancienne chaîne de burgers 
                    japonaise et se distingue par ses créations audacieuses mêlant influences coréennes, 
                    japonaises et occidentales. Lotteria est célèbre pour ses burgers extravagants et 
                    ses saveurs impossible à trouver ailleurs.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-800 mb-2">🎨 Innovation culinaire</h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• <strong>Burgers fusion</strong> - Mélanges créatifs de saveurs asiatiques et occidentales</li>
                      <li>• <strong>Éditions limitées</strong> - Nouveaux burgers tous les mois</li>
                      <li>• <strong>Influences coréennes</strong> - Lien avec les origines de la maison mère Lotte</li>
                      <li>• <strong>Desserts uniques</strong> - Intégration des confiseries Lotte au menu</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">🏢 Groupe Lotte</h3>
                  <p className="mb-4">
                    Appartenant au conglomérat Lotte (confiseries, grands magasins, hôtels), 
                    Lotteria bénéficie d'une puissance financière considérable lui permettant 
                    d'expérimenter sans contraintes de rentabilité immédiate. Cette liberté 
                    créative explique ses innovations parfois surprenantes mais toujours créatives.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌏 Expansion asiatique</h3>
                  <p className="mb-4">
                    Avec des restaurants au Japon, en Corée du Sud, en Chine et dans plusieurs 
                    pays d'Asie du Sud-Est, Lotteria adapte ses menus aux goûts locaux tout en 
                    gardant son ADN créatif. Au Japon, environ 270 restaurants sont principalement 
                    situés dans les centres urbains et centres commerciaux.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🎯 Positionnement jeune</h3>
                  <p className="mb-4">
                    Lotteria cible particulièrement les jeunes urbains (15-25 ans) avec des 
                    burgers Instagram-friendly, des collaborations avec des anime populaires, 
                    et des campagnes marketing décalées. La chaîne assume pleinement son côté 
                    "fun food" et anti-conformiste.
                  </p>
                </div>
              </div>              {/* Menu détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu Créatif</h2>
                </div>

                {/* Burgers signature permanents */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍔 Burgers Signature (permanents)</h3>
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
                          <td className="p-3 font-medium">Classic Burger</td>
                          <td className="p-3">クラシックバーガー</td>
                          <td className="p-3">Le burger de base Lotteria, saveur équilibrée</td>
                          <td className="p-3">¥390</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Teriyaki Burger</td>
                          <td className="p-3">テリヤキバーガー</td>
                          <td className="p-3">Sauce teriyaki maison, goût typiquement japonais</td>
                          <td className="p-3">¥450</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Bulgogi Burger</td>
                          <td className="p-3">プルコギバーガー</td>
                          <td className="p-3">Influence coréenne, marinade bulgogi authentique</td>
                          <td className="p-3">¥520</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fried Chicken Burger</td>
                          <td className="p-3">フライドチキンバーガー</td>
                          <td className="p-3">Poulet frit croustillant, sauce piquante optionnelle</td>
                          <td className="p-3">¥480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fish Burger</td>
                          <td className="p-3">フィッシュバーガー</td>
                          <td className="p-3">Poisson pané, sauce tartare japonaise</td>
                          <td className="p-3">¥420</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Burgers extraordinaires éditions limitées */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🌟 Créations Extraordinaires (éditions limitées)</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note :</strong> Ces burgers emblématiques reviennent périodiquement ou inspirent de nouvelles créations
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">Nom français</th>
                          <th className="text-left p-3 font-medium">日本語</th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Prix typique</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Tower Burger</td>
                          <td className="p-3">タワーバーガー</td>
                          <td className="p-3">Burger géant à 7 étages, défi culinaire viral</td>
                          <td className="p-3">¥1,200</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ramen Burger</td>
                          <td className="p-3">ラーメンバーガー</td>
                          <td className="p-3">Pain remplacé par des nouilles ramen frites</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Kimchi Burger</td>
                          <td className="p-3">キムチバーガー</td>
                          <td className="p-3">Kimchi fermenté, goût coréen authentique</td>
                          <td className="p-3">¥580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Mochi Burger</td>
                          <td className="p-3">モチバーガー</td>
                          <td className="p-3">Pain aux mochi, texture unique et innovante</td>
                          <td className="p-3">¥650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Chocolate Burger</td>
                          <td className="p-3">チョコレートバーガー</td>
                          <td className="p-3">Dessert-burger, innovation sucrée surprenante</td>
                          <td className="p-3">¥450</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Accompagnements et desserts */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🍟 Accompagnements & Desserts Lotte</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Accompagnements</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Frites classiques</strong> - ¥250 (croustillantes, portion généreuse)</li>
                        <li>• <strong>Frites de patate douce</strong> - ¥320 (spécialité coréenne)</li>
                        <li>• <strong>Chicken nuggets</strong> - ¥380 (sauce spéciale incluse)</li>
                        <li>• <strong>Onion rings</strong> - ¥330 (pâte légère, très croustillant)</li>
                        <li>• <strong>Corn dogs</strong> - ¥290 (influence street-food coréenne)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Desserts Lotte</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Koala no March Shake</strong> - ¥420 (Milkshake aux biscuits iconiques)</li>
                        <li>• <strong>Choco Pie Ice</strong> - ¥380 (Version glacée du Choco Pie)</li>
                        <li>• <strong>Toppo Sundae</strong> - ¥350 (Sundae avec biscuits Toppo)</li>
                        <li>• <strong>Ghana Chocolate Cake</strong> - ¥450 (Gâteau au chocolat Ghana)</li>
                        <li>• <strong>Seasonal Parfait</strong> - ¥520 (Parfait aux produits Lotte du moment)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation et créativité */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Innovation & Créativité</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-800 mb-2">🎪 Collaborations surprenantes</h3>
                    <p className="text-pink-700 text-sm mb-3">
                      Lotteria collabore régulièrement avec des anime, des idols, et des marques pour 
                      créer des burgers thématiques uniques au monde.
                    </p>
                    <ul className="text-pink-700 text-sm space-y-1">
                      <li>• <strong>Collaborations anime</strong> - Burgers aux couleurs des personnages populaires</li>
                      <li>• <strong>Éditions saisonnières</strong> - Sakura Burger au printemps, Halloween specials</li>
                      <li>• <strong>Défis viraux</strong> - Burgers géants pour les réseaux sociaux</li>
                      <li>• <strong>Saveurs impossibles</strong> - Combinaisons que seul Lotteria ose tenter</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🧪 Laboratoire culinaire</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Test de nouvelles saveurs chaque mois</li>
                        <li>• Feedback client intégré dans le développement</li>
                        <li>• Recherche sur les tendances alimentaires</li>
                        <li>• Adaptation des goûts asiatiques au burger</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">📱 Marketing digital</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Burgers "Instagrammables" par design</li>
                        <li>• Challenges TikTok et YouTube</li>
                        <li>• Application mobile avec jeux exclusifs</li>
                        <li>• Réalité augmentée pour les promotions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide de commande */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Comment Commander</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">🎯 Commande traditionnelle</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      Service au comptoir classique avec menus visuels très détaillés pour surmonter 
                      la barrière de la langue.
                    </p>
                    <ol className="text-blue-700 text-sm space-y-1">
                      <li><strong>1.</strong> Consultez les écrans menu au-dessus du comptoir</li>
                      <li><strong>2.</strong> Pointez l'image du burger désiré</li>
                      <li><strong>3.</strong> Indiquez si vous voulez un set menu</li>
                      <li><strong>4.</strong> Choisissez boisson et accompagnement</li>
                      <li><strong>5.</strong> Payez et attendez votre numéro</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">💝 Sets avantageux</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Value Set</strong> - Burger + frites + boisson (+¥200)</li>
                        <li>• <strong>Deluxe Set</strong> - Burger + 2 accompagnements + boisson (+¥350)</li>
                        <li>• <strong>Dessert Set</strong> - Burger + dessert Lotte + boisson (+¥280)</li>
                        <li>• <strong>Challenge Set</strong> - Burger XXL + frites L + boisson L (+¥450)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🎮 Application mobile</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Commande à l'avance et paiement</li>
                        <li>• Jeux avec points de fidélité</li>
                        <li>• Notifications des nouveaux burgers</li>
                        <li>• Coupons de réduction exclusifs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">🌶️ Gestion des goûts</h4>
                    <p className="text-sm text-red-700">
                      N'hésitez pas à demander "less spicy" (moins épicé) ou "no kimchi" si vous 
                      n'êtes pas habitué aux saveurs coréennes. Le personnel est habitué aux 
                      demandes des touristes étrangers.
                    </p>
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
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Horaires</div>
                      <div className="text-sm text-gray-600">10h00 - 22h00 (centres commerciaux)</div>
                      <div className="text-sm text-gray-500">Variable selon l'emplacement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Localisation</div>
                      <div className="text-sm text-gray-600">270+ restaurants au Japon</div>
                      <div className="text-sm text-gray-500">Centres commerciaux, gares</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Paiement</div>
                      <div className="text-sm text-gray-600">Toutes cartes, e-wallets</div>
                      <div className="text-sm text-gray-500">Application mobile disponible</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Candy className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Prix moyen</div>
                      <div className="text-sm text-gray-600">¥600-900 par personne</div>
                      <div className="text-sm text-gray-500">Compétitif avec innovations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseils pour les visiteurs */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">
                  💡 Conseils pour les Français
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-red-700">Première expérience</div>
                    <div className="text-red-600">Commencez par le Teriyaki Burger pour un goût familier</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Saveurs coréennes</div>
                    <div className="text-red-600">Testez le Bulgogi Burger pour découvrir l'influence coréenne</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Éditions limitées</div>
                    <div className="text-red-600">Renseignez-vous sur les créations du mois en cours</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Instagram</div>
                    <div className="text-red-600">Parfait pour des photos originales de food japonais</div>
                  </div>
                </div>
              </div>

              {/* Produits Lotte intégrés */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  🍭 Univers Lotte
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-yellow-700">Confiseries célèbres</div>
                    <div className="text-yellow-600">Koala no March, Toppo, Ghana Chocolate intégrés au menu</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">Exclusivités</div>
                    <div className="text-yellow-600">Desserts impossibles à trouver ailleurs qu'en magasin Lotte</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">Souvenirs</div>
                    <div className="text-yellow-600">Goodies et produits Lotte disponibles en boutique</div>
                  </div>
                </div>
              </div>

              {/* Note culturelle */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  🏮 Note Culturelle
                </h3>
                <p className="text-sm text-purple-700">
                  Lotteria illustre parfaitement l'approche japonaise de l'innovation : prendre 
                  un concept occidental (le burger) et le réinventer avec audace et créativité. 
                  La chaîne représente aussi l'influence croissante de la culture coréenne au 
                  Japon, avec ses saveurs kimchi et bulgogi qui séduisent la jeunesse japonaise.
                </p>
              </div>

              {/* Liens utiles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
                <div className="space-y-2">
                  <a href="https://www.lotteria.jp/" 
                     className="block text-red-600 hover:text-red-700 text-sm">
                    → Site officiel Lotteria
                  </a>
                  <a href="/type-plat/burgers" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Guide complet burgers japonais
                  </a>
                  <a href="/chaines/mos-burger" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Comparer avec MOS Burger
                  </a>
                  <a href="/chaines/freshness-burger" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Comparer avec Freshness Burger
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
