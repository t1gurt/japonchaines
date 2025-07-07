import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, Wheat, Globe, Eye, ChefHat, Utensils, Heart, Lightbulb } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';




export default function MarugameSeimensPage() {
  return (
    <React.Fragment>
      <ChainViewTracker chainName="marugame-seimen" chainCategory="udon" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">

        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/type-plat/udon"
              className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour aux chaînes Udon
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-6 rounded-full">
                  <span className="text-4xl font-bold">丸</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Marugame Seimen
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-4">
                丸亀製麺 | まるがめせいめん
              </p>
              <p className="text-lg text-orange-200 max-w-3xl mx-auto mb-8">
                L'Âme de l'Udon : Une Expérience Artisanale et Vivante
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🔥 Artisanat Visible
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🏮 800+ Restaurants
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🍜 Tradition Sanuki
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ Depuis 2000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Notre Scène, C'est la Cuisine</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Franchir le rideau d'un Marugame Seimen, ce n'est pas simplement entrer dans un restaurant.
                    Ce qui s'ouvre devant vous, c'est un véritable <strong>théâtre de l'udon</strong> : la vapeur qui
                    s'élève des marmites bouillonnantes, le rythme hypnotique du découpage des nouilles, et les voix
                    énergiques du personnel qui s'orchestrent en une symphonie culinaire captivante pour tous les sens.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Cet espace ouvert évoque l'esprit des <strong>boulangeries artisanales françaises</strong> ou des
                    marchés vivants où les artisans exposent fièrement leur savoir-faire. Chez Marugame Seimen,
                    chaque étape de la fabrication des udon se déroule sous vos yeux - un témoignage de notre
                    confiance absolue dans notre processus et notre passion pour l'excellence.
                  </p>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 my-8">
                    <div className="flex items-start">
                      <Star className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-2">L'expérience du théâtre culinaire</h4>
                        <p className="text-orange-800">
                          Contrairement aux restaurants traditionnels, Marugame Seimen transforme la préparation
                          en spectacle. Cette transparence reflète la confiance japonaise dans le processus artisanal
                          et invite les clients à apprécier le savoir-faire avant même de goûter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophie du "できたて" */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">La Philosophie du « Dekinitate »</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">L'« Inefficacité » Volontaire au Service de l'Excellence</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Marugame Seimen a fait un choix stratégique radical : <strong>ne pas avoir de cuisine centrale</strong>.
                    D'un point de vue économique traditionnel, cette décision semble « inefficace ». Installer des machines
                    à nouilles dans chaque restaurant, former des artisans, maintenir des cuves d'eau bouillante en permanence
                    coûte bien plus cher qu'une production centralisée.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pourtant, nous choisissons cette « inefficacité » car notre priorité n'est pas l'optimisation des coûts,
                    mais <strong>la livraison de l'émotion du « dekinitate »</strong> (できたて - fraîchement préparé).
                    Chaque restaurant est une « seimenjo » (製麺所) indépendante, un atelier de nouilles autonome.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                    <h4 className="font-semibold text-blue-900 mb-3">🔬 La Science de la Fraîcheur</h4>
                    <p className="text-blue-800">
                      Cette approche permet d'obtenir ce que les nouilles congelées ou réfrigérées ne peuvent reproduire :
                      <strong>la fraîcheur écrasante, la texture moelleuse et l'arôme riche du blé</strong> qui ne peuvent
                      exister que dans les nouilles fraîchement battues et bouillies.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Le Défi du « Ritsuryō Ryōritsu »</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cette philosophie s'enracine dans la pensée du fondateur Takaya Awata et son concept de
                    <strong>« ritsuryō ryōritsu »</strong> (二律両立) - la coexistence de deux contradictions apparentes.
                    Comment concilier la qualité artisanale « fait main, frais » avec l'accessibilité d'une chaîne ?
                    Ce défi repose sur un principe simple : <strong>« Tout pour la joie des clients »</strong>.
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 my-8">
                    <h4 className="font-semibold text-green-900 mb-3">🎌 Comparaison culturelle franco-japonaise</h4>
                    <p className="text-green-800">
                      Tout comme la culture française valorise l'artisanat dans la boulangerie et la pâtisserie,
                      l'« inefficacité » de Marugame Seimen exprime notre passion pour offrir une véritable expérience
                      gastronomique à un prix accessible. C'est l'incarnation de l'esprit du savoir-faire traditionnel
                      dans un format moderne.
                    </p>
                  </div>
                </div>
              </div>

              {/* Les Artisans - Men-Shokunin */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <ChefHat className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Les Artisans : Men-Shokunin</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Au-delà du Simple Personnel : Les Maîtres de l'Udon</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Dans nos plus de 800 restaurants au Japon, travaillent des <strong>« men-shokunin »</strong> (麺職人)
                    - littéralement « artisans des nouilles ». Ce titre n'est pas accordé à la légère : seuls ceux qui
                    réussissent un examen interne rigoureux avec un <strong>taux de réussite d'environ 30%</strong>
                    peuvent porter ce nom.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-3">🎓 L'Examen du Men-Shokunin</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• <strong>Sélection des ingrédients :</strong> Évaluation de la qualité de la farine</li>
                        <li>• <strong>Adaptation climatique :</strong> Ajustement selon température et humidité</li>
                        <li>• <strong>Maîtrise technique :</strong> Pétrissage, maturation, découpe</li>
                        <li>• <strong>Contrôle qualité :</strong> Texture parfaite du « koshi »</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">🏅 L'Esprit M.O.F. Japonais</h4>
                      <p className="text-blue-800 text-sm">
                        Cette approche rappelle la tradition française des <strong>Meilleurs Ouvriers de France (M.O.F.)</strong>,
                        où l'excellence technique est reconnue et célébrée. Chaque restaurant affiche le
                        « men-shokunin meikan » (麺職人名鑑) - le registre des artisans, permettant aux clients
                        de connaître qui prépare leurs nouilles.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">La Maîtrise au Quotidien</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ces artisans ne suivent pas simplement un manuel. Ils <strong>lisent l'état de la farine,
                      ajustent la teneur en eau et en sel selon le climat du jour, et contrôlent le temps de maturation</strong>
                    pour produire les meilleures nouilles possibles chaque jour. Ils perfectionnent continuellement
                    leurs techniques et leur sensibilité pour offrir ce jour-là les meilleures nouilles.
                  </p>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-6">
                    <h4 className="font-semibold text-purple-900 mb-3">🎨 L'Art dans la Simplicité</h4>
                    <p className="text-purple-800">
                      Comme les maîtres artisans français, les men-shokunin comprennent que la vraie maîtrise
                      se révèle dans la simplicité. Avec seulement trois ingrédients - farine, eau, sel -
                      ils créent une infinité de nuances subtiles qui distinguent un udon exceptionnel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Histoire et Evolution */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Histoire et Évolution</h2>
                </div>

                <div className="space-y-6">
                  {/* Création */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2000 : Naissance du Concept</h3>
                    <p className="text-gray-700">
                      Marugame Seimen est créée par <strong>Toridoll Corporation</strong> avec une vision
                      révolutionnaire : rendre l'udon artisanal de qualité accessible au grand public.
                      Le concept "製麺所" (seimenjo - atelier de nouilles) place la fabrication
                      au cœur de l'expérience client, incarnant la philosophie japonaise du
                      <em>shokunin</em> (職人) - l'artisan dévoué à la perfection de son art.
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2003-2010 : Révolution du Format</h3>
                    <p className="text-gray-700">
                      Introduction du format <strong>"atelier ouvert"</strong> où les clients
                      choisissent leur udon fraîchement préparé, puis leurs tempuras et accompagnements
                      en libre-service. Cette approche démocratise l'udon traditionnel de Sanuki
                      tout en respectant le principe japonais d'<em>omotenashi</em> (おもてなし) -
                      l'hospitalité sincère et désintéressée.
                    </p>
                  </div>

                  {/* Expansion */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2011+ : Expansion Nationale et Internationale</h3>
                    <p className="text-gray-700">
                      Croissance explosive au Japon avec <strong>plus de 800 restaurants</strong>.
                      Expansion internationale réussie en Asie, aux États-Unis et en Europe,
                      adaptant le concept aux goûts locaux tout en préservant l'authenticité.
                      Cette approche reflète la capacité japonaise d'adaptation tout en maintenant
                      l'essence culturelle (<em>shuza o tamotsu</em> - 主座を保つ).
                    </p>
                  </div>

                  {/* Innovation continue */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2020+ : Innovation Continue</h3>
                    <p className="text-gray-700">
                      Intégration de la technologie moderne : commande mobile, optimisation des processus,
                      mais toujours avec le <strong>maintien de l'artisanat visible</strong> qui fait
                      l'identité de la marque. Cette dualité illustre parfaitement la philosophie
                      japonaise du <em>wa</em> (和) - l'harmonie entre tradition et modernité.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expérience culturelle */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Comprendre l'Expérience Culturelle</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                      <h3 className="font-semibold text-orange-800 mb-3 flex items-center">
                        🎭 L'Art du Shokunin
                      </h3>
                      <p className="text-sm text-orange-700 leading-relaxed">
                        Chaque <strong>shokunin</strong> (職人) de Marugame Seimen incarne la tradition japonaise
                        de l'artisan qui dédie sa vie à perfectionner un art unique. Contrairement à la
                        culture française du chef polyvalent, le shokunin se spécialise dans un domaine précis
                        - ici, l'art de l'udon - et y consacre des décennies de perfectionnement.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                        🏮 Omotenashi en Action
                      </h3>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        L'<strong>omotenashi</strong> (おもてなし) se manifeste dans chaque détail :
                        l'oshibori (serviette chaude) gratuit, l'eau offerte, le service
                        sans pourboire inclus dans le prix. Cette hospitalité sans arrière-pensée
                        commerciale crée une expérience authentiquement japonaise.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-3">🌾 La Philosophie du Monozukuri</h3>
                    <p className="text-sm text-green-700 leading-relaxed">
                      Le <strong>monozukuri</strong> (ものづくり) - l'art de fabriquer les choses avec
                      fierté et perfection - guide chaque aspect de Marugame Seimen. De la sélection des
                      ingrédients nationaux à la fabrication visible des nouilles, chaque étape reflète
                      cette philosophie japonaise qui valorise le processus autant que le résultat final.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-3">🥢 Codes Culturels à Connaître</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                      <div>
                        <p className="font-medium mb-1">• Slurping des nouilles</p>
                        <p className="text-xs">Faire du bruit en mangeant les udon est non seulement accepté mais encouragé - cela refroidit les nouilles et intensifie les saveurs.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• Respect du processus</p>
                        <p className="text-xs">Observer les artisans travailler fait partie de l'expérience. C'est un spectacle valorisé dans la culture japonaise.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• Libre-service organisé</p>
                        <p className="text-xs">Le système reflète l'efficacité japonaise tout en maintenant la qualité et le respect mutuel.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• Finir son bol</p>
                        <p className="text-xs">Terminer entièrement son repas est un signe de respect envers les ingrédients et le travail des artisans.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu détaillé dans le contenu principal */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <ChefHat className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu et Tarifs</h2>
                </div>

                {/* Udon principaux */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-sm">麺</span>
                    </div>
                    Udon Principaux
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Prix</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Kake Udon<br />
                            <span className="text-xs text-gray-500">かけうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Udon nature dans bouillon dashi, version authentique
                          </td>
                          <td className="px-4 py-3 text-right font-medium">290¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Bukkake Udon<br />
                            <span className="text-xs text-gray-500">ぶっかけうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Sauce concentrée versée directement sur les nouilles
                          </td>
                          <td className="px-4 py-3 text-right font-medium">320¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Zaru Udon<br />
                            <span className="text-xs text-gray-500">ざるうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Udon froid servi sur bambou avec sauce trempe
                          </td>
                          <td className="px-4 py-3 text-right font-medium">390¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Niku Udon<br />
                            <span className="text-xs text-gray-500">肉うどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Avec tranches de bœuf mijotées, version plus riche
                          </td>
                          <td className="px-4 py-3 text-right font-medium">590¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Kamatama Udon<br />
                            <span className="text-xs text-gray-500">釜玉うどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Udon chaud avec œuf cru, mélangé devant vous
                          </td>
                          <td className="px-4 py-3 text-right font-medium">390¥</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Carbonara Udon<br />
                            <span className="text-xs text-gray-500">カルボナーラうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Fusion franco-japonaise avec sauce crémeuse
                          </td>
                          <td className="px-4 py-3 text-right font-medium">490¥</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tempura et accompagnements */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-sm">天</span>
                    </div>
                    Tempura et Accompagnements
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
    </React.Fragment>
  );
}
