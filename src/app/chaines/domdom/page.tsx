import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown, ChefHat, DollarSign } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dom Dom Burger ドムドムバーガー | Premier Burger | Japonchaines",
  description: "Premier hamburger japonais (1970). Menus créatifs, burger crabe, renaissance icône.",
  keywords: [
    'dom dom burger', 'ドムドムバーガー', 'hamburger japonais', 'plus ancien',
    'domuzō-kun', 'どむぞうくん', 'phoenix', 'créations audacieuses',
    'hamburger historique', 'mascotte japonaise', 'renaissance', 'wabi-sabi',
    'fujisaki shinobu', 'premier burger japonais', 'daiei', 'omoiyari'
  ],
  openGraph: {
    title: "Dom Dom Burger ドムドムバーガー | Premier Burger | Japonchaines",
    description: "Premier hamburger japonais (1970). Menus créatifs, burger crabe, renaissance icône.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/domdom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function DomDomPage() {
  return (
    <>
      <ChainViewTracker chainName="domdom" chainCategory="burgers" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/chaines" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Chaînes
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dom Dom Burger</h1>
              <p className="text-lg text-gray-600">ドムドムバーガー</p>
              <p className="text-sm text-gray-500">Le Phénix du Burger Japonais - Une Légende Ressuscitée</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Histoire fascinante */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <History className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Une Histoire Extraordinaire</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Dom Dom Burger</strong> n'est pas un simple fast-food, c'est une légende vivante. 
                  Fondé en <strong>1970</strong>, un an avant McDonald's au Japon, Dom Dom est le 
                  <strong>tout premier hamburger japonais</strong> de l'histoire. Son nom vient du 
                  slogan de Daiei "どんどん安く" (dondon yasuku - "de plus en plus bon marché").
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-red-800 mb-2">🔥 L'Épopée du Phénix</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>1970</strong> - Naissance révolutionnaire : Premier burger japonais</li>
                    <li>• <strong>Années 80-90</strong> - Apogée : Près de 400 restaurants au Japon</li>
                    <li>• <strong>2000s</strong> - Déclin : Réduit à seulement 27 restaurants</li>
                    <li>• <strong>2017</strong> - Renaissance : Rachat et nouvelle vision</li>
                    <li>• <strong>2018-2025</strong> - Résurrection miraculeuse sous Fujisaki Shinobu</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">📱 La Révolution Sociale</h3>
                <p className="mb-4">
                  Sous la direction visionnaire de la présidente Fujisaki Shinobu (藤﨑忍), Dom Dom a 
                  accompli l'impossible : transformer une marque quasi-éteinte en phénomène viral. 
                  Grâce à des menus audacieux et une stratégie sociale brillante, la chaîne a reconquis 
                  le cœur des Japonais et des médias internationaux.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎯 L'Esprit "Wabi-Sabi"</h3>
                <p className="mb-4">
                  Dom Dom incarne l'esthétique japonaise du "wabi-sabi" - la beauté dans l'imperfection 
                  et l'éphémère. Contrairement aux chaînes globales standardisées, Dom Dom célèbre 
                  l'authenticité, l'innovation audacieuse et la connexion émotionnelle avec ses fans.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">👑 La Philosophie "Omoiyari"</h4>
                  <p className="text-yellow-700 text-sm">
                    La présidente Fujisaki applique le concept japonais d'"omoiyari" (思いやり - empathie/bienveillance) 
                    dans sa gestion. Cette approche humaniste privilégie le bonheur des clients et employés 
                    avant les profits, créant une culture d'entreprise unique dans l'industrie du fast-food.
                  </p>
                </div>
              </div>
            </div>

            {/* Menus créatifs révolutionnaires */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menus Révolutionnaires</h2>
              </div>

              {/* Burgers signature classiques */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍔 Classiques Intemporels</h3>
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
                        <td className="p-3 font-medium">Burger Poulet "Amakara"</td>
                        <td className="p-3">甘辛チキンバーガー</td>
                        <td className="p-3">Le N°1 depuis 20 ans, sauce sucrée-salée unique</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Omelette Épaisse "Atsuyaki"</td>
                        <td className="p-3">手作り厚焼きたまごバーガー</td>
                        <td className="p-3">Omelette artisanale épaisse, spécialité créée par la présidente</td>
                        <td className="p-3">¥450</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Dom Dom Classic</td>
                        <td className="p-3">ドムドムクラシック</td>
                        <td className="p-3">Le burger originel, recette authentique de 1970</td>
                        <td className="p-3">¥400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Burgers fous - éditions limitées */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🦀 Burgers "Fous" Légendaires</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-orange-800 text-sm font-medium mb-2">
                    🔥 Ces créations audacieuses ont fait sensation sur les réseaux sociaux et dans les médias internationaux !
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Création</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Burger au Crabe Entier</td>
                        <td className="p-3">丸ごと!!カニバーガー</td>
                        <td className="p-3">Crabe mou entier frit, sensation virale mondiale</td>
                        <td className="p-3 text-red-600">¥980 - Légendaire</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Burger Okonomiyaki</td>
                        <td className="p-3">お好み焼きバーガー</td>
                        <td className="p-3">Galette japonaise avec sauce, mayo, gingembre</td>
                        <td className="p-3 text-yellow-600">¥680 - Édition limitée</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Burger Katsudon</td>
                        <td className="p-3">かつ丼バーガー</td>
                        <td className="p-3">Recréation du plat de riz en version burger</td>
                        <td className="p-3 text-yellow-600">¥750 - Saisonnier</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Burger Shungiku Kakiage</td>
                        <td className="p-3">春菊かき揚げバーガー</td>
                        <td className="p-3">Beignet de chrysanthème comestible, innovation végétale</td>
                        <td className="p-3 text-green-600">¥620 - Comeback</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ika Devil Burger</td>
                        <td className="p-3">イカデビルバーガー</td>
                        <td className="p-3">Calamar frit dans pain noir, look dramatique</td>
                        <td className="p-3 text-purple-600">¥780 - Spécial</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Philosophie culinaire */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🎨 Philosophie "Sōzai Pan"</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Innovation Culturelle</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Fusion créative</strong> - Plats japonais transformés en burgers</li>
                      <li>• <strong>Esprit "B-kyū gourmet"</strong> - Gastronomie populaire authentique</li>
                      <li>• <strong>Made-to-viral</strong> - Créations conçues pour l'interaction sociale</li>
                      <li>• <strong>Wabi-sabi</strong> - Beauté dans l'imperfection assumée</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Héritage Culturel</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Culture "Sōzai pan"</strong> - Tradition des pains-repas japonais</li>
                      <li>• <strong>Édition limitée</strong> - Concept d'éphémère japonais</li>
                      <li>• <strong>Interaction fans</strong> - Co-création avec la communauté</li>
                      <li>• <strong>Storytelling</strong> - Chaque burger raconte une histoire</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Domuzō-kun et culture */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Domuzō-kun (どむぞうくん) - Plus qu'une Mascotte</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-2">🐘 L'Éléphant Bien-aimé</h3>
                  <p className="text-pink-700 text-sm mb-3">
                    Depuis 1970, Domuzō-kun l'éléphant accompagne Dom Dom dans toutes ses aventures. 
                    Témoin silencieux de l'âge d'or, du déclin et de la renaissance, il incarne 
                    la résilience et l'optimisme du Japon.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎭 Symbolisme</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Éléphant</strong> - Force, mémoire, bienveillance</li>
                      <li>• <strong>Cercle rouge</strong> - Connexion, communauté, chaleur</li>
                      <li>• <strong>Évolution design</strong> - Adapté mais jamais abandonné</li>
                      <li>• <strong>Nostalgie</strong> - Lien avec l'enfance et les souvenirs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🛍️ Culture des Fans</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Peluches collector</strong> - Sold-out systématique</li>
                      <li>• <strong>Collaborations mode</strong> - BEAMS, FRAPBOIS</li>
                      <li>• <strong>Art toys</strong> - Figurines édition limitée</li>
                      <li>• <strong>Community "Dom-ren"</strong> - Fans dévoués</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Glossaire Dom Dom */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Glossaire Dom Dom : Les Mots-Clés</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Domuzō-kun (どむぞうくん)</h4>
                  <p className="text-sm text-gray-700">
                    Mascotte éléphant de Dom Dom depuis 1970. Symbole de parenté, d'amour 
                    et de croissance. Témoin de toute l'histoire épique de la marque.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Sōzai Pan (惣菜パン)</h4>
                  <p className="text-sm text-gray-700">
                    Catégorie japonaise unique de pains salés contenant des plats complets. 
                    Inspire la philosophie créative de Dom Dom pour transformer les plats 
                    traditionnels en burgers.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">B-kyū Gourmet (B級グルメ)</h4>
                  <p className="text-sm text-gray-700">
                    Cuisine populaire japonaise - pas chère mais délicieuse et profondément 
                    aimée du peuple. Dom Dom incarne parfaitement cet esprit authentique.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Omoiyari (思いやり)</h4>
                  <p className="text-sm text-gray-700">
                    Philosophie de management de Fujisaki Shinobu : empathie, considération 
                    et bienveillance envers clients et employés avant tout.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Wabi-Sabi (わびさび)</h4>
                  <p className="text-sm text-gray-700">
                    Esthétique japonaise trouvant la beauté dans l'imperfection et l'éphémère. 
                    Dom Dom incarne cette philosophie face aux standards globaux parfaits.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide de commande */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Commander</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🗣️ Expérience Authentique</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Dom Dom privilégie l'interaction humaine. Le service au comptoir permet 
                    d'échanger avec le personnel et de découvrir les spécialités du moment.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📋 Étapes de commande</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li><strong>1.</strong> Observez le menu illustré au-dessus du comptoir</li>
                      <li><strong>2.</strong> Demandez les spécialités du jour</li>
                      <li><strong>3.</strong> Choisissez burger seul ou set menu</li>
                      <li><strong>4.</strong> Sélectionnez accompagnements et boisson</li>
                      <li><strong>5.</strong> Payez et attendez l'appel de votre numéro</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💡 Conseils d'initié</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Demandez s'il y a des éditions limitées</li>
                      <li>• Photographiez votre burger pour les réseaux</li>
                      <li>• Goûtez les accompagnements spéciaux</li>
                      <li>• Achetez des produits dérivés Domuzō-kun</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🎌 Immersion Culturelle</h4>
                  <p className="text-sm text-green-700">
                    Manger chez Dom Dom, c'est participer à un moment de l'histoire japonaise. 
                    Chaque visite contribue à maintenir vivante cette légende du fast-food nippon 
                    et à soutenir une entreprise qui incarne les valeurs japonaises d'innovation 
                    et de persévérance.
                  </p>
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
                    <div className="text-sm text-gray-500">Varie selon les emplacements</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">50+ restaurants en résurrection</div>
                    <div className="text-sm text-gray-500">Principalement région Kantō</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Cartes, espèces, IC cards</div>
                    <div className="text-sm text-gray-500">QR codes acceptés</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥600-900 par personne</div>
                    <div className="text-sm text-gray-500">Abordable et authentique</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Légende vivante */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">
                🔥 Légende Vivante
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-red-700">Première historique</div>
                  <div className="text-red-600">Le tout premier burger japonais (1970)</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Résurrection</div>
                  <div className="text-red-600">De 27 à 50+ restaurants en 6 ans</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Innovation</div>
                  <div className="text-red-600">Burgers viraux et créativité japonaise</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Culture</div>
                  <div className="text-red-600">Incarnation de l'esprit "wabi-sabi"</div>
                </div>
              </div>
            </div>

            {/* Fujisaki Shinobu */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                👑 Fujisaki Shinobu
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-purple-700">Parcours atypique</div>
                  <div className="text-purple-600">De mère au foyer à PDG visionnaire</div>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Philosophy "Omoiyari"</div>
                  <div className="text-purple-600">Gestion par l'empathie et la bienveillance</div>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Innovation</div>
                  <div className="text-purple-600">Créatrice du burger œuf épais légendaire</div>
                </div>
              </div>
            </div>

            {/* Contexte historique */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📚 Contexte Historique
              </h3>
              <p className="text-sm text-yellow-700">
                Dom Dom Burger n'est pas qu'un restaurant, c'est un symbole de l'adaptation 
                et de la résilience japonaises. Né de la rivalité entre Daiei et McDonald's, 
                il représente la capacité du Japon à créer ses propres versions des concepts occidentaux, 
                puis à les réinventer de manière unique et authentique.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.domdom.jp/" 
                   className="block text-red-600 hover:text-red-700 text-sm">
                  → Site officiel Dom Dom Burger
                </a>
                <a href="/type-plat/burgers" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet burgers japonais
                </a>
                <a href="/chaines/mos-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec MOS Burger
                </a>
                <a href="/chaines/freshness-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Freshness Burger
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
