import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, Wheat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';

export default function MarugameSeimensPage() {
  return (
    <>
      <ChainViewTracker chainName="marugame-seimen" chainCategory="udon" />
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
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">丸</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Marugame Seimen</h1>
                <p className="text-lg text-gray-600">丸亀製麺 | まるがめせいめん</p>
                <p className="text-sm text-gray-500">L&apos;art de l&apos;udon artisanal à portée de tous</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">La Révolution de l&apos;Udon Artisanal</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Marugame Seimen a révolutionné l&apos;industrie de l&apos;udon en combinant <strong>artisanat traditionnel 
                    et accessibilité moderne</strong>. Avec <strong>plus de 800 restaurants au Japon</strong> et une 
                    expansion internationale impressionnante, cette chaîne a su démocratiser l&apos;art millénaire 
                    de la fabrication d&apos;udon.
                  </p>
                  <p className="text-gray-700">
                    Ce qui distingue Marugame Seimen, c&apos;est son concept unique de <strong>&quot;udon fait maison 
                    visible&quot;</strong> : les clients peuvent observer les artisans pétrir, étirer et couper 
                    les nouilles fraîches devant leurs yeux, créant une expérience culinaire transparente 
                    et authentique.
                  </p>
                </div>
              </div>

              {/* Histoire et philosophie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Histoire d&apos;une Innovation Culinaire</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Création */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2000 : Naissance du Concept</h3>
                    <p className="text-gray-700">
                      Marugame Seimen est créée par <strong>Toridoll Corporation</strong> avec une vision 
                      révolutionnaire : rendre l&apos;udon artisanal de qualité accessible au grand public. 
                      Le concept &quot;製麺所&quot; (seimenjo - atelier de nouilles) place la fabrication 
                      au cœur de l&apos;expérience client.
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2003-2010 : Révolution du Format</h3>
                    <p className="text-gray-700">
                      Introduction du format <strong>&quot;atelier ouvert&quot;</strong> où les clients 
                      choisissent leur udon fraîchement préparé, puis leurs tempuras et accompagnements 
                      en libre-service. Cette approche démocratise l&apos;udon traditionnel de Sanuki.
                    </p>
                  </div>

                  {/* Expansion */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2011+ : Expansion Nationale et Internationale</h3>
                    <p className="text-gray-700">
                      Croissance explosive au Japon avec <strong>plus de 800 restaurants</strong>. 
                      Expansion internationale réussie en Asie, aux États-Unis et en Europe, 
                      adaptant le concept aux goûts locaux tout en préservant l&apos;authenticité.
                    </p>
                  </div>

                  {/* Innovation continue */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2020+ : Innovation Continue</h3>
                    <p className="text-gray-700">
                      Intégration de la technologie moderne : commande mobile, optimisation des processus, 
                      mais toujours avec le <strong>maintien de l&apos;artisanat visible</strong> qui fait 
                      l&apos;identité de la marque.
                    </p>
                  </div>
                </div>
              </div>

              {/* Le concept unique */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Wheat className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Le Concept &quot;Atelier Ouvert&quot;</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Fabrication Visible</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Artisans en action</strong> : pétrissage, étirage et découpe des nouilles 
                        fraîches devant les clients. Transparence totale du processus de fabrication.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Libre-Service Intelligent</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Parcours client optimisé</strong> : choix de l&apos;udon fraîchement cuit, 
                        sélection de tempuras chaudes, personnalisation avec condiments et accompagnements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Tradition de Sanuki</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Respect des techniques ancestrales</strong> de la préfecture de Kagawa, 
                        berceau de l&apos;udon. Farine spéciale, pétrissage traditionnel, texture parfaite.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Prix Accessible</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Démocratisation de l&apos;artisanat</strong> : udon de qualité supérieure 
                        à partir de 290¥. Accessible au quotidien sans compromis sur la qualité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Marugame Seimen</h2>
                
                {/* Udon de base */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Base</span>
                    Udon Traditionnels
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Plat</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Taille</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Caractéristique</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Kake Udon</div>
                            <div className="text-sm text-gray-500">かけうどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Normale (並)</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">290¥</td>
                          <td className="px-4 py-4 text-sm text-gray-600">Base simple, bouillon dashi</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Bukkake Udon</div>
                            <div className="text-sm text-gray-500">ぶっかけうどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Normale (並)</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">390¥</td>
                          <td className="px-4 py-4 text-sm text-gray-600">Sauce concentrée, daikon râpé</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Kamatama Udon</div>
                            <div className="text-sm text-gray-500">釜玉うどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Normale (並)</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">390¥</td>
                          <td className="px-4 py-4 text-sm text-gray-600">Œuf cru, sauce soja, spécialité</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Zaru Udon</div>
                            <div className="text-sm text-gray-500">ざるうどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Normale (並)</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">390¥</td>
                          <td className="px-4 py-4 text-sm text-gray-600">Froid, sauce à tremper</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Udon premium */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Premium</span>
                    Spécialités Marugame
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
                            <div className="font-medium text-gray-900">Niku Udon</div>
                            <div className="text-sm text-gray-500">肉うどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Bœuf mijoté, oignons doux, bouillon riche</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">590¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Curry Udon</div>
                            <div className="text-sm text-gray-500">カレーうどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Curry japonais épais, légumes, bœuf</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">690¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Mentaiko Cream Udon</div>
                            <div className="text-sm text-gray-500">明太クリームうどん</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Œufs de morue épicés, sauce crémeuse</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">790¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Seafood Udon</div>
                            <div className="text-sm text-gray-500">海鮮うdon</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">Fruits de mer variés, bouillon umami</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">890¥</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tempura et accompagnements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Tempura</span>
                    Accompagnements Frits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tempura Classiques</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Ebi (Crevette)</span>
                          <span className="font-medium">140¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ika (Calmar)</span>
                          <span className="font-medium">120¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Kakiage (Beignet)</span>
                          <span className="font-medium">130¥</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tempura Légumes</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Nasu (Aubergine)</span>
                          <span className="font-medium">100¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Kabocha (Potiron)</span>
                          <span className="font-medium">100¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Renkon (Lotus)</span>
                          <span className="font-medium">100¥</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Condiments */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Condiments Gratuits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <strong>天かす (Tenkasu)</strong> - Miettes de tempura
                    </div>
                    <div>
                      <strong>ねぎ (Negi)</strong> - Oignons verts hachés
                    </div>
                    <div>
                      <strong>生姜 (Shōga)</strong> - Gingembre mariné
                    </div>
                    <div>
                      <strong>ごま (Goma)</strong> - Graines de sésame
                    </div>
                    <div>
                      <strong>七味 (Shichimi)</strong> - Mélange 7 épices
                    </div>
                    <div>
                      <strong>醤油 (Shōyu)</strong> - Sauce soja variées
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide de commande */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">L&apos;Expérience Marugame</h2>
                
                <div className="space-y-6">
                  {/* Étapes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">1</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Observez</h3>
                      <p className="text-sm text-gray-600">Regardez les artisans préparer l&apos;udon</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">2</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Choisissez</h3>
                      <p className="text-sm text-gray-600">Sélectionnez votre type d&apos;udon et la taille</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">3</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tempura</h3>
                      <p className="text-sm text-gray-600">Ajoutez tempuras et accompagnements</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">4</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Personnalisez</h3>
                      <p className="text-sm text-gray-600">Condiments gratuits en libre-service</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">5</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Dégustez</h3>
                      <p className="text-sm text-gray-600">Savourez votre udon fraîchement préparé</p>
                    </div>
                  </div>

                  {/* Conseils */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Conseils d&apos;Expert</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Timing optimal :</div>
                        <div className="text-gray-700">Arrivez aux heures de pointe pour voir la fabrication active</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Texture parfaite :</div>
                        <div className="text-gray-700">L&apos;udon doit être ferme mais tendre (コシ - koshi)</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Tempura fraîche :</div>
                        <div className="text-gray-700">Choisissez les tempuras les plus chaudes</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Condiments :</div>
                        <div className="text-gray-700">Commencez simple, ajoutez progressivement</div>
                      </div>
                    </div>
                  </div>

                  {/* Phrases japonaises */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Commander un udon :</div>
                        <div className="text-gray-700">&quot;Kake udon hitotsu kudasai&quot;</div>
                        <div className="text-gray-500 text-xs">かけうどん一つください</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Taille grande :</div>
                        <div className="text-gray-700">&quot;Ōmori de onegaishimasu&quot;</div>
                        <div className="text-gray-500 text-xs">大盛でお願いします</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Tempura de crevette :</div>
                        <div className="text-gray-700">&quot;Ebi tempura kudasai&quot;</div>
                        <div className="text-gray-500 text-xs">エビ天ぷらください</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">C&apos;est délicieux :</div>
                        <div className="text-gray-700">&quot;Oishii desu&quot;</div>
                        <div className="text-gray-500 text-xs">おいしいです</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages concurrentiels */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Pourquoi Marugame Domine</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Transparence Totale</h4>
                        <p className="text-sm text-gray-700">
                          Fabrication visible en temps réel, confiance maximale
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Qualité Artisanale</h4>
                        <p className="text-sm text-gray-700">
                          Techniques traditionnelles de Sanuki, nouilles parfaites
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Prix Accessible</h4>
                        <p className="text-sm text-gray-700">
                          Udon de qualité à partir de 290¥, démocratisation réussie
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expérience Interactive</h4>
                        <p className="text-sm text-gray-700">
                          Participation active du client, expérience mémorable
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Innovation Continue</h4>
                        <p className="text-sm text-gray-700">
                          Nouveaux plats saisonniers, adaptation aux goûts modernes
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Expansion Internationale</h4>
                        <p className="text-sm text-gray-700">
                          Succès prouvé hors du Japon, concept universellement apprécié
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
                      <div className="text-gray-600">11h-23h (général)</div>
                      <div className="text-gray-500 text-xs">Varie selon l&apos;emplacement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Localisation</div>
                      <div className="text-gray-600">Centres-villes, centres commerciaux</div>
                      <div className="text-gray-500 text-xs">800+ restaurants au Japon</div>
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
                      <div className="font-medium text-gray-900">Clientèle</div>
                      <div className="text-gray-600">Tous âges, familles</div>
                      <div className="text-gray-500 text-xs">Expérience éducative</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.marugame-seimen.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Site officiel Marugame Seimen →
                  </a>
                </div>
              </div>

              {/* Prix moyens */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kake udon</span>
                    <span className="font-medium">290¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niku udon</span>
                    <span className="font-medium">590¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">+ Tempura ebi</span>
                    <span className="font-medium">+140¥</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Repas moyen</span>
                      <span className="text-gray-900">450-650¥</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notre avis */}
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-orange-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Expérience authentique exceptionnelle</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>L&apos;excellence accessible.</strong> Marugame Seimen offre une expérience 
                  unique alliant tradition et modernité. La possibilité d&apos;observer la fabrication 
                  en direct ajoute une dimension éducative et culturelle inestimable. 
                  Incontournable pour comprendre l&apos;art de l&apos;udon.
                </p>
              </div>

              {/* Tailles et options */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tailles et Options</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>並 (Nami)</strong> - Taille normale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>大 (Ō)</strong> - Grande taille (+100¥)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>得 (Toku)</strong> - Très grande (+150¥)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>半 (Han)</strong> - Demi-portion (-50¥)</span>
                  </div>
                </div>
              </div>

              {/* Navigation vers d'autres chaînes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Chaînes Udon/Soba</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chaines/hanamaru-udon" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Hanamaru Udon</div>
                    <div className="text-sm text-gray-600">Le concurrent direct</div>
                  </Link>
                  
                  <Link 
                    href="/chaines/fuji-soba" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Fuji Soba</div>
                    <div className="text-sm text-gray-600">Spécialiste du soba</div>
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
