import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import ChainViewTracker from '@/components/ChainViewTracker';
import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';
import { Award, Zap, Utensils, Info, Clock, CreditCard, Smartphone, MapPin, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sushiro : Le n°1 du Kaiten-zushi au Japon - Guide Complet",
  description: "Guide ultime Sushiro. Menu, prix, système de commande et astuces pour profiter du meilleur sushi tournant du Japon.",
  keywords: [
    'sushiro', 'スシロー', 'kaiten-zushi', 'sushi tournant',
    'sushi pas cher', 'restaurant japon', 'guide sushiro',
    'menu sushiro', 'commande sushiro'
  ],
  openGraph: {
    title: "Sushiro : Le n°1 du Kaiten-zushi au Japon - Guide Complet",
    description: "Guide ultime Sushiro. Menu, prix, système de commande et astuces pour profiter du meilleur sushi tournant du Japon.",
    type: 'article',
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais",
    images: [
      {
        url: '/images/chaines/sushiro/maguro.jpg',
        width: 1200,
        height: 630,
        alt: 'Sushiro Maguro Sushi',
      }
    ]
  },
  alternates: {
    canonical: '/chaines/sushiro',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SushiroPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="sushiro" chainCategory="kaiten-zushi" />

      <PageHero
        title="Sushiro"
        subtitle="スシロー"
        description="Le n°1 incontesté du kaiten-zushi. Du sushi délicieux à satiété, du sushi délicieux pour combler le cœur."
        badges={[
          "Leader Japon",
          "Innovation Tech",
          "Qualité Prix",
          "100¥~"
        ]}
        backgroundImage="/images/chaines/sushiro/maguro.jpg"
      />

      <ContentSection title="L'Expérience Sushi Incontournable" subtitle="日本の回転寿司" background="white">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/chaines/sushiro/sushiro.jpg"
                alt="Logo Sushiro"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pour nos visiteurs francophones</h3>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-blue-800 italic">
                  "La beauté gastronomique du Japon offre d'innombrables expériences culinaires,
                  mais aucune n'est aussi emblématique, amusante et accessible que le 'kaiten-zushi'
                  (sushi tournant). Au sommet de cette culture populaire se dresse un nom que tout Japonais connaît : <strong>Sushiro</strong>."
                </p>
              </div>

              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Plus qu'une simple chaîne de restaurants, Sushiro est le <strong>leader absolu du kaiten-zushi depuis 2011</strong>,
                incarnant une révolution qui a démocratisé l'accès au sushi de qualité. Cette expérience unique transforme
                un simple repas en <strong>immersion dans la face dynamique et moderne de la culture alimentaire japonaise</strong>.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-gray-900 mb-2">La Philosophie Sushiro - Plus qu'un Slogan</h4>
                <blockquote className="text-gray-700 italic border-l-3 border-orange-400 pl-4">
                  "うまいすしを、腹一杯。うまいすしで、心も一杯。"<br />
                  <span className="text-sm text-gray-600">"Du sushi délicieux à satiété. Du sushi délicieux pour combler le cœur."</span>
                </blockquote>
                <p className="text-sm text-gray-600 mt-2">
                  Cette mission incarne la capacité de Sushiro à transformer un simple repas en moment de joie et de profonde satisfaction,
                  offrant une qualité surprenante à un prix accessible à tous.
                </p>
              </div>

              <p className="text-gray-700">
                Pour ceux habitués aux prix français du sushi, Sushiro révèle que <strong>la haute qualité et la fraîcheur
                  peuvent s'harmoniser avec des prix démocratiques et le plaisir partagé</strong>. Cette philosophie fait de
                chaque visite une découverte de l'art culinaire japonais moderne dans sa forme la plus pure et accessible.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">La Philosophie "こだわり" (Kodawari) - L'Obsession de la Perfection</h2>
          </div>

          <p className="text-gray-700 mb-8 text-lg">
            Le mot japonais <strong>"こだわり" (Kodawari)</strong> est difficile à traduire directement.
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
                    dans l'esprit des consommateurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Système technologique révolutionnaire */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📡 2002 : L'Innovation Technologique Mondiale
              </h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 text-sm">
                  <strong>Première mondiale :</strong> Sushiro développe le <strong>"Système de Gestion Intégrale
                    du Kaiten-Zushi"</strong> - une technologie révolutionnaire qui transforme la gestion de la fraîcheur.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🔧 Puces IC Intelligentes</h4>
                  <p className="text-gray-700 text-sm">
                    Chaque assiette de sushi contient une <strong>puce IC</strong> qui suit son parcours en temps réel
                    sur le tapis roulant. Dès qu'une assiette dépasse une distance définie
                    (exemple : 350 mètres), elle est <strong>automatiquement retirée du circuit et éliminée</strong>.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">🛡️ Garantie Fraîcheur Absolue</h4>
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
                    Avant d'entrer en cuisine, chaque employé doit se laver les mains <strong>2 fois</strong> :
                    poignets, paumes, dos des mains, doigts et ongles, <strong>10 fois chaque zone</strong>
                    avec 2 savons différents (nettoyage et désinfection). Le processus est supervisé et enregistré.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">🏭 Audit des Fournisseurs</h4>
                  <p className="text-green-800 text-sm">
                    Avant tout partenariat, Sushiro audite les usines de transformation de ses fournisseurs potentiels
                    avec une <strong>checklist de 200 points</strong> couvrant les opérations, la gestion des ingrédients
                    et les conditions d'hygiène.
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
                    Mélange exclusif de <strong>"hon-wasabi" d'Hokkaido</strong> et de raifort occidental,
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
      </ContentSection>

      <ContentSection title="Guide Pratique Étape par Étape" subtitle="ご利用ガイド" background="gray">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-gray-700 mb-6">
              Première visite chez Sushiro ? Ce guide détaillé transforme l'appréhension de l'inconnu
              en <strong>maîtrise confiante de l'expérience</strong>. Suivez ces étapes pour profiter pleinement
              de votre aventure culinaire japonaise.
            </p>

            <div className="border border-orange-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                📱 Étape 1 : Éviter la Queue - Système de Réservation Intelligent
              </h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-medium text-orange-900 mb-1">Application Sushiro (Recommandée)</h4>
                  <p className="text-orange-800 text-sm">
                    <strong>2 options :</strong> "Maintenant" (ticket virtuel + temps d'attente estimé)
                    ou "Plus tard" (réservation jusqu'à 1 mois à l'avance). Interface multilingue disponible.
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
                    Pré-commande et paiement via l'app, récupération rapide en magasin.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                🏪 Étape 2 : Arrivée et Installation
              </h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">Check-in Automatisé</h4>
                  <p className="text-blue-800 text-sm">
                    <strong>Avec réservation :</strong> Saisissez votre numéro sur la borne d'accueil multilingue.
                    <strong>Attention :</strong> arrivez dans les 30 minutes, sinon annulation automatique.
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-1">Sans Réservation</h4>
                  <p className="text-gray-700 text-sm">
                    Prenez un ticket à la même borne et patientez. Temps d'attente affiché en temps réel.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                🎮 Étape 3 : Maîtriser l'Art de la Commande
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
                  <h4 className="font-medium text-green-900 mb-1">"Dijiro" - Innovation des Magasins Récents</h4>
                  <p className="text-green-800 text-sm">
                    Écrans dynamiques au-dessus du tapis : commandez directement en touchant
                    les animations de sushi qui défilent !
                  </p>
                </div>
              </div>
            </div>

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
                  <h4 className="font-medium text-purple-900 mb-1">Rail Supérieur : "Express Lane"</h4>
                  <p className="text-purple-800 text-sm">
                    <strong>Votre "train personnel" :</strong> vos commandes spécifiques arrivent
                    directement à votre table via ce rail dédié.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                💳 Étape 5 : Paiement Futuriste
              </h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg">
                  <h4 className="font-medium text-red-900 mb-1">Comptage Automatique</h4>
                  <p className="text-red-800 text-sm">
                    Caméras à reconnaissance d'images comptent automatiquement vos assiettes par couleur.
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

          <div className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/chaines/sushiro/sushiro-tablet.jpg"
                alt="Tablette de commande Sushiro"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">Interface intuitive et multilingue</p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <h4 className="font-bold text-orange-900 mb-2">💡 Conseil Pro</h4>
              <p className="text-orange-800 text-sm">
                <strong>Première fois ?</strong> Observez les autres clients pendant quelques minutes.
                Le système est si intuitif que vous maîtriserez rapidement tous les gestes !
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="L'Univers Culinaire Sushiro" subtitle="メニュー" background="white">
        <div className="mb-8">
          <p className="text-gray-700 mb-6 text-lg">
            Avec plus de <strong>100 variétés en permanence</strong> et des campagnes saisonnières qui renouvellent
            constamment l'offre, Sushiro transcende la définition traditionnelle du sushi pour devenir
            une <strong>aventure culinaire complète et évolutive</strong>.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <h3 className="text-lg font-bold text-yellow-900 mb-3">🎨 Comprendre le Système de Prix par Couleur</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mr-2"></div>
                <div className="text-sm"><strong>Jaune :</strong> 120-150¥<br /><span className="text-xs text-gray-600">80+ variétés de base</span></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <div className="text-sm"><strong>Rouge :</strong> 180-210¥<br /><span className="text-xs text-gray-600">Qualité supérieure</span></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-800 rounded-full mr-2"></div>
                <div className="text-sm"><strong>Noir :</strong> 260-290¥<br /><span className="text-xs text-gray-600">Série "Takumi"</span></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white border border-gray-400 rounded-full mr-2"></div>
                <div className="text-sm"><strong>Blanc :</strong> Prix libre<br /><span className="text-xs text-gray-600">Éditions limitées</span></div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🏆 Les Champions Incontournables</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-56">
                  <Image
                    src="/images/chaines/sushiro/maguro.jpg"
                    alt="Maguro Sushiro"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold shadow-md">
                    N°1
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">🥇 Maguro (Thon) - N°1 Absolu</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Secret : uniquement la partie <strong>"Tenmi"</strong> du Mebachimaguro de grande taille.
                    Sans tendons, concentration maximale d'umami. Le standard qui a défini le succès de Sushiro.
                  </p>
                  <span className="text-orange-600 font-bold">¥120~</span>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative h-56">
                  <Image
                    src="/images/chaines/sushiro/aji.jpg"
                    alt="Aji Sushiro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Aji (Chinchard)</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Exemple parfait de la fraîcheur Sushiro. Préparé en magasin, servi avec gingembre et ciboule.
                    Une texture ferme et un goût marin authentique.
                  </p>
                  <span className="text-orange-600 font-bold">¥120~</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">🥈 Hamachi (Sériole) - N°2 des Ventes</h4>
                <p className="text-sm text-blue-800">Élevage en bassins partenaires, abattage matinal, préparation en magasin. Texture fondante et fraîcheur exceptionnelle garanties.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">🍣 Ebi Avocado - Innovation Historique</h4>
                <p className="text-sm text-blue-800"><strong>Créé par Sushiro en 2004 !</strong> Crevette pochée à la perfection, avocat crémeux, mayonnaise spéciale. L'innovation qui a démocratisé le sushi créatif.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">🍳 Tamago - Perfection en 6 Couches</h4>
                <p className="text-sm text-blue-800">Alors que la norme est de 5 couches, Sushiro en fait 6 pour une <strong>texture unique ultra-moelleuse</strong>. Un détail qui fait la différence.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🥩 Révolution : L'Ère du Niku-Zushi</h3>
              <div className="bg-red-50 p-5 rounded-xl mb-4">
                <p className="text-red-800 text-sm mb-4">
                  <strong>Sushiro a révolutionné le concept même du sushi</strong> en introduisant les "niku-zushi"
                  (sushi de viande), brisant les conventions pour créer une nouvelle catégorie culinaire.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">🔥</span>
                    <span className="text-sm text-gray-700"><strong>Bœuf Kalbi Grillé :</strong> Sauce yakiniku secrète, cuisson maîtrisée. Le sushi qui a converti les réticents au poisson !</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">🍖</span>
                    <span className="text-sm text-gray-700"><strong>Chashu (Porc Braisé) :</strong> Technique empruntée au ramen : porc braisé des heures dans un bouillon secret jusqu'à tendreté parfaite.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍜 L'Empire des Accompagnements</h3>
              <div className="bg-green-50 p-5 rounded-xl">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🥢</span>
                    <span className="text-sm text-gray-700"><strong>Ramen de Niveau Restaurant :</strong> Bouillon de Daurade (arêtes des sushis) + palourdes + poule. Zéro gaspillage, goût pro.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🍤</span>
                    <span className="text-sm text-gray-700"><strong>Frites "Potero" :</strong> Phénomène social ! Commandées à la demande, toujours <strong>ultra-croustillantes</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🥘</span>
                    <span className="text-sm text-gray-700"><strong>Chawanmushi :</strong> N°1 des accompagnements (2M+/an). Bouillon bonite/kombu/maquereau. Cuit vapeur individuellement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍰 "Sushiro Café-bu" - La Révolution Dessert</h3>
              <div className="bg-purple-50 p-5 rounded-xl">
                <p className="text-purple-800 text-sm mb-4">
                  <strong>Mission :</strong> "Empêcher les clients d'aller au konbini après le repas".
                  Depuis 2017, une équipe de pâtissiers formés dans des hôtels de luxe développe des desserts dignes de salons de thé parisiens.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">🔥</span>
                    <span className="text-sm text-gray-700"><strong>Catalana Ice Brûlée - Star Absolue :</strong> Surface caramélisée au chalumeau <strong>à la commande</strong>. Contraste parfait : caramel craquant + crème glacée onctueuse.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">🎂</span>
                    <span className="text-sm text-gray-700"><strong>Mille-Crêpes Hokkaido :</strong> Crème fraîche d'Hokkaido, fraises glacées, présentation de café parisien. Sophistication inattendue !</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎪 L'Art des Campagnes Limitées</h3>
              <div className="bg-orange-50 p-5 rounded-xl">
                <p className="text-orange-800 text-sm mb-3">
                  <strong>Sushiro Day :</strong> une fois par an, thon rouge haut de gamme à prix exceptionnels.
                  <strong>Collabs ramen :</strong> partenariats avec des restaurants cultes.
                  <strong>GODIVA :</strong> chocolats premium signés.
                  <strong>Anime :</strong> collaborations avec Haikyu!!, Sanrio pour attirer tous les publics.
                </p>
                <p className="text-orange-800 text-sm font-semibold">
                  💡 Conseil : vérifiez l'app avant votre visite pour les surprises du moment !
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Guide Culturel et Pratique" subtitle="文化とFAQ" background="gray">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-blue-900 mb-4">🎌 Étiquette Japonaise du Sushi</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🥢</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">La Règle d'Or de la Sauce Soja</h4>
                  <p className="text-sm text-gray-700"><strong>Trempez le POISSON, jamais le riz !</strong> Le riz absorbe trop de sauce, masque le goût du poisson et fait se désintégrer le sushi. Pour les gunkan, utilisez le gingembre comme pinceau.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🌸</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Gari (Gingembre Mariné) - Votre Allié</h4>
                  <p className="text-sm text-gray-700">Ces lamelles se mangent <strong>ENTRE</strong> les sushis différents, pas dessus. Elles nettoient le palais. Parfait pour passer d'un poisson gras à un poisson maigre !</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🍵</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">L'Art du Thé Vert</h4>
                  <p className="text-sm text-gray-700">Service libre ! 1-2 cuillères de poudre, eau chaude, mélangez. <strong>Gratuit et à volonté !</strong></p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">⚠️</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Règle Absolue</h4>
                  <p className="text-sm text-gray-700">Une assiette prise du tapis = votre propriété ! <strong>Ne la remettez JAMAIS en circulation.</strong> C'est extrêmement impoli et dangereux pour l'hygiène.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-green-900 mb-4">💡 Questions Pratiques Essentielles</h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-bold text-gray-900 text-sm">🌐 Barrière de la langue ?</h4>
                <p className="text-xs text-gray-600">Absolument pas ! Tablettes multilingues (anglais garanti), photos HD. Système entièrement visuel et intuitif.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-bold text-gray-900 text-sm">👨‍👩‍👧‍👦 Sushiro en famille ?</h4>
                <p className="text-xs text-gray-600">C'est LE restaurant familial ! Enfants fascinés par le train, menus kids, jouets. Ambiance détendue.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-bold text-gray-900 text-sm">🥗 Végétariens ?</h4>
                <p className="text-xs text-gray-600">Oui mais vigilance : kappa-maki, natto, inari, avocat, tempura légumes. Attention aux bouillons poisson.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-bold text-gray-900 text-sm">⏱️ Combien de temps ?</h4>
                <p className="text-xs text-gray-600">45-90 min. Vous gérez votre rythme.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-bold text-gray-900 text-sm">💳 Paiements ?</h4>
                <p className="text-xs text-gray-600">Espèces, Visa/Mastercard/AMEX, contactless. Bornes self-service simples.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-bold text-gray-900 text-sm">🍣 Qualité vs Prix ?</h4>
                <p className="text-xs text-gray-600">Génie de Sushiro : Volumes énormes + tech + zéro intermédiaires = qualité constante à prix démocratiques.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-lg font-bold text-purple-900 mb-3">🏛️ Un Peu d'Histoire : L'Invention du Kaiten-Zushi</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-purple-900 text-sm">🍺 L'Inspiration d'une Brasserie</h4>
                <p className="text-sm text-purple-800">
                  <strong>1958, Osaka :</strong> Yoshiaki Shiraishi, face à une pénurie de main d'œuvre, visite une usine Asahi Beer et voit des bouteilles sur un tapis roulant... <strong>L'eureka moment !</strong>
                </p>
              </div>
              <div>
                <p className="text-sm text-purple-800">
                  <strong>1970, Expo d'Osaka :</strong> Le kaiten-zushi devient phénomène mondial. Une solution locale devient révolution culturelle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">⚖️ Sushiro vs Concurrence : Qui Choisir ?</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h5 className="font-bold text-yellow-900 text-sm mb-1">🏆 Sushiro : Le Champion Technologique</h5>
                <p className="text-xs text-yellow-800">Meilleure fraîcheur (cuisson magasin), tech de pointe, desserts niveau salon de thé. <strong>Pour l'expérience complète et la qualité constante.</strong></p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-bold text-gray-900 text-sm mb-1">🎮 Kura Sushi : Le Ludique</h5>
                <p className="text-xs text-gray-600">Système "Bikkura Pon!" (jeu à chaque 5 assiettes), sans additifs. <strong>Parfait pour familles avec enfants jeunes.</strong></p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="font-bold text-gray-900 text-sm mb-1">🧂 Hama Sushi : Le Personnalisable</h5>
                <p className="text-xs text-gray-600">Variété de sauces soja, prix ultra-compétitifs. <strong>Pour les expérimentateurs de goûts.</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-8">
          <h4 className="font-semibold text-orange-900 mb-2">🎌 Message Final aux Visiteurs Francophones</h4>
          <p className="text-orange-800 text-sm">
            <strong>Sushiro n'est pas qu'un restaurant, c'est une initiation à la culture japonaise moderne.</strong>
            Vous y découvrirez comment le Japon fusionne tradition millénaire et innovation technologique,
            comment la qualité peut rimer avec accessibilité, et comment l'efficacité peut créer de la convivialité.
            <strong>Une expérience culturelle autant que culinaire !</strong>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/type-plat/kaiten-zushi" className="inline-flex items-center text-orange-600 font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux chaînes de Kaiten-zushi
          </Link>
        </div>
      </ContentSection>
    </div>
  );
}
