# Stella Matching Service

企業マッチングと求人管理のためのWebアプリケーションです。AIを活用した企業マッチング、記事生成、チャット機能などを提供します。

## 概要

Stella Matching Serviceは、企業と求職者をマッチングするためのプラットフォームです。AIを活用して最適な企業を推薦し、オファー管理、記事作成、ランキング表示などの機能を提供します。

## 主な機能

### 一般ユーザー機能

- **Dashboard**: 統計情報、通知、最近のオファー、AI推奨企業の表示
- **Matching (AI)**: AIによる企業マッチング機能（マッチスコア、課題マッチ、ノウハウ、財務スコアの評価）
- **Articles (AI)**: 記事一覧表示
- **Article Generator**: AIを活用した記事生成機能
- **Chat**: チャット機能（企業とのメッセージやり取り、オファー送信）
- **Ranking**: ランキング表示
- **Company Profile**: 企業プロフィール管理
- **Company Detail**: 企業詳細情報の表示
- **Companies**: 登録企業一覧の表示

### 認証機能

- **Login**: ユーザーログイン機能
- **Sign Up**: 新規ユーザー登録機能
- **Protected Routes**: 認証が必要なページへのアクセス制御

### 管理者機能

管理者アカウントでログインすると、以下の管理機能にアクセスできます：

- **Admin Dashboard**: システム全体の統計情報、アラート、アクティビティログ
- **Companies Management**: 登録企業の一覧表示と詳細管理
  - 企業情報の編集
  - AI課題抽出の確認
  - メッセージ履歴の確認
  - マッチング状況の管理
- **Users Management**: 登録ユーザーの一覧と管理
- **Matching Management**: マッチング履歴の表示、AIロジックのパラメータ調整、手動での推薦や停止
- **Offers Management**: オファー履歴の管理、フィルタリング、CSVエクスポート
- **Content Management**: AI生成記事の管理、編集、公開設定

## 技術スタック

- **フレームワーク**: React 19.2.0
- **ルーティング**: React Router DOM 7.10.0
- **ビルドツール**: Vite 6.2.0
- **言語**: TypeScript 5.8.2
- **チャートライブラリ**: Recharts 3.5.1
- **スタイリング**: Tailwind CSS (CDN)

## セットアップ

### 前提条件

- Node.js (推奨バージョン: 18以上)
- npm または yarn

### インストール手順

1. **リポジトリのクローン**（まだの場合）
   ```bash
   git clone <repository-url>
   cd stella-matching-service
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **環境変数の設定**（オプション）
   
   `.env.local`ファイルを作成し、Gemini APIキーを設定します：
   ```bash
   echo "GEMINI_API_KEY=your-api-key-here" > .env.local
   ```
   
   > 注意: Gemini APIキーは、AI機能を使用する場合に必要です。現在のバージョンでは、APIキーがなくてもアプリケーションは起動しますが、一部のAI機能が動作しない可能性があります。

## 実行方法

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動したら、ブラウザで以下のURLにアクセスしてください：

**http://localhost:3000**

### ログイン情報

#### 一般ユーザー
- 任意のメールアドレスとパスワードで新規登録できます
- または、既存のアカウントでログインしてください

#### 管理者アカウント
管理者機能にアクセスするには、以下の認証情報を使用してください：

- **メールアドレス**: `admin@stella.com`
- **パスワード**: `stella`

> 注意: 現在はフロントエンドのみの実装のため、認証情報はローカルストレージに保存されます。本番環境では適切なバックエンド認証を実装してください。

### その他のコマンド

- **ビルド**: 本番用ビルドを作成
  ```bash
  npm run build
  ```

- **プレビュー**: ビルドしたアプリケーションをプレビュー
  ```bash
  npm run preview
  ```

## プロジェクト構造

```
stella-matching-service/
├── components/              # 再利用可能なコンポーネント
│   ├── Sidebar.tsx         # 一般ユーザー用サイドバーナビゲーション
│   └── AdminSidebar.tsx    # 管理者用サイドバーナビゲーション
├── pages/                   # ページコンポーネント
│   ├── Dashboard.tsx        # 一般ユーザー用ダッシュボード
│   ├── Matching.tsx         # AIマッチング
│   ├── Articles.tsx         # 記事一覧
│   ├── ArticleGenerator.tsx # 記事生成
│   ├── Chat.tsx             # チャット機能
│   ├── Ranking.tsx          # ランキング
│   ├── CompanyProfile.tsx   # 企業プロフィール
│   ├── CompanyDetail.tsx    # 企業詳細
│   ├── Companies.tsx        # 企業一覧
│   ├── Login.tsx             # ログインページ
│   ├── SignUp.tsx           # 新規登録ページ
│   └── admin/               # 管理者ページ
│       ├── AdminDashboard.tsx      # 管理者ダッシュボード
│       ├── AdminCompanies.tsx      # 企業管理一覧
│       ├── AdminCompanyDetail.tsx  # 企業詳細管理
│       ├── AdminUsers.tsx          # ユーザー管理
│       ├── AdminMatching.tsx       # マッチング管理
│       ├── AdminOffers.tsx         # オファー管理
│       └── AdminContent.tsx        # コンテンツ管理
├── App.tsx                 # メインアプリケーションコンポーネント
├── index.tsx               # エントリーポイント
├── types.ts                 # TypeScript型定義
├── vite.config.ts           # Vite設定
└── package.json             # 依存関係とスクリプト
```

## 機能詳細

### Dashboard
- マッチ数、オファー数、記事投稿数の統計表示
- 通知一覧
- サポート連絡フォーム
- 最近のオファー一覧
- AI推奨企業の表示

### Matching (AI)
- AIによる企業マッチングアルゴリズム
- マッチスコア（類似度）の表示
- 課題マッチ、ノウハウ、財務スコアの詳細評価
- シナジーと強みの分析

### Chat
- 企業とのメッセージやり取り
- オファー送信機能
- スレッド管理

### 認証機能
- ログイン・サインアップ機能
- 認証状態の管理（ローカルストレージ）
- 保護されたルート（認証が必要なページ）

### 管理者機能

#### Admin Dashboard
- 登録企業総数、月間アクティブユーザー数、累計マッチング成立数などの統計
- マッチング数の推移グラフ
- システムアラートとお知らせ
- 最近のアクティビティログ

#### Companies Management
- 登録企業の一覧表示と検索
- 企業詳細情報の編集
- AIによる課題抽出の確認
- 企業とのメッセージ履歴
- マッチング状況の管理

#### Users Management
- 登録ユーザーの一覧表示
- ユーザー情報の検索と管理

#### Matching Management
- マッチング履歴の表示
- AIマッチングロジックのパラメータ調整
- 手動での推薦や停止機能
- マッチング詳細の確認

#### Offers Management
- オファー履歴の一覧表示
- ステータス・期間によるフィルタリング
- CSVエクスポート機能

#### Content Management
- AI生成記事の一覧表示
- 記事の編集、公開設定
- 月次レポート設定
- SEOテンプレート管理

### ダークモード対応
アプリケーションはライトモードとダークモードの両方に対応しています。

## 開発

### ホットリロード
開発サーバー実行中は、ファイルを変更すると自動的にブラウザがリロードされます。

### ポート変更
デフォルトポート（3000）を変更する場合は、`vite.config.ts`の`server.port`を編集してください。

## ライセンス

このプロジェクトはプライベートプロジェクトです。

## サポート

問題が発生した場合は、Issueを作成するか、開発チームにお問い合わせください。
