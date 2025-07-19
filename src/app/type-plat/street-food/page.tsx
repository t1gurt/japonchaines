import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Street Food Japonaise : Guide du Takoyaki et Yatai | Japonchaines",
  description: "Explorez la street food japonaise. Découvrez les takoyaki d'Osaka avec Gindako et la culture des stands de rue (yatai).",
  keywords: "street food japonaise, takoyaki, Gindako, yatai, street food osaka, taiyaki",
  openGraph: {
    title: "Street Food Japonaise : Guide du Takoyaki et Yatai | Japonchaines",
    description: "Explorez la street food japonaise. Découvrez les takoyaki d'Osaka avec Gindako et la culture des stands de rue (yatai).",
    type: "article",
    url: "https://japonchaines.com/type-plat/street-food",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/street-food-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Street food japonaise - Takoyaki et yatai"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Street Food Japonaise : Guide du Takoyaki et Yatai | Japonchaines",
    description: "Explorez la street food japonaise. Découvrez les takoyaki d'Osaka avec Gindako et la culture des stands de rue (yatai).",
    images: ["/images/street-food-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/street-food"
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

export default function StreetFoodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-purple-600">Types de Plat</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-purple-600 font-medium">Street Food</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🥟</span>
            <span className="text-6xl mr-4">🍡</span>
            <span className="text-6xl">🍢</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Street Food
          </h1>
          <p className="text-2xl mb-4 text-yellow-100 japanese-text">屋台・街角グルメ</p>
          <p className="text-xl mb-8 text-yellow-100">
            Yatai Moderne et Takoyaki - L'Âme de la Rue Japonaise
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Culture Street Food Japonaise</h2>
            <p className="text-lg text-yellow-200">
              Des festivals d'été aux coins de rue animés, la street food japonaise 
              transforme chaque bouchée en moment de convivialité authentique, 
              perpétuant une tradition millénaire d'excellence culinaire nomade.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Yatai Tradition
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Takoyaki Master
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Festival Vibes
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              🏮 L'Univers de la Street Food Japonaise
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                La street food japonaise transcende la simple restauration rapide : 
                c'est un art culinaire où chaque spécialité raconte l'histoire d'une région, 
                d'une tradition et d'un savoir-faire transmis de génération en génération.
              </p>
              <p className="text-lg text-gray-700">
                Des takoyaki d'Osaka aux taiyaki de Tokyo, découvrez ces chaînes modernes 
                qui perpétuent l'excellence de la street food traditionnelle japonaise.
              </p>
            </div>
          </div>

          {/* Chaînes Street Food */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥟 Chaînes Street Food au Japon
            </h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Gindako */}
              <Link href="/chaines/gindako">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-6">
                      <span className="text-4xl mr-3">🐙</span>
                      <span className="text-4xl mr-3">🥟</span>
                      <span className="text-4xl">🔥</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                        Gindako (銀だこ)
                      </h3>
                      <p className="text-lg text-gray-600">Takoyaki Maître d'Osaka</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🐙 Takoyaki Authentique</h4>
                      <p className="text-gray-700 mb-4">
                        Les vrais takoyaki d'Osaka : pâte crémeuse, pieuvre tendre, 
                        cuisson parfaite dans des plaques traditionnelles en fonte.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">6 takoyaki :</span>
                          <span className="font-semibold">480¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">8 takoyaki :</span>
                          <span className="font-semibold">580¥</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Spécialité :</span>
                          <span className="font-semibold">Sauce secrète</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🔥 Expérience Live</h4>
                      <p className="text-gray-700 mb-4">
                        Spectacle culinaire en direct : regardez les maîtres takoyaki 
                        manipuler les baguettes avec une dextérité impressionnante.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cuisson :</span>
                          <span className="font-semibold">3-4 min</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Température :</span>
                          <span className="font-semibold">Très chaud</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service :</span>
                          <span className="font-semibold">Frais préparé</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-red-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Spécialité :</strong> Takoyaki traditionnel d'Osaka, sauce signature, mayonnaise
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Ambiance :</strong> Street food authentique, cuisson live, ambiance festival
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Culture Yatai */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏮 La Culture Yatai (屋台)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Histoire Millénaire</h3>
                <p className="text-gray-700 mb-4">
                  Les yatai (stands de rue) remontent à l'époque d'Edo. Symboles de 
                  convivialité, ils transforment la rue en lieu de rencontre sociale.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Origine :</strong> Époque Edo (1603-1868)</li>
                  <li>• <strong>Concept :</strong> Cuisine mobile de rue</li>
                  <li>• <strong>Social :</strong> Lieu de rencontre populaire</li>
                  <li>• <strong>Évolution :</strong> Tradition vers modernité</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎭 Festivals & Matsuri</h3>
                <p className="text-gray-700 mb-4">
                  Lors des festivals (matsuri), la street food devient centrale : 
                  chaque spécialité évoque la joie collective et l'esprit communautaire.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Événements :</strong> Festivals saisonniers</li>
                  <li>• <strong>Ambiance :</strong> Conviviale, festive</li>
                  <li>• <strong>Partage :</strong> Expérience collective</li>
                  <li>• <strong>Tradition :</strong> Transmise aux enfants</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Modernisation</h3>
                <p className="text-gray-700 mb-4">
                  Les chaînes modernes préservent l'âme du yatai : qualité artisanale, 
                  cuisson live, interaction directe, tout en garantissant hygiène et accessibilité.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Hygiène :</strong> Standards modernes</li>
                  <li>• <strong>Accessibilité :</strong> Centres commerciaux</li>
                  <li>• <strong>Qualité :</strong> Constante et fiable</li>
                  <li>• <strong>Authenticité :</strong> Goûts préservés</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spécialités Street Food */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🍡 Spécialités Street Food Japonaises
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🐙 Takoyaki (たこ焼き)</h3>
                <p className="text-gray-700 mb-4">
                  Spécialité d'Osaka : boulettes de pâte avec morceaux de pieuvre, 
                  cuites dans plaques spéciales, nappées de sauce et mayonnaise.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ingrédients :</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Pieuvre (tako)</li>
                      <li>• Pâte farine</li>
                      <li>• Oignons verts</li>
                      <li>• Gingembre mariné</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Garnitures :</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Sauce takoyaki</li>
                      <li>• Mayonnaise</li>
                      <li>• Katsuobushi (bonite)</li>
                      <li>• Aonori (algue)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍢 Autres Spécialités</h3>
                <p className="text-gray-700 mb-4">
                  La street food japonaise offre une variété impressionnante : 
                  des sucrés aux salés, chaque région a ses spécialités emblématiques.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🍡 <strong>Dango</strong> - Boulettes de riz sucrées</span>
                    <span className="text-gray-600">100¥-200¥</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🐟 <strong>Taiyaki</strong> - Poisson à la pâte rouge</span>
                    <span className="text-gray-600">150¥-250¥</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🍢 <strong>Yakitori</strong> - Brochettes de poulet</span>
                    <span className="text-gray-600">100¥-300¥</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🥞 <strong>Imagawayaki</strong> - Pancake fourré</span>
                    <span className="text-gray-600">150¥-200¥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guide Takoyaki */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🐙 Guide Expert Takoyaki
            </h2>
            
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-2">
                  L'Art du Takoyaki Parfait
                </h3>
                <p className="text-gray-700">
                  Déguster un takoyaki n'est pas qu'un repas : c'est une expérience 
                  sensorielle qui demande technique et patience pour une saveur optimale.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🔥 Température Critique</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Attention :</strong> Les takoyaki sortent brûlants (80°C+). 
                    Respectez le refroidissement pour éviter les brûlures.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Attendre 2-3 minutes</li>
                    <li>• Souffler délicatement</li>
                    <li>• Tester avec précaution</li>
                    <li>• Cœur peut rester très chaud</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🥢 Technique de Dégustation</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Utilisez les baguettes fournies, piquez délicatement, 
                    et savourez chaque bouchée avec les garnitures.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Piquer avec baguettes</li>
                    <li>• Mélanger garnitures</li>
                    <li>• Bouchées de taille modérée</li>
                    <li>• Savourer les textures</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🎯 Expérience Complète</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Le vrai plaisir vient du spectacle de préparation : 
                    observez le maître tourner les takoyaki avec expertise.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Observer la cuisson live</li>
                    <li>• Apprécier la dextérité</li>
                    <li>• Sentir les arômes</li>
                    <li>• Ambiance authentique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Régimes Alimentaires */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥗 Régimes Alimentaires & Street Food
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4">🌱 Végétarien</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Difficile</strong> dans la street food traditionnelle. 
                  Takoyaki contient pieuvre, la plupart des spécialités incluent viande/poisson.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ❌ Takoyaki (pieuvre)</li>
                  <li>• ❌ Yakitori (poulet)</li>
                  <li>• ✅ Quelques desserts sucrés</li>
                  <li>• ⚠️ Vérifier bouillons (poisson)</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Possible</strong> mais attention aux sauces et bouillons. 
                  Takoyaki généralement OK, vérifier autres spécialités.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Takoyaki (pieuvre + pâte)</li>
                  <li>• ❌ Certains yakitori (porc)</li>
                  <li>• ⚠️ Sauces (vérifier ingrédients)</li>
                  <li>• ⚠️ Pas de certification halal</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                <p className="text-gray-700 mb-4">
                  Attention particulière requise : beaucoup d'allergènes courants 
                  dans les ingrédients traditionnels.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ⚠️ Gluten (pâte farine)</li>
                  <li>• ⚠️ Fruits de mer (pieuvre)</li>
                  <li>• ⚠️ Œufs (dans certaines pâtes)</li>
                  <li>• ⚠️ Soja (sauces)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/type-plat"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Tous les Types
              </Link>
              <Link 
                href="/chaines"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Toutes les Chaînes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
