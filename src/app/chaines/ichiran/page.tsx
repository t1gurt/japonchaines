import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils } from 'lucide-react';

export default function IchiranPage() {
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
            href="/type-plat/ramen" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Ramen
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">一</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ichiran</h1>
              <p className="text-lg text-gray-600">一蘭 | いちらん</p>
              <p className="text-sm text-gray-500">Le temple du ramen tonkotsu en solo</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Expérience Ramen Ultime</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ichiran est <strong>LA chaîne de ramen la plus iconique du Japon</strong>, fondée en 1960 
                  à Fukuoka. Spécialisée exclusivement dans le <strong>ramen tonkotsu</strong> (bouillon 
                  d&apos;os de porc), Ichiran a révolutionné l&apos;expérience ramen avec son concept unique 
                  de <strong>&quot;concentration maximale&quot;</strong> sur le goût.
                </p>
                <p className="text-gray-700">
                  Avec ses <strong>boxes individuelles (yatai-style)</strong> et son système de 
                  commande par bulletins personnalisés, Ichiran offre une expérience de dégustation 
                  <strong>sans distraction</strong> où seuls comptent vous et votre bol de ramen parfait.
                </p>
              </div>
            </div>

            {/* Histoire et philosophie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Art du Ramen Parfait</h2>
              </div>
              
              <div className="space-y-6">
                {/* Origines */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1960 : Naissance à Fukuoka</h3>
                  <p className="text-gray-700">
                    Ichiran naît à <strong>Fukuoka, berceau du ramen tonkotsu</strong>. Dès le départ, 
                    la chaîne se concentre uniquement sur la <strong>perfection d&apos;un seul type de ramen</strong> 
                    : le tonkotsu, avec son bouillon blanc crémeux mijoté 24h.
                  </p>
                </div>

                {/* Innovation du système */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1993 : Révolution Yatai</h3>
                  <p className="text-gray-700">
                    Ichiran invente le <strong>système de boxes individuelles</strong> inspiré des 
                    yatai traditionnels. Cette innovation permet une <strong>concentration totale</strong> 
                    sur le ramen, sans interactions sociales distrayantes.
                  </p>
                </div>

                {/* Système de personnalisation */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000s : Personnalisation Ultime</h3>
                  <p className="text-gray-700">
                    Développement du <strong>&quot;My Ichiran&quot;</strong> : système de commande par 
                    bulletins permettant de personnaliser chaque aspect du ramen (richesse, fermeté 
                    des nouilles, quantité d&apos;ail, épices, etc.).
                  </p>
                </div>

                {/* Expansion internationale */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+ : Conquête Mondiale</h3>
                  <p className="text-gray-700">
                    Expansion internationale en <strong>Hong Kong, Taiwan, États-Unis, Europe</strong>. 
                    Ichiran exporte son concept unique en conservant rigoureusement sa philosophie 
                    et ses standards de qualité.
                  </p>
                </div>
              </div>
            </div>

            {/* Le système Ichiran */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Le Système Ichiran</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Seiza Isolées (Yatai-Style)</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Boxes individuelles avec cloisons</strong> : chaque client mange seul, 
                      sans distraction. Concentration maximale sur l&apos;expérience gustative. 
                      Design inspiré des stands de rue traditionnels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Commande par Bulletin</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Formulaire de personnalisation complet</strong> : richesse du bouillon, 
                      fermeté des nouilles, quantité d&apos;ail, ciboulette, épices, chashu. 
                      Plus de 3 000 combinaisons possibles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service par Rideau</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Interaction minimale</strong> : le personnel sert via un rideau baissé. 
                      Communication par gestes et signaux. Respect de l&apos;intimité gustative.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Spécialisation Unique</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Un seul menu : ramen tonkotsu</strong>. Perfection absolue d&apos;une 
                      recette maîtrisée. Aucune distraction par d&apos;autres plats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Le ramen Ichiran */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Le Ramen Ichiran</h2>
              
              {/* Composants du ramen */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Base</span>
                  Composition du Ramen
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Bouillon Tonkotsu</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>24h de mijotage</strong> d&apos;os de porc sélectionnés. Bouillon blanc 
                        crémeux, riche en collagène, saveur profonde et complexe.
                      </p>
                      <div className="text-xs text-gray-500">Secret : double filtration</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Nouilles Spéciales</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Nouilles fines ultra-fraîches</strong>, fabriquées quotidiennement. 
                        Texture parfaite pour absorber le bouillon tonkotsu.
                      </p>
                      <div className="text-xs text-gray-500">Fermeté personnalisable</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tare Secret</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Sauce rouge secrète</strong> à base de miso et épices. Équilibre 
                        parfait entre umami, salé et légèrement épicé.
                      </p>
                      <div className="text-xs text-gray-500">Recette gardée jalousement</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chashu Premium</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Porc braisé fondant</strong>, mariné dans une sauce spéciale. 
                        Texture moelleuse, saveur concentrée.
                      </p>
                      <div className="text-xs text-gray-500">Quantité ajustable</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Options de personnalisation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Custom</span>
                  Personnalisation Ichiran
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Élément</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Options</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Recommandation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Richesse du bouillon</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Léger | Normal | Riche | Extra-riche</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Riche (première fois)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Fermeté des nouilles</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Ultra-mol | Mol | Normal | Ferme | Ultra-ferme</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal à Ferme</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Quantité d&apos;ail</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sans | Peu | Normal | Beaucoup | Extra</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Ciboulette</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sans | Normale | Extra</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normale</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Chashu</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sans | Normal | Extra | Double</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal ou Extra</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Sauce épicée</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sans | Peu | Normale | Piquante | Très piquante</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Peu (débutants)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm mr-3">Extra</span>
                  Accompagnements Disponibles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Gyoza</h4>
                    <p className="text-sm text-gray-700 mb-2">Raviolis porc-ciboulette, croustillants</p>
                    <div className="text-sm text-gray-600">280¥ (5 pièces)</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Riz au Chashu</h4>
                    <p className="text-sm text-gray-700 mb-2">Riz blanc avec lamelles de chashu</p>
                    <div className="text-sm text-gray-600">210¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Bière</h4>
                    <p className="text-sm text-gray-700 mb-2">Asahi Super Dry, parfaite avec le ramen</p>
                    <div className="text-sm text-gray-600">380¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Kaedama</h4>
                    <p className="text-sm text-gray-700 mb-2">Ration supplémentaire de nouilles</p>
                    <div className="text-sm text-gray-600">190¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Œuf Mollet</h4>
                    <p className="text-sm text-gray-700 mb-2">Œuf mariné ajitsuke, texture parfaite</p>
                    <div className="text-sm text-gray-600">120¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Algues Nori</h4>
                    <p className="text-sm text-gray-700 mb-2">Feuilles d&apos;algues grillées</p>
                    <div className="text-sm text-gray-600">120¥</div>
                  </div>
                </div>
              </div>

              {/* Prix du ramen de base */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Prix Ramen Ichiran</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>Ramen Tonkotsu Standard</strong>
                    <div className="text-gray-600">890¥ (composition de base)</div>
                  </div>
                  <div>
                    <strong>Ramen + Extras populaires</strong>
                    <div className="text-gray-600">1,200-1,400¥ (avec chashu extra + œuf)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide d'utilisation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide Ichiran</h2>
              
              <div className="space-y-6">
                {/* Étapes détaillées */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">File d&apos;attente</h3>
                    <p className="text-sm text-gray-600">Attente souvent nécessaire (popularité énorme)</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Machine à tickets</h3>
                    <p className="text-sm text-gray-600">Achetez votre ticket de ramen + extras</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Attribution box</h3>
                    <p className="text-sm text-gray-600">Le personnel vous assigne une box individuelle</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bulletin commande</h3>
                    <p className="text-sm text-gray-600">Remplissez le formulaire de personnalisation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Service rideau</h3>
                    <p className="text-sm text-gray-600">Le ramen arrive via le système de rideau</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">6</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dégustation</h3>
                    <p className="text-sm text-gray-600">Concentration totale sur votre ramen</p>
                  </div>
                </div>

                {/* Conseils d'expert */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Conseils d&apos;Expert Ichiran</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Première visite :</div>
                      <div className="text-gray-700">Commandez &quot;ossusume&quot; (recommandé) pour la configuration standard</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Timing optimal :</div>
                      <div className="text-gray-700">Évitez 12h-14h et 19h-21h pour minimiser l&apos;attente</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Technique dégustation :</div>
                      <div className="text-gray-700">Mélangez d&apos;abord, goûtez le bouillon, puis les nouilles</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Kaedama :</div>
                      <div className="text-gray-700">Commandez les nouilles supplémentaires quand il reste 1/3 de bouillon</div>
                    </div>
                  </div>
                </div>

                {/* Étiquette spéciale */}
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Étiquette Ichiran</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Silence respecté :</div>
                      <div className="text-gray-700">L&apos;ambiance silencieuse fait partie de l&apos;expérience</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Interaction minimale :</div>
                      <div className="text-gray-700">Communication par gestes avec le personnel</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Concentration :</div>
                      <div className="text-gray-700">Éteignez votre téléphone, focus sur le ramen</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Durée recommandée :</div>
                      <div className="text-gray-700">15-20 minutes max pour profiter de la température idéale</div>
                    </div>
                  </div>
                </div>

                {/* Phrases utiles */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles chez Ichiran</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Recommandation standard :</div>
                      <div className="text-gray-700">&quot;Osusume de onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">おすすめでお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Kaedama (nouilles sup.) :</div>
                      <div className="text-gray-700">&quot;Kaedama kudasai&quot;</div>
                      <div className="text-gray-500 text-xs">替玉ください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">C&apos;était délicieux :</div>
                      <div className="text-gray-700">&quot;Gochisōsama deshita&quot;</div>
                      <div className="text-gray-500 text-xs">ごちそうさまでした</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Appeler le service :</div>
                      <div className="text-gray-700">Pressez le bouton de votre box</div>
                      <div className="text-gray-500 text-xs">ボタンを押す</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* L'excellence Ichiran */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi Ichiran est Légendaire</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Spécialisation Absolue</h4>
                      <p className="text-sm text-gray-700">
                        Un seul plat maîtrisé à la perfection depuis 60+ ans
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expérience Unique</h4>
                      <p className="text-sm text-gray-700">
                        Concept de boxes individuelles inégalé au monde
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
                      <h4 className="font-semibold text-gray-900">Personnalisation Extrême</h4>
                      <p className="text-sm text-gray-700">
                        3 000+ combinaisons pour le ramen parfait
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualité Constante</h4>
                      <p className="text-sm text-gray-700">
                        Standards rigoureux, goût identique partout
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
                    <div className="text-gray-600">24h/24 (emplacements principaux)</div>
                    <div className="text-gray-500 text-xs">Varie selon l&apos;emplacement</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Centres-villes, gares, districts animés</div>
                    <div className="text-gray-500 text-xs">400+ restaurants au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">Machine à tickets (espèces/cartes)</div>
                    <div className="text-gray-500 text-xs">Cartes IC acceptées</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientèle</div>
                    <div className="text-gray-600">Solo principalement, tous âges</div>
                    <div className="text-gray-500 text-xs">Expérience individuelle</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://ichiran.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Site officiel Ichiran →
                </a>
              </div>
            </div>

            {/* Prix moyens */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ramen tonkotsu</span>
                  <span className="font-medium">890¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avec extras populaires</span>
                  <span className="font-medium">1,200-1,400¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kaedama</span>
                  <span className="font-medium">190¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas moyen</span>
                    <span className="text-gray-900">1,000-1,300¥</span>
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
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Expérience transcendante</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>L&apos;expérience ramen ultime.</strong> Ichiran transforme la dégustation 
                de ramen en rituel presque méditatif. Le système de boxes et la qualité 
                exceptionnelle du tonkotsu en font un incontournable absolu. Une expérience 
                unique au monde à vivre au moins une fois.
              </p>
            </div>

            {/* Système de fidélité */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Ichiran</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Sauvegarde de vos préférences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Historique de commandes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Points de fidélité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Commande express mobile</span>
                </div>
              </div>
            </div>

            {/* Navigation vers d'autres chaînes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Ramen</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chaines/ippudo" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Ippudo</div>
                  <div className="text-sm text-gray-600">Ramen moderne et créatif</div>
                </Link>
                
                <Link 
                  href="/chaines/ramen-jiro" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Ramen Jirō</div>
                  <div className="text-sm text-gray-600">L&apos;expérience extrême</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
