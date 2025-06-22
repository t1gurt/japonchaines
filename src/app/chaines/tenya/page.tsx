import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, Zap } from 'lucide-react';

export default function TenyaPage() {
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
            href="/type-plat/tempura" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Tempura/Tendon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">天</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tenya</h1>
              <p className="text-lg text-gray-600">てんや | Le Spécialiste de la Tempura</p>
              <p className="text-sm text-gray-500">L&apos;art traditionnel de la tempura accessible à tous</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Excellence de la Tempura Accessible</h2>
              <div className="prose prose-amber max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tenya a révolutionné l&apos;univers de la tempura en rendant cet <strong>art culinaire 
                  traditionnellement haut de gamme accessible au grand public</strong>. Avec 
                  <strong>plus de 200 restaurants</strong> principalement concentrés dans la région 
                  de Tokyo, cette chaîne a su préserver l&apos;authenticité et la qualité de la 
                  tempura tout en démocratisant ses prix.
                </p>
                <p className="text-gray-700">
                  Ce qui distingue Tenya, c&apos;est son engagement envers la <strong>fraîcheur 
                  absolue</strong> : tempura préparée à la commande, huile changée régulièrement, 
                  ingrédients de première qualité. L&apos;expérience Tenya, c&apos;est découvrir 
                  que la vraie tempura peut être à la fois exceptionnelle et abordable.
                </p>
              </div>
            </div>

            {/* Histoire et tradition */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Histoire d&apos;une Tradition Démocratisée</h2>
              </div>
              
              <div className="space-y-6">
                {/* Fondation */}
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1989 : Vision Révolutionnaire</h3>
                  <p className="text-gray-700">
                    Fondation de Tenya par le groupe <strong>Tenya Corporation</strong> avec une mission 
                    claire : rendre la tempura de qualité restaurant accessible aux familles japonaises. 
                    Le premier restaurant ouvre à Nihonbashi, cœur historique de Tokyo.
                  </p>
                </div>

                {/* Innovation du modèle */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1990-2000 : Innovation du Concept</h3>
                  <p className="text-gray-700">
                    Développement du format <strong>&quot;tempura fast-food premium&quot;</strong> : 
                    service rapide mais sans compromis sur la qualité. Introduction du système 
                    de tendon (tempura sur riz) abordables, révolutionnant un marché traditionnel.
                  </p>
                </div>

                {/* Expansion */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000-2015 : Expansion Métropolitaine</h3>
                  <p className="text-gray-700">
                    Croissance rapide dans la région de Tokyo et Kansai. Tenya devient 
                    <strong>la référence de la tempura accessible</strong>, fidélisant une clientèle 
                    qui découvre que qualité et prix abordable peuvent coexister.
                  </p>
                </div>

                {/* Modernisation */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2015+ : Modernisation et Expansion</h3>
                  <p className="text-gray-700">
                    Modernisation des restaurants, introduction de nouveaux formats 
                    (takeaway, livraison), tout en <strong>maintenant la tradition artisanale</strong> 
                    qui fait la réputation de Tenya. Expansion progressive vers d&apos;autres régions.
                  </p>
                </div>
              </div>
            </div>

            {/* L'art de la tempura chez Tenya */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Art de la Tempura Perfectionnée</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pâte à Tempura Parfaite</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Recette secrète optimisée</strong> : farine spéciale, eau glacée, 
                      technique de mélange minimal pour obtenir la texture idéale - croustillante 
                      à l&apos;extérieur, légère et aérée.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Huile de Qualité Supérieure</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Huile premium changée régulièrement</strong> : température contrôlée 
                      précisément (180°C), filtration continue, remplacement fréquent pour 
                      maintenir la pureté du goût.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ingrédients Premium</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Sélection rigoureuse</strong> : crevettes fraîches, légumes de saison, 
                      poissons de qualité supérieure. Même standard de qualité que les restaurants 
                      traditionnels haut de gamme.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Timing Parfait</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Cuisson à la commande</strong> : chaque tempura est frite au moment 
                      de la commande, servie immédiatement pour préserver le croustillant 
                      et la chaleur idéales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Tenya</h2>
              
              {/* Tendon populaires */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm mr-3">Signature</span>
                  Tendon (Tempura sur Riz)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tendon</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Contenu</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Tenya Tendon</div>
                          <div className="text-sm text-gray-500">てんや天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">2 crevettes, calmar, légumes variés, sauce tendon</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">590¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Ebi Tendon</div>
                          <div className="text-sm text-gray-500">海老天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">4 grosses crevettes tempura, légumes, sauce spéciale</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">790¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">All Star Tendon</div>
                          <div className="text-sm text-gray-500">オールスター天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Sélection premium : crevettes, anago, légumes de luxe</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">1090¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Yasai Tendon</div>
                          <div className="text-sm text-gray-500">野菜天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Assortiment de légumes de saison, option végétarienne</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">490¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tempura à la carte */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">À la carte</span>
                  Tempura Individuelles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Fruits de Mer</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ebi (Crevette)</span>
                        <span className="font-medium">180¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ika (Calmar)</span>
                        <span className="font-medium">150¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anago (Anguille)</span>
                        <span className="font-medium">200¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hotate (Saint-Jacques)</span>
                        <span className="font-medium">220¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tako (Poulpe)</span>
                        <span className="font-medium">160¥</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Légumes</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Nasu (Aubergine)</span>
                        <span className="font-medium">120¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kabocha (Potiron)</span>
                        <span className="font-medium">120¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shishito (Piment doux)</span>
                        <span className="font-medium">100¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Renkon (Lotus)</span>
                        <span className="font-medium">120¥</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Satsumaimo (Patate douce)</span>
                        <span className="font-medium">120¥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sets et menus */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Sets</span>
                  Menus Complets
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Menu</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Inclus</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Tendon Set</div>
                          <div className="text-sm text-gray-500">天丼セット</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Tendon + soupe miso + salade + pickles</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">790¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Tempura Gozen</div>
                          <div className="text-sm text-gray-500">天ぷら御膳</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Riz, tempura assortie, soupe, accompagnements</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">1190¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Tempura Soba Set</div>
                          <div className="text-sm text-gray-500">天ぷらそばセット</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Soba chaudes + tempura + mini tendon</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">990¥</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Family Pack</div>
                          <div className="text-sm text-gray-500">ファミリーパック</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Tempura à partager (4-5 personnes)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">2990¥</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements et boissons */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Accompagnements</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900">Riz et soupes :</div>
                    <div className="text-gray-700">Riz blanc 150¥</div>
                    <div className="text-gray-700">Soupe miso 100¥</div>
                    <div className="text-gray-700">Soupe claire 120¥</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Sauces :</div>
                    <div className="text-gray-700">Sauce tendon traditionnelle</div>
                    <div className="text-gray-700">Sauce tentsuyu</div>
                    <div className="text-gray-700">Sel matcha (en option)</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Boissons :</div>
                    <div className="text-gray-700">Thé vert chaud/froid 150¥</div>
                    <div className="text-gray-700">Bière 350¥</div>
                    <div className="text-gray-700">Saké 300¥</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience et conseils */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">L&apos;Expérience Tenya</h2>
              
              <div className="space-y-6">
                {/* Process de commande */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-amber-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Choisissez</h3>
                    <p className="text-sm text-gray-600">Sélectionnez votre tendon ou tempura</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-amber-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Commandez</h3>
                    <p className="text-sm text-gray-600">Service rapide, commande prise immédiatement</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Observez</h3>
                    <p className="text-sm text-gray-600">Tempura préparée fraîche sous vos yeux</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-amber-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Savourez</h3>
                    <p className="text-sm text-gray-600">Dégustez immédiatement pour le croustillant optimal</p>
                  </div>
                </div>

                {/* Conseils de dégustation */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Conseils de Dégustation</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Timing optimal :</div>
                      <div className="text-gray-700">Mangez la tempura immédiatement pour le maximum de croustillant</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Sauce tendon :</div>
                      <div className="text-gray-700">Sauce sucrée-salée, parfaite pour équilibrer la friture</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Ordre de dégustation :</div>
                      <div className="text-gray-700">Commencez par les légumes, finissez par les crevettes</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Accompagnement :</div>
                      <div className="text-gray-700">Thé vert chaud pour nettoyer le palais</div>
                    </div>
                  </div>
                </div>

                {/* Phrases japonaises */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Phrases Utiles</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Commander un tendon :</div>
                      <div className="text-gray-700">&quot;Tenya tendon hitotsu onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">てんや天丼一つお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Demander sans sauce :</div>
                      <div className="text-gray-700">&quot;Sauce nashi de onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">ソースなしでお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Tempura extra :</div>
                      <div className="text-gray-700">&quot;Ebi tempura tsuika dekimasu ka?&quot;</div>
                      <div className="text-gray-500 text-xs">エビ天ぷら追加できますか？</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">C&apos;est délicieux :</div>
                      <div className="text-gray-700">&quot;Sakusaku de oishii desu&quot;</div>
                      <div className="text-gray-500 text-xs">サクサクでおいしいです</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Position sur le marché */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Pourquoi Tenya Excelle</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualité Authentique</h4>
                      <p className="text-sm text-gray-700">
                        Même niveau que les restaurants traditionnels haut de gamme
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fraîcheur Garantie</h4>
                      <p className="text-sm text-gray-700">
                        Préparation à la commande, jamais de tempura réchauffée
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Accessibilité Prix</h4>
                      <p className="text-sm text-gray-700">
                        Tempura de qualité restaurant à prix démocratique
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Spécialisation</h4>
                      <p className="text-sm text-gray-700">
                        Focus exclusif sur la tempura = expertise maximale
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovation Respectueuse</h4>
                      <p className="text-sm text-gray-700">
                        Modernise sans dénaturer la tradition ancestrale
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expérience Éducative</h4>
                      <p className="text-sm text-gray-700">
                        Permet de découvrir la vraie tempura à tous les budgets
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
                <Info className="w-5 h-5 text-amber-600 mr-2" />
                Informations Pratiques
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Horaires</div>
                    <div className="text-gray-600">11h-22h (général)</div>
                    <div className="text-gray-500 text-xs">Service continu</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Localisation</div>
                    <div className="text-gray-600">Tokyo, Kansai principales</div>
                    <div className="text-gray-500 text-xs">200+ restaurants</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Paiement</div>
                    <div className="text-gray-600">Espèces, cartes, IC</div>
                    <div className="text-gray-500 text-xs">PayPay accepté</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientèle</div>
                    <div className="text-gray-600">Salariés, familles</div>
                    <div className="text-gray-500 text-xs">Amateurs de qualité</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.tenya.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  Site officiel Tenya →
                </a>
              </div>
            </div>

            {/* Prix indicatifs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenya Tendon</span>
                  <span className="font-medium">590¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ebi Tendon</span>
                  <span className="font-medium">790¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">+ Set (soupe, salade)</span>
                  <span className="font-medium">+200¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Repas complet</span>
                    <span className="text-gray-900">700-1200¥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre évaluation */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Excellence de la tempura accessible</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>La référence de la tempura démocratisée.</strong> Tenya prouve 
                qu&apos;il est possible de maintenir l&apos;excellence artisanale tout en 
                rendant la tempura accessible. Une expérience authentique qui révèle 
                la vraie nature de cet art culinaire japonais.
              </p>
            </div>

            {/* Recommandations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Incontournables</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>Tenya Tendon</strong> - Le classique parfait</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>Ebi Tendon</strong> - Pour les amateurs de crevettes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>All Star</strong> - L&apos;expérience premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>Anago tempura</strong> - Spécialité raffinée</span>
                </div>
              </div>
            </div>

            {/* Navigation vers d'autres chaînes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Chaînes Tempura</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chaines/tsunahachi" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Tsunahachi</div>
                  <div className="text-sm text-gray-600">La tradition centenaire</div>
                </Link>
                
                <Link 
                  href="/chaines/daikokuya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Daikokuya</div>
                  <div className="text-sm text-gray-600">L&apos;inventeur de la tempura</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
