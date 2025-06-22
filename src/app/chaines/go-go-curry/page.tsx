import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap, Clock9, MapPin as LocationPin } from 'lucide-react';

export default function GoGoCarryPage() {
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
            href="/type-plat/curry" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au Curry Japonais
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Go!Go!Curry</h1>
              <p className="text-lg text-gray-600">ゴーゴーカレー</p>
              <p className="text-sm text-gray-500">Le curry explosif de Kanazawa depuis 2004</p>
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
                <Info className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Go!Go!Curry</strong> (ゴーゴーカレー) est la chaîne de curry la plus 
                  énergique du Japon, née en 2004 à Kanazawa. Avec son slogan "Le curry qui 
                  vous donne de l'énergie !", cette chaîne de plus de 90 restaurants propose 
                  un curry japonais noir unique, servi dans une ambiance rock and roll avec 
                  des références constantes aux gorilles et à l'énergie brute.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">⚡ L'énergie du curry noir</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>Sauce noire unique</strong> - Couleur distinctive et goût intense</li>
                    <li>• <strong>Service ultra-rapide</strong> - Servi en moins de 55 secondes</li>
                    <li>• <strong>Ambiance rock</strong> - Musique énergique, déco gorille</li>
                    <li>• <strong>Énergie garantie</strong> - Slogan : "Le curry qui donne la force"</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🦍 L'univers des gorilles</h3>
                <p className="mb-4">
                  Go!Go!Curry a adopté le gorille comme mascotte, symbole de force et d'énergie. 
                  Chaque restaurant est décoré avec des références aux primates, des figurines 
                  aux affiches, créant une atmosphère unique dans le monde du curry japonais. 
                  Cette identité visuelle forte contribue à l'expérience immersive de la marque.
                </p>

                <h3 className="text-xl font-semibold mb-3">⚫ Le secret du curry noir</h3>
                <p className="mb-4">
                  La sauce curry de Go!Go!Curry tire sa couleur noire caractéristique d'un 
                  mélange secret d'épices grillées et de pâte de haricots noirs. Cette recette 
                  unique, développée spécifiquement pour la chaîne, offre un goût plus complexe 
                  et intense que les curries japonais traditionnels, tout en restant accessible 
                  au palais japonais.
                </p>

                <h3 className="text-xl font-semibold mb-3">⚡ Service éclair 55 secondes</h3>
                <p className="mb-4">
                  Go!Go!Curry s'enorgueillit de servir ses plats en moins de 55 secondes 
                  chrono. Cette performance est possible grâce à un système de préparation 
                  optimisé où le curry est maintenu à température constante et le riz pré-cuit. 
                  Cette rapidité, rare même dans la restauration rapide japonaise, fait partie 
                  de l'identité énergique de la marque.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏟️ Ambiance stadium rock</h3>
                <p className="mb-4">
                  L'ambiance sonore des restaurants Go!Go!Curry est unique : musique rock 
                  énergique, annonces théâtrales du personnel, et même des cris d'encouragement 
                  lors du service. Cette atmosphère de stade sportif transforme le simple 
                  repas en expérience dynamique, particulièrement appréciée par les jeunes 
                  et les salarymen en quête d'énergie.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌟 Expansion nationale</h3>
                <p className="mb-4">
                  Depuis Kanazawa, Go!Go!Curry s'est rapidement étendu dans tout le Japon, 
                  avec une concentration particulière à Tokyo et dans les grandes métropoles. 
                  La chaîne a même ouvert des restaurants aux États-Unis, exportant son 
                  concept énergique de curry japonais noir à l'international.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Curry Noir Énergique</h2>
              </div>

              {/* Curries de base */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⚫ Curries Noirs Signature</h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800">⚡ Sauce noire énergisante</h4>
                  </div>
                  <p className="text-yellow-800 text-sm">
                    La signature de Go!Go!Curry : une sauce curry noire unique obtenue par 
                    grillage d'épices et pâte de haricots noirs, pour un goût intense et 
                    une énergie maximale.
                  </p>
                </div>
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
                        <td className="p-3 font-medium">Go!Go!Curry basique</td>
                        <td className="p-3">ゴーゴーカレー</td>
                        <td className="p-3">Le curry noir original, intensité 1</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Major Curry</td>
                        <td className="p-3">メジャーカレー</td>
                        <td className="p-3">Version augmentée, sauce + riz</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Captain Curry</td>
                        <td className="p-3">キャプテンカレー</td>
                        <td className="p-3">Portion généreuse, intensité 2</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Champion Curry</td>
                        <td className="p-3">チャンピオンカレー</td>
                        <td className="p-3">Portion XL pour champions</td>
                        <td className="p-3">¥980</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Gorilla Curry</td>
                        <td className="p-3">ゴリラカレー</td>
                        <td className="p-3">Le plus gros, pour force de gorille</td>
                        <td className="p-3">¥1,280</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Curries avec protéines */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥩 Curries avec Protéines</h3>
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
                        <td className="p-3 font-medium">Pork Katsu Curry</td>
                        <td className="p-3">ポークカツカレー</td>
                        <td className="p-3">Escalope panée + curry noir</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken Katsu Curry</td>
                        <td className="p-3">チキンカツカレー</td>
                        <td className="p-3">Poulet pané croustillant</td>
                        <td className="p-3">¥820</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Hamburg Curry</td>
                        <td className="p-3">ハンバーグカレー</td>
                        <td className="p-3">Steak haché juteux japonais</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sausage Curry</td>
                        <td className="p-3">ソーセージカレー</td>
                        <td className="p-3">Saucisses épicées allemandes</td>
                        <td className="p-3">¥750</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beef Curry</td>
                        <td className="p-3">ビーフカレー</td>
                        <td className="p-3">Bœuf mijoté tendre</td>
                        <td className="p-3">¥1,080</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Double Katsu Curry</td>
                        <td className="p-3">ダブルカツカレー</td>
                        <td className="p-3">Porc + poulet panés</td>
                        <td className="p-3">¥1,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Curries spéciaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🌟 Spécialités Énergétiques</h3>
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
                        <td className="p-3 font-medium">King Kong Curry</td>
                        <td className="p-3">キングコングカレー</td>
                        <td className="p-3">Mega mix : katsu + hamburg + saucisse</td>
                        <td className="p-3">¥1,580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Energy Explosion</td>
                        <td className="p-3">エナジー爆発</td>
                        <td className="p-3">Triple viande + légumes + œuf</td>
                        <td className="p-3">¥1,680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Black Thunder</td>
                        <td className="p-3">ブラックサンダー</td>
                        <td className="p-3">Curry noir intensité MAX + piment</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Gorilla Power</td>
                        <td className="p-3">ゴリラパワー</td>
                        <td className="p-3">Portion géante + double protéine</td>
                        <td className="p-3">¥1,480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Samurai Spirit</td>
                        <td className="p-3">サムライスピリット</td>
                        <td className="p-3">Katsu + œuf + légumes marinés</td>
                        <td className="p-3">¥1,080</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements et extras */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">➕ Accompagnements Énergétiques</h3>
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
                        <td className="p-3 font-medium">Extra sauce curry</td>
                        <td className="p-3">カレー追加</td>
                        <td className="p-3">Sauce noire supplémentaire</td>
                        <td className="p-3">¥180</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Extra riz</td>
                        <td className="p-3">ライス追加</td>
                        <td className="p-3">Portion de riz en plus</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Œuf à cheval</td>
                        <td className="p-3">目玉焼き</td>
                        <td className="p-3">Œuf au plat sur le curry</td>
                        <td className="p-3">¥120</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Salade énergétique</td>
                        <td className="p-3">エナジーサラダ</td>
                        <td className="p-3">Légumes croquants vitaminés</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Fromage fondu</td>
                        <td className="p-3">チーズトッピング</td>
                        <td className="p-3">Fromage qui coule sur le curry</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Légumes marinés</td>
                        <td className="p-3">ピクルス</td>
                        <td className="p-3">Chou et concombre acidulés</td>
                        <td className="p-3">¥250</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sets énergétiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⚡ Sets Énergétiques</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Power Sets</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Set champion</strong> - Captain curry + salade + boisson (¥1,080)</li>
                      <li>• <strong>Set gorille</strong> - Gorilla curry + œuf + légumes (¥1,580)</li>
                      <li>• <strong>Set explosion</strong> - Energy explosion + tout extra (¥1,980)</li>
                      <li>• <strong>Set découverte</strong> - Go!Go! + saucisse + boisson (¥850)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Formules rapides</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Quick power</strong> - Major curry + boisson (¥850)</li>
                      <li>• <strong>Business set</strong> - Katsu curry + salade (¥1,050)</li>
                      <li>• <strong>Student energy</strong> - Go!Go! + œuf + thé (¥750)</li>
                      <li>• <strong>Double force</strong> - Deux curries base (¥1,000)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons énergétiques */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥤 Boissons Énergétiques</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Boissons chaudes</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Café fort</strong> - ¥250</li>
                      <li>• <strong>Thé noir énergisant</strong> - ¥200</li>
                      <li>• <strong>Chai épicé</strong> - ¥300</li>
                      <li>• <strong>Chocolat chaud</strong> - ¥350</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Boissons énergisantes</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Cola énergétique</strong> - ¥300</li>
                      <li>• <strong>Energy drink</strong> - ¥400</li>
                      <li>• <strong>Jus vitaminé</strong> - ¥350</li>
                      <li>• <strong>Eau pétillante</strong> - ¥250</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Spécialités</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Gorilla juice</strong> - ¥450</li>
                      <li>• <strong>Power smoothie</strong> - ¥500</li>
                      <li>• <strong>Lassi épicé</strong> - ¥380</li>
                      <li>• <strong>Bière japonaise</strong> - ¥450</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service éclair */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock9 className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Service Éclair 55 Secondes</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">⚡ Performance chronométrée</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    Go!Go!Curry s'engage à servir tous ses plats en moins de 55 secondes 
                    chrono après commande. Cette prouesse technique révolutionne la 
                    restauration rapide japonaise.
                  </p>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• <strong>Moins de 55 secondes</strong> - Promesse chronométrée</li>
                    <li>• <strong>Curry pré-chaud</strong> - Maintenu à température optimale</li>
                    <li>• <strong>Riz prêt</strong> - Cuit en continu, jamais réchauffé</li>
                    <li>• <strong>Système optimisé</strong> - Chaque geste calculé</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🔧 Système de préparation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Curry noir en cuves chauffantes</li>
                      <li>• Riz cuit en permanence</li>
                      <li>• Katsu pré-frits, réchauffés éclair</li>
                      <li>• Assemblage optimisé</li>
                      <li>• Personnel ultra-entraîné</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📊 Contrôle qualité</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Température constante vérifiée</li>
                      <li>• Fraîcheur garantie maximum 2h</li>
                      <li>• Rotation permanente des ingrédients</li>
                      <li>• Formation intensive du personnel</li>
                      <li>• Chronomètres dans chaque cuisine</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">🏆 Record battu</h4>
                  <p className="text-sm text-red-700">
                    Le record officieux de Go!Go!Curry est de 38 secondes pour un curry 
                    katsu complet, établi dans le restaurant de Shibuya. Cette performance 
                    exceptionnelle démontre l'efficacité du système de préparation éclair 
                    sans compromettre la qualité gustative.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide de l'Expérience Énergétique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🎯 Première visite essentielle</h3>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li><strong>1.</strong> Commandez le Go!Go!Curry classique pour découvrir le noir</li>
                    <li><strong>2.</strong> Chronométrez le service : moins de 55 secondes !</li>
                    <li><strong>3.</strong> Imprégnez-vous de l'ambiance rock énergique</li>
                    <li><strong>4.</strong> Goûtez la différence avec un curry classique</li>
                    <li><strong>5.</strong> Observez la décoration gorille partout</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚡ Menu énergie débutant</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Go!Go!Curry basique</strong> - Découverte (¥580)</li>
                      <li>• <strong>Œuf à cheval</strong> - Supplément classique (¥120)</li>
                      <li>• <strong>Salade énergétique</strong> - Équilibre (¥380)</li>
                      <li>• <strong>Cola énergétique</strong> - Ambiance (¥300)</li>
                      <li><strong>Total : ¥1,380</strong> pour l'initiation complète</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🦍 Menu gorille confirmé</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>King Kong Curry</strong> - Expérience ultime (¥1,580)</li>
                      <li>• <strong>Extra sauce</strong> - Intensité max (¥180)</li>
                      <li>• <strong>Fromage fondu</strong> - Gourmandise (¥200)</li>
                      <li>• <strong>Gorilla juice</strong> - Boisson signature (¥450)</li>
                      <li><strong>Total : ¥2,410</strong> pour les vrais guerriers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">🎵 Conseils ambiance rock</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Musique forte</strong> - Préparez-vous au volume élevé</li>
                    <li>• <strong>Personnel énergique</strong> - Cris d'encouragement normaux</li>
                    <li>• <strong>Déco gorille</strong> - Cherchez tous les détails cachés</li>
                    <li>• <strong>Service théâtral</strong> - Participez à l'énergie collective</li>
                    <li>• <strong>Photos autorisées</strong> - Immortalisez l'expérience unique</li>
                  </ul>
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
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">11h00 - 23h00</div>
                    <div className="text-sm text-gray-500">Service continu</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">90+ restaurants Japon</div>
                    <div className="text-sm text-gray-500">Concentration Tokyo/Kanazawa</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes acceptées</div>
                    <div className="text-sm text-gray-500">Espèces recommandées</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Budget moyen</div>
                    <div className="text-sm text-gray-600">¥800-1,500 par personne</div>
                    <div className="text-sm text-gray-500">Énergie garantie incluse</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                ⚡ Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Expérience unique</div>
                  <div className="text-yellow-600">Curry noir qu'on ne trouve nulle part ailleurs</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Service record</div>
                  <div className="text-yellow-600">55 secondes chrono, impressionnant à voir</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Ambiance rock</div>
                  <div className="text-yellow-600">Volume sonore élevé, énergie communicative</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Portions généreuses</div>
                  <div className="text-yellow-600">Rassasiant, idéal après visites fatiguantes</div>
                </div>
              </div>
            </div>

            {/* Spécialité curry noir */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                ⚫ Le Curry Noir Expliqué
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-300">Couleur unique</div>
                  <div className="text-gray-400">Épices grillées + pâte haricots noirs</div>
                </div>
                <div>
                  <div className="font-medium text-gray-300">Goût distinctif</div>
                  <div className="text-gray-400">Plus complexe que curry classique</div>
                </div>
                <div>
                  <div className="font-medium text-gray-300">Texture épaisse</div>
                  <div className="text-gray-400">Nappe bien le riz, consistant</div>
                </div>
                <div>
                  <div className="font-medium text-gray-300">Effet énergisant</div>
                  <div className="text-gray-400">Épices stimulantes, boost garanti</div>
                </div>
              </div>
            </div>

            {/* Univers gorille */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🦍 L'Univers Gorille
              </h3>
              <p className="text-sm text-green-700 mb-3">
                Go!Go!Curry a adopté le gorille comme symbole de force et d'énergie 
                brute. Cette mascotte omniprésente crée une identité visuelle unique 
                dans l'univers du curry japonais.
              </p>
              <ul className="text-sm text-green-600 space-y-1">
                <li>• Figurines dans chaque restaurant</li>
                <li>• Affiches style King Kong</li>
                <li>• Personnel qui rugit parfois</li>
                <li>• Menu avec références primates</li>
                <li>• Ambiance jungle urbaine</li>
              </ul>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.gogocurry.com/" 
                   className="block text-yellow-600 hover:text-yellow-700 text-sm">
                  → Site officiel Go!Go!Curry
                </a>
                <a href="/type-plat/curry" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet curry japonais
                </a>
                <a href="/chaines/coco-ichibanya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec CoCo Ichibanya
                </a>
                <a href="/chaines/sukiya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Voir le curry Sukiya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
