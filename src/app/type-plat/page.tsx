import Link from "next/link";
import Image from "next/image";
import CategoryViewTracker from '../../components/CategoryViewTracker';

export default function TypePlatPage() {  // Fonction pour obtenir le bon lien pour chaque type de plat
  const getImplementationPath = (id: string) => {    const implementedPages: { [key: string]: string } = {
      'gyudon': '/type-plat/gyudon',
      'ramen': '/type-plat/ramen', 
      'kaiten-zushi': '/type-plat/kaiten-zushi',
      'curry': '/type-plat/curry',
      'tempura': '/type-plat/tempura',
      'udon': '/type-plat/udon',
      'soba': '/type-plat/soba',
      'family-restaurants': '/type-plat/family-restaurants',
      'burgers': '/type-plat/burgers',
      'cuisine-chinoise': '/type-plat/cuisine-chinoise',
      'izakaya': '/type-plat/izakaya',
      'teishoku': '/type-plat/teishoku',
      'cafe': '/type-plat/cafe',
      'street-food': '/type-plat/street-food',
      'steak': '/type-plat/steak'
    };
    
    return implementedPages[id] || `/type-plat/${id}`;
  };
  // Fonction pour vérifier si une page est implémentée
  const isImplemented = (id: string) => {
    const implementedIds = ['gyudon', 'ramen', 'kaiten-zushi', 'curry', 'tempura', 'udon', 'soba', 'family-restaurants', 'burgers', 'cuisine-chinoise', 'izakaya', 'teishoku', 'cafe', 'street-food', 'steak'];
    return implementedIds.includes(id);
  };

  const cuisineTypes = [
    {
      id: "gyudon",
      name: "Gyūdon",
      japanese: "牛丼",
      description: "Bols de riz garnis de lamelles de bœuf mijotées dans une sauce sucrée-salée",
      detailedDescription: "Les gyūdon sont des bols de riz blanc surmontés de fines lamelles de bœuf cuites dans un bouillon doux à base de sauce soja, mirin et sucre. C'est un plat rapide, économique et nourrissant, très populaire au Japon.",
      chains: ["Yoshinoya", "Sukiya", "Matsuya"],
      color: "bg-red-500",
      icon: "🥩"
    },
    {
      id: "ramen",
      name: "Ramen",
      japanese: "ラーメン",
      description: "Nouilles japonaises servies dans un bouillon riche avec divers garnitures",
      detailedDescription: "Les ramen sont des nouilles de blé servies dans un bouillon chaud, garnis de porc, légumes, œufs et autres ingrédients. Chaque région et chaîne a ses propres variations de bouillon et garnitures.",
      chains: ["Ichiran", "Ippudo", "Tenkaippin"],
      color: "bg-orange-500",
      icon: "🍜"
    },    {
      id: "kaiten-zushi",
      name: "Kaiten-zushi",
      japanese: "回転寿司",
      description: "Sushi servi sur un tapis roulant, accessible et abordable",
      detailedDescription: "Les restaurants de kaiten-zushi proposent des sushi sur un tapis roulant. Les clients prennent les assiettes qui les intéressent. Le prix est généralement déterminé par la couleur de l'assiette.",
      chains: ["Sushiro", "Kura Sushi", "Hama Sushi"],
      color: "bg-blue-500",
      icon: "🍣"
    },
    {
      id: "curry",
      name: "Curry Japonais",
      japanese: "カレー",
      description: "Version japonaise du curry, plus douce et épaisse que l'original indien",
      detailedDescription: "Le curry japonais est plus doux et plus épais que le curry indien, souvent servi avec du riz blanc et accompagné de légumes, viande ou fruits de mer. C'est un comfort food très apprécié.",
      chains: ["CoCo壱番屋", "Go!Go!Curry"],
      color: "bg-yellow-500",
      icon: "🍛"
    },
    {
      id: "tempura",
      name: "Tempura / Tendon",
      japanese: "天ぷら・天丼",
      description: "Beignets japonais légers et croustillants, souvent servis sur riz",
      detailedDescription: "La tempura consiste en des légumes ou fruits de mer enrobés d'une pâte légère puis frits. Les tendon sont des bols de riz surmontés de tempura avec une sauce sucrée-salée.",
      chains: ["Tenya", "Tsunahachi"],
      color: "bg-green-500",
      icon: "🍤"
    },
    {
      id: "udon",
      name: "Udon",
      japanese: "うどん",
      description: "Nouilles japonaises épaisses et moelleuses dans un bouillon savoureux",
      detailedDescription: "L'udon sont des nouilles de blé épaisses et souples, servies chaudes dans un bouillon dashi parfumé ou froides avec une sauce à tremper. Originaires du sud du Japon, elles offrent une expérience réconfortante et authentique.",
      chains: ["Marugame Seimen", "Hanamaru Udon"],
      color: "bg-orange-500",
      icon: "🍲"
    },
    {
      id: "soba",
      name: "Soba",
      japanese: "そば",
      description: "Nouilles fines de sarrasin, symbole de la tradition culinaire d'Edo",
      detailedDescription: "Les soba sont des nouilles fines de sarrasin au goût subtil et parfumé. Elles incarnent l'élégance d'Edo (Tokyo) et se dégustent chaudes dans un bouillon ou froides avec une sauce tsuyu. Une expérience raffinée et authentique.",
      chains: ["Fuji Soba", "Yudetaro", "Komoro Soba"],
      color: "bg-purple-500",
      icon: "�"
    },
    {
      id: "family-restaurant",
      name: "Family Restaurants",
      japanese: "ファミリーレストラン",
      description: "Restaurants familiaux proposant une cuisine variée dans une ambiance décontractée",
      detailedDescription: "Les family restaurants proposent une large gamme de plats occidentaux et japonais dans un cadre familial. Ils sont parfaits pour les groupes avec des goûts variés.",
      chains: ["Saizeriya", "Gusto", "Jonathan's"],
      color: "bg-pink-500",
      icon: "🍽️"
    },
    {
      id: "burgers",
      name: "Burgers Japonais",
      japanese: "日本のハンバーガー",
      description: "Hamburgers à la japonaise avec des ingrédients et saveurs uniques",
      detailedDescription: "Les chaînes de hamburgers japonaises proposent des créations uniques mélangeant influences occidentales et goûts japonais, avec des ingrédients comme le riz, la sauce teriyaki, ou le wasabi.",
      chains: ["MOS Burger", "Freshness Burger"],
      color: "bg-indigo-500",
      icon: "🍔"
    },    {
      id: "cuisine-chinoise",
      name: "Cuisine Chinoise",
      japanese: "中華料理",
      description: "Plats chinois adaptés au goût japonais, abordables et savoureux",
      detailedDescription: "Ces chaînes proposent des plats chinois adaptés au palais japonais, souvent plus doux que les versions originales. Les gyoza, ramen chinois et riz sautés sont populaires.",
      chains: ["Bamiyan", "Ohsho", "Gyoza no Ohsho"],
      color: "bg-red-600",
      icon: "🥟"
    },
    {
      id: "teishoku",
      name: "Teishoku",
      japanese: "定食",
      description: "Repas complets traditionnels avec riz, soupe et accompagnements",
      detailedDescription: "Les teishoku sont des repas équilibrés composés d'un plat principal, de riz, de soupe miso et de petits accompagnements (tsukemono). C'est l'essence de la cuisine familiale japonaise, nutritive et authentique.",
      chains: ["Ootoya", "Yayoiken", "Miyamoto Munashi"],
      color: "bg-green-600",
      icon: "🍱"
    },
    {
      id: "izakaya",
      name: "Izakaya",
      japanese: "居酒屋",
      description: "Bars japonais traditionnels servant des petits plats et de l'alcool",
      detailedDescription: "Les izakaya sont des établissements où l'on boit de l'alcool en grignotant de petits plats variés. L'ambiance est décontractée et conviviale, parfaite pour socialiser.",
      chains: ["Torikizoku", "Shirokiya", "Warawara"],
      color: "bg-amber-600",
      icon: "🍻"
    },
    {
      id: "cafe",
      name: "Café",
      japanese: "カフェ・喫茶店",
      description: "Kissaten et cafés modernes - L'art du temps qui s'arrête",
      detailedDescription: "Les cafés japonais incarnent une philosophie unique où le temps prend une autre dimension. Du kissaten traditionnel aux chaînes modernes, ils offrent bien plus qu'une simple pause café : un véritable art de vivre.",
      chains: ["Komeda Coffee"],
      color: "bg-amber-700",
      icon: "☕"
    },
    {
      id: "street-food",
      name: "Street Food",
      japanese: "屋台・街角グルメ",
      description: "Yatai moderne et takoyaki - L'âme de la rue japonaise",
      detailedDescription: "Des festivals d'été aux coins de rue animés, la street food japonaise transforme chaque bouchée en moment de convivialité authentique, perpétuant une tradition millénaire d'excellence culinaire nomade.",
      chains: ["Gindako"],
      color: "bg-red-600",
      icon: "🥟"
    },
    {
      id: "steak",
      name: "Steak",
      japanese: "ステーキ",
      description: "Steaks premium et innovation culinaire - L'excellence bovine à la japonaise",
      detailedDescription: "Le steak au Japon représente l'union parfaite entre la qualité exceptionnelle du bœuf wagyu et l'innovation dans le service. Des concepts révolutionnaires comme le tachi-gui aux steakhouses traditionnels.",
      chains: ["Ikinari Steak"],
      color: "bg-red-800",
      icon: "🥩"
    }
  ];  return (
    <>
      <CategoryViewTracker categoryName="type-plat-overview" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Rechercher par Type de Plat</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rechercher par Type de Plat
            <span className="block text-lg font-normal text-gray-600 mt-2 japanese-text">
              料理の種類から探す
            </span>
          </h1>          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez les meilleurs restaurants japonais organisés par type de cuisine. 
            Chaque catégorie comprend des informations détaillées sur les plats, les meilleures chaînes 
            et les méthodes de commande pour trouver le restaurant japonais parfait selon vos goûts.
          </p>
        </div>
      </section>

      {/* Cuisine Types Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisineTypes.map((cuisine) => (              <Link 
                key={cuisine.id}
                href={getImplementationPath(cuisine.id)}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className={`${cuisine.color} h-2`}></div>                <div className="p-6">
                  {isImplemented(cuisine.id) && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                      ✅ Page disponible
                    </span>
                  )}
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{cuisine.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {cuisine.name}
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">
                        {cuisine.japanese}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {cuisine.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Chaînes populaires :</h4>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.chains.slice(0, 3).map((chain) => (
                        <span 
                          key={chain}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {chain}
                        </span>
                      ))}
                      {cuisine.chains.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{cuisine.chains.length - 3} autres
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                      Découvrir →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Consultez nos guides pratiques pour apprendre à commander, comprendre les menus 
            et découvrir la culture culinaire japonaise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guides/comment-commander"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Guide de Commande
            </Link>
            <Link 
              href="/guides/culture-etiquette"              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              Culture & Étiquette
            </Link>
          </div>
        </div>      </section>
      </div>
    </>
  );
}
