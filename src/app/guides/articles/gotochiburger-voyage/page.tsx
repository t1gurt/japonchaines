import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, MapPin, Star, Award } from 'lucide-react';
import GuideViewTracker from '../../../../components/GuideViewTracker';

export default function GotochiburgerPage() {
  const article = {
    title: 'Gotochiburger : Le Voyage Gastronomique Régional',
    subtitle: 'Découvrir le Japon à Travers ses Spécialités Burger Locales',
    publishDate: '2025-01-20',
    readTime: '12 min',
    author: 'Équipe Japanese Chains',
    category: 'Culture Régionale',
    tags: ['Gotōchi', 'Régions', 'Spécialités', 'Voyage culinaire']
  };

  const gotochiConcept = {
    meaning: 'ご当地 (gotōchi) = "de ce lieu particulier"',
    philosophy: 'Fierté locale exprimée à travers les spécialités culinaires',
    importance: 'Élément central de l\'identité régionale japonaise',
    evolution: 'Du traditionnel au moderne : même les burgers deviennent gotōchi'
  };

  const regions = [
    {
      region: 'Kyushu',
      prefecture: 'Nagasaki',
      burger: 'Sasebo Burger (佐世保バーガー)',
      origin: '1950s - Base navale américaine',
      characteristics: ['Fait main à la commande', 'Ingrédients locaux', 'Sauce secrète maison', 'Volume généreux'],
      story: 'Né de la rencontre entre marins américains et artisans japonais, le Sasebo Burger représente la première "japonisation" du hamburger. Chaque restaurant garde jalousement sa recette de sauce.',
      specialty: 'Lucky Burger, Big Man Burger',
      price: '¥800-1500',
      recognition: '⭐⭐⭐⭐⭐ Précurseur historique'
    },
    {
      region: 'Kansai',
      prefecture: 'Hyogo',
      burger: 'Awaji Island Burger (淡路島バーガー)',
      origin: '2000s - Revitalisation agricole',
      characteristics: ['Oignons Awaji ultra-sucrés', 'Bœuf de Tajima', 'Légumes de saison', 'Simplicité raffinée'],
      story: 'L\'île d\'Awaji, réputée pour ses oignons exceptionnellement sucrés, a transformé cette spécialité en burger gourmet. La douceur naturelle des oignons élimine le besoin de sauce elaborate.',
      specialty: 'Awaji Beef & Onion Burger',
      price: '¥1200-2000',
      recognition: '🏆 Champion Gotōchi Burger 2013'
    },
    {
      region: 'Tohoku',
      prefecture: 'Fukushima',
      burger: 'Kitakata Ramen Burger (喜多方ラーメンバーガー)',
      origin: '2010s - Innovation fusion',
      characteristics: ['Pain = nouilles ramen', 'Bouillon de porc concentré', 'Char siu traditionnel', 'Fusion ultime'],
      story: 'Kitakata, célèbre pour son ramen, a créé le burger le plus innovant : les nouilles ramen pressées remplacent le pain, créant une texture unique et un goût umami incomparable.',
      specialty: 'Ramen Bun Burger',
      price: '¥900-1400',
      recognition: '💡 Innovation exceptionnelle'
    },
    {
      region: 'Kanto',
      prefecture: 'Tochigi',
      burger: 'Utsunomiya Gyoza Burger (宇都宮餃子バーガー)',
      origin: '2008 - Promotion touristique',
      characteristics: ['Gyoza frits intégrés', 'Sauce soja-vinaigre', 'Chou croquant', 'Texture contrastée'],
      story: 'Utsunomiya, capitale japonaise du gyoza, a intégré ses célèbres raviolis dans un burger. Le croustillant des gyoza contre le moelleux du pain crée une expérience sensorielle unique.',
      specialty: 'Double Gyoza Burger',
      price: '¥700-1100',
      recognition: '🥟 Spécialité emblématique'
    },
    {
      region: 'Kansai',
      prefecture: 'Kyoto',
      burger: 'Oki-tsune Burger (おきつねバーガー)',
      origin: '2015 - Tradition modernisée',
      characteristics: ['Pain = abura-age (tofu frit)', 'Garniture végétarienne', 'Sauce miso-mirin', 'Concept kitsune udon'],
      story: 'Inspiré du kitsune udon (udon au tofu frit), ce burger utilise l\'abura-age comme pain. Une création végétarienne qui honore la tradition bouddhiste de Kyoto.',
      specialty: 'Tofu Burger traditionnel',
      price: '¥600-900',
      recognition: '🦊 Innovation végétarienne'
    },
    {
      region: 'Chubu',
      prefecture: 'Shizuoka',
      burger: 'Shinkai-gyo Burger (深海魚バーガー)',
      origin: '2012 - Ressources marines locales',
      characteristics: ['Poissons des profondeurs', 'Pêche locale Suruga Bay', 'Saveurs marines intenses', 'Écologie marine'],
      story: 'La baie de Suruga, l\'une des plus profondes du Japon, offre des poissons uniques. Ces burgers valorisent la pêche locale tout en sensibilisant à la préservation marine.',
      specialty: 'Deep Sea Fish Variety',
      price: '¥1000-1600',
      recognition: '🐟 Concept écologique'
    }
  ];

  const philosophy = [
    {
      principle: 'Fierté Locale (地元の誇り)',
      description: 'Chaque gotōchi burger raconte l\'histoire de sa région',
      example: 'Sasebo : héritage militaire transformé en tradition culinaire'
    },
    {
      principle: 'Innovation Respectueuse (尊重的革新)',
      description: 'Moderniser sans trahir les traditions locales',
      example: 'Oki-tsune : tradition bouddhiste dans un format moderne'
    },
    {
      principle: 'Développement Économique (経済発展)',
      description: 'Attirer les touristes et revitaliser les économies locales',
      example: 'Awaji : agriculture locale valorisée mondialement'
    },
    {
      principle: 'Créativité Sans Limites (無限創造)',
      description: 'Expérimentation culinaire poussée à l\'extrême',
      example: 'Kitakata : nouilles comme pain, révolution conceptuelle'
    }
  ];

  const impact = [
    {
      aspect: 'Tourisme Culinaire',
      description: 'Les gotōchi burgers attirent des millions de touristes',
      data: '+300% visiteurs dans les régions phares',
      icon: '🚅'
    },
    {
      aspect: 'Économie Locale',
      description: 'Valorisation des producteurs et artisans régionaux',
      data: 'Revenus agricoles +150% dans certaines zones',
      icon: '💰'
    },
    {
      aspect: 'Innovation Culinaire',
      description: 'Laboratoire de nouvelles techniques et concepts',
      data: '200+ variétés créées depuis 2000',
      icon: '🔬'
    },
    {
      aspect: 'Identité Culturelle',
      description: 'Renforcement de l\'identité régionale moderne',
      data: 'Fierté locale mesurée +80%',
      icon: '🎌'
    }
  ];

  const tips = [
    {
      title: 'Planifier son Voyage Burger',
      advice: 'Consultez les calendriers locaux : certains burgers ne sont disponibles qu\'en saison',
      icon: '📅'
    },
    {
      title: 'Réserver à l\'Avance',
      advice: 'Les restaurants populaires de gotōchi burger affichent souvent complet',
      icon: '📞'
    },
    {
      title: 'Respecter les Traditions',
      advice: 'Chaque burger a ses codes : informez-vous sur la méthode de dégustation recommandée',
      icon: '🙏'
    },
    {
      title: 'Photographier avec Respect',
      advice: 'Demandez l\'autorisation avant de photographier. Certains restaurants préfèrent la discrétion',
      icon: '📸'
    },
    {
      title: 'Goûter les Accompagnements',
      advice: 'Les sides sont souvent aussi uniques que le burger principal',
      icon: '🍟'
    },
    {
      title: 'Apprendre l\'Histoire',
      advice: 'Chaque gotōchi burger a une histoire fascinante. N\'hésitez pas à questionner',
      icon: '📚'
    }
  ];

  return (
    <>
      <GuideViewTracker guideName="gotochiburger-voyage" />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Accueil</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides" className="text-gray-500 hover:text-red-600">Guides</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides/articles" className="text-gray-500 hover:text-red-600">Articles</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-900">Gotōchi Burger</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl mr-4">🍔</span>
                <span className="text-6xl mr-4">🗾</span>
                <span className="text-6xl">🎌</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                {article.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {article.author}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction + Concept Gotōchi */}
          <div className="mb-16">
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Au Japon, le concept de <strong>gotōchi</strong> (ご当地) transcende la simple spécialité locale. 
                Il s'agit d'un véritable marqueur d'identité régionale, une fierté territoriale qui s'exprime 
                à travers des créations culinaires uniques. Et quand cette philosophie rencontre l'univers du 
                hamburger, les résultats dépassent toute imagination.
              </p>
              
              <p className="text-gray-700 mb-6">
                Des burger-nouilles ramen de Kitakata aux créations marines des profondeurs de Suruga, 
                chaque région japonaise a développé sa propre interprétation du hamburger, créant un 
                véritable atlas gastronomique qui transforme le voyage au Japon en odyssée culinaire.
              </p>
            </div>

            {/* Gotōchi Concept Box */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprendre le Gotōchi (ご当地)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-indigo-700 mb-3">Signification</h4>
                  <p className="text-gray-700 mb-4">{gotochiConcept.meaning}</p>
                  
                  <h4 className="font-bold text-indigo-700 mb-3">Philosophie</h4>
                  <p className="text-gray-700">{gotochiConcept.philosophy}</p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700 mb-3">Importance</h4>
                  <p className="text-gray-700 mb-4">{gotochiConcept.importance}</p>
                  
                  <h4 className="font-bold text-indigo-700 mb-3">Évolution</h4>
                  <p className="text-gray-700">{gotochiConcept.evolution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Specialties */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tour du Japon en Burgers Régionaux</h2>
            <div className="space-y-8">
              {regions.map((region, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-red-600 mr-3" />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{region.burger}</h3>
                          <p className="text-gray-600">{region.region} • {region.prefecture}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-1">{region.origin}</div>
                        <div className="text-lg font-bold text-red-600">{region.price}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="bg-white px-3 py-1 rounded-full text-gray-700">{region.recognition}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">{region.story}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Caractéristiques</h4>
                        <ul className="space-y-2">
                          {region.characteristics.map((char, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm text-gray-600">{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Spécialité</h4>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{region.specialty}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">La Philosophie du Gotōchi Burger</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {philosophy.map((principle, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{principle.principle}</h3>
                  <p className="text-gray-700 mb-4">{principle.description}</p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                    <span className="text-sm font-semibold text-green-700">Exemple : </span>
                    <span className="text-sm text-gray-600">{principle.example}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact sur le Japon Contemporain</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impact.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.aspect}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                    <span className="text-sm font-bold text-blue-700">{item.data}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Traditional vs Modern */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Évolution : Du Traditionnel au Burger</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏮</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Tradition Ancestrale</h3>
                  <p className="text-sm text-gray-600">
                    Spécialités locales transmises de génération en génération, 
                    liées aux ressources et techniques régionales.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Adaptation Créative</h3>
                  <p className="text-sm text-gray-600">
                    Fusion respectueuse entre héritage local et format moderne, 
                    créant de nouvelles traditions authentiques.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation Globale</h3>
                  <p className="text-sm text-gray-600">
                    Influence internationale des concepts japonais, 
                    inspirant d'autres pays à créer leurs propres gotōchi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Tips */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Guide du Voyageur Gotōchi Burger</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{tip.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{tip.advice}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Signification Culturelle Profonde</h2>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                Les gotōchi burgers représentent bien plus qu'une curiosité culinaire. Ils incarnent 
                la capacité remarquable du Japon à préserver son identité tout en embrassant la modernité. 
                Chaque burger raconte une histoire de résistance créative face à la mondialisation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-3">Pour les Régions</h4>
                  <p className="text-sm text-gray-600">
                    Un moyen de faire connaître leur patrimoine, d'attirer les touristes 
                    et de créer de nouveaux emplois autour de l'identité locale.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-purple-700 mb-3">Pour les Voyageurs</h4>
                  <p className="text-sm text-gray-600">
                    Une invitation à découvrir le "vrai" Japon, celui des territoires 
                    et des communautés qui façonnent l'âme du pays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusion : Plus qu'un Burger, une Philosophie</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 mb-6">
                Le phénomène gotōchi burger illustre parfaitement l'art japonais de la réinvention respectueuse. 
                En transformant un symbole de la mondialisation en vecteur d'expression locale, le Japon prouve 
                que la diversité culturelle peut non seulement survivre à la globalisation, mais s'en nourrir 
                pour s'épanouir davantage.
              </p>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                <p className="text-gray-700 font-medium">
                  <strong>Message aux voyageurs français :</strong> Goûter un gotōchi burger, c'est découvrir 
                  l'âme d'une région japonaise condensée dans quelques bouchées. C'est comprendre que 
                  l'authenticité ne s'oppose pas à l'innovation, mais peut s'en servir pour se réinventer 
                  et se transmettre aux générations futures.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/guides/articles"
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux articles
              </Link>
              
              <div className="flex space-x-4">
                <Link
                  href="/type-plat/burgers"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Explorer les burgers japonais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
