import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, ChefHat, Flame, Crown, Fish } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tsunahachi (つな八) | Tempura | Guide Restaurants Japonais',
  description: 'Guide complet de Tsunahachi - Restaurant de tempura traditionnel fondé en 1923. Expertise centenaire, technique authentique et qualité exceptionnelle.',
  keywords: [
    'tsunahachi', 'つな八', 'tempura', 'restaurant traditionnel',
    'fondé 1923', 'technique authentique', 'tempura maître',
    'qualité exceptionnelle', 'tradition japonaise', 'expertise centenaire'
  ],
  openGraph: {
    title: 'Tsunahachi (つな八) | Tempura Traditionnel depuis 1923',
    description: 'Découvrez Tsunahachi, maître de la tempura depuis 1923 avec technique authentique et qualité exceptionnelle',
    type: 'article',
    url: '/chaines/tsunahachi',
  },
  alternates: {
    canonical: '/chaines/tsunahachi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TsunahachiPage() {
  return (
    <>
      <ChainViewTracker chainName="tsunahachi" chainCategory="tempura" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/tempura" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Tempura & Tendon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tsunahachi</h1>
              <p className="text-lg text-gray-600">つな八</p>
              <p className="text-sm text-gray-500">L'institution du tempura depuis 1923</p>
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
                <Info className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Tsunahachi</strong> (つな八) est l'institution centenaire du tempura 
                  au Japon, fondée en 1923 à Ginza. Cette chaîne prestigieuse de plus de 
                  30 restaurants maintient depuis un siècle l'art traditionnel du tempura, 
                  transmis de maître à apprenti. Tsunahachi représente l'excellence absolue 
                  en matière de friture japonaise, avec des techniques séculaires et des 
                  ingrédients d'exception.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-amber-800 mb-2">👑 Maîtrise centenaire</h3>
                  <ul className="text-amber-700 space-y-1">
                    <li>• <strong>Fondé en 1923</strong> - Un siècle d'expertise tempura</li>
                    <li>• <strong>Techniques traditionnelles</strong> - Transmission maître-apprenti</li>
                    <li>• <strong>Ingrédients premium</strong> - Sélection rigoureuse quotidienne</li>
                    <li>• <strong>Art de la friture</strong> - Perfection technique absolue</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏮 Histoire prestigieuse</h3>
                <p className="mb-4">
                  Tsunahachi fut fondé en 1923 par Tsunaji Hirata dans le quartier de Ginza, 
                  alors en pleine reconstruction après le grand tremblement de terre du Kantō. 
                  Le restaurant initial, simple comptoir tempura, révolutionna l'art de la 
                  friture en standardisant des techniques qui étaient jusque-là gardées 
                  secrètes par les maîtres cuisiniers de l'époque Edo.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎓 École de tempura</h3>
                <p className="mb-4">
                  Plus qu'une chaîne, Tsunahachi est une véritable école de formation aux 
                  arts du tempura. Chaque cuisinier suit un apprentissage de 5 ans minimum 
                  avant de maîtriser toutes les techniques. L'entreprise a formé des milliers 
                  de chefs qui ont ensuite ouvert leurs propres restaurants, diffusant les 
                  standards Tsunahachi dans tout le Japon.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌊 Art de la pâte tempura</h3>
                <p className="mb-4">
                  La pâte tempura de Tsunahachi suit une recette séculaire : eau glacée, 
                  farine spéciale et technique de mélange minimal pour éviter la formation 
                  de gluten. Cette pâte, préparée en petites quantités tout au long du 
                  service, garantit une texture ultra-légère et croustillante qui ne masque 
                  jamais la saveur des ingrédients.
                </p>

                <h3 className="text-xl font-semibold mb-3">🔥 Maîtrise de la température</h3>
                <p className="mb-4">
                  Chaque ingrédient chez Tsunahachi est frit à une température spécifique : 
                  160°C pour les légumes délicats, 170°C pour les crevettes, 180°C pour le 
                  poisson blanc. Cette précision thermique, contrôlée au degré près, permet 
                  d'obtenir la texture parfaite pour chaque tempura, avec un cœur tendre 
                  et une croûte dorée idéale.
                </p>

                <h3 className="text-xl font-semibold mb-3">🦐 Sélection d'exception</h3>
                <p className="mb-4">
                  Tsunahachi s'approvisionne exclusivement auprès des meilleurs fournisseurs : 
                  crevettes vivantes de Kumamoto, légumes de montagne de producteurs sélectionnés, 
                  poissons de ligne de la baie de Tokyo. Cette qualité premium, visible 
                  dans chaque bouchée, justifie la réputation légendaire de l'enseigne 
                  auprès des fins gastronomes japonais.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Tempura d'Exception</h2>
              </div>

              {/* Tempura de fruits de mer */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🦐 Tempura de Fruits de Mer Premium</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Fish className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">🌊 Fraîcheur exceptionnelle</h4>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Tous les fruits de mer sont sélectionnés vivants le matin même et 
                    préparés dans les règles de l'art traditionnel japonais pour préserver 
                    leur texture et saveur naturelles.
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
                        <td className="p-3 font-medium">Crevette géante</td>
                        <td className="p-3">大海老天ぷら</td>
                        <td className="p-3">Crevette tigre de Kumamoto, 20cm+</td>
                        <td className="p-3">¥800</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Anago (congre)</td>
                        <td className="p-3">穴子天ぷら</td>
                        <td className="p-3">Congre de Tokyo, texture fondante</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kohada (alose)</td>
                        <td className="p-3">小肌天ぷら</td>
                        <td className="p-3">Petit poisson argenté, délicat</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kisu (petit merlan)</td>
                        <td className="p-3">鱚天ぷら</td>
                        <td className="p-3">Poisson blanc fin, chair nacrée</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Calamar frais</td>
                        <td className="p-3">烏賊天ぷら</td>
                        <td className="p-3">Tentacules croustillants</td>
                        <td className="p-3">¥480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kakiage fruits de mer</td>
                        <td className="p-3">海鮮かき揚げ</td>
                        <td className="p-3">Mélange crevettes, coquillages</td>
                        <td className="p-3">¥750</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tempura de légumes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥬 Tempura de Légumes de Saison</h3>
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
                        <td className="p-3 font-medium">Aubergine japonaise</td>
                        <td className="p-3">茄子天ぷら</td>
                        <td className="p-3">Nasu violet, fondant à cœur</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Piment shishito</td>
                        <td className="p-3">ししとう天ぷら</td>
                        <td className="p-3">Piment doux vert, légèrement piquant</td>
                        <td className="p-3">¥320</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Lotus renkon</td>
                        <td className="p-3">蓮根天ぷら</td>
                        <td className="p-3">Racine croquante ajourée</td>
                        <td className="p-3">¥350</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Champignon shiitaké</td>
                        <td className="p-3">椎茸天ぷら</td>
                        <td className="p-3">Champignon charnu premium</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chrysanthème</td>
                        <td className="p-3">菊花天ぷら</td>
                        <td className="p-3">Fleur comestible, amertume délicate</td>
                        <td className="p-3">¥450</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kakiage légumes</td>
                        <td className="p-3">野菜かき揚げ</td>
                        <td className="p-3">Julienne de légumes de saison</td>
                        <td className="p-3">¥480</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sets traditionnels tendon */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍱 Sets Tendon Traditionnels</h3>
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
                        <td className="p-3 font-medium">Tendon classique</td>
                        <td className="p-3">天丼</td>
                        <td className="p-3">Crevette + légumes sur riz, sauce sucrée</td>
                        <td className="p-3">¥1,200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ebi tendon</td>
                        <td className="p-3">海老天丼</td>
                        <td className="p-3">Double crevette géante premium</td>
                        <td className="p-3">¥1,800</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Anago tendon</td>
                        <td className="p-3">穴子天丼</td>
                        <td className="p-3">Congre grillé, saveur raffinée</td>
                        <td className="p-3">¥1,650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kakiage tendon</td>
                        <td className="p-3">かき揚げ天丼</td>
                        <td className="p-3">Beignet géant légumes et fruits de mer</td>
                        <td className="p-3">¥1,380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tendon végétarien</td>
                        <td className="p-3">精進天丼</td>
                        <td className="p-3">Assortiment légumes de saison seulement</td>
                        <td className="p-3">¥1,150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Deluxe tendon</td>
                        <td className="p-3">特上天丼</td>
                        <td className="p-3">Sélection premium chef</td>
                        <td className="p-3">¥2,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sets dégustation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍽️ Sets Dégustation Kaiseki</h3>
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
                        <td className="p-3 font-medium">Set découverte</td>
                        <td className="p-3">お試しセット</td>
                        <td className="p-3">5 tempura + riz + soupe + légumes</td>
                        <td className="p-3">¥1,580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Set tradition</td>
                        <td className="p-3">伝統セット</td>
                        <td className="p-3">8 tempura + tendon + dessert</td>
                        <td className="p-3">¥2,200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Set maître</td>
                        <td className="p-3">職人セット</td>
                        <td className="p-3">12 tempura servis au fur et à mesure</td>
                        <td className="p-3">¥3,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Set impérial</td>
                        <td className="p-3">御膳セット</td>
                        <td className="p-3">15 tempura premium + accompagnements</td>
                        <td className="p-3">¥5,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Omakase chef</td>
                        <td className="p-3">おまかせコース</td>
                        <td className="p-3">Menu surprise selon arrivages</td>
                        <td className="p-3">¥6,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements traditionnels */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍚 Accompagnements Traditionnels</h3>
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
                        <td className="p-3 font-medium">Riz nature</td>
                        <td className="p-3">白ご飯</td>
                        <td className="p-3">Riz japonais premium Koshihikari</td>
                        <td className="p-3">¥300</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Soupe miso</td>
                        <td className="p-3">味噌汁</td>
                        <td className="p-3">Bouillon traditionnel wakame</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Légumes marinés</td>
                        <td className="p-3">お漬物</td>
                        <td className="p-3">Tsukemono maison assortis</td>
                        <td className="p-3">¥350</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sauce tentsuyu</td>
                        <td className="p-3">天つゆ</td>
                        <td className="p-3">Sauce traditionnelle pour tremper</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Radis râpé</td>
                        <td className="p-3">大根おろし</td>
                        <td className="p-3">Daikon frais, digestif naturel</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Wasabi frais</td>
                        <td className="p-3">生わさび</td>
                        <td className="p-3">Wasabi râpé minute</td>
                        <td className="p-3">¥300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Boissons traditionnelles */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍵 Boissons Traditionnelles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-amber-600 mb-3">Thés premium</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé vert sencha</strong> - ¥400</li>
                      <li>• <strong>Gyokuro impérial</strong> - ¥800</li>
                      <li>• <strong>Hojicha grillé</strong> - ¥350</li>
                      <li>• <strong>Genmaicha</strong> - ¥300</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-600 mb-3">Saké premium</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Junmai Daiginjo</strong> - ¥1,200</li>
                      <li>• <strong>Saké local Edo</strong> - ¥800</li>
                      <li>• <strong>Saké chaud kan</strong> - ¥600</li>
                      <li>• <strong>Amazake sans alcool</strong> - ¥450</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-600 mb-3">Autres boissons</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Bière Asahi draft</strong> - ¥500</li>
                      <li>• <strong>Ramune traditionnel</strong> - ¥300</li>
                      <li>• <strong>Eau minérale</strong> - ¥200</li>
                      <li>• <strong>Jus de prune ume</strong> - ¥400</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Art du tempura */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">L'Art Centenaire du Tempura</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">🎭 Rituel de préparation</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    Chez Tsunahachi, chaque tempura suit un protocole centenaire : 
                    ingrédients à température ambiante, pâte glacée préparée par petites 
                    quantités, huile maintenue à température précise pour chaque type 
                    d'aliment.
                  </p>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• <strong>Eau glacée obligatoire</strong> - Évite le développement du gluten</li>
                    <li>• <strong>Mélange minimal</strong> - Pâte grumeleuse volontairement</li>
                    <li>• <strong>Friture immédiate</strong> - Pas de temps d'attente</li>
                    <li>• <strong>Service direct</strong> - Dégustation dans la minute</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌡️ Maîtrise thermique</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Légumes tendres : 160-165°C</li>
                      <li>• Crevettes épaisses : 170-175°C</li>
                      <li>• Poissons blancs : 175-180°C</li>
                      <li>• Kakiage fins : 180-185°C</li>
                      <li>• Contrôle thermomètre constant</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏱️ Timing de cuisson</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Crevette 20cm : 2-3 minutes</li>
                      <li>• Aubergine tranche : 1-2 minutes</li>
                      <li>• Poisson filet : 1,5-2,5 minutes</li>
                      <li>• Kakiage légumes : 3-4 minutes</li>
                      <li>• Observation bulle pâte constante</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">👨‍🍳 Formation traditionnelle</h4>
                  <p className="text-sm text-blue-700">
                    Chaque chef Tsunahachi suit un apprentissage minimum de 5 ans : 
                    1 an préparation ingrédients, 2 ans maîtrise des températures, 
                    2 ans technique de pâte et timing. Cette formation rigoureuse 
                    garantit l'excellence constante dans tous les restaurants de la chaîne.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide de Dégustation Expert</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🍤 Initiation tempura parfaite</h3>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li><strong>1.</strong> Commencez par set découverte pour apprécier la variété</li>
                    <li><strong>2.</strong> Dégustez immédiatement, tempura refroidit vite</li>
                    <li><strong>3.</strong> Trempez légèrement dans tentsuyu, pas noyer</li>
                    <li><strong>4.</strong> Alternez avec radis râpé pour nettoyer palais</li>
                    <li><strong>5.</strong> Observez technique chef si comptoir disponible</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥇 Menu initiation prestige</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Set tradition</strong> - Expérience complète (¥2,200)</li>
                      <li>• <strong>Thé sencha</strong> - Accompagnement parfait (¥400)</li>
                      <li>• <strong>Légumes marinés</strong> - Nettoyage palais (¥350)</li>
                      <li>• <strong>Radis râpé extra</strong> - Digestif (¥200)</li>
                      <li><strong>Total : ¥3,150</strong> pour découverte authentique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👑 Menu gourmet expert</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Omakase chef</strong> - Menu surprise (¥6,800)</li>
                      <li>• <strong>Gyokuro impérial</strong> - Thé premium (¥800)</li>
                      <li>• <strong>Wasabi frais</strong> - Accompagnement noble (¥300)</li>
                      <li>• <strong>Saké Junmai</strong> - Accord parfait (¥1,200)</li>
                      <li><strong>Total : ¥9,100</strong> pour expérience ultime</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">🎯 Conseils expert dégustation</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Réservation recommandée</strong> - Popularité élevée garantie</li>
                    <li>• <strong>Comptoir privilégié</strong> - Observer chef à l'œuvre</li>
                    <li>• <strong>Midi moins cher</strong> - Sets déjeuner avantageux</li>
                    <li>• <strong>Seasonal menu</strong> - Ingrédients saisonniers spéciaux</li>
                    <li>• <strong>Étiquette japonaise</strong> - Respecter ambiance traditionnelle</li>
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
                  <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">11h30 - 21h30</div>
                    <div className="text-sm text-gray-500">Fermé certains lundis</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">30+ restaurants premium</div>
                    <div className="text-sm text-gray-500">Ginza, Shinjuku, Kyoto</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Cartes acceptées</div>
                    <div className="text-sm text-gray-500">Espèces préférées</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Crown className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Budget moyen</div>
                    <div className="text-sm text-gray-600">¥2,000-6,000 par personne</div>
                    <div className="text-sm text-gray-500">Excellence justifiée</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">
                👑 Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-amber-700">Institution centenaire</div>
                  <div className="text-amber-600">Expérience authentique tempura traditionnel</div>
                </div>
                
                <div>
                  <div className="font-medium text-amber-700">Qualité exceptionnelle</div>
                  <div className="text-amber-600">Ingrédients premium, techniques séculaires</div>
                </div>
                
                <div>
                  <div className="font-medium text-amber-700">Réservation conseillée</div>
                  <div className="text-amber-600">Popularité élevée, places limitées</div>
                </div>
                
                <div>
                  <div className="font-medium text-amber-700">Prix justifiés</div>
                  <div className="text-amber-600">Excellence absolue, investissement mémoire</div>
                </div>
              </div>
            </div>

            {/* Art du tempura */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🎭 L'Art du Tempura
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Pâte parfaite</div>
                  <div className="text-blue-600">Eau glacée + mélange minimal = légèreté</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Température précise</div>
                  <div className="text-blue-600">Chaque ingrédient sa température optimale</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Timing critique</div>
                  <div className="text-blue-600">Dégustation immédiate obligatoire</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Sélection premium</div>
                  <div className="text-blue-600">Ingrédients vivants, qualité maximale</div>
                </div>
              </div>
            </div>

            {/* Tradition depuis 1923 */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                🏮 Tradition depuis 1923
              </h3>
              <p className="text-sm text-gray-300">
                Tsunahachi préserve depuis un siècle l'art authentique du tempura 
                d'Edo. Cette institution a formé des générations de maîtres tempura 
                et maintient les standards les plus élevés de la cuisine japonaise 
                traditionnelle. Chaque visite est un voyage dans l'histoire 
                culinaire du Japon.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.tsunahachi.co.jp/" 
                   className="block text-amber-600 hover:text-amber-700 text-sm">
                  → Site officiel Tsunahachi
                </a>
                <a href="/type-plat/tempura" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet tempura & tendon
                </a>
                <a href="/chaines/tenya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Tenya
                </a>
                <a href="/type-plat" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Explorer autres spécialités
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
