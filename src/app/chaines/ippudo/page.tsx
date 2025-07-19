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
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">一</span>
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
                      <tr>
                        <td className="p-3 font-medium">Kakuni Bun</td>
                        <td className="p-3">Brioche vapeur au porc braisé</td>
                        <td className="p-3">¥580</td>
                      </tr>
                    </tbody>
                  </table>
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
