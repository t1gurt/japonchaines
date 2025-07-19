import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Leaf } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ganso Aburado 元祖油堂 | Abura Soba Sain | Japonchaines',
  description: 'Abura soba innovant : nouilles hybrides, concept santé, thé oolong gratuit.',
  keywords: [
    'ganso aburado', '元祖油堂', 'abura soba', '油そば',
    'nouilles hybrides', 'innovation moderne', 'thé santé',
    'design moderne', 'nouilles pasta', 'concept sain'
  ],
  openGraph: {
    title: 'Ganso Aburado : L\'Abura Soba Sain et Innovant | Japonchaines',
    description: 'Découvrez Ganso Aburado et ses nouilles hybrides uniques (blé et pâtes). Un concept d\'abura soba moderne et sain.',
    type: 'article',
    url: '/chaines/ganso-aburado',
  },
  alternates: {
    canonical: '/chaines/ganso-aburado',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GansoAburadoPage() {
  return (
    <>
      <ChainViewTracker chainName="ganso-aburado" chainCategory="aburasoba" />
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
              <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">堂</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ganso Aburado</h1>
                <p className="text-lg text-gray-600">元祖油堂 | がんそあぶらどう</p>
                <p className="text-sm text-gray-500">L'innovation moderne de l'abura soba</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Avant-Garde de l&apos;Abura Soba</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ganso Aburado représente <strong>l'évolution moderne de l'abura soba</strong>, 
                    fondée en 2012 avec une mission révolutionnaire : réinventer les nouilles sans bouillon 
                    pour l'ère contemporaine. Pionnier de <strong>l'innovation nutritionnelle</strong>, 
                    cette chaîne combine tradition culinaire et conscience santé.
                  </p>
                  <p className="text-gray-700">
                    Avec ses <strong>nouilles hybrides uniques</strong> (mélange de farine de blé et de pâtes), 
                    son <strong>design intérieur moderne</strong> et son concept de <strong>thé santé gratuit</strong>, 
                    Ganso Aburado attire une clientèle urbaine soucieuse de bien-être et d'innovation culinaire.
                  </p>
                </div>
              </div>

              {/* Histoire et innovation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Révolution Nutritionnelle</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Genèse */}
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2012 : Vision Wellness</h3>
                    <p className="text-gray-700">
                      Ganso Aburado naît d'une constatation simple : <strong>pourquoi l'abura soba ne 
                      pourrait-il pas être encore plus sain ?</strong> Les fondateurs développent un 
                      concept révolutionnaire alliant plaisir culinaire et bien-être nutritionnel.
                    </p>
                  </div>

                  {/* Innovation nouilles */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Révolution des Nouilles Hybrides</h3>
                    <p className="text-gray-700">
                      L'innovation phare : <strong>des nouilles uniques mélangeant farine de blé traditionnel 
                      et farine de pâtes durum</strong>. Cette combinaison créé une texture inédite, 
                      plus ferme et nutritive, avec un goût subtil rappelant les meilleures pâtes italiennes.
                    </p>
                  </div>

                  {/* Concept santé */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Écosystème Santé Intégré</h3>
                    <p className="text-gray-700">
                      Au-delà des nouilles, Ganso Aburado développe un <strong>écosystème complet de bien-être</strong> : 
                      thé oolong noir gratuit (riche en antioxydants), design zen apaisant, et portions 
                      optimisées pour l'équilibre nutritionnel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu signature */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu Innovation</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Abura Soba Signature */}
                  <div className="border border-indigo-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Abura Soba Signature</h3>
                        <p className="text-gray-600 japanese-text">元祖油そば</p>
                      </div>
                      <span className="text-2xl font-bold text-indigo-600">¥880</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      L'abura soba réinventé avec les nouilles hybrides exclusives. Texture unique mi-asiatique 
                      mi-italienne, tare équilibré moins salé, huile de qualité supérieure et légumes frais 
                      pour une expérience gustative moderne.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Portions :</strong>並盛/大盛/特大盛 (même prix)</div>
                      <div><strong>Innovation :</strong> Nouilles hybrides uniques</div>
                      <div><strong>Santé :</strong> Moins de sodium, plus de fibres</div>
                      <div><strong>Bonus :</strong> Thé oolong noir gratuit</div>
                    </div>
                  </div>

                  {/* Options wellness */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Leaf className="w-4 h-4 text-green-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Option Végétarienne</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">ベジタブル油そば - ¥880</p>
                      <p className="text-gray-700 text-sm">
                        Version sans produits animaux avec tare végan et légumes biologiques variés.
                      </p>
                    </div>
                    
                    <div className="border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Thé Santé Premium</h4>
                      <p className="text-gray-600 text-sm mb-2">黒烏龍茶 - Gratuit !</p>
                      <p className="text-gray-700 text-sm">
                        Thé oolong noir riche en polyphénols, aide à la digestion et métabolisme des graisses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expérience unique */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">L&apos;Expérience Ganso Aburado</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-indigo-800 mb-2">🏮 Ambiance Moderne</h3>
                    <p className="text-gray-700 text-sm">
                      Design intérieur contemporain avec éclairage chaleureux, musique lounge discrète, 
                      et une atmosphère qui invite à la détente. Un contraste saisissant avec les 
                      abura soba traditionnels.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-indigo-800 mb-2">🍵 Rituel du Thé</h3>
                    <p className="text-gray-700 text-sm">
                      Chaque repas commence par le service du <strong>thé oolong noir chaud gratuit</strong>, 
                      préparant le palais et favorisant la digestion. Un geste d'hospitalité qui transforme 
                      le fast-food en moment zen.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-indigo-800 mb-2">🍜 Technique Hybride</h3>
                    <p className="text-gray-700 text-sm">
                      Les nouilles hybrides nécessitent une technique de mélange légèrement différente : 
                      <strong>mouvements plus délicats</strong> pour préserver leur texture unique 
                      et révéler toute la complexité de leur saveur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspect santé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Philosophie Wellness</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Avantages Nutritionnels</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Fibres enrichies :</strong> Nouilles hybrides plus riches en fibres</li>
                      <li>• <strong>Sodium réduit :</strong> Tare moins salé, goût préservé</li>
                      <li>• <strong>Antioxydants :</strong> Thé oolong noir aux polyphénols</li>
                      <li>• <strong>Digestion :</strong> Ingrédients sélectionnés pour la digestibilité</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Impact Environnemental</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Sourcing responsable :</strong> Ingrédients locaux privilégiés</li>
                      <li>• <strong>Emballages eco :</strong> Matériaux recyclables</li>
                      <li>• <strong>Gaspillage réduit :</strong> Portions optimisées</li>
                      <li>• <strong>Énergie :</strong> Équipements basse consommation</li>
                    </ul>
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
                      <p className="text-sm text-gray-600">11h00 - 22h30 (varie selon magasin)</p>
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
                      <p className="text-sm text-gray-600">Tokyo, Osaka, centres urbains</p>
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
                    <span className="text-sm text-gray-700">Nouilles hybrides innovantes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Thé santé gratuit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Design moderne apaisant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Options végétariennes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Approche wellness intégrée</span>
                  </div>
                </div>
              </div>

              {/* Conseils voyage */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">💡 Conseils Voyage</h3>
                <div className="space-y-3 text-sm text-blue-700">
                  <p><strong>Première fois :</strong> Goûtez les nouilles seules d'abord pour apprécier la texture unique.</p>
                  <p><strong>Thé inclus :</strong> Profitez du thé oolong gratuit - c'est un vrai plus santé !</p>
                  <p><strong>Ambiance :</strong> Parfait pour un repas détendu, moins "rush" que les chaînes traditionnelles.</p>
                  <p><strong>Végétariens :</strong> Options végan disponibles - rare dans l'abura soba !</p>
                </div>
              </div>

              {/* Comparaison */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-4">🔄 VS Tokyo Abura-gumi</h3>
                <div className="space-y-3 text-sm text-amber-700">
                  <p><strong>Style :</strong> Moderne & santé vs Traditionnel & authentique</p>
                  <p><strong>Nouilles :</strong> Hybrides innovantes vs Blé traditionnel</p>
                  <p><strong>Ambiance :</strong> Design zen vs Fonctionnel classique</p>
                  <p><strong>Public :</strong> Urbains health-conscious vs Puristes tradition</p>
                </div>
              </div>

              {/* Localisation Tokyo */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Magasins Tokyo Recommandés</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Akasaka</h4>
                    <p className="text-sm text-gray-600">赤坂店</p>
                    <p className="text-xs text-gray-500">1 min depuis station Akasaka</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Tamachi</h4>
                    <p className="text-sm text-gray-600">田町店</p>
                    <p className="text-xs text-gray-500">1 min depuis station Tamachi</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Kamiyacho</h4>
                    <p className="text-sm text-gray-600">神谷町店</p>
                    <p className="text-xs text-gray-500">2 min depuis station Kamiyacho</p>
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
                href="/chaines/tokyo-abura-gumi"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Tokyo Abura-gumi →
              </Link>
              <Link 
                href="/type-plat/aburasoba"
                className="border-2 border-indigo-500 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all"
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
