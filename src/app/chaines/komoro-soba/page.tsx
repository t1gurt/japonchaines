import Link from "next/link";
import ChainViewTracker from "../../../components/ChainViewTracker";

export default function KomoroSobaPage() {
  const menuCategories = [
    {
      name: "Soba Traditionnels",
      japanese: "伝統そば",
      items: [
        {
          name: "Kake Soba",
          japanese: "かけそば",
          price: "¥290",
          description: "Le soba classique dans un bouillon dashi chaud, simplicité authentique"
        },
        {
          name: "Mori Soba",
          japanese: "もりそば",
          price: "¥350",
          description: "Soba froides avec sauce tsuyu, pour apprécier pleinement le sarrasin"
        },
        {
          name: "Tanuki Soba",
          japanese: "たぬきそば",
          price: "¥330",
          description: "Soba avec tenkasu croustillants, texture et goût contrastés"
        },
        {
          name: "Kitsune Soba",
          japanese: "きつねそば",
          price: "¥370",
          description: "Soba avec tofu frit sucré, douceur réconfortante"
        }
      ]
    },
    {
      name: "Soba Gourmets",
      japanese: "グルメそば",
      items: [
        {
          name: "Tempura Soba",
          japanese: "天ぷらそば",
          price: "¥490",
          description: "Soba avec tempura de crevette délicate, mariage parfait"
        },
        {
          name: "Curry Nanban",
          japanese: "カレー南蛮",
          price: "¥530",
          description: "Soba dans un bouillon curry épicé, fusion audacieuse"
        },
        {
          name: "Niku Soba",
          japanese: "肉そば",
          price: "¥480",
          description: "Soba avec fines tranches de bœuf mijoté, umami intense"
        },
        {
          name: "Takoyaki Soba",
          japanese: "たこ焼きそば",
          price: "¥450",
          description: "Spécialité Komoro : soba avec mini takoyaki, créativité unique"
        }
      ]
    },
    {
      name: "Sets & Combos",
      japanese: "セット・コンボ",
      items: [
        {
          name: "Tensoba Set",
          japanese: "天そばセット",
          price: "¥650",
          description: "Tempura soba + gohan + légumes marinés, repas complet"
        },
        {
          name: "Soba & Gyoza Set",
          japanese: "そば餃子セット",
          price: "¥580",
          description: "Kake soba + 3 gyoza, combinaison populaire"
        },
        {
          name: "Mini Katsu Don Set",
          japanese: "ミニカツ丼セット",
          price: "¥680",
          description: "Mini katsu don + soba au choix, équilibre parfait"
        }
      ]
    }
  ];

  const drinkOptions = [
    { name: "Thé vert chaud", japanese: "熱いお茶", price: "Gratuit" },
    { name: "Eau froide", japanese: "冷水", price: "Gratuit" },
    { name: "Bière Asahi", japanese: "アサヒビール", price: "¥350" },
    { name: "Saké chaud", japanese: "熱燗", price: "¥280" },
    { name: "Jus d'orange", japanese: "オレンジジュース", price: "¥180" }
  ];

  return (
    <>
      <ChainViewTracker chainName="komoro-soba" chainCategory="soba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-indigo-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/chaines" className="text-gray-500 hover:text-indigo-600">Chaînes</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-indigo-600 font-medium">Komoro Soba</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🏔️</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Komoro Soba</h1>
                    <p className="text-2xl text-blue-200 japanese-text">小諸そば</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-blue-100">
                  L'âme du soba traditionnel de montagne dans le cœur de Tokyo. Depuis 1975, 
                  Komoro Soba perpétue l'art ancestral du sarrasin de Shinshu avec authenticité et passion.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Tradition Shinshu
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Soba Artisanal
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Ambiance Authentique
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Prix Populaires
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">L'Expérience Komoro</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Soba de sarrasin Shinshu authentique
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Ambiance de montagne en plein Tokyo
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Service debout traditionnel (tachi-gui)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Bouillon dashi fait maison
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Expérience culinaire rapide et authentique
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Histoire et culture */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  L'Héritage de Shinshu au Cœur de Tokyo
                  <span className="block text-lg text-gray-600 mt-2">信州の遺産</span>
                </h2>
                <div className="prose prose-indigo max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Komoro Soba tire son nom de la ville de Komoro dans la préfecture de Nagano (ancienne province de Shinshu), 
                    berceau historique du <strong>soba de sarrasin japonais</strong>. Depuis 1975, cette chaîne perpétue 
                    la tradition des montagnes de Shinshu dans l'effervescence de Tokyo.
                  </p>
                  <p className="text-gray-700">
                    Ce qui distingue Komoro Soba, c'est son attachement aux <strong>méthodes traditionnelles de Shinshu</strong> : 
                    sarrasin de montagne, technique de pétrissage ancestrale, et ce format unique de <strong>"tachi-gui"</strong> 
                    (manger debout) qui était la norme dans les relais de montagne.
                  </p>
                  <p className="text-gray-700">
                    L'expérience chez Komoro Soba est volontairement <strong>dépouillée et authentique</strong>. 
                    Pas de fioritures, pas de modernisation excessive - juste l'essence pure du soba tel qu'il était 
                    consommé par les voyageurs de l'époque d'Edo traversant les montagnes de Shinshu.
                  </p>
                  <p className="text-gray-700">
                    Cette approche "retour aux sources" fait de chaque visite chez Komoro Soba un véritable 
                    <strong>voyage culturel dans le temps</strong>, une pause authentique dans le Tokyo moderne 
                    pour retrouver l'âme du Japon rural.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Informations pratiques */}
                <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Informations Pratiques</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Créée :</span>
                      <span>1975</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Origine :</span>
                      <span>Shinshu (Nagano)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Prix moyen :</span>
                      <span>¥290-550</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Restaurants :</span>
                      <span>80+ (Tokyo/Kanto)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Style :</span>
                      <span>Tachi-gui traditionnel</span>
                    </div>
                  </div>
                </div>

                {/* L'expérience unique */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">L'Expérience Tachi-gui</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Service debout :</strong> Consommation rapide et conviviale</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Ambiance authentique :</strong> Comme les relais de montagne d'antan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Interaction sociale :</strong> Lieu de rencontre des salarymen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Efficacité :</strong> Repas complet en 10 minutes</span>
                    </li>
                  </ul>
                </div>

                {/* Fourchette de prix */}
                <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Fourchette de Prix</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Soba simple :</span>
                      <span className="font-bold">290-370¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Soba premium :</span>
                      <span className="font-bold">450-530¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sets complets :</span>
                      <span className="font-bold">580-680¥</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Repas moyen :</span>
                        <span className="font-bold text-green-600">400¥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu détaillé */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Menu Signature
              <span className="block text-lg text-gray-600 mt-2">看板メニュー</span>
            </h2>

            {menuCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-4">{category.name}</span>
                  <span className="text-lg text-gray-600 japanese-text">{category.japanese}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-indigo-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text mb-3">{item.japanese}</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                      {item.name === "Takoyaki Soba" && (
                        <div className="mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full inline-block">
                          ★ Spécialité unique
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guide de l'expérience tachi-gui */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Guide de l'Expérience Tachi-gui
              <span className="block text-lg text-gray-600 mt-2">立ち食い体験ガイド</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                <div className="text-3xl mb-4">🚪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Entrée</h3>
                <p className="text-sm text-gray-600">
                  Entrez et dirigez-vous vers le distributeur. 
                  L'ambiance est décontractée et accueillante.
                </p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">🎫</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Commande</h3>
                <p className="text-sm text-gray-600">
                  Achetez votre ticket et remettez-le au staff. 
                  Simple et efficace.
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl mb-4">🧍</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Position</h3>
                <p className="text-sm text-gray-600">
                  Placez-vous au comptoir debout. 
                  L'expérience traditionnelle commence !
                </p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-3xl mb-4">🍜</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Dégustation</h3>
                <p className="text-sm text-gray-600">
                  Savourez rapidement votre soba. 
                  C'est l'esprit tachi-gui !
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Étiquette Tachi-gui</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✅ Comportement Approprié</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Mangez debout sans vous appuyer excessivement</li>
                    <li>• Consommez rapidement (5-10 minutes idéal)</li>
                    <li>• Engagez la conversation avec les autres clients</li>
                    <li>• Aspirez bruyamment les nouilles</li>
                    <li>• Laissez votre place libre rapidement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">💡 Conseils d'Expert</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Période calme : 14h-16h en semaine</li>
                    <li>• Rush matinal : 7h-9h (expérience authentique)</li>
                    <li>• Commencez par Mori Soba pour apprécier le sarrasin</li>
                    <li>• Observez les habitués pour apprendre</li>
                    <li>• N'hésitez pas à demander des recommandations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Boissons et accompagnements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Boissons & Accompagnements
              <span className="block text-lg text-gray-600 mt-2">飲み物・付け合わせ</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍵 Boissons Disponibles</h3>
                <div className="space-y-3">
                  {drinkOptions.map((drink, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{drink.name}</span>
                        <span className="text-gray-500 text-sm ml-2 japanese-text">{drink.japanese}</span>
                      </div>
                      <span className={`font-bold ${drink.price === 'Gratuit' ? 'text-green-600' : 'text-indigo-600'}`}>
                        {drink.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍶 L'Art de l'Accompagnement</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Thé Vert (Gratuit)</h4>
                    <p className="text-sm text-gray-600">
                      Thé vert chaud servi automatiquement. Nettoie le palais 
                      et améliore la dégustation du sarrasin.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Saké & Bière</h4>
                    <p className="text-sm text-gray-600">
                      Pour l'expérience complète des relais de montagne. 
                      Une tradition respectée même au petit-déjeuner !
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Eau de Source</h4>
                    <p className="text-sm text-gray-600">
                      Eau pure essentielle pour nettoyer le palais entre 
                      les bouchées de soba.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tradition culturelle */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Héritage Culturel de Shinshu
              <span className="block text-lg text-gray-600 mt-2">信州の文化遺産</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Terroir de Shinshu</h3>
                <p className="text-gray-600 text-sm">
                  Les montagnes de Shinshu (Nagano) offrent le climat parfait pour le sarrasin : 
                  altitude élevée, écarts de température importants, et eau pure des sommets. 
                  Ce terroir unique produit le meilleur soba du Japon depuis des siècles.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🥢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technique Ancestrale</h3>
                <p className="text-gray-600 text-sm">
                  Komoro Soba perpétue les techniques de fabrication transmises depuis l'époque d'Edo : 
                  pétrissage manuel, découpe précise, et cuisson minute. Chaque bol raconte 400 ans 
                  de savoir-faire artisanal.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🚶</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Culture Tachi-gui</h3>
                <p className="text-gray-600 text-sm">
                  Manger debout n'est pas qu'une contrainte d'espace, c'est une philosophie : 
                  humilité, égalité sociale, et concentration sur l'essentiel. Une leçon de 
                  vie à la japonaise dans chaque bol.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Pourquoi Komoro Soba Est Une Expérience Unique
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🎯 Authenticité Pure</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Aucune concession à la modernisation. Komoro Soba offre l'expérience 
                    exacte qu'un voyageur aurait vécue dans un relais de montagne il y a 150 ans.
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">💎 Qualité Exceptionnelle</h4>
                  <p className="text-gray-600 text-sm">
                    Sarrasin Shinshu 100%, bouillon dashi fait maison quotidiennement, 
                    techniques artisanales préservées. La qualité ne transige jamais avec le prix.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🤝 Immersion Sociale</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Le format tachi-gui brise les barrières sociales. Salarymen, artisans, 
                    étudiants se côtoient naturellement dans la tradition égalitaire du soba.
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">⚡ Énergie Urbaine</h4>
                  <p className="text-gray-600 text-sm">
                    Dans le rythme effréné de Tokyo, Komoro Soba offre une pause authentique 
                    où tradition et modernité se rencontrent harmonieusement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Vivez l'Expérience Authentique du Soba de Shinshu
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Komoro Soba vous transporte dans les montagnes de Shinshu sans quitter Tokyo. 
              Une tradition de 150 ans vous attend au comptoir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/type-plat/soba"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Découvrir le Monde du Soba
              </Link>
              <Link 
                href="/guides/culture-etiquette"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Guide Culturel
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
