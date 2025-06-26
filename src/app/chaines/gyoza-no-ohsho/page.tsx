import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, Crown, ChefHat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gyoza no Ohsho (餃子の王将) | Cuisine Chinoise | Guide Restaurants Japonais',
  description: 'Guide complet de Gyoza no Ohsho - Spécialiste des gyoza et cuisine chinoise populaire au Japon. Menu varié, prix abordables et saveurs authentiques.',
  keywords: [
    'gyoza no ohsho', '餃子の王将', 'gyoza', 'cuisine chinoise',
    'gyoza grillés', 'prix abordables', 'cuisine populaire',
    'saveurs authentiques', 'restaurant chinois', 'menu varié'
  ],
  openGraph: {
    title: 'Gyoza no Ohsho (餃子の王将) | Roi des Gyoza',
    description: 'Découvrez Gyoza no Ohsho, spécialiste des gyoza et cuisine chinoise populaire avec prix abordables',
    type: 'article',
    url: '/chaines/gyoza-no-ohsho',
  },
  alternates: {
    canonical: '/chaines/gyoza-no-ohsho',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GyozaNoOhshoPage() {
  return (
    <>
      <ChainViewTracker chainName="gyoza-no-ohsho" chainCategory="cuisine_chinoise" />
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
              <div className="w-16 h-16 bg-red-700 rounded-lg flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gyoza no Ohsho</h1>
                <p className="text-lg text-gray-600">餃子の王将</p>
                <p className="text-sm text-gray-500">Le roi des gyoza japonais depuis 1967</p>
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
                  <Info className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Gyoza no Ohsho</strong> (餃子の王将, "Le Roi des Gyoza") est LA référence 
                    absolue en matière de gyoza au Japon. Fondée en 1967 à Kyoto, cette chaîne 
                    emblématique compte plus de 730 restaurants et a vendu plus de 6 milliards 
                    de gyoza depuis sa création. Bien plus qu'une simple chaîne de restauration, 
                    Gyoza no Ohsho est une institution culturelle qui a contribué à populariser 
                    les gyoza dans tout le Japon.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-800 mb-2">👑 Le royaume des gyoza</h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• <strong>6 milliards de gyoza vendus</strong> - Record absolu au Japon</li>
                      <li>• <strong>Recette secrète</strong> - Farce et pâte perfectionnées depuis 1967</li>
                      <li>• <strong>Cuisson artisanale</strong> - Chaque gyoza grillé à la commande</li>
                      <li>• <strong>Qualité constante</strong> - Standards stricts dans tous les restaurants</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">🏮 Origines légendaires</h3>
                  <p className="mb-4">
                    L'histoire commence en 1967 quand Kato Jizo, le fondateur, ouvre le premier 
                    restaurant dans le quartier populaire de Shijo Kawaramachi à Kyoto. Son 
                    objectif : créer le gyoza parfait accessible à tous. La recette, gardée 
                    secrète depuis plus de 50 ans, combine influences chinoises traditionnelles 
                    et adaptations aux goûts japonais.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🥟 Innovation technique</h3>
                  <p className="mb-4">
                    Gyoza no Ohsho a révolutionné la cuisson des gyoza avec sa technique 
                    brevetée de "yaki-age" (grillage-vapeur) qui garantit un résultat 
                    parfait : base croustillante dorée et partie supérieure tendre et 
                    juteuse. Cette méthode est enseignée dans l'école de formation 
                    interne de la chaîne.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌟 Phénomène culturel</h3>
                  <p className="mb-4">
                    Les gyoza d'Ohsho sont devenus un élément de la culture populaire 
                    japonaise. La chaîne figure régulièrement dans les anime et dramas, 
                    et ses restaurants sont des lieux de rassemblement intergénérationnels. 
                    Le slogan "Oishii gyoza wa Ohsho da!" (Les délicieux gyoza, c'est Ohsho!) 
                    est connu de tous les Japonais.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🔬 École de formation</h3>
                  <p className="mb-4">
                    La chaîne possède sa propre école de formation où chaque employé 
                    apprend les techniques secrètes de préparation et de cuisson. 
                    Cette formation de plusieurs semaines garantit l'uniformité de 
                    la qualité et le respect des traditions culinaires de la marque.
                  </p>
                </div>
              </div>

              {/* Menu détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu Légendaire</h2>
                </div>

                {/* Gyoza - La spécialité */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🥟 Gyoza - La Spécialité Absolue</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Crown className="w-5 h-5 text-yellow-600" />
                      <h4 className="font-semibold text-yellow-800">👑 Les Gyoza Légendaires</h4>
                    </div>
                    <p className="text-yellow-800 text-sm">
                      Recette secrète depuis 1967, chaque gyoza est préparé à la main et cuit 
                      selon la technique brevetée "yaki-age" pour un résultat parfait.
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
                          <td className="p-3 font-medium">Gyoza signature (6 pièces)</td>
                          <td className="p-3">餃子（6個）</td>
                          <td className="p-3">La spécialité absolue, farce porc-légumes</td>
                          <td className="p-3">¥260</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gyoza bouillis (6 pièces)</td>
                          <td className="p-3">水餃子（6個）</td>
                          <td className="p-3">Version bouillie, texture plus tendre</td>
                          <td className="p-3">¥280</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gyoza frits (6 pièces)</td>
                          <td className="p-3">揚げ餃子（6個）</td>
                          <td className="p-3">Complètement frits, très croustillants</td>
                          <td className="p-3">¥300</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Grand plateau gyoza (12 pièces)</td>
                          <td className="p-3">餃子大皿（12個）</td>
                          <td className="p-3">Pour les gros appétits ou à partager</td>
                          <td className="p-3">¥480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gyoza aux crevettes (6 pièces)</td>
                          <td className="p-3">海老餃子（6個）</td>
                          <td className="p-3">Farce aux crevettes, version premium</td>
                          <td className="p-3">¥380</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Plats chinois traditionnels */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍜 Plats Chinois Authentiques</h3>
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
                          <td className="p-3 font-medium">Riz sauté aux crevettes</td>
                          <td className="p-3">海老チャーハン</td>
                          <td className="p-3">Riz sauté signature aux crevettes</td>
                          <td className="p-3">¥650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ramen Ohsho</td>
                          <td className="p-3">王将ラーメン</td>
                          <td className="p-3">Ramen maison, bouillon riche en saveurs</td>
                          <td className="p-3">¥480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Porc sauce aigre-douce</td>
                          <td className="p-3">酢豚</td>
                          <td className="p-3">Classique chinois, sauce parfaitement équilibrée</td>
                          <td className="p-3">¥780</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Mapo tofu</td>
                          <td className="p-3">麻婆豆腐</td>
                          <td className="p-3">Tofu épicé au porc haché, authentique</td>
                          <td className="p-3">¥580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Poulet aux noix de cajou</td>
                          <td className="p-3">鶏肉のカシューナッツ炒め</td>
                          <td className="p-3">Sauté de poulet aux noix, texture parfaite</td>
                          <td className="p-3">¥720</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Crevettes aux épices</td>
                          <td className="p-3">海老のチリソース</td>
                          <td className="p-3">Crevettes sauce épicée, spécialité maison</td>
                          <td className="p-3">¥850</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Nouilles et soupes */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍝 Nouilles & Soupes</h3>
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
                          <td className="p-3 font-medium">Yakisoba Ohsho</td>
                          <td className="p-3">王将焼きそば</td>
                          <td className="p-3">Nouilles sautées signature, sauce spéciale</td>
                          <td className="p-3">¥520</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ramen gyoza set</td>
                          <td className="p-3">ラーメン餃子セット</td>
                          <td className="p-3">Combo parfait : ramen + 3 gyoza</td>
                          <td className="p-3">¥650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Soupe wonton</td>
                          <td className="p-3">ワンタンスープ</td>
                          <td className="p-3">Raviolis chinois dans bouillon clair</td>
                          <td className="p-3">¥450</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Nouilles Dan Dan</td>
                          <td className="p-3">担々麺</td>
                          <td className="p-3">Nouilles épicées au sésame, spécialité</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Udon chinois</td>
                          <td className="p-3">中華うどん</td>
                          <td className="p-3">Fusion sino-japonaise unique</td>
                          <td className="p-3">¥580</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Légumes et accompagnements */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🥬 Légumes & Accompagnements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Légumes sautés</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Épinards à l'ail</strong> - Sauté express, saveur intense (¥380)</li>
                        <li>• <strong>Aubergines en sauce</strong> - Mijotées sauce soja-miso (¥450)</li>
                        <li>• <strong>Brocolis aux huîtres</strong> - Sauce huître authentique (¥420)</li>
                        <li>• <strong>Champignons sautés</strong> - Mélange de champignons variés (¥480)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Entrées & apéritifs</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Légumes marinés</strong> - Assortiment kimchi style (¥320)</li>
                        <li>• <strong>Salade de concombre</strong> - Vinaigrette sésame (¥280)</li>
                        <li>• <strong>Tofu frit</strong> - Sauce soja-gingembre (¥350)</li>
                        <li>• <strong>Œuf aux tomates</strong> - Plat réconfortant chinois (¥380)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Boissons */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🍺 Boissons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Bières</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Bière japonaise</strong> - ¥350 (M), ¥550 (L)</li>
                        <li>• <strong>Bière chinoise Tsingtao</strong> - ¥380</li>
                        <li>• <strong>Bière sans alcool</strong> - ¥300</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Alcools chinois</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Shaoxing (alcool de riz)</strong> - ¥420</li>
                        <li>• <strong>Saké chaud</strong> - ¥380</li>
                        <li>• <strong>Whisky high-ball</strong> - ¥400</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Sans alcool</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Thé oolong</strong> - ¥200</li>
                        <li>• <strong>Thé au jasmin</strong> - ¥220</li>
                        <li>• <strong>Coca Cola</strong> - ¥250</li>
                        <li>• <strong>Jus d'orange</strong> - ¥280</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Techniques et savoir-faire */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <ChefHat className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Savoir-Faire Légendaire</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-800 mb-2">🥟 L'art des gyoza parfaits</h3>
                    <p className="text-amber-700 text-sm mb-3">
                      Chaque gyoza suit un processus artisanal strict de 7 étapes, 
                      de la préparation de la farce secrète jusqu'à la cuisson "yaki-age" 
                      brevetée qui garantit le résultat parfait.
                    </p>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• <strong>Farce secrète</strong> - Mélange porc-légumes aux proportions gardées</li>
                      <li>• <strong>Pliage à la main</strong> - 18 plis minimum par gyoza</li>
                      <li>• <strong>Cuisson yaki-age</strong> - Grillage puis vapeur en une seule fois</li>
                      <li>• <strong>Timing précis</strong> - 3 minutes 30 pour la cuisson parfaite</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🏫 École de formation Ohsho</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Formation intensive de 3 semaines minimum</li>
                        <li>• Apprentissage des techniques secrètes</li>
                        <li>• Certification obligatoire pour servir</li>
                        <li>• Formation continue et perfectionnement</li>
                        <li>• Transmission des valeurs de la marque</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🔬 Contrôle qualité</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Standards stricts pour tous les ingrédients</li>
                        <li>• Inspection quotidienne des farces</li>
                        <li>• Température de cuisson contrôlée</li>
                        <li>• Test de dégustation régulier</li>
                        <li>• Certification qualité nationale</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">🏆 Héritage culturel</h4>
                    <p className="text-sm text-red-700">
                      Gyoza no Ohsho est reconnu comme patrimoine culinaire vivant du Japon. 
                      La chaîne a contribué à faire des gyoza un plat national japonais et 
                      continue d'innover tout en préservant les traditions ancestrales 
                      de la cuisine chinoise adaptée aux goûts japonais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide pratique */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Guide du Parfait Visiteur</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">🥟 Première visite obligatoire</h3>
                    <ol className="text-blue-700 text-sm space-y-1">
                      <li><strong>1.</strong> Commencez OBLIGATOIREMENT par les gyoza signature (6 pièces)</li>
                      <li><strong>2.</strong> Ajoutez un riz sauté aux crevettes pour l'équilibre</li>
                      <li><strong>3.</strong> Bière ou thé oolong pour accompagner</li>
                      <li><strong>4.</strong> Observez la technique de cuisson au comptoir</li>
                      <li><strong>5.</strong> Goûtez les différences avec d'autres chaînes</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🎯 Menu découverte</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Gyoza signature</strong> - Incontournable (¥260)</li>
                        <li>• <strong>Riz sauté aux crevettes</strong> - Classique (¥650)</li>
                        <li>• <strong>Ramen Ohsho</strong> - Spécialité maison (¥480)</li>
                        <li>• <strong>Bière japonaise</strong> - Accord parfait (¥350)</li>
                        <li><strong>Total : ¥1,740</strong> pour l'expérience essentielle</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🌟 Menu gourmand</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Grand plateau gyoza</strong> - Pour vrais amateurs (¥480)</li>
                        <li>• <strong>Porc sauce aigre-douce</strong> - Authentique (¥780)</li>
                        <li>• <strong>Crevettes aux épices</strong> - Premium (¥850)</li>
                        <li>• <strong>Bière Tsingtao</strong> - Chinoise authentique (¥380)</li>
                        <li><strong>Total : ¥2,490</strong> pour les connaisseurs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">💡 Astuces d'expert</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• <strong>Heures de pointe</strong> - Évitez 12h-13h et 19h-20h</li>
                      <li>• <strong>Comptoir recommandé</strong> - Vue sur la cuisson des gyoza</li>
                      <li>• <strong>Sauce parfaite</strong> - Mélangez soja, vinaigre, et huile de sésame</li>
                      <li>• <strong>Commande progressive</strong> - Les gyoza arrivent chauds toutes les 5 minutes</li>
                      <li>• <strong>Emporter possible</strong> - Gyoza congelés disponibles</li>
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
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Horaires</div>
                      <div className="text-sm text-gray-600">11h00 - 23h00 (lun-ven)</div>
                      <div className="text-sm text-gray-600">11h00 - 01h00 (sam-dim)</div>
                      <div className="text-sm text-gray-500">Certains 24h/24</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Localisation</div>
                      <div className="text-sm text-gray-600">730+ restaurants au Japon</div>
                      <div className="text-sm text-gray-500">Partout : centres-villes, banlieues</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Paiement</div>
                      <div className="text-sm text-gray-600">Espèces prioritaire</div>
                      <div className="text-sm text-gray-500">Cartes dans certains restaurants</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Crown className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Budget moyen</div>
                      <div className="text-sm text-gray-600">¥800-1,500 par personne</div>
                      <div className="text-sm text-gray-500">Excellent rapport qualité-prix</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseils pour les visiteurs */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">
                  💡 Conseils pour les Français
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-red-700">Gyoza obligatoires</div>
                    <div className="text-red-600">C'est LA référence absolue, impossible de passer à côté</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Technique unique</div>
                    <div className="text-red-600">Observez la cuisson "yaki-age" au comptoir</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Prix imbattables</div>
                    <div className="text-red-600">Qualité exceptionnelle pour des prix très accessibles</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Expérience authentique</div>
                    <div className="text-red-600">Institution culturelle japonaise, pas juste un restaurant</div>
                  </div>
                </div>
              </div>

              {/* Records et chiffres */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  🏆 Records & Chiffres
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-yellow-700">6 milliards</div>
                    <div className="text-yellow-600">Nombre de gyoza vendus depuis 1967</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">730+ restaurants</div>
                    <div className="text-yellow-600">Plus grande chaîne de cuisine chinoise au Japon</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">¥260</div>
                    <div className="text-yellow-600">Prix inchangé des gyoza depuis des années</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">3min30</div>
                    <div className="text-yellow-600">Temps de cuisson parfait des gyoza</div>
                  </div>
                </div>
              </div>

              {/* Note culturelle */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  🏮 Note Culturelle
                </h3>
                <p className="text-sm text-purple-700">
                  Gyoza no Ohsho a transformé un plat chinois en symbole de la culture 
                  populaire japonaise. Les gyoza, initialement introduits par les soldats 
                  de retour de Mandchourie, sont devenus grâce à Ohsho un plat national 
                  japonais. La chaîne représente l'excellence de l'adaptation culinaire 
                  japonaise : prendre le meilleur d'ailleurs et le perfectionner.
                </p>
              </div>

              {/* Liens utiles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
                <div className="space-y-2">
                  <a href="https://www.ohsho.co.jp/" 
                     className="block text-red-600 hover:text-red-700 text-sm">
                    → Site officiel Gyoza no Ohsho
                  </a>
                  <a href="/type-plat/cuisine-chinoise" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Guide complet cuisine chinoise
                  </a>
                  <a href="/chaines/bamiyan" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Comparer avec Bamiyan
                  </a>
                  <a href="/chaines/ringer-hut" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Comparer avec Ringer Hut
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
