import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, DollarSign, Users, ChefHat, Star, Award, TrendingUp, Heart, Utensils } from "lucide-react";
import ChainViewTracker from '../../../components/ChainViewTracker';



export default function NakauPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <ChainViewTracker chainName="Nakau" chainCategory="gyudon" />
      
      {/* Navigation Breadcrumb */}
      <nav className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-orange-600 hover:text-orange-800 font-medium">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/type-plat/gyudon" className="text-orange-600 hover:text-orange-800 font-medium">
              Gyūdon
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Nakau</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-orange-600 font-bold text-4xl">なか卯</div>
              </div>
              
              <div className="text-center md:text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Nakau
                  <span className="block text-2xl md:text-3xl mt-2 text-orange-200">なか卯</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 font-medium">
                  La Fusion Parfaite Gyūdon & Udon
                </p>
                <p className="text-lg text-orange-200 mt-2">
                  Spécialiste de la Qualité Familiale depuis 1969
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-8 py-6 bg-gradient-to-r from-orange-50 to-orange-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">460+</div>
                <div className="text-sm text-orange-600">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">55 ans</div>
                <div className="text-sm text-orange-600">D'histoire</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">¥490~</div>
                <div className="text-sm text-orange-600">Prix moyen</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">24h/24</div>
                <div className="text-sm text-orange-600">Certains magasins</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Découvrir Nakau</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-xl text-orange-600 font-semibold mb-4">
                  Nakau révolutionne l'expérience fast-food japonais en combinant deux des plats les plus populaires du Japon : le gyūdon et l'udon.
                </p>
                
                <p>
                  Fondée en <strong>1969</strong> sous le nom "Nakau Honten", cette chaîne unique a développé un concept innovant qui la distingue de ses concurrents Yoshinoya, Sukiya et Matsuya. Plutôt que de se concentrer uniquement sur le gyūdon, Nakau a élargi son menu pour inclure des <strong>udon fraîchement préparés</strong>, créant ainsi un positionnement unique sur le marché du fast-food japonais.
                </p>
                
                <p>
                  La philosophie de Nakau repose sur la <strong>"qualité familiale accessible"</strong> - offrir des plats qui rappellent la cuisine maison tout en maintenant la rapidité et l'efficacité d'une chaîne de restauration rapide. Cette approche a permis à l'enseigne de fidéliser une clientèle diverse, des salarymen pressés aux familles à la recherche d'un repas satisfaisant.
                </p>
              </div>
            </div>

            {/* Menu Signature */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Menu & Spécialités</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Gyūdon Premium
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>親子丼 (Oyako-don)</strong> - Poulet et œuf, spécialité signature</li>
                    <li><strong>牛丼 (Gyū-don)</strong> - Bœuf mijoté, style maison</li>
                    <li><strong>カツ丼 (Katsu-don)</strong> - Escalope de porc panée</li>
                    <li><strong>天丼 (Ten-don)</strong> - Tempura sur riz</li>
                    <li><strong>海鮮丼 (Kaisen-don)</strong> - Fruits de mer variés</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5" />
                    Udon & Nouilles
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>かけうどん (Kake udon)</strong> - Udon nature au dashi</li>
                    <li><strong>肉うどん (Niku udon)</strong> - Udon au bœuf mijoté</li>
                    <li><strong>天ぷらうどん (Tempura udon)</strong> - Avec tempura de crevette</li>
                    <li><strong>カレーうどん (Curry udon)</strong> - Udon au curry japonais</li>
                    <li><strong>そば (Soba)</strong> - Nouilles de sarrasin disponibles</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">Le Secret de Nakau</h4>
                    <p className="text-gray-700 text-sm">
                      Les <strong>udon sont préparés fraîchement</strong> dans chaque restaurant, contrairement à la plupart des chaînes qui utilisent des nouilles industrielles. Le bouillon dashi est préparé quotidiennement avec des copeaux de bonite (katsuobushi) authentiques, créant une expérience gustative supérieure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Guide */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Guide de Commande</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">Système de Commande Hybride</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">🎫 Distributeur Automatique</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Insérez votre argent</li>
                        <li>• Sélectionnez votre plat principal</li>
                        <li>• Choisissez la taille (並/大/特盛)</li>
                        <li>• Ajoutez des accompagnements</li>
                        <li>• Récupérez le ticket et la monnaie</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">👥 Commande au Comptoir</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Certains magasins acceptent la commande directe</li>
                        <li>• Personnel généralement anglophone basique</li>
                        <li>• Paiement en espèces ou carte IC</li>
                        <li>• Option take-away disponible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Conseils pour Optimiser votre Commande</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Les sets "定食 (teishoku)" incluent soupe miso et légumes</li>
                        <li>• Demandez "大盛り無料 (ōmori muryō)" pour plus de riz gratuit (certains plats)</li>
                        <li>• Les udon nécessitent 3-5 minutes de préparation supplémentaire</li>
                        <li>• L'eau de thé vert est en libre-service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Experience */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">L'Expérience Nakau</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-orange-800">Atmosphère & Ambiance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Design chaleureux</strong> - Intérieur en bois clair, éclairage doux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Espaces familiaux</strong> - Tables pour 4-6 personnes disponibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Service attentionné</strong> - Personnel formé à l'hospitalité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Ambiance détendue</strong> - Moins pressée que Yoshinoya</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-orange-800">Différentiateurs Clés</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Qualité supérieure</strong> - Ingrédients plus frais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Menu diversifié</strong> - Gyūdon ET udon sous un même toit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Préparation visible</strong> - Cuisine ouverte dans certains magasins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Innovation continue</strong> - Nouveaux produits saisonniers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practical Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Informations Pratiques</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Gamme de Prix
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Gyūdon 並盛</strong>: ¥490-580</li>
                      <li>• <strong>Oyako-don</strong>: ¥650-750</li>
                      <li>• <strong>Udon simple</strong>: ¥380-480</li>
                      <li>• <strong>Sets complets</strong>: ¥800-1,200</li>
                      <li>• <strong>Menu enfant</strong>: ¥480-580</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Horaires Types
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Centres-villes</strong>: 24h/24 ou 6h-2h</li>
                      <li>• <strong>Banlieues</strong>: 7h-23h généralement</li>
                      <li>• <strong>Autoroutes</strong>: Horaires étendus</li>
                      <li>• <strong>Pas de fermeture</strong> : Nouvel An seulement</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-bold text-green-800 mb-2">Régimes Alimentaires</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Végétarien</strong>: Udon au dashi végétal (sur demande)</li>
                      <li>• <strong>Sans porc</strong>: Nombreuses options disponibles</li>
                      <li>• <strong>Allergies</strong>: Informations disponibles en anglais</li>
                      <li>• <strong>Enfants</strong>: Menu adapté et portions ajustables</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-bold text-blue-800 mb-2">Services Supplémentaires</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Wi-Fi gratuit</strong> dans la plupart des magasins</li>
                      <li>• <strong>Prises électriques</strong> aux comptoirs</li>
                      <li>• <strong>Commande à emporter</strong> optimisée</li>
                      <li>• <strong>Livraison</strong> via Uber Eats/demae-can</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nakau en Bref</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Fondation</div>
                    <div className="text-sm text-gray-600">1969 (55 ans)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Restaurants</div>
                    <div className="text-sm text-gray-600">460+ au Japon</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Spécialité</div>
                    <div className="text-sm text-gray-600">Gyūdon + Udon frais</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Budget moyen</div>
                    <div className="text-sm text-gray-600">¥500-800 par personne</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Point fort</div>
                    <div className="text-sm text-gray-600">Qualité familiale</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Recommandations</h4>
                <div className="space-y-2">
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-800 text-sm">Pour débuter</div>
                    <div className="text-xs text-orange-600">親子丼 (Oyako-don) ¥650</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-800 text-sm">Expérience complète</div>
                    <div className="text-xs text-orange-600">Gyūdon + Udon set</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-800 text-sm">Budget serré</div>
                    <div className="text-xs text-orange-600">かけうどん ¥380</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Chaînes Similaires</h3>
              <div className="space-y-3">
                <Link href="/chaines/yoshinoya" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Yoshinoya</div>
                  <div className="text-sm text-gray-600">L'original du gyūdon</div>
                </Link>
                <Link href="/chaines/sukiya" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Sukiya</div>
                  <div className="text-sm text-gray-600">Leader en nombre</div>
                </Link>
                <Link href="/chaines/matsuya" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Matsuya</div>
                  <div className="text-sm text-gray-600">Innovation technologique</div>
                </Link>
                <Link href="/type-plat/udon" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="font-medium text-orange-800">Spécialistes Udon</div>
                  <div className="text-sm text-orange-600">Découvrir d'autres chaînes</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
