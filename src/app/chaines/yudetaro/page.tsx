import Link from "next/link";
import ChainViewTracker from "../../../components/ChainViewTracker";

export default function YudetaroPage() {
  const menuCategories = [
    {
      name: "Soba Classiques",
      japanese: "定番そば",
      items: [
        {
          name: "Kake Soba",
          japanese: "かけそば",
          price: "¥300",
          description: "Soba simple dans un bouillon dashi chaud, l'essentiel du goût authentique"
        },
        {
          name: "Zaru Soba",
          japanese: "ざるそば",
          price: "¥380",
          description: "Soba froides servies avec sauce tsuyu concentrée, parfait en été"
        },
        {
          name: "Tanuki Soba",
          japanese: "たぬきそば",
          price: "¥350",
          description: "Soba avec tenkasu (miettes de tempura), texture croustillante"
        },
        {
          name: "Kitsune Soba",
          japanese: "きつねそば",
          price: "¥380",
          description: "Soba avec abura-age (tofu frit sucré), doux et réconfortant"
        }
      ]
    },
    {
      name: "Soba Premium",
      japanese: "上級そば",
      items: [
        {
          name: "Tempura Soba",
          japanese: "天ぷらそば",
          price: "¥520",
          description: "Soba avec tempura de crevette fraîche, le grand classique"
        },
        {
          name: "Tororo Soba",
          japanese: "とろろそば",
          price: "¥480",
          description: "Soba avec igname râpée, texture unique et nutritive"
        },
        {
          name: "Kamakake Soba",
          japanese: "かまかけそば",
          price: "¥450",
          description: "Soba avec kamaboko (pâte de poisson), goût umami intense"
        },
        {
          name: "Wakame Soba",
          japanese: "わかめそば",
          price: "¥420",
          description: "Soba avec algues wakame, riche en minéraux"
        }
      ]
    },
    {
      name: "Donburi & Sets",
      japanese: "丼・セット",
      items: [
        {
          name: "Katsu Don Set",
          japanese: "カツ丼セット",
          price: "¥680",
          description: "Katsu don + mini soba, combinaison populaire du déjeuner"
        },
        {
          name: "Oyakodon Set",
          japanese: "親子丼セット",
          price: "¥650",
          description: "Oyakodon + mini soba, équilibre parfait poulet-œuf"
        },
        {
          name: "Tensoba Set",
          japanese: "天そばセット",
          price: "¥720",
          description: "Tempura soba + petit riz, repas complet traditionnel"
        }
      ]
    }
  ];

  const toppings = [
    { name: "Tempura de crevette", japanese: "海老天", price: "¥200" },
    { name: "Tempura de légumes", japanese: "野菜天", price: "¥150" },
    { name: "Œuf mollet", japanese: "温泉卵", price: "¥80" },
    { name: "Negi supplémentaire", japanese: "ねぎ", price: "¥50" },
    { name: "Wakame", japanese: "わかめ", price: "¥100" },
    { name: "Kamaboko", japanese: "かまぼこ", price: "¥120" }
  ];

  return (
    <>
      <ChainViewTracker chainName="yudetaro" chainCategory="soba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/soba" className="text-gray-500 hover:text-purple-600">Soba</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Yudetaro</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🍜</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Yudetaro</h1>
                    <p className="text-2xl text-purple-200 japanese-text">ゆで太郎</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-purple-100">
                  La chaîne de soba qui révolutionne la restauration rapide japonaise traditionnelle. 
                  Depuis 1994, Yudetaro propose des soba artisanales à prix abordables dans un format moderne.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Soba Spécialiste
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Prix Abordables
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Service Rapide
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Tradition Modernisée
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Points Clés</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Soba fraîches faites quotidiennement
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Système de commande par tickets
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Menu varié avec options udon
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Présence forte dans l'est du Japon
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Expérience authentique à prix démocratique
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction culturelle */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  L'Art du Soba Accessible
                  <span className="block text-lg text-gray-600 mt-2">そば文化の民主化</span>
                </h2>
                <div className="prose prose-purple max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Yudetaro a révolutionné l'industrie du soba en rendant accessible une cuisine traditionnellement 
                    haut de gamme. Fondée en 1994, cette chaîne a réussi le pari audacieux de proposer des 
                    <strong> soba artisanales de qualité à des prix fast-food</strong>.
                  </p>
                  <p className="text-gray-700">
                    Contrairement aux restaurants de soba traditionnels souvent intimidants pour les non-initiés, 
                    Yudetaro a créé un <strong>environnement accessible</strong> où découvrir la culture du sarrasin japonais. 
                    Leur système de tickets distributeurs simplifie la commande, rendant l'expérience fluide même 
                    pour les visiteurs étrangers.
                  </p>
                  <p className="text-gray-700">
                    L'innovation de Yudetaro réside dans sa capacité à maintenir la <strong>qualité artisanale</strong> 
                    tout en optimisant les coûts. Leurs soba sont préparées fraîches chaque matin dans chaque restaurant, 
                    garantissant cette texture unique du sarrasin à un prix défiant toute concurrence.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Informations pratiques */}
                <div className="bg-purple-50 rounded-lg border border-purple-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Informations Pratiques</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Créée :</span>
                      <span>1994</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Spécialité :</span>
                      <span>Soba & Udon</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Prix moyen :</span>
                      <span>¥300-600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Restaurants :</span>
                      <span>200+ (Kanto)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Service :</span>
                      <span>Self-service rapide</span>
                    </div>
                  </div>
                </div>

                {/* Pourquoi choisir */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Pourquoi Choisir Yudetaro ?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Authenticité accessible :</strong> Vraie expérience soba sans intimidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Rapport qualité-prix :</strong> Qualité artisanale à prix fast-food</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Fraîcheur :</strong> Soba préparées quotidiennement sur place</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Variété :</strong> Large choix pour tous les goûts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Populaire */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Menu Populaire
              <span className="block text-lg text-gray-600 mt-2">人気メニュー</span>
            </h2>

            {menuCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-4">{category.name}</span>
                  <span className="text-lg text-gray-600 japanese-text">{category.japanese}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-purple-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text mb-3">{item.japanese}</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guide de commande */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comment Commander chez Yudetaro
              <span className="block text-lg text-gray-600 mt-2">注文方法</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-3xl mb-4">🎫</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Achat du Ticket</h3>
                <p className="text-sm text-gray-600">
                  Utilisez le distributeur automatique à l'entrée. 
                  Choisissez votre plat et payez.
                </p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">🪑</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Prenez Place</h3>
                <p className="text-sm text-gray-600">
                  Trouvez une place libre et attendez qu'un serveur 
                  vienne récupérer votre ticket.
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Attente</h3>
                <p className="text-sm text-gray-600">
                  Les soba sont préparées fraîches. 
                  Comptez 3-5 minutes pour la préparation.
                </p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-3xl mb-4">🍜</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Dégustation</h3>
                <p className="text-sm text-gray-600">
                  Savourez vos soba ! N'hésitez pas à 
                  aspirer bruyamment les nouilles.
                </p>
              </div>
            </div>

            {/* Options de personnalisation */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Options de Personnalisation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🍤 Toppings Disponibles</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {toppings.map((topping, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{topping.name}</span>
                        <span className="font-medium text-purple-600">{topping.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">📝 Conseils de Commande</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Première fois :</strong> Commencez par Kake Soba ou Zaru Soba</li>
                    <li>• <strong>Été :</strong> Privilégiez les soba froides (Zaru, Mori)</li>
                    <li>• <strong>Hiver :</strong> Optez pour les soba chaudes avec tempura</li>
                    <li>• <strong>Repas complet :</strong> Choisissez un set avec donburi</li>
                    <li>• <strong>Budget serré :</strong> Kake Soba à 300¥ seulement !</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture et traditions */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              L'Expérience Culturelle Yudetaro
              <span className="block text-lg text-gray-600 mt-2">ゆで太郎の文化体験</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🌾</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tradition du Sarrasin</h3>
                <p className="text-gray-600 text-sm">
                  Yudetaro perpétue la tradition millénaire du soba japonais, où chaque 
                  grain de sarrasin est respecté et transformé selon des méthodes ancestrales 
                  adaptées à l'époque moderne.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modernité Efficace</h3>
                <p className="text-gray-600 text-sm">
                  Le concept Yudetaro allie tradition et modernité : distributeurs automatiques, 
                  service rapide et ambiance décontractée, parfait pour découvrir le soba 
                  sans contraintes protocolaires.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivité Culturelle</h3>
                <p className="text-gray-600 text-sm">
                  En démocratisant l'accès au soba, Yudetaro brise les barrières culturelles 
                  et permet à chacun de découvrir cette facette importante de la gastronomie 
                  japonaise à son rythme.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Étiquette Soba chez Yudetaro</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✅ À Faire</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Aspirez bruyamment les nouilles (c'est encouragé !)</li>
                    <li>• Mangez rapidement pour apprécier la texture</li>
                    <li>• Buvez le bouillon restant directement du bol</li>
                    <li>• Libérez votre place rapidement après le repas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">❌ À Éviter</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Ne coupez pas les nouilles avec vos dents</li>
                    <li>• Évitez de laisser refroidir les soba chaudes</li>
                    <li>• Ne trempez pas entièrement les soba froides dans la sauce</li>
                    <li>• Ne restez pas trop longtemps à table</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Découvrir l'Authentique Soba ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Yudetaro vous ouvre les portes de la tradition du sarrasin japonais 
              dans un cadre moderne et accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/type-plat/soba"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explorer tous les Soba
              </Link>
              <Link 
                href="/guides/comment-commander"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Guide de Commande
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
