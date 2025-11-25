import Link from 'next/link';
import { ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import PageViewTracker from '../../components/PageViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Questions | Japonchaines",
  description: "Contactez Japonchaines. Questions, suggestions, partenariats : nous sommes à votre écoute.",
  keywords: "contact Japonchaines, questions, suggestions, partenariat, support",
  openGraph: {
    title: "Contact | Questions | Japonchaines",
    description: "Contactez Japonchaines. Questions, suggestions, partenariats : nous sommes à votre écoute.",
    type: "website",
    locale: "fr_FR",
    siteName: "Japonchaines - Guide des Restaurants Japonais"
  },
  alternates: {
    canonical: "/contact"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ContactPage() {
  return (
    <>
      <PageViewTracker
        pageName="contact"
        pageCategory="information"
        pageType="contact_page"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-50 p-4 rounded-full">
                  <Mail className="w-12 h-12 text-red-600" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contactez-nous
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Une question sur une chaîne de restaurant ? Une suggestion pour améliorer notre guide ?
                N'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
          {/* Avant de nous contacter - Card */}
          <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-red-500" />
              Avant de nous contacter
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Consultez nos guides pratiques pour les questions fréquentes</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Vérifiez les pages des chaînes pour les horaires et menus spécifiques</span>
              </li>
            </ul>
          </div>

          {/* Google Form */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfJwe6JSSK5yLTYz0YXNtXWfPeaTuAkPJ-1uMSbzCyzm0tM5g/viewform?embedded=true"
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Formulaire de contact"
            >
              Chargement…
            </iframe>
          </div>

          {/* Back Link */}
          <div className="text-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors hover:bg-gray-100 px-4 py-2 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}