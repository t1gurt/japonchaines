import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Flame, Heart, Crown, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tenkaippin 天下一品 | Ramen Kotteri | Japonchaines",
  description: "Bouillon kotteri ultra-riche Kyoto. Expérience unique et intense, jamais oubliée.",
  keywords: [
    'tenkaippin', '天下一品', 'ramen kotteri', 'bouillon crémeux',
    'ramen kyoto', 'ramen traditionnel', 'kotteri ramen',
    'bouillon riche', 'ramen authentique', 'spécialité kyoto'
  ],
  openGraph: {
    title: "Tenkaippin 天下一品 | Ramen Kotteri | Japonchaines",
    description: "Bouillon kotteri ultra-riche Kyoto. Expérience unique et intense, jamais oubliée.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/tenkaippin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function TenkaippinPage() {
  return (
    <>
      <ChainViewTracker chainName="tenkaippin" chainCategory="ramen" />
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
            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">天</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tenkaippin</h1>
              <p className="text-lg text-gray-600">天下一品 | てんかいっぴん</p>
              <p className="text-sm text-gray-500">Le ramen "kotteri" le plus riche et crémeux du Japon</p>
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
                  <strong>Tenkaippin (天下一品)</strong> est la chaîne de ramen la plus emblématique du style 
                  "kotteri" (ultra-riche) au Japon. Fondée en 1971 à Kyoto, cette chaîne familiale a bâti 
                  sa réputation sur un bouillon d'une richesse extraordinaire qui divise : on adore ou on 
                  déteste, mais personne ne reste indifférent à cette expérience culinaire unique.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">🏆 Le roi du "kotteri"</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>Bouillon ultra-riche</strong> - Concentration maximale de collagène et graisse</li>
                    <li>• <strong>Texture unique</strong> - Presque solide, recouvre les nouilles comme une sauce</li>
                    <li>• <strong>Recette secrète</strong> - Processus de cuisson gardé jalousement depuis 50 ans</li>
                    <li>• <strong>Clientèle passionnée</strong> - Fans absolus appelés "Ten-chan addicts"</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Une expérience polarisante</h3>
                <p className="mb-4">
                  Tenkaippin n'est pas un ramen pour tout le monde. Son bouillon d'une richesse extrême 
                  est si particulier qu'il créé deux camps distincts : ceux qui en deviennent complètement 
                  addicts et y retournent plusieurs fois par semaine, et ceux qui ne peuvent pas finir 
                  leur bol. Cette polarisation fait partie de l'identité de la marque.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏮 Origines à Kyoto</h3>
                <p className="mb-4">
                  Née dans l'ancienne capitale impériale, Tenkaippin a développé son style unique en 
                  s'inspirant des techniques culinaires traditionnelles de Kyoto tout en créant quelque 
                  chose de révolutionnaire. Le premier restaurant, minuscule, ne comptait que 9 places 
                  assises mais attiraient déjà les files d'attente.
                </p>

                <h3 className="text-xl font-semibold mb-3">💪 Résistance au changement</h3>
                <p className="mb-4">
                  Contrairement à d'autres chaînes qui adaptent leurs recettes aux goûts modernes, 
                  Tenkaippin reste fidèle à sa recette originale depuis plus de 50 ans. Cette cohérence 
                  absolue fait partie de son charme et explique la loyauté exceptionnelle de sa clientèle.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Détaillé</h2>
              </div>

              {/* Choix fondamental */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">⚖️ Le choix crucial : Kotteri vs Assari</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-medium text-yellow-700 mb-2">🔥 KOTTERI (こってり)</div>
                      <div className="text-sm text-yellow-600">Le fameux bouillon ultra-riche signature de Tenkaippin. Épais, crémeux, recouvre entièrement les nouilles. Expérience intense et unique.</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-medium text-blue-700 mb-2">💧 ASSARI (あっさり)</div>
                      <div className="text-sm text-blue-600">Version plus légère du bouillon, mais toujours plus riche que la moyenne. Pour ceux qui trouvent le kotteri trop intense.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ramen principaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍜 Ramen Principaux</h3>
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
                        <td className="p-3 font-medium">Ramen Kotteri</td>
                        <td className="p-3">ラーメン（こってり）</td>
                        <td className="p-3">Le légendaire ramen ultra-riche signature</td>
                        <td className="p-3">¥770</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ramen Assari</td>
                        <td className="p-3">ラーメン（あっさり）</td>
                        <td className="p-3">Version plus légère mais toujours savoureuse</td>
                        <td className="p-3">¥770</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chashu-men Kotteri</td>
                        <td className="p-3">チャーシュー麺（こってり）</td>
                        <td className="p-3">Kotteri avec portions généreuses de porc braisé</td>
                        <td className="p-3">¥1,100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Menma Ramen</td>
                        <td className="p-3">メンマラーメン</td>
                        <td className="p-3">Avec pousses de bambou fermentées croustillantes</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Negi Ramen</td>
                        <td className="p-3">ネギラーメン</td>
                        <td className="p-3">Avec généreuse portion d'oignons nouveaux</td>
                        <td className="p-3">¥880</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Options de personnalisation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🎛️ Personnalisation Tenkaippin</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Toppings classiques</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Chashu supplémentaire</strong> - ¥350 (porc fondant)</li>
                      <li>• <strong>Œuf mollet Ajitsuke</strong> - ¥120 (mariné 24h)</li>
                      <li>• <strong>Menma premium</strong> - ¥150 (bambou fermenté)</li>
                      <li>• <strong>Negi blanc</strong> - ¥100 (oignons nouveaux)</li>
                      <li>• <strong>Nori</strong> - ¥100 (algue grillée)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Options spéciales</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Extra kotteri</strong> - ¥100 (encore plus riche)</li>
                      <li>• <strong>Moyashi</strong> - ¥80 (germes de soja croquants)</li>
                      <li>• <strong>Ail râpé</strong> - ¥80 (intensité supplémentaire)</li>
                      <li>• <strong>Kaedama</strong> - ¥130 (nouilles supplémentaires)</li>
                      <li>• <strong>Poivre noir</strong> - Gratuit (parfume le bouillon)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accompagnements */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥟 Accompagnements Populaires</h3>
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
                        <td className="p-3 font-medium">Gyoza (5 pièces)</td>
                        <td className="p-3">Raviolis porc-légumes croustillants</td>
                        <td className="p-3">¥280</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaage</td>
                        <td className="p-3">Poulet frit japonais, tender et juteux</td>
                        <td className="p-3">¥400</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Riz blanc</td>
                        <td className="p-3">Pour absorber le bouillon riche</td>
                        <td className="p-3">¥120</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kimchi</td>
                        <td className="p-3">Chou fermenté épicé, coupe la richesse</td>
                        <td className="p-3">¥200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Le secret du kotteri */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Le Secret du Bouillon Kotteri</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">🔥 Processus de concentration extrême</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    Le bouillon kotteri de Tenkaippin subit un processus de cuisson et concentration unique
                  </p>
                  <ol className="text-amber-700 text-sm space-y-1">
                    <li><strong>1.</strong> Cuisson initiale des os de porc et poulet pendant 24h</li>
                    <li><strong>2.</strong> Concentration par évaporation contrôlée</li>
                    <li><strong>3.</strong> Ajout de légumes mijotés séparément</li>
                    <li><strong>4.</strong> Mixage pour créer l'émulsion ultra-épaisse</li>
                    <li><strong>5.</strong> Maturation finale pendant plusieurs heures</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌟 Caractéristiques uniques</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Texture presque solide à température ambiante</li>
                      <li>• Couleur blanc cassé opaque</li>
                      <li>• Adhère complètement aux nouilles</li>
                      <li>• Goût umami extrêmement concentré</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚗️ Composition mystérieuse</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Base os de porc et poulet</li>
                      <li>• Mélange secret de légumes</li>
                      <li>• Concentration de collagène maximale</li>
                      <li>• Techniques de réduction propriétaires</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide de dégustation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Comment Apprécier le Kotteri</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">🍜 Technique de dégustation optimale</h3>
                  <p className="text-red-700 text-sm mb-3">
                    Le kotteri nécessite une approche spécifique pour être pleinement apprécié
                  </p>
                  <ol className="text-red-700 text-sm space-y-1">
                    <li><strong>1.</strong> Ne PAS mélanger immédiatement le bouillon</li>
                    <li><strong>2.</strong> Prenez d'abord une gorgée de bouillon pur</li>
                    <li><strong>3.</strong> Laissez la richesse enrober votre palais</li>
                    <li><strong>4.</strong> Ensuite seulement, mélangez et mangez les nouilles</li>
                    <li><strong>5.</strong> Alternez entre nouilles et bouillon</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">✅ Conseils pour débutants</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Commencez par un demi-bol si vous hésitez</li>
                      <li>• Commandez du riz pour "couper" la richesse</li>
                      <li>• Buvez du thé vert entre les gorgées</li>
                      <li>• Prenez votre temps, ce n'est pas un fast-food</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🚫 Erreurs à éviter</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ne pas forcer si vous n'aimez pas</li>
                      <li>• Éviter de manger trop vite</li>
                      <li>• Ne pas commander d'alcool avec</li>
                      <li>• Ne pas s'attendre à un ramen "normal"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Tenkaippin */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">La Culture "Ten-chan"</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-yellow-600 mb-3">👥 Community passionnée</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Fans absolus</strong> - Surnommés "Ten-chan addicts"</li>
                    <li><strong>Rituels personnels</strong> - Chacun sa façon de déguster</li>
                    <li><strong>Fréquence élevée</strong> - Certains viennent quotidiennement</li>
                    <li><strong>Transmission</strong> - Parents qui initient leurs enfants</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-600 mb-3">🎌 Identité forte</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Refus du compromis</strong> - Pas d'adaptation aux modes</li>
                    <li><strong>Ambiance nostalgique</strong> - Décor inchangé depuis des décennies</li>
                    <li><strong>Service familial</strong> - Ambiance décontractée et chaleureuse</li>
                    <li><strong>Authenticité totale</strong> - 100% japonais, 100% traditionnel</li>
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
                    <div className="text-sm text-gray-600">11h30 - 02h00 (général)</div>
                    <div className="text-sm text-gray-500">Souvent ouvert très tard</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">250+ restaurants</div>
                    <div className="text-sm text-gray-500">Surtout dans le Kansai</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Principalement espèces</div>
                    <div className="text-sm text-gray-500">Quelques cartes acceptées</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix moyen</div>
                    <div className="text-sm text-gray-600">¥800-1,200 par personne</div>
                    <div className="text-sm text-gray-500">Excellent rapport qualité-prix</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Test de compatibilité */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                🧪 Test de Compatibilité
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Vous aimez les plats riches ?</div>
                  <div className="text-yellow-600">Fromages, crèmes, sauces généreuses = probable compatibilité</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Vous cherchez du léger ?</div>
                  <div className="text-yellow-600">Tenkaippin n'est définitivement PAS pour vous</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Première fois ?</div>
                  <div className="text-yellow-600">Commandez assari ou partagez un kotteri à deux</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Estomac sensible ?</div>
                  <div className="text-yellow-600">Évitez absolument, c'est très lourd à digérer</div>
                </div>
              </div>
            </div>

            {/* Comparaison */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Vs autres ramen
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Ippudo</div>
                  <div className="text-orange-600">Opposé total : traditionnel vs moderne, lourd vs équilibré</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Vs Ichiran</div>
                  <div className="text-orange-600">Plus social mais bouillon incomparablement plus riche</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Positionnement unique</div>
                  <div className="text-orange-600">Expérience extrême, pas de compromis</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-green-700">
                Tenkaippin représente l'âme traditionnelle du ramen japonais : pas de concession aux 
                modes, fidélité absolue à la recette originale, et création d'une communauté passionnée. 
                C'est l'antithèse de la mondialisation culinaire, une expérience 100% japonaise et 
                authentique qui ne cherche pas à plaire à tout le monde.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.tenkaippin.co.jp/" 
                   className="block text-yellow-600 hover:text-yellow-700 text-sm">
                  → Site officiel Tenkaippin
                </a>
                <a href="/type-plat/ramen" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet ramen
                </a>
                <a href="/chaines/ippudo" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Ippudo
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
