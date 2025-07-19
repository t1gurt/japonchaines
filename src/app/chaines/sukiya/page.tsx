import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sukiya すき家 | Gyudon N°1 | Japonchaines",
  description: "Plus grande chaîne gyudon. Menu varié (curry, fruits mer), service 24h familial.",
  keywords: [
    'sukiya', 'すき家', 'gyudon', 'plus grande chaîne',
    'leader gyudon', 'menu varié', 'service 24h',
    'bœuf riz', 'restauration rapide', 'japon gyudon'
  ],
  openGraph: {
    title: "Sukiya すき家 | Gyudon N°1 | Japonchaines",
    description: "Plus grande chaîne gyudon. Menu varié (curry, fruits mer), service 24h familial.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/sukiya',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SukiyaPage() {
  return (
    <>
      <ChainViewTracker chainName="sukiya" chainCategory="gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Gyūdon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">す</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sukiya</h1>
              <p className="text-lg text-gray-600">すき家 | すきや</p>
              <p className="text-sm text-gray-500">Le leader du gyūdon par le nombre de restaurants</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Le Géant de la Diversité</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sukiya est aujourd&apos;hui <strong>le plus grand réseau de gyūdon au Japon</strong> avec 
                  <strong> 1 942 restaurants</strong> à travers l&apos;archipel. Fondée en 1982 par Zensho Holdings, 
                  cette chaîne a révolutionné le marché du gyūdon en privilégiant la <strong>diversité, 
                  la commodité et l&apos;accessibilité familiale</strong>.
                </p>
                <p className="text-gray-700">
                  Contrairement à la tradition pure de Yoshinoya, Sukiya a fait le pari de l&apos;innovation 
                  et de l&apos;adaptation aux goûts modernes. Son menu étendu, ses services drive-through 
                  et son positionnement familial en font le choix privilégié d&apos;une clientèle plus large 
                  et diversifiée.
                </p>
              </div>
            </div>

            {/* Histoire et stratégie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Ascension du Challenger</h2>
              </div>
              
              <div className="space-y-6">
                {/* Création */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1982 : Naissance de l&apos;Innovation</h3>
                  <p className="text-gray-700">
                    Sukiya est créée par <strong>Zensho Holdings</strong> avec une vision claire : 
                    démocratiser le gyūdon en l&apos;adaptant aux besoins des familles modernes. 
                    Dès le départ, la chaîne mise sur la <strong>diversité des menus</strong> 
                    et l&apos;accessibilité.
                  </p>
                </div>

                {/* Expansion */}
                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1990-2000 : Expansion Stratégique</h3>
                  <p className="text-gray-700">
                    Sukiya développe un réseau dense de restaurants en privilégiant les 
                    <strong> emplacements suburbains et les centres commerciaux</strong>. 
                    Cette stratégie lui permet de toucher les familles et de proposer 
                    des services comme le drive-through.
                  </p>
                </div>

                {/* Crise BSE */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2004 : L&apos;Opportunité de la Crise BSE</h3>
                  <p className="text-gray-700">
                    Pendant que Yoshinoya suspend ses ventes, Sukiya saisit l&apos;opportunité en 
                    <strong> passant au bœuf australien</strong>. Cette décision pragmatique 
                    lui permet de maintenir son service et de <strong>gagner des parts de marché considérables</strong>.
                  </p>
                </div>

                {/* Leadership */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+ : Leadership par les Volumes</h3>
                  <p className="text-gray-700">
                    Sukiya devient le <strong>n°1 du marché</strong> grâce à son expansion 
                    agressive et sa capacité d&apos;adaptation. Aujourd&apos;hui, c&apos;est la référence 
                    en matière de volume et de commodité.
                  </p>
                </div>
              </div>
            </div>

            {/* Stratégie et différenciation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">La Stratégie de la Diversité</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Menu Étendu</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Plus de 50 plats différents</strong> : gyūdon classiques, curry, 
                      seafood bowls, desserts, petits-déjeuners. Une approche &quot;restaurant familial&quot; 
                      plutôt que spécialiste.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Commodité Maximale</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Drive-through, livraison, emplacements stratégiques</strong> près 
                      des centres commerciaux et zones résidentielles. L&apos;accent sur l&apos;accessibilité.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Positionnement Familial</h3>
                    <p className="text-gray-700 text-sm">
                      Tables familiales, <strong>menu enfants</strong>, atmosphère décontractée. 
                      Cible les familles plutôt que les salariés pressés.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Continue</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Nouveaux produits réguliers</strong>, collaborations saisonnières, 
                      adaptation rapide aux tendances. Une approche marketing dynamique.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Sukiya</h2>
              
              {/* Gyūdon classiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Classique</span>
                  Gyūdon Traditionnels
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Plat</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Taille</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Calories</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅうどん</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Normale (並盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">400¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">733 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅうどん</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Grande (大盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">530¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">953 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅうどん</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Mega (メガ)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">680¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">1273 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon Mini</div>
                          <div className="text-sm text-gray-500">ミニ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Mini</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">350¥</td>
                        <td className="px-4 py-4 text-sm text-gray-700">513 kcal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Variations spéciales */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Spécialités</span>
                  Variations Populaires
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
                          <div className="font-medium text-gray-900">Cheese Gyūdon</div>
                          <div className="text-sm text-gray-500">チーズ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Gyūdon avec fromage fondu au-dessus</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">500¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Kimchi Gyūdon</div>
                          <div className="text-sm text-gray-500">キムチ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Avec kimchi épicé pour plus de saveur</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">480¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Ontama Gyūdon</div>
                          <div className="text-sm text-gray-500">おんたま牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Avec œuf à la coque (onsen tamago)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">450¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Seafood Bowl</div>
                          <div className="text-sm text-gray-500">海鮮丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Bol de riz aux fruits de mer assortis</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">650¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu étendu */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-3">Diversité</span>
                  Au-delà du Gyūdon
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Curry</h4>
                    <p className="text-sm text-gray-700 mb-2">Curry japonais avec différentes garnitures</p>
                    <div className="text-sm text-gray-600">À partir de 390¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Petit-déjeuner</h4>
                    <p className="text-sm text-gray-700 mb-2">Menu spécial matinal disponible jusqu&apos;à 10h</p>
                    <div className="text-sm text-gray-600">À partir de 280¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Desserts</h4>
                    <p className="text-sm text-gray-700 mb-2">Soft cream, desserts saisonniers</p>
                    <div className="text-sm text-gray-600">À partir de 200¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Menu Enfants</h4>
                    <p className="text-sm text-gray-700 mb-2">Portions adaptées avec jouet inclus</p>
                    <div className="text-sm text-gray-600">À partir de 300¥</div>
                  </div>
                </div>
              </div>

              {/* Commandes spéciales */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Options Populaires</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>つゆだく (Tsuyudaku)</strong> - Sauce extra
                  </div>
                  <div>
                    <strong>ねぎだく (Negidaku)</strong> - Oignons extra
                  </div>
                  <div>
                    <strong>お持ち帰り (Omochi-kaeri)</strong> - À emporter
                  </div>
                  <div>
                    <strong>ドライブスルー (Drive-through)</strong> - Service auto
                  </div>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Commander chez Sukiya</h2>
              
              <div className="space-y-6">
                {/* Étapes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Choisissez</h3>
                    <p className="text-sm text-gray-600">Sur place, drive-through ou à emporter</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commandez</h3>
                    <p className="text-sm text-gray-600">Au comptoir ou via distributeur automatique</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Attendez</h3>
                    <p className="text-sm text-gray-600">Service rapide, généralement 3-5 minutes</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dégustez</h3>
                    <p className="text-sm text-gray-600">À table ou dans votre voiture</p>
                  </div>
                </div>

                {/* Phrases utiles */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles en Japonais</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Commander un gyūdon :</div>
                      <div className="text-gray-700">&quot;Gyūdon hitotsu onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">牛丼一つお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Avec du fromage :</div>
                      <div className="text-gray-700">&quot;Chīzu tsukete kudasai&quot;</div>
                      <div className="text-gray-500 text-xs">チーズつけてください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">À emporter :</div>
                      <div className="text-gray-700">&quot;Omochi-kaeri de&quot;</div>
                      <div className="text-gray-500 text-xs">お持ち帰りで</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Menu enfants :</div>
                      <div className="text-gray-700">&quot;Okosama setto&quot;</div>
                      <div className="text-gray-500 text-xs">お子様セット</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages concurrentiels */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi Sukiya Domine</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Volume et Accessibilité</h4>
                      <p className="text-sm text-gray-700">
                        1 942 restaurants, présence dans les zones résidentielles
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Service Drive-Through</h4>
                      <p className="text-sm text-gray-700">
                        Pionnier du drive-through dans la restauration rapide japonaise
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Diversité des Menus</h4>
                      <p className="text-sm text-gray-700">
                        Plus de 50 plats différents, adaptation aux goûts familiaux
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Prix Compétitifs</h4>
                      <p className="text-sm text-gray-700">
                        Positionnement prix attractif, promotions régulières
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
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Excellent rapport qualité-prix</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Le choix pratique par excellence.</strong> Sukiya excelle par sa commodité 
                et sa diversité. Parfait pour les familles et ceux qui recherchent des options variées 
                à prix abordables. L&apos;expérience peut être moins &quot;authentique&quot; que Yoshinoya, 
                mais compense par son accessibilité.
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
                  <div className="text-sm text-gray-600">L&apos;original et l&apos;authentique</div>
                </Link>
                
                <Link 
                  href="/chaines/matsuya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Matsuya</div>
                  <div className="text-sm text-gray-600">L&apos;innovateur du gyūdon</div>
                </Link>
              </div>
            </div>
          </div>
        </div>      </div>
    </div>
    </>
  );
}
