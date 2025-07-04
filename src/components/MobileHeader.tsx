import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface MobileHeaderProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ isOpen, toggleMenu }) => {
  return (
    <header className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-30">
      <div className="relative flex items-center justify-between h-16 px-4">
        {/* Logo modernisé - centré */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white text-lg">🍜</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                JaponChaines
              </span>
              <span className="text-xs text-gray-500 -mt-1">Guide des restaurants</span>
            </div>
          </Link>
        </div>

        {/* Bouton de navigation centré verticalement */}
        <div className="absolute inset-y-0 right-4 flex items-center">
          <button
            onClick={toggleMenu}
            className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all duration-300 group"
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              {isOpen ? (
                <X className="w-6 h-6 text-red-600 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Barre de progression subtile */}
      <div className="h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
    </header>
  );
};

export default MobileHeader;
