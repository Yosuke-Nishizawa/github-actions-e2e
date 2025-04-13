import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 60000,
  retries: process.env.CI ? 2 : 1,
  use: {
    baseURL: process.env.BASE_URL || "http://frontend:3000",
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    navigationTimeout: 30000,
    actionTimeout: 30000,
    waitForNavigation: "networkidle",
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report" }],
    ["json", { outputFile: "playwright-report/results.json" }],
  ],
};

export default config;
