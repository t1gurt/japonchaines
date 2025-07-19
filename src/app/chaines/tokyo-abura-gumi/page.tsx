import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tokyo Abura-gumi 東京油組 | Abura Soba Classique | Japonchaines',
  description: 'Spécialiste abura soba classique. Nouilles qualité, tare secret, prix unique toutes tailles.',
  keywords: [
    'tokyo abura-gumi', '東京油組総本店', 'abura soba', '油そば',
    'nouilles sans bouillon', 'tare secret', 'style classique',
    'mélange interactif', 'oimeshi', 'nouilles tokyo'
  ],
  openGraph: {
    title: 'Tokyo Abura-gumi : L\'Abura Soba Traditionnel | Japonchaines',
    description: 'Découvrez Tokyo Abura-gumi, le spécialiste de l\'abura soba classique. Nouilles de qualité, tare secret et prix unique pour toutes les tailles.',
    type: 'article',
    url: '/chaines/tokyo-abura-gumi',
  },
  alternates: {
    canonical: '/chaines/tokyo-abura-gumi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TokyoAburaGumiPage() {
  return (
    <>
      <ChainViewTracker chainName="tokyo-abura-gumi" chainCategory="aburasoba" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/aburasoba" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Abura Soba
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">油</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tokyo Abura-gumi Sōhonten</h1>
                <p className="text-lg text-gray-600">東京油組総本店 | とうきょうあぶらぐみそうほんてん</p>
                <p className="text-sm text-gray-500">Le pionnier de l'abura soba traditionnel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Présentation générale */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;École Classique de l&apos;Abura Soba</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tokyo Abura-gumi Sōhonten est <strong>LA référence en matière d'abura soba traditionnel</strong>, 
                    perpétuant depuis 2009 l'art authentique des nouilles sans bouillon de Tokyo. 
                    Cette chaîne incarne la <strong>philosophie puriste de l'abura soba</strong> : 
                    des ingrédients de qualité supérieure dans leur expression la plus simple et raffinée.
                  </p>
                  <p className="text-gray-700">
                    Avec son <strong>concept "vous êtes le chef"</strong>, Tokyo Abura-gumi transforme 
                    chaque repas en expérience interactive où le client devient l'artisan de son propre 
                    chef-d'œuvre culinaire, mélangeant tare secret, huile parfumée et condiments selon 
                    ses préférences.
                  </p>
                </div>
              </div>

              {/* Histoire et philosophie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">L&apos;Héritage de Tokyo</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Origines */}
                  <div className="border-l-4 border-amber-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2009 : Mission Tradition</h3>
                    <p className="text-gray-700">
                      Tokyo Abura-gumi naît avec une mission claire : <strong>préserver et propager 
                      l'authentique tradition de l'abura soba tokyoïte</strong> née dans les années 1950. 
                      Contrairement aux variations modernes, la chaîne reste fidèle au style originel 
                      des quartiers universitaires de Tokyo.
                    </p>
                  </div>

                  {/* Philosophie qualité */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Philosophie du "Meilleur Ingrédient"</h3>
                    <p className="text-gray-700">
                      Chaque élément est choisi avec un soin méticuleux : <strong>nouilles spécialement 
                      développées</strong> pour la texture mochi-mochi idéale, <strong>tare secret</strong> 
                      préparé avec le jus de cuisson du chashu, et <strong>huile de sésame premium</strong> 
                      pour une expérience gustative incomparable.
                    </p>
                  </div>

                  {/* Innovation service */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Révolution du Prix Unique</h3>
                    <p className="text-gray-700">
                      Innovation remarquable : <strong>toutes les tailles au même prix (¥880)</strong>. 
                      Cette approche révolutionnaire permet aux clients de choisir leur portion selon 
                      leur appétit sans contrainte financière, incarnant l'esprit généreux de la culture étudiante.
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu signature */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu Signature</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Abura Soba Classic */}
                  <div className="border border-amber-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Abura Soba Classique</h3>
                        <p className="text-gray-600 japanese-text">油そば</p>
                      </div>
                      <span className="text-2xl font-bold text-amber-600">¥880</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      L'abura soba authentique dans sa forme la plus pure. Nouilles épaisses mochi-mochi, 
                      tare secret au fond du bol, huile de sésame parfumée, chashu tranché fin, 
                      menma croquant et nori parfumé.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Portions :</strong>並盛/大盛/W盛 (même prix)</div>
                      <div><strong>Préparation :</strong> Vous mélangez vous-même</div>
                      <div><strong>Condiments :</strong> Vinaigre + huile pimentée</div>
                      <div><strong>Philosophie :</strong> Pureté des saveurs</div>
                    </div>
                  </div>

                  {/* Options populaires */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-orange-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">+ Œuf Mariné</h4>
                      <p className="text-gray-600 text-sm mb-2">味玉 (Ajitsuke Tamago) - ¥100</p>
                      <p className="text-gray-700 text-sm">
                        Œuf mollet mariné dans une sauce soja sucrée, ajoute une richesse crémeuse au plat.
                      </p>
                    </div>
                    
                    <div className="border border-green-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Oimeshi (Riz final)</h4>
                      <p className="text-gray-600 text-sm mb-2">追い飯 - ¥100</p>
                      <p className="text-gray-700 text-sm">
                        Riz blanc à mélanger avec les restes de sauce pour un "deuxième plat" savoureux.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide de dégustation */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">L&apos;Art du Mélange Parfait</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-2">🥄 Étape 1 : Préparation</h3>
                    <p className="text-gray-700 text-sm">
                      Votre bol arrive avec le tare caché au fond. Ajoutez <strong>2 tours de vinaigre</strong> 
                      et <strong>2 tours d'huile pimentée</strong> (3 tours pour les grandes portions) 
                      directement sur les nouilles chaudes.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-2">🥢 Étape 2 : Mélange</h3>
                    <p className="text-gray-700 text-sm">
                      Mélangez <strong>énergiquement et rapidement</strong> pour faire remonter le tare 
                      du fond et créer une émulsion parfaite. Plus vous mélangez, meilleur c'est !
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-2">🍜 Étape 3 : Dégustation</h3>
                    <p className="text-gray-700 text-sm">
                      Dégustez immédiatement pendant que c'est chaud. <strong>Aspirez bruyamment</strong> 
                      - c'est non seulement accepté mais encouragé ! La température optimale révèle tous les arômes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar avec infos pratiques */}
            <div className="space-y-6">
              {/* Informations essentielles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informations Pratiques</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Horaires typiques</h4>
                      <p className="text-sm text-gray-600">11h00 - 23h00 (varie selon magasin)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Prix moyen</h4>
                      <p className="text-sm text-gray-600">¥880-1080 (toutes tailles)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Présence</h4>
                      <p className="text-sm text-gray-600">Tokyo, Osaka, zones urbaines</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Points forts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Points Forts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Style traditionnel authentique</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Prix unique toutes tailles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Nouilles haute qualité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Instructions mélange claires</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Expérience interactive</span>
                  </div>
                </div>
              </div>

              {/* Conseils voyage */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">💡 Conseils Voyage</h3>
                <div className="space-y-3 text-sm text-green-700">
                  <p><strong>Pour débutants :</strong> Commencez par la portion normale pour découvrir les saveurs.</p>
                  <p><strong>Personnalisation :</strong> Ajoutez progressivement les condiments selon vos goûts.</p>
                  <p><strong>Oimeshi :</strong> Ne manquez pas l'expérience du riz final - c'est unique !</p>
                  <p><strong>Timing :</strong> Évitez les heures de pointe (12h-13h, 19h-20h) pour plus de tranquillité.</p>
                </div>
              </div>

              {/* Localisation Tokyo */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Magasins Tokyo Recommandés</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Akasaka Mitsuke</h4>
                    <p className="text-sm text-gray-600">赤坂見附店</p>
                    <p className="text-xs text-gray-500">1 min depuis station Akasaka-mitsuke</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Shimbashi</h4>
                    <p className="text-sm text-gray-600">新橋店</p>
                    <p className="text-xs text-gray-500">3 min depuis station Shimbashi</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Hiroo</h4>
                    <p className="text-sm text-gray-600">広尾店</p>
                    <p className="text-xs text-gray-500">2 min depuis station Hiroo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation vers autres chaînes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Découvrir d&apos;autres chaînes d&apos;Abura Soba</h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/chaines/ganso-aburado"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all"
              >
                Ganso Aburado →
              </Link>
              <Link 
                href="/type-plat/aburasoba"
                className="border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all"
              >
                Guide Complet Abura Soba
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
