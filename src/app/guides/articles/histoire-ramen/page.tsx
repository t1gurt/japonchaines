import Link from 'next/link';
import { BookOpen, Clock, Calendar, ArrowLeft, Globe, TrendingUp, Users, Award } from 'lucide-react';

export default function HistoireRamenPage() {
  const timeline = [
    {
      year: '1859',
      period: 'Ouverture du Japon',
      event: 'Les premiers ports s\'ouvrent au commerce international',
      description: 'L\'ouverture forcée du Japon par les \"Bateaux Noirs\" de Perry marque le début des échanges culinaires avec l\'extérieur.',
      impact: 'Première exposition aux influences culinaires étrangères'
    },
    {
      year: '1880s',
      period: 'Premières influences chinoises',
      event: 'Arrivée des immigrants chinois à Yokohama',
      description: 'Les marchands chinois apportent leurs techniques de nouilles et créent les premières échoppes de \"Nankin-soba\" (nouilles de Nankin).',
      impact: 'Introduction des techniques de fabrication de nouilles chinoises'
    },
    {
      year: '1910',
      period: 'Naissance du Ramen moderne',
      event: 'Ouverture de \"Rai-Rai Ken\" à Asakusa, Tokyo',
      description: 'Premier restaurant officiellement reconnu comme servant du \"ramen\". Le propriétaire adapte les recettes chinoises au goût japonais.',
      impact: 'Création du premier ramen \"japonais\" distinct de la cuisine chinoise'
    },
    {
      year: '1958',
      period: 'Révolution Instant',
      event: 'Invention du ramen instantané par Momofuku Ando',
      description: 'Ando crée les nouilles instantanées, révolutionnant la consommation de ramen et le rendant accessible mondialement.',
      impact: 'Démocratisation mondiale du ramen'
    },
    {
      year: '1974',
      period: 'Ère des chaînes',
      event: 'Ouverture du premier Ichiran à Fukuoka',
      description: 'Ichiran révolutionne l\'expérience ramen avec ses boxes individuels et sa philosophie du \"ramen parfait\".',
      impact: 'Standardisation et industrialisation du ramen artisanal'
    },
    {
      year: '1985',
      period: 'Expansion internationale',
      event: 'Premiers restaurants ramen aux États-Unis',
      description: 'Le ramen commence sa conquête internationale, adapté aux goûts locaux tout en préservant son essence japonaise.',
      impact: 'Globalisation et adaptation culturelle'
    },
    {
      year: '2000s',
      period: 'Renaissance artisanale',
      event: 'Nouveau mouvement des \"ramen artisans\"',
      description: 'Émergence d\'une nouvelle génération de chefs qui réinventent le ramen avec des techniques gastronomiques modernes.',
      impact: 'Élévation du ramen au rang de haute cuisine'
    }
  ];

  const regionalStyles = [
    {
      region: 'Tokyo',
      style: 'Shoyu Ramen',
      description: 'Base de sauce soja claire, bouillon léger et délicat',
      characteristics: ['Bouillon transparent', 'Goût umami subtil', 'Nouilles fines ondulées'],
      origin: 'Style originel adapté des influences chinoises',
      influence: 'Devient le standard national'
    },
    {
      region: 'Sapporo',
      style: 'Miso Ramen',
      description: 'Bouillon riche à base de pâte de soja fermentée',
      characteristics: ['Couleur dorée', 'Goût complexe et salé', 'Résistant au froid hokkaido'],
      origin: 'Invention locale pour lutter contre le froid',
      influence: 'Popularisé dans tout le Japon après 1960'
    },
    {
      region: 'Hakata (Fukuoka)',
      style: 'Tonkotsu Ramen',
      description: 'Bouillon onctueux d\'os de porc mijotés 20+ heures',
      characteristics: ['Couleur blanche laiteuse', 'Texture crémeuse', 'Goût riche en collagène'],
      origin: 'Tradition des marchands de porc de Kyushu',
      influence: 'Devient le style international dominant'
    },
    {
      region: 'Kitakata',
      style: 'Shio Ramen',
      description: 'Base de sel et bouillon de poisson, le plus pur',
      characteristics: ['Bouillon cristallin', 'Goût clean et raffiné', 'Met en valeur les ingrédients'],
      origin: 'Influence des techniques de conservation au sel',
      influence: 'Apprécié par les connaisseurs pour sa pureté'
    }
  ];

  const chainEvolution = [
    {
      chain: 'Ichiran',
      founded: '1974',
      innovation: 'Boxes individuels (yatai style)',
      philosophy: 'Concentration totale sur le goût',
      impact: 'Redéfinit l\'expérience client du ramen',
      global: '16 pays, 100+ restaurants'
    },
    {
      chain: 'Ippudo',
      founded: '1985',
      innovation: 'Ramen moderne et ambiance trendy',
      philosophy: 'Élever le ramen au niveau gastronomique',
      impact: 'Attire une nouvelle clientèle urbaine',
      global: '13 pays, 200+ restaurants'
    },
    {
      chain: 'Tenkaippin',
      founded: '1971',
      innovation: 'Bouillon ultra-épais \"kotteri\"',
      philosophy: 'Le ramen le plus riche du Japon',
      impact: 'Crée une nouvelle catégorie de gourmands',
      global: 'Principalement Japon, expansion limitée'
    }
  ];

  const culturalImpact = [
    {
      aspect: 'Social',
      description: 'Transformation d\'un plat ouvrier en phénomène culturel',
      examples: ['Queues devant les restaurants célèbres', 'Culture du \"ramen otaku\"', 'Émissions TV spécialisées']
    },
    {
      aspect: 'Économique',
      description: 'Industrie de plusieurs milliards générant emplois et tourisme',
      examples: ['50,000+ restaurants au Japon', 'Tourisme culinaire', 'Exportation mondiale']
    },
    {
      aspect: 'Artistique',
      description: 'Élévation du ramen au rang d\'art culinaire',
      examples: ['Chefs étoilés spécialisés', 'Compétitions nationales', 'Innovation constante']
    },
    {
      aspect: 'Technologique',
      description: 'Innovation constante dans la production et le service',
      examples: ['Machines à nouilles automatisées', 'Distributeurs tickets', 'Applications mobiles']
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides Pratiques</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides/articles" className="text-gray-500 hover:text-red-600">Articles de Fond</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">Histoire du Ramen</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/guides/articles" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux articles
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                🌿 Intermédiaire
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Histoire
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              L'Histoire du Ramen au Japon
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              De l'importation chinoise à l'invention japonaise : comment le ramen est devenu 
              l'âme de la street food nippone et a conquis le monde entier.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min de lecture
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                15 décembre 2024
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Culture, Histoire, Évolution culinaire
              </div>
            </div>
          </div>
          
          <div className="japanese-text text-center text-gray-500">
            ラーメンの歴史 - 中国から日本へ、そして世界へ
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-orange-900 mb-3">L'essence du voyage culinaire</h2>
            <p className="text-orange-800">
              Le ramen n'est pas qu'un simple plat de nouilles. C'est l'histoire d'une transformation culturelle extraordinaire : 
              comment un plat d'importation chinoise est devenu l'âme de la cuisine populaire japonaise, puis un phénomène mondial. 
              Cette odyssée culinaire de 150 ans révèle l'adaptabilité et le génie créatif du peuple japonais.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Les Origines : Quand la Chine Rencontre le Japon</h2>
          
          <p className="mb-6">
            L'histoire du ramen commence paradoxalement par une fermeture. Pendant plus de deux siècles, le Japon de l'ère Edo 
            (1603-1868) s'était volontairement isolé du monde sous la politique du <em>sakoku</em>. Mais en 1854, 
            les "Bateaux Noirs" du commodore Perry forcent l'ouverture du pays, déclenchant une révolution qui transformera 
            également sa cuisine.
          </p>

          <p className="mb-6">
            C'est dans le port cosmopolite de Yokohama, fraîchement ouvert au commerce international, que tout commence. 
            Les immigrants chinois, principalement de la région de Canton, apportent avec eux leur savoir-faire culinaire. 
            Ils ouvrent de petites échoppes servant des <strong>"lamian"</strong> (拉麵) - littéralement "nouilles tirées" - 
            dans un bouillon parfumé.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="italic text-blue-900">
              "Le ramen que nous connaissons aujourd'hui est né de cette rencontre entre l'héritage culinaire chinois 
              et l'ingéniosité japonaise. Chaque bol raconte cette histoire d'adaptation et d'innovation."
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-100 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Chronologie de l'Évolution du Ramen
          </h2>
          
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">
                    {event.year}
                  </div>
                </div>
                
                <div className="ml-6 flex-1">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h3>
                    <div className="text-sm text-gray-500 mb-3">{event.period}</div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-sm font-medium text-red-800">Impact :</span>
                      </div>
                      <p className="text-sm text-red-700 mt-1">{event.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Styles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Les Quatre Styles Régionaux Fondamentaux
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regionalStyles.map((style, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{style.style}</h3>
                  <div className="text-sm text-gray-500">{style.region}</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{style.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Caractéristiques :</h4>
                  <ul className="space-y-1">
                    {style.characteristics.map((char, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <h4 className="font-semibold text-yellow-900 mb-1">Origine :</h4>
                  <p className="text-sm text-yellow-800">{style.origin}</p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <h4 className="font-semibold text-green-900 mb-1">Influence :</h4>
                  <p className="text-sm text-green-800">{style.influence}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chain Evolution */}
      <div className="bg-orange-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            L'Ère des Chaînes : Industrialisation et Globalisation
          </h2>
          
          <div className="space-y-6">
            {chainEvolution.map((chain, index) => (
              <div key={index} className="bg-white border border-orange-200 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{chain.chain}</h3>
                    <div className="text-sm text-gray-500 mb-2">Fondée en {chain.founded}</div>
                    <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-medium inline-block">
                      {chain.global}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation :</h4>
                    <p className="text-sm text-gray-700 mb-3">{chain.innovation}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Philosophie :</h4>
                    <p className="text-sm text-gray-700">{chain.philosophy}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Impact :</h4>
                    <p className="text-sm text-gray-700">{chain.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Impact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Impact Culturel et Social
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culturalImpact.map((impact, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">{impact.aspect}</h3>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm">{impact.description}</p>
              
              <ul className="space-y-2">
                {impact.examples.map((example, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Héritage Vivant</h2>
          
          <p className="mb-6">
            Aujourd'hui, le ramen transcende ses origines modestes pour devenir un véritable ambassadeur culturel japonais. 
            Des ruelles de Shibuya aux food courts de New York, chaque bol raconte la même histoire extraordinaire : 
            celle d'un peuple capable de transformer l'influence étrangère en patrimoine national.
          </p>

          <p className="mb-6">
            Les chaînes comme Ichiran, Ippudo et Tenkaippin ne se contentent pas de servir des nouilles. Elles exportent 
            une expérience culturelle complète, des techniques centenaires aux innovations les plus récentes. 
            Le ramen est devenu le parfait exemple de la capacité japonaise à perfectionner, industrialiser et globaliser 
            tout en préservant l'essence originelle.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-bold text-red-900 mb-3">Vers l'Avenir</h3>
            <p className="text-red-800">
              L'histoire du ramen continue de s'écrire. Avec l'intelligence artificielle optimisant les bouillons, 
              la robotisation de la production et de nouveaux marchés s'ouvrant chaque année, le ramen prouve qu'une 
              tradition peut rester vivante en évoluant constamment. Le prochain chapitre de cette saga culinaire 
              s'écrit peut-être dans votre bol préféré.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Articles Liés
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/guides/articles/secrets-dashi" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🥣</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    Les Secrets du Dashi
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Découvrez les techniques millénaires derrière le bouillon fondamental de la cuisine japonaise.
                </p>
              </div>
            </Link>
            
            <Link href="/guides/articles/comparatif-gyudon" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🥩</span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                    Comparatif des Chaînes Gyudon
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Analyse détaillée des stratégies et philosophies des trois géants du bol de bœuf.
                </p>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/guides/articles"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Tous les articles
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
