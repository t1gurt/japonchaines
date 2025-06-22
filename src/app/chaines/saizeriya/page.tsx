import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, MapIcon } from 'lucide-react';

export default function SaizeriyaPage() {
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
            href="/type-plat/family-restaurants" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Family Restaurants
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Saizeriya</h1>
              <p className="text-lg text-gray-600">サイゼリヤ | Cuisine Italienne Accessible</p>
              <p className="text-sm text-gray-500">La démocratisation de la cuisine italienne au Japon</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Le Phénomène Saizeriya</h2>
              <div className="prose prose-red max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Saizeriya incarne l&apos;<strong>accessibilité de la cuisine italienne au Japon</strong>. 
                  Avec <strong>plus de 1 500 restaurants</strong> au Japon et en Asie, cette chaîne 
                  a révolutionné la perception du restaurant familial en proposant des plats 
                  italiens authentiques à des prix défiant toute concurrence.
                </p>
                <p className="text-gray-700">
                  Ce qui distingue Saizeriya, c&apos;est son approche unique : <strong>maintenir 
                  l&apos;authenticité italienne</strong> tout en adaptant portions et prix au marché 
                  japonais. Le résultat ? Des pizzas à partir de 399¥ et des pâtes dès 299¥, 
                  sans compromis sur la qualité.
                </p>
              </div>
            </div>

            {/* Histoire et développement */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Une Success Story Japonaise</h2>
              </div>
              
              <div className="space-y-6">
                {/* Création */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1967 : Origines Modestes</h3>
                  <p className="text-gray-700">
                    Fondée par <strong>Yasuhiko Shogaki</strong> comme petit restaurant de 36 places 
                    à Ichikawa (préfecture de Chiba). Vision initiale : rendre la cuisine italienne 
                    accessible aux familles japonaises.
                  </p>
                </div>

                {/* Développement du concept */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1970-1990 : Innovation du Modèle</h3>
                  <p className="text-gray-700">
                    Développement du concept <strong>&quot;famille restaurant italien&quot;</strong>. 
                    Introduction du système de production centralisée, optimisation des coûts 
                    sans compromis sur la qualité. Expansion graduelle dans la région de Tokyo.
                  </p>
                </div>

                {/* Expansion explosive */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1990-2010 : Expansion Nationale</h3>
                  <p className="text-gray-700">
                    Croissance explosive avec <strong>ouverture de centaines de restaurants</strong>. 
                    Saizeriya devient synonyme de &quot;cuisine italienne abordable&quot; au Japon. 
                    Introduction du fameux <strong>menu d&apos;apéritif</strong> et des portions adaptées.
                  </p>
                </div>

                {/* Innovation continue */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+ : Innovation et International</h3>
                  <p className="text-gray-700">
                    Expansion internationale réussie en <strong>Chine, Corée, Singapour</strong>. 
                    Introduction de la commande électronique, optimisation logistique, 
                    maintien de l&apos;approche &quot;qualité-prix&quot; qui fait le succès.
                  </p>
                </div>
              </div>
            </div>

            {/* Le modèle économique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Le Modèle Saizeriya</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Production Centralisée</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Usines de production propres</strong> contrôlant toute la chaîne : 
                      sauce tomate, pâtes, pizzas pré-cuites. Économies d&apos;échelle maximales 
                      sans compromis qualité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Logistique Optimisée</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Système de distribution sophistiqué</strong> : livraisons quotidiennes, 
                      rotation optimale des stocks, réduction maximale du gaspillage. 
                      Efficacité industrielle au service de la restauration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Menu Engineering</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Optimisation scientifique du menu</strong> : analyse des coûts, 
                      popularité des plats, marge par item. Chaque plat est étudié pour 
                      maximiser satisfaction client et rentabilité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Volume et Rotation</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Forte rotation des tables</strong> grâce à un service efficace 
                      et des prix attractifs. Le volume compense les marges réduites, 
                      modèle économique basé sur l&apos;accessibilité.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Saizeriya</h2>
              
              {/* Antipasti */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Antipasti</span>
                  Apéritifs et Entrées
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
                          <div className="font-medium text-gray-900">Salade Caeser</div>
                          <div className="text-sm text-gray-500">シーザーサラダ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Laitue romaine, parmesan, croûtons, sauce authentique</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">399¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Bruschetta</div>
                          <div className="text-sm text-gray-500">ブルスケッタ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Pain grillé, tomates fraîches, basilic, ail</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">299¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Antipasto Misto</div>
                          <div className="text-sm text-gray-500">前菜盛り合わせ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sélection de charcuteries et fromages italiens</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">599¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Escargots</div>
                          <div className="text-sm text-gray-500">エスカルゴ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">6 pièces, beurre à l&apos;ail et persil</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">399¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pizza */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Pizza</span>
                  Pizzas Italiennes
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Pizza</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Garniture</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Margherita</div>
                          <div className="text-sm text-gray-500">マルゲリータ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sauce tomate, mozzarella, basilic frais</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">399¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Pepperoni</div>
                          <div className="text-sm text-gray-500">ペパロニ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sauce tomate, mozzarella, pepperoni épicé</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">499¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Quattro Formaggi</div>
                          <div className="text-sm text-gray-500">クアトロフォルマッジ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">4 fromages : mozzarella, gorgonzola, parmesan, ricotta</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">699¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Bismarck</div>
                          <div className="text-sm text-gray-500">ビスマルク</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sauce tomate, mozzarella, jambon, œuf</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">599¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pasta */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Pasta</span>
                  Pâtes Italiennes
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Pasta</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Sauce & Ingrédients</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Spaghetti Peperoncino</div>
                          <div className="text-sm text-gray-500">ペペロンチーノ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Huile d&apos;olive, ail, piment rouge, persil</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">299¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Carbonara</div>
                          <div className="text-sm text-gray-500">カルボナーラ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Œuf, parmesan, bacon, poivre noir</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">499¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Bolognese</div>
                          <div className="text-sm text-gray-500">ボロネーゼ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sauce tomate, bœuf haché, légumes, herbes</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">599¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Pescatore</div>
                          <div className="text-sm text-gray-500">ペスカトーレ</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Fruits de mer, tomates, ail, vin blanc</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">799¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Risotto et secondi */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Secondi</span>
                  Plats Principaux
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Risotto</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Risotto Quattro Formaggi</span>
                        <span className="font-medium">699¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risotto ai Funghi</span>
                        <span className="font-medium">799¥</span>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Viandes</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Pollo al Pomodoro</span>
                        <span className="font-medium">799¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bistecca di Manzo</span>
                        <span className="font-medium">1299¥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boissons populaires */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Menu Boissons</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">Vins :</div>
                    <div className="text-gray-700">Décanteur rouge/blanc 399¥</div>
                    <div className="text-gray-700">Verre de vin 199¥</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Boissons sans alcool :</div>
                    <div className="text-gray-700">Café italien 199¥</div>
                    <div className="text-gray-700">Jus d&apos;orange 199¥</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Desserts :</div>
                    <div className="text-gray-700">Tiramisu 299¥</div>
                    <div className="text-gray-700">Gelato 199¥</div>
                  </div>
                </div>
              </div>
            </div>

            {/* L'expérience Saizeriya */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">L&apos;Expérience Saizeriya</h2>
              
              <div className="space-y-6">
                {/* Ambiance */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ambiance Familiale</h3>
                    <p className="text-sm text-gray-600">Atmosphère décontractée, parfait pour les familles</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service Rapide</h3>
                    <p className="text-sm text-gray-600">Commande électronique, service optimisé</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accessibilité</h3>
                    <p className="text-sm text-gray-600">Présent partout, toujours abordable</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibeld text-gray-900 mb-2">Authenticité</h3>
                    <p className="text-sm text-gray-600">Goûts italiens authentiques préservés</p>
                  </div>
                </div>

                {/* Conseils pratiques */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Conseils pour Votre Visite</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Meilleur moment :</div>
                      <div className="text-gray-700">Heures creuses pour éviter l&apos;attente</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Commande optimale :</div>
                      <div className="text-gray-700">Utilisez le système de commande électronique</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Partage familial :</div>
                      <div className="text-gray-700">Pizzas parfaites pour partager, portions généreuses</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Budget optimal :</div>
                      <div className="text-gray-700">Menu combo avantageux, boissons à volonté</div>
                    </div>
                  </div>
                </div>

                {/* Phrases japonaises utiles */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Commander une pizza :</div>
                      <div className="text-gray-700">&quot;Marugherita wo onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">マルゲリータをお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Menu enfant :</div>
                      <div className="text-gray-700">&quot;Okosama set arimasu ka?&quot;</div>
                      <div className="text-gray-500 text-xs">お子様セットありますか？</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Plus de parmesan :</div>
                      <div className="text-gray-700">&quot;Parmesan motto kudasai&quot;</div>
                      <div className="text-gray-500 text-xs">パルメザンもっとください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">L&apos;addition :</div>
                      <div className="text-gray-700">&quot;Okaikei onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">お会計お願いします</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Position concurrentielle */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Avantages de Saizeriya</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Prix Imbattables</h4>
                      <p className="text-sm text-gray-700">
                        Pizza dès 399¥, pâtes à 299¥ - accessibilité maximale
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Authenticité Italienne</h4>
                      <p className="text-sm text-gray-700">
                        Recettes traditionnelles, ingrédients de qualité
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Présence Nationale</h4>
                      <p className="text-sm text-gray-700">
                        Plus de 1 500 restaurants, toujours à proximité
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation Technologique</h4>
                      <p className="text-sm text-gray-700">
                        Commande électronique, service optimisé, expérience moderne
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adaptabilité</h4>
                      <p className="text-sm text-gray-700">
                        Menu adapté aux goûts japonais tout en gardant l&apos;authenticité
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Atmosphère Familiale</h4>
                      <p className="text-sm text-gray-700">
                        Environnement accueillant, parfait pour tous les âges
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations pratiques */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-red-600 mr-2" />
                Informations Pratiques
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Horaires</div>
                    <div className="text-gray-600">11h-23h (général)</div>
                    <div className="text-gray-500 text-xs">Service continu</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Centres-villes, banlieues</div>
                    <div className="text-gray-500 text-xs">1 500+ restaurants</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">Espèces, cartes, PayPay</div>
                    <div className="text-gray-500 text-xs">Toutes cartes acceptées</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientèle</div>
                    <div className="text-gray-600">Familles, étudiants</div>
                    <div className="text-gray-500 text-xs">Très populaire</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.saizeriya.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Site officiel Saizeriya →
                </a>
              </div>
            </div>

            {/* Budget type */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Moyen</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pizza Margherita</span>
                  <span className="font-medium">399¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pâtes Peperoncino</span>
                  <span className="font-medium">299¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Boisson</span>
                  <span className="font-medium">199¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas complet</span>
                    <span className="text-gray-900">700-1000¥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre évaluation */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-red-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Excellent rapport qualité-prix</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>La démocratisation réussie de l&apos;italien.</strong> Saizeriya prouve 
                qu&apos;accessibilité et authenticité peuvent coexister. Des prix imbattables 
                pour une cuisine italienne honnête et savoureuse. Parfait pour découvrir 
                ou redécouvrir les classiques transalpins.
              </p>
            </div>

            {/* Spécialités incontournables */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">À Essayer Absolument</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Pizza Margherita</strong> - L&apos;authentique à 399¥</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Peperoncino</strong> - Simplicité parfaite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Escargots</strong> - Spécialité surprise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Décanteur de vin</strong> - Accompagnement idéal</span>
                </div>
              </div>
            </div>

            {/* Navigation vers d'autres chaînes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Family Restaurants</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chaines/gusto" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Gusto</div>
                  <div className="text-sm text-gray-600">Le family restaurant polyvalent</div>
                </Link>
                
                <Link 
                  href="/chaines/skylark" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Skylark</div>
                  <div className="text-sm text-gray-600">Le pionnier du genre</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
