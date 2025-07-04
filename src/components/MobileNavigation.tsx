import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, MapPin, BookOpen, MessageCircle, Info, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: NavItem[];
  accent?: string;
}

const navigationItems: NavItem[] = [
  {
    label: 'Accueil',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    accent: 'text-blue-600'
  },
  {
    label: 'Chaînes',
    href: '/chaines',
    icon: <MapPin className="w-5 h-5" />,
    accent: 'text-red-600',
    children: [
      { label: 'Toutes les chaînes', href: '/chaines', icon: <Sparkles className="w-4 h-4" />, accent: 'text-purple-600' },
      { label: 'Gyudon 🍚', href: '/type-plat/gyudon', icon: <></>, accent: 'text-orange-600' },
      { label: 'Ramen 🍜', href: '/type-plat/ramen', icon: <></>, accent: 'text-red-600' },
      { label: 'Sushi 🍣', href: '/type-plat/kaiten-zushi', icon: <></>, accent: 'text-blue-600' },
      { label: 'Udon 🍲', href: '/type-plat/udon', icon: <></>, accent: 'text-yellow-600' },
      { label: 'Tempura 🍤', href: '/type-plat/tempura', icon: <></>, accent: 'text-green-600' },
      { label: 'Yakiniku 🥩', href: '/type-plat/yakiniku', icon: <></>, accent: 'text-purple-600' },
    ]
  },
  {
    label: 'Tutoriel',
    href: '/tutorial',
    icon: <BookOpen className="w-5 h-5" />,
    accent: 'text-green-600'
  },
  {
    label: 'Guides',
    href: '/guides',
    icon: <Info className="w-5 h-5" />,
    accent: 'text-purple-600',
    children: [
      { label: 'Comment commander 🎫', href: '/guides/comment-commander', icon: <></>, accent: 'text-blue-600' },
      { label: 'Culture & Étiquette 🙏', href: '/guides/culture-etiquette', icon: <></>, accent: 'text-purple-600' },
      { label: 'Régimes alimentaires 🥗', href: '/guides/regimes-alimentaires', icon: <></>, accent: 'text-green-600' },
      { label: 'Articles 📚', href: '/guides/articles', icon: <></>, accent: 'text-indigo-600' },
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <MessageCircle className="w-5 h-5" />,
    accent: 'text-orange-600'
  },
  {
    label: 'À propos',
    href: '/a-propos',
    icon: <Info className="w-5 h-5" />,
    accent: 'text-gray-600'
  }
];

interface MobileNavigationProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, toggleMenu }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const closeMenu = () => {
    toggleMenu();
    setExpandedItems([]);
  };

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      

      {/* Mobile Menu Panel Modernisé - Fullscreen */}
      <nav
        className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-white/95 backdrop-blur-md shadow-2xl z-40 transform transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header Modernisé */}
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white text-xl">🍜</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    JaponChaines
                  </h2>
                  <p className="text-xs text-gray-500">Navigation</p>
                </div>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Items Modernisées */}
          <div className="flex-1 overflow-y-auto py-2">
            {navigationItems.map((item, index) => (
              <div key={item.label} className="px-3 mb-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 flex-1 group hover:scale-105 transform
                      ${item.accent ? `hover:bg-gradient-to-r hover:from-${item.accent.split('-')[1]}-50 hover:to-${item.accent.split('-')[1]}-100` : 'hover:bg-gray-50'}
                      hover:shadow-md border border-transparent hover:border-gray-200`}
                  >
                    <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-white transition-colors ${item.accent || 'text-gray-600'}`}>
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900">{item.label}</span>
                  </Link>
                  
                  {item.children && (
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="p-2 ml-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                      aria-label={`Développer ${item.label}`}
                    >
                      {expandedItems.includes(item.label) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Submenu Modernisé */}
                {item.children && expandedItems.includes(item.label) && (
                  <div className="ml-6 mt-2 space-y-1 pl-4 border-l-2 border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeMenu}
                        className={`flex items-center gap-2 py-2 px-3 text-sm rounded-lg transition-all duration-200 hover:scale-105 transform
                          ${child.accent ? `text-gray-600 hover:${child.accent} hover:bg-gradient-to-r hover:from-gray-50 hover:to-white` : 'text-gray-600 hover:text-red-600'}
                          hover:shadow-sm border border-transparent hover:border-gray-200`}
                      >
                        {child.icon && <span className="opacity-60">{child.icon}</span>}
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Modernisé */}
          <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100/50">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🍜</span>
                </div>
                <span className="text-sm font-medium text-gray-700">JaponChaines</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Votre guide français des restaurants japonais
              </p>
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                <span>© 2025</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Made with ❤️</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
