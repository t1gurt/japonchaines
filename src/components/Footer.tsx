import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-red-400">🍜 Chain Japanese Restaurants</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre guide complet des chaînes de restaurants japonais. 
              Découvrez, commandez et savourez la cuisine japonaise en toute confiance.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chaines" className="text-gray-300 hover:text-white transition-colors">
                  Toutes les chaînes
                </Link>
              </li>
              <li>
                <Link href="/type-plat" className="text-gray-300 hover:text-white transition-colors">
                  Par type de plat
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 hover:text-white transition-colors">
                  Guides pratiques
                </Link>
              </li>
              <li>
                <Link href="/guides/comment-commander" className="text-gray-300 hover:text-white transition-colors">
                  Comment commander
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides et ressources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/culture-etiquette" className="text-gray-300 hover:text-white transition-colors">
                  Culture & Étiquette
                </Link>
              </li>
              <li>
                <Link href="/guides/regimes-alimentaires" className="text-gray-300 hover:text-white transition-colors">
                  Régimes alimentaires
                </Link>
              </li>
              <li>
                <Link href="/guides/articles" className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation */}        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Chain Japanese Restaurants. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
