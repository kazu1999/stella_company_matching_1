# DB・API仕様

## 1. データベース設計

### 1.1 ER図の概要

```
Users ──┬── CompanyProfiles
        │
        ├── Messages
        │
        ├── Offers (sender)
        │
        └── Offers (recipient)

Companies ──┬── CompanyProfiles
            │
            ├── Matchings (company1)
            │
            ├── Matchings (company2)
            │
            ├── Offers
            │
            ├── Messages
            │
            └── Rankings

CompanyProfiles ──┬── FinancialData
                  │
                  └── Issues

Matchings ─── MatchingDetails

Articles ─── ArticleCategories

Notifications ─── Users
```

### 1.2 テーブル定義

#### 1.2.1 users（ユーザー）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | ユーザーID |
| email | VARCHAR(255) | UNIQUE, NOT NULL | メールアドレス |
| password_hash | VARCHAR(255) | NOT NULL | パスワードハッシュ |
| name | VARCHAR(100) | NOT NULL | ユーザー名 |
| role | ENUM('user', 'admin') | NOT NULL, DEFAULT 'user' | ロール（一般ユーザー/管理者） |
| company_id | UUID | FOREIGN KEY → companies.id | 所属企業ID（NULL可） |
| is_active | BOOLEAN | NOT NULL, DEFAULT true | アクティブ状態 |
| last_login_at | TIMESTAMP | | 最終ログイン日時 |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_users_email`: email
- `idx_users_company_id`: company_id
- `idx_users_role`: role

#### 1.2.2 companies（企業）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | 企業ID |
| name | VARCHAR(255) | NOT NULL | 企業名 |
| industry | VARCHAR(100) | | 業種 |
| logo_url | VARCHAR(500) | | ロゴURL |
| website_url | VARCHAR(500) | | ウェブサイトURL |
| location | VARCHAR(255) | | 所在地 |
| founded_year | INTEGER | | 設立年 |
| status | ENUM('active', 'inactive', 'pending') | NOT NULL, DEFAULT 'pending' | ステータス |
| cultive_score | INTEGER | DEFAULT 0 | Cultive Score |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_companies_name`: name
- `idx_companies_industry`: industry
- `idx_companies_status`: status
- `idx_companies_cultive_score`: cultive_score

#### 1.2.3 company_profiles（企業プロフィール詳細）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | プロフィールID |
| company_id | UUID | FOREIGN KEY → companies.id, UNIQUE | 企業ID |
| business_description | TEXT | | 事業内容 |
| strengths | TEXT | | 強み |
| ai_insights | JSONB | | AIインサイト（推奨業界など） |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_company_profiles_company_id`: company_id

#### 1.2.4 financial_data（財務データ）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | 財務データID |
| company_id | UUID | FOREIGN KEY → companies.id | 企業ID |
| period_type | ENUM('annual', 'quarterly') | NOT NULL | 期間タイプ（年間/四半期） |
| period_start | DATE | NOT NULL | 期間開始日 |
| period_end | DATE | NOT NULL | 期間終了日 |
| revenue | DECIMAL(15, 2) | | 売上（百万円） |
| gross_margin | DECIMAL(5, 2) | | 粗利率（%） |
| financial_statement_url | VARCHAR(500) | | 財務諸表ファイルURL |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_financial_data_company_id`: company_id
- `idx_financial_data_period`: period_start, period_end

#### 1.2.5 issues（課題）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | 課題ID |
| company_id | UUID | FOREIGN KEY → companies.id | 企業ID |
| category | VARCHAR(50) | NOT NULL | カテゴリー（新規顧客獲得、グローバル展開など） |
| description | TEXT | | 課題の詳細説明 |
| ai_extracted | BOOLEAN | DEFAULT false | AI抽出フラグ |
| solutions | JSONB | | 解決策の提案（AI生成） |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_issues_company_id`: company_id
- `idx_issues_category`: category

#### 1.2.6 matchings（マッチング）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | マッチングID |
| company1_id | UUID | FOREIGN KEY → companies.id | 企業1のID |
| company2_id | UUID | FOREIGN KEY → companies.id | 企業2のID |
| ai_score | INTEGER | NOT NULL | AIマッチングスコア（0-100） |
| issue_match_score | DECIMAL(5, 2) | | 課題マッチスコア（%） |
| knowhow_score | DECIMAL(5, 2) | | ノウハウスコア（%） |
| financial_score | VARCHAR(10) | | 財務スコア（A+, A, B+など） |
| synergy_description | TEXT | | シナジー説明 |
| strengths | TEXT[] | | 強み・共通点の配列 |
| status | ENUM('pending', 'recommended', 'accepted', 'rejected', 'stopped') | NOT NULL, DEFAULT 'pending' | ステータス |
| recommended_by | UUID | FOREIGN KEY → users.id | 推薦者（管理者） |
| business_synergy_weight | INTEGER | DEFAULT 50 | ビジネスシナジーの重み（0-100） |
| technical_complementarity_weight | INTEGER | DEFAULT 50 | 技術的補完性の重み（0-100） |
| matched_at | TIMESTAMP | | マッチング成立日時 |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_matchings_company1_id`: company1_id
- `idx_matchings_company2_id`: company2_id
- `idx_matchings_status`: status
- `idx_matchings_ai_score`: ai_score
- `idx_matchings_created_at`: created_at

#### 1.2.7 offers（オファー）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | オファーID |
| sender_company_id | UUID | FOREIGN KEY → companies.id | 送信企業ID |
| recipient_user_id | UUID | FOREIGN KEY → users.id | 受信ユーザーID |
| type | ENUM('business_alliance', 'information_exchange') | NOT NULL | オファータイプ |
| related_issue | VARCHAR(255) | | 関連課題 |
| deadline | DATE | | 期限 |
| proposal | TEXT | NOT NULL | 提案内容 |
| status | ENUM('pending', 'accepted', 'rejected') | NOT NULL, DEFAULT 'pending' | ステータス |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_offers_sender_company_id`: sender_company_id
- `idx_offers_recipient_user_id`: recipient_user_id
- `idx_offers_status`: status
- `idx_offers_created_at`: created_at

#### 1.2.8 message_threads（メッセージスレッド）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | スレッドID |
| company_id | UUID | FOREIGN KEY → companies.id | 企業ID |
| user_id | UUID | FOREIGN KEY → users.id | ユーザーID |
| related_issue | VARCHAR(255) | | 関連課題 |
| last_message_at | TIMESTAMP | | 最終メッセージ日時 |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_message_threads_company_id`: company_id
- `idx_message_threads_user_id`: user_id
- `idx_message_threads_last_message_at`: last_message_at

#### 1.2.9 messages（メッセージ）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | メッセージID |
| thread_id | UUID | FOREIGN KEY → message_threads.id | スレッドID |
| sender_type | ENUM('user', 'company', 'admin') | NOT NULL | 送信者タイプ |
| sender_id | UUID | NOT NULL | 送信者ID（user_idまたはcompany_id） |
| content | TEXT | NOT NULL | メッセージ内容 |
| is_read | BOOLEAN | NOT NULL, DEFAULT false | 既読フラグ |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |

**インデックス**:
- `idx_messages_thread_id`: thread_id
- `idx_messages_created_at`: created_at
- `idx_messages_is_read`: is_read

#### 1.2.10 articles（記事）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | 記事ID |
| title | VARCHAR(255) | NOT NULL | タイトル |
| category | VARCHAR(50) | NOT NULL | カテゴリー |
| content | TEXT | | 記事内容 |
| thumbnail_url | VARCHAR(500) | | サムネイルURL |
| seo_score | INTEGER | | SEOスコア（0-100） |
| target_keyword | VARCHAR(100) | | ターゲットキーワード |
| status | ENUM('draft', 'published', 'unpublished') | NOT NULL, DEFAULT 'draft' | ステータス |
| views | INTEGER | DEFAULT 0 | 閲覧数 |
| likes | INTEGER | DEFAULT 0 | いいね数 |
| created_by | UUID | FOREIGN KEY → users.id | 作成者ID |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**インデックス**:
- `idx_articles_category`: category
- `idx_articles_status`: status
- `idx_articles_created_at`: created_at
- `idx_articles_views`: views

#### 1.2.11 notifications（通知）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | 通知ID |
| user_id | UUID | FOREIGN KEY → users.id | ユーザーID |
| type | VARCHAR(50) | NOT NULL | 通知タイプ |
| title | VARCHAR(255) | NOT NULL | タイトル |
| message | TEXT | | メッセージ内容 |
| is_read | BOOLEAN | NOT NULL, DEFAULT false | 既読フラグ |
| link_url | VARCHAR(500) | | リンクURL |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |

**インデックス**:
- `idx_notifications_user_id`: user_id
- `idx_notifications_is_read`: is_read
- `idx_notifications_created_at`: created_at

#### 1.2.12 activity_logs（アクティビティログ）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | ログID |
| user_id | UUID | FOREIGN KEY → users.id | ユーザーID |
| action | VARCHAR(100) | NOT NULL | アクション |
| entity_type | VARCHAR(50) | | エンティティタイプ |
| entity_id | UUID | | エンティティID |
| details | JSONB | | 詳細情報 |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 作成日時 |

**インデックス**:
- `idx_activity_logs_user_id`: user_id
- `idx_activity_logs_created_at`: created_at
- `idx_activity_logs_action`: action

#### 1.2.13 matching_settings（マッチング設定）

| カラム名 | 型 | 制約 | 説明 |
|---------|-----|------|------|
| id | UUID | PRIMARY KEY | 設定ID |
| business_synergy_weight | INTEGER | NOT NULL, DEFAULT 50 | ビジネスシナジーの重み（0-100） |
| technical_complementarity_weight | INTEGER | NOT NULL, DEFAULT 50 | 技術的補完性の重み（0-100） |
| updated_by | UUID | FOREIGN KEY → users.id | 更新者ID |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新日時 |

**制約**:
- 1レコードのみ存在（シングルトン）

## 2. API設計

### 2.1 認証API

#### POST /api/auth/register
新規ユーザー登録

**リクエストボディ**:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "ユーザー名",
  "companyName": "株式会社サンプル",
  "industry": "SaaS"
}
```

**レスポンス**:
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "ユーザー名",
    "role": "user"
  },
  "token": "jwt_token"
}
```

#### POST /api/auth/login
ログイン

**リクエストボディ**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**レスポンス**:
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "ユーザー名",
    "role": "user",
    "isAdmin": false
  },
  "token": "jwt_token"
}
```

#### POST /api/auth/logout
ログアウト

#### GET /api/auth/me
現在のユーザー情報取得

### 2.2 企業API

#### GET /api/companies
企業一覧取得

**クエリパラメータ**:
- `search`: 検索キーワード（企業名、業種）
- `industry`: 業種フィルター
- `page`: ページ番号
- `limit`: 1ページあたりの件数

**レスポンス**:
```json
{
  "companies": [
    {
      "id": "uuid",
      "name": "企業名",
      "industry": "SaaS",
      "logo": "url",
      "matchScore": 88,
      "status": "active",
      "registeredDate": "2023-10-15"
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

#### GET /api/companies/:id
企業詳細取得

**レスポンス**:
```json
{
  "id": "uuid",
  "name": "企業名",
  "industry": "SaaS",
  "logo": "url",
  "websiteUrl": "https://example.com",
  "location": "東京都渋谷区",
  "foundedYear": 2020,
  "description": "事業内容",
  "strengths": "強み",
  "matchScore": 88,
  "profile": {
    "businessDescription": "詳細な事業内容",
    "strengths": "強みの詳細",
    "aiInsights": {
      "recommendedIndustry": "SaaS業界",
      "improvementSuggestion": "課題をより具体的に記述すると..."
    }
  },
  "financialData": [
    {
      "periodType": "annual",
      "revenue": 100000,
      "grossMargin": 60
    }
  ],
  "issues": [
    {
      "category": "新規顧客獲得",
      "description": "課題の詳細"
    }
  ]
}
```

#### PUT /api/companies/:id/profile
企業プロフィール更新

**リクエストボディ**:
```json
{
  "name": "企業名",
  "websiteUrl": "https://example.com",
  "location": "東京都渋谷区",
  "foundedYear": 2020,
  "businessDescription": "事業内容",
  "strengths": "強み",
  "issues": [
    {
      "category": "新規顧客獲得",
      "description": "課題の詳細"
    }
  ],
  "financialData": {
    "periodType": "annual",
    "revenue": 100000,
    "grossMargin": 60
  }
}
```

#### POST /api/companies/:id/financial-statements
財務諸表アップロード

**リクエスト**: multipart/form-data
- `file`: ファイル（PDF, Excel）

**レスポンス**:
```json
{
  "fileUrl": "https://storage.example.com/files/uuid.pdf"
}
```

### 2.3 マッチングAPI

#### GET /api/matching/recommended
AI推奨企業取得

**クエリパラメータ**:
- `limit`: 取得件数（デフォルト: 10）

**レスポンス**:
```json
{
  "companies": [
    {
      "id": "uuid",
      "name": "企業名",
      "industry": "SaaS",
      "logo": "url",
      "score": 88,
      "reason": {
        "issueMatch": "92%",
        "knowhow": "85%",
        "financial": "A+"
      },
      "synergy": "シナジー説明",
      "strengths": ["強み1", "強み2"]
    }
  ]
}
```

#### GET /api/matching/category/:category
カテゴリー別推奨企業取得

**パスパラメータ**:
- `category`: カテゴリー（財務、営業、採用・人材紹介、DX、マーケ、組織）

#### POST /api/matching/calculate
マッチングスコア計算

**リクエストボディ**:
```json
{
  "company1Id": "uuid",
  "company2Id": "uuid"
}
```

**レスポンス**:
```json
{
  "matchingId": "uuid",
  "aiScore": 88,
  "issueMatchScore": 92,
  "knowhowScore": 85,
  "financialScore": "A+",
  "synergyDescription": "シナジー説明",
  "strengths": ["強み1", "強み2"]
}
```

#### GET /api/matching/history
マッチング履歴取得

**クエリパラメータ**:
- `companyId`: 企業ID
- `status`: ステータス
- `startDate`: 開始日
- `endDate`: 終了日
- `page`: ページ番号
- `limit`: 1ページあたりの件数

#### PUT /api/matching/:id/status
マッチングステータス更新（管理者）

**リクエストボディ**:
```json
{
  "status": "recommended",
  "recommendedBy": "admin_user_id"
}
```

#### PUT /api/matching/settings
マッチング設定更新（管理者）

**リクエストボディ**:
```json
{
  "businessSynergyWeight": 60,
  "technicalComplementarityWeight": 40
}
```

### 2.4 オファーAPI

#### GET /api/offers
オファー一覧取得

**クエリパラメータ**:
- `senderCompanyId`: 送信企業ID
- `recipientUserId`: 受信ユーザーID
- `status`: ステータス
- `startDate`: 開始日
- `endDate`: 終了日
- `page`: ページ番号
- `limit`: 1ページあたりの件数

**レスポンス**:
```json
{
  "offers": [
    {
      "id": "uuid",
      "senderCompany": {
        "id": "uuid",
        "name": "企業名",
        "logo": "url"
      },
      "recipientUser": {
        "id": "uuid",
        "name": "ユーザー名",
        "email": "user@example.com"
      },
      "type": "business_alliance",
      "relatedIssue": "新規顧客獲得",
      "deadline": "2024-12-31",
      "proposal": "提案内容",
      "status": "pending",
      "createdAt": "2023-10-27T10:30:00Z"
    }
  ],
  "total": 50,
  "page": 1,
  "limit": 20
}
```

#### POST /api/offers
オファー送信

**リクエストボディ**:
```json
{
  "recipientUserId": "uuid",
  "type": "business_alliance",
  "relatedIssue": "新規顧客獲得",
  "deadline": "2024-12-31",
  "proposal": "提案内容"
}
```

**レスポンス**:
```json
{
  "id": "uuid",
  "status": "pending",
  "createdAt": "2023-10-27T10:30:00Z"
}
```

#### PUT /api/offers/:id/status
オファーステータス更新

**リクエストボディ**:
```json
{
  "status": "accepted"
}
```

#### GET /api/offers/export
オファー履歴CSVエクスポート（管理者）

**クエリパラメータ**:
- `startDate`: 開始日
- `endDate`: 終了日
- `status`: ステータス

**レスポンス**: CSVファイル

### 2.5 チャットAPI

#### GET /api/chat/threads
チャットスレッド一覧取得

**レスポンス**:
```json
{
  "threads": [
    {
      "id": "uuid",
      "company": {
        "id": "uuid",
        "name": "企業名",
        "logo": "url"
      },
      "matchScore": 92,
      "status": "pending",
      "relatedIssue": "新規顧客獲得",
      "lastMessage": "最後のメッセージ",
      "lastMessageTime": "2023-10-27T10:45:00Z",
      "unreadCount": 2
    }
  ]
}
```

#### GET /api/chat/threads/:id
スレッド詳細取得（メッセージ一覧含む）

**レスポンス**:
```json
{
  "id": "uuid",
  "company": {
    "id": "uuid",
    "name": "企業名",
    "logo": "url"
  },
  "relatedIssue": "新規顧客獲得",
  "messages": [
    {
      "id": "uuid",
      "senderType": "company",
      "senderId": "uuid",
      "content": "メッセージ内容",
      "isRead": true,
      "createdAt": "2023-10-27T10:42:00Z"
    }
  ]
}
```

#### POST /api/chat/threads
スレッド作成

**リクエストボディ**:
```json
{
  "companyId": "uuid",
  "relatedIssue": "新規顧客獲得"
}
```

#### POST /api/chat/threads/:id/messages
メッセージ送信

**リクエストボディ**:
```json
{
  "content": "メッセージ内容"
}
```

**レスポンス**:
```json
{
  "id": "uuid",
  "content": "メッセージ内容",
  "senderType": "user",
  "senderId": "uuid",
  "isRead": false,
  "createdAt": "2023-10-27T11:00:00Z"
}
```

#### PUT /api/chat/messages/:id/read
メッセージ既読更新

#### GET /api/chat/threads/:id/messages
メッセージ一覧取得

**クエリパラメータ**:
- `page`: ページ番号
- `limit`: 1ページあたりの件数

### 2.6 記事API

#### GET /api/articles
記事一覧取得

**クエリパラメータ**:
- `category`: カテゴリー
- `sort`: ソート順（newest, popular）
- `page`: ページ番号
- `limit`: 1ページあたりの件数

**レスポンス**:
```json
{
  "articles": [
    {
      "id": "uuid",
      "title": "記事タイトル",
      "category": "DX推進",
      "thumbnail": "url",
      "date": "2023-10-27",
      "views": 100,
      "likes": 50
    }
  ],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

#### GET /api/articles/:id
記事詳細取得

#### POST /api/articles/generate
記事生成

**リクエストボディ**:
```json
{
  "sourceFile": "base64_encoded_file",
  "fileType": "text|audio",
  "tone": "professional|casual|informative",
  "targetKeyword": "AI in Business"
}
```

**レスポンス**:
```json
{
  "id": "uuid",
  "title": "生成された記事タイトル",
  "content": "記事内容",
  "seoScore": 88,
  "status": "draft"
}
```

#### PUT /api/articles/:id
記事更新

**リクエストボディ**:
```json
{
  "title": "記事タイトル",
  "content": "記事内容",
  "status": "published"
}
```

#### DELETE /api/articles/:id
記事削除

### 2.7 ランキングAPI

#### GET /api/ranking
企業ランキング取得

**クエリパラメータ**:
- `limit`: 取得件数（デフォルト: 10）

**レスポンス**:
```json
{
  "rankings": [
    {
      "rank": 1,
      "company": {
        "id": "uuid",
        "name": "企業名",
        "logo": "url"
      },
      "cultiveScore": 95,
      "likes": 1204,
      "views": 8500
    }
  ]
}
```

#### GET /api/ranking/company/:id/trend
企業のスコア推移取得

**クエリパラメータ**:
- `startDate`: 開始日
- `endDate`: 終了日

**レスポンス**:
```json
{
  "trend": [
    {
      "date": "2023-01",
      "score": 60
    },
    {
      "date": "2023-02",
      "score": 75
    }
  ]
}
```

#### POST /api/ranking/company/:id/like
企業にいいね

#### POST /api/ranking/company/:id/view
企業閲覧（スコア加算）

### 2.8 ダッシュボードAPI

#### GET /api/dashboard/stats
ダッシュボード統計取得

**レスポンス**:
```json
{
  "matches": {
    "count": 128,
    "changePercent": 5
  },
  "offers": {
    "count": 16,
    "changePercent": 2
  },
  "articles": {
    "count": 5,
    "changePercent": -1
  },
  "recentOffers": [
    {
      "id": "uuid",
      "company": {
        "name": "企業名",
        "logo": "url"
      },
      "position": "職種",
      "status": "pending"
    }
  ],
  "recommendedCompanies": [
    {
      "id": "uuid",
      "name": "企業名",
      "description": "説明",
      "matchScore": 92
    }
  ],
  "categoryRecommendations": {
    "財務": [...],
    "営業": [...],
    "採用・人材紹介": [...],
    "DX": [...],
    "マーケ": [...],
    "組織": [...]
  }
}
```

#### GET /api/dashboard/notifications
通知一覧取得

**レスポンス**:
```json
{
  "notifications": [
    {
      "id": "uuid",
      "type": "system_maintenance",
      "title": "[重要] システムメンテナンスのお知らせ",
      "message": "メンテナンス内容",
      "isRead": false,
      "createdAt": "2023-10-26T00:00:00Z"
    }
  ]
}
```

#### POST /api/dashboard/support
サポート連絡送信

**リクエストボディ**:
```json
{
  "message": "問い合わせ内容"
}
```

### 2.9 管理者API

#### GET /api/admin/dashboard/stats
管理者ダッシュボード統計取得

**レスポンス**:
```json
{
  "totalCompanies": 150,
  "monthlyActiveUsers": 1200,
  "totalMatchings": 500,
  "totalOffers": 300,
  "reportCount": 50,
  "matchingTrend": [
    {
      "date": "2023-10-01",
      "count": 10
    }
  ],
  "alerts": [
    {
      "id": "uuid",
      "type": "warning",
      "message": "アラートメッセージ"
    }
  ],
  "activityLogs": [
    {
      "id": "uuid",
      "user": {
        "name": "ユーザー名"
      },
      "action": "company_updated",
      "createdAt": "2023-10-27T10:00:00Z"
    }
  ]
}
```

#### GET /api/admin/companies
企業管理一覧取得

**クエリパラメータ**:
- `search`: 検索キーワード
- `status`: ステータス
- `page`: ページ番号
- `limit`: 1ページあたりの件数

#### GET /api/admin/companies/:id
企業詳細取得（管理者用）

#### PUT /api/admin/companies/:id
企業情報更新（管理者）

#### DELETE /api/admin/companies/:id
企業削除（管理者）

#### GET /api/admin/companies/:id/ai-issues
AI課題抽出結果取得

**レスポンス**:
```json
{
  "extractedIssues": [
    {
      "category": "新規顧客獲得",
      "description": "抽出された課題",
      "solutions": [
        {
          "title": "解決策タイトル",
          "description": "解決策の詳細"
        }
      ]
    }
  ]
}
```

#### GET /api/admin/users
ユーザー一覧取得

**クエリパラメータ**:
- `search`: 検索キーワード
- `page`: ページ番号
- `limit`: 1ページあたりの件数

#### PUT /api/admin/users/:id
ユーザー情報更新（管理者）

#### GET /api/admin/matching/history
マッチング履歴取得（管理者）

#### PUT /api/admin/matching/:id
マッチング操作（推薦・停止）

#### GET /api/admin/offers
オファー履歴取得（管理者）

#### GET /api/admin/content/articles
記事一覧取得（管理者）

#### PUT /api/admin/content/articles/:id
記事更新（管理者）

#### DELETE /api/admin/content/articles/:id
記事削除（管理者）

## 3. 認証・セキュリティ

### 3.1 認証方式

- **JWT (JSON Web Token)**: トークンベースの認証
- **トークン有効期限**: 24時間（リフレッシュトークンで延長可能）
- **パスワード**: bcryptでハッシュ化

### 3.2 認証ヘッダー

```
Authorization: Bearer <jwt_token>
```

### 3.3 権限管理

- **一般ユーザー**: 自分のデータのみアクセス可能
- **管理者**: すべてのデータにアクセス可能
- **企業**: 自社のデータとマッチング情報にアクセス可能

## 4. エラーハンドリング

### 4.1 エラーレスポンス形式

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "エラーメッセージ",
    "details": {}
  }
}
```

### 4.2 エラーコード

- `400`: Bad Request（リクエストエラー）
- `401`: Unauthorized（認証エラー）
- `403`: Forbidden（権限エラー）
- `404`: Not Found（リソースが見つからない）
- `409`: Conflict（競合エラー）
- `422`: Unprocessable Entity（バリデーションエラー）
- `500`: Internal Server Error（サーバーエラー）

## 5. パフォーマンス最適化

### 5.1 ページネーション

すべての一覧取得APIでページネーションを実装

### 5.2 キャッシュ戦略

- **Redis**: 頻繁にアクセスされるデータのキャッシュ
- **キャッシュTTL**: 
  - 企業一覧: 5分
  - ランキング: 10分
  - マッチング結果: 1時間

### 5.3 データベース最適化

- 適切なインデックスの設定
- クエリの最適化
- N+1問題の回避（Eager Loading）

## 6. ファイルアップロード

### 6.1 対応形式

- **財務諸表**: PDF, Excel (.xlsx, .xls)
- **記事ソース**: テキスト (.txt), 音声 (.mp3, .wav)
- **画像**: ロゴ、サムネイル (JPEG, PNG)

### 6.2 ストレージ

- **オブジェクトストレージ**: AWS S3, Google Cloud Storage等
- **ファイルサイズ制限**: 10MB

## 7. リアルタイム機能

### 7.1 WebSocket

- **エンドポイント**: `ws://api.example.com/chat`
- **用途**: リアルタイムチャット
- **イベント**:
  - `message:new`: 新規メッセージ
  - `message:read`: メッセージ既読
  - `offer:status_changed`: オファーステータス変更

## 8. バッチ処理

### 8.1 定期実行タスク

- **マッチングスコア再計算**: 毎日0時
- **Cultive Score更新**: 毎時
- **レポート生成**: 毎月1日
- **古いデータのアーカイブ**: 毎週日曜日

## 9. ログ・監視

### 9.1 ログレベル

- ERROR: エラー
- WARN: 警告
- INFO: 情報
- DEBUG: デバッグ

### 9.2 監視項目

- APIレスポンスタイム
- エラー率
- データベース接続数
- アクティブユーザー数

---

**最終更新日**: 2024年
**バージョン**: 1.0.0

