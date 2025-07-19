import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Udon & Soba : Guide des Nouilles Japonaises | Japonchaines",
  description: "Explorez les deux grandes traditions de nouilles japonaises : les udon épaisses du Kansai et les soba fines d'Edo.",
  keywords: "udon, soba, nouilles japonaises, Marugame Seimen, Fuji Soba, traditions culinaires",
  openGraph: {
    title: "Udon & Soba : Guide des Nouilles Japonaises | Japonchaines",
    description: "Explorez les deux grandes traditions de nouilles japonaises : les udon épaisses du Kansai et les soba fines d'Edo.",
    type: "article",
    url: "https://japonchaines.com/type-plat/udon-soba",
    siteName: "Japonchaines",
    locale: "fr_FR",
    images: [{
      url: "/images/udon-soba-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Udon et Soba - Nouilles japonaises traditionnelles"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Udon & Soba : Guide des Nouilles Japonaises | Japonchaines",
    description: "Explorez les deux grandes traditions de nouilles japonaises : les udon épaisses du Kansai et les soba fines d'Edo.",
    images: ["/images/udon-soba-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/udon-soba"
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

export default function UdonSobaRedirectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-purple-600">Types de Plats</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-purple-600 font-medium">Udon & Soba</span>
          </nav>
        </div>
      </div>

      {/* Redirection Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🍲</span>
            <span className="text-6xl mr-4">🌾</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nouilles Japonaises Traditionnelles
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            Nous avons séparé les catégories Udon et Soba pour vous offrir 
            une exploration plus approfondie de ces deux traditions culinaires distinctes.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Choisissez votre tradition :</h2>
            <p className="text-lg text-purple-200">
              Découvrez les nuances uniques entre les nouilles épaisses d'Udon du Kansai 
              et les nouilles fines de Soba d'Edo (Tokyo).
            </p>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Udon Choice */}
            <Link 
              href="/type-plat/udon"
              className="group bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🍲</div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-4">
                  Udon
                </h2>
                <p className="text-xl text-gray-600 japanese-text mb-6">うどん</p>
                <p className="text-gray-700 mb-6">
                  Nouilles épaisses et moelleuses de blé, origines du Kansai (sud du Japon). 
                  Réconfortantes et généreuses, elles incarnent la chaleur et la convivialité.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Chaînes Principales :</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Marugame Seimen - 丸亀製麺</li>
                      <li>• Hanamaru Udon - はなまるうどん</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Caractéristiques :</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Texture épaisse et moelleuse</li>
                      <li>• Bouillon savoureux et réconfortant</li>
                      <li>• Tradition du Kansai</li>
                      <li>• Prix très abordables</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-semibold group-hover:bg-orange-200 transition-colors">
                    Explorer les Udon →
                  </span>
                </div>
              </div>
            </Link>

            {/* Soba Choice */}
            <Link 
              href="/type-plat/soba"
              className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🌾</div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-4">
                  Soba
                </h2>
                <p className="text-xl text-gray-600 japanese-text mb-6">そば</p>
                <p className="text-gray-700 mb-6">
                  Nouilles fines de sarrasin, tradition d'Edo (Tokyo). Raffinées et parfumées, 
                  elles représentent l'élégance et la subtilité japonaise.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Chaînes Principales :</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Fuji Soba - 富士そば</li>
                      <li>• Yudetaro - ゆで太郎</li>
                      <li>• Komoro Soba - 小諸そば</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Caractéristiques :</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Texture fine et ferme</li>
                      <li>• Goût subtil du sarrasin</li>
                      <li>• Tradition d'Edo (Tokyo)</li>
                      <li>• Expérience raffinée</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold group-hover:bg-purple-200 transition-colors">
                    Explorer les Soba →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Context */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Deux Philosophies Culinaires
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍲 L'Esprit Udon</h3>
              <p className="text-gray-700 mb-4">
                Origines du <strong>Kansai</strong> (Osaka, Kyoto), les udon incarnent la générosité 
                et la convivialité du sud du Japon. Épaisses et réconfortantes, elles 
                privilégient la satisfaction et le partage.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tradition de générosité</li>
                <li>• Texture moelleuse et rassasiante</li>
                <li>• Bouillon riche et parfumé</li>
                <li>• Convivialité familiale</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌾 L'Âme Soba</h3>
              <p className="text-gray-700 mb-4">
                Tradition d'<strong>Edo</strong> (Tokyo), les soba représentent l'élégance 
                et la recherche de perfection. Fines et subtiles, elles privilégient 
                la pureté des saveurs et l'instant présent.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Raffinement d'Edo</li>
                <li>• Goût délicat du sarrasin</li>
                <li>• Expérience méditative</li>
                <li>• Simplicité élégante</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Pourquoi cette séparation ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Spécialisation</h4>
                <p className="text-sm text-gray-600">
                  Chaque tradition mérite sa propre exploration approfondie
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🏛️</div>
                <h4 className="font-bold text-gray-900 mb-2">Contexte Culturel</h4>
                <p className="text-sm text-gray-600">
                  Comprendre les origines régionales et philosophiques distinctes
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-bold text-gray-900 mb-2">Expérience Unique</h4>
                <p className="text-sm text-gray-600">
                  Découvrir les nuances entre deux arts culinaires japonais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à explorer les traditions noodle du Japon ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choisissez votre voie : la générosité des Udon ou l'élégance des Soba
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/type-plat/udon"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              🍲 Découvrir les Udon
            </Link>
            <Link 
              href="/type-plat/soba"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              🌾 Explorer les Soba
            </Link>
          </div>
          <div className="mt-6">
            <Link 
              href="/type-plat"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Retour aux types de plats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
