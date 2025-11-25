import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Japonchaines",
    description: "Politique de confidentialité de Japonchaines.net. Informations sur la collecte de données, les cookies et vos droits.",
    robots: {
        index: false,
        follow: true
    }
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Politique de Confidentialité
                    </h1>

                    <div className="prose prose-red max-w-none space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                La présente politique de confidentialité décrit comment Japonchaines.net collecte, utilise et protège vos informations lorsque vous utilisez notre site web.
                                Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Cookies et Technologies de Suivi</h2>
                            <p>
                                Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu.
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site.</li>
                                <li><strong>Cookies analytiques (Google Analytics) :</strong> Nous aident à comprendre comment les visiteurs interagissent avec le site.</li>
                                <li><strong>Cookies publicitaires (Google AdSense) :</strong> Utilisés pour afficher des publicités pertinentes. Google utilise des cookies pour diffuser des annonces en fonction de vos visites antérieures sur notre site ou d'autres sites Web.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Collecte de Données</h2>
                            <p>
                                Nous ne collectons des informations personnelles (comme votre adresse e-mail) que lorsque vous nous les fournissez volontairement, par exemple en nous contactant par e-mail.
                                Ces informations sont utilisées uniquement pour répondre à votre demande.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Vos Droits</h2>
                            <p>
                                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données.
                                Pour exercer ces droits, veuillez nous contacter à contact@japonchaines.net.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link
                            href="/"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
