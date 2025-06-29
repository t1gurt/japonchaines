import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';
import SushiroCulturalMissions from './components/SushiroCulturalMissions';

export const metadata: Metadata = {
  title: 'Sushiro (スシロー) | Kaiten-zushi | Guide Restaurants Japonais',
  description: 'Guide complet de Sushiro - Leader du sushi tournant avec innovation technologique et qualité à prix accessible. Menu détaillé, prix et conseils pratiques.',
  keywords: [
    'sushiro', 'スシロー', 'kaiten-zushi', 'sushi tournant',
    'leader kaiten', 'innovation tech', 'qualité accessible',
    'menu saisonnier', 'sushi abordable', 'tapis roulant'
  ],
  openGraph: {
    title: 'Sushiro (スシロー) | Leader du Sushi Tournant',
    description: 'Découvrez Sushiro, le leader du sushi tournant au Japon avec innovation technologique et qualité accessible',
    type: 'article',
    url: '/chaines/sushiro',
  },
  alternates: {
    canonical: '/chaines/sushiro',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
              <p className="text-sm text-gray-500">Le n°1 incontesté du kaiten-zushi au Japon</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Empire du Sushi Accessible</h2>
              <div className="prose prose-orange max-w-none">                <p className="text-lg text-gray-700 leading-relaxed">
                  Sushiro est aujourd&apos;hui <strong>le plus grand réseau de kaiten-zushi au monde</strong> avec 
                  <strong> 627 restaurants au Japon</strong> et une expansion internationale remarquable. 
                  Fondée en 1984 à Osaka, cette chaîne a révolutionné l&apos;industrie du sushi en démocratisant 
                  l&apos;accès à des <strong>sushis de qualité à prix abordable</strong>. Ce restaurant japonais 
                  emblématique est devenu la référence des restaurants sushi accessibles au Japon.
                </p>
                <p className="text-gray-700">
                  Avec son système de <strong>prix unique à 110¥</strong> pour la plupart des assiettes et 
                  ses innovations technologiques constantes, Sushiro a redéfini les standards du kaiten-zushi. 
                  Son approche &quot;tech-forward&quot; et sa fraîcheur garantie en font le choix privilégié 
                  de millions de Japonais de tous âges.
                </p>
              </div>
            </div>

            {/* Histoire et innovation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Ascension d&apos;un Géant</h2>
              </div>
              
              <div className="space-y-6">
                {/* Fondation */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1984 : Naissance à Osaka</h3>
                  <p className="text-gray-700">
                    Sushiro est fondée à <strong>Suita, Osaka</strong> avec une vision révolutionnaire : 
                    rendre le sushi de qualité accessible à tous. Dès le départ, l&apos;accent est mis sur 
                    la <strong>fraîcheur des ingrédients</strong> et l&apos;innovation opérationnelle.
                  </p>
                </div>

                {/* Expansion technologique */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000s : Révolution Technologique</h3>
                  <p className="text-gray-700">
                    Sushiro devient pionnier de la <strong>commande par tablette tactile</strong> et 
                    introduit le système de <strong>livraison directe au siège</strong>. Ces innovations 
                    transforment l&apos;expérience client et l&apos;efficacité opérationnelle.
                  </p>
                </div>

                {/* Leadership national */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+ : Domination du Marché</h3>
                  <p className="text-gray-700">
                    Sushiro devient le <strong>n°1 japonais du kaiten-zushi</strong> en nombre de restaurants 
                    et de chiffre d&apos;affaires. Son modèle économique ultra-optimisé permet de maintenir 
                    des prix très bas tout en garantissant la qualité.
                  </p>
                </div>

                {/* Expansion internationale */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2015+ : Conquête Internationale</h3>
                  <p className="text-gray-700">
                    Expansion en <strong>Corée du Sud, Taiwan, Hong Kong, Singapour</strong> et autres 
                    marchés asiatiques. Sushiro adapte son concept tout en conservant sa philosophie 
                    de qualité accessible.
                  </p>
                </div>
              </div>
            </div>

            {/* Stratégie et innovations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Les Innovations Sushiro</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Système de Commande Révolutionnaire</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Tablettes tactiles multilingues</strong> à chaque siège. Commande directe, 
                      livraison express via tapis roulant spécial, traçabilité complète.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Prix Démocratiques Unifiés</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>110¥ pour 90% des assiettes</strong>. Système de couleurs simplifié, 
                      transparence totale des prix, accessibilité maximale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fraîcheur Garantie</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Rotation maximale 1 heure</strong> sur le tapis, préparation à la commande, 
                      approvisionnement quotidien, contrôle qualité rigoureux.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation Continue</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Nouveaux produits hebdomadaires</strong>, collaborations saisonnières, 
                      adaptation aux tendances, recherche constante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Sushiro</h2>
              
              {/* Sushis classiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Classiques</span>
                  Sushis Populaires (110¥)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Sushi</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Nom Japonais</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Saumon</td>
                        <td className="px-4 py-4 text-sm text-gray-700">サーモン (sāmon)</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Saumon atlantique frais, texture fondante</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">110¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Thon</td>
                        <td className="px-4 py-4 text-sm text-gray-700">まぐろ (maguro)</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Thon rouge, saveur intense et pure</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">110¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Crevette</td>
                        <td className="px-4 py-4 text-sm text-gray-700">えび (ebi)</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Crevette cuite, texture ferme et sucrée</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">110¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Calamar</td>
                        <td className="px-4 py-4 text-sm text-gray-700">いか (ika)</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Calamar frais, croquant et délicat</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">110¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Œuf de poisson</td>
                        <td className="px-4 py-4 text-sm text-gray-700">いくら (ikura)</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Œufs de saumon, explosion de saveur</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">110¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Spécialités Sushiro */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gold-100 text-yellow-800 px-2 py-1 rounded text-sm mr-3">Premium</span>
                  Spécialités Exclusives
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Spécialité</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Toro de Thon</div>
                          <div className="text-sm text-gray-500">大とろ (ōtoro)</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Ventre de thon ultra-fondant, texture crémeuse</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">330¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Uni Premium</div>
                          <div className="text-sm text-gray-500">うに (uni)</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Oursin de Hokkaido, saveur océanique intense</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">220¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Saumon Torché</div>
                          <div className="text-sm text-gray-500">炙りサーモン (aburi sāmon)</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Saumon légèrement grillé, arôme fumé</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">110¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Makis Spéciaux</div>
                          <div className="text-sm text-gray-500">特製巻き (tokusei maki)</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Makis originaux aux ingrédients saisonniers</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">160¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements et desserts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Extras</span>
                  Accompagnements & Desserts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Soupe Miso</h4>
                    <p className="text-sm text-gray-700 mb-2">Soupe traditionnelle incluse ou supplémentaire</p>
                    <div className="text-sm text-gray-600">60¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Thé Vert</h4>
                    <p className="text-sm text-gray-700 mb-2">Thé japonais servi en self-service</p>
                    <div className="text-sm text-gray-600">Gratuit</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Desserts Japonais</h4>
                    <p className="text-sm text-gray-700 mb-2">Mochis, dorayaki, parfaits saisonniers</p>
                    <div className="text-sm text-gray-600">110-220¥</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tempura & Sides</h4>
                    <p className="text-sm text-gray-700 mb-2">Tempura de crevettes, gyoza, salade</p>
                    <div className="text-sm text-gray-600">110-160¥</div>
                  </div>
                </div>
              </div>

              {/* Système de prix */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Système de Prix Sushiro</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></div>
                    <strong>Assiettes Bleues</strong> - 110¥ (90% du menu)
                  </div>
                  <div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full inline-block mr-2"></div>
                    <strong>Assiettes Dorées</strong> - 160-220¥ (premium)
                  </div>
                  <div>
                    <div className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></div>
                    <strong>Assiettes Rouges</strong> - 330¥+ (ultra-premium)
                  </div>
                </div>
              </div>
            </div>

            {/* Guide d'utilisation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide Sushiro</h2>
              
              <div className="space-y-6">
                {/* Étapes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Attendez</h3>
                    <p className="text-sm text-gray-600">File d&apos;attente souvent nécessaire aux heures de pointe</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Installez-vous</h3>
                    <p className="text-sm text-gray-600">Choisissez votre siège, familiarisez-vous avec la tablette</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commandez</h3>
                    <p className="text-sm text-gray-600">Tapis roulant + commandes tablette personnalisées</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dégustez</h3>
                    <p className="text-sm text-gray-600">Empiler les assiettes, varier les plaisirs</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Payez</h3>
                    <p className="text-sm text-gray-600">Comptage automatique des assiettes au départ</p>
                  </div>
                </div>

                {/* Conseils pratiques */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Conseils pour une Expérience Optimale</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Heures creuses :</div>
                      <div className="text-gray-700">14h-17h et après 20h pour éviter la foule</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Tablette tactile :</div>
                      <div className="text-gray-700">Interface disponible en anglais, très intuitive</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Fraîcheur :</div>
                      <div className="text-gray-700">Commandes tablette = fraîcheur garantie</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Durée moyenne :</div>
                      <div className="text-gray-700">45-60 minutes pour un repas complet</div>
                    </div>
                  </div>
                </div>

                {/* Phrases utiles */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Nombre de personnes :</div>
                      <div className="text-gray-700">&quot;Futari desu&quot; (2 personnes)</div>
                      <div className="text-gray-500 text-xs">二人です</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Demander l&apos;addition :</div>
                      <div className="text-gray-700">&quot;Okaikei onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">お会計お願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Thé vert :</div>
                      <div className="text-gray-700">&quot;Ocha kudasai&quot;</div>
                      <div className="text-gray-500 text-xs">お茶ください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">C&apos;était délicieux :</div>
                      <div className="text-gray-700">&quot;Oishikatta desu&quot;</div>
                      <div className="text-gray-500 text-xs">美味しかったです</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Avantages concurrentiels */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi Sushiro Domine</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Réseau le Plus Étendu</h4>
                      <p className="text-sm text-gray-700">
                        627 restaurants au Japon, présence internationale
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Prix Imbattables</h4>
                      <p className="text-sm text-gray-700">
                        110¥ pour 90% des sushis, rapport qualité-prix exceptionnel
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation Technologique</h4>
                      <p className="text-sm text-gray-700">
                        Tablettes tactiles, livraison express, expérience digitale
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fraîcheur Garantie</h4>
                      <p className="text-sm text-gray-700">
                        Rotation max 1h, préparation à la commande, qualité constante
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
                    <div className="text-gray-600">11h-23h (7j/7)</div>
                    <div className="text-gray-500 text-xs">Varie selon l&apos;emplacement</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Centres commerciaux, zones urbaines</div>
                    <div className="text-gray-500 text-xs">627 restaurants au Japon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">Espèces, cartes, cartes IC</div>
                    <div className="text-gray-500 text-xs">Paiement mobile accepté</div>
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
                  <span className="font-medium">110¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sushi premium</span>
                  <span className="font-medium">160-220¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accompagnements</span>
                  <span className="font-medium">60-160¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas moyen</span>
                    <span className="text-gray-900">1,500-2,500¥</span>
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
                <span className="text-sm text-gray-600 ml-2">La référence absolue</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>L&apos;expérience kaiten-zushi par excellence.</strong> Sushiro combine 
                parfaitement accessibilité, qualité et innovation. Incontournable pour 
                découvrir la culture du sushi japonais moderne. L&apos;interface tactile 
                rend l&apos;expérience accessible aux non-japonophones.
              </p>
            </div>

            {/* Applications mobiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">App Sushiro</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Réservation de table à l&apos;avance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Commande avant arrivée</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Points de fidélité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Notifications nouveaux produits</span>
                </div>
              </div>
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
          </div>        </div>
      </div>

      {/* Sushiro Cultural Missions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SushiroCulturalMissions />
      </div>

      {/* Cultural Experience Integration */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <span className="text-3xl">🍣</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transformez votre visite Sushiro en Expérience Culturelle
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sushiro n'est pas qu'une chaîne de sushi, c'est une fenêtre sur l'innovation japonaise moderne, 
                la démocratisation de la qualité et l'évolution technologique de l'hospitalité nippone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="font-semibold text-blue-800 mb-2">Innovation Tech</h3>
                <p className="text-sm text-blue-600">Maîtrisez les tablettes tactiles et la livraison directe</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🏛️</div>
                <h3 className="font-semibold text-green-800 mb-2">Histoire Révolutionnaire</h3>
                <p className="text-sm text-green-600">Découvrez la démocratisation du sushi depuis 1984</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-semibold text-yellow-800 mb-2">Excellence Premium</h3>
                <p className="text-sm text-yellow-600">Explorez les créations saisonnières exclusives</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-purple-800 mb-2">Communauté Familiale</h3>
                <p className="text-sm text-purple-600">Intégrez-vous dans l'écosystème Sushiro</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="mr-2">🎌</span>
                Phrases spéciales pour Sushiro
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Commande par tablette :</p>
                  <p className="text-gray-700">"Touchscreen de chuumon shimasu" (タッチスクリーンで注文します)</p>
                </div>
                <div>
                  <p className="font-medium">Innovation technologique :</p>
                  <p className="text-gray-700">"Gijutsu no shinpo ga sugoi desu ne" (技術の進歩がすごいですね)</p>
                </div>
                <div>
                  <p className="font-medium">Qualité accessible :</p>
                  <p className="text-gray-700">"Yasukute oishii desu" (安くて美味しいです)</p>
                </div>
                <div>
                  <p className="font-medium">Menu saisonnier :</p>
                  <p className="text-gray-700">"Kisetsu gentei no menu arimasu ka?" (季節限定のメニューありますか?)</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/guides/culture-experience" 
                 className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span className="mr-2">📚</span>
                Découvrir le Guide Complet
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
