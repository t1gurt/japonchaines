import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Gamepad2, Gift, Shield, Smartphone, DollarSign, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hama Sushi はま寿司 | 110¥ + 5 Sauces Soja | Japonchaines",
  description: "Kaiten-zushi le plus abordable. Plupart des assiettes 110¥, 5 sauces soja régionales.",
  keywords: [
    'hama sushi', 'はま寿司', 'kaiten-zushi', 'sushi tournant',
    'commande tactile', 'prix abordables', 'sushi frais',
    'ramen disponible', 'service rapide', 'menu varié'
  ],
  openGraph: {
    title: "Hama Sushi はま寿司 | 110¥ + 5 Sauces Soja | Japonchaines",
    description: "Kaiten-zushi le plus abordable. Plupart des assiettes 110¥, 5 sauces soja régionales.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/hama-sushi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function HamaSushiPage() {
  return (
    <>
      <ChainViewTracker chainName="hama-sushi" chainCategory="kaiten-zushi" />
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
                  <strong>Hama Sushi (はま寿司)</strong> représente une véritable <strong>révolution technologique 
                  dans l'univers de la restauration japonaise</strong>. Imaginez pouvoir déguster des sushis 
                  frais de qualité professionnelle au même prix qu'un café parisien, servis par des robots 
                  dans un restaurant du futur. Voici <strong>la chaîne de kaiten-zushi qui a démocratisé 
                  les sushis au Japon</strong> avec plus de 600 restaurants à travers le pays.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-4">� La Révolution Hama Sushi : Technologie + Tradition</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">💰 Prix Révolutionnaires</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• <strong>110¥ l'assiette</strong> - 90% du menu au même prix ultra-accessible</li>
                        <li>• <strong>Rapport qualité-prix imbattable</strong> - Standards élevés maintenus</li>
                        <li>• <strong>Démocratisation totale</strong> - Sushis accessibles à tous les budgets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🤖 Innovation Technologique</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• <strong>Robots Pepper</strong> - Accueil multilingue automatisé</li>
                        <li>• <strong>Ligne directe haute vitesse</strong> - Livraison express à votre table</li>
                        <li>• <strong>IA de prédiction</strong> - Optimisation des stocks et fraîcheur</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Le Secret du Système MMD (Mass Merchandising)</h3>
                <p className="mb-4">
                  Le <strong>système MMD révolutionnaire</strong> développé par le groupe Zensho permet à Hama Sushi 
                  de contrôler <strong>l'intégralité de la chaîne d'approvisionnement</strong> : de la pêche et 
                  l'élevage jusqu'à votre assiette. Cette intégration verticale unique élimine tous les 
                  intermédiaires, permettant des prix défiant toute concurrence tout en maintenant une 
                  qualité constante.
                </p>

                <h3 className="text-xl font-semibold mb-3">📱 L'Expérience Restaurant du Futur</h3>
                <p className="mb-4">
                  Hama Sushi transforme chaque repas en <strong>expérience technologique immersive</strong>. 
                  Dès votre arrivée, des robots Pepper vous accueillent en plusieurs langues, puis vous 
                  commandez sur des tablettes tactiles HD avant de voir vos sushis arriver sur une 
                  <strong>ligne directe haute vitesse</strong> - comme un Shinkansen miniature pour votre table !
                </p>

                <h3 className="text-xl font-semibold mb-3">� Philosophie Culinaire : Accessibilité & Excellence</h3>
                <p className="mb-4">
                  La mission de Hama Sushi transcende la simple restauration : <strong>démocratiser la culture 
                  sushi japonaise</strong> en rendant cette tradition culinaire millénaire accessible à tous, 
                  sans compromis sur la qualité. Chaque restaurant utilise du <strong>riz 100% japonais</strong>, 
                  des techniques traditionnelles comme l'<strong>Ikejime</strong> pour la fraîcheur du poisson, 
                  et propose même un <strong>"dégustation de 5 sauces soja"</strong> unique au monde.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Détaillé</h2>
              </div>

              {/* 5種類の醤油テイスティング */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-4">🥢 Expérience Unique : Dégustation de 5 Sauces Soja</h3>
                <p className="text-amber-700 mb-4 text-sm">
                  Hama Sushi propose une expérience gastronomique unique : <strong>5 sauces soja différentes</strong> 
                  à chaque table, comme un sommelier propose différents vins. Découvrez les subtilités régionales du Japon !
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">特製だし醤油</div>
                    <div className="text-xs text-gray-600 mb-1">Sauce dashi spéciale</div>
                    <div className="text-xs text-amber-700">Umami intense, parfaite pour les poissons blancs</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">関東風濃口醤油</div>
                    <div className="text-xs text-gray-600 mb-1">Sauce Kantō épaisse</div>
                    <div className="text-xs text-amber-700">Traditionnelle de Tokyo, pour thon et saumon</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">北海道昆布醤油</div>
                    <div className="text-xs text-gray-600 mb-1">Sauce kombu Hokkaidō</div>
                    <div className="text-xs text-amber-700">Douce et marine, idéale pour les fruits de mer</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">九州風さしみ醤油</div>
                    <div className="text-xs text-gray-600 mb-1">Sauce sashimi Kyūshū</div>
                    <div className="text-xs text-amber-700">Plus sucrée, complète les sushis délicats</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">四国風ゆずぽんず</div>
                    <div className="text-xs text-gray-600 mb-1">Ponzu yuzu Shikoku</div>
                    <div className="text-xs text-amber-700">Acidulée et fraîche, révèle les saveurs subtiles</div>
                  </div>
                </div>
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
                        <th className="text-left p-3 font-medium">Sauce recommandée</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Daurade royale Ikejime</td>
                        <td className="p-3">活〆まだい</td>
                        <td className="p-3">Technique traditionnelle, chair ferme et sucrée</td>
                        <td className="p-3 text-xs text-amber-600">Dashi spéciale</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Thon rouge Maguro</td>
                        <td className="p-3">まぐろ</td>
                        <td className="p-3">Thon 40kg+, sélectionné pour sa qualité</td>
                        <td className="p-3 text-xs text-amber-600">Kantō épaisse</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Saumon</td>
                        <td className="p-3">サーモン</td>
                        <td className="p-3">Décongelé à l'eau glacée, coupé quotidiennement</td>
                        <td className="p-3 text-xs text-amber-600">Kombu Hokkaidō</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Saumon yuzu-shio</td>
                        <td className="p-3">サーモンゆず塩</td>
                        <td className="p-3">Innovation moderne, fraîcheur agrume</td>
                        <td className="p-3 text-xs text-amber-600">Ponzu yuzu</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Crevette bouillée</td>
                        <td className="p-3">ゆでえび</td>
                        <td className="p-3">Crevette cuite, douce et croquante</td>
                        <td className="p-3 text-xs text-amber-600">Sashimi Kyūshū</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Canard grillé</td>
                        <td className="p-3">合鴨</td>
                        <td className="p-3">Viande fumée, mariage surprenant avec le riz</td>
                        <td className="p-3 text-xs text-amber-600">Dashi spéciale</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Rosbif</td>
                        <td className="p-3">ローストビーフ</td>
                        <td className="p-3">Bœuf tendre, fusion moderne réussie</td>
                        <td className="p-3 text-xs text-amber-600">Kantō épaisse</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaage de poulet</td>
                        <td className="p-3">鶏のから揚げ</td>
                        <td className="p-3">Frit sur commande, croustillant parfait</td>
                        <td className="p-3 text-xs text-amber-600">Sashimi Kyūshū</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Spécialités Hama Sushi uniques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">� Spécialités Exclusives Hama Sushi</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-3">🔥 Sushis Aburi (Juste Saisis)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Thon blanc mi-cuit façon steak</strong> - Surface grillée, cœur fondant</li>
                      <li>• <strong>Saumon aburi</strong> - Technique au chalumeau traditionnelle</li>
                      <li>• <strong>Calamar tempura yuzu</strong> - Fraîcheur et croustillant</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-3">🍲 Accompagnements Chauds</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Chawanmushi</strong> - Flan salé aux champignons shiitake</li>
                      <li>• <strong>Rāmen authentique</strong> - Bouillon 12h de cuisson</li>
                      <li>• <strong>Udon maison</strong> - Nouilles fraîches quotidiennes</li>
                      <li>• <strong>Frites croustillantes</strong> - Pommes de terre Hokkaidō</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Menu enfants avec Gachapon */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6 border border-pink-200">
                <h3 className="font-semibold text-pink-800 mb-4">🎁 "Hamakko Set" - Menu Enfants Magique</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🍜 Menu Complet</h4>
                    <ul className="text-pink-700 space-y-1 text-sm">
                      <li>• Udon ou petit rāmen</li>
                      <li>• Frites croustillantes</li>
                      <li>• Boisson au choix</li>
                      <li>• <strong>Pièce magique Gachapon incluse !</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🎰 Machine Gachapon</h4>
                    <p className="text-pink-700 text-sm">
                      Chaque menu enfant inclut une pièce spéciale pour actionner la machine Gachapon 
                      du restaurant et gagner un jouet surprise ! Une expérience inoubliable qui 
                      transforme le repas en aventure.
                    </p>
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

            {/* Guide complet d'utilisation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Smartphone className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Complet : Votre Première Visite Hama Sushi</h2>
              </div>
              
              <div className="space-y-8">
                {/* Étape 1 : Accueil Robot */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ÉTAPE 1 : Accueil par Robot Pepper 🤖</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      Dès votre entrée, un <strong>robot humanoïde Pepper</strong> vous accueille ! Ce n'est pas de la science-fiction, 
                      c'est la réalité quotidienne chez Hama Sushi.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">�️ Langues disponibles</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Japonais (défaut)</li>
                          <li>• <strong>Anglais</strong> - Touch "English"</li>
                          <li>• <strong>Chinois</strong> - 简体中文 disponible</li>
                          <li>• Interface tactile intuitive</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">📝 Sélections simples</h4>
                        <ol className="text-sm text-blue-700 space-y-1">
                          <li><strong>1.</strong> Nombre de personnes (1-8)</li>
                          <li><strong>2.</strong> Type de siège : Table ou Comptoir</li>
                          <li><strong>3.</strong> Récupérez votre ticket numéroté</li>
                          <li><strong>4.</strong> Attendez l'appel sur l'écran</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 2 : Installation */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ÉTAPE 2 : Votre Station Sushi Personnalisée 🍵</h3>
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      Chaque siège est une <strong>station complète</strong> équipée de tout le nécessaire pour votre expérience optimale.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-green-800 mb-2">🍵 Thé Vert Illimité</h4>
                        <p className="text-sm text-green-700">
                          Poudre de thé + robinet d'eau chaude. Servez-vous autant que vous voulez, 
                          c'est <strong>gratuit et traditionnel</strong> !
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-green-800 mb-2">🥢 5 Sauces Soja</h4>
                        <p className="text-sm text-green-700">
                          Distributeurs avec les 5 sauces régionales + wasabi frais + 
                          <strong>gari (gingembre mariné)</strong> à volonté.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-green-800 mb-2">📱 Tablette HD</h4>
                        <p className="text-sm text-green-700">
                          Votre centre de commande personnel. Interface multilingue avec 
                          photos haute résolution de <strong>tous les plats</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 : Commande */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ÉTAPE 3 : Commande sur Tablette Tactile 📱</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">🌐 Interface Multilingue</h4>
                        <ol className="text-sm text-blue-700 space-y-2">
                          <li><strong>1.</strong> Touchez le bouton langue (coin supérieur droit)</li>
                          <li><strong>2.</strong> Sélectionnez "English" ou votre langue</li>
                          <li><strong>3.</strong> Parcourez les catégories avec photos HD</li>
                          <li><strong>4.</strong> Chaque plat a sa photo et description</li>
                          <li><strong>5.</strong> Prix affiché clairement à côté</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">⚙️ Options de Personnalisation</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li>• <strong>"Sans wasabi"</strong> - Option disponible</li>
                          <li>• <strong>Allergies</strong> - Filtre automatique</li>
                          <li>• <strong>Quantité</strong> - 1-10 pièces par commande</li>
                          <li>• <strong>Voix anime</strong> - Changez le guide vocal !</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 4 : Livraison Express */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ÉTAPE 4 : Livraison Express "Shinkansen" 🚄</h3>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      L'expérience la plus spectaculaire ! Vos sushis arrivent sur une <strong>ligne directe haute vitesse</strong>, 
                      comme un train miniature qui file directement vers votre table.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">⚡ Système Révolutionnaire</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• <strong>Ligne dédiée</strong> - Pas de rotation, direct !</li>
                          <li>• <strong>3 minutes max</strong> - Du chef à votre table</li>
                          <li>• <strong>Alerte sonore/visuelle</strong> - Vous ne ratez rien</li>
                          <li>• <strong>Hygiène parfaite</strong> - Personne ne touche vos plats</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">🎯 Avantages Uniques</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Fraîcheur absolue garantie</li>
                          <li>• Zéro contamination croisée</li>
                          <li>• Température optimale maintenue</li>
                          <li>• Spectacle visuel pour les enfants</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 5 : Paiement */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ÉTAPE 5 : Paiement Smart & International 💳</h3>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">🖥️ Libre-Service Moderne</h4>
                        <ol className="text-sm text-purple-700 space-y-1">
                          <li><strong>1.</strong> Touchez "お会計" (Paiement) sur la tablette</li>
                          <li><strong>2.</strong> Vérifiez le total affiché</li>
                          <li><strong>3.</strong> Prenez le ticket imprimé</li>
                          <li><strong>4.</strong> Direction le comptoir ou self-service</li>
                          <li><strong>5.</strong> Scanez le QR code du ticket</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">💳 Méthodes de Paiement</h4>
                        <div className="space-y-2 text-sm text-purple-700">
                          <div><strong>Cartes internationales :</strong> Visa, Mastercard, AMEX</div>
                          <div><strong>E-wallets :</strong> PayPay, Line Pay, Rakuten Pay</div>
                          <div><strong>IC Cards :</strong> Suica, Pasmo (transport)</div>
                          <div><strong>Cash :</strong> Yens acceptés partout</div>
                          <div><strong>Sans contact :</strong> Apple Pay, Google Pay</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Info className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Foire aux Questions (FAQ)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">❓ Je ne parle pas japonais du tout, puis-je vraiment m'en sortir ?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Absolument !</strong> Hama Sushi est conçu pour être <strong>100% utilisable sans parler japonais</strong>. 
                    Le robot Pepper vous accueille en anglais, les tablettes ont des interfaces multilingues avec photos HD, 
                    et même le paiement se fait en libre-service. Vous n'aurez pratiquement aucune interaction verbale nécessaire.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">💰 C'est vraiment si bon marché ? Il n'y a pas d'arnaque ?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Aucune arnaque !</strong> Le système MMD (contrôle total de la chaîne d'approvisionnement) et l'automatisation 
                    poussée permettent ces prix révolutionnaires. La qualité est réelle : riz 100% japonais, poisson traité par technique 
                    Ikejime, 5 sauces soja artisanales. C'est le modèle économique qui est révolutionnaire, pas un compromis sur la qualité.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🍣 Est-ce que je peux venir seul(e) sans être mal vu(e) ?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Bien sûr !</strong> Au Japon, manger seul est <strong>parfaitement normal et respecté</strong>. Hama Sushi dispose 
                    de nombreux sièges comptoir spécialement conçus pour les personnes seules. C'est même idéal pour une première expérience 
                    car vous pouvez prendre votre temps sans pression sociale.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🐟 Mon ami(e) n'aime pas le poisson cru, peut-il/elle quand même apprécier ?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Parfaitement !</strong> Hama Sushi propose une incroyable variété : sushis de viande (canard, rosbif), 
                    tempura croustillantes, rāmen authentiques, udon maison, karaage de poulet, et même des frites ! Le menu est 
                    si diversifié que les personnes qui n'aiment pas le poisson y trouvent largement leur bonheur.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🇫🇷 Quelle est la différence avec les restaurants de sushi en France ?</h3>
                  <p className="text-gray-700 text-sm">
                    La différence principale est <strong>l'expérience globale</strong>. Au-delà du prix (divisé par 3-4), c'est tout un 
                    univers : robots d'accueil, ligne de livraison express, dégustation de 5 sauces soja régionales, machine Gachapon 
                    pour les enfants... C'est un <strong>parc d'attractions culinaire</strong> autant qu'un restaurant !
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📅 Dois-je réserver ? Comment éviter l'attente ?</h3>
                  <p className="text-gray-700 text-sm">
                    Réservation non obligatoire, mais recommandée le weekend. Utilisez l'app <strong>"Hama Navi"</strong> ou le site web 
                    pour réserver votre place dans la file d'attente avant d'arriver. Vous recevrez une notification quand votre table 
                    est prête, vous évitant de poireauter sur place.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🍜 Les accompagnements chauds sont-ils vraiment bons ?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Excellents !</strong> Le rāmen utilise un bouillon mijoté 12h, les udon sont faites fraîches quotidiennement, 
                    et le chawanmushi (flan salé) est une spécialité raffinée. Hama Sushi ne lésine pas sur la qualité de ses plats chauds, 
                    considérant que c'est ce qui les différencie de la concurrence.
                  </p>
                </div>
              </div>
            </div>

            {/* Avantages économiques */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Le Miracle Économique Hama Sushi Expliqué</h2>
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
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
