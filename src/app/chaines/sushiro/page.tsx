import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sushiro スシロー | Kaiten N°1 | Japonchaines",
  description: "Leader sushi tournant. Qualité exceptionnelle, innovation technologique conquérante.",
  keywords: [
    'sushiro', 'スシロー', 'kaiten-zushi', 'sushi tournant',
    'leader japon', 'innovation tech', 'qualité prix',
    'menu saisonnier', 'sushi abordable', 'tablette tactile'
  ],
  openGraph: {
    title: "Sushiro スシロー | Kaiten N°1 | Japonchaines",
    description: "Leader sushi tournant. Qualité exceptionnelle, innovation technologique conquérante.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: '/chaines/sushiro',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SushiroPage() {
  return (
    <>
      <ChainViewTracker chainName="sushiro" chainCategory="kaiten-zushi" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/kaiten-zushi" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Kaiten-zushi
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ス</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Sushiro</h1>
                <p className="text-lg text-gray-600">スシロー | すしろー</p>
                <p className="text-sm text-gray-500">Le n°1 incontesté du kaiten-zushi depuis 8 ans</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Message d'accueil pour les Français */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">L&apos;Expérience Sushi Incontournable au Japon</h2>
                <div className="prose prose-orange max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Pour nos visiteurs francophones</h3>
                    <p className="text-blue-800 italic">
                      &quot;La beauté gastronomique du Japon offre d&apos;innombrables expériences culinaires, 
                      mais aucune n&apos;est aussi emblématique, amusante et accessible que le &apos;kaiten-zushi&apos; 
                      (sushi tournant). Au sommet de cette culture populaire se dresse un nom que tout Japonais connaît : <strong>Sushiro</strong>.&quot;
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Plus qu&apos;une simple chaîne de restaurants, Sushiro est le <strong>leader absolu du kaiten-zushi depuis 2011</strong>, 
                    incarnant une révolution qui a démocratisé l&apos;accès au sushi de qualité. Cette expérience unique transforme 
                    un simple repas en <strong>immersion dans la face dynamique et moderne de la culture alimentaire japonaise</strong>.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg my-4">
                    <h4 className="font-semibold text-gray-900 mb-2">La Philosophie Sushiro - Plus qu&apos;un Slogan</h4>
                    <blockquote className="text-gray-700 italic border-l-3 border-orange-400 pl-4">
                      &quot;うまいすしを、腹一杯。うまいすしで、心も一杯。&quot;<br/>
                      <span className="text-sm text-gray-600">&quot;Du sushi délicieux à satiété. Du sushi délicieux pour combler le cœur.&quot;</span>
                    </blockquote>
                    <p className="text-sm text-gray-600 mt-2">
                      Cette mission incarne la capacité de Sushiro à transformer un simple repas en moment de joie et de profonde satisfaction, 
                      offrant une qualité surprenante à un prix accessible à tous.
                    </p>
                  </div>
                  
                  <p className="text-gray-700">
                    Pour ceux habitués aux prix français du sushi, Sushiro révèle que <strong>la haute qualité et la fraîcheur 
                    peuvent s&apos;harmoniser avec des prix démocratiques et le plaisir partagé</strong>. Cette philosophie fait de 
                    chaque visite une découverte de l&apos;art culinaire japonais moderne dans sa forme la plus pure et accessible.
                  </p>
                </div>
              </div>

              {/* Les secrets de l'excellence */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">La Philosophie &quot;こだわり&quot; (Kodawari) - L&apos;Obsession de la Perfection</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Le mot japonais <strong>&quot;こだわり&quot; (Kodawari)</strong> est difficile à traduire directement. 
                  Il exprime une attitude inébranlable de recherche de perfection dans les moindres détails, 
                  une <strong>obsession constructive</strong> qui constitue le fondement de la qualité et du succès de Sushiro.
                </p>
                
                <div className="space-y-8">
                  {/* Innovation révolutionnaire */}
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      🏭 2004 : La Révolution Anti-Centrale
                    </h3>
                    
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>Décision historique :</strong> Alors que toutes les grandes chaînes centralisaient leur production 
                        pour réduire les coûts, Sushiro a pris le pari inverse en <strong>supprimant complètement ses cuisines centrales</strong>.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🐟 Découpe et Préparation en Magasin</h4>
                        <p className="text-gray-700 text-sm">
                          Toutes les opérations cruciales - découpe du poisson, préparation des filets, assemblage des sushi - 
                          se font désormais directement dans chaque restaurant. <strong>Résultat : fraîcheur maximale 
                          et sushi préparés juste avant service.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">⚖️ Complexité vs Qualité</h4>
                        <p className="text-gray-700 text-sm">
                          Cette approche est opérationnellement plus complexe et coûteuse, mais elle permet à Sushiro 
                          de revendiquer une <strong>fraîcheur authentique</strong> et de créer un avantage concurrentiel décisif 
                          dans l&apos;esprit des consommateurs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Système technologique révolutionnaire */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      � 2002 : L&apos;Innovation Technologique Mondiale
                    </h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Première mondiale :</strong> Sushiro développe le <strong>&quot;Système de Gestion Intégrale 
                        du Kaiten-Zushi&quot;</strong> - une technologie révolutionnaire qui transforme la gestion de la fraîcheur.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🔧 Puces IC Intelligentes</h4>
                        <p className="text-gray-700 text-sm">
                          Chaque assiette de sushi contient une <strong>puce IC</strong> qui suit son parcours en temps réel 
                          sur le tapis roulant. Dès qu&apos;une assiette dépasse une distance définie 
                          (exemple : 350 mètres), elle est <strong>automatiquement retirée du circuit et éliminée</strong>.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">� Garantie Fraîcheur Absolue</h4>
                        <p className="text-gray-700 text-sm">
                          Cette technologie élimine toute incertitude : <strong>les clients ne reçoivent que les produits 
                          les plus frais</strong>, transformant un potentiel cauchemar logistique en 
                          avantage qualité incontestable.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hygiène et sécurité */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      🧼 Hygiène Rigoureuse : Au-delà de la Nécessité
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">✋ Protocole de Lavage des Mains</h4>
                        <p className="text-green-800 text-sm">
                          Avant d&apos;entrer en cuisine, chaque employé doit se laver les mains <strong>2 fois</strong> : 
                          poignets, paumes, dos des mains, doigts et ongles, <strong>10 fois chaque zone</strong> 
                          avec 2 savons différents (nettoyage et désinfection). Le processus est supervisé et enregistré.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🏭 Audit des Fournisseurs</h4>
                        <p className="text-green-800 text-sm">
                          Avant tout partenariat, Sushiro audite les usines de transformation de ses fournisseurs potentiels 
                          avec une <strong>checklist de 200 points</strong> couvrant les opérations, la gestion des ingrédients 
                          et les conditions d&apos;hygiène.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">📋 Contrôles Quotidiens</h4>
                        <p className="text-green-800 text-sm">
                          Plus de <strong>70 points de contrôle quotidiens</strong> dans chaque restaurant : 
                          santé des employés, températures des réfrigérateurs, dates de péremption, 
                          désinfection des ustensiles. Audit complet tous les 3 mois par des équipes spécialisées.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Les 4 piliers du goût */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      🎯 Les Quatre Piliers du Goût Parfait
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🍚 Shari (Riz à Sushi)</h4>
                        <p className="text-purple-800 text-sm">
                          Riz japonais de haute qualité, cultivé selon les spécifications Sushiro, 
                          cuit parfaitement dans chaque restaurant pour garantir <strong>température et texture idéales</strong>.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🌿 Wasabi</h4>
                        <p className="text-purple-800 text-sm">
                          Mélange exclusif de <strong>&quot;hon-wasabi&quot; d&apos;Hokkaido</strong> et de raifort occidental, 
                          dosé pour un équilibre parfait entre piquant et arôme.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🥢 Sauce Soja</h4>
                        <p className="text-purple-800 text-sm">
                          Sauce soja <strong>spécialement brassée pour Sushiro</strong>, conçue pour sublimer 
                          les saveurs du sushi sans les masquer.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🍵 Thé Vert</h4>
                        <p className="text-purple-800 text-sm">
                          Thé en poudre <strong>100% japonais</strong> disponible gratuitement à chaque table, 
                          rafraîchissant le palais entre chaque bouchée.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* L'expérience technologique */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Guide Pratique Étape par Étape</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Première visite chez Sushiro ? Ce guide détaillé transforme l&apos;appréhension de l&apos;inconnu 
                  en <strong>maîtrise confiante de l&apos;expérience</strong>. Suivez ces étapes pour profiter pleinement 
                  de votre aventure culinaire japonaise.
                </p>
                
                <div className="space-y-6">
                  {/* Étape 1 : Réservation */}
                  <div className="border border-orange-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                      📱 Étape 1 : Éviter la Queue - Système de Réservation Intelligent
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-900 mb-1">Application Sushiro (Recommandée)</h4>
                        <p className="text-orange-800 text-sm">
                          <strong>2 options :</strong> &quot;Maintenant&quot; (ticket virtuel + temps d&apos;attente estimé) 
                          ou &quot;Plus tard&quot; (réservation jusqu&apos;à 1 mois à l&apos;avance). Interface multilingue disponible.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">LINE Mini-App</h4>
                        <p className="text-gray-700 text-sm">
                          Pour les utilisateurs de LINE : mêmes fonctionnalités sans téléchargement supplémentaire.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Commande à Emporter</h4>
                        <p className="text-blue-800 text-sm">
                          Pré-commande et paiement via l&apos;app, récupération rapide en magasin.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Étape 2 : Arrivée */}
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                      🏪 Étape 2 : Arrivée et Installation
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Check-in Automatisé</h4>
                        <p className="text-blue-800 text-sm">
                          <strong>Avec réservation :</strong> Saisissez votre numéro sur la borne d&apos;accueil multilingue. 
                          <strong>Attention :</strong> arrivez dans les 30 minutes, sinon annulation automatique.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Sans Réservation</h4>
                        <p className="text-gray-700 text-sm">
                          Prenez un ticket à la même borne et patientez. Temps d&apos;attente affiché en temps réel.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Étape 3 : Commander */}
                  <div className="border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                      🎮 Étape 3 : Maîtriser l&apos;Art de la Commande
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-1">Tablette Tactile Multilingue</h4>
                        <p className="text-green-800 text-sm">
                          Interface en japonais, anglais, coréen, chinois. Photos HD facilitent la sélection. 
                          <strong>Astuce :</strong> même les enfants deviennent experts !
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-1">&quot;Dijiro&quot; - Innovation des Magasins Récents</h4>
                        <p className="text-green-800 text-sm">
                          Écrans dynamiques au-dessus du tapis : commandez directement en touchant 
                          les animations de sushi qui défilent !
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Étape 4 : Double système */}
                  <div className="border border-purple-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                      🚄 Étape 4 : Comprendre le Système Double-Rails
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-1">Rail Inférieur : Sélection Libre</h4>
                        <p className="text-purple-800 text-sm">
                          Sushi standards en rotation continue. Prenez ce qui vous fait envie au passage !
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-1">Rail Supérieur : &quot;Express Lane&quot;</h4>
                        <p className="text-purple-800 text-sm">
                          <strong>Votre &quot;train personnel&quot; :</strong> vos commandes spécifiques arrivent 
                          directement à votre table via ce rail dédié.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Étape 5 : Paiement */}
                  <div className="border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                      💳 Étape 5 : Paiement Futuriste
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-900 mb-1">Comptage Automatique</h4>
                        <p className="text-red-800 text-sm">
                          Caméras à reconnaissance d&apos;images comptent automatiquement vos assiettes par couleur. 
                          Calcul en temps réel !
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-900 mb-1">Borne Self-Service</h4>
                        <p className="text-red-800 text-sm">
                          Appelez le serveur via tablette → recevez carte/code-barres → 
                          payez à la borne (espèces, carte internationale, paiement mobile japonais).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-6">
                  <h4 className="font-semibold text-orange-900 mb-2">💡 Conseil Pro</h4>
                  <p className="text-orange-800 text-sm">
                    <strong>Première fois ?</strong> Observez les autres clients pendant quelques minutes. 
                    Le système est si intuitif que vous maîtriserez rapidement tous les gestes !
                  </p>
                </div>
              </div>

              {/* Menu highlights */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">L&apos;Univers Culinaire Sushiro : Bien Plus que du Sushi</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Avec plus de <strong>100 variétés en permanence</strong> et des campagnes saisonnières qui renouvellent 
                  constamment l&apos;offre, Sushiro transcende la définition traditionnelle du sushi pour devenir 
                  une <strong>aventure culinaire complète et évolutive</strong>.
                </p>
                
                {/* Système de prix par couleur */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">🎨 Comprendre le Système de Prix par Couleur</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full inline-block mr-2"></div>
                      <strong>Jaune :</strong> 120-150¥<br/>
                      <span className="text-yellow-700">80+ variétés de base</span>
                    </div>
                    <div>
                      <div className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></div>
                      <strong>Rouge :</strong> 180-210¥<br/>
                      <span className="text-red-700">Qualité supérieure</span>
                    </div>
                    <div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full inline-block mr-2"></div>
                      <strong>Noir :</strong> 260-290¥<br/>
                      <span className="text-gray-700">Série &quot;Takumi&quot;</span>
                    </div>
                    <div>
                      <div className="w-4 h-4 bg-gray-200 border-2 border-gray-400 rounded-full inline-block mr-2"></div>
                      <strong>Blanc :</strong> Prix libre<br/>
                      <span className="text-gray-600">Éditions limitées</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* Sushi traditionnels champions */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏆 Les Champions Incontournables</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥇 Maguro (Thon) - N°1 Absolu</h4>
                        <p className="text-blue-800 text-sm">
                          Secret : uniquement la partie <strong>&quot;Tenmi&quot;</strong> du Mebachimaguro de grande taille. 
                          Sans tendons, concentration maximale d&apos;umami. Le standard qui a défini le succès de Sushiro.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥈 Hamachi (Sériole) - N°2 des Ventes</h4>
                        <p className="text-blue-800 text-sm">
                          Élevage en bassins partenaires, abattage matinal, préparation en magasin. 
                          Texture fondante et fraîcheur exceptionnelle garanties.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🍣 Ebi Avocado - Innovation Historique</h4>
                        <p className="text-blue-800 text-sm">
                          <strong>Créé par Sushiro en 2004 !</strong> Crevette pochée à la perfection, 
                          avocat crémeux, mayonnaise spéciale. L&apos;innovation qui a démocratisé le sushi créatif.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🍳 Tamago - Perfection en 6 Couches</h4>
                        <p className="text-blue-800 text-sm">
                          Alors que la norme est de 5 couches, Sushiro en fait 6 pour une 
                          <strong>texture unique ultra-moelleuse</strong>. Un détail qui fait la différence.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Révolution Niku-Zushi */}
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🥩 Révolution : L&apos;Ère du Niku-Zushi</h3>
                    
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>Sushiro a révolutionné le concept même du sushi</strong> en introduisant les &quot;niku-zushi&quot; 
                        (sushi de viande), brisant les conventions pour créer une nouvelle catégorie culinaire.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🔥 Bœuf Kalbi Grillé</h4>
                        <p className="text-gray-700 text-sm">
                          Sauce yakiniku secrète, cuisson maîtrisée. Le sushi qui a converti 
                          les réticents au poisson !
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🍖 Chashu (Porc Braisé)</h4>
                        <p className="text-gray-700 text-sm">
                          Technique empruntée au ramen : porc braisé des heures dans un bouillon 
                          secret jusqu&apos;à tendreté parfaite.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Au-delà du sushi */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🍜 L&apos;Empire des Accompagnements</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🥢 Ramen de Niveau Restaurant</h4>
                        <p className="text-green-800 text-sm">
                          <strong>Ramen au Bouillon de Daurade :</strong> recommandation n°1 du personnel. 
                          Arêtes de daurade (utilisées pour les sushi) bouillies avec palourdes et bouillon de poule. 
                          Zéro gaspillage, goût de restaurant spécialisé.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🍤 Frites &quot;Potero&quot; - Phénomène Social</h4>
                        <p className="text-green-800 text-sm">
                          Surnommées affectueusement par les fans. Commandées à la demande, 
                          toujours <strong>ultra-croustillantes</strong>. Simple mais parfait.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🥘 Chawanmushi - N°1 des Accompagnements</h4>
                        <p className="text-green-800 text-sm">
                          <strong>2,07 millions de portions vendues par an !</strong> Bouillon de bonite, kombu et maquereau japonais. 
                          Cuit vapeur individuellement dans chaque restaurant.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sushiro Café */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🍰 &quot;Sushiro Café-bu&quot; - La Révolution Dessert</h3>
                    
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-purple-800 text-sm">
                        <strong>Mission :</strong> &quot;Empêcher les clients d&apos;aller au konbini après le repas&quot;. 
                        Depuis 2017, une équipe de pâtissiers formés dans des hôtels de luxe développe 
                        des desserts dignes de salons de thé parisiens.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🔥 Catalana Ice Brûlée - Star Absolue</h4>
                        <p className="text-purple-800 text-sm">
                          Surface caramélisée au chalumeau <strong>à la commande</strong>. 
                          Contraste parfait : caramel craquant + crème glacée onctueuse.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🎂 Mille-Crêpes Hokkaido</h4>
                        <p className="text-purple-800 text-sm">
                          Crème fraîche d&apos;Hokkaido, fraises glacées, présentation de café parisien. 
                          Sophistication inattendue dans un kaiten-zushi !
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Campagnes limitées */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🎪 L&apos;Art des Campagnes Limitées</h3>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 text-sm mb-3">
                        <strong>Sushiro Day :</strong> une fois par an, thon rouge haut de gamme à prix exceptionnels. 
                        <strong>Collabs ramen :</strong> partenariats avec des restaurants cultes. 
                        <strong>GODIVA :</strong> chocolats premium signés. <strong>Anime :</strong> collaborations avec Haikyu!!, 
                        Sanrio pour attirer tous les publics.
                      </p>
                      <p className="text-orange-800 text-sm font-semibold">
                        💡 Conseil : vérifiez l&apos;app avant votre visite pour les surprises du moment !
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ enrichie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guide Culturel et Pratique pour Visiteurs Francophones</h2>
                
                <div className="space-y-8">
                  {/* Étiquette et bonnes manières */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">🎌 Étiquette Japonaise du Sushi</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥢 La Règle d&apos;Or de la Sauce Soja</h4>
                        <p className="text-blue-800 text-sm">
                          <strong>Trempez le POISSON, jamais le riz !</strong> Le riz absorbe trop de sauce, 
                          masque le goût du poisson et fait se désintégrer le sushi. 
                          Pour les gunkan (sushi &quot;bateau&quot;), utilisez le gingembre comme pinceau.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🌸 Gari (Gingembre Mariné) - Votre Allié</h4>
                        <p className="text-blue-800 text-sm">
                          Ces lamelles roses/blanches se mangent <strong>ENTRE</strong> les sushi différents, 
                          pas en garniture dessus. Elles nettoient le palais et ont un effet antibactérien. 
                          Parfait pour passer d&apos;un poisson gras à un poisson maigre !
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🍵 L&apos;Art du Thé Vert</h4>
                        <p className="text-blue-800 text-sm">
                          Service libre à chaque table ! Mettez 1-2 cuillères de poudre dans votre tasse, 
                          ajoutez un peu d&apos;eau chaude, mélangez pour éviter les grumeaux, puis remplissez. 
                          <strong>Gratuit et à volonté !</strong>
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">⚠️ Règle Absolue</h4>
                        <p className="text-red-800 text-sm">
                          Une assiette prise du tapis = votre propriété ! <strong>Même prise par erreur, 
                          ne la remettez JAMAIS en circulation.</strong> C&apos;est considéré comme extrêmement impoli 
                          et dangereux pour l&apos;hygiène.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Questions pratiques */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">💡 Questions Pratiques Essentielles</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🌐 Barrière de la langue : vraiment un problème ?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Absolument pas !</strong> Tablettes multilingues (anglais garanti), photos HD pour tout. 
                          Le système est conçu pour être <strong>entièrement visuel et intuitif</strong>. 
                          Même les enfants de 5 ans s&apos;en sortent parfaitement !
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">👨‍👩‍👧‍👦 Sushiro en famille : bonne idée ?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>C&apos;est LE restaurant familial japonais type !</strong> 
                          Enfants fascinés par le &quot;train à sushi&quot;, menus spéciaux kids, 
                          jouets offerts, options pour les difficiles (tamagoyaki, inari, niku-sushi). 
                          <strong>Ambiance détendue, pas de stress protocole.</strong>
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🥗 Options végétariennes/végétaliennes réelles ?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Oui, mais soyez vigilants :</strong> kappa-maki (concombre), 
                          natto-maki (soja fermenté), inari (tofu sucré), avocat, légumes tempura. 
                          <strong>Attention :</strong> bouillons souvent à base de poisson, contamination croisée possible. 
                          Sushiro développe des options plant-based pour l&apos;Expo 2025.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">⏱️ Combien de temps prévoir ?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>45-90 minutes selon votre style.</strong> Pas de rush ! 
                          Certains familles passent 2h à explorer et jouer, 
                          d&apos;autres pros expédient en 30 minutes. <strong>Vous gérez votre rythme.</strong>
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">💳 Paiements acceptés pour touristes ?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Très large acceptance :</strong> espèces (toujours sûr), 
                          Visa/Mastercard/AMEX international, contactless, 
                          paiements mobiles japonais. <strong>Bornes self-service très simples.</strong> 
                          Évitez les cartes IC de transport (Suica, etc.).
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibent text-gray-900 mb-2">🍣 La qualité justifie-t-elle vraiment ces prix bas ?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>C&apos;est tout le génie de Sushiro !</strong> Volumes énormes + technologie + 
                          élimination des intermédiaires = qualité constante à prix démocratiques. 
                          Le thon &quot;Tenmi&quot; à 120¥ rivalise avec des sushi parisiens à 8€. 
                          <strong>Révolution économique sans compromis gustatif.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contexte culturel */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">🏛️ Un Peu d&apos;Histoire : L&apos;Invention du Kaiten-Zushi</h3>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">🍺 L&apos;Inspiration d&apos;une Brasserie</h4>
                      <p className="text-purple-800 text-sm mb-3">
                        <strong>1958, Osaka :</strong> Yoshiaki Shiraishi, propriétaire du petit restaurant &quot;Genroku Sushi&quot;, 
                        fait face à une pénurie de main d&apos;œuvre. Lors d&apos;une visite d&apos;usine Asahi Beer, 
                        il observe des bouteilles défiler sur un tapis roulant... <strong>L&apos;eureka moment !</strong>
                      </p>
                      <p className="text-purple-800 text-sm">
                        <strong>1970, Expo d&apos;Osaka :</strong> Le kaiten-zushi devient phénomène mondial. 
                        Ce qui était une solution locale devient <strong>révolution culturelle</strong> exportée dans le monde entier.
                      </p>
                    </div>
                  </div>
                  
                  {/* Comparaison concurrence */}
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">⚖️ Sushiro vs Concurrence : Qui Choisir ?</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-yellow-900 text-sm">🏆 Sushiro : Le Champion Technologique</h5>
                        <p className="text-yellow-800 text-xs">
                          Meilleure fraîcheur (cuisson magasin), tech de pointe, desserts niveau salon de thé, 
                          campagnes créatives. <strong>Pour l&apos;expérience complète et la qualité constante.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm">🎮 Kura Sushi : Le Ludique</h5>
                        <p className="text-gray-700 text-xs">
                          Système &quot;Bikkura Pon!&quot; (jeu à chaque 5 assiettes), concept &quot;sans additifs&quot;. 
                          <strong>Parfait pour familles avec enfants jeunes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm">🧂 Hama Sushi : Le Personnalisable</h5>
                        <p className="text-gray-700 text-xs">
                          Variété de sauces soja à table, prix ultra-compétitifs. 
                          <strong>Pour les expérimentateurs de goûts.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-8">
                  <h4 className="font-semibold text-orange-900 mb-2">🎌 Message Final aux Visiteurs Francophones</h4>
                  <p className="text-orange-800 text-sm">
                    <strong>Sushiro n&apos;est pas qu&apos;un restaurant, c&apos;est une initiation à la culture japonaise moderne.</strong> 
                    Vous y découvrirez comment le Japon fusionne tradition millénaire et innovation technologique, 
                    comment la qualité peut rimer avec accessibilité, et comment l&apos;efficacité peut créer de la convivialité. 
                    <strong>Une expérience culturelle autant que culinaire !</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Informations pratiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 text-orange-600 mr-2" />
                  Informations Pratiques
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Horaires</div>
                      <div className="text-gray-600">11h-23h (7j/7)</div>
                      <div className="text-gray-500 text-xs">Varie selon l&apos;emplacement</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Localisation</div>
                      <div className="text-gray-600">Centres commerciaux, zones urbaines</div>
                      <div className="text-gray-500 text-xs">Plus de 600 restaurants au Japon</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Paiement</div>
                      <div className="text-gray-600">Espèces, cartes, paiement mobile</div>
                      <div className="text-gray-500 text-xs">Bornes self-service</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clientèle</div>
                      <div className="text-gray-600">Familles, couples, solo</div>
                      <div className="text-gray-500 text-xs">Tous âges bienvenus</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.sushiro.co.jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Site officiel Sushiro →
                  </a>
                </div>
              </div>

              {/* Prix moyens */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sushi standard</span>
                    <span className="font-medium">120¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sushi premium</span>
                    <span className="font-medium">190-290¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niku-sushi</span>
                    <span className="font-medium">210-350¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accompagnements</span>
                    <span className="font-medium">160-390¥</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Repas moyen</span>
                      <span className="text-gray-900">1,200-2,000¥</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notre avis */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Évaluation</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-blue-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Leader incontesté</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Qualité/Prix</span>
                    <span className="font-semibold text-blue-600">Révolutionnaire</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Innovation</span>
                    <span className="font-semibold text-blue-600">Pionnier mondial</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Accessibilité</span>
                    <span className="font-semibold text-blue-600">Parfaite</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Expérience culturelle</span>
                    <span className="font-semibold text-blue-600">Authentique</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700">
                  <strong>L&apos;excellence kaiten-zushi dans sa forme la plus aboutie.</strong> 
                  Sushiro incarne la fusion parfaite entre tradition culinaire japonaise et innovation technologique. 
                  <strong>N°1 depuis 2011</strong> grâce à une obsession : la qualité absolue à prix démocratique. 
                  Une expérience qui redéfinit votre vision du sushi et du service japonais.
                </p>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <p className="text-xs text-blue-700">
                    <strong>🎯 Recommandé pour :</strong> Première découverte du kaiten-zushi, 
                    familles, amateurs d&apos;innovation, budget maîtrisé sans compromis qualité.
                  </p>
                </div>
              </div>

              {/* Navigation vers d'autres chaînes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Kaiten-zushi</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chaines/kura-sushi" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Kura Sushi</div>
                    <div className="text-sm text-gray-600">Le pionnier automatisé</div>
                  </Link>
                  
                  <Link 
                    href="/chaines/hama-sushi" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Hama Sushi</div>
                    <div className="text-sm text-gray-600">Prix ultra-compétitifs</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
