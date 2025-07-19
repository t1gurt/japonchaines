import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hidakaya : Le "Chuka" Populaire des Salarymen | Japonchaines',
  description: 'Découvrez Hidakaya, la chaîne de cuisine chinoise (chuka) abordable. Ramen, gyoza et plats sautés à prix imbattables. Le QG des salarymen.',
  keywords: 'hidakaya, chuka, cuisine chinoise japonaise, ramen pas cher, gyoza, restaurant salaryman, fast food chinois japon',
  openGraph: {
    title: 'Hidakaya : Le "Chuka" Populaire des Salarymen | Japonchaines',
    description: 'Découvrez Hidakaya, la chaîne de cuisine chinoise (chuka) abordable. Ramen, gyoza et plats sautés à prix imbattables. Le QG des salarymen.',
    type: 'article',
    locale: 'fr_FR',
    siteName: 'Japonchaines - Guide des Restaurants Japonais'
  },
  alternates: {
    canonical: '/chaines/hidakaya'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HidakayaPage() {
  return (
    <>
      <ChainViewTracker chainName="hidakaya" chainCategory="cuisine-chinoise" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/cuisine-chinoise" className="text-gray-500 hover:text-purple-600">Cuisine Chinoise</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Hidakaya</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🥟</span>
              <span className="text-6xl mr-4">🍜</span>
              <span className="text-6xl">🔥</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hidakaya
            </h1>
            <p className="text-2xl mb-4 text-red-100 japanese-text">日高屋</p>
            <p className="text-xl mb-8 text-red-100">
              Gyoza & Ramen Populaires - Cuisine Chinoise Accessible
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Le Champion des Gyoza & Ramen Abordables</h2>
              <p className="text-lg text-red-200">
                Depuis 1979, Hidakaya démocratise la cuisine chinoise au Japon avec ses gyoza 
                croustillants et ses ramen authentiques à prix défiant toute concurrence.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Gyoza Célèbres
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Ramen Authentiques
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Prix Populaires
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Philosophie */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏮 Histoire & Philosophie Hidakaya
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📅 Naissance d'une Légende (1979)</h3>
                  <p className="text-gray-700 mb-4">
                    Hidakaya naît en 1979 avec une mission révolutionnaire : rendre la cuisine chinoise 
                    accessible à tous les Japonais. Contrairement aux restaurants chinois traditionnels 
                    souvent coûteux, Hidakaya mise sur la qualité à prix démocratique.
                  </p>
                  <p className="text-gray-700">
                    Le nom "Hidakaya" (日高屋) signifie littéralement "Maison Hidaka", référence 
                    à la région de Hidaka, symbolisant l'authenticité et la tradition.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Mission Démocratique</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Philosophy :</strong> "Une cuisine chinoise de qualité pour tous, 
                    tous les jours". Hidakaya révolutionne l'accès à la cuisine chinoise 
                    en proposant des plats authentiques à partir de seulement 200¥.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Accessibilité :</strong> Prix ultra-compétitifs</li>
                    <li>• <strong>Rapidité :</strong> Service express pour le quotidien</li>
                    <li>• <strong>Authenticité :</strong> Recettes chinoises traditionnelles</li>
                    <li>• <strong>Proximité :</strong> Dans chaque quartier</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Signature */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥟 Menu Signature Hidakaya
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Gyoza */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥟 Gyoza Légendaires</h3>
                  <p className="text-gray-600 japanese-text mb-2">餃子</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">230¥ (6 pièces)</p>
                  <p className="text-gray-700 mb-4">
                    Les gyoza Hidakaya sont une institution : pâte fine et croustillante, 
                    farce juteuse mêlant porc, chou chinois et ail. Grillés à la perfection 
                    sur plaque chauffante.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Texture :</span>
                      <span className="text-sm font-semibold">Croustillant + Juteux</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Garniture :</span>
                      <span className="text-sm font-semibold">Porc + Légumes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Spécialité :</span>
                      <span className="text-sm font-semibold">Grillage artisanal</span>
                    </div>
                  </div>
                </div>

                {/* Ramen */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍜 Ramen Classique</h3>
                  <p className="text-gray-600 japanese-text mb-2">ラーメン</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">390¥</p>
                  <p className="text-gray-700 mb-4">
                    Ramen authentique au bouillon de porc et soja, nouilles fines 
                    et garnitures traditionnelles. La recette inchangée depuis 1979 
                    qui a conquis des millions de Japonais.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Bouillon :</span>
                      <span className="text-sm font-semibold">Porc + Soja</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Nouilles :</span>
                      <span className="text-sm font-semibold">Fines traditionnelles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Garnitures :</span>
                      <span className="text-sm font-semibold">Chashu + Menma</span>
                    </div>
                  </div>
                </div>

                {/* Fried Rice */}
                <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍚 Riz Sauté Signature</h3>
                  <p className="text-gray-600 japanese-text mb-2">チャーハン</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">450¥</p>
                  <p className="text-gray-700 mb-4">
                    Riz sauté au wok avec œufs, crevettes et légumes. Chaque grain 
                    parfaitement enrobé, texture parfaite entre ferme et moelleux. 
                    Un classique incontournable.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cuisson :</span>
                      <span className="text-sm font-semibold">Wok haute température</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ingrédients :</span>
                      <span className="text-sm font-semibold">Œuf + Crevettes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Style :</span>
                      <span className="text-sm font-semibold">Chinois authentique</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Complémentaire */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Autres Spécialités Populaires</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Plats Principaux :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Tantanmen (担々麺)</strong> - 490¥ - Ramen épicé au sésame</li>
                      <li>• <strong>Mapo Tofu (麻婆豆腐)</strong> - 350¥ - Tofu sauce piquante</li>
                      <li>• <strong>Ebi Chili (海老チリ)</strong> - 480¥ - Crevettes sauce douce-piquante</li>
                      <li>• <strong>Gomoku Ankake (五目あんかけ)</strong> - 520¥ - Légumes sautés sauce épaisse</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Accompagnements :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Shumai (シュウマイ)</strong> - 250¥ - Raviolis vapeur</li>
                      <li>• <strong>Karaage (から揚げ)</strong> - 280¥ - Poulet frit</li>
                      <li>• <strong>Yasai Itame (野菜炒め)</strong> - 320¥ - Légumes sautés</li>
                      <li>• <strong>Kimchi (キムチ)</strong> - 150¥ - Chou fermenté</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Client */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏪 L'Expérience Hidakaya
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎫 Système de Commande</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Tickets-repas (食券)</strong> : Achetez vos tickets à la machine à l'entrée, 
                    puis remettez-les au comptoir. Système rapide et efficace.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">1</span>
                      <span>Achat ticket machine</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">2</span>
                      <span>Remise ticket au comptoir</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">3</span>
                      <span>Installation libre</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">4</span>
                      <span>Service rapide (3-5 min)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Ambiance & Cadre</h3>
                  <p className="text-gray-700 mb-4">
                    Restaurants compacts avec comptoir et quelques tables. 
                    Ambiance décontractée, populaire auprès des travailleurs, étudiants et familles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Style :</strong> Casual, sans prétention</li>
                    <li>• <strong>Clientèle :</strong> Locale et diversifiée</li>
                    <li>• <strong>Horaires :</strong> Souvent 11h-23h</li>
                    <li>• <strong>Durée repas :</strong> 15-30 minutes</li>
                    <li>• <strong>Bruit :</strong> Ambiance animée</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💰 Prix & Valeur</h3>
                  <p className="text-gray-700 mb-4">
                    Hidakaya est célèbre pour ses prix ultra-compétitifs. 
                    Un repas complet pour moins de 1000¥ est la norme.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gyoza (6p) :</span>
                      <span className="font-semibold">230¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ramen :</span>
                      <span className="font-semibold">390¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Riz sauté :</span>
                      <span className="font-semibold">450¥</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="text-gray-800 font-semibold">Repas complet :</span>
                      <span className="font-bold text-red-600">600-800¥</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils Pratiques */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                💡 Guide Pratique pour Visiteurs
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">✅ Recommandations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🥟</span>
                      <span><strong>Commandez les gyoza :</strong> Spécialité absolue, texture parfaite entre croustillant et juteux</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">💰</span>
                      <span><strong>Préparez de la monnaie :</strong> Machines acceptent pièces et billets, mais préparez l'appoint</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">⏰</span>
                      <span><strong>Évitez 12h-13h :</strong> Pic de fréquentation des bureaux, temps d'attente plus long</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🍜</span>
                      <span><strong>Combo gagnant :</strong> Gyoza + Ramen = expérience Hidakaya complète pour ~620¥</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">ℹ️ Informations Pratiques</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🏪</span>
                      <span><strong>Répartition :</strong> Plus de 400 restaurants, principalement région de Tokyo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🚇</span>
                      <span><strong>Localisation :</strong> Près des gares et centres commerciaux, facilement accessible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">💳</span>
                      <span><strong>Paiement :</strong> Principalement espèces, certains acceptent cartes IC (Suica/Pasmo)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">📱</span>
                      <span><strong>App officielle :</strong> Localisation des restaurants et menus actualisés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Régimes Alimentaires */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥗 Régimes Alimentaires & Restrictions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🚫 Végétarien/Végan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Difficile</strong> : La majorité des plats contient viande ou produits animaux. 
                    Les bouillons utilisent souvent fond de porc.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Ramen (bouillon de porc)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Gyoza (farce de porc)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Légumes sautés (possibles)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">🐷 Halal/Sans Porc</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Très limité</strong> : Porc présent dans la plupart des spécialités. 
                    Pas de certification halal officielle.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Gyoza (porc)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Ramen (bouillon porc)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Quelques plats poulet/crevettes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Informations limitées sur les allergènes. Prudence recommandée 
                    pour allergies sévères.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (nouilles, sauce soja)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Œufs (riz sauté, nouilles)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Fruits de mer (certains plats)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Culturel */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎌 Hidakaya dans la Culture Japonaise
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Phénomène Social</h3>
                    <p className="text-gray-700 mb-4">
                      Hidakaya incarne la démocratisation de la cuisine chinoise au Japon. 
                      En rendant accessible ce qui était autrefois un luxe, la chaîne a transformé 
                      les habitudes alimentaires de millions de Japonais.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Révolution populaire :</strong> Cuisine chinoise pour tous</li>
                      <li>• <strong>Égalitarisme alimentaire :</strong> Qualité sans barrière de prix</li>
                      <li>• <strong>Innovation sociale :</strong> Système ticket démocratique</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Impact Économique</h3>
                    <p className="text-gray-700 mb-4">
                      Modèle économique révolutionnaire basé sur la standardisation, 
                      l'efficacité opérationnelle et la rotation rapide, permettant 
                      des prix défiant toute concurrence.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Accessibilité :</strong> Repas complet sous 1000¥</li>
                      <li>• <strong>Efficacité :</strong> Service en moins de 5 minutes</li>
                      <li>• <strong>Proximité :</strong> Dans chaque quartier populaire</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    🏆 "Le McDonald's de la Cuisine Chinoise au Japon"
                  </h3>
                  <p className="text-gray-600">
                    Hidakaya a révolutionné l'accès à la cuisine chinoise comme McDonald's l'a fait 
                    pour le hamburger : standardisation, rapidité et prix accessible sans 
                    compromettre l'essence du produit.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/cuisine-chinoise"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Cuisine Chinoise
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
    </>
  );
}
