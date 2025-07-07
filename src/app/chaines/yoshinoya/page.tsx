import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Globe, Award, History } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';




export default function YoshinoyaPage() {
  return (
    <>
      <ChainViewTracker chainName="yoshinoya" chainCategory="gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux Gyūdon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">吉</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Yoshinoya</h1>
              <p className="text-lg text-gray-600">吉野家 | よしのや</p>
              <p className="text-sm text-gray-500">Le pionnier du gyūdon depuis 1899</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Message culturel d'accueil */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sous le Signe Orange : Une Invitation à l&apos;Âme du Japon</h2>
              <div className="prose prose-orange max-w-none">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Pour nos amis francophones</h3>
                  <p className="text-orange-800 italic">
                    &quot;Comme votre boulangerie de quartier ou votre kebab familier après le travail, 
                    Yoshinoya représente pour les Japonais bien plus qu&apos;un simple restaurant : 
                    c&apos;est un morceau de leur quotidien, ancré dans 125 ans d&apos;histoire.&quot;
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Derrière ce signe orange familier se cache bien plus qu&apos;une chaîne de restaurants. 
                  Yoshinoya est le <strong>&quot;Bistro du Peuple&quot;</strong> japonais - un lieu où se rencontrent 
                  l&apos;histoire du Japon moderne, l&apos;âme de ses travailleurs, et l&apos;art d&apos;une simplicité parfaite.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Ce que vous découvrirez ici</h4>
                  <p className="text-gray-700 text-sm">
                    Ce n&apos;est pas un simple guide restaurant, mais une <strong>invitation à un voyage culturel</strong>. 
                    À travers un bol de gyūdon, vous toucherez 125 ans d&apos;histoire japonaise, 
                    découvrirez des secrets techniques fascinants, et vivrez une expérience authentique 
                    que seuls les &quot;initiés&quot; connaissent vraiment.
                  </p>
                </div>
                
                <p className="text-gray-700">
                  Depuis 1899, cette institution incarne la philosophie légendaire 
                  <strong>&quot;Umai, Yasui, Hayai&quot;</strong> (Délicieux, Abordable, Rapide) - 
                  trois mots qui résument l&apos;essence du service à la japonaise et l&apos;art de vivre urbain.
                </p>
              </div>
            </div>

            {/* Histoire et héritage enrichie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Épopée d&apos;une Légende : 125 Ans d&apos;Histoire</h2>
              </div>
              
              <div className="space-y-8">
                {/* 1899 - Les origines */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1899 : Naissance au Cœur de Tokyo</h3>
                  <p className="text-gray-700 mb-3">
                    Dans l&apos;effervescence du <strong>marché aux poissons de Nihonbashi</strong>, Matsuda Eikichi observe 
                    les travailleurs pressés du marché. Il comprend leurs besoins : une nourriture rapide, nourrissante, 
                    et savoureuse. Inspiré par le &quot;gyūmeshi&quot; en vogue, il perfectionne la recette pour créer 
                    le <strong>gyūdon moderne</strong>.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-1">Le Secret du Nom &quot;Yoshinoya&quot;</h4>
                    <p className="text-orange-800 text-sm">
                      Contrairement à la légende urbaine, le nom ne vient pas de la ville d&apos;origine du créateur, 
                      mais de son amour pour les <strong>cerisiers en fleurs de Yoshino</strong> (Nara). 
                      Un choix poétique qui révèle la sensibilité japonaise : mêler business et beauté naturelle.
                    </p>
                  </div>
                </div>

                {/* 1926 - Déménagement à Tsukiji */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1926 : L&apos;Âge d&apos;Or de Tsukiji</h3>
                  <p className="text-gray-700 mb-3">
                    Après le grand tremblement de terre de Tokyo (1923), Yoshinoya suit le marché aux poissons vers 
                    <strong> Tsukiji</strong>. Cette période forge la réputation légendaire de la marque auprès 
                    des professionnels les plus exigeants du Japon : les poissonniers, négociants, et travailleurs 
                    du plus grand marché au monde.
                  </p>
                  <p className="text-gray-700">
                    C&apos;est ici que naît la culture du <strong>comptoir en U</strong> et que se perfectionnent 
                    les techniques de service ultra-rapide qui feront la renommée de Yoshinoya.
                  </p>
                </div>

                {/* 1968 - Expansion */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1968 : La Révolution du Multi-Store</h3>
                  <p className="text-gray-700">
                    Yoshinoya devient pionnier de l&apos;expansion multi-stores au Japon, ouvrant la voie 
                    à l&apos;industrie moderne du fast-food japonais. L&apos;entreprise développe ses standards 
                    de qualité et ses processus qui permettront de maintenir la même excellence 
                    dans chaque restaurant.
                  </p>
                </div>

                {/* 1980 - Crise et renaissance */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1980 : L&apos;Épreuve de la Faillite</h3>
                  <p className="text-gray-700 mb-3">
                    Une expansion trop rapide mène à la <strong>faillite</strong>. Mais cette épreuve, 
                    loin de détruire Yoshinoya, la renforce. La reconstruction se fait sur des bases 
                    plus solides, avec un retour aux valeurs fondamentales de qualité et de service.
                  </p>
                </div>

                {/* 2004-2006 - Crise BSE */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2004-2006 : L&apos;Épreuve du Courage</h3>
                  <p className="text-gray-700 mb-3">
                    Quand la <strong>crise de la vache folle (BSE)</strong> frappe, Yoshinoya prend une décision 
                    qui stupéfie l&apos;industrie : <strong>arrêter complètement la vente de gyūdon pendant 2 ans et 7 mois</strong>, 
                    refusant tout compromis sur la qualité de la viande américaine qu&apos;elle exige.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-800 text-sm">
                      <strong>Le Pari de l&apos;Intégrité :</strong> Plutôt que de changer de fournisseur ou de qualité, 
                      Yoshinoya préfère perdre des milliards de yens. Cette décision renforce paradoxalement 
                      la confiance des consommateurs dans l&apos;engagement qualité absolu de la marque.
                    </p>
                  </div>
                </div>

                {/* Aujourd'hui */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Aujourd&apos;hui : L&apos;Héritage Vivant</h3>
                  <p className="text-gray-700">
                    Avec ses <strong>1 261 restaurants au Japon</strong> et sa présence dans 12 pays, 
                    Yoshinoya continue de porter l&apos;âme du gyūdon authentique tout en s&apos;adaptant 
                    aux défis contemporains. Chaque bol servi perpétue 125 ans de tradition, 
                    d&apos;innovations, et de passion japonaise.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophie approfondie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">La Philosophie Évolutive : &quot;Umai, Yasui, Hayai&quot;</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Ce qui rend cette devise fascinante, c&apos;est que <strong>l&apos;ordre des mots a changé avec les époques</strong>, 
                reflétant l&apos;évolution de la société japonaise et les priorités de chaque génération.
              </p>
              
              {/* Timeline de l'évolution */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1958</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">&quot;はやい、うまい&quot; (Hayai, Umai)</h3>
                    <p className="text-gray-700 text-sm">
                      À Tsukiji, pour les travailleurs du marché aux poissons, <strong>la rapidité primait</strong>. 
                      Dans ce monde où chaque minute compte, il fallait d&apos;abord être rapide, puis délicieux.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-green-600 text-sm">1968</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">&quot;はやい、うまい、やすい&quot; (Hayai, Umai, Yasui)</h3>
                    <p className="text-gray-700 text-sm">
                      Avec l&apos;expansion multi-stores, <strong>&quot;l&apos;abordable&quot; rejoint la devise</strong>. 
                      L&apos;ordre reflète l&apos;expérience client : rapidité d&apos;abord, goût ensuite, prix à la fin.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-orange-600 text-sm">1994</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">&quot;うまい、はやい、やすい&quot; (Umai, Hayai, Yasui)</h3>
                    <p className="text-gray-700 text-sm">
                      Face à une expansion trop rapide qui compromettait la qualité, Yoshinoya remet 
                      <strong>&quot;le goût en premier&quot;</strong>. Un retour aux sources fondamentales.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-red-600 text-sm">2001</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">&quot;うまい、やすい、はやい&quot; (Umai, Yasui, Hayai)</h3>
                    <p className="text-gray-700 text-sm">
                      En pleine déflation japonaise, Yoshinoya baisse les prix de 400¥ à 280¥. 
                      <strong>&quot;L&apos;abordable&quot; devient le deuxième message</strong> pour signaler cette révolution tarifaire.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Les trois piliers aujourd'hui */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-3">うまい</div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">Umai (Délicieux)</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Bœuf Short Plate</strong> grain-fed américain</p>
                    <p><strong>Sauce au vin blanc</strong> et gingembre</p>
                    <p><strong>Technique &quot;tsugi-tashi&quot;</strong> pour concentrer les saveurs</p>
                    <p><strong>Louche à 47 trous</strong> pour l&apos;équilibre parfait</p>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-3">やすい</div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">Yasui (Abordable)</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Efficacité opérationnelle</strong> maximale</p>
                    <p><strong>Contrôle de la chaîne</strong> d&apos;approvisionnement</p>
                    <p><strong>Standards &quot;Japan Spec&quot;</strong> créés avec l&apos;industrie US</p>
                    <p><strong>Volume global</strong> pour négocier les meilleurs prix</p>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-3">はやい</div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">Hayai (Rapide)</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Comptoir en U breveté</strong> pour optimiser les déplacements</p>
                    <p><strong>Service en moins de 2 minutes</strong> garanti</p>
                    <p><strong>Formation standardisée</strong> du personnel</p>
                    <p><strong>Processus chorégraphié</strong> comme un ballet</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Leçon Culturelle</h4>
                <p className="text-gray-700 text-sm">
                  Cette évolution de la devise illustre parfaitement la <strong>flexibilité japonaise</strong> : 
                  garder les valeurs fondamentales tout en adaptant les priorités aux défis de chaque époque. 
                  Un management &quot;agile&quot; avant la lettre !
                </p>
              </div>
            </div>

            {/* Secrets techniques approfondis */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Anatomie de l&apos;Excellence : &quot;Artisanat Industrialisé&quot;</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Yoshinoya a réussi le défi le plus complexe de la restauration : 
                <strong>industrialiser la perfection artisanale</strong> sans perdre l&apos;âme du plat. 
                Chaque élément est calculé avec une précision d&apos;horloger suisse.
              </p>
              
              <div className="space-y-8">
                {/* La viande - science et passion */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🥩 Le Bœuf : Quand Yoshinoya Réinvente les Standards Mondiaux</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">La Partie : Short Plate Uniquement</h4>
                        <p className="text-red-800 text-sm">
                          Seule la partie <strong>&quot;Short Plate&quot;</strong> du bœuf américain est utilisée. 
                          Cette zone offre le ratio idéal <strong>6:4 (maigre:gras)</strong> et, 
                          élevée au grain, elle n&apos;a aucune odeur désagréable.
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">L&apos;Épaisseur : 1,3mm Exactement</h4>
                        <p className="text-red-800 text-sm">
                          <strong>1,2mm = trop fin, se désintègre à la cuisson</strong><br/>
                          <strong>1,4mm = trop épais, texture dure</strong><br/>
                          <strong>1,3mm = perfection absolue</strong> pour l&apos;absorption de la sauce
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">La Maturation : 14 Jours de Patience</h4>
                        <p className="text-red-800 text-sm">
                          Décongélation lente jusqu&apos;à <strong>-2°C</strong> pendant 14 jours pour maximiser 
                          les acides aminés (umami). Cette &quot;maturation sous froid&quot; est une technique 
                          exclusive Yoshinoya.
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">La Révolution : &quot;Japan Spec&quot;</h4>
                        <p className="text-red-800 text-sm">
                          Les exigences qualité de Yoshinoya sont devenues si influentes qu&apos;elles sont 
                          maintenant <strong>officiellement adoptées par l&apos;USDA</strong> (ministère américain de l&apos;agriculture) 
                          comme standard &quot;Japan Spec&quot;.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* La sauce - alchimie secrète */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🍯 La Sauce Secrète : Une Alchimie Vivante</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Base Vin Blanc</h4>
                        <p className="text-orange-800 text-sm">
                          Surprenant pour des Français : la sauce Yoshinoya utilise un 
                          <strong>condiment fermenté à base de vin blanc</strong>. Ce lien inattendu 
                          avec la France donne cette rondeur caractéristique.
                        </p>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Maturation à Froid</h4>
                        <p className="text-orange-800 text-sm">
                          Contrairement aux sauces chauffées, celle de Yoshinoya 
                          <strong>mature lentement à basse température</strong>, 
                          préservant toutes les nuances aromatiques.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">🔄 Le Mystère &quot;Tsugi-tashi&quot;</h4>
                      <p className="text-yellow-800 text-sm">
                        Comme les <strong>mères éternelles</strong> des vinaigres balsamiques italiens, 
                        la sauce Yoshinoya n&apos;est jamais totalement renouvelée. Chaque jour, 
                        <strong>on ajoute de la nouvelle sauce à l&apos;ancienne</strong>, créant 
                        une complexité aromatique qui s&apos;enrichit avec le temps. Chaque restaurant 
                        développe ainsi sa propre &quot;signature&quot; gustative.
                      </p>
                    </div>
                  </div>
                </div>

                {/* L'équipement - précision technique */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">⚙️ L&apos;Équipement : Quand l&apos;Ergonomie devient Art</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">🔄 Le Comptoir en U : Génie Breveté</h4>
                      <p className="text-blue-800 text-sm">
                        Cette forme unique, <strong>brevetée par Yoshinoya</strong>, n&apos;est pas qu&apos;esthétique. 
                        Elle optimise tous les déplacements du personnel : un employé peut servir 
                        simultanément plusieurs clients sans croiser son collègue. <strong>Pure ergonomie japonaise.</strong>
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">🥄 La Louche à 47 Trous : Précision Millimétrique</h4>
                      <p className="text-blue-800 text-sm">
                        Chaque trou est calculé pour permettre l&apos;<strong>égouttage parfait</strong> : 
                        suffisamment de sauce pour enrober la viande, pas assez pour noyer le riz. 
                        Le nombre 47 n&apos;est pas aléatoire mais le résultat de milliers de tests.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">🍚 Le Riz : Mélange Secret d&apos;Expert</h4>
                      <p className="text-blue-800 text-sm">
                        Le riz Yoshinoya est un <strong>blend propriétaire</strong> de différentes variétés japonaises, 
                        sélectionnées pour leur capacité à absorber la sauce sans perdre leur texture. 
                        Chaque grain doit rester distinct tout en s&apos;imprégnant des saveurs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* La porcelaine - beauté fonctionnelle */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏺 La Porcelaine d&apos;Arita : &quot;Yō no Bi&quot; (Beauté Fonctionnelle)</h3>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800 text-sm mb-3">
                      Fidèle à la philosophie du fondateur (&quot;la bonne cuisine mérite de beaux récipients&quot;), 
                      chaque bol Yoshinoya est en <strong>porcelaine d&apos;Arita</strong>, 
                      célèbre dans le monde entier depuis le 17ème siècle.
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div><strong>Forme :</strong> Courbes parfaites pour la prise en main</div>
                      <div><strong>Rebord :</strong> 5mm d&apos;épaisseur, idéal pour porter à la bouche</div>
                      <div><strong>Motifs intérieurs :</strong> Servent de &quot;règles&quot; pour le dosage parfait du riz</div>
                      <div><strong>Résistance :</strong> Supporte des milliers de cycles de lavage industriel</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Le Résultat</h4>
                <p className="text-gray-700 text-sm">
                  Cette précision technique permet à Yoshinoya de servir <strong>un produit identique 
                  dans chaque restaurant</strong>, quelle que soit l&apos;expérience du personnel. 
                  C&apos;est l&apos;essence du &quot;monozukuri&quot; japonais : la perfection dans le détail au service de l&apos;excellence globale.
                </p>
              </div>
            </div>

            {/* Menu détaillé avec codes et personnalisation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Détaillé : L&apos;Art de Personnaliser</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Yoshinoya offre bien plus que le gyudon basique. Découvrez tous les &quot;codes secrets&quot; 
                pour transformer votre bol selon vos goûts, exactement comme les habitués japonais.
              </p>
              
              <div className="space-y-8">
                {/* Les bases incontournables */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🍚 Les Bases : Vos Références Absolues</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">🥩 Gyudon Classique</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>S (並盛) :</strong> 468¥ (633 kcal)</div>
                        <div><strong>M (大盛) :</strong> 588¥ (853 kcal)</div>
                        <div><strong>L (特盛) :</strong> 708¥ (1073 kcal)</div>
                        <div><strong>Mini :</strong> 348¥ (413 kcal)</div>
                        <div className="text-orange-700 mt-2">Le standard parfait, équilibré et savoureux</div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">🐷 Butadon (Porc)</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>S :</strong> 350¥</div>
                        <div><strong>M :</strong> 450¥</div>
                        <div><strong>L :</strong> 550¥</div>
                        <div className="text-orange-700 mt-2">Plus doux, sauce légèrement sucrée</div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">🐔 Oyakodon</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>S :</strong> 420¥</div>
                        <div><strong>M :</strong> 520¥</div>
                        <div className="text-orange-700 mt-2">Poulet et œuf, douceur garantie</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Les personnalisations secrètes */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Les &quot;Codes Secrets&quot; : Personnalisez comme un Pro</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">🔥 Options Gratuites (Demandez-les !)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div><strong>&quot;Tsuyu-daku&quot; (つゆだく)</strong> : Extra sauce</div>
                          <div><strong>&quot;Tsuyu-nuki&quot; (つゆ抜き)</strong> : Sans sauce</div>
                          <div><strong>&quot;Negi-daku&quot; (ねぎだく)</strong> : Extra oignons</div>
                          <div><strong>&quot;Negi-nuki&quot; (ねぎ抜き)</strong> : Sans oignons</div>
                        </div>
                        <div className="space-y-2">
                          <div><strong>&quot;Niku-mashi&quot; (肉まし)</strong> : Double viande (+240¥)</div>
                          <div><strong>&quot;Aji-tama&quot; (味玉)</strong> : Œuf mariné (+80¥)</div>
                          <div><strong>&quot;Cheese&quot; (チーズ)</strong> : Fromage (+160¥)</div>
                          <div><strong>&quot;Kimchi&quot; (キムチ)</strong> : Kimchi coréen (+100¥)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">🌶️ Niveaux de Piment (Spice Levels)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-green-700">Karakuchi (辛口)</div>
                          <div>Légèrement épicé</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-orange-700">Chū-kara (中辛)</div>
                          <div>Moyennement épicé</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-red-700">Ō-kara (大辛)</div>
                          <div>Très épicé</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">🥗 Accompagnements Populaires</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div><strong>Miso Soup :</strong> 60¥ (parfait avec le gyudon)</div>
                          <div><strong>Salade :</strong> 120¥ (fraîcheur nécessaire)</div>
                          <div><strong>Oshinko :</strong> 120¥ (pickles traditionnels)</div>
                        </div>
                        <div className="space-y-2">
                          <div><strong>Karaage :</strong> 250¥ (poulet frit croustillant)</div>
                          <div><strong>Gyoza :</strong> 150¥ (raviolis poêlés)</div>
                          <div><strong>Soft Cream :</strong> 150¥ (dessert classique)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formules et combos */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Formules Économiques : &quot;Set Menu&quot;</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">🎯 Les Combos Incontournables</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-3">
                          <div className="border-b border-green-200 pb-2">
                            <div className="font-semibold">Gyudon + Miso + Salade</div>
                            <div className="text-green-700">520¥ (économie de 40¥)</div>
                          </div>
                          <div className="border-b border-green-200 pb-2">
                            <div className="font-semibold">Oyakodon + Miso + Oshinko</div>
                            <div className="text-green-700">550¥ (économie de 50¥)</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="border-b border-green-200 pb-2">
                            <div className="font-semibold">Butadon + Karaage + Miso</div>
                            <div className="text-green-700">650¥ (économie de 40¥)</div>
                          </div>
                          <div className="border-b border-green-200 pb-2">
                            <div className="font-semibold">Gyudon L + Gyoza + Soft</div>
                            <div className="text-green-700">800¥ (économie de 80¥)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">⏰ Menu Matinal (5h-11h)</h4>
                      <p className="text-yellow-800 text-sm">
                        <strong>Gyudon + Œuf + Miso + Nori :</strong> 450¥<br/>
                        Perfect petit-déjeuner consistant avec tous les éléments nutritionnels nécessaires.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Variations spéciales */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">⭐ Variations Premium</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-3">🥩 Spécialités de Viande</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div><strong>Gyūdon avec Œuf :</strong> 548¥</div>
                          <div><strong>Atama no Ōmori :</strong> 708¥ (double viande, riz normal)</div>
                          <div><strong>Cheese Gyūdon :</strong> 628¥</div>
                        </div>
                        <div className="space-y-2">
                          <div><strong>Stamina Gyūdon :</strong> 680¥ (avec ail)</div>
                          <div><strong>Premium Beef :</strong> 780¥ (viande sélectionnée)</div>
                          <div><strong>Spicy Gyūdon :</strong> 590¥ (sauce pimentée)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Boissons et desserts */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🥤 Boissons &amp; Desserts</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Boissons</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>Thé vert :</strong> 100¥ (chaud/froid)</div>
                        <div><strong>Café :</strong> 120¥</div>
                        <div><strong>Bière :</strong> 250¥</div>
                        <div><strong>Soft drinks :</strong> 150¥</div>
                        <div className="text-blue-700 mt-2">Le thé vert se marie parfaitement avec le gyudon</div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">Desserts</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>Soft cream vanilla :</strong> 150¥</div>
                        <div><strong>Anmitsu :</strong> 200¥ (dessert traditionnel)</div>
                        <div><strong>Fruits de saison :</strong> 180¥</div>
                        <div className="text-blue-700 mt-2">Le soft cream nettoie parfaitement le palais</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Conseil d&apos;Expert</h4>
                <p className="text-gray-700 text-sm">
                  Pour votre première visite, commandez un <strong>&quot;Gyudon Nami, Tsuyu-daku, Miso-soup&quot;</strong> 
                  (bol moyen avec extra sauce et soupe miso). C&apos;est exactement comme ça que mangent 
                  90% des salarymen japonais. Puis expérimentez avec les personnalisations !
                </p>
              </div>
            </div>

            {/* Guide de commande avancé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Maîtriser l&apos;Art de Commander chez Yoshinoya</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Chez Yoshinoya, commander correctement fait la différence entre être un touriste 
                et ressembler à un vrai connaisseur. Voici vos clés d&apos;accès à l&apos;expérience authentique.
              </p>
              
              <div className="space-y-8">
                {/* Le processus étape par étape */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Le Processus : Simple mais Précis</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">🪑 Entrez &amp; Asseyez-vous</h4>
                      <p className="text-sm text-gray-600">
                        Comptoir en U : n&apos;importe quelle place libre. 
                        <strong>Pas de réservation</strong>, premier arrivé, premier servi.
                      </p>
                    </div>
                    
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">🗣️ Commandez Fort &amp; Clair</h4>
                      <p className="text-sm text-gray-600">
                        Annoncez votre commande <strong>distinctement</strong>. 
                        Le personnel travaille vite et doit vous entendre parfaitement.
                      </p>
                    </div>
                    
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ Recevez en Express</h4>
                      <p className="text-sm text-gray-600">
                        Votre gyūdon arrive en <strong>90 secondes maximum</strong>. 
                        Préparez-vous mentalement !
                      </p>
                    </div>
                    
                    <div className="text-center bg-orange-50 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">4</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">💰 Payez en Sortant</h4>
                      <p className="text-sm text-gray-600">
                        Espèces principalement, cartes acceptées. 
                        <strong>Aucun pourboire</strong> attendu ou accepté.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Les codes de commande */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Commandes comme un Pro : Votre &quot;Yoshinoya Vocabulary&quot;</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">🗣️ Formulations de Base (Répétez après nous !)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-3">
                          <div className="border-b border-purple-200 pb-2">
                            <div className="font-semibold text-purple-900">&quot;Gyūdon hitotsu, onegaishimasu&quot;</div>
                            <div className="text-purple-700">牛丼一つお願いします</div>
                            <div className="text-purple-600">= Un gyudon s&apos;il vous plaît</div>
                          </div>
                          <div className="border-b border-purple-200 pb-2">
                            <div className="font-semibold text-purple-900">&quot;Ōmori de&quot;</div>
                            <div className="text-purple-700">大盛で</div>
                            <div className="text-purple-600">= En grande taille</div>
                          </div>
                          <div className="border-b border-purple-200 pb-2">
                            <div className="font-semibold text-purple-900">&quot;Tsuyudaku de&quot;</div>
                            <div className="text-purple-700">つゆだくで</div>
                            <div className="text-purple-600">= Avec extra sauce</div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="border-b border-purple-200 pb-2">
                            <div className="font-semibold text-purple-900">&quot;Tamago mo tsukete kudasai&quot;</div>
                            <div className="text-purple-700">卵もつけてください</div>
                            <div className="text-purple-600">= Ajoutez un œuf aussi</div>
                          </div>
                          <div className="border-b border-purple-200 pb-2">
                            <div className="font-semibold text-purple-900">&quot;Miso-shiru mo&quot;</div>
                            <div className="text-purple-700">味噌汁も</div>
                            <div className="text-purple-600">= Une soupe miso aussi</div>
                          </div>
                          <div className="border-b border-purple-200 pb-2">
                            <div className="font-semibold text-purple-900">&quot;Kore de zenbu desu&quot;</div>
                            <div className="text-purple-700">これで全部です</div>
                            <div className="text-purple-600">= C&apos;est tout pour moi</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">🔧 Personnalisations Avancées</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-green-800">Pour les Timides :</div>
                          <div className="space-y-1 mt-2">
                            <div>&quot;Negi-nuki&quot; (sans oignons)</div>
                            <div>&quot;Tsuyu-sukuname&quot; (peu de sauce)</div>
                            <div>&quot;Karaku-nai-de&quot; (pas épicé)</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-green-800">Pour les Gourmands :</div>
                          <div className="space-y-1 mt-2">
                            <div>&quot;Niku-mashi&quot; (double viande)</div>
                            <div>&quot;Negi-daku&quot; (extra oignons)</div>
                            <div>&quot;Cheese-tsukete&quot; (avec fromage)</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-green-800">Pour les Experts :</div>
                          <div className="space-y-1 mt-2">
                            <div>&quot;Atama-ōmori&quot; (double viande/riz normal)</div>
                            <div>&quot;Karakuchi-de&quot; (version épicée)</div>
                            <div>&quot;Kimchi-mo&quot; (avec kimchi)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conseils d'étiquette */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🏯 Étiquette &amp; Savoir-vivre Japonais</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">✅ À Faire</h4>
                        <div className="space-y-2 text-sm">
                          <div>• <strong>Dire &quot;Irasshaimase&quot;</strong> en retour (même mal prononcé, c&apos;est apprécié)</div>
                          <div>• <strong>Manger rapidement</strong> - c&apos;est un fast-food, pas un restaurant gastronomique</div>
                          <div>• <strong>Lever la main</strong> pour appeler le personnel si besoin</div>
                          <div>• <strong>Dire &quot;Gochisousama&quot;</strong> après le repas (merci pour le repas)</div>
                          <div>• <strong>Remettre les baguettes</strong> sur leur support après usage</div>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-3">❌ À Éviter</h4>
                        <div className="space-y-2 text-sm">
                          <div>• <strong>Rester trop longtemps</strong> après avoir fini (20 min max)</div>
                          <div>• <strong>Parler fort</strong> ou téléphoner</div>
                          <div>• <strong>Faire du bruit</strong> en mangeant (slurp OK pour les soupes)</div>
                          <div>• <strong>Laisser de la nourriture</strong> dans le bol (très impoli au Japon)</div>
                          <div>• <strong>Pointer avec les baguettes</strong> ou les planter dans le riz</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">💡 Le Conseil d&apos;Insider</h4>
                      <p className="text-yellow-800 text-sm">
                        <strong>Pour être 100% crédible :</strong> Commandez un <strong>&quot;Gyudon nami, tsuyudaku, miso-shiru mo&quot;</strong> 
                        (gyudon moyen, extra sauce, soupe miso aussi). Mangez en <strong>10-15 minutes</strong>, 
                        payez au comptoir, et partez. Vous passerez pour un habitué même si c&apos;est votre première fois !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">🎯 La Commande Parfaite pour Débuter</h4>
                <p className="text-orange-800 text-sm mb-3">
                  Copiez exactement cette phrase pour votre première visite :
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                  <div className="text-lg font-bold text-gray-900">&quot;Gyūdon nami, tsuyudaku, miso-shiru mo, onegaishimasu&quot;</div>
                  <div className="text-gray-700 mt-1">牛丼並、つゆだく、味噌汁も、お願いします</div>
                  <div className="text-orange-700 text-sm mt-2">
                    = Gyudon moyen, extra sauce, soupe miso aussi, s&apos;il vous plaît
                  </div>
                </div>
                <p className="text-orange-800 text-sm mt-3">
                  <strong>Résultat :</strong> Vous aurez l&apos;expérience authentique pour environ 520¥ 
                  et passerez pour quelqu&apos;un qui connaît Yoshinoya !
                </p>
              </div>
            </div>

            {/* Position sur le marché - Analyse approfondie */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">L&apos;Empire Yoshinoya : Géant Mondial du Gyudon</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Avec ses 125 ans d&apos;histoire, Yoshinoya n&apos;est pas qu&apos;une simple chaîne de restauration : 
                c&apos;est un <strong>phénomène culturel japonais</strong> qui a conquis le monde entier.
              </p>
              
              <div className="space-y-8">
                {/* Statistiques impressionnantes */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Les Chiffres qui Impressionnent</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-3xl font-bold text-red-600 mb-2">1er</div>
                      <div className="text-sm font-medium text-gray-900">Inventeur Historique</div>
                      <div className="text-xs text-gray-600">
                        Créateur du concept gyūdon moderne depuis 1899
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600 mb-2">2,000+</div>
                      <div className="text-sm font-medium text-gray-900">Restaurants Mondiaux</div>
                      <div className="text-xs text-gray-600">
                        Japon, Asie, États-Unis, et expansion continue
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-600 mb-2">3 Millions</div>
                      <div className="text-sm font-medium text-gray-900">Clients par Jour</div>
                      <div className="text-xs text-gray-600">
                        Plus d&apos;1 milliard de repas servis annuellement
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">¥200Mds</div>
                      <div className="text-sm font-medium text-gray-900">Chiffre d&apos;Affaires</div>
                      <div className="text-xs text-gray-600">
                        Empire économique de plusieurs milliards
                      </div>
                    </div>
                  </div>
                </div>

                {/* Positionnement concurrentiel */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">⚔️ La Guerre des Gyudon : Yoshinoya vs Tous</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">🥇 Yoshinoya : Le Roi Incontesté</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-blue-800">Forces :</div>
                          <div className="space-y-1 mt-1">
                            <div>• Héritage historique (1899)</div>
                            <div>• Qualité de viande supérieure</div>
                            <div>• Réseau international</div>
                            <div>• Innovation constante</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-800">Position :</div>
                          <div className="space-y-1 mt-1">
                            <div>• <strong>2e</strong> en nombre de restaurants</div>
                            <div>• <strong>1er</strong> en prestige</div>
                            <div>• <strong>1er</strong> à l&apos;international</div>
                            <div>• <strong>1er</strong> en innovation</div>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-800">Avantages :</div>
                          <div className="space-y-1 mt-1">
                            <div>• Bœuf &quot;Japan Spec&quot;</div>
                            <div>• Comptoir en U breveté</div>
                            <div>• Service sub-90 secondes</div>
                            <div>• Brand recognition mondiale</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">🔥 La Concurrence : David vs Goliath</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white p-3 rounded border">
                          <div className="font-semibold text-yellow-700">🥉 Sukiya (#1 en taille)</div>
                          <div className="text-xs text-gray-600 mt-1">
                            <strong>+ 2,000 restaurants</strong><br/>
                            Prix plus bas, expansion aggressive, 
                            mais moins de prestige historique
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-semibold text-orange-700">🥈 Matsuya (#3)</div>
                          <div className="text-xs text-gray-600 mt-1">
                            <strong>~ 1,000 restaurants</strong><br/>
                            Ticket machines, efficacité, 
                            mais expérience moins humaine
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <div className="font-semibold text-red-700">🏆 Nakau (#4)</div>
                          <div className="text-xs text-gray-600 mt-1">
                            <strong>~ 500 restaurants</strong><br/>
                            Spécialiste udon, diversification, 
                            mais focus moins gyudon
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expansion internationale */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 Conquête Mondiale : Le Soft Power du Gyudon</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">🗺️ Présence Internationale (2024)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="bg-white p-3 rounded">
                          <div className="font-semibold text-green-800">🇯🇵 Japon</div>
                          <div>1,200+ restaurants</div>
                          <div className="text-xs text-gray-600">Marché domestique saturé</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="font-semibold text-green-800">🇺🇸 États-Unis</div>
                          <div>300+ restaurants</div>
                          <div className="text-xs text-gray-600">Côte Ouest principalement</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="font-semibold text-green-800">🇨🇳 Chine</div>
                          <div>200+ restaurants</div>
                          <div className="text-xs text-gray-600">Expansion rapide</div>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <div className="font-semibold text-green-800">🌏 Autres Asie</div>
                          <div>150+ restaurants</div>
                          <div className="text-xs text-gray-600">Corée, Taïwan, Philippines</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">🎯 Stratégie &quot;Glocalization&quot;</h4>
                      <p className="text-yellow-800 text-sm">
                        Yoshinoya adapte intelligemment son concept à chaque marché : 
                        <strong>bœuf Halal</strong> en Malaisie, <strong>portions XXL</strong> aux États-Unis, 
                        <strong>versions véganes</strong> en Californie. Cette flexibilité culturelle 
                        tout en gardant l&apos;essence japonaise est la clé de son succès international.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Impact culturel */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🎌 Plus qu&apos;une Marque : Un Symbole Culturel</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-3">🎬 Dans la Pop Culture</h4>
                        <div className="text-sm space-y-2">
                          <div>• <strong>Animes &amp; Mangas :</strong> Référence constante dans Tokyo Ghoul, Naruto, etc.</div>
                          <div>• <strong>Films :</strong> Symbol du Japon moderne dans le cinéma international</div>
                          <div>• <strong>Memes Internet :</strong> &quot;Yoshinoya Copypasta&quot; célèbre sur 2chan</div>
                          <div>• <strong>Littérature :</strong> Métaphore du Japon contemporain chez Murakami</div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-3">💼 Impact Sociologique</h4>
                        <div className="text-sm space-y-2">
                          <div>• <strong>Rhythm Salaryman :</strong> Cadence de vie des travailleurs japonais</div>
                          <div>• <strong>Democratisation :</strong> Luxe (viande) accessible à tous</div>
                          <div>• <strong>Uniformisation :</strong> Même expérience de Hokkaido à Okinawa</div>
                          <div>• <strong>Innovation :</strong> Laboratoire des tendances food japonaises</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">🏆 Le Verdict Français</h4>
                      <p className="text-indigo-800 text-sm">
                        Pour un Français, <strong>Yoshinoya représente ce que McDonald&apos;s était dans les années 80</strong> : 
                        une révolution culinaire qui allie tradition et modernité. Mais contrairement à McDonald&apos;s, 
                        Yoshinoya a gardé son âme artisanale japonaise tout en industrialisant à l&apos;échelle planétaire. 
                        C&apos;est la réussite parfaite du <strong>&quot;monozukuri&quot;</strong> nippon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">🎯 Pourquoi Yoshinoya Domine</h4>
                <p className="text-orange-800 text-sm">
                  Dans l&apos;univers ultra-concurrentiel du gyudon, Yoshinoya règne par <strong>l&apos;alliance unique 
                  entre héritage historique et innovation technologique</strong>. Pendant que ses concurrents 
                  se battent sur les prix, Yoshinoya a construit un empire sur <strong>la qualité, l&apos;expérience 
                  et l&apos;émotion</strong>. Résultat : c&apos;est la seule chaîne de gyudon que connaissent 
                  les non-Japonais, et c&apos;est celle qui exporte le mieux la culture nipponne dans le monde.
                </p>
              </div>
            </div>

          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Informations pratiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations Pratiques</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Horaires typiques</div>
                    <div className="text-gray-600">24h/24, 7j/7 (la plupart des restaurants)</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Paiement</div>
                    <div className="text-gray-600">Espèces, cartes, IC cards (Suica, Pasmo)</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Temps d&apos;attente</div>
                    <div className="text-gray-600">90 secondes en moyenne</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Langue</div>
                    <div className="text-gray-600">Japonais principalement, images au menu</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.yoshinoya.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Site officiel Yoshinoya →
                  </a>
                </div>
              </div>

              {/* Prix moyens */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Prix Moyens</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gyūdon normal</span>
                    <span className="font-medium">468¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avec œuf</span>
                    <span className="font-medium">548¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grande portion</span>
                    <span className="font-medium">588¥</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Repas moyen</span>
                      <span className="text-gray-900">500-600¥</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notre avis */}
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Notre Avis</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-orange-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Incontournable</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>L&apos;expérience authentique par excellence.</strong> Yoshinoya offre plus qu&apos;un repas : 
                  c&apos;est un voyage dans l&apos;histoire du Japon moderne. La qualité constante depuis 1899 et 
                  l&apos;ambiance unique du comptoir en U en font une expérience inoubliable.
                </p>
              </div>

              {/* Navigation vers d'autres chaînes */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Autres Chaînes de Gyūdon</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chaines/sukiya" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Sukiya</div>
                    <div className="text-sm text-gray-600">Le leader en nombre de restaurants</div>
                  </Link>
                  
                  <Link 
                    href="/chaines/matsuya" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Matsuya</div>
                    <div className="text-sm text-gray-600">L&apos;innovateur du gyūdon</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
