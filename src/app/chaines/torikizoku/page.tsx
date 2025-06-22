import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Bird, Coins, Flame } from 'lucide-react';

export default function TorikizokuPage() {
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
            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center">
              <Bird className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Torikizoku</h1>
              <p className="text-lg text-gray-600">鳥貴族</p>
              <p className="text-sm text-gray-500">L'izakaya yakitori à prix unique depuis 1985</p>
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
                <Info className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Torikizoku</strong> (鳥貴族, littéralement "Noblesse du Poulet") est une 
                  chaîne d'izakaya spécialisée dans le yakitori qui révolutionne le concept 
                  traditionnel avec son système de <strong>prix unique à ¥327 par plat</strong> 
                  (TTC). Fondée en 1985 à Osaka, cette chaîne compte plus de 600 restaurants 
                  au Japon et s'impose comme l'alternative accessible aux izakaya traditionnels.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">🎯 Concept révolutionnaire</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>Prix unique</strong> - Tous les plats et boissons à ¥327 (TTC)</li>
                    <li>• <strong>Transparence totale</strong> - Aucune surprise sur l'addition</li>
                    <li>• <strong>Qualité constante</strong> - Standards élevés malgré les prix</li>
                    <li>• <strong>Ambiance décontractée</strong> - Accessible à tous les budgets</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏭 Stratégie d'intégration verticale</h3>
                <p className="mb-4">
                  Torikizoku contrôle toute sa chaîne d'approvisionnement, de l'élevage de 
                  poulets jusqu'au service en restaurant. Cette intégration permet de 
                  maintenir la qualité tout en proposant des prix extrêmement compétitifs. 
                  L'entreprise élève ses propres poulets selon des standards stricts et 
                  gère ses propres centres de découpe.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍗 Spécialité yakitori</h3>
                <p className="mb-4">
                  Contrairement aux izakaya classiques qui proposent un menu varié, Torikizoku 
                  se concentre exclusivement sur le poulet sous toutes ses formes : yakitori 
                  traditionnel, karaage, salades de poulet, et plats originaux. Cette 
                  spécialisation permet une expertise et une efficacité inégalées.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌟 Phénomène social</h3>
                <p className="mb-4">
                  Torikizoku est devenu un phénomène social au Japon, particulièrement apprécié 
                  des étudiants, jeunes travailleurs et familles. La chaîne démocratise l'accès 
                  aux izakaya, traditionnellement perçus comme coûteux, et crée une nouvelle 
                  culture de sortie entre amis ou collègues.
                </p>

                <h3 className="text-xl font-semibold mb-3">📈 Expansion stratégique</h3>
                <p className="mb-4">
                  Présent dans toutes les grandes villes japonaises, Torikizoku continue son 
                  expansion avec des ouvertures régulières. Chaque restaurant suit un format 
                  standardisé garantissant la même expérience partout au Japon. La chaîne 
                  teste également l'international avec des ouvertures en Asie.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu à Prix Unique</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Coins className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">💴 Prix unique : ¥327 (TTC)</h3>
                </div>
                <p className="text-green-700 text-sm">
                  Tous les plats et boissons sont au même prix. Cette simplicité révolutionnaire 
                  élimine le stress du budget et permet de profiter pleinement de l'expérience izakaya.
                </p>
              </div>

              {/* Yakitori (grillades) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🔥 Yakitori (Grillades)</h3>
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
                        <td className="p-3 font-medium">Momo (cuisse)</td>
                        <td className="p-3">もも</td>
                        <td className="p-3">Cuisse de poulet juteuse, pièce signature</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mune (blanc)</td>
                        <td className="p-3">むね</td>
                        <td className="p-3">Blanc de poulet tendre, plus léger</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kawa (peau)</td>
                        <td className="p-3">かわ</td>
                        <td className="p-3">Peau croustillante, très populaire</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tsukune (boulettes)</td>
                        <td className="p-3">つくね</td>
                        <td className="p-3">Boulettes de poulet haché, œuf cru optionnel</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tebasaki (ailes)</td>
                        <td className="p-3">手羽先</td>
                        <td className="p-3">Ailes de poulet marinées et grillées</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Reba (foie)</td>
                        <td className="p-3">レバー</td>
                        <td className="p-3">Foie de poulet, texture unique</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sunagimo (gésier)</td>
                        <td className="p-3">砂肝</td>
                        <td className="p-3">Gésier croquant, apprécié des connaisseurs</td>
                        <td className="p-3">¥327</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plats de poulet frits et autres */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍗 Plats de Poulet Variés</h3>
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
                        <td className="p-3 font-medium">Karaage classique</td>
                        <td className="p-3">からあげ</td>
                        <td className="p-3">Poulet frit croustillant, incontournable</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken nanban</td>
                        <td className="p-3">チキン南蛮</td>
                        <td className="p-3">Poulet pané sauce vinaigrée, tartar</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Teba gyoza</td>
                        <td className="p-3">手羽餃子</td>
                        <td className="p-3">Gyoza dans une aile de poulet, création unique</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tori katsu</td>
                        <td className="p-3">とりかつ</td>
                        <td className="p-3">Escalope de poulet panée, sauce tonkatsu</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken steak</td>
                        <td className="p-3">チキンステーキ</td>
                        <td className="p-3">Cuisse de poulet grillée, sauce teriyaki</td>
                        <td className="p-3">¥327</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Salades et légumes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥗 Salades & Légumes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Salades au poulet</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Chicken César</strong> - Salade césar au poulet grillé (¥327)</li>
                      <li>• <strong>Tori no tataki</strong> - Poulet mi-cuit en salade (¥327)</li>
                      <li>• <strong>Chicken potato</strong> - Salade de pommes de terre au poulet (¥327)</li>
                      <li>• <strong>Sasami salad</strong> - Salade au blanc de poulet (¥327)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Légumes grillés</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Cabbage grillé</strong> - Chou grillé, accompagnement parfait (¥327)</li>
                      <li>• <strong>Corn butter</strong> - Maïs au beurre, style izakaya (¥327)</li>
                      <li>• <strong>Edamame</strong> - Fèves de soja, classique apéritif (¥327)</li>
                      <li>• <strong>Légumes de saison</strong> - Sélection grillée du moment (¥327)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍺 Boissons (toutes à ¥327)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Alcools</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Bière (draft beer)</li>
                      <li>• Sour chu-hi (divers parfums)</li>
                      <li>• Sake japonais</li>
                      <li>• Shochu (divers types)</li>
                      <li>• Whisky high-ball</li>
                      <li>• Vin rouge/blanc</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Sans alcool</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Soft drinks variés</li>
                      <li>• Jus de fruits</li>
                      <li>• Thé glacé</li>
                      <li>• Café chaud/glacé</li>
                      <li>• Eau minérale</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Spécialités</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Cocktails maison</li>
                      <li>• Sour aux fruits de saison</li>
                      <li>• Mocktails créatifs</li>
                      <li>• Thé chaud traditionnel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambiance et expérience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Ambiance & Expérience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🎌 Atmosphère authentique</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Torikizoku recréé l'ambiance traditionnelle des izakaya avec un décor 
                    japonais chaleureux, des lanternes, et l'odeur caractéristique des 
                    grillades au charbon.
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Comptoir yakitori</strong> - Vue sur les cuisiniers en action</li>
                    <li>• <strong>Tables conviviales</strong> - Parfait pour les groupes</li>
                    <li>• <strong>Ambiance sonore</strong> - Discussions animées, atmosphère vivante</li>
                    <li>• <strong>Service énergique</strong> - "Irasshaimase!" accueil traditionnel</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👥 Clientèle typique</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Groupes d'amis après le travail</li>
                      <li>• Étudiants pour les sorties économiques</li>
                      <li>• Familles en week-end</li>
                      <li>• Couples pour un repas décontracté</li>
                      <li>• Collègues pour les nomikai (fêtes d'entreprise)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏰ Moments de fréquentation</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Après-midi : familles et groupes d'amis</li>
                      <li>• 18h-20h : pic des travailleurs</li>
                      <li>• Soirée : ambiance festive et détendue</li>
                      <li>• Week-end : plus calme, clientèle variée</li>
                      <li>• Périodes de fête : réservations conseillées</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">🍻 Izakaya moderne</h4>
                  <p className="text-sm text-red-700">
                    Torikizoku modernise le concept traditionnel de l'izakaya en gardant l'esprit 
                    convivial tout en supprimant les barrières financières. C'est l'endroit idéal 
                    pour découvrir la culture izakaya japonaise sans stress budgétaire.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Pratique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📝 Comment commander</h3>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Installation libre (sauf réservation)</li>
                    <li><strong>2.</strong> Commande par oral ou en pointant le menu</li>
                    <li><strong>3.</strong> Tout est à ¥327, calcul mental facile</li>
                    <li><strong>4.</strong> Commandes successives possibles</li>
                    <li><strong>5.</strong> Paiement à la fin du repas</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Commande recommandée (débutant)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Momo yakitori</strong> - Incontournable (¥327)</li>
                      <li>• <strong>Karaage</strong> - Valeur sûre (¥327)</li>
                      <li>• <strong>Edamame</strong> - Apéritif classique (¥327)</li>
                      <li>• <strong>Bière draft</strong> - Boisson parfaite (¥327)</li>
                      <li><strong>Total : ¥1,308</strong> pour découvrir l'essentiel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌟 Sélection gourmet</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Tsukune</strong> - Boulettes signature (¥327)</li>
                      <li>• <strong>Teba gyoza</strong> - Création unique (¥327)</li>
                      <li>• <strong>Chicken nanban</strong> - Spécialité raffinée (¥327)</li>
                      <li>• <strong>Sake japonais</strong> - Accord parfait (¥327)</li>
                      <li><strong>Total : ¥1,308</strong> pour l'expérience complète</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">💡 Astuces budget</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Prix fixe</strong> - Budget prévisible et maîtrisé</li>
                    <li>• <strong>Partage de plats</strong> - Idéal pour goûter plusieurs spécialités</li>
                    <li>• <strong>Happy hour inexistant</strong> - Même prix toute la journée</li>
                    <li>• <strong>Coût moyen</strong> - ¥2,000-3,000 par personne pour un repas complet</li>
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
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">17h00 - 01h00 (dim-jeu)</div>
                    <div className="text-sm text-gray-600">17h00 - 02h00 (ven-sam)</div>
                    <div className="text-sm text-gray-500">Quelques restaurants ouvrent le midi</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">600+ restaurants au Japon</div>
                    <div className="text-sm text-gray-500">Toutes grandes villes, quartiers animés</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Espèces, cartes, e-wallets</div>
                    <div className="text-sm text-gray-500">Application mobile avec points</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Coins className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Prix unique</div>
                    <div className="text-sm text-gray-600">¥327 TTC par plat/boisson</div>
                    <div className="text-sm text-gray-500">Aucune surprise sur l'addition</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                💡 Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Premier yakitori</div>
                  <div className="text-yellow-600">Commencez par le momo (cuisse), le plus apprécié</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Budget prévisible</div>
                  <div className="text-yellow-600">Comptez simplement le nombre de plats × ¥327</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Expérience authentique</div>
                  <div className="text-yellow-600">Véritable culture izakaya à prix démocratique</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Partage convivial</div>
                  <div className="text-yellow-600">Commandez plusieurs plats à partager en groupe</div>
                </div>
              </div>
            </div>

            {/* Spécialités incontournables */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                🏆 Spécialités Incontournables
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-red-700">Momo yakitori</div>
                  <div className="text-red-600">La pièce signature, cuisse juteuse et savoureuse</div>
                </div>
                <div>
                  <div className="font-medium text-red-700">Teba gyoza</div>
                  <div className="text-red-600">Innovation unique : gyoza dans une aile de poulet</div>
                </div>
                <div>
                  <div className="font-medium text-red-700">Tsukune</div>
                  <div className="text-red-600">Boulettes de poulet maison, œuf cru pour tremper</div>
                </div>
                <div>
                  <div className="font-medium text-red-700">Karaage</div>
                  <div className="text-red-600">Poulet frit croustillant, préparation maîtrisée</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-purple-700">
                Torikizoku représente la démocratisation de la culture izakaya au Japon. 
                Traditionnellement, ces établissements pouvaient être intimidants pour 
                les budgets serrés. En proposant un prix unique, Torikizoku permet à 
                tous de profiter de l'expérience conviviale de l'izakaya, contribuant 
                à préserver cette tradition sociale importante.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.torikizoku.co.jp/" 
                   className="block text-yellow-600 hover:text-yellow-700 text-sm">
                  → Site officiel Torikizoku
                </a>
                <a href="/type-plat/izakaya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet izakaya
                </a>
                <a href="/chaines/watami" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Watami
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
