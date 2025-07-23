#!/usr/bin/env node

/**
 * Canonical URL 一括更新スクリプト
 * 
 * このスクリプトは、すべてのページファイルを検索し、
 * Metadataの設定を新しいユーティリティ関数を使用するように更新します。
 */

const fs = require('fs');
const path = require('path');

// アプリケーションディレクトリのパス
const appDir = path.join(__dirname, '..', 'src', 'app');

/**
 * TypeScriptファイル内のMetadata exportを新しい形式に更新
 */
function updateMetadataInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 既に新しい形式かチェック
    if (content.includes('generatePageMetadata') || 
        content.includes('generateCategoryMetadata') || 
        content.includes('generateHomeMetadata')) {
      console.log(`✅ Already updated: ${filePath}`);
      return;
    }

    // Metadataのimportを追加する必要があるかチェック
    let newContent = content;
    
    // Metadataインポートが存在するかチェック
    if (!newContent.includes('from "@/lib/metadata"')) {
      // import文を追加
      newContent = newContent.replace(
        /import.*from ['"][^'"]*['"];?\n?/g,
        (match) => match + (match.includes('from "@/lib/metadata"') ? '' : '')
      );
      
      // 最後のimport文の後にメタデータユーティリティのimportを追加
      newContent = newContent.replace(
        /(import[^;]+;)\n(?!import)/,
        '$1\nimport { generatePageMetadata } from "@/lib/metadata";\n'
      );
    }

    // 既存のmetadata exportを特定
    const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
    const match = newContent.match(metadataRegex);
    
    if (match) {
      // パスからページタイプを推測
      const relativePath = path.relative(appDir, filePath);
      const pathSegments = relativePath.split(path.sep);
      
      let replacement = '';
      
      if (relativePath === 'page.tsx') {
        // ホームページ
        replacement = 'export const metadata = generateHomeMetadata();';
      } else if (pathSegments.includes('type-plat')) {
        // カテゴリページ
        const categoryName = pathSegments[pathSegments.length - 2] || 'category';
        const categoryPath = '/' + pathSegments.slice(0, -1).join('/');
        
        replacement = `export const metadata = generateCategoryMetadata(
  "${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}",
  "${categoryPath}",
  "Description for ${categoryName} category"
);`;
      } else {
        // その他のページ - 汎用的な更新
        replacement = `export const metadata = generatePageMetadata({
  title: "Page Title",
  description: "Page description",
  path: "/${pathSegments.slice(0, -1).join('/')}"
});`;
      }
      
      newContent = newContent.replace(metadataRegex, replacement);
      
      // ファイルを更新
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Updated: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

/**
 * ディレクトリを再帰的に検索してpage.tsxファイルを更新
 */
function updatePagesInDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      updatePagesInDirectory(fullPath);
    } else if (item === 'page.tsx') {
      updateMetadataInFile(fullPath);
    }
  }
}

// メイン実行
console.log('🚀 Starting canonical URL update process...');
console.log(`📁 Scanning directory: ${appDir}`);

try {
  updatePagesInDirectory(appDir);
  console.log('✅ Canonical URL update completed successfully!');
  console.log('\n⚠️  Note: Please review the generated metadata and adjust titles/descriptions as needed.');
} catch (error) {
  console.error('❌ Error during update process:', error);
}
