import Link from 'next/link';
import { ArrowLeft, User, Coffee, Heart, Eye, Globe, Clock, BookOpen, Lightbulb, Star, Award, ChefHat, Utensils } from 'lucide-react';
import GuideViewTracker from '../../../../components/GuideViewTracker';
import { metadata } from './metadata';

export { metadata };

export default function CultureGaishokuFrancaisPage() {
  return (
    <>
      <GuideViewTracker guideName="culture-gaishoku-francais" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/guides/articles" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux articles
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Globe className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Du « Omotenashi » au « Ohitorisama »
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                La Culture Gastronomique Japonaise vue par un Français
              </p>
              <p className="text-lg text-blue-200 mb-8">
                Une analyse approfondie des différences culturelles entre la France et le Japon dans l'art de manger au restaurant
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🇫🇷 Perspective française
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🇯🇵 Culture japonaise
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🧠 Analyse anthropologique
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ Lecture 15 min
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction & Table des matières */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Coffee className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Imaginez-vous, français débarquant à Tokyo, poussant pour la première fois la porte d'un petit restaurant de ramen. 
                Un <strong>oshibori</strong> (serviette chaude) vous est immédiatement tendu, l'eau arrive sans que vous la demandiez, 
                et au moment de partir, impossible de laisser un pourboire — le serveur refuse poliment mais fermement.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cette scène, anodine en apparence, révèle un <strong>fossé culturel fascinant</strong> entre deux nations pourtant 
                unies par leur passion pour la gastronomie. Derrière ces gestes simples se cachent des philosophies 
                diamétralement opposées : l'« <span className="font-semibold text-purple-600">omotenashi</span> » japonais 
                face au « <span className="font-semibold text-blue-600">service compris</span> » français.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-8">
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">L'essence de cette analyse</p>
                    <p className="text-gray-700">
                      Cette exploration ne cherche pas à établir une hiérarchie entre les cultures, mais à décoder 
                      les mécanismes sociaux, historiques et spirituels qui façonnent nos expériences culinaires respectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table des matières */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Plan de l'analyse</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#chapitre-1" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Chapitre 1 : Philosophie du Service</h3>
                <p className="text-sm text-blue-600">« Omotenashi » vs « Le Service » - Deux visions du monde</p>
                <div className="flex items-center mt-2 text-xs text-blue-500">
                  <Clock className="h-3 w-3 mr-1" />
                  4 min de lecture
                </div>
              </a>
              
              <a href="#chapitre-2" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Chapitre 2 : Spécialisation vs Généralisme</h3>
                <p className="text-sm text-green-600">Maîtrise du « Senmonten » face à l'art du menu complet</p>
                <div className="flex items-center mt-2 text-xs text-green-500">
                  <Clock className="h-3 w-3 mr-1" />
                  3 min de lecture
                </div>
              </a>
              
              <a href="#chapitre-3" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">Chapitre 3 : Socialité Alimentaire</h3>
                <p className="text-sm text-orange-600">« Ohitorisama » vs la culture du partage</p>
                <div className="flex items-center mt-2 text-xs text-orange-500">
                  <Clock className="h-3 w-3 mr-1" />
                  4 min de lecture
                </div>
              </a>
              
              <a href="#chapitre-4" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Chapitre 4 : Expériences Uniques</h3>
                <p className="text-sm text-purple-600">Découvertes culinaires inconnues en France</p>
                <div className="flex items-center mt-2 text-xs text-purple-500">
                  <Clock className="h-3 w-3 mr-1" />
                  3 min de lecture
                </div>
              </a>
              
              <a href="#chapitre-5" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Chapitre 5 : Esthétique Culinaire</h3>
                <p className="text-sm text-red-600">« Shun » et « Moritsuke » - L'art au-delà du goût</p>
                <div className="flex items-center mt-2 text-xs text-red-500">
                  <Clock className="h-3 w-3 mr-1" />
                  3 min de lecture
                </div>
              </a>
              
              <a href="#conclusion" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">Conclusion & Conseils</h3>
                <p className="text-sm text-gray-600">Recommandations pour les voyageurs français</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  2 min de lecture
                </div>
              </a>
            </div>
          </div>

          {/* Chapitre 1 */}
          <section id="chapitre-1" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <Heart className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Chapitre 1 : Philosophie du Service</h2>
                  <p className="text-lg text-blue-600">L'« Omotenashi » contre « Le Service »</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">L'« Omotenashi » : L'Art de l'Accueil Invisible</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Dans un restaurant japonais, <strong>l'absence de pourboire</strong> n'est pas un détail économique, 
                  mais l'expression d'une philosophie profonde. L'« omotenashi » (おもてなし) signifie littéralement 
                  « sans façade » — servir avec un cœur authentique, sans arrière-pensée financière.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                  <h4 className="font-semibold text-blue-900 mb-3">🔍 Analyse : Les manifestations concrètes</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>L'oshibori :</strong> Ce n'est pas qu'une serviette, c'est un rituel de purification datant de l'époque Heian</li>
                    <li><strong>L'eau gratuite :</strong> Symbole d'hospitalité inconditionnelle, contrairement aux eaux payantes françaises</li>
                    <li><strong>L'anticipation :</strong> Le service japonais excelle dans la lecture des besoins non exprimés</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Le « Service Compris » Français : Reconnaissance du Professionnalisme</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  En France, la relation client-serveur repose sur un <strong>respect mutuel entre égaux</strong>. 
                  Le serveur n'est pas au service inconditionnel du client, mais un professionnel qui mérite 
                  considération. Cette philosophie se traduit par une culture du pourboire subtile mais significative.
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 my-8">
                  <h4 className="font-semibold text-gray-900 mb-3">🤝 Comparaison des mentalités</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">🇯🇵 Mentalité japonaise</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Service = expression naturelle de l'hospitalité</li>
                        <li>• Qualité intégrée dans le prix final</li>
                        <li>• Relation asymétrique client/personnel</li>
                        <li>• Excellence par devoir moral</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-red-700 mb-2">🇫🇷 Mentalité française</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Service = compétence professionnelle</li>
                        <li>• Qualité récompensée individuellement</li>
                        <li>• Relation d'égal à égal</li>
                        <li>• Excellence par reconnaissance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Impact sur l'Expérience Client</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cette différence philosophique crée des expériences diamétralement opposées. Le Français habitué 
                  à négocier sa relation avec le serveur peut être déstabilisé par la <strong>prévenance 
                  systématique</strong> japonaise, tandis que le Japonais peut percevoir la réserve française 
                  comme de la froideur.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Conseil pratique pour les voyageurs français</h4>
                      <p className="text-yellow-700">
                        Au Japon, abandonnez l'idée de « mériter » un bon service par votre comportement. 
                        Il vous sera offert inconditionnellement. Votre rôle est de l'accepter avec gratitude, 
                        non de le négocier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapitre 2 */}
          <section id="chapitre-2" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <ChefHat className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Chapitre 2 : Spécialisation vs Généralisme</h2>
                  <p className="text-lg text-green-600">L'Art du « Senmonten » face à la Tradition du Menu Complet</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le « Senmonten » : L'Obsession de la Perfection</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ramen, sushi, tempura, tonkatsu... Au Japon, la <strong>spécialisation extrême</strong> est érigée 
                  en art de vivre. Cette approche, héritée des contraintes historiques de l'époque d'Edo, répond 
                  aujourd'hui à une logique économique implacable et à une quête spirituelle de perfectionnement.
                </p>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-6">
                  <h4 className="font-semibold text-green-900 mb-3">📈 Les avantages de la spécialisation</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-green-800">
                    <div>
                      <h5 className="font-medium mb-2">🎯 Qualité</h5>
                      <p className="text-sm">Maîtrise absolue d'une technique</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">⚡ Efficacité</h5>
                      <p className="text-sm">Optimisation des processus</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">🏷️ Coûts</h5>
                      <p className="text-sm">Réduction du gaspillage</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">La Tradition Française : L'Art de la Composition</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  À l'opposé, la France cultive l'art de la <strong>composition culinaire</strong>. Restaurant, 
                  bistro ou brasserie, tous proposent l'expérience complète : entrée, plat, dessert. Cette approche 
                  reflète une conception de la gastronomie comme art total, orchestré par un chef-créateur.
                </p>

                <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6 my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">🎭 Deux philosophies du métier culinaire</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-green-200">
                      <h5 className="font-medium text-green-700 mb-3">🇯🇵 Le « Shokunin » japonais</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Artisan-spécialiste</strong> d'une technique unique</li>
                        <li>• Perfectionnement par la répétition</li>
                        <li>• Héritage des traditions de corporation</li>
                        <li>• Exemple : 30 ans à faire des sushi</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-700 mb-3">🇫🇷 Le « Chef » français</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Chef d'orchestre</strong> culinaire</li>
                        <li>• Créativité par l'assemblage</li>
                        <li>• Innovation constante</li>
                        <li>• Exemple : carte renouvelée saisonnièrement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Conséquences Pratiques pour le Voyageur</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cette différence d'approche transforme radicalement l'expérience client. Au Japon, 
                  <strong>choisir un restaurant = choisir un plat</strong>. En France, choisir un restaurant 
                  = choisir un univers culinaire dans lequel composer son repas.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Stratégie pour les Français au Japon</h4>
                      <p className="text-blue-700 mb-3">
                        Abandonnez l'idée du « repas complet ». Voyez chaque spécialité comme une 
                        <strong> expérience autonome</strong> à savourer. Un bol de ramen peut être aussi 
                        satisfaisant qu'un repas de trois services.
                      </p>
                      <p className="text-sm text-blue-600">
                        💡 <strong>Astuce :</strong> Pour reproduire l'expérience française, enchaînez plusieurs 
                        restaurants spécialisés dans la même soirée !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapitre 3 */}
          <section id="chapitre-3" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <User className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Chapitre 3 : Socialité Alimentaire</h2>
                  <p className="text-lg text-orange-600">« Ohitorisama » : La Révolution du Repas Solitaire</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">L'Art Japonais de Manger Seul</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Au Japon, manger seul n'est ni un échec social ni un acte de désespoir, mais une 
                  <strong>démarche volontaire et respectée</strong>. L'« ohitorisama » (お一人様) transforme 
                  la solitude en moment privilégié d'introspection gustative.
                </p>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-6">
                  <h4 className="font-semibold text-orange-900 mb-3">🏗️ L'architecture de la solitude</h4>
                  <div className="space-y-4 text-orange-800">
                    <div>
                      <h5 className="font-medium">Le comptoir « kauntā-seki »</h5>
                      <p className="text-sm">
                        Dispositif social génial : vous êtes seul mais pas isolé, observateur privilégié 
                        du spectacle culinaire.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium">La machine à tickets « shokkenki »</h5>
                      <p className="text-sm">
                        Élimination de l'interaction sociale obligatoire. Vous commandez, payez et mangez 
                        à votre rythme.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">La Culture Française du Partage</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  En France, le repas est avant tout un <strong>acte social</strong>. Dîner seul au restaurant, 
                  surtout le soir, reste socialement marqué. La conception française du restaurant comme 
                  « salle à manger collective » s'oppose à la vision japonaise d'« espace de contemplation 
                  individuelle ».
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">🧠 Psychologie comparative</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-orange-700 mb-3">🇯🇵 Philosophie japonaise</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Repas = méditation gustative</li>
                        <li>• Concentration sur l'essence du plat</li>
                        <li>• Inspiration du « Dō » (voie spirituelle)</li>
                        <li>• Silence valorisé</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-700 mb-3">🇫🇷 Philosophie française</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Repas = moment de convivialité</li>
                        <li>• Partage et discussion privilégiés</li>
                        <li>• Héritage du « salon » intellectuel</li>
                        <li>• Conversation valorisée</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Revolution Culturelle et Modernité</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  L'« ohitorisama » révèle une modernité sociale avancée : <strong>l'acceptation de 
                  l'individualisme positif</strong>. Cette culture permet aux personnes seules, nombreuses 
                  dans la société japonaise urbaine, de continuer à participer pleinement à la vie 
                  gastronomique.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Expérience recommandée pour les Français</h4>
                      <p className="text-yellow-700 mb-3">
                        Osez le repas solitaire au comptoir d'un restaurant de ramen ou de sushi. 
                        Découvrez le plaisir de la <strong>contemplation gastronomique</strong> 
                        sans la pression sociale de la conversation.
                      </p>
                      <p className="text-sm text-yellow-600">
                        🎯 <strong>Objectif :</strong> Développer une nouvelle relation, plus intime, 
                        avec la nourriture et ses saveurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapitre 4 */}
          <section id="chapitre-4" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <Star className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Chapitre 4 : Expériences Uniques</h2>
                  <p className="text-lg text-purple-600">Découvertes Culinaires Inconnues en France</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">L'Izakaya : Plus qu'un Simple Pub</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  L'izakaya incarne <strong>l'anti-restaurant français</strong> : ici, on commande au fur et 
                  à mesure, on partage des petites assiettes, on boit sans programme défini. Cette approche 
                  « anarchique » crée une convivialité unique, libérée des codes stricts du service à la française.
                </p>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-6">
                  <h4 className="font-semibold text-purple-900 mb-3">🍻 Spécificités de l'izakaya</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-purple-800">
                    <div>
                      <h5 className="font-medium mb-2">Otōshi (お通し)</h5>
                      <p className="text-sm">Amuse-bouche automatique non négociable</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Nomihōdai (飲み放題)</h5>
                      <p className="text-sm">Formule « boissons à volonté » révolutionnaire</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Commande progressive</h5>
                      <p className="text-sm">Anti-planification, pure spontanéité</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Ambiance décontractée</h5>
                      <p className="text-sm">Acceptable de faire du bruit, rare au Japon</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Kaiten-zushi : Le Ballet Technologique</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les sushi tournants représentent un <strong>génie d'innovation démocratique</strong>. 
                  Ils transforment l'expérience élitiste du sushi en spectacle familial accessible, 
                  intégrant IA, robotique et gamification dans l'acte alimentaire.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Tachịnomi : L'Anti-Zinc Parisien</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Si le zinc parisien cultive l'art de la conversation matinale au café, le tachinomi 
                  japonais propose l'exact opposé : <strong>boire debout en fin de journée</strong>, 
                  dans une intimité silencieuse et une proximité physique paradoxalement respectueuse.
                </p>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">🎪 Comparatif des « troisièmes lieux »</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <h5 className="font-medium text-purple-700 mb-3">🇯🇵 Tachinomi japonais</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Verticalité assumée</li>
                        <li>• Silence méditatif</li>
                        <li>• Paiement au comptant</li>
                        <li>• Rotation rapide clientèle</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-700 mb-3">🇫🇷 Zinc parisien</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Position mixte (assis/debout)</li>
                        <li>• Conversation sociale</li>
                        <li>• Système d'addition</li>
                        <li>• Séjour prolongé accepté</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Dépachika : L'Épicerie Fine Réinventée</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Les sous-sols de grands magasins japonais révolutionnent le concept français d'épicerie fine. 
                  Ici, <strong>l'artisanat culinaire rencontre la production de masse</strong> sans perdre 
                  son âme, créant un paradoxe fascinant pour l'œil français habitué à opposer qualité et quantité.
                </p>

                <div className="bg-indigo-50 rounded-lg p-6 my-6">
                  <div className="flex items-start">
                    <Utensils className="h-5 w-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-indigo-800 mb-2">Programme découverte pour Français</h4>
                      <ol className="text-indigo-700 space-y-2 text-sm">
                        <li><strong>1.</strong> Commencez par un izakaya pour briser vos habitudes de service</li>
                        <li><strong>2.</strong> Expérimentez le tachinomi pour découvrir la socialité verticale</li>
                        <li><strong>3.</strong> Visitez un kaiten-zushi pour l'aspect technologique</li>
                        <li><strong>4.</strong> Explorez les depachika pour comprendre la démocratisation du raffinement</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapitre 5 */}
          <section id="chapitre-5" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <Eye className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Chapitre 5 : Esthétique Culinaire</h2>
                  <p className="text-lg text-red-600">« Shun » et « Moritsuke » : L'Art au-delà du Goût</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Le « Shun » : Philosophie Temporelle de l'Ingrédient</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Là où la cuisine française privilégie la <strong>transformation créative</strong> des ingrédients, 
                  la cuisine japonaise cultive leur <strong>vérité temporelle</strong>. Le « shun » (旬) ne se contente 
                  pas d'identifier la saison optimale, il subdivise cette perfection en « hashiri » (premiers fruits), 
                  « sakari » (apogée) et « nagori » (nostalgie de la fin).
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6">
                  <h4 className="font-semibold text-red-900 mb-3">🍃 Les trois temps du shun</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-red-800">
                    <div>
                      <h5 className="font-medium mb-2">Hashiri (走り)</h5>
                      <p className="text-sm">Premiers fruits, rares et chers, goût encore fragile</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Sakari (盛り)</h5>
                      <p className="text-sm">Apogée gustative, abondance et perfection</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Nagori (名残)</h5>
                      <p className="text-sm">Fin de saison, nostalgie et concentration</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">« Moritsuke » : L'Art de Faire Vivre l'Assiette</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Contrairement à la <strong>composition géométrique française</strong>, le « moritsuke » (盛り付け) 
                  japonais privilégie l'asymétrie naturelle. Chaque assiette devient un paysage miniature où 
                  les aliments « habitent » l'espace plutôt que de le « décorer ».
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">🎨 Deux esthétiques opposées</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-700 mb-3">🇯🇵 Esthétique japonaise</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Asymétrie naturelle</strong></li>
                        <li>• Vide valorisé (« ma »)</li>
                        <li>• Harmonie avec la vaisselle</li>
                        <li>• Évocation du paysage</li>
                        <li>• Imperfection assumée (« wabi-sabi »)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h5 className="font-medium text-blue-700 mb-3">🇫🇷 Esthétique française</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Composition géométrique</strong></li>
                        <li>• Plénitude visuelle</li>
                        <li>• Assiette-canvas neutre</li>
                        <li>• Architecture gustative</li>
                        <li>• Perfection technique recherchée</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">L'Utsuwa : Quand le Contenant Devient Art</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  La révolution conceptuelle japonaise réside dans la sacralisation de l'« utsuwa » (器, le récipient). 
                  Là où l'assiette française est un <strong>support neutre</strong> valorisant la création du chef, 
                  l'utsuwa japonais devient <strong>partenaire créatif</strong> du cuisinier.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">La citation de Rosanjin (北大路魯山人)</h4>
                      <p className="text-orange-700 mb-3 italic">
                        « La vaisselle est le kimono de la nourriture »
                      </p>
                      <p className="text-sm text-orange-600">
                        Cette métaphore révèle la conception japonaise : chaque plat mérite une parure 
                        spécifique, choisie pour révéler sa beauté intrinsèque.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Impact sur l'Expérience Gustative</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cette différence esthétique transforme la <strong>temporalité du repas</strong>. 
                  La cuisine française invite à la progression narrative (entrée → plat → dessert), 
                  tandis que la cuisine japonaise propose une <strong>contemplation statique</strong> 
                  de chaque élément dans sa perfection momentanée.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                  <div className="flex items-start">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Conseil d'appréciation pour les Français</h4>
                      <p className="text-yellow-700 mb-3">
                        Avant de goûter, <strong>observez</strong>. Admirez la relation entre l'aliment et son contenant, 
                        la façon dont les couleurs dialoguent, dont les formes s'équilibrent. Cette contemplation 
                        préliminaire fait partie intégrante de l'expérience gustative japonaise.
                      </p>
                      <p className="text-sm text-yellow-600">
                        🎯 <strong>Exercice :</strong> Photographiez mentalement chaque plat avant de le déguster. 
                        Demandez-vous quelle émotion ou quel paysage il évoque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 border border-blue-200">
              <div className="flex items-center mb-8">
                <Globe className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Conclusion : Vers une Appréciation Éclairée</h2>
                  <p className="text-lg text-blue-600">Recommandations pour les Voyageurs Français</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Synthèse des Différences Fondamentales</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Notre exploration révèle que les différences entre les cultures gastronomiques française 
                  et japonaise ne relèvent pas de simples préférences, mais de <strong>visions du monde 
                  fondamentalement distinctes</strong> : l'une privilégiant la socialisation et la créativité 
                  collective, l'autre valorisant l'introspection et la perfection individuelle.
                </p>

                <div className="bg-white rounded-xl p-6 my-8 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-4">🗾 Guide pratique pour l'immersion culturelle</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800 mb-1">Libérez-vous du pourboire</h5>
                        <p className="text-sm text-green-700">
                          Acceptez l'omotenashi comme un cadeau culturel. Votre gratitude s'exprime par un simple 
                          « gochisōsama deshita » en sortant.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-800 mb-1">Embrassez la spécialisation</h5>
                        <p className="text-sm text-blue-700">
                          Un excellent bol de ramen vaut tous les menus à trois services. Cherchez l'excellence 
                          dans la simplicité, non la variété.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-full mr-4">
                        <span className="text-purple-600 font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-800 mb-1">Osez l'ohitorisama</h5>
                        <p className="text-sm text-purple-700">
                          Installez-vous au comptoir, seul(e), et découvrez le plaisir de la méditation gustative. 
                          C'est une expérience libératrice.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-orange-50 rounded-lg">
                      <div className="bg-orange-100 p-2 rounded-full mr-4">
                        <span className="text-orange-600 font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800 mb-1">Explorez les nouveautés</h5>
                        <p className="text-sm text-orange-700">
                          Izakaya, tachinomi, kaiten-zushi, depachika : ces formats n'existent pas en France. 
                          Profitez-en pour élargir votre répertoire social.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <span className="text-red-600 font-bold">5</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-800 mb-1">Cultivez votre regard</h5>
                        <p className="text-sm text-red-700">
                          Observez la vaisselle, la disposition des aliments, la relation avec la saison. 
                          L'esthétique japonaise enrichira votre perception culinaire.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">L'Enrichissement Mutuel</h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Comprendre la culture gastronomique japonaise ne signifie pas l'adopter intégralement, 
                  mais <strong>enrichir sa propre approche</strong> de la nourriture et du service. 
                  Cette expérience peut transformer votre relation à la cuisine, même de retour en France.
                </p>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 my-8">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl">
                      🌸 L'art de voyager avec l'esprit ouvert
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      « Le voyage ne vous apprend pas seulement à découvrir l'autre, mais à redécouvrir 
                      qui vous êtes. » <br />
                      <span className="text-sm italic text-gray-600">
                        — En explorant la gastronomie japonaise, questionnez vos propres habitudes françaises.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    Bon voyage culinaire au Japon ! 🇯🇵🍜
                  </p>
                  <p className="text-sm text-gray-600">
                    Que cette analyse vous accompagne dans vos découvertes gustatives et culturelles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation vers d'autres guides */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Poursuivez votre exploration
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/guides/comment-commander" className="group">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 group-hover:shadow-md transition-all duration-200">
                  <Utensils className="h-8 w-8 text-red-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Comment Commander</h4>
                  <p className="text-sm text-gray-600">Maîtrisez les systèmes de commande japonais</p>
                </div>
              </Link>
              
              <Link href="/guides/culture-etiquette" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 group-hover:shadow-md transition-all duration-200">
                  <Heart className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Culture & Étiquette</h4>
                  <p className="text-sm text-gray-600">Codes culturels et bonnes manières</p>
                </div>
              </Link>
              
              <Link href="/guides/articles" className="group">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 group-hover:shadow-md transition-all duration-200">
                  <BookOpen className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Autres Articles</h4>
                  <p className="text-sm text-gray-600">Découvrez nos analyses approfondies</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
