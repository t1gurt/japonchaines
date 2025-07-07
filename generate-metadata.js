#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const chainsDir = path.join(__dirname, 'src', 'app', 'chaines');
const siteDataPath = path.join(__dirname, 'src', 'data', 'site-data.ts');

let allRestaurantChains = [];
let allFoodTypes = new Set();

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
  const description = `${chainInfo.description} Menu détaillé, prix et conseils pratiques.`;
  
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
fs.readdirSync(chainsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach(dirent => {
    const chainSlug = dirent.name;
    const chainInfoPath = path.join(chainsDir, chainSlug, 'chain-info.ts');
    
    if (fs.existsSync(chainInfoPath)) {
      const fileContent = fs.readFileSync(chainInfoPath, 'utf8');
      const chainInfoMatch = fileContent.match(/export const chainInfo = (\{[\s\S]*?\});/);
      
      if (chainInfoMatch && chainInfoMatch[1]) {
        try {
          const sandbox = { chainInfo: {} };
          // Execute only the object literal part
          vm.runInNewContext('chainInfo = ' + chainInfoMatch[1], sandbox);
          const chainInfo = sandbox.chainInfo;

          // Collect chain data
          allRestaurantChains.push({
            slug: chainSlug,
            name: chainInfo.name,
            nameJp: chainInfo.nameJp,
            category: chainInfo.category,
            description: chainInfo.description,
            specialties: chainInfo.specialties,
          });
          allFoodTypes.add(chainInfo.category);

          // console.log(`\n=== ${chainSlug} ===`);
          // console.log(metadata);
          // console.log('\n');
        } catch (e) {
          console.error(`Error processing chain-info.ts for ${chainSlug}:`, e);
        }
      }
    }
  });

// Write site-data.ts
const siteDataContent = `export const restaurantChains = ${JSON.stringify(allRestaurantChains, null, 2)};\nexport const foodTypes = ${JSON.stringify(Array.from(allFoodTypes), null, 2)};\n`;

fs.writeFileSync(siteDataPath, siteDataContent);
console.log(`Generated ${siteDataPath}`);
