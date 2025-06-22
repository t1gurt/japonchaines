import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Smartphone, Zap, DollarSign } from 'lucide-react';

export default function HamaSushiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-orange-600">🍜 Japonchaines</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/type-plat" className="text-gray-700 hover:text-orange-600">
                Par Type de Plat
              </Link>
              <Link href="/chaines" className="text-gray-700 hover:text-orange-600">
                Par Chaîne
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">は</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hama Sushi</h1>
              <p className="text-lg text-gray-600">はま寿司 | 濱寿司</p>
              <p className="text-sm text-gray-500">Le kaiten-zushi le plus abordable du Japon</p>
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
                <Info className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Hama Sushi (はま寿司)</strong> est la chaîne de kaiten-zushi la plus économique du Japon, 
                  appartenant au groupe Zensho (même groupe que Sukiya). Lancée en 1968, Hama Sushi s'est imposée 
                  comme le choix incontournable pour les familles et étudiants cherchant des sushis de qualité 
                  correcte à prix imbattables.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">💰 La révolution des prix bas</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Prix unique ¥110</strong> - Presque tous les sushis au même prix ultra-accessible</li>
                    <li>• <strong>Qualité constante</strong> - Standards élevés malgré les prix bas</li>
                    <li>• <strong>Innovation technologique</strong> - Automatisation pour réduire les coûts</li>
                    <li>• <strong>Accessibilité maximale</strong> - Démocratise les sushis pour tous</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Stratégie unique</h3>
                <p className="mb-4">
                  Hama Sushi a révolutionné l'industrie en proposant une expérience kaiten-zushi complète 
                  à des prix défiant toute concurrence. Grâce à une chaîne d'approvisionnement optimisée 
                  et à l'automatisation des processus, la chaîne maintient une qualité satisfaisante tout 
                  en offrant les prix les plus bas du marché.
                </p>

                <h3 className="text-xl font-semibold mb-3">📱 Technologies innovantes</h3>
                <p className="mb-4">
                  Pionnier dans l'utilisation de robots pour la préparation du riz et l'automatisation 
                  des commandes, Hama Sushi investit massivement dans la technologie pour maintenir ses 
                  prix attractifs tout en améliorant l'efficacité du service.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌟 Positionnement familial</h3>
                <p className="mb-4">
                  Avec plus de 500 restaurants principalement situés en banlieue, Hama Sushi cible 
                  spécifiquement les familles japonaises en quête d'un repas économique et satisfaisant. 
                  C'est l'option parfaite pour découvrir les sushis sans se ruiner.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Détaillé</h2>
              </div>

              {/* Système de prix simplifié */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-green-800 mb-3">💸 Système de prix ultra-simplifié</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-lg font-bold text-green-600">¥110</div>
                    <div className="text-sm text-gray-600">90% du menu</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-lg font-bold text-yellow-600">¥165</div>
                    <div className="text-sm text-gray-600">Spécialités premium</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-lg font-bold text-red-600">¥220</div>
                    <div className="text-sm text-gray-600">Produits exceptionnels</div>
                  </div>
                </div>
              </div>

              {/* Sushis populaires à ¥110 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍣 Sushis Populaires (¥110)</h3>
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
                        <td className="p-3">Saumon atlantique frais, portion généreuse</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Thon rouge</td>
                        <td className="p-3">まぐろ</td>
                        <td className="p-3">Thon rouge classique, excellent rapport qualité-prix</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Hamachi</td>
                        <td className="p-3">はまち</td>
                        <td className="p-3">Sériole japonaise, chair fondante</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Crevette bouillée</td>
                        <td className="p-3">ゆでえび</td>
                        <td className="p-3">Crevette cuite, douce et croquante</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Calamar</td>
                        <td className="p-3">いか</td>
                        <td className="p-3">Calamar frais du Pacifique</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Omelette</td>
                        <td className="p-3">たまご</td>
                        <td className="p-3">Tamago traditionnel, léger et sucré</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Maquereau mariné</td>
                        <td className="p-3">しめさば</td>
                        <td className="p-3">Maquereau au vinaigre, saveur intense</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Poulet teriyaki</td>
                        <td className="p-3">照り焼きチキン</td>
                        <td className="p-3">Innovation Hama Sushi, très populaire</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Makis et spécialités */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍱 Makis & Spécialités (¥110)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Makis populaires</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Saumon avocat</strong> - Combinaison fraîcheur et crémeux</li>
                      <li>• <strong>Thon épicé</strong> - Avec sauce mayonnaise pimentée</li>
                      <li>• <strong>Concombre (Kappa)</strong> - Parfait pour les végétariens</li>
                      <li>• <strong>Crevette tempura</strong> - Croustillant et savoureux</li>
                      <li>• <strong>Californian roll</strong> - Style occidental adapté</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Spécialités Hama Sushi</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Karaage sushi</strong> - Poulet frit japonais sur riz</li>
                      <li>• <strong>Hamburger sushi</strong> - Innovation unique</li>
                      <li>• <strong>Corn mayo</strong> - Maïs mayonnaise, très local</li>
                      <li>• <strong>Salade de pommes de terre</strong> - Fusion japonaise</li>
                      <li>• <strong>Inari sushi</strong> - Tofu sucré, option végétarienne</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Options premium */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">⭐ Options Premium</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Produit</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Saumon mi-cuit</td>
                        <td className="p-3">Saumon grillé légèrement, texture unique</td>
                        <td className="p-3 text-yellow-600 font-medium">¥165</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Anguille grillée</td>
                        <td className="p-3">Unagi traditionnel, sauce tare</td>
                        <td className="p-3 text-yellow-600 font-medium">¥165</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Thon gras (Chu-toro)</td>
                        <td className="p-3">Ventre de thon, fondant exceptionnel</td>
                        <td className="p-3 text-red-600 font-medium">¥220</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Oursin</td>
                        <td className="p-3">Uni de qualité, crémeux</td>
                        <td className="p-3 text-red-600 font-medium">¥220</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Commande et technologie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Smartphone className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Système de Commande Moderne</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📱 Tablettes tactiles multilingues</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Chaque table dispose d'une tablette intuitive avec support du français !
                  </p>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Sélectionnez "Français" dans le menu des langues</li>
                    <li><strong>2.</strong> Parcourez les catégories avec photos HD</li>
                    <li><strong>3.</strong> Ajoutez vos choix au panier</li>
                    <li><strong>4.</strong> Confirmez et payez directement sur la tablette</li>
                    <li><strong>5.</strong> Vos sushis arrivent frais par le tapis roulant</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🤖 Automatisation avancée</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Robots pour la préparation du riz sushi</li>
                      <li>• Système de livraison automatisé</li>
                      <li>• Contrôle qualité par capteurs</li>
                      <li>• Nettoyage automatique du tapis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚡ Service ultra-rapide</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Livraison en moins de 3 minutes</li>
                      <li>• Pas d'attente grâce à l'automatisation</li>
                      <li>• Rotation rapide des tables</li>
                      <li>• Parfait pour les repas express</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages économiques */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi Hama Sushi est si économique</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">💡 Stratégies d'optimisation</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Automatisation poussée</strong> - Réduit les coûts de main-d'œuvre</li>
                    <li><strong>Achats en gros volume</strong> - Power du groupe Zensho</li>
                    <li><strong>Emplacements stratégiques</strong> - Loyers moins chers en banlieue</li>
                    <li><strong>Menu simplifié</strong> - Moins de gaspillage, plus d'efficacité</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">🎯 Modèle économique</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Volume élevé</strong> - Rotation rapide des clients</li>
                    <li><strong>Marge faible, volume important</strong> - Philosophie low-cost</li>
                    <li><strong>Standardisation maximale</strong> - Processus identiques partout</li>
                    <li><strong>Innovation continue</strong> - Investissement en R&D</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">💰 Exemple de repas économique</h4>
                <div className="text-sm text-green-700">
                  <p><strong>Repas complet pour ¥1,100 :</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• 8 sushis variés (8 × ¥110 = ¥880)</li>
                    <li>• Miso soupe gratuite</li>
                    <li>• Thé vert gratuit</li>
                    <li>• Dessert mochi (¥110)</li>
                    <li>• Gari (gingembre) et wasabi gratuits</li>
                  </ul>
                  <p className="mt-2 font-medium">Total: ¥990 + taxes = environ ¥1,100</p>
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
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">11h00 - 23h00 (général)</div>
                    <div className="text-sm text-gray-500">Certains 24h/24</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">500+ restaurants</div>
                    <div className="text-sm text-gray-500">Principalement en banlieue</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes acceptées</div>
                    <div className="text-sm text-gray-500">E-wallets, IC cards</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥1,000-1,500 par personne</div>
                    <div className="text-sm text-gray-500">Le plus économique</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">Budget serré</div>
                  <div className="text-green-600">Concentrez-vous sur les assiettes ¥110 - excellent rapport qualité-prix</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Première expérience sushi</div>
                  <div className="text-green-600">Parfait pour découvrir sans pression financière</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Avec des enfants</div>
                  <div className="text-green-600">Options fusion (karaage, hamburger) très appréciées</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Végétariens</div>
                  <div className="text-green-600">Kappa-maki, inari, tamago disponibles</div>
                </div>
              </div>
            </div>

            {/* Comparaison */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📊 Vs la concurrence
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Vs Sushiro</div>
                  <div className="text-yellow-600">50% moins cher, qualité légèrement inférieure</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Vs Kura Sushi</div>
                  <div className="text-yellow-600">Plus économique, moins de jeux/divertissements</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Positionnement</div>
                  <div className="text-yellow-600">Le choix économique sans compromis majeur</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-blue-700">
                Hama Sushi représente la démocratisation des sushis au Japon. En rendant cette cuisine 
                traditionnelle accessible à tous les budgets, la chaîne a contribué à faire des sushis 
                un plat du quotidien pour les familles japonaises, transformant ce qui était autrefois 
                un luxe en repas familial abordable.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.hamasushi.com/" 
                   className="block text-green-600 hover:text-green-700 text-sm">
                  → Site officiel Hama Sushi
                </a>
                <a href="/type-plat/kaiten-zushi" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet kaiten-zushi
                </a>
                <a href="/chaines/sushiro" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Sushiro
                </a>
                <a href="/chaines/kura-sushi" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Kura Sushi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
