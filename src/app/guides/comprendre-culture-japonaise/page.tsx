import Link from 'next/link';
import { ArrowLeft, Book, Heart, Users, Globe, Brain, Lightbulb, MessageCircle, Eye, Handshake, Coffee } from 'lucide-react';
import GuideViewTracker from '../../../components/GuideViewTracker';
import { metadata } from './metadata';

export { metadata };

export default function ComprendreCultureJaponaisePage() {
  return (
    <>
      <GuideViewTracker guideName="comprendre-culture-japonaise" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/guides" 
              className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour aux guides
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Brain className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprendre la Culture Japonaise
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
                Guide complet pour décoder les comportements et l'esprit japonais<br />
                <span className="text-lg opacity-90">Au-delà des stéréotypes : une analyse approfondie de la mentalité japonaise</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-white/20 px-6 py-3 rounded-lg">
                  <span className="text-sm font-medium">🎌 Culture profonde</span>
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-lg">
                  <span className="text-sm font-medium">🧠 Psychologie sociale</span>
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-lg">
                  <span className="text-sm font-medium">🤝 Communication efficace</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Book className="h-6 w-6 mr-3 text-purple-600" />
              Table des Matières
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="#introduction" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <h3 className="font-semibold text-purple-800">Introduction</h3>
                  <p className="text-sm text-purple-600">Au-delà des stéréotypes</p>
                </a>
                <a href="#fondements" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <h3 className="font-semibold text-blue-800">Partie 1 : Fondements de l'esprit japonais</h3>
                  <p className="text-sm text-blue-600">Géographie, nature et spiritualité</p>
                </a>
                <a href="#grammaire-sociale" className="block p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <h3 className="font-semibold text-green-800">Partie 2 : Grammaire sociale</h3>
                  <p className="text-sm text-green-600">Concepts clés des interactions</p>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#regard-etranger" className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <h3 className="font-semibold text-orange-800">Partie 3 : Le regard sur l'étranger</h3>
                  <p className="text-sm text-orange-600">Japonais et étrangers</p>
                </a>
                <a href="#guide-pratique" className="block p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <h3 className="font-semibold text-red-800">Partie 4 : Guide pratique quotidien</h3>
                  <p className="text-sm text-red-600">Du métro au restaurant</p>
                </a>
                <a href="#concepts-complexes" className="block p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <h3 className="font-semibold text-indigo-800">Partie 5 : Concepts les plus déroutants</h3>
                  <p className="text-sm text-indigo-600">Modestie et excuses</p>
                </a>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Globe className="h-8 w-8 mr-3 text-purple-600" />
                Introduction : Au-delà des stéréotypes
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Le Japon fascine et intrigue. Entre l'image d'une société ultra-moderne à la pointe de la technologie 
                  et celle d'un pays où persistent d'anciennes traditions, ce pays suscite une curiosité mêlée d'admiration 
                  et parfois d'incompréhension. Pour les visiteurs et expatriés francophones habitués à une culture où la 
                  franchise, le débat et l'affirmation de soi sont des valeurs importantes, les comportements japonais 
                  peuvent sembler énigmatiques.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Objectif de ce guide</h3>
                  <p className="text-gray-700">
                    Ce guide vise à aller au-delà des stéréotypes usés des samouraïs, geishas et anime pour proposer 
                    une analyse approfondie de la mentalité japonaise. Il ne s'agit pas d'un simple manuel de savoir-vivre, 
                    mais d'une exploration du pourquoi derrière le comment.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Approche comparative</h4>
                  <p className="text-yellow-700">
                    Nous confronterons régulièrement les concepts japonais aux habitudes et modes de pensée français. 
                    Cette approche comparative n'a pas pour but de juger ou de hiérarchiser les cultures, mais d'éclairer 
                    les différences pour mieux les comprendre.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Partie 1 : Fondements */}
          <section id="fondements" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Brain className="h-8 w-8 mr-3 text-blue-600" />
                Partie 1 : Les Fondements de l'Esprit Japonais
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Pour comprendre le Japonais contemporain, il est indispensable de se pencher sur les fondations 
                qui ont façonné leur vision du monde pendant des siècles. La géographie, le climat, l'agriculture 
                et la spiritualité ont forgé un esprit collectif dont les traits subsistent aujourd'hui.
              </p>

              {/* 1.1 L'archipel et son influence */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-blue-500" />
                  1.1. L'archipel et son influence : entre isolement et ouverture
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    La situation géographique du Japon, archipel séparé du continent asiatique par la mer, 
                    est sans doute le facteur qui a le plus façonné son identité. Cette "mentalité insulaire" 
                    (<em>shimaguni konjō</em> 島国根性) ne doit pas être comprise comme un simple isolationnisme.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">🌊 Distance "parfaite"</h4>
                    <p className="text-gray-700 text-sm">
                      Cette distance du continent a été qualifiée d'"exquise" : assez loin pour être protégé 
                      des invasions et développer sa propre culture, mais assez proche pour permettre les échanges 
                      et l'absorption d'influences extérieures.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">✅ Capacité d'adaptation sélective</h4>
                    <p className="text-gray-700 text-sm">
                      Le Japon a importé massivement la culture, la religion et le système d'écriture chinois, 
                      mais n'a jamais fait que copier. Il a toujours pratiqué une assimilation sélective, 
                      en veillant à conserver son identité propre.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-800 mb-3">🎯 Exemple concret</h4>
                    <p className="text-gray-700 text-sm">
                      Développement des hiragana et katakana à partir des caractères chinois (kanji) 
                      pour adapter l'écriture à la langue japonaise.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">🔄 Dualité moderne</h4>
                  <p className="text-gray-700">
                    Cette dualité explique la méfiance initiale envers les éléments extérieurs 
                    (<em>yosomono</em> よそ者) qui coexiste avec une grande curiosité et une capacité 
                    d'adoption rapide des modes et technologies étrangères.
                  </p>
                </div>
              </div>

              {/* 1.2 Rythmes de la nature */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Coffee className="h-6 w-6 mr-2 text-green-500" />
                  1.2. Les rythmes de la nature : quatre saisons et riziculture
                </h3>
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Le climat et l'environnement naturel ont profondément marqué la sensibilité japonaise. 
                    Contrairement aux cultures nées dans des climats arides où la nature est souvent perçue 
                    comme un ennemi à conquérir, au Japon, la nature est une force puissante avec laquelle il faut coexister.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="font-semibold text-pink-800 mb-3">🌸 Les quatre saisons (<em>shiki</em> 四季)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Très marquées, elles rythment la vie, l'art et la gastronomie. Cette succession 
                      de floraisons, chaleur humide, couleurs d'automne et neige silencieuse a cultivé 
                      une esthétique de l'impermanence (<em>mujō</em> 無常) et une riche sensibilité émotionnelle.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-pink-700 text-sm font-medium">
                        Exemple : L'art du haïku qui nécessite des mots de saison (<em>kigo</em> 季語)
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">🌾 La riziculture (<em>inasaku</em> 稲作)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Pratiquée intensivement depuis plus de 1000 ans, elle a consolidé les fondements 
                      de la société japonaise. La culture du riz en rizières nécessite une coopération 
                      étroite et une gestion commune de l'eau, ressource vitale.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-yellow-700 text-sm font-medium">
                        Origine de la "société villageoise" (<em>mura shakai</em> 村社会) 
                        où le succès collectif prime sur le succès individuel
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.3 Harmonie et culture de la honte */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-red-500" />
                  1.3. Harmonie (<em>Wa</em> 和) et culture de la honte
                </h3>
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Le concept de <em>Wa</em> (和), que l'on peut traduire par harmonie, concorde, paix, 
                    est au fondement des relations sociales japonaises. Ce n'est pas un simple accord de surface, 
                    mais un objectif fondamental qui justifie de nombreux comportements.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-3">📜 Origine historique</h4>
                  <p className="text-gray-700 mb-4">
                    Déjà inscrit dans la Constitution en dix-sept articles du prince Shōtoku au VIIe siècle. 
                    Cette recherche impérative d'harmonie est régulée par un mécanisme social puissant.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">🆚 Différence culturelle majeure</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-red-700">Culture de la honte (Japon)</p>
                        <p className="text-gray-600">Basée sur le regard des autres et l'appartenance au groupe</p>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-700">Culture de la culpabilité (Occident)</p>
                        <p className="text-gray-600">Basée sur la conscience morale interne et le jugement divin</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h4 className="font-semibold text-orange-800 mb-3">🎭 Mécanisme social</h4>
                  <p className="text-gray-700">
                    Au Japon, la motivation principale des comportements n'est pas le péché ou la faute morale absolue, 
                    mais le regard des autres. La peur de "perdre la face" (<em>mentsu o ushinau</em> 面子を失う), 
                    de faire honte à sa famille ou son groupe, et d'être jugé par le "monde social" (<em>seken</em> 世間) 
                    constitue un mécanisme de régulation sociale très puissant.
                  </p>
                </div>
              </div>

              {/* 1.4 Spiritualité pratique */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="h-6 w-6 mr-2 text-purple-500" />
                  1.4. Spiritualité pratique et syncrétique
                </h3>
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Le rapport japonais à la religion est une source supplémentaire de perplexité pour les Occidentaux, 
                    particulièrement les Français habitués au monothéisme et à une séparation claire entre 
                    religieux et séculier.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-blue-800 mb-2">⛩️ Naissance</h4>
                    <p className="text-sm text-gray-700">Sanctuaire shinto</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-green-800 mb-2">💒 Mariage</h4>
                    <p className="text-sm text-gray-700">Église chrétienne (esthétique)</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-orange-800 mb-2">🕯️ Funérailles</h4>
                    <p className="text-sm text-gray-700">Cérémonie bouddhiste</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-3">🔄 Syncrétisme naturel</h4>
                  <p className="text-gray-700 mb-3">
                    Cette coexistence pacifique de croyances est possible car la religion est perçue non pas 
                    comme une doctrine exclusive et rigide, mais comme une tradition culturelle et un outil 
                    pratique pour assurer bonheur et prospérité dans ce monde (<em>genseiriyaku</em> 現世利益).
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-700 text-sm font-medium">
                      💡 Exemple : Célébrer Noël n'est pas un acte de foi chrétienne mais une habitude festive adoptée pour son aspect joyeux
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">🧩 Synthèse des fondements</h4>
                <p className="text-gray-700">
                  Ces fondements culturels — histoire d'adaptation sélective, sensibilité à la nature, 
                  structure sociale basée sur la coopération et l'harmonie, et spiritualité syncrétique — 
                  ont forgé une mentalité où l'adaptation au contexte est une seconde nature. 
                  Le "moi" japonais n'est pas une entité fixe et immuable comme l'idéal occidental, 
                  mais une entité fluide qui s'adapte constamment à l'environnement naturel, social et spirituel.
                </p>
              </div>
            </div>
          </section>

          {/* Partie 2 : Grammaire sociale */}
          <section id="grammaire-sociale" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <MessageCircle className="h-8 w-8 mr-3 text-green-600" />
                Partie 2 : La Grammaire Sociale - Concepts Clés des Interactions
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Pour décrypter les interactions quotidiennes japonaises, il est indispensable de maîtriser 
                quelques concepts fondamentaux qui fonctionnent comme une "grammaire" invisible mais omniprésente.
              </p>

              {/* 2.1 Honne et Tatemae */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-green-500" />
                  2.1. Honne et Tatemae : le vrai visage et le masque social
                </h3>
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Le couple <em>honne</em> et <em>tatemae</em> est probablement le concept le plus connu 
                    et le plus mal compris de la culture japonaise. <strong>Honne</strong> (本音) désigne les 
                    vrais sentiments, opinions profondes et désirs d'une personne. <strong>Tatemae</strong> (建前) 
                    désigne le comportement ou les opinions affichés publiquement pour répondre aux attentes 
                    sociales et maintenir l'harmonie (wa).
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-semibold text-red-800 mb-3">❌ Perception française</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Pour les Français habitués à valoriser la franchise et l'expression d'opinions, 
                      cette distinction peut facilement être perçue comme de l'hypocrisie ou de la malhonnêteté.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-red-700 text-sm">
                        "Pourquoi ne disent-ils pas ce qu'ils pensent vraiment ?"
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">✅ Réalité japonaise</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Le tatemae n'est pas un "mensonge" destiné à tromper, mais un lubrifiant social 
                      indispensable. C'est un mécanisme de protection pour éviter les frictions, 
                      ne pas blesser autrui et maintenir des relations harmonieuses.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-green-700 text-sm">
                        Priorité aux relations sur l'expression de la vérité brute
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎭 "Le sourire qui cache la colère"</h4>
                  <p className="text-yellow-700">
                    Un sourire poli et des hochements de tête peuvent masquer un profond désaccord 
                    ou un grand malaise. Cette réalité est bien résumée par la notion de "sourire qui cache la colère".
                  </p>
                </div>
              </div>

              {/* 2.2 Uchi-Soto */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-500" />
                  2.2. Uchi-Soto : les cercles de confiance
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Le concept Uchi-Soto est un autre pilier de la grammaire sociale japonaise. 
                    Il divise le monde en deux sphères distinctes : <strong>Uchi</strong> (ウチ, "l'intérieur") 
                    et <strong>Soto</strong> (ソト, "l'extérieur").
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">🏠 Uchi (Intérieur)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Cercle d'appartenance, "chez soi" au sens large : famille, entreprise, 
                      club scolaire, etc. À l'intérieur de ce cercle :
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Relations plus informelles</li>
                      <li>• Communication plus directe</li>
                      <li>• Dépendance émotionnelle acceptée (<em>amae</em> 甘え)</li>
                      <li>• Attente de bienveillance mutuelle</li>
                    </ul>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-800 mb-3">🌍 Soto (Extérieur)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Toutes les personnes n'appartenant pas au groupe. 
                      Les interactions avec le Soto sont régies par :
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Codes beaucoup plus formels</li>
                      <li>• Politesse respectueuse</li>
                      <li>• Certaine distance</li>
                      <li>• Niveaux de keigo (langage honorifique)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">🔄 Changement radical de comportement</h4>
                  <p className="text-gray-700 mb-3">
                    Le langage utilisé (notamment le niveau de keigo) et les comportements changent 
                    radicalement selon qu'on s'adresse à quelqu'un d'Uchi ou de Soto.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-medium text-green-700">Client (Soto)</p>
                      <p className="text-gray-600">Très poli et formel</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="font-medium text-blue-700">Collègue de longue date (Uchi)</p>
                      <p className="text-gray-600">Direct, parfois bourru</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">👥 Situation des étrangers</h4>
                  <p className="text-yellow-700">
                    Les étrangers sont presque toujours classés dans la catégorie Soto et traités 
                    avec une grande politesse, mais rarement acceptés dans les cercles intimes 
                    où se partagent secrets et vraie spontanéité.
                  </p>
                </div>
              </div>

              {/* 2.3 Mythe du collectivisme */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-purple-500" />
                  2.3. Le mythe du "Japonais collectiviste" : entre pression sociale et réalité
                </h3>
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    L'image du Japonais "collectiviste" est un stéréotype tenace. Les Japonais sont 
                    souvent dépeints comme sacrifiant toujours leurs opinions personnelles pour le consensus, 
                    agissant constamment en groupe et craignant par-dessus tout de se distinguer 
                    ("le clou qui dépasse se fait enfoncer" - <em>deru kui wa utareru</em> 出る杭は打たれる).
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-3">🚫 Nuancer cette image</h4>
                  <p className="text-gray-700 mb-4">
                    Cette image doit être largement nuancée. Les recherches académiques en psychologie 
                    culturelle montrent qu'au niveau des valeurs personnelles, les Japonais ne sont 
                    pas plus collectivistes que les Occidentaux.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">🍽️ Exemple quotidien</h5>
                    <p className="text-gray-700 text-sm">
                      Au Japon, chaque membre de la famille a son propre bol de riz et ses baguettes, 
                      alors qu'en Occident on partage souvent assiettes et couverts.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-3">🎯 Réalité plus complexe</h4>
                  <p className="text-gray-700 mb-3">
                    La réalité est plus complexe. Les comportements apparemment collectivistes des Japonais 
                    sont plutôt le résultat d'une adaptation stratégique à un environnement social 
                    qui exerce une très forte "pression à la conformité" (<em>dōchō atsuryoku</em> 同調圧力).
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-700 text-sm">
                      💡 Dans une société où l'harmonie collective est prioritaire et l'exclusion sociale 
                      la sanction la plus redoutée, se conformer à la majorité devient une stratégie 
                      rationnelle de survie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">🔑 Clé de compréhension</h4>
                <p className="text-gray-700">
                  Ces concepts ne sont pas des traits de personnalité figés, mais des "registres" 
                  comportementaux que les Japonais activent selon le contexte. Comme les Français 
                  utilisent "tu" et "vous" pour marquer intimité ou distance, les Japonais naviguent 
                  entre honne et tatemae, Uchi et Soto.
                </p>
              </div>
            </div>
          </section>

          {/* Partie 3 : Le regard sur l'étranger */}
          <section id="regard-etranger" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Eye className="h-8 w-8 mr-3 text-orange-600" />
                Partie 3 : Le Regard sur l'Étranger - Japonais et Étrangers
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                L'interaction avec les étrangers (<em>gaikokujin</em> 外国人) est un domaine où les 
                spécificités de la mentalité japonaise se manifestent avec une acuité particulière.
              </p>

              {/* 3.1 L'étranger comme invité perpétuel */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Handshake className="h-6 w-6 mr-2 text-orange-500" />
                  3.1. L'étranger : "invité" perpétuel (<em>Okyaku-sama</em> お客様)
                </h3>
                <div className="bg-orange-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Une des expériences les plus communes pour les étrangers au Japon est d'être traités 
                    avec une gentillesse extrême, une politesse attentionnée et un hospitalité remarquable, 
                    connue sous le nom d'<em>omotenashi</em>. Cette attitude découle du fait que l'étranger 
                    est fondamentalement perçu comme un "invité" (<em>okyaku-sama</em> お客様).
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">✅ Privilèges de l'invité</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Tant que l'étranger se comporte comme un touriste ou un client, il est choyé. 
                      Les Japonais se montrent serviables, patients et prompts à aider.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Aide spontanée dans la rue</li>
                      <li>• Patience avec la barrière linguistique</li>
                      <li>• Service exemplaire</li>
                    </ul>
                  </div>
                  <div className="bg-red-100 rounded-lg p-6">
                    <h4 className="font-semibold text-red-800 mb-3">❌ Barrières invisibles</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Ce statut peut se transformer en "mur invisible". L'étranger qui parle couramment 
                      japonais et maîtrise les codes culturels peut paradoxalement susciter une certaine méfiance.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sortie du rôle d'invité attendu</li>
                      <li>• Élément difficile à classifier</li>
                      <li>• Distance polie mais ferme</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">🔍 Facteur aggravant</h4>
                  <p className="text-yellow-700">
                    Cette dynamique est renforcée par le fait qu'une partie importante de la population 
                    japonaise n'a que peu ou pas de contact régulier avec des étrangers, favorisant 
                    des schémas comportementaux préconçus plutôt que des interactions personne à personne.
                  </p>
                </div>
              </div>

              {/* 3.2 Attitudes variables */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-blue-500" />
                  3.2. Attitudes variables : préjugés et perceptions
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Il est indispensable d'aborder le sujet délicat des préjugés. Les attitudes japonaises 
                    envers les étrangers ne sont pas monolithiques et peuvent varier considérablement 
                    selon l'origine perçue de l'interlocuteur.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-3">📊 Hiérarchisation historique</h4>
                  <p className="text-gray-700 mb-4">
                    Les recherches et nombreux témoignages montrent une tendance historique à hiérarchiser 
                    les étrangers, valorisant davantage les Occidentaux (souvent blancs, anglophones et 
                    perçus comme venant de "pays développés") par rapport aux ressortissants d'autres pays asiatiques par exemple.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-red-700 text-sm font-medium">
                      💡 Cette perception est l'héritage de l'ère Meiji et de l'aspiration du Japon 
                      à rejoindre le rang des puissances occidentales.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-3">🎯 Critères d'identification</h4>
                  <p className="text-gray-700 mb-3">
                    Les critères utilisés par les Japonais pour identifier un individu comme "étranger" 
                    sont révélateurs. Selon des enquêtes gouvernementales, les principaux indicateurs 
                    par ordre d'importance sont :
                  </p>
                  <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1 ml-4">
                    <li>Capacité linguistique imparfaite en japonais</li>
                    <li>Apparence physique</li>
                    <li>Méconnaissance des usages locaux</li>
                    <li>Nationalité (en dernier)</li>
                  </ol>
                </div>
              </div>

              {/* 3.3 Mythe de l'État homogène */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-purple-500" />
                  3.3. Le mythe de l'État homogène (<em>Tan'itsu Minzoku Shinwa</em> 単一民族神話)
                </h3>
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Cette tendance à distinguer nettement "Japonais" et "non-Japonais" est soutenue 
                    par le "mythe de l'État homogène" (<em>tan'itsu minzoku shinwa</em> 単一民族神話), 
                    idéologie puissante bien que scientifiquement infondée.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-100 rounded-lg p-6">
                    <h4 className="font-semibold text-orange-800 mb-3">🏛️ Construction moderne</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Cette idée que le Japon serait un pays ethniquement "pur" et culturellement 
                      uniforme est une construction sociale et politique relativement récente, 
                      créée à l'ère Meiji (fin XIXe) pour renforcer l'État-nation moderne.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">🌏 Réalité historique</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      En réalité, l'archipel japonais a toujours été habité par des populations 
                      diverses : Aïnous au nord, habitants des îles Ryūkyū au sud, importantes 
                      communautés issues de l'ancien empire colonial.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-3">🔄 Conséquences concrètes</h4>
                  <p className="text-gray-700 mb-3">
                    Ce mythe de l'homogénéité a des conséquences très concrètes. Il renforce 
                    la dichotomie Uchi-Soto au niveau national, érige une barrière symbolique 
                    entre "nous les Japonais" et "eux les étrangers".
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-purple-700 text-sm">
                      💡 Il contribue à justifier des politiques migratoires restrictives et 
                      rend particulièrement difficile l'intégration pleine des minorités et étrangers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-3">🎯 Défi pour l'intégration</h4>
                <p className="text-gray-700">
                  L'étranger pose donc un problème fondamental au système Uchi-Soto qui structure 
                  la société japonaise. Ne relevant d'aucun groupe Uchi, il ne peut être traité 
                  en égal. Le classer dans Soto est également insuffisant car cette catégorie 
                  s'applique normalement à d'autres Japonais. La société japonaise a donc développé 
                  une solution de contournement : la création d'un statut spécial de 
                  <em>Gaijin-Okyaku-sama</em> (étranger-invité).
                </p>
              </div>
            </div>
          </section>

          {/* Partie 4 : Guide pratique quotidien */}
          <section id="guide-pratique" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Coffee className="h-8 w-8 mr-3 text-red-600" />
                Partie 4 : Guide Pratique des Interactions Quotidiennes
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Les différences culturelles se manifestent de façon très concrète dans les situations 
                de la vie quotidienne. Comprendre les codes implicites qui régissent ces moments 
                facilite grandement la vie au Japon et évite bien des impairs.
              </p>

              {/* 4.1 Dans les lieux publics */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-red-500" />
                  4.1. Dans les lieux publics : l'ordre silencieux
                </h3>
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Les espaces publics japonais sont régis par le principe fondamental de 
                    <em>meiwaku o kakenai</em> (迷惑をかけない) - ne pas déranger autrui.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">🚇 Transports publics</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Le silence qui règne dans les métros et trains japonais surprend souvent 
                      les étrangers habitués à plus de bruit.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Pas de conversations téléphoniques</li>
                      <li>• Chuchotements uniquement</li>
                      <li>• Contraste avec la France</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">📋 Faire la queue</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      La technique de la file d'attente (<em>seiretsu</em> 整列) est une discipline nationale.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Files ordonnées et patientes</li>
                      <li>• Resquillage = violation sociale grave</li>
                      <li>• Respect strict de l'ordre</li>
                    </ul>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">♨️ Bains publics</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Expérience culturelle unique avec règles strictes (<em>onsen</em>, <em>sentō</em>).
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Se laver avant le bain</li>
                      <li>• Nudité obligatoire</li>
                      <li>• Espace de détente, pas de lavage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4.2 Au restaurant */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Coffee className="h-6 w-6 mr-2 text-orange-500" />
                  4.2. Au restaurant : un monde de règles implicites
                </h3>
                <div className="bg-orange-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Manger au restaurant au Japon implique de connaître quelques habitudes 
                    spécifiques qui peuvent dérouter le néophyte.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-yellow-100 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">🍽️ Otoshi お通し</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Dans beaucoup de bars et restaurants de type izakaya, on vous sert 
                      immédiatement un petit amuse-bouche sans l'avoir commandé.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-yellow-700 text-sm font-medium">
                        ⚠️ Ce n'est pas un cadeau de bienvenue ! C'est un otoshi, 
                        sorte de couvert ou droit d'entrée qui sera ajouté à la note.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">💰 Absence de pourboire</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Le service est toujours inclus dans les prix. Laisser un pourboire 
                      n'est pas une pratique courante et peut même créer de la confusion.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-green-700 text-sm">
                        Le service excellent fait partie de la culture, pas d'une attente financière
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-800 mb-3">🍜 Autres habitudes importantes</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-800 mb-2">Sons en mangeant</p>
                      <p className="text-gray-700">
                        Aspirer bruyamment les nouilles (ramen, soba, udon) est acceptable 
                        et même signe d'appréciation
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 mb-2">Rituels de repas</p>
                      <p className="text-gray-700">
                        <em>Itadakimasu</em> avant, <em>Gochisōsama deshita</em> après 
                        pour exprimer gratitude
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.3 Au travail */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-blue-500" />
                  4.3. Au travail : l'individu au service du collectif
                </h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Le monde professionnel japonais diffère considérablement de celui français.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-100 rounded-lg p-6">
                    <h4 className="font-semibold text-indigo-800 mb-3">📊 Hiérarchie et communication</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Les structures hiérarchiques (<em>jōge kankei</em> 上下関係) sont très 
                      marquées et respectées. Le protocole <em>hōrenso</em> (報連相) :
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• <strong>Hō</strong>koku (報告) - Rapport</li>
                      <li>• <strong>Ren</strong>raku (連絡) - Contact</li>
                      <li>• <strong>Sō</strong>dan (相談) - Consultation</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">⏰ Travail d'équipe et ponctualité</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Les performances collectives sont valorisées bien plus que les prouesses individuelles. 
                      Le respect du temps est absolu.
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Retard = faute grave</li>
                      <li>• Esprit d'équipe prioritaire</li>
                      <li>• Consensus recherché</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4.4 Interactions sociales */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Handshake className="h-6 w-6 mr-2 text-purple-500" />
                  4.4. Interactions sociales : rituels et codes
                </h3>
                <div className="bg-purple-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    La vie sociale est ponctuée de rituels qui renforcent les liens.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-pink-100 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-800 mb-2">🎁 Cadeaux (omiyage)</h4>
                    <p className="text-gray-700 text-sm">
                      En revenant de voyage, offrir des <em>omiyage</em> (souvenirs locaux) 
                      à collègues, amis, famille est un geste social indispensable.
                    </p>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">🙇 Salutations (ojigi)</h4>
                    <p className="text-gray-700 text-sm">
                      L'inclinaison va d'un léger hochement entre amis à 45° pour des excuses sincères, 
                      selon le statut et la situation.
                    </p>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">👟 À la maison</h4>
                    <p className="text-gray-700 text-sm">
                      Toujours retirer ses chaussures à l'entrée (<em>genkan</em>). 
                      Chaussons d'intérieur souvent fournis, parfois spéciaux pour les toilettes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partie 5 : Concepts les plus déroutants */}
          <section id="concepts-complexes" className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Brain className="h-8 w-8 mr-3 text-indigo-600" />
                Partie 5 : Surmonter les Concepts les Plus Déroutants
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Certains aspects de la communication japonaise sont particulièrement contre-intuitifs 
                pour l'esprit français car ils touchent à des valeurs fondamentales comme l'affirmation 
                de soi, la franchise et la responsabilité individuelle.
              </p>

              {/* 5.1 La modestie */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-indigo-500" />
                  5.1. La modestie (<em>Kenson</em> 謙遜) : pourquoi les compliments sont-ils refusés ?
                </h3>
                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    En France, comme dans de nombreuses cultures occidentales, un compliment 
                    s'accepte généralement par un simple "merci". Reconnaître ses qualités 
                    et accepter la louange est perçu comme un signe de confiance en soi saine et normale.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-100 rounded-lg p-6">
                    <h4 className="font-semibold text-red-800 mb-3">🇫🇷 Réaction française typique</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      "Merci, c'est gentil !" - Acceptation directe du compliment 
                      comme reconnaissance légitime d'un mérite.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-red-700 text-sm">
                        Valorisation de la confiance en soi et de l'affirmation positive
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">🇯🇵 Réaction japonaise typique</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      <em>"Ie ie, sonna koto arimasen"</em> (いえいえ、そんなことありません) 
                      - "Non, non, ce n'est pas du tout cela"
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-green-700 text-sm">
                        Modestie comme vertu principale et rituel social sophistiqué
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-indigo-800 mb-3">🎭 Véritable signification</h4>
                  <p className="text-gray-700 mb-3">
                    Cette réaction ne doit pas être interprétée comme un manque de confiance en soi 
                    ou une fausse modestie. C'est avant tout un rituel social raffiné.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-medium text-gray-800 mb-2">🔄 Mécanisme social</h5>
                    <p className="text-indigo-700 text-sm">
                      En se dévalorisant, la personne complimentée valorise son interlocuteur 
                      et maintient l'équilibre de la relation. Montrer de la fierté ou accepter 
                      inconditionnellement les louanges pourrait être perçu comme de l'arrogance.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">💡 Point important</h4>
                  <p className="text-yellow-700">
                    Cette négation est souvent suivie d'un remerciement (<em>arigatō gozaimasu</em>), 
                    montrant que le compliment a bien été reçu et apprécié.
                  </p>
                </div>
              </div>

              {/* 5.2 Les excuses */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-red-500" />
                  5.2. Les excuses (<em>Shazai</em> 謝罪) : les mille visages du "sumimasen"
                </h3>
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Les étrangers ont souvent l'impression que les Japonais s'excusent constamment. 
                    Cette perception vient de la polyvalence extraordinaire du mot <em>sumimasen</em>, 
                    véritable couteau suisse de l'interaction sociale.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-red-100 rounded-lg p-6">
                    <h4 className="font-semibold text-red-800 mb-3">😔 Vraies excuses</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Usage le plus direct : quand on a commis une faute 
                      (bousculer quelqu'un, être en retard).
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-red-700 text-sm font-medium">
                        = "Pardon" / "Désolé"
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-3">👋 Interpellation</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Pour attirer l'attention d'un serveur, demander son chemin 
                      ou aborder quelqu'un.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-blue-700 text-sm font-medium">
                        = "Excusez-moi" / "S'il vous plaît"
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">🙏 Remerciements</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Usage le plus déroutant : pour remercier quelqu'un 
                      tout en reconnaissant le "dérangement" causé.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-green-700 text-sm font-medium">
                        = "Merci + désolé de vous avoir dérangé"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-3">🔍 Différence fondamentale</h4>
                  <p className="text-gray-700 mb-3">
                    Cette différence révèle la fonction même de la communication dans les deux cultures :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">🇫🇷 Communication française</h5>
                      <p className="text-gray-700">
                        Transmission d'informations et d'opinions visant à établir 
                        une vérité objective par la logique et l'argumentation
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 mb-2">🇯🇵 Communication japonaise</h5>
                      <p className="text-gray-700">
                        Acte de soin relationnel visant à préserver l'harmonie, 
                        gérer les émotions collectives et lubrifier les rouages de l'interaction
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎯 Aspect performatif</h4>
                  <p className="text-yellow-700">
                    Les mots ne se contentent pas de décrire une réalité objective, 
                    ils agissent sur les relations sociales. Un "kentō shimasu" (nous étudierons) 
                    professionnel n'est souvent pas une promesse d'analyse détaillée, 
                    mais un refus poli.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Lightbulb className="h-8 w-8 mr-3 text-purple-600" />
                Conclusion : L'Art de la Compréhension Mutuelle
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Au terme de cette exploration, il apparaît que les comportements japonais, 
                  loin d'être irrationnels ou incompréhensibles, obéissent à une logique 
                  culturelle profondément cohérente. Guidés par l'impératif d'harmonie (和), 
                  structurés par la distinction intérieur/extérieur (ウチソト), exprimés 
                  à travers le filtre de l'apparence sociale (建前), ils sont le produit 
                  d'une histoire et d'un environnement uniques.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🌉 Construire des ponts</h3>
                  <p className="text-gray-700 mb-4">
                    Pour le lecteur francophone, cette confrontation avec cette "grammaire sociale" 
                    peut être déstabilisante. Elle remet en question des valeurs profondément ancrées : 
                    la primauté de l'individu, la vertu de la franchise, la nécessité du débat contradictoire.
                  </p>
                  <p className="text-gray-700">
                    Mais voir ces différences non comme des obstacles insurmontables, 
                    mais comme une invitation à développer de nouvelles flexibilités communicationnelles, 
                    constitue le premier pas vers une compréhension authentique.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 L'objectif n'est pas l'assimilation</h3>
                  <p className="text-gray-700 mb-4">
                    La clé n'est pas de chercher à "devenir japonais" ou d'abandonner sa propre culture. 
                    Il s'agit plutôt d'acquérir une "bi-compétence" culturelle : avoir la capacité 
                    de lire les codes japonais pour interagir avec respect et efficacité, 
                    tout en restant soi-même.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Cet effort de compréhension, cette volonté de décrypter ce qui se cache 
                    derrière les silences, les sourires et les courbettes, constitue la plus 
                    grande marque de respect qu'une personne puisse témoigner.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🌟 Vers des relations authentiques</h3>
                  <p className="text-gray-700">
                    C'est cet effort, plus que tout autre, qui ouvre les portes à des relations 
                    plus profondes et plus sincères, et qui jette de véritables ponts entre deux mondes. 
                    La compréhension mutuelle n'efface pas les différences, elle les transcende 
                    pour créer des connexions humaines véritables et durables.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Approfondissez votre compréhension</h3>
            <p className="text-lg text-purple-100 mb-6">
              Ce guide vous a donné les clés essentielles. Continuez votre exploration 
              de la culture japonaise avec nos autres ressources pratiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/guides/culture-etiquette" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Étiquette & Traditions
              </Link>
              <Link 
                href="/guides/comment-commander" 
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
              >
                Guide de commande
              </Link>
              <Link 
                href="/guides" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Tous les guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
