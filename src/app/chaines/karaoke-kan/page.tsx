import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karaoke Kan (カラオケ館) | Karaoke | Guide Restaurants Japonais',
  description: 'Guide complet de Karaoke Kan - Chaîne de karaoke avec salles privées et équipements de qualité. Expérience karaoke authentique japonaise.',
  keywords: [
    'karaoke kan', 'カラオケ館', 'karaoke', 'salles privées',
    'équipements qualité', 'expérience authentique', 'chant japonais',
    'divertissement', 'karaoke box', 'ambiance conviviale'
  ],
  openGraph: {
    title: 'Karaoke Kan (カラオケ館) | Karaoke de Qualité',
    description: 'Découvrez Karaoke Kan, chaîne de karaoke avec salles privées et équipements de qualité',
    type: 'article',
    url: '/chaines/karaoke-kan',
  },
  alternates: {
    canonical: '/chaines/karaoke-kan',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KaraokeKanPage() {
  return (
    <>
      <ChainViewTracker chainName="karaoke-kan" chainCategory="karaoke" />
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
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Karaoke Kan</h1>
                <p className="text-gray-600">カラオケ館</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos de Karaoke Kan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Karaoke Kan (カラオケ館) est une chaîne de karaoke haut de gamme reconnue pour la qualité 
                  exceptionnelle de ses équipements et son service irréprochable. Avec plus de 200 établissements 
                  répartis dans tout le Japon, Karaoke Kan s'est imposé comme une référence dans l'industrie du 
                  divertissement musical japonais.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La chaîne se distingue par son approche premium, offrant des salles spacieuses et élégamment 
                  décorées, équipées des systèmes audio et vidéo les plus avancés du marché. Karaoke Kan vise 
                  une clientèle exigeante recherchant une expérience karaoke raffinée et mémorable.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Fondée avec la philosophie de transformer chaque session de karaoke en moment exceptionnel, 
                  Karaoke Kan continue d'innover en proposant des services personnalisés et des technologies 
                  de pointe pour satisfaire les attentes les plus élevées.
                </p>
              </div>

              {/* Histoire et philosophie */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <History className="w-5 h-5 inline mr-2 text-blue-600" />
                  Histoire et Philosophie
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">Années 1990 - Naissance du Concept Premium</h4>
                    <p className="text-gray-700 text-sm">
                      Karaoke Kan naît de la volonté de créer une expérience karaoke haut de gamme, 
                      se différenciant par la qualité de service et l'élégance des installations.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">Années 2000 - Innovation Technologique</h4>
                    <p className="text-gray-700 text-sm">
                      Pionnière dans l'adoption de nouvelles technologies, Karaoke Kan investit massivement 
                      dans des équipements audio professionnels et des systèmes d'interface avancés.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">Années 2010-2020 - Expansion et Raffinement</h4>
                    <p className="text-gray-700 text-sm">
                      Expansion stratégique dans les quartiers premium des grandes villes, avec un focus 
                      sur l'amélioration continue de l'expérience client et du design des espaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services premium */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Award className="w-5 h-5 inline mr-2 text-blue-600" />
                  Services Premium
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🎵 Système Audio Premium</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Système audio professionnel haute fidélité</li>
                      <li>• Microphones sans fil premium avec réduction de bruit</li>
                      <li>• Égaliseur professionnel 32 bandes</li>
                      <li>• Effets vocaux avancés et harmonisation intelligente</li>
                      <li>• Système de retour personnalisé</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">📺 Technologie Vidéo</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Écrans 4K ultra haute définition</li>
                      <li>• Interface tactile intuitive et réactive</li>
                      <li>• Système de recherche intelligent</li>
                      <li>• Enregistrement vidéo haute qualité</li>
                      <li>• Partage social intégré</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🏠 Espaces de Qualité</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Salles spacieuses design contemporain</li>
                      <li>• Isolation acoustique professionnelle</li>
                      <li>• Mobilier haut de gamme et ergonomique</li>
                      <li>• Éclairage d'ambiance personnalisable</li>
                      <li>• Climatisation individuelle optimisée</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🍽️ Service Gastronomique</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Menu gastronomique élaboré</li>
                      <li>• Sélection de boissons premium</li>
                      <li>• Service en salle discret et efficace</li>
                      <li>• Options végétariennes et diététiques</li>
                      <li>• Présentation soignée des plats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tarification premium */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <CreditCard className="w-5 h-5 inline mr-2 text-blue-600" />
                  Tarification Premium
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">💎 Tarifs Standard (par personne)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">30 minutes</span>
                        <span className="font-medium text-blue-600">¥500-750</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">1 heure</span>
                        <span className="font-medium text-blue-600">¥900-1,400</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">2 heures</span>
                        <span className="font-medium text-blue-600">¥1,600-2,400</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Forfait 3h Premium</span>
                        <span className="font-medium text-blue-600">¥2,200-3,200</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">⭐ Offres Avantageuses</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Matinée Premium (9h-13h)</span>
                        <span className="font-medium text-green-600">-25%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Lundi-Mercredi</span>
                        <span className="font-medium text-green-600">-20%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Membres fidélité</span>
                        <span className="font-medium text-green-600">-15%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Forfait anniversaire</span>
                        <span className="font-medium text-green-600">-30%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">🥂 Forfaits Boissons Premium</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Premium Soft Bar</span>
                      <div className="text-blue-700">¥400-500/h</div>
                    </div>
                    <div>
                      <span className="font-medium">Nomihoudai Deluxe</span>
                      <div className="text-blue-700">¥800-1,200/h</div>
                    </div>
                    <div>
                      <span className="font-medium">VIP Selection</span>
                      <div className="text-blue-700">¥1,500-2,200/h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expérience premium */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Star className="w-5 h-5 inline mr-2 text-blue-600" />
                  L'Expérience Karaoke Kan
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">✨ Atmosphère Raffinée</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Karaoke Kan cultive une atmosphère sophistiquée et élégante. Les établissements arborent 
                      un design contemporain avec des matériaux de qualité, créant un environnement à la fois 
                      luxueux et confortable. L'éclairage soigneusement étudié et la décoration raffinée 
                      transforment chaque session en expérience mémorable.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🎯 Clientèle et Occasions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Professionnels</h5>
                        <p className="text-gray-600 text-xs">Réceptions d'entreprise, événements corporatifs</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Célébrations</h5>
                        <p className="text-gray-600 text-xs">Anniversaires, fiançailles, réussites</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Groupes VIP</h5>
                        <p className="text-gray-600 text-xs">Soirées privées, événements exclusifs</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Rencontres</h5>
                        <p className="text-gray-600 text-xs">Rendez-vous romantiques, sorties intimes</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🔧 Services Personnalisés</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Accueil VIP</p>
                          <p className="text-gray-600 text-xs">Accueil personnalisé avec présentation des services premium et accompagnement dédié.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Configuration Personnalisée</p>
                          <p className="text-gray-600 text-xs">Réglage professionnel de l'audio selon vos préférences vocales et musicales.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Catalogue Expert</p>
                          <p className="text-gray-600 text-xs">Accès à un catalogue étendu avec recommandations personnalisées et nouveautés.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Service Concierge</p>
                          <p className="text-gray-600 text-xs">Service attentionné avec commandes privilégiées et assistance continue.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informations pratiques détaillées */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-blue-600" />
                  Informations Pratiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🕒 Horaires d'Ouverture</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Lun-Jeu: 12h00-2h00</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Ven-Sam: 12h00-5h00</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Dimanche: 12h00-24h00</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Matinées spéciales: 9h00-13h00</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💳 Paiements Acceptés</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Cartes de crédit internationales</div>
                      <div>• Cartes de débit japonaises</div>
                      <div>• IC Cards (Suica, Pasmo, etc.)</div>
                      <div>• Paiements mobiles (PayPay, Line Pay, Apple Pay)</div>
                      <div>• Espèces (avec monnaie exacte)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📍 Emplacements Premium</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Quartiers d'affaires centraux</div>
                      <div>• Districts de divertissement haut de gamme</div>
                      <div>• Centres commerciaux luxury</div>
                      <div>• Zones touristiques premium</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚠️ Informations Importantes</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Réservation fortement recommandée</div>
                      <div>• Politique stricte non-fumeur</div>
                      <div>• Code vestimentaire décontracté chic</div>
                      <div>• Wi-Fi haut débit gratuit</div>
                      <div>• Parking privilégié disponible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Points forts premium */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💎 Excellence Premium</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Qualité Audio Exceptionnelle</p>
                      <p className="text-xs text-gray-600">Systèmes professionnels haute fidélité</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Service Personnalisé</p>
                      <p className="text-xs text-gray-600">Accompagnement dédié et assistance continue</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Design Raffiné</p>
                      <p className="text-xs text-gray-600">Espaces contemporains et élégants</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Expérience Haut de Gamme</p>
                      <p className="text-xs text-gray-600">Chaque détail pensé pour votre plaisir</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services premium détaillés */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌟 Services Premium</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Music className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Karaoke haute qualité</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Gamepad2 className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Équipements professionnels</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Salles premium spacieuses</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Utensils className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Menu gastronomique</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Heart className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Service concierge</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Expérience personnalisée</span>
                  </div>
                </div>
              </div>

              {/* Statistiques premium */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Excellence en Chiffres</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-xs text-gray-600">Établissements premium</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">350K+</div>
                    <div className="text-xs text-gray-600">Titres de qualité</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-600">Satisfaction client</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">VIP</div>
                    <div className="text-xs text-gray-600">Expérience garantie</div>
                  </div>
                </div>
              </div>

              {/* Programme fidélité */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎫 Programme Fidélité</h3>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 font-medium text-sm">🥉 Membre Bronze</p>
                    <p className="text-yellow-700 text-xs">5% de réduction après 3 visites</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-800 font-medium text-sm">🥈 Membre Argent</p>
                    <p className="text-gray-700 text-xs">10% + priorité réservation</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-yellow-900 font-medium text-sm">🥇 Membre Or</p>
                    <p className="text-yellow-800 text-xs">15% + accès salles VIP</p>
                  </div>
                </div>
              </div>

              {/* Conseils premium */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Conseils d'Expert</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium">📞 Réservation VIP</p>
                    <p className="text-blue-700 text-xs">Réservez 24h à l'avance pour les meilleures salles</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-medium">🎵 Sessions Matinales</p>
                    <p className="text-purple-700 text-xs">Profitez du calme et des tarifs avantageux</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium">🍾 Occasions Spéciales</p>
                    <p className="text-green-700 text-xs">Forfaits célébration avec extras inclus</p>
                  </div>
                </div>
              </div>

              {/* Catégorie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏷️ Catégorie</h3>
                <Link 
                  href="/type-plat/karaoke"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Music className="w-4 h-4 mr-2" />
                  Karaoke Premium
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
                <div className="mt-3 text-xs text-gray-500">
                  Explorez l'univers du karaoke japonais et ses différentes chaînes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}