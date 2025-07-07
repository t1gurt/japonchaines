import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';




export default function SushiroPage() {
  return (
    <>
      <ChainViewTracker chainName="sushiro" chainCategory="kaiten-zushi" />
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
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ス</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Sushiro</h1>
                <p className="text-lg text-gray-600">スシロー | すしろー</p>
                <p className="text-sm text-gray-500">Le n°1 incontesté du kaiten-zushi depuis 8 ans</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Message d'accueil pour les Français */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Bienvenue dans une Révolution Culinaire</h2>
                <div className="prose prose-orange max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Pour nos amis francophones</h3>
                    <p className="text-blue-800 italic">
                      &quot;Si votre expérience du sushi en France vous a habitués à des repas raffinés mais onéreux, 
                      préparez-vous à découvrir une toute nouvelle dimension : le sushi comme plaisir quotidien accessible à tous.&quot;
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Sushiro n&apos;est pas qu&apos;un restaurant - c&apos;est un <strong>phénomène culturel japonais</strong> qui a redéfini 
                    la façon dont tout un pays consomme le sushi. <strong>N°1 japonais depuis 8 années consécutives</strong>, 
                    cette chaîne transforme ce qui était autrefois réservé aux occasions spéciales en 
                    <strong>plaisir quotidien et convivial</strong>.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg my-4">
                    <h4 className="font-semibold text-gray-900 mb-2">La Philosophie Sushiro</h4>
                    <blockquote className="text-gray-700 italic border-l-3 border-orange-400 pl-4">
                      &quot;うまいすしを、腹一杯。うまいすしで、心も一杯。&quot;<br/>
                      <span className="text-sm text-gray-600">&quot;Du sushi délicieux à satiété, pour le plaisir du ventre et du cœur&quot;</span>
                    </blockquote>
                  </div>
                  
                  <p className="text-gray-700">
                    Alors qu&apos;en France, un repas sushi pour deux coûte souvent 40-60€, 
                    <strong>Sushiro propose la même qualité pour moins de 15€</strong>. Cette révolution des prix 
                    n&apos;est possible que grâce à une obsession : <strong>la qualité absolue à chaque étape</strong>, 
                    de la sélection des ingrédients aux innovations technologiques révolutionnaires.
                  </p>
                </div>
              </div>

              {/* Les secrets de l'excellence */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Les Secrets de l&apos;Excellence Sushiro</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Le succès de Sushiro ne repose pas sur des compromis de qualité, mais au contraire sur une 
                  <strong> obsession de la perfection</strong> dans les deux piliers fondamentaux du sushi.
                </p>
                
                <div className="space-y-8">
                  {/* ネタ (La Garniture) */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      ネタ (Neta) - La Garniture : Une Quête Mondiale de l&apos;Excellence
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🐟 L&apos;Histoire du Thon Parfait</h4>
                        <p className="text-blue-800 text-sm">
                          Le thon n°1 de Sushiro cache un secret : uniquement du <strong>Mebachimaguro de grande taille (&quot;Ōbachi&quot;)</strong>, 
                          et seulement la partie centrale appelée <strong>&quot;Tenmi&quot;</strong> - sans tendons, 
                          avec le maximum de saveur umami. Un raffinement qu&apos;aucun prix ne pourrait laisser deviner.
                        </p>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">🦪 L&apos;Exemple de l&apos;Intégrité : L&apos;Oursin</h4>
                        <p className="text-yellow-800 text-sm">
                          En 2013, Sushiro a retiré l&apos;oursin de son menu régulier - non par manque de demande, 
                          mais parce que <strong>&quot;il n&apos;était pas assez délicieux pendant certaines périodes&quot;</strong>. 
                          Aujourd&apos;hui, il n&apos;apparaît qu&apos;en édition limitée, quand la qualité est parfaite.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🌍 Réseau Mondial d&apos;Acheteurs Experts</h4>
                        <p className="text-green-800 text-sm">
                          Des acheteurs spécialisés sillonnent le monde pour créer des relations directes avec les producteurs, 
                          garantissant les <strong>&quot;Sushiro Specs&quot;</strong> - des standards de qualité uniques 
                          que seule cette chaîne peut imposer grâce à ses volumes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* シャリ (Le Riz) */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      シャリ (Shari) - Le Riz : L&apos;Âme Secrète du Sushi
                    </h3>
                    
                    <div className="bg-orange-50 p-4 rounded-lg mb-4">
                      <p className="text-orange-800 text-sm italic">
                        &quot;Sushiro accorde plus d&apos;importance au shari qu&apos;au neta&quot; - Le Président de Sushiro
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🤖 Robot Sushi à 2 Millions de Yens</h4>
                        <p className="text-gray-700 text-sm">
                          Chaque robot reproduit scientifiquement la technique des maîtres sushi : 
                          <strong>extérieur compact qui emprisonne l&apos;air, intérieur qui fond instantanément en bouche</strong>. 
                          La technologie au service de l&apos;artisanat traditionnel.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🌾 Le Secret du Mélange de Riz</h4>
                        <p className="text-gray-700 text-sm">
                          Contrairement à l&apos;idée reçue, Sushiro mélange <strong>riz nouveau et riz ancien</strong> 
                          pour optimiser l&apos;absorption du vinaigre de riz, créant un shari qui révèle 
                          parfaitement les saveurs du poisson.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* L'expérience technologique */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">L&apos;Expérience Technologique Sushiro</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">📱 Étape 1 : Réservation Intelligente</h3>
                      <p className="text-gray-700 text-sm">
                        Application mobile ou LINE pour réserver votre table et éviter l&apos;attente. 
                        Arrivez au moment parfait !
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">🎮 Étape 2 : Commande Tactile</h3>
                      <p className="text-gray-700 text-sm">
                        Tablettes multilingues avec photos HD. Interface intuitive, 
                        même les enfants deviennent des experts !
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">🚄 Étape 3 : Auto Waiter</h3>
                      <p className="text-gray-700 text-sm">
                        Votre &quot;train des sushis&quot; personnel ! Vos commandes arrivent 
                        sur un rail dédié à une vitesse impressionnante.
                      </p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">💳 Étape 4 : Paiement Express</h3>
                      <p className="text-gray-700 text-sm">
                        Comptage automatique des assiettes et paiement en libre-service. 
                        Aucune interaction requise !
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu highlights */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Au-delà du Sushi : Un Univers de Saveurs</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Avec plus de <strong>100 variétés en permanence</strong>, Sushiro transcende la définition 
                  traditionnelle du sushi pour devenir une aventure culinaire complète.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">🍣 Sushi Premium</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Thon Tenmi</strong> - Le cœur du mebachimaguro</li>
                      <li>• <strong>Saumon Atlantique</strong> - Gras et fondant</li>
                      <li>• <strong>Anguille grillée</strong> - Sauce secrète maison</li>
                      <li>• <strong>Crevette douce</strong> - Fraîcheur exceptionnelle</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">🥩 Révolution : Niku-zushi</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Bœuf grillé sauce yakiniku</strong> - Collaboration d&apos;exception</li>
                      <li>• <strong>Porc chashu</strong> - Technique ramen appliquée</li>
                      <li>• <strong>Canard fumé</strong> - Sophistication française</li>
                      <li>• <strong>Bœuf wagyu flambé</strong> - Luxe accessible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ enrichie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquentes des Visiteurs Francophones</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🌐 Je ne parle pas japonais, est-ce vraiment accessible ?</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Absolument !</strong> Les tablettes tactiles sont disponibles en anglais avec photos HD. 
                      L&apos;interface est si intuitive que même les enfants s&apos;en sortent parfaitement. 
                      De plus, l&apos;expérience est largement visuelle et autonome.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">👨‍👩‍👧‍👦 Est-ce adapté aux familles avec enfants ?</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>C&apos;est LE restaurant familial par excellence !</strong> 
                      Les enfants adorent le &quot;train des sushis&quot;, il y a des menus spéciaux enfants, 
                      des jouets en cadeau, et même les plus difficiles trouvent des options.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🥗 Options pour végétariens/végétaliens ?</h3>
                    <p className="text-gray-700 text-sm">
                      Oui ! Concombre, kampyō (courge séchée), inari (tofu sucré), avocat, 
                      légumes tempura, edamame, et de nombreux accompagnements sans viande ni poisson. 
                      Les options sont clairement identifiées.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">⏱️ Quelle est la durée idéale d&apos;un repas ?</h3>
                    <p className="text-gray-700 text-sm">
                      Comptez <strong>45-60 minutes</strong> pour une expérience complète. 
                      Pas de stress temporel - vous mangez à votre rythme. 
                      Certains y passent 2h en famille, d&apos;autres expédient en 30 minutes.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">💳 Quels moyens de paiement sont acceptés ?</h3>
                    <p className="text-gray-700 text-sm">
                      Espèces (toujours), cartes internationales (Visa, Mastercard, AMEX), 
                      et paiements mobiles japonais. 
                      Le paiement se fait aux bornes self-service très simples.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🍣 La qualité est-elle vraiment au rendez-vous à ces prix ?</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>C&apos;est toute la magie Sushiro !</strong> 
                      Grâce aux volumes énormes et à l&apos;optimisation technologique, 
                      ils maintiennent une qualité constante à des prix révolutionnaires. 
                      Le thon &quot;Tenmi&quot; à 120¥ vaut les sushi à 8€ parisiens.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-blue-900 mb-2">🎌 Message Final</h4>
                  <p className="text-blue-800 text-sm">
                    <strong>Sushiro n&apos;est pas qu&apos;un restaurant, c&apos;est une initiation à la culture japonaise moderne.</strong> 
                    Vous en ressortirez avec une nouvelle vision du sushi, de la technologie au service de la gastronomie, 
                    et probablement l&apos;envie d&apos;y retourner avant votre départ du Japon !
                  </p>
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
                      <div className="text-gray-600">11h-23h (7j/7)</div>
                      <div className="text-gray-500 text-xs">Varie selon l&apos;emplacement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Localisation</div>
                      <div className="text-gray-600">Centres commerciaux, zones urbaines</div>
                      <div className="text-gray-500 text-xs">Plus de 600 restaurants au Japon</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Paiement</div>
                      <div className="text-gray-600">Espèces, cartes, paiement mobile</div>
                      <div className="text-gray-500 text-xs">Bornes self-service</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clientèle</div>
                      <div className="text-gray-600">Familles, couples, solo</div>
                      <div className="text-gray-500 text-xs">Tous âges bienvenus</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.sushiro.co.jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Site officiel Sushiro →
                  </a>
                </div>
              </div>

              {/* Prix moyens */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sushi standard</span>
                    <span className="font-medium">120¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sushi premium</span>
                    <span className="font-medium">190-290¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niku-sushi</span>
                    <span className="font-medium">210-350¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accompagnements</span>
                    <span className="font-medium">160-390¥</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Repas moyen</span>
                      <span className="text-gray-900">1,200-2,000¥</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notre avis */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-blue-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Excellence incontestée</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>L&apos;expérience kaiten-zushi révolutionnaire.</strong> Sushiro redéfinit 
                  complètement la notion de sushi accessible. Innovation technologique, 
                  qualité irréprochable, prix démocratiques : c&apos;est LE passage obligé 
                  pour comprendre la culture sushi japonaise moderne.
                </p>
              </div>

              {/* Navigation vers d'autres chaînes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Kaiten-zushi</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chaines/kura-sushi" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Kura Sushi</div>
                    <div className="text-sm text-gray-600">Le pionnier automatisé</div>
                  </Link>
                  
                  <Link 
                    href="/chaines/hama-sushi" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Hama Sushi</div>
                    <div className="text-sm text-gray-600">Prix ultra-compétitifs</div>
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
