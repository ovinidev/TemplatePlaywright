import { test, expect } from "@playwright/test";
import { env } from "@env/index";
import { doLogin } from "@utils/login";

test.beforeEach(async ({ page }) => {
  await doLogin(page);
});

test.describe("Home", () => {
  test("should be able to navigate to home", async ({ page }) => {
    await expect(page).toHaveURL(env.APP_BASE_URL);
  });
});
