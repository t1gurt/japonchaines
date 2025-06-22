import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Gamepad2, Gift, Shield } from 'lucide-react';

export default function KuraSushiPage() {  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/kaiten-zushi" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Kaiten-zushi
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">く</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kura Sushi</h1>
              <p className="text-lg text-gray-600">くら寿司 | 無添くら寿司</p>
              <p className="text-sm text-gray-500">Le kaiten-zushi révolutionnaire sans additifs chimiques</p>
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
                  <strong>Kura Sushi (くら寿司)</strong> est une chaîne de kaiten-zushi révolutionnaire qui a transformé 
                  l'industrie avec son concept <em>"Muttenka"</em> (無添加) - sans additifs chimiques. Fondée en 1977 
                  à Osaka, Kura Sushi s'est imposée comme la chaîne la plus innovante du Japon, alliant tradition 
                  culinaire et technologie de pointe.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-2">🎯 Le concept révolutionnaire</h3>
                  <ul className="text-purple-700 space-y-1">
                    <li>• <strong>100% sans additifs chimiques</strong> - Aucun conservateur, colorant ou exhausteur de goût artificiel</li>
                    <li>• <strong>Système Bikkura-Pon!</strong> - Jeu de capsules intégré pour divertir les clients</li>
                    <li>• <strong>Technologie anti-virus</strong> - Système de protection antibactérien unique</li>
                    <li>• <strong>Traçabilité complète</strong> - Tous les ingrédients sont tracés de l'origine à l'assiette</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏆 Innovations technologiques</h3>
                <p className="mb-4">
                  Kura Sushi est pionnier dans l'intégration de la technologie dans la restauration japonaise. 
                  Leurs restaurants utilisent des robots pour certaines préparations, des systèmes de commande 
                  tactiles multilingues, et leur fameux système de protection des sushis par des couvercles 
                  antibactériens automatiques.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 Expansion internationale</h3>
                <p className="mb-4">
                  Avec plus de 540 restaurants au Japon et une présence croissante aux États-Unis, en Corée du Sud 
                  et à Taïwan, Kura Sushi exporte son modèle unique de restauration saine et ludique à travers le monde.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Détaillé</h2>
              </div>

              {/* Système de prix */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-purple-800 mb-3">💰 Système de prix par couleur d'assiette</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
                    <div className="text-sm font-medium">¥115</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-sm font-medium">¥165</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-black rounded-full mx-auto mb-1"></div>
                    <div className="text-sm font-medium">¥275</div>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-1"></div>
                    <div className="text-sm font-medium">¥385</div>
                  </div>
                </div>
              </div>

              {/* Sushis populaires */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍣 Sushis Populaires (¥115)</h3>
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
                        <td className="p-3 font-medium">Saumon</td>
                        <td className="p-3">サーモン</td>
                        <td className="p-3">Saumon atlantique frais, sans additifs</td>
                        <td className="p-3">¥115</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Thon rouge</td>
                        <td className="p-3">まぐろ</td>
                        <td className="p-3">Thon rouge traditionnel, qualité sashimi</td>
                        <td className="p-3">¥115</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Hamachi</td>
                        <td className="p-3">はまち</td>
                        <td className="p-3">Sériole japonaise, texture fondante</td>
                        <td className="p-3">¥115</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Crevette bouillée</td>
                        <td className="p-3">えび</td>
                        <td className="p-3">Crevette bouillie, douce et sucrée</td>
                        <td className="p-3">¥115</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Calamar</td>
                        <td className="p-3">いか</td>
                        <td className="p-3">Calamar frais, texture croquante</td>
                        <td className="p-3">¥115</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Omelette japonaise</td>
                        <td className="p-3">たまご</td>
                        <td className="p-3">Tamago traditionnel, légèrement sucré</td>
                        <td className="p-3">¥115</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Spécialités premium */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Spécialités Premium</h3>
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
                        <td className="p-3 font-medium">Thon gras (Otoro)</td>
                        <td className="p-3">大とろ</td>
                        <td className="p-3">Ventre de thon, fondant exceptionnel</td>
                        <td className="p-3">¥385</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Oursin</td>
                        <td className="p-3">うに</td>
                        <td className="p-3">Oursin de Hokkaido, crémeux</td>
                        <td className="p-3">¥275</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ikura</td>
                        <td className="p-3">いくら</td>
                        <td className="p-3">Œufs de saumon, éclatent en bouche</td>
                        <td className="p-3">¥275</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Anguille grillée</td>
                        <td className="p-3">うなぎ</td>
                        <td className="p-3">Unagi glacé sauce tare, saveur intense</td>
                        <td className="p-3">¥275</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu enfants et desserts */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍮 Desserts & Menu Enfants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-purple-600">Desserts populaires</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mochi glacé</strong> - ¥115 (parfums variés)</li>
                      <li>• <strong>Dorayaki</strong> - ¥165 (crêpe fourrée anko)</li>
                      <li>• <strong>Pudding</strong> - ¥115 (style japonais)</li>
                      <li>• <strong>Cheesecake</strong> - ¥165 (version légère)</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-purple-600">Menu enfants</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Set Tamago</strong> - ¥165 (omelette + boisson)</li>
                      <li>• <strong>Set Saumon</strong> - ¥215 (saumon grillé + accompagnements)</li>
                      <li>• <strong>Bento Kids</strong> - ¥385 (assortiment adapté)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Système Bikkura-Pon */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Système Bikkura-Pon! 🎮</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-800 mb-2">🎁 Comment ça marche ?</h3>
                <ol className="text-purple-700 space-y-2">
                  <li><strong>1.</strong> Mangez vos sushis et glissez 5 assiettes vides dans la fente</li>
                  <li><strong>2.</strong> Un jeu vidéo amusant se lance automatiquement sur l'écran</li>
                  <li><strong>3.</strong> Si vous gagnez, vous recevez une capsule surprise !</li>
                  <li><strong>4.</strong> Collectionnez les figurines exclusives Kura Sushi</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-purple-600 mb-2">Récompenses possibles</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Figurines de personnages populaires</li>
                    <li>• Porte-clés Kura Sushi exclusifs</li>
                    <li>• Autocollants collector</li>
                    <li>• Accessoires de cuisine miniatures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-600 mb-2">Pourquoi les enfants adorent</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Transformation du repas en jeu</li>
                    <li>• Encouragement à terminer son assiette</li>
                    <li>• Collection de souvenirs uniques</li>
                    <li>• Expérience interactive familiale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Commander</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">📱 Système de commande tactile</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    Kura Sushi utilise des écrans tactiles multilingues à chaque table, disponibles en français !
                  </p>
                  <ol className="text-yellow-700 text-sm space-y-1">
                    <li><strong>1.</strong> Appuyez sur l'écran et sélectionnez "Français"</li>
                    <li><strong>2.</strong> Parcourez le menu par catégories (sushi, maki, desserts...)</li>
                    <li><strong>3.</strong> Touchez l'image du plat désiré</li>
                    <li><strong>4.</strong> Confirmez votre commande</li>
                    <li><strong>5.</strong> Votre commande arrive par le tapis roulant supérieur</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍣 Tapis roulant traditionnel</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sélection libre des assiettes qui passent</li>
                      <li>• Parfait pour découvrir de nouveaux goûts</li>
                      <li>• Assiettes renouvelées régulièrement</li>
                      <li>• Protection antibactérienne automatique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🚄 Commande express</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Livraison directe à votre table</li>
                      <li>• Fraîcheur garantie</li>
                      <li>• Sélection de produits premium</li>
                      <li>• Arrivée par le rail supérieur</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations pratiques */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Concept "Muttenka" (Sans additifs)</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-600 mb-3">🌿 Engagement qualité</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Aucun conservateur artificiel</strong> - Fraîcheur naturelle préservée</li>
                    <li><strong>Pas de colorants chimiques</strong> - Couleurs naturelles des ingrédients</li>
                    <li><strong>Sans exhausteurs de goût</strong> - Saveurs authentiques respectées</li>
                    <li><strong>Traçabilité complète</strong> - Origine de chaque ingrédient connue</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-3">🔬 Innovation sécurité</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Système anti-virus</strong> - Protection antibactérienne avancée</li>
                    <li><strong>Couvercles automatiques</strong> - Hygiène maximale du tapis</li>
                    <li><strong>Contrôle température</strong> - Chaîne du froid respectée</li>
                    <li><strong>Nettoyage haute fréquence</strong> - Désinfection continue</li>
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
                  <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">11h00 - 23h00 (général)</div>
                    <div className="text-sm text-gray-500">Varie selon les emplacements</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">540+ restaurants au Japon</div>
                    <div className="text-sm text-gray-500">Centres commerciaux, zones touristiques</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Espèces, cartes, IC cards</div>
                    <div className="text-sm text-gray-500">PayPay, autres e-wallets</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Gift className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 par personne</div>
                    <div className="text-sm text-gray-500">Selon l'appétit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                💡 Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-purple-700">Meilleur moment</div>
                  <div className="text-purple-600">Évitez 12h-14h et 19h-21h (heures de pointe)</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Avec des enfants</div>
                  <div className="text-purple-600">Le système Bikkura-Pon! rend l'expérience magique</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Pour les végétariens</div>
                  <div className="text-purple-600">Options limitées : tamago, avocat, inari, kappa-maki</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Économiser</div>
                  <div className="text-purple-600">Concentrez-vous sur les assiettes jaunes (¥115)</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-yellow-700">
                Kura Sushi représente l'évolution moderne du kaiten-zushi, alliant tradition culinaire 
                japonaise et innovation technologique. Le concept "Muttenka" reflète la préoccupation 
                croissante des Japonais pour une alimentation saine, tout en conservant le plaisir 
                et la convivialité du repas en famille.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.kurasushi.co.jp/" 
                   className="block text-purple-600 hover:text-purple-700 text-sm">
                  → Site officiel Kura Sushi
                </a>
                <a href="/type-plat/kaiten-zushi" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet kaiten-zushi
                </a>
                <a href="/chaines/sushiro" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Sushiro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
