import { expect, test } from "@playwright/test";

test.describe("ToDoリストのテスト", () => {
  test("ページが表示されること", async ({ page }) => {
    // ページに移動
    await page.goto("/");
    console.log("ページに移動しました");

    // HTMLが読み込まれたことを確認
    await page.waitForSelector("body", { timeout: 10000 });

    // bodyタグが存在することを確認
    const body = page.locator("body");
    await expect(body).toBeVisible();

    console.log("ページが表示されました");
  });
});
