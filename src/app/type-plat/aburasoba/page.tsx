import Link from "next/link";
import CategoryViewTracker from '../../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Abura Soba : Guide des Nouilles sans Bouillon de Tokyo | Japonchaines",
  description: "Découvrez l'abura soba, les \"nouilles à l'huile\" de Tokyo. Un plat plus sain qu'il n'y paraît, avec ses propres rituels de dégustation.",
  keywords: "abura soba, nouilles Tokyo, cuisine japonaise, oil noodles, mazesoba",
  openGraph: {
    title: "Abura Soba : Guide des Nouilles sans Bouillon de Tokyo | Japonchaines",
    description: "Découvrez l'abura soba, les \"nouilles à l'huile\" de Tokyo. Un plat plus sain qu'il n'y paraît, avec ses propres rituels de dégustation.",
    type: "article",
    url: "https://japonchaines.com/type-plat/aburasoba",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/aburasoba-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Abura Soba - Nouilles sans bouillon de Tokyo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abura Soba : Guide des Nouilles sans Bouillon de Tokyo | Japonchaines",
    description: "Découvrez l'abura soba, les \"nouilles à l'huile\" de Tokyo. Un plat plus sain qu'il n'y paraît, avec ses propres rituels de dégustation.",
    images: ["/images/aburasoba-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/aburasoba"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function AburassobaPage() {
  const abursobaChains = [
    {
      name: "Tokyo Abura-gumi Sōhonten",
      japanese: "東京油組総本店",
      description: "La chaîne emblématique de l'abura soba classique. Style traditionnel avec des nouilles de haute qualité et un tare secret.",
      specialties: ["Abura Soba Classic", "Abura Soba avec œuf", "Oimeshi (riz supplémentaire)"],
      priceRange: "¥880",
      orderingMethod: "Distributeur automatique",
      vegetarianOptions: "Limitées",
      uniqueFeatures: ["Style classique", "Même prix toutes tailles", "Instruction mélange"],
      founded: "2009",
      href: "/chaines/tokyo-abura-gumi"
    },
    {
      name: "Ganso Aburado",
      japanese: "元祖油堂",
      description: "Innovation moderne avec des nouilles uniques mélangeant farine de blé et farine de pâtes. Ambiance moderne et thé gratuit.",
      specialties: ["Abura Soba Signature", "Nouilles hybrides", "Thé oolong noir gratuit"],
      priceRange: "¥880",
      orderingMethod: "Distributeur automatique",
      vegetarianOptions: "Disponibles",
      uniqueFeatures: ["Nouilles innovantes", "Thé santé gratuit", "Design moderne"],
      founded: "2012",
      href: "/chaines/ganso-aburado"
    }
  ];

  const abursobaComponents = [
    {
      name: "Nouilles (麺)",
      japanese: "めん",
      description: "Nouilles de blé épaisses et moelleuses, spécialement conçues pour absorber le tare sans devenir pâteuses",
      characteristics: "Texture moelleuse, surface lisse, diamètre épais",
      importance: "Base de la recette - détermine l'expérience gustative",
      details: "Utilise un taux d'hydratation élevé pour obtenir la texture 'mochi-mochi' caractéristique"
    },
    {
      name: "Tare (タレ)",
      japanese: "たれ",
      description: "Sauce concentrée au fond du bol, mélange de shoyu, bouillon de porc/poulet et huître",
      characteristics: "Intense, umami, légèrement sucré",
      importance: "L'âme du plat - contient toute la saveur",
      details: "Souvent préparé avec le jus de cuisson du chashu pour plus de richesse"
    },
    {
      name: "Huile Parfumée (香味油)",
      japanese: "こうみゆ",
      description: "Huile de sésame ou mélange d'huiles aromatisées, enrobe les nouilles et transporte les saveurs",
      characteristics: "Aromatique, onctueux, non-gras",
      importance: "Véhicule des saveurs et texture soyeuse",
      details: "Contrairement aux apparences, apporte moins de calories qu'un ramen traditionnel"
    },
    {
      name: "Garnitures (具)",
      japanese: "ぐ",
      description: "Sélection minimaliste : chashu, menma, nori, œuf mariné optionnel",
      characteristics: "Simples, équilibrées, non-dominantes",
      importance: "Complètent sans masquer le goût principal",
      details: "L'œuf jaune ajoute une richesse crémeuse très appréciée"
    }
  ];

  const eatingSteps = [
    {
      step: 1,
      title: "Ajout des condiments",
      japanese: "調味料を加える",
      description: "Versez du vinaigre (酢) et de l'huile pimentée (ラー油) sur les nouilles chaudes",
      tip: "2 tours pour portion normale, 3 tours pour grande portion"
    },
    {
      step: 2,
      title: "Mélange vigoureux",
      japanese: "よく混ぜる",
      description: "Mélangez énergiquement pour faire remonter le tare du fond et enrober toutes les nouilles",
      tip: "Mélangez pendant que c'est chaud pour une émulsion parfaite"
    },
    {
      step: 3,
      title: "Dégustation immédiate",
      japanese: "すぐに食べる",
      description: "Mangez rapidement pour profiter de la température optimale et de la texture",
      tip: "Aspirez bruyamment - c'est encouragé !"
    },
    {
      step: 4,
      title: "Oimeshi (optionnel)",
      japanese: "追い飯",
      description: "Ajoutez du riz dans les restes de sauce pour un 'deuxième plat'",
      tip: "Comme faire 'scarpetta' avec du pain en Italie"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="aburasoba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Type de Plat</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Abura Soba</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🍜</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      Abura Soba
                    </h1>
                    <p className="text-2xl text-gray-600 japanese-text">油そば</p>
                    <p className="text-lg text-gray-500 italic">Nouilles à l'huile parfumée</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Ne vous laissez pas tromper par son nom ! L'abura soba est plus sain qu'un ramen classique. 
                  Nouilles sans bouillon, mélangées à une sauce concentrée et une huile parfumée.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Prix : ¥880
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Plus sain que le ramen
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Expérience interactive
                  </span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">L'Art de l'Abura Soba</h3>
                <p className="text-gray-600 mb-4">
                  Né dans les années 1950 à Tokyo, l'abura soba transforme le mangeur en chef cuisinier. 
                  Vous mélangez vous-même les ingrédients pour créer votre propre chef-d'œuvre culinaire.
                </p>
                <p className="text-gray-600">
                  <strong>Paradoxe sain :</strong> Malgré son nom "nouilles à l'huile", l'abura soba contient 
                  2/3 des calories d'un ramen et moitié moins de sel !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Breakdown */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Anatomie de l'Abura Soba : Les Quatre Piliers
              <span className="block text-lg text-gray-600 mt-2">油そばの四つの柱</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {abursobaComponents.map((component, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{component.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{component.japanese}</p>
                  <p className="text-gray-600 text-sm mb-4">{component.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Caractère : </span>
                      <span className="text-gray-600">{component.characteristics}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Importance : </span>
                      <span className="text-gray-600">{component.importance}</span>
                    </div>
                    <div className="pt-2 border-t border-orange-200">
                      <span className="font-semibold text-gray-900">Détail : </span>
                      <span className="text-gray-600 text-xs">{component.details}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Eat Guide */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Rituel de Dégustation : Vous Êtes le Chef !
              <span className="block text-lg text-gray-600 mt-2">食べ方の儀式</span>
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {eatingSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                  <div className="absolute -top-4 left-6 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 japanese-text text-sm mb-3">{step.japanese}</p>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-800 text-xs font-medium">💡 Conseil : {step.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Personnalisation Avancée
                <span className="block text-sm font-normal text-gray-600">カスタマイズオプション</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-4">🧅</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Oignons Hachés</h4>
                  <p className="text-gray-600 text-sm">Ajoutent du croquant et une note fraîche et piquante</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🧄</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Ail Râpé</h4>
                  <p className="text-gray-600 text-sm">Transforme complètement le profil aromatique du plat</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🌶️</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Poivre Noir</h4>
                  <p className="text-gray-600 text-sm">Ajoute une dimension épicée et parfumée</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chains */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Principales Chaînes d'Abura Soba
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {abursobaChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xs text-gray-500">Logo</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{chain.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Spécialités :</h4>
                        <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Prix : </span>
                          <span className="text-gray-600">{chain.priceRange}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Fondée : </span>
                          <span className="text-gray-600">{chain.founded}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Commande : </span>
                          <span className="text-gray-600">{chain.orderingMethod}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Caractéristiques uniques :</h4>
                        <div className="flex flex-wrap gap-1">
                          {chain.uniqueFeatures.map((feature, featureIndex) => (
                            <span key={featureIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">Végétarien : </span>
                          <span className="text-gray-600">{chain.vegetarianOptions}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                        Voir les détails →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Abura Soba vs Mazesoba */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Abura Soba vs Mazesoba : Comprendre la Différence
              <span className="block text-lg text-gray-600 mt-2">油そば vs まぜそば</span>
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                📚 Context Historique
              </h3>
              <p className="text-gray-700 mb-4">
                À l'origine, "mazesoba" était simplement un autre nom pour "abura soba". 
                La distinction moderne s'est créée en 2008 avec l'invention du "Taiwan Mazesoba" à Nagoya.
              </p>
              <p className="text-gray-700">
                Aujourd'hui, les deux plats représentent des philosophies culinaires différentes : 
                l'abura soba privilégie la pureté et la simplicité, tandis que le mazesoba mise sur la richesse et la complexité.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Caractéristique</th>
                    <th className="px-6 py-4 text-left font-bold">Abura Soba (油そば)</th>
                    <th className="px-6 py-4 text-left font-bold">Mazesoba (まぜそば)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Philosophie</td>
                    <td className="px-6 py-4 text-gray-600">Pureté des saveurs, focus sur nouilles et tare</td>
                    <td className="px-6 py-4 text-gray-600">Richesse, combinaisons audacieuses de saveurs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Garnitures</td>
                    <td className="px-6 py-4 text-gray-600">Minimales : chashu, menma, nori, œuf</td>
                    <td className="px-6 py-4 text-gray-600">Abondantes : viande hachée, légumes, fromage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Huile</td>
                    <td className="px-6 py-4 text-gray-600">Végétale (sésame), légère et parfumée</td>
                    <td className="px-6 py-4 text-gray-600">Souvent animale (saindoux), plus riche</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Préparation</td>
                    <td className="px-6 py-4 text-gray-600">Client mélange lui-même</td>
                    <td className="px-6 py-4 text-gray-600">Souvent pré-mélangé ou difficile à mélanger</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Origine</td>
                    <td className="px-6 py-4 text-gray-600">Tokyo, années 1950 (culture étudiante)</td>
                    <td className="px-6 py-4 text-gray-600">Nagoya, 2008 (Taiwan Mazesoba)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Prix moyen</td>
                    <td className="px-6 py-4 text-gray-600">¥800-1000</td>
                    <td className="px-6 py-4 text-gray-600">¥1000-1500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cultural Context */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Culture et Contexte Social
              <span className="block text-lg text-gray-600 mt-2">文化的背景</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Culture Étudiante</h3>
                <p className="text-gray-600 mb-4">
                  Né dans les quartiers universitaires de Tokyo dans les années 1950. 
                  Réponse parfaite aux besoins des étudiants : bon marché, copieux et savoureux.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Avantage économique :</strong> Pas de coût de bouillon, permet des portions généreuses à prix abordable.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🍻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rituel "Shime"</h3>
                <p className="text-gray-600 mb-4">
                  L'abura soba est devenu un choix populaire pour le "shime" (plat final après une soirée arrosée). 
                  Les glucides et le sel aident à récupérer.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Science :</strong> L'alcool baisse la glycémie et élimine le sodium. Le cerveau réclame des glucides salés.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expérience Interactive</h3>
                <p className="text-gray-600 mb-4">
                  Contrairement aux plats japonais traditionnels servis dans une forme définitive, 
                  l'abura soba transforme le mangeur en co-créateur actif.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Philosophie moderne :</strong> Personnalisation et participation active reflètent les valeurs contemporaines.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                L'Art du "Oimeshi" : La Tradition de la Scarpetta Japonaise
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-4">
                    Le "oimeshi" (追い飯) - littéralement "riz qui poursuit" - consiste à ajouter du riz blanc 
                    dans les restes de sauce au fond du bol. Cette pratique ressemble étonnamment à la tradition 
                    italienne de "fare la scarpetta" (faire la petite chaussure) avec du pain.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Cette similitude culturelle permet aux voyageurs francophones de comprendre instantanément 
                    le plaisir de cette pratique : ne pas gaspiller une sauce délicieuse !
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">🍚 Guide du Oimeshi</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Timing :</strong> Après avoir fini les nouilles</li>
                    <li>• <strong>Quantité :</strong> 1 à 2 cuillères de riz</li>
                    <li>• <strong>Technique :</strong> Mélangez avec les restes de sauce</li>
                    <li>• <strong>Résultat :</strong> Un "risotto" japonais improvisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with European Pasta */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Comparaison avec les Pâtes Européennes
              <span className="block text-lg text-gray-600 mt-2">ヨーロッパのパスタとの比較</span>
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Élément</th>
                    <th className="px-6 py-4 text-left font-bold">Abura Soba (Japon)</th>
                    <th className="px-6 py-4 text-left font-bold">Cacio e Pepe (Italie)</th>
                    <th className="px-6 py-4 text-left font-bold">Aglio Olio (Italie)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Matière grasse</td>
                    <td className="px-6 py-4 text-gray-600">Huile de sésame parfumée</td>
                    <td className="px-6 py-4 text-gray-600">Beurre + graisse de guanciale</td>
                    <td className="px-6 py-4 text-gray-600">Huile d'olive extra vierge</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Base sapide</td>
                    <td className="px-6 py-4 text-gray-600">Tare concentré (shoyu + dashi)</td>
                    <td className="px-6 py-4 text-gray-600">Pecorino Romano</td>
                    <td className="px-6 py-4 text-gray-600">Ail + piment + persil</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Texture nouilles</td>
                    <td className="px-6 py-4 text-gray-600">Épaisses, moelleuses (mochi-mochi)</td>
                    <td className="px-6 py-4 text-gray-600">Spaghetti al dente</td>
                    <td className="px-6 py-4 text-gray-600">Spaghetti al dente</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Philosophie</td>
                    <td className="px-6 py-4 text-gray-600">Interaction & personnalisation</td>
                    <td className="px-6 py-4 text-gray-600">Simplicité & technique</td>
                    <td className="px-6 py-4 text-gray-600">Pureté des ingrédients</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Émulsion</td>
                    <td className="px-6 py-4 text-gray-600">Chaleur + mélange manuel</td>
                    <td className="px-6 py-4 text-gray-600">Eau de cuisson + mantecatura</td>
                    <td className="px-6 py-4 text-gray-600">Eau de cuisson + émulsion</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                🌍 Philosophies Culinaires Convergentes
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto">
                Bien que issus de traditions différentes, l'abura soba japonais et les pâtes italiennes simples 
                partagent une même quête : <strong>révéler la beauté dans la simplicité</strong>. 
                Peu d'ingrédients, technique précise, respect du produit et recherche de l'harmonie parfaite.
              </p>
            </div>
          </div>
        </section>

        {/* Practical Guide */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Guide Pratique pour Voyageurs
              <span className="block text-lg text-gray-600 mt-2">旅行者向け実用ガイド</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-green-800">
                  📍 Où Trouver
                  <span className="block text-sm font-normal text-gray-600">どこで見つける</span>
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Districts recommandés</p>
                    <p className="text-sm text-gray-600">Akasaka, Shimbashi, Roppongi, Tamachi (quartiers d'affaires)</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Chaînes fiables</p>
                    <p className="text-sm text-gray-600">Tokyo Abura-gumi, Ganso Aburado (présence nationale)</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Horaires optimaux</p>
                    <p className="text-sm text-gray-600">Déjeuner (11h-14h) ou dîner tardif (21h-23h)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-blue-800">
                  💰 Budget & Commande
                  <span className="block text-sm font-normal text-gray-600">予算と注文</span>
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Prix standard</p>
                    <p className="text-sm text-gray-600">¥880 (toutes tailles au même prix dans la plupart des chaînes)</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Commande type</p>
                    <p className="text-sm text-gray-600">Distributeur automatique → "油そば" → taille → options</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Options populaires</p>
                    <p className="text-sm text-gray-600">+Œuf mariné (¥100), +Oimeshi (¥100-150)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-orange-800">
                  🥢 Étiquette Essentielle
                  <span className="block text-sm font-normal text-gray-600">基本マナー</span>
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Mélange obligatoire</p>
                    <p className="text-sm text-gray-600">Mélangez énergiquement et immédiatement</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Aspiration encouragée</p>
                    <p className="text-sm text-gray-600">Faire du bruit en mangeant = appréciation</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-medium text-gray-900 mb-1">Rapidité appréciée</p>
                    <p className="text-sm text-gray-600">Libérez votre place rapidement (forte rotation)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Phrases Essentielles en Japonais
                <span className="block text-sm font-normal text-gray-600">必須フレーズ</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Commande</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">油そばお願いします</p>
                      <p className="text-sm text-gray-600 italic">Abura soba onegaishimasu</p>
                      <p className="text-sm text-blue-600">→ "Abura soba s'il vous plaît"</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">大盛りで</p>
                      <p className="text-sm text-gray-600 italic">Ōmori de</p>
                      <p className="text-sm text-blue-600">→ "En grande portion"</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Pendant le repas</h4>
                  <div className="space-y-3">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">よく混ぜてください</p>
                      <p className="text-sm text-gray-600 italic">Yoku mazete kudasai</p>
                      <p className="text-sm text-blue-600">→ "Mélangez bien"</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">追い飯お願いします</p>
                      <p className="text-sm text-gray-600 italic">Oimeshi onegaishimasu</p>
                      <p className="text-sm text-blue-600">→ "Du riz supplémentaire s'il vous plaît"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Avantages Santé Surprenants
              <span className="block text-lg text-gray-600 mt-2">意外な健康メリット</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Le Paradoxe de l'Abura Soba</h3>
                  <p className="text-gray-700 mb-6">
                    Malgré son nom "nouilles à l'huile", l'abura soba est paradoxalement 
                    <strong> plus sain qu'un ramen traditionnel</strong>. Cette révélation surprend 
                    toujours les nouveaux gourmets !
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl mr-4">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Calories réduites</h4>
                        <p className="text-gray-600 text-sm">Environ 2/3 des calories d'un ramen classique</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl mr-4">🧂</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Moins de sodium</h4>
                        <p className="text-gray-600 text-sm">Environ 50% moins de sel qu'un ramen en bouillon</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl mr-4">💧</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Moins de rétention d'eau</h4>
                        <p className="text-gray-600 text-sm">Absence de bouillon = moins de ballonnements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-900 mb-3">💪 Avantages Nutritionnels</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Protéines :</strong> Chashu et œuf fournissent des protéines complètes</li>
                    <li>• <strong>Glucides complexes :</strong> Nouilles de blé pour l'énergie durable</li>
                    <li>• <strong>Bonnes graisses :</strong> Huile de sésame riche en vitamine E</li>
                    <li>• <strong>Umami :</strong> Dashi naturel stimule la satiété</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-900 mb-3">🧠 Bénéfices Psychologiques</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Engagement actif :</strong> Le mélange stimule l'attention</li>
                    <li>• <strong>Satisfaction créative :</strong> Personnalisation = accomplissement</li>
                    <li>• <strong>Mindful eating :</strong> Processus ralentit la consommation</li>
                    <li>• <strong>Reward system :</strong> Travail → récompense gustative</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-amber-900 mb-3">⚖️ Comparaison Nutritionnelle</h4>
                  <div className="text-sm text-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">Abura Soba (1 portion)</p>
                        <p>• Calories : ~500-600</p>
                        <p>• Sodium : ~2.5g</p>
                        <p>• Lipides : ~15g</p>
                      </div>
                      <div>
                        <p className="font-semibold">Ramen Tonkotsu (1 portion)</p>
                        <p>• Calories : ~800-900</p>
                        <p>• Sodium : ~5g</p>
                        <p>• Lipides : ~25g</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à Découvrir l'Abura Soba ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Cette expérience culinaire unique vous attend dans les rues de Tokyo. 
              Devenez chef d'un jour et créez votre propre chef-d'œuvre !
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/chaines/tokyo-abura-gumi"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Tokyo Abura-gumi
              </Link>
              <Link 
                href="/chaines/ganso-aburado"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ganso Aburado
              </Link>
              <Link 
                href="/guides/comment-commander"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border-2 border-orange-300"
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
