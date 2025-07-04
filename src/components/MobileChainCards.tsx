'use client';

import React from 'react';
import Link from 'next/link';

const popularChains = [
  { name: "Yoshinoya", japanese: "吉野家", type: "Gyūdon", slug: "yoshinoya", color: "bg-orange-100 text-orange-800" },
  { name: "Nakau", japanese: "なか卯", type: "Gyūdon", slug: "nakau", color: "bg-orange-100 text-orange-800" },
  { name: "Sushiro", japanese: "スシロー", type: "Kaiten-zushi", slug: "sushiro", color: "bg-blue-100 text-blue-800" },
  { name: "CoCo Ichibanya", japanese: "ココイチ", type: "Curry", slug: "coco-ichibanya", color: "bg-yellow-100 text-yellow-800" },
  { name: "Ootoya", japanese: "大戸屋", type: "Teishoku", slug: "ootoya", color: "bg-green-100 text-green-800" },
  { name: "Ichiran", japanese: "一蘭", type: "Ramen", slug: "ichiran", color: "bg-red-100 text-red-800" },
];

const MobileChainCards: React.FC = () => {
  return (
    <div className="md:hidden px-4 py-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Chaînes populaires
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {popularChains.map((chain) => (
          <Link 
            key={chain.name}
            href={`/chaines/${chain.slug}`}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <h4 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
              {chain.name}
            </h4>
            <p className="text-xs text-gray-600 mb-2 japanese-text">
              {chain.japanese}
            </p>
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${chain.color}`}>
              {chain.type}
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link 
          href="/chaines"
          className="text-red-600 text-sm font-medium hover:text-red-700"
        >
          Voir toutes les chaînes →
        </Link>
      </div>
    </div>
  );
};

export default MobileChainCards;
