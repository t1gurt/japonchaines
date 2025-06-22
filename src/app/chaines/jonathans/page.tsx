import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, Coffee, Wine, Crown } from 'lucide-react';

export default function JonathansPage() {  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/family-restaurants" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Family Restaurants
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">J</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Jonathan's</h1>
              <p className="text-lg text-gray-600">ジョナサン | じょなさん</p>
              <p className="text-sm text-gray-500">Le family restaurant haut de gamme du groupe Skylark</p>
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
                <Info className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Jonathan's (ジョナサン)</strong> est la version "premium" des family restaurants du 
                  groupe Skylark, positionnée un cran au-dessus de Gusto en termes de qualité, de service 
                  et d'ambiance. Avec plus de 300 établissements principalement concentrés dans les zones 
                  métropolitaines, Jonathan's vise une clientèle légèrement plus aisée en quête d'une 
                  expérience culinaire familiale mais raffinée.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-2">👑 Le famiresu haut de gamme</h3>
                  <ul className="text-purple-700 space-y-1">
                    <li>• <strong>Qualité supérieure</strong> - Ingrédients sélectionnés et préparation soignée</li>
                    <li>• <strong>Service attentionné</strong> - Formation poussée du personnel</li>
                    <li>• <strong>Ambiance cosy</strong> - Décoration chaleureuse et éclairage tamisé</li>
                    <li>• <strong>Zones métropolitaines</strong> - Emplacements premium dans les grandes villes</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Positionnement unique</h3>
                <p className="mb-4">
                  Jonathan's occupe un créneau particulier dans l'écosystème des family restaurants 
                  japonais : plus qualitatif que Gusto mais moins formel qu'un restaurant traditionnel. 
                  Cette position intermédiaire attire les familles urbaines aisées, les couples, et les 
                  groupes d'amis à la recherche d'un compromis entre accessibilité et raffinement.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍷 Innovation culinaire</h3>
                <p className="mb-4">
                  Contrairement à ses concurrents plus populaires, Jonathan's mise sur l'innovation 
                  culinaire et l'adaptation des tendances gastronomiques internationales au goût japonais. 
                  La chaîne est souvent la première à introduire de nouveaux concepts ou des plats 
                  saisonniers sophistiqués dans l'univers des famiresu.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌟 Expérience complète</h3>
                <p className="mb-4">
                  Jonathan's ne se contente pas de servir des repas : la chaîne propose une véritable 
                  expérience avec son bar à desserts spectaculaire, sa carte de boissons élaborée, et 
                  des événements saisonniers qui transforment chaque visite en petite célébration familiale.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏙️ Culture urbaine</h3>
                <p className="mb-4">
                  Implanté principalement à Tokyo, Yokohama, et dans les grandes métropoles, Jonathan's 
                  reflète la culture urbaine japonaise moderne : sophistication accessible, internationalisme 
                  assumé, et recherche d'un équilibre entre tradition et modernité.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Raffiné Jonathan's</h2>
              </div>

              {/* Spécialités signature */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-3">⭐ Spécialités Signature</h3>
                  <p className="text-purple-700 text-sm mb-3">
                    Jonathan's développe ses propres recettes exclusives avec des chefs qualifiés
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🥩 Steaks premium</div>
                      <div className="text-purple-600 text-sm">Viandes sélectionnées, cuisson maîtrisée</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🍝 Pâtes artisanales</div>
                      <div className="text-purple-600 text-sm">Recettes italiennes adaptées</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🍰 Desserts spectaculaires</div>
                      <div className="text-purple-600 text-sm">Créations originales du chef pâtissier</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🍷 Sélection de vins</div>
                      <div className="text-purple-600 text-sm">Carte rare pour un famiresu</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plats principaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍽️ Plats Principaux Premium</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom</th>
                        <th className="text-left p-3 font-medium">Catégorie</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Angus Beef Steak</td>
                        <td className="p-3 text-red-600">Viandes</td>
                        <td className="p-3">Steak de bœuf Angus 200g, sauce aux herbes</td>
                        <td className="p-3">¥1,899</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Truffle Cream Pasta</td>
                        <td className="p-3 text-yellow-600">Italien</td>
                        <td className="p-3">Pâtes fraîches à la crème de truffe noire</td>
                        <td className="p-3">¥1,299</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Salmon Teriyaki</td>
                        <td className="p-3 text-blue-600">Poissons</td>
                        <td className="p-3">Saumon grillé, sauce teriyaki maison, légumes</td>
                        <td className="p-3">¥1,599</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken Cordon Bleu</td>
                        <td className="p-3 text-green-600">Volailles</td>
                        <td className="p-3">Blanc de poulet farci jambon-fromage</td>
                        <td className="p-3">¥1,399</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Seafood Doria</td>
                        <td className="p-3 text-purple-600">Gratins</td>
                        <td className="p-3">Riz gratiné aux fruits de mer, béchamel</td>
                        <td className="p-3">¥1,199</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu saisonnier */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🌸 Menus Saisonniers</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-pink-600 mb-3">🌸 Printemps (Mars-Mai)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Sakura Parfait</strong> - ¥799 (dessert signature)</li>
                      <li>• <strong>Bamboo Shoot Risotto</strong> - ¥1,199</li>
                      <li>• <strong>Cherry Blossom Cocktail</strong> - ¥599</li>
                      <li>• <strong>Spring Vegetable Salad</strong> - ¥899</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">🍁 Automne (Sept-Nov)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mushroom & Truffle Pizza</strong> - ¥1,399</li>
                      <li>• <strong>Pumpkin Soup Premium</strong> - ¥699</li>
                      <li>• <strong>Chestnut Mont Blanc</strong> - ¥899</li>
                      <li>• <strong>Autumn Harvest Platter</strong> - ¥1,799</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bar à desserts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍰 Bar à Desserts Spectaculaire</h3>
                
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-pink-800 mb-2">🎂 Concept unique en famiresu</h4>
                  <p className="text-pink-700 text-sm mb-3">
                    Jonathan's propose le bar à desserts le plus élaboré de tous les family restaurants
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-pink-700 mb-2">Desserts disponibles</div>
                      <ul className="text-pink-600 text-sm space-y-1">
                        <li>• 20+ gâteaux et tartes</li>
                        <li>• 10+ parfaits glacés</li>
                        <li>• Fruits frais et compotes</li>
                        <li>• 8 parfums de glaces artisanales</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-pink-700 mb-2">Formule et prix</div>
                      <ul className="text-pink-600 text-sm space-y-1">
                        <li>• <strong>Accès illimité :</strong> ¥899</li>
                        <li>• <strong>+ repas :</strong> ¥599 (supplément)</li>
                        <li>• <strong>Enfants :</strong> ¥399 (jusqu'à 12 ans)</li>
                        <li>• <strong>Happy Hour :</strong> ¥699 (14h-17h)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">🧁 Gâteaux signature</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Chocolate Opera</li>
                      <li>• Strawberry Shortcake</li>
                      <li>• Matcha Tiramisu</li>
                      <li>• Lemon Tart Premium</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">🍨 Parfaits glacés</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Seasonal Fruit Tower</li>
                      <li>• Chocolate Volcano</li>
                      <li>• Matcha Parfait Supreme</li>
                      <li>• Berry Cheesecake Parfait</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">☕ Accompagnements</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Café premium (8 variétés)</li>
                      <li>• Thés d'exception</li>
                      <li>• Chocolat chaud artisanal</li>
                      <li>• Liqueurs digestives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte des boissons */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Carte des Boissons Sophistiquée</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">🍷 Première chaîne famiresu avec des vins</h3>
                  <p className="text-purple-700 text-sm mb-3">
                    Jonathan's révolutionne le concept en proposant une vraie sélection de vins
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-purple-700 mb-2">Vins au verre</div>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Rouge français - ¥599</li>
                        <li>• Blanc allemand - ¥549</li>
                        <li>• Rosé de Provence - ¥649</li>
                        <li>• Champagne - ¥899</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-purple-700 mb-2">Vins japonais</div>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Koshu blanc - ¥799</li>
                        <li>• Muscat Berry A - ¥749</li>
                        <li>• Yamanashi rouge - ¥849</li>
                        <li>• Sake premium - ¥599</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍹 Cocktails signature</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Jonathan's Mojito - ¥699</li>
                      <li>• Sakura Cosmo - ¥799</li>
                      <li>• Yuzu Sour - ¥649</li>
                      <li>• Matcha Martini - ¥749</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">☕ Cafés premium</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Blue Mountain - ¥599</li>
                      <li>• Kona Hawaiian - ¥549</li>
                      <li>• Ethiopian Single - ¥499</li>
                      <li>• Espresso Romano - ¥399</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🫖 Thés d'exception</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Earl Grey Premium - ¥449</li>
                      <li>• Darjeeling First Flush - ¥499</li>
                      <li>• Gyokuro japonais - ¥549</li>
                      <li>• Oolong premium - ¥499</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambiance et service */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Ambiance et Service Premium</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">🏺 Design intérieur soigné</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>Éclairage tamisé :</strong> Ambiance chaleureuse et intimiste</li>
                      <li><strong>Mobilier de qualité :</strong> Banquettes confortables, tables spacieuses</li>
                      <li><strong>Décoration saisonnière :</strong> Adaptée aux événements japonais</li>
                      <li><strong>Espaces modulables :</strong> Zones familles, couples, groupes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">👨‍🍳 Service professionnel</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>Formation poussée :</strong> Personnel qualifié en service et vins</li>
                      <li><strong>Conseils personnalisés :</strong> Recommandations selon les goûts</li>
                      <li><strong>Timing maîtrisé :</strong> Service à la française, pas de rush</li>
                      <li><strong>Attention aux détails :</strong> Présentation soignée de chaque plat</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">✨ Expériences spéciales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-amber-700 mb-2">Événements saisonniers</div>
                      <ul className="text-amber-600 text-sm space-y-1">
                        <li>• Menu Saint-Valentin avec desserts rosés</li>
                        <li>• Illuminations de Noël et menu festif</li>
                        <li>• Célébration Hanami avec spécialités sakura</li>
                        <li>• Halloween avec décorations et menu thématique</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-amber-700 mb-2">Services premium</div>
                      <ul className="text-amber-600 text-sm space-y-1">
                        <li>• Réservations acceptées (rare en famiresu)</li>
                        <li>• Service anniversaire avec dessert surprise</li>
                        <li>• Emballage cadeaux pour desserts à emporter</li>
                        <li>• Recommandations accord mets-vins</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stratégies de visite */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Optimiser sa Visite</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">💡 Stratégies selon l'occasion</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-green-700 mb-2">🥂 Rendez-vous romantique</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Réservez une table en soirée</li>
                        <li>• Commandez un vin pour deux</li>
                        <li>• Finissez par le bar à desserts</li>
                        <li>• Évitez le week-end (plus familial)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-700 mb-2">👨‍👩‍👧‍👦 Sortie familiale</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Week-end 12h-15h idéal</li>
                        <li>• Menu enfants disponible</li>
                        <li>• Bar à desserts = bonheur garanti</li>
                        <li>• Espaces adaptés aux poussettes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏰ Meilleurs créneaux</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Déjeuner calme :</strong> 11h30-14h en semaine</li>
                      <li><strong>Afternoon tea :</strong> 14h-17h avec desserts</li>
                      <li><strong>Dîner romantique :</strong> 19h-21h en semaine</li>
                      <li><strong>Brunch familial :</strong> 10h-13h le week-end</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Optimisation budget</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Lunch sets :</strong> -30% vs plats à la carte</li>
                      <li><strong>Happy hour desserts :</strong> 14h-17h</li>
                      <li><strong>Menu saisonnier :</strong> Souvent meilleur rapport qualité-prix</li>
                      <li><strong>Évitez :</strong> Week-end soir (prix pleins)</li>
                    </ul>
                  </div>
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
                  <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">10h00 - 24h00 (général)</div>
                    <div className="text-sm text-gray-500">Certains 24h/24</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">300+ restaurants</div>
                    <div className="text-sm text-gray-500">Zones métropolitaines</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes acceptées</div>
                    <div className="text-sm text-gray-500">Paiement mobile, splits possibles</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 par personne</div>
                    <div className="text-sm text-gray-500">Premium mais accessible</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour première visite */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                🎯 Première Visite Recommandée
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-purple-700">Entrée en matière</div>
                  <div className="text-purple-600">Angus Beef Steak + dessert bar = expérience complète</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Pour découvrir l'ambiance</div>
                  <div className="text-purple-600">Venez en fin d'après-midi, commandez un verre de vin</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Avec des enfants</div>
                  <div className="text-purple-600">Week-end midi + bar à desserts = succès garanti</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Budget serré ?</div>
                  <div className="text-purple-600">Lunch set en semaine + dessert à partager</div>
                </div>
              </div>
            </div>

            {/* Réservations */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                📞 Réservations
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Service unique</div>
                  <div className="text-blue-600">Seule chaîne famiresu à accepter les réservations</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Quand réserver ?</div>
                  <div className="text-blue-600">• Week-end soir (fortement conseillé)<br/>• Groupes de 6+ personnes<br/>• Occasions spéciales</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Comment ?</div>
                  <div className="text-blue-600">• Téléphone de chaque restaurant<br/>• App mobile Jonathan's<br/>• Site web officiel</div>
                </div>
              </div>
            </div>

            {/* Comparaison Skylark */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Position dans Skylark Group
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Gusto</div>
                  <div className="text-orange-600">+50% cher mais qualité très supérieure</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Clientèle cible</div>
                  <div className="text-orange-600">Familles urbaines aisées, couples, jeunes actifs</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Positionnement unique</div>
                  <div className="text-orange-600">Entre famiresu populaire et restaurant classique</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🏮 Impact Culturel
              </h3>
              <p className="text-sm text-green-700">
                Jonathan's a redéfini le concept de family restaurant au Japon en prouvant qu'on 
                pouvait allier accessibilité familiale et sophistication culinaire. La chaîne a 
                influencé toute l'industrie en montrant qu'il existait un marché pour le "premium 
                accessible" dans la restauration familiale japonaise.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.skylark.co.jp/jonathans/" 
                   className="block text-purple-600 hover:text-purple-700 text-sm">
                  → Site officiel Jonathan's
                </a>
                <a href="/type-plat/family-restaurants" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide des family restaurants
                </a>
                <a href="/chaines/gusto" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Gusto
                </a>
                <a href="/chaines/saizeriya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Découvrir Saizeriya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
