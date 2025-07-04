'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MapPin, BookOpen, Search, User, Sparkles, Coffee, Utensils, HelpCircle } from 'lucide-react';

interface BottomNavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  color: string;
}

const bottomNavItems: BottomNavItem[] = [
  {
    label: 'Accueil',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    activeIcon: <Home className="w-5 h-5 fill-current" />,
    color: 'blue'
  },
  {
    label: 'Chaînes',
    href: '/chaines',
    icon: <Coffee className="w-5 h-5" />,
    activeIcon: <Coffee className="w-5 h-5 fill-current" />,
    color: 'red'
  },
  {
    label: 'Types',
    href: '/type-plat',
    icon: <Utensils className="w-5 h-5" />,
    activeIcon: <Utensils className="w-5 h-5 fill-current" />,
    color: 'orange'
  },
  {
    label: 'Tutoriel',
    href: '/tutorial',
    icon: <BookOpen className="w-5 h-5" />,
    activeIcon: <BookOpen className="w-5 h-5 fill-current" />,
    color: 'green'
  },
  {
    label: 'Guides',
    href: '/guides',
    icon: <HelpCircle className="w-5 h-5" />,
    activeIcon: <HelpCircle className="w-5 h-5 fill-current" />,
    color: 'purple'
  }
];

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getColorClasses = (color: string, active: boolean) => {
    const colors = {
      blue: active ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600',
      red: active ? 'text-red-600 bg-red-50' : 'text-gray-600 hover:text-red-600',
      orange: active ? 'text-orange-600 bg-orange-50' : 'text-gray-600 hover:text-orange-600',
      green: active ? 'text-green-600 bg-green-50' : 'text-gray-600 hover:text-green-600',
      purple: active ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600',
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 z-30 shadow-lg">
      <div className="flex items-center justify-around py-1">
        {bottomNavItems.map((item) => {
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                getColorClasses(item.color, active)
              } ${active ? 'shadow-md' : 'hover:bg-gray-50'}`}
            >
              {/* Indicateur actif */}
              {active && (
                <div className={`absolute -top-1 w-8 h-1 bg-${item.color}-600 rounded-full`}></div>
              )}
              
              <div className={`mb-1 p-1 rounded-lg transition-all duration-200 ${
                active ? `bg-${item.color}-100` : ''
              }`}>
                {active ? (item.activeIcon || item.icon) : item.icon}
              </div>
              <span className={`text-xs font-medium transition-colors duration-200 ${
                active ? `text-${item.color}-600` : 'text-gray-600'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
      
      {/* Barre de navigation colorée */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-orange-500 via-green-500 to-purple-500"></div>
    </nav>
  );
};

export default BottomNavigation;
