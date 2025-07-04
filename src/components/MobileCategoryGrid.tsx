'use client';

import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Gyudon', href: '/type-plat/gyudon', emoji: '🍚', color: 'bg-orange-100 text-orange-800' },
  { name: 'Ramen', href: '/type-plat/ramen', emoji: '🍜', color: 'bg-red-100 text-red-800' },
  { name: 'Sushi', href: '/type-plat/kaiten-zushi', emoji: '🍣', color: 'bg-blue-100 text-blue-800' },
  { name: 'Udon', href: '/type-plat/udon', emoji: '🍲', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Tempura', href: '/type-plat/tempura', emoji: '🍤', color: 'bg-green-100 text-green-800' },
  { name: 'Yakiniku', href: '/type-plat/yakiniku', emoji: '🥩', color: 'bg-purple-100 text-purple-800' },
  { name: 'Teishoku', href: '/type-plat/teishoku', emoji: '🍱', color: 'bg-indigo-100 text-indigo-800' },
  { name: 'Curry', href: '/type-plat/curry', emoji: '🍛', color: 'bg-pink-100 text-pink-800' },
];

const MobileCategoryGrid: React.FC = () => {
  return (
    <div className="md:hidden p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Explorer par catégorie
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className={`${category.color} p-4 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform`}
          >
            <span className="text-3xl mb-2">{category.emoji}</span>
            <span className="font-medium text-sm">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileCategoryGrid;
