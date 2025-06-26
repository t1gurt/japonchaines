import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Big Echo (ビッグエコー) | Karaoke | Guide Restaurants Japonais',
  description: 'Guide complet de Big Echo - Chaîne de karaoke populaire avec équipements modernes et ambiance conviviale. Karaoke authentique japonais.',
  keywords: [
    'big echo', 'ビッグエコー', 'karaoke', 'chant japonais',
    'équipements modernes', 'ambiance conviviale', 'karaoke populaire',
    'divertissement japonais', 'salles privées', 'karaoke box'
  ],
  openGraph: {
    title: 'Big Echo (ビッグエコー) | Karaoke Populaire',
    description: 'Découvrez Big Echo, chaîne de karaoke populaire avec équipements modernes et ambiance conviviale',
    type: 'article',
    url: '/chaines/big-echo',
  },
  alternates: {
    canonical: '/chaines/big-echo',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BigEchoPage() {
  return (
    <>
      <ChainViewTracker chainName="big-echo" chainCategory="karaoke" />
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
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Big Echo</h1>
                <p className="text-gray-600">ビッグエコー</p>
                <div className="flex items-center mt-2">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
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
                <h2 className="text-xl font-semibold text-gray-900 mb-4">À propos de Big Echo</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Big Echo est l'une des chaînes de karaoke les plus populaires du Japon, 
                  offrant une expérience de divertissement complète avec des équipements 
                  modernes et une ambiance conviviale.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Avec ses salles privées confortables et son système audio de haute qualité, 
                  Big Echo est l'endroit idéal pour chanter entre amis ou en famille.
                </p>
              </div>

              {/* Informations pratiques */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-purple-600" />
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
                      <div>30 min: ¥400-600</div>
                      <div>1 heure: ¥800-1200</div>
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
                    <Music className="w-4 h-4 mr-3 text-purple-600" />
                    Karaoke privé
                  </div>
                  <div className="flex items-center text-sm">
                    <Gamepad2 className="w-4 h-4 mr-3 text-purple-600" />
                    Équipements modernes
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-3 text-purple-600" />
                    Salles de groupe
                  </div>
                </div>
              </div>

              {/* Catégorie */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Catégorie</h3>
                <Link 
                  href="/karaoke"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
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