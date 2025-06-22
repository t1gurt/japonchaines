import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, Users, History, Zap } from 'lucide-react';

export default function FujiSobaPage() {  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/udon-soba" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Udon/Soba
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">富</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fuji Soba</h1>
              <p className="text-lg text-gray-600">富士そば | ふじそば</p>
              <p className="text-sm text-gray-500">Le roi du soba debout : tradition et rapidité tokyoïte</p>
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
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Service Ultra-Rapide</div>
                  <div className="text-xs text-gray-500">2-3 minutes</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Tokyo/Kantō</div>
                  <div className="text-xs text-gray-500">110+ magasins</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">24h/24</div>
                  <div className="text-xs text-gray-500">Beaucoup d&apos;emplacements</div>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Prix Mini</div>
                  <div className="text-xs text-gray-500">300-500¥</div>
                </div>
              </div>
            </div>

            {/* Philosophie */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Esprit Fuji Soba</h2>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  <strong>Fuji Soba</strong> incarne l&apos;essence de la restauration rapide tokyoïte : 
                  des nouilles soba authentiques servies debout, dans l&apos;urgence du quotidien urbain. 
                  Depuis 1966, cette chaîne est devenue le symbole du &quot;tachi-gui&quot; (立ち食い), 
                  la culture japonaise du repas pris debout.
                </p>
                <p className="mb-4">
                  Plus qu&apos;un simple fast-food, Fuji Soba représente un mode de vie : celui des 
                  salarymen pressés, des étudiants économes, et de tous ceux qui cherchent 
                  authenticité et efficacité. C&apos;est le Tokyo populaire et authentique.
                </p>
              </div>
            </div>

            {/* Histoire et Culture */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <History className="w-6 h-6 text-blue-600 mr-2" />
                Histoire et Évolution
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-gray-900">1966 : Les Débuts</h3>
                  <p className="text-gray-700">
                    Création à Tokyo avec le concept révolutionnaire du soba debout, 
                    démocratisant cette spécialité traditionnellement coûteuse.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-gray-900">Années 80-90 : L&apos;Expansion</h3>
                  <p className="text-gray-700">
                    Multiplication des points de vente dans les gares et quartiers d&apos;affaires, 
                    devenant indissociable du paysage tokyoïte.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-bold text-gray-900">2000s : Modernisation</h3>
                  <p className="text-gray-700">
                    Introduction de nouvelles saveurs et adaptation aux goûts contemporains 
                    tout en préservant l&apos;esprit originel.
                  </p>
                </div>
              </div>
            </div>

            {/* Plats Signature */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Plats Signature</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Kake Soba</h3>
                    <span className="text-blue-600 font-bold">320¥</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">かけそば</p>
                  <p className="text-gray-700">
                    Le classique absolu : nouilles soba dans un bouillon dashi clair. 
                    L&apos;essence même de la simplicité japonaise.
                  </p>
                  <div className="mt-3 text-xs text-green-600">★ Recommandé pour débuter</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Tanuki Soba</h3>
                    <span className="text-blue-600 font-bold">370¥</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">たぬきそば</p>
                  <p className="text-gray-700">
                    Soba avec tenkasu (billes de tempura), apportant texture 
                    croquante et goût plus riche.
                  </p>
                  <div className="mt-3 text-xs text-orange-600">★ Le plus populaire</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Tempura Soba</h3>
                    <span className="text-blue-600 font-bold">480¥</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">天ぷらそば</p>
                  <p className="text-gray-700">
                    Avec une vraie tempura de crevette, version premium 
                    du concept Fuji Soba.
                  </p>
                  <div className="mt-3 text-xs text-purple-600">★ Expérience complète</div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">Curry Soba</h3>
                    <span className="text-blue-600 font-bold">450¥</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">カレーそば</p>
                  <p className="text-gray-700">
                    Fusion unique : nouilles soba dans un bouillon au curry japonais. 
                    Spécialité moderne de la chaîne.
                  </p>
                  <div className="mt-3 text-xs text-red-600">★ Saveur unique</div>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-6 h-6 text-yellow-600 mr-2" />
                Guide Pratique pour Débutants
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Comment commander ?</h3>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    <li>Achetez votre ticket au distributeur (machines en japonais)</li>
                    <li>Remettez le ticket au comptoir</li>
                    <li>Mangez debout au comptoir (concept tachi-gui)</li>
                    <li>Déposez vos baguettes et partez (pas de pourboire)</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Astuces culturelles</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Mangez rapidement - c&apos;est le concept !</li>
                    <li>Aspirer bruyamment les nouilles est normal</li>
                    <li>Pas de conversation longue - efficacité avant tout</li>
                    <li>Peak hours : 12h-13h et 19h-20h (évitez si possible)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Options et personnalisation</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li><strong>Kaedama</strong> (替え玉) : Portion supplémentaire de nouilles (+100¥)</li>
                    <li><strong>Ōmori</strong> (大盛) : Grande portion (+50¥)</li>
                    <li><strong>Toppings</strong> : Œuf, algues, kamaboko disponibles</li>
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
                  <span>Ouverture : Variables (souvent 24h)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                  <span>Zones : Tokyo, Kanagawa, Saitama</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 text-gray-400 mr-3" />
                  <span>Paiement : Cash uniquement</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-gray-400 mr-3" />
                  <span>Service : Tachi-gui (debout)</span>
                </div>
              </div>
            </div>

            {/* Fourchette de prix */}
            <div className="bg-green-50 rounded-lg border border-green-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fourchette de Prix</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Soba simple :</span>
                  <span className="font-bold">320-380¥</span>
                </div>
                <div className="flex justify-between">
                  <span>Avec toppings :</span>
                  <span className="font-bold">450-550¥</span>
                </div>
                <div className="flex justify-between">
                  <span>Menu complet :</span>
                  <span className="font-bold">600-800¥</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Budget moyen :</span>
                    <span className="text-green-600">400¥</span>
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
                    <span className="font-bold">Moyen</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Barrière linguistique</span>
                    <span className="font-bold">Élevée</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Navigation</span>
                    <span className="font-bold">Facile</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-600">
                💡 Conseil : Apprenez &quot;kake soba&quot; (かけそば) pour votre première visite !
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
                <Link href="/chaines/hanamaru-udon" className="block p-3 rounded border hover:bg-gray-50">
                  <div className="font-medium">Hanamaru Udon</div>
                  <div className="text-sm text-gray-600">Udon self-service</div>
                </Link>
              </div>
            </div>
          </div>
        </div>      </div>
    </div>
  );
}
