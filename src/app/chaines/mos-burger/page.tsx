import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Leaf, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mos Burger (モスバーガー) | Burgers | Guide Restaurants Japonais',
  description: 'Guide complet de Mos Burger - Burgers premium japonais avec ingrédients frais et qualité supérieure. Innovation culinaire et saveurs uniques.',
  keywords: [
    'mos burger', 'モスバーガー', 'burgers premium', 'ingrédients frais',
    'qualité supérieure', 'innovation culinaire', 'saveurs uniques',
    'burgers japonais', 'qualité premium', 'créativité'
  ],
  openGraph: {
    title: 'Mos Burger (モスバーガー) | Burgers Premium Innovants',
    description: 'Découvrez Mos Burger, burgers premium avec ingrédients frais et innovation culinaire japonaise',
    type: 'article',
    url: '/chaines/mos-burger',
  },
  alternates: {
    canonical: '/chaines/mos-burger',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MOSBurgerPage() {
  return (
    <>
      <ChainViewTracker chainName="mos-burger" chainCategory="burgers" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/burgers" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Burgers Japonais
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">MOS Burger</h1>
                <p className="text-lg text-gray-600">モスバーガー | もすばーがー</p>
                <p className="text-sm text-gray-500">Le pionnier du burger japonais de qualité premium</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Alternative Japonaise Authentique</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    MOS Burger est <strong>LA chaîne de burgers japonaise par excellence</strong>, fondée en 1972 
                    avec une philosophie unique : <strong>&quot;Made On-demand System&quot;</strong>. Contrairement aux 
                    géants américains, MOS Burger privilégie la <strong>fraîcheur, la qualité</strong> et 
                    l&apos;<strong>adaptation aux goûts japonais</strong>.
                  </p>
                  <p className="text-gray-700">
                    Avec <strong>1 300+ restaurants</strong> principalement au Japon, MOS Burger propose des 
                    burgers <strong>préparés à la commande</strong> avec des ingrédients locaux de qualité. 
                    Son approche &quot;slow fast-food&quot; en fait une expérience unique dans l&apos;univers 
                    de la restauration rapide.
                  </p>
                </div>
              </div>

              {/* Histoire et philosophie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Une Vision Révolutionnaire</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Fondation */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1972 : Naissance de l&apos;Innovation</h3>
                    <p className="text-gray-700">
                      Sakuji Ōtsuka fonde MOS Burger à <strong>Narimasu, Tokyo</strong> avec une vision 
                      révolutionnaire : créer des burgers <strong>adaptés aux goûts japonais</strong> 
                      avec des ingrédients frais et locaux. Le nom MOS signifie 
                      <strong>&quot;Mountain, Ocean, Sun&quot;</strong> - symbolisant la nature.
                    </p>
                  </div>

                  {/* Innovation produit */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1980s : Révolution du Rice Burger</h3>
                    <p className="text-gray-700">
                      MOS Burger invente le <strong>Rice Burger</strong> en 1987, remplaçant le pain 
                      par des galettes de riz compressé. Cette innovation typiquement japonaise 
                      rencontre un succès phénoménal et devient <strong>l&apos;icône de la marque</strong>.
                    </p>
                  </div>

                  {/* Expansion qualitative */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1990s-2000s : Qualité Premium</h3>
                    <p className="text-gray-700">
                      Développement du concept <strong>&quot;Made On-demand&quot;</strong>, utilisation 
                      d&apos;ingrédients biologiques, partenariats avec des producteurs locaux. 
                      MOS Burger se positionne comme l&apos;alternative <strong>qualitative et responsable</strong>.
                    </p>
                  </div>

                  {/* Expansion internationale */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2000+ : Rayonnement Asiatique</h3>
                    <p className="text-gray-700">
                      Expansion en <strong>Taiwan, Corée du Sud, Singapour, Hong Kong</strong> et 
                      autres marchés asiatiques. MOS Burger exporte son concept de burger 
                      <strong>&quot;à la japonaise&quot;</strong> tout en s&apos;adaptant aux goûts locaux.
                    </p>
                  </div>
                </div>
              </div>

              {/* Philosophie MOS */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">La Différence MOS</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">M</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Made On-demand System</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Préparation à la commande</strong> : chaque burger est assemblé à la demande. 
                        Temps d&apos;attente de 5-8 minutes mais <strong>fraîcheur garantie</strong> et 
                        saveur optimale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">O</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Organic & Local</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Ingrédients biologiques et locaux</strong> privilégiés. Partenariats 
                        avec des producteurs japonais, légumes de saison, viande de qualité premium.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">S</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Spécialités Japonaises</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Adaptation aux goûts japonais</strong> : Rice Burger, Kinpira Burger, 
                        sauces japonaises, ingrédients traditionnels intégrés dans un format occidental.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Responsabilité Environnementale</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Développement durable</strong> : emballages éco-responsables, 
                        réduction des déchets, soutien à l&apos;agriculture locale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu MOS Burger</h2>
                
                {/* Burgers signatures */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Signatures</span>
                    Burgers Iconiques
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Burger</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">MOS Burger</div>
                            <div className="text-sm text-gray-500">Original</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Le burger original : bœuf, salade, tomate, sauce MOS spéciale
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">380¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Rice Burger</div>
                            <div className="text-sm text-gray-500">Kinpira/Yakitori/Ebi</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Pain de riz compressé, garnitures japonaises traditionnelles
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">320-420¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Tobikiri Cheese</div>
                            <div className="text-sm text-gray-500">Premium</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Bœuf premium, triple fromage, sauce spéciale, légumes frais
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">520¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Spicy MOS</div>
                            <div className="text-sm text-gray-500">Épicé</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Bœuf épicé, jalapeños, sauce piquante, crudités
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">420¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Fish Burger</div>
                            <div className="text-sm text-gray-500">Poisson</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Filet de poisson pané, sauce tartare, salade croquante
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">360¥</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Options végétariennes */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-lime-100 text-lime-800 px-2 py-1 rounded text-sm mr-3">Végé</span>
                    Options Végétariennes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Vegetable Burger</h4>
                      <p className="text-sm text-gray-700 mb-2">Galette de légumes, avocado, tomates fraîches</p>
                      <div className="text-sm text-gray-600">340¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Soy Patty Burger</h4>
                      <p className="text-sm text-gray-700 mb-2">Galette de soja, légumes croquants, sauce soja</p>
                      <div className="text-sm text-gray-600">380¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Rice Burger Kinpira</h4>
                      <p className="text-sm text-gray-700 mb-2">Pain de riz, kinpira (légumes sautés japonais)</p>
                      <div className="text-sm text-gray-600">320¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Moss Chicken</h4>
                      <p className="text-sm text-gray-700 mb-2">Alternative poulet végétal, goût authentique</p>
                      <div className="text-sm text-gray-600">420¥</div>
                    </div>
                  </div>
                </div>

                {/* Accompagnements et desserts */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Sides</span>
                    Accompagnements & Desserts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">French Fries</h4>
                      <p className="text-sm text-gray-700 mb-2">Frites croustillantes, sel marin japonais</p>
                      <div className="text-sm text-gray-600">S: 150¥ / M: 200¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Onion Rings</h4>
                      <p className="text-sm text-gray-700 mb-2">Rondelles d&apos;oignons panées, sauce spéciale</p>
                      <div className="text-sm text-gray-600">220¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chicken Nuggets</h4>
                      <p className="text-sm text-gray-700 mb-2">Nuggets de poulet, plusieurs sauces au choix</p>
                      <div className="text-sm text-gray-600">280¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Soft Cream</h4>
                      <p className="text-sm text-gray-700 mb-2">Glace à la vanille, parfums saisonniers</p>
                      <div className="text-sm text-gray-600">180¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Hot Apple Pie</h4>
                      <p className="text-sm text-gray-700 mb-2">Chausson aux pommes, cannelle japonaise</p>
                      <div className="text-sm text-gray-600">160¥</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Matcha Shake</h4>
                      <p className="text-sm text-gray-700 mb-2">Milkshake au thé vert, saveur authentique</p>
                      <div className="text-sm text-gray-600">250¥</div>
                    </div>
                  </div>
                </div>

                {/* Sets et combos */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Sets MOS Burger</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <strong>Set Standard</strong> - Burger + Frites + Boisson
                      <div className="text-gray-600">+250¥ par rapport au burger seul</div>
                    </div>
                    <div>
                      <strong>Set Premium</strong> - Burger + Onion Rings + Boisson
                      <div className="text-gray-600">+300¥ par rapport au burger seul</div>
                    </div>
                    <div>
                      <strong>Set Famille</strong> - 2 Burgers + 2 Frites + 2 Boissons
                      <div className="text-gray-600">Économie de 200¥</div>
                    </div>
                    <div>
                      <strong>Set Petit-déjeuner</strong> - Burger + Hash Browns + Café
                      <div className="text-gray-600">Disponible jusqu&apos;à 10h30</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide d'utilisation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide MOS Burger</h2>
                
                <div className="space-y-6">
                  {/* Étapes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Commandez</h3>
                      <p className="text-sm text-gray-600">Au comptoir ou via l&apos;app mobile MOS</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Patientez</h3>
                      <p className="text-sm text-gray-600">5-8 minutes de préparation fraîche</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Récupérez</h3>
                      <p className="text-sm text-gray-600">Numéro appelé, burger chaud servi</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">4</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Savourez</h3>
                      <p className="text-sm text-gray-600">Dégustez la fraîcheur MOS</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">5</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recyclage</h3>
                      <p className="text-sm text-gray-600">Tri des déchets (emballages éco)</p>
                    </div>
                  </div>

                  {/* Conseils pratiques */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Conseils pour une Expérience Optimale</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Timing :</div>
                        <div className="text-gray-700">Prévoir 5-8 min d&apos;attente (fraîcheur oblige)</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Rice Burger :</div>
                        <div className="text-gray-700">Spécialité unique à essayer absolument</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Application :</div>
                        <div className="text-gray-700">Commande mobile pour éviter l&apos;attente</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Végétariens :</div>
                        <div className="text-gray-700">Excellentes options végétales disponibles</div>
                      </div>
                    </div>
                  </div>

                  {/* Phrases utiles */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Commander un set :</div>
                        <div className="text-gray-700">&quot;MOS Burger set kudasai&quot;</div>
                        <div className="text-gray-500 text-xs">モスバーガーセットください</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Rice Burger :</div>
                        <div className="text-gray-700">&quot;Raisu bāgā onegaishimasu&quot;</div>
                        <div className="text-gray-500 text-xs">ライスバーガーお願いします</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Pour emporter :</div>
                        <div className="text-gray-700">&quot;Tēkuauto de&quot;</div>
                        <div className="text-gray-500 text-xs">テイクアウトで</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Merci pour la nourriture :</div>
                        <div className="text-gray-700">&quot;Gochisōsama deshita&quot;</div>
                        <div className="text-gray-500 text-xs">ごちそうさまでした</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages concurrentiels */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">L&apos;Avantage MOS</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Fraîcheur Garantie</h4>
                        <p className="text-sm text-gray-700">
                          Préparation à la commande, ingrédients du jour
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Innovation Japonaise</h4>
                        <p className="text-sm text-gray-700">
                          Rice Burger, saveurs locales, adaptations créatives
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
                        <h4 className="font-semibold text-gray-900">Responsabilité Écologique</h4>
                        <p className="text-sm text-gray-700">
                          Ingrédients biologiques, emballages durables
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expérience Premium</h4>
                        <p className="text-sm text-gray-700">
                          Service personnalisé, qualité constante, attention au détail
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
                      <div className="text-gray-600">7h-22h (varie selon l&apos;emplacement)</div>
                      <div className="text-gray-500 text-xs">Petit-déjeuner jusqu&apos;à 10h30</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Localisation</div>
                      <div className="text-gray-600">Centres-villes, gares, centres commerciaux</div>
                      <div className="text-gray-500 text-xs">1 300+ restaurants au Japon</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Paiement</div>
                      <div className="text-gray-600">Espèces, cartes, paiement mobile</div>
                      <div className="text-gray-500 text-xs">Cartes IC acceptées</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clientèle</div>
                      <div className="text-gray-600">Étudiants, employés, familles</div>
                      <div className="text-gray-500 text-xs">Ambiance décontractée</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.mos.jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Site officiel MOS Burger →
                  </a>
                </div>
              </div>

              {/* Prix moyens */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Burger seul</span>
                    <span className="font-medium">320-520¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Set complet</span>
                    <span className="font-medium">600-800¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accompagnements</span>
                    <span className="font-medium">150-280¥</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Repas moyen</span>
                      <span className="text-gray-900">700-1,000¥</span>
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
                  <span className="text-sm text-gray-600 ml-2">L&apos;excellence japonaise</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>L&apos;antithèse du fast-food classique.</strong> MOS Burger propose une 
                  expérience burger premium avec une philosophie japonaise de qualité. 
                  Le Rice Burger est un incontournable unique au monde. Service plus lent 
                  mais qualité remarquable.
                </p>
              </div>

              {/* Application mobile */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">App MOS Order</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Commande à l&apos;avance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Personnalisation détaillée</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Programme de fidélité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Notifications nouveautés</span>
                  </div>
                </div>
              </div>

              {/* Navigation vers d'autres chaînes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Burgers</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chaines/freshness-burger" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Freshness Burger</div>
                    <div className="text-sm text-gray-600">Burgers gastronomiques</div>
                  </Link>
                  
                  <Link 
                    href="/chaines/lotteria" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lotteria</div>
                    <div className="text-sm text-gray-600">Saveurs coréano-japonaises</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
