import Link from 'next/link';
import { ArrowLeft, Music, Gamepad2, Users, Clock, Star, Heart, TrendingUp } from 'lucide-react';
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
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
