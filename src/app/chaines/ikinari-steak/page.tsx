import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";

export default function IkinariSteakPage() {
  return (
    <>
      <ChainViewTracker chainName="ikinari-steak" chainCategory="steak" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/steak" className="text-gray-500 hover:text-purple-600">Steak</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Ikinari Steak</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🥩</span>
              <span className="text-6xl mr-4">⚡</span>
              <span className="text-6xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ikinari Steak
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">いきなりステーキ</p>
            <p className="text-xl mb-8 text-orange-100">
              Révolution Standing Steak - Innovation Gastronomique Japonaise
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Pionnier du Standing Steak</h2>
              <p className="text-lg text-orange-200">
                Depuis 2013, Ikinari Steak révolutionne l'industrie mondiale 
                en démocratisant les steaks premium grâce à son concept 
                innovant "standing style" unique au monde.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Standing Style
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Viande Premium
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Prix Accessibles
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Innovation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🚀 La Révolution Standing Steak
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Naissance d'une Innovation (2013)</h3>
                  <p className="text-gray-700 mb-4">
                    Ikinari Steak naît d'une idée révolutionnaire : "Et si on pouvait 
                    manger un steak premium debout, rapidement, sans sacrifier la qualité ?" 
                    Une disruption totale de l'industrie steakhouse.
                  </p>
                  <p className="text-gray-700">
                    Le fondateur Kunio Ichinose voulait démocratiser le luxe : 
                    viande d'exception, prix accessible grâce à l'efficacité 
                    opérationnelle du service debout.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Philosophie Standing</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission :</strong> "Steak premium pour tous, maintenant". 
                    Éliminer le superflu (service de table, décor luxueux) 
                    pour se concentrer sur l'essentiel : la viande.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Efficacité :</strong> Service ultra-rapide debout</li>
                    <li>• <strong>Qualité :</strong> Viande premium inchangée</li>
                    <li>• <strong>Accessibilité :</strong> Prix démocratisés</li>
                    <li>• <strong>Innovation :</strong> Expérience totalement nouvelle</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu Steak */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥩 Menu Standing Steak Premium
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Steaks Classiques */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥩 Steaks Signature</h3>
                  <p className="text-gray-600 japanese-text mb-2">レギュラーステーキ</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">200g: 1500¥~</p>
                  <p className="text-gray-700 mb-4">
                    Steaks premium au poids : choisissez votre grammage, 
                    cuisson parfaite, viande tendre et savoureuse.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ribeye 200g :</span>
                      <span className="text-sm font-semibold">1800¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sirloin 300g :</span>
                      <span className="text-sm font-semibold">2400¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Chuck Eye 250g :</span>
                      <span className="text-sm font-semibold">1500¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Service :</span>
                      <span className="text-sm font-semibold">3-5 minutes</span>
                    </div>
                  </div>
                </div>

                {/* Wagyu Premium */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥇 Wagyu Premium</h3>
                  <p className="text-gray-600 japanese-text mb-2">和牛プレミアム</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">150g: 3500¥~</p>
                  <p className="text-gray-700 mb-4">
                    Wagyu authentique japonais : fondant exceptionnel, 
                    marbré parfait, expérience gastronomique ultime.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wagyu A4 150g :</span>
                      <span className="text-sm font-semibold">3500¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wagyu A5 200g :</span>
                      <span className="text-sm font-semibold">6800¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cuisson :</span>
                      <span className="text-sm font-semibold">Medium rare</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Origine :</span>
                      <span className="text-sm font-semibold">Certifié Japon</span>
                    </div>
                  </div>
                </div>

                {/* Sets & Accompagnements */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Sets & Sides</h3>
                  <p className="text-gray-600 japanese-text mb-2">セット＆サイド</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">+300¥~</p>
                  <p className="text-gray-700 mb-4">
                    Accompagnements et sets complets pour enrichir 
                    votre expérience steak debout.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Riz + Salade :</span>
                      <span className="text-sm font-semibold">+300¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Corn Beurre :</span>
                      <span className="text-sm font-semibold">+200¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Boisson :</span>
                      <span className="text-sm font-semibold">+150¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Complet :</span>
                      <span className="text-sm font-semibold">+500¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Guide Commande au Poids */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">⚖️ Système de Commande au Poids</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Poids Standards :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>200g</strong> - Portion standard, parfait premier essai</li>
                      <li>• <strong>300g</strong> - Généreux, amateur confirmé</li>
                      <li>• <strong>450g</strong> - XXL, grand appétit ou partage</li>
                      <li>• <strong>Personnalisé</strong> - Choisissez votre grammage exact</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prix au Gramme :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Chuck Eye :</strong> ~6¥/gramme (économique)</li>
                      <li>• <strong>Ribeye :</strong> ~9¥/gramme (équilibré)</li>
                      <li>• <strong>Sirloin :</strong> ~8¥/gramme (premium)</li>
                      <li>• <strong>Wagyu :</strong> 25-35¥/gramme (ultra-premium)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience Standing */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ⚡ L'Expérience Standing Révolutionnaire
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🏃‍♂️ Service Ultra-Rapide</h3>
                  <p className="text-gray-700 mb-4">
                    Commandez, payez, mangez en moins de 10 minutes. 
                    Efficacité japonaise appliquée au steakhouse premium.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Commande :</strong> 1 minute au comptoir</li>
                    <li>• <strong>Cuisson :</strong> 3-5 minutes selon épaisseur</li>
                    <li>• <strong>Service :</strong> Immédiat à la cuisson</li>
                    <li>• <strong>Dégustation :</strong> Debout au comptoir</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Précision Technique</h3>
                  <p className="text-gray-700 mb-4">
                    Cuisson maîtrisée au degré près, viande sélectionnée, 
                    assaisonnement minimal pour révéler les saveurs naturelles.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temps cuisson 200g :</span>
                      <span className="font-semibold">3-4 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Température :</span>
                      <span className="font-semibold">Haute précision</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Assaisonnement :</span>
                      <span className="font-semibold">Sel, poivre, ail</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Repos viande :</span>
                      <span className="font-semibold">30 secondes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💰 Prix Révolutionnaires</h3>
                  <p className="text-gray-700 mb-4">
                    Élimination des coûts de service traditionnel permet 
                    des prix 30-50% inférieurs aux steakhouses classiques.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Pas de service de table</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Rotation rapide = volume élevé</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Frais généraux réduits</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Viande premium maintenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guide Standing Steak */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎯 Guide Standing Steak Masterclass
              </h2>
              
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">📋 Étapes de l'Expérience</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Entrée & Commande</p>
                          <p className="text-sm text-gray-600">Accueil, présentation concept, choix poids/cuisson</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Pesée & Paiement</p>
                          <p className="text-sm text-gray-600">Viande pesée devant vous, prix calculé, paiement immédiat</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Cuisson Express</p>
                          <p className="text-sm text-gray-600">Cuisson visible, chronomètre, précision absolue</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Dégustation Debout</p>
                          <p className="text-sm text-gray-600">Service au comptoir, dégustation immédiate optimale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">💡 Conseils Experts</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🥩</span>
                        <span><strong>Première fois :</strong> 200g Ribeye Medium Rare</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">⚖️</span>
                        <span><strong>Poids :</strong> 200g = portion restaurant normale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🔥</span>
                        <span><strong>Cuisson :</strong> Medium Rare recommandé universellement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">⏰</span>
                        <span><strong>Timing :</strong> Éviter 12h-14h et 19h-21h</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Régimes Alimentaires */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥗 Régimes Alimentaires & Ikinari Steak
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">❌ Végétarien/Vegan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Pas adapté</strong> : concept entièrement centré sur la viande. 
                    Quelques accompagnements végétaux très limités seulement.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Salade simple, maïs</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Riz blanc</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Aucun plat principal végétarien</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Concept incompatible</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Sans Porc/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Excellent choix</strong> : 100% focus sur le bœuf. 
                    Pas de certification halal mais viande bovine pure.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>100% bœuf, pas de porc</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Assaisonnement simple</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Accompagnements végétaux</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Pas de certification halal officielle</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Menu ultra-simple facilite la gestion des allergies. 
                    Ingrédients transparents, préparation visible.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Ingrédients simples et transparents</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Cuisson visible en direct</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pas d'additifs cachés</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Communication facile avec staff</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Globale */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌍 L'Impact Global d'Ikinari Steak
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Révolution Industrielle</h3>
                    <p className="text-gray-700 mb-4">
                      Ikinari Steak a prouvé qu'on peut disruper une industrie 
                      centenaire en réinventant les codes : standing vs assis, 
                      rapidité vs lenteur, accessible vs élitiste.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Disruption :</strong> Nouveau paradigme steakhouse</li>
                      <li>• <strong>Exportation :</strong> Concept copié mondialement</li>
                      <li>• <strong>Démocratisation :</strong> Luxe accessible au plus grand nombre</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🇯🇵 Génie Japonais</h3>
                    <p className="text-gray-700 mb-4">
                      Application parfaite de la philosophie japonaise : éliminer 
                      le gaspillage (muda), maximiser la valeur ajoutée, perfectionner 
                      l'essentiel jusqu'à l'excellence.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Efficacité :</strong> Zéro gaspillage opérationnel</li>
                      <li>• <strong>Focus :</strong> Excellence sur l'essentiel</li>
                      <li>• <strong>Innovation :</strong> Repenser totalement l'expérience</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ⚡ "Ikinari Steak : Quand l'Innovation Japonaise Révolutionne le Monde"
                  </h3>
                  <p className="text-gray-600">
                    En réinventant complètement l'expérience steakhouse, Ikinari Steak 
                    a démontré la puissance de l'innovation japonaise appliquée à 
                    une tradition occidentale, créant quelque chose d'entièrement nouveau.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/steak"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Retour Steak
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
