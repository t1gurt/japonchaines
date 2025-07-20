import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Globe, Flame, ChefHat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ippudo 一風堂 | Ramen Premium | Japonchaines",
  description: "Ramen tonkotsu premium. Innovation hakata, qualité internationale, expérience raffinée.",
  keywords: [
    'ippudo', '一風堂', 'ramen tonkotsu', 'hakata ramen',
    'ramen premium', 'qualité supérieure', 'ramen authentique',
    'style hakata', 'ramen raffiné', 'innovation ramen'
  ],
  openGraph: {
    title: "Ippudo 一風堂 | Ramen Premium | Japonchaines",
    description: "Ramen tonkotsu premium. Innovation hakata, qualité internationale, expérience raffinée.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/ippudo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function IppudoPage() {
  return (
    <>
      <ChainViewTracker chainName="ippudo" chainCategory="ramen" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/ramen" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Ramen
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src="/images/chaines/ippudo/ippudo-logo.jpg" 
                alt="Logo Ippudo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ippudo</h1>
              <p className="text-lg text-gray-600">一風堂 | いっぷうどう</p>
              <p className="text-sm text-gray-500">Le pionnier du ramen tonkotsu moderne et international</p>
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
                  <strong>Ippudo (一風堂)</strong> est l'une des chaînes de ramen les plus prestigieuses et 
                  influentes du Japon. Fondée en 1985 à Fukuoka par Shigemi Kawahara, Ippudo a révolutionné 
                  l'art du ramen tonkotsu en créant un style moderne, raffiné et accessible au monde entier. 
                  Véritable ambassadeur de la culture ramen japonaise à l'international.
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-red-800 mb-2">🏆 L'excellence du tonkotsu moderne</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• <strong>Bouillon signature</strong> - 18h de cuisson lente pour un tonkotsu crémeux parfait</li>
                    <li>• <strong>Innovation constante</strong> - Fusion entre tradition et créativité contemporaine</li>
                    <li>• <strong>Présence internationale</strong> - New York, Paris, Londres, Sydney et plus</li>
                    <li>• <strong>Culture d'entreprise unique</strong> - "Ganko Oyaji" (l'esprit du chef obstiné)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🌟 L'impact culturel d'Ippudo</h3>
                <p className="mb-4">
                  Ippudo n'est pas qu'une chaîne de ramen : c'est un phénomène culturel qui a démocratisé 
                  et modernisé la perception du ramen. En introduisant une approche plus stylée et 
                  contemporaine, tout en respectant les traditions, Ippudo a inspiré toute une génération 
                  de ramen-ya et contribué à faire du ramen un plat reconnu mondialement.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 Expansion internationale</h3>
                <p className="mb-4">
                  Premier à ouvrir des restaurants de ramen authentiques à l'étranger, Ippudo a ouvert 
                  la voie à l'internationalisation de cette cuisine. Avec plus de 100 restaurants dans 
                  le monde, la chaîne adapte ses recettes aux goûts locaux tout en conservant l'âme 
                  japonaise de ses créations.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎯 Philosophie "Smile & Arigatou"</h3>
                <p className="mb-4">
                  Ippudo prône une philosophie d'hospitalité chaleureuse où chaque client doit repartir 
                  avec le sourire. Cette approche, combinée à la qualité exceptionnelle des produits, 
                  fait d'Ippudo une expérience culinaire complète plutôt qu'un simple repas.
                </p>
              </div>
            </div>

            {/* Photos des plats signature */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Plats Signature en Images</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Shiromaru */}
                <div className="text-center">
                  <div className="relative rounded-lg overflow-hidden mb-3 h-48">
                    <img 
                      src="/images/chaines/ippudo/shiromaru-motoaji.jpg" 
                      alt="Shiromaru Motoaji - Ramen tonkotsu original d'Ippudo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Shiromaru Motoaji</h3>
                  <p className="text-sm text-gray-600">白丸元味</p>
                  <p className="text-xs text-gray-500 mt-1">Le ramen original d'Ippudo avec son bouillon tonkotsu crémeux et équilibré</p>
                </div>

                {/* Akamaru */}
                <div className="text-center">
                  <div className="relative rounded-lg overflow-hidden mb-3 h-48">
                    <img 
                      src="/images/chaines/ippudo/akamaru-shinaji.jpg" 
                      alt="Akamaru Shinaji - Ramen tonkotsu épicé d'Ippudo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Akamaru Shinaji</h3>
                  <p className="text-sm text-gray-600">赤丸新味</p>
                  <p className="text-xs text-gray-500 mt-1">Version épicée avec miso rouge, ail et huile parfumée pour plus de complexité</p>
                </div>

                {/* Hitouchi Gyoza */}
                <div className="text-center">
                  <div className="relative rounded-lg overflow-hidden mb-3 h-48">
                    <img 
                      src="/images/chaines/ippudo/hitouchi-gyoza.jpg" 
                      alt="Hitouchi Gyoza - Gyoza signature d'Ippudo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Hitouchi Gyoza</h3>
                  <p className="text-sm text-gray-600">ひとくち餃子</p>
                  <p className="text-xs text-gray-500 mt-1">Gyoza signature aux légumes, parfaitement croustillants à l'extérieur et juteux à l'intérieur</p>
                </div>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Détaillé</h2>
              </div>

              {/* Ramen signature */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍜 Ramen Signature</h3>
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
                        <td className="p-3 font-medium">Shiromaru Motoaji</td>
                        <td className="p-3">白丸元味</td>
                        <td className="p-3">Le ramen original d'Ippudo, tonkotsu classique et équilibré</td>
                        <td className="p-3">¥990</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Akamaru Shinaji</td>
                        <td className="p-3">赤丸新味</td>
                        <td className="p-3">Version épicée avec miso rouge et ail, plus complexe</td>
                        <td className="p-3">¥1,080</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaka-men</td>
                        <td className="p-3">からか麺</td>
                        <td className="p-3">Ramen épicé avec piment rouge, pour les amateurs de sensations</td>
                        <td className="p-3">¥1,190</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shiromaru Hakata Classic</td>
                        <td className="p-3">白丸博多クラシック</td>
                        <td className="p-3">Version traditionnelle de Hakata, plus authentique</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ippudo Salad Ramen</td>
                        <td className="p-3">一風堂サラダラーメン</td>
                        <td className="p-3">Version fraîche avec légumes, bouillon plus léger</td>
                        <td className="p-3">¥1,280</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Toppings premium */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥢 Toppings Premium</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Viandes & Protéines</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Chashu premium</strong> - ¥350 (porc braisé 12h, fondant)</li>
                      <li>• <strong>Chicken Chashu</strong> - ¥300 (poulet tendre mariné)</li>
                      <li>• <strong>Œuf mariné Ajitsuke</strong> - ¥150 (jaune coulant parfait)</li>
                      <li>• <strong>Menma bambou</strong> - ¥200 (pousses fermentées croustillantes)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Légumes & Extras</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Negi blanc</strong> - ¥150 (oignons nouveaux finement ciselés)</li>
                      <li>• <strong>Nori premium</strong> - ¥100 (algue de qualité supérieure)</li>
                      <li>• <strong>Moyashi croquant</strong> - ¥120 (germes de soja frais)</li>
                      <li>• <strong>Ail grillé</strong> - ¥100 (parfume délicatement le bouillon)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kara-moyashi et légumes croquants */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">�️ Kara-moyashi et Légumes d'Accompagnement</h3>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg overflow-hidden w-24 h-24 flex-shrink-0">
                      <img 
                        src="/images/chaines/ippudo/kara-moyashi.jpg" 
                        alt="Kara-moyashi - Germes de soja épicés d'Ippudo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800 mb-2">Kara-moyashi (辛もやし) - Germes de soja épicés</h4>
                      <p className="text-red-700 text-sm mb-2">
                        Spécialité d'Ippudo : germes de soja marinés dans une sauce épicée. 
                        Peuvent être dégustés seuls <strong>avant le ramen</strong> comme apéritif ou 
                        ajoutés pendant le repas pour <strong>changer le goût</strong> du bouillon.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h5 className="font-medium text-red-700 mb-1">🍽️ Dégustation en apéritif</h5>
                          <ul className="text-red-600 text-xs space-y-1">
                            <li>• Se mangent avec les baguettes</li>
                            <li>• Préparent le palais au ramen</li>
                            <li>• Stimulent l'appétit par le piquant</li>
                            <li>• Texture croquante rafraîchissante</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-1">🔄 Usage pour la "taste change"</h5>
                          <ul className="text-red-600 text-xs space-y-1">
                            <li>• Ajoutés à mi-parcours du ramen</li>
                            <li>• Changent l'équilibre des saveurs</li>
                            <li>• Apportent fraîcheur et piquant</li>
                            <li>• Relancent l'intérêt gustatif</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">🥬 Autres légumes d'accompagnement</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>Negi</strong> - Oignons nouveaux finement ciselés</li>
                      <li>• <strong>Menma</strong> - Pousses de bambou fermentées</li>
                      <li>• <strong>Kikurage</strong> - Champignons noirs gélatineux (selon saison)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h5 className="font-medium text-yellow-800 mb-2">💡 Conseil de dégustation</h5>
                    <p className="text-yellow-700 text-sm">
                      <strong>Méthode traditionnelle :</strong> Commencez par quelques kara-moyashi en apéritif, 
                      puis ajoutez-en dans le ramen vers la moitié pour une nouvelle dimension de saveur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accompagnements */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥟 Accompagnements Signature</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Hitouchi Gyoza (5pcs)</td>
                        <td className="p-3">Gyoza signature aux légumes, croustillants et juteux</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ippudo Fried Rice</td>
                        <td className="p-3">Riz sauté style Ippudo avec chashu</td>
                        <td className="p-3">¥850</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Spicy Cod Roe Rice</td>
                        <td className="p-3">Riz aux œufs de cabillaud épicés</td>
                        <td className="p-3">¥450</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Condiments et assaisonnements */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Award className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Condiments et Assaisonnements</h2>
              </div>
              
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden h-64 md:h-96 mb-4">
                  <img 
                    src="/images/chaines/ippudo/condiments-station.jpg" 
                    alt="Station de condiments Ippudo avec 5 assaisonnements"
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ippudo propose une sélection soignée de condiments pour personnaliser votre ramen selon vos goûts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">� Pour les Gyoza</h3>
                  <ul className="text-orange-700 text-sm space-y-2">
                    <li>
                      <strong>Shoyu (醤油)</strong><br/>
                      <span className="text-xs">Sauce soja spécialement pour tremper les hitouchi gyoza</span>
                    </li>
                    <li>
                      <strong>Su (酢)</strong><br/>
                      <span className="text-xs">Vinaigre de riz pour les gyoza, acidité parfaite pour la pâte</span>
                    </li>
                  </ul>
                  <div className="mt-2 p-2 bg-orange-100 rounded text-xs text-orange-800">
                    <strong>💡 Usage :</strong> Mélangez shoyu + vinaigre pour une sauce gyoza parfaite
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">� Pour le Ramen</h3>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>
                      <strong>Goma (胡麻)</strong><br/>
                      <span className="text-xs">Graines de sésame à moudre fraîchement dans le ramen</span>
                    </li>
                    <li>
                      <strong>Ramen Pepper (ラーメン専用ペッパー)</strong><br/>
                      <span className="text-xs">Poivre spécialement mélangé pour ramen, complexité aromatique</span>
                    </li>
                  </ul>
                  <div className="mt-2 p-2 bg-red-100 rounded text-xs text-red-800">
                    <strong>⚡ Astuce :</strong> Écrasez le goma juste avant de l'ajouter pour libérer les huiles
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">🍜 Concentré de saveurs</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>
                      <strong>Ramen Dashi (ラーメンダシ)</strong><br/>
                      <span className="text-xs">Concentré de bouillon, pour intensifier l'umami et la profondeur</span>
                    </li>
                  </ul>
                  <div className="mt-3 p-2 bg-green-100 rounded text-xs text-green-800">
                    <strong>💡 Astuce :</strong> Le dashi concentré permet d'ajuster l'intensité du goût sans diluer le bouillon.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-3">💡 Guide d'utilisation des condiments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">🥟 Pour les Gyoza</h4>
                    <ul className="text-yellow-600 space-y-1">
                      <li>• Mélangez <strong>shoyu + vinaigre</strong> (ratio 2:1)</li>
                      <li>• Trempez délicatement chaque gyoza</li>
                      <li>• L'acidité du vinaigre coupe la richesse de la pâte</li>
                      <li>• Parfait équilibre salé-acide</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">🍜 Pour le Ramen</h4>
                    <ul className="text-yellow-600 space-y-1">
                      <li>• <strong>Goma :</strong> Écrasez fraîchement avec la cuillère</li>
                      <li>• <strong>Ramen dashi :</strong> Ajoutez en fin de repas</li>
                      <li>• <strong>Pepper :</strong> Une pincée pour l'arôme</li>
                      <li>• Mélangez délicatement pour préserver la texture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Art du tonkotsu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">L'Art du Tonkotsu Ippudo</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🔥 Le processus de 18 heures</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Le bouillon tonkotsu d'Ippudo nécessite une cuisson continue de 18 heures à haute température
                  </p>
                  <ol className="text-orange-700 text-sm space-y-1">
                    <li><strong>1.</strong> Sélection d'os de porc de Kyushu, riches en collagène</li>
                    <li><strong>2.</strong> Blanchiment initial pour retirer les impuretés</li>
                    <li><strong>3.</strong> Cuisson à ébullition forte pendant 18h non-stop</li>
                    <li><strong>4.</strong> Émulsion parfaite créant la texture crémeuse signature</li>
                    <li><strong>5.</strong> Filtrage minutieux pour une consistance veloutée</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌟 Caractéristiques uniques</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Couleur blanc laiteux caractéristique</li>
                      <li>• Richesse sans lourdeur excessive</li>
                      <li>• Équilibre umami-gras parfait</li>
                      <li>• Arrière-goût clean et satisfaisant</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Innovations Ippudo</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Contrôle précis de la température</li>
                      <li>• Techniques de fonte du collagène optimisées</li>
                      <li>• Mélange d'os de différentes parties du porc</li>
                      <li>• Standardisation pour qualité constante</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Système de commande et branding */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Système de Commande et Identité Visuelle</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Logo et branding */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">🏮 Logo et Identité Ippudo</h3>
                  <div className="rounded-lg overflow-hidden h-80 mb-4">
                    <img 
                      src="/images/chaines/ippudo/ippudo-logo.jpg" 
                      alt="Logo officiel Ippudo avec caractère japonais"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Signification du logo</h4>
                      <p className="text-red-700 text-sm">
                        Le caractère <strong>「一」(ichi)</strong> symbolise l'unicité et l'excellence. 
                        Il représente la quête de perfection d'Ippudo dans l'art du ramen.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-medium text-orange-800 mb-2">Design moderne</h4>
                      <p className="text-orange-700 text-sm">
                        Typographie épurée alliant tradition japonaise et esthétique contemporaine, 
                        reflétant la philosophie de modernisation respectueuse d'Ippudo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Système de commande */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">📱 Tablette de Commande Numérique</h3>
                  <div className="rounded-lg overflow-hidden h-80 mb-4">
                    <img 
                      src="/images/chaines/ippudo/tablet-ordering.jpg" 
                      alt="Tablette de commande tactile multilingue Ippudo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Interface multilingue</h4>
                      <p className="text-blue-700 text-sm">
                        Tablettes tactiles disponibles en japonais, anglais et parfois français 
                        dans les restaurants touristiques. Interface intuitive avec photos détaillées.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Personnalisation avancée</h4>
                      <p className="text-green-700 text-sm">
                        Système de customisation complet : fermeté des nouilles, richesse du bouillon, 
                        toppings individuels, accompagnements. Paiement intégré possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">🎯 Expérience de commande pas à pas</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <div className="font-medium text-purple-700">Sélection</div>
                    <div className="text-purple-600">Choisir le ramen de base sur la tablette</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <div className="font-medium text-purple-700">Customisation</div>
                    <div className="text-purple-600">Ajuster nouilles, bouillon, toppings</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div className="font-medium text-purple-700">Accompagnements</div>
                    <div className="text-purple-600">Ajouter gyoza, riz parfumé, boissons</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">4</span>
                    </div>
                    <div className="font-medium text-purple-700">Confirmation</div>
                    <div className="text-purple-600">Valider et effectuer le paiement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Commander chez Ippudo</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📋 Système de commande</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Ippudo utilise un système de commande au comptoir avec customisation avancée
                  </p>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Choisissez votre ramen de base (Shiromaru, Akamaru, etc.)</li>
                    <li><strong>2.</strong> Sélectionnez la fermeté des nouilles (katamen, futsu, yawaramen)</li>
                    <li><strong>3.</strong> Ajustez la richesse du bouillon (assari à kotteri)</li>
                    <li><strong>4.</strong> Ajoutez vos toppings préférés</li>
                    <li><strong>5.</strong> Commandez vos accompagnements</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍜 Personnalisation des nouilles</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Katamen</strong> - Fermes (recommandé débutants)</li>
                      <li>• <strong>Futsu</strong> - Normal (standard japonais)</li>
                      <li>• <strong>Yawaramen</strong> - Tendres (pour les habitués)</li>
                      <li>• <strong>Kaedama</strong> - Portion supplémentaire ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥢 Étiquette Ippudo</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Mélangez bien avant de déguster</li>
                      <li>• Aspirez les nouilles avec bruit (normal)</li>
                      <li>• Buvez le bouillon directement au bol</li>
                      <li>• Commandez rapidement (respect des autres)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience culturelle */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">L'Expérience Ippudo</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-600 mb-3">🎌 Ambiance japonaise moderne</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Design contemporain</strong> - Mélange de tradition et modernité</li>
                    <li><strong>Comptoir ouvert</strong> - Spectacle de la préparation en direct</li>
                    <li><strong>Musique soignée</strong> - Ambiance décontractée mais raffinée</li>
                    <li><strong>Service "omotenashi"</strong> - Hospitalité japonaise authentique</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-3">🌟 Ce qui rend Ippudo unique</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Qualité constante</strong> - Standards élevés dans tous les restaurants</li>
                    <li><strong>Innovation continue</strong> - Nouveaux ramens saisonniers</li>
                    <li><strong>Formation rigoureuse</strong> - Chefs formés selon les standards Ippudo</li>
                    <li><strong>Philosophie d'entreprise</strong> - "Créer des sourires à travers les ramens"</li>
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
                    <div className="text-sm text-gray-600">11h00 - 23h00 (général)</div>
                    <div className="text-sm text-gray-500">Peut varier selon localisation</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">80+ restaurants au Japon</div>
                    <div className="text-sm text-gray-500">Centres-villes, quartiers branchés</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Cartes acceptées</div>
                    <div className="text-sm text-gray-500">Espèces, IC cards, PayPay</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 par personne</div>
                    <div className="text-sm text-gray-500">Segment premium</div>
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
                  <div className="font-medium text-red-700">Première visite</div>
                  <div className="text-red-600">Commencez par le Shiromaru Motoaji, le classique d'Ippudo</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">File d'attente</div>
                  <div className="text-red-600">Évitez 12h-14h et 19h-21h, populaire auprès des touristes</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Customisation</div>
                  <div className="text-red-600">N'hésitez pas à personnaliser, c'est encouragé chez Ippudo</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Expérience complète</div>
                  <div className="text-red-600">Commandez des gyoza, ils font partie de l'expérience</div>
                </div>
              </div>
            </div>

            {/* Comparaison */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📊 Vs autres ramen-ya
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Vs Ichiran</div>
                  <div className="text-yellow-600">Plus social, moins d'intimité mais plus d'ambiance</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Positionnement</div>
                  <div className="text-yellow-600">Haut de gamme, expérience premium du ramen</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Innovation</div>
                  <div className="text-yellow-600">Précurseur des tendances ramen modernes</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-blue-700">
                Ippudo représente l'évolution moderne du ramen traditionnel. En élevant ce plat populaire 
                au niveau d'une expérience culinaire raffinée, la chaîne a contribué à faire du ramen 
                un phénomène gastronomique mondial, tout en respectant ses racines japonaises profondes.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.ippudo.com/" 
                   className="block text-red-600 hover:text-red-700 text-sm">
                  → Site officiel Ippudo
                </a>
                <a href="/type-plat/ramen" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet ramen
                </a>
                <a href="/chaines/ichiran" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Ichiran
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
