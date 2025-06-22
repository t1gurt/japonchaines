import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Building, Wine, Crown } from 'lucide-react';

export default function ShirokiyaPage() {  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shirokiya</h1>
              <p className="text-lg text-gray-600">白木屋</p>
              <p className="text-sm text-gray-500">L'izakaya traditionnel accessible depuis 1983</p>
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
                <Info className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Présentation</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Shirokiya</strong> (白木屋, "Maison du Bois Blanc") est l'une des chaînes 
                  d'izakaya les plus emblématiques du Japon, appartenant au groupe Monteroza. 
                  Fondée en 1983, elle compte plus de 480 restaurants et incarne parfaitement 
                  l'esprit traditionnel de l'izakaya japonais tout en restant accessible aux 
                  budgets familiaux. Shirokiya est réputée pour son ambiance authentique et 
                  sa cuisine traditionnelle de qualité.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">🏮 Tradition et modernité</h3>
                  <ul className="text-blue-700 space-y-1">
                    <li>• <strong>Décor traditionnel</strong> - Ambiance authentique de l'ère Showa</li>
                    <li>• <strong>Service personnalisé</strong> - Accueil chaleureux et familial</li>
                    <li>• <strong>Cuisine variée</strong> - Menu équilibrant tradition et innovation</li>
                    <li>• <strong>Prix raisonnables</strong> - Accessible aux familles et groupes</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏢 Groupe Monteroza</h3>
                <p className="mb-4">
                  Shirokiya fait partie du puissant groupe Monteroza, qui possède également 
                  Torikizoku et Watami. Cette appartenance lui permet de bénéficier d'une 
                  chaîne d'approvisionnement optimisée et de standards de qualité élevés, 
                  tout en gardant son identité propre centrée sur la tradition izakaya.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍶 Philosophie culinaire</h3>
                <p className="mb-4">
                  La philosophie de Shirokiya repose sur le concept de "ichigo ichie" (一期一会), 
                  l'idée que chaque rencontre est unique et précieuse. Cette approche se traduit 
                  par un service attentionné, des plats préparés avec soin, et une ambiance 
                  qui encourage les échanges et la convivialité entre clients.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎯 Positionnement familial</h3>
                <p className="mb-4">
                  Contrairement aux izakaya haut de gamme ou ultra-spécialisés, Shirokiya 
                  vise un public large incluant familles avec enfants, groupes d'amis, et 
                  collègues de travail. Cette accessibilité en fait un excellent point d'entrée 
                  pour découvrir la culture izakaya japonaise.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌸 Expérience saisonnière</h3>
                <p className="mb-4">
                  Shirokiya adapte son menu et sa décoration selon les saisons japonaises, 
                  proposant des spécialités printemps (sakura), été (festivals), automne 
                  (momiji), et hiver (kotatsu). Cette approche renforce l'authenticité de 
                  l'expérience culturelle proposée aux clients.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Traditionnel</h2>
              </div>

              {/* Spécialités yakitori */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🔥 Yakitori & Grillades</h3>
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
                        <td className="p-3 font-medium">Assortiment yakitori</td>
                        <td className="p-3">焼き鳥盛り合わせ</td>
                        <td className="p-3">Sélection de 5 brochettes différentes</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Momo (cuisse)</td>
                        <td className="p-3">もも</td>
                        <td className="p-3">Cuisse de poulet juteuse, sauce tare</td>
                        <td className="p-3">¥190</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tsukune</td>
                        <td className="p-3">つくね</td>
                        <td className="p-3">Boulettes de poulet haché maison</td>
                        <td className="p-3">¥210</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Negima</td>
                        <td className="p-3">ねぎま</td>
                        <td className="p-3">Poulet et poireau, classique populaire</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bœuf teriyaki</td>
                        <td className="p-3">牛テリヤキ</td>
                        <td className="p-3">Brochettes de bœuf sauce teriyaki</td>
                        <td className="p-3">¥320</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Porc miso</td>
                        <td className="p-3">豚みそ</td>
                        <td className="p-3">Porc mariné au miso rouge, savoureux</td>
                        <td className="p-3">¥250</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plats de poisson et fruits de mer */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🐟 Poissons & Fruits de Mer</h3>
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
                        <td className="p-3 font-medium">Sashimi du jour</td>
                        <td className="p-3">本日の刺身</td>
                        <td className="p-3">Sélection fraîche selon arrivage</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Macquereau grillé</td>
                        <td className="p-3">焼きサバ</td>
                        <td className="p-3">Macquereau salé grillé, traditionnel</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Calamar frit</td>
                        <td className="p-3">イカフライ</td>
                        <td className="p-3">Anneaux de calamar croustillants</td>
                        <td className="p-3">¥480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Aji tataki</td>
                        <td className="p-3">アジたたき</td>
                        <td className="p-3">Chinchard mi-cuit aux herbes</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Hotate grilées</td>
                        <td className="p-3">ホタテ焼き</td>
                        <td className="p-3">Coquilles St-Jacques grillées au beurre</td>
                        <td className="p-3">¥720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plats traditionnels */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍲 Plats Traditionnels</h3>
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
                        <td className="p-3 font-medium">Karaage de poulet</td>
                        <td className="p-3">鶏からあげ</td>
                        <td className="p-3">Poulet frit signature de la maison</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Gyoza maison</td>
                        <td className="p-3">手作り餃子</td>
                        <td className="p-3">6 pièces, pâte faite sur place</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Age-dofu</td>
                        <td className="p-3">揚げ出し豆腐</td>
                        <td className="p-3">Tofu frit dans bouillon dashi</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Motsu nikomi</td>
                        <td className="p-3">もつ煮込み</td>
                        <td className="p-3">Ragoût d'abats au miso, spécialité</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Takoyaki</td>
                        <td className="p-3">たこ焼き</td>
                        <td className="p-3">8 pièces, style Osaka authentique</td>
                        <td className="p-3">¥450</td>
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
                    <h4 className="font-medium text-blue-600 mb-3">Salades fraîches</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Salade de tofu</strong> - Tofu soyeux, légumes croquants (¥420)</li>
                      <li>• <strong>Salade César</strong> - Version japonaise au wasabi (¥580)</li>
                      <li>• <strong>Salade de pieuvre</strong> - Tako su, vinaigrette traditionnelle (¥650)</li>
                      <li>• <strong>Légumes marinés</strong> - Tsukemono assortis (¥320)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Légumes préparés</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Edamame</strong> - Fèves de soja à l'ail ou nature (¥280)</li>
                      <li>• <strong>Épinards goma-ae</strong> - Épinards sauce sésame (¥380)</li>
                      <li>• <strong>Concombre miso</strong> - Moromi miso pour tremper (¥350)</li>
                      <li>• <strong>Maïs grillé</strong> - Beurre et sauce soja (¥420)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍺 Boissons</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Bières</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Bière pression</strong> - ¥380 (M), ¥580 (L)</li>
                      <li>• <strong>Bouteilles</strong> - ¥450-520</li>
                      <li>• <strong>Bière sans alcool</strong> - ¥350</li>
                    </ul>
                    
                    <h4 className="font-medium text-blue-600 mb-3 mt-4">Sakés</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Sake chaud</strong> - ¥420 (1 gō)</li>
                      <li>• <strong>Sake froid</strong> - ¥480 (1 gō)</li>
                      <li>• <strong>Sake premium</strong> - ¥680-980</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Shōchū & Whisky</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Shōchū patate douce</strong> - ¥420</li>
                      <li>• <strong>Shōchū orge</strong> - ¥420</li>
                      <li>• <strong>Whisky high-ball</strong> - ¥450</li>
                      <li>• <strong>Whisky on the rocks</strong> - ¥580</li>
                    </ul>

                    <h4 className="font-medium text-blue-600 mb-3 mt-4">Chu-hi</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Citron vert</strong> - ¥420</li>
                      <li>• <strong>Pamplemousse</strong> - ¥420</li>
                      <li>• <strong>Ume (prune)</strong> - ¥450</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Sans alcool</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé glacé</strong> - ¥280</li>
                      <li>• <strong>Coca Cola</strong> - ¥320</li>
                      <li>• <strong>Jus de fruits</strong> - ¥350</li>
                      <li>• <strong>Eau minérale</strong> - ¥250</li>
                    </ul>

                    <h4 className="font-medium text-blue-600 mb-3 mt-4">Thés chauds</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Thé vert</strong> - ¥200</li>
                      <li>• <strong>Thé oolong</strong> - ¥250</li>
                      <li>• <strong>Thé au jasmin</strong> - ¥280</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambiance et expérience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Ambiance Traditionnelle</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">🏮 Décor authentique</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    Shirokiya recrée fidèlement l'atmosphère des izakaya de l'ère Showa 
                    avec des lanternes rouges, des napperons en papier, et une décoration 
                    boisée chaleureuse qui évoque le Japon traditionnel.
                  </p>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• <strong>Comptoir en bois</strong> - Vue sur la cuisine ouverte</li>
                    <li>• <strong>Box traditionnels</strong> - Tables basses, ambiance intime</li>
                    <li>• <strong>Éclairage tamisé</strong> - Lanternes et lumière chaude</li>
                    <li>• <strong>Musique d'ambiance</strong> - Mélodies japonaises discrètes</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎭 Service traditionnel</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Accueil "Irasshaimase!" énergique</li>
                      <li>• Serviettes oshibori chaudes</li>
                      <li>• Recommandations personnalisées</li>
                      <li>• Attention aux verres vides</li>
                      <li>• Ambiance conviviale et détendue</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👥 Clientèle typique</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Salariés après le travail (nomikai)</li>
                      <li>• Familles en week-end</li>
                      <li>• Groupes d'amis pour les célébrations</li>
                      <li>• Couples pour un dîner décontracté</li>
                      <li>• Touristes découvrant l'izakaya</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🍻 Culture du partage</h4>
                  <p className="text-sm text-green-700">
                    Shirokiya encourage la tradition japonaise du "kanpai" (santé!) et du 
                    partage de plats entre convives. Le personnel crée une atmosphère 
                    propice aux échanges et à la découverte culinaire en groupe, 
                    incarnant parfaitement l'esprit communautaire des izakaya.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Guide Pratique</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📋 Étapes de la visite</h3>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Arrivée - Attendre d'être placé par le personnel</li>
                    <li><strong>2.</strong> Installation - Retirer ses chaussures si tables basses</li>
                    <li><strong>3.</strong> Oshibori - Utiliser la serviette chaude offerte</li>
                    <li><strong>4.</strong> Commande boisson - Toujours commencer par une boisson</li>
                    <li><strong>5.</strong> Commandes successives - Ajouter des plats progressivement</li>
                    <li><strong>6.</strong> Kanpai - Trinquer avant de boire</li>
                    <li><strong>7.</strong> Addition - Demander "okaikei kudasai"</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Première commande recommandée</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Bière pression</strong> - Pour commencer (¥380)</li>
                      <li>• <strong>Edamame</strong> - Apéritif traditionnel (¥280)</li>
                      <li>• <strong>Assortiment yakitori</strong> - Découverte (¥880)</li>
                      <li>• <strong>Karaage</strong> - Spécialité maison (¥520)</li>
                      <li><strong>Total : ¥2,060</strong> pour une initiation complète</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍶 Expérience traditionnelle</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Sake chaud</strong> - Boisson traditionnelle (¥420)</li>
                      <li>• <strong>Sashimi du jour</strong> - Fraîcheur garantie (¥780)</li>
                      <li>• <strong>Motsu nikomi</strong> - Plat traditionnel (¥680)</li>
                      <li>• <strong>Légumes marinés</strong> - Accompagnement (¥320)</li>
                      <li><strong>Total : ¥2,200</strong> pour l'authenticité japonaise</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">⚠️ Points d'attention</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• <strong>Réservation conseillée</strong> le week-end et jours fériés</li>
                    <li>• <strong>Fumeurs/non-fumeurs</strong> - Zones parfois séparées</li>
                    <li>• <strong>Service au table</strong> - Pas de self-service</li>
                    <li>• <strong>Addition groupée</strong> - Paiement unique par table</li>
                    <li>• <strong>Pourboire non attendu</strong> - Service inclus dans les prix</li>
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
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-sm text-gray-600">17h00 - 00h00 (dim-jeu)</div>
                    <div className="text-sm text-gray-600">17h00 - 01h00 (ven-sam)</div>
                    <div className="text-sm text-gray-500">Quelques restaurants ouvrent midi</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Localisation</div>
                    <div className="text-sm text-gray-600">480+ restaurants au Japon</div>
                    <div className="text-sm text-gray-500">Centres-villes, gares, centres commerciaux</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Paiement</div>
                    <div className="text-sm text-gray-600">Espèces prioritaire</div>
                    <div className="text-sm text-gray-500">Cartes et e-wallets selon restaurants</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Wine className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Budget moyen</div>
                    <div className="text-sm text-gray-600">¥2,500-4,000 par personne</div>
                    <div className="text-sm text-gray-500">Avec boissons alcoolisées</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                💡 Conseils pour les Français
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Première fois</div>
                  <div className="text-blue-600">Idéal pour découvrir l'izakaya authentique</div>
                </div>
                
                <div>
                  <div className="font-medium text-blue-700">Réservation</div>
                  <div className="text-blue-600">Recommandée le soir, montrez le nom en japonais</div>
                </div>
                
                <div>
                  <div className="font-medium text-blue-700">Étiquette</div>
                  <div className="text-blue-600">Respectez les traditions : kanpai avant de boire</div>
                </div>
                
                <div>
                  <div className="font-medium text-blue-700">Ambiance</div>
                  <div className="text-blue-600">Autorisée à être animée, c'est l'esprit izakaya</div>
                </div>
              </div>
            </div>

            {/* Spécialités incontournables */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                🏆 Spécialités Incontournables
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-amber-700">Assortiment yakitori</div>
                  <div className="text-amber-600">Parfait pour découvrir les différentes parties du poulet</div>
                </div>
                <div>
                  <div className="font-medium text-amber-700">Karaage maison</div>
                  <div className="text-amber-600">Recette signature, poulet croustillant et juteux</div>
                </div>
                <div>
                  <div className="font-medium text-amber-700">Sashimi du jour</div>
                  <div className="text-amber-600">Fraîcheur garantie, sélection selon saison</div>
                </div>
                <div>
                  <div className="font-medium text-amber-700">Motsu nikomi</div>
                  <div className="text-amber-600">Plat traditionnel réconfortant, authentique</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Note Culturelle
              </h3>
              <p className="text-sm text-purple-700">
                Shirokiya incarne l'essence de l'izakaya traditionnel japonais : un lieu 
                de détente après le travail où se mélangent toutes les générations et 
                classes sociales. Le nom "Maison du Bois Blanc" évoque la simplicité 
                et l'authenticité, valeurs fondamentales de la culture japonaise du 
                partage et de la convivialité.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <div className="space-y-2">
                <a href="https://www.monteroza.co.jp/shop/shirokiya/" 
                   className="block text-blue-600 hover:text-blue-700 text-sm">
                  → Site officiel Shirokiya
                </a>
                <a href="/type-plat/izakaya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Guide complet izakaya
                </a>
                <a href="/chaines/torikizoku" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Torikizoku
                </a>
                <a href="/chaines/watami" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Comparer avec Watami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
