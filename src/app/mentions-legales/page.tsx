import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: "Mentions Légales | Japonchaines",
    description: "Mentions légales de Japonchaines.net. Informations sur l'éditeur, l'hébergeur et la propriété intellectuelle.",
    robots: {
        index: false,
        follow: true
    }
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">
                        Mentions Légales
                    </h1>

                    <div className="prose prose-red max-w-none space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Éditeur du Site</h2>
                            <p>
                                Le site Japonchaines.net est édité à titre personnel.
                            </p>
                            <p className="mt-2">
                                <strong>Contact :</strong><br />
                                Email : <a href="mailto:contact@japonchaines.net" className="text-red-600 hover:underline">contact@japonchaines.net</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
                            <p>
                                Ce site est hébergé par Vercel Inc.<br />
                                340 S Lemon Ave #4133<br />
                                Walnut, CA 91789<br />
                                États-Unis
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Propriété Intellectuelle</h2>
                            <p>
                                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Japonchaines.net, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Japonchaines.net.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Responsabilité</h2>
                            <p>
                                Les informations fournies sur Japonchaines.net le sont à titre informatif. L'éditeur ne saurait garantir l'exactitude, la complétude et l'actualité des informations diffusées sur le site.
                                En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
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
