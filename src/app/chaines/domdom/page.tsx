import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Crown, ChefHat, DollarSign, Flame, Trophy, Target } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';

export default function DomDomPage() {
  return (
    <>
      <ChainViewTracker chainName="domdom" chainCategory="burgers" />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dom Dom Burger</h1>
              <p className="text-lg text-gray-600">ドムドムバーガー</p>
              <p className="text-sm text-gray-500">Le burger phénix du Japon - Plus qu'un burger, une légende</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction - L'histoire légendaire */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">L'Âme de Dom Dom : Une Histoire de Goût et de Résilience</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">🔥 Plus qu'un burger, une légende</h3>
                  <p className="text-red-700 mb-4">
                    Découvrez l'histoire du tout premier fast-food japonais, sauvé de l'extinction par la passion. 
                    <strong>Dom Dom Burger</strong> n'est pas une chaîne comme les autres : c'est le symbole vivant 
                    de la résilience japonaise, une marque qui a traversé plus d'un demi-siècle d'histoire 
                    avec ses hauts et ses bas dramatiques.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-white/50 p-3 rounded">
                      <strong>1970</strong><br />
                      Premier burger japonais
                    </div>
                    <div className="bg-white/50 p-3 rounded">
                      <strong>400 → 27</strong><br />
                      Chute dramatique
                    </div>
                    <div className="bg-white/50 p-3 rounded">
                      <strong>2017+</strong><br />
                      Renaissance spectaculaire
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏆 Le Précurseur Oublié</h3>
                <p className="mb-4">
                  <strong>Fait méconnu</strong> : Dom Dom Burger a ouvert ses portes en 1970, 
                  <em>une année entière avant McDonald's Japon</em>. Créé par le géant de la distribution 
                  Daiei sous l'impulsion de son fondateur visionnaire Isao Nakauchi, Dom Dom était 
                  destiné à démocratiser le burger en Japon selon la philosophie "良い品をどんどん安く" 
                  (de bons produits toujours moins chers).
                </p>

                <h3 className="text-xl font-semibold mb-3">⚡ La Rivalité Fondatrice</h3>
                <p className="mb-4">
                  L'histoire de Dom Dom naît d'une rivalité légendaire. Quand les négociations entre 
                  Daiei et McDonald's Corporation ont échoué, Nakauchi a lancé avec défi : 
                  <em>"Nous créerons notre propre chaîne de burgers !"</em> Cette détermination a donné 
                  naissance au premier burger 100% japonais, adapté aux goûts locaux dès sa conception.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎭 L'Âge d'Or et la Chute</h4>
                  <p className="text-yellow-700 text-sm">
                    Dans les années 80-90, Dom Dom comptait près de 400 restaurants à travers le Japon. 
                    Mais les changements du marché, la montée de la concurrence internationale et les 
                    difficultés de Daiei ont mené la chaîne au bord de l'extinction : seulement 27 restaurants 
                    en 2016, surnommée "espèce en voie de disparition" par les médias.
                  </p>
                </div>
              </div>
            </div>

            {/* La Renaissance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">2017 : La Renaissance Spectaculaire</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🌟 Le Miracle Dom Dom</h3>
                  <p className="text-green-700 mb-4">
                    En 2017, <strong>Rembrandt Holdings</strong> rachète Dom Dom et confie sa renaissance 
                    à Shinobu Fujisaki. Sa mission : ressusciter une légende. L'approche ? Embrasser 
                    totalement l'héritage unique de Dom Dom plutôt que de l'imiter la concurrence.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Stratégies de renaissance</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Mise en avant de l'histoire unique</li>
                        <li>• Innovation culinaire audacieuse</li>
                        <li>• Marketing digital viral</li>
                        <li>• Mobilisation des fans nostalgiques</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Résultats spectaculaires</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Couverture médiatique massive</li>
                        <li>• Buzz sur les réseaux sociaux</li>
                        <li>• Nouvelle génération de fans</li>
                        <li>• Ouverture de nouveaux restaurants</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">🦀 Le Symbole : Marugoto!! Kani Burger</h3>
                <p className="text-gray-700 mb-4">
                  L'incarnation parfaite de la renaissance Dom Dom : le <strong>"Marugoto!! Kani Burger"</strong> 
                  (丸ごと!!カニバーガー) - un burger avec un crabe soft-shell entier frit. Ce menu 
                  révolutionnaire symbolise tout ce qui rend Dom Dom unique : l'audace, l'innovation 
                  et le refus absolu de la standardisation.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Philosophie de l'Innovation</h4>
                  <p className="text-blue-700 text-sm">
                    "Pourquoi faire comme tout le monde quand on peut être unique ?" Cette approche 
                    anti-conformiste fait de chaque visite chez Dom Dom une découverte, une expérience 
                    qui ne ressemble à aucune autre chaîne de fast-food au monde.
                  </p>
                </div>
              </div>
            </div>

            {/* Menu signature */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Saveurs Uniques : L'Explosion de Goûts Japonais</h2>
              </div>

              {/* Burgers iconiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍔 Les Burgers Légendaires</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg">
                    <thead>
                      <tr className="bg-red-50">
                        <th className="text-left p-3 font-medium">Burger</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-yellow-50">
                        <td className="p-3 font-medium text-red-700">Marugoto!! Kani Burger ⭐</td>
                        <td className="p-3">丸ごと!!カニバーガー</td>
                        <td className="p-3">Crabe soft-shell entier frit, sauce spéciale</td>
                        <td className="p-3 font-semibold">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Dom Dom Burger Classic</td>
                        <td className="p-3">ドムドムバーガー</td>
                        <td className="p-3">Le burger historique, recette originale 1970</td>
                        <td className="p-3">¥280</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Amakara Chicken Burger</td>
                        <td className="p-3">甘辛チキンバーガー</td>
                        <td className="p-3">Poulet sauce sucrée-piquante, style japonais</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Atsuyaki Tamago Burger</td>
                        <td className="p-3">厚焼きたまごバーガー</td>
                        <td className="p-3">Omelette japonaise épaisse, dashi subtil</td>
                        <td className="p-3">¥350</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ebi Katsu Burger</td>
                        <td className="p-3">エビカツバーガー</td>
                        <td className="p-3">Crevette panée croustillante, mayo épicée</td>
                        <td className="p-3">¥450</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menus limitées */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Créations Limitées & Collaborations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-3">Innovations Saisonnières</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Sakura Season Burger</strong> - Édition limitée printemps</li>
                      <li>• <strong>Natsumatsuri Burger</strong> - Saveurs festival d'été</li>
                      <li>• <strong>Momiji Burger</strong> - Automne aux couleurs rouges</li>
                      <li>• <strong>Oshogatsu Special</strong> - Nouvel An japonais</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-3">Collaborations Uniques</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Anime Tie-ins</strong> - Partenariats manga/anime</li>
                      <li>• <strong>Local Specialties</strong> - Ingrédients régionaux</li>
                      <li>• <strong>Designer Burgers</strong> - Créations d'artistes</li>
                      <li>• <strong>Retro Revivals</strong> - Recettes des années 70-80</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accompagnements et boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍟 Accompagnements Signature</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-3">Sides Japonais</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Dom Fries</strong> - ¥200 (frites assaisonnement unique)</li>
                      <li>• <strong>Karaage Chicken</strong> - ¥280 (poulet frit japonais)</li>
                      <li>• <strong>Hash Potato</strong> - ¥150 (galette pomme de terre)</li>
                      <li>• <strong>Corn Salad</strong> - ¥180 (salade japonaise classique)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-3">Boissons Rétro</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Ramune Original</strong> - ¥200 (soda japonais vintage)</li>
                      <li>• <strong>Melon Soda</strong> - ¥180 (classique années 70)</li>
                      <li>• <strong>Hot Coffee</strong> - ¥150 (café nostalgique)</li>
                      <li>• <strong>Matcha Shake</strong> - ¥280 (fusion moderne)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* L'expérience Dom Dom */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">L'Expérience Dom Dom : Plus qu'un Repas, une Immersion Culturelle</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">🏮 Atmosphère Rétro-Moderne</h3>
                  <p className="text-orange-700 mb-4">
                    Entrer dans un Dom Dom, c'est voyager dans le temps. L'ambiance marie 
                    subtilement nostalgie des années 70 et modernité japonaise contemporaine. 
                    Des couleurs chaudes aux détails vintage, chaque élément raconte l'histoire 
                    de cette marque légendaire.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Design Signature</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Logo rétro iconique</li>
                        <li>• Couleurs orange et rouge vintage</li>
                        <li>• Mobilier années 70 revisité</li>
                        <li>• Photos historiques aux murs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-800 mb-2">Mascotte Domzou-kun</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Éléphant adorable en mascotte</li>
                        <li>• Présent dans tous les restaurants</li>
                        <li>• Merchandise collectible</li>
                        <li>• Symbole de l'esprit Dom Dom</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">🎌 Une Fenêtre sur l'Histoire Japonaise</h3>
                <p className="text-gray-700 mb-4">
                  Dom Dom offre une expérience culturelle unique : comprendre comment le Japon 
                  a adapté et réinventé le concept américain du fast-food. C'est un témoignage 
                  vivant de la capacité japonaise à transformer les influences extérieures en 
                  créations authentiquement locales.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">📱 Community & SNS</h4>
                    <p className="text-sm text-blue-700">
                      Dom Dom entretient une communauté de fans passionnés via les réseaux sociaux. 
                      Les #DomDomBurger et #カニバーガー génèrent régulièrement du buzz, créant 
                      un mouvement culturel autour de la marque.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">🎯 Public Intergénérationnel</h4>
                    <p className="text-sm text-purple-700">
                      Des nostalgiques qui ont connu l'âge d'or aux jeunes découvrant les saveurs 
                      uniques, Dom Dom rassemble toutes les générations autour de son héritage 
                      et de son innovation continue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Vivre l'Expérience Dom Dom</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">🎯 Stratégie de Commande Optimale</h3>
                  <p className="text-red-700 text-sm mb-3">
                    Pour profiter pleinement de Dom Dom, voici la stratégie recommandée par les connaisseurs :
                  </p>
                  <ol className="text-red-700 text-sm space-y-1">
                    <li><strong>1.</strong> Commencez par observer l'atmosphère rétro unique</li>
                    <li><strong>2.</strong> Prenez une photo avec Domzou-kun (la mascotte)</li>
                    <li><strong>3.</strong> Commandez le légendaire Kani Burger (au moins une fois)</li>
                    <li><strong>4.</strong> Goûtez un burger "classic" pour l'authenticité historique</li>
                    <li><strong>5.</strong> Partagez votre expérience sur les réseaux sociaux</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🦀 Le Kani Burger : Mode d'Emploi</h4>
                    <div className="bg-yellow-50 p-3 rounded text-sm">
                      <p className="text-yellow-800 mb-2">
                        <strong>Attention :</strong> Le crabe soft-shell se mange entièrement, 
                        carapace comprise ! C'est normal et délicieux.
                      </p>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• Croquez sans hésitation</li>
                        <li>• Texture croustillante garantie</li>
                        <li>• Saveur unique incomparable</li>
                        <li>• Photo Instagram obligatoire !</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">📍 Où Trouver Dom Dom</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• <strong>Centres commerciaux</strong> - Food courts principalement</li>
                      <li>• <strong>Gares</strong> - Quelques emplacements stratégiques</li>
                      <li>• <strong>Quartiers nostalgie</strong> - Asakusa, Shinjuku</li>
                      <li>• <strong>Banlieues Tokyo</strong> - Saitama, Chiba</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">💡 Conseils d'Initié</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
                    <div>
                      <p><strong>Timing :</strong> Évitez les heures de pointe pour savourer l'ambiance</p>
                      <p><strong>Photos :</strong> L'éclairage est optimal côté fenêtre</p>
                    </div>
                    <div>
                      <p><strong>Souvenirs :</strong> Merchandising Domzou-kun disponible</p>
                      <p><strong>Language :</strong> Staff souvent anglophone dans Tokyo</p>
                    </div>
                  </div>
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
                  <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">10h00 - 21h00 (général)</div>
                    <div className="text-sm text-gray-500">Food courts : jusqu'à 22h</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">50+ restaurants</div>
                    <div className="text-sm text-gray-500">Principalement région Kantō</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Cartes, espèces, IC cards</div>
                    <div className="text-sm text-gray-500">QR payments acceptés</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥400-700 par personne</div>
                    <div className="text-sm text-gray-500">Très abordable pour l'unicité</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notre avis */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Notre Avis Expert
              </h3>
              
              <div className="flex items-center mb-3">
                <div className="flex text-red-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Expérience légendaire</span>
              </div>
              
              <p className="text-sm text-red-700 mb-4">
                <strong>Une pépite de l'histoire japonaise.</strong> Dom Dom transcende 
                le simple fast-food pour offrir une véritable leçon d'histoire vivante. 
                Le Kani Burger à lui seul justifie le voyage - une audace culinaire 
                introuvable ailleurs au monde.
              </p>

              <div className="space-y-2 text-xs text-red-600">
                <div className="flex justify-between">
                  <span>Authenticité</span>
                  <span className="font-medium">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Innovation</span>
                  <span className="font-medium">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Expérience culturelle</span>
                  <span className="font-medium">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Rapport qualité/prix</span>
                  <span className="font-medium">⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>

            {/* Spécialités incontournables */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                🏆 À Ne Pas Manquer
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Marugoto!! Kani Burger</div>
                  <div className="text-yellow-600">L'expérience signature unique au monde</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Dom Dom Classic</div>
                  <div className="text-yellow-600">Pour goûter à l'histoire (depuis 1970)</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Photo avec Domzou-kun</div>
                  <div className="text-yellow-600">Souvenir incontournable de votre visite</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Atmosphere rétro</div>
                  <div className="text-yellow-600">Immersion dans le Japon des années 70</div>
                </div>
              </div>
            </div>

            {/* Comparaison culturelle */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🎌 Perspective Culturelle
              </h3>
              <p className="text-sm text-blue-700 mb-3">
                Dom Dom incarne parfaitement l'esprit japonais du <em>"mono no aware"</em> 
                (la beauté éphémère) et du <em>"shokunin"</em> (artisanat passionné). 
                C'est la preuve vivante que l'innovation naît souvent de la tradition 
                et de la persévérance.
              </p>
              <div className="bg-white/50 p-3 rounded text-xs text-blue-600">
                <strong>Pour les Français :</strong> Imaginez une chaîne qui marie l'esprit 
                de nos brasseries historiques avec l'audace culinaire contemporaine - 
                c'est exactement l'essence de Dom Dom !
              </div>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Ressources Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.domdom.jp/" 
                   className="block text-red-600 hover:text-red-700 text-sm">
                  → Site officiel Dom Dom Burger
                </a>
                <a href="/type-plat/burgers" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet burgers japonais
                </a>
                <a href="/chaines/freshness-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Freshness Burger
                </a>
                <a href="/chaines/mos-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Découvrir MOS Burger
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
