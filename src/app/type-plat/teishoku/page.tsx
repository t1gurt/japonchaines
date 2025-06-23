import { Metadata } from 'next';
import Link from 'next/link';
import CategoryViewTracker from '@/components/CategoryViewTracker';

export const metadata: Metadata = {
  title: 'Teishoku (定食) - Repas Complets Traditionnels | Guide Restaurants Japonais',
  description: 'Découvrez les teishoku, repas complets traditionnels japonais avec riz, soupe et accompagnements. Guide des meilleures chaînes de restaurant japonais spécialisées.',
  keywords: 'teishoku, 定食, restaurant japonais, repas complet, cuisine traditionnelle, Ootoya, Yayoiken, soupe miso, riz',
  openGraph: {
    title: 'Teishoku - Repas Complets Traditionnels Japonais',
    description: 'Guide complet des teishoku : repas équilibrés avec riz, soupe miso et accompagnements dans les meilleures chaînes japonaises.',
    type: 'article'
  }
};

export default function TeishokuPage() {
  const teishokuChains = [
    {
      name: "Ootoya",
      japanese: "大戸屋",
      englishName: "Ootoya",
      description: "Chaîne de teishoku haut de gamme proposant des repas complets traditionnels avec des ingrédients frais et une cuisine soignée.",
      specialties: ["Saba Teishoku", "Karaage Teishoku", "Tofu Hamburger", "Seasonal Vegetables"],
      priceRange: "¥800-1500",
      style: "Teishoku traditionnel raffiné",
      orderingMethod: "Menu papier + service à table",
      vegetarianOptions: "Excellentes options végétariennes",
      uniqueFeatures: ["Légumes frais", "Cuisine visible", "Présentation soignée"],
      atmosphere: "Familial raffiné",
      href: "/chaines/ootoya"
    },
    {
      name: "Yayoiken",
      japanese: "やよい軒",
      englishName: "Yayoiken",
      description: "Chaîne populaire de teishoku offrant des repas copieux et abordables dans une ambiance décontractée.",
      specialties: ["Chicken Nanban", "Karaage Teishoku", "Gyoza Teishoku", "Seasonal Menu"],
      priceRange: "¥600-1200",
      style: "Teishoku populaire",
      orderingMethod: "Tickets + comptoir/table",
      vegetarianOptions: "Options limitées",
      uniqueFeatures: ["Riz illimité", "Prix abordable", "Portions généreuses"],
      atmosphere: "Décontracté familial",
      href: "/chaines/yayoiken"
    },    {
      name: "Miyamoto Munashi",
      japanese: "宮本むなし",
      englishName: "Miyamoto Munashi",
      description: "Chaîne de teishoku économique originaire d'Osaka, réputée pour ses portions généreuses à prix abordables.",
      specialties: ["Teishoku économique", "Katsu Teishoku", "Ginger Pork", "Rice Bowl Sets"],
      priceRange: "¥400-800",
      style: "Teishoku économique",
      orderingMethod: "Tickets + comptoir",
      vegetarianOptions: "Options très limitées",
      uniqueFeatures: ["Prix très bas", "Portions XXL", "Service rapide"],
      atmosphere: "Populaire décontracté",
      href: "/chaines/miyamoto-munashi"
    }
  ];

  const teishokuComponents = [
    {
      name: "Plat Principal",
      japanese: "主菜",
      description: "Poisson grillé, viande ou tofu préparé selon la recette du jour",
      characteristics: "Protéines de qualité, cuisson traditionnelle",
      examples: ["Saba grillé", "Chicken karaage", "Tofu hambugu", "Bœuf teriyaki"],
      importance: "Source principale de protéines"
    },
    {
      name: "Riz Blanc",
      japanese: "ご飯",
      description: "Riz japonais cuit à la perfection, base nutritionnelle du repas",
      characteristics: "Grains brillants, texture légèrement collante",
      examples: ["Riz gohan", "Riz aux grains ronds", "Parfois riz aux céréales"],
      importance: "Base énergétique, souvent illimité"
    },
    {
      name: "Soupe Miso",
      japanese: "味噌汁",
      description: "Bouillon à base de pâte miso avec tofu, wakame et légumes",
      characteristics: "Goût umami, réconfortant, nutritif",
      examples: ["Miso aux épinards", "Miso au tofu", "Miso aux champignons"],
      importance: "Apport en probiotiques et minéraux"
    },
    {
      name: "Légumes Marinés",
      japanese: "漬物",
      description: "Tsukemono - légumes fermentés ou marinés pour la digestion",
      characteristics: "Acidulé, croquant, aide à la digestion",
      examples: ["Chou mariné", "Radis daikon", "Concombre au miso"],
      importance: "Facilite la digestion, vitamines"
    },
    {
      name: "Petits Accompagnements",
      japanese: "副菜",
      description: "Petits plats d'accompagnement variés selon la saison",
      characteristics: "Variés, colorés, équilibre nutritionnel",
      examples: ["Kinpira gobo", "Hijiki", "Tamagoyaki", "Salade de pommes de terre"],
      importance: "Complète l'équilibre nutritionnel"
    }
  ];

  const culturalSignificance = [
    {
      title: "Philosophie Ichijuu Sansai",
      icon: "🍚",
      description: "\"Une soupe, trois plats\" - principe fondamental de l'équilibre alimentaire japonais",
      details: "Le teishoku suit cette règle millénaire qui assure un repas nutritionnellement complet et visuellement harmonieux."
    },
    {
      title: "Équilibre Nutritionnel",
      icon: "⚖️",
      description: "Combinaison parfaite de protéines, glucides, légumes et probiotiques",
      details: "Chaque composant a son rôle : le riz pour l'énergie, le poisson/viande pour les protéines, les légumes pour les vitamines."
    },
    {
      title: "Cuisine Familiale",
      icon: "👨‍👩‍👧‍👦",
      description: "Représente l'essence de la cuisine familiale japonaise traditionnelle",
      details: "Ce qu'une mère japonaise préparerait pour sa famille : simple, nutritif et réconfortant."
    },
    {
      title: "Accessibilité",
      icon: "💰",
      description: "Repas complet et équilibré à prix abordable pour tous",
      details: "Démocratise la bonne alimentation traditionnelle japonaise, accessible aux salariés et familles."
    },
    {
      title: "Saisonnalité",
      icon: "🌸",
      description: "Utilisation d'ingrédients de saison pour la fraîcheur et le goût",
      details: "Les menus changent selon les saisons, reflétant la philosophie japonaise du respect de la nature."
    },
    {
      title: "Présentation Harmonieuse",
      icon: "🎨",
      description: "Disposition esthétique qui nourrit aussi les yeux",
      details: "L'art de la présentation japonaise : couleurs, formes et textures en harmonie sur le plateau."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryViewTracker categoryName="teishoku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Type de Plat</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Teishoku</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍱</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Teishoku
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">定食</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Découvrez l'essence de la cuisine familiale japonaise avec les teishoku : 
                des repas complets et équilibrés alliant tradition millénaire et nutrition 
                moderne. Un plat principal, du riz, une soupe miso et des accompagnements 
                pour un repas parfaitement harmonieux.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Prix : ¥600-1500
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Repas complet
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Cuisine traditionnelle
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Le Teishoku Traditionnel</h3>
              <p className="text-gray-600 mb-4">
                Le teishoku suit la philosophie "ichijuu sansai" (une soupe, trois plats) 
                qui garantit un repas nutritionnellement équilibré. C'est l'incarnation 
                de la sagesse culinaire japonaise.
              </p>
              <p className="text-gray-600">
                Chaque élément a sa fonction : le riz apporte l'énergie, le plat principal 
                les protéines, la soupe miso les probiotiques, et les accompagnements 
                les vitamines et minéraux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            La Philosophie du Teishoku
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalSignificance.map((significance, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-3xl mb-4">{significance.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{significance.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{significance.description}</p>
                <p className="text-gray-500 text-xs">{significance.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Composition d'un Teishoku
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teishokuComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{component.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{component.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{component.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Caractéristiques :</span>
                    <p className="text-gray-600">{component.characteristics}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Exemples :</span>
                    <p className="text-gray-600">{component.examples.join(", ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Importance :</span>
                    <p className="text-gray-600">{component.importance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Principales Chaînes de Teishoku
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {teishokuChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">🍱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.atmosphere}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Spécialités :</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Particularités :</h4>
                      <p className="text-sm text-gray-600">{chain.uniqueFeatures.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Prix : </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Style : </span>
                        <span className="text-gray-600">{chain.style}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Végétarien : </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment Commander un Teishoku
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Choisir le Set</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regarder le menu des teishoku</li>
                <li>• Choisir le plat principal</li>
                <li>• Noter les accompagnements inclus</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Options de Riz</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Riz blanc standard</li>
                <li>• Parfois riz aux céréales</li>
                <li>• Souvent illimité (okawari)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Boissons</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Thé vert gratuit souvent</li>
                <li>• Eau froide disponible</li>
                <li>• Boissons supplémentaires payantes</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Attendre d'être placé</li>
                <li>• Tout arrive en même temps</li>
                <li>• Manger dans l'ordre souhaité</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Phrases Utiles</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Teishoku wo kudasai</span> <span className="japanese-text">定食をください</span></p>
                <p className="text-gray-600 mb-2">Un teishoku, s'il vous plaît</p>
                
                <p><span className="font-semibold">Gohan okawari dekimasu ka?</span> <span className="japanese-text">ご飯おかわりできますか？</span></p>
                <p className="text-gray-600 mb-2">Puis-je avoir une deuxième portion de riz ?</p>
              </div>
              <div>
                <p><span className="font-semibold">Osusume wa nan desu ka?</span> <span className="japanese-text">おすすめは何ですか？</span></p>
                <p className="text-gray-600 mb-2">Quelle est votre recommandation ?</p>
                
                <p><span className="font-semibold">Gochisousama deshita</span> <span className="japanese-text">ごちそうさまでした</span></p>
                <p className="text-gray-600">Merci pour ce repas (à la fin)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conseils pour Apprécier les Teishoku
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ordre de Dégustation</h3>
              <p className="text-gray-600 text-sm">
                Commencez par la soupe miso pour préparer l'estomac, puis alternez 
                entre le plat principal et le riz. Les marinés nettoient le palais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Équilibre Parfait</h3>
              <p className="text-gray-600 text-sm">
                Le teishoku est conçu pour être nutritionnellement complet. 
                Mangez tous les composants pour bénéficier de cet équilibre.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Excellent Rapport Qualité-Prix</h3>
              <p className="text-gray-600 text-sm">
                Un teishoku offre un repas complet pour moins cher que plusieurs 
                plats séparés. Parfait pour un déjeuner équilibré.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Option Végétarienne</h3>
              <p className="text-gray-600 text-sm">
                Ootoya propose d'excellentes options végétariennes. Yayoiken 
                et autres chaînes ont des alternatives à base de tofu.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Menus Photographiés</h3>
              <p className="text-gray-600 text-sm">
                Les chaînes de teishoku ont généralement des menus avec photos, 
                facilitant la commande même sans parler japonais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Horaires Idéaux</h3>
              <p className="text-gray-600 text-sm">
                Évitez l'heure de pointe du déjeuner (12h-13h) pour plus de tranquillité. 
                Les teishoku sont parfaits pour un dîner léger aussi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
