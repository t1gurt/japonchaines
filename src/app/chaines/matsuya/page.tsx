import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Zap } from 'lucide-react';

export default function MatsuyaPage() {
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
            href="/type-plat/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Gyūdon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">松</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Matsuya</h1>
              <p className="text-lg text-gray-600">松屋 | まつや</p>
              <p className="text-sm text-gray-500">L&apos;innovateur technologique du gyūdon</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Le Pionnier de l&apos;Innovation</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Matsuya, fondée en 1966, est <strong>le troisième acteur du marché du gyūdon</strong> 
                  avec <strong>1 057 restaurants</strong> au Japon. Mais ne vous y trompez pas : 
                  cette chaîne compense sa taille plus modeste par une <strong>innovation technologique 
                  remarquable</strong> et un positionnement unique sur le marché.
                </p>
                <p className="text-gray-700">
                  Matsuya s&apos;est distinguée en devenant <strong>la première chaîne de gyūdon 
                  entièrement automatisée</strong>, avec des distributeurs automatiques de tickets 
                  dans tous ses restaurants. Cette approche technologique, combinée à des prix 
                  très compétitifs et des innovations culinaires audacieuses, en fait un acteur 
                  incontournable du paysage gastronomique japonais.
                </p>
              </div>
            </div>

            {/* Histoire et innovation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Histoire d&apos;un Innovateur</h2>
              </div>
              
              <div className="space-y-6">
                {/* Création */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1966 : Les Débuts Modestes</h3>
                  <p className="text-gray-700">
                    Matsuya est fondée comme <strong>une petite chaîne locale</strong> dans la région 
                    de Tokyo. Contrairement à Yoshinoya qui mise sur la tradition, Matsuya adopte 
                    dès le départ une approche <strong>pragmatique et moderne</strong>.
                  </p>
                </div>

                {/* Innovation technologique */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1980-1990 : Révolution des Distributeurs</h3>
                  <p className="text-gray-700">
                    Matsuya devient <strong>pionnière dans l&apos;automatisation</strong> en installant 
                    des distributeurs automatiques de tickets dans tous ses restaurants. Cette innovation 
                    révolutionnaire <strong>réduit les coûts de personnel</strong> et améliore l&apos;efficacité.
                  </p>
                </div>

                {/* Expansion stratégique */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000+ : Expansion et Différenciation</h3>
                  <p className="text-gray-700">
                    Profitant de sa structure de coûts optimisée, Matsuya développe un réseau 
                    dense en zone urbaine et <strong>innove constamment sur les produits</strong> : 
                    curry de bœuf, hamburg steaks, et collaborations créatives.
                  </p>
                </div>

                {/* Positionnement unique */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+ : L&apos;Alternative Technologique</h3>
                  <p className="text-gray-700">
                    Matsuya se positionne comme <strong>&quot;la chaîne tech du gyūdon&quot;</strong>, 
                    attirant une clientèle urbaine, jeune et technophile. Son approche sans personnel 
                    de service séduit particulièrement les introvertis japonais.
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation technologique détaillée */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">La Révolution des Distributeurs</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Système de Tickets Automatisé</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>100% des restaurants équipés</strong> de distributeurs automatiques 
                      avec écrans tactiles en japonais et anglais. Paiement par espèces, cartes 
                      et applications mobiles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Optimisation des Coûts</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Réduction drastique des coûts de personnel</strong>, permettant 
                      des prix très compétitifs. Les économies sont répercutées sur les clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expérience Sans Contact</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Idéal pour les clients introvertis</strong>. Commande, paiement 
                      et service minimal contact humain. Une approche très appréciée au Japon.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Continue</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Application mobile</strong>, commandes à l&apos;avance, programmes 
                      de fidélité digitaux. Matsuya reste à la pointe de la technologie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Matsuya</h2>
              
              {/* Gyūdon classiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Classique</span>
                  Gyūdon Traditionnels
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Plat</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Taille</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Particularité</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛めし | ぎゅうめし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Normale (並盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">380¥</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Prix le plus bas du marché</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛めし | ぎゅうめし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Grande (大盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">530¥</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Portion extra de riz</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon Premium</div>
                          <div className="text-sm text-gray-500">プレミアム牛めし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Normale</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">590¥</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Bœuf de qualité supérieure</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon Kalbî</div>
                          <div className="text-sm text-gray-500">カルビ牛めし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Normale</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">650¥</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Côtes de bœuf marinées</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Spécialités Matsuya */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Signature</span>
                  Spécialités Exclusives
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
                          <div className="font-medium text-gray-900">Beef Curry</div>
                          <div className="text-sm text-gray-500">ビーフカレー</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Curry de bœuf signature, épais et savoureux</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">490¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Hamburg Steak</div>
                          <div className="text-sm text-gray-500">ハンバーグ定食</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Steak de hamburger style japonais avec sauce</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">690¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Chicken Nanban</div>
                          <div className="text-sm text-gray-500">チキン南蛮定食</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Poulet frit sauce tartare, spécialité du sud</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">790¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Seafood Curry</div>
                          <div className="text-sm text-gray-500">シーフードカレー</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Curry aux fruits de mer et légumes</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">590¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Options et sets */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-3">Sets</span>
                  Formules Complètes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Set Complet</h4>
                    <p className="text-sm text-gray-700 mb-2">Gyūdon + miso + salade + œuf cru</p>
                    <div className="text-sm text-gray-600">+150¥ à tout plat principal</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Morning Set</h4>
                    <p className="text-sm text-gray-700 mb-2">Menu petit-déjeuner jusqu&apos;à 10h</p>
                    <div className="text-sm text-gray-600">À partir de 280¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">W Set</h4>
                    <p className="text-sm text-gray-700 mb-2">Double portion de bœuf</p>
                    <div className="text-sm text-gray-600">+200¥ à tout gyūdon</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Topping Options</h4>
                    <p className="text-sm text-gray-700 mb-2">Œuf, fromage, kimchi, oignons</p>
                    <div className="text-sm text-gray-600">50¥ à 100¥ chaque</div>
                  </div>
                </div>
              </div>

              {/* Promotions */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Promotions Récurrentes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>Happy Hour</strong> - 14h-17h, -50¥ sur gyūdon
                  </div>
                  <div>
                    <strong>Nuit Discount</strong> - 22h-6h, prix réduits
                  </div>
                  <div>
                    <strong>Premier mardi</strong> - Curry à prix spécial
                  </div>
                  <div>
                    <strong>App Matsuya</strong> - Coupons et points fidélité
                  </div>
                </div>
              </div>
            </div>

            {/* Guide distributeur automatique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Utiliser le Distributeur Automatique</h2>
              
              <div className="space-y-6">
                {/* Étapes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Choisissez</h3>
                    <p className="text-sm text-gray-600">Sélectionnez votre plat sur l&apos;écran tactile</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payez</h3>
                    <p className="text-sm text-gray-600">Espèces, carte ou application mobile</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Récupérez</h3>
                    <p className="text-sm text-gray-600">Prenez votre ticket et rendez-vous au comptoir</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Attendez</h3>
                    <p className="text-sm text-gray-600">Asseyez-vous, votre commande arrive en 3-5 min</p>
                  </div>
                </div>

                {/* Conseils pratiques */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Conseils pour les Débutants</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Interface :</div>
                      <div className="text-gray-700">Disponible en japonais et anglais</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Paiement :</div>
                      <div className="text-gray-700">Cartes IC (Suica, Pasmo) acceptées</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Options :</div>
                      <div className="text-gray-700">Personnalisations directement sur l&apos;écran</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Service :</div>
                      <div className="text-gray-700">Personnel disponible en cas de problème</div>
                    </div>
                  </div>
                </div>

                {/* Mots japonais utiles */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Mots Utiles pour le Distributeur</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">注文 (Chūmon) :</div>
                      <div className="text-gray-700">&quot;Commande&quot; - bouton principal</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">セット (Setto) :</div>
                      <div className="text-gray-700">&quot;Set&quot; - menu complet</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">大盛 (Ōmori) :</div>
                      <div className="text-gray-700">&quot;Grande portion&quot;</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">English :</div>
                      <div className="text-gray-700">Bouton pour passer en anglais</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Positionnement concurrentiel */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Position Unique sur le Marché</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-green-600">Avantages Matsuya</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Prix Imbattables</h4>
                        <p className="text-sm text-gray-700">
                          Gyūdon à 380¥, le moins cher du marché
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Technologie Avancée</h4>
                        <p className="text-sm text-gray-700">
                          100% automatisé, expérience sans contact
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Innovation Culinaire</h4>
                        <p className="text-sm text-gray-700">
                          Curry de bœuf, hamburg steaks, menus créatifs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-orange-600">Défis</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Taille Limitée</h4>
                        <p className="text-sm text-gray-700">
                          3ème position, moins d&apos;emplacements que Sukiya/Yoshinoya
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expérience Impersonnelle</h4>
                        <p className="text-sm text-gray-700">
                          Peut sembler froid pour certains clients
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Barrière Technologique</h4>
                        <p className="text-sm text-gray-700">
                          Peut intimider les clients moins technophiles
                        </p>
                      </div>
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
                    <div className="text-gray-600">24h/24 (zones urbaines)</div>
                    <div className="text-gray-500 text-xs">6h-24h (autres emplacements)</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Zones urbaines denses</div>
                    <div className="text-gray-500 text-xs">1 057 restaurants au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">100% automatisé</div>
                    <div className="text-gray-500 text-xs">Espèces, cartes, mobile</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientèle</div>
                    <div className="text-gray-600">Urbaine et technophile</div>
                    <div className="text-gray-500 text-xs">Salariés, étudiants</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.matsuyafoods.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Site officiel Matsuya →
                </a>
              </div>
            </div>

            {/* Prix moyens */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gyūdon normal</span>
                  <span className="font-medium">380¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Premium</span>
                  <span className="font-medium">590¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Beef curry</span>
                  <span className="font-medium">490¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas moyen</span>
                    <span className="text-gray-900">380-550¥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre avis */}
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
                <span className="text-sm text-gray-600 ml-2">Innovation et prix imbattables</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>L&apos;expérience technologique du gyūdon.</strong> Matsuya propose 
                le meilleur rapport qualité-prix du marché. Parfait pour ceux qui apprécient 
                l&apos;efficacité, les prix bas et l&apos;innovation. L&apos;automatisation complète 
                peut surprendre mais devient rapidement addictive.
              </p>
            </div>

            {/* App mobile */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Matsuya</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Commande et paiement à l&apos;avance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Points de fidélité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Coupons exclusifs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Localisation des restaurants</span>
                </div>
              </div>
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
                  href="/chaines/sukiya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Sukiya</div>
                  <div className="text-sm text-gray-600">Le leader par le volume</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
