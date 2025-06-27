import Link from 'next/link';
import { ArrowLeft, Music, Gamepad2, Users, Clock, Star, Heart, TrendingUp, History } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karaoke au Japon | Chaînes et Culture | Guide Restaurants Japonais',
  description: 'Guide complet du karaoke au Japon - Culture, chaînes populaires comme Big Echo et Karaoke Kan, prix, systèmes et expérience authentique japonaise.',
  keywords: [
    'karaoke japon', 'karaoke box', 'big echo', 'karaoke kan',
    'chant japonais', 'divertissement japon', 'culture karaoke',
    'salles privées', 'équipements modernes', 'expérience authentique'
  ],
  openGraph: {
    title: 'Karaoke au Japon | Culture et Chaînes Populaires',
    description: 'Découvrez la culture du karaoke au Japon avec nos guides des chaînes populaires et conseils pratiques',
    type: 'article',
    url: '/type-plat/karaoke',
  },
  alternates: {
    canonical: '/type-plat/karaoke',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KaraokePage() {
  const karaokeChains = [
    {
      name: 'Big Echo',
      slug: 'big-echo',
      japanese: 'ビッグエコー',
      description: 'Chaîne de karaoke populaire avec équipements modernes et ambiance conviviale',
      color: 'purple',
      icon: Music,
      features: ['Équipements modernes', 'Ambiance conviviale', 'Salles de groupe']
    },
    {
      name: 'Karaoke Kan',
      slug: 'karaoke-kan',
      japanese: 'カラオケ館',
      description: 'Karaoke de qualité avec salles privées et équipements premium',
      color: 'blue',
      icon: Gamepad2,
      features: ['Équipements premium', 'Salles privées', 'Service de qualité']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux types de cuisine
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <Music className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Karaoke</h1>
              <p className="text-gray-600">カラオケ - Divertissement Musical Japonais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction à la culture du karaoke */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">La Culture du Karaoke au Japon</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Le karaoke est né au Japon dans les années 1970 et est devenu un élément central 
              de la culture sociale japonaise. Plus qu'un simple divertissement, c'est un moyen 
              d'expression, de détente et de socialisation après le travail ou entre amis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les "karaoke box" japonais offrent des salles privées équipées de systèmes audio 
              de haute qualité, d'écrans tactiles pour sélectionner les chansons, et souvent 
              de services de restauration. C'est l'endroit parfait pour s'amuser sans contrainte.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-purple-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Social</h3>
                <p className="text-sm text-gray-600">Activité de groupe populaire après le travail</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <Music className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Varié</h3>
                <p className="text-sm text-gray-600">Millions de chansons japonaises et internationales</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <Heart className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Décontracté</h3>
                <p className="text-sm text-gray-600">Environnement sans jugement pour s'exprimer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chaînes de karaoke */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Chaînes de Karaoke Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {karaokeChains.map((chain) => {
              const IconComponent = chain.icon;
              return (
                <Link 
                  key={chain.slug}
                  href={`/chaines/${chain.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${chain.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{chain.japanese}</p>
                        <p className="text-gray-700 text-sm mb-3">{chain.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {chain.features.map((feature, index) => (
                            <span 
                              key={index}
                              className={`text-xs px-2 py-1 bg-${chain.color}-100 text-${chain.color}-800 rounded-full`}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prix et système */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <Clock className="w-5 h-5 inline mr-2 text-purple-600" />
              Prix et Système
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">30 minutes</span>
                <span className="font-medium">¥400-600</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">1 heure</span>
                <span className="font-medium">¥800-1200</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Tout-inclus (3h)</span>
                <span className="font-medium">¥1500-2500</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Pack boissons</span>
                <span className="font-medium">+¥200-400</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Astuce:</strong> Les prix sont souvent moins chers en journée 
                et durant la semaine. Certaines chaînes offrent des forfaits "nomihoudai" 
                (boissons à volonté) très avantageux.
              </p>
            </div>
          </div>

          {/* Comment utiliser */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <Star className="w-5 h-5 inline mr-2 text-purple-600" />
              Comment Utiliser
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Réservation</p>
                  <p className="text-gray-600 text-sm">Choisissez la durée et le nombre de personnes au comptoir</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Sélection des chansons</p>
                  <p className="text-gray-600 text-sm">Utilisez l'écran tactile pour rechercher vos chansons favorites</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Chantez !</p>
                  <p className="text-gray-600 text-sm">Alternez entre les participants, amusez-vous sans contrainte</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Commandes</p>
                  <p className="text-gray-600 text-sm">Commandez boissons et snacks directement depuis la salle</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Culture et étiquette */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <TrendingUp className="w-5 h-5 inline mr-2 text-purple-600" />
            Culture et Étiquette du Karaoke
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">✅ À Faire</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Encourager les autres participants</li>
                <li>• Choisir des chansons connues du groupe</li>
                <li>• Partager le microphone équitablement</li>
                <li>• Applaudir après chaque performance</li>
                <li>• Commander des boissons pour maintenir l'ambiance</li>
                <li>• Respecter le tour de chacun</li>
                <li>• Aider les débutants à utiliser le système</li>
                <li>• Maintenir une ambiance positive et bienveillante</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">❌ À Éviter</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Monopoliser le microphone</li>
                <li>• Critiquer les performances des autres</li>
                <li>• Choisir des chansons trop longues</li>
                <li>• Faire trop de bruit dans les couloirs</li>
                <li>• Oublier de payer sa part des consommations</li>
                <li>• Interrompre quelqu'un qui chante</li>
                <li>• Ignorer les demandes des autres</li>
                <li>• Abuser de l'alcool (si disponible)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Histoire et évolution du karaoke */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <History className="w-5 h-5 inline mr-2 text-purple-600" />
            Histoire du Karaoke au Japon
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">1971 - Les Origines</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Daisuke Inoue invente la première machine de karaoke à Kobe. Le terme "karaoke" 
                signifie littéralement "orchestre vide" (kara = vide, oke = orchestre).
              </p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">Années 1980 - Explosion Populaire</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Le karaoke se démocratise dans tout le Japon. Les premiers "karaoke box" 
                privés ouvrent, révolutionnant l'expérience sociale japonaise.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">Années 1990-2000 - Âge d'Or</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expansion massive des chaînes de karaoke. Introduction de nouvelles technologies : 
                CD+G, puis systèmes numériques avec écrans tactiles.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-medium text-gray-900 mb-2">2010-Aujourd'hui - Innovation Continue</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Intégration de l'IA pour l'amélioration vocale, streaming musical, 
                réalité virtuelle et connectivité sociale avancée.
              </p>
            </div>
          </div>
        </div>

        {/* Types d'établissements */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <Music className="w-5 h-5 inline mr-2 text-purple-600" />
            Types d'Établissements de Karaoke
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Karaoke Box</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Salles privées pour groupes, l'expérience la plus populaire et intime.
              </p>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• 2-20 personnes</div>
                <div>• Intimité garantie</div>
                <div>• Service en salle</div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Karaoke Bar</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Espaces ouverts où l'on chante devant d'autres clients, plus traditionnel.
              </p>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• Ambiance conviviale</div>
                <div>• Performance publique</div>
                <div>• Moins cher</div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Premium Lounge</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Établissements haut de gamme avec service personnalisé et équipements premium.
              </p>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• Luxe et confort</div>
                <div>• Service concierge</div>
                <div>• Équipements pro</div>
              </div>
            </div>
          </div>
        </div>

        {/* Conseils pour débutants */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <Heart className="w-5 h-5 inline mr-2 text-purple-600" />
            Guide du Débutant
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">🎤 Premières Étapes</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">1. Choisissez votre groupe</p>
                  <p className="text-gray-600 text-xs">2-6 personnes pour commencer, ambiance décontractée</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">2. Réservez à l'avance</p>
                  <p className="text-gray-600 text-xs">Surtout en soirée et week-end, 1-2h recommandées</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-900 text-sm">3. Commencez simple</p>
                  <p className="text-gray-600 text-xs">Chansons connues, durée courte, prenez confiance</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">🎵 Choix des Chansons</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-50 p-2 rounded">
                  <span className="font-medium text-green-800">Débutant :</span>
                  <span className="text-green-700"> Chansons populaires, refrains simples</span>
                </div>
                <div className="bg-blue-50 p-2 rounded">
                  <span className="font-medium text-blue-800">Intermédiaire :</span>
                  <span className="text-blue-700"> Variété, expérimentation de styles</span>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <span className="font-medium text-purple-800">Avancé :</span>
                  <span className="text-purple-700"> Chansons techniques, performances</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm font-medium text-yellow-800 mb-1">💡 Astuce Pro</p>
                <p className="text-xs text-yellow-700">
                  Préparez une liste de 3-5 chansons favorites avant d'arriver. 
                  Cela vous évitera le stress du choix en temps réel !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact social et culturel */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <TrendingUp className="w-5 h-5 inline mr-2 text-purple-600" />
            Impact Social et Culturel
          </h3>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Le karaoke au Japon dépasse largement le simple divertissement. Il joue un rôle 
              crucial dans la cohésion sociale et professionnelle, servant d'exutoire après 
              les longues journées de travail et permettant de renforcer les liens entre collègues.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">🏢 Dans le Monde Professionnel</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Team building informel après le travail</li>
                  <li>• Expression libérée hors du cadre hiérarchique</li>
                  <li>• Découverte de nouvelles facettes des collègues</li>
                  <li>• Tradition du "nomikai" (sortie boire/chanter)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">👨‍👩‍👧‍👦 Dans la Société</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Activité intergénérationnelle populaire</li>
                  <li>• Espace d'expression personnelle libérée</li>
                  <li>• Réduction du stress et bien-être mental</li>
                  <li>• Préservation de la culture musicale japonaise</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Cette pratique sociale unique reflète des valeurs japonaises importantes : l'importance 
              du groupe, le respect mutuel, et la recherche d'harmonie sociale. Le karaoke offre un 
              espace sûr où la timidité habituelle peut être temporairement mise de côté au profit 
              de l'expression et du partage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
