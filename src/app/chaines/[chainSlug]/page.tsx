import { Metadata } from 'next';
import React from 'react';
import { restaurantChains } from '@/data/site-data';

// Define the type for chainInfo
interface ChainInfo {
  name: string;
  nameJp: string;
  category: string;
  description: string;
  specialties: string[];
  founded?: string;
}

export async function generateStaticParams() {
  const fs = require('fs');
  const path = require('path');
  const chainsDir = path.join(process.cwd(), 'src', 'app', 'chaines');
  const chainSlugs = fs.readdirSync(chainsDir, { withFileTypes: true })
    .filter((dirent: { isDirectory: () => any; }) => dirent.isDirectory())
    .map((dirent: { name: any; }) => ({ chainSlug: dirent.name }));

  return chainSlugs;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const chainInfo = restaurantChains.find(chain => chain.slug === params.chainSlug);

  if (!chainInfo) {
    return {
      title: 'Chaîne de Restaurant Japonais | Guide Complet',
      description: 'Découvrez cette chaîne de restaurant japonais avec notre guide détaillé.',
    };
  }

  const title = `${chainInfo.name} (${chainInfo.nameJp}) | ${chainInfo.category} | Guide Restaurants Japonais`;
  const description = `${chainInfo.description} Menu complet, prix, conseils de commande et guide pratique pour ${chainInfo.name}.`;

  return {
    title,
    description,
    keywords: [
      chainInfo.name.toLowerCase(),
      chainInfo.nameJp,
      chainInfo.category.toLowerCase(),
      ...chainInfo.specialties.map(s => s.toLowerCase()),
      'restaurant japonais',
      'chaîne restaurant japon',
      'guide voyage japon',
      'comment commander au japon'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/chaines/${params.chainSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/chaines/${params.chainSlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ChainPage() {
  return (
    <div>
      <h1>Chain Page</h1>
    </div>
  );
}
