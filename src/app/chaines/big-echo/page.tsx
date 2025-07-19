import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Big Echo | Karaoke N°1 Japon | Japonchaines",
  description: "Plus grande chaîne karaoke. Guide DAM, réservation, prix pour une soirée réussie.",
  keywords: [
    'big echo', 'ビッグエコー', 'karaoke japonais', 'daiichikosho',
    'denmoku guide', 'système dam', 'nomihoudai', 'hitokara', 
    'karaoke box culture', 'guide francophone', 'étiquette karaoke',
    'rōmaji rubi', 'prix karaoke japon', 'chansons françaises japon'
  ],
  openGraph: {
    title: "Big Echo | Karaoke N°1 Japon | Japonchaines",
    description: "Plus grande chaîne karaoke. Guide DAM, réservation, prix pour une soirée réussie.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
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
              {/* Description principale */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Le Karaoke Japonais : Une Culture Unique</h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">🎵 Qu'est-ce que le Karaoke Japonais ?</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Contrairement au karaoke occidental où l'on chante devant un public, le karaoke japonais se pratique 
                    dans des <strong>"karaoke box"</strong> - des salles privées insonorisées où vous pouvez chanter librement 
                    avec vos amis sans craindre le regard des autres.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    L'essence du karaoke japonais : <em>"Peu importe si vous chantez bien ou mal, personne ne vous juge !"</em> 
                    L'accent est mis sur le plaisir partagé et la participation, non sur la performance.
                  </p>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Big Echo : Le Leader du Karaoke au Japon</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Big Echo (ビッグエコー)</strong> est la plus grande chaîne de karaoke du Japon avec plus de 400 établissements 
                  répartis dans tout le pays. Exploitée par Daiichikosho, cette chaîne garantit une qualité et une expérience 
                  standardisées dans tous ses établissements.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🎤 Le Système LIVE DAM : La Technologie Premium</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Big Echo utilise le système <strong>"DAM"</strong>, considéré comme le choix premium sur le marché japonais. 
                    Avantages clés : qualité audio exceptionnelle, nombreuses vidéos officielles d'artistes (本人映像), 
                    et les derniers modèles (LIVE DAM Ai) incluent des commandes vocales et un système de notation haute précision.
                  </p>
                </div>
              </div>

              {/* Guide pour la première visite */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Users className="w-5 h-5 inline mr-2 text-purple-600" />
                  Votre Première Visite Chez Big Echo : Guide Complet
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      📝 1. À la Réception (Uketsuke - 受付)
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        La réception est votre premier point de contact. Cherchez les panneaux 
                        <strong> "フロント" ou "受付"</strong>. Le personnel vous posera quelques questions essentielles.
                      </p>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">💳 Adhésion OBLIGATOIRE et Recommandée</h4>
                        <div className="space-y-2">
                          <p className="text-green-800 text-sm">
                            <strong>Important :</strong> L'inscription comme membre est généralement <em>obligatoire</em> 
                            lors de la première visite. Une pièce d'identité (passeport) sera demandée.
                          </p>
                          <p className="text-green-800 text-sm">
                            <strong>Avantage :</strong> L'inscription est gratuite ou très bon marché, et les réductions 
                            membre s'appliquent <em>immédiatement</em> ! Il n'y a aucune raison de refuser.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">👥 Nombre de Personnes</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>1 personne :</strong> 一人でお願いします</div>
                            <div><em>Hitori de onegaishimasu</em></div>
                            <div><strong>2 personnes :</strong> 二人でお願いします</div>
                            <div><em>Futari de onegaishimasu</em></div>
                            <div><strong>3 personnes :</strong> 三人でお願いします</div>
                            <div><em>San-nin de onegaishimasu</em></div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">⏰ Durée Souhaitée</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>1 heure :</strong> 一時間お願いします</div>
                            <div><em>Ichi-jikan onegaishimasu</em></div>
                            <div><strong>2 heures :</strong> 二時間お願いします</div>
                            <div><em>Ni-jikan onegaishimasu</em></div>
                            <p className="text-purple-800 mt-2">
                              <strong>Minimum :</strong> 1 heure, facturation par tranches de 30 min
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">🎫 Ticket/Reçu Important</h4>
                        <p className="text-orange-800 text-sm">
                          Après avoir donné ces informations, vous recevrez un ticket avec votre numéro de salle, 
                          heure de début et de fin. <strong>Conservez-le précieusement !</strong> Il vous sera 
                          indispensable pour le paiement final.
                        </p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">🥤 Système "One Drink Order" - OBLIGATOIRE</h4>
                        <div className="space-y-2">
                          <p className="text-red-800 text-sm">
                            <strong>Règle essentielle :</strong> Chaque personne DOIT commander au minimum 1 boisson. 
                            Ce n'est pas optionnel, c'est une condition pour bénéficier du tarif affiché.
                          </p>
                          <p className="text-red-800 text-sm">
                            Cette boisson sera facturée <em>en plus</em> du prix de la salle. 
                            Budget supplémentaire à prévoir : ¥200-500 par personne minimum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      💰 2. Décryptage Complet des Prix et Promotions
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm">
                        Comprendre la structure tarifaire de Big Echo vous permettra d'optimiser votre budget 
                        et de profiter des meilleures offres disponibles.
                      </p>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Système de Facturation : Points Clés</h4>
                        <ul className="space-y-1 text-sm text-yellow-800">
                          <li>• <strong>Facturation :</strong> Par personne, par tranches de 30 minutes</li>
                          <li>• <strong>Durée minimum :</strong> 1 heure (2 tranches de 30 min)</li>
                          <li>• <strong>One Drink Order :</strong> +¥200-500 par personne obligatoire</li>
                          <li>• <strong>Tarifs variables :</strong> Selon jour, heure, statut membre</li>
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">📅 Heures Creuses vs Heures de Pointe</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <strong className="text-green-700">💚 AVANTAGEUX :</strong>
                              <div className="ml-2">
                                <div>• Lun-Jeu 11h-18h : ¥300-500/30min</div>
                                <div>• Matinées week-end : ¥400-600/30min</div>
                                <div>• Happy Hours : ¥350-550/30min</div>
                              </div>
                            </div>
                            <div>
                              <strong className="text-red-700">💸 COÛTEUX :</strong>
                              <div className="ml-2">
                                <div>• Ven-Sam soir : ¥800-1200/30min</div>
                                <div>• Dimanche soir : ¥600-900/30min</div>
                                <div>• Vacances/Fêtes : ¥700-1100/30min</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">🎫 Statut Client et Réductions</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Visiteur occasionnel :</span>
                              <span className="text-red-600">Prix plein</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Membre standard :</span>
                              <span className="text-green-600">-15 à -25%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Étudiant (学割) :</span>
                              <span className="text-blue-600">-20 à -30%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Senior (60+) :</span>
                              <span className="text-purple-600">-15 à -20%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🕐 Formules Spéciales : Free Time vs Hourly</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="font-medium text-blue-800">📊 Calcul Smart :</p>
                            <div className="text-sm text-blue-700 space-y-1">
                              <div>• 1h standard : ¥800-1200</div>
                              <div>• 2h standard : ¥1400-2000</div>
                              <div>• <strong>Free Time 3h : ¥1800-2500</strong></div>
                              <div className="text-green-700 font-medium">
                                → Free Time = Économique dès 2h30 !
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-blue-800">✅ Recommandations :</p>
                            <div className="text-sm text-blue-700 space-y-1">
                              <div>• Session courte (1-2h) : Hourly</div>
                              <div>• Session longue (2h30+) : Free Time</div>
                              <div>• Groupe festif : Free Time + Nomihoudai</div>
                              <div>• Premier essai : Hourly pour tester</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">💡 Exemple Concret : Groupe de 4 Personnes</h4>
                        <div className="space-y-2 text-sm">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <p className="font-medium text-green-800">Scenario Économique (Mercredi 15h) :</p>
                              <div className="text-green-700">
                                <div>• Free Time 3h membre : ¥2000 × 4 = ¥8000</div>
                                <div>• One Drink × 4 : ¥300 × 4 = ¥1200</div>
                                <div>• <strong>Total : ¥9200 (¥2300/pers)</strong></div>
                              </div>
                            </div>
                            <div>
                              <p className="font-medium text-red-800">Scenario Coûteux (Samedi 21h) :</p>
                              <div className="text-red-700">
                                <div>• 3h standard : ¥3600 × 4 = ¥14400</div>
                                <div>• One Drink × 4 : ¥400 × 4 = ¥1600</div>
                                <div>• <strong>Total : ¥16000 (¥4000/pers)</strong></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-green-800 font-medium text-center mt-2">
                            💰 Différence : ¥6800 - Choisir le bon moment peut diviser la facture par 2 !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      🎮 3. Maîtriser le Denmoku : Votre Centre de Contrôle
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">🌍 PREMIÈRE PRIORITÉ : Changer la Langue</h4>
                      <p className="text-blue-800 text-sm mb-2">
                        <strong>Action N°1 :</strong> Dès que vous entrez dans la salle, prenez le Denmoku (télécommande tactile) 
                        et cherchez l'icône globe 🌍 ou drapeau pour basculer en anglais, français ou autre langue disponible.
                      </p>
                      <p className="text-blue-800 text-sm">
                        Cette simple action transformera votre expérience de frustrante à agréable ! 
                        Toutes les fonctions deviennent compréhensibles instantanément.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🔍 Recherche de Chansons Optimisée</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Song Search :</strong> Recherche générale</li>
                          <li>• <strong>Artist Search :</strong> Par nom d'artiste</li>
                          <li>• <strong>英数 (Eisu) :</strong> Tri alphabétique A-Z</li>
                          <li>• <strong>Genre :</strong> Par style musical</li>
                          <li>• <strong>Ranking :</strong> Chansons populaires</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🎛️ Contrôles Audio Essentiels</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Music Volume :</strong> Volume de la musique</li>
                          <li>• <strong>Mic Volume :</strong> Volume du microphone</li>
                          <li>• <strong>Key Control :</strong> Tonalité (+/- pour votre voix)</li>
                          <li>• <strong>Tempo :</strong> Vitesse de la chanson</li>
                          <li>• <strong>Echo :</strong> Effet de réverbération</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">📋 Fonctions Pratiques</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <strong>Réservation :</strong> Ajouter des chansons à votre file d'attente
                        </div>
                        <div>
                          <strong>History :</strong> Voir les chansons déjà chantées
                        </div>
                        <div>
                          <strong>My List :</strong> Créer vos playlists favorites
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expériences avancées */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Award className="w-5 h-5 inline mr-2 text-purple-600" />
                  Expériences Avancées : Big Echo Comme un Expert
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">🎭 Salles à Concepts Spéciaux</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-600 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">📽️ Salles Dual Projector</h4>
                        <p className="text-gray-700 text-sm">
                          Deux grands écrans créent une expérience immersive spectaculaire. 
                          L'ambiance cinématographique transforme complètement l'expérience de chant !
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-pink-600 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">👑 Salles Princess & Thématiques</h4>
                        <p className="text-gray-700 text-sm">
                          Salles décorées selon des thèmes spéciaux (souvent en collaboration limitée avec des animes, 
                          films ou marques). Parfaites pour les occasions spéciales !
                        </p>
                      </div>
                      
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <p className="text-orange-800 text-sm">
                          <strong>💡 Conseil :</strong> Demandez à la réception quelles salles spéciales sont disponibles. 
                          Attention : elles peuvent avoir des restrictions de temps d'utilisation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">🎉 Forfaits Fête : La Solution Groupe Parfaite</h3>
                    <div className="space-y-3">
                      <p className="text-blue-800 text-sm">
                        Les <strong>"Party Courses"</strong> combinent temps de chant fixe (généralement 3h) + 
                        plateau de nourriture + option nomihoudai. Solution idéale sans tracas pour les groupes !
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Inclus Généralement :</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 3h de karaoke garanties</li>
                            <li>• Plateau apéritif/snacks</li>
                            <li>• Option nomihoudai +supplément</li>
                            <li>• Service sans interruption</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Avantages :</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Prix fixe connu à l'avance</li>
                            <li>• Pas de gestion de commandes</li>
                            <li>• Parfait pour anniversaires</li>
                            <li>• Ambiance festive garantie</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">🎤 Hitokara : L'Art du Karaoke Solo</h3>
                    <div className="space-y-3">
                      <p className="text-green-800 text-sm">
                        Le <strong>"Hitori Karaoke"</strong> (一人カラオケ) ou "Hitokara" est parfaitement normal au Japon ! 
                        Beaucoup viennent seuls pour s'entraîner, se détendre ou simplement profiter de leur moment personnel.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Pourquoi Essayer :</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Entraînement sans jugement</li>
                            <li>• Relaxation et anti-stress</li>
                            <li>• Découverte de nouvelles chansons</li>
                            <li>• Moment de liberté totale</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Avantages Big Echo :</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Tarifs solo spéciaux</li>
                            <li>• Accueil bienveillant du staff</li>
                            <li>• Salles adaptées 1 personne</li>
                            <li>• Aucune pression sociale</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>💭 Pour les timides :</strong> Commencer par un hitokara peut être le parfait moyen 
                          de découvrir le karaoke avant de s'y essayer en groupe !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glossaire des termes importants */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-purple-600" />
                  Glossaire des Termes Essentiels
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">受付 (Uketsuke)</h4>
                      <p className="text-gray-600 text-sm">Réception, accueil</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">会員 (Kaiin)</h4>
                      <p className="text-gray-600 text-sm">Membre, adhérent</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">学割 (Gakuwari)</h4>
                      <p className="text-gray-600 text-sm">Réduction étudiante</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">ワンドリンクオーダー制</h4>
                      <p className="text-gray-600 text-sm">Système une boisson minimum obligatoire</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">飲み放題 (Nomihōdai)</h4>
                      <p className="text-gray-600 text-sm">Boissons à volonté</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">フリータイム (Free Time)</h4>
                      <p className="text-gray-600 text-sm">Forfait temps libre</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">延長 (Enchō)</h4>
                      <p className="text-gray-600 text-sm">Extension, prolongation</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">デンモク (Denmoku)</h4>
                      <p className="text-gray-600 text-sm">Télécommande tactile du karaoke</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">一人カラオケ (Hitori Karaoke)</h4>
                      <p className="text-gray-600 text-sm">Karaoke en solo</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">本人映像 (Honnin Eizō)</h4>
                      <p className="text-gray-600 text-sm">Vidéo officielle de l'artiste</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commandes et service détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Utensils className="w-5 h-5 inline mr-2 text-purple-600" />
                  Commander Dans Votre Salle : Guide Complet
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-3">📞 Méthodes de Commande : Pas Besoin de Sortir !</h3>
                    <p className="text-yellow-800 text-sm mb-3">
                      Contrairement à ce que vous pourriez penser, <strong>vous n'avez pas besoin de quitter votre salle</strong> 
                      pour commander. Tout se fait depuis le confort de votre karaoke box !
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-gray-900 mb-2">📞 Téléphone Mural (Traditionnel)</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          La plupart des salles ont un téléphone fixé au mur qui vous connecte directement à la réception.
                        </p>
                        <div className="text-xs text-gray-600">
                          <strong>Comment faire :</strong> Décrochez le combiné, attendez qu'un membre du personnel réponde, 
                          puis communiquez votre commande.
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-gray-900 mb-2">📱 Tablette/Interface Numérique (Moderne)</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Les établissements récents utilisent des tablettes ou des interfaces sur le Denmoku.
                        </p>
                        <div className="text-xs text-gray-600">
                          <strong>Avantage :</strong> Interface visuelle avec images des produits. 
                          Parfait pour les non-japonophones !
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🍹 Options de Boissons et Nourriture Détaillées</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥤 À la Carte (Individual)</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Boissons :</strong> ¥200-500</div>
                          <div>• Soft drinks, jus, thé</div>
                          <div>• Bière, cocktails, saké</div>
                          <div>• Boissons chaudes</div>
                          <div><strong>Snacks :</strong> ¥300-800</div>
                          <div>• Frites, edamame</div>
                          <div>• Pizza japonaise, onigiri</div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🍺 Drink Bar (Self-Service)</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Prix :</strong> ¥200-400/heure</div>
                          <div><strong>Inclus :</strong></div>
                          <div>• Sodas illimités</div>
                          <div>• Jus variés</div>
                          <div>• Thé chaud/froid</div>
                          <div>• Café</div>
                          <div className="text-green-800 font-medium">💡 Très économique !</div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🍻 Nomihoudai (All-You-Can-Drink)</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Standard :</strong> ¥800-1,500/h</div>
                          <div>• Bière, cocktails basiques</div>
                          <div>• Saké, shōchū</div>
                          <div><strong>Premium :</strong> ¥1,200-2,000/h</div>
                          <div>• Alcools haut de gamme</div>
                          <div>• Cocktails sophistiqués</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-gray-900 font-semibold mb-3">🍽️ Menu Alimentaire Complet</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Collations Légères (¥300-600)</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Frites</strong> (フライドポテト) - Classique karaoke</li>
                          <li>• <strong>Edamame</strong> (枝豆) - Haricots de soja salés</li>
                          <li>• <strong>Arachides</strong> et snacks salés</li>
                          <li>• <strong>Onigiri</strong> (おにぎり) - Boulettes de riz</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Plats Plus Consistants (¥600-1,200)</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Pizza japonaise</strong> - Style unique</li>
                          <li>• <strong>Yakitori</strong> - Brochettes de poulet</li>
                          <li>• <strong>Riz frit</strong> et nouilles variées</li>
                          <li>• <strong>Curry japonais</strong> - Plat réconfortant</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-orange-900 font-semibold mb-2">📦 Politique d'Apport Personnel</h3>
                    <div className="space-y-2">
                      <p className="text-orange-800 text-sm">
                        <strong>Variable selon l'établissement :</strong> Certains Big Echo autorisent l'apport de 
                        nourriture/boissons extérieures (持込可 - Mochikomi-ka), d'autres l'interdisent complètement.
                      </p>
                      <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                        <p className="text-orange-900 text-sm font-medium">
                          ⚠️ <strong>Vérification obligatoire :</strong> Consultez le site web de la succursale 
                          spécifique ou demandez à la réception AVANT de faire vos achats !
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-green-900 font-semibold mb-3">🗣️ Phrases Utiles pour Commander</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="mb-2">
                          <strong>Attirer l'attention :</strong><br />
                          <span className="text-gray-700">すみません (Sumimasen)</span><br />
                          <em>"Excusez-moi"</em>
                        </div>
                        <div>
                          <strong>Commander en pointant :</strong><br />
                          <span className="text-gray-700">これをお願いします (Kore o onegaishimasu)</span><br />
                          <em>"Ceci, s'il vous plaît"</em>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">
                          <strong>Demander l'addition :</strong><br />
                          <span className="text-gray-700">お会計お願いします (O-kaikei onegaishimasu)</span><br />
                          <em>"L'addition, s'il vous plaît"</em>
                        </div>
                        <div>
                          <strong>Dire merci :</strong><br />
                          <span className="text-gray-700">ありがとうございます (Arigatou gozaimasu)</span><br />
                          <em>"Merci beaucoup"</em>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fin de session et paiement détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Clock className="w-5 h-5 inline mr-2 text-purple-600" />
                  Fin de Session et Paiement : Processus Complet
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-3">⏰ Le Countdown Final : Notification Automatique</h3>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-800 text-sm mb-2">
                        <strong>10 minutes avant la fin :</strong> Le téléphone de votre salle sonnera automatiquement. 
                        C'est votre signal officiel que le temps s'écoule !
                      </p>
                      <p className="text-orange-800 text-sm">
                        Le personnel vous informera qu'il reste peu de temps et vous demandera si vous souhaitez prolonger. 
                        <strong>Pas de panique</strong> - c'est une procédure standard et amicale.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-3">⏳ Extension de Session (Enchō - 延長)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Comment Prolonger</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Phrase magique :</strong><br />
                            <span className="text-gray-700">延長お願いします</span><br />
                            <em>(Enchō onegaishimasu)</em>
                          </div>
                          <p className="text-green-800">
                            Dites simplement cette phrase quand le téléphone sonne, 
                            et le personnel s'occupera du reste !
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Détails Pratiques</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Extensions par tranches de 30 minutes</li>
                          <li>• Disponibilité selon réservations suivantes</li>
                          <li>• Confirmation de la nouvelle heure de fin</li>
                          <li>• Ajustement automatique de votre facture</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-3">💳 Processus de Paiement Détaillé</h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">� Étapes du Paiement</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                          <div>
                            <p className="text-blue-900 font-medium text-sm">Rassemblez vos Affaires</p>
                            <p className="text-blue-800 text-xs">
                              Rangez vos affaires et retrouvez le ticket/reçu reçu à l'accueil. 
                              <strong>Ce ticket est indispensable !</strong>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                          <div>
                            <p className="text-blue-900 font-medium text-sm">Retour à la Réception</p>
                            <p className="text-blue-800 text-xs">
                              Dirigez-vous vers la réception avec votre ticket. 
                              Le personnel calculera votre facture totale.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                          <div>
                            <p className="text-blue-900 font-medium text-sm">Calcul de la Facture</p>
                            <p className="text-blue-800 text-xs">
                              Total = Temps de salle + Boissons/nourriture consommées + Éventuelles extensions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-medium text-gray-900 mb-2">💰 Méthodes de Paiement Acceptées</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Espèces</strong> (現金) - Toujours acceptées</li>
                          <li>• <strong>Cartes de crédit</strong> - Visa, Mastercard, JCB, Amex</li>
                          <li>• <strong>Cartes IC</strong> - Suica, Pasmo (transport)</li>
                          <li>• <strong>QR Codes</strong> - PayPay, Line Pay</li>
                          <li>• <strong>Cartes de débit</strong> (dans certains établissements)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-medium text-gray-900 mb-2">💡 Conseils Paiement</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Espèces recommandées</strong> - Toujours acceptées</li>
                          <li>• <strong>Cartes étrangères</strong> - Généralement OK en ville</li>
                          <li>• <strong>Pourboires</strong> - Non nécessaires au Japon</li>
                          <li>• <strong>Reçu</strong> - Demandez si besoin (レシート)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-gray-900 font-semibold mb-3">🗣️ Phrases Utiles pour la Fin de Session</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="mb-2">
                          <strong>Finir maintenant :</strong><br />
                          <span className="text-gray-700">終わります (Owarimasu)</span><br />
                          <em>"Nous finissons"</em>
                        </div>
                        <div>
                          <strong>Prolonger :</strong><br />
                          <span className="text-gray-700">延長お願いします (Enchō onegaishimasu)</span><br />
                          <em>"Extension, s'il vous plaît"</em>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">
                          <strong>Demander l'addition :</strong><br />
                          <span className="text-gray-700">お会計お願いします (O-kaikei onegaishimasu)</span><br />
                          <em>"L'addition, s'il vous plaît"</em>
                        </div>
                        <div>
                          <strong>Payer par carte :</strong><br />
                          <span className="text-gray-700">カードで (Kādo de)</span><br />
                          <em>"Par carte"</em>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Étiquette et culture du karaoke */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Heart className="w-5 h-5 inline mr-2 text-purple-600" />
                  Étiquette du Karaoke : Les Règles d'Or de l'Harmonie
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">👥 Harmonie de Groupe : Les Règles Essentielles</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🎤 Partagez le Microphone</p>
                          <p className="text-gray-700 text-sm">
                            Ne monopolisez jamais ! Assurez-vous que chacun ait sa chance de chanter. 
                            C'est la règle d'or du karaoke japonais.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">👏 Soyez un Excellent Public</p>
                          <p className="text-gray-700 text-sm">
                            Encouragez activement ! Applaudissez, utilisez les maracas/tambourins gratuits, 
                            et créez une ambiance positive pour celui qui chante.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🚫 Ne Volez Pas la Vedette</p>
                          <p className="text-gray-700 text-sm">
                            Ne chantez pas par-dessus quelqu'un d'autre, sauf si vous y êtes expressément invité. 
                            Laissez chacun avoir son moment de gloire !
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🔄 Évitez les Répétitions Immédiates</p>
                          <p className="text-gray-700 text-sm">
                            Si quelqu'un vient de chanter une chanson, attendez avant de la reprendre. 
                            Variez les styles et les artistes !
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🎵 Choisissez pour le Groupe</p>
                          <p className="text-gray-700 text-sm">
                            Alternez entre vos goûts personnels et des chansons que tout le monde connaît. 
                            Les hits populaires créent une super ambiance !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ Règles de la Maison : À Respecter Absolument</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">❌</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Équipements :</strong> Manipulez avec soin, pas de dommages
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">🚭</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Tabac :</strong> Interdit dans les salles non-fumeurs (même e-cigarettes)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">👀</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Vie privée :</strong> Ne regardez pas dans les autres salles, ne vous y invitez pas
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">🕐</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Mineurs :</strong> Restrictions après 22h-23h pour les moins de 18 ans
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">🐕</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Animaux :</strong> Pas d'animaux de compagnie autorisés
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide pour francophones */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <TrendingUp className="w-5 h-5 inline mr-2 text-purple-600" />
                  Guide du Chanteur Francophone : Trouvez Votre Répertoire !
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">🇫🇷 Musique Française : Réalité et Conseils</h3>
                    <div className="space-y-3">
                      <p className="text-blue-800 text-sm">
                        <strong>Soyons honnêtes :</strong> Le catalogue DAM contient peu de chansons françaises comparé 
                        à la musique anglaise et japonaise. Mais ne désespérez pas !
                      </p>
                      
                      <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">✅ Ce que vous trouverez probablement :</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="font-medium">Classiques :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• Édith Piaf</li>
                              <li>• Jacques Brel</li>
                              <li>• Serge Gainsbourg</li>
                              <li>• Charles Aznavour</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium">Modernes :</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• Daft Punk</li>
                              <li>• Stromae</li>
                              <li>• Christine and the Queens</li>
                              <li>• Mylène Farmer</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>Conseil Pro :</strong> Vérifiez le catalogue sur clubdam.com avant votre visite 
                          pour préparer votre liste de chansons françaises disponibles !
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">🎌 Tentez la J-Pop avec les Rōmaji Rubi !</h3>
                    <div className="space-y-3">
                      <p className="text-purple-800 text-sm">
                        <strong>Fonction magique :</strong> Les "ローマ字ルビ" (rōmaji rubi) affichent la phonétique 
                        latine des paroles japonaises, vous permettant de chanter en japonais !
                      </p>
                      
                      <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold text-orange-900 mb-2">⚠️ Limitation Importante</h4>
                        <p className="text-orange-800 text-sm">
                          Attention : Cette fonction n'apparaît généralement que sur l'écran du Denmoku, 
                          pas sur le grand écran TV. Utilisez-la comme "outil d'entraînement" ou aide-mémoire !
                        </p>
                      </div>
                      
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">💡 Stratégie Recommandée</h4>
                        <p className="text-green-800 text-sm">
                          Commencez par des chansons J-Pop simples et répétitives. L'anime et les génériques 
                          de drama sont parfaits pour débuter ! Vos amis japonais seront impressionnés.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🌍 Musique Internationale : Votre Zone de Confort</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Le catalogue anglais est immense ! Pop, rock, R&B, classics... Vous aurez l'embarras du choix.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">Valeurs Sûres :</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• The Beatles</li>
                          <li>• Queen</li>
                          <li>• ABBA</li>
                          <li>• Michael Jackson</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Pop Moderne :</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Taylor Swift</li>
                          <li>• Ed Sheeran</li>
                          <li>• Adele</li>
                          <li>• Bruno Mars</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Ambiance Groupe :</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Don't Stop Me Now</li>
                          <li>• Sweet Caroline</li>
                          <li>• Bohemian Rhapsody</li>
                          <li>• I Will Survive</li>
                        </ul>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">✨ Pourquoi Choisir Big Echo</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Plus Grand Réseau du Japon</p>
                      <p className="text-xs text-gray-600">400+ établissements garantissent qualité et accessibilité</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Système DAM Premium</p>
                      <p className="text-xs text-gray-600">Qualité audio exceptionnelle et 300K+ chansons</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Accueil International</p>
                      <p className="text-xs text-gray-600">Interfaces multilingues et staff habitué aux touristes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Options pour Tous</p>
                      <p className="text-xs text-gray-600">Du hitokara solo aux party courses groupe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Culture Authentique</p>
                      <p className="text-xs text-gray-600">Expérience karaoke japonaise dans son essence</p>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Conseils d'Experts</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium">🕐 Timing Optimal</p>
                    <p className="text-green-700 text-xs">Matinée et début d'après-midi pour les meilleurs prix. Évitez vendredi-samedi soir pour économiser.</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium">🎫 Réservations Stratégiques</p>
                    <p className="text-blue-700 text-xs">Réservez à l'avance le week-end. Devenez membre dès la première visite pour économiser immédiatement.</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 font-medium">💰 Optimisation Budget</p>
                    <p className="text-yellow-700 text-xs">Nomihoudai rentable dès 2-3 boissons. Free Time économique pour 2h+ de session.</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-medium">🎵 Préparation Culturelle</p>
                    <p className="text-purple-700 text-xs">Consultez clubdam.com avant votre visite pour préparer votre playlist française et découvrir la J-Pop.</p>
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