<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Stella Matching Service

企業マッチングと求人管理のためのWebアプリケーションです。AIを活用した企業マッチング、記事生成、チャット機能などを提供します。

## 概要

Stella Matching Serviceは、企業と求職者をマッチングするためのプラットフォームです。AIを活用して最適な企業を推薦し、オファー管理、記事作成、ランキング表示などの機能を提供します。

## 主な機能

- **Dashboard**: 統計情報、通知、最近のオファー、AI推奨企業の表示
- **Matching (AI)**: AIによる企業マッチング機能（マッチスコア、課題マッチ、ノウハウ、財務スコアの評価）
- **Articles (AI)**: 記事一覧表示
- **Article Generator**: AIを活用した記事生成機能
- **Chat**: チャット機能
- **Ranking**: ランキング表示
- **Company Profile**: 企業プロフィール管理
- **Company Detail**: 企業詳細情報の表示

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
├── components/          # 再利用可能なコンポーネント
│   └── Sidebar.tsx     # サイドバーナビゲーション
├── pages/              # ページコンポーネント
│   ├── Dashboard.tsx
│   ├── Matching.tsx
│   ├── Articles.tsx
│   ├── ArticleGenerator.tsx
│   ├── Chat.tsx
│   ├── Ranking.tsx
│   ├── CompanyProfile.tsx
│   └── CompanyDetail.tsx
├── App.tsx             # メインアプリケーションコンポーネント
├── index.tsx           # エントリーポイント
├── types.ts            # TypeScript型定義
├── vite.config.ts      # Vite設定
└── package.json        # 依存関係とスクリプト
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
