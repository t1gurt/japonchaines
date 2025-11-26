'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Respect de votre vie privée
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et diffuser des publicités personnalisées.
                        En cliquant sur « Accepter », vous consentez à notre utilisation des cookies.
                        Vous pouvez consulter notre{' '}
                        <a href="/politique-de-confidentialite" className="text-red-600 hover:underline">
                            Politique de Confidentialité
                        </a>{' '}
                        pour en savoir plus.
                    </p>
                </div>
                <div className="flex flex-row gap-3 w-full md:w-auto">
                    <button
                        onClick={handleReject}
                        className="flex-1 md:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium whitespace-nowrap"
                    >
                        Refuser
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium whitespace-nowrap"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
