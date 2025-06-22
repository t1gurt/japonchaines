import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, Coffee, ShoppingCart } from 'lucide-react';

export default function GustoPage() {  return (
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
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">G</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gusto</h1>
              <p className="text-lg text-gray-600">ガスト | がすと</p>
              <p className="text-sm text-gray-500">Le family restaurant le plus populaire du Japon</p>
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
                  <strong>Gusto (ガスト)</strong> est LA chaîne de family restaurants (famiresu) de référence au 
                  Japon, avec plus de 1 300 établissements dans tout l'archipel. Lancée en 1970 par le groupe 
                  Skylark, Gusto incarne parfaitement le concept japonais de restaurant familial : accessibilité, 
                  variété, et un service impeccable disponible 24h/24 dans de nombreux établissements.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">🏆 Leader incontesté des famiresu</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>1 300+ restaurants</strong> - Présence dans tout le Japon</li>
                    <li>• <strong>24h/24</strong> - La majorité des établissements sont ouverts en continu</li>
                    <li>• <strong>Menu géant</strong> - Plus de 200 plats différents disponibles</li>
                    <li>• <strong>Prix accessibles</strong> - Repas complet à partir de ¥500</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Concept révolutionnaire</h3>
                <p className="mb-4">
                  Gusto a révolutionné la restauration japonaise en important le concept américain de "family 
                  restaurant" tout en l'adaptant aux goûts japonais. Cette fusion a créé un format unique : 
                  un restaurant où toute la famille peut manger ensemble, chacun trouvant son bonheur, à 
                  tout moment de la journée.
                </p>

                <h3 className="text-xl font-semibold mb-3">🔧 Innovation technologique</h3>
                <p className="mb-4">
                  Gusto est pionnier dans l'utilisation de la technologie en restauration au Japon. Robots 
                  serveurs, commande sur tablettes tactiles, système de livraison automatisé : la chaîne 
                  investit massivement dans l'innovation pour maintenir des prix bas et un service efficace.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌏 Diversité culinaire</h3>
                <p className="mb-4">
                  Le menu Gusto est un véritable tour du monde : cuisine japonaise traditionnelle, plats 
                  occidentaux adaptés, spécialités asiatiques, desserts, et même un bar à salade illimité. 
                  Cette diversité permet de satisfaire tous les goûts et tous les âges dans une même famille.
                </p>

                <h3 className="text-xl font-semibold mb-3">💫 Expérience sociale unique</h3>
                <p className="mb-4">
                  Plus qu'un simple restaurant, Gusto est devenu un lieu de socialisation important dans 
                  la société japonaise : lieu de rendez-vous pour les adolescents, espace de travail pour 
                  les étudiants, refuge nocturne pour les salarymen, et bien sûr restaurant familial le 
                  week-end.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Complet Gusto</h2>
              </div>

              {/* Catégories principales */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-3">🗂️ Structure du menu (200+ plats)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-green-700">Cuisine japonaise</div>
                      <div className="text-green-600">40+ plats</div>
                    </div>
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-red-700">Cuisine occidentale</div>
                      <div className="text-red-600">60+ plats</div>
                    </div>
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-yellow-700">Asiatique fusion</div>
                      <div className="text-yellow-600">30+ plats</div>
                    </div>
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-purple-700">Desserts & Boissons</div>
                      <div className="text-purple-600">70+ options</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plats signature */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Plats Signature Populaires</h3>
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
                        <td className="p-3 font-medium">Cheese In Hamburg</td>
                        <td className="p-3 text-red-600">Occidental</td>
                        <td className="p-3">Hamburger au cœur de fromage fondu signature</td>
                        <td className="p-3">¥799</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaage Chicken</td>
                        <td className="p-3 text-green-600">Japonais</td>
                        <td className="p-3">Poulet frit japonais, extra croustillant</td>
                        <td className="p-3">¥549</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beef Steak Garlic</td>
                        <td className="p-3 text-red-600">Occidental</td>
                        <td className="p-3">Steak de bœuf sauce à l'ail</td>
                        <td className="p-3">¥999</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Yakitori Don</td>
                        <td className="p-3 text-green-600">Japonais</td>
                        <td className="p-3">Bol de riz avec brochettes de poulet teriyaki</td>
                        <td className="p-3">¥649</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Margherita Pizza</td>
                        <td className="p-3 text-red-600">Italien</td>
                        <td className="p-3">Pizza classique, pâte fine croustillante</td>
                        <td className="p-3">¥699</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu par moment de la journée */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🕐 Menu selon l'heure</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">🌅 Petit-déjeuner (5h-11h)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Morning Set</strong> - ¥399 (œufs, toast, café)</li>
                      <li>• <strong>Pancake Set</strong> - ¥499 (3 pancakes, sirop, beurre)</li>
                      <li>• <strong>Japanese Morning</strong> - ¥549 (riz, miso, poisson grillé)</li>
                      <li>• <strong>Sandwich Morning</strong> - ¥449 (sandwich + salade + café)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">🌙 Late Night (22h-5h)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Midnight Ramen</strong> - ¥649 (ramen + gyoza)</li>
                      <li>• <strong>Curry Rice</strong> - ¥549 (disponible 24h/24)</li>
                      <li>• <strong>Fried Rice</strong> - ¥599 (riz sauté maison)</li>
                      <li>• <strong>Study Set</strong> - ¥399 (snack + boisson illimitée)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bar à salade et boissons */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥗 Bar à Salade & Boissons</h3>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">🌿 Salad Bar Illimité</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-green-700 mb-2">Contenu du bar</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• 15+ légumes frais quotidiens</li>
                        <li>• 8 sauces et vinaigrettes</li>
                        <li>• Fruits de saison</li>
                        <li>• Corn, olives, fromage râpé</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-700 mb-2">Prix et formules</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• <strong>Seul :</strong> ¥599 (illimité)</li>
                        <li>• <strong>+ plat :</strong> ¥299 (supplément)</li>
                        <li>• <strong>+ boissons :</strong> ¥199 (supplément)</li>
                        <li>• <strong>Enfants :</strong> ¥299 (jusqu'à 12 ans)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">☕ Drink Bar</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Café (8 variétés)</li>
                      <li>• Thés chauds et glacés</li>
                      <li>• Sodas et jus (20+ saveurs)</li>
                      <li>• Chocolats chauds</li>
                      <li>• <strong>Prix :</strong> ¥329 en illimité</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">🍨 Desserts populaires</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Parfait aux fruits - ¥449</li>
                      <li>• Chocolate Volcano - ¥399</li>
                      <li>• Pancake Tower - ¥599</li>
                      <li>• Ice Cream Sundae - ¥349</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* L'expérience technologique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Innovation Technologique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🤖 Robots serveurs "Bellabot"</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Gusto déploie des robots autonomes pour la livraison des plats depuis 2020
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Navigation autonome entre les tables</li>
                    <li>• Reconnaissance vocale pour l'interaction clients</li>
                    <li>• Capacité de transport de 4 plateaux simultanément</li>
                    <li>• Réduction des temps d'attente de 30%</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📱 Commande digitale</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tablettes tactiles à chaque table</li>
                      <li>• Menu interactif avec photos détaillées</li>
                      <li>• Personnalisation des plats en temps réel</li>
                      <li>• Paiement direct à table</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🏭 Cuisine automatisée</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Système de friture automatique</li>
                      <li>• Grills programmables</li>
                      <li>• Contrôle température par IA</li>
                      <li>• Traçabilité complète des ingrédients</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide d'utilisation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Bien Utiliser Gusto</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">💡 Stratégies d'optimisation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-yellow-700 mb-2">🍽️ Pour les familles</div>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Commandez des plats à partager</li>
                        <li>• Bar à salade pour les enfants difficiles</li>
                        <li>• Sets combinés pour économiser</li>
                        <li>• Happy hour 14h-17h (prix réduits)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-yellow-700 mb-2">📚 Pour étudier/travailler</div>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Drink bar + petit plat = base parfaite</li>
                        <li>• WiFi gratuit dans tous les restaurants</li>
                        <li>• Prises électriques disponibles</li>
                        <li>• Ambiance calme en journée</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏰ Meilleurs moments</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Petit-déjeuner :</strong> 7h-9h (calme, service rapide)</li>
                      <li><strong>Déjeuner :</strong> 11h30-14h (nombreux sets)</li>
                      <li><strong>Étude :</strong> 14h-18h (calme, drink bar)</li>
                      <li><strong>Dîner familial :</strong> 18h-21h (animation)</li>
                      <li><strong>Late night :</strong> 22h-2h (menu spécial)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Économies possibles</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Happy Hour :</strong> -30% sur certains plats</li>
                      <li><strong>Sets combinés :</strong> -20% vs plats séparés</li>
                      <li><strong>App mobile :</strong> Coupons exclusifs</li>
                      <li><strong>Carte fidélité :</strong> Points = repas gratuits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phénomène social */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Gusto comme Phénomène Social</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">👨‍👩‍👧‍👦 Lieu de rassemblement familial</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Week-ends :</strong> Brunch familial incontournable</li>
                    <li><strong>Anniversaires :</strong> Desserts et ambiance détendue</li>
                    <li><strong>Générations :</strong> Menu pour tous les âges</li>
                    <li><strong>Budgets :</strong> Accessible même aux familles nombreuses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">🎓 Espace de la jeunesse</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Étudiants :</strong> Bureau d'étude avec WiFi et prises</li>
                    <li><strong>Adolescents :</strong> Point de rendez-vous social</li>
                    <li><strong>Salarymen :</strong> Pause décompression après le travail</li>
                    <li><strong>24h/24 :</strong> Refuge nocturne pour les insomniaques</li>
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
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">24h/24 (majorité des restaurants)</div>
                    <div className="text-sm text-gray-500">Certains 6h-2h</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">1 300+ restaurants</div>
                    <div className="text-sm text-gray-500">Partout au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes acceptées</div>
                    <div className="text-sm text-gray-500">Paiement mobile OK</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥700-1,200 par personne</div>
                    <div className="text-sm text-gray-500">Excellent rapport qualité-prix</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pratiques */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Conseils Pratiques
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">Première visite ?</div>
                  <div className="text-green-600">Cheese In Hamburg + Bar à salade = combo parfait</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Avec des enfants ?</div>
                  <div className="text-green-600">Menu enfant ¥399, chaises hautes disponibles</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Petit budget ?</div>
                  <div className="text-green-600">Happy Hour 14h-17h, sets matinaux ¥399</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Long séjour ?</div>
                  <div className="text-green-600">Drink bar + WiFi = bureau temporaire parfait</div>
                </div>
              </div>
            </div>

            {/* Application mobile */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                📱 App Mobile Gusto
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Fonctionnalités</div>
                  <div className="text-blue-600">• Localisation des restaurants<br/>• Coupons de réduction<br/>• Pré-commande possible<br/>• Programme de fidélité</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Avantages exclusifs</div>
                  <div className="text-blue-600">• Offres réservées aux membres<br/>• Points de fidélité doublés<br/>• Accès aux nouveautés en avant-première</div>
                </div>
              </div>
            </div>

            {/* Comparaison */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Vs autres famiresu
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Jonathan's</div>
                  <div className="text-orange-600">Plus populaire, plus de technologie, même groupe</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Vs Saizeriya</div>
                  <div className="text-orange-600">Plus cher mais beaucoup plus varié</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Avantages Gusto</div>
                  <div className="text-orange-600">Innovation, qualité constante, réseau national</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Impact Culturel
              </h3>
              <p className="text-sm text-purple-700">
                Gusto a profondément transformé les habitudes alimentaires japonaises en démocratisant 
                la cuisine occidentale et en créant un "troisième lieu" entre la maison et le bureau. 
                C'est devenu un élément central de la culture populaire japonaise, symbole de 
                l'accessibilité et de la modernité.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.skylark.co.jp/gusto/" 
                   className="block text-green-600 hover:text-green-700 text-sm">
                  → Site officiel Gusto
                </a>
                <a href="/type-plat/family-restaurants" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide des family restaurants
                </a>
                <a href="/chaines/saizeriya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Saizeriya
                </a>
                <a href="/chaines/jonathans" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Découvrir Jonathan's
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
