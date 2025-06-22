import Link from 'next/link';
import { Construction, ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import PageViewTracker from '../../components/PageViewTracker';

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
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Construction className="w-16 h-16 text-orange-500" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Page en Construction
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Cette page est actuellement en cours de développement. 
                Nous travaillons pour vous offrir bientôt un moyen simple de nous contacter.
              </p>
              <div className="text-sm text-gray-500 japanese-text mb-8">
                準備中
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Revenez bientôt !
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Nous préparons une section contact complète avec :
              </p>
              <ul className="list-disc list-inside space-y-2 max-w-md mx-auto">
                <li>Formulaire de contact simple</li>
                <li>FAQ sur les restaurants japonais</li>
                <li>Suggestions d'amélioration du site</li>
                <li>Support pour vos questions</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Link>
              <Link
                href="/guides"
                className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors text-center"
              >
                Consulter nos guides
              </Link>
            </div>
          </div>
          
          {/* Temporary Info */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-900 mb-2">
                  En attendant...
                </h3>
                <p className="text-blue-800 text-sm">
                  Si vous avez des questions urgentes sur les chaînes de restaurants japonais,
                  n'hésitez pas à consulter nos guides pratiques détaillés qui contiennent
                  déjà de nombreuses réponses aux questions fréquentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}