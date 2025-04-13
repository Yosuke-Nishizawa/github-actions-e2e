# github-actions-e2e
GithubActions X E2E 学習用リポジトリ

## このリポジトリの意味合い
GithubActionsでE2Eテストを実行検証する目的。

## 技術スタック
- TypeScript
- Nuxt.js
- Playwright

## 構成
フロントとE2Eがdocker-composeでそれぞれserviceとして定義されている。

## プロジェクト構造
```
.
├── docker-compose.yml     # Docker Compose設定
├── frontend/              # Nuxt.jsフロントエンド
│   ├── Dockerfile
│   ├── nuxt.config.js
│   ├── package.json
│   └── pages/
│       └── index.vue      # ToDoリストアプリ
├── e2e/                   # E2Eテスト
│   ├── Dockerfile
│   ├── package.json
│   ├── playwright.config.ts
│   └── tests/
│       └── todo.spec.ts   # ToDoリストのテスト
└── .github/
    └── workflows/
        └── e2e.yml        # GitHub Actionsワークフロー
```

## セットアップと実行方法

### 開発環境の起動
```bash
# Docker Composeでサービスを起動
docker-compose up -d

# フロントエンドのログを確認
docker-compose logs -f frontend

# ブラウザで http://localhost:3000 にアクセス
```

### テストの実行
```bash
# E2Eテストを実行
docker-compose exec e2e npm test

# デバッグモードでテスト実行
docker-compose exec e2e npm run test:debug
```

### GitHub Actions
プルリクエストまたはmainブランチへのプッシュ時に自動的にE2Eテストが実行されます。テスト結果はGitHub Actionsのアーティファクトとして保存されます。

