import Link from "next/link";
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Coffee, Utensils, Heart, Gift } from 'lucide-react';
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Komeda Coffee (コメダ珈琲) | Cafés | Guide Restaurants Japonais',
  description: 'Guide complet de Komeda Coffee - Café traditionnel japonais avec petit-déjeuner matinal gratuit et ambiance nostalgique. Menu et culture du café japonais.',
  keywords: [
    'komeda coffee', 'コメダ珈琲', 'café japonais', 'petit-déjeuner gratuit',
    'morning service', 'café traditionnel', 'ambiance nostalgique',
    'shiro noir', 'ogura toast', 'café culture'
  ],
  openGraph: {
    title: 'Komeda Coffee (コメダ珈琲) | Café Traditionnel Japonais',
    description: 'Découvrez Komeda Coffee, café traditionnel avec petit-déjeuner matinal gratuit et ambiance nostalgique',
    type: 'article',
    url: '/chaines/komeda',
  },
  alternates: {
    canonical: '/chaines/komeda',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KomedaPage() {
  return (
    <>
      <ChainViewTracker chainName="komeda" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/cafe" className="text-gray-500 hover:text-purple-600">Café</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Komeda Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">☕</span>
              <span className="text-6xl mr-4">🍞</span>
              <span className="text-6xl">🥛</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Komeda Coffee
            </h1>
            <p className="text-2xl mb-4 text-yellow-100 japanese-text">コメダ珈琲店</p>
            <p className="text-xl mb-8 text-yellow-100">
              L'Art du Kissaten Moderne - Culture Café Authentique du Japon
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">L'Héritage du Kissaten Japonais</h2>
              <p className="text-lg text-yellow-200">
                Depuis 1968, Komeda Coffee perpétue la tradition du kissaten japonais : 
                un espace de détente authentique où se mêlent café de qualité, hospitalité 
                chaleureuse et cette atmosphère unique qui fait l'âme du Japon.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Tradition 1968
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                Kissaten Authentique
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Hospitalité Japonaise
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
                🏮 L'Âme du Kissaten Japonais
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">☕ Naissance à Nagoya (1968)</h3>
                  <p className="text-gray-700 mb-4">
                    Komeda Coffee naît en 1968 à Nagoya avec une vision révolutionnaire : 
                    créer un "troisième lieu" entre la maison et le travail, où chaque client 
                    se sent comme chez lui dans une atmosphère chaleureuse et authentique.
                  </p>
                  <p className="text-gray-700">
                    Le fondateur Kato-san s'inspire de la culture du kissaten traditionnel 
                    en y ajoutant une dimension familiale et conviviale unique.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌸 Philosophie "Omotenashi"</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission :</strong> "Un café qui réchauffe le cœur". Komeda incarne 
                    l'omotenashi (hospitalité japonaise) dans chaque détail : service attentionné, 
                    ambiance apaisante, qualité constante.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Confort :</strong> Sièges spacieux, atmosphère détendue</li>
                    <li>• <strong>Tradition :</strong> Café siphon, service à l'ancienne</li>
                    <li>• <strong>Générosité :</strong> Portions généreuses, prix justes</li>
                    <li>• <strong>Constance :</strong> Même expérience dans tous les cafés</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Signature */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ☕ L'Art du Café Komeda
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Morning Service */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🌅 Morning Service</h3>
                  <p className="text-gray-600 japanese-text mb-2">モーニングサービス</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">GRATUIT</p>
                  <p className="text-gray-700 mb-4">
                    Le célèbre "Morning Service" : avec tout café commandé avant 11h, 
                    recevez GRATUITEMENT toast épais beurré + œuf dur. 
                    Une tradition Komeda depuis 1968!
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Horaires :</span>
                      <span className="text-sm font-semibold">7h-11h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Toast :</span>
                      <span className="text-sm font-semibold">Pain épais + beurre</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Œuf :</span>
                      <span className="text-sm font-semibold">Dur, coque parfaite</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Avec :</span>
                      <span className="text-sm font-semibold">Tout café commandé</span>
                    </div>
                  </div>
                </div>

                {/* Café Premium */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Café Premium</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアムコーヒー</p>
                  <p className="text-2xl font-bold text-amber-600 mb-3">450¥-650¥</p>
                  <p className="text-gray-700 mb-4">
                    Café siphon traditionnel, blend exclusif Komeda, torréfaction artisanale. 
                    Servi dans de vraies tasses en porcelaine avec petit gâteau offert.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blend Original :</span>
                      <span className="text-sm font-semibold">450¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Café Siphon :</span>
                      <span className="text-sm font-semibold">550¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Premium Blend :</span>
                      <span className="text-sm font-semibold">650¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Offert :</span>
                      <span className="text-sm font-semibold">Petit gâteau</span>
                    </div>
                  </div>
                </div>

                {/* Spécialités Dessert */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍰 Shironoir & Desserts</h3>
                  <p className="text-gray-600 japanese-text mb-2">シロノワール</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">580¥-780¥</p>
                  <p className="text-gray-700 mb-4">
                    Le fameux Shironoir : brioche chaude, glace à la vanille, sirop noir. 
                    Plus qu'un dessert, une institution Komeda adorée dans tout le Japon.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Shironoir Classic :</span>
                      <span className="text-sm font-semibold">580¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mini Shironoir :</span>
                      <span className="text-sm font-semibold">430¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Shironoir Seasonal :</span>
                      <span className="text-sm font-semibold">680¥-780¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Autres desserts :</span>
                      <span className="text-sm font-semibold">400¥-600¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Complet */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Menu Complet Komeda</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Repas Légers :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Sandwich Katsu (カツサンド)</strong> - 750¥ - Sandwich épais au porc pané</li>
                      <li>• <strong>Pizza Toast (ピザトースト)</strong> - 580¥ - Toast pizza à la japonaise</li>
                      <li>• <strong>Hot Dog (ホットドッグ)</strong> - 520¥ - Saucisse, salade, sauce</li>
                      <li>• <strong>Spaghetti Napolitan</strong> - 680¥ - Pasta sauce tomate style japonais</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Boissons :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Café Glacé (アイスコーヒー)</strong> - 420¥ - Café froid signature</li>
                      <li>• <strong>Thé Royal Milk (ロイヤルミルクティー)</strong> - 450¥ - Thé au lait crémeux</li>
                      <li>• <strong>Melon Soda Float</strong> - 520¥ - Soda melon + glace vanille</li>
                      <li>• <strong>Komeda Blend Tea</strong> - 420¥ - Thé mélange original</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Kissaten */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏮 L'Expérience Kissaten Komeda
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🪑 Ambiance Unique</h3>
                  <p className="text-gray-700 mb-4">
                    Décor rétro-moderne, sièges confortables en velours, éclairage tamisé. 
                    Atmosphère feutrée qui invite à la détente et à la conversation tranquille.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Style :</strong> Rétro japonais moderne</li>
                    <li>• <strong>Sièges :</strong> Confortables, spacieux</li>
                    <li>• <strong>Ambiance :</strong> Calme, relaxante</li>
                    <li>• <strong>Musique :</strong> Jazz soft, classique</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⏰ Rythme Japonais</h3>
                  <p className="text-gray-700 mb-4">
                    Service sans précipitation, temps respecté. Parfait pour lire, 
                    travailler sur laptop, ou simplement savourer un moment de pause.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée moyenne :</span>
                      <span className="font-semibold">1-3 heures</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Horaires :</span>
                      <span className="font-semibold">7h-23h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wifi :</span>
                      <span className="font-semibold">Gratuit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prises :</span>
                      <span className="font-semibold">Disponibles</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎌 Service à la Japonaise</h3>
                  <p className="text-gray-700 mb-4">
                    Service attentionné mais discret, personnel formé à l'omotenashi. 
                    Eau glacée offerte, serviettes chaudes, attention aux détails.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Eau glacée gratuite</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Serviettes chaudes offertes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Service personnalisé</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Atmosphère respectueuse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Morning Service */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌅 Guide du Morning Service
              </h2>
              
              <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">🎯 Comment Profiter du Morning</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Arrivez avant 11h</p>
                          <p className="text-sm text-gray-600">Le service s'arrête pile à 11h00</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Commandez un café</p>
                          <p className="text-sm text-gray-600">N'importe quel café chaud ou glacé</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Recevez le toast gratuit</p>
                          <p className="text-sm text-gray-600">Toast épais + beurre + œuf dur</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Savourez tranquillement</p>
                          <p className="text-sm text-gray-600">Prenez votre temps, atmosphère relaxante</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">💡 Astuces Morning Service</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">☕</span>
                        <span><strong>Best deal :</strong> Café 450¥ = petit-déjeuner complet gratuit!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🕐</span>
                        <span><strong>Timing :</strong> 7h-8h moins bondé, 9h-10h pic d'affluence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🍞</span>
                        <span><strong>Variante :</strong> Demandez "toast ordinaire" pour version plus fine</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🥛</span>
                        <span><strong>Accompagnement :</strong> Beurre et confiture fournis séparément</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Régimes Alimentaires */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥗 Régimes Alimentaires & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ Végétarien</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Options disponibles</strong> : Desserts, café, boissons, 
                    quelques plats sans viande ni poisson. Menu limité mais possible.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Shironoir (dessert)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pizza Toast (sans jambon)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Tous les cafés et thés</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Vérifier ingrédients œufs/lait</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Halal/Sans Porc</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Attention requise</strong> : Quelques plats contiennent porc. 
                    Pas de certification halal, mais options possibles à vérifier.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Café, thé, desserts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Sandwich Katsu (porc pané)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Hot Dog (vérifier saucisse)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Demander détails au staff</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Menu avec indications allergènes disponible. 
                    Staff formé pour renseigner sur ingrédients détaillés.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (pain, pasta)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Lait (desserts, café au lait)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Œufs (Morning Service)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Menu allergènes disponible</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culture Kissaten */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎌 Komeda et la Culture Kissaten
              </h2>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Héritage Kissaten</h3>
                    <p className="text-gray-700 mb-4">
                      Le kissaten (喫茶店) est une institution japonaise : plus qu'un café, 
                      c'est un refuge social où les Japonais viennent décompresser, 
                      réfléchir et savourer un moment de tranquillité dans leur quotidien trépidant.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Tradition :</strong> Espace de détente depuis l'après-guerre</li>
                      <li>• <strong>Social :</strong> Lieu de rencontre intergénérationnel</li>
                      <li>• <strong>Temporel :</strong> Échapper au rythme urbain</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Innovation Komeda</h3>
                    <p className="text-gray-700 mb-4">
                      Komeda modernise le kissaten traditionnel en créant une chaîne standardisée 
                      qui préserve l'authenticité de l'expérience tout en garantissant qualité 
                      et accessibilité dans tout le Japon.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Standardisation :</strong> Même expérience partout</li>
                      <li>• <strong>Innovation :</strong> Morning Service révolutionnaire</li>
                      <li>• <strong>Expansion :</strong> 900+ cafés dans tout le Japon</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ☕ "Komeda : Le Gardien de l'Âme Kissaten"
                  </h3>
                  <p className="text-gray-600">
                    Dans un Japon en perpétuelle mutation, Komeda Coffee préserve cette précieuse 
                    tradition du "temps qui s'arrête", où chaque tasse de café devient 
                    un moment de ressourcement authentiquement japonais.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/cafe"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Café
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
