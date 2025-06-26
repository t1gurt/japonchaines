import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karaoke Kan (カラオケ館) | Karaoke | Guide Restaurants Japonais',
  description: 'Guide complet de Karaoke Kan - Chaîne de karaoke avec salles privées et équipements de qualité. Expérience karaoke authentique japonaise.',
  keywords: [
    'karaoke kan', 'カラオケ館', 'karaoke', 'salles privées',
    'équipements qualité', 'expérience authentique', 'chant japonais',
    'divertissement', 'karaoke box', 'ambiance conviviale'
  ],
  openGraph: {
    title: 'Karaoke Kan (カラオケ館) | Karaoke de Qualité',
    description: 'Découvrez Karaoke Kan, chaîne de karaoke avec salles privées et équipements de qualité',
    type: 'article',
    url: '/chaines/karaoke-kan',
  },
  alternates: {
    canonical: '/chaines/karaoke-kan',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KaraokeKanPage() {
  return (
    <>
      <ChainViewTracker chainName="karaoke-kan" chainCategory="karaoke" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/karaoke" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux Karaokés
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Karaoke Kan</h1>
                <p className="text-gray-600">カラオケ館</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Karaoke
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos de Karaoke Kan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Karaoke Kan est une chaîne de karaoke réputée pour ses salles privées 
                  confortables et ses équipements de haute qualité, offrant une expérience 
                  karaoke authentique dans tout le Japon.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Avec son service attentionné et ses installations modernes, 
                  Karaoke Kan est l'endroit parfait pour s'amuser entre amis ou célébrer des occasions spéciales.
                </p>
              </div>

              {/* Informations pratiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-blue-600" />
                  Informations pratiques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Horaires</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Généralement 11h00 - 2h00
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Prix indicatifs</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>30 min: ¥450-650</div>
                      <div>1 heure: ¥900-1300</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Services */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Music className="w-4 h-4 mr-3 text-blue-600" />
                    Karaoke de qualité
                  </div>
                  <div className="flex items-center text-sm">
                    <Gamepad2 className="w-4 h-4 mr-3 text-blue-600" />
                    Équipements premium
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-3 text-blue-600" />
                    Salles privées
                  </div>
                </div>
              </div>

              {/* Catégorie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégorie</h3>
                <Link 
                  href="/karaoke"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Music className="w-4 h-4 mr-2" />
                  Karaoke
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}