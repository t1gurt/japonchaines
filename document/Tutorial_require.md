# 🎓 日本の食文化学習チュートリアル & リワードシステム 仕様書

## 📋 プロジェクト概要

### プロジェクト名
**Apprendre la Culture Alimentaire Japonaise** (日本の食文化学習プラットフォーム)

### 目的
フランス語圏の利用者が日本の食文化を段階的に学習し、理解度に応じてリワードを獲得できる教育的エンターテインメントページを提供する。既存の店舗ガイドサイトと連携しながら、独立したページとして運営する。

### ターゲットユーザー
- 日本を訪れる予定のフランス語圏旅行者
- 日本の食文化に興味を持つフランス語話者
- 日本在住でより深い食文化を学びたいフランス語話者

---

## 🎯 機能要件

### 1. メインページ構成

#### 1.1 チュートリアルセクション
**URL構造**: `/tutorial`

##### レベル別学習コース
1. **Niveau Débutant (初級)**
   - チェーン店での基本マナー（箸の使い方、「いただきます」の意味）
   - 主要チェーン店の識別（吉野家、すき家、松屋の違い）
   - 券売機の基本的な使い方
   - 基本料理の名前と特徴（牛丼、ラーメン、寿司、カレー等）

2. **Niveau Intermédiaire (中級)**
   - 料理カテゴリー別チェーン店の特色理解
   - タッチパネル注文システムの活用
   - 回転寿司とファミリーレストランのシステム
   - チェーン店の歴史と文化的意義

3. **Niveau Avancé (上級)**
   - 47のチェーン店の詳細な特徴と違い
   - 各チェーンの注文方法とシステムの最適活用
   - 食文化における各チェーンの社会的役割
   - 地域限定メニューと季節メニューの理解

#### 1.2 学習形式
- **インタラクティブクイズ**: チェーン店識別、メニュー選択、注文方法
- **画像認識ゲーム**: 券売機、タッチパネル、料理の識別
- **システムシミュレーション**: 券売機操作、回転寿司の取り方
- **ビデオレッスン**: 実際の店舗での注文風景（3-5分）
- **実践シナリオ**: 各チェーン店での仮想注文体験

### 2. リワードシステム

#### 2.1 ポイントシステム
- **基本ポイント**: クイズ正解で10-50ポイント
- **ボーナスポイント**: 連続学習で追加ポイント
- **完了ボーナス**: レベル完了で100-500ポイント

#### 2.2 バッジシステム
**文化的意味を持つバッジデザイン**

##### 初級バッジ
- 🥢 **Maître des Baguettes** (箸マスター)
- � **Expert Ticket-Machine** (券売機エキスパート)
- 🍚 **Découvreur de Gyūdon** (牛丼発見者)
- 🍜 **Amateur de Ramen** (ラーメン愛好家)
- � **Initié Kaiten-Zushi** (回転寿司入門者)

##### 中級バッジ
- � **Connaisseur des Chaînes** (チェーン店通)
- 📱 **Maître du Tactile** (タッチパネルマスター)
- � **Expert Family Restaurant** (ファミレス専門家)
- 🍛 **Spécialiste Curry** (カレー専門家)
- � **Explorateur de Saveurs** (味の探検家)

##### 上級バッジ
- � **Maître des 47 Chaînes** (47チェーンマスター)
- � **Expert en Commande** (注文エキスパート)
- � **Stratège Culinaire** (料理戦略家)
- 🔰 **Sensei des Chaînes** (チェーン店の先生)
- 🌟 **Ambassadeur Culturel** (文化大使)

#### 2.3 自己申告リワードシステム
**実店舗訪問による追加リワード獲得**

##### 2.3.1 店舗チェックイン機能
- **自己申告方式**: ユーザーが実際の店舗訪問を自己申告
- **簡単認証**: 店舗名選択のみ（訪問日は任意入力）
- **信頼ベース**: ユーザーの良心に基づく運用
- **特別ポイント**: 実店舗訪問で通常の2倍ポイント獲得

##### 2.3.2 実店舗限定バッジ
- 🏆 **Vrai Visiteur** (真の訪問者) - 初回実店舗訪問
- 🌟 **Explorateur Réel** (リアル探検家) - 5店舗制覇
- 👑 **Conquérant des Chaînes** (チェーン制覇王) - 10店舗制覇
- 🎌 **Maître du Terrain** (現地マスター) - 20店舗制覇
- 🏯 **Légende Vivante** (生ける伝説) - 30店舗制覇

#### 2.4 ローカルストレージ仕様
**全ての進捗データをブラウザに保存**

##### 2.4.1 保存データ構造
```typescript
interface TutorialProgress {
  userId: string;
  profile: LearnerProfile;
  visitedStores: VisitedStore[];
  achievements: Achievement[];
  lastSyncDate: Date;
}

interface VisitedStore {
  chainId: string;
  chainName: string;
  visitDate?: Date; // 任意：記録したい場合のみ
}
```

##### 2.4.2 データ永続化戦略
- **自動保存**: 全ての操作で即座にlocalStorageに保存
- **データバックアップ**: JSON形式でのエクスポート機能
- **データインポート**: 他のデバイスからの進捗復元
- **データリセット**: 学習やり直し機能
- **容量管理**: テキストデータの効率的な圧縮保存

#### 2.5 特別リワード生成システム
**ブラウザ内で完結するリワード生成**

##### 2.5.1 デジタル修了証
- **自動生成**: HTML5 Canvasを使用した証明書作成
- **カスタマイズ**: 取得バッジ・制覇店舗数の表示
- **PDFダウンロード**: ブラウザ内PDF生成機能
- **SNS共有**: 画像形式での成果共有

##### 2.5.2 制覇記念コレクション
- **限定壁紙**: 制覇店舗数に応じた特別デザイン
- **統計ダッシュボード**: 個人の学習・訪問統計の可視化
- **タイムライン**: 学習と店舗訪問の時系列表示
- **実績サマリー**: 総合的な成果レポート生成

### 3. 学習進捗管理

#### 3.1 プログレス追跡
- **全体進捗率**: パーセンテージ表示
- **レベル別達成度**: 各レベルの完了状況
- **学習時間**: 累積学習時間の記録
- **学習ストリーク**: 連続学習日数

#### 3.2 個人ダッシュボード
- **獲得ポイント総数**: リアルタイム更新
- **取得バッジ一覧**: 獲得順・カテゴリ別表示
- **学習履歴**: 日別・週別・月別統計
- **推奨次ステップ**: パーソナライズされた学習提案

---

## 🎨 デザイン要件

### 1. ビジュアルデザイン

#### 1.1 カラーパレット
- **プライマリ**: 和の色彩（藍色 #1e3a8a、朱色 #dc2626）
- **セカンダリ**: 自然色（抹茶緑 #16a34a、桜ピンク #ec4899）
- **アクセント**: 金色 #f59e0b（特別な要素用）

#### 1.2 タイポグラフィ
- **メインフォント**: Inter（既存サイトとの統一）
- **和風アクセント**: 漢字・ひらがな表示時のフォント指定
- **サイズ階層**: 明確な情報階層の視覚化

#### 1.3 アイコン・イラスト
- **文化的モチーフ**: 桜、竹、扇、富士山等
- **食材イラスト**: 手描き風の温かみのあるデザイン
- **進捗表示**: 和風プログレスバー（鯉のぼり、桜の花びら等）

### 2. ユーザーインターフェース

#### 2.1 ナビゲーション
- **サイドバー**: 学習レベル・進捗の常時表示
- **パンくずリスト**: 現在位置の明確化
- **既存サイトとの連携**: ヘッダー・フッターの統一

#### 2.2 レスポンシブデザイン
- **モバイルファースト**: 旅行中の学習を考慮
- **タブレット最適化**: より大きな画面での学習体験
- **デスクトップ拡張**: 詳細情報の表示

#### 2.3 インタラクション
- **スムーズアニメーション**: フレーマーモーション活用
- **フィードバック**: 正解・不正解時の視覚・音響効果
- **進捗保存**: ローカルストレージ活用

---

## 💻 技術仕様

### 1. フロントエンド技術

#### 1.1 フレームワーク
- **Base**: Next.js 15.3.3 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion 12.18.1
- **アイコン**: Lucide React + カスタム和風アイコン

#### 1.2 状態管理
- **学習進捗**: React useState + useReducer
- **永続化**: localStorage専用（サーバー不要）
- **状態同期**: Custom hooks による一元管理
- **データエクスポート**: JSON形式でのバックアップ機能
- **オフライン対応**: 完全にオフラインで動作する学習システム

#### 1.3 データ構造
```typescript
// 学習者プロフィール
interface LearnerProfile {
  id: string;
  name: string;
  level: 'debutant' | 'intermediaire' | 'avance';
  totalPoints: number;
  badges: Badge[];
  completedLessons: string[];
  visitedChains: string[];
  favoriteCategories: string[];
  currentStreak: number;
  lastVisit: Date;
  realStoreVisits: number; // 実店舗訪問回数
  selfReportedStores: VisitedStore[]; // 自己申告店舗リスト
}

// 訪問店舗情報
interface VisitedStore {
  chainId: string;
  chainName: string;
  visitDate?: Date; // 任意：記録したい場合のみ
  earnedPoints: number;
  earnedBadges: string[];
}

// バッジ情報
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'manners' | 'chains' | 'systems' | 'expert' | 'real_visit';
  rarity: 'common' | 'rare' | 'legendary';
  earnedAt: Date;
  relatedChains: string[];
  isRealVisitBadge: boolean; // 実店舗訪問バッジかどうか
}

// チュートリアル進捗（ローカルストレージ）
interface TutorialProgress {
  userId: string;
  profile: LearnerProfile;
  achievements: Achievement[];
  settings: UserSettings;
  dataVersion: string;
  lastBackup: Date;
}

// ユーザー設定
interface UserSettings {
  enableNotifications: boolean;
  preferredLanguage: 'fr' | 'ja';
  autoBackup: boolean;
  shareProgress: boolean;
}
```

### 2. コンテンツ管理

#### 2.1 静的コンテンツ
- **レッスンデータ**: JSON/TypeScript定義
- **画像アセット**: 最適化された形式
- **動画コンテンツ**: 埋め込み型（YouTube等）

#### 2.2 多言語対応
- **主要言語**: フランス語
- **補助表示**: 日本語（料理名・用語）
- **発音支援**: カタカナ・ローマ字併記

### 3. パフォーマンス要件

#### 3.1 ページ読み込み
- **初回読み込み**: 3秒以内
- **ページ遷移**: 1秒以内
- **画像最適化**: WebP形式、遅延読み込み

#### 3.2 インタラクション
- **クイズ応答**: 即座（100ms以内）
- **アニメーション**: 60fps維持
- **プログレス更新**: リアルタイム

---

## 📁 ファイル構造

### 1. ディレクトリ構成
```
src/
├── app/
│   └── tutorial/                 # チュートリアルルート
│       ├── page.tsx             # メインダッシュボード
│       ├── layout.tsx           # チュートリアル専用レイアウト
│       ├── debutant/            # 初級レベル
│       │   ├── page.tsx
│       │   ├── lesson-[id]/
│       │   └── quiz-[id]/
│       ├── intermediaire/       # 中級レベル
│       │   └── [同様の構造]
│       ├── avance/              # 上級レベル
│       │   └── [同様の構造]
│       ├── recompenses/         # リワード管理
│       │   ├── page.tsx
│       │   └── badges/
│       └── profil/              # プロフィール管理
│           └── page.tsx
├── components/
│   └── tutorial/                # チュートリアル専用コンポーネント
│       ├── QuizComponent.tsx
│       ├── ProgressBar.tsx
│       ├── BadgeDisplay.tsx
│       ├── LevelSelector.tsx
│       └── GameComponents/
├── data/
│   └── tutorial/                # 学習コンテンツデータ
│       ├── lessons.ts           # レッスンデータ
│       ├── chains.ts            # チェーン店情報
│       ├── badges.ts            # バッジ定義
│       ├── ordering-systems.ts  # 注文システム情報
│       └── rewards.ts           # リワード設定
├── hooks/
│   └── tutorial/                # チュートリアル専用hooks
│       ├── useLearningProgress.ts
│       ├── useBadgeSystem.ts
│       ├── useChainRecognition.ts
│       ├── useOrderingSimulation.ts
│       ├── useLocalStorage.ts    # ローカルストレージ管理
│       ├── useSelfReport.ts      # 自己申告機能
│       └── useDataBackup.ts      # データバックアップ・復元
└── types/
    └── tutorial.ts              # 型定義
```

### 2. 主要コンポーネント

#### 2.1 `TutorialDashboard`
- 学習進捗とチェーン店制覇状況の表示
- レベル選択と推奨チェーン店の提案
- 実店舗訪問状況とリアルバッジの表示

#### 2.2 `SelfReportModal`
- 店舗訪問の自己申告インターフェース
- シンプルな店舗選択（訪問日は任意入力）

#### 2.3 `LocalStorageManager`
- 全データのローカル保存・読み込み
- データエクスポート・インポート機能
- バックアップファイル生成

#### 2.4 `AchievementGenerator`
- デジタル証明書の自動生成
- 制覇記念壁紙の作成
- SNS共有用画像の生成

---

## 🎮 学習コンテンツ詳細

### 1. 初級レベル (Niveau Débutant)

#### 1.1 チェーン店基本マナー
**レッスン1: "Les Bonnes Manières dans les Chaînes"**
- 内容: 券売機エリアでの並び方、「いただきます」「ごちそうさま」の使い方、箸の正しい持ち方
- 形式: クイズ（5問） - フランス語での基本マナー理解度確認
- 所要時間: 8分
- 獲得ポイント: 50

**レッスン2: "Maîtriser les Machines à Tickets"**
- 内容: 券売機の基本操作（松屋、なか卯、富士そば等）
- 形式: インタラクティブシミュレーション + 練習問題（5問）
- 所要時間: 15分
- 獲得ポイント: 75

#### 1.2 主要チェーン店識別
**レッスン3: "Reconnaître les Big 3 du Gyūdon"**
- 内容: 吉野家・すき家・松屋の特徴と違い
- 形式: 画像識別ゲーム + 比較クイズ（フランス語）
- 所要時間: 12分
- 獲得ポイント: 60

**レッスン4: "Introduction aux Chaînes Populaires"**
- 内容: サイゼリヤ、ガスト、CoCo壱番屋の基本知識
- 形式: フラッシュカード + マッチングゲーム
- 所要時間: 10分
- 獲得ポイント: 50

### 2. 中級レベル (Niveau Intermédiaire)

#### 2.1 料理カテゴリー別チェーン店理解
**レッスン5: "Les Maîtres du Ramen"**
- 内容: 一蘭・一風堂・天下一品の特色とシステム
- 形式: 比較表 + システム体験クイズ（5問・フランス語）
- 所要時間: 18分
- 獲得ポイント: 100

#### 2.2 回転寿司とファミレスシステム
**レッスン6: "Navigation dans les Kaiten-Zushi"**
- 内容: スシロー・くら寿司・はま寿司のシステムと違い
- 形式: バーチャル店舗体験 + 注文シミュレーション
- 所要時間: 20分
- 獲得ポイント: 125

**レッスン7: "Maîtriser les Family Restaurants"**
- 内容: サイゼリヤ・ガスト・ジョナサンの注文システム
- 形式: タッチパネルシミュレーション + 実践問題
- 所要時間: 22分
- 獲得ポイント: 110

### 3. 上級レベル (Niveau Avancé)

#### 3.1 47チェーン店マスタークラス
**レッスン8: "Expert des 47 Chaînes"**
- 内容: 全47チェーンの特徴、歴史、注文システム
- 形式: 包括的ナレッジテスト + 実践シナリオ（5問・フランス語）
- 所要時間: 35分
- 獲得ポイント: 200

#### 3.2 文化的意義と社会的役割
**レッスン9: "Histoire et Impact Cultural des Chaînes"**
- 内容: チェーン店が日本社会に与えた影響と文化的意義
- 形式: ドキュメンタリー + 論述式問題
- 所要時間: 30分
- 獲得ポイント: 250
- 形式: フラッシュカード + 実践テスト
- 所要時間: 30分
- 獲得ポイント: 250

---

## 🏆 成果測定・分析

### 1. 学習効果指標

#### 1.1 定量的指標
- **完了率**: レッスン完了者の割合
- **正答率**: クイズ問題の平均正答率
- **学習時間**: 平均・中央値の学習時間
- **リピート率**: 複数回訪問者の割合

#### 1.2 定性的指標
- **満足度**: 学習体験の評価
- **理解度**: 自己評価による理解度
- **文化的関心**: 日本文化への興味増加度

### 2. ユーザー行動分析

#### 2.1 学習パターン
- **学習時間帯**: 最もアクティブな時間
- **デバイス利用**: モバイル・デスクトップの比率
- **中断ポイント**: 離脱の多い箇所特定

#### 2.2 コンテンツ人気度
- **人気レッスン**: 最も取り組まれるコンテンツ
- **難易度評価**: ユーザーが感じる難しさ
- **改善要望**: フィードバックからの課題抽出

---

## 🛠️ 開発フェーズ

### Phase 1: 基盤開発 (2週間)
- [ ] 基本的なページ構造構築
- [ ] ルーティング設定
- [ ] 基本コンポーネント作成
- [ ] データ構造設計・実装

### Phase 2: コア機能実装 (3週間)
- [ ] クイズエンジン開発
- [ ] 進捗管理システム
- [ ] バッジシステム実装
- [ ] ローカルストレージ完全実装
- [ ] 自己申告システム開発
- [ ] データバックアップ・復元機能

### Phase 3: コンテンツ作成 (2週間)
- [ ] 初級レッスン内容作成
- [ ] 中級レッスン内容作成
- [ ] 上級レッスン内容作成

### Phase 4: UI/UX 完成 (2週間)
- [ ] デザイン最終調整
- [ ] レスポンシブ対応完了
- [ ] 自己申告UIの使いやすさ最適化

### Phase 5: テスト・最適化 (1週間)
- [ ] 機能テスト完了
- [ ] パフォーマンス最適化
- [ ] クロスブラウザ確認
- [ ] 最終品質チェック

**総開発期間: 10週間**

---

## 🔗 既存サイトとの統合

### 1. ナビゲーション統合
- **ヘッダーメニュー**: "Apprendre" セクション追加
- **フッターリンク**: チュートリアルページへの導線
- **関連ページリンク**: ガイドページからチュートリアルへの誘導

### 2. コンテンツ連携
- **チェーン店ページ**: 各店舗ページから関連レッスンへのリンク
- **料理カテゴリページ**: カテゴリー学習から実店舗情報への連携
- **ガイドページ**: 注文方法ガイドからシミュレーション体験への誘導
- **相互参照**: チュートリアル内から詳細ガイドページへのディープリンク

### 3. デザイン統一
- **共通スタイル**: 既存のTailwind CSSクラス活用
- **カラーパレット**: サイト全体との調和
- **コンポーネント再利用**: Header・Footerの共通化

---

---

## 🔒 プライバシー・データ保護仕様

### 1. ローカルファーストアプローチ
- **データの所有権**: 全てのデータはユーザーのブラウザに保存
- **サーバー送信なし**: 個人の学習データは一切外部送信されない
- **匿名利用**: アカウント作成不要、個人情報収集なし
- **透明性**: データの保存場所・内容を明確に表示

### 2. 自己申告システムの信頼性設計
- **良心ベース**: ユーザーの誠実性を前提とした運用
- **過度な検証なし**: 煩雑な認証システムは導入しない
- **楽しさ優先**: 学習体験を阻害しない軽量なシステム
- **教育的価値**: 正直性を重視する文化的側面も学習

### 3. データポータビリティ
- **削除権**: ワンクリックでの全データ削除
- **オープンフォーマット**: 標準的な形式での保存

---

*最終更新: 2025年6月29日*
*バージョン: 1.0*
*作成者: japonchaines開発チーム*
