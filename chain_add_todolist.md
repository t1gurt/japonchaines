# チェーン追加時のToDoリスト・ガイド

## ✅ ジョリーパスタ（Jolly Pasta）・いきなりステーキ（Ikinari Steak）追加完了 (2025年6月25日)
- ✅ ジョリーパスタ個別ページ作成 (`src/app/chaines/jolly-pasta/page.tsx`)
- ✅ いきなりステーキ個別ページ作成 (`src/app/chaines/ikinari-steak/page.tsx`)
- ✅ 新カテゴリ「steak」作成 (`src/app/type-plat/steak/page.tsx`)
- ✅ サイトデータ更新 (`src/data/site-data.ts`) - jolly-pasta, ikinari-steak, steak追加
- ✅ チェーン一覧ページ更新 (`src/app/chaines/page.tsx`)
- ✅ ファミリーレストラン カテゴリページ更新 (`src/app/type-plat/family-restaurants/page.tsx`)
- ✅ タイプ別ページ更新 (`src/app/type-plat/page.tsx`)
- ✅ ホームページ更新 (`src/app/page.tsx`)
- ✅ README.md統計情報更新 (40→42チェーン、14→15カテゴリ)
- ✅ ドキュメント更新完了

## ✅ ドトールコーヒー・星乃珈琲店追加完了 (2025年6月25日)
- ✅ ドトールコーヒー個別ページ作成 (`src/app/chaines/doutor/page.tsx`)
- ✅ 星乃珈琲店個別ページ作成 (`src/app/chaines/hoshino/page.tsx`)
- ✅ サイトデータ更新 (`src/data/site-data.ts`) - doutor, hoshino追加
- ✅ チェーン一覧ページ更新 (`src/app/chaines/page.tsx`)
- ✅ カフェカテゴリページ更新 (`src/app/type-plat/cafe/page.tsx`)
- ✅ README.md統計情報更新 (38→40チェーン)
- ✅ ドキュメント更新完了

## ✅ 銀だこ（Gindako）追加完了 (2025年6月25日)
- ✅ 個別ページ作成 (`src/app/chaines/gindako/page.tsx`)
- ✅ 新カテゴリ「street-food」作成 (`src/app/type-plat/street-food/page.tsx`)
- ✅ サイトデータ更新 (`src/data/site-data.ts`)
- ✅ チェーン一覧ページ更新 (`src/app/chaines/page.tsx`)
- ✅ タイプ別ページ更新 (`src/app/type-plat/page.tsx`)
- ✅ README.md統計情報更新 (36→38チェーン、12→14カテゴリ)
- ✅ ドキュメント更新完了

## ✅ コメダ珈琲店（Komeda Coffee）追加完了 (2025年6月25日)
- ✅ 個別ページ作成 (`src/app/chaines/komeda/page.tsx`)
- ✅ 新カテゴリ「cafe」作成 (`src/app/type-plat/cafe/page.tsx`)
- ✅ サイトデータ更新 (`src/data/site-data.ts`)
- ✅ チェーン一覧ページ更新 (`src/app/chaines/page.tsx`)
- ✅ タイプ別ページ更新 (`src/app/type-plat/page.tsx`)
- ✅ README.md統計情報更新 (36→38チェーン、12→14カテゴリ)
- ✅ ドキュメント更新完了

## ✅ 串カツ田中追加完了 (2025年6月25日)
- ✅ 個別ページ作成 (`src/app/chaines/kushikatsu-tanaka/page.tsx`)
- ✅ サイトデータ更新 (`src/data/site-data.ts`)
- ✅ チェーン一覧ページ更新 (`src/app/chaines/page.tsx`)
- ✅ 居酒屋カテゴリページ更新 (`src/app/type-plat/izakaya/page.tsx`)
- ✅ README.md統計情報更新 (35→36チェーン)
- ✅ ドキュメント更新完了

## ✅ 日高屋追加完了 (2025年6月25日)
- ✅ 個別ページ作成 (`src/app/chaines/hidakaya/page.tsx`)
- ✅ サイトデータ更新 (`src/data/site-data.ts`)
- ✅ チェーン一覧ページ更新 (`src/app/chaines/page.tsx`)
- ✅ 中華カテゴリページ更新 (`src/app/type-plat/cuisine-chinoise/page.tsx`)
- ✅ README.md統計情報更新 (34→35チェーン)
- ✅ ドキュメント更新完了

## 1. 個別ページ以外で更新・追加すべき内容一覧

### 1.1 サイトマップ・ナビゲーション系
- **`src/app/sitemap.ts`**
  - `restaurantChains` 配列に新チェーンのslugを追加
  - 例: `'katsuya', 'wako', 'matsunoya'` を配列に追加
  - `foodTypes` 配列に新カテゴリを追加（新カテゴリの場合）
  - 例: `'tonkatsu', 'yakiniku', 'cafe'` を配列に追加

- **`src/app/robots.ts`**
  - 新ページへのクローラーアクセス許可設定（必要に応じて）

### 1.2 トップページ（ホーム）
- **`src/app/page.tsx`**
  - Hero Sectionの統計情報更新
  - 例: "34の主要チェーン" → "新しい数の主要チェーン"
  - Featured Categoriesセクションに新カテゴリ追加
  - 例: `{ name: "Tonkatsu", subtitle: "とんかつ", description: "Côtelettes panées", href: "/type-plat/tonkatsu" }`
  - 人気チェーン紹介セクションに新チェーン追加（あれば）

### 1.3 全チェーン一覧ページ
- **`src/app/chaines/page.tsx`**
  - `chains` 配列に新チェーンオブジェクトを追加
  ```tsx
  {
    slug: 'katsuya',
    name: 'Katsuya',
    nameJp: 'かつや',
    category: 'Tonkatsu',
    description: 'Chaîne de tonkatsu abordable avec des katsu croustillants.',
    popularity: 'Populaire',
    avgPrice: '500-1000¥'
  }
  ```
  - `selectedCategory` フィルターに新カテゴリ追加（新カテゴリの場合）

### 1.4 料理カテゴリ系ページ
- **`src/app/type-plat/page.tsx`**
  - `cuisineTypes` 配列に新カテゴリオブジェクトを追加
  ```tsx
  {
    id: "tonkatsu",
    name: "Tonkatsu",
    japanese: "とんかつ",
    description: "Côtelettes de porc panées et frites, croustillantes à l'extérieur",
    detailedDescription: "説明文...",
    chains: ["Katsuya", "Wako", "Matsunoya"],
    color: "bg-yellow-500",
    icon: "🍖"
  }
  ```
  - `getImplementationPath()` 関数に新カテゴリのパス追加
  - `isImplemented()` 関数に新カテゴリID追加

- **該当カテゴリページ（例: `src/app/type-plat/tonkatsu/page.tsx`）**
  - チェーン一覧に新チェーンを追加
  - 統計情報の更新（チェーン数など）

### 1.5 ヘッダー・フッター・ナビゲーション
- **`src/components/Header.tsx`**
  - メインナビゲーションに新カテゴリ追加（必要に応じて）
  - モバイルメニューに新項目追加（必要に応じて）

- **`src/components/Footer.tsx`**
  - フッターリンクに新カテゴリ・チェーン追加（必要に応じて）
  - サイト統計情報の更新

- **`src/components/Breadcrumb.tsx`**
  - パンくずリストの表示名辞書に新チェーン・カテゴリ追加

### 1.6 SEO・メタデータ系
- **`src/lib/seo.ts`**
  - チェーン・カテゴリ別のSEOテンプレート追加（必要に応じて）
  - キーワード辞書に新チェーン・料理名追加

- **`src/components/StructuredData.tsx`**
  - 新チェーン・カテゴリのschema.org構造化データ追加
  - レストランチェーン一覧の更新

### 1.7 Analytics・トラッキング系
- **`src/components/ChainViewTracker.tsx`**
  - 新チェーンのページビュートラッキング設定

- **`src/components/CategoryViewTracker.tsx`**
  - 新カテゴリのページビュートラッキング設定

- **`src/lib/analytics-events.ts`**
  - 新チェーン・カテゴリ用のイベント定義追加

### 1.8 プロジェクト文書・設定ファイル
- **`README.md`**
  - チェーン数・カテゴリ数の統計更新
  - 例: "34の主要チェーン、12の料理カテゴリ" → "新しい数の主要チェーン、新しい数の料理カテゴリ"

- **`package.json`**
  - 必要に応じて依存関係追加（新機能実装時）

- **`ToDo.md`**（このファイル）
  - 完了したタスクにチェックマーク追加

---

## 2. チェーン個別ページで用意すべきコンテンツ例

- チェーンの基本情報
  - 店舗名（日本語・ローマ字・フランス語）
  - ロゴ・外観写真
  - 公式サイトへのリンク
- 歴史・特徴
  - 創業年、発祥地、展開規模
  - 独自のサービスや特徴
- 代表的なメニュー
  - 写真付きで3〜5品程度
  - 価格帯や注文方法の特徴
- 注文システム
  - 券売機・テーブルオーダー・食券方式など
- 食事制限対応
  - ベジタリアン、アレルギー、ハラル等の可否
- 利用シーン・おすすめポイント
  - 一人利用、家族向け、深夜営業など
- 文化的背景・社会的意義
  - 日本社会での位置づけや人気の理由
- よくある質問・注意点
  - 注文時のコツ、混雑時間、支払い方法など
- アクセス・店舗検索方法
  - 公式サイトや地図サービスへの誘導

---

## 3. 注意点・ベストプラクティス

- 公式情報・最新情報を必ず確認する（メニューや価格は頻繁に変わる）
- 写真やロゴは著作権に注意し、公式素材または自作写真を使用
- フランス語訳は正確かつ文化的ニュアンスに配慮
- SEO・アクセシビリティ（alt属性、見出し構造等）を意識
- サイト全体のカテゴリ・チェーン数表記と整合性を保つ
- 既存チェーンページの構成・トーン＆マナーに合わせる
- 多言語表記やローマ字表記の統一
- サイトマップ・ナビゲーションのリンク切れ防止

---

このリストを活用し、チェーン追加時の抜け漏れ防止・品質維持にご活用ください。
