import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, ChefHat, Heart, Zap, Droplets, Wheat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';




export default function RingerHutPage() {
  return (
    <>
      <ChainViewTracker chainName="ringer-hut" chainCategory="cuisine_chinoise" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/cuisine-chinoise" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la Cuisine Chinoise
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ringer Hut</h1>
                <p className="text-lg text-gray-600">リンガーハット</p>
                <p className="text-sm text-gray-500">Le spécialiste du champon de Nagasaki depuis 1974</p>
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
                  <Info className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Ringer Hut</strong> (リンガーハット) est la chaîne spécialisée dans le 
                    <strong>champon</strong>, le plat signature de Nagasaki. Fondée en 1974, 
                    cette chaîne de plus de 540 restaurants au Japon s'est donné pour mission 
                    de faire connaître cette spécialité locale dans tout le pays. Ringer Hut 
                    est également pionnier de l'agriculture sans additifs chimiques et de la 
                    traçabilité alimentaire complète.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-blue-800 mb-2">🍜 Le champon authentique</h3>
                    <ul className="text-blue-700 space-y-1">
                      <li>• <strong>Spécialité de Nagasaki</strong> - Héritage culinaire préservé</li>
                      <li>• <strong>Nouilles épaisses</strong> - Texture unique et satisfaisante</li>
                      <li>• <strong>Légumes abondants</strong> - 250g de légumes par bol</li>
                      <li>• <strong>Bouillon riche</strong> - Porc et fruits de mer mijotés</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">🏝️ Héritage de Nagasaki</h3>
                  <p className="mb-4">
                    Le champon est né à Nagasaki au début du XXe siècle, créé par un immigrant 
                    chinois pour nourrir les étudiants chinois locaux. Ce plat fusion sino-japonais 
                    unique combine nouilles chinoises, légumes locaux japonais et techniques 
                    culinaires des deux cultures. Ringer Hut perpétue cette tradition tout 
                    en l'adaptant aux goûts contemporains.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌱 Agriculture responsable</h3>
                  <p className="mb-4">
                    Ringer Hut est pionnier de l'agriculture sans additifs chimiques au Japon. 
                    La chaîne travaille directement avec plus de 250 agriculteurs partenaires 
                    qui cultivent légumes sans pesticides ni engrais chimiques. Cette démarche 
                    garantit la sécurité alimentaire et le goût authentique des légumes qui 
                    composent leurs plats.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">📍 Traçabilité totale</h3>
                  <p className="mb-4">
                    Chaque ingrédient utilisé chez Ringer Hut est traçable jusqu'à sa source. 
                    La chaîne affiche dans chaque restaurant l'origine exacte des légumes du 
                    jour, permettant aux clients de connaître la ferme productrice. Cette 
                    transparence, rare dans la restauration rapide, témoigne de l'engagement 
                    qualité de la marque.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🔧 Technique de cuisson unique</h3>
                  <p className="mb-4">
                    La préparation du champon chez Ringer Hut suit une technique spéciale 
                    où les légumes sont sautés à haute température avec la viande et les 
                    fruits de mer, avant d'ajouter le bouillon et les nouilles. Cette méthode 
                    "itame-ni" (sauté-mijoté) concentre les saveurs et crée la texture 
                    caractéristique du champon authentique.
                  </p>
                </div>
              </div>

              {/* Menu détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu Spécialisé Champon</h2>
                </div>

                {/* Champon - La spécialité */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍜 Champon - La Spécialité Absolue</h3>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wheat className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">🌿 Légumes sans additifs chimiques</h4>
                    </div>
                    <p className="text-green-800 text-sm">
                      Chaque bol contient 250g de légumes frais cultivés sans pesticides ni 
                      engrais chimiques par les agriculteurs partenaires de Ringer Hut.
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
                          <td className="p-3 font-medium">Champon classique</td>
                          <td className="p-3">ちゃんぽん</td>
                          <td className="p-3">La recette originale de Nagasaki</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Champon aux légumes</td>
                          <td className="p-3">野菜ちゃんぽん</td>
                          <td className="p-3">Version végétarienne, 350g de légumes</td>
                          <td className="p-3">¥750</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Champon aux fruits de mer</td>
                          <td className="p-3">海鮮ちゃんぽん</td>
                          <td className="p-3">Crevettes, calamar, coquilles St-Jacques</td>
                          <td className="p-3">¥880</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Champon épicé</td>
                          <td className="p-3">辛味ちゃんぽん</td>
                          <td className="p-3">Version relevée, miso épicé</td>
                          <td className="p-3">¥720</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Grand champon</td>
                          <td className="p-3">大盛りちゃんぽん</td>
                          <td className="p-3">Portion XL pour gros appétits</td>
                          <td className="p-3">¥780</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Variations régionales */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🗾 Variations Régionales</h3>
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
                          <td className="p-3 font-medium">Sara-udon de Nagasaki</td>
                          <td className="p-3">皿うどん</td>
                          <td className="p-3">Nouilles croustillantes, sauce épaisse</td>
                          <td className="p-3">¥650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Sara-udon aux fruits de mer</td>
                          <td className="p-3">海鮮皿うどん</td>
                          <td className="p-3">Version premium aux fruits de mer</td>
                          <td className="p-3">¥850</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gomoku-ankake</td>
                          <td className="p-3">五目あんかけ</td>
                          <td className="p-3">Nouilles molles sauce liée, style Kyushu</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Kyushu ramen</td>
                          <td className="p-3">九州ラーメン</td>
                          <td className="p-3">Ramen local, bouillon tonkotsu</td>
                          <td className="p-3">¥620</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Plats d'accompagnement */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🥟 Accompagnements Traditionnels</h3>
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
                          <td className="p-3 font-medium">Gyoza de Nagasaki (5 pièces)</td>
                          <td className="p-3">長崎餃子（5個）</td>
                          <td className="p-3">Gyoza locaux, pâte plus épaisse</td>
                          <td className="p-3">¥320</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Riz sauté aux légumes</td>
                          <td className="p-3">野菜チャーハン</td>
                          <td className="p-3">Riz sauté aux légumes sans additifs</td>
                          <td className="p-3">¥580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Salade de légumes frais</td>
                          <td className="p-3">フレッシュ野菜サラダ</td>
                          <td className="p-3">Légumes crus de fermes partenaires</td>
                          <td className="p-3">¥380</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Karaage de poulet</td>
                          <td className="p-3">鶏のから揚げ</td>
                          <td className="p-3">Poulet frit, marinade spéciale</td>
                          <td className="p-3">¥450</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Légumes marinés</td>
                          <td className="p-3">お漬物</td>
                          <td className="p-3">Assortiment de légumes fermentés</td>
                          <td className="p-3">¥250</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sets économiques */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">💰 Sets Économiques</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Sets champon</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Set champon + gyoza</strong> - Plat + 3 gyoza (¥850)</li>
                        <li>• <strong>Set champon + riz sauté</strong> - Combo parfait (¥980)</li>
                        <li>• <strong>Set champon + karaage</strong> - Protéines + légumes (¥920)</li>
                        <li>• <strong>Set découverte</strong> - Petit champon + sara-udon (¥890)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Formules famille</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Plateau famille</strong> - 2 champon + gyoza + riz (¥1,850)</li>
                        <li>• <strong>Set partage</strong> - Grand champon + sara-udon (¥1,200)</li>
                        <li>• <strong>Menu enfant</strong> - Mini champon + jus + jouet (¥650)</li>
                        <li>• <strong>Boissons à volonté</strong> - Soft drinks illimités (+¥200)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Boissons */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🥤 Boissons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Boissons chaudes</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Thé oolong</strong> - ¥200</li>
                        <li>• <strong>Thé vert</strong> - ¥200</li>
                        <li>• <strong>Café</strong> - ¥250</li>
                        <li>• <strong>Thé au jasmin</strong> - ¥220</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Boissons froides</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Thé glacé</strong> - ¥250</li>
                        <li>• <strong>Cola</strong> - ¥280</li>
                        <li>• <strong>Jus d'orange</strong> - ¥300</li>
                        <li>• <strong>Eau minérale</strong> - ¥200</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Spécialités</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Jus de légumes frais</strong> - ¥350</li>
                        <li>• <strong>Lait de soja</strong> - ¥280</li>
                        <li>• <strong>Smoothie légumes</strong> - ¥420</li>
                        <li>• <strong>Bière japonaise</strong> - ¥400</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophie des légumes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Wheat className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Philosophie des Légumes Sains</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🌱 Agriculture sans additifs</h3>
                    <p className="text-green-700 text-sm mb-3">
                      Depuis 2006, Ringer Hut s'approvisionne exclusivement en légumes 
                      cultivés sans pesticides ni engrais chimiques auprès de 250 
                      agriculteurs partenaires certifiés.
                    </p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• <strong>Zero pesticide</strong> - Culture 100% naturelle</li>
                      <li>• <strong>Contrôles stricts</strong> - Vérifications régulières des fermes</li>
                      <li>• <strong>Saisonnalité respectée</strong> - Légumes de saison privilégiés</li>
                      <li>• <strong>Goût authentique</strong> - Saveurs naturelles préservées</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">📍 Traçabilité complète</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Origine de chaque légume affichée</li>
                        <li>• Nom de l'agriculteur producteur</li>
                        <li>• Date de récolte précisée</li>
                        <li>• Transport direct ferme-restaurant</li>
                        <li>• Certifications biologiques vérifiées</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🤝 Partenariat agricole</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 250 agriculteurs partenaires exclusifs</li>
                        <li>• Contrats long terme sécurisés</li>
                        <li>• Formation aux techniques bio</li>
                        <li>• Support technique et financier</li>
                        <li>• Prix garantis équitables</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">🏆 Pionniers de la responsabilité</h4>
                    <p className="text-sm text-blue-700">
                      Ringer Hut fut l'une des premières chaînes de restauration rapide 
                      au Japon à adopter une démarche 100% agriculture raisonnée. Cette 
                      philosophie, initialement coûteuse, est aujourd'hui reconnue comme 
                      visionnaire et inspire d'autres chaînes à suivre cette voie responsable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide pratique */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Guide du Champon Parfait</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">🍜 Première dégustation essentielle</h3>
                    <ol className="text-yellow-700 text-sm space-y-1">
                      <li><strong>1.</strong> Commencez par le champon classique pour découvrir l'original</li>
                      <li><strong>2.</strong> Observez les légumes : couleurs vives, fraîcheur évidente</li>
                      <li><strong>3.</strong> Goûtez le bouillon d'abord : richesse et équilibre</li>
                      <li><strong>4.</strong> Mélangez bien les nouilles et légumes</li>
                      <li><strong>5.</strong> Notez la différence avec ramen traditionnel</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🎯 Menu découverte</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Champon classique</strong> - L'authentique (¥680)</li>
                        <li>• <strong>Gyoza de Nagasaki</strong> - Accompagnement local (¥320)</li>
                        <li>• <strong>Salade de légumes frais</strong> - Crudités bio (¥380)</li>
                        <li>• <strong>Thé oolong</strong> - Boisson traditionnelle (¥200)</li>
                        <li><strong>Total : ¥1,580</strong> pour l'expérience complète</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🌟 Menu gourmet</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Champon aux fruits de mer</strong> - Premium (¥880)</li>
                        <li>• <strong>Sara-udon de Nagasaki</strong> - Spécialité (¥650)</li>
                        <li>• <strong>Karaage de poulet</strong> - Protéines (¥450)</li>
                        <li>• <strong>Jus de légumes frais</strong> - Healthy (¥350)</li>
                        <li><strong>Total : ¥2,330</strong> pour les connaisseurs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">💡 Conseils d'expert</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• <strong>Timing optimal</strong> - Légumes livrés le matin, fraîcheur maximale</li>
                      <li>• <strong>Lecture des panneaux</strong> - Origine des légumes affichée quotidiennement</li>
                      <li>• <strong>Technique de dégustation</strong> - Mélanger souvent pour distribution égale</li>
                      <li>• <strong>Différences régionales</strong> - Chaque région propose ses légumes locaux</li>
                      <li>• <strong>Emporter possible</strong> - Champon à emporter disponible</li>
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
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Horaires</div>
                      <div className="text-sm text-gray-600">11h00 - 22h00</div>
                      <div className="text-sm text-gray-500">Certains ouvrent plus tôt</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Localisation</div>
                      <div className="text-sm text-gray-600">540+ restaurants au Japon</div>
                      <div className="text-sm text-gray-500">Forte présence à Kyushu</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Paiement</div>
                      <div className="text-sm text-gray-600">Toutes cartes acceptées</div>
                      <div className="text-sm text-gray-500">Application mobile disponible</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Droplets className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Budget moyen</div>
                      <div className="text-sm text-gray-600">¥800-1,500 par personne</div>
                      <div className="text-sm text-gray-500">Excellent rapport qualité-prix</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseils pour les visiteurs */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  💡 Conseils pour les Français
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-blue-700">Découverte unique</div>
                    <div className="text-blue-600">Le champon n'existe quasiment que chez Ringer Hut</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-blue-700">Qualité bio</div>
                    <div className="text-blue-600">Légumes sans additifs, traçabilité complète</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-blue-700">Spécialité régionale</div>
                    <div className="text-blue-600">Goûtez l'authentique cuisine de Nagasaki</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-blue-700">Très nutritif</div>
                    <div className="text-blue-600">250g de légumes par bol, repas équilibré</div>
                  </div>
                </div>
              </div>

              {/* Spécialité champon */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  🍜 Le Champon Expliqué
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-green-700">Origine</div>
                    <div className="text-green-600">Créé à Nagasaki pour nourrir les étudiants chinois</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-700">Différence avec ramen</div>
                    <div className="text-green-600">Nouilles épaisses, légumes sautés intégrés</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-700">Technique unique</div>
                    <div className="text-green-600">Sauté puis mijoté, pas simplement bouilli</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-700">Philosophie</div>
                    <div className="text-green-600">Un plat complet : féculents, légumes, protéines</div>
                  </div>
                </div>
              </div>

              {/* Note culturelle */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  🏮 Note Culturelle
                </h3>
                <p className="text-sm text-purple-700">
                  Ringer Hut préserve et diffuse l'héritage culinaire de Nagasaki, ville 
                  historique d'échanges entre le Japon et l'étranger. Le champon symbolise 
                  cette fusion culturelle sino-japonaise, tout comme Nagasaki elle-même. 
                  La chaîne contribue à maintenir vivante cette tradition culinaire unique 
                  tout en promouvant une agriculture responsable.
                </p>
              </div>

              {/* Liens utiles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
                <div className="space-y-2">
                  <a href="https://www.ringerhut.jp/" 
                     className="block text-blue-600 hover:text-blue-700 text-sm">
                    → Site officiel Ringer Hut
                  </a>
                  <a href="/type-plat/cuisine-chinoise" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Guide complet cuisine chinoise
                  </a>
                  <a href="/chaines/gyoza-no-ohsho" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Comparer avec Gyoza no Ohsho
                  </a>
                  <a href="/chaines/bamiyan" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Comparer avec Bamiyan
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
