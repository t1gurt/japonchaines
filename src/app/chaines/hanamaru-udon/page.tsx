import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';

export default function HanamaruUdonPage() {
  return (
    <>
      <ChainViewTracker chainName="hanamaru-udon" chainCategory="udon" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/udon" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Udon/Soba
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">は</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Hanamaru Udon</h1>
                <p className="text-lg text-gray-600">はなまるうどん | ハナマルウドン</p>
                <p className="text-sm text-gray-500">L&apos;udon self-service accessible à tous</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              {/* En un coup d'œil */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">En un coup d&apos;œil</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-red-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Self-Service</div>
                    <div className="text-xs text-gray-500">Libre-service</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">National</div>
                    <div className="text-xs text-gray-500">450+ magasins</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Rapide</div>
                    <div className="text-xs text-gray-500">5-10 minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Économique</div>
                    <div className="text-xs text-gray-500">280-500¥</div>
                  </div>
                </div>
              </div>

              {/* Philosophie */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Esprit Hanamaru</h2>
                <div className="prose text-gray-700">
                  <p className="mb-4">
                    <strong>Hanamaru Udon</strong> a révolutionné la consommation d&apos;udon au Japon 
                    en popularisant le concept de &quot;セルフサービス&quot; (self-service) dans ce domaine traditionnel. 
                    Depuis 2000, cette chaîne a démocratisé l&apos;accès à des udon de qualité à prix abordable.
                  </p>
                  <p className="mb-4">
                    Plus qu&apos;un simple restaurant, Hanamaru représente la modernisation respectueuse 
                    de la tradition culinaire japonaise. Ici, l&apos;udon devient accessible, personnalisable, 
                    et s&apos;adapte au rythme de vie contemporain sans perdre son authenticité.
                  </p>
                </div>
              </div>

              {/* Histoire et Culture */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <History className="w-6 h-6 text-red-600 mr-2" />
                  Histoire et Innovation
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-gray-900">2000 : La Révolution</h3>
                    <p className="text-gray-700">
                      Première chaîne d&apos;udon en self-service, bouleversant les codes 
                      de la restauration traditionnelle japonaise.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-gray-900">2003-2010 : Expansion Rapide</h3>
                    <p className="text-gray-700">
                      Croissance explosive grâce au concept novateur, passant de 10 à plus de 300 magasins. 
                      Introduction du système de tempura en libre-service.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-gray-900">2010s : Qualité et Variété</h3>
                    <p className="text-gray-700">
                      Amélioration continue de la qualité des nouilles et diversification 
                      du menu avec des options régionales et saisonnières.
                    </p>
                  </div>
                </div>
              </div>

              {/* Plats Signature */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Populaire</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Kake Udon</h3>
                      <span className="text-red-600 font-bold">280¥</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">かけうどん</p>
                    <p className="text-gray-700">
                      L&apos;udon de base dans un bouillon dashi traditionnel. 
                      Le point de départ idéal pour découvrir Hanamaru.
                    </p>
                    <div className="mt-3 text-xs text-green-600">★ Le plus économique</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Tempura Udon</h3>
                      <span className="text-red-600 font-bold">380¥</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">天ぷらうどん</p>
                    <p className="text-gray-700">
                      Udon avec tempura de crevette croustillante. 
                      Parfait équilibre entre tradition et gourmandise.
                    </p>
                    <div className="mt-3 text-xs text-orange-600">★ Le plus populaire</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Niku Udon</h3>
                      <span className="text-red-600 font-bold">490¥</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">肉うどん</p>
                    <p className="text-gray-700">
                      Udon avec fines tranches de bœuf mijoté. 
                      Version plus substantielle et riche en umami.
                    </p>
                    <div className="mt-3 text-xs text-purple-600">★ Plus consistant</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Zaru Udon</h3>
                      <span className="text-red-600 font-bold">380¥</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">ざるうどん</p>
                    <p className="text-gray-700">
                      Udon froid servi avec sauce de trempage (tsuyu). 
                      Parfait en été pour apprécier la texture des nouilles.
                    </p>
                    <div className="mt-3 text-xs text-blue-600">★ Été recommandé</div>
                  </div>
                </div>

                {/* Section Self-Service */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">🍤 Station Tempura (Self-Service)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-medium">Ebi Tempura</div>
                      <div className="text-gray-600">120¥</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Kakiage</div>
                      <div className="text-gray-600">100¥</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Chikuwa Tempura</div>
                      <div className="text-gray-600">100¥</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Inari-zushi</div>
                      <div className="text-gray-600">100¥</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide pratique */}
              <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="w-6 h-6 text-yellow-600 mr-2" />
                  Guide du Self-Service Hanamaru
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Étapes du service :</h3>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Prenez un plateau et un ticket à l&apos;entrée</li>
                      <li>Commandez votre udon au comptoir principal</li>
                      <li>Ajoutez tempura/accompagnements aux stations self-service</li>
                      <li>Payez à la caisse (présentez votre plateau)</li>
                      <li>Trouvez une place et dégustez</li>
                      <li>Rapportez plateau et vaisselle à la station de retour</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Astuces pratiques :</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Tempura fraîche disponible toute la journée</li>
                      <li>Possibilité de &quot;ōmori&quot; (grande portion) +100¥</li>
                      <li>Condiments gratuits : gingembre, sésame, algues</li>
                      <li>Service rapide même aux heures de pointe</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Options et personnalisation :</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li><strong>Atsu/Hiya</strong> : Chaud ou froid (précisez au comptoir)</li>
                      <li><strong>Toppings</strong> : Large choix de tempura et inari</li>
                      <li><strong>Gohan</strong> : Riz blanc disponible (+100¥)</li>
                      <li><strong>Menus sets</strong> : Combinaisons udon + riz + tempura</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Informations pratiques */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informations Pratiques</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Ouverture : 6h-23h (variable)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Zones : Tout le Japon</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Paiement : Cash, cartes, IC cards</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Service : Self-service</span>
                  </div>
                </div>
              </div>

              {/* Fourchette de prix */}
              <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Fourchette de Prix</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Udon simple :</span>
                    <span className="font-bold">280-380¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avec tempura :</span>
                    <span className="font-bold">400-550¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Menu complet :</span>
                    <span className="font-bold">600-800¥</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Budget moyen :</span>
                      <span className="text-green-600">450¥</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Niveau de difficulté */}
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Niveau de Difficulté</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Commande</span>
                      <span className="font-bold">Facile</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Self-service</span>
                      <span className="font-bold">Très facile</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Navigation</span>
                      <span className="font-bold">Très facile</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-600">
                  💡 Parfait pour débuter avec les chaînes japonaises !
                </div>
              </div>

              {/* Avantages Hanamaru */}
              <div className="bg-red-50 rounded-lg border border-red-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Pourquoi Hanamaru ?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Concept self-service familier</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Prix transparents et abordables</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Tempura fraîche visible</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Ambiance décontractée</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Présent dans tout le Japon</span>
                  </div>
                </div>
              </div>

              {/* Autres chaînes */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Chaînes Similaires</h3>
                <div className="space-y-3">
                  <Link href="/chaines/marugame-seimen" className="block p-3 rounded border hover:bg-gray-50">
                    <div className="font-medium">Marugame Seimen</div>
                    <div className="text-sm text-gray-600">Udon artisanal</div>
                  </Link>
                  <Link href="/chaines/fuji-soba" className="block p-3 rounded border hover:bg-gray-50">
                    <div className="font-medium">Fuji Soba</div>
                    <div className="text-sm text-gray-600">Soba traditionnel</div>
                  </Link>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
