import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Flame, Users, Sparkles, BookOpen, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yakiniku : L\'Expérience Gastronomique et Conviviale du Japon | Guide Japonchaines',
  description: 'Découvrez l\'univers du yakiniku japonais : de ses origines coréennes à sa transformation en art culinaire japonais. Histoire, philosophie, techniques de grillage, guide des viandes wagyu et accords parfaits.',
  keywords: [
    'yakiniku', 'grill japonais', 'culture culinaire', 'convivialité', 'tradition japonaise',
    'viande grillée', 'wagyu', 'kalbi', 'harami', 'tare sauce', 'barbecue japonais',
    'restaurants yakiniku', 'histoire du yakiniku', 'gastronomie japonaise', 'techniques grillage'
  ],
  openGraph: {
    title: 'Yakiniku : L\'Expérience Gastronomique et Conviviale du Japon',
    description: 'De ses origines coréennes à sa transformation en art culinaire japonais : histoire, philosophie et techniques du yakiniku.',
    type: 'article',
    url: '/guides/articles/yakiniku-culture-et-gastronomie',
  },
  alternates: {
    canonical: '/guides/articles/yakiniku-culture-et-gastronomie',
  },
};

export default function YakinikuCulturePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/guides/articles" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Articles de Fond
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Yakiniku : L'Expérience Gastronomique et Conviviale du Japon
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-1" />
                    15 min de lecture
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Culture & Convivialité
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Art Culinaire Japonais
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm p-8">
            {/* Introduction */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 mb-6">
                <h2 className="text-2xl font-bold text-red-800 mb-4">L'Art de la Découpe 'Bui-wake' (部位分け)</h2>
                <p className="text-lg text-red-700 leading-relaxed">
                  Le yakiniku révèle la <strong>génie anatomique japonais</strong> : transformer une carcasse bovine 
                  en 50+ parties distinctes, chacune avec sa technique optimale de cuisson et son profil gustatif unique. 
                  Cette art millénaire de la <em>bui-wake</em> (部位分け) - littéralement "division par parties" - 
                  représente l'évolution de la <strong>philosophie Mottainai</strong> (もったいない) appliquée à la 
                  gastronomie : transformer chaque fibre musculaire en expérience gustative recherchée, 
                  de l'hormone jadis "hōrumon" (放るもん = jeté) aux délicatesses premium.
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                Au-delà de la simple grillage, le yakiniku moderne s'apparente à un <strong>"voyage d'exploration 
                anatomique"</strong> où chaque bouchée révèle la complexité d'un terroir bovin. Cette approche 
                scientifique de la découpe - héritée des maîtres bouchers <em>gyūniku-ya</em> - permet de révéler 
                des textures et saveurs impossibles à obtenir par d'autres méthodes de cuisson, créant une 
                <strong>cartographie gustative</strong> de l'animal entier.
              </p>
            </section>

            {/* Définition moderne */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Qu'est-ce que le Yakiniku ? - Au-delà de la "viande grillée"</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🔥 Définition Moderne du Yakiniku</h3>
                <p className="text-blue-700 mb-4">
                  Le yakiniku moderne est défini comme <strong>"une expérience culinaire participative où les 
                  convives grillent eux-mêmes des tranches fines de viande et d'organes sur un gril de table, 
                  les assaisonnant avec des sauces spécialisées, dans un cadre de partage et de convivialité"</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🇫🇷 Parallèles avec la Culture Française</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• <strong>Barbecue</strong> - Convivialité autour du feu</li>
                      <li>• <strong>Pierrade</strong> - Cuisson individuelle sur pierre chaude</li>
                      <li>• <strong>Fondue</strong> - Partage et interaction sociale</li>
                      <li>• <strong>Raclette</strong> - Repas prolongé en groupe</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🥩 Maîtrise Anatomique Japonaise</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• <strong>50+ parties distinctes</strong> - Précision de la découpe bui-wake</li>
                      <li>• <strong>Hiérarchie gustative</strong> - Sankaku-bara (roi) → Zabuton (premium)</li>
                      <li>• <strong>Hormone revolution</strong> - De déchet à délicatesse recherchée</li>
                      <li>• <strong>Trilogie Tare</strong> - Soja, Miso, Sel selon profil muscle</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700">
                Cette <strong>expérience interactive</strong> transforme le repas en <em>divertissement culinaire</em>, 
                où chaque convive devient l'artisan de son propre plaisir gustatif, créant une dynamique sociale 
                unique qui favorise la conversation et renforce les liens interpersonnels.
              </p>
            </section>

            {/* Histoire */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Histoire et Évolution : De la Corée au Japon Moderne</h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg mb-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">📜 Les Racines Historiques (1872-1945)</h3>
                <p className="text-amber-700 mb-4">
                  Bien que le terme "焼肉" (yakiniku) apparaisse dès 1872 comme traduction de "barbecue" 
                  dans les textes japonais, l'interdiction bouddhiste de la consommation de viande a longtemps 
                  limité son développement. Ce n'est qu'avec l'<strong>ouverture du Japon à l'ère Meiji (1868-1912)</strong> 
                  et l'encouragement officiel de la consommation de viande que les bases du yakiniku moderne 
                  ont pu être posées.
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏗️ La Naissance du Yakiniku Moderne (1945-1960)</h3>
              <p className="text-gray-700 mb-4">
                La véritable révolution du yakiniku a eu lieu dans l'<strong>immédiat après-guerre</strong>. 
                Les communautés coréennes au Japon, confrontées à la pénurie alimentaire, ont innové en 
                transformant les <strong>abats et organes de bœuf</strong> - alors considérés comme non comestibles 
                - en délicieuses grillades sur des braseros improvisés.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">🥩 Innovation des "Hormones"</h4>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• <strong>Origine du terme</strong> - "放るもん" (horu mon = "ce qu'on jette")</li>
                    <li>• <strong>Transformation culinaire</strong> - Déchets → délicatesses</li>
                    <li>• <strong>Économie de guerre</strong> - Nutrition abordable et riche</li>
                    <li>• <strong>Technique unique</strong> - Cuisson directe au charbon</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">🍯 L'Esprit "Mottainai"</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• <strong>Philosophie du non-gaspillage</strong> - Utiliser chaque partie</li>
                    <li>• <strong>Respect de l'animal</strong> - Honorer le sacrifice</li>
                    <li>• <strong>Innovation culinaire</strong> - Créativité née de la nécessité</li>
                    <li>• <strong>Durabilité</strong> - Modèle écologique avant l'heure</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 L'Âge d'Or et la Mondialisation (1960-aujourd'hui)</h3>
              <p className="text-gray-700 mb-4">
                Avec la <strong>croissance économique rapide</strong> des années 1960-80, le yakiniku s'est démocratisé 
                et sophistiqué. L'introduction des <strong>viandes nobles</strong> (kalbi, rosu) et le développement 
                des <strong>sauces "tare" japonaises</strong> à base de soja, miso et mirin ont créé le style 
                distinctivement japonais du yakiniku que nous connaissons aujourd'hui.
              </p>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">🌏 Le Yakiniku : Symbole d'Intégration Culturelle</h4>
                <p className="text-purple-700 text-sm">
                  Le yakiniku illustre parfaitement la capacité unique du Japon à <strong>adopter, adapter et 
                  perfectionner</strong> les influences extérieures. D'origine coréenne, il est devenu 
                  authentiquement japonais, démontrant que l'identité culturelle peut s'enrichir par l'échange 
                  plutôt que de s'affaiblir.
                </p>
              </div>
            </section>

            {/* Philosophie */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">La Philosophie du Yakiniku : Partage et Communion</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg mb-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🤝 Le Cœur du Yakiniku : "Partager une Flamme"</h3>
                <p className="text-purple-700 mb-4">
                  Le yakiniku transcende la simple alimentation pour devenir un <strong>rituel social fondamental</strong> 
                  dans la culture japonaise. Au centre de cette philosophie se trouve le concept de 
                  <strong>"partager une flamme"</strong> - une métaphore puissante qui symbolise l'union, 
                  la confiance mutuelle et la création de liens durables.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🔥 Signification de la Flamme Partagée</h4>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li>• <strong>Force centripète</strong> - Rassemble physiquement et psychologiquement</li>
                      <li>• <strong>Égalité sociale</strong> - Tous partagent le même feu</li>
                      <li>• <strong>Intimité créée</strong> - Proximité naturelle autour du gril</li>
                      <li>• <strong>Moment présent</strong> - Concentration sur l'instant partagé</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">💫 Dynamique Sociale Unique</h4>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li>• <strong>Coopération naturelle</strong> - "Ta viande est-elle prête ?"</li>
                      <li>• <strong>Brise-glace social</strong> - Conversations spontanées</li>
                      <li>• <strong>Réduction des hiérarchies</strong> - Patron et employé égaux</li>
                      <li>• <strong>Création de complicité</strong> - Expérience commune</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎌 Le Yakiniku dans les Moments Importants</h3>
              <p className="text-gray-700 mb-4">
                Dans la société japonaise, le yakiniku occupe une place privilégiée lors des <strong>"ハレの日" 
                (hare no hi - jours spéciaux)</strong> : anniversaires, promotions professionnelles, retrouvailles 
                d'amis, célébrations familiales. Cette tradition s'enracine dans la croyance que les moments 
                les plus précieux de la vie doivent être <em>partagés autour d'une table commune</em>.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">🌸 Influence Culturelle Profonde</h4>
                <p className="text-green-700 text-sm">
                  Le yakiniku reflète les valeurs fondamentales de la société japonaise : le respect mutuel, 
                  l'harmonie du groupe (和 - wa), et l'importance du processus partagé plutôt que du simple résultat. 
                  Cette philosophie transforme chaque repas en <strong>cérémonie de connexion humaine</strong>.
                </p>
              </div>
            </section>

            {/* Guide du Maître Yakiniku */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Devenir un Maître Yakiniku : Guide Complet</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg mb-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">🎯 La "Règle d'Or" de la Commande</h3>
                <p className="text-red-700 mb-4">
                  Un repas de yakiniku réussi suit une <strong>progression gustative logique</strong>, comparable 
                  à un menu dégustation français. Cette séquence permet d'optimiser l'expérience sensorielle 
                  et d'éviter la saturation des papilles.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">📋 Ordre de Dégustation Recommandé</h4>
                    <ol className="space-y-2 text-sm text-red-700 list-decimal list-inside">
                      <li><strong>Entrées</strong> - Kimchi, namul (préparation des papilles)</li>
                      <li><strong>Viandes salées</strong> - Tan, harami (pureté des saveurs)</li>
                      <li><strong>Viandes marinées</strong> - Kalbi, rosu (apogée gustatif)</li>
                      <li><strong>Hormones</strong> - Exploration des textures</li>
                      <li><strong>Plat final</strong> - Naengmyeon, kuppa (rafraîchissement)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🧠 Logique Gastronomique</h4>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• <strong>Du léger au fort</strong> - Éviter la saturation</li>
                      <li>• <strong>Du simple au complexe</strong> - Éducation graduelle du palais</li>
                      <li>• <strong>Gestion du gril</strong> - Éviter les mélanges de saveurs</li>
                      <li>• <strong>Digestion optimale</strong> - Alternance chaud/froid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Techniques de Grillage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Art du Grillage : Techniques de Maître</h2>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg mb-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4">🔥 Principe Fondamental : "焦らず、一度だけ返す"</h3>
                <p className="text-orange-700 mb-4">
                  <em>"Ne pas se presser, ne retourner qu'une seule fois"</em> - Cette maxime japonaise résume 
                  l'essence de la cuisson parfaite. La patience et la précision sont les clés d'un yakiniku réussi.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-900 mb-2">🥩 Tan (Langue)</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Cuisson rapide (30-45 sec/côté)</li>
                      <li>• Observer le léger recroquevillement</li>
                      <li>• Texture croquante recherchée</li>
                      <li>• Sel et citron recommandés</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-900 mb-2">🥩 Kalbi (Côtes)</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Feu moyen (1-2 min/côté)</li>
                      <li>• Attention aux flammes (graisse)</li>
                      <li>• Jus qui perle = signal</li>
                      <li>• Parfait avec du riz</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-900 mb-2">🥩 Harami (Onglet)</h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Cuisson médium recommandée</li>
                      <li>• Ne pas trop cuire (durcit)</li>
                      <li>• Texture tendre unique</li>
                      <li>• Polyvalent sauce/sel</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">✋ Test de Cuisson à la Main</h3>
              <p className="text-gray-700 mb-4">
                Technique professionnelle : utilisez votre main comme "thermomètre naturel" en comparant 
                la fermeté de la viande avec différentes parties de votre paume.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-blue-800 mb-2">👌 Saignant</h4>
                  <p className="text-sm text-blue-700">Pouce + Index<br/>Chair très souple</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-green-800 mb-2">🖕 Médium</h4>
                  <p className="text-sm text-green-700">Pouce + Majeur<br/>Fermeté modérée</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <h4 className="font-bold text-red-800 mb-2">🤙 Bien cuit</h4>
                  <p className="text-sm text-red-700">Pouce + Auriculaire<br/>Chair ferme</p>
                </div>
              </div>
            </section>

            {/* Anatomie du Menu */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Anatomie d'un Festin : Décryptage du Menu Yakiniku</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🥩 Guide des Morceaux de Bœuf (avec équivalents français)</h3>
                <p className="text-purple-700 mb-4">
                  Le découpage japonais privilégie <strong>l'optimisation de la texture après grillage</strong>, 
                  contrairement au découpage français orienté vers diverses méthodes de cuisson.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-bold text-red-600 mb-2">Kalbi (カルビ)</h4>
                      <p className="text-sm text-gray-600"><em>≈ Poitrine française</em></p>
                      <p className="text-sm text-gray-700">Côtes courtes marinées, grasses et savoureuses. 
                      Le morceau emblématique du yakiniku, parfait avec du riz.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-bold text-red-600 mb-2">Rosu (ロース)</h4>
                      <p className="text-sm text-gray-600"><em>≈ Faux-filet/Entrecôte</em></p>
                      <p className="text-sm text-gray-700">Viande noble avec persillage délicat. 
                      Texture fine, idéale pour apprécier la qualité de la viande.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-bold text-red-600 mb-2">Harami (ハラミ)</h4>
                      <p className="text-sm text-gray-600"><em>≈ Hampe (diaphragme)</em></p>
                      <p className="text-sm text-gray-700">Techniquement un abat, mais texture de viande rouge. 
                      Tendre et savoureux, très populaire.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-bold text-red-600 mb-2">Tan (タン)</h4>
                      <p className="text-sm text-gray-600"><em>= Langue</em></p>
                      <p className="text-sm text-gray-700">Texture unique, croquante. Le "Tan-moto" 
                      (base de langue) est particulièrement prisé.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-bold text-red-600 mb-2">Misuji (ミスジ)</h4>
                      <p className="text-sm text-gray-600"><em>≈ Partie du paleron</em></p>
                      <p className="text-sm text-gray-700">Morceau rare avec marbrure exceptionnelle. 
                      Fondant et saveur intense.</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-bold text-red-600 mb-2">Zabuton (ザブトン)</h4>
                      <p className="text-sm text-gray-600"><em>≈ Basse côte premium</em></p>
                      <p className="text-sm text-gray-700">Forme carrée ("coussin"), persillage magnifique. 
                      Morceau de luxe fondant.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍖 L'Univers des Hormones : De "Déchets" à Délicatesses</h3>
              <p className="text-gray-700 mb-4">
                Parallèle avec la tradition française des <em>abats nobles</em> : ris de veau, foie, 
                andouillettes. Le Japon a développé une culture similaire avec les organes de bœuf.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-3">🥩 Hormones Populaires</h4>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• <strong>Mino (ミノ)</strong> - Premier estomac, croquant</li>
                    <li>• <strong>Shimacho (シマチョウ)</strong> - Gros intestin, riche</li>
                    <li>• <strong>Lever (レバー)</strong> - Foie, crémeux</li>
                    <li>• <strong>Senmai (センマイ)</strong> - Troisième estomac, texture unique</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-3">🌱 Philosophie "Mottainai"</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• <strong>Zéro gaspillage</strong> - Utiliser chaque partie</li>
                    <li>• <strong>Créativité culinaire</strong> - Innovation née de la contrainte</li>
                    <li>• <strong>Respect de l'animal</strong> - Honorer le sacrifice</li>
                    <li>• <strong>Accessibilité</strong> - Démocratiser la viande</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Sauces et Accompanements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Art des Sauces : Les "Tare" Magiques</h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-6 border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-4">🍯 Les Trois Piliers du Tare</h3>
                <p className="text-amber-700 mb-4">
                  Contrairement aux marinades françaises <em>avant cuisson</em>, les sauces yakiniku 
                  sont appliquées <em>après grillage</em>, préservant ainsi la pureté du goût de la viande.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-900 mb-2">🍱 Tare Shoyu</h4>
                    <p className="text-sm text-amber-700 mb-2">Base soja + sucre + mirin + fruits</p>
                    <ul className="text-xs text-amber-600 space-y-1">
                      <li>• Équilibre sucré-salé parfait</li>
                      <li>• Complexité aromatique</li>
                      <li>• Polyvalent (bœuf, porc)</li>
                      <li>• Accord parfait avec riz</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-900 mb-2">🍜 Tare Miso</h4>
                    <p className="text-sm text-amber-700 mb-2">Miso fermenté + ail + épices</p>
                    <ul className="text-xs text-amber-600 space-y-1">
                      <li>• Umami profond et riche</li>
                      <li>• Idéal pour hormones</li>
                      <li>• Fermentation complexe</li>
                      <li>• Tradition millénaire</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-bold text-gray-900 mb-2">🧂 Tare Shio</h4>
                    <p className="text-sm text-amber-700 mb-2">Sel + huile sésame + citron</p>
                    <ul className="text-xs text-amber-600 space-y-1">
                      <li>• Pureté des saveurs</li>
                      <li>• Révèle la qualité viande</li>
                      <li>• Fraîcheur du citron</li>
                      <li>• Élégance minimaliste</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Accords et Boissons */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Art des Accords : Boissons et Yakiniku</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-4">🍺 Accords Classiques Japonais</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🍻 Boissons Traditionnelles</h4>
                    <ul className="space-y-3 text-sm text-blue-700">
                      <li>
                        <strong>Bière japonaise</strong> - Sapporo, Asahi, Kirin
                        <p className="text-xs text-blue-600">Fraîcheur qui nettoie le palais entre chaque bouchée</p>
                      </li>
                      <li>
                        <strong>Highball (whisky + soda)</strong>
                        <p className="text-xs text-blue-600">Sec et rafraîchissant, n'interfère pas avec les saveurs</p>
                      </li>
                      <li>
                        <strong>Thé Oolong</strong> - 烏龍茶
                        <p className="text-xs text-blue-600">Polyphénols qui aident à digérer les graisses</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🍷 Sélection Française Recommandée</h4>
                    <ul className="space-y-3 text-sm text-blue-700">
                      <li>
                        <strong>Bordeaux (Cabernet Sauvignon)</strong>
                        <p className="text-xs text-blue-600">Tannins qui s'harmonisent avec le gras du wagyu</p>
                      </li>
                      <li>
                        <strong>Bourgogne (Pinot Noir puissant)</strong>
                        <p className="text-xs text-blue-600">Acidité qui équilibre la richesse des viandes</p>
                      </li>
                      <li>
                        <strong>Champagne/Crémant</strong>
                        <p className="text-xs text-blue-600">Bulles rafraîchissantes pour viandes délicates (tan)</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🥂 Science des Accords</h3>
              <p className="text-gray-700 mb-6">
                L'accord parfait yakiniku-boisson repose sur la <strong>complémentarité des textures</strong> 
                et la <strong>purification du palais</strong>. Les graisses fondues du wagyu créent un film 
                en bouche que seules certaines boissons peuvent efficacement nettoyer.
              </p>
            </section>

            {/* Wagyu Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Le Wagyu : Summum de l'Art Yakiniku</h2>
              
              <div className="bg-gradient-to-r from-gold-50 to-yellow-50 p-6 rounded-lg mb-6 border border-yellow-300">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">👑 Qu'est-ce qui rend le Wagyu si Exceptionnel ?</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🔬 Science du "Sashi" (霜降り)</h4>
                    <ul className="space-y-2 text-sm text-yellow-700">
                      <li>• <strong>Point de fusion 25°C</strong> - Fond à température corporelle</li>
                      <li>• <strong>Acides gras insaturés</strong> - Oléique principalement</li>
                      <li>• <strong>Marbrure uniforme</strong> - Répartition génétique parfaite</li>
                      <li>• <strong>"Wagyu-kō"</strong> - Arôme unique libéré par fusion</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">💰 Justification du Prix Premium</h4>
                    <ul className="space-y-2 text-sm text-yellow-700">
                      <li>• <strong>Lignées pures</strong> - Sélection sur plusieurs générations</li>
                      <li>• <strong>Élevage 30 mois</strong> - Double de l'élevage standard</li>
                      <li>• <strong>Alimentation spécialisée</strong> - Grains nobles, soins individuels</li>
                      <li>• <strong>Rendement faible</strong> - Rareté économique</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🥩 Morceaux de Wagyu à Privilégier en Yakiniku</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Sirloin (サーロイン)</h4>
                  <p className="text-sm text-red-700">Le "roi des viandes". Persillage parfait, 
                  tendreté exceptionnelle. Idéal en tranches épaisses.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Rib Rosu (リブロース)</h4>
                  <p className="text-sm text-red-700">Marbrure spectaculaire, saveur équilibrée. 
                  Fond littéralement en bouche.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Sankaku Bara (三角バラ)</h4>
                  <p className="text-sm text-red-700">Partie la plus grasse et savoureuse du ventre. 
                  Expérience gustative intense.</p>
                </div>
              </div>
            </section>

            {/* Etiquette et Règles */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Étiquette et Règles Sacrées du Yakiniku</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg mb-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ LA Règle Absolue : Séparation Tongs/Baguettes</h3>
                <p className="text-red-700 mb-4">
                  Cette règle n'est pas une simple convention sociale mais un <strong>impératif sanitaire vital</strong>. 
                  Le non-respect peut être perçu comme de l'ignorance dangereuse pour la santé de tous.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-red-300">
                    <h4 className="font-bold text-red-600 mb-3">🔴 INTERDIT - Contamination Croisée</h4>
                    <ul className="space-y-2 text-sm text-red-600">
                      <li>• Utiliser les mêmes tongs pour viande crue ET cuite</li>
                      <li>• Toucher la viande cuite avec des tongs "sales"</li>
                      <li>• Partager les tongs sans les nettoyer</li>
                      <li>• Mélanger les ustensiles de différentes personnes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-green-300">
                    <h4 className="font-bold text-green-600 mb-3">✅ CORRECT - Protocole Sécurisé</h4>
                    <ul className="space-y-2 text-sm text-green-600">
                      <li>• Tongs uniquement pour viande crue</li>
                      <li>• Baguettes personnelles pour viande cuite</li>
                      <li>• Nettoyage systématique des ustensiles</li>
                      <li>• Respect de l'espace de gril des autres</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-2">🎌 Philosophie Sociale Japonaise</h4>
                <p className="text-blue-700 text-sm">
                  Cette étiquette reflète l'équilibre japonais entre <strong>liberté individuelle</strong> 
                  (chacun cuit comme il veut) et <strong>responsabilité collective</strong> (préserver la 
                  santé de tous). C'est un microcosme de la société japonaise : harmonie par la discipline personnelle.
                </p>
              </div>
            </section>
            {/* Conclusion */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Votre Voyage dans l'Univers du Yakiniku Commence Maintenant</h2>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg mb-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4">🌟 Plus qu'un Repas : Une Fenêtre sur l'Âme Japonaise</h3>
                <p className="text-purple-700 mb-4">
                  Le yakiniku transcende la simple gastronomie pour devenir une <strong>expérience anthropologique complète</strong>. 
                  C'est un art de vivre qui révèle les valeurs fondamentales du Japon : le respect de la qualité, 
                  l'importance du processus partagé, et la transformation de contraintes en innovations créatives.
                </p>
                
                <p className="text-purple-700 mb-4">
                  Cette tradition née de l'adaptation culturelle illustre parfaitement la capacité japonaise 
                  à <strong>adopter, adapter et perfectionner</strong> les influences extérieures. D'origine coréenne, 
                  enrichi par la philosophie bouddhiste du non-gaspillage, magnifié par l'art culinaire japonais 
                  et les sauces fermentées ancestrales, le yakiniku est devenu une expression authentiquement nippone.
                </p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Votre Première Expérience Yakiniku</h3>
              <p className="text-gray-700 mb-4">
                Armé de cette connaissance approfondie - des règles d'or de la commande aux techniques de grillage, 
                de l'étiquette sacrée des ustensiles à la science du wagyu - vous êtes désormais prêt à vivre 
                pleinement l'expérience yakiniku. Chaque visite dans un restaurant japonais deviendra une 
                <strong>immersion culturelle authentique</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-3">🔥 L'Invitation à la Découverte</h4>
                <p className="text-amber-700 mb-4">
                  Que vous choisissiez l'élégance moderne de <strong>Gyukaku</strong> ou l'authenticité populaire 
                  d'<strong>Anan</strong>, chaque restaurant de yakiniku vous invite à participer à un rituel 
                  millénaire de partage et de communion. Laissez-vous guider par les flammes, savourez chaque 
                  texture, et découvrez pourquoi le yakiniku reste l'une des expériences culinaires les plus 
                  profondément satisfaisantes au monde.
                </p>
                
                <p className="text-amber-700 text-sm">
                  <em>Votre aventure yakiniku commence maintenant. Chaque bouchée raconte une histoire, 
                  chaque repas crée des souvenirs, chaque visite approfondit votre compréhension de l'art 
                  de vivre japonais.</em>
                </p>
              </div>
            </section>

            {/* Navigation */}
            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Link 
                  href="/guides/articles"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Tous les Articles de Fond
                </Link>
                
                <div className="flex space-x-4">
                  <Link 
                    href="/type-plat/yakiniku"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explorer les Yakiniku
                  </Link>
                  <Link 
                    href="/chaines/gyukaku"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Découvrir Gyukaku
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
