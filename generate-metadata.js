#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// チェーンデータ（src/lib/chain-metadata.tsから）
const chainData = {
  'anan': {
    name: 'Anan',
    nameJp: '安安',
    category: 'Yakiniku',
    description: 'Yakiniku abordable au charbon de bois authentique avec le concept "安くて旨い" (bon marché et délicieux).',
    specialties: ['Kalbi au charbon', 'Harami', 'Formules à volonté', 'Légumes grillés']
  },
  'doutor': {
    name: 'Doutor Coffee',
    nameJp: 'ドトールコーヒー',
    category: 'Café',
    description: 'Pionnier du café à prix accessible au Japon, révolutionnaire dans la culture café japonaise.',
    specialties: ['Café de qualité', 'Sandwichs', 'Milan sandwich', 'Café glacé']
  },
  'freshness-burger': {
    name: 'Freshness Burger',
    nameJp: 'フレッシュネスバーガー',
    category: 'Hamburgers',
    description: 'Chaîne de burgers premium avec ingrédients frais et options healthy dans un concept moderne.',
    specialties: ['Burgers frais', 'Avocado burger', 'Options healthy', 'Salades gourmet']
  },
  'fuji-soba': {
    name: 'Fuji Soba',
    nameJp: '富士そば',
    category: 'Soba',
    description: 'Chaîne emblématique de soba 24h/24 à Tokyo, symbole de la restauration rapide populaire.',
    specialties: ['Soba traditionnelles', 'Service 24h', 'Kake soba', 'Tempura soba']
  },
  'gindako': {
    name: 'Gindako',
    nameJp: '銀だこ',
    category: 'Street Food',
    description: 'Spécialiste des takoyaki authentiques d\'Osaka, apportant la street food dans tout le Japon.',
    specialties: ['Takoyaki croustillants', 'Sauce originale', 'Techniques Osaka', 'Variations créatives']
  },
  'go-go-curry': {
    name: 'Go Go Curry',
    nameJp: 'ゴーゴーカレー',
    category: 'Curry',
    description: 'Curry de style Kanazawa avec roux noir épais et ambiance unique inspirée du baseball.',
    specialties: ['Curry noir', 'Portion généreuse', 'Ambiance baseball', 'Sauce épaisse']
  },
  'gusto': {
    name: 'Gusto',
    nameJp: 'ガスト',
    category: 'Family Restaurant',
    description: 'Restaurant familial leader au Japon avec menu varié et prix accessibles pour toute la famille.',
    specialties: ['Menu familial', 'Drink bar', 'Plats occidentaux', 'Desserts']
  },
  'gyoza-no-ohsho': {
    name: 'Gyoza no Ohsho',
    nameJp: '餃子の王将',
    category: 'Cuisine Chinoise',
    description: 'Chaîne authentique de cuisine chinoise populaire, spécialisée dans les gyoza faits main.',
    specialties: ['Gyoza faits main', 'Yakimeshi', 'Ramen chinois', 'Plats généreux']
  },
  'gyukaku': {
    name: 'Gyukaku',
    nameJp: '牛角',
    category: 'Yakiniku',
    description: 'Chaîne de yakiniku haut de gamme proposant des viandes de qualité premium dans une ambiance moderne.',
    specialties: ['Kalbi Premium', 'Wagyu', 'Courses dégustation', 'Formules à volonté']
  },
  'hama-sushi': {
    name: 'Hama Sushi',
    nameJp: 'はま寿司',
    category: 'Kaiten-zushi',
    description: 'Sushi tournant abordable avec qualité constante et innovation technologique pour le service.',
    specialties: ['Sushi abordable', 'Poisson frais', 'Service automatisé', 'Menu varié']
  }
};

// メタデータテンプレート生成関数
function generateMetadata(chainSlug, chainInfo) {
  const categoryTranslations = {
    'Yakiniku': 'Yakiniku',
    'Café': 'Café',
    'Hamburgers': 'Hamburgers',
    'Soba': 'Soba',
    'Street Food': 'Street Food',
    'Curry': 'Curry',
    'Family Restaurant': 'Family Restaurant',
    'Cuisine Chinoise': 'Cuisine Chinoise',
    'Kaiten-zushi': 'Kaiten-zushi',
    'Gyudon': 'Gyudon',
    'Ramen': 'Ramen',
    'Udon': 'Udon',
    'Teishoku': 'Teishoku',
    'Tempura': 'Tempura',
    'Izakaya': 'Izakaya',
    'Steak': 'Steak'
  };

  const title = `${chainInfo.name} (${chainInfo.nameJp}) | ${chainInfo.category} | Guide Restaurants Japonais`;
  const description = `Guide complet de ${chainInfo.name} - ${chainInfo.description} Menu détaillé, prix et conseils pratiques.`;
  
  const keywords = [
    chainInfo.name.toLowerCase(),
    chainInfo.nameJp,
    chainInfo.category.toLowerCase(),
    ...chainInfo.specialties.map(s => s.toLowerCase()),
    'restaurant japonais',
    'chaîne restaurant japon',
    'guide voyage japon'
  ];

  return `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  keywords: [
    ${keywords.map(k => `'${k}'`).join(',\n    ')}
  ],
  openGraph: {
    title: '${chainInfo.name} (${chainInfo.nameJp}) | ${chainInfo.category}',
    description: '${description}',
    type: 'article',
    url: '/chaines/${chainSlug}',
  },
  alternates: {
    canonical: '/chaines/${chainSlug}',
  },
  robots: {
    index: true,
    follow: true,
  },
};`;
}

// 各チェーンのメタデータを出力
Object.entries(chainData).forEach(([slug, info]) => {
  const metadata = generateMetadata(slug, info);
  console.log(`\n=== ${slug} ===`);
  console.log(metadata);
  console.log('\n');
});
