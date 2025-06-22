import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Leaf, Coffee, ChefHat, DollarSign } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';

export default function FreshnessBurgerPage() {
  return (
    <>
      <ChainViewTracker chainName="freshness-burger" chainCategory="burgers" />
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
            <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Freshness Burger</h1>
              <p className="text-lg text-gray-600">フレッシュネスバーガー</p>
              <p className="text-sm text-gray-500">Le burger premium "Made to Order" du Japon</p>
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
                <Info className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Freshness Burger</strong> est la chaîne de burgers premium du Japon, fondée en 1992 
                  avec une philosophie simple : "Made to Order" avec des ingrédients 100% frais. Contrairement 
                  aux chaînes de fast-food traditionnelles, Freshness Burger privilégie la qualité à la vitesse, 
                  proposant des burgers préparés à la commande dans une ambiance décontractée de "casual dining".
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">🌿 Philosophie "Freshness"</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Made to Order</strong> - Chaque burger préparé à la commande</li>
                    <li>• <strong>Ingrédients frais quotidiens</strong> - Légumes livrés chaque matin</li>
                    <li>• <strong>Pain artisanal</strong> - Buns cuits sur place plusieurs fois par jour</li>
                    <li>• <strong>Viande premium</strong> - Bœuf australien et japonais de qualité supérieure</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Positionnement unique</h3>
                <p className="mb-4">
                  Freshness Burger occupe le créneau du "fast-casual", entre le fast-food traditionnel 
                  et la restauration classique. Avec des prix environ 50% plus élevés que McDonald's 
                  mais une qualité nettement supérieure, la chaîne attire une clientèle urbaine 
                  privilégiant la qualité et la fraîcheur.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏪 Concept de restaurant</h3>
                <p className="mb-4">
                  Les restaurants Freshness Burger arborent un design moderne et chaleureux, avec 
                  des espaces confortables pour manger sur place. L'ambiance décontractée permet 
                  de prendre son temps, contrastant avec l'aspect "rush" des chaînes traditionnelles. 
                  Beaucoup de restaurants proposent également des coins café avec des boissons premium.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 Expansion contrôlée</h3>
                <p className="mb-4">
                  Avec environ 180 restaurants principalement concentrés dans la région du Kantō 
                  (Tokyo et environs), Freshness Burger privilégie la qualité à la quantité, 
                  maintenant des standards élevés plutôt que d'expandre rapidement.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Signature</h2>
              </div>

              {/* Burgers signature */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍔 Burgers Signature</h3>
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
                        <td className="p-3 font-medium">Classic Beef Burger</td>
                        <td className="p-3">クラシックビーフバーガー</td>
                        <td className="p-3">Le burger signature, bœuf australien frais</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Freshness Burger</td>
                        <td className="p-3">フレッシュネスバーガー</td>
                        <td className="p-3">Double steak, légumes croquants du jour</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">The Tower Burger</td>
                        <td className="p-3">ザ・タワーバーガー</td>
                        <td className="p-3">Burger géant 3 étages, défi gourmand</td>
                        <td className="p-3">¥1,080</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bacon Cheese Deluxe</td>
                        <td className="p-3">ベーコンチーズデラックス</td>
                        <td className="p-3">Bacon fumé, fromage fondu gourmand</td>
                        <td className="p-3">¥850</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Burgers premium */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Gamme Premium</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Produit</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Wagyu Premium</td>
                        <td className="p-3">和牛プレミアム</td>
                        <td className="p-3">Wagyu japonais, luxe absolu</td>
                        <td className="p-3">¥1,480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Salmon Teriyaki</td>
                        <td className="p-3">サーモンテリヤキ</td>
                        <td className="p-3">Saumon grillé, sauce teriyaki maison</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Avocado Veggie</td>
                        <td className="p-3">アボカドベジー</td>
                        <td className="p-3">Galette végétale, avocat frais</td>
                        <td className="p-3">¥780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements et boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍟 Accompagnements & Boissons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-3">Accompagnements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Frites fraîches</strong> - ¥280 (fraîches, coupées sur place)</li>
                      <li>• <strong>Sweet Potato Fries</strong> - ¥320 (option plus saine)</li>
                      <li>• <strong>Onion Rings</strong> - ¥350 (rondelles d'oignon croustillantes)</li>
                      <li>• <strong>Side Salad</strong> - ¥380 (légumes biologiques)</li>
                      <li>• <strong>Seasonal Soup</strong> - ¥280 (recette changeante)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-3">Boissons premium</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Café premium</strong> - ¥320 (grains sélectionnés)</li>
                      <li>• <strong>Thé japonais</strong> - ¥280 (infusion longue)</li>
                      <li>• <strong>Smoothies</strong> - ¥450 (5 parfums)</li>
                      <li>• <strong>Jus locaux</strong> - ¥480 (sélection locale)</li>
                      <li>• <strong>Sodas artisanaux</strong> - ¥320 (sans conservateurs)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Made to Order */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Le Concept "Made to Order"</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">⏱️ Temps d'attente</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    Contrairement au fast-food traditionnel, comptez 8-12 minutes d'attente pour recevoir 
                    votre commande fraîchement préparée.
                  </p>
                  <ol className="text-yellow-700 text-sm space-y-1">
                    <li><strong>1.</strong> Commande prise et numéro attribué</li>
                    <li><strong>2.</strong> Préparation immédiate en cuisine</li>
                    <li><strong>3.</strong> Cuisson du steak à la plancha</li>
                    <li><strong>4.</strong> Assemblage avec légumes frais du jour</li>
                    <li><strong>5.</strong> Service à table ou comptoir</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥩 Qualité de la viande</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bœuf australien grain-fed exclusivement</li>
                      <li>• Steaks formés à la main, jamais congelés</li>
                      <li>• Cuisson à la plancha pour préserver les jus</li>
                      <li>• Assaisonnement au moment de la cuisson</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥬 Fraîcheur quotidienne</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Légumes livrés chaque matin</li>
                      <li>• Pain cuit sur place toutes les 4 heures</li>
                      <li>• Sauces préparées quotidiennement</li>
                      <li>• Aucun conservateur ou additif artificiel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Commander</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🗣️ Commande au comptoir</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Service traditionnel avec staff anglophone dans la plupart des restaurants.
                  </p>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Approchez-vous du comptoir de commande</li>
                    <li><strong>2.</strong> Consultez le menu illustré au-dessus</li>
                    <li><strong>3.</strong> Indiquez votre choix (nom ou pointage)</li>
                    <li><strong>4.</strong> Précisez si set menu ou burger seul</li>
                    <li><strong>5.</strong> Choisissez boisson et accompagnement</li>
                    <li><strong>6.</strong> Payez et recevez votre numéro</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Options de prix</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Burger seul</strong> - À partir de ¥580</li>
                      <li>• <strong>Set menu</strong> - +¥350 (frites + boisson)</li>
                      <li>• <strong>Upgrade premium</strong> - +¥150 (accompagnement spécial)</li>
                      <li>• <strong>Menu complet</strong> - ¥900-1,200 en moyenne</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍔 Personnalisation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cuisson de la viande (rare à well-done)</li>
                      <li>• Ajout/suppression d'ingrédients</li>
                      <li>• Sauce personnalisée</li>
                      <li>• Option pain spécial (+¥50)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🌱 Options végétariennes</h4>
                  <p className="text-sm text-green-700">
                    Freshness Burger propose plusieurs options végétariennes : Avocado Burger, 
                    Mushroom Swiss Burger, et Veggie Deluxe Burger avec galette de légumes maison. 
                    Toutes les sauces et accompagnements peuvent être adaptés.
                  </p>
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
                  <Clock className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">11h00 - 22h00 (général)</div>
                    <div className="text-sm text-gray-500">Varie selon les emplacements</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">180+ restaurants</div>
                    <div className="text-sm text-gray-500">Principalement région Tokyo</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Cartes, espèces, IC cards</div>
                    <div className="text-sm text-gray-500">PayPay accepté</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥900-1,200 par personne</div>
                    <div className="text-sm text-gray-500">Premium mais abordable</div>
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
                  <div className="font-medium text-green-700">Qualité premium</div>
                  <div className="text-green-600">Excellent rapport qualité-prix pour un burger "fait maison"</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Attente</div>
                  <div className="text-green-600">Prévoir 10-15 minutes, normal pour la qualité offerte</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Végétariens</div>
                  <div className="text-green-600">Bonnes options végétariennes disponibles</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Ambiance</div>
                  <div className="text-green-600">Parfait pour un repas décontracté de qualité</div>
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
                  <div className="font-medium text-yellow-700">Vs McDonald's</div>
                  <div className="text-yellow-600">50% plus cher, qualité nettement supérieure</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Vs MOS Burger</div>
                  <div className="text-yellow-600">Concept similaire, plus axé sur la fraîcheur</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Positionnement</div>
                  <div className="text-yellow-600">Le premium accessible du burger japonais</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-blue-700">
                Freshness Burger représente l'adaptation japonaise du concept "fast-casual" américain. 
                La chaîne a su créer un équilibre parfait entre la rapidité attendue d'un fast-food 
                et la qualité recherchée par les consommateurs japonais, privilégiant toujours 
                la fraîcheur et le service attentionné.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.freshnessburger.co.jp/" 
                   className="block text-green-700 hover:text-green-800 text-sm">
                  → Site officiel Freshness Burger
                </a>
                <a href="/type-plat/burgers" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet burgers japonais
                </a>
                <a href="/chaines/mos-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec MOS Burger
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
