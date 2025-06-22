import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Leaf, Heart, Globe } from 'lucide-react';

export default function WatamiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-orange-600">🍜 Japonchaines</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/type-plat" className="text-gray-700 hover:text-orange-600">
                Par Type de Plat
              </Link>
              <Link href="/chaines" className="text-gray-700 hover:text-orange-600">
                Par Chaîne
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/izakaya" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Izakaya
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Watami</h1>
              <p className="text-lg text-gray-600">和民</p>
              <p className="text-sm text-gray-500">L'izakaya familial responsable depuis 1984</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Présentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Watami</strong> (和民, "Peuple en Harmonie") est l'une des plus grandes 
                  chaînes d'izakaya du Japon avec plus de 400 restaurants. Fondée en 1984, 
                  Watami se distingue par son approche familiale et responsable, proposant 
                  une cuisine accessible dans un environnement accueillant pour tous les âges. 
                  La chaîne est pionnière dans l'agriculture biologique et la responsabilité 
                  sociale des entreprises au Japon.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">🌱 Philosophie responsable</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Agriculture biologique</strong> - Fermes Watami pour légumes frais</li>
                    <li>• <strong>Traçabilité complète</strong> - Circuit de production contrôlé</li>
                    <li>• <strong>Famille d'abord</strong> - Ambiance accueillante pour tous</li>
                    <li>• <strong>Prix accessibles</strong> - Démocratisation de l'izakaya</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🚜 Intégration agricole unique</h3>
                <p className="mb-4">
                  Watami possède ses propres fermes biologiques qui fournissent directement 
                  ses restaurants en légumes frais. Cette intégration verticale garantit la 
                  qualité et la fraîcheur des produits tout en contrôlant les coûts. 
                  L'entreprise emploie plus de 60 agriculteurs dédiés dans ses fermes 
                  réparties à travers le Japon.
                </p>

                <h3 className="text-xl font-semibold mb-3">👨‍👩‍👧‍👦 Positionnement familial</h3>
                <p className="mb-4">
                  Contrairement aux izakaya traditionnels souvent réservés aux adultes, 
                  Watami accueille explicitement les familles avec enfants. Les restaurants 
                  proposent des menus enfants, des chaises hautes, et une atmosphère moins 
                  axée sur l'alcool, bien que conservant l'esprit convivial de l'izakaya.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 Expansion internationale</h3>
                <p className="mb-4">
                  Watami s'est exporté avec succès en Asie (Corée, Taïwan, Hong Kong) et 
                  teste le marché américain. Chaque implantation adapte le concept aux 
                  goûts locaux tout en gardant les valeurs fondamentales de qualité et 
                  d'accessibilité qui font le succès de la marque.
                </p>

                <h3 className="text-xl font-semibold mb-3">📊 Innovation digitale</h3>
                <p className="mb-4">
                  Watami investit massivement dans la technologie avec des applications 
                  de commande, des systèmes de réservation intelligents, et même des 
                  robots de service dans certains restaurants. Cette modernisation vise 
                  à améliorer l'efficacité tout en gardant le contact humain.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Familial & Responsable</h2>
              </div>

              {/* Légumes de fermes Watami */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥬 Légumes des Fermes Watami</h3>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-green-800 text-sm">
                    <strong>Production propre :</strong> Légumes cultivés dans les fermes biologiques 
                    Watami, récoltés à maturité et livrés directement aux restaurants.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Salade du fermier</td>
                        <td className="p-3">農園サラダ</td>
                        <td className="p-3">Légumes de saison des fermes Watami</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Légumes grillés</td>
                        <td className="p-3">焼き野菜</td>
                        <td className="p-3">Sélection grillée au charbon de bois</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Potage de légumes</td>
                        <td className="p-3">野菜スープ</td>
                        <td className="p-3">Soupe maison aux légumes de ferme</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tempura de légumes</td>
                        <td className="p-3">野菜天ぷら</td>
                        <td className="p-3">Beignets légers, légumes croquants</td>
                        <td className="p-3">¥720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plats familiaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">👨‍👩‍👧‍👦 Plats Familiaux</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Karaage familial</td>
                        <td className="p-3">ファミリーからあげ</td>
                        <td className="p-3">Grande portion, parfait pour partager</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Plat de gyoza</td>
                        <td className="p-3">餃子プレート</td>
                        <td className="p-3">12 pièces, pâte fine maison</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pizza japonaise</td>
                        <td className="p-3">和風ピザ</td>
                        <td className="p-3">Fusion créative, mayonnaise et algues</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Riz frit Watami</td>
                        <td className="p-3">和民チャーハン</td>
                        <td className="p-3">Riz sauté aux légumes de ferme</td>
                        <td className="p-3">¥620</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Gratin de pommes de terre</td>
                        <td className="p-3">ポテトグラタン</td>
                        <td className="p-3">Comfort food japonisé, fromage local</td>
                        <td className="p-3">¥580</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Spécialités izakaya */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍢 Spécialités Izakaya</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Yakitori assortiment</td>
                        <td className="p-3">焼鳥盛合せ</td>
                        <td className="p-3">5 brochettes variées, sauce tare</td>
                        <td className="p-3">¥980</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sashimi du jour</td>
                        <td className="p-3">本日の刺身</td>
                        <td className="p-3">Sélection fraîche selon marché</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tofu agedashi</td>
                        <td className="p-3">揚げ出し豆腐</td>
                        <td className="p-3">Tofu frit, bouillon dashi délicat</td>
                        <td className="p-3">¥480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Takoyaki Watami</td>
                        <td className="p-3">和民たこ焼き</td>
                        <td className="p-3">8 pièces, recette originale</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Crevettes tempura</td>
                        <td className="p-3">海老天ぷら</td>
                        <td className="p-3">Grosses crevettes, pâte légère</td>
                        <td className="p-3">¥780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu enfants */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🧒 Menu Enfants</h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Spécialement conçu :</strong> Portions adaptées et saveurs douces 
                    pour initier les enfants à la cuisine japonaise.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Plats principaux</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mini karaage</strong> - Poulet frit sans épice (¥380)</li>
                      <li>• <strong>Omurice enfant</strong> - Riz à l'œuf, sauce douce (¥450)</li>
                      <li>• <strong>Mini hamburger</strong> - Version japonaise (¥420)</li>
                      <li>• <strong>Udon simple</strong> - Bouillon léger, nouilles molles (¥350)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Accompagnements & desserts</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Frites de patate douce</strong> - Naturellement sucrées (¥280)</li>
                      <li>• <strong>Edamame</strong> - Initiation aux légumes japonais (¥220)</li>
                      <li>• <strong>Glace vanille</strong> - Dessert simple et apprécié (¥250)</li>
                      <li>• <strong>Jus de fruits</strong> - 100% naturel (¥200)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍺 Boissons & Sakés</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Bières & Alcools</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Bière pression</strong> - ¥420 (M), ¥620 (L)</li>
                      <li>• <strong>Chu-hi maison</strong> - Fruits frais - ¥480</li>
                      <li>• <strong>Sake de qualité</strong> - Sélection soignée - ¥520</li>
                      <li>• <strong>Whisky high-ball</strong> - Classique izakaya - ¥450</li>
                      <li>• <strong>Vin de ferme</strong> - Production Watami - ¥580</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Boissons familiales</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé glacé maison</strong> - ¥280</li>
                      <li>• <strong>Jus de légumes</strong> - Fermes Watami - ¥350</li>
                      <li>• <strong>Limonade fraîche</strong> - ¥320</li>
                      <li>• <strong>Café glacé/chaud</strong> - ¥300</li>
                      <li>• <strong>Eau minérale</strong> - ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Spécialités Watami</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Smoothie légumes-fruits</strong> - ¥420</li>
                      <li>• <strong>Thé vert premium</strong> - ¥350</li>
                      <li>• <strong>Cocktail sans alcool</strong> - ¥380</li>
                      <li>• <strong>Lait de soja</strong> - Production bio - ¥250</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsabilité sociale */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Engagement Responsable</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🌱 Agriculture biologique</h3>
                  <p className="text-green-700 text-sm mb-3">
                    Watami possède et exploite directement plusieurs fermes biologiques 
                    certifiées au Japon, garantissant la traçabilité complète de ses légumes.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Zero pesticide</strong> - Culture 100% naturelle</li>
                    <li>• <strong>Circuit court</strong> - De la ferme au restaurant en 24h</li>
                    <li>• <strong>Saisonnalité</strong> - Menus adaptés aux récoltes</li>
                    <li>• <strong>Emploi local</strong> - 60+ agriculteurs employés</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">♻️ Développement durable</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Réduction des déchets alimentaires</li>
                      <li>• Emballages biodégradables</li>
                      <li>• Économies d'énergie dans les restaurants</li>
                      <li>• Transport optimisé ferme-restaurant</li>
                      <li>• Recyclage des huiles de cuisson</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👥 Responsabilité sociale</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Formation des jeunes agriculteurs</li>
                      <li>• Soutien aux producteurs locaux</li>
                      <li>• Emploi des seniors dans les fermes</li>
                      <li>• Programmes éducatifs pour enfants</li>
                      <li>• Partenariats avec écoles d'agriculture</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">🏆 Certifications & récompenses</h4>
                  <p className="text-sm text-blue-700">
                    Watami a reçu de nombreuses distinctions pour son engagement environnemental 
                    et social, incluant des certifications bio japonaises et des prix pour 
                    l'innovation durable dans la restauration.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Pratique Familial</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">👨‍👩‍👧‍👦 Avec des enfants</h3>
                  <ol className="text-purple-700 text-sm space-y-1">
                    <li><strong>1.</strong> Réservation conseillée, préciser "famille avec enfants"</li>
                    <li><strong>2.</strong> Demander table classique (plus pratique que comptoir)</li>
                    <li><strong>3.</strong> Menu enfants disponible avec illustrations</li>
                    <li><strong>4.</strong> Chaises hautes et couverts enfants fournis</li>
                    <li><strong>5.</strong> Ambiance tolérante, enfants bienvenus</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Menu découverte famille</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Salade du fermier</strong> - Légumes bio (¥580)</li>
                      <li>• <strong>Karaage familial</strong> - À partager (¥880)</li>
                      <li>• <strong>Mini hamburger</strong> - Pour enfant (¥420)</li>
                      <li>• <strong>Yakitori assortiment</strong> - Découverte (¥980)</li>
                      <li>• <strong>Boissons variées</strong> - Avec/sans alcool (¥200-600)</li>
                      <li><strong>Total : ¥3,060-3,460</strong> pour famille de 4</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌱 Focus bio et local</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Légumes grillés</strong> - Des fermes Watami (¥680)</li>
                      <li>• <strong>Smoothie légumes-fruits</strong> - Bio (¥420)</li>
                      <li>• <strong>Tempura de légumes</strong> - Fraîcheur garantie (¥720)</li>
                      <li>• <strong>Jus de légumes</strong> - Production propre (¥350)</li>
                      <li>• <strong>Tofu agedashi</strong> - Soja bio (¥480)</li>
                      <li><strong>Total : ¥2,650</strong> pour l'expérience bio</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">💡 Conseils pratiques</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Horaires famille</strong> - Préférer 17h-19h pour éviter la foule</li>
                    <li>• <strong>Réservation</strong> - Application mobile Watami très pratique</li>
                    <li>• <strong>Paiement</strong> - Toutes cartes acceptées, très family-friendly</li>
                    <li>• <strong>Allergies</strong> - Personnel formé, ingrédients bio tracés</li>
                    <li>• <strong>Durée</strong> - Comptez 1h30-2h pour un repas tranquille</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations essentielles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Informations Essentielles</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">17h00 - 23h30 (dim-jeu)</div>
                    <div className="text-sm text-gray-600">17h00 - 01h00 (ven-sam)</div>
                    <div className="text-sm text-gray-500">Certains ouvrent à midi</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">400+ restaurants au Japon</div>
                    <div className="text-sm text-gray-500">Centres commerciaux, quartiers familiaux</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Toutes cartes, e-wallets</div>
                    <div className="text-sm text-gray-500">Application mobile avec commande</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Budget familial</div>
                    <div className="text-sm text-gray-600">¥2,500-4,500 par personne</div>
                    <div className="text-sm text-gray-500">Menu enfants ¥800-1,200</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Conseils pour les Familles
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">Avec enfants</div>
                  <div className="text-green-600">Environnement le plus family-friendly des izakaya</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Qualité bio</div>
                  <div className="text-green-600">Légumes frais des fermes Watami, traçabilité garantie</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Application utile</div>
                  <div className="text-green-600">Réservation et commande simplifiées via l'app</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Éducation culinaire</div>
                  <div className="text-green-600">Parfait pour initier les enfants à la cuisine japonaise</div>
                </div>
              </div>
            </div>

            {/* Spécialités incontournables */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                🏆 Spécialités Incontournables
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Salade du fermier</div>
                  <div className="text-yellow-600">Légumes bio des fermes Watami, fraîcheur optimale</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Karaage familial</div>
                  <div className="text-yellow-600">Grande portion parfaite pour partage en famille</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Menu enfants</div>
                  <div className="text-yellow-600">Initiation douce à la cuisine japonaise</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Smoothie légumes-fruits</div>
                  <div className="text-yellow-600">Innovation Watami, bio et délicieux</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-purple-700">
                Watami a révolutionné le concept d'izakaya au Japon en l'adaptant aux 
                familles modernes. Cette approche reflète l'évolution de la société 
                japonaise vers plus d'inclusion familiale dans les sorties restaurant, 
                tout en maintenant l'engagement environnemental qui devient une priorité 
                croissante pour les consommateurs japonais.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.watami.co.jp/" 
                   className="block text-green-600 hover:text-green-700 text-sm">
                  → Site officiel Watami
                </a>
                <a href="/type-plat/izakaya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet izakaya
                </a>
                <a href="/chaines/torikizoku" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Torikizoku
                </a>
                <a href="/chaines/shirokiya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Shirokiya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
