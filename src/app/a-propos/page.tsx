import Link from 'next/link';
import { ArrowLeft, Heart, Users, Globe, Target, BookOpen, Star } from 'lucide-react';
import PageViewTracker from '../../components/PageViewTracker';

export default function AProposPage() {  return (
    <>
      <PageViewTracker 
        pageName="a-propos" 
        pageCategory="information" 
        pageType="about_page" 
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              À Propos de Notre Mission
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Le premier guide français complet et authentique des chaînes de restaurants japonais
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Notre Mission</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Nous créons <strong>le guide français le plus complet et authentique</strong> des chaînes de restaurants japonais, 
              spécialement conçu pour les voyageurs francophones au Japon.
            </p>
            <p className="mb-4">
              Face à la richesse parfois intimidante de la gastronomie japonaise, nous offrons un pont culturel 
              entre la France et le Japon, transformant l'anxiété de l'inconnu en excitement de la découverte.
            </p>
            <p>
              Notre objectif est simple : permettre à chaque voyageur francophone de vivre une expérience 
              culinaire authentique et sans stress dans les chaînes de restaurants japonais.
            </p>
          </div>
        </div>

        {/* Why This Site Exists */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi Ce Site Existe</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Le Défi</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Les menus uniquement en japonais</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Les systèmes de commande complexes (distributeurs, écrans tactiles)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>L'absence d'informations fiables en français</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Les spécificités culturelles et les régimes alimentaires</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Notre Solution</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Traductions complètes français-japonais-romaji</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Guides visuels étape par étape</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Informations culturelles authentiques</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  <span>Guides spécialisés pour chaque régime alimentaire</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Notre Approche</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Recherche Culturelle</h3>
              <p className="text-gray-600">
                Chaque chaîne est étudiée dans son contexte historique et culturel japonais, 
                pour une compréhension authentique.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perspective Française</h3>
              <p className="text-gray-600">
                Nous adaptons les explications aux références culturelles françaises, 
                facilitant la compréhension et l'appropriation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expérience Pratique</h3>
              <p className="text-gray-600">
                Tous nos guides sont basés sur l'expérience réelle, testés et validés 
                pour garantir leur utilité sur le terrain.
              </p>
            </div>
          </div>
        </div>

        {/* Coverage */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre Couverture Complète</h2>
          <div className="grid md:grid-cols-2 gap-8">            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">29 Chaînes Documentées</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <span>• Gyūdon (3 chaînes)</span>
                <span>• Ramen (4 chaînes)</span>
                <span>• Kaiten-zushi (3 chaînes)</span>
                <span>• Curry japonais (3 chaînes)</span>
                <span>• Tempura (2 chaînes)</span>
                <span>• Udon/Soba (4 chaînes)</span>
                <span>• Family restaurants (3 chaînes)</span>
                <span>• Burgers japonais (3 chaînes)</span>
                <span>• Cuisine chinoise (3 chaînes)</span>
                <span>• Izakaya (3 chaînes)</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Guides Spécialisés</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Méthodes de commande détaillées</li>
                <li>✓ Guides pour régimes spéciaux</li>
                <li>✓ Contexte culturel et historique</li>
                <li>✓ Traductions trilingues complètes</li>
                <li>✓ Conseils pratiques terrain</li>
                <li>✓ Comparaisons entre chaînes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">Authenticité</h3>
              <p className="text-gray-700 mb-6">
                Nous privilégions toujours l'exactitude culturelle et la fidélité aux traditions japonaises, 
                tout en les rendant accessibles aux francophones.
              </p>
              
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Accessibilité</h3>
              <p className="text-gray-700">
                Chaque information est présentée de manière claire et utilisable, 
                même pour les voyageurs découvrant le Japon pour la première fois.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">Respect Culturel</h3>
              <p className="text-gray-700 mb-6">
                Nous promouvons une approche respectueuse de la culture japonaise, 
                encourageant l'ouverture d'esprit et la curiosité.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Excellence</h3>
              <p className="text-gray-700">
                Nous nous engageons à maintenir le plus haut niveau de qualité 
                dans nos recherches, traductions et recommandations.
              </p>
            </div>
          </div>        </div>
      </div>
      </div>
    </>
  );
}
