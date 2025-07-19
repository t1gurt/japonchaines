import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap, Smartphone, Truck } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bamiyan (バーミヤン) : Guide du Restaurant Chinois Familial | Japonchaines",
  description: "Découvrez Bamiyan, le restaurant familial chinois du groupe Skylark. Menus variés, gyoza, ramen et plats généreux à prix très abordables.",
  keywords: [
    'bamiyan', 'バーミヤン', 'cuisine chinoise', 'restaurant chinois japon',
    'gyoza', 'ramen chinois', 'riz frit', 'bœuf au poivre noir',
    'restaurant familial', 'prix abordable japon', 'chaîne restaurant'
  ],
  openGraph: {
    title: "Bamiyan (バーミヤン) : Guide du Restaurant Chinois Familial | Japonchaines",
    description: "Découvrez Bamiyan, le restaurant familial chinois du groupe Skylark. Menus variés, gyoza, ramen et plats généreux à prix très abordables.",
    type: 'article',
    url: '/chaines/bamiyan',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/bamiyan',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BamiyanPage() {
  return (
    <>
      <ChainViewTracker chainName="bamiyan" chainCategory="cuisine-chinoise" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/cuisine-chinoise" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la Cuisine Chinoise
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bamiyan</h1>
              <p className="text-lg text-gray-600">バーミヤン</p>
              <p className="text-sm text-gray-500">La cuisine chinoise familiale et moderne depuis 1986</p>
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
                  <strong>Bamiyan</strong> (バーミヤン) est une chaîne moderne de cuisine chinoise 
                  appartenant au groupe Skylark Holdings, qui possède également Gusto et 
                  Jonathan's. Fondée en 1986, Bamiyan compte plus de 320 restaurants au Japon 
                  et se distingue par son approche familiale, ses prix accessibles et son 
                  innovation technologique. La chaîne pionnier des robots de service au Japon.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-orange-800 mb-2">🤖 Innovation & modernité</h3>
                  <ul className="text-orange-700 space-y-1">
                    <li>• <strong>Robots serveurs</strong> - "Bamiyan-kun" livre les plats</li>
                    <li>• <strong>Commande tactile</strong> - Tablettes sur chaque table</li>
                    <li>• <strong>Livraison efficace</strong> - Service rapide et précis</li>
                    <li>• <strong>Prix transparents</strong> - Menu clair, sans surprises</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏢 Groupe Skylark</h3>
                <p className="mb-4">
                  Appartenant au puissant groupe Skylark Holdings, Bamiyan bénéficie 
                  d'une logistique optimisée et d'investissements constants en R&D. 
                  Cette appartenance lui permet de maintenir des prix compétitifs 
                  tout en proposant des innovations technologiques de pointe, 
                  comme les robots serveurs déployés dans la majorité des restaurants.
                </p>

                <h3 className="text-xl font-semibold mb-3">👨‍👩‍👧‍👦 Positionnement familial</h3>
                <p className="mb-4">
                  Bamiyan cible spécifiquement les familles japonaises avec des 
                  enfants, proposant un environnement coloré et ludique, des menus 
                  enfants attractifs, et des prix qui permettent aux familles de 
                  sortir régulièrement. Les restaurants sont conçus pour accueillir 
                  poussettes et chaises hautes.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍜 Cuisine chinoise adaptée</h3>
                <p className="mb-4">
                  Le menu de Bamiyan propose une cuisine chinoise adaptée aux goûts 
                  japonais, moins épicée et plus douce que l'originale. Cette 
                  approche permet d'initier les enfants japonais à la cuisine 
                  chinoise tout en satisfaisant les adultes en quête de saveurs 
                  authentiques mais accessibles.
                </p>

                <h3 className="text-xl font-semibold mb-3">🚀 Technologie au service</h3>
                <p className="mb-4">
                  Bamiyan est pionnier de l'automatisation dans la restauration 
                  japonaise. Outre les robots serveurs, la chaîne expérimente 
                  l'intelligence artificielle pour optimiser les commandes, 
                  réduire les temps d'attente et améliorer l'expérience client 
                  tout en maîtrisant les coûts de personnel.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Familial & Moderne</h2>
              </div>

              {/* Plats signature */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Spécialités Bamiyan</h3>
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
                        <td className="p-3 font-medium">Gyoza Bamiyan (6 pièces)</td>
                        <td className="p-3">バーミヤン餃子（6個）</td>
                        <td className="p-3">Gyoza signature, pâte fine et croustillante</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Riz sauté spécial</td>
                        <td className="p-3">特製チャーハン</td>
                        <td className="p-3">Riz sauté aux œufs et légumes, recette maison</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ramen Bamiyan</td>
                        <td className="p-3">バーミヤンラーメン</td>
                        <td className="p-3">Ramen signature, bouillon riche et équilibré</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Poulet au citron</td>
                        <td className="p-3">油淋鶏</td>
                        <td className="p-3">Poulet frit sauce citron, légèrement acidulé</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mapo tofu doux</td>
                        <td className="p-3">マイルド麻婆豆腐</td>
                        <td className="p-3">Version adoucie pour les familles</td>
                        <td className="p-3">¥650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plats principaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍽️ Plats Principaux</h3>
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
                        <td className="p-3 font-medium">Porc sauce aigre-douce</td>
                        <td className="p-3">酢豚</td>
                        <td className="p-3">Classique revisité, sauce équilibrée</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bœuf aux oignons</td>
                        <td className="p-3">牛肉と玉ねぎ炒め</td>
                        <td className="p-3">Émincé de bœuf tendre, oignons caramélisés</td>
                        <td className="p-3">¥980</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Crevettes chili doux</td>
                        <td className="p-3">海老チリマイルド</td>
                        <td className="p-3">Version familiale moins épicée</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Canard laqué</td>
                        <td className="p-3">北京ダック</td>
                        <td className="p-3">Canard traditionnel, service simplifié</td>
                        <td className="p-3">¥1,280</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Poulet aux noix de cajou</td>
                        <td className="p-3">鶏肉カシューナッツ炒め</td>
                        <td className="p-3">Sauté croustillant, saveur délicate</td>
                        <td className="p-3">¥780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Nouilles et soupes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍜 Nouilles & Soupes</h3>
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
                        <td className="p-3 font-medium">Yakisoba familial</td>
                        <td className="p-3">ファミリー焼きそば</td>
                        <td className="p-3">Grande portion pour partager</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ramen aux légumes</td>
                        <td className="p-3">野菜ラーメン</td>
                        <td className="p-3">Bouillon léger, légumes croquants</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Dan Dan Men doux</td>
                        <td className="p-3">マイルド担々麺</td>
                        <td className="p-3">Nouilles au sésame, version adoucie</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Soupe wonton</td>
                        <td className="p-3">ワンタンスープ</td>
                        <td className="p-3">Raviolis fins dans bouillon clair</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Udon chinois</td>
                        <td className="p-3">中華うどん</td>
                        <td className="p-3">Fusion originale Bamiyan</td>
                        <td className="p-3">¥680</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu enfants */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🧒 Menu Enfants</h3>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <p className="text-pink-800 text-sm">
                    <strong>Spécialement adapté :</strong> Portions enfants, saveurs douces, 
                    et présentation ludique avec jouets offerts.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Plats principaux</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mini riz sauté</strong> - Version enfant colorée (¥450)</li>
                      <li>• <strong>Petits gyoza</strong> - 3 pièces adaptées (¥250)</li>
                      <li>• <strong>Nuggets chinois</strong> - Poulet pané doux (¥380)</li>
                      <li>• <strong>Nouilles simples</strong> - Udon nature (¥350)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Sets enfants</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Set Happy</strong> - Plat + boisson + jouet (¥680)</li>
                      <li>• <strong>Set Découverte</strong> - Mini plats variés (¥750)</li>
                      <li>• <strong>Set Anniversaire</strong> - Avec dessert spécial (¥850)</li>
                      <li>• <strong>Drink Bar enfant</strong> - Boissons à volonté (¥200)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥤 Boissons & Drink Bar</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Boissons chaudes</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé oolong</strong> - ¥200</li>
                      <li>• <strong>Thé au jasmin</strong> - ¥220</li>
                      <li>• <strong>Café américain</strong> - ¥250</li>
                      <li>• <strong>Thé vert japonais</strong> - ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Boissons froides</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé glacé</strong> - ¥250</li>
                      <li>• <strong>Cola</strong> - ¥280</li>
                      <li>• <strong>Jus d'orange</strong> - ¥300</li>
                      <li>• <strong>Eau minérale</strong> - ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Drink Bar</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Drink Bar adulte</strong> - ¥350</li>
                      <li>• <strong>Drink Bar enfant</strong> - ¥200</li>
                      <li>• <strong>Plus de 30 boissons</strong> à volonté</li>
                      <li>• <strong>Café, thés, sodas</strong> inclus</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation technologique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Innovation Technologique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🤖 Bamiyan-kun : Le robot serveur</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Bamiyan a été pionnier dans l'introduction de robots serveurs au Japon. 
                    "Bamiyan-kun", le robot mascotte, livre les plats aux tables avec efficacité 
                    et devient une attraction pour les enfants.
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Navigation autonome</strong> - Se déplace seul entre les tables</li>
                    <li>• <strong>Reconnaissance vocale</strong> - Interaction simple avec les clients</li>
                    <li>• <strong>Capacité optimisée</strong> - Porte plusieurs plats simultanément</li>
                    <li>• <strong>Attraction enfants</strong> - Design ludique et sympathique</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📱 Commande tactile</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tablettes sur chaque table</li>
                      <li>• Menu interactif avec photos</li>
                      <li>• Commande en plusieurs langues</li>
                      <li>• Paiement direct à table</li>
                      <li>• Jeux pour enfants intégrés</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚡ Efficacité optimisée</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Temps d'attente réduits</li>
                      <li>• Précision des commandes améliorée</li>
                      <li>• Service multilingue automatique</li>
                      <li>• Personnalisation des préférences</li>
                      <li>• Analyse des données clients</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🚀 Innovation continue</h4>
                  <p className="text-sm text-green-700">
                    Bamiyan continue d'investir dans la technologie pour améliorer l'expérience 
                    client : intelligence artificielle pour prédire les commandes, optimisation 
                    des flux en cuisine, et nouvelles formes d'interaction homme-machine. 
                    La chaîne sert de laboratoire d'innovation pour le groupe Skylark.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Familial Pratique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">👨‍👩‍👧‍👦 Expérience famille optimale</h3>
                  <ol className="text-purple-700 text-sm space-y-1">
                    <li><strong>1.</strong> Réservation via app ou site web recommandée</li>
                    <li><strong>2.</strong> Demander table avec tablette pour les enfants</li>
                    <li><strong>3.</strong> Commander via tablette tactile (facile et amusant)</li>
                    <li><strong>4.</strong> Observer l'arrivée du robot Bamiyan-kun</li>
                    <li><strong>5.</strong> Profiter du drink bar pour prolonger le moment</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Menu famille type</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Gyoza Bamiyan</strong> - À partager (¥380)</li>
                      <li>• <strong>Riz sauté spécial</strong> - Plat principal (¥680)</li>
                      <li>• <strong>Set Happy enfant</strong> - Menu complet (¥680)</li>
                      <li>• <strong>Drink Bar famille</strong> - Boissons à volonté (¥550)</li>
                      <li><strong>Total : ¥2,290</strong> pour famille de 3</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🤖 Expérience technologique</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Tablette tactile</strong> - Commande interactive</li>
                      <li>• <strong>Robot serveur</strong> - Livraison par Bamiyan-kun</li>
                      <li>• <strong>Jeux enfants</strong> - Sur tablette en attendant</li>
                      <li>• <strong>Paiement digital</strong> - Sans contact à table</li>
                      <li><strong>Durée : 1h-1h30</strong> avec enfants</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">💡 Astuces pratiques</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Heures calmes</strong> - 14h-17h pour éviter l'affluence</li>
                    <li>• <strong>Chaises enfants</strong> - Disponibles, demander en arrivant</li>
                    <li>• <strong>Allergies</strong> - Informations détaillées sur tablette</li>
                    <li>• <strong>Parking</strong> - Généralement gratuit en famille</li>
                    <li>• <strong>Emporter</strong> - Service takeout disponible</li>
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
                    <div className="text-sm text-gray-600">11h00 - 23h00</div>
                    <div className="text-sm text-gray-500">Parfait pour familles</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">320+ restaurants au Japon</div>
                    <div className="text-sm text-gray-500">Banlieues, centres commerciaux</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes, paiement à table</div>
                    <div className="text-sm text-gray-500">Technologie cashless avancée</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Smartphone className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Budget familial</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 par personne</div>
                    <div className="text-sm text-gray-500">Menu enfants ¥450-850</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">
                💡 Conseils pour les Familles
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Parfait avec enfants</div>
                  <div className="text-orange-600">Robots, tablettes, jeux : les enfants adorent</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Technologie facile</div>
                  <div className="text-orange-600">Tablettes intuitives, même sans parler japonais</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Prix transparents</div>
                  <div className="text-orange-600">Tous les prix affichés, aucune surprise</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Expérience moderne</div>
                  <div className="text-orange-600">Découverte du futur de la restauration</div>
                </div>
              </div>
            </div>

            {/* Innovation highlights */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🤖 Innovations Technologiques
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Robot Bamiyan-kun</div>
                  <div className="text-blue-600">Premier robot serveur grand public au Japon</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Tablettes tactiles</div>
                  <div className="text-blue-600">Commande multilingue avec photos détaillées</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Paiement sans contact</div>
                  <div className="text-blue-600">Technologie cashless complète</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Intelligence artificielle</div>
                  <div className="text-blue-600">Optimisation continue de l'expérience</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-purple-700">
                Bamiyan représente la vision japonaise de la restauration du futur : 
                technologie au service de l'humain, efficacité sans perdre la convivialité, 
                et innovation pour démocratiser l'accès à une cuisine de qualité. 
                La chaîne illustre l'approche japonaise unique mêlant tradition culinaire 
                chinoise et high-tech nippon.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.skylark.co.jp/bamiyan/" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Site officiel Bamiyan
                </a>
                <a href="/type-plat/cuisine-chinoise" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet cuisine chinoise
                </a>
                <a href="/chaines/gyoza-no-ohsho" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Gyoza no Ohsho
                </a>
                <a href="/chaines/ringer-hut" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Ringer Hut
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
