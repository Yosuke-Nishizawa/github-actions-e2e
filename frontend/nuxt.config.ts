// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 互換性の日付を設定
  compatibilityDate: "2023-07-05",

  // サーバーの設定
  server: {
    host: "0.0.0.0",
    port: 3000,
  },

  // すべてのリクエストを許可
  routeRules: {
    "/**": { cors: true },
  },

  // デバッグオプション
  debug: true,

  // アプリケーションの基本設定
  app: {
    head: {
      title: "GitHub Actions E2E",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "GitHub Actions E2E Test Project",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
