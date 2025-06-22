import Link from 'next/link';
import { Mail, MessageCircle, Clock, MapPin, Send, Heart, Users, Star } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-red-600">🍜 Chain Japanese Restaurants</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/type-plat" className="text-gray-700 hover:text-red-600">
                Par Type de Plat
              </Link>
              <Link href="/chaines" className="text-gray-700 hover:text-red-600">
                Par Chaîne A-Z
              </Link>
              <Link href="/guides" className="text-gray-700 hover:text-red-600">
                Guides Pratiques
              </Link>
              <Link href="/a-propos" className="text-gray-700 hover:text-red-600">
                À Propos
              </Link>
              <Link href="/contact" className="text-red-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une question sur un restaurant ? Une suggestion d'amélioration ? 
              Nous sommes là pour vous aider à profiter au mieux de votre expérience culinaire au Japon.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="question-restaurant">Question sur un restaurant</option>
                    <option value="suggestion-chaine">Suggestion d'une nouvelle chaîne</option>
                    <option value="correction-info">Correction d'information</option>
                    <option value="probleme-technique">Problème technique</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant concerné (optionnel)
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Ex: Yoshinoya, Sushiro, CoCo Ichibanya..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Décrivez votre question ou suggestion en détail..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                    Je souhaite recevoir occasionnellement des informations sur les nouvelles chaînes 
                    et mises à jour du site (maximum 1 email par mois)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Informations de contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">contact@japonchaines.fr</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Temps de réponse</div>
                    <div className="text-gray-600">24-48 heures en moyenne</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Langues</div>
                    <div className="text-gray-600">Français, Japonais, Anglais</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQ */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Questions fréquentes
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Comment ajouter une nouvelle chaîne ?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Envoyez-nous le nom de la chaîne et quelques informations de base. 
                    Nous évaluerons son ajout au site.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Une information est incorrecte ?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Contactez-nous en précisant la chaîne et l'information à corriger. 
                    Nous mettons à jour rapidement.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Le site est-il gratuit ?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Oui, complètement ! Notre mission est d'aider les francophones 
                    au Japon à naviguer dans les restaurants.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Notre communauté
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-700">Utilisateurs mensuels</span>
                  </div>
                  <span className="font-semibold text-gray-900">2,500+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-700">Avis positifs</span>
                  </div>
                  <span className="font-semibold text-gray-900">98%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-700">Restaurants visités</span>
                  </div>
                  <span className="font-semibold text-gray-900">10,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Merci de faire partie de notre communauté !
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Votre feedback nous aide à améliorer constamment le site pour tous les francophones au Japon. 
              Ensemble, découvrons les merveilles de la cuisine japonaise !
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/chaines"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Découvrir les chaînes
              </Link>
              <Link
                href="/guides"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                Consulter les guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
