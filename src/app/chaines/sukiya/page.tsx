import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, Coffee, ShoppingCart, Home, Target, DollarSign, Globe, Utensils, Heart } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sukiya (すき家) | Le Géant du Gyūdon - Prix d\'un Café Parisien | Guide Restaurants Japonais',
  description: 'Découvrez Sukiya - Le plus grand réseau de gyūdon au Japon avec 2000 restaurants. Un repas complet au prix d\'un café parisien ! Guide complet avec menu détaillé, astuces de commande et expérience culturelle.',
  keywords: [
    'sukiya', 'すき家', 'gyudon', 'restaurant japonais',
    'fast food japon', 'bœuf japonais', 'prix abordable',
    'chaîne restaurant', 'food japonais', 'budget voyage japon'
  ],
  openGraph: {
    title: 'Sukiya (すき家) | L\'Infrastructure Alimentaire du Japon',
    description: 'Repas complet au prix d\'un café parisien : découvrez le secret du succès de Sukiya, géant japonais du gyūdon accessible 24h/24.',
    type: 'article',
    locale: 'fr_FR',
  },
  alternates: {
    canonical: 'https://japonchaines.com/chaines/sukiya'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function SukiyaPage() {
  return (
    <>
      <ChainViewTracker chainName="sukiya" chainCategory="gyudon" />
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header avec retour */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux Gyūdon
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-6 rounded-full">
                <span className="text-4xl font-bold">す</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sukiya
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4">
              すき家 | すきや
            </p>
            <p className="text-lg text-green-200 max-w-3xl mx-auto mb-8">
              L'Infrastructure Alimentaire du Japon : Un Repas Complet au Prix d'un Café Parisien
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                ☕ Prix d'un café parisien
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🏪 2000 restaurants
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🕐 24h/24 365j/an
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                🥇 N°1 du marché
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction révolutionnaire */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Coffee className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">La Révolution du Repas Abordable</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🤯 Un fait qui va vous surprendre</h3>
                  <p className="text-blue-700 mb-4">
                    <strong>À Paris, un café coûte en moyenne 2,50€.</strong> Chez Sukiya au Japon, 
                    ce même montant vous offre un <strong>repas complet et nutritif</strong> : 
                    gyūdon avec bœuf, riz, sauce, accompagné d'un thé vert illimité !
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/60 p-3 rounded">
                      <strong>🇫🇷 Paris</strong><br />
                      1 café = 2,50€<br />
                      <em>Juste une boisson</em>
                    </div>
                    <div className="bg-white/60 p-3 rounded">
                      <strong>🇯🇵 Sukiya</strong><br />
                      Gyūdon = 2,80€<br />
                      <em>Repas complet + thé</em>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏗️ L'"Infrastructure Alimentaire" du Japon</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Sukiya ne se contente pas d'être un restaurant : c'est ce qu'on appelle au Japon 
                  une <strong>"infrastructure alimentaire"</strong> (食のインフラ). Comme l'électricité 
                  ou l'eau courante, Sukiya fait partie des services essentiels qui rendent la vie 
                  possible et agréable.
                </p>

                <p className="text-gray-700 mb-6">
                  Avec <strong>2000 restaurants répartis dans les 47 préfectures</strong> du Japon, 
                  dont beaucoup ouverts 24h/24 et 365 jours par an, Sukiya garantit qu'à tout moment, 
                  n'importe où, chacun peut accéder à un repas chaud, nutritif et abordable. 
                  C'est cette philosophie qui en fait le <strong>plus grand réseau de gyūdon au monde</strong>.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎯 La Mission Secrète de Sukiya</h4>
                  <p className="text-yellow-700 text-sm">
                    Derrière cette chaîne se cache un objectif grandiose : 
                    <strong>"Éliminer la faim et la pauvreté dans le monde"</strong>. 
                    Cette vision de Zensho Holdings, le groupe propriétaire, guide chaque décision 
                    et explique pourquoi vos 2,80€ peuvent vous nourrir si bien.
                  </p>
                </div>
              </div>
            </div>

            {/* Le système MMD */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Le Secret du Prix Révolutionnaire : Le Système MMD</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Comment Sukiya réussit-il à servir un repas complet moins cher qu'un café parisien ? 
                  La réponse tient en trois lettres : <strong>MMD</strong> (Mass Merchandising System).
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3">🌍 Approvisionnement Mondial</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Employés sur le terrain dans le monde entier</li>
                      <li>• Négociation directe avec les producteurs</li>
                      <li>• Standards de qualité plus stricts que les normes nationales</li>
                      <li>• Élimination des intermédiaires</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">🏭 Production Intégrée</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Usines de transformation propriétaires</li>
                      <li>• Contrôle total de la chaîne de production</li>
                      <li>• Logistique optimisée 24h/24</li>
                      <li>• Réduction maximale des coûts</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🔬 Exemple Concret : Le Riz</h4>
                  <p className="text-purple-700 text-sm">
                    Sukiya ne se contente pas d'acheter du riz : <strong>Zensho Rice</strong>, 
                    filiale dédiée, sélectionne les variétés (Koshihikari, Hitomebore), 
                    contrôle la culture, gère la récolte, effectue la transformation et 
                    livre directement aux restaurants. Résultat : riz premium à prix minimal.
                  </p>
                </div>
              </div>
            </div>

            {/* L'histoire de la conquête */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">De Challenger à Champion : L'Ascension Stratégique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">⚔️ La Guerre des Gyūdon</h3>
                  <p className="text-orange-700 mb-4">
                    En 1982, quand Sukiya ouvre ses portes à Yokohama, <strong>Yoshinoya règne en maître</strong> 
                    sur le marché du gyūdon depuis 1899. Comment un petit challenger a-t-il pu 
                    détrôner un géant centenaire ?
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">🏛️ Stratégie Yoshinoya (traditionnelle)</h4>
                      <ul className="text-orange-700 space-y-1">
                        <li>• Comptoirs uniquement</li>
                        <li>• Centres-villes et gares</li>
                        <li>• Menu limité et traditionnel</li>
                        <li>• Clientèle : salarymen pressés</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">🚗 Révolution Sukiya</h4>
                      <ul className="text-orange-700 space-y-1">
                        <li>• Tables familiales</li>
                        <li>• Zones résidentielles et drive-through</li>
                        <li>• Menu diversifié et innovant</li>
                        <li>• Clientèle : familles et automobilistes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">🎯 Le Coup de Génie de 2004</h3>
                <p className="text-gray-700 mb-4">
                  La crise de la <strong>maladie de la vache folle (BSE)</strong> frappe le Japon. 
                  Yoshinoya, attaché au bœuf américain traditionnel, doit fermer ses restaurants. 
                  Sukiya, plus pragmatique, <strong>bascule immédiatement vers le bœuf australien</strong> 
                  et continue à servir ses clients. Cette décision lui fait gagner des parts de marché décisives.
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📈 Résultats de la Conquête</h4>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-2xl text-green-600">2000</div>
                      <div className="text-green-700">Restaurants Sukiya</div>
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-green-600">#1</div>
                      <div className="text-green-700">Position marché</div>
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-green-600">47/47</div>
                      <div className="text-green-700">Préfectures couvertes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu détaillé et guide des tailles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Utensils className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Complet du Menu Sukiya</h2>
              </div>

              {/* Guide des tailles - Point central */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥣 Guide des Tailles : Trouvez Votre Portion Idéale</h3>
                <p className="text-gray-700 mb-4">
                  La première chose qui surprend chez Sukiya, c'est la variété des tailles. 
                  Voici votre guide pour choisir selon votre appétit et votre budget :
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="text-left p-3 font-medium">Taille</th>
                        <th className="text-left p-3 font-medium">Pour Qui ?</th>
                        <th className="text-left p-3 font-medium">Viande</th>
                        <th className="text-left p-3 font-medium">Riz</th>
                        <th className="text-left p-3 font-medium">Calories</th>
                        <th className="text-left p-3 font-medium">Prix (¥/€)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3">
                          <strong>Mini (ミニ)</strong>
                        </td>
                        <td className="p-3 text-gray-600">
                          Petit appétit, accompagnement
                        </td>
                        <td className="p-3">66g</td>
                        <td className="p-3">189g</td>
                        <td className="p-3">496</td>
                        <td className="p-3 font-medium">430¥ / ~2.5€</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="p-3">
                          <strong>Normal (並盛)</strong> ⭐
                        </td>
                        <td className="p-3 text-gray-600">
                          Standard recommandé
                        </td>
                        <td className="p-3">81g</td>
                        <td className="p-3">300g</td>
                        <td className="p-3">732</td>
                        <td className="p-3 font-medium">480¥ / ~2.8€</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <strong>Moyen (中盛)</strong>
                        </td>
                        <td className="p-3 text-gray-600">
                          Plus de viande, moins de riz
                        </td>
                        <td className="p-3">136g</td>
                        <td className="p-3">247g</td>
                        <td className="p-3">798</td>
                        <td className="p-3 font-medium">650¥ / ~3.8€</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <strong>Grand (大盛)</strong>
                        </td>
                        <td className="p-3 text-gray-600">
                          Bon appétit général
                        </td>
                        <td className="p-3">120g</td>
                        <td className="p-3">364g</td>
                        <td className="p-3">967</td>
                        <td className="p-3 font-medium">680¥ / ~4.0€</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <strong>Spécial (特盛)</strong>
                        </td>
                        <td className="p-3 text-gray-600">
                          Très bon appétit
                        </td>
                        <td className="p-3">132g</td>
                        <td className="p-3">403g</td>
                        <td className="p-3">1,176</td>
                        <td className="p-3 font-medium">880¥ / ~5.2€</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-3">
                          <strong>Mega (メガ)</strong> 🔥
                        </td>
                        <td className="p-3 text-gray-600">
                          Défi culinaire !
                        </td>
                        <td className="p-3">233g</td>
                        <td className="p-3">410g</td>
                        <td className="p-3">1,458</td>
                        <td className="p-3 font-medium">1,030¥ / ~6.1€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Toppings et variations */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🎨 L'Art du Topping : Créez Votre Gyūdon Parfait</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Toppings Populaires</h4>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded p-3">
                        <div className="font-medium">とろ〜り3種のチーズ</div>
                        <div className="text-sm text-gray-600">3 fromages fondants</div>
                        <div className="text-sm font-medium text-green-600">+100¥</div>
                      </div>
                      <div className="border border-gray-200 rounded p-3">
                        <div className="font-medium">ねぎ玉 (Negi-tama)</div>
                        <div className="text-sm text-gray-600">Oignons verts + œuf cru</div>
                        <div className="text-sm font-medium text-green-600">+80¥</div>
                      </div>
                      <div className="border border-gray-200 rounded p-3">
                        <div className="font-medium">おろしポン酢</div>
                        <div className="text-sm text-gray-600">Radis râpé + sauce ponzu</div>
                        <div className="text-sm font-medium text-green-600">+60¥</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Commandes Spéciales (Gratuit)</h4>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded">
                        <div className="font-medium">つゆだく (Tsuyudaku)</div>
                        <div className="text-sm text-gray-600">Plus de sauce - pour riz bien imbibé</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <div className="font-medium">ねぎだく (Negidaku)</div>
                        <div className="text-sm text-gray-600">Plus d'oignons - version gourmande</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <div className="font-medium">つゆぬき (Tsuyunuki)</div>
                        <div className="text-sm text-gray-600">Sans sauce - version allégée</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu étendu */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍛 Au-delà du Gyūdon : L'Univers Sukiya</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Curry Révolutionnaire (2024)</h4>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-yellow-800 mb-2">
                        <strong>Innovation 2024 :</strong> Curry avec épices personnalisables !
                      </p>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Base douce familiale</li>
                        <li>• Épices sur table pour ajuster</li>
                        <li>• Possibilité d'ajouter du bœuf</li>
                        <li>• À partir de 390¥</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Menu Petit-Déjeuner</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>5h-11h :</strong> Petit-déjeuner japonais authentique
                      </p>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• まぜのっけ朝食 (Mix & Top) - 420¥</li>
                        <li>• Saumon grillé + riz + miso - 380¥</li>
                        <li>• Tamago kake gohan - 280¥</li>
                        <li>• Plus nutritif qu'un petit-déj parisien !</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* L'expérience culturelle unique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L'Expérience Culturelle : Plus qu'un Repas</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🥚 L'Œuf Cru : Votre Première Aventure Japonaise</h3>
                  <p className="text-blue-700 mb-4">
                    Ne soyez pas surpris de voir "生卵" (œuf cru) au menu ! Au Japon, les œufs 
                    sont <strong>parmi les plus sûrs au monde</strong> grâce aux centres GP 
                    (Good Production) qui appliquent des standards d'hygiène exceptionnels.
                  </p>
                  
                  <div className="bg-white/60 p-4 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">🍳 Mode d'emploi :</h4>
                    <ol className="text-sm text-blue-700 space-y-1">
                      <li>1. Cassez l'œuf dans le petit bol fourni</li>
                      <li>2. Ajoutez quelques gouttes de sauce soja</li>
                      <li>3. Mélangez délicatement avec les baguettes</li>
                      <li>4. Versez sur votre gyūdon chaud</li>
                      <li>5. Savourez cette texture crémeuse unique !</li>
                    </ol>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">🍜 Les Condiments de Table : Vos Alliés Saveur</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">紅生姜 (Beni Shōga)</h4>
                    <p className="text-sm text-gray-700">
                      Gingembre mariné rouge, <strong>pas juste une décoration !</strong> 
                      Son acidité rafraîchit le palais entre les bouchées riches en gras.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">七味唐辛子 (Shichimi)</h4>
                    <p className="text-sm text-gray-700">
                      Mélange de 7 épices incluant piment, sésame, écorce d'orange. 
                      <strong>Parfum complexe</strong> qui révèle de nouvelles saveurs.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🎯 Pro Tip : La Technique du "Mix Perfect"</h4>
                  <p className="text-purple-700 text-sm">
                    Les habitués mélangent tout ensemble : gyūdon + œuf cru + beni shōga + 
                    un peu de shichimi. Cette combinaison crée une <strong>harmonie de textures 
                    et de saveurs</strong> impossible à reproduire ailleurs dans le monde !
                  </p>
                </div>
              </div>
            </div>

            {/* Menu secret et astuces */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Les Secrets des Initiés</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">👑 Le "Gyūdon King" - Menu Secret</h3>
                  <p className="text-red-700 mb-4">
                    Existe mais n'apparaît pas au menu : le <strong>"キング牛丼"</strong>. 
                    Un défi culinaire avec <strong>6x la viande normale</strong> (510g) et 
                    2,5x le riz (625g) pour plus de 2300 calories !
                  </p>
                  
                  <div className="bg-white/60 p-3 rounded text-sm">
                    <strong>⚠️ Conditions :</strong> Uniquement sur place, pas de take-away, 
                    doit être terminé entièrement. Prix : environ 1500¥. 
                    <em>Perfect pour impressionner vos amis !</em>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">💡 Astuces de Commande Avancées</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-medium text-green-800 mb-2">🥩 "Gyū-sara" (牛皿)</h4>
                    <p className="text-sm text-green-700">
                      Commandez la viande seule pour l'emporter. Parfait si vous avez 
                      du riz à la maison - <strong>meilleur rapport qualité/prix</strong> !
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">🚗 Drive-Through Pro</h4>
                    <p className="text-sm text-blue-700">
                      Sukiya a inventé le drive-through japonais ! Préparez votre commande 
                      à l'avance, la <strong>vitesse de service</strong> est impressionnante.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">🕐 Timing Optimal</h4>
                  <p className="text-yellow-700 text-sm">
                    <strong>Petit-déjeuner (5h-11h) :</strong> Prix imbattables, expérience authentique<br />
                    <strong>Déjeuner (11h-14h) :</strong> Service le plus rapide, forte affluence<br />
                    <strong>Dîner (18h-21h) :</strong> Menu complet, ambiance familiale<br />
                    <strong>Tard le soir (21h+) :</strong> Calme, parfait pour savourer tranquillement
                  </p>
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
                    <div className="text-gray-600">24h/24 (certains restaurants)</div>
                    <div className="text-gray-500 text-xs">Varie selon l&apos;emplacement</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Centres commerciaux, zones résidentielles</div>
                    <div className="text-gray-500 text-xs">1 942 restaurants au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">Espèces, cartes, cartes IC</div>
                    <div className="text-gray-500 text-xs">Applications mobiles acceptées</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Ambiance</div>
                    <div className="text-gray-600">Familiale et décontractée</div>
                    <div className="text-gray-500 text-xs">Tables pour groupes</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.sukiya.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Site officiel Sukiya →
                </a>
              </div>
            </div>

            {/* Prix moyens */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gyūdon normal</span>
                  <span className="font-medium">400¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avec fromage</span>
                  <span className="font-medium">500¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Menu enfants</span>
                  <span className="font-medium">300¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas moyen</span>
                    <span className="text-gray-900">400-550¥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre avis */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-green-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Infrastructure alimentaire révolutionnaire</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Plus qu'un restaurant, une véritable innovation sociale.</strong> Sukiya a réussi 
                l'exploit de rendre un repas complet moins cher qu'un café parisien. Son système MMD 
                et sa vision d'infrastructure alimentaire en font un modèle unique au monde. 
                L'expérience va bien au-delà du simple repas : c'est une leçon d'économie et de culture japonaise.
              </p>
            </div>

            {/* Navigation vers d'autres chaînes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Chaînes de Gyūdon</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chaines/yoshinoya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Yoshinoya</div>
                  <div className="text-sm text-gray-600">L'original et l'authentique</div>
                </Link>
                
                <Link 
                  href="/chaines/matsuya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Matsuya</div>
                  <div className="text-sm text-gray-600">L'innovateur du gyūdon</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
