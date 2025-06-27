import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Echo (ビッグエコー) | Karaoke | Guide Restaurants Japonais',
  description: 'Guide complet de Big Echo - Chaîne de karaoke populaire avec équipements modernes et ambiance conviviale. Karaoke authentique japonais.',
  keywords: [
    'big echo', 'ビッグエコー', 'karaoke', 'chant japonais',
    'équipements modernes', 'ambiance conviviale', 'karaoke populaire',
    'divertissement japonais', 'salles privées', 'karaoke box'
  ],
  openGraph: {
    title: 'Big Echo (ビッグエコー) | Karaoke Populaire',
    description: 'Découvrez Big Echo, chaîne de karaoke populaire avec équipements modernes et ambiance conviviale',
    type: 'article',
    url: '/chaines/big-echo',
  },
  alternates: {
    canonical: '/chaines/big-echo',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BigEchoPage() {
  return (
    <>
      <ChainViewTracker chainName="big-echo" chainCategory="karaoke" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/karaoke" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Karaokés
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Big Echo</h1>
                <p className="text-gray-600">ビッグエコー</p>
                <div className="flex items-center mt-2">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Karaoke
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos de Big Echo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Big Echo (ビッグエコー) est l'une des chaînes de karaoke les plus populaires et reconnaissables du Japon, 
                  avec plus de 400 établissements à travers le pays. Fondée dans les années 1990, la chaîne s'est 
                  imposée comme un leader dans l'industrie du divertissement musical japonais.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Reconnaissable à son logo coloré et ses façades lumineuses, Big Echo offre une expérience karaoke 
                  moderne et accessible. La chaîne se distingue par ses équipements de pointe, incluant des systèmes 
                  audio de haute qualité, des écrans haute définition et une vaste bibliothèque musicale constamment mise à jour.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Big Echo cible principalement les groupes d'amis, les familles et les collègues de travail, 
                  proposant des salles de différentes tailles pour s'adapter à tous les besoins. L'ambiance décontractée 
                  et le service efficace en font un choix privilégié pour le divertissement après le travail ou durant 
                  les week-ends.
                </p>
              </div>

              {/* Histoire et évolution */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <History className="w-5 h-5 inline mr-2 text-purple-600" />
                  Histoire et Évolution
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-medium text-gray-900">Années 1990 - Création</h4>
                    <p className="text-gray-700 text-sm">
                      Big Echo naît durant l'âge d'or du karaoke au Japon, surfant sur la popularité croissante 
                      de ce divertissement devenu phénomène culturel.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-medium text-gray-900">Années 2000 - Expansion</h4>
                    <p className="text-gray-700 text-sm">
                      Expansion rapide dans les grandes villes japonaises, introduction de nouvelles technologies 
                      et amélioration constante de l'expérience client.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-medium text-gray-900">Années 2010-2020 - Modernisation</h4>
                    <p className="text-gray-700 text-sm">
                      Digitalisation complète des services, introduction de nouvelles fonctionnalités comme 
                      l'enregistrement de performances et les systèmes de réservation en ligne.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services et équipements */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Award className="w-5 h-5 inline mr-2 text-purple-600" />
                  Services et Équipements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🎵 Système Audio</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Système audio professionnel avec égaliseur</li>
                      <li>• Microphones sans fil de qualité</li>
                      <li>• Effets vocaux et harmonisation</li>
                      <li>• Contrôle du volume individuel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">📱 Technologies</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Écrans tactiles haute résolution</li>
                      <li>• Catalogue de plus de 300,000 chansons</li>
                      <li>• Application mobile pour réservation</li>
                      <li>• Système de notation et classement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🏠 Salles</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Salles de 2 à 20 personnes</li>
                      <li>• Climatisation et éclairage d'ambiance</li>
                      <li>• Sièges confortables et tables spacieuses</li>
                      <li>• Salles thématiques dans certains établissements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🍽️ Restauration</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Menu de plats légers et snacks</li>
                      <li>• Large sélection de boissons</li>
                      <li>• Forfaits boissons à volonté</li>
                      <li>• Service en salle rapide</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Menu et prix détaillés */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <CreditCard className="w-5 h-5 inline mr-2 text-purple-600" />
                  Tarification et Forfaits
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">💰 Tarifs de Base (par personne)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">30 minutes</span>
                        <span className="font-medium text-purple-600">¥400-600</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">1 heure</span>
                        <span className="font-medium text-purple-600">¥800-1,200</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">2 heures</span>
                        <span className="font-medium text-purple-600">¥1,400-2,000</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Forfait 3h</span>
                        <span className="font-medium text-purple-600">¥1,800-2,500</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🕐 Créneaux Avantageux</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Matinée (11h-14h)</span>
                        <span className="font-medium text-green-600">-30%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Lundi-Jeudi</span>
                        <span className="font-medium text-green-600">-20%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Happy Hour (14h-18h)</span>
                        <span className="font-medium text-green-600">-25%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Étudiants</span>
                        <span className="font-medium text-green-600">-15%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">🍻 Forfaits Boissons</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Soft Drink Bar</span>
                      <div className="text-purple-700">¥200-300/h</div>
                    </div>
                    <div>
                      <span className="font-medium">Nomihoudai Standard</span>
                      <div className="text-purple-700">¥400-600/h</div>
                    </div>
                    <div>
                      <span className="font-medium">Nomihoudai Premium</span>
                      <div className="text-purple-700">¥800-1,200/h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expérience client */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Star className="w-5 h-5 inline mr-2 text-purple-600" />
                  L'Expérience Big Echo
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🎤 Atmosphère et Ambiance</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Big Echo cultive une atmosphère détendue et énergique. Les établissements sont généralement 
                      colorés et lumineux, créant une ambiance festive dès l'entrée. L'éclairage d'ambiance dans 
                      les salles peut être ajusté selon les préférences, passant d'un éclairage tamisé romantique 
                      à un éclairage de discothèque pour les groupes plus animés.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">👥 Public et Occasions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Groupes d'Amis</h5>
                        <p className="text-gray-600 text-xs">Soirées entre amis, célébrations, sorties de groupe</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Collègues</h5>
                        <p className="text-gray-600 text-xs">Nomikai (sorties d'entreprise), team building</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Familles</h5>
                        <p className="text-gray-600 text-xs">Sorties familiales, anniversaires, week-ends</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Couples</h5>
                        <p className="text-gray-600 text-xs">Rendez-vous, anniversaires, soirées romantiques</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">📋 Guide d'Utilisation</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Accueil et Réservation</p>
                          <p className="text-gray-600 text-xs">Précisez le nombre de personnes, la durée souhaitée et le type de salle. Le personnel vous proposera les options disponibles.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Installation en Salle</p>
                          <p className="text-gray-600 text-xs">Le personnel vous accompagne à votre salle et explique le fonctionnement des équipements et du système de commande.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Sélection et Chant</p>
                          <p className="text-gray-600 text-xs">Utilisez l'écran tactile pour rechercher vos chansons. Système de recherche par artiste, titre, genre ou popularité.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Commandes et Service</p>
                          <p className="text-gray-600 text-xs">Commandez boissons et nourriture via l'écran tactile ou le téléphone de la salle. Livraison rapide en salle.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations pratiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-purple-600" />
                  Informations Pratiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🕒 Horaires</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Lun-Jeu: 11h00-2h00</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Ven-Sam: 11h00-5h00</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Dimanche: 11h00-24h00</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💳 Moyens de Paiement</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Espèces (recommandé)</div>
                      <div>• Cartes de crédit principales</div>
                      <div>• IC Cards (Suica, Pasmo)</div>
                      <div>• Paiements mobiles (PayPay, Line Pay)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📍 Localisation</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Centres-villes principaux</div>
                      <div>• Quartiers de divertissement</div>
                      <div>• Près des gares importantes</div>
                      <div>• Centres commerciaux</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">ℹ️ À Savoir</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Réservation recommandée le soir</div>
                      <div>• Minimum 2 personnes généralement</div>
                      <div>• Politique non-fumeur dans la plupart des établissements</div>
                      <div>• Wi-Fi gratuit disponible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Points forts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">✨ Points Forts</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Large Réseau</p>
                      <p className="text-xs text-gray-600">Plus de 400 établissements au Japon</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Technologie Avancée</p>
                      <p className="text-xs text-gray-600">Systèmes audio et vidéo dernière génération</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Catalogue Musical</p>
                      <p className="text-xs text-gray-600">Plus de 300,000 chansons disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Accessibilité</p>
                      <p className="text-xs text-gray-600">Prix abordables et promotions fréquentes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services détaillés */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Music className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Karaoke box privé</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Gamepad2 className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Équipements modernes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Salles de 2 à 20 personnes</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Utensils className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Service de restauration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Heart className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Forfaits boissons à volonté</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Système de notation</span>
                  </div>
                </div>
              </div>

              {/* Statistiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 En Chiffres</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">400+</div>
                    <div className="text-xs text-gray-600">Établissements</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">300K+</div>
                    <div className="text-xs text-gray-600">Chansons disponibles</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">30+</div>
                    <div className="text-xs text-gray-600">Années d'expérience</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24h</div>
                    <div className="text-xs text-gray-600">Ouvert en continu (certains)</div>
                  </div>
                </div>
              </div>

              {/* Conseils pratiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Conseils</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium">🕐 Meilleure période</p>
                    <p className="text-green-700 text-xs">Matinée et début d'après-midi pour les meilleurs prix</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium">🎫 Réservations</p>
                    <p className="text-blue-700 text-xs">Réservez à l'avance le week-end et en soirée</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 font-medium">💰 Économies</p>
                    <p className="text-yellow-700 text-xs">Profitez des forfaits boissons pour optimiser le budget</p>
                  </div>
                </div>
              </div>

              {/* Catégorie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏷️ Catégorie</h3>
                <Link 
                  href="/type-plat/karaoke"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  <Music className="w-4 h-4 mr-2" />
                  Karaoke
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
                <div className="mt-3 text-xs text-gray-500">
                  Découvrez d'autres chaînes de karaoke populaires au Japon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}